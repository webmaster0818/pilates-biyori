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
  title: '【2026最新】ピラティス浅草おすすめ7選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '浅草エリアのおすすめピラティススタジオ7選を徹底比較。スカイツリーを見ながらピラティス、世界最大級のマシンピラティスなど。体験レッスン、料金相場、アクセスまで完全ガイド。',
  keywords: 'ピラティス,浅草,東京,台東区,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 浅草',
    image: '/images/studios/zen-place-pilates.webp',
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
    image: '/images/studios/club-pilates.webp',
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
    image: '/images/studios/yoga-makoto-asakusabashi.webp',
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
    image: '/images/studios/yard.webp',
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
    image: '/images/studios/element.webp',
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
    image: '/images/studios/zen-place-pilates.webp',
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
    image: '/images/studios/zen-place-pilates.webp',
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

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！浅草エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。YARDは会員の7割が初心者ですし、CLUB PILATESも運動習慣がない方を歓迎しています。経験豊富なインストラクターが基礎から丁寧に指導してくれるので、運動が苦手な方でも安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。浅草エリアではCLUB PILATESがマシン専門、zen place pilatesはマット・マシン両方に対応しています。',
  },
  {
    question: '浅草のピラティススタジオの料金相場は？',
    answer: '浅草エリアのピラティススタジオの料金相場は、グループレッスンで月4回10,450円〜13,090円程度。zen place pilates 浅草が月4回10,450円〜、CLUB PILATES 浅草吾妻橋店が月4回13,090円です。パーソナルレッスンはELEMENTなどで受けられます。体験レッスンは1,000円前後のスタジオが多いです。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: 'ピラティス初心者は週1-2回（月4-8回）がおすすめ。慣れてきたら週2-3回に増やすと効果を実感しやすくなります。大切なのは継続すること。無理のないペースで長く続けることが、理想の身体を手に入れる近道です。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、ピラティスはダイエット効果があります。インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に。ただし即効性はないので、最低でも2-3ヶ月は継続することが大切。食事管理も並行するとより効果的です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '基本的に動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。マットやタオルはスタジオでレンタルできることが多いです。詳細は各スタジオの体験レッスン案内で確認してくださいね。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズ。ヨガは柔軟性と精神的なリラックスを重視します。浅草エリアではヨガ&ピラティススタジオMAKOTOやYARDのように両方楽しめるスタジオもあるので、目的に合わせて選びましょう。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。デスクワークが多い方や立ち仕事の方にもおすすめです。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスで効果が表れだすのは「2ヶ月を過ぎた頃」から。これは人間の細胞が生まれ変わるサイクルがそのくらいだからです。すぐに変化が表れなくても心配せず、最低でも2ヶ月は継続するのがおすすめです。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれ良さがあります。パーソナルは一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方におすすめ。浅草エリアではELEMENTが完全個室パーソナルを提供しています。グループは料金が安く、仲間と楽しく続けられるのが魅力。まずは体験で両方試してみるのがいいですよ。',
  },
]

export default function AsakusaAreaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月09日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス浅草おすすめ7選！<br className="hidden md:block" />
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
              <span className="text-warm-600">浅草</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="浅草" />

        <PriceComparisonTable studios={studios} areaName="浅草" />

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
              「浅草で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、浅草エリアでおすすめのピラティススタジオ7選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>浅草・台東区エリアでピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>体験レッスンが安いスタジオを知りたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>東京メトロ銀座線・都営浅草線・つくばエクスプレスで通いやすいスタジオがいい</span>
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
              浅草のおすすめピラティススタジオ7選
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
                  月額10,450円から通えるスタジオ。グループレッスンやヨガ併設スタジオなど、コスパ重視の方におすすめ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 浅草（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• YARD（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• zen place pilates 上野（月4回 10,450円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">マシン完備</h3>
                <p className="text-warm-600 text-sm mb-4">
                  リフォーマーなどのマシンを完備。マシンピラティスを本格的に学びたい方におすすめ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• CLUB PILATES 浅草吾妻橋店（マシン専門）</li>
                  <li className="text-warm-700">• zen place pilates 浅草</li>
                  <li className="text-warm-700">• ELEMENT（完全個室マシン）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・好アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  浅草駅から徒歩圏内。東京メトロ銀座線・都営浅草線・つくばエクスプレス利用で通いやすい。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ヨガ&ピラティススタジオMAKOTO（駅徒歩1分）</li>
                  <li className="text-warm-700">• zen place pilates 浅草（駅徒歩圏内）</li>
                  <li className="text-warm-700">• CLUB PILATES 浅草吾妻橋店（駅徒歩圏内）</li>
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
                週1-2回（月4-8回）からスタートするのがおすすめ。まずは身体を慣らすことが大切です。継続期間は最低でも2-3ヶ月。この期間で効果を実感できる方が多いですよ。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回（月8-12回）がおすすめ。しっかりと身体を変えたい方は頻度を上げることで効果も早く現れます。3-6ヶ月継続すると、周りからも「痩せた？」と言われるレベルの変化が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回（月4回）のペースで継続するのがおすすめ。無理なく長く続けられる頻度が理想です。ピラティスは継続が何より大切。自分のペースで楽しく通えるのが一番ですよ。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜11,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。ヨガ併設スタジオや全国展開の大手で手軽に始められる。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates 浅草（10,450円〜）</li>
                  <li>• YARD（10,450円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 11,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオ。世界最大級のマシン専門スタジオも。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• CLUB PILATES 浅草吾妻橋（13,090円）</li>
                  <li>• zen place リフォーマーグループ（15,400円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 20,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全パーソナルレッスン。短期集中で結果を出したい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ELEMENT（完全個室パーソナル）</li>
                  <li>• zen place プライベート月4（38,280円）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              失敗しないピラティススタジオの選び方
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、体幹強化、リラックスなど、目的によって最適なスタジオやプログラムは変わります。目的が明確だとスタジオ選びもスムーズになりますよ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  浅草エリアの料金相場はグループで月4回10,450円〜13,090円程度。無理なく継続できる予算を決めましょう。料金だけでなく、入会金、マット・ウェアのレンタル料なども確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。多くのスタジオが無料〜1,000円程度で体験レッスンを提供しているので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。浅草駅は東京メトロ銀座線・都営浅草線、つくばエクスプレスと複数路線が利用でき、台東区の観光エリアの中心です。駅から近いスタジオを選ぶと、仕事帰りや休日のお出かけついでにも通えて便利ですよ。雷門や浅草寺の近くで、レッスン後の散策も楽しめます。
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
              今回は浅草のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では浅草に数多くあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン1,000円〜。<br />
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

      <RelatedAreas currentSlug="asakusa" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
