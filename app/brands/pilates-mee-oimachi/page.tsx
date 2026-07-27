import type { Metadata } from "next";
import { BrandAreaReceiver } from "@/components/BrandAreaReceiver";
import { getG1Store } from "@/data/g1-stores";

const SLUG = "pilates-mee-oimachi";
const store = getG1Store(SLUG)!;

export const metadata: Metadata = {
  title: `Pilates Mee（ピラティスミー） ${store.areaQuery}の料金・体験・アクセス【2026年7月】｜マシンピラティス`,
  description: `Pilates Mee（ピラティスミー） ${store.areaQuery}（${store.storeName}）の料金・体験レッスン・アクセスを当サイト掲載データで整理。${store.access}。${store.areaQuery}周辺のピラティス比較・ブランド全店舗一覧へのリンク付き。`,
  alternates: { canonical: `https://biyori-pilates.com/brands/${SLUG}/` },
};

export default function Page() {
  return <BrandAreaReceiver store={store} brandSlug="pilates-mee" />;
}
