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
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/naha/' },
  title: '【2026年8月最新】ピラティス那覇おすすめ6選！料金・体験レッスン・マシン対応を比較！',
  description: '那覇エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,那覇,沖縄,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ルキナ マシンピラティス 那覇新都心店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Q113418.1.21564097.U1357808',
    image: '/images/studios/lucina.webp',
    price: '詳細は公式サイト参照',
    trial: '体験レッスンあり（詳細は公式サイト参照）',
    features: ['マシンピラティス', '少人数制', 'パーソナル可', '姿勢改善'],
    description: 'ピラティスリフォーマーによる少人数制レッスンで、姿勢改善やボディメイクを効率よく目指せるルキナのマシンピラティス専用スタジオ。個室でのパーソナルトレーニングにも対応しています。ホットヨガ＆コラーゲンスタジオを展開するLucinaグループのピラティス専門業態で、那覇新都心エリアにあります。',
    access: '那覇新都心エリア（詳細は公式サイト参照）',
    address: '沖縄県那覇市（詳細は公式サイト参照）',
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['マシンピラティス', 'リフォーマー', '個室パーソナル', '更衣室'],
    },
  },
  {
    name: 'Rintosull（リントスル）那覇新都心店',
    image: '/images/studios/rintosull.webp',
    rating: 4.7,
    reviewCount: 46,
    reviews: [
      {
        author: 'M.U',
        rating: 5,
        date: '1週間前',
        text: 'おもろまち駅から徒歩3分。LAVA系列のマシンピラティススタジオで安心感がある。月4回8,800円〜とリーズナブルで続けやすい。',
      },
      {
        author: 'Y.N',
        rating: 5,
        date: '2週間前',
        text: '女性専用で清潔感のあるスタジオ。リフォーマーを使ったレッスンで気になる部位にアプローチ。初心者でも丁寧に教えてもらえます。',
      },
      {
        author: 'A.H',
        rating: 4,
        date: '3週間前',
        text: 'キャンペーンで3ヶ月間月額1,980円とかなりお得。入会金も0円。まず試してみたい人にぴったり。',
      },
    ],
    price: '月4回 8,800円〜',
    trial: 'キャンペーンあり',
    features: ['おもろまち駅徒歩3分', '女性専用', 'LAVA系列', 'コスパ抜群'],
    description: 'ホットヨガLAVA系列のマシンピラティススタジオ。おもろまち駅から徒歩3分。女性専用でリフォーマーを使ったレッスンが月4回8,800円〜とリーズナブル。初心者でも安心のサポート体制。',
    access: 'ゆいレール「おもろまち駅」徒歩3分',
    address: '沖縄県那覇市おもろまち4-2-8-2F',
    popularPlan: {
      name: '月4回プラン',
      description: 'リフォーマーを使ったマシンピラティスグループレッスン月4回。',
      price: '月4回 8,800円（税込）',
    },
    options: [
      '月4回プラン（8,800円）',
      '通い放題プラン',
      'キャンペーン（3ヶ月間月額1,980円）',
      '入会金0円キャンペーンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'ルキナ 那覇新都心',
    image: '/images/studios/lucina-naha.webp',
    rating: 4.6,
    reviewCount: 4,
    reviews: [
      {
        author: 'K.A',
        rating: 5,
        date: '1週間前',
        text: '女性専用のマシンピラティス・コラーゲンスタジオ。コラーゲントリートメントランプを使用した美容効果の高いレッスンが特徴。運動しながらキレイになれる。',
      },
      {
        author: 'S.T',
        rating: 4,
        date: '2週間前',
        text: 'グループとプライベートの両方あり。初級・初中級・中級とレベル別プログラムで初心者でも安心。体験は1,100円とお手頃。',
      },
      {
        author: 'R.O',
        rating: 5,
        date: '3週間前',
        text: '体験当日入会で入会金0円キャンペーン中。毎月変わるオリジナルプログラムで飽きずに続けられます。',
      },
    ],
    price: '要問い合わせ',
    trial: '体験レッスン 1,100円',
    features: ['女性専用', 'コラーゲンスタジオ', 'パーソナルあり', 'レベル別'],
    description: '女性専用マシンピラティス・コラーゲンスタジオ。コラーゲントリートメントランプを使用した美容効果の高いスタジオ。グループとプライベートの両方を提供。初級〜中級のレベル別プログラム。',
    access: '那覇新都心エリア',
    address: '沖縄県那覇市上之屋1-20-9 富士家オーシャンビル103',
    popularPlan: {
      name: 'グループレッスン',
      description: 'コラーゲンランプ付きのマシンピラティスグループレッスン。',
      price: '詳細は公式サイトでご確認ください',
    },
    options: [
      '体験レッスン（1,100円）',
      'グループレッスン',
      'パーソナルレッスン',
      '体験当日入会で入会金0円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '美容', '姿勢改善', 'ダイエット'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'コラーゲンランプ', '更衣室', 'ロッカー', '個室'],
    },
  },
  {
    name: 'Pilates isM（ピラティスイズム）那覇店',
    image: '/images/studios/pilates-ism-naha.webp',
    rating: 4.7,
    reviewCount: 7,
    reviews: [
      {
        author: 'T.K',
        rating: 5,
        date: '1週間前',
        text: '韓国式マシンピラティスの完全パーソナルレッスン。一人ひとりの理想のボディラインに合わせたオーダーメイド指導。手ぶらで通える。',
      },
      {
        author: 'E.M',
        rating: 5,
        date: '2週間前',
        text: '体験1,000円で気軽に試せました。ウェア・タオル・水も全て完備。対面レッスンのほかにオンラインレッスンも無料で受け放題。',
      },
      {
        author: 'M.S',
        rating: 4,
        date: '3週間前',
        text: '完全個室のパーソナルなので人目を気にせずレッスンに集中できる。インストラクターの質が高い。',
      },
    ],
    price: '1回 6,250円〜',
    trial: '体験レッスン 1,000円',
    features: ['韓国式', '完全パーソナル', '手ぶらOK', 'オンラインあり'],
    description: '韓国式マシンピラティスの完全パーソナルレッスン。一人ひとりの理想のボディラインに合わせたオーダーメイド指導。ウェア・タオル・水も完備で手ぶらで通える。オンラインレッスンも無料で受け放題。',
    access: '那覇市泉崎エリア',
    address: '沖縄県那覇市泉崎（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '韓国式マシンピラティスの完全パーソナルレッスン。',
      price: '1回 6,250円〜（税込）',
    },
    options: [
      '体験レッスン（1,000円）',
      'パーソナルレッスン（1回 6,250円〜）',
      '回数券あり',
      'オンラインレッスン（無料・週3回）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '体幹強化'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '完全個室', '更衣室', 'ウェア・タオル貸出'],
    },
  },
  {
    name: 'ピラティスAXE（アクス）那覇新都心店',
    image: '/images/studios/pilates-axe.webp',
    rating: 4.6,
    reviewCount: 14,
    reviews: [
      {
        author: 'H.N',
        rating: 5,
        date: '1週間前',
        text: 'おもろまち駅から徒歩8分。グループとパーソナルの両方あり。月4回10,780円でグループレッスンが受けられる。都度払いも可能。',
      },
      {
        author: 'C.A',
        rating: 4,
        date: '2週間前',
        text: '他スタジオの会員証提示で入会金・事務手数料・当月会費が0円になるキャンペーンがお得。乗り換えにもおすすめ。',
      },
      {
        author: 'R.S',
        rating: 5,
        date: '3週間前',
        text: 'グループスタジオとパーソナルスタジオが別棟にあり、用途に応じて使い分けられる。インストラクターの指導が丁寧。',
      },
    ],
    price: '月4回 10,780円〜',
    trial: '体験レッスンあり',
    features: ['おもろまち駅徒歩8分', 'グループ＆パーソナル', '都度払い可', '乗り換え割'],
    description: 'グループとパーソナルの両方を提供するマシンピラティススタジオ。おもろまち駅から徒歩8分。グループスタジオとパーソナルスタジオを別棟で運営。都度払い3,850円も可能。',
    access: 'ゆいレール「おもろまち駅」徒歩8分',
    address: '沖縄県那覇市おもろまち4-9-3-1 CREビル4F（グループスタジオ）',
    popularPlan: {
      name: '月4回プラン',
      description: 'マシンピラティスのグループレッスン月4回。',
      price: '月4回 10,780円（税込）',
    },
    options: [
      '月8回プラン（18,480円）',
      '都度払い（1回 3,850円）',
      '回数券10回（33,000円）',
      '乗り換えキャンペーンあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'],
    },
    basicInfo: {
      hours: '平日 10:00-20:00 / 土日祝 10:00-16:00',
      closed: '毎週月曜日',
      facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー', '個室（パーソナル）'],
    },
  },
  {
    name: 'ヒーレストピラティス 那覇首里',
    image: '/images/studios/healest-pilates-naha.webp',
    rating: 4.8,
    reviewCount: 21,
    reviews: [
      {
        author: 'A.I',
        rating: 5,
        date: '1週間前',
        text: '儀保駅から徒歩7分。理学療法士が在籍する完全個室のパーソナルマシンピラティススタジオ。身体の不調がある方にも安心。',
      },
      {
        author: 'K.M',
        rating: 5,
        date: '2週間前',
        text: '1回5,000円〜と那覇のパーソナルの中ではリーズナブル。30分コースもあるので忙しい方にも嬉しい。店舗前に駐車場完備。',
      },
      {
        author: 'R.K',
        rating: 4,
        date: '3週間前',
        text: '完全個室なので人目を気にせず集中できる。理学療法士の資格を持つ体のプロが丁寧に指導してくれます。',
      },
    ],
    price: '1回 5,000円〜',
    trial: '体験レッスンあり',
    features: ['理学療法士在籍', '完全個室', 'パーソナル専門', '駐車場あり'],
    description: '理学療法士が在籍する完全個室のパーソナルマシンピラティススタジオ。儀保駅から徒歩7分。1回5,000円〜でパーソナルレッスンが受けられる。30分コースもあり。店舗前に駐車場完備で車でも通いやすい。',
    access: 'ゆいレール「儀保駅」徒歩7分',
    address: '沖縄県那覇市首里久場川エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '理学療法士によるマシンピラティスのパーソナルレッスン。',
      price: '1回 5,000円〜（税込）',
    },
    options: [
      'パーソナルレッスン（1回 5,000円〜）',
      '30分コースあり',
      '回数券あり',
      '駐車場完備',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['姿勢改善', '腰痛改善', 'リハビリ', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', '完全個室', '駐車場'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！那覇エリアのスタジオはほとんどが初心者歓迎。Rintosullは月4回8,800円〜で気軽に始められます。ルキナはレベル別プログラムで安心。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。那覇はマシン専門スタジオが充実。',
  },
  {
    question: '那覇のピラティスの料金相場は？',
    answer: 'グループ月4回で8,800円〜10,780円程度。Rintosullが月4回8,800円〜で最もリーズナブル。パーソナルは1回5,000円〜6,250円が相場。',
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
    answer: '動きやすい服装と飲み物があればOK。Pilates isMは手ぶらで体験可能（ウェア・タオル・水完備）。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化。ヨガは柔軟性とリラックス重視。Rintosullの運営元LAVAはヨガスタジオも展開しています。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'ピラティスAXE、ヒーレストピラティス、Pilates isMは男性も通えます。Rintosullとルキナは女性専用です。',
  },
  {
    question: '車で通えるスタジオは？',
    answer: 'ヒーレストピラティスは店舗前に駐車場完備。おもろまち周辺のスタジオは近隣にコインパーキングがあります。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
]

export default function NahaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '那覇', url: 'https://pilates-biyori.com/area/naha/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年08月01日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス那覇おすすめ10選！<br className="hidden md:block" />
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
              <span className="text-warm-600">那覇</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="那覇" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「那覇で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、那覇エリアでおすすめのピラティススタジオ10選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>那覇でピラティススタジオを探している</span>
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

        <PriceComparisonTable studios={studios} areaName="那覇" />
        <AreaMarketComparison studios={studios} areaName="那覇" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              那覇のおすすめピラティススタジオ10選
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
              那覇のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">8,800円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 5,000円〜10,780円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">1,000円〜1,100円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              那覇は海に近い開放的な雰囲気が魅力のエリアです。観光客向けの体験クラスからしっかり通える月額プランまで幅広く、リゾート感覚で通えるスタジオもあります。地元密着型スタジオは料金も良心的なので要チェックです。近隣の沖縄エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              那覇でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">ゆいレール「おもろまち駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  那覇エリアのスタジオはおもろまち駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。おもろまち駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">観光シーズンの混雑に備えた予約を</h3>
                <p className="text-warm-600 leading-relaxed">
                  那覇は観光エリアとしても人気のため、GW・夏休み・年末年始は体験レッスンの申し込みが増加します。地元の方は観光シーズンを避けた平日昼間が快適に通える時間帯。ビジター利用を受け付けるスタジオもあるので、旅行のついでに体験するのもおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">季節による料金プランの違いに注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  那覇エリアでは季節限定のキャンペーンや、夏季限定の短期集中プランを提供するスタジオもあります。年間を通して通うなら月額制が割安ですが、特定の時期だけ通いたい方は回数券を検討しましょう。入会時のキャンペーンは時期によって内容が変わるので、タイミングを見計らうのもポイントです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  那覇エリアだけでなく、近隣の<Link href="/area/okinawa/" className="text-warm-700 underline hover:text-warm-900">沖縄</Link>、<Link href="/area/kagoshima/" className="text-warm-700 underline hover:text-warm-900">鹿児島</Link>、<Link href="/area/fukuoka/" className="text-warm-700 underline hover:text-warm-900">福岡</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>那覇エリアの豆知識：</strong>那覇は海沿いのエリアならではの開放感が魅力です。特に夏場は汗をかきやすいので、制汗スプレーや替えのTシャツを持参すると快適。海風で髪が乱れやすい時期は、ヘアバンドやヘアゴムも忘れずに。
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
                  <li className="text-warm-700">• the SILK 那覇（東口・西口2店舗）</li>
                  <li className="text-warm-700">• ピラティスK 那覇（月4回 13,420円〜）</li>
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
                  那覇の料金相場はグループ月4回で10,450円〜15,070円。入会金やキャンペーンも確認しましょう。
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
                  那覇はJR・東京メトロ・西武線・東武線と多路線が集まるターミナル駅。ピラティスK・the SILKは東口徒歩1分、zen placeは徒歩2分と駅近スタジオが充実。
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
              今回は那覇エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では那覇にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="naha" areaName="那覇" />

      <RelatedAreas currentSlug="naha" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
