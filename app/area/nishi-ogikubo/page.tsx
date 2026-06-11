import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'



export const metadata = {
  title: '【2026最新】ピラティス西荻窪おすすめ7選！人気スタジオの料金プランを簡単比較！',
  description: '西荻窪エリアのおすすめピラティススタジオ7選を徹底比較。2026年1月オープンの最新スタジオも。マシンピラティス、セミパーソナル、体験レッスン、料金相場、アクセスまで完全ガイド。',
  keywords: 'ピラティス,西荻窪,東京,杉並区,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 西荻窪',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.7,
    reviewCount: 34,
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
    image: '/images/studios/mapila-nishiogikubo.webp',
    rating: 4.8,
    reviewCount: 5,
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
    name: 'Pilates Mee',
    image: '/images/studios/pilates-mee.webp',
    rating: 4.7,
    reviewCount: 7,
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
    image: '/images/studios/yapf-nishiogikubo.webp',
    rating: 4.6,
    reviewCount: 23,
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
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.7,
    reviewCount: 24,
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
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.7,
    reviewCount: 22,
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

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！西荻窪エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。MCSpaceは初心者向けクラスが充実、zen place pilatesは経験豊富なインストラクターが基礎から丁寧に指導してくれるので、運動が苦手な方でも安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。西荻窪ではマピラ西荻窪店がマシン専門、zen place pilatesはマット・マシン両方に対応しています。',
  },
  {
    question: '西荻窪のピラティススタジオの料金相場は？',
    answer: '西荻窪エリアのピラティススタジオの料金相場は、グループレッスンで月4回9,625円〜10,450円程度。zen place pilates 阿佐ヶ谷（グレード02）なら月4回9,625円とリーズナブル。セミパーソナルのPilates Meeは、パーソナルより手頃でグループより丁寧な指導が受けられるコスパの良い選択肢です。',
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
    answer: '基本的に動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。マットやタオルはスタジオでレンタルできることが多いです。zen place pilatesの体験レッスンは1,000円で手軽に受けられますよ。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズ。ヨガは柔軟性と精神的なリラックスを重視します。西荻窪のMCSpaceではヨガとピラティスの両方が楽しめるので、両方体験してから選ぶのもおすすめですよ。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。特にYAPF（カラダ改善スタジオ）は姿勢不良・痛みの解消に特化しているのでおすすめです。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスで効果が表れだすのは「2ヶ月を過ぎた頃」から。これは人間の細胞が生まれ変わるサイクルがそのくらいだからです。すぐに変化が表れなくても心配せず、最低でも2ヶ月は継続するのがおすすめです。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれ良さがあります。パーソナルは一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方におすすめ。グループは料金が安く、仲間と楽しく続けられるのが魅力。西荻窪ではPilates Meeのセミパーソナル（最大3名）が両方の良さを兼ね備えていて人気ですよ。',
  },
]

export default function NishiOgikuboAreaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '西荻窪', url: 'https://pilates-biyori.com/area/nishi-ogikubo/' },
      ]} />
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
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス西荻窪おすすめ7選！<br className="hidden md:block" />
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
              <span className="text-warm-600">西荻窪</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="西荻窪" />

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
              「西荻窪で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、JR中央線・総武線西荻窪駅周辺と中央線沿線（荻窪・阿佐ヶ谷）のおすすめピラティススタジオ7選をまとめました。杉並区のアンティークの街として知られる西荻窪は、善福寺公園も近く、落ち着いた雰囲気の中で通えるスタジオが揃っています。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>西荻窪でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスやセミパーソナルを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>体験レッスンが安いスタジオを知りたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>JR中央線・総武線で通いやすいスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="西荻窪" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              西荻窪のおすすめピラティススタジオ7選
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
              西荻窪のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">9,625円〜10,450円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 10,450円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">1,000円〜1,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              西荻窪は住宅地としての人気が高く、地元在住の方が徒歩や自転車で通えるスタジオが充実しています。繁華街ほど料金は高くなく、かつ都心へのアクセスも良いバランスの取れたエリアです。平日昼間のクラスは比較的空いていて狙い目です。近隣の荻窪エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              西荻窪でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR中央線・総武線「西荻窪駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  西荻窪エリアのスタジオは西荻窪駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。西荻窪駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">住宅地ならではの予約の特徴を把握</h3>
                <p className="text-warm-600 leading-relaxed">
                  西荻窪は住宅地のため、主婦・ママ層が多い平日午前中と、仕事帰りの平日夜が予約のピークタイムです。土日は意外と空いているスタジオも多いので、狙い目の時間帯を見つけておくと通いやすくなります。子連れOKのクラスがあるスタジオもあるので、お子さまがいる方は確認してみましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  西荻窪エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかを確認しましょう。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  西荻窪エリアだけでなく、近隣の<Link href="/area/ogikubo" className="text-warm-700 underline hover:text-warm-900">荻窪</Link>、<Link href="/area/kichijoji" className="text-warm-700 underline hover:text-warm-900">吉祥寺</Link>、<Link href="/area/asagaya" className="text-warm-700 underline hover:text-warm-900">阿佐ヶ谷</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>西荻窪エリアの豆知識：</strong>西荻窪は地元の方が徒歩や自転車で通うケースが多いエリアです。自転車の方はスタジオ近くの駐輪スペースの有無を確認しておきましょう。近場なら荷物も最小限で済むので、気軽に続けやすいのが西荻窪の良さです。
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
                  月額10,000円台で通えるスタジオ。全国150店舗相互利用できるzen placeなら、中央線沿線の複数店舗を使い分けてお得に通えます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 阿佐ヶ谷（月4回 9,625円〜）</li>
                  <li className="text-warm-700">• zen place pilates 西荻窪（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• zen place pilates 荻窪（月4回 10,450円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">マシン完備</h3>
                <p className="text-warm-600 text-sm mb-4">
                  リフォーマーマシンを完備。マシンピラティスを本格的に学びたい方におすすめ。2026年1月オープンの最新スタジオも。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• マピラ西荻窪店（マシン専門・駅徒歩1分）</li>
                  <li className="text-warm-700">• zen place pilates 西荻窪</li>
                  <li className="text-warm-700">• Pilates Mee（セミパーソナル）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・好アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  西荻窪駅から徒歩3分以内。JR中央線・総武線利用で、仕事帰りや休日にも通いやすい。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• マピラ西荻窪店（駅徒歩1分）</li>
                  <li className="text-warm-700">• YAPF（駅徒歩1分）</li>
                  <li className="text-warm-700">• zen place pilates 西荻窪（駅徒歩3分）</li>
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
                週1-2回（月4-8回）からスタートするのがおすすめ。まずは身体を慣らすことが大切です。継続期間は最低でも2-3ヶ月。この期間で効果を実感できる方が多いですよ。西荻窪ではMCSpaceの初心者向けクラスが充実しています。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回（月8-12回）がおすすめ。しっかりと身体を変えたい方は頻度を上げることで効果も早く現れます。3-6ヶ月継続すると、周りからも「痩せた？」と言われるレベルの変化が期待できます。zen place pilatesのフリープラン（回数無制限）なら毎日でも通えます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回（月4回）のペースで継続するのがおすすめ。無理なく長く続けられる頻度が理想です。ピラティスは継続が何より大切。善福寺公園の散歩と組み合わせて、自分のペースで楽しく通えるのが一番ですよ。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。手軽に始めたい方向け。中央線沿線スタジオを活用。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place 阿佐ヶ谷（9,625円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜16,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マット・マシン完備の大手スタジオ。グループ・セミパーソナル対応。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place 西荻窪（10,450円〜）</li>
                  <li>• zen place 荻窪（10,450円〜）</li>
                  <li>• リフォーマーグループ（15,400円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 30,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全パーソナルレッスン。短期集中で結果を出したい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place プライベート月4（33,880円〜）</li>
                  <li>• YAPF パーソナルセッション</li>
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
                  まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、体幹強化、リラックスなど、目的によって最適なスタジオやプログラムは変わります。西荻窪にはマシン専門のマピラ、カラダ改善専門のYAPF、セミパーソナルのPilates Meeなど個性的なスタジオが揃っているので、目的が明確だとスタジオ選びもスムーズになりますよ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  西荻窪エリアの料金相場はグループで月4回9,625円〜10,450円程度。無理なく継続できる予算を決めましょう。料金だけでなく、入会金、マット・ウェアのレンタル料なども確認を。zen place pilatesなら全国150店舗相互利用できるので、西荻窪・荻窪・阿佐ヶ谷の各店舗を追加料金なしで使い分けられるのもお得なポイントです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。zen place pilatesは体験レッスン1,000円、マピラ西荻窪店も体験レッスンありなので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。西荻窪はJR中央線・総武線の各駅停車駅で、杉並区のアンティークの街として知られています。マピラ西荻窪店とYAPFは駅徒歩1分、zen place pilatesは駅徒歩3分と好立地。善福寺公園も近く、レッスン後の散歩もおすすめ。中央線沿線の荻窪（1駅）・阿佐ヶ谷（2駅）のスタジオも合わせて検討すると選択肢が広がりますよ。
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
              今回は西荻窪のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              杉並区のアンティークの街・西荻窪は、善福寺公園も近く落ち着いた雰囲気の中でピラティスを楽しめるエリアです。2026年1月オープンのマピラ西荻窪店や、全国150店舗相互利用できるzen place pilatesなど、個性的なスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では西荻窪エリアのピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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

      <RelatedAreas currentSlug="nishi-ogikubo" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
