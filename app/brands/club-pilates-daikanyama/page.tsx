import type { Metadata } from "next";
import { BrandAreaReceiver } from "@/components/BrandAreaReceiver";
import { getClubPilatesStore } from "@/data/club-pilates-stores";

const SLUG = "club-pilates-daikanyama";
const store = getClubPilatesStore(SLUG)!;

export const metadata: Metadata = {
  title: `CLUB PILATES ${store.areaQuery}の料金・体験・アクセス【2026年7月】｜マシンピラティス`,
  description: `CLUB PILATES ${store.areaQuery}（${store.storeName}）の料金・無料イントロクラス・アクセスを当サイト掲載データで整理。${store.access}。${store.areaQuery}周辺のピラティス比較・ブランド全店舗一覧へのリンク付き。`,
  alternates: { canonical: `https://biyori-pilates.com/brands/${SLUG}/` },
};

export default function Page() {
  return <BrandAreaReceiver store={store} brandSlug="club-pilates" />;
}
