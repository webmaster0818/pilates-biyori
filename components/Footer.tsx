import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Pilates-Biyori</h3>
            <p className="text-sm text-gray-600">
              初心者から経験者まで、あなたに最適なピラティスが見つかるメディア
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">カテゴリ</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/basics/" className="hover:text-purple-600">基礎知識</Link></li>
              <li><Link href="/benefits/" className="hover:text-purple-600">効果・メリット</Link></li>
              <li><Link href="/studios/" className="hover:text-purple-600">スタジオ選び</Link></li>
              <li><Link href="/area/" className="hover:text-purple-600">地域別</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">サイト情報</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about/" className="hover:text-purple-600">運営者情報</Link></li>
              <li><Link href="/privacy-policy/" className="hover:text-purple-600">プライバシーポリシー</Link></li>
              <li><Link href="/terms-of-service/" className="hover:text-purple-600">利用規約</Link></li>
              <li><Link href="/content-policy/" className="hover:text-purple-600">記事制作ポリシー</Link></li>
              <li><Link href="/contact/" className="hover:text-purple-600">お問い合わせ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">人気記事</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/articles/pilates-yoga-difference/" className="hover:text-purple-600">ピラティスとヨガの違い</Link></li>
              <li><Link href="/articles/mat-machine-difference/" className="hover:text-purple-600">マットとマシンの違い</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
          © 2026 Pilates-Biyori. All rights reserved.
        </div>
      </div>
        <p className="text-center text-xs mt-3 opacity-80">本サイトはプロモーション(PR)を含みます。</p>
    </footer>
  )
}
