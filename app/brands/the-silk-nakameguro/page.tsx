import type { Metadata } from "next";
import { BrandAreaReceiver } from "@/components/BrandAreaReceiver";
import { getTheSilkStore } from "@/data/the-silk-stores";

const SLUG = "the-silk-nakameguro";
const store = getTheSilkStore(SLUG)!;

export const metadata: Metadata = {
  title: `中目黒のthe SILK（ザ シルク）｜料金・体験・口コミとアクセス`,
  description: `中目黒のthe SILK（the SILK 中目黒店）の料金・体験レッスン・アクセスを掲載データで整理。${store.access}。Googleの口コミをもとにした編集部の要約（出典リンクつき）と、代官山エリアのピラティス比較へのリンク付き。`,
  alternates: { canonical: `https://biyori-pilates.com/brands/${SLUG}/` },
};

export default function Page() {
  return <BrandAreaReceiver store={store} brandSlug="the-silk" />;
}
