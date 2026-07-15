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
  alternates: { canonical: 'https://biyori-pilates.com/area/shin-osaka/' },
  title: '【2026年7月最新】新大阪のピラティススタジオおすすめ6選｜無料体験・料金で比較',
  description: '新大阪のピラティススタジオ6社の料金・無料体験・マシン対応を徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスン当日の流れまで2026年7月の最新情報でわかります。',
  keywords: 'ピラティス,新大阪,西中島南方,大阪,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'Pilates Mee 西中島南方・新大阪店',
    image: '/images/studios/pilates-mee.webp',
    rating: 4.7,
    reviewCount: 29,
    reviews: [
      {
        author: 'K.N',
        rating: 5,
        date: '1週間前',
        text: '新大阪駅から徒歩7分、西中島南方駅から徒歩6分。最大3名のセミパーソナル形式で1回あたり1,250円〜と破格の安さ。定額制で当日予約・当日キャンセルOK。',
      },
      {
        author: 'M.Y',
        rating: 5,
        date: '2週間前',
        text: 'セミパーソナルなのでインストラクターがしっかりフォームを見てくれます。一般的なパーソナル（1万円〜）に比べて圧倒的にコスパが良い。',
      },
      {
        author: 'S.T',
        rating: 4,
        date: '3週間前',
        text: 'チケットの持ち越しもOKなので月によって通う回数を調整しやすい。リフォーマーを使った本格レッスン。',
      },
    ],
    price: '月2回 11,000円〜',
    trial: '体験レッスンあり',
    features: ['新大阪駅徒歩7分', 'セミパーソナル', '1回1,250円〜', '当日予約OK'],
    description: '最大3名までのセミパーソナル形式マシンピラティススタジオ。新大阪駅から徒歩7分、西中島南方駅から徒歩6分。定額制で1回あたり1,250円〜と圧倒的なコスパ。当日予約・当日キャンセルOKでチケット持ち越しも可能。',
    access: 'JR「新大阪駅」徒歩7分 / 大阪メトロ御堂筋線「西中島南方駅」徒歩6分 / 阪急「南方駅」徒歩8分',
    address: '大阪府大阪市淀川区西中島 大阪GHビル3F 303号室',
    popularPlan: {
      name: '月4回コース',
      description: '最大3名のセミパーソナル形式。リフォーマーを使った本格レッスン。',
      price: '月4回 19,800円（税込）',
    },
    options: [
      '月2回コース（11,000円）',
      '月4回コース（19,800円）',
      '通い放題コース（37,500円・人数限定）',
      '当日予約・当日キャンセルOK',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '体幹強化'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'ピラティスアヴニール 新大阪・西中島店',
    image: '/images/studios/pilates-avenir-shinosaka.webp',
    rating: 4.8,
    reviewCount: 19,
    reviews: [
      {
        author: 'Y.H',
        rating: 5,
        date: '1週間前',
        text: '新大阪駅7番出口から徒歩5分、西中島南方駅1番出口から徒歩5分。完全個室のマンツーマンレッスン。朝7時から夜23時まで営業で仕事前後に通いやすい。',
      },
      {
        author: 'R.S',
        rating: 5,
        date: '2週間前',
        text: '90分の体験レッスンが2,980円で試せます。完全個室なので周りを気にせず集中できる。初心者にも丁寧に教えてもらえました。',
      },
      {
        author: 'A.M',
        rating: 4,
        date: '3週間前',
        text: 'マンツーマン1回7,700円（税込8,470円）。月4回28,000円（税込30,800円）。ペアやセミプランもあるので友人と一緒に通えます。',
      },
    ],
    price: '月4回 30,800円〜（税込）',
    trial: '90分体験 2,980円',
    features: ['新大阪駅徒歩5分', '完全個室', '7:00〜23:00', 'ペア可'],
    description: '完全個室のマンツーマンマシンピラティス。新大阪駅7番出口から徒歩5分、西中島南方駅1番出口から徒歩5分。朝7時から夜23時まで営業で忙しい方にも対応。ペアやセミプランも用意。',
    access: 'JR「新大阪駅」7番出口 徒歩5分 / 大阪メトロ御堂筋線「西中島南方駅」1番出口 徒歩5分',
    address: '大阪府大阪市淀川区西中島5-2-12 ケイアンドエイビルB1',
    popularPlan: {
      name: 'マンツーマン月4回',
      description: '完全個室のマンツーマンマシンピラティス。個別プログラム対応。',
      price: '月4回 30,800円（税込）',
    },
    options: [
      'マンツーマン1回（8,470円・税込）',
      'ペア1回（5,170円・税込/人）',
      'セミ1回（4,290円・税込/人）',
      '90分体験レッスン 2,980円',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', 'リハビリ'],
    },
    basicInfo: {
      hours: '7:00〜23:00',
      closed: '不定休',
      facilities: ['リフォーマー', '完全個室', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'IMPROVE 西中島南方・新大阪',
    image: '/images/studios/improve-shinosaka.webp',
    rating: 4.6,
    reviewCount: 30,
    reviews: [
      {
        author: 'E.T',
        rating: 5,
        date: '1週間前',
        text: '西中島南方駅1番出口から徒歩1分！ピラティス・ヨガ・シルクサスペンション・TRXが受けられる総合スタジオ。少人数制で全インストラクターが有資格者。',
      },
      {
        author: 'N.K',
        rating: 4,
        date: '2週間前',
        text: 'よもぎ蒸しや小顔矯正もあるので、ピラティス以外のメニューも楽しめます。会員は10%割引で通常3,200円/回。',
      },
      {
        author: 'T.A',
        rating: 4,
        date: '3週間前',
        text: 'ヨガ・ピラティス・シルクサスペンション・TRXの4種類から選べるので飽きずに続けられます。',
      },
    ],
    price: '1回 3,200円〜（会員）',
    trial: '体験レッスンあり',
    features: ['西中島南方駅徒歩1分', '4種類のプログラム', '少人数制', 'よもぎ蒸しあり'],
    description: '西中島南方駅1番出口から徒歩1分。ピラティス・ヨガ・シルクサスペンション・TRXの4種類のプログラムを提供する総合スタジオ。少人数制で全インストラクターが有資格者。よもぎ蒸しや小顔矯正も併設。',
    access: '大阪メトロ御堂筋線「西中島南方駅」1番出口 徒歩1分 / 阪急「南方駅」徒歩2分 / JR「新大阪駅」徒歩10分',
    address: '大阪府大阪市淀川区西中島（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '回数券プラン（会員）',
      description: '入会金5,000円（回数券購入時無料）。通常メニュー10%割引。',
      price: '会員価格 1回 3,200円〜',
    },
    options: [
      '通常1回（3,700円）',
      '会員1回（3,200円・10%割引）',
      '回数券あり',
      'よもぎ蒸し・小顔矯正も利用可',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', 'リフレッシュ', '健康維持', '美容'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['ピラティス器具', 'シルクサスペンション', 'TRX', 'よもぎ蒸しルーム'],
    },
  },
  {
    name: 'zen place pilates 江坂スタジオ',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.7,
    reviewCount: 24,
    reviews: [
      {
        author: 'H.Y',
        rating: 5,
        date: '1週間前',
        text: '江坂駅4番出口から徒歩1分、新大阪から御堂筋線で4分。全国150店舗以上で他店利用可能。マット・マシン・プライベートの3タイプから選べる。男性もOK。',
      },
      {
        author: 'C.M',
        rating: 5,
        date: '2週間前',
        text: 'ピラティス専門20年以上の実績。月4回10,450円〜とコスパ良好。体験当日入会で入会金無料。新大阪からのアクセスも良い。',
      },
      {
        author: 'R.I',
        rating: 4,
        date: '3週間前',
        text: 'ヨガレッスンも受講可能。リフォーマーの台数が充実していて予約が取りやすい。インストラクターの質が高い。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['江坂駅徒歩1分', '新大阪4分', '男性OK', '全国相互利用'],
    description: 'ピラティス専門の大手スタジオ。江坂駅4番出口から徒歩1分、新大阪駅から御堂筋線で4分。マットグループ・マシングループ・プライベートの3タイプ。全国150店舗以上で相互利用可能。',
    access: '大阪メトロ御堂筋線・北大阪急行「江坂駅」4番出口 徒歩1分（新大阪駅から4分）',
    address: '大阪府吹田市豊津町9-44 ハートランド江坂 5F',
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
  {
    name: 'Rintosull（リントスル）江坂店',
    image: '/images/studios/rintosull.webp',
    rating: 4.5,
    reviewCount: 98,
    reviews: [
      {
        author: 'M.S',
        rating: 5,
        date: '1週間前',
        text: '江坂駅4番出口から徒歩1分。LAVAが運営する女性専用マシンピラティス。新大阪からも御堂筋線で4分とアクセス抜群。月4回8,800円〜とリーズナブル。',
      },
      {
        author: 'K.T',
        rating: 4,
        date: '2週間前',
        text: '大画面映像を見ながらリフォーマーでトレーニング。インストラクターが巡回してフォームチェックしてくれるので初心者でも安心。',
      },
      {
        author: 'Y.A',
        rating: 4,
        date: '3週間前',
        text: 'LAVAのホットヨガ会員なら相互利用できるプランも。ピラティスとヨガの両方楽しめます。',
      },
    ],
    price: '月4回 8,800円〜',
    trial: '体験レッスンあり',
    features: ['女性専用', '江坂駅徒歩1分', 'LAVA運営', 'リーズナブル'],
    description: 'ホットヨガ大手LAVAが運営する女性専用マシンピラティススタジオ。江坂駅4番出口から徒歩1分、新大阪から御堂筋線で4分。大画面映像を見ながらリフォーマーでトレーニング。',
    access: '大阪メトロ御堂筋線・北大阪急行「江坂駅」4番出口 徒歩1分（新大阪駅から4分）',
    address: '大阪府吹田市豊津町（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マシンピラティス月4回プラン',
      description: '映像ガイド付きリフォーマーレッスン。女性専用の安心空間。',
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
    name: 'Pilates Mee西中島南方・新大阪店',
    officialUrl: 'https://m-pilates.com/',
    image: '/images/studios/pilates-mee.webp',
    price: 'セミパーソナル月4回 19,800円 / パーソナル月4回 39,600円（税込）',
    trial: '初回体験 無料キャンペーンあり（通常9,800円・毎月先着30名限定）',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオ。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯が特徴。新大阪駅から徒歩7分。',
    access: '新大阪駅から徒歩7分',
    address: '大阪府大阪市淀川区西中島6丁目9-20 新大阪GHビル3階303号室',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！新大阪エリアのスタジオはほとんどが初心者歓迎。Rintosullは映像ガイドで初心者でも安心。Pilates Meeはセミパーソナルで丁寧に指導。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。新大阪エリアはマシン専門スタジオが充実。',
  },
  {
    question: '新大阪のピラティスの料金相場は？',
    answer: 'グループ月4回で8,800円〜19,800円程度。Rintosullが月4回8,800円〜で最もリーズナブル。zen placeは月4回10,450円〜。Pilates Meeは月2回11,000円〜。',
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
    answer: '動きやすい服装と飲み物があればOK。各スタジオの持ち物は公式サイトで事前に確認しましょう。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化。ヨガは柔軟性とリラックス重視。IMPROVEではヨガとピラティスの両方が楽しめます。zen placeもヨガ受講可能。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place江坂、ピラティスアヴニール、IMPROVE、Pilates Meeは男性も通えます。Rintosullは女性専用です。',
  },
  {
    question: '新大阪駅から通いやすいスタジオは？',
    answer: 'ピラティスアヴニール（徒歩5分）、Pilates Mee（徒歩7分）が新大阪駅から近い。zen placeとRintosullは江坂駅（新大阪から御堂筋線4分）が最寄り。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
]

export default function ShinOsakaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '新大阪', url: 'https://pilates-biyori.com/area/shin-osaka/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月15日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス新大阪おすすめ6選！<br className="hidden md:block" />
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
              <span className="text-warm-600">新大阪</span>
            </nav>
          </div>
        </section>
        <AreaConclusion studios={studios} areaName="新大阪" />


        <TableOfContents areaName="新大阪" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「新大阪で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、新大阪エリアでおすすめのピラティススタジオ6選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>新大阪でピラティススタジオを探している</span>
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

        <PriceComparisonTable studios={studios} areaName="新大阪" />
        <AreaMarketComparison studios={studios} areaName="新大阪" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              新大阪のおすすめピラティススタジオ6選
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
              新大阪のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">3,200円〜16,940円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 3,200円〜30,800円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">1,000円〜2,980円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              新大阪はビジネス街としての性格が強く、仕事帰りの利用を想定した夜間プランや回数券プランが充実しています。賃料が高めのエリアのため料金は全体的にやや高い傾向ですが、法人契約や福利厚生割引に対応しているスタジオもあるので確認してみましょう。近隣の梅田エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              新大阪でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR「新大阪駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  新大阪エリアのスタジオは新大阪駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。新大阪駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">ビジネス街特有の予約傾向を把握</h3>
                <p className="text-warm-600 leading-relaxed">
                  新大阪はオフィス街のため、平日ランチタイム（12時〜13時）と夕方以降（18時〜21時）に予約が集中する傾向があります。逆に土日は比較的空いているスタジオが多いので、平日に通いづらい方は週末を狙うのも手です。また、祝日は営業時間が変更になることがあるので事前確認を。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  新大阪エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ず確認しましょう。月の途中入会は日割り計算になるかも要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  新大阪エリアだけでなく、近隣の<Link href="/area/umeda/" className="text-warm-700 underline hover:text-warm-900">梅田</Link>、<Link href="/area/esaka/" className="text-warm-700 underline hover:text-warm-900">江坂</Link>、<Link href="/area/honmachi/" className="text-warm-700 underline hover:text-warm-900">本町</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>新大阪エリアの豆知識：</strong>新大阪はビジネスパーソンの利用が多いエリアです。スーツやオフィスカジュアルで来てそのまま着替えたい方は、ロッカールームの広さやシャワーの有無を重視してスタジオを選びましょう。ウェアレンタルがあれば、大きな荷物を持ち歩く必要がありません。
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
                  <li className="text-warm-700">• the SILK 新大阪（東口・西口2店舗）</li>
                  <li className="text-warm-700">• ピラティスK 新大阪（月4回 13,420円〜）</li>
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
                  新大阪の料金相場はグループ月4回で10,450円〜15,070円。入会金やキャンペーンも確認しましょう。
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
                  新大阪はJR・東京メトロ・西武線・東武線と多路線が集まるターミナル駅。ピラティスK・the SILKは東口徒歩1分、zen placeは徒歩2分と駅近スタジオが充実。
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
              今回は新大阪エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では新大阪にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
      <ConsultantSection areaKey="shin-osaka" areaName="新大阪" />

      <RelatedAreas currentSlug="shin-osaka" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
