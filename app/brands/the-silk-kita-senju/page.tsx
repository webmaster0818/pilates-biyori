import type { Metadata } from "next";
import { BrandAreaReceiver } from "@/components/BrandAreaReceiver";
import { getTheSilkStore } from "@/data/the-silk-stores";

const SLUG = "the-silk-kita-senju";
const store = getTheSilkStore(SLUG)!;

export const metadata: Metadata = {
  title: `北千住のthe SILK（ザ シルク）｜料金・体験・口コミとアクセス`,
  description: `北千住のthe SILK（the SILK 北千住店）の料金・体験レッスン・アクセスを掲載データで整理。${store.access}。Googleの口コミをもとにした編集部の要約（出典リンクつき）と、北千住エリアのピラティス比較へのリンク付き。`,
  alternates: { canonical: `https://biyori-pilates.com/brands/${SLUG}/` },
};

export default function Page() {
  return <BrandAreaReceiver store={store} brandSlug="the-silk" />;
}
