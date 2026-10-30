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
import { AreaModifierSections } from '@/components/AreaModifierSections'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/kanazawa/' },
  title: 'ピラティス金沢おすすめ6選料金・体験レッスン・マシン対応を比較',
  description: '金沢エリアのおすすめピラティススタジオ6選を比較しています。マシンピラティス、体験レッスン、料金相場、選び方まで詳しくご案内します。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,金沢,石川県,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティススタジオDEP 金沢店 近岡スタジオ',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3U4MO2+5IM0+5YJRM',
    image: '/images/studios/dep-kanazawa.webp',
    price: 'ライト 月2回 14,800円〜（税込）',
    trial: '初回体験 2,980円（税込・通常9,900円・LINE予約限定）',
    features: ['理学療法士・作業療法士が担当', '50分パーソナル', '金沢市内2店舗', '料金エリアA'],
    description: 'ピラティススタジオDEP（株式会社DEP・公式の店舗一覧に全国57店舗）の金沢店 近岡スタジオです。理学療法士または作業療法士の国家資格を持つインストラクターが担当する50分のパーソナルマシンピラティスで、初回は90〜120分かけてカウンセリングと身体評価を行います（DEP公式）。月額は料金エリアA（ライト月2回 14,800円〜）です。金沢市内にはもう1店、金沢店 鳴和スタジオ（金沢市小金町）があります。',
    access: '金沢駅西口から4.2km・車で15分（公式の店舗ページ）',
    address: '石川県金沢市近岡町428番地1 SOOL BUILDING 3階',
    popularPlan: {
      name: '月額会員プラン',
      description: '50分のパーソナルレッスンです（初回は90〜120分）。ライト月2回・スタンダード月4回・プレミアム月7回です。',
      price: 'ライト 14,800円／スタンダード 28,800円／プレミアム 47,600円（税込）',
    },
    options: [
      'ライト 月2回 14,800円／スタンダード 月4回 28,800円／プレミアム 月7回 47,600円（税込・エリアA）',
      '都度払い 1回 9,900円（エリアA）',
      '初回レッスン 90〜120分（カウンセリング＋身体評価）',
      'オンラインレッスン 月4回受け放題 3,000円（公式の料金ページ）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      purpose: ['姿勢改善', '腰痛改善', '体幹強化', 'リハビリ'],
    },
    basicInfo: {
      hours: '月 10:00〜19:00／火・金 9:00〜21:00／水・木・土 9:00〜18:00',
      closed: '日曜・年末年始',
      facilities: ['ピラティスマシン', '駐車場あり（道路沿いの右から5・6番目）'],
    },
  },
  {
    name: 'ウェルネス・ラボ 金沢駅西',
    image: '/images/studios/wellness-lab-kanazawa.webp',
    price: '月額 8,778円（税込）〜',
    trial: '見学・体験あり',
    features: ['24時間営業', '駐車場無料', 'AI×ピラティス', 'サーキット型'],
    description: 'AIフィットネスとマシンピラティスを融合した新感覚スタジオです。24時間営業で自分のペースで通えます。お手本動画を見ながらマシンピラティスとストレッチを交互に行うサーキット型で、1回30分で全身を効率的にトレーニングです。',
    access: '金沢駅西口から車で約10分・無料駐車場完備',
    address: '石川県金沢市鞍月（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '通い放題プラン',
      description: 'マシンピラティス＆AIフィットネスが24時間使い放題です。',
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
    price: '月2回 13,200円〜',
    trial: '体験レッスンあり',
    features: ['女性専用', 'パーソナル専門', '経験豊富な講師', 'ヨガも可能'],
    description: '女性専用のプライベートマシンピラティススタジオです。経験10年以上の女性インストラクター4名が在籍しています。リフォーマーを使ったパーソナルレッスンに加え、ヨガ・コンディショニング・マインドフルネスなど多彩なプログラムを提供しています。',
    access: '金沢市新保本エリア',
    address: '石川県金沢市新保本5-157',
    popularPlan: {
      name: '月4回プラン',
      description: '女性専用プライベートマシンピラティスです。経験豊富なインストラクターによるマンツーマン指導しています。',
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
    price: '月額 8,680円〜',
    trial: '体験レッスンあり',
    features: ['通い放題あり', '20名の講師', 'ヨガ＆ピラティス', '最安級'],
    description: '20名の経験豊かなインストラクターが在籍する総合スタジオです。ヨガ・ホットヨガ・エアリアルヨガ・ピラティスなど多彩なプログラムを提供しています。金沢では唯一の通い放題システムで、月会費8,680円からとリーズナブルです。',
    access: '金沢市内（詳細は公式サイトでご確認ください）',
    address: '石川県金沢市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '通い放題プラン',
      description: 'ヨガ・ピラティス・エアリアルヨガなど全プログラムが通い放題です。',
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
    price: '料金は公式サイトでご確認ください',
    trial: '体験レッスンあり',
    features: ['少人数制8名', '入会金なし', 'アットホーム'],
    description: '金沢市駅西新町にある少人数制ピラティス教室です。各クラス最大8名の少人数制で丁寧な指導です。入会金・年会費なしの月謝制です。初心者から経験者まで幅広く対応しています。',
    access: '金沢駅西新町エリア',
    address: '石川県金沢市駅西新町（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月4回プラン',
      description: '少人数制グループレッスンです。入会金・年会費なしのシンプルな月謝制です。',
      price: '料金は公式サイトでご確認ください',
    },
    options: [
      '入会金・年会費なし',
      '体験レッスン受付中',
      '少人数制（最大8名）',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
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
    officialUrl: 'https://t.felmat.net/fmcl?ak=J11817X.1.B1620582.U1357808',
    image: '/images/studios/247-pilates.webp',
    price: '月2回 14,500円〜 / 月4回 27,000円〜 / 月8回 52,000円〜（税込）',
    trial: '体験レッスン 無料（説明含め約60分・手ぶらで参加可能）',
    features: ['マシンピラティス', '女性専用', '完全個室パーソナル', '入会金不要・月謝制'],
    description: '完全個室・マンツーマンの女性専用パーソナルピラティススタジオです。入会金不要の月謝制で、一人ひとりに合わせたオリジナルプログラムを提供しています。金沢（香林坊バス停）から徒歩2分です。',
    access: '金沢（香林坊バス停）から徒歩2分',
    address: '石川県金沢市片町1丁目1-29 香林坊ファーストビル7F',
    popularPlan: {
      name: '月4回プラン',
      description: '完全個室でマシンを使ったマンツーマン指導しています。入会金不要の月謝制です。',
      price: '月4回 27,000円〜（税込）',
    },
    options: [
      'なし',
    ],
    userProfile: {
      ageRange: '20代〜50代と幅広い',
      genderRatio: '女性専用',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '健康維持'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: '年中無休',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。金沢エリアのスタジオはほとんどが初心者歓迎です。DEPは理学療法士が在籍し初心者にも丁寧に指導しています。Hirameきは少人数制で安心です。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷調整しやすく初心者におすすめです。金沢ではDEPやウェルネス・ラボでマシンピラティスが受けられます。',
  },
  {
    question: '金沢のピラティスの料金相場は？',
    answer: '通い放題は月額8,680円〜、パーソナルは月額14,800円〜です。グループレッスンの月4回料金は店舗により異なるため、各スタジオの公式サイトでご確認ください。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回が目安です。大切なのは継続することです。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。2〜3ヶ月の継続が大切です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があれば問題ありません。DEPは初回体験（90〜120分・カウンセリングと身体評価を含む）が2,980円（税込・LINE予約限定）です。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化しています。ヨガは柔軟性とリラックス重視です。AND STUDIOでは両方楽しめます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'DEP金沢店、ウェルネス・ラボ、AND STUDIO、Hirameきは男性も通えます。LYFEは女性専用です。',
  },
  {
    question: '駐車場はありますか？',
    answer: 'ウェルネス・ラボは無料駐車場完備です。金沢は車社会なので、多くのスタジオが駐車場を用意しています。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感される方が多くなっています。最低2ヶ月は継続することをおすすめします。',
  },
]

export default function KanazawaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '金沢', url: 'https://biyori-pilates.com/area/kanazawa/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月11日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              ピラティス金沢おすすめ6選<br className="hidden md:block" />
              料金・体験レッスン・マシン対応を比較
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
              <span className="text-warm-600">金沢</span>
            </nav>
          </div>
        </section>
        <AreaConclusion studios={studios} areaName="金沢" />


        <TableOfContents areaName="金沢" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、金沢エリアでおすすめのピラティススタジオ6選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
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
              以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="金沢" />
        <AreaMarketComparison studios={studios} areaName="金沢" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              金沢のおすすめピラティススタジオ6選
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
              金沢のピラティス料金相場
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
                    <td className="px-4 py-3">店舗により異なります</td>
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
                  金沢エリアのスタジオは金沢駅周辺が中心です。駅の出口によってスタジオまでの距離が変わることがあるため、初めて訪れる際はGoogleマップで経路を確認し、余裕を持って到着できるようにすることをおすすめします。
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
                  金沢エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかをご確認ください。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため、事前にご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  金沢エリアだけでなく、近隣の<Link href="/area/nagoya/" className="text-warm-700 underline hover:text-warm-900">名古屋</Link>、<Link href="/area/kyoto/" className="text-warm-700 underline hover:text-warm-900">京都</Link>、<Link href="/area/niigata/" className="text-warm-700 underline hover:text-warm-900">新潟</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番です。ジーンズやスカートは適していません。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：レッスン中の水分補給に必要です。自動販売機がないスタジオもあるため、持参をおすすめします。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用です。マシンに敷くタオルは、スタジオで用意されている場合が一般的です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは、靴下の着用が必須のスタジオが多数あります。グリップソックスが適しています。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>をお選びください。ピラティスは脚を大きく動かすエクササイズが多いため、伸縮性のある素材が適しています。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>の方が、インストラクターがフォームを確認しやすく、効果的な指導を受けられます。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。手ぶらで体験可能な場合もあるので事前にご確認ください。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。マシンに引っかかる恐れがあるため、ピアス・ネックレス・腕時計はロッカーに預けるのが安全です。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>金沢エリアの豆知識：</strong>金沢は冬場の気温が低いため、スタジオまでの移動中に体が冷えないよう防寒着をご用意ください。レッスン後は汗をかいた状態で外に出ると体が冷えやすいので、着替え用のインナーを1枚多めに持参するのがおすすめです。
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
                  月額2万円未満で通えるスタジオです（店舗カードの料金）。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• AND STUDIO（アンドスタジオ）金沢（月額 8,680円〜）</li>
                  <li className="text-warm-700">• ウェルネス・ラボ 金沢駅西（月額 8,778円（税込）〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• LYFE（ライフ）金沢</li>
                  <li className="text-warm-700">• 24/7ピラティス 金沢店</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  駅から徒歩2分以内です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• このページの掲載スタジオでは該当なし</li>
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
                週1〜2回から始めることをおすすめします。最低2〜3ヶ月継続で効果を実感できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回が目安です。3〜6ヶ月で目に見える変化が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続することをおすすめします。
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
                  グループレッスンが中心です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ウェルネス・ラボ 金沢駅西（月額 8,778円〜）</li>
                  <li>• AND STUDIO 金沢（月額 8,680円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン専門スタジオです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• LYFE 金沢（月2回 13,200円〜）</li>
                  <li>• 24/7ピラティス 金沢店（月2回 14,500円〜）</li>
                  <li>• ピラティススタジオDEP 金沢店（月額 14,800円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 16,000〜29,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  毎日通いたい方向けです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• 24/7ピラティス 金沢店（月4回 27,000円〜）</li>
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
                  金沢の掲載店は料金体系がスタジオごとに異なるため、各店舗カードの料金と、入会金やキャンペーンを公式サイトでご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  体験料金は、ピラティススタジオDEP 金沢店 近岡スタジオが「初回体験 2,980円（税込・通常9,900円・LINE予約限定）」、24/7ピラティス 金沢店が「体験レッスン 無料（説明含め約60分・手ぶらで参加可能）」です（店舗カードの記載）。最新の条件は各公式サイトでご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  金沢の掲載スタジオのアクセスは、各店舗カードのアクセス欄でご確認ください。
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
              本ページでは、金沢エリアのおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、金沢にあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページの情報を、スタジオ選びにお役立てください。
            </p>
            <p className="text-warm-700 font-medium text-center">
              本ページが、ピラティススタジオ選びの参考になれば幸いです。
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              体験レッスンのご予約
            </h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              初回限定の体験レッスン無料〜3,850円です。<br />
              まずは体験レッスンへの参加をおすすめします。
            </p>
            <Link
              href="/#studios"
              className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded"
            >
              おすすめスタジオ一覧に戻る
            </Link>
          </div>
        </section>
              <AreaModifierSections studios={studios} areaName="金沢" />
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="kanazawa" areaName="金沢" />

      <RelatedAreas currentSlug="kanazawa" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
