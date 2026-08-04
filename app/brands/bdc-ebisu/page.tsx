import type { Metadata } from "next";
import { BrandAreaReceiver } from "@/components/BrandAreaReceiver";
import { getBdcStore } from "@/data/bdc-stores";

const SLUG = "bdc-ebisu";
const store = getBdcStore(SLUG)!;

export const metadata: Metadata = {
  title: `${store.areaQuery}のBDC PILATES｜料金・体験・アクセス【2026年8月】`,
  description: `${store.areaQuery}にあるBDC PILATES（${store.storeName}）の料金・体験レッスン・アクセスを当サイト掲載データで整理。${store.access}。ブランド全体の料金・口コミ・全店舗一覧はBDC PILATESブランドガイドをご覧ください。`,
  alternates: { canonical: `https://biyori-pilates.com/brands/${SLUG}/` },
};

export default function Page() {
  return <BrandAreaReceiver store={store} />;
}
