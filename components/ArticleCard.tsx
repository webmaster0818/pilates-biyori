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
  return (
    <Link href={`/articles/${slug}`}>
      <Card className="hover:shadow-lg transition-shadow h-full">
        {thumbnail && (
          <div className="relative w-full h-48">
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover rounded-t-lg"
            />
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
