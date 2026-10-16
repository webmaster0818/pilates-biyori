import type { Metadata } from "next";
import { BrandAreaReceiver } from "@/components/BrandAreaReceiver";
import { getClubPilatesStore } from "@/data/club-pilates-stores";

const SLUG = "club-pilates-toyosu";
const store = getClubPilatesStore(SLUG)!;

export const metadata: Metadata = {
  title: `${store.areaQuery}のCLUB PILATES｜料金・体験・アクセスと店舗情報【2026年8月】`,
  description: `${store.areaQuery}のCLUB PILATES（${store.storeName}）の料金・無料イントロクラス・アクセスを掲載しています。${store.access}です。${store.areaQuery}周辺のピラティス比較・ブランド全店舗一覧へのリンクも掲載しています。`,
  alternates: { canonical: `https://biyori-pilates.com/brands/${SLUG}/` },
};

export default function Page() {
  return <BrandAreaReceiver store={store} brandSlug="club-pilates" />;
}
