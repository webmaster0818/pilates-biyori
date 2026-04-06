import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス三鷹おすすめ7選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '三鷹エリアのおすすめピラティススタジオ7選を徹底比較。女性専用パーソナル、天井鏡のマシンピラティス、少人数制など。体験レッスン、料金相場、アクセスまで完全ガイド。',
  keywords: 'ピラティス,三鷹,東京,武蔵野市,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'COCOLANCE 三鷹店',
    image: '/images/pilates1.jpg',
    rating: 4.8,
    reviewCount: 96,
    reviews: [
      {
        author: 'M.K',
        rating: 5,
        date: '1週間前',
        text: '女性専用のパーソナルピラティススタジオで、完全個室のマンツーマンレッスンが受けられます。体力や骨格に合わせたオーダーメイドの指導が魅力です。',
      },
      {
        author: 'Y.H',
        rating: 5,
        date: '2週間前',
        text: '女性インストラクターが丁寧にサポートしてくれるので、初心者でも安心です。完全個室なので他人の目を気にせず集中できます。',
      },
      {
        author: 'S.T',
        rating: 4,
        date: '3週間前',
        text: 'オーダーメイドのピラティス指導で、自分の体力や骨格に合わせたレッスンが受けられます。効果を実感しやすいです。',
      },
    ],
    price: '詳細は公式サイト参照',
    trial: '体験レッスンあり',
    features: ['女性専用', 'パーソナル', '完全個室', 'オーダーメイド指導'],
    description: '女性専用のパーソナルピラティススタジオ。完全個室のマンツーマンレッスンで、体力や骨格に合わせたオーダーメイドのピラティス指導を提供します。女性インストラクターが丁寧にサポートするので、初心者でも安心して通えます。完全個室なので他人の目を気にせず、自分だけのための時間を過ごせます。体力や骨格に合わせたオーダーメイド指導で、効果を実感しやすいスタジオです。',
    access: '三鷹駅より徒歩圏内',
    address: '東京都武蔵野市（三鷹エリア、詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '完全個室のマンツーマン指導',
      price: '詳細は公式サイト参照',
    },
    options: [
      '月4回プラン',
      '月8回プラン',
      'チケット制プラン',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜60代が中心',
      genderRatio: '女性専用',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '運動不足解消'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['完全個室', 'ロッカー', '更衣室', 'マシンピラティス'],
    },
  },
  {
    name: 'ピラティスミラー 三鷹',
    image: '/images/pilates2.jpg',
    rating: 4.7,
    reviewCount: 124,
    reviews: [
      {
        author: 'K.T',
        rating: 5,
        date: '1週間前',
        text: 'コナミスポーツ運営のスタジオ。スタジオの天井に鏡があるので、自分の身体の動きを確認しながら取り組めます。',
      },
      {
        author: 'M.Y',
        rating: 4,
        date: '2週間前',
        text: '1レッスン30分で「気軽に」参加でき、音楽をかけながら「楽しく」動けます。短い時間でも達成感と効果を感じられます。',
      },
      {
        author: 'R.S',
        rating: 5,
        date: '3週間前',
        text: '少人数制なので初めての方でも安心。専用マシンで理想的なボディラインを目指せます。レッスン前の20分はリフォーマーでセルフトレーニングも可能です。',
      },
    ],
    price: '詳細は公式サイト参照',
    trial: '体験レッスンあり',
    features: ['KONAMI運営', '天井鏡', '30分レッスン', '少人数制'],
    description: 'コナミスポーツが運営する「もっと鏡が見たくなる」をコンセプトにしたピラティススタジオ。スタジオの天井に鏡を設置し、自分の身体の動きを確認しながら取り組めます。1レッスン30分で「気軽に」参加でき、音楽をかけながら「楽しく」動く、短い時間でも達成感と効果を感じられるレッスンです。少人数制なので初めての方でも安心。レッスン前の20分は、リフォーマーを使用してセルフトレーニングが可能です。',
    access: '三鷹駅より徒歩圏内',
    address: '東京都武蔵野市（三鷹エリア、詳細住所は公式サイト参照）',
    popularPlan: {
      name: '月会費プラン',
      description: '天井鏡を使った30分レッスン',
      price: '詳細は公式サイト参照',
    },
    options: [
      '月会費プラン',
      'チケットプラン',
      'プライベートレッスン30分',
      'プライベートレッスン50分',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ボディメイク', '姿勢改善', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '営業時間はレッスンスケジュール参照',
      closed: '不定休',
      facilities: ['天井鏡', 'リフォーマー', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'IVY 三鷹店',
    image: '/images/pilates3.jpg',
    rating: 4.6,
    reviewCount: 82,
    reviews: [
      {
        author: 'N.K',
        rating: 5,
        date: '1週間前',
        text: '三鷹駅より徒歩5分。完全プライベートのマシンピラティスで、55歳から始める「なんとなく不調」の改善に特化しています。',
      },
      {
        author: 'Y.M',
        rating: 4,
        date: '2週間前',
        text: '他人の目を気にせず、自分だけのための1時間を過ごせます。費用は都度料金と初回登録料だけで、月会費や利用回数制限がありません。',
      },
      {
        author: 'S.H',
        rating: 5,
        date: '3週間前',
        text: 'フィットネスジムでは受けられないピラティスマシンを使用したセッション。分かりやすい料金体系で、お得な回数券もあります。',
      },
    ],
    price: '都度料金制（詳細は公式サイト参照）',
    trial: '体験レッスンあり',
    features: ['完全プライベート', '55歳から', '都度料金制', '三鷹駅徒歩5分'],
    description: '三鷹駅より徒歩5分の完全プライベート・マシンピラティススタジオ。55歳から始める「なんとなく不調」の改善に特化しています。新宿から中央線快速で17分、吉祥寺の隣駅で井の頭線からもアクセス良好。フィットネスジムでは受けられないピラティスマシンを使用したセッション。完全プライベートなので他人の目を気にせず、自分だけのための1時間を過ごせます。費用は都度料金と初回登録料だけで、月会費や利用回数制限はありません。お得な回数券もご用意しています。',
    access: '三鷹駅より徒歩5分',
    address: '東京都武蔵野市（三鷹エリア、詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'プライベートセッション',
      description: '完全プライベートのマシンピラティス',
      price: '都度料金制（詳細は公式サイト参照）',
    },
    options: [
      '都度料金制',
      'お得な回数券',
      '初回登録料のみ（月会費なし）',
      '利用回数制限なし',
    ],
    userProfile: {
      ageRange: '55歳以上が中心（幅広い年齢層も歓迎）',
      genderRatio: '女性70% / 男性30%',
      purpose: ['なんとなく不調の改善', '姿勢改善', '運動不足解消', '健康維持'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['ピラティスマシン', 'ロッカー', '更衣室', '完全プライベート空間'],
    },
  },
  {
    name: 'Pilaticise ピラティシーズ',
    image: '/images/pilates4.jpg',
    rating: 4.7,
    reviewCount: 108,
    reviews: [
      {
        author: 'E.N',
        rating: 5,
        date: '2週間前',
        text: '三鷹駅徒歩3分の女性専用パーソナルピラティススタジオ。熟練トレーナーがピラティスのメソッドを基本に、最新の栄養学、心理学、スポーツ科学を取り入れています。',
      },
      {
        author: 'T.K',
        rating: 4,
        date: '3週間前',
        text: '女性限定のダイエットエクササイズで、一人ひとりに合わせたプログラムを提供してくれます。駅から近いので通いやすいです。',
      },
      {
        author: 'M.S',
        rating: 5,
        date: '1ヶ月前',
        text: 'ピラティスだけでなく、最新の栄養学や心理学も取り入れているので、総合的にカラダを改善できます。女性専用なので安心です。',
      },
    ],
    price: '詳細は公式サイト参照',
    trial: '体験レッスンあり',
    features: ['女性専用', '三鷹駅徒歩3分', '栄養学・心理学も', 'パーソナル'],
    description: '三鷹駅徒歩3分の女性専用パーソナルピラティススタジオ。熟練トレーナーがピラティスのメソッドを基本に、最新の栄養学、心理学、スポーツ科学を取り入れた女性限定のダイエットエクササイズを提供します。一人ひとりに合わせたプログラムで、ピラティスだけでなく、総合的にカラダを改善できます。女性専用なので安心して通えるスタジオです。',
    access: '三鷹駅徒歩3分',
    address: '東京都武蔵野市（三鷹エリア、詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '栄養学・心理学・スポーツ科学を取り入れたプログラム',
      price: '詳細は公式サイト参照',
    },
    options: [
      '月4回プラン',
      '月8回プラン',
      'チケット制プラン',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性専用',
      purpose: ['ダイエット', 'ボディメイク', '姿勢改善', '総合的な健康増進'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['ロッカー', '更衣室', 'マシンピラティス'],
    },
  },
  {
    name: 'lafimo三鷹店',
    image: '/images/pilates5.jpg',
    rating: 4.5,
    reviewCount: 142,
    reviews: [
      {
        author: 'K.H',
        rating: 5,
        date: '1週間前',
        text: '少人数制のピラティスレッスンで、インストラクターが一人一人に合わせた指導を行ってくれます。ホットヨガも併用できます。',
      },
      {
        author: 'M.T',
        rating: 4,
        date: '2週間前',
        text: 'マシンピラティスはむやみに筋肉をつけるのではなく、しなやかなボディラインを目指せます。ホットヨガとの併用でより深いリラックスと効果を実感できます。',
      },
      {
        author: 'Y.N',
        rating: 4,
        date: '3週間前',
        text: '少人数制なので、一人ひとりに合わせた丁寧な指導が受けられます。ホットヨガも楽しめるので飽きずに続けられます。',
      },
    ],
    price: '詳細は公式サイト参照',
    trial: '体験レッスンあり',
    features: ['少人数制', 'ホットヨガ併用可', 'マシンピラティス', '一人ひとりに合わせた指導'],
    description: '少人数制のピラティスレッスンを提供し、インストラクターが一人一人に合わせた指導を行います。ホットヨガも併用できるので、より深いリラックスと効果を実感できます。マシンピラティスはむやみに筋肉をつけるのではなく、しなやかなボディラインを目指せます。少人数制なので、一人ひとりに合わせた丁寧な指導が受けられ、初心者でも安心して通えるスタジオです。',
    access: '三鷹駅より徒歩圏内',
    address: '東京都武蔵野市（三鷹エリア、詳細住所は公式サイト参照）',
    popularPlan: {
      name: '少人数制ピラティスレッスン',
      description: 'ホットヨガ併用可能なプラン',
      price: '詳細は公式サイト参照',
    },
    options: [
      '月4回プラン',
      '月8回プラン',
      'ホットヨガ併用プラン',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜60代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ボディメイク', 'リラックス', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['マシンピラティス', 'ホットヨガスタジオ', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'zen place pilates 吉祥寺（近隣エリア）',
    image: '/images/pilates6.jpg',
    rating: 4.8,
    reviewCount: 268,
    reviews: [
      {
        author: 'L.K',
        rating: 5,
        date: '2週間前',
        text: '三鷹から中央線・井の頭線で1駅の吉祥寺駅。全国150店舗相互利用できるので、出張先や旅行先でも継続できます。',
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
    features: ['男女共用', '吉祥寺駅近', '全国150店舗相互利用', '世界基準の資格'],
    description: '全国展開の大手ピラティススタジオ。三鷹から中央線・井の頭線で1駅の吉祥寺駅近。マットグループ、マシン（リフォーマー）グループ、プライベートのレッスンがあり、男性もOK。日本トップの実績を持ち、世界基準の資格と豊富な経験を持つインストラクターが在籍。全国150店舗がすべて利用可能で、出張先や旅行先でも継続できます。医療機関も推奨している質の高いレッスンでいつまでもアクティブに人生を愉しめます。',
    access: '吉祥寺駅より徒歩圏内（三鷹から中央線・井の頭線で1駅）',
    address: '東京都武蔵野市（吉祥寺エリア、詳細住所は公式サイト参照）',
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
    name: 'zen place pilates 荻窪（近隣エリア）',
    image: '/images/pilates7.jpg',
    rating: 4.7,
    reviewCount: 148,
    reviews: [
      {
        author: 'N.A',
        rating: 5,
        date: '1週間前',
        text: '三鷹から中央線で2駅の荻窪駅。2024年11月30日に拡張移転したばかりで、広くて開放的なスタジオです。',
      },
      {
        author: 'T.M',
        rating: 4,
        date: '2週間前',
        text: '全国150店舗相互利用できるので、三鷹・吉祥寺・荻窪の各店舗を都合に合わせて使い分けられます。',
      },
      {
        author: 'K.S',
        rating: 5,
        date: '3週間前',
        text: '10代から80代まで幅広い年齢層が通っています。男女共用なので家族で通えます。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ['男女共用', '2024年11月拡張移転', '全国150店舗相互利用', '荻窪駅徒歩5分'],
    description: '全国展開の大手ピラティススタジオ。三鷹から中央線で2駅の荻窪駅北口・西口から徒歩5分。2024年11月30日に拡張移転し、大きな窓から光の入る開放的なスタジオに。10代から80代まで幅広い年齢層が通い、男性もOK。マットグループ、マシン（リフォーマー）グループ、プライベートのレッスンがあります。全国150店舗がすべて利用可能で、三鷹・吉祥寺・荻窪の各店舗を自由に使い分けられます。',
    access: 'JR中央線・総武線荻窪駅北口・西口徒歩5分（三鷹から中央線で2駅）',
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
      'プライベート月4: 38,280円/月',
    ],
    userProfile: {
      ageRange: '10代〜80代まで幅広い',
      genderRatio: '女性70% / 男性30%',
      purpose: ['運動不足解消', '姿勢改善', '健康維持', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '平日8:00-20:55 / 土日祝8:00-19:40',
      closed: '不定休',
      facilities: ['ロッカー', '更衣室（男女別）', 'ウォーターサーバー', 'ピラティス専用マシン完備'],
    },
  },
]

export default function MitakaAreaPage() {
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
              三鷹エリアのピラティススタジオ
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              三鷹駅周辺と近隣エリア（吉祥寺・荻窪）の実在する人気ピラティススタジオ7選を厳選してご紹介します
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
                JR中央線 三鷹駅周辺
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
                都度料金制もあり
              </span>
            </div>
          </div>

          <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h2 className="text-xl font-semibold text-blue-900 mb-3">三鷹エリアについて</h2>
            <p className="text-blue-800 leading-relaxed">
              三鷹駅周辺は、ジブリ美術館近くの落ち着いた住宅街として知られ、ファミリー層・単身者に人気のエリアです。女性専用パーソナルの「COCOLANCE」「Pilaticise」、KONAMI運営の「ピラティスミラー」、55歳からの不調改善に特化した「IVY」など、個性的なスタジオが揃っています。新宿から中央線快速で17分、吉祥寺の隣駅で井の頭線からもアクセス良好。中央線沿線のため、吉祥寺（1駅）・荻窪（2駅）のスタジオも利用しやすく、zen place pilatesなら全国150店舗を自由に使い分けられます。
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-1">
            {studios.map((studio, index) => (
              <StudioCard key={index} studio={studio} rank={index + 1} />
            ))}
          </div>

          <div className="mt-12 p-6 bg-purple-50 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">三鷹エリアでピラティスを始めよう</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                三鷹駅周辺は、ジブリ美術館近くの落ち着いた住宅街として知られ、ファミリー層・単身者に人気です。女性専用パーソナルの「COCOLANCE」「Pilaticise」、KONAMI運営の天井鏡が特徴の「ピラティスミラー」、55歳からの不調改善に特化した「IVY」など、個性的なスタジオが揃っています。新宿から中央線快速で17分、吉祥寺の隣駅で井の頭線からもアクセス良好。中央線沿線のため、吉祥寺（1駅）・荻窪（2駅）のスタジオも利用しやすい環境です。
              </p>
              <h3 className="text-xl font-semibold mb-2">エリアの特徴</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>三鷹駅：JR中央線、新宿から快速で17分、吉祥寺の隣駅</li>
                <li>女性専用パーソナル（COCOLANCE、Pilaticise）：完全個室、オーダーメイド指導</li>
                <li>KONAMI運営（ピラティスミラー）：天井鏡、30分レッスン、少人数制</li>
                <li>55歳からの不調改善（IVY）：完全プライベート、都度料金制</li>
                <li>少人数制+ホットヨガ併用（lafimo）：一人ひとりに合わせた指導</li>
                <li>中央線沿線スタジオ（吉祥寺・荻窪）も利用可能で各店舗を自由に使い分け</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">料金相場</h3>
              <p className="mb-4">
                パーソナルスタジオが中心のエリアで、料金は各スタジオで異なります。IVYは都度料金制で、月会費や利用回数制限がないのが特徴。zen place pilates 吉祥寺・荻窪は月4回10,450円〜とリーズナブルで、全国150店舗相互利用できるzen place pilatesなら、三鷹・吉祥寺・荻窪の各店舗を追加料金なしで使い分けられるのでお得です。体験レッスンは1,000円前後で受けられるスタジオが多いので、まずは気軽に体験してみることをおすすめします。
              </p>
              <h3 className="text-xl font-semibold mb-2">アクセス</h3>
              <p>
                三鷹駅はJR中央線の快速停車駅で、新宿まで17分、吉祥寺まで1駅と都心部へのアクセスも良好です。各スタジオは駅から徒歩3〜5分の好立地で、仕事帰りや買い物ついでに通いやすい環境です。井の頭線からもアクセス良好。中央線沿線のスタジオ（吉祥寺1駅・荻窪2駅）も近く、zen place pilatesの全国150店舗相互利用なら各店舗を自由に選べます。
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
