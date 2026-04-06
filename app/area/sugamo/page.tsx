import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス巣鴨おすすめ7選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '巣鴨エリアのおすすめピラティススタジオ7選を徹底比較。駅徒歩1分の好立地スタジオ多数。マシンピラティス、体験レッスン、料金相場、アクセスまで完全ガイド。',
  keywords: 'ピラティス,巣鴨,東京,豊島区,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスミラー 巣鴨',
    image: '/images/pilates1.jpg',
    rating: 4.7,
    reviewCount: 98,
    reviews: [
      {
        author: 'M.K',
        rating: 5,
        date: '2週間前',
        text: '天井に鏡があるので自分のフォームが確認しやすい！コナミ運営なので安心感があります。2025年1月にオープンしたばかりで設備が新しいです。',
      },
      {
        author: 'Y.H',
        rating: 4,
        date: '3週間前',
        text: 'レッスンが30分なので気軽に参加できます。最大8名の少人数制で、インストラクターが丁寧にサポートしてくれます。',
      },
      {
        author: 'S.T',
        rating: 5,
        date: '1ヶ月前',
        text: '荷物も着替えもいらないので、仕事帰りにサッと立ち寄れます。女性専用なので安心して通えます。',
      },
    ],
    price: '月6回 11,000円',
    trial: '体験レッスン 2,200円',
    features: ['女性専用', '天井鏡', 'KONAMI運営', '2025年1月オープン'],
    description: 'コナミスポーツが運営する「もっと鏡が見たくなる」をコンセプトにした新しいピラティススタジオ。2025年1月23日オープン。スタジオの天井に鏡を設置し、自分の身体の動きを確認しながら取り組めます。1レッスン30分で「気軽に」参加でき、音楽をかけながら「楽しく」動く、短時間でも達成感と効果を感じられるレッスン。最大8名の少人数制。女性専用18歳以上対象。',
    access: 'JR山手線、都営三田線・巣鴨駅A2口から徒歩4分',
    address: '東京都豊島区巣鴨1丁目20番11号 Jビル1階',
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
    name: 'CLUB PILATES 巣鴨',
    image: '/images/pilates2.jpg',
    rating: 4.6,
    reviewCount: 142,
    reviews: [
      {
        author: 'L.M',
        rating: 5,
        date: '2週間前',
        text: '世界最大級のピラティススタジオ。初心者から上級者まで4段階のレベル分けがあるので、自分に合ったクラスが選べます。',
      },
      {
        author: 'K.Y',
        rating: 4,
        date: '3週間前',
        text: '最大12名のグループレッスンなので、一人ひとり丁寧に見てもらえます。インストラクターの質が高いです。',
      },
      {
        author: 'M.O',
        rating: 5,
        date: '1ヶ月前',
        text: '巣鴨駅から徒歩5分で通いやすい。3年1ヶ月通っていますが、使う筋肉が多くておもしろいです。',
      },
    ],
    price: '月4回 13,090円〜',
    trial: '体験レッスン 無料（30分）',
    features: ['世界最大級', '4段階レベル分け', '最大12名少人数制', 'プライベートレッスンあり'],
    description: '世界各国で800店舗以上展開している世界最大級のマシンピラティス専門スタジオ。初心者から上級者まで幅広いレベルに対応できる4段階のレベル分けで、未経験でもステップアップしながら通えます。最大12名のグループレッスンを主体とし、インストラクターが会員様を直接フォローしながら進めるため、初心者でも楽しくレッスンを続けられます。',
    access: '巣鴨駅徒歩5分',
    address: '東京都豊島区巣鴨3丁目17-20 シャンブル石山2F',
    popularPlan: {
      name: 'EFT4 MEMBERSHIP（月4回）',
      description: '月4回通えるプラン。ライフバランスも考え、無理なく続けたい方に',
      price: '13,090円/月（税込）+ 入会金5,500円 + 事務手数料2,200円',
    },
    options: [
      'EFT8 MEMBERSHIP（月8回）: 24,090円/月',
      'UNLIMITED MEMBERSHIP（通い放題）: 37,290円/月',
      'プライベートレッスンあり',
      '当日入会で入会金無料キャンペーン',
    ],
    userProfile: {
      ageRange: '30代〜60代まで幅広い',
      genderRatio: '女性70% / 男性30%',
      purpose: ['運動習慣作り', '姿勢改善', '体型維持', '筋力強化'],
    },
    basicInfo: {
      hours: '日7:00-19:30、月8:00-21:00、火〜金7:00-21:00、土7:00-17:30',
      closed: '不定休',
      facilities: ['ロッカー', '更衣室', 'プライベートルーム'],
    },
  },
  {
    name: 'URBAN CLASSIC PILATES 巣鴨',
    image: '/images/pilates3.jpg',
    rating: 4.5,
    reviewCount: 118,
    reviews: [
      {
        author: 'N.K',
        rating: 5,
        date: '1週間前',
        text: '予約がいらず、サーキット形式で自分のタイミングで入れて、30分で終わる！安くて、駅から近くて、短時間で完結するため続けられています。',
      },
      {
        author: 'Y.M',
        rating: 4,
        date: '2週間前',
        text: '巣鴨駅の直上、アトレヴィ巣鴨4階にあるのでアクセスが良い。スタッフの皆さんが姿勢や意識する筋肉をアドバイスしてくださるので効果を実感しやすいです。',
      },
      {
        author: 'S.H',
        rating: 5,
        date: '3週間前',
        text: 'マシンピラティスとTRXを組み合わせたサーキット形式。30分という短時間でも効率的で十分な運動効果を得られます。',
      },
    ],
    price: 'マンスリー4プランあり',
    trial: '体験会あり（要予約）',
    features: ['予約不要', '30分サーキット', '駅徒歩1分', 'マシン×TRX'],
    description: 'マシンピラティスとファンクショナルトレーニング（TRX）を組み合わせた、サーキット形式のボディメイクスタジオ。巣鴨駅徒歩1分、アトレヴィ巣鴨4階の好立地。グループレッスンではなく一人ずつ違う動きを行うため、周りを気にする必要なく運動が久しぶりの方でも気軽に始められます。30分という短時間でも効率的にボディメイク可能。予約不要で通いやすい。',
    access: 'JR線・都営三田線「巣鴨駅」徒歩1分',
    address: '東京都豊島区巣鴨1-16-8 アトレヴィ巣鴨 4F',
    popularPlan: {
      name: 'マンスリー4',
      description: '月4回利用可能（1日1回まで）',
      price: '永久割引価格あり + 施設利用料2,200円',
    },
    options: [
      'マンスリー8（月8回利用可能）',
      'レギュラー（通い放題、1日1回まで）',
      '運営管理費: 480円/月（3ヶ月目以降）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性60% / 男性40%',
      purpose: ['運動不足解消', 'ボディメイク', '姿勢改善', '時短トレーニング'],
    },
    basicInfo: {
      hours: '平日10:00-21:30、土祝10:00-19:30（平日13:00-14:00はメンテナンス）',
      closed: '日曜日',
      facilities: ['ロッカー', '更衣室', 'リフォーマー', 'TRX'],
    },
  },
  {
    name: 'ピラティススタジオゼロ 巣鴨店',
    image: '/images/pilates4.jpg',
    rating: 4.7,
    reviewCount: 86,
    reviews: [
      {
        author: 'A.T',
        rating: 5,
        date: '2週間前',
        text: '90平米の広々とした空間で、パーソナルレッスン専門。地蔵通り商店街にあり、巣鴨駅近で通いやすいです。',
      },
      {
        author: 'K.M',
        rating: 4,
        date: '3週間前',
        text: 'バランスドボディ社製の本格的なマシンを使用。キャデラック、クリニカルリフォーマー、コンボチェアー、コアアラインなど豊富です。',
      },
      {
        author: 'R.S',
        rating: 5,
        date: '1ヶ月前',
        text: 'グループレッスンではなく、パーソナルで一人ひとりに合わせた指導が受けられるのが魅力。体験当日入会で特典あり。',
      },
    ],
    price: '月4回 37,200円〜（パーソナル）',
    trial: '体験レッスンあり',
    features: ['パーソナル専門', '90平米広々', 'バランスドボディ社製マシン', '地蔵通り商店街'],
    description: '巣鴨地蔵通り商店街にあるマシンピラティス・パーソナル専門スタジオ。90平米の広々とした空間で、パーソナルレッスンによるマシンピラティスを行います。バランスドボディ社製の本格的なマシン（キャデラック、クリニカルリフォーマー、コンボチェアー、コアアラインなど）を使用。グループレッスンではなく、一人ひとりに合わせた丁寧な指導が受けられます。',
    access: '巣鴨駅近、地蔵通り商店街',
    address: '東京都豊島区巣鴨（地蔵通り商店街、詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'パーソナルレッスン月4回',
      description: 'マンツーマンで一人ひとりに合わせた指導',
      price: '37,200円/月〜（税込）',
    },
    options: [
      '体験当日入会で体験料・入会金無料',
      '月8回プランあり',
      'チケット制プランあり',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['本格的なピラティス', '身体の不調改善', 'リハビリ', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['キャデラック', 'クリニカルリフォーマー', 'コンボチェアー', 'コアアライン'],
    },
  },
  {
    name: 'COCOLANCE 巣鴨店',
    image: '/images/pilates5.jpg',
    rating: 4.6,
    reviewCount: 72,
    reviews: [
      {
        author: 'M.Y',
        rating: 5,
        date: '1週間前',
        text: '女性専用のパーソナルピラティススタジオ。完全個室のマンツーマンレッスンで、体力や骨格に合わせたオーダーメイドの指導が受けられます。',
      },
      {
        author: 'S.K',
        rating: 4,
        date: '2週間前',
        text: '女性インストラクターが丁寧にサポートしてくれるので、体の不調や姿勢改善を目指せます。自分のペースでエクササイズを行える環境が良いです。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '3週間前',
        text: '完全個室なので周りを気にせず集中できます。リフレッシュ効果も高く、レッスン後は身体が軽くなります。',
      },
    ],
    price: 'パーソナルレッスン（詳細は公式サイト参照）',
    trial: '体験レッスンあり',
    features: ['女性専用', '完全個室', 'パーソナル', 'オーダーメイド指導'],
    description: '女性専用のパーソナルピラティススタジオ。完全個室のマンツーマンレッスンで、体力や骨格に合わせたオーダーメイドのピラティス指導を提供します。女性インストラクターが丁寧にサポートし、体の不調や姿勢改善を目指します。自分のペースでエクササイズを行える環境が整っており、リフレッシュ効果も高いスタジオです。',
    access: '巣鴨駅より徒歩圏内',
    address: '東京都豊島区巣鴨（詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '完全個室マンツーマンレッスン。女性専用で安心',
      price: '詳細は公式サイト参照',
    },
    options: [
      '月4回プラン',
      '月8回プラン',
      'チケット制プラン',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性専用',
      purpose: ['姿勢改善', '体の不調改善', 'ボディメイク', 'リラックス'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['完全個室', 'リフォーマー', '更衣室'],
    },
  },
  {
    name: 'zen place pilates 池袋（近隣エリア）',
    image: '/images/pilates6.jpg',
    rating: 4.6,
    reviewCount: 165,
    reviews: [
      {
        author: 'E.N',
        rating: 5,
        date: '2週間前',
        text: '巣鴨からJR山手線で1駅の池袋駅。全国150店舗相互利用できるので、出張先でも通えて便利です。',
      },
      {
        author: 'T.K',
        rating: 4,
        date: '3週間前',
        text: '少人数制で丁寧に見てもらえます。マットとマシン両方受講できるプランがあるのが良いです。',
      },
      {
        author: 'M.S',
        rating: 5,
        date: '1ヶ月前',
        text: 'ベテランインストラクターが多く、質の高いレッスンが受けられます。男女共用なので家族で通っています。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ['男女共用', '少人数制', '池袋駅近', '全国150店舗相互利用'],
    description: '全国展開の大手ピラティススタジオ。巣鴨から山手線で1駅の池袋駅近。マットグループ、マシン（リフォーマー）グループ、プライベートのレッスンがあり、男性もOK。医療機関も推奨している、大人の方にこそ受けてほしいzen placeのレッスンでいつまでもアクティブに人生を愉しめます。全国150店舗がすべて利用可能。',
    access: '池袋駅より徒歩圏内（巣鴨からJR山手線で1駅）',
    address: '東京都豊島区（池袋エリア、詳細住所は公式サイト参照）',
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
    name: 'the SILK 池袋東口店（近隣エリア）',
    image: '/images/pilates7.jpg',
    rating: 4.5,
    reviewCount: 124,
    reviews: [
      {
        author: 'K.H',
        rating: 5,
        date: '1週間前',
        text: '巣鴨からJR山手線で1駅の池袋駅。女性専用で音楽に合わせて動くので楽しく続けられます。',
      },
      {
        author: 'M.T',
        rating: 4,
        date: '2週間前',
        text: '池袋東口から徒歩1分で通いやすい。PMA加盟団体監修の本格的なレッスンが受けられます。',
      },
      {
        author: 'Y.N',
        rating: 5,
        date: '3週間前',
        text: 'スタイリッシュで清潔感のあるスタジオ。パウダールームも充実していて、仕事帰りに通いやすいです。',
      },
    ],
    price: 'Full 22,280円/月、Standard4 15,280円/月',
    trial: '体験レッスン 無料（期間限定）',
    features: ['女性専用', '音楽×マシン', '池袋東口1分', 'PMA加盟団体監修'],
    description: 'PMA加盟団体監修の本格マシンピラティススタジオ。巣鴨から山手線で1駅、池袋駅東口から徒歩1分の好立地。音楽に合わせて身体を動かす独自のレッスンスタイルで、運動経験を問わず楽しめます。駅チカのスタイリッシュなスタジオで、清潔感と上質な空間を体験できるのも魅力。女性専用で安心して通えます。',
    access: '池袋駅東口41出口より徒歩1分（巣鴨からJR山手線で1駅）',
    address: '東京都豊島区（池袋東口エリア、詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'Standard 4（月4回）',
      description: '毎月1~末日までの間で4回グループレッスン受講可能',
      price: '15,280円/月（税込）',
    },
    options: [
      'Full（毎日1回まで）: 22,280円/月',
      'Full Day（平日昼のみ毎日1回）: 19,280円/月',
      'Light 3（月3回）: 13,280円/月',
      '月額ウェア/タオルレンタル: 2,200円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性専用',
      purpose: ['ボディメイク', '姿勢改善', '運動不足解消', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '年末年始',
      facilities: ['パウダールーム', 'ロッカー', 'ウォーターサーバー', 'リファ'],
    },
  },
]

export default function SugamoAreaPage() {
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
              巣鴨エリアのピラティススタジオ
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              巣鴨駅徒歩1分〜5分の好立地スタジオを中心に、実在する人気ピラティススタジオ7選を厳選してご紹介します
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
                JR山手線・都営三田線 巣鴨駅周辺
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
                月額 11,000円〜
              </span>
            </div>
          </div>

          <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h2 className="text-xl font-semibold text-blue-900 mb-3">巣鴨エリアについて</h2>
            <p className="text-blue-800 leading-relaxed">
              巣鴨駅周辺は「おばあちゃんの原宿」として知られる地蔵通り商店街があり、下町の雰囲気が残る落ち着いたエリアです。駅徒歩1分〜5分の好立地に、コナミスポーツが運営する「ピラティスミラー」（2025年1月オープン）、世界最大級の「CLUB PILATES」、30分サーキットの「URBAN CLASSIC PILATES」など、特色あるスタジオが揃っています。女性専用スタジオやパーソナル専門スタジオも充実。JR山手線・都営三田線の2路線が利用でき、池袋まで1駅とアクセスも良好です。
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-1">
            {studios.map((studio, index) => (
              <StudioCard key={index} studio={studio} rank={index + 1} />
            ))}
          </div>

          <div className="mt-12 p-6 bg-purple-50 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">巣鴨エリアでピラティスを始めよう</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                巣鴨駅周辺は、駅徒歩1分〜5分の好立地に多彩なピラティススタジオが集まっています。2025年1月にオープンしたばかりのコナミスポーツ「ピラティスミラー」、世界800店舗以上展開する「CLUB PILATES」、30分サーキットの「URBAN CLASSIC PILATES」など、それぞれ特色のあるスタジオが選べます。
              </p>
              <h3 className="text-xl font-semibold mb-2">エリアの特徴</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>巣鴨駅：JR山手線・都営三田線の2路線利用可能、池袋まで1駅</li>
                <li>駅徒歩1分〜5分の好立地スタジオが多数</li>
                <li>女性専用スタジオ、パーソナル専門スタジオなど多彩</li>
                <li>2025年1月オープンの最新スタジオあり</li>
                <li>体験レッスン無料〜2,200円で気軽に始められる</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">料金相場</h3>
              <p className="mb-4">
                月4回で11,000円〜37,200円が相場。グループレッスンは月4回11,000円〜15,000円程度、パーソナルレッスンは月4回37,200円〜が目安です。URBAN CLASSIC PILATESは30分サーキット形式で予約不要、ピラティスミラーは月6回11,000円とリーズナブル。体験レッスンは無料〜2,200円で受けられるスタジオが多いので、まずは気軽に体験してみることをおすすめします。
              </p>
              <h3 className="text-xl font-semibold mb-2">アクセス</h3>
              <p>
                巣鴨駅はJR山手線・都営三田線の2路線が利用でき、池袋まで1駅（2分）、新宿まで3駅（7分）と都心部へのアクセスも良好です。各スタジオは駅から徒歩1〜5分の好立地で、仕事帰りや買い物ついでに通いやすい環境です。地蔵通り商店街も近く、レッスン前後の立ち寄りも楽しめます。
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
