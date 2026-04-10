import { getArticleBySlug, getArticleSlugs } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import Script from 'next/script'

export async function generateStaticParams() {
  const slugs = getArticleSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  
  if (!article) {
    return {
      title: '記事が見つかりません',
    }
  }

  return {
    title: `${article.frontmatter.title} | Pilates-Biyori`,
    description: article.frontmatter.description,
    keywords: article.frontmatter.keywords,
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const { frontmatter, content } = article

  // 構造化データ（JSON-LD）
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter.title,
    description: frontmatter.description,
    author: {
      '@type': 'Person',
      name: frontmatter.author || '編集部',
    },
    datePublished: frontmatter.publishedAt,
    dateModified: frontmatter.updatedAt || frontmatter.publishedAt,
    publisher: {
      '@type': 'Organization',
      name: 'Pilates-Biyori',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pilates-biyori-deploy.pages.dev/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://pilates-biyori-deploy.pages.dev/articles/${slug}/`,
    },
  }

  return (
    <>
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navigation />

      <main className="pt-20">
        <article className="bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
            {/* パンくずリスト */}
            <nav className="text-sm text-warm-400 mb-8">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>
              {' > '}
              <span className="text-warm-600">{frontmatter.title}</span>
            </nav>

            {/* 記事ヘッダー */}
            <header className="mb-12">
              <div className="text-xs uppercase tracking-[0.2em] text-warm-400 font-medium mb-4">
                {frontmatter.category}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-warm-900 leading-tight tracking-tight mb-6">
                {frontmatter.title}
              </h1>
              <div className="flex gap-6 text-sm text-warm-400">
                <time dateTime={frontmatter.publishedAt}>
                  公開: {new Date(frontmatter.publishedAt).toLocaleDateString('ja-JP')}
                </time>
                {frontmatter.updatedAt && (
                  <time dateTime={frontmatter.updatedAt}>
                    更新: {new Date(frontmatter.updatedAt).toLocaleDateString('ja-JP')}
                  </time>
                )}
              </div>
              {frontmatter.tags && frontmatter.tags.length > 0 && (
                <div className="flex gap-2 mt-6">
                  {frontmatter.tags.map((tag: string) => (
                    <span key={tag} className="border border-warm-200 px-3 py-1 text-xs text-warm-600 uppercase tracking-[0.15em]">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {/* 記事本文 */}
            <div className="prose prose-lg max-w-none mb-16 article-content">
              <MDXRemote source={content} />
            </div>

            {/* CTA */}
            <div className="bg-warm-800 text-white rounded-lg p-10 text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-light mb-4 tracking-tight">体験レッスンを予約しよう</h2>
              <p className="text-warm-200 mb-8 font-light">初回限定！体験レッスン1,000円〜</p>
              <a href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-xs font-medium uppercase tracking-[0.15em] hover:bg-warm-100 transition-all btn-minimal">
                おすすめスタジオを見る
              </a>
            </div>

            {/* 関連記事 */}
            {frontmatter.relatedArticles && frontmatter.relatedArticles.length > 0 && (
              <section>
                <h2 className="text-2xl md:text-3xl font-light text-warm-900 mb-8 tracking-tight">関連記事</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {frontmatter.relatedArticles.map((slug: string) => {
                    const relatedArticle = getArticleBySlug(slug)
                    if (!relatedArticle) return null
                    return (
                      <Link 
                        key={slug} 
                        href={`/articles/${slug}`}
                        className="group card-hover bg-warm-50 border border-warm-100 p-6 transition-all"
                      >
                        <div className="text-[10px] uppercase tracking-[0.2em] text-warm-400 font-medium mb-3">
                          {relatedArticle.frontmatter.category}
                        </div>
                        <h3 className="font-medium text-warm-800 mb-2 line-clamp-2 group-hover:text-warm-600 transition-colors">
                          {relatedArticle.frontmatter.title}
                        </h3>
                        <p className="text-sm text-warm-400 line-clamp-2 font-light">
                          {relatedArticle.frontmatter.description}
                        </p>
                      </Link>
                    )
                  })}
                </div>
              </section>
            )}
          </div>
        </article>
      </main>

      <SiteFooter />

      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
