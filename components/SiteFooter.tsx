import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="bg-warm-900 text-warm-400">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <span className="font-serif text-xl font-light text-white tracking-wider">Pilates-Biyori</span>
            <p className="text-warm-500 text-xs mt-4 leading-relaxed font-light">
              初心者から経験者まで、あなたに最適なピラティスが見つかるメディア
            </p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-medium text-warm-300 mb-5">Categories</h4>
            <ul className="space-y-3 text-xs">
              <li><a href="/#categories" className="text-warm-500 hover:text-white transition font-light">基礎知識</a></li>
              <li><a href="/#categories" className="text-warm-500 hover:text-white transition font-light">効果・メリット</a></li>
              <li><a href="/#categories" className="text-warm-500 hover:text-white transition font-light">スタジオ選び</a></li>
              <li><a href="/#categories" className="text-warm-500 hover:text-white transition font-light">地域別</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-medium text-warm-300 mb-5">Information</h4>
            <ul className="space-y-3 text-xs">
              <li><Link href="/about" className="text-warm-500 hover:text-white transition font-light">運営者情報</Link></li>
              <li><Link href="/editors" className="text-warm-500 hover:text-white transition font-light">編集部紹介</Link></li>
              <li><Link href="/privacy-policy" className="text-warm-500 hover:text-white transition font-light">プライバシーポリシー</Link></li>
              <li><Link href="/terms-of-service" className="text-warm-500 hover:text-white transition font-light">利用規約</Link></li>
              <li><Link href="/content-policy" className="text-warm-500 hover:text-white transition font-light">記事制作ポリシー</Link></li>
              <li><Link href="/sitemap" className="text-warm-500 hover:text-white transition font-light">サイトマップ</Link></li>
              <li><Link href="/contact" className="text-warm-500 hover:text-white transition font-light">お問い合わせ（広告出稿・掲載）</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-medium text-warm-300 mb-5">Popular</h4>
            <ul className="space-y-3 text-xs">
              <li><Link href="/articles/pilates-yoga-difference" className="text-warm-500 hover:text-white transition font-light">ピラティスとヨガの違い</Link></li>
              <li><Link href="/articles/mat-machine-difference" className="text-warm-500 hover:text-white transition font-light">マットとマシンの違い</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-warm-800 mt-12 pt-8 text-center">
          <p className="text-warm-600 text-xs font-light">&copy; 2026 Pilates-Biyori. All rights reserved.</p>
          <p className="text-warm-700 text-[10px] font-light mt-2">
            ※掲載情報は2026年3月31日時点のものです。最新情報は各公式サイトでご確認ください。
          </p>
        </div>
      </div>
    </footer>
  )
}
