#!/usr/bin/env python3
"""ブルーオーシャン横展開（2026-06-14）。「Mee単独だが低競合」駅を、駅すぐMee＋
近隣クラスタ(正直な距離表記)＋同県RelatedAreas相互リンクで構成。冪等。
4体調査エージェントが公式確認した実在スタジオのみ。距離は各駅から正直に明記。
"""
import json, re, os
from pathlib import Path
os.chdir(os.path.expanduser("~/projects/pilates-biyori"))

B = json.load(open('data/new-brands-202606.json'))['brands']
MEE = json.load(open('data/new-brands-mee-stores.json'))['stores']
MEE_DESC = '女性専用のマシンピラティス専門スタジオ。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯。'
RIN = '/images/studios/rintosull.webp'
ZP = '/images/studios/zenplace.webp'
LIFE_PRICE = '月2回8,800円／月4回14,800円／通い放題24,600円（5人制少人数・税込）'
MEE_OVERRIDE = {'雑餉隈': {'price': LIFE_PRICE}, '下大利': {'price': LIFE_PRICE}}

def s(v): return v.replace("'", "\\'")

def mee(station):
    for store, pref, st, walk, addr in MEE:
        if st == station:
            nm = f"Pilates Mee {store}" if store.startswith('Life') else f"Pilates Mee{store}"
            price = LIFE_PRICE if store.startswith('Life') else B['pilates-mee']['price']
            d = dict(name=nm, officialUrl=B['pilates-mee']['officialUrl'], image='/images/studios/pilates-mee.webp',
                     price=price, trial=B['pilates-mee']['trial'], features=B['pilates-mee']['features'],
                     description=MEE_DESC + f"{st}駅から{walk}。", access=f"{st}駅から{walk}", address=addr)
            if station in MEE_OVERRIDE: d.update(MEE_OVERRIDE[station])
            return d
    raise KeyError(station)

def co(name, url, price, trial, features, desc, access, addr, image=None):
    return dict(name=name, officialUrl=url, image=image, price=price, trial=trial,
                features=features, description=desc, access=access, address=addr)

AREAS = [
 {'slug':'keisei-takasago','name':'京成高砂','pref':'東京都','region':'関東','station':'京成高砂駅',
  'lead':'京成本線・成田スカイアクセス・京成金町線が交わる京成高砂は葛飾区のエリア。駅すぐはセミパーソナルのPilates Mee京成高砂店、本格的に比較するなら京成金町線で数分の金町駅周辺にマシンピラティス専門店が集まります。',
  'studios':[
   mee('京成高砂'),
   co('ASFiT 金町店','https://pilates-asfit.tokyo/','月4回 16,000円〜（月8回・受け放題あり）','体験は公式サイト参照',
      ['マシンピラティス','完全個室','マンツーマン','医療提携'],'個室でマンツーマン指導の医療提携マシンピラティス＆パーソナルジム。目的・運動経験に合わせたメニュー設計。',
      '京成高砂駅から京成金町線2駅・京成金町駅徒歩3分／JR金町駅徒歩4分（高砂から電車で約5〜6分）','東京都葛飾区金町（詳細は公式サイト参照）'),
   co('COCO PILATES（ココピラティス）金町','https://co-co-pilates.com/','料金は公式サイト参照','体験レッスンあり（公式サイト参照）',
      ['マシンピラティス','リフォーマー','初心者専門','少人数(最大3名)'],'初心者専門のリフォーマー専門スタジオ。パーソナル・ペア・少人数グループの3形式で継続しやすさを重視。',
      '京成高砂駅から京成金町線2駅・金町駅徒歩4分（高砂から電車で約5〜6分）','東京都葛飾区金町（詳細は公式サイト参照）'),
   co('nu pilates studio 金町','https://www.nupilatesstudio.com/','プライベート60分8,800円／体験60分6,300円（入会金11,000円・初回5,500円）','体験 6,300円',
      ['マシンピラティス','STOTT PILATES','プライベート','グループ'],'STOTT PILATESメソッド準拠の専用マシンを使うスタジオ。プライベート・グループ両対応で初心者も安心。',
      '京成高砂駅から京成金町線2駅・金町駅徒歩5分（高砂から電車で約5〜6分）','東京都葛飾区金町（詳細は公式サイト参照）'),
   co('SAYS GYM 立石店','https://saysgym.com/','月4回プラン〜（公式参照・パーソナルオプションあり）','体験は公式サイト参照',
      ['マシンピラティス','少人数(最大5名)','初心者向け','40〜50代多い'],'少人数制のマシンピラティス。初心者プログラムに注力し幅広い年齢層が通う。',
      '京成高砂駅から青砥乗換で京成立石駅・徒歩3分（高砂から計約5分）','東京都葛飾区立石（詳細は公式サイト参照）'),
  ]},
 {'slug':'shin-akitsu','name':'新秋津','pref':'東京都','region':'関東','station':'新秋津駅',
  'lead':'JR武蔵野線の新秋津は東村山市のエリアで、徒歩5分の乗換駅・秋津駅（西武池袋線）と一体です。駅すぐはPilates Mee、本格的な比較は1駅隣の清瀬や西武線ハブの所沢駅周辺にマシンピラティス専門店が集まります。',
  'studios':[
   mee('新秋津'),
   co('マシンピラティスWELL-FIT清瀬店','https://well-fit-gym.com/pilates-kiyose/','料金は公式サイト参照（若返りコース等）','体験 通常3,300円',
      ['完全個室','マンツーマン','子連れ可','完全予約制'],'秋津から1駅の清瀬にある完全個室パーソナル型スタジオ。ベビーサークル完備で子連れも通える。',
      '秋津駅から西武池袋線1駅・清瀬駅徒歩4分（新秋津/秋津から乗車1駅＋徒歩4分）','東京都清瀬市（詳細は公式サイト参照）'),
   co('pilates K 所沢店','https://pilates-k.jp/studio/saitama/tokorozawa','月額13,420〜18,920円／都度2,200円〜','体験 0円',
      ['女性専用','リフォーマー専門','グループ','ボディメイク特化'],'女性専用・リフォーマー専門のグループマシンピラティス。所沢ハブの駅近店。',
      '秋津駅から所沢方面へ乗車・所沢駅西口徒歩2分（新秋津/秋津から乗車＋徒歩2分）','埼玉県所沢市（詳細は公式サイト参照）'),
   co('CLUB PILATES 所沢店','https://clubpilates.co.jp/studio/tokorozawa/','月4回11,990円／月8回21,890円／通い放題36,190円（入会金5,500円）','体験 無料',
      ['世界最大級チェーン','最大12名グループ','プライベート対応','初心者〜上級者'],'所沢駅最寄りの世界的チェーン。レベル別レッスンが豊富で間口が広い。',
      '秋津駅から所沢方面へ乗車・所沢駅西口徒歩1分（新秋津/秋津から乗車＋徒歩1分）','埼玉県所沢市（詳細は公式サイト参照）'),
   co('zen place ピラティス 所沢','https://www.zenplace.co.jp/studios/pilates-tokorozawa','マットグループ 月14,960円／リフォーマーグループ 月15,400円','体験は公式サイト参照',
      ['マット＋マシン(リフォーマー)','グループ／プライベート','ピラティス専門','他店利用可'],'マットとマシン（リフォーマー）のグループ・プライベートを提供するピラティス専門スタジオ。他店利用にも対応。',
      '秋津駅から所沢方面へ乗車・所沢駅西口徒歩4分（新秋津/秋津から乗車＋徒歩4分）','埼玉県所沢市（詳細は公式サイト参照）',ZP),
  ]},
 {'slug':'zasshonokuma','name':'雑餉隈','pref':'福岡県','region':'九州','station':'雑餉隈駅',
  'lead':'西鉄天神大牟田線の雑餉隈は福岡市博多区のエリアで、JR南福岡駅とも徒歩圏。駅近はPilates Mee Life雑餉隈店、本格的な比較は1駅隣の春日原・井尻にマシンピラティス専門店があります。',
  'studios':[
   mee('雑餉隈'),
   co('ピラティススタジオ ルルト 大野城春日原店','https://luluto.kabushikigaisya-rigakubody.co.jp/tenpo/pilates_onojokasugabaru/','月3回29,700円〜月8回72,000円（入会金22,000円・体験当日入会で無料）','初回体験 1,000円',
      ['理学療法士監修','マンツーマン専門','マシンピラティス','姿勢改善'],'理学療法士が監修するマンツーマン専門のマシンピラティス。医学的アプローチで姿勢・不調にアプローチ。',
      '雑餉隈駅から西鉄で1駅・春日原駅徒歩2分（雑餉隈/南福岡からは徒歩圏外・1駅利用が現実的）','福岡県大野城市雑餉隈町4丁目'),
   co('マシンピラティススタジオ best pilates','https://bestsupport-studio.com/pilates/','1回7,700円／4回26,400円／8回35,200円','体験 5,500円',
      ['リフォーマー','マシンピラティス専門','整体系運営','少人数'],'リフォーマーを使うマシンピラティス専門スタジオ。整体・スポーツマッサージ系の運営。',
      '雑餉隈駅から西鉄で1駅・春日原駅徒歩7分（雑餉隈/南福岡からは1駅利用が現実的）','福岡県春日市春日原東町'),
   co('井尻ダンス&フィットネス I studio','https://istudio-fukuoka.com/','月額5,500〜7,000円（入会金10,000円）','体験 500円',
      ['マット＆マシン両対応','初心者中心','アットホーム','地域密着'],'ダンス・ヨガも併設する地域密着型スタジオでマシンを含むピラティスを提供。初心者中心。',
      '雑餉隈駅から西鉄で1駅・井尻駅徒歩3分（雑餉隈からは1駅利用が現実的）','福岡県福岡市南区井尻4丁目'),
  ]},
 {'slug':'shimo-ori','name':'下大利','pref':'福岡県','region':'九州','station':'下大利駅',
  'lead':'西鉄天神大牟田線の下大利は福岡県大野城市のエリア。駅すぐはPilates Mee Life大野城店、本格的な比較は西鉄2駅の春日原駅周辺にマシンピラティス系スタジオが集まります。',
  'studios':[
   mee('下大利'),
   co('ピラティススタジオ ルルト 大野城春日原店','https://luluto.kabushikigaisya-rigakubody.co.jp/tenpo/pilates_onojokasugabaru/','月3回29,700円〜月8回72,000円（入会金22,000円・体験当日入会で無料）','初回体験 1,000円',
      ['理学療法士監修','マンツーマン専門','マシンピラティス','姿勢改善'],'理学療法士監修のマンツーマン専門マシンピラティス。反り腰・姿勢改善などオーダーメイド指導。',
      '下大利駅から西鉄で2駅・春日原駅東口徒歩2分（下大利からは電車利用が現実的）','福岡県大野城市雑餉隈町4丁目'),
   co('Body Hackers Lab 春日原・大野城店','https://bodyhackerslab.com/kasugabaru-onojou/','最安29,800円〜（平日昼通い放題・都度払いあり）','体験は公式サイト参照',
      ['リフォーマー完備','完全個室パーソナル','ピラティス併設','子連れ可'],'リフォーマー完備の完全個室パーソナルジム（ピラティス併設）。30日間全額返金保証あり。',
      '下大利駅から西鉄で2駅・春日原駅徒歩2分／JR春日駅徒歩5分','福岡県春日市春日原（詳細は公式サイト参照）'),
   co('GENKI! ピラティスUSA','https://pilatesusa.jimdofree.com/','料金は公式サイト参照','体験は公式サイト参照',
      ['マット＋マシン対応','完全予約制','40〜70代重点','アライメント/呼吸重視'],'マットとマシンに対応する完全予約制スタジオ。アライメントと呼吸を重視し年齢・経験を問わず通える。',
      '下大利駅から西鉄で2駅・春日原駅徒歩3分','福岡県春日市春日原（詳細は公式サイト参照）'),
  ]},
 {'slug':'gamo','name':'蒲生','pref':'埼玉県','region':'関東','station':'蒲生駅',
  'lead':'東武スカイツリーラインの蒲生は越谷市のエリアで、徒歩約10分の新越谷・南越谷（大型乗換駅）と一体です。駅近はPilates Mee蒲生店、本格的な比較は新越谷・南越谷駅前にマシンピラティス専門店が集まります。',
  'studios':[
   mee('蒲生'),
   co('マシンピラティススタジオ Rintosull 南越谷店','https://rintosull.jp/shop/saitama/minami-koshigaya/','月4回 8,800円／ライト13,800円／プレミアムフリー16,800円（運営管理費680円/月）','無料体験会あり',
      ['女性専用','リフォーマー','セミパーソナル','全国相互利用'],'LAVA系列の女性専用マシンピラティス専門。リフォーマー使用で通いやすい月額制。',
      '蒲生駅から1駅・新越谷/南越谷駅徒歩1分（蒲生から徒歩約12〜15分または電車1駅）','埼玉県越谷市南越谷（詳細は公式サイト参照）',RIN),
   co('パーソナルマシンピラティスSAKURA 南越谷・新越谷店','https://sakura-pilates.jp/studios/koshigaya/','月4回33,000円／月8回63,800円（入会金33,000円）','体験 5,500円',
      ['女性専用','完全個室マンツーマン','マシンピラティス専門','女性インストラクター'],'女性専用・完全個室マンツーマンのマシンピラティス専門。有資格者監修プログラム。',
      '蒲生駅から1駅・南越谷/新越谷駅徒歩1分（蒲生から徒歩約12〜15分または電車1駅）','埼玉県越谷市南越谷（詳細は公式サイト参照）'),
   co('exeed pilates 南越谷店','https://www.exeed-pilates-minamikoshigaya.com/','月額プランは公式参照','体験 60分5,500円',
      ['完全貸切','1対1','マシンピラティス×トレーニング','完全個室'],'マシンピラティスと筋トレを組み合わせた完全個室・1対1のパーソナルスタジオ。ボディメイク志向向け。',
      '蒲生駅から1駅・新越谷駅西口徒歩1分（蒲生から徒歩約12〜15分または電車1駅）','埼玉県越谷市南越谷（詳細は公式サイト参照）'),
  ]},
 {'slug':'chiba-chuo','name':'千葉中央','pref':'千葉県','region':'関東','station':'千葉中央駅',
  'lead':'京成千葉線の千葉中央は千葉市中央区のエリアで、葭川公園・千葉駅も徒歩圏。駅近のPilates Mee千葉中央店に加え、千葉中央〜千葉駅の富士見エリアにマシンピラティス専門店が集まる充実エリアです。',
  'studios':[
   mee('葭川公園'),
   co('ラピラティス千葉店（La pilates）','https://la-pilates.jp/studio/chiba/','月1回12,000円／月2回22,000円／月4回40,000円','初回体験 3,000円',
      ['整体×マシンピラティス','女性専用プライベート','マシン5台','肩こり・腰痛改善'],'骨膜整体とマシンピラティスを融合した女性専用プライベートスタジオ。初心者から経験者まで対応。',
      '千葉中央駅 徒歩4分（千葉駅 徒歩8分）','千葉県千葉市中央区富士見2-15-1 ワラビビル4F-C'),
   co('the SILK 千葉店','https://the-silk.co.jp/studios/chiba/chiba/','フル19,980円／スタンダード4 14,370円／ライト3 12,280円（月額）','初回体験 0円',
      ['女性専用','50分グループリフォーマー','PMA認定','手ぶら体験OK'],'明るい窓と化粧室を備えた女性専用スタジオ。PMA認定インストラクターによる50分グループレッスン。',
      '千葉中央駅から富士見エリア・千葉駅/京成千葉駅東口徒歩3分（千葉駅は千葉中央駅から徒歩10〜15分）','千葉県千葉市中央区富士見2-2-3 吉田興業第一ビル4F'),
   co('pilates K 千葉店','https://pilates-k.jp/studio/chiba-ken/chiba','マンスリー4 13,420円／8 16,170円／プレミアム18,920円（税込）','体験 0円',
      ['女性専用','リフォーマーグループ','17種プログラム','ボディメイク特化'],'富士見2丁目の女性専用マシンピラティス。17種類のボディメイクプログラムを展開。',
      '千葉中央駅から富士見エリア・千葉駅東口徒歩5分／京成千葉駅徒歩4分（千葉駅は千葉中央駅から徒歩10〜15分）','千葉県千葉市中央区富士見2-5-12 GRAND CENTRAL CHIBA 3F'),
   co('クラブピラティス千葉店（CLUB PILATES）','https://clubpilates.co.jp/studio/chiba/','EFT4 11,990円／EFT8 15,290円／通い放題18,590円（入会金5,500円）','体験 無料',
      ['世界1000店舗超','最大12名グループ','プライベート対応','初心者〜上級者'],'世界最大級のマシンピラティスチェーンの千葉店。レベル別のグループ／プライベートを提供。',
      'JR千葉駅 徒歩2分（千葉駅は千葉中央駅から徒歩10〜15分）','千葉県千葉市中央区新千葉2-3-3 グラディス千葉駅前1F'),
  ]},
 {'slug':'omachi-nishi-koen','name':'大町西公園','pref':'宮城県','region':'東北','station':'大町西公園駅',
  'lead':'仙台市地下鉄東西線の大町西公園は仙台市青葉区のエリアで、一番町商店街・仙台駅も徒歩圏。駅近のPilates Mee仙台店に加え、一番町・仙台駅周辺にマシンピラティス専門店が集まる充実エリアです。',
  'studios':[
   mee('大町西公園'),
   co('Two Three マシンピラティス専門スタジオ 仙台一番町店','https://twothree-pilates.co.jp/sendai/','料金は公式サイト参照','体験は公式サイト参照',
      ['少人数最大8名グループ','プライベート','タワー付リフォーマー','一番町'],'一番町の少人数制マシンピラティス専門スタジオ。グループとプライベートに対応。',
      '大町西公園駅から一番町エリア・徒歩約12〜15分（広瀬通駅徒歩2分）','宮城県仙台市青葉区一番町3-11-14 丸和ビル2F'),
   co('ピラティススタジオ DEP 仙台店 Calm','https://dep-pilates.com/shop/tohoku/sendai-calm/','月2回17,000円／月4回32,000円／月7回54,600円','初回体験 2,980円',
      ['完全個室','理学療法士中心','予防医学','マシンピラティス'],'完全個室で姿勢改善を重視するマシンピラティススタジオ。予防医学コンセプト。',
      '大町西公園駅から一番町エリア・徒歩約10〜13分（青葉通一番町駅南1出口徒歩1分）','宮城県仙台市青葉区一番町2-5-5 東一中央ビルC棟402'),
   co('zen place pilates 仙台','https://www.zenplace.co.jp/studios/pilates-sendai','マットグループ 月14,960円／リフォーマーグループ 月15,400円／プライベート月4回33,880円','体験は公式サイト参照',
      ['マット＋マシン(リフォーマー)','グループ／プライベート','ピラティス専門','他店利用可'],'マットとマシン（リフォーマー）のグループ・プライベートを提供するピラティス専門スタジオ。他店利用にも対応。',
      '大町西公園駅から仙台駅エリア・徒歩約15〜20分または東西線2駅（JR仙台駅徒歩3分）','宮城県仙台市青葉区中央1-6-27 仙信ビル3F',ZP),
   co('pilates K 仙台PARCO2店','https://pilates-k.jp/studio/miyagi/sendaiparco','月4回13,420円／月8回16,170円／プレミアム18,920円','体験は公式サイト参照',
      ['女性専用','音楽連動リフォーマーグループ','部位特化プログラム','駅近'],'女性専用の音楽連動マシンピラティス。部位特化プログラムが特徴。',
      '大町西公園駅から仙台駅エリア・徒歩約15〜18分または東西線2駅（地下鉄仙台駅南1出口徒歩3分）','宮城県仙台市青葉区中央3-7-5 仙台PARCO2 5F'),
  ]},
]

# slug衝突チェック
AREAS = [a for a in AREAS if not os.path.isdir(f"app/area/{a['slug']}")]
print("to generate:", [a['slug'] for a in AREAS])

def studio_ts(d):
    out = "      {\n" + f"        name: '{s(d['name'])}',\n"
    if d.get('officialUrl'): out += f"        officialUrl: '{d['officialUrl']}',\n"
    if d.get('image'): out += f"        image: '{d['image']}',\n"
    out += f"        price: '{s(d['price'])}',\n        trial: '{s(d['trial'])}',\n"
    out += f"        features: [{', '.join(repr(f).replace(chr(34),chr(39)) for f in d['features'])}],\n"
    out += f"        description: '{s(d['description'])}',\n        access: '{s(d['access'])}',\n        address: '{s(d['address'])}',\n      }},\n"
    return out

ts = open('data/area-studios.ts', encoding='utf-8').read()
added = 0
for a in AREAS:
    if f"'{a['slug']}':" in ts: continue
    block = (f"  '{a['slug']}': {{\n    name: '{a['name']}',\n    region: '{a['region']}',\n"
             f"    description: '{s(a['lead'])}',\n    studios: [\n" + ''.join(studio_ts(d) for d in a['studios']) + "    ],\n  },\n")
    m = re.search(r'\n\}\s*$', ts); ts = ts[:m.start()] + '\n' + block + ts[m.start():]; added += 1
open('data/area-studios.ts', 'w', encoding='utf-8').write(ts)
print("area-studios added:", added)

donor = open('app/area/hongo-sanchome/page.tsx', encoding='utf-8').read()
for a in AREAS:
    out = Path(f"app/area/{a['slug']}/page.tsx")
    if out.exists(): continue
    src = donor.replace('hongo-sanchome', a['slug'])
    src = src.replace('東京大学を擁する文京区の学術・医療エリア。本郷三丁目駅（都営大江戸線・東京メトロ丸ノ内線）が最寄り。主要駅は本郷三丁目駅。本ページでは本郷三丁目エリアで公式情報をもとに比較できるピラティススタジオをまとめました。',
        a['lead'] + f"主要駅は{a['station']}。本ページでは{a['name']}エリア（駅近＋徒歩圏・近隣駅）で公式情報をもとに比較できるピラティススタジオをまとめました。")
    src = src.replace('本郷三丁目駅', a['station']).replace('本郷三丁目', a['name'])
    src = src.replace('（東京都）', f"（{a['pref']}）").replace(',東京都,', f",{a['pref']},")
    src = src.replace('更新日 @2026年04月', '更新日 @2026年06月').replace('【2026最新】', '【2026年6月最新】')
    out.parent.mkdir(parents=True, exist_ok=True); out.write_text(src, encoding='utf-8')
print("pages generated:", len(AREAS))

pa_path = Path('data/prefectureAreas.ts'); pa = pa_path.read_text(encoding='utf-8')
added_pa = 0
for a in AREAS:
    if f"slug: '{a['slug']}'" in pa: continue
    blk = re.search(r"(\{\n    prefecture: '" + re.escape(a['pref']) + r"',\n    areas: \[\n)(.*?)(\n    \],\n  \},)", pa, re.DOTALL)
    line = f"      {{ slug: '{a['slug']}', name: '{a['name']}' }},"
    if not blk:
        # prefecture block missing → append new block before closing ]
        newblk = f"  {{\n    prefecture: '{a['pref']}',\n    areas: [\n{line}\n    ],\n  }},\n"
        m = re.search(r'\n\]\s*$', pa); pa = pa[:m.start()] + '\n' + newblk + pa[m.start():]
        print(f"  + new prefecture block: {a['pref']}")
    else:
        pa = pa[:blk.end(2)] + '\n' + line + pa[blk.end(2):]
    added_pa += 1
pa_path.write_text(pa, encoding='utf-8')
print("prefectureAreas added:", added_pa)
