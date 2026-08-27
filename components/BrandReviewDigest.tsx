import Link from 'next/link'
import { STUDIO_REVIEWS } from '@/data/studio-reviews'
import { brandSlugOf } from '@/lib/brandLink'

// ブランドハブ用の口コミ集約。
//
// 背景（2026-08-27 GSC実測）: 「bdc ピラティス 口コミ」「ピラティスミー 口コミ」等の
// ブランド×口コミクエリは pos35〜95 で0クリック。ブランドページには公式サイトからの
// 「利用者の声」しか無く、569店舗ぶんのGoogle口コミ要約はエリア/店舗ページ止まりだった。
// ＝ ブランド単位で口コミを調べに来た人に、俯瞰できるものを出せていなかった。
//
// ⚠️ 出すのは編集部が書いた要約のみ。口コミ本文は転載しない（data/studio-reviews.ts の方針）。
// ⚠️ ★は取得できた実値のみ。件数・取得時点を必ず併記し、良い店だけを選ばない
//    （並び順は口コミ件数＝母数の多い順。評価順にすると高評価店だけが上に来る）。

export function BrandReviewDigest({ brandSlug, brandName }: { brandSlug: string; brandName: string }) {
  const rows = Object.values(STUDIO_REVIEWS).filter((r) => brandSlugOf(r.name) === brandSlug)
  if (rows.length < 3) return null // 3店舗未満は「ブランドの傾向」と言えないので出さない

  const totalReviews = rows.reduce((n, r) => n + r.userRatings, 0)
  // 平均は店舗ごとの★の単純平均ではなく、口コミ件数で重みづけ（母数の大きい店を過小評価しないため）
  const weighted = rows.reduce((n, r) => n + r.rating * r.userRatings, 0) / totalReviews
  const ratings = rows.map((r) => r.rating).sort((a, b) => a - b)
  const lo = ratings[0]
  const hi = ratings[ratings.length - 1]
  const fetched = rows.map((r) => r.fetchedAt).sort()
  const shown = [...rows].sort((a, b) => b.userRatings - a.userRatings).slice(0, 6)
  const low = rows.filter((r) => r.rating < 4.0).length

  return (
    <section className="mb-10">
      <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">
        {brandName}の口コミ・評判（Googleマップ {rows.length}店舗ぶんの要約）
      </h2>

      <div className="bg-warm-50 border border-warm-200 p-5 mb-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-[11px] text-warm-500 mb-1">確認できた店舗</p>
            <p className="text-lg font-medium text-warm-900">{rows.length}店舗</p>
          </div>
          <div>
            <p className="text-[11px] text-warm-500 mb-1">口コミ総数</p>
            <p className="text-lg font-medium text-warm-900">{totalReviews.toLocaleString()}件</p>
          </div>
          <div>
            <p className="text-[11px] text-warm-500 mb-1">平均評価</p>
            <p className="text-lg font-medium text-warm-900">★{weighted.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-[11px] text-warm-500 mb-1">店舗ごとの幅</p>
            <p className="text-lg font-medium text-warm-900">
              ★{lo.toFixed(1)}〜{hi.toFixed(1)}
            </p>
          </div>
        </div>
        <p className="text-[11px] text-warm-500 mt-4 leading-relaxed">
          平均は口コミ件数で重みづけした値です。
          {low > 0
            ? `★4.0未満の店舗も${low}店あり、同じ基準で掲載しています。ブランド全体の平均だけで決めず、通う予定の店舗を個別に確認してください。`
            : 'ブランド全体の平均が高くても店舗差はあるため、通う予定の店舗を個別に確認してください。'}
        </p>
      </div>

      <div className="space-y-4">
        {shown.map((r) => (
          <div key={r.name} className="bg-white border border-warm-200 p-5">
            <div className="flex items-baseline justify-between gap-3 flex-wrap mb-2">
              <p className="text-sm font-medium text-warm-900">{r.name}</p>
              <p className="text-xs text-warm-500">
                ★{r.rating}（{r.userRatings.toLocaleString()}件）
              </p>
            </div>
            <p className="text-sm text-warm-700 font-light leading-relaxed">{r.summary}</p>
            <p className="mt-3 text-xs text-warm-500">
              出典:{' '}
              <a
                href={r.mapsUri}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-warm-300 hover:text-warm-800"
              >
                Googleマップの口コミを見る
              </a>
              <span className="text-warm-400">（{r.fetchedAt}時点）</span>
            </p>
          </div>
        ))}
      </div>

      {rows.length > shown.length && (
        <p className="text-xs text-warm-500 mt-4">
          口コミ件数の多い{shown.length}店舗を表示しています。残り{rows.length - shown.length}
          店舗の要約は、各エリアの比較ページに掲載しています。
          <Link href="/area/" className="underline decoration-warm-300 hover:text-warm-800 ml-1">
            エリアから探す
          </Link>
        </p>
      )}

      <p className="text-[11px] text-warm-400 mt-3 leading-relaxed">
        ※上記は当編集部がGoogleマップの口コミを読んで書いた要約で、口コミ本文の転載ではありません。個人名は含めていません。
        評価・件数は{fetched[0]}〜{fetched[fetched.length - 1]}に取得した実測値で、現在の数値とは異なる場合があります。感じ方には個人差があります。
      </p>
    </section>
  )
}
