import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス荻窪おすすめ7選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
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

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！荻窪エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。zen place pilates 荻窪は10代から80代まで幅広い年齢層が通っており、運動経験のない方でも安心して始められます。まずは体験レッスンで雰囲気を確かめてみましょう。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。荻窪エリアではzen place pilatesがマット・マシン両方のレッスンを提供しています。',
  },
  {
    question: '荻窪のピラティススタジオの料金相場は？',
    answer: '荻窪エリアのピラティススタジオの料金相場は、グループレッスンで月4回10,450円〜11,000円程度。zen place pilatesは月4回10,450円〜、ピラティスミラーは月6回11,000円とリーズナブルです。全国150店舗相互利用できるzen place pilatesなら、荻窪・西荻窪・阿佐ヶ谷・高円寺の各店舗を追加料金なしで使い分けられます。',
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
    answer: '基本的に動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。ピラティスミラー荻窪は荷物も着替えもいらないので手ぶらで通えます。マットやタオルはスタジオでレンタルできることが多いです。詳細は各スタジオの体験レッスン案内で確認してください。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズ。ヨガは柔軟性と精神的なリラックスを重視します。ピラティスは筋力強化、ヨガは心身のバランスを整えることが主な目的。荻窪エリアではMCSpace 西荻窪のようにヨガとピラティス両方が楽しめるスタジオもあります。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。デスクワークが多い方や立ち仕事の方にもおすすめです。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'はい、荻窪エリアではzen place pilates 荻窪をはじめ、zen place pilates 西荻窪・阿佐ヶ谷・高円寺が男女共用で男性も通えます。男女比はおよそ女性70%・男性30%で、夫婦や家族で通っている方も多いです。ピラティスミラー荻窪は女性専用ですのでご注意ください。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスで効果が表れだすのは「2ヶ月を過ぎた頃」から。これは人間の細胞が生まれ変わるサイクルがそのくらいだからです。すぐに変化が表れなくても心配せず、最低でも2ヶ月は継続するのがおすすめです。',
  },
]

export default function OgikuboAreaPage() {
  return (
    <>
      <Navigation />
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

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月09日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス荻窪おすすめ7選！<br className="hidden md:block" />
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
              <span className="text-warm-600">荻窪</span>
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
              「荻窪でピラティスを始めてみたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              「荻窪で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、JR中央線・総武線・東京メトロ丸ノ内線荻窪駅周辺でおすすめのピラティススタジオ7選をまとめました。杉並区の中心に位置し、ラーメンの街としても知られる荻窪エリア。ルミネ荻窪をはじめとする商業施設が充実した便利な街で、2024年に拡張移転やオープンした最新スタジオも含め、厳選してご紹介します。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>荻窪・杉並区エリアでピラティススタジオを探している</span>
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
                  <span>JR中央線・丸ノ内線で通いやすいスタジオがいい</span>
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
              荻窪のおすすめピラティススタジオ7選
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
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額10,450円〜で通えるスタジオ。全国150店舗相互利用で各店舗を追加料金なしで使い分けられます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 荻窪（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• zen place pilates 西荻窪（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• ピラティスミラー 荻窪（月6回 11,000円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間でトレーニング。周りの目を気にせずレッスンに集中できます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスミラー 荻窪（KONAMI運営）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・好アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  JR中央線・総武線・東京メトロ丸ノ内線荻窪駅から徒歩5分以内。仕事帰りやルミネ荻窪での買い物ついでに通いやすい。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 荻窪（駅徒歩5分）</li>
                  <li className="text-warm-700">• emu pilates studio 荻窪店（駅近）</li>
                  <li className="text-warm-700">• ピラティスミラー 荻窪（駅徒歩圏内）</li>
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
                週1-2回（月4-8回）からスタートするのがおすすめ。まずは身体を慣らすことが大切です。継続期間は最低でも2-3ヶ月。zen place pilates 荻窪では10代から80代まで幅広い年齢層が通っているので、どなたでも安心して始められます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回（月8-12回）がおすすめ。しっかりと身体を変えたい方は頻度を上げることで効果も早く現れます。3-6ヶ月継続すると、周りからも「痩せた？」と言われるレベルの変化が期待できます。zen place pilatesのフリープランなら回数無制限で通えます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回（月4回）のペースで継続するのがおすすめ。無理なく長く続けられる頻度が理想です。ピラティスは継続が何より大切。荻窪エリアならJR中央線沿線のスタジオ（西荻窪・阿佐ヶ谷・高円寺）を使い分けることで、スケジュールに合わせて柔軟に通えます。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜11,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4〜6回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。手軽に始めたい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates 荻窪（月4回 10,450円〜）</li>
                  <li>• ピラティスミラー 荻窪（月6回 11,000円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 12,000〜16,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4〜6回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備のグループレッスン。バランスの良いプラン。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place マット&マシン（12,650円〜）</li>
                  <li>• zen place マットグループ月6（14,520円）</li>
                  <li>• zen place リフォーマーグループ（15,400円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 16,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題・プライベート</p>
                <p className="text-sm text-warm-600 mb-4">
                  フリープランやプライベートレッスン。本格的に取り組みたい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place フリープラン（16,940円〜）</li>
                  <li>• zen place プライベート月4（38,280円）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50">
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
                  まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、体幹強化、リラックスなど、目的によって最適なスタジオやプログラムは変わります。荻窪エリアにはマット・マシン両方対応のスタジオから、女性専用の30分レッスンまで多彩な選択肢がありますよ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  荻窪エリアの料金相場はグループで月4回10,450円〜11,000円程度。無理なく継続できる予算を決めましょう。料金だけでなく、入会金、ウェアのレンタル料なども確認を。zen place pilatesは体験当日入会で入会金無料キャンペーンを実施していることもあります。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。荻窪エリアでは1,000円〜2,200円程度で体験レッスンを受けられるスタジオが多いので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。荻窪駅はJR中央線・総武線と東京メトロ丸ノ内線が利用でき、杉並区の中心に位置します。ルミネ荻窪での買い物帰りにも立ち寄りやすいですし、zen place pilatesの全国150店舗相互利用なら、中央線沿線の西荻窪・阿佐ヶ谷・高円寺の各店舗も自由に使い分けられるので、スケジュールに合わせて柔軟に通えますよ。
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
              今回は荻窪のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              荻窪はJR中央線・総武線・東京メトロ丸ノ内線が通る杉並区の中心エリアで、2024年11月に拡張移転した「zen place pilates 荻窪」や、2024年5月にオープンしたコナミスポーツ運営の「ピラティスミラー」など、最新のスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では荻窪エリアのピラティススタジオから厳選した7つだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン1,000円〜2,200円。<br />
              まずは気軽に体験してみましょう。
            </p>
            <Link
              href="#studios"
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
