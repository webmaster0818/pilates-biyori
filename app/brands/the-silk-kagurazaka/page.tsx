import type { Metadata } from "next";
import { BrandAreaReceiver } from "@/components/BrandAreaReceiver";
import { getTheSilkStore } from "@/data/the-silk-stores";

const SLUG = "the-silk-kagurazaka";
const store = getTheSilkStore(SLUG)!;

export const metadata: Metadata = {
  title: `神楽坂のthe SILK（ザ シルク）｜料金・体験・口コミとアクセス`,
  description: `神楽坂のthe SILK（the SILK 神楽坂店）の料金・体験レッスン・アクセスを掲載データで整理。${store.access}。Googleの口コミをもとにした編集部の要約（出典リンクつき）と、神楽坂エリアのピラティス比較へのリンク付き。`,
  alternates: { canonical: `https://biyori-pilates.com/brands/${SLUG}/` },
};

export default function Page() {
  return <BrandAreaReceiver store={store} brandSlug="the-silk" />;
}
