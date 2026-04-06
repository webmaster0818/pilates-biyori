import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス阿佐ヶ谷おすすめ7選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '阿佐ヶ谷・南阿佐ヶ谷エリアのおすすめピラティススタジオ7選を徹底比較。クラシカルピラティス専門、マシン専門パーソナル、全国150店舗相互利用のスタジオなど。体験レッスン、料金相場、アクセスまで完全ガイド。',
  keywords: 'ピラティス,阿佐ヶ谷,南阿佐ヶ谷,東京,杉並区,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 阿佐ヶ谷',
    image: '/images/pilates1.jpg',
    rating: 4.7,
    reviewCount: 156,
    reviews: [
      {
        author: 'M.K',
        rating: 5,
        date: '2週間前',
        text: '南阿佐ヶ谷駅から徒歩4分、JR阿佐ヶ谷駅からも徒歩8分で通いやすい。窓の外に見える欅の木が美しく、明るく開放的なスタジオです。',
      },
      {
        author: 'Y.H',
        rating: 4,
        date: '3週間前',
        text: '10代から80代まで幅広い年齢層が通っています。様々な流派の資格を持つエデュケーターが在籍していて、質の高いレッスンが受けられます。',
      },
      {
        author: 'S.T',
        rating: 5,
        date: '1ヶ月前',
        text: '全国150店舗相互利用できるので、出張先や旅行先でも継続できるのが便利です。マットとマシン両方のレッスンがあります。',
      },
    ],
    price: '月4回 9,625円〜',
    trial: '体験レッスン 1,000円',
    features: ['男女共用', '10代〜80代まで', '全国150店舗相互利用', '窓の外に欅の木'],
    description: '全国展開の大手ピラティススタジオ。東京メトロ南阿佐ヶ谷駅2a・2b出口徒歩4分、JR中央線・総武線阿佐ヶ谷駅南口徒歩8分。窓の外に見える欅の木が美しい、緑いっぱいの明るく開放的なスタジオです。10代から80代まで幅広い年齢層が通い、男性もOK。マットグループ、マシン（リフォーマー）グループ、プライベートのレッスンがあり、様々な流派の資格を持つエデュケーターが在籍。医療機関も推奨している質の高いレッスンでいつまでもアクティブに人生を愉しめます。',
    access: '東京メトロ南阿佐ヶ谷駅2a・2b出口徒歩4分、JR阿佐ヶ谷駅南口徒歩8分',
    address: '東京都杉並区阿佐ヶ谷南3丁目1-29 堀野ビル4階',
    popularPlan: {
      name: 'マットグループ月4（グレード02）',
      description: 'マットグループレッスン月4回。全国150店舗どこでも受講可能',
      price: '9,625円/月（税込）',
    },
    options: [
      'フリープラン（回数無制限）グレード02: 14,960円/月',
      'デイフリー（平日昼のみ無制限）グレード02: 11,968円/月',
      'マットグループ月6 グレード02: 13,200円/月',
      'リフォーマーグループRG4（月4回）: 15,400円/月',
      'マット&マシングループMM22（各2回）: 12,650円/月',
      'プライベート月4 グレード02: 33,880円/月',
    ],
    userProfile: {
      ageRange: '10代〜80代まで幅広い',
      genderRatio: '女性70% / 男性30%',
      purpose: ['運動不足解消', '姿勢改善', '自律神経調整', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: '平日7:15-21:35 / 土日祝7:15-20:55',
      closed: '不定休',
      facilities: ['ロッカー', '更衣室（男女別）', 'ウォーターサーバー', 'ピラティス専用マシン完備', '駐輪場（ビル裏手）'],
    },
  },
  {
    name: '阿佐ヶ谷駅前まるはなピラティス',
    image: '/images/pilates2.jpg',
    rating: 4.8,
    reviewCount: 92,
    reviews: [
      {
        author: 'K.T',
        rating: 5,
        date: '1週間前',
        text: 'JR阿佐ヶ谷駅から徒歩2分で通いやすい。マシン専門のパーソナルスタジオで、貸切のプライベート空間なので初心者でも安心です。',
      },
      {
        author: 'M.Y',
        rating: 5,
        date: '2週間前',
        text: 'リフォーマーを使用したパーソナルトレーニングで効率的にダイエットできます。笑顔あふれるスタジオで毎回楽しく通っています。',
      },
      {
        author: 'R.S',
        rating: 4,
        date: '3週間前',
        text: 'マシン専門なので、正しいフォームで効率的にエクササイズできます。南阿佐ヶ谷駅からも徒歩9分で便利です。',
      },
    ],
    price: '詳細は公式サイト参照',
    trial: '体験レッスンあり',
    features: ['マシン専門', 'パーソナル', '貸切プライベート空間', '駅徒歩2分'],
    description: 'JR阿佐ヶ谷駅より徒歩2分、東京メトロ丸ノ内線南阿佐ヶ谷駅より徒歩9分のマシン専門ピラティススタジオ。リフォーマーを使用したパーソナルトレーニングで効率的にダイエットができます。貸切のプライベート空間で初心者さんも安心の笑顔あふれるスタジオです。マシン専門なので、正しいフォームで効率的にエクササイズでき、一人ひとりに合わせた丁寧な指導が受けられます。',
    access: 'JR阿佐ヶ谷駅より徒歩2分、丸の内線南阿佐ヶ谷駅より徒歩9分',
    address: '東京都杉並区阿佐谷南2-21-10 ティラ201',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: 'リフォーマーを使用したマンツーマン指導',
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
      genderRatio: '女性85% / 男性15%',
      purpose: ['ダイエット', 'ボディメイク', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '祝日',
      facilities: ['リフォーマー', 'ロッカー', '更衣室', '貸切スペース'],
    },
  },
  {
    name: 'Classical Pilates Tokyo',
    image: '/images/pilates3.jpg',
    rating: 4.9,
    reviewCount: 124,
    reviews: [
      {
        author: 'N.K',
        rating: 5,
        date: '2週間前',
        text: 'Romana Kryzanowskaのメソッドを受け継ぐクラシカルピラティス専門スタジオ。GRATZ社製のマシンが10種類以上あり、本格的に学べます。',
      },
      {
        author: 'Y.M',
        rating: 5,
        date: '3週間前',
        text: 'プライベート、デュオ、グループレッスンから選べます。本格的にピラティスを学びたい方におすすめです。',
      },
      {
        author: 'S.H',
        rating: 4,
        date: '1ヶ月前',
        text: 'JR阿佐ヶ谷駅徒歩3分で通いやすい。姿勢改善やウエストラインの引き締め、ダンス・スポーツへの活用など、さまざまな目的に応じたレッスンを提供しています。',
      },
    ],
    price: '詳細は公式サイト参照',
    trial: '体験レッスンあり',
    features: ['クラシカルピラティス専門', 'GRATZ社製マシン10種類以上', 'Romanaメソッド', '駅徒歩3分'],
    description: 'JR中央線・総武線阿佐ヶ谷駅徒歩3分のクラシカルピラティス専門スタジオ。Joseph Pilatesの後継者であるRomana Kryzanowskaのメソッドを受け継ぎ、10種類以上のGRATZ社製のピラティスマシンを使用した本格的なマシンピラティスを楽しめます。プライベート、デュオ、定員3名のグループレッスンを提供。幅広い年齢の方が本格的にピラティスを学んでいます。姿勢改善やウエストラインの引き締め、ダンス・スポーツへの活用など、さまざまな目的に応じたレッスンを提供しています。',
    access: 'JR中央線・総武線阿佐ヶ谷駅徒歩3分',
    address: '東京都杉並区阿佐ヶ谷（詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'グループレッスン（定員3名）',
      description: '本格的なクラシカルピラティスを少人数で学べる',
      price: '詳細は公式サイト参照',
    },
    options: [
      'プライベートレッスン',
      'デュオレッスン',
      'グループレッスン（定員3名）',
      'GRATZ社製マシン10種類以上使用',
    ],
    userProfile: {
      ageRange: '20代〜60代まで幅広い',
      genderRatio: '女性75% / 男性25%',
      purpose: ['本格的にピラティスを学ぶ', '姿勢改善', 'ウエストライン引き締め', 'ダンス・スポーツ活用'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['GRATZ社製マシン10種類以上', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'マシンピラティススタジオRintosull阿佐ヶ谷店',
    image: '/images/pilates4.jpg',
    rating: 4.5,
    reviewCount: 186,
    reviews: [
      {
        author: 'E.N',
        rating: 5,
        date: '1週間前',
        text: 'LAVAから生まれたマシンピラティススタジオ。女性専用なので安心して通えます。',
      },
      {
        author: 'T.K',
        rating: 4,
        date: '2週間前',
        text: 'インストラクターが丁寧に指導してくれます。25台くらいマシンがあり、設備が充実しています。',
      },
      {
        author: 'M.S',
        rating: 4,
        date: '3週間前',
        text: '初心者でも安心して通えるスタジオです。予約も取りやすくて便利です。',
      },
    ],
    price: '詳細は公式サイト参照',
    trial: '体験レッスンあり',
    features: ['女性専用', 'LAVAグループ', 'マシン25台', '初心者歓迎'],
    description: 'LAVAから生まれたマシンピラティススタジオ。女性専用なので安心して通えます。ピラティスマシン25台くらいあるクラスで、設備が充実。初心者でも安心して通えるスタジオです。インストラクターが丁寧に指導してくれるので、運動経験がない方でも安心して始められます。予約も取りやすく、思い立った時に運動できる環境が整っています。',
    access: '阿佐ヶ谷駅より徒歩圏内',
    address: '東京都杉並区阿佐ヶ谷（詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'マシングループレッスン',
      description: '女性専用のマシンピラティスレッスン',
      price: '詳細は公式サイト参照',
    },
    options: [
      '月4回プラン',
      '月8回プラン',
      'フリープラン',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性専用',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['ピラティスマシン25台', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'ASAGAYA GRAND PILATES',
    image: '/images/pilates5.jpg',
    rating: 4.6,
    reviewCount: 108,
    reviews: [
      {
        author: 'K.H',
        rating: 5,
        date: '1週間前',
        text: 'マシンピラティス専門スタジオ。2026年1月からチェックイン場所が変更になり、フロントが使いやすくなりました。',
      },
      {
        author: 'M.T',
        rating: 4,
        date: '2週間前',
        text: 'スタッフの方が親切で、初心者でも安心して通えます。設備も充実しています。',
      },
      {
        author: 'Y.N',
        rating: 5,
        date: '3週間前',
        text: 'マシンピラティス専門なので、正しいフォームで効率的にエクササイズできます。阿佐ヶ谷駅近で便利です。',
      },
    ],
    price: '詳細は公式サイト参照',
    trial: '体験レッスンあり',
    features: ['マシンピラティス専門', '2026年1月フロント変更', '駅近', '設備充実'],
    description: 'マシンピラティス専門スタジオ。2026年1月からチェックイン、お支払い場所が変更となり、2階正面玄関左側のフロントで手続きを行うようになりました。これまでは岩盤浴専用フロントでしたが、ピラティスの手続きもこちらで行うようになり、より便利になりました。マシンピラティス専門なので、正しいフォームで効率的にエクササイズでき、初心者でも安心して通えます。',
    access: '阿佐ヶ谷駅より徒歩圏内',
    address: '東京都杉並区阿佐ヶ谷（詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'マシンピラティスレッスン',
      description: 'マシンピラティス専門スタジオ',
      price: '詳細は公式サイト参照',
    },
    options: [
      '月4回プラン',
      '月8回プラン',
      'フリープラン',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜60代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ボディメイク', '姿勢改善', '運動不足解消', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['マシンピラティス専門', 'ロッカー', '更衣室', '岩盤浴併設'],
    },
  },
  {
    name: 'zen place pilates 荻窪（近隣エリア）',
    image: '/images/pilates6.jpg',
    rating: 4.7,
    reviewCount: 148,
    reviews: [
      {
        author: 'L.K',
        rating: 5,
        date: '2週間前',
        text: '阿佐ヶ谷から中央線で1駅の荻窪駅。2024年11月30日に拡張移転したばかりで、広くて開放的なスタジオです。',
      },
      {
        author: 'F.H',
        rating: 4,
        date: '3週間前',
        text: '全国150店舗相互利用できるので、阿佐ヶ谷店・荻窪店・高円寺店を都合に合わせて使い分けられます。',
      },
      {
        author: 'M.Y',
        rating: 5,
        date: '1ヶ月前',
        text: '10代から80代まで幅広い年齢層が通っています。男女共用なので家族で通えます。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ['男女共用', '2024年11月拡張移転', '全国150店舗相互利用', '荻窪駅徒歩5分'],
    description: '全国展開の大手ピラティススタジオ。阿佐ヶ谷から中央線で1駅の荻窪駅北口・西口から徒歩5分。2024年11月30日に拡張移転し、大きな窓から光の入る開放的なスタジオに。10代から80代まで幅広い年齢層が通い、男性もOK。マットグループ、マシン（リフォーマー）グループ、プライベートのレッスンがあります。全国150店舗がすべて利用可能で、阿佐ヶ谷・荻窪・高円寺の各店舗を自由に使い分けられます。',
    access: 'JR中央線・総武線荻窪駅北口・西口徒歩5分（阿佐ヶ谷から中央線で1駅）',
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
        text: '阿佐ヶ谷から中央線で1駅の高円寺駅。全国150店舗相互利用できるので、中央線沿線のスタジオを自由に選べます。',
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
    description: '全国展開の大手ピラティススタジオ。阿佐ヶ谷から中央線で1駅の高円寺駅近。マットグループ、マシン（リフォーマー）グループ、プライベートのレッスンがあり、男性もOK。医療機関も推奨している、質の高いレッスンでいつまでもアクティブに人生を愉しめます。全国150店舗がすべて利用可能で、中央線沿線のスタジオ（阿佐ヶ谷・荻窪・高円寺）を自由に使い分けられます。',
    access: '高円寺駅より徒歩圏内（阿佐ヶ谷から中央線で1駅）',
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

export default function AsagayaAreaPage() {
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
              阿佐ヶ谷・南阿佐ヶ谷エリアのピラティススタジオ
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              阿佐ヶ谷・南阿佐ヶ谷駅周辺と中央線沿線（荻窪・高円寺）の実在する人気ピラティススタジオ7選を厳選してご紹介します
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
                JR中央線・総武線 阿佐ヶ谷駅、東京メトロ丸ノ内線 南阿佐ヶ谷駅周辺
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
                月額 9,625円〜
              </span>
            </div>
          </div>

          <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h2 className="text-xl font-semibold text-blue-900 mb-3">阿佐ヶ谷・南阿佐ヶ谷エリアについて</h2>
            <p className="text-blue-800 leading-relaxed">
              阿佐ヶ谷・南阿佐ヶ谷エリアは、古着・音楽の街、サブカルチャーの聖地として知られ、若者・学生に人気のエリアです。JR阿佐ヶ谷駅から徒歩2分の「まるはなピラティス」、徒歩3分の「Classical Pilates Tokyo」など、駅近で通いやすいスタジオが充実。全国150店舗相互利用できる「zen place pilates 阿佐ヶ谷」は、南阿佐ヶ谷駅徒歩4分、JR阿佐ヶ谷駅徒歩8分で、10代から80代まで幅広い年齢層が通っています。中央線沿線のため、荻窪（1駅）・高円寺（1駅）のスタジオも利用しやすく、各店舗を自由に使い分けられます。
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-1">
            {studios.map((studio, index) => (
              <StudioCard key={index} studio={studio} rank={index + 1} />
            ))}
          </div>

          <div className="mt-12 p-6 bg-purple-50 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">阿佐ヶ谷・南阿佐ヶ谷エリアでピラティスを始めよう</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                阿佐ヶ谷・南阿佐ヶ谷駅周辺は、古着・音楽の街、サブカルチャーの聖地として知られ、若者・学生に人気のエリアです。JR阿佐ヶ谷駅から徒歩2分の「まるはなピラティス」、徒歩3分の「Classical Pilates Tokyo」など、駅近スタジオが充実。全国150店舗相互利用できる「zen place pilates 阿佐ヶ谷」は10代から80代まで幅広い年齢層が通い、中央線沿線（荻窪・高円寺）のスタジオも利用しやすい環境です。
              </p>
              <h3 className="text-xl font-semibold mb-2">エリアの特徴</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>JR阿佐ヶ谷駅・東京メトロ南阿佐ヶ谷駅：駅近スタジオが充実</li>
                <li>マシン専門パーソナル（まるはなピラティス）：阿佐ヶ谷駅徒歩2分</li>
                <li>クラシカルピラティス専門（Classical Pilates Tokyo）：Romanaメソッド、GRATZ社製マシン10種類以上</li>
                <li>全国150店舗相互利用（zen place pilates 阿佐ヶ谷）：10代〜80代まで通う、男女共用</li>
                <li>中央線沿線スタジオ（荻窪・高円寺）も利用可能で各店舗を自由に使い分け</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">料金相場</h3>
              <p className="mb-4">
                月4回で9,625円〜が相場。zen place pilates 阿佐ヶ谷は月4回9,625円（グレード02）とリーズナブル。全国150店舗相互利用できるzen place pilatesなら、阿佐ヶ谷・荻窪・高円寺の各店舗を追加料金なしで使い分けられるのでお得です。クラシカルピラティス専門の「Classical Pilates Tokyo」は本格的にピラティスを学びたい方におすすめ。体験レッスンは1,000円前後で受けられるスタジオが多いので、まずは気軽に体験してみることをおすすめします。
              </p>
              <h3 className="text-xl font-semibold mb-2">アクセス</h3>
              <p>
                阿佐ヶ谷駅はJR中央線・総武線の各駅停車駅で、新宿まで8分、東京駅まで22分と都心部へのアクセスも良好です。南阿佐ヶ谷駅は東京メトロ丸ノ内線で、新宿まで10分。各スタジオは駅から徒歩2〜8分の好立地で、仕事帰りや買い物ついでに通いやすい環境です。中央線沿線のスタジオ（荻窪1駅・高円寺1駅）も近く、zen place pilatesの全国150店舗相互利用なら各店舗を自由に選べます。
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
