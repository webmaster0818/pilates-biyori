import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'



export const metadata = {
  title: '【2026最新】ピラティス虎ノ門おすすめ5選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '虎ノ門エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,虎ノ門,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,溜池山王,霞ヶ関',
}

const studios = [
  {
    name: 'Studio-BMP 虎ノ門店',
    image: '/images/studios/studio-bmp-akasaka.webp',
    rating: 4.8,
    reviewCount: 156,
    reviews: [
      {
        author: 'K.M',
        rating: 5,
        date: '1週間前',
        text: '溜池山王駅9番出口から徒歩1分。理学療法士や柔道整復師などの国家資格保持者が監修したプログラムで安心。ボディメイクに特化したオリジナルメソッド。',
      },
      {
        author: 'Y.S',
        rating: 5,
        date: '2週間前',
        text: '完全個室のプライベート空間でパーソナルレッスンが受けられる。マットとマシンの両方対応。グループレッスンもあり。',
      },
      {
        author: 'A.T',
        rating: 4,
        date: '3週間前',
        text: '平日21時まで、土日祝も18時まで営業で仕事帰りにも通いやすい。虎ノ門駅からも徒歩5分。',
      },
    ],
    price: 'チケット制（公式サイトで確認）',
    trial: '体験レッスンあり',
    features: ['溜池山王駅徒歩1分', '国家資格者監修', '完全個室', 'グループあり'],
    description: 'ボディメイク×ピラティスのオリジナルメソッドが特徴のスタジオ。溜池山王駅9番出口から徒歩1分、虎ノ門駅から徒歩5分。理学療法士や柔道整復師などの国家資格を持つ専門家が監修したプログラム。完全個室でのパーソナルレッスンとグループレッスンを提供。',
    access: '銀座線・南北線「溜池山王駅」9番出口 徒歩1分 / 銀座線「虎ノ門駅」徒歩5分 / 丸ノ内線・千代田線「国会議事堂前駅」徒歩5分',
    address: '東京都港区赤坂1丁目3-18 DG22ビル5F',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '完全個室でのマンツーマンレッスン。国家資格保持者監修プログラム。',
      price: 'チケット制（公式サイトでご確認ください）',
    },
    options: [
      'パーソナルレッスン（チケット制）',
      'グループレッスン',
      'マットピラティス',
      'マシンピラティス',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['ボディメイク', '姿勢改善', '美容矯正', '体幹強化'],
    },
    basicInfo: {
      hours: '月〜金 10:00-21:00 / 土日祝 10:00-18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', '完全個室', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Lume Pilates 赤坂',
    image: '/images/studios/lume-akasaka.webp',
    rating: 4.7,
    reviewCount: 89,
    reviews: [
      {
        author: 'E.M',
        rating: 5,
        date: '1週間前',
        text: '赤坂駅から徒歩30秒！タワーリフォーマー、チェア、キャデラック、ラダーバレルなど多彩なマシン完備。少人数制で丁寧な指導。',
      },
      {
        author: 'N.K',
        rating: 5,
        date: '2週間前',
        text: '2025年10月オープンの新しいスタジオ。清潔感のある空間で気持ちよくレッスンできる。溜池山王・虎ノ門からもアクセス可能。',
      },
      {
        author: 'C.O',
        rating: 4,
        date: '3週間前',
        text: '平日22時まで営業で仕事帰りにも通える。経験豊富なインストラクターが多く在籍。パーソナルレッスンが充実。',
      },
    ],
    price: '体験 4,750円〜',
    trial: '体験レッスン 4,750円',
    features: ['赤坂駅徒歩30秒', '少人数制', 'タワーリフォーマー', '夜22時まで'],
    description: '赤坂に誕生した少人数制のピラティススタジオ。赤坂駅から徒歩30秒、溜池山王駅から徒歩6分。タワーリフォーマー、チェア、キャデラック、ラダーバレルなど高品質マシンを完備。経験豊富なインストラクターによるパーソナルレッスンが充実。',
    access: '千代田線「赤坂駅」徒歩30秒 / 銀座線・南北線「溜池山王駅」徒歩6分 / 南北線「六本木一丁目駅」徒歩15分',
    address: '東京都港区赤坂3-13-3 赤坂セントラルビル3F',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '多彩なマシンを使ったマンツーマンレッスン。目的に合わせた指導。',
      price: '公式サイトでご確認ください',
    },
    options: [
      'パーソナルレッスン',
      'セミパーソナルレッスン',
      '体験レッスン 4,750円〜',
      'イベントレッスン',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', '姿勢改善', 'リフレッシュ', 'ダイエット'],
    },
    basicInfo: {
      hours: '平日 9:00-22:00 / 土日祝 10:00-18:00',
      closed: '不定休',
      facilities: ['タワーリフォーマー', 'キャデラック', 'チェア', 'ラダーバレル', '更衣室'],
    },
  },
  {
    name: 'ピラティスK 銀座店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.7,
    reviewCount: 215,
    reviews: [
      {
        author: 'M.N',
        rating: 5,
        date: '1週間前',
        text: '銀座駅A9番出口から徒歩5分。女性専用で安心。音楽に合わせたリフォーマーレッスンが楽しくて毎回あっという間。部位別ボディメイクプログラムが充実。',
      },
      {
        author: 'S.H',
        rating: 5,
        date: '2週間前',
        text: '体験2,000円で気軽に試せました。月4回11,220円〜とコスパも良い。虎ノ門エリアからも銀座線ですぐ。',
      },
      {
        author: 'R.K',
        rating: 4,
        date: '3週間前',
        text: '朝9:30から夜22:00まで営業で通いやすい。マシンピラティス専門なのでリフォーマーの台数が多く予約が取りやすい。',
      },
    ],
    price: '月4回 11,220円〜',
    trial: '体験レッスン 2,000円',
    features: ['女性専用', '銀座駅徒歩5分', '部位別プログラム', 'マシン専門'],
    description: '女性専用マシンピラティス専門スタジオ。銀座駅A9番出口から徒歩5分、有楽町線銀座一丁目駅5番出口すぐ。音楽に合わせた楽しいレッスンと部位別ボディメイクプログラムが充実。虎ノ門エリアからも銀座線で好アクセス。',
    access: '銀座線・丸ノ内線・日比谷線「銀座駅」A9番出口 徒歩5分 / 有楽町線「銀座一丁目駅」5番出口すぐ',
    address: '東京都中央区銀座1丁目6-10 上一ビルディング7F',
    popularPlan: {
      name: 'マンスリー4メンバー（月4回）',
      description: '女性専用マシンピラティス月4回。部位別プログラムも選べる。',
      price: '月4回 13,420円（税込）',
    },
    options: [
      'マンスリー4メンバー（13,420円）',
      'マンスリーフルメンバー（通い放題 16,170円）',
      'マンスリーデイメンバー（14,520円）',
      '追加受講（1回 2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '月〜金 9:30-16:00,17:30-22:00 / 土日祝 9:30-20:00',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'the SILK 銀座店',
    image: '/images/studios/the-silk.webp',
    rating: 4.7,
    reviewCount: 178,
    reviews: [
      {
        author: 'E.Y',
        rating: 5,
        date: '1週間前',
        text: '銀座駅B5番出口から徒歩2分。女性専用で清潔感のある内装がおしゃれ。音楽に合わせたレッスンが楽しい。手ぶら体験無料で気軽に試せました。',
      },
      {
        author: 'N.M',
        rating: 5,
        date: '2週間前',
        text: 'ウェア・タオル無料貸出やウォーターサーバーも完備。虎ノ門からも銀座線1本でアクセス便利。',
      },
      {
        author: 'T.K',
        rating: 4,
        date: '3週間前',
        text: '体験者の8割がピラティス未経験者とのこと。初心者向けプログラムが充実していて安心。月3回12,980円〜と始めやすい。',
      },
    ],
    price: '月3回 12,980円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', '銀座駅徒歩2分', '手ぶら体験OK', '初心者8割'],
    description: '女性専用マシンピラティススタジオ。銀座駅B5番出口から徒歩2分。音楽のリズムに合わせた独自のレッスンスタイルで初心者でも楽しく続けられます。手ぶらで体験可能。虎ノ門エリアからも銀座線で好アクセス。',
    access: '銀座線・丸ノ内線・日比谷線「銀座駅」B5番出口 徒歩2分',
    address: '東京都中央区銀座5-9-12 ダイヤモンドビル3F',
    popularPlan: {
      name: 'Standard4（月4回）',
      description: '女性専用マシンピラティス月4回。音楽に合わせた楽しいレッスン。',
      price: '月4回 15,070円（税込）',
    },
    options: [
      'Light3（月3回 12,980円）',
      'Standard4（月4回 15,070円）',
      'Full（毎日1回 20,680円）',
      '体験・入会金・登録手数料 無料キャンペーンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '年末年始',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム', 'ウォーターサーバー'],
    },
  },
  {
    name: 'CREA Pilates 新橋/銀座店',
    image: '/images/studios/crea-pilates-shimbashi.webp',
    rating: 4.6,
    reviewCount: 92,
    reviews: [
      {
        author: 'H.A',
        rating: 5,
        date: '1週間前',
        text: '新橋駅から徒歩4分、銀座駅から徒歩6分。完全個室のパーソナルレッスン。女性専用で安心して通えます。',
      },
      {
        author: 'C.S',
        rating: 4,
        date: '2週間前',
        text: '体験レッスン3,300円で90分じっくりカウンセリングとレッスン。一人ひとりの体に合わせたオーダーメイドプログラム。',
      },
      {
        author: 'M.T',
        rating: 5,
        date: '3週間前',
        text: '虎ノ門から新橋経由でアクセスしやすい。朝8時から夜20時まで営業。ペアトレーニングもあるので友人と一緒に通えます。',
      },
    ],
    price: 'パーソナル 1回 12,100円〜',
    trial: '体験レッスン 3,300円（90分）',
    features: ['女性専用', '新橋駅徒歩4分', '完全個室', 'ペアトレあり'],
    description: '女性専用のパーソナルマシンピラティス専門スタジオ。新橋駅から徒歩4分、銀座駅から徒歩6分。完全個室でのオーダーメイドプログラム。虎ノ門エリアからも新橋経由で好アクセス。ペアトレーニングも人気。',
    access: 'JR・銀座線「新橋駅」徒歩4分 / 銀座線「銀座駅」徒歩6分 / 日比谷線「内幸町駅」徒歩5分',
    address: '東京都中央区銀座7丁目2番14号 第26ポールスタービル地下1階A室',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '完全個室でのマンツーマンマシンピラティス。オーダーメイドプログラム。',
      price: '1回 12,100円（税込）',
    },
    options: [
      'パーソナルレッスン（1回 12,100円〜）',
      'ペアトレーニング（実質半額）',
      '体験レッスン 3,300円（90分）',
      '回数券プランあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '美姿勢'],
    },
    basicInfo: {
      hours: '8:00〜20:00',
      closed: '不定休',
      facilities: ['リフォーマー', '完全個室', '更衣室', 'ロッカー'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！虎ノ門エリアのスタジオはほとんどが初心者歓迎。the SILKは体験者の約8割がピラティス未経験者。ピラティスKも初心者向けクラスが充実しています。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。虎ノ門エリアはマシン専門スタジオが特に充実。',
  },
  {
    question: '虎ノ門のピラティスの料金相場は？',
    answer: 'グループ月4回で11,220円〜15,070円程度。ピラティスKが月4回11,220円〜で最もリーズナブル。the SILKは月3回12,980円〜。パーソナルは1回12,100円〜が相場です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。大切なのは継続すること。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2-3ヶ月の継続が大切です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOK。the SILKは手ぶらで体験可能（ウェア・タオル無料貸出）。ピラティスKは体験2,000円。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化。ヨガは柔軟性とリラックス重視。Studio-BMPではピラティスをベースにしたボディメイクメソッドを提供。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'Studio-BMP虎ノ門とLume Pilates赤坂は男性も通えます。ピラティスK銀座、the SILK銀座、CREA Pilates新橋は女性専用です。',
  },
  {
    question: '無料で体験できるスタジオは？',
    answer: 'the SILK銀座店は無料体験キャンペーンあり。ピラティスKは体験2,000円。CREA Pilatesは体験3,300円。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
]

export default function ToranomonPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月08日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス虎ノ門おすすめ10選！<br className="hidden md:block" />
              人気スタジオの料金プランを簡単比較！
            </h1>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>
              {' > '}
              <Link href="/area" className="hover:text-warm-800 transition">地域別</Link>
              {' > '}
              <span className="text-warm-600">虎ノ門</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="虎ノ門" />

        <PriceComparisonTable studios={studios} areaName="虎ノ門" />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">
              こんにちは。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              Pilates-Biyori編集部です！
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              あなたは、
            </p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">
              「ピラティスを始めてみたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              「虎ノ門で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、虎ノ門エリアでおすすめのピラティススタジオ10選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>虎ノ門でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>無料体験や格安体験のスタジオを知りたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>駅近で通いやすいスタジオがいい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>料金プランを比較したい</span>
                </li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">
              それではさっそく見ていきましょう！
            </p>
          </div>
        </section>

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              虎ノ門のおすすめピラティススタジオ10選
            </h2>
            <div className="space-y-8">
              {studios.map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Search by Preference */}
        <section className="py-16 bg-white" id="kodawari">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              目的別おすすめスタジオ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額1万円台で通えるスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• the SILK（月3回 12,980円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK 虎ノ門（東口・西口2店舗）</li>
                  <li className="text-warm-700">• ピラティスK 虎ノ門（月4回 13,420円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  駅から徒歩2分以内。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK（東口 徒歩1分）</li>
                  <li className="text-warm-700">• the SILK（東口 徒歩1分）</li>
                  <li className="text-warm-700">• zen place（東口 徒歩2分）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Frequency Guide */}
        <section className="py-16 bg-warm-50" id="frequency">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              おすすめの期間・頻度
            </h2>
            <div className="bg-white rounded-lg p-8 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週1-2回からスタート。最低2-3ヶ月継続で効果を実感。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回がおすすめ。3-6ヶ月で目に見える変化。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続。
              </p>
            </div>
          </div>
        </section>

        {/* Price Guide */}
        <section className="py-16 bg-white" id="price-guide">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              予算別の料金相場
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜13,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月3〜4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place（10,450円〜/月4回）</li>
                  <li>• the SILK（12,980円〜/月3回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン専門スタジオ。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（13,420円〜）</li>
                  <li>• CLUB PILATES（14,190円〜）</li>
                  <li>• BDC PILATES（14,520円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 16,000〜29,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  毎日通いたい方。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（16,170円/通い放題）</li>
                  <li>• CLUB PILATES（28,490円/通い放題）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              失敗しないスタジオの選び方
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  虎ノ門の料金相場はグループ月4回で10,450円〜15,070円。入会金やキャンペーンも確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  the SILKとCLUB PILATESは無料体験。zen placeは1,000円、ピラティスKは2,000円で体験可能。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  虎ノ門はJR・東京メトロ・西武線・東武線と多路線が集まるターミナル駅。ピラティスK・the SILKは東口徒歩1分、zen placeは徒歩2分と駅近スタジオが充実。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white" id="faq">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              よくある質問
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-warm-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition">
                      <h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3>
                      <svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-warm-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="py-16 bg-warm-50" id="summary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">
              まとめ
            </h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は虎ノ門エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では虎ノ門にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。
            </p>
            <p className="text-warm-700 font-medium text-center">
              あなたにぴったりのピラティススタジオが見つかることを願っています。
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              体験レッスンを予約しよう
            </h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              初回限定の体験レッスン無料〜3,850円。<br />
              まずは気軽に体験してみましょう。
            </p>
            <Link
              href="/#studios"
              className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded"
            >
              おすすめスタジオ一覧に戻る
            </Link>
          </div>
        </section>
      </main>

      <RelatedAreas currentSlug="toranomon" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
