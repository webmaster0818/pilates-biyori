import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import { areaStudios } from '@/data/area-studios'

export const metadata = {
  title: '【2026年最新】和光市のピラティススタジオ｜料金・体験プラン比較｜Pilates-Biyori',
  description: '和光市市/区のピラティススタジオを比較。公式サイトで確認した料金・体験プラン・住所を掲載。',
  keywords: 'ピラティス,和光市,スタジオ,料金,体験レッスン',
}

export default function Page() {
  const area = areaStudios['wako']
  if (!area) return null
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: 'エリア一覧', url: 'https://biyori-pilates.com/area/' },
        { name: '和光市', url: 'https://biyori-pilates.com/area/wako/' },
      ]} />
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:underline">ホーム</Link>
          <span className="mx-2">/</span>
          <Link href="/area/" className="hover:underline">エリア一覧</Link>
          <span className="mx-2">/</span>
          <span>和光市</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">和光市のピラティススタジオ</h1>
        <p className="text-gray-700 mb-8">{area.description}</p>
        <h2 className="text-2xl font-bold mb-4 mt-10">スタジオ一覧</h2>
        <div className="space-y-6">
          {area.studios.map((studio, i) => (
            <StudioCard key={i} studio={studio} index={i} />
          ))}
        </div>
        <section className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">和光市でピラティススタジオを選ぶときのポイント</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>公式サイトで料金プラン・体験レッスンの内容を必ず確認</li>
            <li>マシンピラティス／マットピラティスのどちらが目的に合うか確認</li>
            <li>体験レッスンで施設・スタッフ・指導内容を実際に確認</li>
            <li>複数スタジオで体験して比較するのがおすすめ</li>
          </ul>
        </section>
        <RelatedAreas currentSlug="wako" />
      </main>
      <SiteFooter />
    </>
  )
}
