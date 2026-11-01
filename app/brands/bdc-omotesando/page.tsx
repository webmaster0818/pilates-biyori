import type { Metadata } from "next";
import { BrandAreaReceiver } from "@/components/BrandAreaReceiver";
import { getBdcStore } from "@/data/bdc-stores";

const SLUG = "bdc-omotesando";
const store = getBdcStore(SLUG)!;

export const metadata: Metadata = {
  // 2026-10-29「bdc ピラティス 表参道」がこのページ（26.1位）と /brands/bdc/（47.9位）に割れていた → 表参道の主ページはここ。語順「BDC PILATES 表参道」を title 先頭に
  title: `BDC PILATES 表参道スタジオ（BDCピラティス）の料金・体験・アクセス｜表参道駅徒歩2分`,
  description: `BDC PILATES（BDCピラティス）表参道スタジオは表参道駅徒歩2分（A studio・B studio）。グループ月4回16,280円（税込）、最大8名のマシンピラティス。グループ体験は11月30日までのキャンペーンで1,100円（通常4,070円・公式ページで2026年11月1日確認）。`,
  alternates: { canonical: `https://biyori-pilates.com/brands/${SLUG}/` },
};

export default function Page() {
  return <BrandAreaReceiver store={store} />;
}
