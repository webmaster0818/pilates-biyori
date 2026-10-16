import type { Metadata } from "next";
import { BrandAreaReceiver } from "@/components/BrandAreaReceiver";
import { getTheSilkStore } from "@/data/the-silk-stores";

const SLUG = "the-silk-futakotamagawa";
const store = getTheSilkStore(SLUG)!;

export const metadata: Metadata = {
  title: `二子玉川のthe SILK（ザ シルク）｜料金・体験・口コミとアクセス`,
  description: `二子玉川のthe SILK（the SILK 二子玉川店）の料金・体験レッスン・アクセスを掲載しています。${store.access}です。Googleの口コミの要約（出典付き）と、二子玉川エリアのピラティス比較へのリンクも掲載しています。`,
  alternates: { canonical: `https://biyori-pilates.com/brands/${SLUG}/` },
};

export default function Page() {
  return <BrandAreaReceiver store={store} brandSlug="the-silk" />;
}
