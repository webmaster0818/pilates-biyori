import { ArticleCard } from '@/components/ArticleCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  // サンプル記事データ（後でMDXから取得）
  const featuredArticles = [
    {
      title: 'ピラティスとヨガの違いは？初心者向けに5つのポイントで徹底解説',
      description: 'ピラティスとヨガの違いを初心者向けにわかりやすく解説。起源、効果、呼吸法の5つの違いを比較表で紹介。',
      slug: 'pilates-yoga-difference',
      category: '基礎知識',
      thumbnail: '/images/pilates-yoga-difference.webp',
      publishedAt: '2026-03-28',
    },
    {
      title: 'マットピラティスとマシンピラティスの違いとは？初心者におすすめの選び方',
      description: 'マットとマシンの違いを徹底比較。初心者向けにメリット・デメリットを解説します。',
      slug: 'mat-machine-difference',
      category: '基礎知識',
      thumbnail: '/images/mat-machine-difference.webp',
      publishedAt: '2026-03-28',
    },
    {
      title: 'ピラティスの効果はいつから出る？週1回でも身体が変わる期間と頻度の目安',
      description: '効果が出るまでの期間を科学的根拠をもとに解説。週1回から始められる継続のコツも紹介。',
      slug: 'pilates-effect-when',
      category: '効果・メリット',
      thumbnail: '/images/pilates-effect-when.webp',
      publishedAt: '2026-03-28',
    },
  ]

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          あなたに最適なピラティスが見つかる
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          初心者から経験者まで、ピラティスの基礎知識からスタジオ選びまで徹底サポート
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/articles/pilates-yoga-difference">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              人気記事を読む
            </Button>
          </Link>
          <Link href="/studios">
            <Button size="lg" variant="outline">
              スタジオを比較
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            注目記事
          </h2>
          <Link href="/basics" className="text-purple-600 hover:underline">
            もっと見る →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </section>

      {/* Category Section */}
      <section className="py-16 bg-gray-50 -mx-4 px-4 md:rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          カテゴリから探す
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <Link href="/basics" className="group">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-purple-600">
                基礎知識
              </h3>
              <p className="text-sm text-gray-600">
                ピラティスの基本を学ぶ
              </p>
            </div>
          </Link>
          <Link href="/benefits" className="group">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-purple-600">
                効果・メリット
              </h3>
              <p className="text-sm text-gray-600">
                期待できる効果を知る
              </p>
            </div>
          </Link>
          <Link href="/studios" className="group">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-purple-600">
                スタジオ選び
              </h3>
              <p className="text-sm text-gray-600">
                最適なスタジオを比較
              </p>
            </div>
          </Link>
          <Link href="/area" className="group">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-purple-600">
                地域別
              </h3>
              <p className="text-sm text-gray-600">
                お近くのスタジオを探す
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Popular Studios */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          人気ピラティススタジオ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-lg mb-2">zen place pilates</h3>
            <p className="text-sm text-gray-600 mb-4">
              全国最大手、100店舗以上
            </p>
            <Link href="/studios/zen-place" className="text-purple-600 hover:underline text-sm">
              詳細を見る →
            </Link>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-lg mb-2">ピラティスK</h3>
            <p className="text-sm text-gray-600 mb-4">
              女性専用マシンピラティス
            </p>
            <Link href="/studios/pilates-k" className="text-purple-600 hover:underline text-sm">
              詳細を見る →
            </Link>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-lg mb-2">CLUB PILATES</h3>
            <p className="text-sm text-gray-600 mb-4">
              世界最大級、800店舗以上
            </p>
            <Link href="/studios/club-pilates" className="text-purple-600 hover:underline text-sm">
              詳細を見る →
            </Link>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-lg mb-2">the SILK</h3>
            <p className="text-sm text-gray-600 mb-4">
              女性専用、美ボディメイク
            </p>
            <Link href="/studios/the-silk" className="text-purple-600 hover:underline text-sm">
              詳細を見る →
            </Link>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/studios">
            <Button variant="outline" size="lg">
              すべてのスタジオを比較 →
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
