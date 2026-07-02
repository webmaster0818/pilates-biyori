import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import { BRANDS, getBrand } from '@/data/brands'
import brandStores from '@/data/brands-aggregate.json'

type Store = {
  name: string
  price?: string
  trial?: string
  rating?: number
  officialUrl?: string
  address?: string
  access?: string
  areaSlug: string
  areaName: string
}

const STORES: Record<string, Store[]> = brandStores as Record<string, Store[]>

export function generateStaticParams() {
  return BRANDS.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const brand = getBrand(slug)
  if (!brand) return { title: 'ブランドが見つかりません' }
  const stores = STORES[slug] ?? []
  const kw = brand.useHyoban ? '料金・評判・店舗一覧' : '料金・体験・店舗一覧'
  return {
    title: `${brand.name}の${kw}【2026年7月】｜掲載${stores.length}店舗を比較`,
    description: `${brand.name}の料金プラン・体験レッスン・店舗一覧を掲載データから整理。${brand.tagline}。掲載${stores.length}店舗のエリア別リンク付きで、近くの店舗がすぐ見つかります。`,
    alternates: { canonical: `https://biyori-pilates.com/brands/${slug}/` },
  }
}

function priceSummary(stores: Store[]): { label: string; count: number }[] {
  const freq = new Map<string, number>()
  for (const s of stores) {
    if (s.price && s.price !== '要問合せ' && !s.price.includes('公式サイト参照')) {
      freq.set(s.price, (freq.get(s.price) ?? 0) + 1)
    }
  }
  return [...freq.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([label, count]) => ({ label, count }))
}

function ratingSummary(stores: Store[]): { avg: string; n: number } | null {
  const rated = stores.filter((s) => s.rating != null)
  if (rated.length < 5) return null
  const avg = rated.reduce((a, s) => a + (s.rating ?? 0), 0) / rated.length
  return { avg: avg.toFixed(2), n: rated.length }
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const brand = getBrand(slug)
  if (!brand) notFound()
  const stores = (STORES[slug] ?? []).slice().sort((a, b) => a.areaSlug.localeCompare(b.areaSlug))
  const prices = priceSummary(stores)
  const rating = ratingSummary(stores)
  const freeTrial = stores.filter((s) => s.trial && (s.trial.includes('無料') || s.trial.includes('0円'))).length

  return (
    <>
      <Navigation />
      <FAQSchema faqs={brand.faq.map((f) => ({ question: f.q, answer: f.a }))} />
      <BreadcrumbSchema
        items={[
          { name: 'ホーム', url: 'https://biyori-pilates.com/' },
          { name: 'ブランド一覧', url: 'https://biyori-pilates.com/brands/' },
          { name: brand.name, url: `https://biyori-pilates.com/brands/${brand.slug}/` },
        ]}
      />
      <main className="bg-warm-50 min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-5">
          <nav className="text-xs text-warm-500 mb-6">
            <Link href="/" className="hover:text-warm-800">ホーム</Link>
            <span className="mx-2">›</span>
            <Link href="/brands/" className="hover:text-warm-800">ブランド一覧</Link>
            <span className="mx-2">›</span>
            <span className="text-warm-800">{brand.name}</span>
          </nav>

          <p className="section-en text-warm-400 mb-2 font-medium">Brand Guide</p>
          <h1 className="text-2xl md:text-3xl font-light text-warm-900 tracking-tight mb-3">
            {brand.name}の{brand.useHyoban ? '料金・評判・店舗一覧' : '料金・体験・店舗一覧'}
            <span className="block text-base text-warm-500 mt-2 font-light">{brand.tagline}</span>
          </h1>

          {/* 結論ボックス */}
          <section className="bg-white border border-warm-200 p-6 mb-10">
            <p className="text-xs font-medium text-warm-400 uppercase tracking-[0.15em] mb-3">まず結論</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-light text-warm-900">{stores.length}</p>
                <p className="text-xs text-warm-500 mt-1">当サイト掲載店舗</p>
              </div>
              <div>
                <p className="text-2xl font-light text-warm-900">{prices[0] ? prices[0].label.replace(/（.*?）/g, '').split(/[／/]/)[0].trim() : '公式参照'}</p>
                <p className="text-xs text-warm-500 mt-1">代表的なプラン</p>
              </div>
              <div>
                <p className="text-2xl font-light text-warm-900">{freeTrial > 0 ? `${freeTrial}店舗` : '—'}</p>
                <p className="text-xs text-warm-500 mt-1">無料体験の掲載店舗</p>
              </div>
              <div>
                <p className="text-2xl font-light text-warm-900">{rating ? `★${rating.avg}` : '—'}</p>
                <p className="text-xs text-warm-500 mt-1">{rating ? `平均評価（${rating.n}店舗集計）` : '評価データ準備中'}</p>
              </div>
            </div>
            {rating && (
              <p className="text-[11px] text-warm-400 mt-3 leading-relaxed">
                ※平均評価は当サイトの各店舗ページに掲載している評価を集計したものです（{rating.n}店舗・調査時点）。
              </p>
            )}
          </section>

          {/* 特徴 */}
          <section className="mb-10">
            <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">{brand.name}の特徴</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {brand.features.map((f) => (
                <span key={f} className="text-xs text-warm-700 border border-warm-300 bg-white px-3 py-1.5">{f}</span>
              ))}
            </div>
            {brand.intro.map((p, i) => (
              <p key={i} className="text-sm text-warm-700 leading-relaxed mb-3 font-light">{p}</p>
            ))}
            {brand.note && <p className="text-xs text-warm-500 leading-relaxed">{brand.note}</p>}
          </section>

          {/* 料金 */}
          <section className="mb-10">
            <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">{brand.name}の料金プラン</h2>
            <p className="text-sm text-warm-700 leading-relaxed mb-4 font-light">{brand.pricingNote}</p>
            {prices.length > 0 && (
              <div className="bg-white border border-warm-200 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-warm-200 text-left">
                      <th className="px-4 py-3 text-xs font-medium text-warm-500 uppercase tracking-wider">当サイト掲載店舗の代表的なプラン</th>
                      <th className="px-4 py-3 text-xs font-medium text-warm-500 uppercase tracking-wider whitespace-nowrap">掲載店舗数</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prices.map((p) => (
                      <tr key={p.label} className="border-b border-warm-100 last:border-0">
                        <td className="px-4 py-3 text-warm-800">{p.label}</td>
                        <td className="px-4 py-3 text-warm-500">{p.count}店舗</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <p className="text-[11px] text-warm-400 mt-3 leading-relaxed">
              ※料金は当サイト掲載時点の情報の集計であり、金額を保証するものではありません。最新の料金・キャンペーンは公式サイトでご確認ください。
            </p>
          </section>

          {/* 体験 */}
          <section className="mb-10">
            <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">体験レッスン</h2>
            <p className="text-sm text-warm-700 leading-relaxed font-light">{brand.trialNote}</p>
          </section>

          {/* こんな人に向いている */}
          <section className="mb-10">
            <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">こんな人に向いている</h2>
            <ul className="space-y-2">
              {brand.goodFor.map((g) => (
                <li key={g} className="text-sm text-warm-700 font-light flex gap-2">
                  <span className="text-warm-400">✓</span>{g}
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          {brand.ctaUrl && (
            <section className="mb-10 text-center bg-white border border-warm-200 p-8">
              <p className="text-sm text-warm-600 mb-4 font-light">体験レッスンの空き状況・最新キャンペーンは公式サイトから確認できます。</p>
              <a
                href={brand.ctaUrl}
                target="_blank"
                rel={brand.isPartner ? 'noopener noreferrer sponsored' : 'noopener noreferrer'}
                className="inline-block border border-warm-800 bg-warm-800 text-white px-10 py-3.5 text-xs font-medium uppercase tracking-[0.15em] hover:bg-warm-900 transition-all"
              >
                {brand.ctaLabel ?? '公式サイトを見る'}
              </a>
              {brand.isPartner && <p className="text-[10px] text-warm-400 mt-3">［PR］当サイトはアフィリエイトプログラムを利用しています</p>}
            </section>
          )}

          {/* 店舗一覧 */}
          <section className="mb-10">
            <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">
              {brand.name}の店舗一覧（当サイト掲載{stores.length}店舗）
            </h2>
            <div className="bg-white border border-warm-200 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-warm-200 text-left">
                    <th className="px-4 py-3 text-xs font-medium text-warm-500 uppercase tracking-wider">店舗</th>
                    <th className="px-4 py-3 text-xs font-medium text-warm-500 uppercase tracking-wider whitespace-nowrap">エリア</th>
                    <th className="px-4 py-3 text-xs font-medium text-warm-500 uppercase tracking-wider whitespace-nowrap">体験</th>
                  </tr>
                </thead>
                <tbody>
                  {stores.map((s) => (
                    <tr key={`${s.areaSlug}-${s.name}`} className="border-b border-warm-100 last:border-0">
                      <td className="px-4 py-3 text-warm-800">{s.name}</td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <Link href={`/area/${s.areaSlug}/`} className="text-warm-600 underline decoration-warm-300 hover:text-warm-900">
                          {s.areaName}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-warm-600 whitespace-nowrap">{s.trial ? (s.trial.includes('無料') || s.trial.includes('0円') ? '無料あり' : 'あり') : '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-warm-400 mt-3 leading-relaxed">
              ※エリア名をタップすると、そのエリアの比較ページで周辺スタジオとあわせて確認できます。
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">よくある質問</h2>
            <div className="space-y-4">
              {brand.faq.map((f) => (
                <div key={f.q} className="bg-white border border-warm-200 p-5">
                  <p className="text-sm font-medium text-warm-900 mb-2">Q. {f.q}</p>
                  <p className="text-sm text-warm-700 font-light leading-relaxed">A. {f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 情報引用元 */}
          {brand.officialRef && (
            <p className="text-xs text-warm-500 mb-10">
              情報引用元:{' '}
              <a href={brand.officialRef.url} target="_blank" rel="noopener noreferrer" className="underline decoration-warm-300 hover:text-warm-800">
                {brand.officialRef.label}
              </a>
            </p>
          )}

          {/* 関連リンク */}
          <section className="border-t border-warm-200 pt-8">
            <h2 className="text-sm font-medium text-warm-800 mb-4 uppercase tracking-[0.1em]">他のブランドも比較する</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {BRANDS.filter((b) => b.slug !== brand.slug).map((b) => (
                <Link key={b.slug} href={`/brands/${b.slug}/`} className="text-xs text-warm-600 hover:text-warm-900 border border-warm-200 px-3 py-1.5 hover:border-warm-400 transition-colors bg-white">
                  {b.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/brands/" className="text-xs text-warm-800 underline decoration-warm-300 hover:text-warm-900">ブランド一覧へ</Link>
              <Link href="/area/" className="text-xs text-warm-800 underline decoration-warm-300 hover:text-warm-900">エリアから探す</Link>
              <Link href="/articles/pilates-ryokin-hakusho/" className="text-xs text-warm-800 underline decoration-warm-300 hover:text-warm-900">全国ピラティス料金白書2026</Link>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
