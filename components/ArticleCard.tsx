import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface ArticleCardProps {
  title: string
  description: string
  slug: string
  category: string
  thumbnail?: string
  publishedAt: string
}

export function ArticleCard({
  title,
  description,
  slug,
  category,
  thumbnail,
  publishedAt
}: ArticleCardProps) {
  // カテゴリごとのグラデーション色
  const getCategoryGradient = (cat: string) => {
    const gradients: Record<string, string> = {
      '基礎知識': 'from-purple-400 to-purple-600',
      '効果・メリット': 'from-green-400 to-green-600',
      'スタジオ情報': 'from-orange-400 to-orange-600',
      'エリア別': 'from-blue-400 to-blue-600',
    }
    return gradients[cat] || 'from-purple-400 to-purple-600'
  }

  return (
    <Link href={`/articles/${slug}`}>
      <Card className="hover:shadow-lg transition-shadow h-full">
        {thumbnail ? (
          <div className="relative w-full h-48">
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
        ) : (
          <div className={`w-full h-48 bg-gradient-to-br ${getCategoryGradient(category)} flex items-center justify-center rounded-t-lg`}>
            <div className="text-white text-center px-4">
              <div className="text-sm font-semibold mb-2 opacity-90">{category}</div>
              <div className="text-2xl font-bold opacity-80">📖</div>
            </div>
          </div>
        )}
        <CardHeader>
          <div className="text-sm text-purple-600 font-semibold mb-2">
            {category}
          </div>
          <h3 className="font-bold text-lg line-clamp-2">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
            {description}
          </p>
          <p className="text-xs text-gray-500">
            {new Date(publishedAt).toLocaleDateString('ja-JP')}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}
