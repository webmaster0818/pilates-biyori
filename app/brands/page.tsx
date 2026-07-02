import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import { BRANDS } from '@/data/brands'
import brandStores from '@/data/brands-aggregate.json'

const STORES = brandStores as Record<string, { name: string }[]>

export const metadata = {
  title: 'ピラティスブランド別 料金・評判・店舗一覧【2026年7月】｜主要15ブランドを比較',
  description:
    'pilates K・the SILK・zen place・Rintosull・CLUB PILATESなど主要ピラティスブランド15社の料金・体験レッスン・店舗一覧を掲載データから比較。ブランドで選びたい人のための一覧ページです。',
  alternates: { canonical: 'https://biyori-pilates.com/brands/' },
}

export default function BrandsHub() {
  const sorted = BRANDS.slice().sort((a, b) => (STORES[b.slug]?.length ?? 0) - (STORES[a.slug]?.length ?? 0))
  return (
    <>
      <Navigation />
      <BreadcrumbSchema
        items={[
          { name: 'ホーム', url: 'https://biyori-pilates.com/' },
          { name: 'ブランド一覧', url: 'https://biyori-pilates.com/brands/' },
        ]}
      />
      <main className="bg-warm-50 min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-5">
          <p className="section-en text-warm-400 mb-2 font-medium">Brands</p>
          <h1 className="text-2xl md:text-3xl font-light text-warm-900 tracking-tight mb-3">
            ピラティスブランド別ガイド
            <span className="block text-base text-warm-500 mt-2 font-light">主要{BRANDS.length}ブランドの料金・体験・店舗一覧を比較</span>
          </h1>
          <p className="text-sm text-warm-600 font-light leading-relaxed mb-10">
            当サイトに掲載している全国のピラティススタジオをブランド別に整理しました。各ブランドページでは、掲載店舗の実データから料金プラン・体験レッスン・店舗一覧を確認できます。
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {sorted.map((b) => {
              const n = STORES[b.slug]?.length ?? 0
              return (
                <Link
                  key={b.slug}
                  href={`/brands/${b.slug}/`}
                  className="block bg-white border border-warm-200 p-6 hover:border-warm-400 transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-3 mb-2">
                    <h2 className="text-base font-medium text-warm-900">{b.name}</h2>
                    <span className="text-xs text-warm-400 whitespace-nowrap">掲載{n}店舗</span>
                  </div>
                  <p className="text-xs text-warm-500 font-light leading-relaxed">{b.tagline}</p>
                </Link>
              )
            })}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/area/" className="text-xs text-warm-800 underline decoration-warm-300 hover:text-warm-900">エリアから探す</Link>
            <Link href="/ai-soudan/" className="text-xs text-warm-800 underline decoration-warm-300 hover:text-warm-900">AIスタジオ相談で診断する</Link>
            <Link href="/articles/pilates-ryokin-hakusho/" className="text-xs text-warm-800 underline decoration-warm-300 hover:text-warm-900">全国ピラティス料金白書2026</Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
