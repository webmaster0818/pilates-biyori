import type { Metadata } from "next";
import { BrandAreaReceiver } from "@/components/BrandAreaReceiver";
import { getBdcStore } from "@/data/bdc-stores";

const SLUG = "bdc-futakotamagawa";
const store = getBdcStore(SLUG)!;

export const metadata: Metadata = {
  // 2026-10-25「bdc ピラティス 二子玉川」17.0位・「二子 玉川」16.5位の受け皿: カナ表記と公式で照合した料金・体験を title/description に
  title: `BDCピラティス 二子玉川スタジオの料金・体験・口コミ｜二子玉川駅徒歩2分（BDC PILATES）`,
  description: `BDC PILATES（BDCピラティス）二子玉川スタジオは二子玉川駅徒歩2分。グループ月3回12,375円〜・月4回16,280円（税込）、最大8名のマシンピラティスで男性も利用可。体験料金と10月31日までのキャンペーン条件を公式ページで確認（2026年10月25日）。`,
  alternates: { canonical: `https://biyori-pilates.com/brands/${SLUG}/` },
};

export default function Page() {
  return <BrandAreaReceiver store={store} />;
}
