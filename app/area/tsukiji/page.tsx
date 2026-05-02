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
  title: '【2026最新】ピラティス築地おすすめ6選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '築地エリアのおすすめピラティススタジオ6選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,築地,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,新富町,東銀座',
}

const studios = [
  {
    name: 'zen place pilates 銀座四丁目スタジオ',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 26,
    reviews: [
      {
        author: 'K.T',
        rating: 5,
        date: '1週間前',
        text: '東銀座駅5番出口から徒歩1分。築地駅からも徒歩圏内でアクセス抜群。マットもマシンも両方受けられるのが魅力。全国150店舗以上で相互利用可能。',
      },
      {
        author: 'M.S',
        rating: 5,
        date: '2週間前',
        text: '男性もOKでカップルで通っています。インストラクターの質が高く、ピラティス専門で20年以上の実績がある大手スタジオ。',
      },
      {
        author: 'A.Y',
        rating: 4,
        date: '3週間前',
        text: '体験当日入会で入会金無料キャンペーンあり。グループ体験1,000円で気軽に試せました。朝10時から夜21時まで営業で通いやすい。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['東銀座駅徒歩1分', '男性OK', '全国相互利用', 'マット&マシン'],
    description: 'ピラティス専門の大手スタジオ。東銀座駅5番出口から徒歩1分、築地駅からも徒歩5分。マットグループ・マシングループ・プライベートの3タイプのレッスンを提供。全国150店舗以上で相互利用可能で、出張先でも通えます。',
    access: '東京メトロ日比谷線「東銀座駅」5番出口 徒歩1分 / 日比谷線「築地駅」徒歩5分',
    address: '東京都中央区銀座4-14-6 平田ビル5F',
    popularPlan: {
      name: 'フリープラン（マットグループ）',
      description: 'マットグループレッスン通い放題。全国店舗で相互利用可能。',
      price: '月額 16,940円（税込）',
    },
    options: [
      '月4回プラン（10,450円〜）',
      'マシングループ月4回（14,520円）',
      'プライベートレッスン（体験 9,900円）',
      '体験当日入会で入会金無料',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 10:00〜21:00 / 土日祝 9:00〜18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'ラダーバレル', 'マット', 'ロッカー'],
    },
  },
  {
    name: 'Pilates Mee 築地店',
    image: '/images/studios/pilates-mee.webp',
    rating: 4.7,
    reviewCount: 7,
    reviews: [
      {
        author: 'S.N',
        rating: 5,
        date: '1週間前',
        text: '築地駅から徒歩3分。最大3名のセミパーソナルで一人ひとりに合わせた指導が受けられる。女性専用で安心して通えます。',
      },
      {
        author: 'Y.H',
        rating: 5,
        date: '2週間前',
        text: '通い放題で月額37,500円。毎日通えば1回1,250円程度とコスパ抜群。当日予約・当日キャンセルOKでペナルティなし。',
      },
      {
        author: 'R.T',
        rating: 4,
        date: '3週間前',
        text: 'オーダーメイドプログラムで自分の目標に合わせてもらえる。リフォーマー、チェア、バレルなど多彩なマシンを使ったレッスン。',
      },
    ],
    price: '月4回 13,200円〜',
    trial: '体験レッスン 3,300円',
    features: ['女性専用', '築地駅徒歩3分', 'セミパーソナル', '当日予約OK'],
    description: '女性専用マシンピラティススタジオ。築地駅から徒歩3分、新富町駅から徒歩7分。最大3名までのセミパーソナル形式で、各個人の目標に合わせたオーダーメイドプログラムが特徴。当日予約・当日キャンセルOKで通いやすい。',
    access: '東京メトロ日比谷線「築地駅」徒歩3分 / 有楽町線「新富町駅」徒歩7分',
    address: '東京都中央区築地エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'セミパーソナル通い放題',
      description: '最大3名のセミパーソナルレッスンが通い放題。毎日通えば1回1,250円〜。',
      price: '月額 37,500円（税込）',
    },
    options: [
      '月4回プラン（13,200円〜）',
      '月8回プラン',
      '通い放題プラン（37,500円）',
      '体験レッスン 3,300円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '体幹強化'],
    },
    basicInfo: {
      hours: '予約制（公式サイトでご確認ください）',
      closed: '不定休',
      facilities: ['リフォーマー', 'チェア', 'バレル', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Pilasuru 東銀座',
    image: '/images/studios/pilasuru-seijo.webp',
    rating: 4.7,
    reviewCount: 13,
    reviews: [
      {
        author: 'E.M',
        rating: 5,
        date: '1週間前',
        text: '築地駅2番出口から徒歩2分。1レッスンで3つのマシン（リフォーマー・バレル・チェア）を体験できるのが他にない魅力。',
      },
      {
        author: 'N.K',
        rating: 5,
        date: '2週間前',
        text: '最大3名のセミパーソナルで丁寧に指導してもらえる。女性専用で50名限定の会員制なので、レッスン予約も取りやすい。',
      },
      {
        author: 'C.O',
        rating: 4,
        date: '3週間前',
        text: 'セミパーソナル通い放題があるのでコスパが良い。不定期コースもあり、ライフスタイルに合わせやすい。',
      },
    ],
    price: 'セミパーソナル通い放題あり',
    trial: '体験レッスンあり',
    features: ['女性専用', '築地駅徒歩2分', '50名限定', '3マシン体験'],
    description: '女性専用のセミパーソナルピラティススタジオ。築地駅2番出口から徒歩2分。各スタジオ50名限定の会員制で、1レッスンでリフォーマー・バレル・チェアの3つのマシンを体験できるのが特徴。セミパーソナル（最大3名）通い放題プランあり。',
    access: '東京メトロ日比谷線「築地駅」2番出口 徒歩2分 / 都営浅草線「東銀座駅」徒歩5分',
    address: '東京都中央区築地エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'セミパーソナル通い放題',
      description: '最大3名のセミパーソナルレッスンが通い放題。3つのマシンを毎回体験。',
      price: '公式サイトでご確認ください',
    },
    options: [
      'セミパーソナル通い放題',
      '不定期コース',
      'プライベートレッスン',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', '体幹強化', 'ダイエット'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'バレル', 'チェア', '更衣室'],
    },
  },
  {
    name: 'Star Pilates 築地',
    image: '/images/studios/star-pilates-hakata.webp',
    rating: 4.8,
    reviewCount: 13,
    reviews: [
      {
        author: 'H.S',
        rating: 5,
        date: '1週間前',
        text: '完全個室でプライベートレッスンが受けられる。キャデラック、リフォーマー、チェア、バレルなど全マシン完備。英語レッスンも対応。',
      },
      {
        author: 'T.M',
        rating: 5,
        date: '2週間前',
        text: '東銀座駅から徒歩3分、築地駅から徒歩4分。朝8時から夜21:30まで営業で、出勤前も仕事帰りも通える。',
      },
      {
        author: 'A.K',
        rating: 4,
        date: '3週間前',
        text: 'セミプライベート（ペアレッスン）もあり、友人と一緒に通えるのが嬉しい。1回5,750円〜とペアなら割安。',
      },
    ],
    price: 'プライベート月4回 36,000円',
    trial: '体験レッスンあり',
    features: ['完全個室', '築地駅徒歩4分', '全マシン完備', '英語OK'],
    description: '完全予約制のプライベートピラティススタジオ。東銀座駅から徒歩3分、築地駅から徒歩4分。完全個室でキャデラック・リフォーマー・チェア・バレルなど全種類のピラティスマシンを完備。英語でのレッスンにも対応。',
    access: '都営浅草線「東銀座駅」徒歩3分 / 東京メトロ日比谷線「築地駅」徒歩4分',
    address: '東京都中央区築地1-12-16 プレミアム銀座イースト701',
    popularPlan: {
      name: 'プライベート月4回',
      description: '完全個室マンツーマンレッスン。全マシン使用可能。',
      price: '月4回 36,000円（税込・1回9,000円）',
    },
    options: [
      'プライベート月4回（36,000円）',
      'セミプライベート月4回（25,000円・1回6,250円）',
      '回数券1回（11,000円〜）',
      'ペアレッスン（1人5,750円〜）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['姿勢改善', '体幹強化', 'リハビリ', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: '8:00〜21:30',
      closed: '不定休',
      facilities: ['キャデラック', 'リフォーマー', 'チェア', 'バレル', '完全個室'],
    },
  },
  {
    name: 'BIRTH pilates studio 銀座',
    image: '/images/studios/birth-pilates-ginza.webp',
    rating: 4.8,
    reviewCount: 16,
    reviews: [
      {
        author: 'M.Y',
        rating: 5,
        date: '1週間前',
        text: '東銀座駅A7出口から徒歩4分、新富町駅から徒歩4分。STOTT PILATES認定の有資格インストラクターによる本格レッスン。',
      },
      {
        author: 'S.K',
        rating: 5,
        date: '2週間前',
        text: '個室空間でのマンツーマンレッスン。腰痛や肩こりなど体の不調にも対応。マタニティ・産後ケアも安心。',
      },
      {
        author: 'R.N',
        rating: 4,
        date: '3週間前',
        text: '初回90分の体験が4,500円。しっかりカウンセリングしてくれるので自分の体の状態がよくわかる。',
      },
    ],
    price: 'パーソナル 1回 12,100円〜',
    trial: '体験レッスン 4,500円（90分）',
    features: ['完全個室', '東銀座駅徒歩4分', 'STOTT認定', 'マタニティ対応'],
    description: '個室マシンピラティス専門スタジオ。東銀座駅A7出口から徒歩4分、新富町駅1番出口から徒歩4分。STOTT PILATES認定の資格保持者が指導。腰痛・肩こり・マタニティ・産後ケア・側湾症など専門的なケアにも対応。',
    access: '都営浅草線「東銀座駅」A7・A8出口 徒歩4分 / 有楽町線「新富町駅」1番出口 徒歩4分 / 銀座線「銀座駅」A13出口 徒歩6分',
    address: '東京都中央区銀座エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '完全個室マンツーマン。STOTT PILATES認定インストラクターが指導。',
      price: '1回 12,100円（税込）',
    },
    options: [
      'パーソナルレッスン（1回 12,100円）',
      '回数券プランあり',
      '初回体験 4,500円（90分）',
      'マタニティ・産後ケア対応',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '腰痛改善', 'マタニティケア', 'リハビリ'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'バレル', '完全個室'],
    },
  },
  {
    name: 'STUDIO IVY 銀座新富町店',
    image: '/images/studios/studio-ivy.webp',
    rating: 4.6,
    reviewCount: 8,
    reviews: [
      {
        author: 'K.N',
        rating: 5,
        date: '1週間前',
        text: '新富町駅から徒歩2分、築地駅からも徒歩圏内。パーソナルマシンピラティスで自分だけのプログラムを組んでもらえる。',
      },
      {
        author: 'Y.M',
        rating: 4,
        date: '2週間前',
        text: '朝8時から夜21時まで営業。1回30分のレッスンで時間効率が良い。月2回15,000円〜と始めやすい料金設定。',
      },
      {
        author: 'H.T',
        rating: 5,
        date: '3週間前',
        text: '都度払い8,800円もあるので、不定期でも通いやすい。インストラクターが丁寧で初心者にも安心。',
      },
    ],
    price: '月2回 15,000円〜',
    trial: '体験レッスンあり',
    features: ['新富町駅徒歩2分', 'パーソナル専門', '30分レッスン', '都度払いOK'],
    description: 'パーソナルマシンピラティス専門スタジオ。新富町駅から徒歩2分、築地駅からも徒歩圏内。リフォーマーを使った1回30分のマンツーマンレッスン。月2回から始められる手軽な料金設定と都度払いにも対応。',
    access: '東京メトロ有楽町線「新富町駅」徒歩2分 / 日比谷線「築地駅」徒歩8分',
    address: '東京都中央区新富2-5-4 アソシエイトタワー4F',
    popularPlan: {
      name: '月4回コース',
      description: 'パーソナルマシンピラティス月4回。リフォーマーを使ったマンツーマン指導。',
      price: '月4回 28,000円（税込）',
    },
    options: [
      '月2回コース（15,000円）',
      '月4回コース（28,000円）',
      '月8回コース（52,000円）',
      '都度払い（8,800円/回）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '体幹強化'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: '不定休',
      facilities: ['リフォーマー', '更衣室', 'ロッカー'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！築地エリアのスタジオはほとんどが初心者歓迎。Pilates Meeは体験者の多くがピラティス未経験者。zen placeも初心者向けクラスが充実しています。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。築地エリアはマシン専門スタジオが充実しています。',
  },
  {
    question: '築地のピラティスの料金相場は？',
    answer: 'グループ月4回で10,450円〜14,520円程度。zen placeが月4回10,450円〜で最もリーズナブル。パーソナルは1回9,000円〜12,100円が相場です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。大切なのは継続すること。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2-3ヶ月の継続が大切です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOK。zen placeはグループ体験1,000円、BIRTH pilatesは初回90分4,500円で体験可能です。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化。ヨガは柔軟性とリラックス重視。zen placeはヨガスタジオも運営しており、両方楽しめます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place銀座四丁目、Star Pilates築地、BIRTH pilates銀座、STUDIO IVY銀座新富町は男性も通えます。Pilates MeeとPilasuru東銀座は女性専用です。',
  },
  {
    question: '築地駅から近いスタジオは？',
    answer: 'Pilasuru東銀座が築地駅徒歩2分で最寄り。Pilates Mee築地店が徒歩3分、Star Pilates築地が徒歩4分。zen place銀座四丁目は東銀座駅から徒歩1分です。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
]

export default function TsukijiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '築地', url: 'https://pilates-biyori.com/area/tsukiji/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス築地おすすめ12選！<br className="hidden md:block" />
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
              <span className="text-warm-600">築地</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="築地" />

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
              「築地で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、築地エリアでおすすめのピラティススタジオ12選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>築地でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>無料体験や格安体験のスタジオを知りたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>駅近で通いやすいスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="築地" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              築地のおすすめピラティススタジオ12選
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
              築地のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">10,450円〜36,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 9,000円〜37,500円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">1,000円〜4,500円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              築地は商業施設やオフィスが集まる繁華街エリアのため、駅近の好立地スタジオが多く、やや高めの料金設定が目立ちます。一方で大手チェーンの進出も多いため、キャンペーンや月額通い放題プランを上手に活用すれば、実質的なコストを抑えることも可能です。近隣の門前仲町エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              築地でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">東京メトロ日比谷線「東銀座駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  築地エリアのスタジオは東銀座駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。東銀座駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">繁華街ならではの予約混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  築地は人が集まる繁華街のため、平日夜（18時〜21時）と土日午前中はレッスン予約が特に集中します。人気クラスは1週間以上前に満席になることも。アプリやWebで空き状況をこまめにチェックし、キャンセル待ち機能があるスタジオでは積極的に活用しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  築地エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ず確認しましょう。月の途中入会は日割り計算になるかも要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  築地エリアだけでなく、近隣の<Link href="/area/monzen-nakacho" className="text-warm-700 underline hover:text-warm-900">門前仲町</Link>、<Link href="/area/shimbashi" className="text-warm-700 underline hover:text-warm-900">新橋</Link>、<Link href="/area/nihonbashi" className="text-warm-700 underline hover:text-warm-900">日本橋</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>築地エリアの豆知識：</strong>築地は仕事帰りに立ち寄る方が多いエリアです。荷物が多くなりがちなので、ロッカーの広さやシャワー設備の有無を事前に確認しておくと安心。ウェアレンタルがあるスタジオなら手ぶらで通えて便利です。
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
                  月額1万円台で通えるスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• the SILK（月3回 12,980円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK 築地（東口・西口2店舗）</li>
                  <li className="text-warm-700">• ピラティスK 築地（月4回 13,420円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  駅から徒歩2分以内。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK（東口 徒歩1分）</li>
                  <li className="text-warm-700">• the SILK（東口 徒歩1分）</li>
                  <li className="text-warm-700">• zen place（東口 徒歩2分）</li>
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
                週1-2回からスタート。最低2-3ヶ月継続で効果を実感。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回がおすすめ。3-6ヶ月で目に見える変化。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜13,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月3〜4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place（10,450円〜/月4回）</li>
                  <li>• the SILK（12,980円〜/月3回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン専門スタジオ。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（13,420円〜）</li>
                  <li>• CLUB PILATES（14,190円〜）</li>
                  <li>• BDC PILATES（14,520円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 16,000〜29,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  毎日通いたい方。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（16,170円/通い放題）</li>
                  <li>• CLUB PILATES（28,490円/通い放題）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              失敗しないスタジオの選び方
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  築地の料金相場はグループ月4回で10,450円〜15,070円。入会金やキャンペーンも確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  the SILKとCLUB PILATESは無料体験。zen placeは1,000円、ピラティスKは2,000円で体験可能。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  築地はJR・東京メトロ・西武線・東武線と多路線が集まるターミナル駅。ピラティスK・the SILKは東口徒歩1分、zen placeは徒歩2分と駅近スタジオが充実。
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
              今回は築地エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では築地にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜3,850円。<br />
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

      <RelatedAreas currentSlug="tsukiji" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
