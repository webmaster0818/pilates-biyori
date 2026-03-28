import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Article, ArticleFrontmatter } from '@/types/article'

const articlesDirectory = path.join(process.cwd(), 'content/articles')

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(articlesDirectory)) {
    return []
  }
  return fs.readdirSync(articlesDirectory)
    .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))
    .map(file => file.replace(/\.(md|mdx)$/, ''))
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`)
    if (!fs.existsSync(fullPath)) {
      const mdxPath = path.join(articlesDirectory, `${slug}.mdx`)
      if (!fs.existsSync(mdxPath)) {
        return null
      }
      const fileContents = fs.readFileSync(mdxPath, 'utf8')
      const { data, content } = matter(fileContents)
      return {
        frontmatter: data as ArticleFrontmatter,
        content,
      }
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    return {
      frontmatter: data as ArticleFrontmatter,
      content,
    }
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error)
    return null
  }
}

export function getAllArticles(): Article[] {
  const slugs = getArticleSlugs()
  const articles = slugs
    .map(slug => getArticleBySlug(slug))
    .filter((article): article is Article => article !== null)
    .sort((a, b) => {
      return new Date(b.frontmatter.publishedAt).getTime() - new Date(a.frontmatter.publishedAt).getTime()
    })
  return articles
}
