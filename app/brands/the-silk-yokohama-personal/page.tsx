import type { Metadata } from "next";
import { BrandAreaReceiver } from "@/components/BrandAreaReceiver";
import { getTheSilkStore } from "@/data/the-silk-stores";

const SLUG = "the-silk-yokohama-personal";
const store = getTheSilkStore(SLUG)!;

export const metadata: Metadata = {
  title: `横浜パーソナルのthe SILK（ザ シルク）｜料金・体験・口コミとアクセス`,
  // 2026-11-13 グループ料金・体験無料と載せていたが、公式ではパーソナル専門（グループ受講不可）→ 公式の Private 料金・体験2,000円に訂正
  description: `the SILK（シルク）横浜パーソナル店は女性限定のパーソナル専門（グループ受講なし）。月2回22,000円〜（税込）、初回体験50分2,000円、JR横浜駅徒歩3分・営業10:00〜19:00（公式 2026年11月13日確認）。`,
  alternates: { canonical: `https://biyori-pilates.com/brands/${SLUG}/` },
};

export default function Page() {
  return <BrandAreaReceiver store={store} brandSlug="the-silk" />;
}
