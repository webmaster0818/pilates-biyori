import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import { BRANDS, getBrand } from '@/data/brands'
import brandStores from '@/data/brands-aggregate.json'
import brandVoices from '@/data/brand-voices.json'

type Voice = {
  brand: string
  text: string
  attribute: string | null
  source_label: string
  source_url: string
  type: string
}

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

// 月表記は自動更新（手動更新は陳腐化するため）
const _now = new Date()
const MONTH_TAG = `【${_now.getFullYear()}年${_now.getMonth() + 1}月】`

export function generateStaticParams() {
  return BRANDS.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const brand = getBrand(slug)
  if (!brand) return { title: 'ブランドが見つかりません' }
  const stores = STORES[slug] ?? []
  // the SILKは「店舗一覧」、pilates Kは「店舗数/店舗一覧」クエリで上位表示実績があるため店舗意図を前方に
  const kw =
    brand.slug === 'the-silk' ? '店舗一覧・料金・評判'
    : brand.slug === 'pilates-k' ? '店舗一覧・店舗数・料金'
    : brand.useHyoban ? '料金・評判・店舗一覧' : '料金・体験・店舗一覧'
  return {
    title: `${brand.name}の${kw}${MONTH_TAG}｜掲載${stores.length}店舗を比較`,
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

// 「3,300円」が文字列として「0円」を含むため、無料判定は『無料』表記＋金額パース0円のみ
function isFreeTrial(trial: string): boolean {
  if (trial.includes('無料')) return true
  const m = trial.replace(/,/g, '').match(/(\d{1,6})円/)
  return m ? parseInt(m[1], 10) === 0 : false
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
  const freeTrial = stores.filter((s) => s.trial && isFreeTrial(s.trial)).length

  const os = brand.officialStores
  const storeCountLabel = os ? `全国${os.count}店舗${os.approx ? '以上' : ''}` : null
  // 店舗数FAQ（公式一次情報が確認できたブランドのみ動的に追加＝FAQSchemaと本文が常に同期）
  const faqs = os
    ? [
        {
          q: `${brand.name}の店舗数は？`,
          a: `${os.asOf}時点で${storeCountLabel}です（${os.kind === '公式明記' ? '公式サイトの記載' : '公式サイトの店舗一覧の掲載数'}に基づく）。${os.caveat ?? ''}当サイトではうち${stores.length}店舗をエリアページ付きで掲載しています。`,
        },
        ...brand.faq,
      ]
    : brand.faq

  return (
    <>
      <Navigation />
      <FAQSchema faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
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
                <p className="text-2xl font-light text-warm-900">{os ? `${os.count}${os.approx ? '+' : ''}` : stores.length}</p>
                <p className="text-xs text-warm-500 mt-1">{os ? `全国店舗数（${os.asOf}時点）` : '当サイト掲載店舗'}</p>
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
            {os && (
              <p className="text-[11px] text-warm-400 mt-3 leading-relaxed">
                ※全国店舗数は
                <a href={os.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-warm-300 hover:text-warm-800">
                  公式サイト
                </a>
                の{os.kind === '公式明記' ? '記載' : '店舗一覧の掲載数'}に基づきます（{os.asOf}時点）。{os.caveat ?? ''}当サイトではうち{stores.length}店舗をエリアページ付きで掲載しています。
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
              {brand.slug === 'zen-place' && (
                <div className="mt-6 flex flex-col items-center gap-4">
                  {/* eslint-disable @next/next/no-img-element */}
                  <a href="https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+609HT" target="_blank" rel="nofollow noopener noreferrer sponsored">
                    <img width={300} height={250} alt="zen place pilates" className="max-w-full h-auto" src="https://www25.a8.net/svt/bgt?aid=260626915230&wid=003&eno=01&mid=s00000021478001009000&mc=1" />
                  </a>
                  <img width={1} height={1} alt="" src="https://www18.a8.net/0.gif?a8mat=4B650J+3SXRGI+4LQ4+609HT" />
                  <a href="https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5ZU29" target="_blank" rel="nofollow noopener noreferrer sponsored" className="hidden md:inline-block">
                    <img width={468} height={60} alt="zen place pilates 体験レッスン" className="max-w-full h-auto" src="https://www27.a8.net/svt/bgt?aid=260626915230&wid=003&eno=01&mid=s00000021478001007000&mc=1" />
                  </a>
                  <img width={1} height={1} alt="" src="https://www15.a8.net/0.gif?a8mat=4B650J+3SXRGI+4LQ4+5ZU29" />
                  {/* eslint-enable @next/next/no-img-element */}
                </div>
              )}
              {brand.slug === '24-7pilates' && (
                <div className="mt-6 flex flex-col items-center gap-4">
                  {/* eslint-disable @next/next/no-img-element */}
                  {/* CTAテキストリンク(B1620582)のインプレッション計測 */}
                  <img src="https://t.felmat.net/fmimp/J11817X.B1620582.U1357808" width={1} height={1} alt="" style={{ border: 'none' }} />
                  <a href="https://t.felmat.net/fmcl?ak=J11817X.1.6162671D.U1357808" target="_blank" rel="nofollow noopener noreferrer sponsored" className="hidden md:inline-block">
                    <img width={300} height={250} alt="24/7ピラティス" className="max-w-full h-auto" src="https://t.felmat.net/fmimg/J11817X.6162671D.U1357808" />
                  </a>
                  <a href="https://t.felmat.net/fmcl?ak=J11817X.1.F162669F.U1357808" target="_blank" rel="nofollow noopener noreferrer sponsored" className="md:hidden inline-block">
                    <img width={320} height={50} alt="24/7ピラティス" className="max-w-full h-auto" src="https://t.felmat.net/fmimg/J11817X.F162669F.U1357808" />
                  </a>
                  {/* eslint-enable @next/next/no-img-element */}
                </div>
              )}
              {brand.slug === 'dr-pilates' && (
                <div className="mt-6 flex flex-col items-center gap-4">
                  {/* eslint-disable @next/next/no-img-element */}
                  {/* CTAテキストリンク(Z164554L)のインプレッション計測 */}
                  <img src="https://t.felmat.net/fmimp/Z11979O.Z164554L.U1357808" width={1} height={1} alt="" style={{ border: 'none' }} />
                  <a href="https://t.felmat.net/fmcl?ak=Z11979O.1.V164586G.U1357808" target="_blank" rel="nofollow noopener noreferrer sponsored" className="hidden md:inline-block">
                    <img width={300} height={250} alt="Dr.PILATES(ドクターピラティス)" className="max-w-full h-auto" src="https://t.felmat.net/fmimg/Z11979O.V164586G.U1357808" />
                  </a>
                  <a href="https://t.felmat.net/fmcl?ak=Z11979O.1.X164585F.U1357808" target="_blank" rel="nofollow noopener noreferrer sponsored" className="md:hidden inline-block">
                    <img width={320} height={50} alt="Dr.PILATES(ドクターピラティス)" className="max-w-full h-auto" src="https://t.felmat.net/fmimg/Z11979O.X164585F.U1357808" />
                  </a>
                  {/* eslint-enable @next/next/no-img-element */}
                </div>
              )}
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
                      <td className="px-4 py-3 text-warm-600 whitespace-nowrap">{s.trial ? (isFreeTrial(s.trial) ? '無料あり' : 'あり') : '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-warm-400 mt-3 leading-relaxed">
              ※エリア名をタップすると、そのエリアの比較ページで周辺スタジオとあわせて確認できます。
            </p>
          </section>

          {/* 利用者の声（出典付き） */}
          {(brandVoices as Voice[]).filter((v) => v.brand === brand.slug).length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">{brand.name}の口コミ・利用者の声（出典付き）</h2>
              <div className="space-y-4">
                {(brandVoices as Voice[]).filter((v) => v.brand === brand.slug).map((v, i) => (
                  <figure key={i} className="bg-white border border-warm-200 p-5">
                    <blockquote className="text-sm text-warm-700 font-light leading-relaxed">「{v.text}」</blockquote>
                    <figcaption className="mt-3 text-xs text-warm-500">
                      {v.attribute ? `${v.attribute}｜` : ''}出典:{' '}
                      <a href={v.source_url} target="_blank" rel="noopener noreferrer" className="underline decoration-warm-300 hover:text-warm-800">
                        {v.source_label}
                      </a>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <p className="text-[11px] text-warm-400 mt-3 leading-relaxed">
                ※上記は各ブランドの公式サイト・公式発表等で公開されている利用者の声・調査結果からの引用です（原文まま・出典リンク付き）。当サイトが独自に取得した口コミではありません。感じ方には個人差があります。
              </p>
            </section>
          )}

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">よくある質問</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
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
