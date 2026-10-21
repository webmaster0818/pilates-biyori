import Link from 'next/link'
import { STUDIO_REVIEWS } from '@/data/studio-reviews'
import { brandSlugOf } from '@/lib/brandLink'
import { storePageOf } from '@/lib/storePages'

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
  // 同じ店舗が表記ゆれ（空白の有無など）で2キーある場合に二重計上しないよう、Googleマップの出典URLで1店舗にまとめる（2026-10-09 Pilates Mee で5店舗の重複を確認）
  const seen = new Set<string>()
  const rows = Object.values(STUDIO_REVIEWS).filter((r) => {
    const place = r.mapsUri.match(/cid=(\d+)/)?.[1] ?? r.mapsUri
    if (brandSlugOf(r.name) !== brandSlug || seen.has(place)) return false
    seen.add(place)
    return true
  })
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
  // 2026-10-21: 「リントスル 天神店 口コミ」等の店舗名×口コミクエリがブランドハブに着地していた。
  // 口コミ要約がある店舗のうち店舗ページがあるものを、ここから店舗ページへ辿れるようにする（店舗ページ側に要約・公式の声・基本情報がある）
  const withPage = rows
    .map((r) => ({ r, page: storePageOf(r.name) }))
    .filter((x): x is { r: typeof rows[number]; page: NonNullable<ReturnType<typeof storePageOf>> } => !!x.page && x.page.urlSlug.startsWith(`${brandSlug}-`))
    .filter((x, i, arr) => arr.findIndex((y) => y.page.urlSlug === x.page.urlSlug) === i)
    // 店舗ページ側（BrandAreaReceiver）で同じ口コミ要約が表示される店舗だけに限る（引き方を同じにする）
    .filter(({ r, page }) => {
      const sp = (v: string) => v.replace(/[\s　]/g, '')
      const shownOnPage =
        STUDIO_REVIEWS[page.storeName] ?? Object.values(STUDIO_REVIEWS).find((x) => sp(x.name) === sp(page.storeName))
      return !!shownOnPage && shownOnPage.mapsUri === r.mapsUri
    })

  return (
    <section className="mb-10 scroll-mt-24" id="reviews">
      <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">
        {brandName}の口コミ・評判（Googleマップ {rows.length}店舗分の要約）
      </h2>

      <div className="bg-warm-50 border border-warm-200 p-5 mb-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-[11px] text-warm-500 mb-1">口コミを確認した店舗</p>
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
            ? `★4.0未満の店舗も${low}店あり、同じ基準で掲載しています。ブランド全体の平均だけで判断せず、通う予定の店舗を個別にご確認ください。`
            : 'ブランド全体の平均が高くても店舗による差があるため、通う予定の店舗を個別にご確認ください。'}
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

      {withPage.length > 0 && (
        <div className="mt-5 bg-white border border-warm-200 p-5">
          <p className="text-sm font-medium text-warm-900 mb-3">店舗ごとの口コミ・料金・アクセス（店舗ページ）</p>
          <div className="flex flex-wrap gap-2">
            {withPage.map(({ r, page }) => (
              <Link
                key={page.urlSlug}
                href={`/brands/${page.urlSlug}/`}
                className="text-xs text-warm-800 border border-warm-300 bg-warm-50 px-3 py-1.5 hover:border-warm-500 transition-colors"
              >
                {page.storeName}の口コミ（★{r.rating}・{r.userRatings.toLocaleString()}件）
              </Link>
            ))}
          </div>
        </div>
      )}

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
        ※上記は、編集部がGoogleマップの口コミを読んで作成した要約であり、口コミ本文の転載ではありません。個人名は含めていません。
        評価・件数は{fetched[0]}〜{fetched[fetched.length - 1]}に取得した実測値で、現在の数値とは異なる場合があります。感じ方には個人差があります。
      </p>
    </section>
  )
}
