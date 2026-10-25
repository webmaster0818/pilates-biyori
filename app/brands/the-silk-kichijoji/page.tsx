import type { Metadata } from "next";
import { BrandAreaReceiver } from "@/components/BrandAreaReceiver";
import { getTheSilkStore } from "@/data/the-silk-stores";

const SLUG = "the-silk-kichijoji";
const store = getTheSilkStore(SLUG)!;

export const metadata: Metadata = {
  title: `the SILK（シルク）ピラティス 吉祥寺店｜料金・体験・営業時間と口コミ`,
  description: `シルク（the SILK）のピラティス吉祥寺店はJR吉祥寺駅徒歩5分の女性限定グループ専門スタジオ。月3回13,280円〜（税込）、体験50分0円、営業7:30〜21:00。2026年10月25日に公式の店舗ページで確認した値とGoogle口コミの要約を掲載しています。`,
  alternates: { canonical: `https://biyori-pilates.com/brands/${SLUG}/` },
};

export default function Page() {
  return <BrandAreaReceiver store={store} brandSlug="the-silk" />;
}
