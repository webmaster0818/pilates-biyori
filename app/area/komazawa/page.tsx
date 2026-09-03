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
  alternates: { canonical: 'https://biyori-pilates.com/area/komazawa/' },
  title: '【2026年9月最新】ピラティス駒沢おすすめ6選！料金・体験レッスン・マシン対応を比較！',
  description: '駒沢エリアのおすすめピラティススタジオ6選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。駒沢公園近くで初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,駒沢,東京,世田谷区,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 駒沢',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    price: 'マットグループ月4回 9,625円〜',
    trial: '体験レッスン 1,000円',
    features: ['マット&マシン', '初心者歓迎', '駒沢大学駅徒歩4分', '男性OK'],
    description: '全国150店舗以上展開の大手ピラティススタジオ。駒沢大学駅駒沢公園口から徒歩4分の好立地。マットグループ、マシン（リフォーマー）グループ、プライベートレッスンと幅広いメニューを提供。マットグループ月4回9,625円〜とリーズナブル。経験豊富なインストラクターが一人ひとりに合わせた丁寧な指導を行います。男性も利用可能です。',
    access: '東急田園都市線「駒沢大学駅」駒沢公園口 徒歩4分',
    address: '東京都世田谷区駒沢（駒沢大学駅徒歩4分）',
    popularPlan: {
      name: 'マットグループ月4回プラン',
      description: 'マットグループレッスンを月4回受講できる人気プラン。駒沢大学駅から徒歩4分で通いやすい。',
      price: '月4回 9,625円〜（税込）',
    },
    options: [
      'マットグループ月4回（9,625円〜）',
      'マットグループ月6回（13,200円〜）',
      'マットグループ通い放題（16,940円〜）',
      'プライベートレッスン追加（1回 9,900円〜）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜22:00 / 土日祝 9:00〜18:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'ウォーターサーバー'],
    },
  },
  {
    name: 'PILATES STUDIO noa 駒沢',
    image: '/images/studios/pilates-noa.webp',
    price: '月2回 6,600円〜',
    trial: '体験レッスンあり',
    features: ['女性専用', 'マシンピラティス専門', '駒沢大学駅徒歩3分', '月2回6,600円〜'],
    description: '女性専用のマシンピラティス専門スタジオ。駒沢大学駅西口から徒歩3分の好立地。Intro、BODY MAKE、Conditioningの3カテゴリのプログラムを自由に選べます。月2回6,600円〜と始めやすい料金設定。レッスン繰越も無制限で在籍中いつでも利用可能。シャワールーム・パウダールーム完備。',
    access: '東急田園都市線「駒沢大学駅」西口 徒歩3分',
    address: '東京都世田谷区駒沢（駒沢大学駅徒歩3分）',
    popularPlan: {
      name: '月4回プラン',
      description: '女性専用マシンピラティスレッスンを月4回受講。3つのプログラムから自由に選択可能。',
      price: '月4回プラン（税込）',
    },
    options: [
      '月2回プラン（6,600円〜）',
      '月4回プラン',
      '月8回プラン',
      'レッスン繰越無制限',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '体幹強化', 'コンディショニング', '姿勢改善'],
    },
    basicInfo: {
      hours: '店舗にお問い合わせください',
      closed: '店舗にお問い合わせください',
      facilities: ['シャワールーム', 'ロッカー', 'パウダールーム', 'リフォーマー完備'],
    },
  },
  {
    name: 'Pilates Mee 駒沢大学店',
    image: '/images/studios/pilates-mee.webp',
    price: '月2回 11,000円〜',
    trial: '体験レッスン 無料キャンペーン中',
    features: ['最大3名セミパーソナル', '当日予約OK', '当日キャンセルOK', '駒沢大学駅近'],
    description: '最大3名までの少人数セミパーソナル形式のマシンピラティススタジオ。インストラクターが一人ひとりに十分に対応できる環境で、当日予約・当日キャンセルOKという柔軟なシステムが魅力。月2回11,000円〜で、体験レッスン無料キャンペーンも実施中。',
    access: '東急田園都市線「駒沢大学駅」徒歩圏内',
    address: '東京都世田谷区駒沢（駒沢大学駅徒歩圏内）',
    popularPlan: {
      name: '月4回プラン',
      description: '最大3名のセミパーソナルでマシンピラティスレッスン。',
      price: '月4回プラン（税込）',
    },
    options: [
      '月2回プラン（11,000円〜）',
      '月4回プラン',
      '当日予約・当日キャンセルOK',
      '体験レッスン無料キャンペーン中',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ボディメイク', '姿勢改善', '体幹強化', '運動不足解消'],
    },
    basicInfo: {
      hours: '店舗にお問い合わせください',
      closed: '店舗にお問い合わせください',
      facilities: ['ロッカー', 'リフォーマー完備'],
    },
  },
  {
    name: 'I PILATES（アイピラティス）駒沢公園',
    image: '/images/studios/i-pilates.webp',
    price: 'プライベートレッスン 要問合せ',
    trial: '体験レッスンあり',
    features: ['駒沢公園横', '管理栄養士在籍', '臨床心理士在籍', 'プライベートレッスン'],
    description: '駒沢公園横に位置し、大きな窓から木々の緑を眺められる自然豊かなロケーションが魅力のピラティススタジオ。管理栄養士による栄養相談や臨床心理士によるカウンセリングも行っており、心身両面からのトータルケアが特徴。プライベートレッスンで一人ひとりに合わせたオーダーメイドプログラムを提供。',
    access: '東急田園都市線「駒沢大学駅」徒歩14分（駒沢公園横）',
    address: '東京都世田谷区駒沢公園近く',
    popularPlan: {
      name: 'プライベートレッスン',
      description: '駒沢公園の緑を眺めながらマンツーマンでピラティスレッスン。',
      price: '料金は店舗にお問い合わせください',
    },
    options: [
      'プライベートレッスン',
      '管理栄養士による栄養相談',
      '臨床心理士によるカウンセリング',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['心身の健康', '姿勢改善', 'リハビリ', 'ストレスケア'],
    },
    basicInfo: {
      hours: '店舗にお問い合わせください',
      closed: '店舗にお問い合わせください',
      facilities: ['ロッカー', 'マシン完備', '駒沢公園ビュー'],
    },
  },
  {
    name: 'ELEMENT 駒沢（近隣）',
    officialUrl: 'https://t.felmat.net/fmcl?ak=U11199J.1.V154352I.U1357808',
    image: '/images/studios/element.webp',
    price: '月4回 22,000円',
    trial: '体験レッスン 3,300円',
    features: ['マンツーマン30分', '月4回 22,000円', '体験3,300円', '駒沢近隣'],
    description: 'マシンピラティス専門のパーソナルジム。1回30分の短時間マンツーマンレッスンで、忙しい方でも効率的にトレーニングが可能。月4回22,000円とパーソナルの中ではリーズナブルな料金設定。体験レッスンは3,300円。マシンピラティスの専門トレーナーが正しいフォームで効果的に指導します。',
    access: '駒沢エリアからアクセス可能',
    address: '東京都世田谷区（駒沢近隣）',
    popularPlan: {
      name: '月4回プラン',
      description: 'マシンピラティス専門トレーナーによる30分マンツーマンレッスン。',
      price: '月4回 22,000円（税込）',
    },
    options: [
      '月4回プラン（22,000円）',
      '体験レッスン（3,300円）',
      '30分マンツーマンレッスン',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['ボディメイク', '体幹強化', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '店舗にお問い合わせください',
      closed: '店舗にお問い合わせください',
      facilities: ['ロッカー', 'マシン完備'],
    },
  },
  {
    name: 'CLUB PILATES 駒沢（近隣）',
    image: '/images/studios/club-pilates.webp',
    price: '月4回 10,890円〜',
    trial: '体験レッスンあり',
    features: ['最大12名グループ', 'リフォーマー使用', '月4回 10,890円〜', '駒沢近隣'],
    description: 'アメリカ発のマシンピラティス専門スタジオ。最大12名のグループレッスンで、リフォーマーを使った本格的なマシンピラティスを体験できます。月4回10,890円〜とグループならではのリーズナブルな料金。レベル別にクラスが分かれているので初心者も安心です。',
    access: '駒沢エリアからアクセス可能',
    address: '東京都世田谷区（駒沢近隣）',
    popularPlan: {
      name: '月4回プラン',
      description: '最大12名のグループリフォーマーレッスン。',
      price: '月4回 10,890円〜（税込）',
    },
    options: [
      '月4回プラン（10,890円〜）',
      '月8回プラン（料金は店舗にお問い合わせ）',
      'フリープラン（料金は店舗にお問い合わせ）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ボディメイク', '体幹強化', '姿勢改善', '楽しくトレーニング'],
    },
    basicInfo: {
      hours: '店舗にお問い合わせください',
      closed: '店舗にお問い合わせください',
      facilities: ['ロッカー', 'リフォーマー完備'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも駒沢のスタジオに通えますか？',
    answer: 'はい、駒沢エリアのスタジオはほとんどが初心者歓迎です。zen place pilatesはマット&マシンの両方に対応し初心者向けクラスが充実。PILATES STUDIO noaは3つのプログラムカテゴリから選べ、Introコースが初心者に最適です。Pilates Meeは最大3名のセミパーソナルで丁寧に指導してもらえます。',
  },
  {
    question: '駒沢のピラティススタジオの料金相場はどのくらいですか？',
    answer: '駒沢エリアのグループレッスン料金相場は、月4回で9,625円〜11,000円程度です。パーソナルレッスンはELEMENTが月4回22,000円。セミパーソナルのPilates Meeは月2回11,000円〜。PILATES STUDIO noaは月2回6,600円〜と始めやすい料金設定です。体験レッスンは無料〜3,300円が一般的です。',
  },
  {
    question: '駒沢公園近くでピラティスができるスタジオはありますか？',
    answer: 'はい、I PILATES（アイピラティス）は駒沢公園横に位置し、大きな窓から緑を眺めながらレッスンを受けられます。管理栄養士や臨床心理士も在籍し、心身両面からのケアが特徴です。zen place pilates 駒沢も駒沢公園口から徒歩4分でアクセス良好です。',
  },
  {
    question: 'マシンピラティスとマットピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。駒沢ではzen place pilatesが両方に対応、PILATES STUDIO noaやPilates Meeがマシン専門です。',
  },
  {
    question: 'どのくらいの頻度で通うのがおすすめですか？',
    answer: '初心者は週1〜2回（月4〜8回）がおすすめです。慣れてきたら週2〜3回に増やすと効果を実感しやすくなります。大切なのは継続すること。無理のないペースで長く続けることが理想の身体を手に入れる近道です。',
  },
  {
    question: 'ピラティスで痩せることはできますか？',
    answer: 'はい、ピラティスはダイエットに効果的です。インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に変化します。ただし即効性はないため、最低2〜3ヶ月の継続が大切。食事管理を並行するとより効果的です。',
  },
  {
    question: '体験レッスンの持ち物は？',
    answer: '基本的に動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOKです。マシンピラティスでは靴下着用が必須のスタジオが多いので、滑り止め付きソックスがあると便利です。マットやタオルはスタジオでレンタルできることが多いです。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズ。ヨガは柔軟性と精神的なリラックスを重視します。ピラティスは筋力強化、ヨガは心身のバランスを整えることが主な目的です。I PILATESでは臨床心理士も在籍し、心身両面のケアが可能です。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'はい、zen place pilates 駒沢、I PILATES、ELEMENT、CLUB PILATESは男性も利用可能です。一方、PILATES STUDIO noaは女性専用となっています。事前に公式サイトで確認するか、直接スタジオにお問い合わせください。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: '目的によります。短期間で結果を出したい方や身体の不調を改善したい方にはI PILATESやELEMENTのパーソナルがおすすめ。コスパ重視で楽しく続けたい方にはzen place pilatesやCLUB PILATESのグループレッスンが適しています。セミパーソナルのPilates Meeは両方の良さを兼ね備えた選択肢です。',
  },
]

export default function KomazawaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '駒沢', url: 'https://pilates-biyori.com/area/komazawa/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年09月04日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス駒沢おすすめ6選！<br className="hidden md:block" />
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
              <span className="text-warm-600">駒沢</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="駒沢" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「駒沢で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、東急田園都市線「駒沢大学駅」周辺でおすすめのピラティススタジオ6選をまとめました。駒沢は緑豊かな駒沢オリンピック公園があり、健康意識の高い方が多く住むエリアです。駅近のスタジオから駒沢公園横の自然を感じられるスタジオまで幅広くご紹介します。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>駒沢でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>料金やレッスン内容を比較したい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>駒沢公園近くでピラティスがしたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>少人数制で丁寧に指導してもらいたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>女性専用スタジオを探している</span>
                </li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">
              それではさっそく見ていきましょう！
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="駒沢" />
        <AreaMarketComparison studios={studios} areaName="駒沢" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              駒沢のおすすめピラティススタジオ6選
            </h2>
            <div className="space-y-8">
              {[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Purpose-based Recommendations */}
        <section className="py-16 bg-white" id="kodawari">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              目的別おすすめスタジオ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額1万円前後で通えるスタジオ。グループレッスンで気軽に始められます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（月4回 9,625円〜）</li>
                  <li className="text-warm-700">• PILATES STUDIO noa（月2回 6,600円〜）</li>
                  <li className="text-warm-700">• CLUB PILATES（月4回 10,890円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマン指導で効果を最大化。姿勢改善や身体の不調にしっかり向き合いたい方に。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• I PILATES（駒沢公園横・心身ケア）</li>
                  <li className="text-warm-700">• ELEMENT（マンツーマン30分・月4回 22,000円）</li>
                  <li className="text-warm-700">• Pilates Mee（セミパーソナル最大3名）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用スタジオ</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの空間で安心してトレーニングしたい方に。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• PILATES STUDIO noa（女性専用・マシン専門）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Price Market Section */}
        <section className="py-16 bg-warm-50" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              駒沢のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">9,625円〜10,890円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">セミパーソナル（月2回〜）</td>
                    <td className="px-4 py-3">6,600円〜11,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン（月4回）</td>
                    <td className="px-4 py-3">22,000円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜3,300円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              駒沢は駒沢オリンピック公園を中心に健康意識の高い住民が多く、ピラティススタジオの需要も高いエリアです。大手スタジオからパーソナル専門まで幅広い選択肢があり、グループなら月1万円前後、パーソナルなら月2万円台から始められます。公園ランニングと組み合わせてピラティスに通う方も多く、アクティブなライフスタイルに馴染みやすい環境です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-white" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              駒沢でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">駒沢大学駅の出口を事前に確認しておく</h3>
                <p className="text-warm-600 leading-relaxed">
                  駒沢大学駅は駒沢公園口と国道246号側の出口があり、スタジオによって最寄りの出口が異なります。zen place pilatesは駒沢公園口から徒歩4分、PILATES STUDIO noaは西口から徒歩3分です。初回訪問時は余裕を持って行動しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">駒沢公園周辺は休日混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  駒沢オリンピック公園周辺は休日にランナーや家族連れで賑わいます。特に公園近くのスタジオに通う場合、駐輪場や周辺道路の混雑が予想されるため、時間に余裕を持って出発しましょう。逆に平日午前は比較的空いていて狙い目です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">レッスン形式の違いを理解して選ぶ</h3>
                <p className="text-warm-600 leading-relaxed">
                  駒沢エリアはグループ、セミパーソナル、パーソナルとレッスン形式が豊富です。グループは月1万円前後で気軽に始められ、セミパーソナルは少人数で丁寧な指導が魅力、パーソナルは効率重視の方向け。自分の予算や目的に合った形式を選びましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオも選択肢に入れよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  駒沢エリアだけでなく、近隣の<Link href="/area/sangenjaya/" className="text-warm-700 underline hover:text-warm-900">三軒茶屋</Link>、<Link href="/area/gakugei-daigaku/" className="text-warm-700 underline hover:text-warm-900">学芸大学</Link>、<Link href="/area/sakura-shinmachi/" className="text-warm-700 underline hover:text-warm-900">桜新町</Link>エリアにもピラティススタジオがあります。田園都市線沿線で通いやすいスタジオを探すのもおすすめです。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trial Lesson Guide */}
        <section className="py-16 bg-warm-50" id="trial-guide">
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：レッスン中の水分補給に。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは靴下着用が必須のスタジオが多数。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。ピラティスは脚を大きく動かすポーズが多いです。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>の方が、フォームの確認がしやすく効果的です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオも。事前に確認しましょう。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。マシンに引っかかる恐れがあります。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>駒沢エリアの豆知識：</strong>駒沢公園でランニングやウォーキングを楽しむ方が多いエリアです。ピラティスとランニングは相性が良く、体幹を鍛えることでランニングフォームも改善。レッスン後に公園を散歩するのもおすすめです。自転車で通う方は駐輪スペースを確認しておきましょう。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-white" id="how-to-choose">
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
                  ダイエット、姿勢改善、体幹強化、心身のリラックスなど、目的によって最適なスタジオは異なります。心身のトータルケアならI PILATES、効率重視の30分パーソナルならELEMENT、コスパ重視ならzen place pilatesがおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  駒沢エリアの料金相場は、グループ月4回で9,625円〜10,890円、セミパーソナル月2回で6,600円〜11,000円、パーソナル月4回で22,000円〜。無理なく継続できる予算を決めましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2〜3つピックアップしたら、必ず体験レッスンに行きましょう。駒沢エリアでは無料〜3,300円で体験レッスンが受けられます。スタジオの雰囲気やインストラクターとの相性は実際に行かないとわかりません。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  駒沢大学駅は東急田園都市線で渋谷から3駅。駅周辺と駒沢公園近くにスタジオが分布しています。自宅や職場からの通いやすさを確認し、無理なく継続できるスタジオを選びましょう。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-warm-50" id="faq">
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
        <section className="py-16 bg-white" id="summary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">
              まとめ
            </h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は駒沢のおすすめピラティススタジオ6選をご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              駒沢は緑豊かな駒沢オリンピック公園を中心に健康意識の高い方が多く住むエリア。月2回6,600円〜のマシンピラティスから、駒沢公園横で自然を感じながらのプライベートレッスン、パーソナル30分の時短トレーニングまで、多彩な選択肢が揃っています。
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
              初回限定の体験レッスン無料〜3,300円。<br />
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
      <ConsultantSection areaKey="komazawa" areaName="駒沢" />

      <RelatedAreas currentSlug="komazawa" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
