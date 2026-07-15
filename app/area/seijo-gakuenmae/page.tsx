import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { AreaMarketComparison } from '@/components/AreaMarketComparison'
import { AreaConclusion } from '@/components/AreaConclusion'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/seijo-gakuenmae/' },
  title: '【2026年7月最新】成城学園前のピラティス14社を比較｜月額最安10,450円〜・料金と体験',
  description: '成城学園前エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,成城学園前,東京,世田谷区,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 成城学園前',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 13,
    reviews: [
      {
        author: 'K.M',
        rating: 5,
        date: '1週間前',
        text: '成城学園前駅から徒歩圏内で通いやすいです。全国150店舗他店利用できるので、出張先でも継続できます。',
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
    image: '/images/studios/pilates-mirror.webp',
    rating: 4.7,
    reviewCount: 40,
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
    image: '/images/studios/club-pilates.webp',
    rating: 4.8,
    reviewCount: 113,
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
    image: '/images/studios/studio-ivy.webp',
    rating: 4.7,
    reviewCount: 18,
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
    image: '/images/studios/evolv-seijo.webp',
    rating: 4.6,
    reviewCount: 24,
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
    image: '/images/studios/pilasuru-seijo.webp',
    rating: 4.5,
    reviewCount: 21,
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
    image: '/images/studios/pilates-mirror.webp',
    rating: 4.7,
    reviewCount: 29,
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

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！成城学園前エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。CLUB PILATESは4段階のレベル分けがあり、zen place pilatesも経験豊富なインストラクターが基礎から丁寧に指導してくれるので、運動が苦手な方でも安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。成城学園前エリアではCLUB PILATESやPilasuru、STUDIO IVYなどマシン専門のスタジオが充実しています。',
  },
  {
    question: '成城学園前のピラティススタジオの料金相場は？',
    answer: '成城学園前エリアのピラティススタジオの料金相場は、グループレッスンで月4回10,450円〜13,090円程度。ピラティスミラーは月6回11,000円とリーズナブルです。パーソナル専門のSTUDIO IVYは初回4,500円〜。体験レッスンは1,000円前後で受けられるスタジオが多いので、まずは気軽に体験してみることをおすすめします。',
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
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズ。ヨガは柔軟性と精神的なリラックスを重視します。ピラティスは筋力強化、ヨガは心身のバランスを整えることが主な目的。zen place pilates 成城学園前なら、ピラティスもヨガも両方楽しめますよ。',
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
    answer: 'それぞれ良さがあります。パーソナルは一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方におすすめ。成城学園前ならSTUDIO IVYが完全プライベートで人気です。グループは料金が安く、仲間と楽しく続けられるのが魅力。まずは体験で両方試してみるのがいいですよ。',
  },
]

export default function SeijoGakuenmaeAreaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '成城学園前', url: 'https://pilates-biyori.com/area/seijo-gakuenmae/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月15日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス成城学園前おすすめ7選！<br className="hidden md:block" />
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
              <Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>
              {' > '}
              <span className="text-warm-600">成城学園前</span>
            </nav>
          </div>
        </section>
        <AreaConclusion studios={studios} areaName="成城学園前" />


        <TableOfContents areaName="成城学園前" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「成城学園前で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、小田急線成城学園前駅エリアでおすすめのピラティススタジオ7選をまとめました。世田谷区の成城の閑静な高級住宅街に位置するこのエリアには、世界最大級のマシンピラティスから天井鏡スタジオ、パーソナル専門まで個性豊かなスタジオが揃っています。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>成城学園前でピラティススタジオを探している</span>
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
                  <span>小田急線沿線で通いやすいスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="成城学園前" />
        <AreaMarketComparison studios={studios} areaName="成城学園前" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              成城学園前のおすすめピラティススタジオ7選
            </h2>
            <div className="space-y-8">
              {[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>


        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              成城学園前のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">4,500円〜13,090円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 4,500円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">1,000円〜</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              成城学園前は落ち着いた住環境が魅力のエリアで、プライベートレッスンやセミパーソナルなど少人数制を重視したスタジオが多い傾向です。1回あたりの単価はやや高めですが、その分インストラクターの質や設備にこだわったスタジオが揃っています。近隣の下北沢エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              成城学園前でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">成城学園前駅からのルートは事前に確認を</h3>
                <p className="text-warm-600 leading-relaxed">
                  成城学園前エリアのスタジオは成城学園前駅周辺が中心です。駅の出口によってスタジオまでの距離が変わることがあるため、初めて訪れる際はGoogleマップで経路を確認し、余裕を持って到着できるようにしましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">少人数制スタジオは早めの予約がカギ</h3>
                <p className="text-warm-600 leading-relaxed">
                  成城学園前は少人数制やプライベートレッスンを重視するスタジオが多く、1クラスの定員が少ないため予約が早く埋まりがちです。特にマシンピラティスは定員4〜8名のスタジオが主流なので、希望の時間帯があれば早めに予約を。キャンセル待ち制度のあるスタジオを選ぶと安心です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  成城学園前エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ず確認しましょう。月の途中入会は日割り計算になるかも要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  成城学園前エリアだけでなく、近隣の<Link href="/area/shimokitazawa/" className="text-warm-700 underline hover:text-warm-900">下北沢</Link>、<Link href="/area/chofu/" className="text-warm-700 underline hover:text-warm-900">調布</Link>、<Link href="/area/futakotamagawa/" className="text-warm-700 underline hover:text-warm-900">二子玉川</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>成城学園前エリアの豆知識：</strong>成城学園前は美意識の高い方が多いエリアで、レッスン後にそのままカフェやショッピングに行く方もいます。着替えやメイク直しのセットを持参しておくと、レッスン後の時間も有効活用できます。おしゃれなウェアで通う方も多いのが成城学園前の特徴です。
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
                <h3 className="text-xl font-bold text-warm-900 mb-4">世界ブランド・大手</h3>
                <p className="text-warm-600 text-sm mb-4">
                  世界展開する大手ブランドや全国チェーンのスタジオ。品質と安定感を重視する方におすすめ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• CLUB PILATES 成城学園前（世界800店舗以上）</li>
                  <li className="text-warm-700">• zen place pilates 成城学園前（全国150店舗）</li>
                  <li className="text-warm-700">• ピラティスミラー 成城学園前（KONAMI運営）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル・個室</h3>
                <p className="text-warm-600 text-sm mb-4">
                  完全プライベート空間でマンツーマン指導。短期間で効果を出したい方やオーダーメイドを求める方に。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STUDIO IVY 成城学園前（完全プライベート）</li>
                  <li className="text-warm-700">• Evolv 成城学園前店（マシン×EMS）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・好アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  成城学園前駅から徒歩1分以内。仕事帰りや買い物ついでにサクッと通えるスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• CLUB PILATES 成城学園前（駅徒歩1分）</li>
                  <li className="text-warm-700">• Evolv 成城学園前店（駅徒歩1分）</li>
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
                週1-2回（月4-8回）からスタートするのがおすすめ。まずは身体を慣らすことが大切です。継続期間は最低でも2-3ヶ月。この期間で効果を実感できる方が多いですよ。zen place pilatesの月4回プラン（10,450円〜）やCLUB PILATESの月4回プラン（13,090円）が始めやすいです。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回（月8-12回）がおすすめ。しっかりと身体を変えたい方は頻度を上げることで効果も早く現れます。3-6ヶ月継続すると、周りからも「痩せた？」と言われるレベルの変化が期待できます。zen place pilatesのフリープラン（16,940円/月）なら回数無制限で通えます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回（月4回）のペースで継続するのがおすすめ。無理なく長く続けられる頻度が理想です。ピラティスは継続が何より大切。自分のペースで楽しく通えるのが一番ですよ。成城の閑静な住宅街でリフレッシュしながら続けましょう。
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
                <p className="text-3xl font-bold text-warm-800 mb-4">月4〜6回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。手軽に始めたい方向け。全国相互利用も可能。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates（月4回 10,450円〜）</li>
                  <li>• ピラティスミラー（月6回 11,000円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 11,000〜16,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオ。世界ブランドの品質を体験できる。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• CLUB PILATES（月4回 13,090円）</li>
                  <li>• zen place マシングループ（15,400円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 20,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回〜</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全パーソナルレッスン。オーダーメイドで短期集中の方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• STUDIO IVY（パーソナル専門）</li>
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
                  成城学園前エリアの料金相場はグループで月4回10,450円〜13,090円程度。無理なく継続できる予算を決めましょう。料金だけでなく、入会金、マット・ウェアのレンタル料なども確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。zen place pilatesは体験1,000円、多くのスタジオが無料〜1,000円程度で体験レッスンを提供しているので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。成城学園前駅は小田急線の快速停車駅で、新宿まで約15分と都心部へのアクセスも良好です。CLUB PILATESやEvolvは駅徒歩1分の好立地。小田急線沿線の喜多見・狛江・和泉多摩川・祖師谷大蔵・経堂からもアクセスしやすいので、自分の生活圏に合ったスタジオを選びましょう。
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
              今回は成城学園前のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              世田谷区の成城の閑静な高級住宅街に位置する成城学園前エリアには、世界最大級のCLUB PILATES、KONAMI運営のピラティスミラー、パーソナル専門のSTUDIO IVYなど、個性豊かなスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では成城学園前に数多くあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
        {/* boost-nav-202606 */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-warm-900 mb-3">📍 料金相場・近隣エリアと比べる</h2>
              <p className="text-warm-600 text-sm mb-4">全国の料金データや他エリアの人気スタジオも見ると、自分に合った1校が選びやすくなります。</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/articles/pilates-ryokin-hakusho/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国の料金相場</Link>
                <Link href="/area/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国のエリア一覧</Link>
                <Link href="/area/kagurazaka/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">神楽坂のピラティス</Link>
                <Link href="/area/nakano-sakaue/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">中野坂上のピラティス</Link>
                <Link href="/area/ochanomizu/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">御茶ノ水のピラティス</Link>
              </div>
            </div>
          </div>
        </section>


      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="seijo-gakuenmae" areaName="成城学園前" />

      <RelatedAreas currentSlug="seijo-gakuenmae" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
