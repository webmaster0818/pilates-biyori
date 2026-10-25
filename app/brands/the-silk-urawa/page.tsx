import type { Metadata } from "next";
import { BrandAreaReceiver } from "@/components/BrandAreaReceiver";
import { getTheSilkStore } from "@/data/the-silk-stores";

const SLUG = "the-silk-urawa";
const store = getTheSilkStore(SLUG)!;

export const metadata: Metadata = {
  title: `the SILK（シルク）浦和店の口コミ・レビュー｜料金・体験・営業時間・アクセス`,
  description: `the SILK（シルク）浦和店の口コミ・レビューをGoogleマップの評価と要約（出典付き）で掲載。JR浦和駅徒歩4分の女性限定グループピラティスで、月3回13,280円〜（税込）、体験50分0円、営業7:30〜21:00。2026年10月25日に公式の店舗ページで確認した値です。`,
  alternates: { canonical: `https://biyori-pilates.com/brands/${SLUG}/` },
};

export default function Page() {
  return <BrandAreaReceiver store={store} brandSlug="the-silk" />;
}
