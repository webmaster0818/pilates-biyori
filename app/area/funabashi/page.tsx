import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'



export const metadata = {
  title: '【2026最新】ピラティス船橋おすすめ5選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '船橋エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,船橋,千葉,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 船橋スタジオ',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 175,
    reviews: [
      {
        author: 'K.N',
        rating: 5,
        date: '1週間前',
        text: '京成船橋駅西口から徒歩3分、JR船橋駅南口から徒歩4分。船橋最大級のピラティス専門スタジオ。マットもマシンも両方受けられるのが魅力。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '2週間前',
        text: '全国150店舗以上で相互利用可能なので出張先でも通える。男性もOKなのが嬉しい。インストラクターの質が高い。',
      },
      {
        author: 'A.M',
        rating: 4,
        date: '3週間前',
        text: '朝8:30からレッスンがあるので午前中に通えます。ピラティス専門で20年以上の実績がある。体験当日入会で入会金無料。',
      },
    ],
    price: '月4回 9,625円〜',
    trial: 'グループ体験 1,000円',
    features: ['船橋駅徒歩3分', '船橋最大級', '男性OK', '全国相互利用'],
    description: 'ピラティス専門の大手スタジオ。京成船橋駅西口から徒歩3分、JR船橋駅南口から徒歩4分。船橋最大級のスタジオで充実した設備と質の高いインストラクター陣。マットグループ・マシングループ・プライベートの3タイプ。全国150店舗以上で相互利用可能。',
    access: '京成線「船橋駅」西口改札 徒歩3分 / JR総武線「船橋駅」南口 徒歩4分',
    address: '千葉県船橋市本町4丁目41-19 本町セントラルビル 601',
    popularPlan: {
      name: 'フリープラン（マットグループ）',
      description: 'マットグループレッスン通い放題。全国店舗で相互利用可能。',
      price: '月額 14,960円（税込）',
    },
    options: [
      '月4回プラン（9,625円〜）',
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
      hours: '平日 8:30〜21:00 / 土日祝 8:30〜18:30',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'ラダーバレル', 'マット', 'ロッカー'],
    },
  },
  {
    name: 'the SILK 船橋店',
    image: '/images/studios/the-silk.webp',
    rating: 4.7,
    reviewCount: 148,
    reviews: [
      {
        author: 'E.K',
        rating: 5,
        date: '1週間前',
        text: '船橋駅から徒歩3分。女性専用で清潔感のある内装がおしゃれ。大きな窓から自然光が差し込み明るい空間。音楽に合わせたレッスンが楽しい。',
      },
      {
        author: 'N.S',
        rating: 5,
        date: '2週間前',
        text: '朝7:30から夜21:30まで営業で通いやすい。ウェア・タオル無料貸出やウォーターサーバーも完備。手ぶら体験無料で気軽に試せました。',
      },
      {
        author: 'T.M',
        rating: 4,
        date: '3週間前',
        text: '体験者の8割がピラティス未経験者とのこと。初心者向けプログラムが充実していて安心。月3回12,980円〜と始めやすい。',
      },
    ],
    price: '月3回 12,980円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', '船橋駅徒歩3分', '手ぶら体験OK', '自然光スタジオ'],
    description: '女性専用マシンピラティススタジオ。船橋駅から徒歩3分。大きな窓から自然光が差し込む明るく清潔感のある空間。音楽のリズムに合わせた独自のレッスンスタイルで初心者でも楽しく続けられます。手ぶらで体験可能。',
    access: 'JR総武線・京成線・東武野田線「船橋駅」徒歩3分',
    address: '千葉県船橋市本町1-28-1 レオセントラルスクエア3 6F',
    popularPlan: {
      name: 'Standard4（月4回）',
      description: '女性専用マシンピラティス月4回。音楽に合わせた楽しいレッスン。',
      price: '月4回 15,070円（税込）',
    },
    options: [
      'Light3（月3回 12,980円）',
      'Full（毎日1回 20,680円）',
      'Full Day（18,480円）',
      '体験・入会金・登録手数料 無料キャンペーンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '7:30〜21:30',
      closed: '年末年始（12/29〜1/3）',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム', 'ウォーターサーバー'],
    },
  },
  {
    name: 'URBAN CLASSIC PILATES 船橋店',
    image: '/images/studios/urban-classic-pilates.webp',
    rating: 4.6,
    reviewCount: 110,
    reviews: [
      {
        author: 'M.K',
        rating: 5,
        date: '1週間前',
        text: 'JR船橋駅から徒歩2分。マシンピラティスとファンクショナルトレーニングを組み合わせたサーキット形式が新鮮。予約不要で好きな時間に通える。',
      },
      {
        author: 'S.N',
        rating: 4,
        date: '2週間前',
        text: '月4回9,680円と船橋エリアでもコスパ最強。全店舗相互利用可能なので仕事先でも通える。女性専用で安心。',
      },
      {
        author: 'R.Y',
        rating: 5,
        date: '3週間前',
        text: '平日は21:30まで営業。サーキット形式なのでマシンの順番待ちがなく効率的。初心者でもスタッフが丁寧に案内してくれる。',
      },
    ],
    price: '月4回 9,680円〜',
    trial: '体験レッスンあり',
    features: ['女性専用', '船橋駅徒歩2分', '予約不要', 'サーキット形式'],
    description: 'マシンピラティスとファンクショナルトレーニングを組み合わせたサーキット形式のボディメイクスタジオ。JR船橋駅・京成船橋駅から徒歩2分。予約不要で好きな時間に通える手軽さが魅力。全店舗相互利用可能。',
    access: 'JR総武線「船橋駅」徒歩2分 / 京成本線「京成船橋駅」徒歩2分 / 東武野田線「船橋駅」徒歩2分',
    address: '千葉県船橋市本町4-3-5 興和ビル 2F',
    popularPlan: {
      name: '月8回プラン',
      description: 'マシンピラティス×ファンクショナルトレーニングのサーキット月8回。',
      price: '月8回 11,880円（税込）',
    },
    options: [
      '月4回プラン（9,680円）',
      '通い放題プラン（14,080円）',
      '入会金 11,000円',
      '全店舗相互利用可能',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '体幹強化', '運動不足解消'],
    },
    basicInfo: {
      hours: '平日 9:30〜21:30 / 土祝 9:30〜19:30',
      closed: '日曜日',
      facilities: ['リフォーマーマシン', 'ファンクショナルトレーニング器具', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Rintosull 船橋店',
    image: '/images/studios/rintosull.webp',
    rating: 4.6,
    reviewCount: 95,
    reviews: [
      {
        author: 'Y.K',
        rating: 5,
        date: '1週間前',
        text: '船橋駅から徒歩2分。LAVAグループのマシンピラティススタジオ。ホットヨガとの併用プランもあり、両方楽しめるのが魅力。',
      },
      {
        author: 'A.S',
        rating: 4,
        date: '2週間前',
        text: '月4回8,800円と船橋エリアで最もリーズナブル。体験レッスン1,000円で気軽に試せる。22:30まで営業で仕事帰りにも。',
      },
      {
        author: 'R.M',
        rating: 5,
        date: '3週間前',
        text: 'LAVAのホットヨガと併用できるのが嬉しい。マシンピラティスとヨガの両方で体を整えられる。男女共用。',
      },
    ],
    price: '月4回 8,800円〜',
    trial: '体験レッスン 1,000円',
    features: ['船橋駅徒歩2分', 'LAVA併用可', '男女共用', 'コスパ最強'],
    description: 'LAVAグループのマシンピラティス専門スタジオ。船橋駅から徒歩2分。ホットヨガLAVAとの併用プランもあり、ピラティスとヨガの両方を楽しめます。月4回8,800円〜と船橋エリアで最もリーズナブル。',
    access: 'JR総武線・京成線・東武野田線「船橋駅」徒歩2分',
    address: '千葉県船橋市本町7丁目（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マシンピラティス月4回プラン',
      description: 'リフォーマーを使ったマシンピラティス月4回。LAVA併用プランもあり。',
      price: '月4回 8,800円（税込）',
    },
    options: [
      '通い放題プラン（12,800円）',
      'LAVA併用プラン（16,800円〜）',
      '1回券（3,300円）',
      '体験レッスン 1,000円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['姿勢改善', 'ダイエット', '体幹強化', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '〜22:30（詳細は公式サイトでご確認ください）',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'シャワー'],
    },
  },
  {
    name: 'sopra 船橋店',
    image: '/images/studios/sopra-funabashi.webp',
    rating: 4.5,
    reviewCount: 88,
    reviews: [
      {
        author: 'H.T',
        rating: 5,
        date: '1週間前',
        text: 'JR船橋駅直結のシャポー南館5F。女性専用で岩盤ホットヨガとマシンピラティスの両方が楽しめる。駅直結なので雨の日でも濡れずに通える。',
      },
      {
        author: 'C.K',
        rating: 4,
        date: '2週間前',
        text: '岩盤スタジオでのホットヨガはデトックス効果抜群。マシンピラティスでインナーマッスルも鍛えられる。一石二鳥のスタジオ。',
      },
      {
        author: 'M.Y',
        rating: 5,
        date: '3週間前',
        text: '平日は23時まで営業で仕事帰りに通いやすい。JEXERグループ運営で安心感がある。入会キャンペーン中はお得に始められる。',
      },
    ],
    price: '月額プランあり（詳細は公式サイト）',
    trial: '体験レッスンあり',
    features: ['女性専用', 'JR船橋駅直結', '岩盤ホットヨガ併設', 'JEXERグループ'],
    description: 'JR船橋駅直結のシャポー南館5Fにある女性専用スタジオ。岩盤ホットヨガとマシンピラティスの両方が楽しめるハイブリッドスタジオ。JEXERグループ運営で安心。駅直結の抜群のアクセス。',
    access: 'JR総武線「船橋駅」直結（シャポー南館 5F）',
    address: '千葉県船橋市本町7丁目1-1 シャポー南館 5F',
    popularPlan: {
      name: '月額会員プラン',
      description: '岩盤ホットヨガ＆マシンピラティスが楽しめる月額プラン。',
      price: '詳細は公式サイトでご確認ください',
    },
    options: [
      '岩盤ホットヨガ＆マシンピラティス併用',
      'JEXERグループ運営',
      '入会キャンペーン実施中',
      '平日23時まで営業',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['デトックス', '姿勢改善', 'ダイエット', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '平日 9:00〜23:00 / 土日祝 8:00〜20:00',
      closed: '毎月5日・20日',
      facilities: ['リフォーマーマシン', '岩盤スタジオ', '更衣室', 'ロッカー', 'シャワー'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！船橋エリアのスタジオはほとんどが初心者歓迎。the SILKは体験者の約8割がピラティス未経験者。URBAN CLASSIC PILATESはスタッフが丁寧に案内してくれます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。船橋はマシン専門スタジオが特に充実。',
  },
  {
    question: '船橋のピラティスの料金相場は？',
    answer: 'グループ月4回で8,800円〜15,070円程度。Rintosullが月4回8,800円〜で最もリーズナブル。URBAN CLASSIC PILATESは月4回9,680円〜。zen placeは月4回9,625円〜。',
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
    answer: '動きやすい服装と飲み物があればOK。the SILKは手ぶらで体験可能（ウェア・タオル無料貸出）。Rintosullは体験1,000円。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化。ヨガは柔軟性とリラックス重視。zen placeはヨガスタジオも運営、sopraは岩盤ホットヨガとピラティスの両方が楽しめます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place船橋とRintosull船橋は男性も通えます。the SILK、URBAN CLASSIC PILATES、sopraは女性専用です。',
  },
  {
    question: '無料で体験できるスタジオは？',
    answer: 'the SILKは無料体験あり。zen placeはグループ体験1,000円。Rintosullは体験1,000円。URBAN CLASSIC PILATESも体験レッスンあり。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
]

export default function FunabashiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス船橋おすすめ5選！<br className="hidden md:block" />
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
              <span className="text-warm-600">船橋</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="船橋" />

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
              「船橋で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、船橋エリアでおすすめのピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>船橋でピラティススタジオを探している</span>
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

        <PriceComparisonTable studios={studios} areaName="船橋" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              船橋のおすすめピラティススタジオ5選
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
              船橋のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">8,800円〜15,070円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 8,800円〜15,070円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜1,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              船橋エリアの料金はスタジオのタイプや立地によって異なります。まずは体験レッスンを活用して、料金と内容のバランスが自分に合うスタジオを見つけましょう。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              船橋でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">駅前にスタジオが集中している傾向</h3>
                <p className="text-warm-600 leading-relaxed">
                  船橋エリアではスタジオの多くが駅徒歩5分圏内に集中しています。駅から離れたスタジオの場合は駐車場・駐輪場の有無を事前に確認しておくと安心です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">車・自転車通いの場合は駐車場を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  船橋は車や自転車で通う方も多いエリアです。スタジオ自体に駐車場がない場合でも、近隣のコインパーキングや提携駐車場がある場合があるので、事前に問い合わせておきましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">営業時間が都心部より短い場合がある</h3>
                <p className="text-warm-600 leading-relaxed">
                  郊外のスタジオは都心部と比べて営業時間が短い傾向があります。特に平日夜の最終レッスン時間は要チェック。仕事帰りに通いたい方は、21時以降もレッスンがあるか確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">ショッピングモール近接のスタジオは便利</h3>
                <p className="text-warm-600 leading-relaxed">
                  船橋エリアでは商業施設の近くにスタジオがある場合、買い物のついでに通えて続けやすいメリットがあります。通い放題プランと組み合わせると生活動線に組み込みやすくおすすめです。
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
                  <strong>船橋エリアの豆知識：</strong>スタジオによってはウェアやタオルのレンタルサービスを提供しているところもあります。仕事帰りや外出先から直接通いたい方は、レンタルの有無を事前に確認しておくと便利です。
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
                  月額1万円以下で通えるスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li>
                  <li className="text-warm-700">• zen place（月4回 9,625円〜）</li>
                  <li className="text-warm-700">• URBAN CLASSIC（月4回 9,680円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK 船橋（手ぶら体験無料）</li>
                  <li className="text-warm-700">• URBAN CLASSIC PILATES（予約不要）</li>
                  <li className="text-warm-700">• sopra 船橋（岩盤ヨガ併設）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  駅から徒歩4分以内。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• sopra（JR船橋駅直結）</li>
                  <li className="text-warm-700">• Rintosull（徒歩2分）</li>
                  <li className="text-warm-700">• URBAN CLASSIC（徒歩2分）</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  コスパ重視。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（8,800円〜/月4回）</li>
                  <li>• zen place（9,625円〜/月4回）</li>
                  <li>• URBAN CLASSIC（9,680円〜/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 12,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  充実のサービス。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• the SILK（12,980円〜/月3回）</li>
                  <li>• the SILK（15,070円〜/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 12,000〜21,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  毎日通いたい方。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（12,800円/通い放題）</li>
                  <li>• URBAN CLASSIC（14,080円/通い放題）</li>
                  <li>• the SILK（20,680円/通い放題）</li>
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
                  船橋の料金相場はグループ月4回で8,800円〜15,070円。入会金やキャンペーンも確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  the SILKは無料体験。zen placeは1,000円、Rintosullは1,000円で体験可能。まずは気になるスタジオで体験してみましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  船橋はJR総武線・京成本線・東武野田線と多路線が集まるターミナル駅。sopraはJR船橋駅直結、URBAN CLASSIC PILATESやRintosullは徒歩2分と駅近スタジオが充実。
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
              今回は船橋エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では船橋にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜9,900円。<br />
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

      <RelatedAreas currentSlug="funabashi" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
