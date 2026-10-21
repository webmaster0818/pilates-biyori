import type { Metadata } from "next";
import { BrandAreaReceiver } from "@/components/BrandAreaReceiver";
import { getG1Store } from "@/data/g1-stores";

const SLUG = "rintosull-tenjin";
const store = getG1Store(SLUG)!;

export const metadata: Metadata = {
  // 2026-10-21: 「リントスル 天神店 口コミ」がブランドページ（17.8位）に着地していたため、店舗ページの title に店舗名と口コミを入れる（エリア先頭は維持）
  title: `${store.areaQuery}のRintosull（リントスル）天神店の口コミ・料金・アクセス｜天神駅西1出口すぐ`,
  description: `Rintosull（リントスル）天神店の口コミ（Googleマップの要約と公式の会員様の声）、料金（4・フルタイム 月8,800円ほか3プラン）、体験会、アクセス（天神駅西1出口すぐ）、定休日、設備を公式の店舗ページで確認してまとめています。`,
  alternates: { canonical: `https://biyori-pilates.com/brands/${SLUG}/` },
};

export default function Page() {
  return <BrandAreaReceiver store={store} brandSlug="rintosull" />;
}
