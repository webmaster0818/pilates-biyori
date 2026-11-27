// WECLE（ウィークル）公式の店舗一覧（https://wecle.jp/ ・各店舗ページ）のうち営業中の24店舗。住所・アクセスは各店舗ページの表記、extra は店舗ページの営業時間。
// 2026-11-27 に公式から取得（トップの都道府県別件数は30件だが、うち6件〔東陽町イースト21・自由が丘・武蔵小金井・鶴見・朝霞台・福井フェニックス〕はOPEN前のため含めない）。⚠️ 値を手で書き足さない。
import type { OfficialStoreList } from './official-store-list-type'

export const WECLE_OFFICIAL: OfficialStoreList = {
  asOf: '2026年11月27日',
  sourceLabel: 'WECLE公式 店舗一覧',
  sourceUrl: 'https://wecle.jp/shoplist/',
  extraLabel: '営業時間（公式の店舗ページ）',
  accessLabel: '最寄駅・アクセス（公式の店舗ページ）',
  stores: [
    {"pref": "東京都", "name": "WECLE 三軒茶屋店", "access": "東急田園都市線「三軒茶屋駅」三茶パティオ口を出てキャロットタワー方面に向かって5分／東急世田谷線「西太子堂駅」世田谷通り方面へ徒歩2分", "address": "東京都世田谷区太子堂4-7-1ソレイユ太子堂1階", "url": "https://wecle.jp/sangenjaya/", "extra": "24時間営業"},
    {"pref": "東京都", "name": "WECLE 武蔵小山店", "access": "東急目黒線「武蔵小山駅東口」より徒歩５分", "address": "東京都品川区荏原3-3-16-1階", "url": "https://wecle.jp/musashikoyama/", "extra": "24時間営業"},
    {"pref": "東京都", "name": "WECLE 阿佐ヶ谷店", "access": "JR中央線「阿佐ヶ谷駅」東口徒歩5分／丸ノ内線「南阿佐ヶ谷駅」2b出口徒歩3分", "address": "東京都杉並区阿佐谷南3-1-21徳和ビル1階", "url": "https://wecle.jp/asagaya/", "extra": "24時間営業"},
    {"pref": "東京都", "name": "WECLE 大山店", "access": "東武東上本線「大山駅」南口から徒歩1分", "address": "東京都板橋区大山町31-2伊崎ビル2階", "url": "https://wecle.jp/oyama/", "extra": "05:00～24:00"},
    {"pref": "東京都", "name": "WECLE 深川ギャザリア店", "access": "東京メトロ東西線「木場駅」4a・b出口 徒歩約2分", "address": "東京都江東区木場1-5-9深川ギャザリア LEGARE棟2階", "url": "https://wecle.jp/kiba/", "extra": "7:00〜23:00"},
    {"pref": "神奈川県", "name": "WECLE 溝ノ口店", "access": "南武線「武蔵溝ノ口駅南口」徒歩2分／東急田園都市線「溝の口駅南口」徒歩1分", "address": "神奈川県川崎市高津区下作延2-2-15クラッセ溝の口1階", "url": "https://wecle.jp/mizonokuchi/", "extra": "月・火・木 9:00〜15:00／16:00〜21:00、水・金 9:00〜16:00／17:00〜21:00、土日祝 7:30〜18:00（24時間営業ではない）"},
    {"pref": "神奈川県", "name": "WECLE 相模大野店", "access": "小田急線「相模大野駅北口」徒歩5分", "address": "神奈川県相模原市南区相模大野4-5-17ロビーファイブ・イルカ棟1階8区画", "url": "https://wecle.jp/sagamiono/", "extra": "24時間営業"},
    {"pref": "神奈川県", "name": "WECLE 元住吉店", "access": "東急目黒線・東横線「元住吉駅」より徒歩３分", "address": "神奈川県川崎市中原区木月1-32-25住吉ビル1階", "url": "https://wecle.jp/motosumiyoshi/", "extra": "24時間営業"},
    {"pref": "神奈川県", "name": "WECLE 本厚木店", "access": "小田急線「本厚木駅」徒歩1分以内「東口」でてすぐ", "address": "神奈川県厚木市中町2丁目1番18号 TRUNK本厚木6F", "url": "https://wecle.jp/honatsugi/", "extra": "24時間営業"},
    {"pref": "神奈川県", "name": "WECLE ららぽーと横浜店", "access": "JR横浜線鴨居駅で下車し、北口から徒歩約7分", "address": "神奈川県横浜市都筑区池辺町4035-1ららぽーと横浜1階(セントラルガーデンそば)", "url": "https://wecle.jp/kamoi/", "extra": "平日10:00～20:00／土日祝10:00～21:00"},
    {"pref": "神奈川県", "name": "WECLE 武蔵新城店", "access": "JR南武線武蔵新城駅南口徒歩1分", "address": "神奈川県川崎市中原区新城3丁目3−1 花森ビル1", "url": "https://wecle.jp/musashishinjo/", "extra": "24時間営業"},
    {"pref": "埼玉県", "name": "WECLE 浦和店", "access": "JR「浦和駅北口」徒歩1分", "address": "埼玉県さいたま市浦和区仲町1-2-14関ビル2階", "url": "https://wecle.jp/urawa/", "extra": "24時間営業"},
    {"pref": "新潟県", "name": "WECLE 新潟上所店", "access": "JR各線「新潟」駅より徒歩25分・車で10分", "address": "新潟県新潟市中央区上所3丁目10−65 マルシェコート1階 イオンスタイルとなり", "url": "https://wecle.jp/kamitokoro/", "extra": "8:00～24:00"},
    {"pref": "富山県", "name": "WECLE 富山大泉店", "access": "大泉(富山県)駅出口から徒歩約6分", "address": "富山県富山市大泉中町12−19", "url": "https://wecle.jp/oizumi/", "extra": "24時間営業"},
    {"pref": "石川県", "name": "WECLE 金沢長坂台店", "access": "「長坂台」バス停より徒歩1分。西泉駅2.7km／野町駅2.2km", "address": "石川県金沢市長坂台1-40レガロ長坂A棟1", "url": "https://wecle.jp/nagasakadai/", "extra": "24時間営業"},
    {"pref": "愛知県", "name": "WECLE プライムツリー赤池店", "access": "地下鉄鶴舞線・名鉄豊田線「赤池駅」から徒歩4分", "address": "愛知県日進市赤池町箕ノ手1プライムツリー赤池1階", "url": "https://wecle.jp/akaike/", "extra": "9:00～20:30 CLOSE 21:00"},
    {"pref": "愛知県", "name": "WECLE イオンスタイル岡崎店", "access": "名鉄「東岡崎駅」からバス8分／JR「岡崎駅」からバス7分", "address": "愛知県岡崎市戸崎町字ばら山1-1 イオンスタイル岡崎1階", "url": "https://wecle.jp/okazaki/", "extra": "08:00～23:00（スタッフ常駐 平日・土・祝 9:00～21:00、日 9:00～18:00）"},
    {"pref": "大阪府", "name": "WECLE せんちゅうパル（千里中央）店", "access": "北大阪急行「千里中央駅」直結 北改札徒歩1分／大阪モノレール「千里中央駅」徒歩5分（せんちゅうパル2階北エリアの郵便局向かい）", "address": "大阪府豊中市新千里東町1-3せんちゅうパル2階北エリア239-2区画", "url": "https://wecle.jp/senchupal/", "extra": "24時間営業"},
    {"pref": "大阪府", "name": "WECLE セブンパーク天美店", "access": "近鉄南大阪線「河内天美」駅から徒歩約15分（バスなら約5分）", "address": "大阪府松原市天美東3丁目 500番地 セブンパーク天美1F", "url": "https://wecle.jp/kawachiamami/", "extra": "店舗ページに記載なし"},
    {"pref": "大阪府", "name": "WECLE イオンモール四條畷店", "access": "京阪バスで「寝屋川市駅」または「四条畷駅」から約15分", "address": "大阪府四條畷市砂四丁目3番2号 イオンモール四條畷内", "url": "https://wecle.jp/shijonawate/", "extra": "10:00～21:00（土日祝も同じ）"},
    {"pref": "兵庫県", "name": "WECLE 神戸元町店", "access": "JR神戸線「元町駅」西口徒歩2分／「みなと元町駅」徒歩6分", "address": "兵庫県神戸市中央区元町通3-9-8パルパローレビル1階", "url": "https://wecle.jp/kobe-motomachi/", "extra": "24時間営業"},
    {"pref": "岡山県", "name": "WECLE 岡山店", "access": "岡山駅東口から徒歩4分／イオンモール岡山から徒歩約1分", "address": "岡山県岡山市北区錦町1−15−1F", "url": "https://wecle.jp/okayama/", "extra": "24時間営業"},
    {"pref": "岡山県", "name": "WECLE 倉敷店", "access": "車で早島ICから約7分", "address": "岡山県倉敷市羽島797-1(ハローズ羽島店 道路向かい)", "url": "https://wecle.jp/kurashiki/", "extra": "24時間営業"},
    {"pref": "愛媛県", "name": "WECLE イオンモール新居浜店", "access": "新居浜駅から徒歩約34分（バスなら約12分）", "address": "愛媛県新居浜市前田町8-8 イオンモール新居浜内", "url": "https://wecle.jp/niihama/", "extra": "10:00～21:00（土日祝も同じ）"},
  ],
}
