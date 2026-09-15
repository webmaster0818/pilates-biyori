import type { Metadata } from "next";
import { BrandAreaReceiver } from "@/components/BrandAreaReceiver";
import { getTheSilkStore } from "@/data/the-silk-stores";

const SLUG = "the-silk-umeda";
const store = getTheSilkStore(SLUG)!;

export const metadata: Metadata = {
  title: `梅田のthe SILK（ザ シルク）｜料金・体験・口コミとアクセス`,
  description: `梅田のthe SILK（the SILK 大阪梅田店）の料金・体験レッスン・アクセスを掲載データで整理。${store.access}。Googleの口コミをもとにした編集部の要約（出典リンクつき）と、梅田エリアのピラティス比較へのリンク付き。`,
  alternates: { canonical: `https://biyori-pilates.com/brands/${SLUG}/` },
};

export default function Page() {
  return <BrandAreaReceiver store={store} brandSlug="the-silk" />;
}
