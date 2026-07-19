import { getArticleBySlug, getArticleSlugs } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { articleComponents } from '@/components/articles/ArticleFigures'
import ArticleScrollReveal from '@/components/articles/ArticleScrollReveal'
import ConsultantSection from '@/components/ConsultantSection'
import Script from 'next/script'
import { SURVEY } from '@/data/site-survey'

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
    alternates: { canonical: `https://biyori-pilates.com/articles/${slug}/` },
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
      '@id': `https://biyori-pilates.com/articles/${slug}/`,
    },
  }

  // パンくず構造化データ
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://biyori-pilates.com/' },
      { '@type': 'ListItem', position: 2, name: '記事一覧', item: 'https://biyori-pilates.com/articles/' },
      { '@type': 'ListItem', position: 3, name: frontmatter.title, item: `https://biyori-pilates.com/articles/${slug}/` },
    ],
  }

  // FAQ構造化データ（frontmatter.faq がある場合）
  const faqItems: { q: string; a: string }[] = Array.isArray(frontmatter.faq) ? frontmatter.faq : []
  const faqLd = faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null

  // Dataset構造化データ（料金白書のみ・AEO/回答エンジンが数値を引用可能にする。数値は site-survey.ts 単一ソース）
  const datasetLd = slug === 'pilates-ryokin-hakusho' ? {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: '全国ピラティス料金相場データ（211スタジオ独自調査）',
    description: '全国71エリア・211スタジオの公式情報を集計したピラティスの体験料金・月額相場・設備・評価データ。出典明記で引用可。',
    creator: { '@type': 'Organization', name: 'Pilates-Biyori' },
    url: `https://biyori-pilates.com/articles/${slug}/`,
    isAccessibleForFree: true,
    dateModified: frontmatter.updatedAt || frontmatter.publishedAt,
    temporalCoverage: '2026-06',
    keywords: ['ピラティス', '料金', '相場', '月額', '体験レッスン'],
    variableMeasured: [
      { '@type': 'PropertyValue', name: '月額（月4回）の中央値', value: SURVEY.monthly.median, unitText: 'JPY' },
      { '@type': 'PropertyValue', name: '月額（月4回）の平均', value: SURVEY.monthly.avg, unitText: 'JPY' },
      { '@type': 'PropertyValue', name: '体験レッスン無料率', value: SURVEY.trial.freePct, unitText: 'P1' },
      { '@type': 'PropertyValue', name: '有料体験の中央値', value: SURVEY.trial.paidMedian, unitText: 'JPY' },
      { '@type': 'PropertyValue', name: 'マシン導入率', value: 54, unitText: 'P1' },
      { '@type': 'PropertyValue', name: '平均評価（5点満点）', value: SURVEY.rating.avg, minValue: 1, maxValue: 5 },
    ],
  } : null

  return (
    <>
      {/* 構造化データ */}
      {datasetLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}

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

            {/* E-E-A-T: 編集・監修ノート */}
            <div className="border border-warm-100 bg-warm-50 rounded-lg p-5 mb-10 text-sm text-warm-600 leading-relaxed">
              本記事は<Link href="/editors/" className="text-warm-800 underline hover:text-warm-600">Pilates-Biyori編集部</Link>が、ピラティスの一般的な知見にもとづいて作成しています。記載の効果には個人差があり、料金・サービス内容は各スタジオの最新情報をご確認ください。体調や持病に不安がある場合は医療機関にご相談ください。
            </div>

            {/* 記事本文 */}
            <div className="prose prose-lg max-w-none mb-16 article-content reveal-on">
              <MDXRemote
                source={content}
                components={articleComponents}
                options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
              />
            </div>
            <ArticleScrollReveal />

            {/* よくある質問 */}
            {faqItems.length > 0 && (
              <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-light text-warm-900 mb-8 tracking-tight">よくある質問</h2>
                <div className="space-y-3">
                  {faqItems.map((f) => (
                    <details key={f.q} className="border border-warm-100 rounded-lg bg-white overflow-hidden">
                      <summary className="flex items-center justify-between p-5 font-medium text-warm-800 cursor-pointer text-sm">
                        <span className="pr-4">{f.q}</span>
                        <span className="text-warm-400 flex-shrink-0">＋</span>
                      </summary>
                      <div className="px-5 pb-5 text-sm text-warm-600 leading-relaxed">{f.a}</div>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* CTA */}
            <div className="bg-warm-800 text-white rounded-lg p-10 text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-light mb-4 tracking-tight">体験レッスンを予約しよう</h2>
              <p className="text-warm-200 mb-8 font-light">初回限定！体験レッスン1,000円〜</p>
              <a href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-xs font-medium uppercase tracking-[0.15em] hover:bg-warm-100 transition-all btn-minimal">
                おすすめスタジオを見る
              </a>
            </div>

            {/* AIスタジオ相談（遅延ロード埋め込み） */}
            <ConsultantSection bare />

            {/* 地域からスタジオを探す（注目エリア） */}
            <section className="mb-16" aria-label="注目エリアからピラティススタジオを探す">
              <h2 className="text-2xl md:text-3xl font-light text-warm-900 mb-3 tracking-tight">地域からスタジオを探す</h2>
              <p className="text-sm text-warm-500 font-light mb-6">編集部が注目する主要エリアのピラティススタジオ比較です。お近くのエリアからスタジオの料金・体験レッスンを比べられます。</p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { slug: 'hamamatsucho', name: '浜松町・大門' },
                  { slug: 'ochanomizu', name: '御茶ノ水・神保町' },
                  { slug: 'oji', name: '王子' },
                  { slug: 'nishi-nippori', name: '西日暮里' },
                  { slug: 'yoyogi-uehara', name: '代々木上原' },
                  { slug: 'kitahama', name: '北浜・淀屋橋' },
                  { slug: 'yagoto', name: '八事（名古屋）' },
                  { slug: 'otemachi', name: '大手町' },
                  { slug: 'tokyo', name: '東京駅' },
                  { slug: 'gion-shijo', name: '祇園四条（京都）' },
                ].map((a) => (
                  <Link
                    key={a.slug}
                    href={`/area/${a.slug}/`}
                    className="inline-block bg-warm-50 border border-warm-200 text-warm-700 text-sm px-4 py-2 rounded-full hover:bg-warm-100 hover:border-warm-300 transition-all"
                  >
                    {a.name}のピラティス
                  </Link>
                ))}
                <Link
                  href="/area/"
                  className="inline-block bg-warm-800 text-white text-sm px-4 py-2 rounded-full hover:bg-warm-900 transition-all"
                >
                  全エリア一覧 →
                </Link>
              </div>
            </section>

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
                        href={`/articles/${slug}/`}
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
