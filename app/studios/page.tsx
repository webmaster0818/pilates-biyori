import Link from 'next/link'
import { getAllArticles } from '@/lib/mdx'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import Script from 'next/script'

export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/studios/' },
  title: 'ピラティススタジオ選び｜Pilates-Biyori',
  description: 'ピラティススタジオの選び方を徹底ガイド。料金相場、体験レッスン、オンラインピラティスなど、初心者におすすめのスタジオ選びのポイントを解説します。',
  keywords: 'ピラティス,スタジオ選び,料金,体験レッスン,オンライン,初心者',
}

export default function StudiosPage() {
  const allArticles = getAllArticles()
  const studiosArticles = allArticles.filter(article => article.frontmatter.category === 'studios')

  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-warm-400 text-xs uppercase tracking-[0.2em] font-medium mb-4">Studios</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-warm-900 tracking-tight mb-6">
              ピラティススタジオ選び
            </h1>
            <p className="text-warm-600 leading-relaxed font-light max-w-2xl mx-auto">
              あなたに最適なピラティススタジオの選び方を徹底ガイド。料金相場、体験レッスン、オンラインピラティスなど、初心者におすすめの情報をまとめています。
            </p>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="bg-white py-4 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>
              {' > '}
              <span className="text-warm-600">スタジオ選び</span>
            </nav>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-light text-warm-900 mb-2">全{studiosArticles.length}記事</h2>
              <p className="text-warm-500 text-sm font-light">スタジオを比較する記事一覧</p>
            </div>

            {studiosArticles.length === 0 ? (
              <p className="text-warm-400 text-center py-12">現在、記事を準備中です。</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {studiosArticles.map((article) => {
                  const slug = article.frontmatter.slug
                  
                  return (
                    <Link key={slug} href={`/articles/${slug}/`} className="group">
                      <div className="card-hover bg-white border border-warm-100 overflow-hidden h-full flex flex-col">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img 
                            src="/images/pilates4.webp" 
                            alt={article.frontmatter.title}
                            className="w-full h-full img-cover group-hover:scale-105 transition-transform duration-700" 
                            width="400" 
                            height="300" 
                            loading="lazy" 
                          />
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-warm-400 text-[10px] uppercase tracking-[0.2em] font-medium border border-warm-200 px-3 py-1">
                              スタジオ選び
                            </span>
                            <time dateTime={article.frontmatter.publishedAt} className="text-warm-300 text-xs">
                              {new Date(article.frontmatter.publishedAt).toLocaleDateString('ja-JP', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                              }).replace(/\//g, '.')}
                            </time>
                          </div>
                          <h3 className="text-base font-medium text-warm-800 leading-relaxed group-hover:text-warm-600 transition-colors mb-3 flex-1">
                            {article.frontmatter.title}
                          </h3>
                          <p className="text-warm-400 text-sm leading-relaxed font-light line-clamp-2">
                            {article.frontmatter.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-light text-warm-900 mb-4 tracking-tight">
              無料体験レッスンを予約しよう
            </h2>
            <p className="text-warm-600 mb-8 font-light leading-relaxed">
              初回限定の体験レッスン1,000円〜。まずは気軽に体験してみましょう。
            </p>
            <Link 
              href="/#studios" 
              className="inline-block bg-warm-800 text-white px-10 py-4 text-xs font-medium uppercase tracking-[0.15em] hover:bg-warm-900 transition-all"
            >
              おすすめスタジオを見る
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
