import Link from 'next/link'
import { storePageOf } from '@/lib/storePages'
import { notFound } from 'next/navigation'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import { BRANDS, getBrand } from '@/data/brands'
import { prefectureAreas } from '@/data/prefectureAreas'
import brandStores from '@/data/brands-aggregate.json'
import brandVoices from '@/data/brand-voices.json'
import { BrandReviewDigest } from '@/components/BrandReviewDigest'
import { BrandReviewThemes } from '@/components/BrandReviewThemes'

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

// エリアslug → 都道府県（並び順は prefectureAreas の定義順）。店舗一覧を都道府県ごとに並べるため（2026-10-11 「{ブランド} 店舗」検索の受け皿）
const PREF_OF: Record<string, { pref: string; order: number }> = {}
prefectureAreas.forEach((p, i) => p.areas.forEach((a) => { if (!PREF_OF[a.slug]) PREF_OF[a.slug] = { pref: p.prefecture, order: i } }))

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
  // P2(2026-08-04): 「{ブランド} 店舗数/店舗一覧」で親ページが上位を取れる型を全ブランドへ標準装備。
  // 実測: pilates K「店舗数」7.2位・「店舗 一覧」7.0位 / the SILK「店舗」4.8〜5.0位＝いずれも親ページが受けている。
  // 一方で料金・口コミ系は50〜90位と弱いため、勝てている店舗意図を前方に置く。
  // ⚠️「店舗数」を名乗るのは公式店舗数を確認できたブランドのみ（未確認ブランドで数を主張しない）。
  const hasOfficialCount = !!brand.officialStores
  // 2026-10-08: 口コミテーマ節（reviewThemes）を持つブランドだけ末尾に「口コミ評判」を足す（「{ブランド} 口コミ」= Rintosull 13位の受け皿化）
  const kw = brand.titleKw ??
    ((hasOfficialCount
      ? '店舗一覧・店舗数・料金'
      : brand.useHyoban ? '店舗一覧・料金・評判' : '店舗一覧・料金・体験') +
    (brand.reviewThemes ? (!hasOfficialCount && brand.useHyoban ? '・口コミ' : '・口コミ評判') : '')) // 「評判・口コミ評判」の重複回避（2026-10-09 BDC で発生）
  return {
    title: `${brand.name}の${kw}${MONTH_TAG}｜掲載${stores.length}店舗を比較`,
    description: brand.metaDescription ?? `${brand.name}の店舗一覧${brand.officialStores && brand.officialStores.count >= stores.length ? `（${brand.officialStores.asOf}時点で全国${brand.officialStores.count}店舗${brand.officialStores.approx ? '以上' : ''}）` : ''}・料金プラン・体験レッスンを、掲載データにもとづいて掲載しています。${brand.tagline}。当サイトに掲載している${stores.length}店舗を、エリア別のリンクとあわせて掲載しています。`,
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
  const stores = (STORES[slug] ?? []).slice().sort((a, b) => (PREF_OF[a.areaSlug]?.order ?? 999) - (PREF_OF[b.areaSlug]?.order ?? 999) || a.areaSlug.localeCompare(b.areaSlug))
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
            {brand.name}の{brand.titleKw ?? <>{brand.officialStores ? '店舗一覧・店舗数・料金' : brand.useHyoban ? '店舗一覧・料金・評判' : '店舗一覧・料金・体験'}{brand.reviewThemes ? (!brand.officialStores && brand.useHyoban ? '・口コミ' : '・口コミ評判') : ''}</>}
            <span className="block text-base text-warm-500 mt-2 font-light">{brand.tagline}</span>
          </h1>
          {brand.checkedAt && (
            <p className="text-xs text-warm-500 mb-6">料金・店舗数・規約の公式確認日: {brand.checkedAt}／口コミはGoogleマップの店舗ごとの要約（出典リンク付き）</p>
          )}

          {/* 結論ボックス */}
          <section className="bg-white border border-warm-200 p-6 mb-10">
            <p className="text-xs font-medium text-warm-400 uppercase tracking-[0.15em] mb-3">掲載状況の概要</p>
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
            {stores.length > 0 && (
              <p className="mt-4 text-center">
                <a href="#store-list" className="inline-block border border-warm-300 px-5 py-2 text-xs text-warm-800 hover:border-warm-600 transition">
                  店舗一覧（都道府県順・当サイト掲載{stores.length}店舗）へ移動 ↓
                </a>
              </p>
            )}
          </section>

          {os?.byPref && os.byPref.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">{brand.name}の都道府県別店舗数（公式・{os.asOf}時点）</h2>
              <p className="text-sm text-warm-600 font-light leading-relaxed mb-4">
                公式サイトの店舗一覧に載っている{os.byPrefTotal ?? os.count}店舗を、住所の都道府県別に集計しています（{os.byPref.length}都道府県）。{os.byPrefNote ?? os.caveat ?? ''}
                最も多いのは{os.byPref[0].pref}の{os.byPref[0].count}店舗です。
              </p>
              <ul className="flex flex-wrap gap-2">
                {os.byPref.map((p) => (
                  <li key={p.pref} className="text-xs text-warm-700 border border-warm-200 bg-white px-3 py-1.5">
                    {p.pref} <span className="font-medium text-warm-900">{p.count}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-warm-400 mt-3 leading-relaxed">
                ※出典：<a href={os.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-warm-300 hover:text-warm-800">公式サイトの店舗一覧</a>（{os.asOf}に当編集部が集計）。新規開業・閉店により変わるため、最新情報は公式サイトでご確認ください。
              </p>
            </section>
          )}

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
            {brand.priceList && brand.priceList.length > 0 && (
              <ul className="bg-white border border-warm-200 px-4 py-3 mb-4 space-y-1 text-sm text-warm-800">
                {brand.priceList.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            )}
            {brand.priceSources && brand.priceSources.length > 0 && (
              <p className="text-[11px] text-warm-500 mb-4 leading-relaxed">
                出典：
                {brand.priceSources.map((src, i) => (
                  <span key={src.url}>
                    {i > 0 && '／'}
                    <a href={src.url} target="_blank" rel="noopener noreferrer" className="underline decoration-warm-300 hover:text-warm-800">{src.label}</a>
                  </span>
                ))}
                {brand.checkedAt && `（${brand.checkedAt}確認）`}
              </p>
            )}
            <p className="text-sm text-warm-700 leading-relaxed mb-4 font-light">{brand.pricingNote}</p>
            {prices.length > 0 && !brand.hideListedPriceTable && (
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
              ※料金は当サイト掲載時点の情報の集計であり、金額を保証するものではありません。{brand.noCampaignWording ? '最新の料金は公式サイトでご確認ください。' : '最新の料金・キャンペーンは公式サイトでご確認ください。'}
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
              <p className="text-sm text-warm-600 mb-4 font-light">{brand.noCampaignWording ? '体験レッスンの空き状況は、公式サイトでご確認ください。' : '体験レッスンの空き状況・最新のキャンペーンは、公式サイトでご確認ください。'}</p>
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
                  {/* CTAテキストリンク(K142573W)のインプレッション計測 */}
                  <img src="https://t.felmat.net/fmimp/T98993.K142573W.U1357808" width={1} height={1} alt="" style={{ border: 'none' }} />
                  <a href="https://t.felmat.net/fmcl?ak=T98993.1.X1533926.U1357808" target="_blank" rel="nofollow noopener noreferrer sponsored">
                    <img src="https://t.felmat.net/fmimg/T98993.X1533926.U1357808" width={300} height={300} alt="zen place pilates" className="max-w-full h-auto" style={{ border: 'none' }} />
                  </a>
                  <a href="https://t.felmat.net/fmcl?ak=T98993.1.X1533893.U1357808" target="_blank" rel="nofollow noopener noreferrer sponsored" className="hidden md:inline-block">
                    <img src="https://t.felmat.net/fmimg/T98993.X1533893.U1357808" width={728} height={90} alt="zen place pilates 体験レッスン" className="max-w-full h-auto" style={{ border: 'none' }} />
                  </a>
                  {/* eslint-enable @next/next/no-img-element */}
                </div>
              )}
              {brand.slug === 'days-pilates' && (
                <div className="mt-6 flex flex-col items-center gap-4">
                  {/* eslint-disable @next/next/no-img-element */}
                  <img src="https://t.afi-b.com/lead/H16011O/E9887623/W518522Z" width={1} height={1} alt="" style={{ border: 'none' }} />
                  <a href="https://t.afi-b.com/visit.php?a=H16011O-j519244C&p=E9887623" target="_blank" rel="nofollow noopener noreferrer sponsored" className="hidden md:inline-block">
                    <img width={468} height={60} alt="DAYS PILATES" className="max-w-full h-auto" src="https://www.afi-b.com/upload_image/16011-1752093641-3.png" />
                  </a>
                  <img src="https://t.afi-b.com/lead/H16011O/E9887623/j519244C" width={1} height={1} alt="" style={{ border: 'none' }} />
                  <a href="https://t.afi-b.com/visit.php?a=H16011O-M519245R&p=E9887623" target="_blank" rel="nofollow noopener noreferrer sponsored" className="md:hidden inline-block">
                    <img width={300} height={250} alt="DAYS PILATES" className="max-w-full h-auto" src="https://www.afi-b.com/upload_image/16011-1758509241-3.png" />
                  </a>
                  <img src="https://t.afi-b.com/lead/H16011O/E9887623/M519245R" width={1} height={1} alt="" style={{ border: 'none' }} />
                  {/* eslint-enable @next/next/no-img-element */}
                </div>
              )}
              {brand.slug === 'pilates-k' && (
                <div className="mt-6 flex flex-col items-center gap-4">
                  {/* eslint-disable @next/next/no-img-element */}
                  <img src="https://t.afi-b.com/lead/O11543l/E9887623/G384824n" width={1} height={1} alt="" style={{ border: 'none' }} />
                  <a href="https://t.afi-b.com/visit.php?a=O11543l-G386644A&p=E9887623" target="_blank" rel="nofollow noopener noreferrer sponsored" className="hidden md:inline-block">
                    <img width={650} height={250} alt="pilates K" className="max-w-full h-auto" src="https://www.afi-b.com/upload_image/11543-1580989406-3.gif" />
                  </a>
                  <img src="https://t.afi-b.com/lead/O11543l/E9887623/G386644A" width={1} height={1} alt="" style={{ border: 'none' }} />
                  <a href="https://t.afi-b.com/visit.php?a=O11543l-B386658N&p=E9887623" target="_blank" rel="nofollow noopener noreferrer sponsored" className="md:hidden inline-block">
                    <img width={350} height={80} alt="pilates K" className="max-w-full h-auto" src="https://www.afi-b.com/upload_image/11543-1581080307-3.gif" />
                  </a>
                  <img src="https://t.afi-b.com/lead/O11543l/E9887623/B386658N" width={1} height={1} alt="" style={{ border: 'none' }} />
                  {/* eslint-enable @next/next/no-img-element */}
                </div>
              )}
              {brand.slug === 'kasane' && (
                <div className="mt-6 flex flex-col items-center gap-4">
                  {/* eslint-disable @next/next/no-img-element */}
                  <img src="https://t.afi-b.com/lead/T15562j/E9887623/7505717Y" width={1} height={1} alt="" style={{ border: 'none' }} />
                  <a href="https://t.afi-b.com/visit.php?a=T15562j-P505650j&p=E9887623" target="_blank" rel="nofollow noopener noreferrer sponsored" className="hidden md:inline-block">
                    <img width={728} height={90} alt="Pilates KASANE" className="max-w-full h-auto" src="https://www.afi-b.com/upload_image/15562-1736341713-3.jpg" />
                  </a>
                  <img src="https://t.afi-b.com/lead/T15562j/E9887623/P505650j" width={1} height={1} alt="" style={{ border: 'none' }} />
                  <a href="https://t.afi-b.com/visit.php?a=T15562j-I505657Z&p=E9887623" target="_blank" rel="nofollow noopener noreferrer sponsored" className="md:hidden inline-block">
                    <img width={300} height={250} alt="Pilates KASANE" className="max-w-full h-auto" src="https://www.afi-b.com/upload_image/15562-1735970114-3.jpg" />
                  </a>
                  <img src="https://t.afi-b.com/lead/T15562j/E9887623/I505657Z" width={1} height={1} alt="" style={{ border: 'none' }} />
                  {/* eslint-enable @next/next/no-img-element */}
                </div>
              )}
              {brand.slug === 'bdc' && (
                <div className="mt-6 flex flex-col items-center gap-4">
                  {/* eslint-disable @next/next/no-img-element */}
                  <img src="https://i.moshimo.com/af/i/impression?a_id=5719218&p_id=3095&pc_id=7153&pl_id=40590" width={1} height={1} alt="" style={{ border: 'none' }} loading="lazy" />
                  <a href="https://af.moshimo.com/af/c/click?a_id=5719218&p_id=3095&pc_id=7153&pl_id=40596" target="_blank" rel="nofollow noopener noreferrer sponsored" className="hidden md:inline-block">
                    <img width={468} height={60} alt="BDC PILATES" className="max-w-full h-auto" src="https://image.moshimo.com/af-img/2413/000000040596.jpg" />
                  </a>
                  <img src="https://i.moshimo.com/af/i/impression?a_id=5719218&p_id=3095&pc_id=7153&pl_id=40596" width={1} height={1} alt="" style={{ border: 'none' }} loading="lazy" />
                  <a href="https://af.moshimo.com/af/c/click?a_id=5719218&p_id=3095&pc_id=7153&pl_id=40593" target="_blank" rel="nofollow noopener noreferrer sponsored" className="md:hidden inline-block">
                    <img width={250} height={250} alt="BDC PILATES" className="max-w-full h-auto" src="https://image.moshimo.com/af-img/2413/000000040593.jpg" />
                  </a>
                  <img src="https://i.moshimo.com/af/i/impression?a_id=5719218&p_id=3095&pc_id=7153&pl_id=40593" width={1} height={1} alt="" style={{ border: 'none' }} loading="lazy" />
                  {/* eslint-enable @next/next/no-img-element */}
                </div>
              )}
              {brand.slug === 'rintosull' && (
                <div className="mt-6 flex flex-col items-center gap-4">
                  {/* eslint-disable @next/next/no-img-element */}
                  {/* もしもアフィリエイト。クリックURL・画像・計測は pl_id ごとに対で使う */}
                  <img src="https://i.moshimo.com/af/i/impression?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683" width={1} height={1} alt="" style={{ border: 'none' }} loading="lazy" />
                  <a href="https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=81643" target="_blank" rel="nofollow noopener noreferrer sponsored" className="hidden md:inline-block">
                    <img width={300} height={250} alt="Rintosull（リントスル）" className="max-w-full h-auto" src="https://image.moshimo.com/af-img/1870/000000081643.jpg" />
                  </a>
                  <img src="https://i.moshimo.com/af/i/impression?a_id=5718892&p_id=5919&pc_id=16494&pl_id=81643" width={1} height={1} alt="" style={{ border: 'none' }} loading="lazy" />
                  <a href="https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=81644" target="_blank" rel="nofollow noopener noreferrer sponsored" className="md:hidden inline-block">
                    <img width={250} height={250} alt="Rintosull（リントスル）" className="max-w-full h-auto" src="https://image.moshimo.com/af-img/1870/000000081644.jpg" />
                  </a>
                  <img src="https://i.moshimo.com/af/i/impression?a_id=5718892&p_id=5919&pc_id=16494&pl_id=81644" width={1} height={1} alt="" style={{ border: 'none' }} loading="lazy" />
                  {/* eslint-enable @next/next/no-img-element */}
                </div>
              )}
              {brand.slug === 'club-pilates' && (
                <div className="mt-6 flex flex-col items-center gap-4">
                  {/* eslint-disable @next/next/no-img-element */}
                  {/* CTA（全店舗共通用 62359）のインプレッション計測 */}
                  <img src="https://i.moshimo.com/af/i/impression?a_id=5805739&p_id=4728&pc_id=12432&pl_id=62359" width={1} height={1} alt="" style={{ border: 'none' }} loading="lazy" />
                  <a href="https://af.moshimo.com/af/c/click?a_id=5805739&p_id=4728&pc_id=12432&pl_id=75478" rel="nofollow sponsored" referrerPolicy="no-referrer-when-downgrade" target="_blank">
                    <img src="https://image.moshimo.com/af-img/4316/000000075478.jpg" width={300} height={250} alt="CLUB PILATES" className="max-w-full h-auto" style={{ border: 'none' }} />
                  </a>
                  <img src="https://i.moshimo.com/af/i/impression?a_id=5805739&p_id=4728&pc_id=12432&pl_id=75478" width={1} height={1} alt="" style={{ border: 'none' }} loading="lazy" />
                  {/* eslint-enable @next/next/no-img-element */}
                </div>
              )}
              {/* A8（2026-10-14）: CTAテキストリンクのインプレッション計測。クリックURL（brands.ts ctaUrl）と同じ a8mat を対で使う */}
              {(['dep', '1to1', 'repilates'] as const).includes(brand.slug as 'dep') && brand.ctaUrl?.includes('a8mat=') && (
                <div className="mt-2 flex justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://${brand.slug === 'dep' ? 'www19' : brand.slug === 'repilates' ? 'www12' : 'www14'}.a8.net/0.gif?a8mat=${brand.ctaUrl.split('a8mat=')[1]}`} width={1} height={1} alt="" style={{ border: 'none' }} />
                </div>
              )}
              {brand.slug === 'the-silk' && (
                <div className="mt-6 flex flex-col items-center gap-4">
                  {/* eslint-disable @next/next/no-img-element */}
                  {/* CTAテキストリンク(E162842X)のインプレッション計測 */}
                  <img src="https://t.felmat.net/fmimp/X10489B.E162842X.U1357808" width={1} height={1} alt="" style={{ border: 'none' }} />
                  {/* グループレッスン案件(X10489B)のバナー */}
                  <a href="https://t.felmat.net/fmcl?ak=X10489B.1.P150216J.U1357808" target="_blank" rel="nofollow noopener noreferrer sponsored">
                    <img src="https://t.felmat.net/fmimg/X10489B.P150216J.U1357808" width={336} height={280} alt="the SILK グループレッスン" className="max-w-full h-auto" style={{ border: 'none' }} />
                  </a>
                  {/* パーソナルレッスン案件(S12007S) */}
                  <p className="text-sm text-warm-700 mt-2">パーソナルレッスンを検討している方はこちら</p>
                  <a href="https://t.felmat.net/fmcl?ak=S12007S.1.B1657725.U1357808" target="_blank" rel="nofollow noopener noreferrer sponsored">
                    <img src="https://t.felmat.net/fmimg/S12007S.B1657725.U1357808" width={300} height={250} alt="the SILK パーソナルレッスン" className="max-w-full h-auto" style={{ border: 'none' }} />
                  </a>
                  <a href="https://t.felmat.net/fmcl?ak=S12007S.1.U165095J.U1357808" target="_blank" rel="nofollow noopener noreferrer sponsored" className="text-sm underline text-warm-700">女性専用マシンピラティススタジオ : パーソナルレッスン【the SILK（ザ シルク）】</a>
                  <img src="https://t.felmat.net/fmimp/S12007S.U165095J.U1357808" width={1} height={1} alt="" style={{ border: 'none' }} />
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
              {brand.slug === 'pilates-mee' && (
                <div className="mt-6 flex flex-col items-center gap-4">
                  {/* eslint-disable @next/next/no-img-element */}
                  {/* CTAテキストリンク(9146255O)のインプレッション計測 */}
                  <img src="https://t.felmat.net/fmimp/F10273P.9146255O.U1357808" width={1} height={1} alt="" style={{ border: 'none' }} />
                  <a href="https://t.felmat.net/fmcl?ak=F10273P.1.E1468735.U1357808" target="_blank" rel="nofollow noopener noreferrer sponsored" className="hidden md:inline-block">
                    <img width={300} height={250} alt="Pilates Mee（ピラティスミー）" className="max-w-full h-auto" src="https://t.felmat.net/fmimg/F10273P.E1468735.U1357808" />
                  </a>
                  <a href="https://t.felmat.net/fmcl?ak=F10273P.1.T146871G.U1357808" target="_blank" rel="nofollow noopener noreferrer sponsored" className="md:hidden inline-block">
                    <img width={320} height={100} alt="Pilates Mee（ピラティスミー）" className="max-w-full h-auto" src="https://t.felmat.net/fmimg/F10273P.T146871G.U1357808" />
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
          <section className="mb-10 scroll-mt-24" id="store-list">
            <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">
              {/* 公式店舗数は「当サイト掲載数以上」のときだけ併記する。
                  2026-10-15 the SILK・zen place・BDC・ルルト・Rintosull は公式一覧と突き合わせ済み
                  （公式に無い店舗を削除し、ブランドページは同一店舗を1行に統合）。
                  the SILK 46≥43 / zen place 136≥113 / BDC 8≥6 / ルルト 100≥29 / Rintosull 270≥98。
                  他ブランドで逆転した場合に矛盾して見えないよう、条件は残す。 */}
              {brand.name}の店舗一覧{os && os.count >= stores.length ? `（全国${os.count}店舗${os.approx ? '以上' : ''}・当サイト掲載${stores.length}店舗）` : `（当サイト掲載${stores.length}店舗）`}
            </h2>
            <div className="bg-white border border-warm-200 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-warm-200 text-left">
                    <th className="px-4 py-3 text-xs font-medium text-warm-500 uppercase tracking-wider">店舗</th>
                    <th className="px-4 py-3 text-xs font-medium text-warm-500 uppercase tracking-wider whitespace-nowrap">都道府県</th>
                    <th className="px-4 py-3 text-xs font-medium text-warm-500 uppercase tracking-wider whitespace-nowrap">エリア</th>
                    <th className="px-4 py-3 text-xs font-medium text-warm-500 uppercase tracking-wider whitespace-nowrap">体験</th>
                  </tr>
                </thead>
                <tbody>
                  {stores.map((s) => (
                    <tr key={`${s.areaSlug}-${s.name}`} className="border-b border-warm-100 last:border-0">
                      <td className="px-4 py-3 text-warm-800">
                        {/* 店舗ページがある店はそこへ。無い店は従来どおりテキストのまま。
                            ⚠️ ブランド→店舗の導線が無かったため、店舗ページが孤立していた（2026-09-15） */}
                        {(() => {
                          const sp = storePageOf(s.name)
                          return sp ? (
                            <Link href={`/brands/${sp.urlSlug}/`} className="text-warm-700 underline decoration-warm-300 hover:text-warm-900">
                              {s.name}
                            </Link>
                          ) : (
                            s.name
                          )
                        })()}
                      </td>
                      <td className="px-4 py-3 text-warm-500 text-xs whitespace-nowrap">{PREF_OF[s.areaSlug]?.pref ?? '—'}</td>
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
              ※店舗名に下線があるものは、その店舗の詳細ページ（料金・アクセス・口コミ要約）に移動します。エリア名をタップすると、そのエリアの比較ページで周辺スタジオとあわせて確認できます。
            </p>
          </section>

          {/* Googleマップ口コミの集約（569件の資産をブランド単位で俯瞰。2026-08-27） */}
          <BrandReviewDigest brandSlug={brand.slug} brandName={brand.name} />

          {/* 口コミに多いテーマと注意点（2026-10-08・店舗要約を横断して整理。stores は STUDIO_REVIEWS のキー） */}
          {brand.reviewThemes && <BrandReviewThemes brandName={brand.name} themes={brand.reviewThemes} />}

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
