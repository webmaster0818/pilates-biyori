import json,re,sys
D='/tmp/g1028/'
R=sys.argv[1]
def esc(s): return json.dumps(s,ensure_ascii=False)
def trunc(s,n=70):
    s=re.sub(r'\s+',' ',s or '').strip()
    return s if len(s)<=n else s[:n].rstrip('、。 ')+'…'
hdr='''// {title}
// {asof} に公式から取得（{n}店舗）。都道府県は公式一覧の見出し（または住所）による。
// ⚠️ 値を手で書き足さない。更新するときは公式一覧を取り直して丸ごと置き換える（scripts/gen-official-store-lists-20261028.py の手順）。
import type {{ OfficialStoreList }} from './official-store-list-type'

export const {const}: OfficialStoreList = {{
  asOf: '2026年10月28日',
  sourceLabel: {label},
  sourceUrl: {src},
  extraLabel: {extra},
  stores: [
'''
def write(fn,const,title,label,src,extra,stores):
    out=hdr.format(title=title,asof='2026-10-28',n=len(stores),const=const,label=esc(label),src=esc(src),extra=esc(extra) if extra else 'undefined')
    for s in stores:
        out+='    { pref: %s, name: %s, access: %s, address: %s, url: %s%s },\n'%(esc(s['pref']),esc(s['name']),esc(s['access']),esc(s['address']),esc(s['url']),(', extra: '+esc(s['extra'])) if s.get('extra') else '')
    out+='  ],\n}\n'
    open(R+'/data/'+fn,'w').write(out)
    print(fn,len(stores))

# zen place
PREF_ORDER=['北海道','青森県','岩手県','宮城県','秋田県','山形県','福島県','茨城県','栃木県','群馬県','埼玉県','千葉県','東京都','神奈川県','新潟県','富山県','石川県','福井県','山梨県','長野県','岐阜県','静岡県','愛知県','三重県','滋賀県','京都府','大阪府','兵庫県','奈良県','和歌山県','鳥取県','島根県','岡山県','広島県','山口県','徳島県','香川県','愛媛県','高知県','福岡県','佐賀県','長崎県','熊本県','大分県','宮崎県','鹿児島県','沖縄県']
z=json.load(open(D+'zen-sel.json'))
listacc={r['url'].split('/')[-1]:r['access'] for r in json.load(open(D+'zen-rows.json'))}
zs=[]
for o in z:
    nm=o['name']
    nm2='zen place pilates '+nm
    if o['slug']=='pilates-shinyokohama': nm2+='（2026年11月8日オープン予定）'
    addr=''.join(x for x in (o['a1'],o['a2'],o['a3']) if x and x!='null')
    addr=re.sub(r'\s+',' ',addr.replace('　',' ')).strip()
    if not addr.startswith(o['pref']): addr=o['pref']+addr
    zs.append(dict(pref=o['pref'],name=nm2,access=trunc(listacc.get(o['slug']) or (o['access'] if o['access']!='null' else '')),address=addr,url='https://www.zenplace.co.jp/studios/'+o['slug'],extra='グレード'+('01' if o['grade']=='1' else '02')))
zs.sort(key=lambda s:PREF_ORDER.index(s['pref']))  # stable: keeps official order within pref
write('zen-place-official-stores.ts','ZEN_PLACE_OFFICIAL','zen place 公式「スタジオ一覧」（https://www.zenplace.co.jp/studios）のピラティススタジオ全店（ヨガ専用店・オンラインを除く）','zen place公式 スタジオ一覧','https://www.zenplace.co.jp/studios','グレード',zs)

# club pilates
c=json.load(open(D+'cp-prices.json'))
cs=[]
for o in c:
    ex=('月4回 %s円／月8回 %s円／通い放題 %s円'%(f"{o['eft4']:,}",f"{o['eft8']:,}",f"{o['unl']:,}")) if o['eft4'] else '店舗ページに料金の記載なし'
    cs.append(dict(pref=o['pref'],name='CLUB PILATES '+o['name']+'店',access=trunc(o['access'].split('／')[0]),address=o['address'],url=o['url'],extra=ex))
write('club-pilates-official-stores.ts','CLUB_PILATES_OFFICIAL','CLUB PILATES 公式「スタジオ一覧」（https://clubpilates.co.jp/studio/）の国内全店と、各店舗ページの月会費（EFT4・EFT8・UNLIMITED）','CLUB PILATES公式 スタジオ一覧と各店舗ページ','https://clubpilates.co.jp/studio/','月会費（公式の店舗ページ）',cs)

# lava
l=json.load(open(D+'lava-rows.json'))
ls=[dict(pref=o['pref'],name='LAVA '+o['name'],access=trunc(o['access']),address=o['address'],url=o['url'],extra=o['type']) for o in l]
write('lava-machine-pilates-official-stores.ts','LAVA_MACHINE_PILATES_OFFICIAL','LAVA 公式「マシンピラティス」ページの「マシンピラティス開催店舗」（https://yoga-lava.com/service/special/machinepilates.html）と各店舗ページの住所・アクセス・スタジオ種別','LAVA公式 マシンピラティス開催店舗と各店舗ページ','https://yoga-lava.com/service/special/machinepilates.html','スタジオ種別',ls)
