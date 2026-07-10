import type { Metadata } from "next";
import { BrandAreaReceiver } from "@/components/BrandAreaReceiver";
import { getKasaneStore } from "@/data/kasane-stores";

const SLUG = "kasane-hirakata";
const store = getKasaneStore(SLUG)!;

export const metadata: Metadata = {
  title: `${store.storeName}の口コミ・評判は？料金・体験・アクセス【2026年7月】`,
  description: `${store.storeName}の料金・体験レッスン・アクセスを当サイト掲載データで整理。${store.access}。店舗別の口コミの探し方と、Pilates KASANEブランド全体の公式公開情報にもとづく評判・全店舗一覧へのリンク付き。`,
  alternates: { canonical: `https://biyori-pilates.com/brands/${SLUG}/` },
};

export default function Page() {
  return <BrandAreaReceiver store={store} brandSlug="kasane" />;
}
