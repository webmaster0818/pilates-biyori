import Link from 'next/link'
import { getAllArticles } from '@/lib/mdx'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import Script from 'next/script'

export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/benefits/' },
  title: 'ピラティスの効果・メリット｜Pilates-Biyori',
  description: 'ピラティスで得られる効果とメリットを徹底解説。ダイエット効果、姿勢改善、腰痛・肩こり改善など、科学的根拠に基づいた効果を紹介します。',
  keywords: 'ピラティス,効果,メリット,ダイエット,姿勢改善,腰痛改善,肩こり',
}

export default function BenefitsPage() {
  const allArticles = getAllArticles()
  const benefitsArticles = allArticles.filter(article => article.frontmatter.category === 'benefits')

  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-warm-400 text-xs uppercase tracking-[0.2em] font-medium mb-4">Benefits</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-warm-900 tracking-tight mb-6">
              ピラティスの効果・メリット
            </h1>
            <p className="text-warm-600 leading-relaxed font-light max-w-2xl mx-auto">
              ピラティスで得られる効果とメリットを科学的根拠に基づいて解説。ダイエット、姿勢改善、腰痛・肩こり改善など、あなたの目的に合った効果を確認できます。
            </p>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="bg-white py-4 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>
              {' > '}
              <span className="text-warm-600">効果・メリット</span>
            </nav>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-light text-warm-900 mb-2">全{benefitsArticles.length}記事</h2>
              <p className="text-warm-500 text-sm font-light">ピラティスの効果を知る記事一覧</p>
            </div>

            {benefitsArticles.length === 0 ? (
              <p className="text-warm-400 text-center py-12">現在、記事を準備中です。</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefitsArticles.map((article) => {
                  const slug = article.frontmatter.slug
                  
                  return (
                    <Link key={slug} href={`/articles/${slug}/`} className="group">
                      <div className="card-hover bg-white border border-warm-100 overflow-hidden h-full flex flex-col">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img 
                            src="/images/pilates3.webp" 
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
                              効果・メリット
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
              ピラティスを始めてみませんか？
            </h2>
            <p className="text-warm-600 mb-8 font-light leading-relaxed">
              初回限定の体験レッスンで、あなたに合ったスタジオを見つけましょう。
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
