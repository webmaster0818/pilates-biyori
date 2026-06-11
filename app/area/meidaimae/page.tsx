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
  title: '【2026最新】ピラティス明大前おすすめ5選！人気スタジオの料金プランを簡単比較！',
  description: '明大前エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,明大前,東京,世田谷区,杉並区,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'URBAN CLASSIC PILATES 明大前店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11337L.1.X156352B.U1357808',
    image: '/images/studios/urban-classic-pilates.webp',
    rating: 4.6,
    reviewCount: 240,
    reviews: [
      {
        author: 'Y.M',
        rating: 5,
        date: '1週間前',
        text: '予約不要で30分のサーキット形式なので、仕事帰りにふらっと立ち寄れるのが最高です。月4回9,680円はかなりコスパが良い。',
      },
      {
        author: 'K.T',
        rating: 4,
        date: '2週間前',
        text: 'マシンピラティスとファンクショナルトレーニングを組み合わせたプログラムで、全身しっかり動かせます。',
      },
      {
        author: 'S.H',
        rating: 5,
        date: '3週間前',
        text: '予約なしで自分のペースで通えるのがとにかく便利。明大前駅から近くて続けやすいです。',
      },
    ],
    price: '月4回 9,680円',
    trial: '体験レッスンあり',
    features: ['予約不要', '30分サーキット', '月4回 9,680円', '明大前駅近'],
    description: '予約不要で通えるマシンピラティス＆ファンクショナルトレーニングのサーキット形式スタジオ。1回30分で全身をしっかり動かせます。月4回9,680円とリーズナブル。好きな時間にふらっと立ち寄れる手軽さが魅力。マシンピラティスとファンクショナルトレーニングを組み合わせた独自のプログラムを提供。',
    access: '京王線・京王井の頭線「明大前駅」徒歩圏内',
    address: '東京都世田谷区松原（明大前駅徒歩圏内）',
    popularPlan: {
      name: '月4回プラン',
      description: '予約不要で30分のサーキット形式マシンピラティスレッスン。',
      price: '月4回 9,680円（税込）',
    },
    options: [
      '月4回プラン（9,680円）',
      '月8回プラン（料金は店舗にお問い合わせ）',
      '通い放題プラン（料金は店舗にお問い合わせ）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['運動不足解消', '体幹強化', '姿勢改善', '気軽にトレーニング'],
    },
    basicInfo: {
      hours: '店舗にお問い合わせください',
      closed: '店舗にお問い合わせください',
      facilities: ['ロッカー', 'マシン完備'],
    },
  },
  {
    name: 'zen place pilates 明大前（近隣）',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 22,
    reviews: [
      {
        author: 'R.K',
        rating: 5,
        date: '2週間前',
        text: 'インストラクターの質が高く、初心者でも丁寧に教えてもらえます。マットもマシンも両方受けられるのが嬉しい。',
      },
      {
        author: 'M.S',
        rating: 5,
        date: '1ヶ月前',
        text: '全国150店舗以上あるので、出張先でも通えるのが便利です。レッスンの質が安定しています。',
      },
      {
        author: 'A.N',
        rating: 4,
        date: '3週間前',
        text: '体験レッスン1,000円で試せました。少人数制で丁寧な指導が魅力。継続して通いたいと思えるスタジオです。',
      },
    ],
    price: 'マットグループ月4回 9,625円〜',
    trial: '体験レッスン 1,000円',
    features: ['マット&マシン', '初心者歓迎', '全国店舗利用可', '男性OK'],
    description: '全国150店舗以上展開の大手ピラティススタジオ。世界水準の教育を受けたインストラクターが本格的なピラティスレッスンを提供。マットグループ、マシン（リフォーマー）グループ、プライベートレッスンと幅広いメニュー。マットグループ月4回9,625円〜。男性も利用可能。',
    access: '明大前駅から近隣エリア',
    address: '東京都（明大前近隣）',
    popularPlan: {
      name: 'マットグループ月4回プラン',
      description: 'マットグループレッスンを月4回受講できる人気プラン。',
      price: '月4回 9,625円〜（税込）',
    },
    options: [
      'マットグループ月4回（9,625円〜）',
      'マットグループ月6回（13,200円〜）',
      'フリープラン（15,400円〜）',
      'プライベートレッスン追加（1回 9,900円〜）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi'],
    },
  },
  {
    name: 'Re&Pilates 明大前（近隣）',
    image: '/images/studios/re-and-pilates.webp',
    rating: 4.7,
    reviewCount: 24,
    reviews: [
      {
        author: 'T.I',
        rating: 5,
        date: '5日前',
        text: 'DKピラティスをベースにしたレッスンが受けられます。理学療法の知識が活かされた指導で、身体の使い方が変わりました。',
      },
      {
        author: 'H.W',
        rating: 5,
        date: '1週間前',
        text: 'パフォーマンス向上やコンディショニングに特化したプログラムが魅力。スポーツをしている方にもおすすめです。',
      },
      {
        author: 'N.A',
        rating: 4,
        date: '2週間前',
        text: '少人数制で一人ひとりに丁寧な指導。身体の悩みに寄り添ってもらえます。',
      },
    ],
    price: '料金は店舗にお問い合わせください',
    trial: '体験レッスンあり',
    features: ['DKピラティス', '理学療法ベース', 'コンディショニング', '少人数制'],
    description: 'DK（ドリー・ケラペス）ピラティスをベースにしたレッスンを提供するスタジオ。理学療法の知識が活かされたピラティスで、パフォーマンス向上やコンディショニングの調整に適しています。少人数制で一人ひとりの身体の状態に合わせた丁寧な指導が特徴。',
    access: '明大前駅から近隣エリア',
    address: '東京都（明大前近隣）',
    popularPlan: {
      name: 'レギュラーレッスン',
      description: 'DKピラティスベースの少人数制レッスン。',
      price: '料金は店舗にお問い合わせください',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['コンディショニング', 'パフォーマンス向上', '姿勢改善', 'リハビリ'],
    },
    basicInfo: {
      hours: '店舗にお問い合わせください',
      closed: '店舗にお問い合わせください',
      facilities: ['ロッカー', 'マシン完備'],
    },
  },
  {
    name: 'ピラティスK 明大前（近隣）',
    image: '/images/studios/pilates-k.webp',
    rating: 4.6,
    reviewCount: 197,
    reviews: [
      {
        author: 'W.K',
        rating: 5,
        date: '5日前',
        text: '女性専用のマシンピラティスで安心して通えます。おしゃれな空間でモチベーションが上がります。',
      },
      {
        author: 'U.M',
        rating: 4,
        date: '2週間前',
        text: 'グループでのマシンピラティスが楽しい。月4回11,220円〜で始められるのもコスパが良い。',
      },
      {
        author: 'Q.S',
        rating: 5,
        date: '3週間前',
        text: 'ボディメイクに特化したプログラムで、身体の変化を実感しています。',
      },
    ],
    price: '月4回 11,220円〜',
    trial: '体験レッスンあり',
    features: ['女性専用', 'マシンピラティス', '月4回 11,220円〜', '明大前近隣'],
    description: '女性専用のマシンピラティススタジオ。リフォーマーを使ったグループレッスンで、月4回11,220円〜とリーズナブル。ボディメイクに特化したプログラムが充実しており、おしゃれなスタジオ空間でモチベーション高くトレーニングできます。',
    access: '明大前駅から近隣エリア',
    address: '東京都（明大前近隣）',
    popularPlan: {
      name: '月4回プラン',
      description: '女性専用マシンピラティスグループレッスン。',
      price: '月4回 11,220円〜（税込）',
    },
    options: [
      '月4回プラン（11,220円〜）',
      '月8回プラン（料金は店舗にお問い合わせ）',
      '通い放題プラン（料金は店舗にお問い合わせ）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '美容'],
    },
    basicInfo: {
      hours: '店舗にお問い合わせください',
      closed: '店舗にお問い合わせください',
      facilities: ['ロッカー', 'リフォーマー完備', 'パウダールーム'],
    },
  },
  {
    name: 'ELEMENT 明大前（近隣）',
    officialUrl: 'https://t.felmat.net/fmcl?ak=U11199J.1.V154352I.U1357808',
    image: '/images/studios/element.webp',
    rating: 4.7,
    reviewCount: 14,
    reviews: [
      {
        author: 'D.H',
        rating: 5,
        date: '3日前',
        text: '30分のパーソナルレッスンで効率的にトレーニングできます。マンツーマンだから集中できて効果を実感。',
      },
      {
        author: 'P.T',
        rating: 4,
        date: '1週間前',
        text: '月4回22,000円でパーソナルが受けられるのはコスパが良いです。トレーナーさんの指導も丁寧。',
      },
      {
        author: 'G.K',
        rating: 5,
        date: '2週間前',
        text: '忙しい日でも30分サクッと通えるのがありがたい。体験3,300円で試せました。',
      },
    ],
    price: '月4回 22,000円',
    trial: '体験レッスン 3,300円',
    features: ['マンツーマン30分', '月4回 22,000円', '体験3,300円', '明大前近隣'],
    description: 'マシンピラティス専門のパーソナルジム。1回30分の短時間マンツーマンレッスンで、忙しい方でも効率的にトレーニングが可能。月4回22,000円とパーソナルの中ではリーズナブルな料金設定。体験レッスンは3,300円。',
    access: '明大前駅から近隣エリア',
    address: '東京都（明大前近隣）',
    popularPlan: {
      name: '月4回プラン',
      description: 'マシンピラティス専門トレーナーによる30分マンツーマンレッスン。',
      price: '月4回 22,000円（税込）',
    },
    options: [
      '月4回プラン（22,000円）',
      '体験レッスン（3,300円）',
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
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！明大前エリアのスタジオはほとんどが初心者歓迎。URBAN CLASSIC PILATESは予約不要で30分のサーキット形式なので気軽に始められます。zen place pilatesは初心者向けクラスが充実しており、Re&Pilatesは少人数制で丁寧な指導が受けられます。',
  },
  {
    question: '明大前のピラティス料金相場はどのくらいですか？',
    answer: 'グループレッスンの料金相場は月4回で9,625円〜11,220円程度。URBAN CLASSIC PILATESは予約不要で月4回9,680円。パーソナルレッスンはELEMENTが月4回22,000円。体験レッスンは1,000円〜3,300円が一般的です。',
  },
  {
    question: '予約不要で通えるスタジオはありますか？',
    answer: 'はい、URBAN CLASSIC PILATES 明大前店は予約不要で通えます。30分のサーキット形式で、好きな時間にふらっと立ち寄れるのが魅力。忙しい方や予定が変わりやすい方に特におすすめです。',
  },
  {
    question: 'マシンピラティスとマットピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。zen place pilatesは両方に対応しています。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回（月4〜8回）がおすすめ。慣れてきたら週2〜3回に増やすと効果を実感しやすくなります。継続が大切なので、無理のないペースで始めましょう。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、ピラティスはダイエット効果があります。インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に。最低でも2〜3ヶ月は継続することが大切です。食事管理も並行するとより効果的。',
  },
  {
    question: '体験レッスンの持ち物は？',
    answer: '動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。マシンピラティスでは靴下着用が必須のスタジオが多いので、滑り止め付きソックスがあると便利です。',
  },
  {
    question: '女性専用スタジオはありますか？',
    answer: 'はい、ピラティスKは女性専用のマシンピラティススタジオです。女性だけの空間でリラックスしてトレーニングに集中できます。',
  },
  {
    question: 'ピラティスとヨガの違いは？',
    answer: 'ピラティスは体幹を鍛えることに特化したエクササイズ。ヨガは柔軟性と精神的なリラックスを重視します。ピラティスは筋力強化、ヨガは心身のバランスを整えることが主な目的です。',
  },
  {
    question: '明大前から通いやすいエリアは？',
    answer: '明大前は京王線と京王井の頭線の交差駅です。京王線で笹塚・代田橋方面、井の頭線で下北沢・渋谷方面のスタジオにもアクセスしやすいです。沿線で複数のスタジオを比較検討するのもおすすめです。',
  },
]

export default function MeidaimaePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '明大前', url: 'https://pilates-biyori.com/area/meidaimae/' },
      ]} />

      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月21日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス明大前おすすめ5選！<br className="hidden md:block" />
              人気スタジオの料金プランを簡単比較！
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>
              {' > '}
              <Link href="/area" className="hover:text-warm-800 transition">地域別</Link>
              {' > '}
              <span className="text-warm-600">明大前</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="明大前" />

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「明大前で人気のピラティススタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、京王線・京王井の頭線「明大前駅」周辺でおすすめのピラティススタジオ5選をまとめました。明大前は京王線と井の頭線の乗り換え駅として利便性が高く、新宿にも渋谷にもアクセス抜群。学生街の雰囲気と閑静な住宅地が共存する落ち着いたエリアです。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>明大前でピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金やレッスン内容を比較したい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>予約不要で気軽に通えるスタジオがいい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>パーソナルレッスンで効率的に鍛えたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>コスパの良いスタジオを知りたい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="明大前" />

        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">明大前のおすすめピラティススタジオ5選</h2>
            <div className="space-y-8">
              {studios.map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white" id="kodawari">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">月額1万円前後で通えるスタジオ。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• URBAN CLASSIC PILATES（月4回 9,680円）</li>
                  <li className="text-warm-700">• zen place pilates（月4回 9,625円〜）</li>
                  <li className="text-warm-700">• ピラティスK（月4回 11,220円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">マンツーマンで効果を最大化。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ELEMENT（マンツーマン30分・月4回 22,000円）</li>
                  <li className="text-warm-700">• Re&Pilates（理学療法ベース・少人数制）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">気軽に通いたい</h3>
                <p className="text-warm-600 text-sm mb-4">予約不要・短時間で通えるスタジオ。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• URBAN CLASSIC PILATES（予約不要・30分）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-warm-50" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">明大前のピラティス料金相場【2026年4月最新】</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-warm-800 text-white">
                    <th className="px-4 py-3 text-left">種別</th>
                    <th className="px-4 py-3 text-left">料金相場</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">9,625円〜11,220円</td></tr>
                  <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン（月4回）</td><td className="px-4 py-3">22,000円〜</td></tr>
                  <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">1,000円〜3,300円</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              明大前は学生街のため比較的リーズナブルな料金設定のスタジオが多いエリアです。京王線沿線の笹塚・代田橋エリアや、井の頭線沿線の下北沢・渋谷エリアと比較検討する方も多く、沿線を活かした通い方がおすすめ。予約不要で通えるURBAN CLASSIC PILATESは忙しい学生や社会人に特に人気です。
            </p>
          </div>
        </section>

        <section className="py-16 bg-white" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">明大前でスタジオを選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">京王線・井の頭線の乗り換えを活用する</h3>
                <p className="text-warm-600 leading-relaxed">明大前は京王線と京王井の頭線の乗り換え駅です。近隣の笹塚、代田橋、下北沢方面にもスタジオがあるので、沿線を活かして比較検討すると選択肢が広がります。通勤経路上のスタジオを選ぶと継続しやすいです。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">大学の授業期間は周辺が混雑することも</h3>
                <p className="text-warm-600 leading-relaxed">明治大学和泉キャンパスが近いため、授業期間中は駅周辺や飲食店が混雑します。スタジオへの通いやすさに影響する場合があるので、ピーク時間を避けて予約すると快適に通えます。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの契約条件を確認</h3>
                <p className="text-warm-600 leading-relaxed">入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いです。自分のライフスタイルに合った期間かどうかを確認しましょう。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも視野に入れよう</h3>
                <p className="text-warm-600 leading-relaxed">明大前だけでなく、<Link href="/area/shimokitazawa" className="text-warm-700 underline hover:text-warm-900">下北沢</Link>、<Link href="/area/sasazuka" className="text-warm-700 underline hover:text-warm-900">笹塚</Link>、<Link href="/area/shinjuku" className="text-warm-700 underline hover:text-warm-900">新宿</Link>エリアも検討してみましょう。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-warm-50" id="trial-guide">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2>
            <div className="bg-warm-50 rounded-lg p-8 border border-warm-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：レッスン中の水分補給に。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは靴下着用必須のスタジオが多い。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>の方がフォーム確認しやすい。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオも。事前確認を。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>明大前エリアの豆知識：</strong>明大前は学生街ならではのリーズナブルな飲食店が多く、レッスン後のカフェタイムも楽しめます。京王線と井の頭線の2路線が使えるため、仕事帰りや学校帰りに立ち寄りやすいのが魅力。URBAN CLASSIC PILATESなら予約不要なので、急に時間が空いた時にもサクッと通えます。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないピラティススタジオの選び方</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など、目的によって最適なスタジオは異なります。コンディショニング重視ならRe&Pilates、効率重視ならELEMENT、コスパ重視ならURBAN CLASSIC PILATESがおすすめです。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">明大前エリアの料金相場は、グループ月4回で9,625円〜11,220円、パーソナル月4回で22,000円。無理なく継続できる予算を決めましょう。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">気になるスタジオを2〜3つピックアップして体験レッスンに行きましょう。1,000円〜3,300円で体験できます。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">明大前は京王線と井の頭線の2路線が利用でき、新宿にも渋谷にもアクセス良好。通勤・通学経路上のスタジオを選ぶと継続しやすいです。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-warm-50" id="faq">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2>
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
                    <div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white" id="summary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2>
            <p className="text-warm-600 leading-relaxed mb-6">今回は明大前のおすすめピラティススタジオ5選をご紹介してきましたが、いかがでしたか？</p>
            <p className="text-warm-600 leading-relaxed mb-6">明大前は京王線と井の頭線の乗り換え駅として交通利便性が高く、予約不要のURBAN CLASSIC PILATESから、理学療法ベースのRe&Pilates、大手zen place pilatesまで、個性豊かなスタジオが揃っています。</p>
            <p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p>
            <p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p>
          </div>
        </section>

        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン1,000円〜3,300円。<br />まずは気軽に体験してみましょう。</p>
            <Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link>
          </div>
        </section>
      </main>

      <RelatedAreas currentSlug="meidaimae" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
