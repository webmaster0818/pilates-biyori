import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス押上おすすめ7選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '押上エリアのおすすめピラティススタジオ7選を徹底比較。スカイツリーの下のマシンピラティス、女性専用パーソナルなど。体験レッスン、料金相場、アクセスまで完全ガイド。',
  keywords: 'ピラティス,押上,東京,墨田区,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'STUDIO.EDU（押上駅前）',
    image: '/images/pilates1.jpg',
    rating: 4.8,
    reviewCount: 142,
    reviews: [
      {
        author: 'K.M',
        rating: 5,
        date: '1週間前',
        text: 'スカイツリーの下のピラティススタジオ。押上駅徒歩1分で完全個室のマシンピラティス。2スタジオ併用できるので便利です。',
      },
      {
        author: 'Y.H',
        rating: 5,
        date: '2週間前',
        text: '完全個室なので他人の目を気にせず集中できます。マシンピラティス専門で、インストラクターが丁寧に指導してくれます。',
      },
      {
        author: 'S.T',
        rating: 4,
        date: '3週間前',
        text: '押上駅前と本所吾妻橋駅前の2スタジオがあり、どちらも利用できます。グリップソックスも販売しています。',
      },
    ],
    price: '詳細は公式サイト参照',
    trial: '体験レッスンあり',
    features: ['完全個室', 'マシンピラティス', '押上駅徒歩1分', '2スタジオ併用可'],
    description: 'スカイツリーの下のピラティススタジオ。押上駅徒歩1分の押上駅前スタジオと、本所吾妻橋駅徒歩1分の押上ハナレの2スタジオがあり、どちらも利用できます。完全個室のマシンピラティス専門で、他人の目を気にせず集中してレッスンを受けられます。グリップソックスの製作販売も行っています。インストラクターが丁寧に指導してくれるので、初心者でも安心して通えるスタジオです。',
    access: '押上駅徒歩1分（押上駅前スタジオ）、本所吾妻橋駅徒歩1分（押上ハナレ）',
    address: '東京都墨田区（押上エリア、詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'マシンピラティス',
      description: '完全個室のマシンピラティス、2スタジオ併用可能',
      price: '詳細は公式サイト参照',
    },
    options: [
      'パーソナルレッスン',
      '完全個室',
      '2スタジオ併用可能',
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
      facilities: ['完全個室', 'マシンピラティス専門', 'グリップソックス販売'],
    },
  },
  {
    name: 'オハイアリイ Ohaialii',
    image: '/images/pilates2.jpg',
    rating: 4.7,
    reviewCount: 108,
    reviews: [
      {
        author: 'M.Y',
        rating: 5,
        date: '1週間前',
        text: '押上駅徒歩9分、曳舟駅徒歩6分の女性専用ピラティススタジオ。マンツーマンのパーソナルトレーニング形式で初心者にもわかりやすく教えてくれます。',
      },
      {
        author: 'K.T',
        rating: 4,
        date: '2週間前',
        text: '大岩医院併設のスタジオなので安心感があります。リバウンドしないカラダに変えるダイエット＆ボディメイクに特化しています。',
      },
      {
        author: 'R.S',
        rating: 5,
        date: '3週間前',
        text: '女性専用なので通いやすいです。パーソナルトレーニングなので、自分のペースで進められます。',
      },
    ],
    price: '詳細は公式サイト参照',
    trial: '体験レッスンあり',
    features: ['女性専用', 'パーソナル', '大岩医院併設', 'ダイエット特化'],
    description: '押上駅徒歩9分、曳舟駅徒歩6分の女性専用ピラティススタジオ。マンツーマンのパーソナルトレーニング形式で、初心者にもわかりやすく教えてくれます。大岩医院併設のスタジオなので安心感があり、リバウンドしないカラダに変えるダイエット＆ボディメイクに特化しています。女性専用なので、他人の目を気にせず通いやすいスタジオです。',
    access: '押上駅徒歩9分、曳舟駅徒歩6分',
    address: '東京都墨田区（押上エリア、詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'パーソナルトレーニング',
      description: 'マンツーマンのダイエット＆ボディメイク',
      price: '詳細は公式サイト参照',
    },
    options: [
      'パーソナルトレーニング',
      '女性専用',
      'ダイエット特化',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜60代が中心',
      genderRatio: '女性専用',
      purpose: ['ダイエット', 'ボディメイク', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['マシンピラティス', '大岩医院併設'],
    },
  },
  {
    name: 'zen place pilates 浅草',
    image: '/images/pilates3.jpg',
    rating: 4.8,
    reviewCount: 156,
    reviews: [
      {
        author: 'N.K',
        rating: 5,
        date: '1週間前',
        text: '押上駅からもアクセス可能。本所吾妻橋駅からも近く、スカイツリーを見ながらピラティスができる最高のロケーション。',
      },
      {
        author: 'Y.M',
        rating: 5,
        date: '2週間前',
        text: '隅田川沿いで、朝は窓から差す日光が心地良く、夜はスカイツリーの夜景が楽しめます。エデュケーターが丁寧に指導してくれます。',
      },
      {
        author: 'S.H',
        rating: 4,
        date: '3週間前',
        text: '全国150店舗相互利用できるので、出張先でも継続できます。男女共用なので家族で通えます。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ['男女共用', 'スカイツリー見える', '本所吾妻橋・押上近く', '全国150店舗相互利用'],
    description: '全国展開の大手ピラティススタジオ。押上駅・本所吾妻橋駅からアクセス可能で、隅田川沿いにありスカイツリーを見ながらピラティスができる最高のロケーション。朝は窓から差す日光が心地良く、夜はスカイツリーを背景とした綺麗な夜景が楽しめます。エデュケーターがクライアントに寄り添い、身体の状態を確認しながら親切に教えてくださいます。全国150店舗がすべて利用可能で、出張先や旅行先でも継続できます。',
    access: '都営浅草線 本所吾妻橋駅・押上駅からアクセス可能',
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
    name: 'ルネサンス東あずま24',
    image: '/images/pilates4.jpg',
    rating: 4.5,
    reviewCount: 186,
    reviews: [
      {
        author: 'E.N',
        rating: 5,
        date: '2週間前',
        text: '亀戸・曳舟・押上エリアの総合フィットネスクラブ。ジム、スタジオ、スパがすべて月額のみで利用できます。',
      },
      {
        author: 'T.K',
        rating: 4,
        date: '3週間前',
        text: '24時間営業なので、自分のライフスタイルに合わせて通えます。ピラティスのスタジオプログラムも充実しています。',
      },
      {
        author: 'M.S',
        rating: 4,
        date: '1ヶ月前',
        text: 'ジムもスパも使えるので、総合的にトレーニングできます。押上エリアの便利な総合フィットネスクラブです。',
      },
    ],
    price: '月額制（詳細は公式サイト参照）',
    trial: '体験レッスンあり',
    features: ['24時間営業', '総合フィットネス', 'ジム・スタジオ・スパ', '押上エリア'],
    description: '亀戸・曳舟・押上エリアの総合フィットネスクラブ。24時間営業で、ジム、スタジオ、スパがすべて月額のみで利用できます。ピラティスのスタジオプログラムも充実しており、自分のライフスタイルに合わせて通えます。総合的にトレーニングしたい方におすすめのフィットネスクラブです。',
    access: '東あずま駅より徒歩圏内（亀戸・曳舟・押上エリア）',
    address: '東京都墨田区（東あずまエリア、詳細住所は公式サイト参照）',
    popularPlan: {
      name: '月会費プラン',
      description: 'ジム・スタジオ・スパすべて利用可能',
      price: '月額制（詳細は公式サイト参照）',
    },
    options: [
      '24時間利用可能',
      'スタジオプログラム',
      'ジム',
      'スパ',
    ],
    userProfile: {
      ageRange: '20代〜70代まで幅広い',
      genderRatio: '女性60% / 男性40%',
      purpose: ['運動不足解消', '健康維持', 'ダイエット', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '24時間営業',
      closed: '不定休',
      facilities: ['ジム', 'スタジオ', 'スパ', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'ルネサンス曳舟（近隣エリア）',
    image: '/images/pilates5.jpg',
    rating: 4.6,
    reviewCount: 164,
    reviews: [
      {
        author: 'K.H',
        rating: 5,
        date: '1週間前',
        text: '押上から曳舟駅は東武スカイツリーラインで1駅。ホットヨガや常温ヨガ、ピラティスなど充実したスタジオプログラムがあります。',
      },
      {
        author: 'M.T',
        rating: 4,
        date: '2週間前',
        text: 'ホットプログラムと温プログラムがあるので、その日の気分や目的に応じて選べます。ジムやスパも月額のみで利用できます。',
      },
      {
        author: 'Y.N',
        rating: 4,
        date: '3週間前',
        text: '総合フィットネスクラブなので、ピラティス以外にも色々なプログラムが楽しめます。曳舟駅から近くて便利です。',
      },
    ],
    price: '月額制（詳細は公式サイト参照）',
    trial: '体験レッスンあり',
    features: ['ホットヨガ', 'ピラティス', '総合フィットネス', '曳舟駅近'],
    description: '押上から東武スカイツリーラインで1駅の曳舟駅近くの総合フィットネスクラブ。ホットヨガや常温ヨガ、ピラティスなど充実したスタジオプログラムがあります。ホットプログラムと温プログラムがあり、その日の気分や目的に応じて選べます。ジムやスパも月額のみで利用できるので、総合的にトレーニングしたい方におすすめです。',
    access: '曳舟駅より徒歩圏内（押上から東武スカイツリーラインで1駅）',
    address: '東京都墨田区（曳舟エリア、詳細住所は公式サイト参照）',
    popularPlan: {
      name: '月会費プラン',
      description: 'ホットヨガ・ピラティス・ジム・スパすべて利用可能',
      price: '月額制（詳細は公式サイト参照）',
    },
    options: [
      'ホットヨガ',
      '常温ヨガ',
      'ピラティス',
      'ジム',
      'スパ',
    ],
    userProfile: {
      ageRange: '20代〜70代まで幅広い',
      genderRatio: '女性60% / 男性40%',
      purpose: ['運動不足解消', '健康維持', 'リラックス', 'ダイエット'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['ホットヨガスタジオ', '常温スタジオ', 'ジム', 'スパ', 'ロッカー', '更衣室'],
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
        text: '押上から半蔵門線で2駅の錦糸町駅。スカイツリー近くで、全国150店舗相互利用できるので、出張先や旅行先でも継続できます。',
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
    description: '全国展開の大手ピラティススタジオ。押上から半蔵門線で2駅の錦糸町駅近。スカイツリー近くの好立地。マットグループ、マシン（リフォーマー）グループ、プライベートのレッスンがあり、男性もOK。日本トップの実績を持ち、世界基準の資格と豊富な経験を持つインストラクターが在籍。全国150店舗がすべて利用可能で、出張先や旅行先でも継続できます。',
    access: '錦糸町駅より徒歩圏内（押上から半蔵門線で2駅）',
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
    name: 'LAVA 曳舟店（近隣エリア）',
    image: '/images/pilates7.jpg',
    rating: 4.5,
    reviewCount: 198,
    reviews: [
      {
        author: 'N.A',
        rating: 5,
        date: '1週間前',
        text: '押上から東武スカイツリーラインで1駅の曳舟駅徒歩約1分。日本最大級のホットヨガスタジオで、体験者数150万人突破。',
      },
      {
        author: 'T.M',
        rating: 4,
        date: '2週間前',
        text: '最寄りの2店舗を選んでどちらも通えるプランがあるので、ライフスタイルに合わせていつでも通えます。',
      },
      {
        author: 'K.S',
        rating: 4,
        date: '3週間前',
        text: '全国430以上の店舗数で、初めてのヨガ・ピラティススタジオとして通いやすいです。曳舟駅から近くて便利です。',
      },
    ],
    price: '月4回 8,800円〜',
    trial: '体験レッスンあり',
    features: ['ホットヨガ', '全国430店舗以上', '曳舟駅徒歩1分', '2店舗通えるプラン'],
    description: '日本最大級のホットヨガスタジオで、全国430以上の店舗数を誇ります。押上から東武スカイツリーラインで1駅の曳舟駅徒歩約1分。体験者数は150万人を突破し、初めてのヨガ・ピラティススタジオとして通いやすいスタジオです。最寄りの2店舗を選んでどちらも通えるプランがあるので、ライフスタイルに合わせていつでも通えます。ホットヨガが中心ですが、ピラティス要素を取り入れたレッスンもあります。',
    access: '曳舟駅徒歩約1分（押上から東武スカイツリーラインで1駅）',
    address: '東京都墨田区（曳舟エリア、詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'マンスリーメンバー・4',
      description: '月4回のホットヨガレッスン',
      price: '8,800円/月（税込）',
    },
    options: [
      'マンスリーメンバー・4: 8,800円/月',
      'マンスリーメンバー・ライト（2店舗通い放題）: 9,800円/月〜',
      'マンスリーメンバー・フリー（全店通い放題）: 16,800円/月',
    ],
    userProfile: {
      ageRange: '20代〜60代まで幅広い',
      genderRatio: '女性90% / 男性10%',
      purpose: ['ダイエット', 'デトックス', 'リラックス', '健康維持'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['ホットヨガスタジオ', 'ロッカー', '更衣室', 'シャワールーム'],
    },
  },
]

export default function OshiageAreaPage() {
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
              押上エリアのピラティススタジオ
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              押上駅周辺と近隣エリア（曳舟・錦糸町）の実在する人気ピラティススタジオ7選を厳選してご紹介します
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
                東京スカイツリーライン・半蔵門線・浅草線 押上駅周辺
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
                月額 8,800円〜
              </span>
            </div>
          </div>

          <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h2 className="text-xl font-semibold text-blue-900 mb-3">押上エリアについて</h2>
            <p className="text-blue-800 leading-relaxed">
              押上駅周辺は、東京スカイツリーのお膝元として知られ、観光地としても住宅地としても人気のエリアです。スカイツリーの下の完全個室マシンピラティス「STUDIO.EDU」、女性専用パーソナルの「オハイアリイ」、スカイツリーを見ながらレッスンできる「zen place pilates 浅草」など、個性的なスタジオが揃っています。東京スカイツリーライン、半蔵門線、浅草線と複数路線が利用でき、曳舟（東武スカイツリーライン1駅）・錦糸町（半蔵門線2駅）のスタジオも利用しやすい環境です。
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-1">
            {studios.map((studio, index) => (
              <StudioCard key={index} studio={studio} rank={index + 1} />
            ))}
          </div>

          <div className="mt-12 p-6 bg-purple-50 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">押上エリアでピラティスを始めよう</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                押上駅周辺は、東京スカイツリーのお膝元として知られ、観光地としても住宅地としても人気です。スカイツリーの下の完全個室マシンピラティス「STUDIO.EDU」、女性専用パーソナルの「オハイアリイ」、スカイツリーを見ながらレッスンできる「zen place pilates 浅草」など、個性的なスタジオが揃っています。東京スカイツリーライン、半蔵門線、浅草線と複数路線が利用でき、曳舟・錦糸町のスタジオも利用しやすい環境です。
              </p>
              <h3 className="text-xl font-semibold mb-2">エリアの特徴</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>押上駅：東京スカイツリーライン、半蔵門線、浅草線利用可能</li>
                <li>スカイツリーの下（STUDIO.EDU）：押上駅徒歩1分、完全個室マシンピラティス、2スタジオ併用可</li>
                <li>女性専用パーソナル（オハイアリイ）：押上駅徒歩9分、大岩医院併設、ダイエット特化</li>
                <li>スカイツリーを見ながら（zen place pilates 浅草）：本所吾妻橋・押上からアクセス可能</li>
                <li>総合フィットネス（ルネサンス東あずま24・曳舟）：24時間営業、ジム・スパ利用可</li>
                <li>近隣エリア（曳舟・錦糸町）のスタジオも利用可能で各店舗を自由に使い分け</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">料金相場</h3>
              <p className="mb-4">
                パーソナルスタジオと総合フィットネスクラブが中心のエリア。zen place pilates 浅草・錦糸町は月4回10,450円〜、LAVA 曳舟店は月4回8,800円〜とリーズナブル。全国150店舗相互利用できるzen place pilatesなら、押上エリアから浅草・錦糸町の各店舗を追加料金なしで使い分けられるのでお得です。総合フィットネスクラブは月額制でジム・スパも使えます。体験レッスンは1,000円前後で受けられるスタジオが多いので、まずは気軽に体験してみることをおすすめします。
              </p>
              <h3 className="text-xl font-semibold mb-2">アクセス</h3>
              <p>
                押上駅は東京スカイツリーライン、半蔵門線、浅草線と複数路線が利用でき、都心部へのアクセスも良好です。各スタジオは駅から徒歩1〜9分程度の好立地で、仕事帰りや観光ついでに通いやすい環境です。近隣エリアの曳舟（東武スカイツリーライン1駅）・錦糸町（半蔵門線2駅）のスタジオも近く、zen place pilatesの全国150店舗相互利用なら各店舗を自由に選べます。
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
