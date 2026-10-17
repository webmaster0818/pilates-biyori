import type { Metadata } from "next";
import { BrandAreaReceiver } from "@/components/BrandAreaReceiver";
import { getG1Store } from "@/data/g1-stores";

const SLUG = "rintosull-katsura";
const store = getG1Store(SLUG)!;

export const metadata: Metadata = {
  title: `Rintosull 京都桂店の口コミ・料金・体験・アクセス｜マシンピラティス`,
  description: `Rintosull（リントスル）京都桂店の口コミ評判・料金・体験レッスン・アクセスを掲載しています。${store.access}です。Googleの口コミの要約（出典付き）と、桂エリアのピラティス比較へのリンクも掲載しています。`,
  alternates: { canonical: `https://biyori-pilates.com/brands/${SLUG}/` },
};

export default function Page() {
  return <BrandAreaReceiver store={store} brandSlug="rintosull" />;
}
