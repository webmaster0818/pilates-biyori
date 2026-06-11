#!/usr/bin/env python3
"""新規エリアページ第1弾（15エリア）生成。2026-06-11 MediaXAI依頼の5ブランド＋zen place掲載。

各エリア = 新ブランド店舗（公式データ）＋ 併設実在スタジオ（Web調査で実在確認済み）。冪等。
- data/area-studios.ts にエリアエントリ追加
- app/area/{slug}/page.tsx を hongo-sanchome テンプレから生成
- data/prefectureAreas.ts に登録
実行後: sitemap再生成→ビルド→検証→デプロイ
"""
import json
import re
import os
from pathlib import Path

ROOT = Path(__file__).parent.parent
os.chdir(ROOT)

B = json.load(open('data/new-brands-202606.json'))['brands']
MEE = json.load(open('data/new-brands-mee-stores.json'))['stores']
ZEN = json.load(open('data/new-brands-zenplace-stores.json'))
ZB = ZEN['brand']

DESC = {
    'dr-pilates': '医師推奨のパーソナルジム受賞歴を持つDr.トレーニング系列のパーソナルピラティススタジオ。マシン・マット両対応のマンツーマン指導。',
    'the-silk': '女性専用のマシンピラティス専門スタジオ。レベル別・部位別の豊富なグループプログラムとパーソナルレッスンを提供。',
    '247-pilates': '完全個室・マンツーマンの女性専用パーソナルピラティススタジオ。入会金不要の月謝制。',
    'pilates-mee': '女性専用のマシンピラティス専門スタジオ。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯。',
}


def s(v):
    return v.replace("'", "\\'")


def studio_ts(d):
    """dict -> TS object literal (indent 6)"""
    out = "      {\n"
    out += f"        name: '{s(d['name'])}',\n"
    if d.get('officialUrl'):
        out += f"        officialUrl: '{d['officialUrl']}',\n"
    out += f"        image: '{d.get('image', '/images/studios/pilates-k.webp')}',\n"
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
            life = store.startswith('Life')
            return {
                'name': nm, 'officialUrl': B['pilates-mee']['officialUrl'],
                'image': '/images/studios/pilates-mee.webp',
                'price': '5人制少人数 月4回 14,800円〜（税込）' if life else B['pilates-mee']['price'],
                'trial': B['pilates-mee']['trial'],
                'features': B['pilates-mee']['features'],
                'description': DESC['pilates-mee'] + f"{station}駅から{walk}。",
                'access': f"{station}駅から{walk}", 'address': addr,
            }
    raise KeyError(station_key)


def zen_store(suffix_key):
    for suffix, pref, access in ZEN['stores']:
        if suffix == suffix_key:
            return {
                'name': f"zen place pilates {suffix}", 'officialUrl': ZB['officialUrl'],
                'image': '/images/studios/zenplace.webp',
                'price': ZB['price'], 'trial': ZB['trial'], 'features': ZB['features'],
                'description': '全国100店舗以上を展開するピラティス専門スタジオ。マット・マシン（リフォーマー）グループとプライベートを提供し、男性も利用可。' + access + '。',
                'access': access, 'address': pref + '（詳細は公式サイト参照）',
            }
    raise KeyError(suffix_key)


def brand_store(bkey, station_key):
    for st in B[bkey].get('stores', []):
        if st['station'] == station_key:
            walk = st.get('walk', '')
            access = f"{st['station']}駅から{walk}" if walk and walk != '不明' else f"{st['station']}エリア"
            return {
                'name': f"{B[bkey]['name']} {st['store']}", 'officialUrl': B[bkey]['officialUrl'],
                'image': f"/images/studios/{bkey}.webp",
                'price': B[bkey]['price'], 'trial': B[bkey]['trial'], 'features': B[bkey]['features'],
                'description': DESC[bkey] + access + '。',
                'access': access, 'address': st.get('address', st['pref'] + '（詳細は公式サイト参照）'),
            }
    raise KeyError(f'{bkey}:{station_key}')


def co(name, url, image, price, trial, features, description, access, address):
    return dict(name=name, officialUrl=url, image=image, price=price, trial=trial,
                features=features, description=description, access=access, address=address)


PK_IMG = '/images/studios/pilates-k.webp'
RIN_IMG = '/images/studios/rintosull.webp'
UC_IMG = '/images/studios/urban-classic-pilates.webp'
CP_IMG = '/images/studios/club-pilates.webp'
EL_IMG = '/images/studios/element.webp'
GEN = '/images/studios/pilates-k.webp'

AREAS = [
    {
        'slug': 'sakaihigashi', 'name': '堺東', 'pref': '大阪府', 'region': '近畿', 'station': '堺東駅',
        'lead': '堺市の中心ターミナル・堺東。南海高野線堺東駅周辺は商業施設が集まり、駅徒歩2分圏内に複数のマシンピラティススタジオが展開しています。',
        'studios': [
            brand_store('247-pilates', '堺東'), zen_store('堺東'),
            co('pilates K 堺東店', 'https://pilates-k.jp/studio/osaka/sakaihigashi', PK_IMG,
               'マンスリー4 13,420円／マンスリー8 16,170円（税込月額）', '体験レッスン 無料',
               ['マシンピラティス専門', 'グループ', '女性専用'],
               'マシンピラティス専門の女性専用グループスタジオ。音楽に合わせたボディメイクプログラムが特徴。南海高野線堺東駅北西口より徒歩1分。',
               '南海高野線堺東駅北西口より徒歩1分', '大阪府堺市堺区北瓦町2-4-16 堺富士ビル8F'),
            co('Rintosull 堺東店', 'https://rintosull.jp/shop/osaka/sakaihigashi/', RIN_IMG,
               '月4回 8,800円／通い放題 13,800円〜（税込）', '体験レッスン 無料（約30分）',
               ['マシンピラティス専門', 'グループ', '女性専用'],
               'LAVA系列のマシンピラティス専門・女性専用スタジオ。利用者の87%以上が初心者からのスタート。南海高野線堺東駅北西口より徒歩30秒。',
               '南海高野線堺東駅北西口より徒歩30秒', '大阪府堺市堺区北瓦町2-4-12 岡本ビル6F'),
        ],
    },
    {
        'slug': 'minamimorimachi', 'name': '南森町', 'pref': '大阪府', 'region': '近畿', 'station': '南森町駅',
        'lead': '大阪市北区の南森町は、地下鉄谷町線・堺筋線とJR東西線（大阪天満宮駅）が使えるオフィス・住宅混在エリア。駅徒歩5分圏に専門性の高いスタジオが集まります。',
        'studios': [
            mee_store('南森町'), zen_store('南森町'),
            co('CLUB PILATES 南森町店', 'https://clubpilates.co.jp/studio/minamimorimachi/', CP_IMG,
               '月4回 13,090円／月8回 24,090円（税込）', '30分体験レッスン 無料',
               ['マシンピラティス専門', 'グループ最大12名＋プライベート', '男女利用可'],
               '世界最大級のマシンピラティスブランド。4段階のレベル別グループとプライベートに対応。南森町駅・JR大阪天満宮駅9番出口より徒歩1分。',
               '南森町駅・JR大阪天満宮駅9番出口より徒歩1分', '大阪府大阪市北区東天満2丁目6-8 篠原東天満ビル2F'),
            co('ピラティススタジオDEP 南森町店', 'https://dep-pilates.com/shop/kinki/minamimorimachi-espoir', GEN,
               '月2回 17,000円／月4回 32,000円', '体験 通常9,900円（キャンペーンあり）',
               ['マシンピラティス専門', '完全個室マンツーマン', '理学療法士・作業療法士在籍'],
               'マシンピラティス専門の完全個室パーソナルスタジオ。理学療法士・作業療法士資格保有インストラクターが在籍。南森町駅3番出口から徒歩3分。',
               '南森町駅3番出口から徒歩3分', '大阪府大阪市北区東天満2丁目10-31 第9田渕ビル201号'),
            co('Pilates Studio Leben', 'https://leben-pilates.com/', GEN,
               'グループ月4回 14,800円／パーソナル1回 9,900円', '初回体験 500円（約90分）',
               ['女性専用', 'マシンピラティス', 'グループ＋パーソナル', '理学療法士監修'],
               '理学療法士監修プログラムの女性専用マシンピラティススタジオ。コアアラインを導入しグループとパーソナルの両方に対応。南森町駅から徒歩5分。',
               '南森町駅から徒歩5分', '大阪府大阪市北区天神橋3丁目8-9 TATSUMI天神橋ビル8階802'),
        ],
    },
    {
        'slug': 'oizumigakuen', 'name': '大泉学園', 'pref': '東京都', 'region': '関東', 'station': '大泉学園駅',
        'lead': '西武池袋線の大泉学園は練馬区西部の住宅エリア。駅徒歩1〜3分の至近に、低価格サーキット型からパーソナル専門まで特色の異なるスタジオが揃っています。',
        'studios': [
            mee_store('大泉学園'), zen_store('大泉学園'),
            co('ピラティスミラー 大泉学園', 'https://www.konami.com/sportsclub/pilatesmirror/oizumigakuen/', GEN,
               '月会費 11,000円（月6回まで）・1回チケット 2,750円', '体験 通常2,200円（キャンペーンあり）',
               ['マシン（リフォーマー）', '最大7名少人数グループ', '女性専用'],
               'コナミスポーツ運営の女性専用マシンピラティススタジオ。最大7名の少人数グループとプライベートに対応。西武池袋線大泉学園駅北口から徒歩3分。',
               '大泉学園駅北口から徒歩3分', '東京都練馬区（詳細は公式サイト参照）'),
            co('URBAN CLASSIC PILATES 大泉学園店', 'https://urbanclassic.jp/pilates-studio/oizumigakuen/', UC_IMG,
               'マンスリー4 8,580円／通い放題 12,980円（税込月額）', '無料体験あり（要事前予約）',
               ['マシン（リフォーマー＋TRX）', 'サーキット形式30分', '男性も入会可'],
               'リフォーマーとTRXを組み合わせた30分完結サーキット形式のセミパーソナルスタジオ。男性も入会可。大泉学園駅徒歩1分。',
               '大泉学園駅徒歩1分', '東京都練馬区（詳細は公式サイト参照）'),
            co('SAKURA 大泉学園店', 'https://sakura-pilates.jp/studios/oizumigakuen/', GEN,
               '月4回 33,000円／月8回 63,800円', '体験 5,500円',
               ['マシンピラティス', '完全個室マンツーマン', '女性専用'],
               '女性専用の完全個室パーソナルマシンピラティス。リフォーマー・チェア等を備え、インストラクターは全員女性。大泉学園駅北口より徒歩1分。',
               '大泉学園駅北口より徒歩1分', '東京都練馬区（詳細は公式サイト参照）'),
        ],
    },
    {
        'slug': 'omori', 'name': '大森', 'pref': '東京都', 'region': '関東', 'station': '大森駅',
        'lead': 'JR京浜東北線の大森は大田区の主要駅。駅前から山王エリアにかけて、グループ専門・パーソナル専門・ヨガ併設と性格の異なるスタジオが点在します。',
        'studios': [
            mee_store('大森'), zen_store('大森'),
            co('pilates K 大森店', 'https://pilates-k.jp/studio/tokyo/omori', PK_IMG,
               'マンスリー4 13,420円／マンスリー8 16,170円（税込月額）', '体験レッスン 無料',
               ['マシンピラティス専門', 'グループ', '女性専用'],
               'マシンピラティス専門の女性専用グループスタジオ。音楽に合わせたボディメイクプログラムが特徴。JR大森駅東口より徒歩1分。',
               'JR大森駅東口より徒歩1分', '東京都大田区（詳細は公式サイト参照）'),
            co('ピラティス＆ヨガスタジオ Olulu 大森山王スタジオ', 'https://olulu-yoga.com/', GEN,
               'グループ月4回 8,800円／全日通い放題 13,200円（税込）', '体験 グループ1,000円',
               ['マット中心', 'ヨガ併設', '少人数グループ＋プライベート'],
               '常温のヨガ＆ピラティススタジオ。マット中心の少人数グループとプライベートレッスンを提供。JR大森駅から徒歩3分。',
               'JR大森駅から徒歩3分', '東京都大田区（詳細は公式サイト参照）'),
            co('FLATTE 大森店', 'https://flatte.jp/pilates/location/omori/', GEN,
               '月2回 16,500円／月4回 29,700円（税込）', '無料体験表記あり（詳細は公式サイト参照）',
               ['マシンピラティス', '完全パーソナル50分', '男女利用可'],
               'マンツーマン50分の完全パーソナルマシンピラティス。男女とも利用可能で手ぶら通いに対応。JR大森駅徒歩6分。',
               'JR大森駅徒歩6分', '東京都品川区（詳細は公式サイト参照）'),
        ],
    },
    {
        'slug': 'komagome', 'name': '駒込', 'pref': '東京都', 'region': '関東', 'station': '駒込駅',
        'lead': '山手線・南北線の駒込は、豊島区と北区にまたがる落ち着いた住宅エリア。駅徒歩1分圏に低価格グループからパーソナル専門まで選択肢が揃います。',
        'studios': [
            mee_store('駒込'), zen_store('駒込'),
            co('Rintosull 駒込店', 'https://rintosull.jp/shop/tokyo/komagome/', RIN_IMG,
               '月4回 8,800円／プレミアムフリー 16,800円（税込）', '体験レッスン 無料',
               ['マシンピラティス専門', 'グループ', '女性専用'],
               'LAVA系列のマシンピラティス専門・女性専用スタジオ。リフォーマーのグループレッスンを低価格で提供。駒込駅東口徒歩1分。',
               '駒込駅東口徒歩1分', '東京都豊島区（詳細は公式サイト参照）'),
            co('ELEMENT 駒込店', 'https://element-gym.com/element-top/pilates/pilates-all/komagome/', EL_IMG,
               '月4回 22,000円〜（詳細は公式サイト参照）', '体験当日入会で体験費用無料',
               ['マシンピラティス', 'マンツーマンパーソナル', '30分単位・手ぶらOK'],
               '30分単位のマンツーマンパーソナルピラティス。男女とも利用可能で手ぶら通いに対応。駒込駅徒歩1分。',
               '駒込駅徒歩1分', '東京都豊島区（詳細は公式サイト参照）'),
            co('COCOLANCE 駒込店', 'https://cocolance.jp/location/komagome/', GEN,
               '月4回 35,200円（税込）', '体験 通常7,700円（初回限定キャンペーンあり）',
               ['マシンピラティス', '完全個室マンツーマン', '女性専用'],
               '女性専用の完全個室パーソナルマシンピラティス。女性インストラクターのみ在籍。駒込駅徒歩4分。',
               '駒込駅徒歩4分', '東京都北区（詳細は公式サイト参照）'),
        ],
    },
    {
        'slug': 'nishikasai', 'name': '西葛西', 'pref': '東京都', 'region': '関東', 'station': '西葛西駅',
        'lead': '東西線の西葛西は江戸川区の人気住宅エリア。駅南口を中心に、世界的チェーンから整体系パーソナルまで多様なマシンピラティススタジオが集まっています。',
        'studios': [
            mee_store('西葛西'), zen_store('西葛西'),
            co('CLUB PILATES 西葛西', 'https://clubpilates.co.jp/studio/nishikasai/', CP_IMG,
               '月4回 13,090円／月8回 24,090円', '無料体験（30分）',
               ['マシンピラティス専門', 'グループ最大12名＋プライベート', 'レベル別'],
               '世界最大級のマシンピラティスブランド。最大12名のグループとプライベートの両方に対応。東西線西葛西駅より徒歩3分。',
               '東西線西葛西駅より徒歩3分', '東京都江戸川区（詳細は公式サイト参照）'),
            co('マピラ（mapila）西葛西店', 'https://pilates-mapila.jp/nishikasai/', GEN,
               'マンスリー4 7,700円／フルタイム 14,300円', '詳細は公式サイト参照',
               ['マシン（リフォーマー）グループ', 'ホットヨガ併設'],
               'リフォーマーを使ったグループレッスンをリーズナブルに提供するスタジオ。ホットヨガも併設。西葛西駅南口から徒歩2分。',
               '西葛西駅南口から徒歩2分', '東京都江戸川区（詳細は公式サイト参照）'),
            co('La Pilates 西葛西店', 'https://la-pilates.jp/studio/nishikasai/', GEN,
               'パーソナル月2回 22,000円／月4回 40,000円', '体験 3,000円（通常14,000円）',
               ['整体×マシンピラティス', 'パーソナル', '女性専用'],
               '整体の知見を組み合わせた女性専用パーソナルマシンピラティス。西葛西駅南口より徒歩1分。',
               '西葛西駅南口より徒歩1分', '東京都江戸川区（詳細は公式サイト参照）'),
        ],
    },
    {
        'slug': 'kamiooka', 'name': '上大岡', 'pref': '神奈川県', 'region': '関東', 'station': '上大岡駅',
        'lead': '京急本線・市営地下鉄の上大岡は横浜市南部の一大ターミナル。駅直結・徒歩圏に大手チェーンのグループ系とパーソナル系がバランスよく揃います。',
        'studios': [
            mee_store('上大岡'), zen_store('上大岡'),
            co('pilates K 上大岡店', 'https://pilates-k.jp/studio/kanagawa/kamiooka', PK_IMG,
               'マンスリー4 13,420円／マンスリー8 16,170円（税込月額）', '体験レッスン 無料',
               ['マシンピラティス専門', 'グループ', '女性専用'],
               'マシンピラティス専門の女性専用グループスタジオ。音楽に合わせたボディメイクプログラムが特徴。京急上大岡駅徒歩1分（camio 3階）。',
               '京急上大岡駅徒歩1分', '神奈川県横浜市港南区（詳細は公式サイト参照）'),
            co('Rintosull 上大岡店', 'https://rintosull.jp/shop/kanagawa/kamioooka/', RIN_IMG,
               '月4回 8,800円／プレミアムフリー 16,800円（税込月額）', '無料体験会あり',
               ['マシンピラティス専門', 'グループ', '女性専用'],
               'LAVA系列のマシンピラティス専門・女性専用スタジオ。京急本線上大岡駅西口徒歩5分。',
               '京急本線上大岡駅西口徒歩5分', '神奈川県横浜市港南区（詳細は公式サイト参照）'),
        ],
    },
    {
        'slug': 'shonandai', 'name': '湘南台', 'pref': '神奈川県', 'region': '関東', 'station': '湘南台駅',
        'lead': '小田急江ノ島線・相鉄いずみ野線・市営地下鉄の3線が乗り入れる湘南台。藤沢市北部の交通拠点で、駅徒歩3分圏に特色の異なるスタジオが集まります。',
        'studios': [
            mee_store('湘南台'), zen_store('湘南台'),
            co('URBAN CLASSIC PILATES 湘南台店', 'https://urbanclassic.jp/shonandai/', UC_IMG,
               'マンスリー4 8,580円／通い放題 12,980円（税込月額）', '体験 無料（要予約）',
               ['マシン（リフォーマー＋TRX）', 'サーキット形式30分', '男性利用可'],
               'リフォーマーとファンクショナルトレーニングを組み合わせた30分完結サーキット形式。男性も利用可。湘南台駅徒歩1分。',
               '湘南台駅徒歩1分', '神奈川県藤沢市（詳細は公式サイト参照）'),
            co('Pilates Studio Licotto 湘南台店', 'https://studio-licotto.jp/shonandai/', GEN,
               '月4回 13,200円／受け放題 22,000円（税込月額）', '体験 無料',
               ['女性専用', 'マシン＋マット両対応', '最大6名少人数グループ'],
               '女性専用の少人数制スタジオ。マシンとマットの両方に対応し、初心者向けプログラムが充実。湘南台駅徒歩2分。',
               '湘南台駅徒歩2分', '神奈川県藤沢市（詳細は公式サイト参照）'),
            co('ピラティススタジオ ルルト 湘南台店', 'https://luluto.kabushikigaisya-rigakubody.co.jp/tenpo/pilates_shonandai/', GEN,
               '月4回 38,400円（税込）', '体験制度あり（受付状況は公式サイト参照）',
               ['マンツーマン専門', 'リフォーマー・キャデラック・チェア完備', '理学療法士監修'],
               '理学療法士監修のマンツーマン専門マシンピラティス。リフォーマー・キャデラック・チェアを完備。湘南台駅徒歩3分。',
               '湘南台駅徒歩3分', '神奈川県藤沢市（詳細は公式サイト参照）'),
        ],
    },
    {
        'slug': 'tsudanuma', 'name': '津田沼', 'pref': '千葉県', 'region': '関東', 'station': '津田沼駅',
        'lead': '総武線の津田沼は習志野市・船橋市にまたがる商業エリア。駅徒歩3分圏に大手マシンピラティスチェーンが集結し、選択肢の多さは千葉県内有数です。',
        'studios': [
            zen_store('津田沼'),
            co('pilates K 津田沼ビート店', 'https://pilates-k.jp/studio/chiba-ken/tsudanuma', PK_IMG,
               'マンスリー4 13,420円／マンスリー8 16,170円（税込月額）', '体験レッスン 無料',
               ['マシンピラティス専門', 'グループ', '女性専用'],
               'マシンピラティス専門の女性専用グループスタジオ。JR津田沼駅北口徒歩3分（津田沼ビート4F）。',
               'JR津田沼駅北口徒歩3分', '千葉県習志野市（詳細は公式サイト参照）'),
            co('CLUB PILATES 津田沼', 'https://clubpilates.co.jp/studio/tsudanuma/', CP_IMG,
               '月4回 11,990円／月8回 15,290円／通い放題 18,590円（税込）', '体験 無料（30分）',
               ['マシンピラティス専門', 'グループ最大12名＋プライベート', '男女利用可'],
               '世界最大級のマシンピラティスブランド。初心者から上級者までレベル別に対応。津田沼駅徒歩2分（Loharu津田沼B館1F）。',
               '津田沼駅徒歩2分', '千葉県習志野市（詳細は公式サイト参照）'),
            co('Rintosull 津田沼店', 'https://rintosull.jp/shop/chiba/tsudanuma/', RIN_IMG,
               '月4回 8,800円／プレミアムフリー 16,800円（税込月額）', '体験 無料',
               ['マシンピラティス専門', 'グループ', '女性専用'],
               'LAVA系列のマシンピラティス専門・女性専用スタジオ。JR津田沼駅北口徒歩2分。',
               'JR津田沼駅北口徒歩2分', '千葉県船橋市（詳細は公式サイト参照）'),
        ],
    },
    {
        'slug': 'motoyawata', 'name': '本八幡', 'pref': '千葉県', 'region': '関東', 'station': '本八幡駅',
        'lead': 'JR総武線と都営新宿線の始発駅が重なる本八幡は市川市の中心エリア。駅徒歩1〜2分にグループ系・サーキット系・パーソナル系が出揃っています。',
        'studios': [
            mee_store('本八幡'),
            co('Rintosull 本八幡店', 'https://rintosull.jp/shop/chiba/motoyawata/', RIN_IMG,
               '月4回 8,800円／2店舗通い放題 13,800円（税込）', '無料体験会あり',
               ['マシンピラティス専門', 'グループ', '女性専用'],
               'LAVA系列のマシンピラティス専門・女性専用スタジオ。JR本八幡駅北口・都営新宿線本八幡駅から徒歩1分。',
               'JR本八幡駅北口徒歩1分', '千葉県市川市（詳細は公式サイト参照）'),
            co('URBAN CLASSIC PILATES 本八幡店', 'https://urbanclassic.jp/motoyawata/', UC_IMG,
               'マンスリー4 8,580円／通い放題 12,980円（税込月額）', '体験 無料（要予約）',
               ['マシン（リフォーマー）＋ファンクショナル', 'サーキット形式グループ'],
               'リフォーマーとファンクショナルトレーニングのサーキット形式グループスタジオ。本八幡駅徒歩2分・京成八幡駅徒歩2分。',
               '本八幡駅徒歩2分', '千葉県市川市（詳細は公式サイト参照）'),
            co('ピラティスAXE 本八幡駅前店', 'https://pilatesaxe.jp/motoyawata-ekimae/', GEN,
               'グループ月4回 10,780円／パーソナル月4回 33,000円', '体験 グループ2,750円／パーソナル4,400円（キャンペーンあり）',
               ['マシンピラティス専門', 'グループ（女性限定）＋パーソナル（男女可）'],
               'マシンピラティス専門スタジオ。グループは女性限定、パーソナルは男女とも利用可。JR本八幡駅徒歩1分。',
               'JR本八幡駅徒歩1分', '千葉県市川市（詳細は公式サイト参照）'),
        ],
    },
    {
        'slug': 'shin-urayasu', 'name': '新浦安', 'pref': '千葉県', 'region': '関東', 'station': '新浦安駅',
        'lead': 'JR京葉線の新浦安は浦安市のベイエリア住宅地。駅前の商業ビルを中心に、女性専用マシンピラティスのグループスタジオが充実しています。',
        'studios': [
            co('the SILK 新浦安店', 'https://the-silk.co.jp/studios/chiba/shinurayasu/', '/images/studios/the-silk.webp',
               '月4回（Standard4）14,370円／通い放題（Full）19,980円（税込月額）', '体験レッスン 無料（50分）',
               ['女性専用', 'マシンピラティス専門', 'グループ'],
               '女性専用のマシンピラティス専門スタジオ。レベル別・部位別の豊富なグループプログラムを洗練された空間で提供。JR新浦安駅徒歩2分（プライムタワー20階）。',
               'JR新浦安駅徒歩2分', '千葉県浦安市入船1丁目5-2 プライムタワー20階'),
            co('OLUTANA pilates 新浦安店', 'https://www.olutana-pilates.com/', GEN,
               '月25回 15,400円／月15回 13,200円（税込）ほか', '体験あり（料金は公式サイト参照）',
               ['女性専用', 'マシン（リフォーマー）', '30分完結グループ', '完全予約制'],
               '30分完結のリフォーマーグループレッスンが中心の女性専用スタジオ。JR新浦安駅徒歩1分（TKビルディング2F）。',
               'JR新浦安駅徒歩1分', '千葉県浦安市（詳細は公式サイト参照）'),
            co('Mami Pilates Studio', 'https://mamipilates.net/', GEN,
               'プライベート3回 25,000円／グループ10回チケット 20,000円（税込）', '体験あり（料金は公式サイト参照）',
               ['マシン＋マット両対応', 'プライベート＆少人数グループ', '女性専用'],
               'プライベートと最大8名の少人数グループに対応する女性専用スタジオ。新浦安駅からバス「ベイパーク」下車徒歩1分。',
               '新浦安駅からバス「ベイパーク」下車徒歩1分', '千葉県浦安市日の出5-6-1'),
        ],
    },
    {
        'slug': 'warabi', 'name': '蕨', 'pref': '埼玉県', 'region': '関東', 'station': '蕨駅',
        'lead': '京浜東北線の蕨はコンパクトな市域に駅前商業が集まる埼玉県南部のまち。駅徒歩2分圏にグループ系からパーソナル系までスタジオが揃います。',
        'studios': [
            mee_store('蕨'),
            co('pilates K 蕨店', 'https://pilates-k.jp/studio/saitama/warabi', PK_IMG,
               'マンスリー4 13,420円／マンスリー8 16,170円（税込月額）', '体験レッスン 無料（ウェアレンタル込み）',
               ['マシンピラティス専門', 'グループ', '女性専用'],
               'マシンピラティス専門の女性専用グループスタジオ。音楽に合わせたプログラムが特徴。蕨駅徒歩2分（マルベリービル3階）。',
               '蕨駅徒歩2分', '埼玉県蕨市（詳細は公式サイト参照）'),
            co('URBAN CLASSIC PILATES 蕨', 'https://urbanclassic.jp/warabi/', UC_IMG,
               'マンスリー4 8,580円／通い放題 12,980円（税込月額）', '無料体験予約あり',
               ['マシン（リフォーマー＋TRX）', 'サーキット形式30分', '男性入会可'],
               'リフォーマーとTRXを組み合わせた30分サーキット形式のセミパーソナル型スタジオ。男性も入会可。蕨駅徒歩2分。',
               '蕨駅徒歩2分', '埼玉県蕨市（詳細は公式サイト参照）'),
            co('Bump Up 蕨店', 'https://bumpup-japan.com/warabi/', GEN,
               'パーソナル月4回 30,800円／グループ月4回 19,800円', '体験 5,000円（カウンセリング無料）',
               ['マシンピラティス×筋トレ', 'パーソナル＋少人数グループ', '理学療法士監修'],
               'マシンピラティスと筋力トレーニングを組み合わせたパーソナル専門スタジオ。理学療法士監修・韓国メソッド。蕨駅徒歩1分。',
               '蕨駅徒歩1分', '埼玉県蕨市（詳細は公式サイト参照）'),
        ],
    },
    {
        'slug': 'ayase', 'name': '綾瀬', 'pref': '東京都', 'region': '関東', 'station': '綾瀬駅',
        'lead': '千代田線・常磐線の綾瀬は足立区東部の住宅エリア。駅徒歩1〜2分の至近に低価格のマシンピラティスグループスタジオが集まり、始めやすさが魅力です。',
        'studios': [
            mee_store('綾瀬'),
            co('pilates K 綾瀬店', 'https://pilates-k.jp/studio/tokyo/ayase', PK_IMG,
               'マンスリー4 13,420円／マンスリー8 16,170円（税込月額）', '体験レッスン 無料',
               ['マシンピラティス専門', 'グループ', '女性専用'],
               'マシンピラティス専門の女性専用グループスタジオ。音楽に合わせたボディメイクプログラムが特徴。千代田線綾瀬駅徒歩1分。',
               '千代田線綾瀬駅徒歩1分', '東京都足立区（詳細は公式サイト参照）'),
            co('URBAN CLASSIC PILATES 綾瀬店', 'https://urbanclassic.jp/ayase/', UC_IMG,
               'マンスリー4 8,580円／通い放題 12,980円（税込月額）', '無料体験あり',
               ['マシン（リフォーマー＋TRX）', 'サーキット形式30分', '男性も入会可'],
               'リフォーマーとTRXのサーキット形式セミパーソナルスタジオ。男性も入会可。綾瀬駅徒歩1分。',
               '綾瀬駅徒歩1分', '東京都足立区（詳細は公式サイト参照）'),
            co('SOELU スタジオ 綾瀬店', 'https://lp.soelu.com/new_ayase/index.html', GEN,
               'スタンダード 7,678円／ピラティス4 9,878円（税込月額）', '初回予約者は無料',
               ['マシンピラティスレッスンあり', '低価格'],
               'オンラインフィットネス大手SOELUの実店舗。マシンピラティスレッスンを低価格で提供。綾瀬駅西口より徒歩2分。',
               '綾瀬駅西口より徒歩2分', '東京都足立区（詳細は公式サイト参照）'),
        ],
    },
    {
        'slug': 'shukugawa', 'name': '夙川', 'pref': '兵庫県', 'region': '近畿', 'station': '夙川駅',
        'lead': '阪急神戸線・甲陽線の夙川は西宮市の閑静な住宅街。桜並木で知られる落ち着いた環境に、少人数制やパーソナル専門の上質なスタジオが揃います。',
        'studios': [
            mee_store('夙川'),
            co('ピラティスミラー 夙川店', 'https://www.konami.com/sportsclub/pilatesmirror/shukugawa/', GEN,
               '月会費 11,000円（月6回まで）', '体験 通常2,200円（キャンペーンあり）',
               ['女性専用', 'リフォーマー', '最大6名少人数グループ', '30分'],
               'コナミスポーツ運営の女性専用マシンピラティススタジオ。最大6名の少人数で天井鏡によるフォーム確認が特徴。阪急夙川駅南口徒歩1分。',
               '阪急夙川駅南口徒歩1分', '兵庫県西宮市羽衣町8-12 福渡ビル1F'),
            co('グッドデイフィールピラティス', 'https://www.gooddaypilates.jp/', GEN,
               'プライベート1回 15,600円／4回コース 57,600円', '体験 4,400円',
               ['リフォーマー専門', '完全個室マンツーマン'],
               'リフォーマー専門の完全個室パーソナルピラティススタジオ。阪急夙川駅徒歩3分。',
               '阪急夙川駅徒歩3分', '兵庫県西宮市相生町11-9 クレインビル3F'),
            co('Studio HARURU 夙川', 'https://beauty.hotpepper.jp/kr/slnH000728274/', GEN,
               '料金は掲載ページ参照', '体験 2,000円（その場入会で無料）',
               ['女性専用', 'マシン＋マット＋ヨガ', 'グループ／パーソナル両対応'],
               '女性専用のピラティス＆ヨガスタジオ。マシンとマットの両方に対応し、姿勢改善・骨盤調整プログラムを提供。阪急夙川駅徒歩2分。',
               '阪急夙川駅徒歩2分', '兵庫県西宮市羽衣町7-27 サン夙川ビル4F'),
        ],
    },
]


def find_array_close(src, open_idx):
    depth = 0
    in_str = None
    j = open_idx
    while j < len(src):
        c = src[j]
        if in_str:
            if c == '\\':
                j += 2
                continue
            if c == in_str:
                in_str = None
        elif c in ("'", '"', '`'):
            in_str = c
        elif c == '[':
            depth += 1
        elif c == ']':
            depth -= 1
            if depth == 0:
                return j
        j += 1
    return -1


# --- 1. area-studios.ts に追加 ---
ts = open('data/area-studios.ts', encoding='utf-8').read()
added_ts = 0
for a in AREAS:
    if f"'{a['slug']}':" in ts:
        continue
    block = (
        f"  '{a['slug']}': {{\n"
        f"    name: '{a['name']}',\n"
        f"    region: '{a['region']}',\n"
        f"    description: '{s(a['lead'])}',\n"
        f"    studios: [\n"
        + ''.join(studio_ts(d) for d in a['studios'])
        + "    ],\n  },\n"
    )
    # 末尾 `}\n` 直前（exportオブジェクトの閉じ括弧）に挿入
    m = re.search(r'\n\}\s*$', ts)
    ts = ts[:m.start()] + '\n' + block + ts[m.start():]
    added_ts += 1
open('data/area-studios.ts', 'w', encoding='utf-8').write(ts)
print('area-studios entries added:', added_ts)

# --- 2. page.tsx 生成（hongo-sanchomeドナー） ---
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

# --- 3. prefectureAreas 登録 ---
pa_path = Path('data/prefectureAreas.ts')
pa = pa_path.read_text(encoding='utf-8')
added_pa = 0
for a in AREAS:
    if f"slug: '{a['slug']}'" in pa:
        continue
    block = re.search(r"(\{\n    prefecture: '" + re.escape(a['pref']) + r"',\n    areas: \[\n)(.*?)(\n    \],\n  \},)", pa, re.DOTALL)
    line = f"      {{ slug: '{a['slug']}', name: '{a['name']}' }},"
    pa = pa[:block.end(2)] + '\n' + line + pa[block.end(2):]
    added_pa += 1
pa_path.write_text(pa, encoding='utf-8')
print('prefectureAreas added:', added_pa)
