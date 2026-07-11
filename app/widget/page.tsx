import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'ピラティス料金相場ウィジェット（無料埋め込み）',
  description: '全国211スタジオ独自調査にもとづくピラティス料金相場（月額中央値・体験無料率）を、あなたのサイトに1行で埋め込める無料ウィジェット。毎月自動更新・登録不要。',
  alternates: { canonical: 'https://biyori-pilates.com/widget/' },
}

const SCRIPT_CODE = `<script src="https://biyori-pilates.com/widget.js" async></script>`
const IFRAME_CODE = `<iframe src="https://biyori-pilates.com/widget.html" width="340" height="190" style="border:none;" loading="lazy" title="ピラティス料金相場（Pilates-Biyori）"></iframe>`

export default function WidgetPage() {
  return (
    <>
      <Navigation />
      <main data-reveal className="pt-16">
        <section className="bg-warm-50 py-12">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4">ピラティス料金相場ウィジェット（無料）</h1>
            <p className="text-warm-600 leading-relaxed">
              当サイトの全国スタジオ独自調査にもとづく<strong>ピラティスの料金相場（月額中央値・平均・体験無料率）</strong>を、あなたのブログ・サイトに1行のコードで表示できます。
              数値は毎月の調査更新に合わせて自動で最新化されます。無料・登録不要です。
            </p>
          </div>
        </section>
        <section className="py-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-8">
            <div>
              <h2 className="text-lg font-bold text-warm-900 mb-2">プレビュー</h2>
              <iframe src="/widget.html" width="340" height="190" style={{ border: 'none' }} title="ピラティス料金相場ウィジェット プレビュー" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-warm-900 mb-2">設置方法①: script版（推奨）</h2>
              <p className="text-sm text-warm-600 mb-2">表示したい場所に以下を貼り付けてください。</p>
              <pre className="bg-warm-900 text-warm-50 text-xs p-4 rounded-lg overflow-x-auto"><code>{SCRIPT_CODE}</code></pre>
            </div>
            <div>
              <h2 className="text-lg font-bold text-warm-900 mb-2">設置方法②: iframe版</h2>
              <p className="text-sm text-warm-600 mb-2">scriptタグが使えないブログサービスはこちら。</p>
              <pre className="bg-warm-900 text-warm-50 text-xs p-4 rounded-lg overflow-x-auto"><code>{IFRAME_CODE}</code></pre>
            </div>
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-5 text-sm text-warm-600 leading-relaxed">
              <p className="font-bold text-warm-900 mb-2">利用条件</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>無料でご利用いただけます（商用サイト・個人ブログとも可）</li>
                <li>ウィジェット内の出典リンク（Pilates-Biyori）は削除・改変しないでください</li>
                <li>データの引用は<Link href="/articles/pilates-ryokin-hakusho/" className="text-warm-800 underline">料金白書</Link>の出典明記ルールに準じます</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
