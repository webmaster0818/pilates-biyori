// P2: CLUB PILATES×エリア受け皿（指名クエリ「クラブピラティス {エリア}」の刈り取り）。
// 対象はGSCで指名×エリアの表示があった駅のみ。データは data/brands-aggregate.json のCLUB PILATES実店舗と一致（架空ゼロ）。
// 住所が公式非開示のエリアは addressIsVague でその旨を表記。評価は店舗別の一次データが無いため付けない（捏造回避）。
import type { BdcStore } from "@/data/bdc-stores";

export const clubPilatesStores: BdcStore[] = [
  {
    urlSlug: "club-pilates-nishinomiyakitaguchi",
    areaQuery: "西宮北口",
    storeName: "CLUB PILATES 西宮北口店",
    address: "〒662-0835 兵庫県西宮市平木町2-18",
    prefecture: "兵庫県",
    access: "阪急「西宮北口駅」徒歩5分",
    price: "月4回 13,090円〜",
    priceList: [
      "月4回（EFT4）13,090円／月8回（EFT8）24,090円／通い放題（UNLIMITED）37,290円（公式店舗ページ・税表記なし）",
      "入会金 5,500円（税表記なし）＋入会時の事務手数料 2,200円（税込）",
      "30分の体験レッスン 無料",
      "料金は公式店舗ページの表記（2026年10月17日確認）。年間一括払いは店舗に問い合わせ",
    ],
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
    address: "〒150-0021 東京都渋谷区恵比寿西1-35-17 JMFビル代官山02 B1F",
    access: "東急東横線「代官山駅」徒歩1分",
    price: "月4回 14,190円〜",
    priceList: [
      "月4回（EFT4）14,190円／月8回（EFT8）26,290円／通い放題（UNLIMITED）40,590円（公式店舗ページ・税表記なし）",
      "入会金 5,500円（税表記なし）＋入会時の事務手数料 2,200円（税込）",
      "30分の体験レッスン 無料",
      "料金は公式店舗ページの表記（2026年10月17日確認）。年間一括払いは店舗に問い合わせ",
    ],
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
    address: "〒164-0011 東京都中野区中央2-9-1 サン・ロータスビル 2階",
    prefecture: "東京都",
    access: "都営大江戸線「中野坂上駅」徒歩2分",
    price: "月4回 13,090円〜",
    priceList: [
      "月4回（EFT4）13,090円／月8回（EFT8）24,090円／通い放題（UNLIMITED）37,290円（公式店舗ページ・税表記なし）",
      "入会金 5,500円（税表記なし）＋入会時の事務手数料 2,200円（税込）",
      "30分の体験レッスン 無料",
      "料金は公式店舗ページの表記（2026年10月17日確認）。年間一括払いは店舗に問い合わせ",
    ],
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
    address: "〒135-0061 東京都江東区豊洲2丁目1番9号 豊洲セイルパークビル1F",
    access: "東京メトロ有楽町線「豊洲駅」徒歩3分／ゆりかもめ「豊洲駅」徒歩5分",
    price: "月4回 14,190円〜",
    priceList: [
      "月4回（EFT4）14,190円／月8回（EFT8）26,290円／通い放題（UNLIMITED）40,590円（公式店舗ページ・税表記なし）",
      "入会金 5,500円（税表記なし）",
      "30分の体験レッスン 無料",
      "料金は公式店舗ページの表記（2026年10月17日確認）。年間一括払いは店舗に問い合わせ",
    ],
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
    address: "〒108-0023 東京都港区芝浦3丁目14-15 タチバナビル2F",
    prefecture: "東京都",
    access: "JR「田町駅」徒歩6分",
    price: "月4回 14,190円〜",
    priceList: [
      "月4回（EFT4）14,190円／月8回（EFT8）26,290円／通い放題（UNLIMITED）40,590円（公式店舗ページ・税表記なし）",
      "入会金 5,500円（税表記なし）",
      "30分の体験レッスン 無料",
      "料金は公式店舗ページの表記（2026年10月17日確認）。年間一括払いは店舗に問い合わせ",
    ],
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
    address: "〒162-0825 東京都新宿区神楽坂6丁目48 トモスビル 2F",
    access: "東京メトロ東西線「神楽坂駅」1A出口より徒歩30秒",
    price: "月4回 14,190円〜",
    priceList: [
      "月4回（EFT4）14,190円／月8回（EFT8）26,290円／通い放題（UNLIMITED）40,590円（公式店舗ページ・税表記なし）",
      "入会金 5,500円（税表記なし）",
      "30分の体験レッスン 無料",
      "料金は公式店舗ページの表記（2026年10月17日確認）。年間一括払いは店舗に問い合わせ",
    ],
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
