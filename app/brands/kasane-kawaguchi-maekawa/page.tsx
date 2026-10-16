import type { Metadata } from "next";
import { BrandAreaReceiver } from "@/components/BrandAreaReceiver";
import { getKasaneStore } from "@/data/kasane-stores";

const SLUG = "kasane-kawaguchi-maekawa";
const store = getKasaneStore(SLUG)!;

export const metadata: Metadata = {
  title: `${store.storeName}の口コミ・評判は？料金・体験・アクセス【2026年8月】`,
  description: `${store.storeName}の料金・体験レッスン・アクセスを掲載しています。${store.access}です。店舗別の口コミの探し方と、Pilates KASANEブランド全体の公式公開情報にもとづく評判・全店舗一覧へのリンクも掲載しています。`,
  alternates: { canonical: `https://biyori-pilates.com/brands/${SLUG}/` },
};

export default function Page() {
  return <BrandAreaReceiver store={store} brandSlug="kasane" />;
}
