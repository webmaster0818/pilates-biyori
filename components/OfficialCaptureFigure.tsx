import { officialCaptureOf } from "@/data/official-captures";

// 公式サイトのファーストビューのキャプチャ（ブランドページ・店舗ページ共通）。
// data/official-captures.ts に目視確認済みの slug があるときだけ描画し、無いページには何も出さない。
// リンクは公式ドメインの素リンク（出典表示のため sponsored は付けない）。
function jpDate(iso: string): string {
  const [y, m, d] = iso.split("-").map((v) => Number(v));
  return `${y}年${m}月${d}日`;
}

export function OfficialCaptureFigure({ slug }: { slug: string }) {
  const cap = officialCaptureOf(slug);
  if (!cap) return null;
  return (
    <figure className="mb-8" aria-label={`${cap.name}の公式サイトのキャプチャ`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={cap.src}
        width={2560}
        height={1600}
        loading="lazy"
        decoding="async"
        alt={`${cap.name}の公式サイト（${cap.label}）のキャプチャ`}
        className="block max-w-full h-auto w-full rounded border border-warm-200 bg-white"
      />
      <figcaption className="text-[11px] text-warm-500 mt-2 leading-relaxed">
        {cap.name} 公式サイトのキャプチャ（{jpDate(cap.date)}取得）
        <span className="block">
          出典：
          <a href={cap.url} target="_blank" rel="noopener noreferrer" className="underline decoration-warm-300 hover:text-warm-800 break-all">
            {cap.url}
          </a>
        </span>
      </figcaption>
    </figure>
  );
}
