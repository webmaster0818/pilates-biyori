// P-D: Pilates KASANE×店舗受け皿（GSCで「pilates kasane {店舗} レビュー」等の実需があった店舗のみ）。
// データは各エリアページ掲載の実店舗情報と一致（架空ゼロ）。住所が概略のみの店は正直にその旨表記。
// 店舗別の口コミ一次データは無いため評価は付けず、レビュー意図にはFAQで正直に応える。
import type { BdcStore } from "@/data/bdc-stores";

export const kasaneStores: BdcStore[] = [
  {
    urlSlug: "kasane-hirakata",
    areaQuery: "枚方",
    storeName: "Pilates KASANE 枚方店",
    address: "大阪府枚方市（詳細な所在地は公式サイトでご確認ください）",
    addressIsVague: true,
    access: "京阪本線「枚方市駅」徒歩圏内",
    price: "1回 3,025円〜",
    trial: "体験レッスン 3,000円",
    areaSlug: "hirakata",
    areaLabel: "枚方",
    nearby: [
      { slug: "neyagawa", label: "寝屋川" },
      { slug: "takatsuki", label: "高槻" },
      { slug: "umeda", label: "梅田" },
    ],
  },
  {
    urlSlug: "kasane-hamamatsu",
    areaQuery: "浜松プラザフレスポ",
    storeName: "Pilates KASANE 浜松プラザフレスポ店",
    address: "静岡県浜松市中央区上西町1020-33 浜松プラザフレスポ1階",
    access: "浜松駅から遠鉄バス「浜松プラザ」下車すぐ・東名浜松IC約10分",
    price: "月4回 15,400円〜",
    trial: "体験レッスン 3,000円",
    areaSlug: "hamamatsu",
    areaLabel: "浜松",
    nearby: [
      { slug: "shizuoka", label: "静岡" },
      { slug: "toyohashi", label: "豊橋" },
    ],
  },
  {
    urlSlug: "kasane-kinshicho",
    areaQuery: "錦糸町",
    storeName: "Pilates KASANE 錦糸町店",
    address: "東京都墨田区（錦糸町駅周辺・詳細は公式サイトでご確認ください）",
    addressIsVague: true,
    access: "「錦糸町駅」から徒歩5分",
    price: "月4回 15,400円",
    trial: "体験レッスンあり（金額は公式サイトでご確認ください）",
    areaSlug: "kinshicho",
    areaLabel: "錦糸町",
    nearby: [
      { slug: "kameido", label: "亀戸" },
      { slug: "asakusa", label: "浅草" },
      { slug: "oshiage", label: "押上" },
    ],
  },
  {
    urlSlug: "kasane-okinawa-toyosaki",
    areaQuery: "イーアス沖縄豊崎",
    storeName: "Pilates KASANE イーアス沖縄豊崎店",
    address: "沖縄県豊見城市豊崎3-35 iias沖縄豊崎3F",
    access: "イーアス沖縄豊崎3F（車でのアクセス推奨）",
    price: "月4回 15,400円〜",
    trial: "体験レッスン 3,000円",
    areaSlug: "okinawa",
    areaLabel: "沖縄",
    nearby: [
      { slug: "naha", label: "那覇" },
    ],
  },
  {
    urlSlug: "kasane-kawaguchi-maekawa",
    areaQuery: "イオンモール川口前川",
    storeName: "PILATES KASANE イオンモール川口前川店",
    address: "埼玉県川口市前川1-1-11 イオンモール川口前川内",
    access: "JR京浜東北線「川口駅」バス15分 / 車でのアクセス推奨",
    price: "月4回 11,880円〜",
    trial: "体験レッスン 500円",
    areaSlug: "kawaguchi",
    areaLabel: "川口",
    nearby: [
      { slug: "warabi", label: "蕨" },
      { slug: "akabane", label: "赤羽" },
      { slug: "urawa", label: "浦和" },
    ],
  },
];

export function getKasaneStore(urlSlug: string): BdcStore | undefined {
  return kasaneStores.find((s) => s.urlSlug === urlSlug);
}
