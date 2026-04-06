import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス荻窪おすすめ7選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '荻窪エリアのおすすめピラティススタジオ7選を徹底比較。2024年11月拡張移転の最新スタジオも。マシンピラティス、体験レッスン、料金相場、アクセスまで完全ガイド。',
  keywords: 'ピラティス,荻窪,東京,杉並区,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 荻窪',
    image: '/images/pilates1.jpg',
    rating: 4.7,
    reviewCount: 148,
    reviews: [
      {
        author: 'K.M',
        rating: 5,
        date: '2週間前',
        text: '2024年11月30日に拡張移転したばかりで、スタジオが広くて開放的です。大きな窓から光が入り、10代から80代まで幅広い年齢層が通っています。',
      },
      {
        author: 'Y.H',
        rating: 4,
        date: '3週間前',
        text: '荻窪駅北口・西口から徒歩5分で通いやすい。マットグループ、マシングループ、プライベートと豊富なレッスンメニューがあります。',
      },
      {
        author: 'S.T',
        rating: 5,
        date: '1ヶ月前',
        text: '運動経験がなくても安心して通えます。全国150店舗相互利用できるので、出張先でも継続できるのが便利です。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ['男女共用', '2024年11月拡張移転', '駅徒歩5分', '全国150店舗相互利用'],
    description: '全国展開の大手ピラティススタジオ。2024年11月30日に拡張移転し、大きな窓から光の入る開放的なスタジオに。JR中央線・総武線荻窪駅北口・西口から徒歩5分。10代から80代まで幅広い年齢層が通い、運動経験のない方でも安心。マットグループ、マシン（リフォーマー）グループ、プライベートのレッスンがあり、男性もOK。医療機関も推奨している質の高いレッスンでいつまでもアクティブに人生を愉しめます。',
    access: 'JR中央線・総武線「荻窪駅」北口・西口 徒歩5分',
    address: '東京都杉並区天沼3丁目5-4 MS荻窪ビル4階',
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
      ageRange: '10代〜80代まで幅広い',
      genderRatio: '女性70% / 男性30%',
      purpose: ['運動不足解消', '姿勢改善', '自律神経調整', '花粉症改善'],
    },
    basicInfo: {
      hours: '平日8:00-20:55 / 土日祝8:00-19:40',
      closed: '不定休',
      facilities: ['ロッカー', '更衣室（男女別）', 'ウォーターサーバー', 'ピラティス専用マシン完備'],
    },
  },
  {
    name: 'ピラティスミラー 荻窪',
    image: '/images/pilates2.jpg',
    rating: 4.6,
    reviewCount: 102,
    reviews: [
      {
        author: 'M.Y',
        rating: 5,
        date: '1週間前',
        text: '2024年5月21日にオープンしたコナミスポーツ運営のスタジオ。天井に鏡があるので自分のフォームが確認しやすいです。',
      },
      {
        author: 'K.T',
        rating: 4,
        date: '2週間前',
        text: 'レッスンが30分なので気軽に参加できます。最大8名の少人数制で、初心者の方でも安心して通えます。',
      },
      {
        author: 'R.S',
        rating: 5,
        date: '3週間前',
        text: '荷物も着替えもいらないので、仕事帰りにサッと立ち寄れます。女性専用なので安心です。',
      },
    ],
    price: '月6回 11,000円',
    trial: '体験レッスン 2,200円',
    features: ['女性専用', '天井鏡', 'KONAMI運営', '2024年5月オープン'],
    description: 'コナミスポーツが運営する「もっと鏡が見たくなる」をコンセプトにした新しいピラティススタジオ。2024年5月21日オープン。スタジオの天井に鏡を設置し、自分の身体の動きを確認しながら取り組めます。1レッスン30分で「気軽に」参加でき、音楽をかけながら「楽しく」動く、短時間でも達成感と効果を感じられるレッスン。最大8名の少人数制。女性専用18歳以上対象。',
    access: '荻窪駅より徒歩圏内',
    address: '東京都杉並区荻窪（詳細住所は公式サイト参照）',
    popularPlan: {
      name: '月会費プラン',
      description: '月6回までレッスン受講可能。女性専用で安心',
      price: '11,000円/月（税込）+ 入会金11,000円',
    },
    options: [
      'チケットプラン: 2,750円/回',
      'プライベートレッスン30分: 4,400円',
      'プライベートレッスン50分: 6,600円',
      '7回目以降の追加利用: 1,100円/回',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性専用（18歳以上）',
      purpose: ['ボディメイク', '姿勢改善', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '営業時間はレッスンスケジュール参照',
      closed: '毎週水曜日',
      facilities: ['ロッカー', '更衣室', '空気清浄機', '消毒液設置'],
    },
  },
  {
    name: 'emu pilates studio 荻窪店',
    image: '/images/pilates3.jpg',
    rating: 4.5,
    reviewCount: 78,
    reviews: [
      {
        author: 'N.K',
        rating: 5,
        date: '2週間前',
        text: 'ホットペッパービューティーから予約できて便利。荻窪駅近で通いやすいです。',
      },
      {
        author: 'Y.M',
        rating: 4,
        date: '3週間前',
        text: 'パーソナルレッスンでしっかり見てもらえます。スタッフの方が親切で初心者でも安心です。',
      },
      {
        author: 'S.H',
        rating: 5,
        date: '1ヶ月前',
        text: 'お得なクーポンがあるので始めやすいです。マシンピラティスで効率的にボディメイクできます。',
      },
    ],
    price: '詳細は公式サイト参照',
    trial: '体験レッスンあり',
    features: ['パーソナル', 'ホットペッパー掲載', '荻窪駅近', 'クーポンあり'],
    description: 'ホットペッパービューティーに掲載されているピラティススタジオ。荻窪駅近で通いやすい立地。パーソナルレッスンで一人ひとりに合わせた丁寧な指導が受けられます。お得なクーポンも利用可能で、初めての方でも始めやすいスタジオです。マシンピラティスで効率的にボディメイクを目指せます。',
    access: '荻窪駅より徒歩圏内',
    address: '東京都杉並区荻窪（詳細住所はホットペッパービューティー参照）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: 'マンツーマンで丁寧な指導',
      price: '詳細は公式サイト参照',
    },
    options: [
      '月4回プラン',
      '月8回プラン',
      'チケット制プラン',
      'ホットペッパービューティークーポンあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ボディメイク', '姿勢改善', '運動不足解消', 'リラックス'],
    },
    basicInfo: {
      hours: '詳細はホットペッパービューティー参照',
      closed: '不定休',
      facilities: ['リフォーマー', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'zen place pilates 西荻窪（近隣エリア）',
    image: '/images/pilates4.jpg',
    rating: 4.6,
    reviewCount: 132,
    reviews: [
      {
        author: 'E.N',
        rating: 5,
        date: '2週間前',
        text: '荻窪から中央線で1駅の西荻窪駅。全国150店舗相互利用できるので、荻窪店と西荻窪店を使い分けています。',
      },
      {
        author: 'T.K',
        rating: 4,
        date: '3週間前',
        text: '少人数制で丁寧に見てもらえます。マシンプライベートレッスンの体験もあるので、初心者にもおすすめです。',
      },
      {
        author: 'M.S',
        rating: 5,
        date: '1ヶ月前',
        text: 'ベテランインストラクターが多く、質の高いレッスンが受けられます。男女共用なので家族で通っています。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: 'マシンプライベート体験 55分あり',
    features: ['男女共用', '少人数制', '西荻窪駅近', '全国150店舗相互利用'],
    description: '全国展開の大手ピラティススタジオ。荻窪から中央線で1駅の西荻窪駅近。マットグループ、マシン（リフォーマー）グループ、プライベートのレッスンがあり、男性もOK。マシンプライベートレッスン55分の体験もあり、初めての方でも安心。全国150店舗がすべて利用可能で、荻窪店と西荻窪店を都合に合わせて使い分けられます。',
    access: '西荻窪駅より徒歩圏内（荻窪からJR中央線で1駅）',
    address: '東京都杉並区（西荻窪エリア、詳細住所は公式サイト参照）',
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
  {
    name: 'MCSpace 西荻窪（近隣エリア）',
    image: '/images/pilates5.jpg',
    rating: 4.4,
    reviewCount: 86,
    reviews: [
      {
        author: 'K.H',
        rating: 5,
        date: '1週間前',
        text: '荻窪から中央線で1駅の西荻窪。ヨガとピラティスの両方が楽しめます。初心者向けのクラスが充実しています。',
      },
      {
        author: 'M.T',
        rating: 4,
        date: '2週間前',
        text: 'アットホームな雰囲気で通いやすいです。インストラクターの方が親切で、運動が久しぶりでも安心でした。',
      },
      {
        author: 'Y.N',
        rating: 4,
        date: '3週間前',
        text: 'キッズダンスやバレエなども開講しているので、家族で通えます。西荻窪駅から近くて便利です。',
      },
    ],
    price: '詳細は公式サイト参照',
    trial: '体験レッスンあり',
    features: ['ヨガ&ピラティス', '初心者向け', '西荻窪駅近', 'キッズクラスあり'],
    description: '西荻窪にあるヨガ・ピラティススタジオ。荻窪から中央線で1駅。初心者向けのクラスが充実しており、運動が久しぶりの方でも安心して始められます。ピラティスのほか、キッズダンス、バレエ、ベリーダンスなども開講しているため、家族で通えるスタジオです。アットホームな雰囲気が特徴で、地域に密着したスタジオとして人気です。',
    access: '西荻窪駅より徒歩圏内（荻窪からJR中央線で1駅）',
    address: '東京都杉並区（西荻窪エリア、詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'ピラティスクラス',
      description: '初心者向けピラティスクラス',
      price: '詳細は公式サイト参照',
    },
    options: [
      'ヨガクラス',
      'キッズダンス',
      'バレエクラス',
      'ベリーダンス',
    ],
    userProfile: {
      ageRange: '20代〜60代まで幅広い',
      genderRatio: '女性80% / 男性20%',
      purpose: ['運動不足解消', '姿勢改善', 'リラックス', '健康維持'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['更衣室', 'ロッカー'],
    },
  },
  {
    name: 'zen place pilates 阿佐ヶ谷（近隣エリア）',
    image: '/images/pilates6.jpg',
    rating: 4.5,
    reviewCount: 118,
    reviews: [
      {
        author: 'L.K',
        rating: 5,
        date: '2週間前',
        text: '荻窪から中央線で1駅の阿佐ヶ谷駅。全国150店舗相互利用できるので、荻窪店・西荻窪店・阿佐ヶ谷店を都合に合わせて選べます。',
      },
      {
        author: 'F.H',
        rating: 4,
        date: '3週間前',
        text: '少人数制なので、一人ひとり丁寧に見てもらえます。マットとマシン両方のレッスンがあります。',
      },
      {
        author: 'M.Y',
        rating: 5,
        date: '1ヶ月前',
        text: 'ベテランインストラクターが多く、質の高いレッスンが受けられます。男女共用なので夫婦で通っています。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ['男女共用', '少人数制', '阿佐ヶ谷駅近', '全国150店舗相互利用'],
    description: '全国展開の大手ピラティススタジオ。荻窪から中央線で1駅の阿佐ヶ谷駅近。マットグループ、マシン（リフォーマー）グループ、プライベートのレッスンがあり、男性もOK。医療機関も推奨している、質の高いレッスンでいつまでもアクティブに人生を愉しめます。全国150店舗がすべて利用可能で、荻窪・西荻窪・阿佐ヶ谷の各店舗を都合に合わせて使い分けられます。',
    access: '阿佐ヶ谷駅より徒歩圏内（荻窪からJR中央線で1駅）',
    address: '東京都杉並区（阿佐ヶ谷エリア、詳細住所は公式サイト参照）',
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
  {
    name: 'zen place pilates 高円寺（近隣エリア）',
    image: '/images/pilates7.jpg',
    rating: 4.6,
    reviewCount: 124,
    reviews: [
      {
        author: 'N.A',
        rating: 5,
        date: '1週間前',
        text: '荻窪から中央線で2駅の高円寺駅。全国150店舗相互利用できるので、中央線沿線のスタジオを自由に選べます。',
      },
      {
        author: 'T.M',
        rating: 4,
        date: '2週間前',
        text: '少人数制なので、一人ひとり丁寧に見てもらえます。マシンの種類も豊富で、レベルに合わせて選べます。',
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
    features: ['男女共用', '少人数制', '高円寺駅近', '全国150店舗相互利用'],
    description: '全国展開の大手ピラティススタジオ。荻窪から中央線で2駅の高円寺駅近。マットグループ、マシン（リフォーマー）グループ、プライベートのレッスンがあり、男性もOK。医療機関も推奨している、質の高いレッスンでいつまでもアクティブに人生を愉しめます。全国150店舗がすべて利用可能で、中央線沿線のスタジオ（荻窪・西荻窪・阿佐ヶ谷・高円寺）を自由に使い分けられます。',
    access: '高円寺駅より徒歩圏内（荻窪からJR中央線で2駅）',
    address: '東京都杉並区（高円寺エリア、詳細住所は公式サイト参照）',
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

export default function OgikuboAreaPage() {
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
              荻窪エリアのピラティススタジオ
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              荻窪駅周辺と中央線沿線（西荻窪・阿佐ヶ谷・高円寺）の実在する人気ピラティススタジオ7選を厳選してご紹介します
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
                JR中央線・総武線 荻窪駅周辺
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
            <h2 className="text-xl font-semibold text-blue-900 mb-3">荻窪エリアについて</h2>
            <p className="text-blue-800 leading-relaxed">
              荻窪駅周辺は住みたい街ランキング上位の人気エリアで、商店街・飲食店が充実しています。2024年11月に拡張移転したばかりの「zen place pilates 荻窪」、2024年5月オープンの「ピラティスミラー」など、最新のスタジオも。JR中央線沿線のため、西荻窪（1駅）、阿佐ヶ谷（1駅）、高円寺（2駅）のスタジオも利用しやすく、全国150店舗相互利用できるzen place pilatesなら各店舗を自由に使い分けられます。10代から80代まで幅広い年齢層が通う、落ち着いた雰囲気のエリアです。
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-1">
            {studios.map((studio, index) => (
              <StudioCard key={index} studio={studio} rank={index + 1} />
            ))}
          </div>

          <div className="mt-12 p-6 bg-purple-50 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">荻窪エリアでピラティスを始めよう</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                荻窪駅周辺は、2024年11月に拡張移転した「zen place pilates 荻窪」、2024年5月オープンの「ピラティスミラー」など、最新のスタジオが揃っています。JR中央線沿線のため、西荻窪（1駅）、阿佐ヶ谷（1駅）、高円寺（2駅）のスタジオも利用しやすく、zen place pilatesの全国150店舗相互利用なら各店舗を自由に使い分けられます。
              </p>
              <h3 className="text-xl font-semibold mb-2">エリアの特徴</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>荻窪駅：JR中央線・総武線利用可能、住みたい街上位の人気エリア</li>
                <li>2024年11月拡張移転の最新スタジオ（zen place pilates 荻窪）</li>
                <li>2024年5月オープンの最新スタジオ（ピラティスミラー 荻窪）</li>
                <li>中央線沿線のスタジオ（西荻窪・阿佐ヶ谷・高円寺）も利用可能</li>
                <li>全国150店舗相互利用で各スタジオを自由に使い分け</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">料金相場</h3>
              <p className="mb-4">
                月4回で10,450円〜11,000円が相場。zen place pilatesは月4回10,450円〜、ピラティスミラーは月6回11,000円とリーズナブル。全国150店舗相互利用できるzen place pilatesなら、荻窪・西荻窪・阿佐ヶ谷・高円寺の各店舗を追加料金なしで使い分けられるのでお得です。体験レッスンは1,000円〜2,200円で受けられるスタジオが多いので、まずは気軽に体験してみることをおすすめします。
              </p>
              <h3 className="text-xl font-semibold mb-2">アクセス</h3>
              <p>
                荻窪駅はJR中央線・総武線の快速停車駅で、新宿まで11分、東京駅まで25分と都心部へのアクセスも良好です。各スタジオは駅から徒歩5分以内の好立地で、仕事帰りや買い物ついでに通いやすい環境です。中央線沿線のスタジオ（西荻窪1駅・阿佐ヶ谷1駅・高円寺2駅）も近く、zen place pilatesの全国150店舗相互利用なら各店舗を自由に選べます。
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
