import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import Script from 'next/script'

export const metadata = {
  title: '地域別ピラティススタジオ｜Pilates Navi',
  description: '全国の主要エリアのピラティススタジオを地域別に検索。東京、大阪、名古屋、福岡など、お住まいの地域で最適なスタジオを見つけましょう。',
  keywords: 'ピラティス,スタジオ,地域別,東京,大阪,名古屋,福岡,エリア',
}

// 地域データ（将来の記事追加に備えた構造）
const regions = [
  {
    name: '北海道・東北',
    areas: [
      { name: '札幌', slug: 'sapporo', available: true },
      { name: '仙台', slug: 'sendai', available: true },
    ],
  },
  {
    name: '関東',
    areas: [
      { name: '東京', slug: 'tokyo', available: true },
      { name: '新宿', slug: 'shinjuku', available: true },
      { name: '渋谷', slug: 'shibuya', available: true },
      { name: '池袋', slug: 'ikebukuro', available: true },
      { name: '銀座', slug: 'ginza', available: true },
      { name: '横浜', slug: 'yokohama', available: true },
      { name: '大宮', slug: 'omiya', available: true },
      { name: '千葉', slug: 'chiba', available: true },
    ],
  },
  {
    name: '中部',
    areas: [
      { name: '名古屋', slug: 'nagoya', available: true },
      { name: '静岡', slug: 'shizuoka', available: true },
      { name: '新潟', slug: 'niigata', available: true },
    ],
  },
  {
    name: '近畿',
    areas: [
      { name: '大阪', slug: 'osaka', available: true },
      { name: '京都', slug: 'kyoto', available: true },
      { name: '神戸', slug: 'kobe', available: true },
    ],
  },
  {
    name: '中国・四国',
    areas: [
      { name: '広島', slug: 'hiroshima', available: true },
      { name: '岡山', slug: 'okayama', available: true },
    ],
  },
  {
    name: '九州・沖縄',
    areas: [
      { name: '福岡', slug: 'fukuoka', available: true },
      { name: '熊本', slug: 'kumamoto', available: true },
      { name: '沖縄', slug: 'okinawa', available: true },
    ],
  },
]

export default function AreaPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-warm-400 text-xs uppercase tracking-[0.2em] font-medium mb-4">Popular Area</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-warm-900 tracking-tight mb-6">
              地域別スタジオ検索
            </h1>
            <p className="text-warm-600 leading-relaxed font-light max-w-2xl mx-auto">
              お住まいの地域で最適なピラティススタジオを見つけましょう。全国の主要エリアのスタジオ情報を随時更新中です。
            </p>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="bg-white py-4 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>
              {' > '}
              <span className="text-warm-600">地域別</span>
            </nav>
          </div>
        </section>

        {/* Region List */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            {regions.map((region) => (
              <div key={region.name} className="mb-12">
                <h2 className="text-xl font-medium text-warm-800 mb-6 pb-3 border-b border-warm-200">
                  {region.name}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {region.areas.map((area) => (
                    <div key={area.slug}>
                      {area.available ? (
                        <Link
                          href={`/area/${area.slug}`}
                          className="block border border-warm-200 p-4 text-center hover:border-warm-400 transition-colors card-hover bg-warm-50"
                        >
                          <span className="text-sm font-medium text-warm-800 hover:text-warm-600 transition-colors">
                            {area.name}
                          </span>
                        </Link>
                      ) : (
                        <div className="border border-warm-100 p-4 text-center bg-warm-50 opacity-50 cursor-not-allowed">
                          <span className="text-sm font-medium text-warm-400">
                            {area.name}
                          </span>
                          <p className="text-[10px] text-warm-300 mt-1">準備中</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 md:py-20 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-light text-warm-900 mb-4 tracking-tight">
              地域別記事は随時追加中です
            </h2>
            <p className="text-warm-600 mb-8 font-light leading-relaxed">
              お住まいの地域のピラティススタジオ情報は、準備でき次第順次公開していきます。<br />
              現在は、全国共通のスタジオ選び情報をご覧ください。
            </p>
            <Link 
              href="/studios" 
              className="inline-block bg-warm-800 text-white px-10 py-4 text-xs font-medium uppercase tracking-[0.15em] hover:bg-warm-900 transition-all"
            >
              スタジオ選びガイドを見る
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
