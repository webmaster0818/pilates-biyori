import Link from 'next/link'
import { getAllArticles } from '@/lib/mdx'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'

export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/articles/' },
  title: 'ピラティス記事一覧',
  description: 'Pilates-Biyoriの記事一覧。ピラティスの基礎知識、効果、エクササイズ、マシン、スタジオ選びなどの記事を公開日の新しい順にまとめています。',
}

export default function ArticlesIndexPage() {
  const articles = getAllArticles()

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://biyori-pilates.com/' },
      { '@type': 'ListItem', position: 2, name: '記事一覧', item: 'https://biyori-pilates.com/articles/' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-warm-400 text-xs uppercase tracking-[0.2em] font-medium mb-4">Articles</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-warm-900 tracking-tight mb-6">
              ピラティス記事一覧
            </h1>
            <p className="text-warm-600 leading-relaxed font-light max-w-2xl mx-auto">
              Pilates-Biyoriで公開している記事を、公開日の新しい順に並べています。
            </p>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="bg-white py-4 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>
              {' > '}
              <span className="text-warm-600">記事一覧</span>
            </nav>
          </div>
        </section>

        {/* Articles List */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-light text-warm-900 mb-2">全{articles.length}記事</h2>
            </div>
            <ul className="divide-y divide-warm-100 border-t border-b border-warm-100">
              {articles.map((article) => {
                const slug = article.frontmatter.slug

                return (
                  <li key={slug}>
                    <Link href={`/articles/${slug}/`} className="group block py-5">
                      <time dateTime={article.frontmatter.publishedAt} className="text-warm-300 text-xs">
                        {new Date(article.frontmatter.publishedAt).toLocaleDateString('ja-JP', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit',
                        }).replace(/\//g, '.')}
                      </time>
                      <h3 className="text-base font-medium text-warm-800 leading-relaxed group-hover:text-warm-600 transition-colors mt-1">
                        {article.frontmatter.title}
                      </h3>
                      <p className="text-warm-400 text-sm leading-relaxed font-light line-clamp-2 mt-1">
                        {article.frontmatter.description}
                      </p>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
