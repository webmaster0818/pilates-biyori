// P0①: ブランド×エリア受け皿（指名クエリ「BDC ピラティス {エリア}」の刈り取り）。
// データは data/brands-aggregate.json のBDC実店舗と一致（架空ゼロ・住所が公式非開示の店はその旨を表記）。
export type BdcStore = {
  urlSlug: string; // /brands/{urlSlug}/
  areaQuery: string; // 指名クエリのエリア語（二子玉川 等）
  storeName: string;
  address: string;
  addressIsVague?: boolean; // 公式が詳細住所非開示のエリア（誇張しない）
  access: string;
  price: string;
  /** 基本情報の「料金」欄に1行ずつ出す一覧（あれば price の代わり）。2026-10-09 Pilates Mee（クライアント指示） */
  priceList?: string[];
  trial: string;
  rating?: number;
  prefecture?: string; // 構造化データareaServed用（住所非開示店。例: 兵庫県）
  areaSlug: string; // 周辺エリア比較 /area/{areaSlug}/
  areaLabel: string;
  nearby: { slug: string; label: string }[]; // 近隣エリアへの内部リンク
  /* 以下は公式の店舗ページで確認できた店舗だけに入れる（2026-10-19 the SILK 上野店から）。無い店舗では何も出さない */
  nameAlias?: string; // h1 の表記ゆれ（例: シルク）
  hours?: string;
  closed?: string;
  studioType?: string;
  storeNotes?: string[]; // 基本情報の下に出す公式の注記
  officialStoreUrl?: string; // 公式の店舗ページ（計測リンクにしない）
  checkedAt?: string;
  /* 2026-10-21 Rintosull 天神店から: 店舗名×口コミクエリの受け皿用。無い店舗では何も出さない */
  h1Words?: string; // h1 の「料金・」の前に入れる語（例: 口コミ・）
  officialVoices?: { text: string; date: string }[]; // 公式の店舗ページに掲載されている会員の声（原文の一部をそのまま引用）
  officialVoicesLabel?: string; // 出典の表示名（例: Rintosull 天神店 公式店舗ページ「会員様の声」）
  reviewTrend?: string[]; // 公式の声と Google 口コミ要約の両方から読める傾向（出典を併記した編集部の整理）
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
    address: "東京都渋谷区恵比寿1-20-4 Sreed EBISU B1",
    access: "JR恵比寿駅東口 徒歩3分（公式表記）",
    price: "月4回 16,280円（税込）",
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
    address: "東京都港区南青山5-7-17 青山小原ビル(小原流会館)8F（A studio）／東京都渋谷区神宮前4-9-1 神宮前AKビル201（B studio）",
    access: "表参道駅 徒歩2分（公式表記）",
    price: "月4回 16,280円（税込）",
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
