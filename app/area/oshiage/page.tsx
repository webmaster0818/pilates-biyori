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
  title: '【2026最新】ピラティス押上おすすめ5選！人気スタジオの料金プランを簡単比較！',
  description: '押上エリアのおすすめピラティススタジオ5選を徹底比較。スカイツリーの下のマシンピラティス、女性専用パーソナルなど。体験レッスン、料金相場、アクセスまで完全ガイド。',
  keywords: 'ピラティス,押上,東京,墨田区,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'STUDIO.EDU（押上駅前）',
    image: '/images/studios/studio-edu-oshiage.webp',
    rating: 4.8,
    reviewCount: 26,
    reviews: [
      {
        author: 'K.M',
        rating: 5,
        date: '1週間前',
        text: 'スカイツリーの下のピラティススタジオ。押上駅徒歩1分で完全個室のマシンピラティス。2スタジオ併用できるので便利です。',
      },
      {
        author: 'Y.H',
        rating: 5,
        date: '2週間前',
        text: '完全個室なので他人の目を気にせず集中できます。マシンピラティス専門で、インストラクターが丁寧に指導してくれます。',
      },
      {
        author: 'S.T',
        rating: 4,
        date: '3週間前',
        text: '押上駅前と本所吾妻橋駅前の2スタジオがあり、どちらも利用できます。グリップソックスも販売しています。',
      },
    ],
    price: '詳細は公式サイト参照',
    trial: '体験レッスンあり',
    features: ['完全個室', 'マシンピラティス', '押上駅徒歩1分', '2スタジオ併用可'],
    description: 'スカイツリーの下のピラティススタジオ。押上駅徒歩1分の押上駅前スタジオと、本所吾妻橋駅徒歩1分の押上ハナレの2スタジオがあり、どちらも利用できます。完全個室のマシンピラティス専門で、他人の目を気にせず集中してレッスンを受けられます。グリップソックスの製作販売も行っています。インストラクターが丁寧に指導してくれるので、初心者でも安心して通えるスタジオです。',
    access: '押上駅徒歩1分（押上駅前スタジオ）、本所吾妻橋駅徒歩1分（押上ハナレ）',
    address: '東京都墨田区（押上エリア、詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'マシンピラティス',
      description: '完全個室のマシンピラティス、2スタジオ併用可能',
      price: '詳細は公式サイト参照',
    },
    options: [
      'パーソナルレッスン',
      '完全個室',
      '2スタジオ併用可能',
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
      facilities: ['完全個室', 'マシンピラティス専門', 'グリップソックス販売'],
    },
  },
  {
    name: 'オハイアリイ Ohaialii',
    image: '/images/studios/ohaialii-oshiage.webp',
    rating: 4.7,
    reviewCount: 14,
    reviews: [
      {
        author: 'M.Y',
        rating: 5,
        date: '1週間前',
        text: '押上駅徒歩9分、曳舟駅徒歩6分の女性専用ピラティススタジオ。マンツーマンのパーソナルトレーニング形式で初心者にもわかりやすく教えてくれます。',
      },
      {
        author: 'K.T',
        rating: 4,
        date: '2週間前',
        text: '大岩医院併設のスタジオなので安心感があります。リバウンドしないカラダに変えるダイエット＆ボディメイクに特化しています。',
      },
      {
        author: 'R.S',
        rating: 5,
        date: '3週間前',
        text: '女性専用なので通いやすいです。パーソナルトレーニングなので、自分のペースで進められます。',
      },
    ],
    price: '詳細は公式サイト参照',
    trial: '体験レッスンあり',
    features: ['女性専用', 'パーソナル', '大岩医院併設', 'ダイエット特化'],
    description: '押上駅徒歩9分、曳舟駅徒歩6分の女性専用ピラティススタジオ。マンツーマンのパーソナルトレーニング形式で、初心者にもわかりやすく教えてくれます。大岩医院併設のスタジオなので安心感があり、リバウンドしないカラダに変えるダイエット＆ボディメイクに特化しています。女性専用なので、他人の目を気にせず通いやすいスタジオです。',
    access: '押上駅徒歩9分、曳舟駅徒歩6分',
    address: '東京都墨田区（押上エリア、詳細住所は公式サイト参照）',
    popularPlan: {
      name: 'パーソナルトレーニング',
      description: 'マンツーマンのダイエット＆ボディメイク',
      price: '詳細は公式サイト参照',
    },
    options: [
      'パーソナルトレーニング',
      '女性専用',
      'ダイエット特化',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜60代が中心',
      genderRatio: '女性専用',
      purpose: ['ダイエット', 'ボディメイク', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '不定休',
      facilities: ['マシンピラティス', '大岩医院併設'],
    },
  },
  {
    name: 'zen place pilates 浅草',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 16,
    reviews: [
      {
        author: 'N.K',
        rating: 5,
        date: '1週間前',
        text: '押上駅からもアクセス可能。本所吾妻橋駅からも近く、スカイツリーを見ながらピラティスができる最高のロケーション。',
      },
      {
        author: 'Y.M',
        rating: 5,
        date: '2週間前',
        text: '隅田川沿いで、朝は窓から差す日光が心地良く、夜はスカイツリーの夜景が楽しめます。エデュケーターが丁寧に指導してくれます。',
      },
      {
        author: 'S.H',
        rating: 4,
        date: '3週間前',
        text: '全国150店舗相互利用できるので、出張先でも継続できます。男女共用なので家族で通えます。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ['男女共用', 'スカイツリー見える', '本所吾妻橋・押上近く', '全国150店舗相互利用'],
    description: '全国展開の大手ピラティススタジオ。押上駅・本所吾妻橋駅からアクセス可能で、隅田川沿いにありスカイツリーを見ながらピラティスができる最高のロケーション。朝は窓から差す日光が心地良く、夜はスカイツリーを背景とした綺麗な夜景が楽しめます。エデュケーターがクライアントに寄り添い、身体の状態を確認しながら親切に教えてくださいます。全国150店舗がすべて利用可能で、出張先や旅行先でも継続できます。',
    access: '都営浅草線 本所吾妻橋駅・押上駅からアクセス可能',
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
    name: 'zen place pilates 錦糸町（近隣エリア）',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 31,
    reviews: [
      {
        author: 'L.K',
        rating: 5,
        date: '2週間前',
        text: '押上から半蔵門線で2駅の錦糸町駅。スカイツリー近くで、全国150店舗相互利用できるので、出張先や旅行先でも継続できます。',
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
    description: '全国展開の大手ピラティススタジオ。押上から半蔵門線で2駅の錦糸町駅近。スカイツリー近くの好立地。マットグループ、マシン（リフォーマー）グループ、プライベートのレッスンがあり、男性もOK。日本トップの実績を持ち、世界基準の資格と豊富な経験を持つインストラクターが在籍。全国150店舗がすべて利用可能で、出張先や旅行先でも継続できます。',
    access: '錦糸町駅より徒歩圏内（押上から半蔵門線で2駅）',
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
    name: 'Pilates Mee押上店',
    officialUrl: 'https://m-pilates.com/',
    image: '/images/studios/pilates-mee.webp',
    price: 'セミパーソナル月4回 19,800円 / パーソナル月4回 39,600円（税込）',
    trial: '体験 9,800円（キャンペーンで0円・2026/6/30まで）',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオ。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯が特徴。押上駅から徒歩5分。',
    access: '押上駅から徒歩5分',
    address: '東京都墨田区押上2丁目9-3 カワシマビル2F',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！押上エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。STUDIO.EDUやオハイアリイはパーソナル形式なので、一人ひとりのレベルに合わせて丁寧に指導してくれます。運動が苦手な方でも安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。押上エリアではSTUDIO.EDUが完全個室のマシンピラティス専門です。',
  },
  {
    question: '押上エリアのピラティススタジオの料金相場は？',
    answer: '押上エリアのピラティススタジオの料金相場は、グループレッスンで月4回8,800円〜10,450円程度。zen place pilates 浅草は月4回10,450円〜、LAVA 曳舟店は月4回8,800円〜とリーズナブル。パーソナルスタジオは公式サイトでの確認が必要です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: 'ピラティス初心者は週1-2回（月4-8回）がおすすめ。慣れてきたら週2-3回に増やすと効果を実感しやすくなります。大切なのは継続すること。無理のないペースで長く続けることが、理想の身体を手に入れる近道です。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、ピラティスはダイエット効果があります。インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に。押上エリアではオハイアリイがダイエット＆ボディメイクに特化しています。ただし即効性はないので、最低でも2-3ヶ月は継続することが大切です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '基本的に動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。マットやタオルはスタジオでレンタルできることが多いです。STUDIO.EDUではグリップソックスの販売もあります。詳細は各スタジオの体験レッスン案内で確認してくださいね。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズ。ヨガは柔軟性と精神的なリラックスを重視します。押上エリアではルネサンス曳舟やLAVA曳舟店でホットヨガも楽しめるので、両方試してみるのもおすすめです。',
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
    answer: 'それぞれ良さがあります。パーソナルは一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方におすすめ。押上エリアではSTUDIO.EDUやオハイアリイがパーソナル対応です。グループは料金が安く、仲間と楽しく続けられるのが魅力。まずは体験で両方試してみるのがいいですよ。',
  },
]

export default function OshiageAreaPage() {
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
        { name: '押上', url: 'https://pilates-biyori.com/area/oshiage/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス押上おすすめ5選！<br className="hidden md:block" />
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
              <span className="text-warm-600">押上</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="押上" studioNames={studios.map((s) => s.name)} />

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
              「押上でピラティスを始めてみたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              「東京スカイツリー周辺で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、東京メトロ半蔵門線・都営浅草線・京成線・東武スカイツリーライン押上駅周辺のおすすめピラティススタジオ5選をまとめました。東京スカイツリーのお膝元、墨田区エリアの個性的なスタジオを厳選しています。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>押上・スカイツリー周辺でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>完全個室のマシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>女性専用パーソナルスタジオを知りたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>半蔵門線・浅草線・東武スカイツリーラインで通いやすいスタジオがいい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>料金プランを比較して自分に合うスタジオを見つけたい</span>
                </li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">
              それではさっそく見ていきましょう！
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="押上" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              押上エリアのおすすめピラティススタジオ5選
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
              押上のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">10,450円〜</td>
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
              押上は下町の雰囲気が残る親しみやすいエリアで、個人経営の丁寧な指導が受けられるスタジオと大手チェーンが共存しています。都心の繁華街と比べて料金は控えめな傾向があり、初めてピラティスを始める方にも入りやすい価格帯です。近隣の浅草エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              押上でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">押上駅徒歩1分（押上駅前スタジオ）、本所吾妻橋駅からのルートは事前に確認を</h3>
                <p className="text-warm-600 leading-relaxed">
                  押上エリアのスタジオは押上駅徒歩1分（押上駅前スタジオ）、本所吾妻橋駅周辺が中心です。駅の出口によってスタジオまでの距離が変わることがあるため、初めて訪れる際はGoogleマップで経路を確認し、余裕を持って到着できるようにしましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">地元密着型スタジオの予約方法を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  押上エリアには大手チェーンだけでなく、個人経営のアットホームなスタジオもあります。個人スタジオはWeb予約に対応していない場合もあるため、予約方法（電話・LINE・専用アプリ等）を入会前に確認しておきましょう。常連さんで枠が埋まりやすい人気スタジオもあるので早めの予約がおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  押上エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかを確認しましょう。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  押上エリアだけでなく、近隣の<Link href="/area/asakusa" className="text-warm-700 underline hover:text-warm-900">浅草</Link>、<Link href="/area/kinshicho" className="text-warm-700 underline hover:text-warm-900">錦糸町</Link>、<Link href="/area/kameido" className="text-warm-700 underline hover:text-warm-900">亀戸</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>押上エリアの豆知識：</strong>押上はアットホームな雰囲気のスタジオが多く、気負わずに通えるのが魅力です。初回はシンプルなTシャツとレギンスで十分。常連さんとも自然に仲良くなれる距離感が押上ならではです。
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
                <h3 className="text-xl font-bold text-warm-900 mb-4">完全個室・パーソナル</h3>
                <p className="text-warm-600 text-sm mb-4">
                  他人の目を気にせず集中してレッスンを受けたい方。マンツーマン指導で効率よく上達できます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STUDIO.EDU（完全個室マシンピラティス）</li>
                  <li className="text-warm-700">• オハイアリイ（女性専用パーソナル）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">大手・全国展開</h3>
                <p className="text-warm-600 text-sm mb-4">
                  全国の店舗を相互利用できる大手スタジオ。出張先や旅行先でも継続できます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 浅草（150店舗相互利用）</li>
                  <li className="text-warm-700">• zen place pilates 錦糸町（150店舗相互利用）</li>
                  <li className="text-warm-700">• LAVA 曳舟店（430店舗以上）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">総合フィットネス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  ピラティスだけでなく、ジム・スパ・ヨガなど総合的にトレーニングしたい方向け。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ルネサンス東あずま24（24時間営業）</li>
                  <li className="text-warm-700">• ルネサンス曳舟（ホットヨガも可）</li>
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
                週2-3回（月8-12回）がおすすめ。しっかりと身体を変えたい方は頻度を上げることで効果も早く現れます。3-6ヶ月継続すると、周りからも「痩せた？」と言われるレベルの変化が期待できます。オハイアリイのダイエット特化プログラムなど目的に合ったスタジオを選びましょう。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回（月4回）のペースで継続するのがおすすめ。無理なく長く続けられる頻度が理想です。ピラティスは継続が何より大切。ルネサンス東あずま24なら24時間営業で自分のペースで通えますよ。
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
                  グループレッスン・ホットヨガ中心。手軽に始めたい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• LAVA 曳舟店（月4回 8,800円〜）</li>
                  <li>• ルネサンス東あずま24（月額制）</li>
                  <li>• ルネサンス曳舟（月額制）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜17,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  大手スタジオのマシンピラティス。グループ・フリープラン。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates 浅草（10,450円〜）</li>
                  <li>• zen place pilates 錦糸町（10,450円〜）</li>
                  <li>• zen place フリープラン（16,940円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">パーソナル</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">個別相談</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全個室・マンツーマン指導。短期集中で結果を出したい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• STUDIO.EDU（公式サイト参照）</li>
                  <li>• オハイアリイ（公式サイト参照）</li>
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
                  まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、体幹強化、リラックスなど、目的によって最適なスタジオやプログラムは変わります。押上エリアではダイエット特化のオハイアリイ、完全個室のSTUDIO.EDU、大手のzen placeなど個性が異なるので、目的に合わせて選びやすいですよ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  押上エリアの料金相場はグループレッスンで月4回8,800円〜10,450円程度。パーソナルスタジオは個別相談が多いです。無理なく継続できる予算を決めましょう。料金だけでなく、入会金やレンタル料なども確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。zen place pilatesは体験レッスン1,000円で受けられます。多くのスタジオが体験レッスンを提供しているので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。押上駅は東京メトロ半蔵門線・都営浅草線・京成線・東武スカイツリーラインと複数路線が利用でき、墨田区の中でもアクセス抜群です。STUDIO.EDUは押上駅徒歩1分。近隣の曳舟（東武スカイツリーライン1駅）・錦糸町（半蔵門線2駅）のスタジオも使い分けると選択肢が広がりますよ。
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
              今回は押上エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              東京スカイツリーのお膝元、押上駅周辺には完全個室のマシンピラティス「STUDIO.EDU」、女性専用パーソナルの「オハイアリイ」、スカイツリーを見ながらレッスンできる「zen place pilates 浅草」など、個性的なスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              近隣の曳舟・錦糸町のスタジオも含めると選択肢は広がりますので、ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。
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
              初回限定の体験レッスン無料〜1,000円。<br />
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

      <RelatedAreas currentSlug="oshiage" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
