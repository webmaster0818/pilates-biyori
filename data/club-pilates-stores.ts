// P2: CLUB PILATES×エリア受け皿（指名クエリ「クラブピラティス {エリア}」の刈り取り）。
// 対象はGSCで指名×エリアの表示があった駅のみ。データは data/brands-aggregate.json のCLUB PILATES実店舗と一致（架空ゼロ）。
// 住所が公式非開示のエリアは addressIsVague で正直に表記。評価は店舗別の一次データが無いため付けない（捏造回避）。
import type { BdcStore } from "@/data/bdc-stores";

export const clubPilatesStores: BdcStore[] = [
  {
    urlSlug: "club-pilates-nishinomiyakitaguchi",
    areaQuery: "西宮北口",
    storeName: "CLUB PILATES 西宮北口店",
    address: "兵庫県西宮市（詳細な所在地は公式サイトでご確認ください）",
    addressIsVague: true,
    access: "阪急神戸線「西宮北口駅」周辺 / 詳細は公式サイトでご確認ください",
    price: "月4回 14,190円〜",
    trial: "体験レッスン 無料（30分イントロクラス）",
    areaSlug: "nishinomiya",
    areaLabel: "西宮",
    nearby: [
      { slug: "shukugawa", label: "夙川" },
      { slug: "tsukaguchi", label: "塚口" },
      { slug: "sannomiya", label: "三宮" },
    ],
  },
  {
    urlSlug: "club-pilates-daikanyama",
    areaQuery: "代官山",
    storeName: "CLUB PILATES 代官山店",
    address: "東京都渋谷区恵比寿西1-35-17 JMFビル代官山02 B",
    access: "東急東横線「代官山駅」周辺 / 恵比寿からも徒歩圏内",
    price: "月4回 14,190円〜",
    trial: "体験レッスン 無料（30分イントロクラス）",
    areaSlug: "daikanyama",
    areaLabel: "代官山",
    nearby: [
      { slug: "ebisu", label: "恵比寿" },
      { slug: "nakameguro", label: "中目黒" },
      { slug: "shibuya", label: "渋谷" },
    ],
  },
  {
    urlSlug: "club-pilates-nakano-sakaue",
    areaQuery: "中野坂上",
    storeName: "CLUB PILATES 中野坂上店",
    address: "東京都中野区中央2丁目（詳細な所在地は公式サイトでご確認ください）",
    addressIsVague: true,
    access: "東京メトロ丸ノ内線「中野坂上駅」周辺 / 詳細は公式サイトでご確認ください",
    price: "月4回 13,090円〜",
    trial: "体験レッスン 無料（30分イントロクラス）",
    areaSlug: "nakano-sakaue",
    areaLabel: "中野坂上",
    nearby: [
      { slug: "nakano", label: "中野" },
      { slug: "higashi-nakano", label: "東中野" },
      { slug: "shinjuku", label: "新宿" },
    ],
  },
  {
    urlSlug: "club-pilates-toyosu",
    areaQuery: "豊洲",
    storeName: "CLUB PILATES 豊洲店",
    address: "東京都江東区豊洲2-1-9 豊洲セイルパークビル 1F",
    access: "東京メトロ有楽町線・ゆりかもめ「豊洲駅」周辺",
    price: "月4回 14,190円〜",
    trial: "体験レッスン 無料（30分イントロクラス）",
    areaSlug: "toyosu",
    areaLabel: "豊洲",
    nearby: [
      { slug: "monzen-nakacho", label: "門前仲町" },
      { slug: "tamachi", label: "田町" },
      { slug: "shinagawa", label: "品川" },
    ],
  },
  {
    urlSlug: "club-pilates-tamachi",
    areaQuery: "田町",
    storeName: "CLUB PILATES 田町店",
    address: "東京都港区田町エリア（詳細な所在地は公式サイトでご確認ください）",
    addressIsVague: true,
    access: "JR山手線・京浜東北線「田町駅」周辺 / 詳細は公式サイトでご確認ください",
    price: "月4回 14,190円〜",
    trial: "体験レッスン 無料（30分イントロクラス）",
    areaSlug: "tamachi",
    areaLabel: "田町",
    nearby: [
      { slug: "hamamatsucho", label: "浜松町・大門" },
      { slug: "mita", label: "三田" },
      { slug: "shinagawa", label: "品川" },
    ],
  },
  {
    urlSlug: "club-pilates-kagurazaka",
    areaQuery: "神楽坂",
    storeName: "CLUB PILATES 神楽坂店",
    address: "東京都新宿区神楽坂6-48 トモスビル 2F",
    access: "東京メトロ東西線「神楽坂駅」周辺 / 飯田橋からも徒歩圏内",
    price: "月4回 14,190円〜",
    trial: "体験レッスン 無料（30分イントロクラス）",
    areaSlug: "kagurazaka",
    areaLabel: "神楽坂",
    nearby: [
      { slug: "iidabashi", label: "飯田橋" },
      { slug: "yotsuya", label: "四ツ谷" },
      { slug: "shinjuku", label: "新宿" },
    ],
  },
];

export function getClubPilatesStore(slug: string): BdcStore | undefined {
  return clubPilatesStores.find((s) => s.urlSlug === slug);
}
