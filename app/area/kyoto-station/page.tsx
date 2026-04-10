import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス京都駅おすすめ5選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '京都駅エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,京都駅,京都,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'Rintosull 京都駅前店',
    image: '/images/pilates3.jpg',
    rating: 4.6,
    reviewCount: 88,
    reviews: [
      {
        author: 'K.N',
        rating: 5,
        date: '1週間前',
        text: '京都駅から徒歩5分！2026年2月オープンの新しいスタジオ。LAVA系列で安心。月4回8,800円とマシンピラティスでは破格の安さ。',
      },
      {
        author: 'Y.M',
        rating: 4,
        date: '2週間前',
        text: '無料体験でパーソナル姿勢診断もしてもらえた。女性専用で初心者が87%以上。リフォーマーを使った本格レッスン。',
      },
      {
        author: 'A.S',
        rating: 5,
        date: '3週間前',
        text: 'プレミアムフリーフルタイムでLAVA等系列のヨガスタジオも利用可能。ピラティスとヨガ両方やりたい人におすすめ。',
      },
    ],
    price: '月4回 8,800円〜',
    trial: '体験レッスン 無料',
    features: ['LAVA系列', '女性専用', '京都駅徒歩5分', '2026年2月OPEN'],
    description: 'ホットヨガLAVA系列の女性専用マシンピラティススタジオ。2026年2月オープン。京都駅から徒歩5分。月4回8,800円のリーズナブルな料金。無料体験でパーソナル姿勢診断付き。初心者87%以上で安心。',
    access: 'JR「京都駅」徒歩5分',
    address: '京都府京都市下京区京都駅前エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マシンピラティス月4回プラン',
      description: 'リフォーマーを使った本格マシンピラティス。1回あたり2,200円のコスパ。',
      price: '月4回 8,800円（税込）',
    },
    options: [
      '通い放題プラン',
      'プレミアムフリーフルタイム（LAVA等全店利用可）',
      '施設使用料あり',
      '無料体験・パーソナル姿勢診断付き',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', 'ヨガ&ピラティス両方', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'シャワー'],
    },
  },
  {
    name: 'STUDIO IVY 京都駅前店',
    image: '/images/pilates2.jpg',
    rating: 4.8,
    reviewCount: 72,
    reviews: [
      {
        author: 'M.K',
        rating: 5,
        date: '1週間前',
        text: '完全パーソナルなので周りを気にせず集中できる。オーダーメイドのプログラムで自分だけのメニューを組んでもらえます。',
      },
      {
        author: 'S.T',
        rating: 5,
        date: '2週間前',
        text: '完全プライベート空間でマシンピラティスを受けられる。インストラクターが丁寧で初心者にも分かりやすい指導。',
      },
      {
        author: 'R.N',
        rating: 4,
        date: '3週間前',
        text: '月2回15,000円〜とパーソナルにしてはリーズナブル。体験は4,500円で本格レッスンを試せる。',
      },
    ],
    price: '月2回 15,000円〜',
    trial: '体験レッスン 4,500円',
    features: ['完全パーソナル', 'マシンピラティス', 'オーダーメイド', '完全プライベート空間'],
    description: '完全パーソナルのマシンピラティススタジオ。完全プライベート空間でオーダーメイドのプログラムを提供。月2回15,000円〜。一人ひとりの目標に合わせた指導で効率的にボディメイク。',
    access: 'JR「京都駅」徒歩圏内',
    address: '京都府京都市下京区京都駅前エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナル月2回プラン',
      description: '完全プライベート空間でオーダーメイドのマシンピラティス。',
      price: '月2回 15,000円〜（税込）',
    },
    options: [
      '月4回プラン',
      '月8回プラン',
      '体験レッスン 4,500円',
      'オーダーメイドプログラム',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ボディメイク', '姿勢改善', 'パーソナル指導', 'ダイエット'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', 'プライベートルーム', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'zen place pilates 京都スタジオ',
    image: '/images/pilates4.jpg',
    rating: 4.7,
    reviewCount: 130,
    reviews: [
      {
        author: 'E.M',
        rating: 5,
        date: '1週間前',
        text: '四条駅12番出口から徒歩1分でアクセス抜群。京都駅から地下鉄1本で通える。全国150店舗以上で相互利用できるのが便利。',
      },
      {
        author: 'N.K',
        rating: 5,
        date: '2週間前',
        text: '男性もOKなので夫婦で通っています。グループ体験が1,000円で気軽に試せる。月4回10,450円〜とコスパも良い。',
      },
      {
        author: 'H.Y',
        rating: 4,
        date: '3週間前',
        text: 'マットとマシン両方のレッスンがあるのが魅力。インストラクターの質が高く、解剖学に基づいた指導。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['全国150店舗相互利用', '男性OK', '四条駅徒歩1分', 'マット&マシン'],
    description: '全国150店舗以上を展開する大手ピラティススタジオ。四条駅12番出口から徒歩1分（京都駅から地下鉄1本）。男性も通える。グループ体験1,000円。マットとマシン両方のレッスンを提供。',
    access: '地下鉄烏丸線「四条駅」12番出口 徒歩1分（京都駅から地下鉄1本）',
    address: '京都府京都市下京区四条エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'グループ月4回プラン',
      description: 'マット・マシンのグループレッスン月4回。全国150店舗で相互利用可能。',
      price: '月4回 10,450円（税込）',
    },
    options: [
      '月6回プラン',
      '通い放題プラン',
      'プライベートレッスン',
      'グループ体験 1,000円',
    ],
    userProfile: {
      ageRange: '20代〜60代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['姿勢改善', '体幹強化', '柔軟性向上', '健康維持'],
    },
    basicInfo: {
      hours: '月〜金 7:00-20:00 / 土日 7:00-16:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'ピラティスK 京都四条烏丸店',
    image: '/images/pilates3.jpg',
    rating: 4.6,
    reviewCount: 105,
    reviews: [
      {
        author: 'A.K',
        rating: 5,
        date: '1週間前',
        text: '女性専用のマシン専門スタジオ。音楽に合わせたレッスンが楽しくて初心者でも楽しく続けられる。体験0円で気軽に試せる。',
      },
      {
        author: 'Y.N',
        rating: 5,
        date: '2週間前',
        text: '京都駅から地下鉄でアクセスしやすい。月4回13,420円〜。リフォーマー専門でしっかりボディメイクできる。',
      },
      {
        author: 'M.H',
        rating: 4,
        date: '3週間前',
        text: 'スタジオがおしゃれで清潔感がある。インストラクターも明るくて楽しいレッスン。音楽レッスンが他にはない魅力。',
      },
    ],
    price: '月4回 13,420円〜',
    trial: '体験レッスン 0円',
    features: ['女性専用', 'マシン専門', '音楽レッスン', '体験0円'],
    description: '女性専用のマシンピラティス専門スタジオ。音楽に合わせた独自のレッスンスタイルが人気。月4回13,420円〜。体験レッスン0円。京都駅から地下鉄でアクセス可能。',
    access: '地下鉄烏丸線「四条駅」周辺（京都駅から地下鉄でアクセス可）',
    address: '京都府京都市下京区四条烏丸エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '女性専用マシンピラティス月4回。音楽に合わせた楽しいレッスン。',
      price: '月4回 13,420円（税込）',
    },
    options: [
      'マンスリー8メンバー',
      'マンスリーフルメンバー（通い放題）',
      '体験レッスン 0円',
      '入会金あり（キャンペーンで無料の場合あり）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'Hain pilates 京都駅店',
    image: '/images/pilates2.jpg',
    rating: 4.7,
    reviewCount: 65,
    reviews: [
      {
        author: 'T.M',
        rating: 5,
        date: '1週間前',
        text: '1回30分のパーソナルマシンピラティス専門。短時間で効率的にトレーニングできるので忙しい人にぴったり。女性専用で安心。',
      },
      {
        author: 'C.Y',
        rating: 4,
        date: '2週間前',
        text: '30分という短さが逆にちょうどいい。集中して取り組めるので効果を実感しやすい。京都駅近くで通いやすい。',
      },
      {
        author: 'K.S',
        rating: 5,
        date: '3週間前',
        text: 'パーソナルなのでインストラクターがしっかりフォームを見てくれる。マシンピラティス専門で初心者でも安心。',
      },
    ],
    price: '公式サイト参照',
    trial: '体験レッスンあり',
    features: ['女性専用', '1回30分', 'パーソナル専門', 'マシンピラティス'],
    description: '女性専用のパーソナルマシンピラティス専門スタジオ。1回30分の短時間集中型レッスンで、忙しい方でも効率的にトレーニング可能。京都駅近くでアクセス良好。',
    access: 'JR「京都駅」周辺',
    address: '京都府京都市下京区京都駅エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナル30分プラン',
      description: '1回30分のマシンピラティスパーソナルレッスン。短時間集中で効率的。',
      price: '公式サイト参照',
    },
    options: [
      '月額プラン',
      '回数券プラン',
      '体験レッスンあり',
      '女性専用',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', '時短トレーニング', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', 'プライベートルーム', '更衣室', 'ロッカー'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！京都駅エリアのスタジオはほとんどが初心者歓迎。Rintosullは初心者87%以上、zen place pilatesはレベル別クラスあり。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。',
  },
  {
    question: '京都駅のピラティスの料金相場は？',
    answer: 'Rintosullは月4回8,800円〜と格安。zen place pilatesは月4回10,450円〜。ピラティスKは月4回13,420円〜。グループ月4回で8,800円〜13,420円が相場です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。大切なのは継続すること。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。ピラティスKは音楽レッスンで楽しくカロリー消費できます。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOK。Rintosullとピラティスは無料体験。zen place pilatesはグループ体験1,000円。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place pilates京都スタジオとSTUDIO IVY京都駅前店は男性も通えます。Rintosull・ピラティスK・Hain pilatesは女性専用。',
  },
  {
    question: '一番安いスタジオは？',
    answer: 'グループレッスンではRintosullが月4回8,800円〜で最安。パーソナルではSTUDIO IVYが月2回15,000円〜。',
  },
  {
    question: 'パーソナルレッスンを受けたい場合は？',
    answer: 'STUDIO IVY京都駅前店は完全パーソナル。Hain pilates京都駅店は30分パーソナル専門。どちらも一対一でしっかり指導を受けられます。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
]

export default function KyotoStationPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月09日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス京都駅おすすめ5選！<br className="hidden md:block" />
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
              <span className="text-warm-600">京都駅</span>
            </nav>
          </div>
        </section>

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
              「京都駅で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、京都駅エリアでおすすめのピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>京都駅でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>コスパの良いスタジオを知りたい</span>
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
              京都駅のおすすめピラティススタジオ5選
            </h2>
            <div className="space-y-8">
              {studios.map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Search by Preference */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              こだわりから探す
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月4回8,800円〜のスタジオも。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li>
                  <li className="text-warm-700">• zen place pilates（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• ピラティスK（月4回 13,420円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  完全マンツーマンで本格指導。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STUDIO IVY（完全パーソナル）</li>
                  <li className="text-warm-700">• Hain pilates（30分パーソナル）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  京都駅から徒歩・地下鉄ですぐ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（京都駅徒歩5分）</li>
                  <li className="text-warm-700">• zen place pilates（四条駅徒歩1分）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Frequency Guide */}
        <section className="py-16 bg-warm-50">
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
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              予算別の料金相場
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  コスパ抜群のグループレッスン。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（8,800円/月4回）</li>
                  <li>• zen place pilates（10,450円/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回〜</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン専門・パーソナルも。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（13,420円〜/月4回）</li>
                  <li>• STUDIO IVY（15,000円〜/月2回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">短時間パーソナル</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">1回30分</p>
                <p className="text-sm text-warm-600 mb-4">
                  忙しい方に最適。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Hain pilates（30分パーソナル）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50">
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
                  京都駅エリアはグループ月4回8,800円〜、パーソナル月2回15,000円〜と幅広い価格帯。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  RintosullとピラティスKは無料体験。zen place pilatesはグループ体験1,000円。まずは気軽に試しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  京都駅からはJR・地下鉄が利用可能。Rintosullは京都駅徒歩5分、zen place pilatesは四条駅徒歩1分。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
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
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">
              まとめ
            </h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は京都駅エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では京都駅にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜4,500円。<br />
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

      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
