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
  title: '【2026最新】ピラティス金沢おすすめ6選！人気スタジオの料金プランを簡単比較！',
  description: '金沢エリアのおすすめピラティススタジオ6選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,金沢,石川県,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティススタジオDEP 金沢店 近岡スタジオ',
    image: '/images/studios/dep-kanazawa.webp',
    rating: 4.8,
    reviewCount: 14,
    reviews: [
      {
        author: 'K.T',
        rating: 5,
        date: '1週間前',
        text: '理学療法士の資格を持つインストラクターが在籍。半個室で1,000種類以上のレッスンプログラムがあり、自分の悩みに合わせたオーダーメイドレッスンが魅力。',
      },
      {
        author: 'M.S',
        rating: 5,
        date: '2週間前',
        text: '初回パーソナル90分が2,980円で体験できました。完全個室なので周りを気にせず集中できる。姿勢改善の効果を実感。',
      },
      {
        author: 'Y.N',
        rating: 4,
        date: '3週間前',
        text: '金沢に近岡と鳴和の2店舗あるので予約が取りやすい。全スタッフ有資格者で指導の質が高い。',
      },
    ],
    price: '月額 14,800円〜',
    trial: '初回パーソナル90分 2,980円',
    features: ['完全個室', '有資格者のみ', '2店舗展開', 'オーダーメイド'],
    description: '理学療法士とPHIピラティス指導資格を持つインストラクターが在籍するピラティス専門スタジオ。半個室のスタジオで1,000種類以上のレッスンを提供。金沢市内に近岡・鳴和の2店舗を展開。初期費用0円で始められる。',
    access: '金沢駅西口から車で約15分',
    address: '石川県金沢市近岡町428-1 SOOL BUILDING 3F',
    popularPlan: {
      name: 'パーソナル月4回プラン',
      description: '完全個室でのマンツーマンレッスン。1,000種類以上のプログラムから最適なメニューを提案。',
      price: '月額 14,800円〜（税込）',
    },
    options: [
      '初回パーソナル90分（2,980円）',
      '月定額プラン（14,800円〜）',
      'オンラインレッスン（3,000円/月・受け放題）',
      '初期費用0円',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '腰痛改善', '体幹強化', 'リハビリ'],
    },
    basicInfo: {
      hours: '火・土 9:00〜20:00 / 水・木・金 9:00〜18:00',
      closed: '月曜・日曜',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'バレル', '完全個室'],
    },
  },
  {
    name: 'ウェルネス・ラボ 金沢駅西',
    image: '/images/studios/wellness-lab-kanazawa.webp',
    rating: 4.6,
    reviewCount: 17,
    reviews: [
      {
        author: 'A.K',
        rating: 5,
        date: '1週間前',
        text: '24時間営業でいつでも通えるのが最大のメリット。マシンピラティスとAIフィットネスの両方が月7,980円で使い放題。コスパ最強。',
      },
      {
        author: 'R.M',
        rating: 4,
        date: '2週間前',
        text: 'お手本動画を見ながらサーキット型でマシンピラティスができる。1回30分で全身鍛えられるので忙しい人にも最適。',
      },
      {
        author: 'H.Y',
        rating: 4,
        date: '3週間前',
        text: '無料駐車場完備で車通いしやすい。県道沿いで仕事帰りにも便利。ゲーム感覚で楽しくトレーニングできる。',
      },
    ],
    price: '月額 8,778円（税込）〜',
    trial: '見学・体験あり',
    features: ['24時間営業', '駐車場無料', 'AI×ピラティス', 'サーキット型'],
    description: 'AIフィットネスとマシンピラティスを融合した新感覚スタジオ。24時間営業で自分のペースで通える。お手本動画を見ながらマシンピラティスとストレッチを交互に行うサーキット型で、1回30分で全身を効率的にトレーニング。',
    access: '金沢駅西口から車で約10分・無料駐車場完備',
    address: '石川県金沢市鞍月（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '通い放題プラン',
      description: 'マシンピラティス＆AIフィットネスが24時間使い放題。',
      price: '月額 8,778円（税込）',
    },
    options: [
      'ピラティスDAY会員（平日10:00〜17:00 月額8,778円）',
      '通い放題プラン（月額8,778円〜）',
      '無料駐車場完備',
      '見学随時受付',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['ダイエット', '運動不足解消', '体幹強化', '健康維持'],
    },
    basicInfo: {
      hours: '24時間営業',
      closed: '年中無休',
      facilities: ['リフォーマー', 'ストレッチマシン', 'AIフィットネスマシン', 'ロッカー'],
    },
  },
  {
    name: 'LYFE（ライフ）金沢',
    image: '/images/studios/lyfe-kanazawa.webp',
    rating: 4.7,
    reviewCount: 25,
    reviews: [
      {
        author: 'S.O',
        rating: 5,
        date: '1週間前',
        text: '女性専用のプライベートスタジオで安心。経験10年以上のインストラクターが4名在籍。マシンピラティスだけでなくヨガやマインドフルネスも受けられる。',
      },
      {
        author: 'N.K',
        rating: 5,
        date: '2週間前',
        text: '1対1のパーソナルレッスンなので自分のペースで進められる。身体の状態に合わせたオーダーメイドプログラムが嬉しい。',
      },
      {
        author: 'T.M',
        rating: 4,
        date: '3週間前',
        text: '月2回13,200円から始められる。落ち着いた空間でリラックスしながらレッスンを受けられます。',
      },
    ],
    price: '月2回 13,200円〜',
    trial: '体験レッスンあり',
    features: ['女性専用', 'パーソナル専門', '経験豊富な講師', 'ヨガも可能'],
    description: '女性専用のプライベートマシンピラティススタジオ。経験10年以上の女性インストラクター4名が在籍。リフォーマーを使ったパーソナルレッスンに加え、ヨガ・コンディショニング・マインドフルネスなど多彩なプログラムを提供。',
    access: '金沢市新保本エリア',
    address: '石川県金沢市新保本5-157',
    popularPlan: {
      name: '月4回プラン',
      description: '女性専用プライベートマシンピラティス。経験豊富なインストラクターによるマンツーマン指導。',
      price: '月4回 26,400円（税込）',
    },
    options: [
      '月2回プラン（13,200円）',
      '月4回プラン（26,400円）',
      '月5回プラン',
      '体験レッスン受付中',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['姿勢改善', 'ボディメイク', 'リラクゼーション', '健康維持'],
    },
    basicInfo: {
      hours: '9:00〜20:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', 'ヨガスペース', '更衣室'],
    },
  },
  {
    name: 'AND STUDIO（アンドスタジオ）金沢',
    image: '/images/studios/pilates-studio-dep.webp',
    rating: 4.5,
    reviewCount: 19,
    reviews: [
      {
        author: 'E.S',
        rating: 5,
        date: '1週間前',
        text: '20名の経験豊かなインストラクターによる多彩なクラスが魅力。ヨガ・ホットヨガ・エアリアルヨガ・ピラティスと幅広いプログラム。',
      },
      {
        author: 'C.H',
        rating: 4,
        date: '2週間前',
        text: '金沢のスタジオでは唯一の通い放題システム。月会費8,680円からと最安級の価格設定が嬉しい。',
      },
      {
        author: 'M.A',
        rating: 4,
        date: '3週間前',
        text: '初心者向けのクラスも充実。ピラティスだけでなくヨガも含めて自由に選べるのがいい。',
      },
    ],
    price: '月額 8,680円〜',
    trial: '体験レッスンあり',
    features: ['通い放題あり', '20名の講師', 'ヨガ＆ピラティス', '最安級'],
    description: '20名の経験豊かなインストラクターが在籍する総合スタジオ。ヨガ・ホットヨガ・エアリアルヨガ・ピラティスなど多彩なプログラムを提供。金沢では唯一の通い放題システムで、月会費8,680円からとリーズナブル。',
    access: '金沢市内（詳細は公式サイトでご確認ください）',
    address: '石川県金沢市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '通い放題プラン',
      description: 'ヨガ・ピラティス・エアリアルヨガなど全プログラムが通い放題。',
      price: '月額 8,680円〜（税込）',
    },
    options: [
      '通い放題プラン（8,680円〜）',
      'ドロップイン（都度払い）',
      '体験レッスン受付中',
      'エアリアルヨガも受講可能',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['運動不足解消', '柔軟性向上', 'リフレッシュ', '体幹強化'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['ピラティスマット', 'ヨガスタジオ', 'ホットスタジオ', 'エアリアル設備'],
    },
  },
  {
    name: 'ピラティス教室Hirameき',
    image: '/images/studios/pilates-studio-dep.webp',
    rating: 4.5,
    reviewCount: 3,
    reviews: [
      {
        author: 'Y.T',
        rating: 5,
        date: '1週間前',
        text: '各クラス8名までの少人数制で丁寧な指導が受けられる。入会金・年会費なしで月4回6,000円と金沢で最もリーズナブル。',
      },
      {
        author: 'K.S',
        rating: 4,
        date: '2週間前',
        text: '初心者でもわかりやすく指導してくれる。少人数制なので一人ひとりの動きをしっかり見てもらえる。',
      },
      {
        author: 'A.M',
        rating: 4,
        date: '3週間前',
        text: '月謝制でシンプルな料金体系。余計な費用がかからないのが安心。アットホームな雰囲気で続けやすい。',
      },
    ],
    price: '月4回 6,000円',
    trial: '体験レッスンあり',
    features: ['少人数制8名', '入会金なし', '月謝6,000円', 'アットホーム'],
    description: '金沢市駅西新町にある少人数制ピラティス教室。各クラス最大8名の少人数制で丁寧な指導。入会金・年会費なしの月謝制で月4回6,000円と金沢で最もリーズナブルな価格設定。初心者から経験者まで幅広く対応。',
    access: '金沢駅西新町エリア',
    address: '石川県金沢市駅西新町（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月4回プラン',
      description: '少人数制グループレッスン。入会金・年会費なしのシンプルな月謝制。',
      price: '月4回 6,000円（税込）',
    },
    options: [
      '月4回プラン（6,000円）',
      '入会金・年会費なし',
      '体験レッスン受付中',
      '少人数制（最大8名）',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['健康維持', '姿勢改善', '体幹強化', '運動不足解消'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['マット', 'ピラティス器具', '更衣スペース'],
    },
  },
  {
    name: '24/7ピラティス 金沢店',
    officialUrl: 'https://247-sports.jp/pilates/',
    image: '/images/studios/247-pilates.webp',
    price: '月2回 14,500円〜 / 月4回 27,000円〜 / 月8回 52,000円〜（税込）',
    trial: '体験レッスン 無料（50分・手ぶらOK）',
    features: ['女性専用', '完全個室パーソナル', '入会金不要・月謝制'],
    description: '完全個室・マンツーマンの女性専用パーソナルピラティススタジオ。入会金不要の月謝制で、一人ひとりに合わせたオリジナルプログラムを提供。金沢（香林坊バス停）から徒歩2分。',
    access: '金沢（香林坊バス停）から徒歩2分',
    address: '石川県金沢市片町1丁目1-29 香林坊ファーストビル7F',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！金沢エリアのスタジオはほとんどが初心者歓迎。DEPは理学療法士が在籍し初心者にも丁寧に指導。Hirameきは少人数制で安心。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。金沢ではDEPやウェルネス・ラボでマシンピラティスが受けられます。',
  },
  {
    question: '金沢のピラティスの料金相場は？',
    answer: 'グループレッスンは月4回6,000円〜、通い放題は月額8,680円〜。パーソナルは月額14,800円〜。Hirameきが月4回6,000円で最もリーズナブルです。',
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
    answer: '動きやすい服装と飲み物があればOK。DEPは初回90分パーソナルが2,980円で体験可能です。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化。ヨガは柔軟性とリラックス重視。AND STUDIOでは両方楽しめます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'DEP金沢店、ウェルネス・ラボ、AND STUDIO、Hirameきは男性も通えます。LYFEは女性専用です。',
  },
  {
    question: '駐車場はありますか？',
    answer: 'ウェルネス・ラボは無料駐車場完備。金沢は車社会なので、多くのスタジオが駐車場を用意しています。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
]

export default function KanazawaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '金沢', url: 'https://pilates-biyori.com/area/kanazawa/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス金沢おすすめ6選！<br className="hidden md:block" />
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
              <span className="text-warm-600">金沢</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="金沢" studioNames={studios.map((s) => s.name)} />

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
              「金沢で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、金沢エリアでおすすめのピラティススタジオ6選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>金沢でピラティススタジオを探している</span>
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

        <PriceComparisonTable studios={studios} areaName="金沢" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              金沢のおすすめピラティススタジオ6選
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
              金沢のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">6,000円〜14,800円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 8,680円〜26,400円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">2,980円〜</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              金沢エリアでは全国チェーンのスタジオに加え、地元密着型のスタジオも選べます。冬場は通いづらくなりがちなため、駅直結や駅近のスタジオを選ぶと継続率がアップします。月額制なら冬場の運動不足解消にも効果的です。近隣の名古屋エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              金沢でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">金沢駅からのルートは事前に確認を</h3>
                <p className="text-warm-600 leading-relaxed">
                  金沢エリアのスタジオは金沢駅周辺が中心です。駅の出口によってスタジオまでの距離が変わることがあるため、初めて訪れる際はGoogleマップで経路を確認し、余裕を持って到着できるようにしましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">冬場の通いやすさも考慮したスタジオ選びを</h3>
                <p className="text-warm-600 leading-relaxed">
                  金沢は冬の寒さが厳しいエリアのため、駅からの距離は特に重要なポイントです。駅直結や地下街直結のスタジオなら悪天候でも通いやすく、継続率がぐんと上がります。冬場は体が冷えているため、レッスン前のウォームアップを丁寧にしてくれるスタジオだと安心です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  金沢エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかを確認しましょう。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  金沢エリアだけでなく、近隣の<Link href="/area/nagoya" className="text-warm-700 underline hover:text-warm-900">名古屋</Link>、<Link href="/area/kyoto" className="text-warm-700 underline hover:text-warm-900">京都</Link>、<Link href="/area/niigata" className="text-warm-700 underline hover:text-warm-900">新潟</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>金沢エリアの豆知識：</strong>金沢は冬場の気温が低いため、スタジオまでの移動中に体が冷えないよう防寒着を用意しましょう。レッスン後は汗をかいた状態で外に出ると体が冷えやすいので、着替え用のインナーを1枚多めに持参するのがおすすめです。
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
                  <li className="text-warm-700">• the SILK 金沢（東口・西口2店舗）</li>
                  <li className="text-warm-700">• ピラティスK 金沢（月4回 13,420円〜）</li>
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
                  金沢の料金相場はグループ月4回で10,450円〜15,070円。入会金やキャンペーンも確認しましょう。
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
                  金沢はJR・東京メトロ・西武線・東武線と多路線が集まるターミナル駅。ピラティスK・the SILKは東口徒歩1分、zen placeは徒歩2分と駅近スタジオが充実。
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
              今回は金沢エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では金沢にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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

      <RelatedAreas currentSlug="kanazawa" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
