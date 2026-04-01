import Link from 'next/link'
import { getAllArticles } from '@/lib/mdx'
import { Article } from '@/types/article'

// カテゴリ別の背景グラデーション
const categoryGradients: Record<string, string> = {
  basics: 'from-purple-200 to-purple-100',
  benefits: 'from-green-200 to-green-100',
  studios: 'from-orange-200 to-orange-100',
}

// カテゴリ日本語名
const categoryNames: Record<string, string> = {
  basics: '基礎知識',
  benefits: '効果・メリット',
  studios: 'スタジオ選び',
}

export function ArticlesSection() {
  const allArticles = getAllArticles()
  
  // カテゴリ別に記事を分類
  const articlesByCategory: Record<string, Article[]> = {
    basics: allArticles.filter(a => a.frontmatter.category === 'basics'),
    benefits: allArticles.filter(a => a.frontmatter.category === 'benefits'),
    studios: allArticles.filter(a => a.frontmatter.category === 'studios'),
  }

  return (
    <section className="py-20 md:py-28 bg-warm-50" id="articles">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14 fade-up">
          <p className="section-en text-warm-400 mb-3 font-medium">All Articles</p>
          <h2 className="text-2xl md:text-3xl font-light text-warm-900 tracking-tight">全記事一覧</h2>
          <div className="divider mx-auto mt-4"></div>
        </div>

        {/* カテゴリごとに記事を表示 */}
        {Object.entries(articlesByCategory).map(([category, articles]) => {
          if (articles.length === 0) return null
          
          return (
            <div key={category} className="mb-16">
              <h3 className="text-xl font-medium text-warm-800 mb-6 pb-3 border-b border-warm-200">
                {categoryNames[category] || category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {articles.map((article) => {
                  const slug = article.frontmatter.slug
                  const gradient = categoryGradients[category] || 'from-gray-200 to-gray-100'
                  
                  return (
                    <Link key={slug} href={`/articles/${slug}`} className="group fade-up">
                      <div className="card-hover bg-white overflow-hidden border border-warm-100">
                        <div className={`aspect-[4/3] overflow-hidden bg-gradient-to-br ${gradient}`}></div>
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-warm-400 text-[10px] uppercase tracking-[0.2em] font-medium border border-warm-200 px-3 py-1">
                              {categoryNames[category] || category}
                            </span>
                            <time dateTime={article.frontmatter.publishedAt} className="text-warm-300 text-xs">
                              {new Date(article.frontmatter.publishedAt).toLocaleDateString('ja-JP', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                              }).replace(/\//g, '.')}
                            </time>
                          </div>
                          <h4 className="text-sm font-medium text-warm-800 leading-relaxed group-hover:text-warm-600 transition-colors mb-2 line-clamp-2">
                            {article.frontmatter.title}
                          </h4>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
