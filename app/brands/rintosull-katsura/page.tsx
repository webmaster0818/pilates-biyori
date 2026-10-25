import type { Metadata } from "next";
import { BrandAreaReceiver } from "@/components/BrandAreaReceiver";
import { getG1Store } from "@/data/g1-stores";

const SLUG = "rintosull-katsura";
const store = getG1Store(SLUG)!;

export const metadata: Metadata = {
  // 2026-10-25: 「リントスル 桂店 レビュー」10.4位・「rintsull 桂店 レビュー」10.6位。title に店舗名＋口コミ・レビューを入れる（王子店 10/23 と同じ型）
  title: `Rintosull（リントスル）京都桂店の口コミ・レビュー・料金｜桂駅西口徒歩1分`,
  description: `Rintosull（リントスル）京都桂店の口コミ・レビュー（公式掲載の声とGoogleマップの要約）、料金（4・フルタイム 月8,800円ほか3プラン）、無料体験会、定休日（日曜・第4水曜）、設備を公式の店舗ページで確認してまとめています。`,
  alternates: { canonical: `https://biyori-pilates.com/brands/${SLUG}/` },
};

export default function Page() {
  return <BrandAreaReceiver store={store} brandSlug="rintosull" />;
}
