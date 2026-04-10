import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pilates-Biyori - あなたに最適なピラティスが見つかる',
  description: '【2026年最新】初心者から経験者まで、あなたに最適なピラティススタジオが見つかるメディア。マシンピラティス・マットピラティスの基礎知識からスタジオ比較まで徹底サポート。',
  keywords: 'ピラティス,マシンピラティス,スタジオ,比較,初心者,効果,おすすめ,2026',
  authors: [{ name: 'Pilates-Biyori編集部' }],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://pilates-biyori-deploy.pages.dev/',
    title: 'Pilates-Biyori - あなたに最適なピラティスが見つかる',
    description: '初心者から経験者まで、ピラティスの基礎知識からスタジオ選びまで徹底サポート。',
    siteName: 'Pilates-Biyori',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pilates-Biyori - あなたに最適なピラティスが見つかる',
    description: '初心者から経験者まで、ピラティススタジオ選びを徹底サポート。',
  },
  other: {
    'format-detection': 'telephone=no',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap" 
          as="style" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap" 
          rel="stylesheet" 
        />
        <meta name="theme-color" content="#fafaf9" />
      </head>
      <body className="bg-warm-50 font-sans text-warm-800">
        <noscript>
          <style>{`.fade-up{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  )
}
