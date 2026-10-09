import { STUDIO_REVIEWS } from '@/data/studio-reviews'
import type { ReviewTheme, ReviewThemes } from '@/data/brands'

/**
 * 口コミに多いテーマと注意点（2026-10-08）
 * BrandReviewDigest が「店舗ごとの要約」なのに対し、こちらは複数店舗に共通するテーマを
 * 良い点／注意点に分けて示す。根拠の店舗は STUDIO_REVIEWS のキーで持ち、出典リンク（Googleマップ）に解決する。
 * キーが STUDIO_REVIEWS に無い店舗は表示しない（存在しない出典を出さないため）。
 */
// 出典リンクの表示名からブランド名を外す（同じブランドのページ内なので店舗名だけで足りる）。
// 2026-10-09: 全提携ブランドに対応（以前は Rintosull／the SILK／BDC のみ）
const BRAND_PREFIX =
  /^(Rintosull（リントスル）|Rintosull |the SILK |BDC PILATES |zen place pilates |ピラティスK |pilates K |Pilates Mee (?!Life)|URBAN CLASSIC PILATES |ELEMENT（[^）]*）|ELEMENT |Pilates KASANE |PILATES KASANE |pilates KASANE |24\/7ピラティス |Dr\.ピラティス |DAYS PILATES |BREST PILATES & BODYMAKE |Celestia |ルキナ |luluto（ルルト）|luluto |ルルト |ピラティススタジオ ルルト )/

function Theme({ t, tone }: { t: ReviewTheme; tone: 'good' | 'caution' }) {
  const refs = t.stores.map((k) => STUDIO_REVIEWS[k]).filter(Boolean)
  return (
    <div className={`border p-5 ${tone === 'caution' ? 'bg-white border-warm-300' : 'bg-white border-warm-200'}`}>
      <p className="text-sm font-medium text-warm-900 mb-2">{t.title}</p>
      <p className="text-sm text-warm-700 font-light leading-relaxed">{t.text}</p>
      {refs.length > 0 && (
        <p className="mt-3 text-xs text-warm-500 leading-relaxed">
          根拠にした店舗の口コミ:{' '}
          {refs.map((r, i) => (
            <span key={r.name}>
              {i > 0 && '／'}
              <a href={r.mapsUri} target="_blank" rel="noopener noreferrer" className="underline decoration-warm-300 hover:text-warm-800">
                {r.name.replace(BRAND_PREFIX, '') || r.name}
              </a>
              <span className="text-warm-400">（★{r.rating}・{r.userRatings.toLocaleString()}件）</span>
            </span>
          ))}
        </p>
      )}
    </div>
  )
}

export function BrandReviewThemes({ brandName, themes }: { brandName: string; themes: ReviewThemes }) {
  const good = themes.good.filter((t) => t.stores.some((k) => STUDIO_REVIEWS[k]))
  const caution = themes.caution.filter((t) => t.stores.some((k) => STUDIO_REVIEWS[k]))
  if (good.length === 0 && caution.length === 0) return null
  return (
    <section className="mb-10">
      <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">
        {brandName}の口コミに多いテーマと注意点
      </h2>
      <p className="text-sm text-warm-600 font-light leading-relaxed mb-5">{themes.basis}</p>

      {caution.length > 0 && (
        <>
          <h3 className="text-sm font-medium text-warm-800 mb-3">入会前に確認したい注意点（低評価に多い内容）</h3>
          <div className="space-y-3 mb-6">
            {caution.map((t) => (
              <Theme key={t.title} t={t} tone="caution" />
            ))}
          </div>
        </>
      )}

      {good.length > 0 && (
        <>
          <h3 className="text-sm font-medium text-warm-800 mb-3">評価されている点（高評価に多い内容）</h3>
          <div className="space-y-3">
            {good.map((t) => (
              <Theme key={t.title} t={t} tone="good" />
            ))}
          </div>
        </>
      )}

      <p className="text-[11px] text-warm-400 mt-4 leading-relaxed">
        ※店舗差が大きいため、ブランド全体の傾向だけで判断せず、通う予定の店舗の口コミを出典リンクから個別に確認してください。評価・件数は取得時点の実測値で、現在とは異なる場合があります。感じ方には個人差があります。
      </p>
    </section>
  )
}
