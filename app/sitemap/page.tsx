import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { prefectureAreas } from '@/data/prefectureAreas'

export const metadata = {
  title: 'サイトマップ',
  description: 'Pilates-Biyoriのサイトマップ。全ページの一覧をご覧いただけます。',
  alternates: {
    canonical: 'https://biyori-pilates.com/sitemap/',
  },
}

const articles = [
  { slug: 'pilates-yoga-difference', title: 'ピラティスとヨガの違い' },
  { slug: 'mat-machine-difference', title: 'マットとマシンの違い' },
  { slug: 'machine-pilates-beginner', title: 'マシンピラティス初心者向け' },
  { slug: 'pilates-frequency', title: 'ピラティスの頻度・通うペース' },
  { slug: 'pilates-beginner-home', title: '自宅でできるピラティス' },
  { slug: 'pilates-effect-when', title: 'ピラティスの効果が出る期間' },
  { slug: 'pilates-daily-effect', title: '毎日のピラティス効果' },
  { slug: 'pilates-diet-effect', title: 'ピラティスのダイエット効果' },
  { slug: 'pilates-posture-effect', title: 'ピラティスの姿勢改善効果' },
  { slug: 'pilates-back-pain', title: 'ピラティスで腰痛改善' },
  { slug: 'pilates-shoulder-pain', title: 'ピラティスで肩こり改善' },
  { slug: 'pilates-beginner-studio', title: '初心者向けスタジオの選び方' },
  { slug: 'pilates-price', title: 'ピラティスの料金相場' },
  { slug: 'pilates-trial-lesson', title: '体験レッスンのすすめ' },
  { slug: 'pilates-online', title: 'オンラインピラティスレッスン' },
]

export default function SitemapPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900">
              サイトマップ
            </h1>
            <p className="text-warm-600 text-sm mt-3">
              Pilates-Biyoriの全ページ一覧
            </p>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>
              {' > '}
              <span className="text-warm-600">サイトマップ</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-12">
            {/* メインページ */}
            <div>
              <h2 className="text-xl font-bold text-warm-900 mb-4 pb-2 border-b border-warm-200">
                メインページ
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <li><Link href="/" className="text-warm-700 hover:text-warm-900 hover:underline">トップページ</Link></li>
                <li><Link href="/basics/" className="text-warm-700 hover:text-warm-900 hover:underline">ピラティス基礎知識</Link></li>
                <li><Link href="/benefits/" className="text-warm-700 hover:text-warm-900 hover:underline">効果・メリット</Link></li>
                <li><Link href="/studios/" className="text-warm-700 hover:text-warm-900 hover:underline">スタジオ選び</Link></li>
                <li><Link href="/area/" className="text-warm-700 hover:text-warm-900 hover:underline">エリア一覧</Link></li>
              </ul>
            </div>

            {/* 記事 */}
            <div>
              <h2 className="text-xl font-bold text-warm-900 mb-4 pb-2 border-b border-warm-200">
                記事一覧（15記事）
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                {articles.map((article) => (
                  <li key={article.slug}>
                    <Link
                      href={`/articles/${article.slug}/`}
                      className="text-warm-700 hover:text-warm-900 hover:underline"
                    >
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* エリア別 */}
            <div>
              <h2 className="text-xl font-bold text-warm-900 mb-4 pb-2 border-b border-warm-200">
                エリア別ピラティススタジオ情報
              </h2>
              <div className="space-y-6">
                {prefectureAreas.map((pref) => (
                  <div key={pref.prefecture}>
                    <h3 className="text-base font-bold text-warm-800 mb-2">
                      {pref.prefecture}
                      <span className="ml-2 text-xs text-warm-400 font-light">
                        （{pref.areas.length}エリア）
                      </span>
                    </h3>
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                      {pref.areas.map((area) => (
                        <li key={area.slug}>
                          <Link
                            href={`/area/${area.slug}/`}
                            className="text-warm-700 hover:text-warm-900 hover:underline"
                          >
                            {area.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* その他 */}
            <div>
              <h2 className="text-xl font-bold text-warm-900 mb-4 pb-2 border-b border-warm-200">
                その他
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <li><Link href="/terms-of-service/" className="text-warm-700 hover:text-warm-900 hover:underline">利用規約</Link></li>
                <li><Link href="/privacy-policy/" className="text-warm-700 hover:text-warm-900 hover:underline">プライバシーポリシー</Link></li>
                <li><Link href="/content-policy/" className="text-warm-700 hover:text-warm-900 hover:underline">記事制作ポリシー</Link></li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
