import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'

export const metadata = {
  title: 'ページが見つかりません',
  description: 'お探しのページは見つかりませんでした。Pilates-Biyoriで人気のピラティス情報をご覧ください。',
}

export default function NotFound() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white min-h-screen">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-warm-400 text-sm uppercase tracking-[0.2em] mb-4">404 Not Found</p>
            <h1 className="text-3xl md:text-5xl font-light text-warm-900 mb-6">
              お探しのページが<br className="sm:hidden" />見つかりません
            </h1>
            <p className="text-warm-600 leading-relaxed mb-8">
              申し訳ございません。<br />
              お探しのページは削除されたか、URLが変更された可能性があります。
            </p>
            <Link
              href="/"
              className="inline-block bg-warm-800 text-white px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-900 transition-all rounded"
            >
              トップページに戻る
            </Link>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              人気のコンテンツ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/area/"
                className="block bg-warm-50 border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-warm-900 mb-3">エリアから探す</h3>
                <p className="text-warm-600 text-sm">
                  全国110エリアのピラティススタジオ情報を地域別にまとめています。
                </p>
              </Link>
              <Link
                href="/articles/pilates-yoga-difference"
                className="block bg-warm-50 border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-warm-900 mb-3">ピラティスとヨガの違い</h3>
                <p className="text-warm-600 text-sm">
                  ピラティスとヨガの違いを徹底解説。あなたに合うのはどっち？
                </p>
              </Link>
              <Link
                href="/articles/mat-machine-difference"
                className="block bg-warm-50 border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-warm-900 mb-3">マットとマシンの違い</h3>
                <p className="text-warm-600 text-sm">
                  マットピラティスとマシンピラティスの違いを初心者向けに解説。
                </p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-xl font-bold text-warm-900 mb-6">主要エリア</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {['shinjuku', 'shibuya', 'ikebukuro', 'ginza', 'yokohama', 'osaka', 'nagoya', 'fukuoka', 'sapporo'].map((slug) => (
                <Link
                  key={slug}
                  href={`/area/${slug}/`}
                  className="bg-white border border-warm-200 rounded-full px-5 py-2 text-sm text-warm-700 hover:bg-warm-100 transition"
                >
                  {slug === 'shinjuku' ? '新宿' :
                   slug === 'shibuya' ? '渋谷' :
                   slug === 'ikebukuro' ? '池袋' :
                   slug === 'ginza' ? '銀座' :
                   slug === 'yokohama' ? '横浜' :
                   slug === 'osaka' ? '大阪' :
                   slug === 'nagoya' ? '名古屋' :
                   slug === 'fukuoka' ? '福岡' :
                   slug === 'sapporo' ? '札幌' : slug}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
