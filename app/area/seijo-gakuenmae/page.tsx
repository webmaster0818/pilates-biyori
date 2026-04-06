import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス成城学園前おすすめ7選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '成城学園前エリアのおすすめピラティススタジオ7選を徹底比較。世界最大級のマシンピラティス、天井鏡スタジオ、パーソナル専門など。体験レッスン、料金相場、アクセスまで完全ガイド。',
  keywords: 'ピラティス,成城学園前,東京,世田谷区,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 成城学園前',
    image: '/images/pilates1.jpg',
    rating: 4.8,
    reviewCount: 186,
    reviews: [
      {
        author: 'K.M',
        rating: 5,
        date: '1週間前',
        text: '成城学園前駅から徒歩圏内で通いやすいです。全国150店舗相互利用できるので、出張先でも継続できます。',
      },
      {
        author: 'Y.H',
        rating: 5,
        date: '2週間前',
        text: 'ピラティス、常温ヨガ、ホットヨガすべてのレッスンを受けることができます。ライフスタイルに合わせて自由に楽しめます。',
      },
      {
        author: 'S.T',
        rating: 4,
        date: '3週間前',
        text: '男女共用なので家族で通えます。喜多見・狛江・和泉多摩川・祖師谷大蔵からもアクセス良好です。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ['男女共用', '全国150店舗相互利用', 'マット&マシン', 'ヨガ併用可'],
    description: '全国展開の大手ピラティススタジオ。成城学園前駅から徒歩圏内で、全国150店舗相互利用できるので出張先でも継続できます。ピラティススタジオでも、ヨガスタジオでも他店舗利用OK。ピラティス、常温ヨガ、ホットヨガすべてのレッスンを受けることができます。小田急小田原線 喜多見駅・狛江駅・和泉多摩川駅・祖師谷大蔵駅からもアクセス良好。男女共用なので家族で通えます。',
    access: '成城学園前駅より徒歩圏内',
    address: '東京都世田谷区（成城学園前エリア、詳細住所は公式サイト参照）',
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
    name: 'ピラティスミラー 成城学園前',
    image: '/images/pilates2.jpg',
    rating: 4.7,
    reviewCount: 152,
    reviews: [
      {
        author: 'M.Y',
        rating: 5,
        date: '1週間前',
        text: 'コナミスポーツ運営のスタジオ。スタジオの天井に鏡があるので、自分の身体の動きを確認しながら取り組めます。',
      },
      {
        author: 'K.T',
        rating: 4,
        date: '2週間前',
        text: '1レッスン30分で「気軽に」参加でき、音楽をかけながら「楽しく」動けます。短い時間でも達成感と効果を感じられます。',
      },
      {
        author: 'R.S',
        rating: 5,
        date: '3週間前',
        text: '少人数制なので初めての方でも安心。レッスン前の20分はリフォーマーでセルフトレーニングも可能です。',
      },
    ],
    price: '月6回 11,000円',
    trial: '体験レッスンあり',
    features: ['KONAMI運営', '天井鏡', '30分レッスン', '少人数制'],
    description: 'コナミスポーツが運営する「もっと鏡が見たくなる」をコンセプトにしたピラティススタジオ。スタジオの天井に鏡を設置し、自分の身体の動きを確認しながら取り組めます。1レッスン30分で「気軽に」参加でき、音楽をかけながら「楽しく」動く、短い時間でも達成感と効果を感じられるレッスンです。少人数制なので初めての方でも安心。レッスン前の20分は、リフォーマーを使用してセルフトレーニングが可能です。',
    access: '成城学園前駅より徒歩圏内',
    address: '東京都世田谷区（成城学園前エリア、詳細住所は公式サイト参照）',
    popularPlan: {
      name: '月会費プラン',
      description: '天井鏡を使った30分レッスン',
      price: '月6回 11,000円（税込）',
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
    name: 'CLUB PILATES 成城学園前',
    image: '/images/pilates3.jpg',
    rating: 4.8,
    reviewCount: 208,
    reviews: [
      {
        author: 'N.K',
        rating: 5,
        date: '1週間前',
        text: '成城学園前駅から徒歩1分の好立地。世界800店舗以上展開する世界最大級のピラティススタジオです。',
      },
      {
        author: 'Y.M',
        rating: 5,
        date: '2週間前',
        text: '500時間以上の研修を経た質の高いインストラクターが在籍。初心者から上級者まで安心して受けられる4段階のレベル分け。',
      },
      {
        author: 'S.H',
        rating: 4,
        date: '3週間前',
        text: '豊富な専門知識と観察力で、一人ひとりの動き方やクセに合わせた的確なレッスンを行ってくれます。',
      },
    ],
    price: '月4回 13,090円',
    trial: '体験レッスンあり',
    features: ['世界最大級', '駅徒歩1分', '800店舗以上', '4段階レベル分け'],
    description: '成城学園前駅から徒歩1分の好立地にある世界的ピラティスブランドのスタジオ。世界800店舗以上展開する世界最大級のマシンピラティススタジオです。500時間以上の研修を経た質の高いインストラクターが在籍し、初心者から上級者まで安心して受けられる4段階のレベル分け。ピラティスが初めての方、運動習慣がない方も安心してスタジオにお越しください。豊富な専門知識と観察力で、一人ひとりの動き方やクセに合わせた的確なレッスンを行います。',
    access: '成城学園前駅徒歩1分',
    address: '東京都世田谷区（成城学園前エリア、詳細住所は公式サイト参照）',
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
    name: 'STUDIO IVY 成城学園前',
    image: '/images/pilates4.jpg',
    rating: 4.7,
    reviewCount: 124,
    reviews: [
      {
        author: 'E.N',
        rating: 5,
        date: '2週間前',
        text: '成城学園前駅から徒歩圏で通えるパーソナル専門のマシンピラティススタジオ。洗練された清潔感のある完全プライベートな空間です。',
      },
      {
        author: 'T.K',
        rating: 4,
        date: '3週間前',
        text: '美しいボディラインを作りたい、姿勢改善したいなどお客様のさまざまなお悩みに沿ったオーダーメイドのプログラムを提供してくれます。',
      },
      {
        author: 'M.S',
        rating: 5,
        date: '1ヶ月前',
        text: 'ピラティス専用マシン「リフォーマー」を使い、効率よくインナーマッスルを鍛えられます。しなやかで美しいカラダ作りをサポートしてくれます。',
      },
    ],
    price: '初回 4,500円〜',
    trial: '体験レッスンあり',
    features: ['パーソナル専門', '完全プライベート', 'オーダーメイド', 'リフォーマー'],
    description: '成城学園前駅から徒歩圏で通えるパーソナル専門のマシンピラティススタジオ。洗練された清潔感のある完全プライベートな空間で、美しいボディラインを作りたい、姿勢改善したいなどお客様のさまざまなお悩みに沿ったオーダーメイドのプログラムをご提供いたします。ピラティス専用マシン「リフォーマー」を使い、効率よくインナーマッスルを鍛えます。気になる部位に効果的にアプローチができ、しなやかで美しいカラダ作りをサポートします。',
    access: '成城学園前駅より徒歩圏内',
    address: '東京都世田谷区（成城学園前エリア、詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '完全プライベートのオーダーメイドプログラム',
      price: '初回 4,500円〜（税込）',
    },
    options: [
      'パーソナルレッスン',
      'オーダーメイドプログラム',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜60代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '運動不足解消'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['完全プライベート', 'リフォーマー', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'Evolv 成城学園前店',
    image: '/images/pilates5.jpg',
    rating: 4.6,
    reviewCount: 142,
    reviews: [
      {
        author: 'K.H',
        rating: 5,
        date: '1週間前',
        text: '成城学園前駅から徒歩1分という好立地。マシンピラティス×EMSで20分ボディメイクができます。',
      },
      {
        author: 'M.T',
        rating: 4,
        date: '2週間前',
        text: '祖師ヶ谷大蔵・経堂・喜多見などの周辺駅からも1〜2駅圏内でアクセスできるため、通いやすさは抜群です。',
      },
      {
        author: 'Y.N',
        rating: 4,
        date: '3週間前',
        text: '短時間で効率的にトレーニングできるので、忙しい人にもおすすめです。無料会員限定イベントもあります。',
      },
    ],
    price: '詳細は公式サイト参照',
    trial: '体験レッスンあり',
    features: ['マシンピラティス×EMS', '20分ボディメイク', '駅徒歩1分', '短時間効率'],
    description: '小田急線「成城学園前駅」から徒歩1分という好立地のピラティススタジオ。マシンピラティス×EMSで20分ボディメイクができるのが特徴です。祖師ヶ谷大蔵・経堂・喜多見などの周辺駅からも1〜2駅圏内でアクセスできるため、通いやすさは抜群です。短時間で効率的にトレーニングできるので、忙しい人にもおすすめ。無料会員限定イベントなども開催しています。',
    access: '成城学園前駅徒歩1分',
    address: '東京都世田谷区（成城学園前エリア、詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'マシンピラティス×EMS',
      description: '20分で効率的にボディメイク',
      price: '詳細は公式サイト参照',
    },
    options: [
      '20分ボディメイク',
      '無料会員限定イベント',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['ボディメイク', '時短トレーニング', 'ダイエット', '運動不足解消'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['マシンピラティス', 'EMS', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'Pilasuru 成城学園前店',
    image: '/images/pilates6.jpg',
    rating: 4.5,
    reviewCount: 98,
    reviews: [
      {
        author: 'L.K',
        rating: 5,
        date: '2週間前',
        text: 'マシンピラティス専門のスタジオ。一人ひとりに合わせた丁寧な指導が受けられます。',
      },
      {
        author: 'F.H',
        rating: 4,
        date: '3週間前',
        text: '少人数制なので、初心者でも安心して通えます。インストラクターが丁寧に教えてくれます。',
      },
      {
        author: 'M.Y',
        rating: 4,
        date: '1ヶ月前',
        text: 'マシンピラティス専門なので、効率的にトレーニングできます。成城学園前駅から近くて便利です。',
      },
    ],
    price: '詳細は公式サイト参照',
    trial: '体験レッスンあり',
    features: ['マシンピラティス専門', '少人数制', '一人ひとりに合わせた指導', '成城学園前駅近'],
    description: 'マシンピラティス専門のスタジオ。一人ひとりに合わせた丁寧な指導が受けられます。少人数制なので、初心者でも安心して通えます。インストラクターが丁寧に教えてくれるので、正しいフォームで効率的にトレーニングできます。成城学園前駅から近くて便利な立地で、仕事帰りや買い物ついでに通いやすいスタジオです。',
    access: '成城学園前駅より徒歩圏内',
    address: '東京都世田谷区（成城学園前エリア、詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'マシンピラティスレッスン',
      description: '少人数制の丁寧な指導',
      price: '詳細は公式サイト参照',
    },
    options: [
      'マシンピラティス',
      '少人数制レッスン',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜60代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ボディメイク', '姿勢改善', '運動不足解消', '健康維持'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['マシンピラティス専門', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'ピラティスミラー 千歳船橋（近隣エリア）',
    image: '/images/pilates7.jpg',
    rating: 4.7,
    reviewCount: 118,
    reviews: [
      {
        author: 'N.A',
        rating: 5,
        date: '1週間前',
        text: '成城学園前から小田急線で2駅の千歳船橋駅。コナミスポーツ運営のピラティスミラーで、天井鏡を使った30分レッスンが受けられます。',
      },
      {
        author: 'T.M',
        rating: 4,
        date: '2週間前',
        text: '1レッスン30分で「気軽に」参加でき、音楽をかけながら「楽しく」動けます。少人数制なので初めての方でも安心です。',
      },
      {
        author: 'K.S',
        rating: 5,
        date: '3週間前',
        text: 'レッスン前の20分はリフォーマーでセルフトレーニングも可能。短い時間でも達成感と効果を感じられます。',
      },
    ],
    price: '月6回 11,000円',
    trial: '体験レッスンあり',
    features: ['KONAMI運営', '天井鏡', '30分レッスン', '千歳船橋駅近'],
    description: '成城学園前から小田急線で2駅の千歳船橋駅近くにあるコナミスポーツ運営のピラティススタジオ。「もっと鏡が見たくなる」をコンセプトに、スタジオの天井に鏡を設置し、自分の身体の動きを確認しながら取り組めます。1レッスン30分で「気軽に」参加でき、音楽をかけながら「楽しく」動く、短い時間でも達成感と効果を感じられるレッスンです。少人数制なので初めての方でも安心。レッスン前の20分は、リフォーマーを使用してセルフトレーニングが可能です。',
    access: '千歳船橋駅より徒歩圏内（成城学園前から小田急線で2駅）',
    address: '東京都世田谷区（千歳船橋エリア、詳細住所は公式サイト参照）',
    popularPlan: {
      name: '月会費プラン',
      description: '天井鏡を使った30分レッスン',
      price: '月6回 11,000円（税込）',
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
]

export default function SeijoGakuenmaeAreaPage() {
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
              成城学園前エリアのピラティススタジオ
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              成城学園前駅周辺と近隣エリア（千歳船橋）の実在する人気ピラティススタジオ7選を厳選してご紹介します
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
                小田急小田原線 成城学園前駅周辺
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
            <h2 className="text-xl font-semibold text-blue-900 mb-3">成城学園前エリアについて</h2>
            <p className="text-blue-800 leading-relaxed">
              成城学園前駅周辺は、高級住宅街として知られ、閑静な住宅地として人気のエリアです。世界最大級のマシンピラティス「CLUB PILATES」、KONAMI運営の天井鏡スタジオ「ピラティスミラー」、パーソナル専門の「STUDIO IVY」、マシンピラティス×EMS「Evolv」など、個性的なスタジオが揃っています。小田急小田原線で、喜多見・狛江・和泉多摩川・祖師谷大蔵・経堂からもアクセス良好です。
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-1">
            {studios.map((studio, index) => (
              <StudioCard key={index} studio={studio} rank={index + 1} />
            ))}
          </div>

          <div className="mt-12 p-6 bg-purple-50 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">成城学園前エリアでピラティスを始めよう</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                成城学園前駅周辺は、高級住宅街として知られ、閑静な住宅地として人気です。世界最大級のマシンピラティス「CLUB PILATES」、KONAMI運営の天井鏡スタジオ「ピラティスミラー」、パーソナル専門の「STUDIO IVY」、マシンピラティス×EMS「Evolv」など、個性的なスタジオが揃っています。小田急小田原線で、喜多見・狛江・和泉多摩川・祖師谷大蔵・経堂からもアクセス良好です。
              </p>
              <h3 className="text-xl font-semibold mb-2">エリアの特徴</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>成城学園前駅：小田急小田原線、新宿から快速で約15分</li>
                <li>世界最大級（CLUB PILATES）：駅徒歩1分、800店舗以上展開、4段階レベル分け</li>
                <li>KONAMI運営（ピラティスミラー）：天井鏡、30分レッスン、少人数制</li>
                <li>パーソナル専門（STUDIO IVY）：完全プライベート、オーダーメイドプログラム</li>
                <li>マシンピラティス×EMS（Evolv）：20分ボディメイク、駅徒歩1分</li>
                <li>小田急線沿線（喜多見・狛江・和泉多摩川・祖師谷大蔵・経堂）からアクセス良好</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">料金相場</h3>
              <p className="mb-4">
                月4回で10,450円〜13,090円が相場。zen place pilates 成城学園前は月4回10,450円〜、CLUB PILATES 成城学園前は月4回13,090円、ピラティスミラーは月6回11,000円とリーズナブル。全国150店舗相互利用できるzen place pilatesなら、成城学園前エリアの各店舗を追加料金なしで使い分けられるのでお得です。パーソナル専門のSTUDIO IVYは初回4,500円〜。体験レッスンは1,000円前後で受けられるスタジオが多いので、まずは気軽に体験してみることをおすすめします。
              </p>
              <h3 className="text-xl font-semibold mb-2">アクセス</h3>
              <p>
                成城学園前駅は小田急小田原線の快速停車駅で、新宿まで約15分と都心部へのアクセスも良好です。各スタジオは駅から徒歩1分程度の好立地で、仕事帰りや買い物ついでに通いやすい環境です。小田急線沿線の喜多見・狛江・和泉多摩川・祖師谷大蔵・経堂からもアクセス良好。zen place pilatesの全国150店舗相互利用なら各店舗を自由に選べます。
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
