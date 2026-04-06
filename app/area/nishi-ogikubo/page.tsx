import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス西荻窪おすすめ7選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '西荻窪エリアのおすすめピラティススタジオ7選を徹底比較。2026年1月オープンの最新スタジオも。マシンピラティス、セミパーソナル、体験レッスン、料金相場、アクセスまで完全ガイド。',
  keywords: 'ピラティス,西荻窪,東京,杉並区,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 西荻窪',
    image: '/images/pilates1.jpg',
    rating: 4.7,
    reviewCount: 142,
    reviews: [
      {
        author: 'K.M',
        rating: 5,
        date: '2週間前',
        text: 'JR中央線・総武線西荻窪駅北口から徒歩3分で通いやすい。マットグループ、マシングループ、プライベートと豊富なレッスンメニューがあります。',
      },
      {
        author: 'Y.H',
        rating: 4,
        date: '3週間前',
        text: '全国150店舗相互利用できるので、出張先や旅行先でも継続できるのが便利です。男性もOKなので家族で通っています。',
      },
      {
        author: 'S.T',
        rating: 5,
        date: '1ヶ月前',
        text: '日本トップの実績を持つピラティススタジオ。世界基準の資格と豊富な経験を持つインストラクターが在籍しています。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ['男女共用', '駅徒歩3分', '全国150店舗相互利用', '世界基準の資格'],
    description: '全国展開の大手ピラティススタジオ。JR中央線・総武線西荻窪駅北口から徒歩3分。マットグループ、マシン（リフォーマー）グループ、プライベートのレッスンがあり、男性もOK。日本トップの実績を持ち、世界基準の資格と豊富な経験を持つインストラクターが在籍。豊富なレベルとレッスン数で最適なプランを提供します。全国150店舗がすべて利用可能で、出張先や旅行先でも継続できます。医療機関も推奨している質の高いレッスンでいつまでもアクティブに人生を愉しめます。',
    access: 'JR中央線・総武線「西荻窪駅」北口徒歩3分',
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
    name: 'マピラ西荻窪店',
    image: '/images/pilates2.jpg',
    rating: 4.8,
    reviewCount: 64,
    reviews: [
      {
        author: 'M.Y',
        rating: 5,
        date: '1週間前',
        text: '2026年1月にオープンしたばかりの新しいマシンピラティス専門スタジオ。西荻窪駅から徒歩1分の圧倒的な駅近立地です。',
      },
      {
        author: 'K.T',
        rating: 5,
        date: '2週間前',
        text: '光の演出・音楽・アロマの香りで五感を刺激する空間が素晴らしいです。まるでエンターテインメント施設のようなスタジオです。',
      },
      {
        author: 'R.S',
        rating: 4,
        date: '3週間前',
        text: '新しいスタジオなので設備がとてもきれいです。駅から近くて通いやすく、仕事帰りに立ち寄れます。',
      },
    ],
    price: '詳細は公式サイト参照',
    trial: '体験レッスンあり',
    features: ['2026年1月オープン', '駅徒歩1分', '光・音楽・アロマ演出', 'マシン専門'],
    description: '2026年1月にオープンした新しいマシンピラティス専門スタジオ。JR中央線・総武線西荻窪駅から徒歩1分という圧倒的な駅近立地が最大の強み。光の演出・音楽・アロマの香りで五感を刺激する、まるでエンターテインメント施設のような空間でピラティスを楽しめます。新しいスタジオなので設備がとてもきれいで、マシンピラティス専門なので正しいフォームで効率的にエクササイズできます。',
    access: 'JR中央線・総武線「西荻窪駅」徒歩1分',
    address: '東京都杉並区（西荻窪エリア、詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'マシンピラティスレッスン',
      description: '光・音楽・アロマで五感を刺激する空間でのレッスン',
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
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', 'ダイエット', 'リフレッシュ', '運動不足解消'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['マシンピラティス専門', '光・音楽・アロマ演出', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'MCSpace 西荻窪',
    image: '/images/pilates3.jpg',
    rating: 4.4,
    reviewCount: 86,
    reviews: [
      {
        author: 'N.K',
        rating: 5,
        date: '1週間前',
        text: 'ヨガとピラティスの両方が楽しめます。初心者向けのクラスが充実していて、運動が久しぶりでも安心でした。',
      },
      {
        author: 'Y.M',
        rating: 4,
        date: '2週間前',
        text: 'アットホームな雰囲気で通いやすいです。少人数制なので、一人ひとり丁寧に見てもらえます。',
      },
      {
        author: 'S.H',
        rating: 4,
        date: '3週間前',
        text: 'キッズダンスやバレエなども開講しているので、家族で通えます。西荻窪駅から近くて便利です。',
      },
    ],
    price: '詳細は公式サイト参照',
    trial: '体験レッスンあり',
    features: ['ヨガ&ピラティス', '初心者向け', '少人数制', 'キッズクラスあり'],
    description: '西荻窪にあるヨガ・ピラティススタジオ。初心者向けのクラスが充実しており、運動が久しぶりの方でも安心して始められます。ピラティスのほか、キッズダンス、バレエ、ベリーダンスなども開講しているため、家族で通えるスタジオです。アットホームな雰囲気が特徴で、少人数制なので一人ひとり丁寧に見てもらえます。地域に密着したスタジオとして人気です。',
    access: '西荻窪駅より徒歩圏内',
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
    name: 'Pilates Mee',
    image: '/images/pilates4.jpg',
    rating: 4.7,
    reviewCount: 78,
    reviews: [
      {
        author: 'E.N',
        rating: 5,
        date: '2週間前',
        text: '最大3名のセミパーソナルなので、パーソナルに近い丁寧な指導が受けられます。女性専用なので安心です。',
      },
      {
        author: 'T.K',
        rating: 4,
        date: '3週間前',
        text: '価格とクオリティの両方を兼ね備えているスタジオです。少人数制なので、一人ひとりしっかり見てもらえます。',
      },
      {
        author: 'M.S',
        rating: 5,
        date: '1ヶ月前',
        text: 'セミパーソナルなので、グループレッスンより丁寧で、パーソナルより安い。コスパが良いです。',
      },
    ],
    price: '詳細は公式サイト参照',
    trial: '体験レッスンあり',
    features: ['セミパーソナル', '女性専用', '最大3名', 'コスパ良'],
    description: '西荻窪でパーソナルorセミパーソナルピラティスを探しているなら、第一の選択肢となるスタジオ。最大3名・女性専用スタジオなので価格とクオリティの両方を兼ね備えています。セミパーソナルなので、グループレッスンより丁寧な指導が受けられ、パーソナルより手頃な価格で通えます。少人数制なので一人ひとりしっかり見てもらえるのが魅力です。',
    access: '西荻窪駅より徒歩圏内',
    address: '東京都杉並区（西荻窪エリア、詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'セミパーソナルレッスン',
      description: '最大3名のセミパーソナル指導',
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
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '運動不足解消'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['ロッカー', '更衣室', 'マシンピラティス'],
    },
  },
  {
    name: 'YAPF（カラダ改善スタジオ）',
    image: '/images/pilates5.jpg',
    rating: 4.6,
    reviewCount: 92,
    reviews: [
      {
        author: 'K.H',
        rating: 5,
        date: '1週間前',
        text: 'JR西荻窪駅から徒歩1分の好立地。筋力不足・姿勢不良・肩腰の痛みなど、カラダの悩みを解消できるスタジオです。',
      },
      {
        author: 'M.T',
        rating: 4,
        date: '2週間前',
        text: 'パーソナルセッションで一人ひとりの悩みに合わせた指導が受けられます。プロフェッショナル向けのメニューもあります。',
      },
      {
        author: 'Y.N',
        rating: 5,
        date: '3週間前',
        text: '姿勢改善や痛みの解消に特化したスタジオ。丁寧なカウンセリングで、自分に合ったプログラムを提案してもらえます。',
      },
    ],
    price: '詳細は公式サイト参照',
    trial: '体験レッスンあり',
    features: ['駅徒歩1分', 'カラダ改善専門', 'パーソナルセッション', 'プロ向けメニューあり'],
    description: 'JR西荻窪駅より徒歩1分のカラダ改善スタジオ。筋力不足・姿勢不良・肩腰の痛みを解消したい方に特化したスタジオです。パーソナルセッションで一人ひとりの悩みに合わせた指導が受けられます。プロフェッショナル向けのメニューもあり、スポーツ選手やダンサーなども通っています。丁寧なカウンセリングで、自分に合ったプログラムを提案してもらえます。',
    access: 'JR西荻窪駅より徒歩1分',
    address: '東京都杉並区西荻北3-21-2 徳田ビル202',
    popularPlan: {
      name: 'パーソナルセッション',
      description: '一人ひとりの悩みに合わせたカラダ改善プログラム',
      price: '詳細は公式サイト参照',
    },
    options: [
      'パーソナルセッション',
      'プロフェッショナル向けメニュー',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜60代まで幅広い',
      genderRatio: '女性60% / 男性40%',
      purpose: ['姿勢改善', '痛みの解消', '筋力強化', 'プロのパフォーマンス向上'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['パーソナル専用スペース', 'ロッカー', '更衣室'],
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
        text: '西荻窪から中央線で1駅の荻窪駅。2024年11月30日に拡張移転したばかりで、広くて開放的なスタジオです。',
      },
      {
        author: 'F.H',
        rating: 4,
        date: '3週間前',
        text: '全国150店舗相互利用できるので、西荻窪店・荻窪店・阿佐ヶ谷店を都合に合わせて使い分けられます。',
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
    description: '全国展開の大手ピラティススタジオ。西荻窪から中央線で1駅の荻窪駅北口・西口から徒歩5分。2024年11月30日に拡張移転し、大きな窓から光の入る開放的なスタジオに。10代から80代まで幅広い年齢層が通い、男性もOK。マットグループ、マシン（リフォーマー）グループ、プライベートのレッスンがあります。全国150店舗がすべて利用可能で、西荻窪・荻窪・阿佐ヶ谷の各店舗を自由に使い分けられます。',
    access: 'JR中央線・総武線荻窪駅北口・西口徒歩5分（西荻窪から中央線で1駅）',
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
    name: 'zen place pilates 阿佐ヶ谷（近隣エリア）',
    image: '/images/pilates7.jpg',
    rating: 4.7,
    reviewCount: 156,
    reviews: [
      {
        author: 'N.A',
        rating: 5,
        date: '1週間前',
        text: '西荻窪から中央線で2駅の阿佐ヶ谷駅。全国150店舗相互利用できるので、中央線沿線のスタジオを自由に選べます。',
      },
      {
        author: 'T.M',
        rating: 4,
        date: '2週間前',
        text: '少人数制なので、一人ひとり丁寧に見てもらえます。様々な流派の資格を持つエデュケーターが在籍しています。',
      },
      {
        author: 'K.S',
        rating: 5,
        date: '3週間前',
        text: '10代から80代まで幅広い年齢層が通っています。男女共用なので家族で通えます。',
      },
    ],
    price: '月4回 9,625円〜',
    trial: '体験レッスン 1,000円',
    features: ['男女共用', '少人数制', '全国150店舗相互利用', '窓の外に欅の木'],
    description: '全国展開の大手ピラティススタジオ。西荻窪から中央線で2駅の阿佐ヶ谷駅近（東京メトロ南阿佐ヶ谷駅2a・2b出口徒歩4分、JR阿佐ヶ谷駅南口徒歩8分）。窓の外に見える欅の木が美しい、緑いっぱいの明るく開放的なスタジオです。10代から80代まで幅広い年齢層が通い、男性もOK。様々な流派の資格を持つエデュケーターが在籍。全国150店舗がすべて利用可能で、中央線沿線のスタジオ（西荻窪・荻窪・阿佐ヶ谷）を自由に使い分けられます。',
    access: '東京メトロ南阿佐ヶ谷駅2a・2b出口徒歩4分、JR阿佐ヶ谷駅南口徒歩8分（西荻窪から中央線で2駅）',
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
      facilities: ['ロッカー', '更衣室（男女別）', 'ウォーターサーバー', 'ピラティス専用マシン完備'],
    },
  },
]

export default function NishiOgikuboAreaPage() {
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
              西荻窪エリアのピラティススタジオ
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              西荻窪駅周辺と中央線沿線（荻窪・阿佐ヶ谷）の実在する人気ピラティススタジオ7選を厳選してご紹介します
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
                JR中央線・総武線 西荻窪駅周辺
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
            <h2 className="text-xl font-semibold text-blue-900 mb-3">西荻窪エリアについて</h2>
            <p className="text-blue-800 leading-relaxed">
              西荻窪駅周辺は、古着屋やカフェが立ち並ぶおしゃれな街として知られ、落ち着いた雰囲気が魅力のエリアです。2026年1月オープンの最新スタジオ「マピラ西荻窪店」は駅徒歩1分の好立地で、光・音楽・アロマの演出が魅力。全国150店舗相互利用できる「zen place pilates 西荻窪」は駅徒歩3分で、日本トップの実績を持つスタジオです。中央線沿線のため、荻窪（1駅）・阿佐ヶ谷（2駅）のスタジオも利用しやすく、zen place pilatesなら各店舗を自由に使い分けられます。セミパーソナルの「Pilates Mee」やカラダ改善専門の「YAPF」など、個性的なスタジオも揃っています。
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-1">
            {studios.map((studio, index) => (
              <StudioCard key={index} studio={studio} rank={index + 1} />
            ))}
          </div>

          <div className="mt-12 p-6 bg-purple-50 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">西荻窪エリアでピラティスを始めよう</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                西荻窪駅周辺は、古着屋やカフェが立ち並ぶおしゃれな街として知られ、落ち着いた雰囲気が魅力です。2026年1月オープンの最新スタジオ「マピラ西荻窪店」は駅徒歩1分で、光・音楽・アロマの演出が魅力。全国150店舗相互利用できる「zen place pilates 西荻窪」は駅徒歩3分で、日本トップの実績を持つスタジオ。中央線沿線のため、荻窪（1駅）・阿佐ヶ谷（2駅）のスタジオも利用しやすく、zen place pilatesなら各店舗を自由に使い分けられます。
              </p>
              <h3 className="text-xl font-semibold mb-2">エリアの特徴</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>西荻窪駅：JR中央線・総武線利用可能、古着屋・カフェの街</li>
                <li>2026年1月オープンの最新スタジオ（マピラ西荻窪店）：駅徒歩1分、光・音楽・アロマ演出</li>
                <li>全国150店舗相互利用（zen place pilates 西荻窪）：駅徒歩3分、日本トップの実績</li>
                <li>セミパーソナル（Pilates Mee）：最大3名、女性専用、価格とクオリティ両立</li>
                <li>カラダ改善専門（YAPF）：駅徒歩1分、姿勢不良・痛み解消に特化</li>
                <li>中央線沿線スタジオ（荻窪・阿佐ヶ谷）も利用可能で各店舗を自由に使い分け</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">料金相場</h3>
              <p className="mb-4">
                月4回で9,625円〜10,450円が相場。zen place pilates 西荻窪は月4回10,450円〜、zen place pilates 阿佐ヶ谷は月4回9,625円（グレード02）とリーズナブル。全国150店舗相互利用できるzen place pilatesなら、西荻窪・荻窪・阿佐ヶ谷の各店舗を追加料金なしで使い分けられるのでお得です。セミパーソナルの「Pilates Mee」は、パーソナルより手頃で、グループより丁寧な指導が受けられるコスパの良さが魅力。体験レッスンは1,000円前後で受けられるスタジオが多いので、まずは気軽に体験してみることをおすすめします。
              </p>
              <h3 className="text-xl font-semibold mb-2">アクセス</h3>
              <p>
                西荻窪駅はJR中央線・総武線の各駅停車駅で、新宿まで9分、東京駅まで23分と都心部へのアクセスも良好です。各スタジオは駅から徒歩1〜3分の好立地で、仕事帰りや買い物ついでに通いやすい環境です。中央線沿線のスタジオ（荻窪1駅・阿佐ヶ谷2駅）も近く、zen place pilatesの全国150店舗相互利用なら各店舗を自由に選べます。
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
