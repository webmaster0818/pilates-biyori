// Repilates 公式「STUDIO（店舗を探す）」（https://repilates.jp/studio/）の営業中の全店（オープン予定は含めない）
// 2026-10-29 に公式から取得（27店舗）。都道府県は公式一覧の見出し（または住所）による。
// ⚠️ 値を手で書き足さない。更新するときは公式一覧を取り直して丸ごと置き換える（scripts/gen-official-store-lists-20261029.py の手順）。
import type { OfficialStoreList } from './official-store-list-type'

export const REPILATES_OFFICIAL: OfficialStoreList = {
  asOf: '2026年10月29日',
  sourceLabel: "Repilates公式 店舗一覧",
  sourceUrl: "https://repilates.jp/studio/",
  extraLabel: undefined,
  accessLabel: "営業時間（公式の一覧）",
  stores: [
    { pref: "北海道", name: "Repilates イオンモール苫小牧店", access: "10:00〜21:00", address: "北海道苫小牧市柳町3丁目1−20 イオンモール苫小牧 1F", url: "https://repilates.jp/studio/tomakomai/" },
    { pref: "北海道", name: "Repilates 札幌円山店", access: "9:00〜21:00", address: "北海道札幌市中央区北１条西20丁目3 岸本ビル 1F", url: "https://repilates.jp/studio/sapporomaruyama/" },
    { pref: "宮城県", name: "Repilates イオンタウン仙台泉大沢店", access: "10:00〜21:00", address: "宮城県仙台市泉区大沢1丁目5-1 イオンタウン仙台泉大沢 2F", url: "https://repilates.jp/studio/sendaiizumiosawa/" },
    { pref: "茨城県", name: "Repilates サプラ龍ヶ崎店", access: "10:00〜20:30", address: "茨城県龍ケ崎市小柴5丁目1番2 サプラスクエア サプラ 1F", url: "https://repilates.jp/studio/ryugasaki/" },
    { pref: "茨城県", name: "Repilates イオンタウン水戸南店", access: "10:00〜21:00", address: "茨城県東茨城郡茨城町長岡3480-101 イオンタウン水戸南 1F", url: "https://repilates.jp/studio/mito/" },
    { pref: "埼玉県", name: "Repilates イオンタウン東浦和店", access: "10:00〜21:00", address: "埼玉県さいたま市緑区東浦和1丁目1-6 イオンタウン東浦和 3F", url: "https://repilates.jp/studio/higashiurawa/" },
    { pref: "埼玉県", name: "Repilates イオンタウン吉川美南店", access: "10:00〜21:00", address: "埼玉県吉川市美南3丁目25-1 イオンタウン吉川美南 東街区1F", url: "https://repilates.jp/studio/yoshikawaminami/" },
    { pref: "千葉県", name: "Repilates イオンモール木更津店", access: "10:00〜21:00", address: "千葉県木更津市築地1−4 イオンモール木更津 2F", url: "https://repilates.jp/studio/kisarazu/" },
    { pref: "東京都", name: "Repilates フレスポ若葉台店", access: "9:00〜21:30", address: "東京都稲城市若葉台2丁目4-2 フレスポ若葉台WEST 2F 10番 （2F一番奥／個別教室のトライ横）", url: "https://repilates.jp/studio/wakabadai/" },
    { pref: "東京都", name: "Repilates アクロスモール八王子みなみ野店", access: "9:00〜21:00", address: "東京都八王子市みなみ野1丁目2-1 アクロスモール八王子みなみ野 2F", url: "https://repilates.jp/studio/hachioji/" },
    { pref: "東京都", name: "Repilates 池袋店", access: "9:00〜21:00", address: "東京都豊島区西池袋三丁目22番9号 パークアクシス池袋 1F", url: "https://repilates.jp/studio/ikebukuro/" },
    { pref: "東京都", name: "Repilates 飯田橋神楽坂店", access: "7:30〜21:00", address: "東京都新宿区下宮比町1番4号 飯田橋御幸ビル B1F", url: "https://repilates.jp/studio/iidabashi/" },
    { pref: "山梨県", name: "Repilates MEGAドン・キホーテUNY石和店", access: "10:00〜21:00", address: "山梨県笛吹市石和町窪中島154 MEGAドン・キホーテUNY石和店 2F", url: "https://repilates.jp/studio/isawa/" },
    { pref: "岐阜県", name: "Repilates カラフルタウン岐阜店", access: "9:00〜21:30", address: "岐阜県岐阜市柳津町丸野3丁目3-3 カラフルタウン エミノワ館2F", url: "https://repilates.jp/studio/gifu/" },
    { pref: "静岡県", name: "Repilates マークイズ静岡店", access: "10:00〜20:00", address: "静岡県静岡市葵区柚木1026 マークイズ静岡3F", url: "https://repilates.jp/studio/shizuoka/" },
    { pref: "静岡県", name: "Repilates イオンモール富士宮店", access: "10:00〜21:00", address: "静岡県富士宮市浅間町1ｰ8 イオンモール富士宮 2F", url: "https://repilates.jp/studio/fujinomiya/" },
    { pref: "愛知県", name: "Repilates イオン高橋店", access: "10:00〜21:00", address: "愛知県豊田市東山町1丁目5-1 イオン高橋 1F", url: "https://repilates.jp/studio/takahashisc/" },
    { pref: "愛知県", name: "Repilates イオンモール扶桑店", access: "10:00〜21:00", address: "愛知県丹羽郡扶桑町南山名高塚5-1", url: "https://repilates.jp/studio/fuso/" },
    { pref: "愛知県", name: "Repilates イオン豊橋南店", access: "10:00〜21:00", address: "愛知県豊橋市野依町落合1-12 イオン豊橋南ショッピングセンター 2F", url: "https://repilates.jp/studio/toyohashinan/" },
    { pref: "愛知県", name: "Repilates エアポートウォーク名古屋店", access: "10:00〜21:00", address: "愛知県西春日井郡豊山町大字豊場字林先1番8 エアポートウォーク名古屋 2F", url: "https://repilates.jp/studio/airportwalknagoya/" },
    { pref: "愛知県", name: "Repilates 名古屋グローバルゲート店", access: "9:00〜21:00", address: "愛知県名古屋市中村区平池町4丁目60-12 グローバルゲート 5F", url: "https://repilates.jp/studio/nagoyagg/" },
    { pref: "愛知県", name: "Repilates イオンモール常滑店", access: "10:00〜21:00", address: "愛知県常滑市りんくう町2丁目20ｰ3 イオンモール常滑 2F", url: "https://repilates.jp/studio/tokoname/" },
    { pref: "愛知県", name: "Repilates イオンモール新瑞橋店", access: "10:00〜21:00", address: "愛知県名古屋市南区菊住1丁目7−10 イオンモール新瑞橋 2F", url: "https://repilates.jp/studio/aratamabashi/" },
    { pref: "三重県", name: "Repilates 日永カヨー店", access: "10:00〜21:00", address: "三重県四日市市日永4丁目2-41", url: "https://repilates.jp/studio/hinaga/" },
    { pref: "三重県", name: "Repilates イオンタウン四日市泊店", access: "9:00〜21:00", address: "三重県四日市市泊小柳町4-5-1 イオンタウン四日市泊 1F", url: "https://repilates.jp/studio/tomaricho/" },
    { pref: "滋賀県", name: "Repilates フォレオ大津一里山店", access: "10:00〜21:00", address: "滋賀県大津市一里山7丁目1-1 フォレオ大津一里山 B1F", url: "https://repilates.jp/studio/otsuichiriyama/" },
    { pref: "香川県", name: "Repilates イオンモール高松店", access: "10:00〜21:00", address: "香川県高松市香西本町1-1 イオンモール高松 1F", url: "https://repilates.jp/studio/takamatsu/" },
  ],
}
