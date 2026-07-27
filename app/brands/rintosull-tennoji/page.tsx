import type { Metadata } from "next";
import { BrandAreaReceiver } from "@/components/BrandAreaReceiver";
import { getG1Store } from "@/data/g1-stores";

const SLUG = "rintosull-tennoji";
const store = getG1Store(SLUG)!;

export const metadata: Metadata = {
  title: `Rintosull（リントスル） ${store.areaQuery}の料金・体験・アクセス【2026年7月】｜マシンピラティス`,
  description: `Rintosull（リントスル） ${store.areaQuery}（${store.storeName}）の料金・体験レッスン・アクセスを当サイト掲載データで整理。${store.access}。${store.areaQuery}周辺のピラティス比較・ブランド全店舗一覧へのリンク付き。`,
  alternates: { canonical: `https://biyori-pilates.com/brands/${SLUG}/` },
};

export default function Page() {
  return <BrandAreaReceiver store={store} brandSlug="rintosull" />;
}
