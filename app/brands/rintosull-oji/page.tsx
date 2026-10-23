import type { Metadata } from "next";
import { BrandAreaReceiver } from "@/components/BrandAreaReceiver";
import { getG1Store } from "@/data/g1-stores";

const SLUG = "rintosull-oji";
const store = getG1Store(SLUG)!;

export const metadata: Metadata = {
  // 2026-10-23: 「リントスル 王子店 口コミ」がブランドページ（18.1位）に着地していたため、店舗ページの title に店舗名と口コミを入れる（天神店 10/21 と同じ型）
  title: `${store.areaQuery}のRintosull（リントスル）王子店の口コミ・料金・アクセス｜王子駅出口5徒歩1分`,
  description: `Rintosull（リントスル）王子店の口コミ（Googleマップの要約）、料金（4・フルタイム 月8,800円ほか3プラン）、無料体験会、アクセス（王子駅出口5徒歩1分）、定休日、設備を公式の店舗ページで確認してまとめています。`,
  alternates: { canonical: `https://biyori-pilates.com/brands/${SLUG}/` },
};

export default function Page() {
  return <BrandAreaReceiver store={store} brandSlug="rintosull" />;
}
