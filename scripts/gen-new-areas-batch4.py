#!/usr/bin/env python3
"""新規エリアページ第4弾（11エリア・2026-06-13）。batch3と同方式。冪等。
大阪/愛知/千葉/茨城/福岡のバックログ。Mee＋実在併設スタジオ2件以上を確保できた駅のみ採用。
雑餉隈(該当なし)・酒田(1件)・大町西公園(Mee単独)・千葉中央/蒲生越谷/下大利(Mee単独)は今回見送り→次バッチ。
"""
import json
import re
import os
from pathlib import Path

ROOT = Path(__file__).parent.parent
os.chdir(ROOT)

B = json.load(open('data/new-brands-202606.json'))['brands']
MEE = json.load(open('data/new-brands-mee-stores.json'))['stores']
MEE_DESC = '女性専用のマシンピラティス専門スタジオ。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯。'
RIN = '/images/studios/rintosull.webp'
ZP = '/images/studios/zenplace.webp'
SOELU = '/images/studios/soelu-minamikoshigaya.webp'


def s(v):
    return v.replace("'", "\\'")


def studio_ts(d):
    out = "      {\n"
    out += f"        name: '{s(d['name'])}',\n"
    if d.get('officialUrl'):
        out += f"        officialUrl: '{d['officialUrl']}',\n"
    if d.get('image'):
        out += f"        image: '{d['image']}',\n"
    out += f"        price: '{s(d['price'])}',\n"
    out += f"        trial: '{s(d['trial'])}',\n"
    feats = ', '.join(f"'{s(f)}'" for f in d['features'])
    out += f"        features: [{feats}],\n"
    out += f"        description: '{s(d['description'])}',\n"
    out += f"        access: '{s(d['access'])}',\n"
    out += f"        address: '{s(d['address'])}',\n"
    out += "      },\n"
    return out


def mee_store(station_key):
    for store, pref, station, walk, addr in MEE:
        if station == station_key:
            nm = f"Pilates Mee {store}" if store.startswith('Life') else f"Pilates Mee{store}"
            return {
                'name': nm, 'officialUrl': B['pilates-mee']['officialUrl'],
                'image': '/images/studios/pilates-mee.webp',
                'price': '5人制少人数 月4回 14,800円〜（税込）' if store.startswith('Life') else B['pilates-mee']['price'],
                'trial': B['pilates-mee']['trial'], 'features': B['pilates-mee']['features'],
                'description': MEE_DESC + f"{station}駅から{walk}。",
                'access': f"{station}駅から{walk}", 'address': addr,
            }
    raise KeyError(station_key)


def co(name, url, price, trial, features, description, access, address, image=None):
    return dict(name=name, officialUrl=url, image=image, price=price, trial=trial,
                features=features, description=description, access=access, address=address)


AREAS = [
 {'slug':'miyakojima','name':'都島','pref':'大阪府','region':'近畿','station':'都島駅','lead':'大阪メトロ谷町線の都島は大阪市都島区の住宅エリア。駅徒歩1〜3分に女性専用グループ型と24時間併設型、セミパーソナルが揃います。','studios':[
   mee_store('都島'),
   co('ピラティスミラー 都島','https://www.konami.com/sportsclub/pilatesmirror/miyakojima/','月会費 11,000円（月6回）／チケット1回 2,750円（税込・入会金11,000円）','体験レッスン 通常2,200円→0円（女性限定・1名1回）',['女性専用','マシン（リフォーマー）','天井ミラー','最大7名少人数＋パーソナル'],'コナミスポーツ運営の女性専用マシンピラティス。天井ミラーで動きを確認できる少人数グループ。都島駅5番口徒歩1分。','谷町線 都島駅5番口 徒歩1分','大阪府大阪市都島区（詳細は公式サイト参照）'),
   co('SOELU（ソエル）都島店','https://lp.soelu.com/studio_new_miyakojima/index.html','スタンダード 7,678円／ピラティス4プラン 9,878円（税込月額・施設維持費550〜880円別）','初回1回 無料',['マシンピラティス＆マット','24時間営業','グループ'],'マシンピラティスのグループレッスンと24時間フィットネスを併設したスタジオ。都島駅5番出口徒歩3分。','都島駅5番出口 徒歩3分','大阪府大阪市都島区（詳細は公式サイト参照）',SOELU),
 ]},
 {'slug':'gamoyonchome','name':'蒲生四丁目','pref':'大阪府','region':'近畿','station':'蒲生四丁目駅','lead':'今里筋線・長堀鶴見緑地線の蒲生四丁目は大阪市城東区のエリア。駅徒歩1〜2分にセミパーソナル型と医師監修パーソナルが揃います。','studios':[
   mee_store('蒲生四丁目'),
   co('Dr. plus Fit 蒲生店','https://dp-fit.com/gym/gamo/','月2回 16,900円／月4回 27,900円（税込・入会金11,000円＋事務手数料5,500円）','体験トレーニング 0円（約80分）',['マシンピラティス','医師監修','完全パーソナル（マンツーマン）','男女共用'],'医師監修の完全マンツーマンのマシンピラティス。蒲生四丁目駅徒歩1分。','蒲生四丁目駅 徒歩1分','大阪府大阪市城東区今福西3-2-2'),
 ]},
 {'slug':'tsukamoto','name':'塚本','pref':'大阪府','region':'近畿','station':'塚本駅','lead':'JR東西線・神戸線の塚本は大阪市淀川区のエリア。駅徒歩5分にマシンピラティス＋整体のパーソナルと、40代以降向けの女性専用スタジオが揃います。','studios':[
   mee_store('塚本'),
   co('ピラティス&パーソナルジム LIBELTE（リベルテ）','https://libelte2025.com/','レギュラー50分 8,800円／グループ60分 13,200円（2〜3名・税込）','初回体験 6,600円',['マシンピラティス＋整体','国家資格者担当','パーソナル＋少人数','男女可'],'国家資格者が担当するマシンピラティス＋整体のスタジオ。パーソナル中心に少人数グループも対応。JR塚本駅徒歩5分。','JR塚本駅 徒歩5分','大阪府大阪市淀川区塚本（詳細は公式サイト参照）'),
   co("Studio Li'a（スタジオリア）",'https://studio-lia0708.amebaownd.com/','料金は公式サイト参照','体験は公式サイト参照',['女性専用（40代以降専門）','運動×温活×ボディケア','グループ＋パーソナルケア'],'40代以降の女性を専門とする女性専用スタジオ。運動・温活・ボディケアを組み合わせる。塚本駅最寄り。','塚本駅最寄り（徒歩分数は公式サイト参照）','大阪府大阪市淀川区塚本2-20-10 ライズビル201'),
 ]},
 {'slug':'fukaebashi','name':'深江橋','pref':'大阪府','region':'近畿','station':'深江橋駅','lead':'大阪メトロ中央線の深江橋は大阪市東成区のエリア。セミパーソナル型と、マシン・マット両対応の多機能スタジオが選択肢です。','studios':[
   mee_store('深江橋'),
   co('姿勢専門 ブティックスタジオ クラウン（Crown-studio）','https://www.crown-studio.net/','料金は公式サイト参照','体験メニューあり（料金は公式サイト参照）',['マシン＆マット両対応','姿勢改善専門','グループ＋パーソナル','男女可'],'姿勢改善を専門とする多機能スタジオ。マシン・マット両対応で、ヨガ等も併設。深江橋駅徒歩8分（千日前線 新深江駅も近接）。','深江橋駅 徒歩8分','大阪府大阪市東成区深江南1-6-10 シティハイツ201'),
 ]},
 {'slug':'anjo','name':'安城','pref':'愛知県','region':'中部','station':'安城駅','lead':'JR東海道線の安城は愛知県安城市の中心駅。駅周辺・ららぽーと安城に女性専用のマシンピラティスが揃い、車でも通いやすいエリアです。','studios':[
   mee_store('安城'),
   co('マシンピラティス Rintosull ららぽーと安城店','https://rintosull.jp/shop/aichi/lp_anjyo/','月4回 8,800円／プレミアムフリー 16,800円（税込月額）','無料体験会あり',['マシン（リフォーマー）','女性専用','グループ','駐車場あり'],'LAVA系列のマシンピラティス専門・女性専用スタジオ。ららぽーと安城3F、駐車場あり。JR安城駅徒歩10分。','JR安城駅 徒歩10分（ららぽーと安城3F）','愛知県安城市三河安城町（ららぽーと安城3F）',RIN),
   co('Pilates Studio excel 安城店','https://pilates-excel.com/studio/anjo/','マンスリー4 13,200円／フルタイム 15,950円（税込・初期費用別）','無料体験（約2時間・手ぶらOK）',['マシンピラティス','女性専用','グループ'],'女性専用のマシンピラティススタジオ。名鉄新安城駅徒歩8分（JR安城駅からは離れた住吉町エリア）。','名鉄新安城駅 徒歩8分','愛知県安城市住吉町3-926-15'),
 ]},
 {'slug':'shinsakaemachi','name':'新栄町','pref':'愛知県','region':'中部','station':'新栄町駅','lead':'名古屋市営地下鉄東山線の新栄町は栄・東桜に隣接する名古屋市中区のエリア。徒歩圏にピラティス専門スタジオが揃います。','studios':[
   mee_store('新栄町'),
   co('zen place pilates 栄','https://www.zenplace.co.jp/studios/pilates-sakae','マットグループ 月4回 10,450円／リフォーマーグループ 月4回 15,400円（税込）','体験あり（料金は公式サイト参照）',['マシン（リフォーマー/キャデラック）＋マット','グループ＋プライベート','男女利用可'],'ピラティス・ヨガ専門スタジオ。マットとマシン（リフォーマー）のグループ、プライベートのレッスンを提供し、エデュケーターが指導します。栄駅徒歩6分（新栄町駅も徒歩圏）。','栄駅徒歩6分（新栄町駅も徒歩圏）','名古屋市中区栄2-4-12 TOSHIN HONMACHIビル5F',ZP),
   co('Ciel Pilates さかえスタジオ','https://ciel-pilates.copin.co.jp/sakae','月4回 5,500円／月8回 11,000円（税込・入会金11,000円＋事務手数料3,300円）','体験 1,650円（40分・無料体験会あり）',['マシン（リフォーマー）','女性専用','最大8名少人数グループ'],'コパンスポーツクラブ栄内の女性専用マシンピラティス。最大8名の少人数グループ。栄5番出口徒歩5分（新栄町エリア）。','栄駅5番出口 徒歩5分','名古屋市中区新栄町2-9 スカイオアシス栄ビル'),
 ]},
 {'slug':'sakura','name':'佐倉','pref':'千葉県','region':'関東','station':'佐倉駅','lead':'JR・京成の佐倉は千葉県佐倉市のエリア。駅徒歩2分のセミパーソナル型と、ヨガ併設の地域密着スタジオが選択肢です。','studios':[
   mee_store('佐倉'),
   co('miroku yoga studio（ミロクヨガスタジオ）','http://mirokuyoga.com/','マンスリー4回 10,000円／8回 17,000円／プライベート70分 11,000円','初回1回体験 3,300円／3回チケット 5,000円',['ヨガ＆ピラティス','マット中心','少人数セミプライベート','男女可'],'ヨガとピラティスを提供する地域密着の隠れ家スタジオ。少人数セミプライベート制。佐倉市弥勒町、京成佐倉/JR佐倉駅エリア。','京成佐倉/JR佐倉駅エリア（徒歩分数は公式サイト参照）','千葉県佐倉市弥勒町248'),
 ]},
 {'slug':'moriya','name':'守谷','pref':'茨城県','region':'関東','station':'守谷駅','lead':'つくばエクスプレスの守谷は茨城県守谷市のエリア。駅徒歩2分のマシンパーソナルや女性専用スタジオが揃い、車でも通いやすい立地です。','studios':[
   mee_store('守谷'),
   co('Nピラティス 守谷店','https://npilates.jp/moriya-pilates2/','月2回 21,000円／月4回 39,900円／単発 12,000円（税込・入会金無料）','初回体験 3,000円（初回身体変化なしで全額返金保証）',['マシンピラティス専門','完全パーソナル（マンツーマン）','理学療法士監修'],'理学療法士監修のマシンピラティス専門・完全マンツーマンスタジオ。守谷駅徒歩2分。','守谷駅 徒歩2分','茨城県守谷市中央2-16-7 ウイング守谷ビルI 302'),
   co('女性専門ピラティススタジオ REVIA 守谷店','https://revia-pilates.com/','月2回 22,000円／月4回 36,080円（税込・入会金0円キャンペーン中）','体験 0円（カウンセリング＋姿勢評価＋体験セッション）',['女性専用','マシンピラティス','完全マンツーマン'],'2025年4月オープンの女性専用・完全マンツーマンのマシンピラティス。守谷市けやき台、駐車場あり。','守谷市けやき台（最寄駅は公式サイト参照・駐車場あり）','茨城県守谷市けやき台3-20-5 パルネット102'),
 ]},
 {'slug':'ohorikoen','name':'大濠公園','pref':'福岡県','region':'九州','station':'大濠公園駅','lead':'福岡市営地下鉄の大濠公園は福岡市中央区のエリア。駅徒歩1〜2分に女性専用パーソナル専門とセミパーソナル型が揃います。','studios':[
   mee_store('大濠公園'),
   co('Studio S.（女性専用パーソナルピラティス）','https://pilates-studios.info/','料金は公式サイト参照','体験レッスンあり（料金は公式サイト参照）',['女性専用','マシンピラティス','プライベート（パーソナル）専門','会員制'],'会員制・女性専用のパーソナルピラティス専門スタジオ。大濠公園駅徒歩2分。','地下鉄 大濠公園駅 徒歩2分','福岡県福岡市中央区大手門1-9-29 吉田歯科ビル4F'),
 ]},
 {'slug':'nishitetsu-futsukaichi','name':'西鉄二日市','pref':'福岡県','region':'九州','station':'西鉄二日市駅','lead':'西鉄天神大牟田線の西鉄二日市は筑紫野市の中心駅。駅東口徒歩1〜2分にマシンピラティスとホットピラティスのスタジオが揃います。','studios':[
   mee_store('西鉄二日市'),
   co('ホットヨガスタジオLAVA 西鉄二日市店','https://yoga-lava.com/shop/fukuoka/futsukaichi/','月4回 8,800円／ライト 10,800円／プレミアム 16,800円（税込月額）','体験 0円（60分）',['ホットピラティス（60分）あり','マット系グループ','女性専用'],'女性専用ホットヨガスタジオ。公式プログラムに「ホットピラティス」（60分）あり。西鉄二日市駅東口徒歩2分。','西鉄二日市駅 東口 徒歩2分','福岡県筑紫野市二日市北1-3-1 M・黒崎ビル3F'),
 ]},
 {'slug':'chayama','name':'茶山','pref':'福岡県','region':'九州','station':'茶山駅','lead':'福岡市営地下鉄七隈線の茶山は福岡市城南区のエリア。セミパーソナル型と、ヨガ・ピラティスのコンディショニングスタジオが選択肢です。','studios':[
   mee_store('茶山'),
   co('コンディショニングスタジオ スタジオナナ','https://studio7.jp/','料金は公式サイト参照','体験は公式サイト参照',['ヨガ・ピラティス','グループ＋パーソナル両対応'],'ヨガ・ピラティスなどを提供するコンディショニングスタジオ。城南区茶山エリア。','茶山駅エリア（徒歩分数は公式サイト参照）','福岡県福岡市城南区茶山6-11-41'),
 ]},
]


ts = open('data/area-studios.ts', encoding='utf-8').read()
added_ts = 0
for a in AREAS:
    if f"'{a['slug']}':" in ts:
        continue
    block = (
        f"  '{a['slug']}': {{\n    name: '{a['name']}',\n    region: '{a['region']}',\n"
        f"    description: '{s(a['lead'])}',\n    studios: [\n"
        + ''.join(studio_ts(d) for d in a['studios'])
        + "    ],\n  },\n"
    )
    m = re.search(r'\n\}\s*$', ts)
    ts = ts[:m.start()] + '\n' + block + ts[m.start():]
    added_ts += 1
open('data/area-studios.ts', 'w', encoding='utf-8').write(ts)
print('area-studios entries added:', added_ts)

donor = open('app/area/hongo-sanchome/page.tsx', encoding='utf-8').read()
added_pages = 0
for a in AREAS:
    out = Path(f"app/area/{a['slug']}/page.tsx")
    if out.exists():
        continue
    src = donor
    src = src.replace('hongo-sanchome', a['slug'])
    src = src.replace(
        '東京大学を擁する文京区の学術・医療エリア。本郷三丁目駅（都営大江戸線・東京メトロ丸ノ内線）が最寄り。主要駅は本郷三丁目駅。本ページでは本郷三丁目エリアで公式情報をもとに比較できるピラティススタジオをまとめました。',
        a['lead'] + f"主要駅は{a['station']}。本ページでは{a['name']}エリアで公式情報をもとに比較できるピラティススタジオをまとめました。",
    )
    src = src.replace('本郷三丁目駅', a['station'])
    src = src.replace('本郷三丁目', a['name'])
    src = src.replace('（東京都）', f"（{a['pref']}）")
    src = src.replace(',東京都,', f",{a['pref']},")
    src = src.replace('更新日 @2026年04月', '更新日 @2026年06月')
    src = src.replace('【2026最新】', '【2026年6月最新】')
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(src, encoding='utf-8')
    added_pages += 1
print('pages generated:', added_pages)

pa_path = Path('data/prefectureAreas.ts')
pa = pa_path.read_text(encoding='utf-8')
added_pa = 0
for a in AREAS:
    if f"slug: '{a['slug']}'" in pa:
        continue
    block = re.search(r"(\{\n    prefecture: '" + re.escape(a['pref']) + r"',\n    areas: \[\n)(.*?)(\n    \],\n  \},)", pa, re.DOTALL)
    if not block:
        print(f"⚠️ prefecture not found: {a['pref']} ({a['slug']})")
        continue
    line = f"      {{ slug: '{a['slug']}', name: '{a['name']}' }},"
    pa = pa[:block.end(2)] + '\n' + line + pa[block.end(2):]
    added_pa += 1
pa_path.write_text(pa, encoding='utf-8')
print('prefectureAreas added:', added_pa)
