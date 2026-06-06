import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-noto-sans-jp',
})

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-cormorant',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#fafaf9',
  colorScheme: 'light',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://biyori-pilates.com'),
  title: {
    default: 'Pilates-Biyori - あなたに最適なピラティスが見つかる',
    template: '%s | Pilates-Biyori',
  },
  description: '【2026年最新】初心者から経験者まで、あなたに最適なピラティススタジオが見つかるメディア。マシンピラティス・マットピラティスの基礎知識からスタジオ比較まで徹底サポート。',
  keywords: ['ピラティス', 'マシンピラティス', 'スタジオ', '比較', '初心者', '効果', 'おすすめ', '2026'],
  authors: [{ name: 'Pilates-Biyori編集部' }],
  alternates: {
    canonical: 'https://biyori-pilates.com/',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://biyori-pilates.com/',
    title: 'Pilates-Biyori - あなたに最適なピラティスが見つかる',
    description: '初心者から経験者まで、ピラティスの基礎知識からスタジオ選びまで徹底サポート。',
    siteName: 'Pilates-Biyori',
    images: [
      {
        url: '/images/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Pilates-Biyori',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pilates-Biyori - あなたに最適なピラティスが見つかる',
    description: '初心者から経験者まで、ピラティススタジオ選びを徹底サポート。',
    images: ['/images/hero.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'format-detection': 'telephone=no',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Pilates-Biyori',
  url: 'https://biyori-pilates.com',
  logo: 'https://biyori-pilates.com/images/hero.webp',
  description: '初心者から経験者まで、あなたに最適なピラティスが見つかるメディア',
  publisher: {
    '@type': 'Organization',
    name: '株式会社MediaX',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'JP',
      addressLocality: '渋谷区',
      addressRegion: '東京都',
      postalCode: '150-0011',
      streetAddress: '東一丁目27番10号',
    },
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Pilates-Biyori',
  url: 'https://biyori-pilates.com',
  description: '初心者から経験者まで、あなたに最適なピラティスが見つかるメディア',
  inLanguage: 'ja-JP',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://biyori-pilates.com/area/{search_term_string}/',
    },
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Pilates-Biyori',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${cormorant.variable}`}>
      <head>
        {/* JS有効時のみ <html> に js クラスを付与（描画前に実行・初期非表示のチラつき防止） */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
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
