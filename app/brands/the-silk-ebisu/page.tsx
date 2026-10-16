import type { Metadata } from "next";
import { BrandAreaReceiver } from "@/components/BrandAreaReceiver";
import { getTheSilkStore } from "@/data/the-silk-stores";

const SLUG = "the-silk-ebisu";
const store = getTheSilkStore(SLUG)!;

export const metadata: Metadata = {
  title: `恵比寿のthe SILK（ザ シルク）｜料金・体験・口コミとアクセス`,
  description: `恵比寿のthe SILK（the SILK 恵比寿店）の料金・体験レッスン・アクセスを掲載しています。${store.access}です。Googleの口コミの要約（出典付き）と、恵比寿エリアのピラティス比較へのリンクも掲載しています。`,
  alternates: { canonical: `https://biyori-pilates.com/brands/${SLUG}/` },
};

export default function Page() {
  return <BrandAreaReceiver store={store} brandSlug="the-silk" />;
}
