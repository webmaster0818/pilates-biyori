// Dee Pilates 公式「スタジオ一覧」（https://dee-pilates.jp/location/）に載っている全15店舗。住所・アクセスは一覧の表記、extra は各店舗ページの「営業時間」。
// 2026-11-27 に公式から取得（一覧ページの title は「14店舗」だが本文・一覧の掲載は15店舗）。⚠️ 値を手で書き足さない。更新するときは公式を取り直して丸ごと置き換える。
import type { OfficialStoreList } from './official-store-list-type'

export const DEE_PILATES_OFFICIAL: OfficialStoreList = {
  asOf: '2026年11月27日',
  sourceLabel: 'Dee Pilates公式 スタジオ一覧',
  sourceUrl: 'https://dee-pilates.jp/location/',
  extraLabel: '営業時間（公式の店舗ページ）',
  accessLabel: '最寄駅・徒歩（公式の一覧）',
  stores: [
    { pref: '東京都', name: 'Dee Pilates 青山一丁目店', access: '青山一丁目駅 徒歩2分／外苑前駅 徒歩7分', address: '東京都港区南青山2-2-15', url: 'https://dee-pilates.jp/location/aoyama-itchome/', extra: '6:00〜22:00（日曜は18:00まで）' },
    { pref: '東京都', name: 'Dee Pilates 麻布十番店', access: '麻布十番駅 徒歩1分', address: '東京都港区麻布十番2-1-11-5F', url: 'https://dee-pilates.jp/location/azabujuban/', extra: '7:00〜23:00（日曜は18:00まで）' },
    { pref: '東京都', name: 'Dee Pilates 恵比寿店', access: '恵比寿駅 徒歩6分', address: '東京都渋谷区恵比寿南1-19-10-103（naruピラティスマシンスタジオを利用）', url: 'https://dee-pilates.jp/location/ebisu/', extra: '8:00〜22:00（日曜は18:00まで）' },
    { pref: '東京都', name: 'Dee Pilates 外苑前店', access: '外苑前駅 徒歩5分／青山一丁目駅 徒歩7分', address: '東京都港区南青山2-18-2', url: 'https://dee-pilates.jp/location/gaienmae/', extra: '6:00〜22:00（日曜は18:00まで）' },
    { pref: '東京都', name: 'Dee Pilates 目黒店', access: '目黒駅 徒歩9分', address: '東京都目黒区下目黒2-21-24 ハイツ第2目黒304', url: 'https://dee-pilates.jp/location/meguro/', extra: '6:00〜22:00（日曜は18:00まで）' },
    { pref: '東京都', name: 'Dee Pilates 中目黒店', access: '中目黒駅 徒歩9分', address: '東京都目黒区東山1-3-12', url: 'https://dee-pilates.jp/location/nakameguro/', extra: '9:00〜21:00（日曜は18:00まで）' },
    { pref: '東京都', name: 'Dee Pilates 中野店', access: '中野駅 徒歩1分', address: '東京都中野区中野5丁目32-11 3階', url: 'https://dee-pilates.jp/location/nakano/', extra: '6:00〜22:00（日曜は18:00まで）' },
    { pref: '東京都', name: 'Dee Pilates 六本木・乃木坂店', access: '六本木駅 徒歩5分／乃木坂駅 徒歩1分', address: '東京都港区赤坂9-6-27 カーム乃木坂4F', url: 'https://dee-pilates.jp/location/roppongi/', extra: '6:00〜23:00（日曜は18:00まで）' },
    { pref: '東京都', name: 'Dee Pilates 渋谷店', access: '渋谷駅 徒歩7分', address: '東京都渋谷区東1-1-38-303', url: 'https://dee-pilates.jp/location/shibuya/', extra: '7:00〜22:00' },
    { pref: '東京都', name: 'Dee Pilates 新宿店', access: '新宿三丁目駅 徒歩1分／新宿駅 徒歩6分', address: '東京都新宿区歌舞伎町2-1-2 HANROKUビル2階', url: 'https://dee-pilates.jp/location/shinjuku/', extra: '6:00〜22:00（日曜は18:00まで）' },
    { pref: '東京都', name: 'Dee Pilates 四ツ谷店', access: '四ツ谷駅 徒歩3分', address: '東京都新宿区四谷1-18 belle四谷6F', url: 'https://dee-pilates.jp/location/yotsuya/', extra: '6:00〜23:00（日曜は18:00まで）' },
    { pref: '東京都', name: 'Dee Pilates 代々木公園店', access: '代々木公園駅 徒歩4分', address: '東京都渋谷区富ヶ谷1-16-3 富ヶ谷ハイツ303', url: 'https://dee-pilates.jp/location/yoyogikoen/', extra: '6:00〜22:00（日曜は18:00まで）' },
    { pref: '東京都', name: 'Dee Pilates 代々木上原店', access: '代々木上原駅 徒歩1分', address: '東京都渋谷区西原3-17-4（b-pilatesの施設を利用）', url: 'https://dee-pilates.jp/location/yoyogiuehara/', extra: '9:00〜22:00（日曜は18:00まで）' },
    { pref: '神奈川県', name: 'Dee Pilates 横浜店', access: '横浜駅 徒歩4分', address: '神奈川県横浜市西区高島2-11-2 スカイメナー横浜725号室（STUDIO FLAG 4号店を利用）', url: 'https://dee-pilates.jp/location/yokohama/', extra: '6:00〜22:00（日曜は18:00まで）' },
    { pref: '神奈川県', name: 'Dee Pilates 二子新地店', access: '二子新地駅 徒歩6分', address: '神奈川県川崎市高津区諏訪1-14-15 コーポハル102', url: 'https://dee-pilates.jp/location/futakoshinchi/', extra: '6:00〜22:00（日曜は18:00まで）' },
  ],
}
