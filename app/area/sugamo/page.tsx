import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { AreaMarketComparison } from '@/components/AreaMarketComparison'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'



export const metadata = {
  title: '【2026年6月最新】ピラティス巣鴨おすすめ7選！料金・体験レッスン・マシン対応を比較！',
  description: '巣鴨エリアのおすすめピラティススタジオ7選を徹底比較。駅徒歩1分の好立地スタジオ多数。マシンピラティス、体験レッスン、料金相場、アクセスまで完全ガイド。',
  keywords: 'ピラティス,巣鴨,東京,豊島区,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスミラー 巣鴨',
    image: '/images/studios/pilates-mirror.webp',
    rating: 4.7,
    reviewCount: 19,
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
    image: '/images/studios/club-pilates.webp',
    rating: 4.6,
    reviewCount: 52,
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
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11337L.1.X156352B.U1357808',
    image: '/images/studios/urban-classic-pilates.webp',
    rating: 4.5,
    reviewCount: 274,
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
    image: '/images/studios/pilates-zero-sugamo.webp',
    rating: 4.7,
    reviewCount: 27,
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
    image: '/images/studios/cocolance-sugamo.webp',
    rating: 4.6,
    reviewCount: 14,
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
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.6,
    reviewCount: 30,
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
    image: '/images/studios/the-silk.webp',
    rating: 4.5,
    reviewCount: 234,
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

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！巣鴨エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。CLUB PILATESは4段階のレベル分け、ピラティスミラーは30分の短時間レッスンなど、未経験でも安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。巣鴨エリアではマシンピラティスを導入しているスタジオが多いです。',
  },
  {
    question: '巣鴨のピラティススタジオの料金相場は？',
    answer: '巣鴨エリアのピラティススタジオの料金相場は、グループレッスンで月4回11,000円〜15,000円程度。パーソナルレッスンは月4回37,200円〜が目安です。ピラティスミラーは月6回11,000円とリーズナブル。体験レッスンは無料〜2,200円で受けられます。',
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
    answer: '基本的に動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。ピラティスミラーは荷物・着替え不要で手ぶらOK。マットやタオルはスタジオでレンタルできることが多いです。詳細は各スタジオの体験レッスン案内で確認してくださいね。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズ。ヨガは柔軟性と精神的なリラックスを重視します。ピラティスは筋力強化、ヨガは心身のバランスを整えることが主な目的。どちらも素晴らしいエクササイズなので、目的に合わせて選びましょう。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。巣鴨エリアにはパーソナル専門のスタジオもあり、一人ひとりの症状に合わせた指導を受けられます。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスで効果が表れだすのは「2ヶ月を過ぎた頃」から。これは人間の細胞が生まれ変わるサイクルがそのくらいだからです。すぐに変化が表れなくても心配せず、最低でも2ヶ月は継続するのがおすすめです。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれ良さがあります。パーソナルは一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方におすすめ。グループは料金が安く、仲間と楽しく続けられるのが魅力。巣鴨にはパーソナル専門スタジオも複数あるので、まずは体験で両方試してみるのがいいですよ。',
  },
]

export default function SugamoAreaPage() {
  return (
    <>
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
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '巣鴨', url: 'https://pilates-biyori.com/area/sugamo/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス巣鴨おすすめ7選！<br className="hidden md:block" />
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
              <span className="text-warm-600">巣鴨</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="巣鴨" studioNames={studios.map((s) => s.name)} />

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
              「巣鴨で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、JR山手線・都営三田線巣鴨駅周辺（豊島区）でおすすめのピラティススタジオ7選をまとめました。「おばあちゃんの原宿」として親しまれる巣鴨地蔵通り商店街のある落ち着いたエリアで、駅徒歩1分〜5分の好立地スタジオが揃っています。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>巣鴨でピラティススタジオを探している</span>
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
                  <span>JR山手線・都営三田線で通いやすいスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="巣鴨" />
        <AreaMarketComparison studios={studios} areaName="巣鴨" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              巣鴨のおすすめピラティススタジオ7選
            </h2>
            <div className="space-y-8">
              {studios.map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>


        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              巣鴨のピラティス料金相場【2026年4月最新】
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-warm-800 text-white">
                    <th className="px-4 py-3 text-left">種別</th>
                    <th className="px-4 py-3 text-left">料金相場</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">グループレッスン（月4回）</td>
                    <td className="px-4 py-3">2,200円〜37,200円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 2,200円〜37,200円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜2,200円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              巣鴨は商業施設やオフィスが集まる繁華街エリアのため、駅近の好立地スタジオが多く、やや高めの料金設定が目立ちます。一方で大手チェーンの進出も多いため、キャンペーンや月額通い放題プランを上手に活用すれば、実質的なコストを抑えることも可能です。近隣の池袋エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              巣鴨でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR山手線「JR山手線、都営三田線・巣鴨駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  巣鴨エリアのスタジオはJR山手線、都営三田線・巣鴨駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。JR山手線、都営三田線・巣鴨駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">繁華街ならではの予約混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  巣鴨は人が集まる繁華街のため、平日夜（18時〜21時）と土日午前中はレッスン予約が特に集中します。人気クラスは1週間以上前に満席になることも。アプリやWebで空き状況をこまめにチェックし、キャンセル待ち機能があるスタジオでは積極的に活用しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  巣鴨エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ず確認しましょう。月の途中入会は日割り計算になるかも要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  巣鴨エリアだけでなく、近隣の<Link href="/area/ikebukuro" className="text-warm-700 underline hover:text-warm-900">池袋</Link>、<Link href="/area/otsuka" className="text-warm-700 underline hover:text-warm-900">大塚</Link>、<Link href="/area/korakuen" className="text-warm-700 underline hover:text-warm-900">後楽園</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trial Lesson Guide */}
        <section className="py-16 bg-white" id="trial-guide">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              体験レッスン当日の持ち物・服装ガイド
            </h2>
            <div className="bg-warm-50 rounded-lg p-8 border border-warm-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。ジーンズやスカートはNG。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：レッスン中の水分補給に。自販機がないスタジオもあるため持参が安心。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。マシンに敷くタオルはスタジオで用意されることが多い。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは靴下着用が必須のスタジオが多数。グリップソックスがベスト。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。ピラティスは脚を大きく動かすポーズが多いため、ストレッチの効く素材が必須です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>の方が、インストラクターがフォームを確認しやすく、効果的な指導を受けられます。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオも。手ぶらで体験可能な場合もあるので事前に確認しましょう。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。マシンに引っかかる恐れがあるため、ピアス・ネックレス・腕時計はロッカーに預けるのが安全です。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>巣鴨エリアの豆知識：</strong>巣鴨は仕事帰りに立ち寄る方が多いエリアです。荷物が多くなりがちなので、ロッカーの広さやシャワー設備の有無を事前に確認しておくと安心。ウェアレンタルがあるスタジオなら手ぶらで通えて便利です。
                </p>
              </div>
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
                  月額15,000円以下で通えるスタジオ。体験レッスン無料のスタジオもあり、コスパ重視の方におすすめ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスミラー 巣鴨（月6回 11,000円）</li>
                  <li className="text-warm-700">• zen place pilates 池袋（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• CLUB PILATES 巣鴨（月4回 13,090円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間。周りを気にせずトレーニングに集中したい方におすすめ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスミラー 巣鴨</li>
                  <li className="text-warm-700">• COCOLANCE 巣鴨店</li>
                  <li className="text-warm-700">• the SILK 池袋東口店</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・好アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  巣鴨駅から徒歩5分以内。JR山手線・都営三田線利用で、仕事帰りや休日にも通いやすい。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• URBAN CLASSIC PILATES 巣鴨（駅徒歩1分）</li>
                  <li className="text-warm-700">• ピラティスミラー 巣鴨（駅徒歩4分）</li>
                  <li className="text-warm-700">• CLUB PILATES 巣鴨（駅徒歩5分）</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4〜6回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。手軽に始めたい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスミラー（月6回 11,000円）</li>
                  <li>• CLUB PILATES（月4回 13,090円〜）</li>
                  <li>• zen place pilates（月4回 10,450円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 15,000〜25,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオ。グループ・プライベート選択可。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• the SILK 池袋東口（15,280円〜）</li>
                  <li>• CLUB PILATES 月8回（24,090円）</li>
                  <li>• URBAN CLASSIC PILATES</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 30,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全パーソナルレッスン。短期集中で結果を出したい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティススタジオゼロ（37,200円〜）</li>
                  <li>• zen place プライベート（38,280円）</li>
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
                  巣鴨エリアの料金相場はグループで月4回11,000円〜15,000円程度、パーソナルは月4回37,200円〜。無理なく継続できる予算を決めましょう。料金だけでなく、入会金、マット・ウェアのレンタル料なども確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。CLUB PILATESは無料体験、ピラティスミラーは2,200円で体験レッスンを提供しているので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。巣鴨はJR山手線と都営三田線の2路線が利用でき、豊島区の落ち着いたエリアです。駅から近いスタジオを選ぶと、仕事帰りや休日のお出かけついでにも通えて便利ですよ。巣鴨地蔵通り商店街も近く、レッスン後の散策も楽しめます。
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
              今回は巣鴨のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では巣鴨に数多くあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜2,200円。<br />
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

      <RelatedAreas currentSlug="sugamo" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
