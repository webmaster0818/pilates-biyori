import type { Metadata } from "next";
import { BrandAreaReceiver } from "@/components/BrandAreaReceiver";
import { getTheSilkStore } from "@/data/the-silk-stores";

const SLUG = "the-silk-ueno";
const store = getTheSilkStore(SLUG)!;

export const metadata: Metadata = {
  title: `the SILK（シルク）上野店｜料金・体験・営業時間・アクセスと口コミ`,
  description: `the SILK（シルク）上野店は京成上野駅・上野広小路駅から徒歩1分の女性限定グループピラティス。月3回13,280円〜（税込）、体験50分0円、営業8:00〜21:30。公式の店舗ページで2026年10月19日に確認した値とGoogle口コミの要約を掲載しています。`,
  alternates: { canonical: `https://biyori-pilates.com/brands/${SLUG}/` },
};

export default function Page() {
  return <BrandAreaReceiver store={store} brandSlug="the-silk" />;
}
