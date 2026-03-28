import { getArticleBySlug, getArticleSlugs } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'

export async function generateStaticParams() {
  const slugs = getArticleSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  
  if (!article) {
    return {
      title: '記事が見つかりません',
    }
  }

  return {
    title: `${article.frontmatter.title} | Pilates Navi`,
    description: article.frontmatter.description,
    keywords: article.frontmatter.keywords,
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const { frontmatter, content } = article

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-purple-600">ホーム</Link>
        {' > '}
        <Link href={`/${frontmatter.category}`} className="hover:text-purple-600">
          {frontmatter.category}
        </Link>
        {' > '}
        <span>{frontmatter.title}</span>
      </nav>

      {/* 記事ヘッダー */}
      <header className="mb-8">
        <div className="text-sm text-purple-600 font-semibold mb-2">
          {frontmatter.category}
        </div>
        <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
        <div className="flex gap-4 text-sm text-gray-600">
          <time dateTime={frontmatter.publishedAt}>
            公開日: {new Date(frontmatter.publishedAt).toLocaleDateString('ja-JP')}
          </time>
          {frontmatter.updatedAt && (
            <time dateTime={frontmatter.updatedAt}>
              更新日: {new Date(frontmatter.updatedAt).toLocaleDateString('ja-JP')}
            </time>
          )}
        </div>
        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="flex gap-2 mt-4">
            {frontmatter.tags.map(tag => (
              <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* 記事本文 */}
      <div className="prose prose-lg max-w-none mb-12">
        <MDXRemote source={content} />
      </div>

      {/* CTA */}
      <div className="bg-purple-600 text-white rounded-lg p-8 text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">体験レッスンを予約しよう</h2>
        <p className="mb-6">初回限定！体験レッスン1,000円〜</p>
        <Link href="/studios">
          <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
            おすすめスタジオを見る
          </Button>
        </Link>
      </div>

      {/* 関連記事 */}
      {frontmatter.relatedArticles && frontmatter.relatedArticles.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {frontmatter.relatedArticles.map(slug => {
              const relatedArticle = getArticleBySlug(slug)
              if (!relatedArticle) return null
              return (
                <Link 
                  key={slug} 
                  href={`/articles/${slug}`}
                  className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
                >
                  <div className="text-sm text-purple-600 font-semibold mb-2">
                    {relatedArticle.frontmatter.category}
                  </div>
                  <h3 className="font-bold mb-2 line-clamp-2">
                    {relatedArticle.frontmatter.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {relatedArticle.frontmatter.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </section>
      )}
    </article>
  )
}
