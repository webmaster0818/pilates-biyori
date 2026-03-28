export interface ArticleFrontmatter {
  title: string
  description: string
  slug: string
  category: string
  tags?: string[]
  publishedAt: string
  updatedAt?: string
  author?: string
  thumbnail?: string
  thumbnailAlt?: string
  keywords?: string[]
  relatedArticles?: string[]
}

export interface Article {
  frontmatter: ArticleFrontmatter
  content: string
}
