#!/usr/bin/env python3
"""新規エリアページ第2弾（20エリア）。batch1と同方式（公式実データ＋実在併設スタジオ）。冪等。"""
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
MEE_DESC = '女性専用のマシンピラティス専門スタジオ。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯。'


def s(v):
    return v.replace("'", "\\'")


def studio_ts(d):
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
            return {
                'name': nm, 'officialUrl': B['pilates-mee']['officialUrl'],
                'image': '/images/studios/pilates-mee.webp',
                'price': '5人制少人数 月4回 14,800円〜（税込）' if store.startswith('Life') else B['pilates-mee']['price'],
                'trial': B['pilates-mee']['trial'], 'features': B['pilates-mee']['features'],
                'description': MEE_DESC + f"{station}駅から{walk}。",
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


def co(name, url, price, trial, features, description, access, address, image='/images/studios/pilates-k.webp'):
    return dict(name=name, officialUrl=url, image=image, price=price, trial=trial,
                features=features, description=description, access=access, address=address)


PK = '/images/studios/pilates-k.webp'
RIN = '/images/studios/rintosull.webp'
UC = '/images/studios/urban-classic-pilates.webp'
CP = '/images/studios/club-pilates.webp'
EL = '/images/studios/element.webp'

AREAS = [
 {'slug':'shin-koiwa','name':'新小岩','pref':'東京都','region':'関東','station':'新小岩駅','lead':'JR総武線の新小岩は葛飾区南部の商業エリア。駅徒歩1〜3分に低価格サーキット型・グループ専門・パーソナル専門が出揃っています。','studios':[
   mee_store('新小岩'),
   co('URBAN CLASSIC PILATES 新小岩店','https://urbanclassic.jp/shinkoiwa/','マンスリー4 8,580円／通い放題 12,980円（税込月額）','体験 無料',['マシン（リフォーマー＋ファンクショナル）','サーキット形式30分','男性可'],'リフォーマーとファンクショナルトレーニングを組み合わせた30分完結サーキット形式。男性も利用可。JR新小岩駅徒歩3分。','JR新小岩駅徒歩3分','東京都葛飾区新小岩1-40-8 山田明ビル2F',UC),
   co('Rintosull 新小岩店','https://rintosull.jp/shop/tokyo/shinkoiwa/','月4回 8,800円／プレミアムフリー 16,800円（税込月額）','体験 無料',['マシンピラティス専門','グループ','女性専用'],'LAVA系列のマシンピラティス専門・女性専用スタジオ。JR新小岩駅南口徒歩2分。','JR新小岩駅南口徒歩2分','東京都葛飾区新小岩1-43-10 2F',RIN),
   co('ウェルピラティス 新小岩店','https://well-pilates.jp/location/shinkoiwa/','月2回 17,920円／月4回 34,920円（税込）','体験 980円（キャンペーン）',['マシンピラティス','マンツーマンパーソナル','男性利用可'],'マンツーマンのパーソナルマシンピラティス専門スタジオ。新小岩駅徒歩1分。','新小岩駅徒歩1分','東京都葛飾区新小岩2-7-6 星野新小岩ビル4F'),
 ]},
 {'slug':'kanamachi','name':'金町','pref':'東京都','region':'関東','station':'金町駅','lead':'JR常磐線・京成金町線の金町は葛飾区北東部の住宅エリア。個性派の専門スタジオと医療提携型パーソナルが駅徒歩5分圏に集まります。','studios':[
   mee_store('金町'),
   co('ASFiT 金町店','https://pilates-asfit.tokyo/','月4回 16,000円／月8回 30,000円（税込）','体験 2,178円（120分・LINE予約で無料）',['マシンピラティス×パーソナル','個室マンツーマン','医療提携'],'医療提携の個室マンツーマンスタジオ。マシンピラティスとパーソナルトレーニングを組み合わせる。金町駅徒歩3分。','金町駅徒歩3分','東京都葛飾区金町3-5-4 日下ビル5階'),
   co('nu pilatesstudio 金町スタジオ','https://www.nupilatesstudio.com/','プライベート60分 8,800円／リフォーマーグループ45分 4,380円〜','体験 6,300円（60分）',['マシン（STOTT機材）＋マット','パーソナル＋少人数グループ'],'STOTT PILATES機材を備えた地域密着スタジオ。パーソナルと少人数グループに対応。金町駅徒歩5分。','金町駅徒歩5分','東京都葛飾区（詳細は公式サイト参照）'),
   co('ココピラティス','https://co-co-pilates.com/','料金は公式サイト参照','体験あり（料金は公式サイト参照）',['マシンピラティス専門','パーソナル／最大3名少人数','初心者専用'],'初心者専用をうたうマシンピラティススタジオ。パーソナルと最大3名の少人数レッスンを提供。金町駅北口徒歩4分。','金町駅北口徒歩4分','東京都葛飾区（詳細は公式サイト参照）'),
 ]},
 {'slug':'takenotsuka','name':'竹ノ塚','pref':'東京都','region':'関東','station':'竹ノ塚駅','lead':'東武スカイツリーラインの竹ノ塚は足立区北部の住宅エリア。駅徒歩1〜2分に低価格サーキット型と医療提携パーソナルが揃います。','studios':[
   mee_store('竹ノ塚'),
   co('URBAN CLASSIC PILATES 竹ノ塚店','https://urbanclassic.jp/pilates-studio/takenotsuka/','マンスリー4 8,580円／通い放題 12,980円（税込月額）','体験 無料',['マシン（リフォーマー＋ファンクショナル）','サーキット形式30分','男性可'],'リフォーマーとファンクショナルトレーニングの30分サーキット形式。男性も利用可。竹ノ塚駅東口徒歩2分。','竹ノ塚駅東口徒歩2分','東京都足立区竹の塚6-15-1 ウイング竹ノ塚1F',UC),
   co('ASFiT 竹ノ塚店','https://pilates-asfit.tokyo/takenotsuka_access/','月4回 16,000円／月8回 30,000円（税込）','体験 2,178円（120分・LINE予約で無料）',['マシンピラティス×パーソナル','個室マンツーマン','医療提携・子連れ可'],'医療提携の個室マンツーマンスタジオ。子連れにも対応。竹ノ塚駅徒歩1分。','竹ノ塚駅徒歩1分','東京都足立区西竹の塚2-4-1 2F'),
 ]},
 {'slug':'hibarigaoka','name':'ひばりヶ丘','pref':'東京都','region':'関東','station':'ひばりヶ丘駅','lead':'西武池袋線のひばりヶ丘は西東京市の住宅エリア。駅徒歩4分圏に少人数グループとパーソナル専門の個性派スタジオが揃います。','studios':[
   mee_store('ひばりヶ丘'),
   co('ピラティススタジオRENO','https://pilates-studio-reno.com/','月4回 15,400円／月8回 22,000円（税込）','体験 通常3,300円（キャンペーンあり）',['マシンピラティス','最大5名少人数グループ','女性専用'],'女性専用のマシンピラティススタジオ。最大5名の少人数制グループレッスン。ひばりヶ丘駅徒歩2分。','ひばりヶ丘駅徒歩2分','東京都西東京市ひばりが丘北3-5-5 白石ビル3階'),
   co('exeed Pilates studio ひばりヶ丘店','https://www.exeed-pilates-hibarigaoka.com/','都度 8,800円（50分）／4回券 32,800円〜','体験 5,500円（当日入会で0円）',['マシン（リフォーマー・チェア・タワー）','完全個室パーソナル専門'],'リフォーマー・チェア・タワーを備えた完全個室のパーソナル専門スタジオ。ひばりヶ丘駅徒歩4分。','ひばりヶ丘駅徒歩4分','東京都西東京市ひばりヶ丘1-3-10 第3内山ビル2F'),
 ]},
 {'slug':'musashisakai','name':'武蔵境','pref':'東京都','region':'関東','station':'武蔵境駅','lead':'JR中央線・西武多摩川線の武蔵境は武蔵野市の住宅エリア。駅北口徒歩1〜4分に大手チェーンから個室パーソナルまで集まります。','studios':[
   mee_store('武蔵境'),
   co('CLUB PILATES 武蔵境','https://clubpilates.co.jp/studio/musashisakai/','月4回 13,090円／月8回 24,090円（税込）','体験 30分無料',['マシンピラティス専門','グループ最大12名＋プライベート','男女利用可'],'世界最大級のマシンピラティスブランド。最大12名のグループとプライベートに対応。武蔵境駅北口徒歩1分。','武蔵境駅北口徒歩1分','東京都武蔵野市境1-2-2 TSビル2F',CP),
   co('ピラティスミラー 武蔵境','https://www.konami.com/sportsclub/pilatesmirror/musashisakai/','月会費 11,000円（月6回まで）','体験 通常2,200円（キャンペーンあり）',['女性専用','最大10名少人数＋パーソナル','30分レッスン'],'コナミスポーツ運営の女性専用マシンピラティス。鏡を活用した30分レッスンが特徴。武蔵境駅北口徒歩4分。','武蔵境駅北口徒歩4分','東京都武蔵野市境2-10-27 トラープランド翠命館1F'),
   co('パーソナルマシンピラティスYUZU 武蔵境店','https://yuzu-pilates.com/studios/musashi-sakai/','月2回 16,800円／月4回 31,200円（税込）','体験 初回500円',['マシンピラティス','完全個室パーソナル専門','女性スタッフ100%'],'完全個室のパーソナルマシンピラティス専門スタジオ。女性スタッフのみ在籍。武蔵境駅徒歩1分。','武蔵境駅徒歩1分','東京都武蔵野市境南町2-5-10 センチュリー境南305'),
 ]},
 {'slug':'ningyocho','name':'人形町','pref':'東京都','region':'関東','station':'人形町駅','lead':'日比谷線・浅草線の人形町は中央区の下町情緒が残るオフィス・住宅エリア。ヨガ併設からパーソナル専門まで多彩なスタジオが駅徒歩3分圏に揃います。','studios':[
   mee_store('人形町'),
   co('YARD 人形町スタジオ','https://yard-yp.com/studio/ningyocho/','月4回 9,680円／月8回 13,860円（税込）','体験 無料（グループ1回）',['常温ヨガ＆ピラティス','少人数制','子連れ可プログラムあり'],'常温のヨガ＆ピラティス専門スタジオ。少人数制で50種以上のプログラムを提供。人形町駅A5出口徒歩2分。','人形町駅A5出口徒歩2分','東京都中央区（詳細は公式サイト参照）'),
   co('ELEMENT 人形町店','https://element-gym.com/element-top/pilates/pilates-all/ningyocho-pilates/','月4回 22,000円〜（詳細は公式サイト参照）','体験 3,300円（当日入会で無料）',['マシンピラティス','30分パーソナル','レンタル無料'],'1回30分のパーソナルマシンピラティス。マンツーマン指導でウェア等レンタル無料。人形町駅A4出口徒歩3分。','人形町駅A4出口徒歩3分','東京都中央区（詳細は公式サイト参照）',EL),
   co('B-holic 人形町','https://pilates-nihombashi.com/','回数券5回 45,000円〜','体験 9,800円（60分）',['ピラティス×加圧トレーニング','マンツーマン専門'],'ピラティスと加圧トレーニングを一度に受けられるマンツーマン専門スタジオ。人形町駅から徒歩すぐ。','人形町駅から徒歩すぐ','東京都中央区日本橋人形町3-3-13 CICビル7F'),
 ]},
 {'slug':'asakusabashi','name':'浅草橋','pref':'東京都','region':'関東','station':'浅草橋駅','lead':'JR総武線・浅草線の浅草橋は問屋街として知られる台東区のエリア。理学療法士監修や骨格改善系など専門性の高いスタジオが駅徒歩2分圏に集まります。','studios':[
   mee_store('浅草橋'),
   co('ピラティススタジオRAS','https://www.pt-pilatesstudio.com/','料金は公式サイト参照','体験あり（料金は公式サイト参照）',['理学療法士監修','リフォーマー・キャデラック・チェア','最大3名セミプライベート'],'理学療法士監修のマシンピラティススタジオ。側弯症特化プログラムなど医学的アプローチが特徴。浅草橋駅徒歩1分。','浅草橋駅徒歩1分','東京都台東区（詳細は公式サイト参照）'),
   co('Feel Body 浅草橋','https://feelbody.jp/','月1〜4回 9,900〜35,200円（税込）','体験 初回5,500円',['マシンパーソナル','完全マンツーマン','骨格・姿勢評価'],'「骨格から整える」がコンセプトの完全マンツーマンマシンパーソナル。初回は骨格・姿勢評価から始まる。浅草橋駅徒歩2分。','浅草橋駅徒歩2分','東京都台東区（詳細は公式サイト参照）'),
   co('ピラティススタジオ ルルト 蔵前浅草橋店','https://luluto.kabushikigaisya-rigakubody.co.jp/tenpo/pilates_kuramaeasakusabashi/','月4回 38,400円（税込）','体験 期間限定1,000円（45分）',['理学療法士監修','マンツーマン専門','リフォーマー・キャデラック・チェア'],'理学療法士監修・マンツーマン専門のマシンピラティス。全国チェーンで初心者対応が丁寧。浅草橋駅徒歩6分。','浅草橋駅徒歩6分','東京都台東区浅草橋5-16-3 オカジマビル2F'),
 ]},
 {'slug':'jujo','name':'十条','pref':'東京都','region':'関東','station':'十条駅','lead':'JR埼京線の十条は北区の商店街が元気な下町エリア。十条駅・東十条駅の徒歩圏にプライベート系と通いやすいセミパーソナル型が揃います。','studios':[
   mee_store('十条'),
   co('pilateshaus','https://www.pilateshaus.net/','料金は公式サイト参照','体験あり（プライベート体験の案内あり）',['プライベート中心＋マットグループ','マタニティ・産後対応','子連れOK'],'地域密着の小規模スタジオ。リフォーマー等を使うプライベートレッスン中心で、マタニティ・産後リカバリーにも対応。東十条駅徒歩3分。','東十条駅徒歩3分','東京都北区（詳細は公式サイト参照）'),
   co('FIT LABO 東十条店','https://fitlabo-gym.com/higashijujo/','月4回 12,100円／通い放題 19,800円（税込）','体験あり（料金は公式サイト参照）',['セミパーソナル','マシン＋マット＋トレーニング'],'トレーナー1対複数のセミパーソナル形式。マシン・マットピラティスとトレーニングを全プランで受講できる。東十条駅徒歩4分。','東十条駅徒歩4分','東京都北区東十条4-5-5 コスモプラザHINO 2F'),
 ]},
 {'slug':'mejiro','name':'目白','pref':'東京都','region':'関東','station':'目白駅','lead':'JR山手線の目白は落ち着いた文教エリア。駅徒歩1〜4分に世界的チェーン・女性専用グループ・理学療法士在籍スタジオが揃います。','studios':[
   mee_store('目白'),
   co('CLUB PILATES 目白店','https://clubpilates.co.jp/studio/mejiro/','月4回 14,190円／月8回 26,290円（税込）','体験 30分無料',['マシンピラティス専門','グループ最大12名＋プライベート','男女利用可'],'世界最大級のマシンピラティスブランド。資格保持インストラクターのみ在籍。JR目白駅徒歩1分。','JR目白駅徒歩1分','東京都豊島区目白2-39-1 TRAD目白2F',CP),
   co('Pilates Studio Licotto 目白','https://studio-licotto.jp/','月4回 13,200円／受け放題 22,000円（税込）','体験 無料（1人1回）',['女性専用','マット＋マシン両対応','少人数グループ'],'女性専用の少人数制スタジオ。医療系国家資格・トレーナー資格保持インストラクターが指導。目白駅徒歩4分。','目白駅徒歩4分','東京都新宿区下落合3-17-33 エスセナーリオ目白B1F'),
   co('SPRINGS PILATES STUDIO','https://springs-pilates.com/','料金は公式サイト参照','体験あり（料金は公式サイト参照）',['理学療法士多数在籍','プライベート＋最大5名少人数','ジャイロトニック対応'],'理学療法士が多数在籍するスタジオ。ポストリハビリからアスリートまで幅広く対応。JR目白駅徒歩2分。','JR目白駅徒歩2分','東京都豊島区目白3-5-12 目白コアビル4F'),
 ]},
 {'slug':'hatanodai','name':'旗の台','pref':'東京都','region':'関東','station':'旗の台駅','lead':'東急大井町線・池上線が交差する旗の台は品川区の住宅エリア。駅徒歩1分圏に大手グループ系と低価格サーキット型が並びます。','studios':[
   mee_store('旗の台'),
   co('CLUB PILATES 旗の台店','https://clubpilates.co.jp/studio/hatanodai/','月4回 13,090円／月8回 24,090円（税込）','体験 30分無料',['マシンピラティス専門','グループ最大12名＋プライベート','男女利用可'],'世界最大級のマシンピラティスブランド。旗の台駅東口徒歩30秒の好立地。','旗の台駅東口徒歩30秒','東京都品川区旗の台3-12-3 J-BOXビル2F',CP),
   co('URBAN CLASSIC PILATES 旗の台店','https://urbanclassic.jp/pilates-studio/hatanodai/','月4回 8,580円／通い放題 12,980円（税込月額）','体験 無料（予約制）',['マシン（リフォーマー＋ファンクショナル）','サーキット形式30分'],'リフォーマーとファンクショナルトレーニングの30分サーキット形式。旗の台駅徒歩1分。','旗の台駅徒歩1分','東京都品川区旗の台3-14-1 2F',UC),
 ]},
 {'slug':'tsurumi','name':'鶴見','pref':'神奈川県','region':'関東','station':'鶴見駅','lead':'JR京浜東北線・京急本線の鶴見は横浜市鶴見区の中心エリア。駅直結・徒歩3分圏にサーキット型からプライベート専門まで揃います。','studios':[
   mee_store('京急鶴見'),
   co('マハロピラティス鶴見','https://mahalo-pilates.jp/','プライベート月4回 33,000円／グループ受け放題 月11,000円','体験 マシンプライベート5,500円・マットグループ1,100円',['マシンプライベート＋マットグループ','未経験者8割以上'],'マシンプライベートと少人数マットグループを提供する地域密着スタジオ。PHIピラティス養成コースも開催。京急鶴見駅徒歩2分・JR鶴見駅徒歩3分。','京急鶴見駅徒歩2分・JR鶴見駅徒歩3分','神奈川県横浜市鶴見区鶴見中央4-15-3 山縣ビル3階'),
   co('URBAN CLASSIC PILATES 鶴見店','https://urbanclassic.jp/tsurumi/','月4回 8,580円／通い放題 12,980円（税込月額）','体験あり（公式サイトから予約）',['マシン（リフォーマー＋ファンクショナル）','サーキット形式30分','駅直結'],'リフォーマーとファンクショナルトレーニングの30分サーキット形式。JR鶴見駅西口直結の鶴見ミナール5F。','JR鶴見駅西口直結','神奈川県横浜市鶴見区豊岡町18-1 鶴見ミナール5F',UC),
 ]},
 {'slug':'center-kita','name':'センター北','pref':'神奈川県','region':'関東','station':'センター北駅','lead':'横浜市営地下鉄のセンター北は港北ニュータウンの商業中心。駅徒歩1分に大手チェーン2社が並び、パーソナル専門も選べます。','studios':[
   mee_store('センター北'),
   co('pilates K センター北店','https://pilates-k.jp/studio/kanagawa/center-kita','マンスリー4 13,420円／マンスリー8 16,170円（税込月額）','体験 無料',['マシンピラティス専門','グループ','女性専用'],'マシンピラティス専門の女性専用グループスタジオ。部位別17種のボディメイクプログラム。センター北駅2番出口徒歩1分。','センター北駅2番出口徒歩1分','神奈川県横浜市都筑区中川中央1-1-5 GRC横浜サイエンスキューブ5F',PK),
   co('CLUB PILATES センター北','https://clubpilates.co.jp/studio/center-kita/','月4回 11,990円／月8回 21,890円（税込）','体験 30分無料',['マシンピラティス専門','グループ最大12名＋プライベート','男女利用可'],'世界最大級のマシンピラティスブランド。15種のマシンと4段階レベル制。センター北駅徒歩1分。','センター北駅徒歩1分','神奈川県横浜市都筑区中川中央1-30-1 プレミアヨコハマ2F',CP),
   co('Nピラティス 横浜センター北店','https://npilates.jp/yokohama/','料金は公式サイト参照','体験あり（料金は公式サイト参照）',['パーソナルマシンピラティス専門','理学療法士の解剖学ベース指導'],'解剖学ベースの評価・指導を行うパーソナルマシンピラティス専門スタジオ。センター北駅徒歩5分。','センター北駅徒歩5分','神奈川県横浜市都筑区牛久保西1-1-11 タウンハウス202'),
 ]},
 {'slug':'kikuna','name':'菊名','pref':'神奈川県','region':'関東','station':'菊名駅','lead':'東急東横線とJR横浜線が交わる菊名は横浜市港北区の乗換拠点。駅徒歩1〜3分にパーソナル系と都度払い制の個性派が揃います。','studios':[
   mee_store('菊名'),
   co('Studio TAIKA 横浜菊名店','https://taika-yokohama.com/','料金は公式サイト参照','体験 初回（料金・条件は公式サイト参照）',['パーソナルマシンピラティス','理学療法士含む有資格者','産前産後対応'],'データ・映像に基づくオーダーメイド指導のパーソナルマシンピラティス。菊名駅東口徒歩3分。','菊名駅東口徒歩3分','神奈川県横浜市港北区（詳細は公式サイト参照）'),
   co('レ・フルール ピラティス＆ヨガスタジオ','https://les-fleurs.net/kikuna/','都度払い プライベート6,000円／グループ2,000円','体験 グループ1,500円〜',['女性専用','都度払い制（月額契約なし）','子連れ可（パーソナル）'],'月額契約のない都度払い制が特徴の女性専用スタジオ。指導歴15年のインストラクターが担当。菊名駅徒歩1分。','菊名駅徒歩1分','神奈川県横浜市港北区（詳細は公式サイト参照）'),
 ]},
 {'slug':'saginuma','name':'鷺沼','pref':'神奈川県','region':'関東','station':'鷺沼駅','lead':'東急田園都市線の鷺沼は川崎市宮前区の住宅エリア。駅徒歩2〜4分に女性専用グループとマンツーマン専門が揃います。','studios':[
   mee_store('鷺沼'),
   co('ピラティスミラー 鷺沼','https://www.konami.com/sportsclub/pilatesmirror/saginuma/','月会費 11,000円（月6回まで）','体験 通常2,200円（キャンペーンあり）',['女性専用','最大7名少人数','30分レッスン'],'コナミスポーツ運営の女性専用マシンピラティス。鏡を活用した30分レッスン・手ぶら参加可。鷺沼駅中央改札徒歩4分。','鷺沼駅中央改札徒歩4分','神奈川県川崎市宮前区小台1-20-2 リバーレ鷺沼1F'),
   co('Y plus PILATES','https://www.ypluspilates.com/','料金は公式サイト参照','体験あり（料金は公式サイト参照）',['1対1パーソナル専門','完全個室','マタニティ・産後・子連れ対応'],'Balanced Body社製マシンを備えた完全個室の1対1パーソナル専門スタジオ。鷺沼駅北改札徒歩2分。','鷺沼駅北改札徒歩2分','神奈川県川崎市宮前区鷺沼4丁目（詳細は公式サイト参照）'),
 ]},
 {'slug':'yachiyodai','name':'八千代台','pref':'千葉県','region':'関東','station':'八千代台駅','lead':'京成本線の八千代台は「住宅団地発祥の地」として知られる八千代市のエリア。駅徒歩1分圏にセミパーソナル型と個室パーソナル型が揃います。','studios':[
   mee_store('八千代台'),
   co('マシンピラティスジムWELL-FIT 八千代店','https://well-fit-gym.com/pilatesyachiyo/','月4回 15,400円（60歳以上限定コース）ほか／詳細は公式サイト参照','体験 通常3,300円（キャンペーンあり）',['完全予約制・完全個室','パーソナルマシンピラティス','子連れ対応'],'完全予約制・完全個室のパーソナルマシンピラティス。入会者の90%以上が運動初心者で、ベビーサークル完備。八千代台駅西口徒歩1分。','八千代台駅西口徒歩1分','千葉県八千代市八千代台西1-1-16 石井ビル1階'),
 ]},
 {'slug':'makuharihongo','name':'幕張本郷','pref':'千葉県','region':'関東','station':'幕張本郷駅','lead':'JR総武線・京成千葉線の幕張本郷は千葉市花見川区の住宅エリア。駅徒歩2〜3分に女性専用の個室パーソナルとヨガ併設スタジオが揃います。','studios':[
   mee_store('幕張本郷'),
   co('V-pilates 幕張本郷店','https://v-fit-gym.com/pilates-makuhari/','月4回（40分）26,400円／月8回（40分）48,400円（税込）','体験 通常3,300円（キャンペーンあり）',['女性専用','完全個室パーソナル','子連れ可'],'女性専用・完全個室のパーソナルマシンピラティス。ウェア・タオル・水の無料レンタルで手ぶら通い可。幕張本郷駅徒歩3分。','幕張本郷駅徒歩3分','千葉県千葉市花見川区幕張本郷6-27-30 ATORAS MAKUHARI 105号室'),
   co('ラルーチェボディスタジオ','https://www.laluce-body.com/','料金は公式サイト参照','体験あり（料金は公式サイト参照）',['女性専用','マットピラティス・ヨガ','マタニティ対応'],'マットピラティス・ヨガ・バレトンなど多彩なクラスを提供する女性専用スタジオ。マタニティ・ママピラティスもあり。JR幕張本郷駅徒歩2分。','JR幕張本郷駅徒歩2分','千葉県千葉市花見川区幕張本郷1-4-33 ウィステリアビル202'),
 ]},
 {'slug':'abiko','name':'我孫子','pref':'千葉県','region':'関東','station':'我孫子駅','lead':'JR常磐線の我孫子は手賀沼に面した千葉県北西部のまち。駅徒歩5分圏に大手グループ系と初心者専門パーソナルが揃います。','studios':[
   mee_store('我孫子'),
   co('pilates K あびこショッピングプラザ店','https://pilates-k.jp/studio/chiba-ken/abiko','マンスリー4 13,420円／マンスリー8 16,170円（税込月額）','体験 無料',['マシンピラティス専門','グループ','女性専用','駐車場利用可'],'マシンピラティス専門の女性専用グループスタジオ。ショッピングプラザ内で駐車場も使える。JR我孫子駅徒歩5分。','JR我孫子駅徒歩5分','千葉県我孫子市我孫子4-11-1 あびこショッピングプラザ ガーデンコート棟2階',PK),
   co('パーソナルマシンピラティスREGUTS 我孫子店','https://reguts-pilates-abiko.com/','30分コース月4回 19,800円／50分コース月4回 30,800円（税込）','体験 2,000円（30分・通常5,500円）',['運動初心者専門','マンツーマンパーソナル','駐車場完備'],'運動初心者専門のマンツーマン・パーソナルマシンピラティス。我孫子駅徒歩3分。','我孫子駅徒歩3分','千葉県我孫子市我孫子4-1-11 3階'),
 ]},
 {'slug':'saiin','name':'西院','pref':'京都府','region':'近畿','station':'西院駅','lead':'阪急京都線・京福電鉄の西院は京都市右京区の交通結節点。駅徒歩1〜7分に大手チェーンとパーソナル専門が出揃っています。','studios':[
   zen_store('京都西院'),
   co('CLUB PILATES 西院店','https://clubpilates.co.jp/studio/saiin/','月4回 11,990円／月8回 17,490円（税込）','体験 30分無料',['マシンピラティス専門','グループ最大12名＋プライベート','男女利用可'],'世界最大級のマシンピラティスブランド。阪急西院駅徒歩6分・京福西大路三条駅徒歩1分。','阪急西院駅徒歩6分','京都府京都市右京区（詳細は公式サイト参照）',CP),
   co('URBAN CLASSIC PILATES 西院店','https://urbanclassic.jp/pilates-studio/saiin/','月4回 8,580円／通い放題 12,980円（税込月額）','無料体験あり（要予約）',['マシン（リフォーマー＋ファンクショナル）','サーキット形式30分'],'リフォーマーとファンクショナルトレーニングの30分サーキット形式。阪急西院駅徒歩1分。','阪急西院駅徒歩1分','京都府京都市右京区（詳細は公式サイト参照）',UC),
   co('STUDIO IVY 西院店','https://www.pilates-ivy.jp/studio/saiin','月2回 15,000円／月4回 28,000円（税込）','体験 通常4,500円（キャンペーンあり）',['パーソナル専門','完全プライベート','マシンピラティス'],'完全プライベート空間のパーソナルマシンピラティス。入会者の約80%が初心者。西院駅徒歩7分。','西院駅徒歩7分','京都府京都市右京区（詳細は公式サイト参照）'),
 ]},
 {'slug':'tsukaguchi','name':'塚口','pref':'兵庫県','region':'近畿','station':'塚口駅','lead':'阪急神戸線・伊丹線の塚口は尼崎市北部の住宅エリア。駅徒歩1〜3分に女性専用グループ・医療系パーソナルが揃います。','studios':[
   zen_store('塚口'),
   co('ピラティスミラー 塚口','https://www.konami.com/sportsclub/pilatesmirror/tsukaguchi/','月会費 11,000円（月6回まで）','体験 通常2,200円（キャンペーンあり）',['女性専用','最大7名少人数','30分レッスン・手ぶらOK'],'コナミスポーツ運営の女性専用マシンピラティス。天井鏡で動きを確認できる30分レッスン。阪急塚口駅北口徒歩1分。','阪急塚口駅北口徒歩1分','兵庫県尼崎市（詳細は公式サイト参照）'),
   co('Pilates Studio Limone','https://pilatesstudiolimone.com/','料金は公式サイト参照','体験あり（料金は公式サイト参照）',['医療系国家資格保持者在籍','パーソナル＋最大5名グループ','マシンピラティス'],'元理学療法士・鍼灸師など医療系国家資格保持者が在籍するマシンピラティス専門スタジオ。姿勢改善・肩こり腰痛改善に強み。阪急塚口駅徒歩3分。','阪急塚口駅徒歩3分','兵庫県尼崎市塚口町1丁目18-17 3F'),
   co('ピラティススタジオiU 尼崎塚口店','https://pilates-ivy.com/','月4回 21,780円（30分・税込）','体験 姿勢診断付き（キャンペーンあり）',['完全マンツーマン','個室パーソナル','手ぶらOK'],'完全マンツーマン・個室のパーソナルマシンピラティス。ウェアから水まで無料で手ぶら通い可。阪急塚口駅徒歩3分。','阪急塚口駅徒歩3分','兵庫県尼崎市（詳細は公式サイト参照）'),
 ]},
 {'slug':'nishitanabe','name':'西田辺','pref':'大阪府','region':'近畿','station':'西田辺駅','lead':'御堂筋線の西田辺は大阪市阿倍野区の住宅エリア。駅徒歩1〜5分に女性専用の個室型と地域密着のヨガ併設スタジオが揃います。','studios':[
   mee_store('西田辺'),
   co('トトヤセ 西田辺店','https://www.totoyase.com/nishitanabe/','月2回 19,800円／月4回 35,200円','体験 1,000円（骨格診断付き60分）',['女性専用','完全個室・完全予約制','整体×マシンピラティス'],'整体・マシンピラティス・トレーニングを組み合わせた女性専用の完全個室スタジオ。ベビーカー入室可。御堂筋線西田辺駅徒歩1分。','御堂筋線西田辺駅徒歩1分','大阪府大阪市阿倍野区（詳細は公式サイト参照）'),
   co('NOA yoga & pilates studio','https://noayoga.jp/','料金は公式サイト参照','体験あり（当日入会で入会金無料）',['ヨガ・ピラティス','男女兼用','地域密着'],'ヨガとピラティスを提供する地域密着スタジオ。20〜70代まで幅広い世代が通う。西田辺駅3番出口徒歩5分。','西田辺駅3番出口徒歩5分','大阪府大阪市阿倍野区播磨町1-22-10 2F'),
 ]},
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
    line = f"      {{ slug: '{a['slug']}', name: '{a['name']}' }},"
    pa = pa[:block.end(2)] + '\n' + line + pa[block.end(2):]
    added_pa += 1
pa_path.write_text(pa, encoding='utf-8')
print('prefectureAreas added:', added_pa)
