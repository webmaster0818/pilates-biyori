import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { ContactForm } from '@/components/ContactForm'

export const metadata = {
  title: 'お問い合わせ｜広告出稿・スタジオ掲載・提携のご相談',
  description:
    'Pilates-Biyoriへのお問い合わせ窓口です。広告出稿・タイアップ、スタジオ掲載のご希望、相互リンク・記事掲載、記事内容へのご指摘などを受け付けています。',
  alternates: {
    canonical: 'https://biyori-pilates.com/contact/',
  },
}

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900">
              お問い合わせ
            </h1>
            <p className="text-warm-600 text-sm mt-3">
              広告出稿・スタジオ掲載・提携のご相談はこちらから
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-2xl mx-auto px-6 lg:px-8">
            <p className="text-warm-700 text-sm leading-relaxed mb-4">
              Pilates-Biyoriへのお問い合わせは、以下のフォームからお願いいたします。内容を確認のうえ、通常2〜3営業日以内に編集部よりメールでご返信いたします。
            </p>
            <ul className="text-sm text-warm-700 list-disc pl-5 space-y-1 mb-4">
              <li>広告出稿・タイアップのご相談（媒体資料のご請求を含む）</li>
              <li>スタジオ掲載のご希望（スタジオ運営者様）</li>
              <li>相互リンク・記事掲載・コンテンツ提携のご相談</li>
              <li>記事内容に関するご指摘・修正依頼</li>
            </ul>
            <p className="text-xs text-warm-500 mb-10">
              ※営業目的の自動送信・無関係な勧誘はご遠慮ください。いただいた個人情報は
              <Link href="/privacy-policy" className="underline hover:text-warm-700">
                プライバシーポリシー
              </Link>
              に基づき、お問い合わせへの対応のみに使用します。
            </p>

            <ContactForm />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
