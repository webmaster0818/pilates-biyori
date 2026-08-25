import type { Metadata } from "next";
import { BrandAreaReceiver } from "@/components/BrandAreaReceiver";
import { getG1Store } from "@/data/g1-stores";

const SLUG = "rintosull-katsura";
const store = getG1Store(SLUG)!;

export const metadata: Metadata = {
  title: `Rintosull 京都桂店の口コミ・料金・体験・アクセス【2026年8月】｜マシンピラティス`,
  description: `Rintosull（リントスル）京都桂店の口コミ評判・料金・体験レッスン・アクセスを整理。${store.access}。Googleの口コミをもとにした編集部の要約（出典リンクつき）と、桂エリアのピラティス比較へのリンク付き。`,
  alternates: { canonical: `https://biyori-pilates.com/brands/${SLUG}/` },
};

export default function Page() {
  return <BrandAreaReceiver store={store} brandSlug="rintosull" />;
}
