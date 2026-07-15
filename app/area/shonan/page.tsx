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
  alternates: { canonical: 'https://biyori-pilates.com/area/shonan/' },
  title: '【2026年7月最新】湘南のピラティス10社を比較｜無料体験2社・月額最安8,800円〜',
  description: '湘南エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,湘南,辻堂,藤沢,神奈川,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'CLUB PILATES 辻堂店',
    image: '/images/studios/club-pilates.webp',
    rating: 4.8,
    reviewCount: 73,
    reviews: [
      {
        author: 'K.S',
        rating: 5,
        date: '1週間前',
        text: 'テラスモール湘南内にあり辻堂駅直結で便利。世界最大級のピラティスブランドで15種類の器具を使った本格レッスン。無料イントロクラスで気軽に試せます。',
      },
      {
        author: 'M.T',
        rating: 5,
        date: '2週間前',
        text: '4段階のレベル分けで初心者でも安心。インストラクター全員が500時間以上の研修を受けた資格保持者。男性もOKです。',
      },
      {
        author: 'A.Y',
        rating: 4,
        date: '3週間前',
        text: '8つのプログラムがあり飽きずに続けられます。朝7時から営業で出勤前にも通える。湘南エリアで最も充実した設備。',
      },
    ],
    price: '月4回 14,190円〜',
    trial: '体験レッスン 無料（30分イントロクラス）',
    features: ['辻堂駅直結', '世界最大級', '15種類の器具', '男性OK'],
    description: '世界最大級のマシンピラティスブランド。テラスモール湘南ヴィレッジ1Fに位置し、辻堂駅直結でアクセス抜群。リフォーマー・スプリングボード・TRX・チェアなど15種類のマシン・器具を完備。8つのプログラムと4段階のレベル分けで初心者から上級者まで対応。',
    access: 'JR東海道線・湘南新宿ライン「辻堂駅」直結 テラスモール湘南ヴィレッジ1F',
    address: '神奈川県藤沢市辻堂神台1-3-1 テラスモール湘南 湘南ヴィレッジ1F',
    popularPlan: {
      name: 'グループ月4回プラン',
      description: '15種類の器具を使った本格グループレッスン。4段階のレベル分けで安心。',
      price: '月4回 14,190円（税込）',
    },
    options: [
      '月8回プラン（26,290円）',
      '通い放題プラン（40,590円）',
      'ドロップイン（1回 3,850円〜4,290円）',
      '入会金 5,500円',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['体幹強化', '姿勢改善', 'ボディメイク', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日 7:00〜18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'スプリングボード', 'TRX', 'チェア', 'Bosu'],
    },
  },
  {
    name: 'Rintosull（リントスル）辻堂店',
    image: '/images/studios/rintosull.webp',
    rating: 4.6,
    reviewCount: 82,
    reviews: [
      {
        author: 'Y.N',
        rating: 5,
        date: '1週間前',
        text: 'Luz湘南辻堂6Fにあり、辻堂駅北口から徒歩3分。大画面の映像を見ながらリフォーマーでトレーニングでき、インストラクターがフォームをチェックしてくれます。',
      },
      {
        author: 'R.I',
        rating: 4,
        date: '2週間前',
        text: 'LAVAが運営するマシンピラティス専門スタジオ。女性専用で安心。月4回8,800円〜とリーズナブルな価格設定が魅力。',
      },
      {
        author: 'S.K',
        rating: 4,
        date: '3週間前',
        text: '映像と音楽に合わせてレッスンが進むので初心者でも迷わずできます。買い物帰りに通えるのが便利。',
      },
    ],
    price: '月4回 8,800円〜',
    trial: '体験レッスン あり（キャンペーン時無料）',
    features: ['女性専用', '辻堂駅徒歩3分', 'LAVA運営', 'リーズナブル'],
    description: 'ホットヨガ大手LAVAが運営する女性専用マシンピラティススタジオ。Luz湘南辻堂6Fに位置し、辻堂駅北口から徒歩3分。大画面映像を見ながらリフォーマーでトレーニング。インストラクターが巡回しフォームをチェック。',
    access: 'JR東海道本線・湘南新宿ライン「辻堂駅」北口 徒歩3分',
    address: '神奈川県藤沢市辻堂神台1-2-12 Luz湘南辻堂6F',
    popularPlan: {
      name: 'マシンピラティス月4回プラン',
      description: '映像を見ながらリフォーマーでトレーニング。女性専用の安心空間。',
      price: '月4回 8,800円（税込）',
    },
    options: [
      '通い放題プラン（13,800円〜）',
      'LAVA相互利用オプションあり',
      '施設利用料 2,500円（入会時）',
      '入会金 5,000円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '大画面モニター', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'VIE PILATES STUDIO 湘南辻堂',
    image: '/images/studios/vie-pilates-shonan.webp',
    rating: 4.7,
    reviewCount: 27,
    reviews: [
      {
        author: 'E.M',
        rating: 5,
        date: '1週間前',
        text: '資格保有の経験豊富なインストラクターによる少人数制レッスンが魅力。ピラティス・ヨガ・TRXの3つのプログラムでバランスよくトレーニングできます。',
      },
      {
        author: 'H.K',
        rating: 5,
        date: '2週間前',
        text: 'グループレッスンは最大5〜8名の少人数制。1回55分でしっかり効果を実感。体験レッスン1,650円で気軽に試せました。',
      },
      {
        author: 'N.S',
        rating: 4,
        date: '3週間前',
        text: 'STOTT PILATES認定のインストラクター養成コースも併設。指導の質が非常に高いです。',
      },
    ],
    price: '1回 2,500円〜',
    trial: '体験レッスン 1,650円',
    features: ['少人数制', '3プログラム', 'STOTT認定', '養成コース併設'],
    description: '資格保有の経験豊富なインストラクターによる少人数制グループレッスンとプライベートレッスンを提供。ピラティス・ヨガ・TRXの3プログラムでインナーマッスルを強化。STOTT PILATES認定インストラクター養成コースも併設。',
    access: 'JR東海道線「辻堂駅」南口 徒歩5分',
    address: '神奈川県藤沢市辻堂2-3-1 マリス湘南3F',
    popularPlan: {
      name: 'グループレッスン月4回',
      description: '最大5〜8名の少人数制。ピラティス・ヨガ・TRXから選べる。',
      price: '月4回プラン（詳細は公式サイト）',
    },
    options: [
      '1回券（2,500円〜）',
      'プライベートレッスンあり',
      '体験レッスン 1,650円',
      'STOTT PILATES養成コースあり',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'リハビリ', 'インストラクター養成'],
    },
    basicInfo: {
      hours: '平日 8:30〜21:30 / 土日 8:00〜19:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', 'TRX', '更衣室'],
    },
  },
  {
    name: 'TSUTAYA Conditioning PILATES 湘南T-SITE店',
    image: '/images/studios/tsutaya-conditioning-pilates-shonan.webp',
    rating: 4.5,
    reviewCount: 26,
    reviews: [
      {
        author: 'C.M',
        rating: 5,
        date: '1週間前',
        text: '女性専用で少人数制のマシンピラティス。周りの目を気にせず自分のペースで集中できるのが嬉しい。湘南T-SITEの雰囲気も素敵。',
      },
      {
        author: 'K.T',
        rating: 4,
        date: '2週間前',
        text: '1回3,300円で都度払い可能。定額制ではないので自分のペースで通えます。予約不要ではなく事前予約制。',
      },
      {
        author: 'A.O',
        rating: 4,
        date: '3週間前',
        text: 'TSUTAYAが運営する新しいスタイルのピラティス。藤沢駅からバス15分と少し距離がありますが、湘南T-SITEでの買い物と合わせて楽しめます。',
      },
    ],
    price: '1回 3,300円',
    trial: '体験レッスンあり',
    features: ['女性専用', '少人数制', '都度払い可', '湘南T-SITE内'],
    description: '女性専用・少人数制のマシンピラティススタジオ。TSUTAYAが運営する「TSUTAYA Conditioning」のピラティス専門店。湘南T-SITE内に位置し、買い物と合わせて楽しめる。都度払い制で気軽に通える。',
    access: '小田急江ノ島線「本鵠沼駅」徒歩約15分 / JR「藤沢駅」北口バス約15分',
    address: '神奈川県藤沢市辻堂元町6-20-1 湘南T-SITE内',
    popularPlan: {
      name: '都度払いプラン',
      description: '女性専用マシンピラティス。1回ごとの都度払いで気軽に通える。',
      price: '1回 3,300円（税込）',
    },
    options: [
      '1回 3,300円（都度払い）',
      '回数券あり（詳細は公式サイト）',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['姿勢改善', '健康維持', 'リフレッシュ', 'ボディメイク'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'zen place pilates 藤沢スタジオ',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.7,
    reviewCount: 30,
    reviews: [
      {
        author: 'T.H',
        rating: 5,
        date: '1週間前',
        text: '藤沢駅から徒歩2分とアクセス抜群。全国150店舗以上で他店利用可能なので出張先でも通える。マットもマシンも両方受けられます。',
      },
      {
        author: 'Y.M',
        rating: 5,
        date: '2週間前',
        text: 'ピラティス専門で20年以上の実績。インストラクターの質が高く、マットグループ・マシングループ・プライベートの3タイプから選べる。',
      },
      {
        author: 'R.A',
        rating: 4,
        date: '3週間前',
        text: '月4回10,450円〜と湘南エリアではコスパ良好。体験当日入会で入会金無料。男性もOKで夫婦で通っています。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['藤沢駅徒歩2分', '全国相互利用', '男性OK', '20年以上の実績'],
    description: 'ピラティス専門の大手スタジオ。藤沢駅から徒歩2分。マットグループ・マシングループ・プライベートの3タイプ。全国150店舗以上で相互利用可能。ピラティス専門20年以上の実績と高品質なインストラクター。',
    access: 'JR東海道線・小田急江ノ島線「藤沢駅」南口 徒歩2分',
    address: '神奈川県藤沢市鵠沼石上1-4-5 AIビル 4F',
    popularPlan: {
      name: 'フリープラン（マットグループ）',
      description: 'マットグループレッスン通い放題。全国店舗で相互利用可能。',
      price: '月額 16,940円（税込）',
    },
    options: [
      '月4回プラン（10,450円〜）',
      'マシングループ体験（3,000円）',
      'プライベートレッスン（体験 9,900円）',
      '体験当日入会で入会金無料',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', 'ロッカー', '更衣室'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！湘南・辻堂エリアのスタジオはほとんどが初心者歓迎。CLUB PILATESは4段階のレベル分け、Rintosullは映像ガイドで初心者でも安心です。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。湘南エリアはマシン専門スタジオが充実しています。',
  },
  {
    question: '湘南エリアのピラティスの料金相場は？',
    answer: 'グループ月4回で8,800円〜14,190円程度。Rintosullが月4回8,800円〜で最もリーズナブル。zen placeは月4回10,450円〜。CLUB PILATESは月4回14,190円〜。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に増やしましょう。大切なのは継続することです。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2-3ヶ月の継続が大切です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOK。CLUB PILATESは無料イントロクラスあり。各スタジオの持ち物は事前に確認しましょう。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化。ヨガは柔軟性とリラックス重視。VIE PILATESではヨガクラスも受講できます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'CLUB PILATES辻堂、zen place藤沢、VIE PILATESは男性も通えます。Rintosull、TSUTAYA Conditioning PILATESは女性専用です。',
  },
  {
    question: '無料で体験できるスタジオは？',
    answer: 'CLUB PILATESは無料の30分イントロクラスあり。zen placeはグループ体験1,000円。VIE PILATESは体験1,650円。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
]

export default function ShonanPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '湘南・辻堂', url: 'https://pilates-biyori.com/area/shonan/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月15日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス湘南・辻堂おすすめ10選！<br className="hidden md:block" />
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
              <span className="text-warm-600">湘南・辻堂</span>
            </nav>
          </div>
        </section>
        <AreaConclusion studios={studios} areaName="湘南・辻堂" />


        <TableOfContents areaName="湘南・辻堂" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「湘南・辻堂で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、湘南・辻堂エリアでおすすめのピラティススタジオ10選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>湘南・辻堂でピラティススタジオを探している</span>
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

        <PriceComparisonTable studios={studios} areaName="湘南・辻堂" />
        <AreaMarketComparison studios={studios} areaName="湘南・辻堂" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              湘南・辻堂のおすすめピラティススタジオ10選
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
              湘南・辻堂のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">2,500円〜16,940円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 8,800円〜16,940円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜1,650円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              湘南・辻堂は海に近い開放的な雰囲気が魅力のエリアです。観光客向けの体験クラスからしっかり通える月額プランまで幅広く、リゾート感覚で通えるスタジオもあります。地元密着型スタジオは料金も良心的なので要チェックです。近隣の藤沢エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              湘南・辻堂でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR東海道線・湘南新宿ライン「辻堂駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  湘南・辻堂エリアのスタジオは辻堂駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。辻堂駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">観光シーズンの混雑に備えた予約を</h3>
                <p className="text-warm-600 leading-relaxed">
                  湘南・辻堂は観光エリアとしても人気のため、GW・夏休み・年末年始は体験レッスンの申し込みが増加します。地元の方は観光シーズンを避けた平日昼間が快適に通える時間帯。ビジター利用を受け付けるスタジオもあるので、旅行のついでに体験するのもおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">季節による料金プランの違いに注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  湘南・辻堂エリアでは季節限定のキャンペーンや、夏季限定の短期集中プランを提供するスタジオもあります。年間を通して通うなら月額制が割安ですが、特定の時期だけ通いたい方は回数券を検討しましょう。入会時のキャンペーンは時期によって内容が変わるので、タイミングを見計らうのもポイントです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  湘南・辻堂エリアだけでなく、近隣の<Link href="/area/fujisawa/" className="text-warm-700 underline hover:text-warm-900">藤沢</Link>、<Link href="/area/kamakura/" className="text-warm-700 underline hover:text-warm-900">鎌倉</Link>、<Link href="/area/yokohama/" className="text-warm-700 underline hover:text-warm-900">横浜</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>湘南・辻堂エリアの豆知識：</strong>湘南・辻堂は海沿いのエリアならではの開放感が魅力です。特に夏場は汗をかきやすいので、制汗スプレーや替えのTシャツを持参すると快適。海風で髪が乱れやすい時期は、ヘアバンドやヘアゴムも忘れずに。
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
                  <li className="text-warm-700">• the SILK 湘南・辻堂（東口・西口2店舗）</li>
                  <li className="text-warm-700">• ピラティスK 湘南・辻堂（月4回 13,420円〜）</li>
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
                  湘南・辻堂の料金相場はグループ月4回で10,450円〜15,070円。入会金やキャンペーンも確認しましょう。
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
                  湘南・辻堂はJR・東京メトロ・西武線・東武線と多路線が集まるターミナル駅。ピラティスK・the SILKは東口徒歩1分、zen placeは徒歩2分と駅近スタジオが充実。
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
              今回は湘南・辻堂エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では湘南・辻堂にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
      <ConsultantSection areaKey="shonan" areaName="湘南・辻堂" />

      <RelatedAreas currentSlug="shonan" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
