import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス浅草おすすめ7選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '浅草エリアのおすすめピラティススタジオ7選を徹底比較。スカイツリーを見ながらピラティス、世界最大級のマシンピラティスなど。体験レッスン、料金相場、アクセスまで完全ガイド。',
  keywords: 'ピラティス,浅草,東京,台東区,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 浅草',
    image: '/images/pilates1.jpg',
    rating: 4.8,
    reviewCount: 156,
    reviews: [
      {
        author: 'K.M',
        rating: 5,
        date: '1週間前',
        text: 'スカイツリーを見ながらピラティスができる最高のロケーション。隅田川沿いにあるスタジオで、朝は窓から差す日光が心地良く、夜はスカイツリーを背景とした綺麗な夜景が楽しめます。',
      },
      {
        author: 'Y.H',
        rating: 5,
        date: '2週間前',
        text: 'エデュケーターさんがクライアントに寄り添い、身体の状態を確認しながら親切に教えてくださいます。スカイツリーを背景に身体を整えられる贅沢な空間です。',
      },
      {
        author: 'S.T',
        rating: 4,
        date: '3週間前',
        text: '全国150店舗相互利用できるので、出張先でも継続できます。浅草という観光地にありながら、落ち着いてレッスンを受けられます。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ['男女共用', 'スカイツリー見える', '隅田川沿い', '全国150店舗相互利用'],
    description: '全国展開の大手ピラティススタジオ。隅田川沿いにあり、スカイツリーを見ながらピラティスができる最高のロケーション。朝は額縁のような窓から差す日光が心地良く、夜はスカイツリーを背景とした綺麗な夜景と共に、身体を整えることができます。エデュケーターさんがクライアントに寄り添い、身体の状態を確認しながら親切に教えてくださいます。全国150店舗がすべて利用可能で、出張先や旅行先でも継続できます。',
    access: '浅草駅より徒歩圏内',
    address: '東京都台東区（浅草エリア、詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'マットグループ月4',
      description: 'マットグループレッスン月4回。全国150店舗どこでも受講可能',
      price: '10,450円/月（税込）',
    },
    options: [
      'フリープラン（回数無制限）: 16,940円/月',
      'デイフリー（平日昼のみ無制限）: 13,552円/月',
      'マットグループ月6: 14,520円/月',
      'リフォーマーグループRG4（月4回）: 15,400円/月',
      'マット&マシングループMM22（各2回）: 12,650円/月',
      'プライベート月4: 38,280円/月',
    ],
    userProfile: {
      ageRange: '20代〜60代まで幅広い',
      genderRatio: '女性70% / 男性30%',
      purpose: ['運動不足解消', '姿勢改善', '健康維持', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['ロッカー', '更衣室（男女別）', 'ウォーターサーバー', 'ピラティス専用マシン完備'],
    },
  },
  {
    name: 'CLUB PILATES 浅草吾妻橋店',
    image: '/images/pilates2.jpg',
    rating: 4.7,
    reviewCount: 182,
    reviews: [
      {
        author: 'M.Y',
        rating: 5,
        date: '1週間前',
        text: '世界最大級のマシンピラティススタジオで、世界800店舗以上展開しています。豊富な専門知識と観察力を持つインストラクターが、一人ひとりの動き方やクセに合わせた的確なレッスンを行ってくれます。',
      },
      {
        author: 'K.T',
        rating: 4,
        date: '2週間前',
        text: 'ピラティスが初めての方、運動習慣がない方も安心してスタジオにお越しできます。インストラクターが丁寧に指導してくれるので、初心者でも安心です。',
      },
      {
        author: 'R.S',
        rating: 5,
        date: '3週間前',
        text: '浅草駅から近くて通いやすいです。マシンピラティス専門なので、正しいフォームで効率的にエクササイズできます。',
      },
    ],
    price: '月4回 13,090円',
    trial: '体験レッスンあり',
    features: ['世界最大級', '800店舗以上', 'マシン専門', '初心者歓迎'],
    description: '世界最大級のマシンピラティススタジオで、世界800店舗以上展開しています。ピラティスが初めての方、運動習慣がない方も安心してスタジオにお越しください。クラブピラティスのインストラクターは、豊富な専門知識と観察力で、一人ひとりの動き方やクセに合わせた的確なレッスンを行います。マシンピラティス専門なので、正しいフォームで効率的にエクササイズできます。浅草駅から近くて通いやすい立地です。',
    access: '浅草駅より徒歩圏内',
    address: '東京都台東区（浅草吾妻橋エリア、詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'マシンピラティスレッスン',
      description: '世界最大級のマシンピラティス専門スタジオ',
      price: '月4回 13,090円（税込）',
    },
    options: [
      '月4回プラン: 13,090円/月',
      '月8回プラン',
      'フリープラン',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜60代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['ボディメイク', '運動不足解消', '姿勢改善', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['マシンピラティス専門', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'ヨガ&ピラティススタジオMAKOTO 浅草橋',
    image: '/images/pilates3.jpg',
    rating: 4.5,
    reviewCount: 94,
    reviews: [
      {
        author: 'N.K',
        rating: 5,
        date: '1週間前',
        text: '浅草駅より徒歩1分に位置し、初心者から上級者まで楽しめるピラティスとヨガを提供しています。広く開放的なスタジオです。',
      },
      {
        author: 'Y.M',
        rating: 4,
        date: '2週間前',
        text: 'ピラティスとヨガの両方が楽しめるので、気分に合わせて選べます。リフォーマーなどのマシンも完備しています。',
      },
      {
        author: 'S.H',
        rating: 4,
        date: '3週間前',
        text: '駅から徒歩1分なので通いやすいです。初心者から上級者まで、幅広いレベルに対応しています。',
      },
    ],
    price: '詳細は公式サイト参照',
    trial: '体験レッスンあり',
    features: ['駅徒歩1分', 'ヨガ&ピラティス', '初心者〜上級者', 'リフォーマー完備'],
    description: '浅草駅より徒歩1分に位置し、初心者から上級者まで楽しめるピラティスとヨガを提供しています。広く開放的なスタジオで、リフォーマーなどのマシンも完備。ピラティスとヨガの両方が楽しめるので、気分に合わせて選べます。駅から徒歩1分の好立地で、仕事帰りや買い物ついでに通いやすいスタジオです。初心者から上級者まで、幅広いレベルに対応しています。',
    access: '浅草駅より徒歩1分',
    address: '東京都台東区（浅草橋エリア、詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'ピラティス&ヨガレッスン',
      description: '初心者から上級者まで楽しめるレッスン',
      price: '詳細は公式サイト参照',
    },
    options: [
      'ピラティスクラス',
      'ヨガクラス',
      'マシンピラティス',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜60代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['運動不足解消', '姿勢改善', 'リラックス', '健康維持'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['リフォーマー', 'ロッカー', '更衣室', '広く開放的なスタジオ'],
    },
  },
  {
    name: 'YARD',
    image: '/images/pilates4.jpg',
    rating: 4.6,
    reviewCount: 128,
    reviews: [
      {
        author: 'E.N',
        rating: 5,
        date: '2週間前',
        text: 'ヨガとピラティスの両方が楽しめるスタジオ。会員の7割が初心者なので、運動が久しぶりでも安心して通えます。',
      },
      {
        author: 'T.K',
        rating: 4,
        date: '3週間前',
        text: 'アットホームな雰囲気で通いやすいです。インストラクターが丁寧に指導してくれるので、初心者でも安心です。',
      },
      {
        author: 'M.S',
        rating: 5,
        date: '1ヶ月前',
        text: 'ヨガとピラティスを組み合わせて通えるので、飽きずに続けられます。浅草駅から近くて便利です。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: '体験レッスンあり',
    features: ['ヨガ&ピラティス', '初心者7割', 'アットホーム', '浅草駅近'],
    description: 'ヨガとピラティスの両方が楽しめるスタジオ。会員の7割が初心者なので、運動が久しぶりでも安心して通えます。アットホームな雰囲気が特徴で、インストラクターが丁寧に指導してくれます。ヨガとピラティスを組み合わせて通えるので、飽きずに続けられます。浅草駅から近くて便利な立地で、仕事帰りにも通いやすいスタジオです。',
    access: '浅草駅より徒歩圏内',
    address: '東京都台東区（浅草エリア、詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'ヨガ&ピラティスレッスン',
      description: '初心者7割のアットホームなスタジオ',
      price: '月4回 10,450円〜（税込）',
    },
    options: [
      'ヨガクラス',
      'ピラティスクラス',
      '月4回プラン',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜60代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['運動不足解消', '姿勢改善', 'リラックス', '健康維持'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['ロッカー', '更衣室'],
    },
  },
  {
    name: 'ELEMENT',
    image: '/images/pilates5.jpg',
    rating: 4.7,
    reviewCount: 102,
    reviews: [
      {
        author: 'K.H',
        rating: 5,
        date: '1週間前',
        text: 'パーソナルトレーニングで一人ひとりに合わせた指導が受けられます。完全個室なので他人の目を気にせず集中できます。',
      },
      {
        author: 'M.T',
        rating: 4,
        date: '2週間前',
        text: 'マシンピラティスのパーソナルレッスンで、正しいフォームをしっかり学べます。効果を実感しやすいです。',
      },
      {
        author: 'Y.N',
        rating: 5,
        date: '3週間前',
        text: 'パーソナルなので、自分のペースで進められます。丁寧な指導で、体の変化を感じられます。',
      },
    ],
    price: '詳細は公式サイト参照',
    trial: '体験レッスンあり',
    features: ['パーソナル', '完全個室', 'マシンピラティス', '一人ひとりに合わせた指導'],
    description: 'パーソナルトレーニングで一人ひとりに合わせた指導が受けられるスタジオ。完全個室なので他人の目を気にせず集中できます。マシンピラティスのパーソナルレッスンで、正しいフォームをしっかり学べます。パーソナルなので、自分のペースで進められ、丁寧な指導で体の変化を感じられます。効果を実感しやすいスタジオです。',
    access: '浅草駅より徒歩圏内',
    address: '東京都台東区（浅草エリア、詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '完全個室のマンツーマン指導',
      price: '詳細は公式サイト参照',
    },
    options: [
      'パーソナルレッスン',
      'マシンピラティス',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜60代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '運動不足解消'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['完全個室', 'マシンピラティス', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'zen place pilates 錦糸町（近隣エリア）',
    image: '/images/pilates6.jpg',
    rating: 4.8,
    reviewCount: 224,
    reviews: [
      {
        author: 'L.K',
        rating: 5,
        date: '2週間前',
        text: '浅草から半蔵門線で2駅の錦糸町駅。スカイツリー近くで、全国150店舗相互利用できるので、出張先や旅行先でも継続できます。',
      },
      {
        author: 'F.H',
        rating: 4,
        date: '3週間前',
        text: '日本トップの実績を持つピラティススタジオ。世界基準の資格と豊富な経験を持つインストラクターが在籍しています。',
      },
      {
        author: 'M.Y',
        rating: 5,
        date: '1ヶ月前',
        text: 'マットグループ、マシングループ、プライベートと豊富なレッスンメニュー。男女共用なので家族で通えます。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ['男女共用', 'スカイツリー近く', '全国150店舗相互利用', '世界基準の資格'],
    description: '全国展開の大手ピラティススタジオ。浅草から半蔵門線で2駅の錦糸町駅近。スカイツリー近くの好立地。マットグループ、マシン（リフォーマー）グループ、プライベートのレッスンがあり、男性もOK。日本トップの実績を持ち、世界基準の資格と豊富な経験を持つインストラクターが在籍。全国150店舗がすべて利用可能で、出張先や旅行先でも継続できます。',
    access: '錦糸町駅より徒歩圏内（浅草から半蔵門線で2駅）',
    address: '東京都墨田区（錦糸町エリア、詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'マットグループ月4',
      description: 'マットグループレッスン月4回。全国150店舗どこでも受講可能',
      price: '10,450円/月（税込）',
    },
    options: [
      'フリープラン（回数無制限）: 16,940円/月',
      'デイフリー（平日昼のみ無制限）: 13,552円/月',
      'マットグループ月6: 14,520円/月',
      'リフォーマーグループRG4（月4回）: 15,400円/月',
      'プライベート月4: 38,280円/月',
    ],
    userProfile: {
      ageRange: '20代〜60代まで幅広い',
      genderRatio: '女性70% / 男性30%',
      purpose: ['運動不足解消', '姿勢改善', '健康維持', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['ロッカー', '更衣室（男女別）', 'ウォーターサーバー', 'ピラティス専用マシン完備'],
    },
  },
  {
    name: 'zen place pilates 上野（近隣エリア）',
    image: '/images/pilates7.jpg',
    rating: 4.7,
    reviewCount: 186,
    reviews: [
      {
        author: 'N.A',
        rating: 5,
        date: '1週間前',
        text: '浅草から銀座線で2駅の上野駅。全国150店舗相互利用できるので、浅草・錦糸町・上野の各店舗を自由に選べます。',
      },
      {
        author: 'T.M',
        rating: 4,
        date: '2週間前',
        text: '少人数制なので、一人ひとり丁寧に見てもらえます。上野公園近くで、レッスン前後に散策も楽しめます。',
      },
      {
        author: 'K.S',
        rating: 5,
        date: '3週間前',
        text: '男女共用なので家族で通っています。ベテランインストラクターが多く、質の高いレッスンが受けられます。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ['男女共用', '少人数制', '上野駅近', '全国150店舗相互利用'],
    description: '全国展開の大手ピラティススタジオ。浅草から銀座線で2駅の上野駅近。上野公園近くの好立地で、レッスン前後に散策も楽しめます。マットグループ、マシン（リフォーマー）グループ、プライベートのレッスンがあり、男性もOK。少人数制なので一人ひとり丁寧に見てもらえます。全国150店舗がすべて利用可能で、浅草・錦糸町・上野の各店舗を自由に使い分けられます。',
    access: '上野駅より徒歩圏内（浅草から銀座線で2駅）',
    address: '東京都台東区（上野エリア、詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'マットグループ月4',
      description: 'マットグループレッスン月4回。全国150店舗どこでも受講可能',
      price: '10,450円/月（税込）',
    },
    options: [
      'フリープラン（回数無制限）: 16,940円/月',
      'デイフリー（平日昼のみ無制限）: 13,552円/月',
      'マットグループ月6: 14,520円/月',
      'リフォーマーグループRG4（月4回）: 15,400円/月',
      'プライベート月4: 38,280円/月',
    ],
    userProfile: {
      ageRange: '20代〜60代まで幅広い',
      genderRatio: '女性70% / 男性30%',
      purpose: ['運動不足解消', '姿勢改善', '健康維持', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['ロッカー', '更衣室（男女別）', 'ウォーターサーバー'],
    },
  },
]

export default function AsakusaAreaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: studios.map((studio, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'LocalBusiness',
                name: studio.name,
                address: studio.address,
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: studio.rating,
                  reviewCount: studio.reviewCount,
                },
              },
            })),
          }),
        }}
      />
      <Navigation />
      <main className="flex-grow bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              浅草エリアのピラティススタジオ
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              浅草駅周辺と近隣エリア（錦糸町・上野）の実在する人気ピラティススタジオ7選を厳選してご紹介します
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-1 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                地下鉄銀座線・浅草線、東武スカイツリーライン 浅草駅周辺
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-1 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                体験レッスンあり
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-1 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clipRule="evenodd"
                  />
                </svg>
                月額 10,450円〜
              </span>
            </div>
          </div>

          <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h2 className="text-xl font-semibold text-blue-900 mb-3">浅草エリアについて</h2>
            <p className="text-blue-800 leading-relaxed">
              浅草駅周辺は、日本を代表する観光地として知られ、雷門・浅草寺などの歴史的スポットが集まるエリアです。スカイツリーを見ながらピラティスができる「zen place pilates 浅草」、世界最大級の「CLUB PILATES 浅草吾妻橋店」、駅徒歩1分の「ヨガ&ピラティススタジオMAKOTO」など、個性的なスタジオが揃っています。地下鉄銀座線・浅草線、東武スカイツリーライン、つくばエクスプレスと複数路線が利用でき、錦糸町（半蔵門線2駅）・上野（銀座線2駅）のスタジオも利用しやすい環境です。
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-1">
            {studios.map((studio, index) => (
              <StudioCard key={index} studio={studio} rank={index + 1} />
            ))}
          </div>

          <div className="mt-12 p-6 bg-purple-50 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">浅草エリアでピラティスを始めよう</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                浅草駅周辺は、日本を代表する観光地として知られ、雷門・浅草寺などの歴史的スポットが集まります。スカイツリーを見ながらピラティスができる「zen place pilates 浅草」、世界最大級の「CLUB PILATES 浅草吾妻橋店」、駅徒歩1分の「ヨガ&ピラティススタジオMAKOTO」など、個性的なスタジオが揃っています。地下鉄銀座線・浅草線、東武スカイツリーライン、つくばエクスプレスと複数路線が利用でき、錦糸町・上野のスタジオも利用しやすい環境です。
              </p>
              <h3 className="text-xl font-semibold mb-2">エリアの特徴</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>浅草駅：地下鉄銀座線・浅草線、東武スカイツリーライン、つくばエクスプレス利用可能</li>
                <li>スカイツリーを見ながらピラティス（zen place pilates 浅草）：隅田川沿い、最高のロケーション</li>
                <li>世界最大級（CLUB PILATES 浅草吾妻橋店）：800店舗以上展開、マシン専門</li>
                <li>駅徒歩1分（ヨガ&ピラティススタジオMAKOTO）：広く開放的、初心者〜上級者</li>
                <li>パーソナルスタジオ（ELEMENT）：完全個室、マシンピラティス</li>
                <li>近隣エリア（錦糸町・上野）のスタジオも利用可能で各店舗を自由に使い分け</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">料金相場</h3>
              <p className="mb-4">
                月4回で10,450円〜13,090円が相場。zen place pilates 浅草・錦糸町・上野は月4回10,450円〜、CLUB PILATES 浅草吾妻橋店は月4回13,090円とリーズナブル。全国150店舗相互利用できるzen place pilatesなら、浅草・錦糸町・上野の各店舗を追加料金なしで使い分けられるのでお得です。パーソナルスタジオもあるので、目的や予算に合わせて選べます。体験レッスンは1,000円前後で受けられるスタジオが多いので、まずは気軽に体験してみることをおすすめします。
              </p>
              <h3 className="text-xl font-semibold mb-2">アクセス</h3>
              <p>
                浅草駅は地下鉄銀座線・浅草線、東武スカイツリーライン、つくばエクスプレスと複数路線が利用でき、都心部や千葉方面へのアクセスも良好です。各スタジオは駅から徒歩1〜5分程度の好立地で、仕事帰りや観光ついでに通いやすい環境です。近隣エリアの錦糸町（半蔵門線2駅）・上野（銀座線2駅）のスタジオも近く、zen place pilatesの全国150店舗相互利用なら各店舗を自由に選べます。
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              他のエリアを見る
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
