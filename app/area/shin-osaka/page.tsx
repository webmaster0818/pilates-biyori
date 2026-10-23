import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { AreaModifierSections } from '@/components/AreaModifierSections'
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
  title: '新大阪のピラティスおすすめ5選｜新大阪駅・西中島南方駅からの徒歩分と体験料金で比較',
  description: '新大阪のピラティススタジオ5社の料金・体験料金・営業時間・定休日を、各スタジオの公式ページで確認して比較しています（2026年10月23日確認）。新大阪駅・西中島南方駅からの徒歩分の早見表、初心者向けの選び方もわかります。',
  keywords: 'ピラティス,新大阪,西中島南方,大阪,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'Pilates Mee 西中島南方・新大阪店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=F10273P.1.9146255O.U1357808',
    image: '/images/studios/pilates-mee.webp',
    price: '月2回 11,000円〜',
    priceList: ['体験レッスン無料', 'セミパーソナル：月2回 11,000円／月4回 19,800円／通い放題 37,500円（税込）', 'パーソナル：月2回 22,000円／月4回 39,600円／月8回 70,400円（税込）'],
    trial: '体験レッスン無料',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '最大3名までのセミパーソナル形式マシンピラティススタジオです。新大阪駅から徒歩7分、西中島南方駅から徒歩6分です。通い放題コース（月37,500円）は1回あたり3,750円（公式の表記・月10回利用で算出）です。設備はタワーリフォーマー3台・全身鏡・着替えスペースなど（公式の店舗ページ・2026年10月23日確認）。',
    access: '新大阪駅 徒歩7分／西中島南方駅 徒歩6分／南方駅 徒歩8分',
    address: '〒532-0011 大阪府大阪市淀川区西中島６丁目９−２０ 新大阪GHビル3階 303号室',
    popularPlan: {
      name: '月4回コース',
      description: '最大3名のセミパーソナル形式です。リフォーマーを使った本格レッスンです。',
      price: '月4回 19,800円（税込）',
    },
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '体幹強化'],
    },
    basicInfo: {
      hours: '9:00〜21:15',
      closed: '不定休',
      facilities: ['女性専用トイレ', '着替えスペース', '全身鏡'],
    },
  },
  {
    name: 'ピラティスアヴニール 新大阪・西中島店',
    image: '/images/studios/pilates-avenir-shinosaka.webp',
    price: '30分 月2回 9,900円〜（税込）',
    trial: '90分体験 2,980円',
    features: ['新大阪駅徒歩5分', '完全個室', '7:00〜23:00・年中無休', 'ペア・セミ（3人）可'],
    description: '完全個室のマンツーマンマシンピラティスです。新大阪駅7番出口から徒歩5分、西中島南方駅1番出口から徒歩5分です。朝7時から夜23時まで年中無休で営業しています。料金は担当トレーナーのランクで変わるため「〜」表記です（公式の店舗ページ・2026年10月23日確認）。ペア・セミ（3人）のプランもあります。',
    access: 'JR「新大阪駅」7番出口 徒歩5分 / 大阪メトロ御堂筋線「西中島南方駅」1番出口 徒歩5分',
    address: '大阪府大阪市淀川区西中島5-2-12 ケイアンドエイビルB1',
    popularPlan: {
      name: 'マンツーマン（30分）月4回',
      description: '完全個室のマンツーマンマシンピラティスです。60分は月4回 35,200円〜です。',
      price: '月4回 19,360円〜（税込）',
    },
    options: [
      'マンツーマン1回（30分 5,170円〜／60分 9,350円〜・税込）',
      'ペア1回（5,500円〜・税込/人）',
      'セミ（3人）1回（4,583円〜・税込/人）',
      '90分体験レッスン 2,980円（2回目以降の体験は5,500円）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', 'リハビリ'],
    },
    basicInfo: {
      hours: '7:00〜23:00',
      closed: '年中無休',
      facilities: ['リフォーマー', 'チェア', 'バレル', '完全個室', '駐車場・駐輪場なし'],
    },
  },
  {
    name: 'IMPROVE 西中島南方・新大阪',
    image: '/images/studios/improve-shinosaka.webp',
    price: '都度払い 1回（60分）3,000円',
    trial: '初回・2回目 1,500円（少人数制ヨガorピラティス60分）',
    features: ['西中島南方駅徒歩1分', '入会金・年会費不要', '都度払い・当日予約OK', 'よもぎ蒸しあり'],
    description: '西中島南方駅1番出口から徒歩1分です。少人数制のピラティス・ヨガ・サスペンションのグループレッスンと、マシンピラティスのパーソナルレッスン（60分 7,500円）があります。入会金・年会費は不要で、都度払い・当日予約に対応しています。よもぎ蒸し・小顔整顔・チネイザンも併設しています（店舗のホットペッパービューティー掲載情報・2026年10月23日確認）。',
    access: '大阪メトロ御堂筋線「西中島南方駅」1番出口 徒歩1分 / 阪急「南方駅」徒歩2分 / JR「新大阪駅」徒歩10分',
    address: '大阪府大阪市淀川区西中島4-7-30 アネックス新大阪9B',
    popularPlan: {
      name: '都度払い（グループ60分）',
      description: 'ピラティス・ヨガ・サスペンションの少人数制グループレッスンを1回ずつ支払って受けられます。回数券もあります。',
      price: '1回 3,000円',
    },
    options: [
      '初回・2回目（1ヶ月以内）グループ60分 1,500円',
      'マシンピラティス パーソナル60分 7,500円（初回クーポン 7,000円）',
      'マット・ヨガ・サスペンション パーソナル60分 6,500円（初回クーポン 6,000円）',
      'よもぎ蒸し・小顔整顔・チネイザンも利用可',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', 'リフレッシュ', '健康維持', '美容'],
    },
    basicInfo: {
      hours: '月〜金 10:30〜21:00／土 11:00〜19:00／日 10:00〜18:00',
      closed: '不定休',
      facilities: ['ピラティスマシン', 'サスペンション', 'よもぎ蒸し', 'メイクルーム・着替えあり'],
    },
  },
  {
    name: 'zen place pilates 江坂スタジオ',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月4回 9,625円〜',
    trial: 'マットグループ初回体験 1,000円',
    features: ['江坂駅徒歩1分', '新大阪駅から電車4分', '男女共用', 'グループ店は他店利用可'],
    description: 'マットとマシン（リフォーマー）を備えたピラティス専門スタジオです（グレード02）。江坂駅4番出口から徒歩1分、新大阪駅から御堂筋線で4分です。マットグループ・マシングループ・プライベートの3タイプで、グループ店は全店相互利用できます（公式のスタジオページ・2026年10月23日確認）。',
    access: '大阪メトロ御堂筋線・北大阪急行「江坂駅」4番出口 徒歩1分（新大阪駅から4分）',
    address: '大阪府吹田市豊津町9-44 ハートランド江坂 5F',
    popularPlan: {
      name: 'フリープラン（マットグループ）',
      description: 'マットグループレッスン通い放題です。全国店舗で他店利用可能です。',
      price: '月額 14,960円（税込）',
    },
    options: [
      '月4回プラン（マット 9,625円〜）',
      'マシングループ 初回体験キャンペーン 3,000円（通常5,000円〜）',
      'プライベート 体験 8,250円〜',
      'マットグループ 初回体験キャンペーン 1,000円（通常2,200円〜）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 9:00〜22:00 / 土日祝 7:00〜16:00',
      closed: '公式サイトでご確認ください',
      facilities: ['リフォーマー', 'マット（無料）', '男女別更衣室', '鍵付きロッカー'],
    },
  },
  {
    name: 'Rintosull（リントスル）江坂店',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683',
    image: '/images/studios/rintosull.webp',
    price: '月4回 8,800円〜',
    trial: '無料体験会 0円（約45分）',
    features: ['女性専用', '江坂駅徒歩1分', 'LAVA系列', '月4回 8,800円'],
    description: 'ホットヨガ大手LAVAが運営する女性専用マシンピラティススタジオです。江坂駅4番出口から徒歩1分、新大阪から御堂筋線で4分です。大画面映像を見ながらリフォーマーでトレーニングです。',
    access: '大阪メトロ御堂筋線・北大阪急行「江坂駅」4番出口 徒歩1分（新大阪駅から4分）',
    address: '大阪府吹田市豊津町10-2 江坂T・Kビル 2F',
    popularPlan: {
      name: 'マシンピラティス月4回プラン',
      description: '映像ガイド付きリフォーマーレッスンです。女性専用の安心空間です。',
      price: '月4回 8,800円（税込）',
    },
    options: [
      'ライト・フルタイム（江坂店＋1店舗・通い放題）13,800円',
      'プレミアム フリー・フルタイム（LAVA等の系列全店）16,800円',
      '運営管理費 月680円／施設使用料 2,500円（入会時）',
      '入会金5,000円・登録金5,000円（体験当日入会で0円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '公式の店舗ページに記載なし（レッスンスケジュールPDFで確認）',
      closed: '毎週日曜・第4木曜',
      facilities: ['リフォーマー', '大画面スクリーン', '更衣室', '鍵付きロッカー', '駐車場・駐輪場なし'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。新大阪エリアのスタジオはほとんどが初心者歓迎です。Rintosullは映像ガイドで初心者でも安心です。Pilates Meeはセミパーソナルで丁寧に指導しています。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷調整しやすく初心者におすすめです。新大阪エリアはマシン専門スタジオが充実しています。',
  },
  {
    question: '新大阪のピラティスの料金相場は？',
    answer: '月4回で比べると、Rintosull江坂店 8,800円、zen place江坂（マットグループ）9,625円〜、Pilates Mee（最大3名のセミパーソナル）19,800円、ピラティスアヴニール（マンツーマン30分）19,360円〜です。IMPROVEは入会金・年会費なしの都度払い 1回3,000円です（いずれも税込・2026年10月23日確認）。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れたら週2〜3回に増やすことをおすすめします。大切なのは継続することです。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。2〜3ヶ月の継続が大切です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があれば問題ありません。各スタジオの持ち物は公式サイトで事前にご確認ください。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化しています。ヨガは柔軟性とリラックス重視です。IMPROVEではヨガとピラティスの両方のレッスンがあります。zen placeは他店利用でヨガのレッスンも受けられます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place江坂は男女共用です（公式表記）。Pilates MeeとRintosull江坂店は女性専用です。ピラティスアヴニールは男性向けの案内ページがあります。IMPROVEは店舗に直接ご確認ください。',
  },
  {
    question: '新大阪駅から通いやすいスタジオは？',
    answer: '新大阪駅からはピラティスアヴニール（7番出口から徒歩5分）、Pilates Mee（徒歩7分）、IMPROVE（徒歩10分・西中島南方駅なら1分）です。zen placeとRintosullは江坂駅4番出口から徒歩1分（新大阪駅から御堂筋線で4分）です。ページ上部の早見表もご覧ください。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感される方が多くなっています。最低2ヶ月は継続することをおすすめします。',
  },
]

export default function ShinOsakaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '新大阪', url: 'https://biyori-pilates.com/area/shin-osaka/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月23日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              ピラティス新大阪おすすめ5選<br className="hidden md:block" />
              新大阪駅・西中島南方駅からの徒歩分と料金の比較
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
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、新大阪エリアでおすすめのピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
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
              以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。
            </p>
          </div>
        </section>

        <section className="py-12 bg-white" id="by-station"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4 text-center">新大阪駅・西中島南方駅からの徒歩分で比べる早見表</h2><p className="text-warm-600 leading-relaxed mb-6 text-sm">新大阪駅（JR・御堂筋線）と、ひと駅南の西中島南方駅の両方から近い順に並べました。徒歩分・体験料金・営業時間・定休日は各スタジオの公式ページの表記です（IMPROVE は店舗のホットペッパービューティー掲載情報。2026年10月23日確認・税込）。新大阪駅から徒歩圏は3店、江坂駅の2店は新大阪駅から御堂筋線で4分です。</p><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">スタジオ（住所）</th><th className="px-4 py-3 text-left">新大阪駅から</th><th className="px-4 py-3 text-left">西中島南方駅から</th><th className="px-4 py-3 text-left">形式</th><th className="px-4 py-3 text-left">体験</th><th className="px-4 py-3 text-left">営業時間／定休日</th></tr></thead><tbody>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">ピラティスアヴニール 新大阪・西中島店（西中島5-2-12 ケイアンドエイビルB1）</td><td className="px-4 py-3">7番出口 徒歩5分</td><td className="px-4 py-3">1番出口 徒歩5分</td><td className="px-4 py-3">完全個室のマンツーマン・ペア・セミ（3人）</td><td className="px-4 py-3">90分 2,980円</td><td className="px-4 py-3">7:00〜23:00／年中無休</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">Pilates Mee 西中島南方・新大阪店（西中島6-9-20 新大阪GHビル3階）</td><td className="px-4 py-3">徒歩7分</td><td className="px-4 py-3">徒歩6分</td><td className="px-4 py-3">最大3名のセミパーソナル・パーソナル（女性専用）</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">9:00〜21:15／不定休</td></tr>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">IMPROVE（西中島4-7-30 アネックス新大阪9B）</td><td className="px-4 py-3">徒歩10分</td><td className="px-4 py-3">1番出口 徒歩1分</td><td className="px-4 py-3">少人数制グループ（ピラティス・ヨガ・サスペンション）・マシンのパーソナル</td><td className="px-4 py-3">初回・2回目 1,500円</td><td className="px-4 py-3">月〜金 10:30〜21:00・土 11:00〜19:00・日 10:00〜18:00／不定休</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">zen place pilates 江坂スタジオ（吹田市豊津町9-44 ハートランド江坂5階）</td><td className="px-4 py-3">御堂筋線で4分（江坂駅4番出口 徒歩1分）</td><td className="px-4 py-3">—</td><td className="px-4 py-3">マット・マシンのグループ・プライベート（男女共用）</td><td className="px-4 py-3">マットグループ 1,000円</td><td className="px-4 py-3">平日 9:00〜22:00・土日祝 7:00〜16:00／記載なし</td></tr>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">Rintosull 江坂店（吹田市豊津町10-2 江坂T・Kビル2F）</td><td className="px-4 py-3">御堂筋線で4分（江坂駅4番出口 徒歩1分）</td><td className="px-4 py-3">—</td><td className="px-4 py-3">スクリーン映像つきマシングループ（女性専用）</td><td className="px-4 py-3">無料体験会（約45分）</td><td className="px-4 py-3">記載なし／毎週日曜・第4木曜</td></tr>
        </tbody></table></div><p className="text-warm-600 leading-relaxed mt-4 text-sm">新大阪駅で乗り換えついでに通うなら、7番出口から近い ピラティスアヴニール（マンツーマン）か Pilates Mee（最大3名）が候補です。西中島南方駅を使う方は駅前の IMPROVE、月額を抑えてグループで続けたい方は江坂駅の Rintosull（月4回 8,800円）・zen place（マット月4回 9,625円〜）も比べてみてください。営業時間は Rintosull が公式の店舗ページに記載していないため、レッスンスケジュールで確認が必要です。</p></div></section>

        <PriceComparisonTable studios={studios} areaName="新大阪" />
        <AreaMarketComparison studios={studios} areaName="新大阪" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              新大阪のおすすめピラティススタジオ5選
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
              新大阪のピラティス料金相場
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
                    <td className="px-4 py-3">8,800円〜19,800円（19,800円は Pilates Mee のセミパーソナル）</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 5,170円〜11,000円（アヴニール30分 5,170円〜・Mee 1回あたり8,800〜11,000円）</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜2,980円（Pilates Mee・Rintosull 無料／IMPROVE 1,500円／zen 1,000円／アヴニール 2,980円）</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              新大阪はビジネス街としての性格が強く、仕事帰りの利用を想定した夜間プランや回数券プランが充実しています。賃料が高めのエリアのため料金は全体的にやや高い傾向ですが、法人契約や福利厚生割引に対応しているスタジオもあるのでご確認ください。近隣の梅田エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
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
                  新大阪エリアのスタジオは新大阪駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートをご確認ください。新大阪駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">ビジネス街特有の予約傾向を把握</h3>
                <p className="text-warm-600 leading-relaxed">
                  新大阪はオフィス街のため、平日ランチタイム（12時〜13時）と夕方以降（18時〜21時）に予約が集中する傾向があります。逆に土日は比較的空いているスタジオが多いので、平日に通いづらい方は週末を狙うのも手です。また、祝日は営業時間が変更になることがあるので事前にご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  新大阪エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ずご確認ください。月の途中入会は日割り計算になるかもご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  新大阪エリアだけでなく、近隣の<Link href="/area/umeda/" className="text-warm-700 underline hover:text-warm-900">梅田</Link>、<Link href="/area/esaka/" className="text-warm-700 underline hover:text-warm-900">江坂</Link>、<Link href="/area/honmachi/" className="text-warm-700 underline hover:text-warm-900">本町</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                  <strong>新大阪エリアの豆知識：</strong>新大阪はビジネスパーソンの利用が多いエリアです。スーツやオフィスカジュアルで来てそのまま着替えたい方は、ロッカールームの広さやシャワーの有無を重視してスタジオをお選びください。ウェアレンタルがあれば、大きな荷物を持ち歩く必要がありません。
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
                  <li className="text-warm-700">• Rintosull（リントスル）江坂店（月4回 8,800円〜）</li>
                  <li className="text-warm-700">• zen place pilates 江坂スタジオ（マット月4回 9,625円〜）</li>
                  <li className="text-warm-700">• Pilates Mee 西中島南方・新大阪店（月2回 11,000円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Pilates Mee 西中島南方・新大阪店</li>
                  <li className="text-warm-700">• Rintosull（リントスル）江坂店</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  駅から徒歩2分以内です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• IMPROVE 西中島南方・新大阪（大阪メトロ御堂筋線「西中島南方駅」1番出口 徒歩1分）</li>
                  <li className="text-warm-700">• zen place pilates 江坂スタジオ（大阪メトロ御堂筋線・北大阪急行「江坂駅」4番出口 徒歩1分（新大阪駅から4分））</li>
                  <li className="text-warm-700">• Rintosull（リントスル）江坂店（大阪メトロ御堂筋線・北大阪急行「江坂駅」4番出口 徒歩1分（新大阪駅から4分））</li>
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
                  <li>• zen place（9,625円〜/月4回）</li>
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
                  <li>• このページの掲載スタジオでは該当なし（各スタジオの料金は上の店舗カードを参照）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 16,000〜29,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  毎日通いたい方向けです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• このページの掲載スタジオでは該当なし（各スタジオの料金は上の店舗カードを参照）</li>
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
                  新大阪の掲載店のうち、公式サイトで料金を確認できた店舗のグループ月4回は8,800円〜9,625円（zen place pilates 江坂スタジオ（マット）・Rintosull江坂店・2026年10月確認）です。入会金やキャンペーンもご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  体験料金は、Pilates Mee 西中島南方・新大阪店とRintosull江坂店が無料、IMPROVEが初回・2回目1,500円、zen place pilates 江坂スタジオがマットグループ初回1,000円、ピラティスアヴニール 新大阪・西中島店が90分2,980円です（各公式ページ・2026年10月23日確認）。最新の条件は各公式サイトでご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  新大阪の掲載スタジオでは、IMPROVE 西中島南方・新大阪（大阪メトロ御堂筋線「西中島南方駅」1番出口 徒歩1分）、zen place pilates 江坂スタジオ（大阪メトロ御堂筋線・北大阪急行「江坂駅」4番出口 徒歩1分（新大阪駅から4分））、Rintosull（リントスル）江坂店（大阪メトロ御堂筋線・北大阪急行「江坂駅」4番出口 徒歩1分（新大阪駅から4分））が駅から近いスタジオです。通う時間帯の経路もご確認ください。
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
              本ページでは、新大阪エリアのおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、新大阪にあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
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
              掲載5店の体験料金は無料〜2,980円です（2026年10月23日確認）。<br />
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
              <AreaModifierSections studios={studios} areaName="新大阪" />
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="shin-osaka" areaName="新大阪" />

      <RelatedAreas currentSlug="shin-osaka" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
