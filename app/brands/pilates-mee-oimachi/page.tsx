import type { Metadata } from "next";
import { BrandAreaReceiver } from "@/components/BrandAreaReceiver";
import { getG1Store } from "@/data/g1-stores";

const SLUG = "pilates-mee-oimachi";
const store = getG1Store(SLUG)!;

export const metadata: Metadata = {
  title: `${store.areaQuery}のPilates Mee（ピラティスミー）｜料金・体験・アクセスと店舗情報`,
  description: `${store.areaQuery}のPilates Mee（ピラティスミー）（${store.storeName}）の料金・体験レッスン・アクセスを掲載しています。${store.access}です。${store.areaQuery}周辺のピラティス比較・ブランド全店舗一覧へのリンクも掲載しています。`,
  alternates: { canonical: `https://biyori-pilates.com/brands/${SLUG}/` },
};

export default function Page() {
  return <BrandAreaReceiver store={store} brandSlug="pilates-mee" />;
}
