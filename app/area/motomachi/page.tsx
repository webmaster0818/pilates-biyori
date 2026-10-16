import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import Script from 'next/script'
import ConsultantSection from '@/components/ConsultantSection'
import { AreaConclusion } from '@/components/AreaConclusion'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/motomachi/' },
  title: '【2026年10月最新】元町のピラティススタジオおすすめ6選｜無料体験・料金で比較',
  description: '元町のピラティススタジオ7社を無料体験・料金・マシン対応で比較しています。各スタジオの料金プラン・アクセス・選び方のポイントを実データでまとめました。',
  keywords: 'ピラティス,元町,神戸,兵庫,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'TOKI PILATES STUDIO（トキピラティス）',
    image: '/images/studios/toki-pilates-kobe.webp',
    price: '1回 4,500円〜',
    trial: '体験レッスン 3,500円',
    features: ['元町駅徒歩2分', '少人数制', '産前産後対応', '世界資格保有'],
    description: '神戸元町に2店舗（WEST/EAST）を構えるピラティス専門スタジオです。骨盤をテーマにした独自メソッドで、最大6名の少人数制グループレッスンです。全インストラクターが世界的ピラティス資格を保有です。産前産後クラスも充実しています。',
    access: 'WEST: JR「元町駅」西口 徒歩3分 / EAST: JR「元町駅」東口 徒歩2分',
    address: 'WEST: 兵庫県神戸市中央区北長狭通5丁目1-2 太陽ビル2F 202 / EAST: 兵庫県神戸市中央区北長狭通3丁目3-6 元町商工ビル7F',
    popularPlan: {
      name: '少人数グループレッスン',
      description: '最大6名の少人数制マシンピラティスグループレッスンです。',
      price: '1回 4,500円〜（税込）',
    },
    options: [
      '体験レッスン（3,500円）',
      'グループレッスン（最大6名）',
      '産前産後クラス',
      'ベビーシッター付きプラン',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['骨盤矯正', '姿勢改善', '産後ケア', '柔軟性向上'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Pilates Mee 神戸元町店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=F10273P.1.9146255O.U1357808',
    image: '/images/studios/pilates-mee.webp',
    price: '月2回 11,000円〜',
    priceList: ['体験レッスン無料', 'セミパーソナル：月2回 11,000円／月4回 19,800円／通い放題 37,500円（税込）', 'パーソナル：月2回 22,000円／月4回 39,600円／月8回 70,400円（税込）'],
    trial: '体験レッスン無料',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '最大3名までの少人数セミパーソナル形式の女性専用マシンピラティススタジオです。みなと元町駅から徒歩2分です。インストラクターが一人ひとりに十分に対応できるセミパーソナル定額制です。',
    access: 'みなと元町駅 徒歩2分／元町駅 徒歩6分',
    address: '〒650-0022 兵庫県神戸市中央区元町通4丁目1-13-2 2階',
    popularPlan: {
      name: 'セミパーソナル月4回コース',
      description: '最大3名のセミパーソナルマシンピラティス月4回です。',
      price: '月額 19,800円（税込）/ 1回あたり4,950円',
    },
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '体幹強化'],
    },
    basicInfo: {
      hours: '9:00〜21:15',
      closed: '不定休',
      facilities: ['女性専用トイレ', '着替えスペース', '全身鏡'],
    },
  },
  {
    name: 'STUDIO BRAVE（スタジオブレイブ）',
    price: '要問い合わせ',
    trial: '体験レッスンあり',
    features: ['初心者歓迎', '少人数制', 'ピラティス＆ヨガ', '目的別レッスン'],
    description: '神戸元町のピラティス＆ヨガスタジオです。会員の80%が初心者で、難易度や目的に合わせてレッスンを選べます。少人数制で細やかな指導が特徴です。ピラティスもヨガも楽しめる複合スタジオです。',
    access: 'JR「元町駅」徒歩圏内',
    address: '兵庫県神戸市中央区（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '少人数グループレッスン',
      description: '目的別に選べる少人数制レッスンです。',
      price: '詳細は公式サイトでご確認ください',
    },
    options: [
      '体験レッスン',
      'ピラティスクラス',
      'ヨガクラス',
      '目的別レッスン',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '柔軟性向上'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Studio douce（スタジオドゥース）',
    price: '入会費・更新費 0円',
    trial: '体験レッスンあり',
    features: ['理学療法士指導', '入会費0円', 'リーズナブル', '腰痛改善'],
    description: '神戸元町にある理学療法士が指導するピラティススタジオです。入会費・更新費が0円で通常料金も安価に設定されており、長期的に通いやすい料金体系です。体の専門家による安全で効果的なレッスンが特徴です。',
    access: 'JR「元町駅」徒歩圏内',
    address: '兵庫県神戸市中央区（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'ピラティスレッスン',
      description: '理学療法士による安全で効果的なピラティスレッスンです。',
      price: '入会費・更新費 0円（レッスン料は公式サイトでご確認ください）',
    },
    options: [
      '入会費0円',
      '更新費0円',
      '体験レッスン',
      'リハビリ対応',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['腰痛改善', '姿勢改善', 'リハビリ', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', '更衣室'],
    },
  },
  {
    name: 'ラピラティス 神戸元町店',
    image: '/images/studios/la-pilates.webp',
    price: '要問い合わせ',
    trial: '体験レッスンあり',
    features: ['整体×ピラティス', '元町駅近', '体の歪み改善', 'マシンピラティス'],
    description: '整体とマシンピラティスを組み合わせた独自のアプローチが特徴のスタジオです。体の歪みを整えてからピラティスを行うことで、より効果的な体づくりを実現しています。神戸元町エリアで通いやすい立地です。',
    access: 'JR「元町駅」徒歩圏内',
    address: '兵庫県神戸市中央区（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '整体×マシンピラティス',
      description: '整体で体を整えてからマシンピラティスを行う独自プログラムです。',
      price: '詳細は公式サイトでご確認ください',
    },
    options: [
      '体験レッスン',
      '整体＋ピラティス',
      'パーソナルレッスン',
      '体の歪み改善プログラム',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['体の歪み改善', '肩こり改善', '腰痛改善', '姿勢改善'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '整体ベッド', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'zen place pilates 三宮スタジオ',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['花時計前駅徒歩1分', 'ピラティス専門', '男性利用可', '全国他店利用'],
    description: 'ピラティス専門の大手スタジオです。地下鉄海岸線「三宮・花時計前」4番出口から徒歩1分です。元町エリアからもアクセス良好です。マットグループ・マシングループ・プライベートの3タイプです。全国150店舗以上で他店利用可能です。',
    access: '地下鉄海岸線「三宮・花時計前駅」4番出口 徒歩1分 / JR「元町駅」東口 徒歩10分',
    address: '兵庫県神戸市中央区三宮町1-3-15 京町筋安田ビル4F',
    popularPlan: {
      name: 'フリープラン（マットグループ）',
      description: 'マットグループレッスン通い放題です。全国店舗で他店利用可能です。',
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
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'ラダーバレル', 'マット', 'ロッカー'],
    },
  },
]

const faqs = [
  {
    question: '元町でピラティス初心者におすすめのスタジオは？',
    answer: 'STUDIO BRAVEは会員の80%が初心者で安心です。TOKI PILATESは少人数制（最大6名）で丁寧な指導が受けられます。zen place三宮も初心者歓迎のレッスンが充実しています。',
  },
  {
    question: '元町のピラティスの料金相場は？',
    answer: 'グループレッスンは1回4,500円〜、月額プランは10,450円〜19,800円程度です。セミパーソナルのPilates Meeは月2回11,000円〜です。パーソナルより手頃な料金で通えるスタジオが中心です。',
  },
  {
    question: '産前産後でも通えるスタジオはありますか？',
    answer: 'TOKI PILATES STUDIOは産前産後のクラスが充実しており、ベビーシッター付きプランもあります。妊娠中や産後のケアに専門的なレッスンが受けられます。',
  },
  {
    question: '男性でも通えるスタジオはどこですか？',
    answer: 'zen place三宮は男性も通えます。STUDIO BRAVEとStudio douceも男女問わず通えます。Pilates Meeは女性専用です。',
  },
  {
    question: '元町駅から最も近いスタジオは？',
    answer: 'TOKI PILATES STUDIO EAST店はJR元町駅東口から徒歩2分、WEST店は西口から徒歩3分です。Pilates Meeはみなと元町駅から徒歩2分です。',
  },
  {
    question: '整体も受けられるスタジオはありますか？',
    answer: 'ラピラティス神戸元町店は整体×マシンピラティスの組み合わせが特徴です。体の歪みを整えてからピラティスを行うので、肩こりや腰痛にお悩みの方におすすめです。',
  },
  {
    question: '理学療法士が指導するスタジオはありますか？',
    answer: 'Studio douce（スタジオドゥース）は理学療法士がエデュケーターを務めており、入会費・更新費0円で長く続けやすい料金設定です。',
  },
  {
    question: '体験レッスンの料金は？',
    answer: 'zen place三宮はグループ体験1,000円〜です。TOKI PILATESは体験3,500円です。各スタジオで体験内容・料金が異なるので公式サイトでご確認ください。',
  },
  {
    question: '元町と三宮どちらのスタジオに通うべき？',
    answer: '元町と三宮は徒歩圏内です。元町はアットホームな個人スタジオが多く、三宮は大手チェーンが充実しています。目的や好みに合わせてお選びください。両エリアの体験を受けて比較するのがおすすめです。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感される方が多くなっています。週1〜2回のペースで最低2〜3ヶ月の継続がおすすめです。Studio douceのような入会費0円のスタジオなら気軽に始められます。',
  },
]

export default function MotomachiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '元町', url: 'https://biyori-pilates.com/area/motomachi/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月11日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス元町おすすめ6選<br className="hidden md:block" />
              人気スタジオの料金プランの比較
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
              <span className="text-warm-600">元町</span>
            </nav>
          </div>
        </section>
        <AreaConclusion studios={studios} areaName="元町" />



        <TableOfContents areaName="元町" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、神戸元町エリアでおすすめのピラティススタジオ6選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>元町・三宮エリアでピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>少人数制のアットホームなスタジオに通いたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>産前産後のケアができるスタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>理学療法士の指導を受けたい</span>
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

        <PriceComparisonTable studios={studios} areaName="元町" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              元町のおすすめピラティススタジオ6選
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
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額1万円台で通えるスタジオです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• Pilates Mee（月2回 11,000円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">産前産後ケア</h3>
                <p className="text-warm-600 text-sm mb-4">
                  妊娠中・産後のケアに対応しています。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• TOKI PILATES（産前産後クラス充実）</li>
                  <li className="text-warm-700">• TOKI PILATES（ベビーシッター付き）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">体の不調改善</h3>
                <p className="text-warm-600 text-sm mb-4">
                  医療資格保有者の安心指導です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Studio douce（理学療法士指導）</li>
                  <li className="text-warm-700">• ラピラティス（整体×ピラティス）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Price Market Section */}
        <section className="py-16 bg-warm-50" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              元町のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">10,450円〜19,800円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">セミパーソナルレッスン</td>
                    <td className="px-4 py-3">1回 4,950円〜5,500円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">1,000円〜3,500円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              元町エリアは三宮と隣接しながらも、個性的な個人スタジオが多いのが特徴です。大手チェーンの三宮店と、元町の専門スタジオを比較検討できるのがこのエリアの特徴です。セミパーソナル形式のスタジオもあり、グループよりも手厚い指導をリーズナブルに受けられます。入会費0円のスタジオもあるので、初期費用を抑えたい方にもおすすめのエリアです。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-white" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              元町でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">元町駅の東口・西口で最寄りスタジオが変わる</h3>
                <p className="text-warm-600 leading-relaxed">
                  JR元町駅は東口と西口があり、利用する出口によって最寄りのスタジオが異なります。TOKI PILATESはEAST店（東口徒歩2分）とWEST店（西口徒歩3分）の2店舗です。Pilates Meeはみなと元町駅（西口方面）が最寄りです。体験前に出口をご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">元町商店街周辺は週末の混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  元町商店街や南京町（中華街）は週末や祝日に大変混雑します。スタジオへの到着が遅れないよう、混雑する時期は余裕を持って出発することをおすすめします。平日の朝やお昼は比較的空いていて快適です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">三宮エリアとの比較検討がおすすめ</h3>
                <p className="text-warm-600 leading-relaxed">
                  元町と<Link href="/area/sannomiya/" className="text-warm-700 underline hover:text-warm-900">三宮</Link>は徒歩圏内です。三宮にはピラティスKなどの大手チェーンもあります。元町のアットホームなスタジオと三宮のチェーン店、両方の体験レッスンを受けて比較するのが賢い選び方です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">少人数制スタジオは早めの予約が必須</h3>
                <p className="text-warm-600 leading-relaxed">
                  元町エリアは少人数制のスタジオが多いため、人気の時間帯はすぐに枠が埋まります。特にTOKI PILATESの最大6名のグループレッスンやPilates Meeの最大3名セミパーソナルは定員が少ないので、希望日時があれば早めにご予約ください。
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
                  <strong>元町エリアの豆知識：</strong>元町は神戸を代表するおしゃれなエリアです。レッスン後は元町商店街でのショッピングや南京町でのランチも楽しめます。三宮方面にも歩いて行けるので、レッスン前後の時間を有効活用しやすいのが元町の魅力です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-white" id="how-to-choose">
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
                  ダイエット、姿勢改善、産後ケア、腰痛改善など目的によって最適なスタジオは変わります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  元町の料金相場はグループ月4回で10,450円〜19,800円です。Studio douceは入会費0円で初期費用を抑えられます。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  zen placeはグループ体験1,000円〜です。TOKI PILATESは3,500円で体験可能です。複数のスタジオを体験して比較することをおすすめします。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  元町はJR・阪神・地下鉄の3路線が利用可能です。駅の東口と西口で最寄りスタジオが異なるので、通勤・通学ルートに合わせてお選びください。
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
              本ページでは、神戸元町エリアのおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              元町はおしゃれな街並みの中に個性的なピラティススタジオが点在しています。産前産後ケア、理学療法士の指導、整体との組み合わせなど、専門性の高いスタジオが揃っているのが元町の魅力です。
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
              初回限定の体験レッスン1,000円〜3,500円です。<br />
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
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="motomachi" areaName="元町" />

      <RelatedAreas currentSlug="motomachi" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
