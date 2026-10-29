# 2026-10-29 成長ルーチン: Repilates・ルルト・DEP の「公式の全店舗一覧（都道府県別）」データを生成する。
# 元データ＝公式から curl した一覧（/tmp/g1029/*.json。取得手順は CLAUDE.md 2026-10-29 12:00 の節）。
#   Repilates: https://repilates.jp/studio/（営業中27店。オープン予定は含めない）
#   ルルト:    https://luluto.kabushikigaisya-rigakubody.co.jp/tenpo/（HTMLコメント内は除外・100店）
#   DEP:       https://dep-pilates.com/shop/（57店）＋各店舗ページの「アクセス」先頭と月額（エリアA/B/S の判定）
# ⚠️ 値を手で書き足さない。更新するときは公式一覧を取り直して丸ごと置き換える。
import json, re, sys
D = '/tmp/g1029/'
R = sys.argv[1]
ASOF = '2026年10月29日'
PREF_ORDER = ['北海道','青森県','岩手県','宮城県','秋田県','山形県','福島県','茨城県','栃木県','群馬県','埼玉県','千葉県','東京都','神奈川県','新潟県','富山県','石川県','福井県','山梨県','長野県','岐阜県','静岡県','愛知県','三重県','滋賀県','京都府','大阪府','兵庫県','奈良県','和歌山県','鳥取県','島根県','岡山県','広島県','山口県','徳島県','香川県','愛媛県','高知県','福岡県','佐賀県','長崎県','熊本県','大分県','宮崎県','鹿児島県','沖縄県']

def esc(s): return json.dumps(s, ensure_ascii=False)
def sp(s): return re.sub(r'\s+', ' ', (s or '').replace('　', ' ')).strip()

hdr = '''// {title}
// 2026-10-29 に公式から取得（{n}店舗）。都道府県は公式一覧の見出し（または住所）による。
// ⚠️ 値を手で書き足さない。更新するときは公式一覧を取り直して丸ごと置き換える（scripts/gen-official-store-lists-20261029.py の手順）。
import type {{ OfficialStoreList }} from './official-store-list-type'

export const {const}: OfficialStoreList = {{
  asOf: '{asof}',
  sourceLabel: {label},
  sourceUrl: {src},
  extraLabel: {extra},
  accessLabel: {accl},
  stores: [
'''
def write(fn, const, title, label, src, extra, accl, stores):
    out = hdr.format(title=title, n=len(stores), const=const, asof=ASOF, label=esc(label), src=esc(src),
                     extra=esc(extra) if extra else 'undefined', accl=esc(accl) if accl else 'undefined')
    for s in stores:
        out += '    { pref: %s, name: %s, access: %s, address: %s, url: %s%s },\n' % (
            esc(s['pref']), esc(s['name']), esc(s['access']), esc(s['address']), esc(s['url']),
            (', extra: ' + esc(s['extra'])) if s.get('extra') else '')
    out += '  ],\n}\n'
    open(R + '/data/' + fn, 'w').write(out)
    print(fn, len(stores))

# --- Repilates（営業中のみ。公式一覧に「アクセス」欄は無い＝営業時間を出す） ---
rep = [r for r in json.load(open(D + 'rep-rows.json')) if not r['upcoming']]
rs = []
for r in rep:
    addr = sp(' '.join(r['addr']))
    rs.append(dict(pref=r['pref'], name='Repilates ' + r['name'], access=sp(r['hours']).replace('~', '〜'), address=addr, url=r['url']))
rs.sort(key=lambda s: PREF_ORDER.index(s['pref']))
write('repilates-official-stores.ts', 'REPILATES_OFFICIAL',
      'Repilates 公式「STUDIO（店舗を探す）」（https://repilates.jp/studio/）の営業中の全店（オープン予定は含めない）',
      'Repilates公式 店舗一覧', 'https://repilates.jp/studio/', None, '営業時間（公式の一覧）', rs)

# --- ルルト（公式一覧の住所・アクセス欄。体験の受付状況は載せない＝横浜店の表記が判断待ちのため） ---
lu = json.load(open(D + 'lul-rows.json'))
ls = []
for r in lu:
    nm = sp(r['name']).replace('本八幡店 2026年11月1日OPEN', '本八幡店（2026年11月1日オープン予定）')
    addr = sp(r['address'])
    if not addr.startswith(r['pref']): addr = r['pref'] + addr
    ls.append(dict(pref=r['pref'], name=nm, access=sp(r['access']), address=addr, url=r['url']))
ls.sort(key=lambda s: PREF_ORDER.index(s['pref']))
write('luluto-official-stores.ts', 'LULUTO_OFFICIAL',
      'ルルト 公式「体験予約・店舗一覧」（https://luluto.kabushikigaisya-rigakubody.co.jp/tenpo/）の国内全店（本八幡店＝2026年11月1日オープン予定を含む）',
      'ルルト公式 体験予約・店舗一覧', 'https://luluto.kabushikigaisya-rigakubody.co.jp/tenpo/', None, None, ls)

# --- DEP（一覧の住所＋各店舗ページのアクセス先頭・月額でエリア判定） ---
AREA = {'14,800': 'エリアA（月2回 14,800円〜）', '17,000': 'エリアB（月2回 17,000円〜）', '19,200': 'エリアS（月2回 19,200円〜）'}
FIX = {  # 自動整形で崩れたものだけ、各店舗ページの原文どおりに直す
    '埼玉店': '東武野田線 東岩槻駅から 徒歩1分',
    '新潟店': '新潟駅南口から 1.3km、徒歩17分、車で5分',
    'Relively 星ヶ丘店': '地下鉄星ヶ丘駅 三越連絡路の出口から 30m、徒歩1分',
    '愛知春日井店': 'JR春日井駅北口から 車で8分',
    '宮崎店': '宮崎駅東口から 約1.5km、車で約5分、徒歩で約12分',
    '長野松本店Noah': '松本駅お城口（東口）から 1.2km、徒歩16分、車で5分',
    'Resho 元町店': 'JR元町駅西出口から 300m、徒歩5分',
    '山形店': '山形駅西口から 約3.6km、車で13分程',
    '郡山店': 'JR郡山駅西口から 約3km、車で11分程',
    '松山店 鷹子スタジオ': '',
}
def dep_access(acc):
    acc = sp(acc); acc = re.sub(r' \d+$', '', acc)
    if 'から' not in acc and 'より' not in acc: return ''
    m = re.match(r'(.*?)(?:より|から).*?(?:経路|道順|道のり|ご案内).*?。\s*(.*)', acc)
    if not m: return acc
    o = m.group(1).strip().strip('「」'); rest = re.split(r'(?<=。)', m.group(2))[0]
    for w in ('距離は', '距離', '所要時間は', '所用時間は', 'です', '。'): rest = rest.replace(w, '')
    return f'{o}から {rest.strip(" 、")}'
de = json.load(open(D + 'dep-rows.json'))
ds = []
for r in de:
    nm = re.sub(r'\s*(体験無料.*|〒.*)$', '', sp(r['name'])).strip()
    addr = sp(r['address']); pref = r['pref']
    if pref == '?':
        pref = '岡山県' if nm == '倉敷店' else '北海道'
        addr = pref + addr
    acc = FIX.get(nm, None)
    if acc is None: acc = dep_access(r['acc_raw'])
    ex = AREA.get(r['price'][0]) if r.get('price') else None
    ds.append(dict(pref=pref, name='ピラティススタジオDEP ' + nm, access=acc, address=addr, url=r['url'], extra=ex or '店舗ページに月額の記載なし'))
ds.sort(key=lambda s: PREF_ORDER.index(s['pref']))
write('dep-official-stores.ts', 'DEP_OFFICIAL',
      'ピラティススタジオDEP 公式「店舗一覧・ご予約」（https://dep-pilates.com/shop/）の全店と、各店舗ページの「アクセス」・月額（料金エリア）',
      'DEP公式 店舗一覧と各店舗ページ', 'https://dep-pilates.com/shop/', '料金エリア（店舗ページの月額）', None, ds)
