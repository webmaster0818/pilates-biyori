// P0①: ブランド×エリア受け皿（指名クエリ「BDC ピラティス {エリア}」の刈り取り）。
// データは data/brands-aggregate.json のBDC実店舗と一致（架空ゼロ・住所が公式非開示の店は正直にその旨表記）。
export type BdcStore = {
  urlSlug: string; // /brands/{urlSlug}/
  areaQuery: string; // 指名クエリのエリア語（二子玉川 等）
  storeName: string;
  address: string;
  addressIsVague?: boolean; // 公式が詳細住所非開示のエリア（誇張しない）
  access: string;
  price: string;
  trial: string;
  rating?: number;
  areaSlug: string; // 周辺エリア比較 /area/{areaSlug}/
  areaLabel: string;
  nearby: { slug: string; label: string }[]; // 近隣エリアへの内部リンク
};

export const bdcStores: BdcStore[] = [
  {
    urlSlug: "bdc-futakotamagawa",
    areaQuery: "二子玉川",
    storeName: "BDC PILATES 二子玉川",
    address: "東京都世田谷区玉川3-6-1 第6明友ビル 6F",
    access: "東急田園都市線・大井町線「二子玉川駅」徒歩2分",
    price: "月4回 15,400円〜",
    trial: "体験レッスン 3,850円",
    rating: 4.7,
    areaSlug: "futakotamagawa",
    areaLabel: "二子玉川",
    nearby: [
      { slug: "jiyugaoka", label: "自由が丘" },
      { slug: "sakura-shinmachi", label: "桜新町" },
      { slug: "mizonokuchi", label: "溝の口" },
    ],
  },
  {
    urlSlug: "bdc-ebisu",
    areaQuery: "恵比寿",
    storeName: "BDC PILATES 恵比寿スタジオ",
    address: "東京都渋谷区恵比寿エリア（詳細な所在地は公式サイトでご確認ください）",
    addressIsVague: true,
    access: "恵比寿駅周辺 / 代官山からも徒歩圏内",
    price: "月4回 11,220円〜",
    trial: "体験レッスン 0円",
    rating: 4.7,
    areaSlug: "ebisu",
    areaLabel: "恵比寿",
    nearby: [
      { slug: "daikanyama", label: "代官山" },
      { slug: "meguro", label: "目黒" },
      { slug: "shibuya", label: "渋谷" },
    ],
  },
  {
    urlSlug: "bdc-omotesando",
    areaQuery: "表参道",
    storeName: "BDC PILATES 表参道スタジオ",
    address: "東京都港区北青山3-12-7 秋月ビル 3F",
    access: "表参道駅 徒歩2分 / 渋谷駅 徒歩9分",
    price: "月4回 11,220円〜",
    trial: "体験レッスン 0円",
    rating: 4.8,
    areaSlug: "omotesando",
    areaLabel: "表参道",
    nearby: [
      { slug: "aoyama-itchome", label: "青山一丁目" },
      { slug: "shibuya", label: "渋谷" },
      { slug: "harajuku", label: "原宿" },
    ],
  },
];

export function getBdcStore(urlSlug: string): BdcStore | undefined {
  return bdcStores.find((s) => s.urlSlug === urlSlug);
}
