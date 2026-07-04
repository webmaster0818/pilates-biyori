import type { Metadata } from "next";
import { BrandAreaReceiver } from "@/components/BrandAreaReceiver";
import { getBdcStore } from "@/data/bdc-stores";

const SLUG = "bdc-omotesando";
const store = getBdcStore(SLUG)!;

export const metadata: Metadata = {
  title: `BDC PILATES ${store.areaQuery}の料金・体験・アクセス【2026年7月】｜マシンピラティス`,
  description: `BDC PILATES ${store.areaQuery}（${store.storeName}）の料金・体験レッスン・アクセスを当サイト掲載データで整理。${store.access}。${store.areaQuery}周辺のピラティス比較・ブランド全店舗一覧へのリンク付き。`,
  alternates: { canonical: `https://biyori-pilates.com/brands/${SLUG}/` },
};

export default function Page() {
  return <BrandAreaReceiver store={store} />;
}
