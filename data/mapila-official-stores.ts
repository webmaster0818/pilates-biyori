// Mapila（マピラ）公式「スタジオ一覧」（https://pilates-mapila.jp/studio/）に載っている全9店舗。住所・アクセスは各店舗ページの表記、extra は店舗ページの休館日。
// 2026-11-27 に公式から取得（PocketMapila 木津川・成田は別サイトで一覧に無いため含めない）。⚠️ 値を手で書き足さない。更新するときは公式を取り直して丸ごと置き換える。
import type { OfficialStoreList } from './official-store-list-type'

export const MAPILA_OFFICIAL: OfficialStoreList = {
  asOf: '2026年11月27日',
  sourceLabel: 'Mapila公式 スタジオ一覧',
  sourceUrl: 'https://pilates-mapila.jp/studio/',
  extraLabel: '休館日（公式の店舗ページ）',
  accessLabel: '最寄駅・徒歩（公式の店舗ページ）',
  stores: [
    {"pref": "北海道", "name": "Mapila 琴似店", "access": "地下鉄東西線「琴似駅」3番出口から徒歩1分 ／ JR函館本線「琴似駅」東口から徒歩7分", "address": "北海道札幌市西区琴似1条3丁目3−7 TM23ビル1F", "url": "https://pilates-mapila.jp/kotoni/", "extra": "定休 1日・6日・16日・26日"},
    {"pref": "東京都", "name": "Mapila GINZA9店", "access": "JR東海道本線・山手線・京浜東北線・横須賀線、ゆりかもめ、都営浅草線、東京メトロ銀座線「新橋駅」3番出口から徒歩1分 ／ 東京メトロ銀座線・丸の内線・日比谷線「銀座駅」B5出口から徒歩7分", "address": "東京都中央区銀座8-7 銀座ナイン2号館2F", "url": "https://pilates-mapila.jp/ginza9/", "extra": "定休 毎月5日・15日・25日・月末最終日"},
    {"pref": "東京都", "name": "Mapila 新宿店", "access": "東京メトロ「新宿三丁目駅」E6出口直結 ／ JR・都営地下鉄「新宿駅」東南口より徒歩5分 ／ 西武鉄道「西武新宿駅」正面口より徒歩8分", "address": "東京都新宿区新宿4-2-23 新四curumuビルB2F", "url": "https://pilates-mapila.jp/shinjuku/", "extra": "定休 1日・6日・16日・26日"},
    {"pref": "東京都", "name": "Mapila 西葛西店", "access": "東京メトロ東西線「西葛西駅」南口から徒歩2分", "address": "東京都江戸川区西葛西6-17-1 フジマンション第2 2F", "url": "https://pilates-mapila.jp/nishikasai/", "extra": "定休 毎月6日・16日・26日・月末最終日・年末年始等"},
    {"pref": "東京都", "name": "Mapila 成増店", "access": "東武東上線「成増駅」南口より徒歩2分 ／ 東京メトロ副都心線・有楽町線「地下鉄成増駅」2番出口より徒歩2分", "address": "東京都板橋区成増2-17-24 成増GRAVITY 3F", "url": "https://pilates-mapila.jp/narimasu/", "extra": "定休 毎月6日・16日・26日・月末最終日・年末年始等"},
    {"pref": "東京都", "name": "Mapila 大泉学園店", "access": "西武池袋線「大泉学園駅」北口から徒歩2分", "address": "東京都練馬区東大泉1-37-7 ドラゴンスクエアⅠビル2F", "url": "https://pilates-mapila.jp/oizumigakuen/", "extra": "定休 毎週木曜日"},
    {"pref": "東京都", "name": "Mapila 西荻窪店", "access": "JR中央線・総武線「西荻窪駅」徒歩1分", "address": "東京都杉並区西荻南3-14-6 フェスタ西荻窪5F", "url": "https://pilates-mapila.jp/nishiogikubo/", "extra": "定休 毎月6日・16日・26日・月末最終日・年末年始等"},
    {"pref": "千葉県", "name": "Mapila 柏店", "access": "JR・東武野田線「柏駅」東口改札から徒歩1分", "address": "千葉県柏市柏2丁目10−1 柏モア 2階", "url": "https://pilates-mapila.jp/kashiwa/", "extra": "定休 毎月5日・15日・25日・月末最終日・年末年始等"},
    {"pref": "大阪府", "name": "Mapila 堀江店", "access": "地下鉄四つ橋線「四ツ橋駅」6番出口から徒歩3分 ／ 地下鉄御堂筋線「なんば駅」26-C出口から徒歩3分", "address": "大阪府大阪市西区南堀江1-9-1 現代オレンジビル5F", "url": "https://pilates-mapila.jp/horie/", "extra": "定休 毎月5日・15日・25日・月末最終日・年末年始等"},
  ],
}
