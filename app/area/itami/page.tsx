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
import { STUDIO_REVIEWS } from '@/data/studio-reviews'

export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/itami/' },
  title: '伊丹のピラティス比較｜Rintosull イオンモール伊丹店の口コミ・料金も',
  description: '伊丹エリアのピラティススタジオを料金・無料体験・マシン対応で比較。Rintosull イオンモール伊丹店の口コミ（公式掲載の声・Googleマップの要約）と料金（月4回8,800円〜）も公式で確認して掲載しています。',
  keywords: 'ピラティス,伊丹,兵庫県,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'Rintosull（リントスル）イオンモール伊丹店', image: '/images/studios/rintosull.webp', rating: 4.7, reviewCount: 288, // 2026-10-25: 出典不明の 4.5(110) を Googleマップの値（data/studio-reviews.ts・2026-08-17取得）に統一
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683',
    // 2026-10-25 公式店舗ページ https://rintosull.jp/shop/hyogo/aeon_itami/ で照合（旧: 月4回10,000円程度・通い放題15,000円程度・阪急伊丹駅徒歩1分・不定休・女性80%/男性20% → 公式値に修正）
    price: '月4回 8,800円〜', trial: '体験会 0円（約45分・手ぶらで参加可）', features: ['JR伊丹駅デッキ直結徒歩1分','女性専用','LAVA相互利用','イオンモール内'],
    description: 'ホットヨガLAVAの系列ブランドです。JR伊丹駅からデッキで直結・徒歩1分のイオンモール伊丹1Fにあります。月会費は4・フルタイム（月4回）8,800円、ライト・フルタイム（当店＋1店舗・通い放題）13,800円、プレミアム フリー・フルタイム（系列全店・通い放題）16,800円（税込・2026年10月25日に公式店舗ページで確認）',
    access: 'JR「伊丹駅」からデッキで直結 徒歩1分（イオンモール伊丹1F・駐車場あり）',
    address: '〒664-0847 兵庫県伊丹市藤ノ木1-1-1 イオンモール伊丹1F',
    popularPlan: { name: '4・フルタイム', description: '当店で月4回まで受講できるプランです（別途運営管理費 月680円）。', price: '月4回 8,800円' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '公式サイトに記載なし', genderRatio: '女性専用', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式の店舗ページに記載なし（レッスンスケジュールPDFで確認できます）', closed: '毎週日曜', facilities: ['水素水サーバー', 'ドライヤー付きパウダースペース', '更衣室', '鍵付きロッカー'] },
  },
  {
    name: '姿勢改善専門スタジオ ネコノビ', rating: 4.7, reviewCount: 35,
    price: 'パーソナル制（詳細は公式サイト）', trial: '体験レッスンあり', features: ['阪急伊丹駅徒歩1分','神経整体×ピラティス','猫背改善','肩こり対応'],
    description: '阪急伊丹駅徒歩1分です。神経整体×ピラティスで猫背・反り腰・肩こり・腰痛などの慢性症状に対応する専門スタジオ',
    access: '阪急伊丹線「伊丹駅」徒歩1分', address: '兵庫県伊丹市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '人気プラン', description: '阪急伊丹駅徒歩1分です。神経整体×ピラティスで猫背・反り腰・肩こり・腰痛な', price: 'パーソナル制（詳細は公式サイト）' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'ピラティスアヴニール 伊丹店', rating: 4.6, reviewCount: 28,
    price: 'パーソナル制（詳細は公式サイト）', trial: '体験レッスンあり', features: ['カスタマイズトレーニング','姿勢チェック','初心者〜上級者','丁寧な指導'],
    description: 'カウンセリング・姿勢チェック・姿勢分析を経て最適なトレーニングプランを立てるパーソナルピラティススタジオ',
    access: '伊丹市内（詳細は公式サイトでご確認ください）', address: '兵庫県伊丹市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '人気プラン', description: 'カウンセリング・姿勢チェック・姿勢分析を経て最適なトレーニングプランを', price: 'パーソナル制（詳細は公式サイト）' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'STAR Pilates（スターピラティス）伊丹', rating: 4.5, reviewCount: 42,
    price: '月額制（詳細は公式サイト）', trial: '体験レッスンあり', features: ['女性専用','リフォーマー専門','少人数制10名','初心者向け'],
    description: '女性専用のマシンピラティススタジオです。リフォーマーを使った10名ほどの少人数制グループレッスンで初心者向けプログラムが豊富',
    access: '伊丹市内（詳細は公式サイトでご確認ください）', address: '兵庫県伊丹市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '人気プラン', description: '女性専用のマシンピラティススタジオです。リフォーマーを使った10名ほどの少', price: '月額制（詳細は公式サイト）' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'Pilates Mee伊丹店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=F10273P.1.9146255O.U1357808',
    image: '/images/studios/pilates-mee.webp',
    price: 'セミパーソナル月4回 19,800円 / パーソナル月4回 39,600円（税込）',
    priceList: ['体験レッスン無料', 'セミパーソナル：月2回 11,000円／月4回 19,800円／通い放題 37,500円（税込）', 'パーソナル：月2回 22,000円／月4回 39,600円／月8回 70,400円（税込）'],
    trial: '体験レッスン無料',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオです。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯が特徴です。阪急伊丹駅から徒歩3分です。',
    access: '阪急伊丹駅 徒歩3分／JR伊丹駅 徒歩7分',
    address: '〒664-0851 兵庫県伊丹市中央 1丁目8−1　3F',
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', '柔軟性向上', 'ダイエット'],
    },
    basicInfo: {
      hours: '9:00〜21:15',
      closed: '不定休',
      facilities: ['女性専用トイレ', '着替えスペース', '全身鏡'],
    },

  },
  {
    // 2026-09-25 掲載依頼→返信→先方回答（①〜⑤）を受けて掲載。回答された内容だけを載せる。
    // 2026-10-01 先方から「体験レッスンは有りで無料」と回答をいただいたので反映。
    // ⚠️ 設備・年齢層は依然として回答が無いので作らない（StudioCardは未設定だと
    //    架空の既定値を出すため、空文字ではなく「記載なし」「空配列」を明示して渡す）。
    name: 'マシンピラティス&パーソナルトレーニングジム emovere',
    officialUrl: 'https://emovere.co.jp',
    price: '25分コース 2回 8,000円〜 / 50分コース 2回 15,200円〜',
    trial: '無料体験あり',
    features: ['阪急伊丹駅徒歩2分', 'マシンピラティス', 'パーソナルトレーニング', '男女利用可'],
    description: '阪急伊丹駅から徒歩2分です。マシンピラティスとパーソナルトレーニングを組み合わせ、一人ひとりの体や目標に合わせて指導するジムです。運動が初めての方から、姿勢改善・健康維持を目的とする方まで男女問わず利用できます。',
    access: '阪急伊丹線「伊丹駅」徒歩2分',
    address: '兵庫県伊丹市中央2丁目2-16 1F',
    popularPlan: {
      name: '25分コース',
      description: 'マシンピラティスとパーソナルトレーニングを組み合わせた短時間のコースです。回数券制です。',
      price: '2回 8,000円 / 4回 15,600円 / 6回 22,800円 / 8回 29,600円',
    },
    options: [
      '50分コース 2回 15,200円',
      '50分コース 4回 29,600円',
      '50分コース 6回 43,200円',
      '50分コース 8回 56,000円',
    ],
    userProfile: { ageRange: '公式サイトに記載なし', genderRatio: '男女ご利用可', purpose: [] },
    basicInfo: { hours: '平日・土曜 8:00〜22:00 / 日曜・祝日 8:00〜20:00', closed: '公式サイトに記載なし', facilities: [] },
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '問題ありません。伊丹エリアのスタジオはほとんどが初心者歓迎です。体験レッスンから気軽に始められます。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷を調整しやすく、初心者におすすめです。' },
  { question: '伊丹のピラティスの料金相場は？', answer: 'グループ月4回で10,000円〜15,000円程度です。パーソナルは1回 8,000円〜15,000円が目安です。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回が目安です。大切なのは継続することです。' },
  { question: 'ピラティスで痩せますか？', answer: 'インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。2〜3ヶ月の継続が大切です。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があれば問題ありません。靴下（滑り止め付き推奨）も用意しておくと安心です。' },
  { question: 'ピラティスとヨガの違いは何ですか？', answer: 'ピラティスは体幹強化・姿勢改善に特化しています。ヨガは柔軟性とリラックス重視です。目的に合わせてお選びください。' },
  { question: '男性でも通えるスタジオはありますか？', answer: '伊丹エリアには男性利用可のスタジオもあります。各スタジオの詳細は公式サイトでご確認ください。' },
  { question: '無料で体験できるスタジオは？', answer: '各スタジオの最新キャンペーン情報を公式サイトでご確認ください。無料体験を実施しているスタジオもあります。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感される方が多くなっています。最低2ヶ月は継続することをおすすめします。' },
]

export default function ItamiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '伊丹', url: 'https://biyori-pilates.com/area/itami/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年10月25日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">ピラティス伊丹おすすめ6選<br className="hidden md:block" />料金・体験レッスン・マシン対応を比較</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">伊丹</span></nav></div></section>
        <AreaConclusion studios={studios} areaName="伊丹" />

        <TableOfContents areaName="伊丹" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-600 leading-relaxed mb-8">本ページでは、伊丹エリアでおすすめのピラティススタジオ6選をまとめました。</p><div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>伊丹でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>無料体験や格安体験のスタジオを知りたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>阪急「伊丹駅」/ JR「伊丹駅」から通いやすいスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul></div><p className="text-warm-600 leading-relaxed">以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。</p></div></section>
        <PriceComparisonTable studios={studios} areaName="伊丹" />
        <AreaMarketComparison studios={studios} areaName="伊丹" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">伊丹のおすすめピラティススタジオ6選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        {/* 2026-10-25: 「rintsull イオン伊丹店 レビュー」17.4位の受け皿。値は公式店舗ページ（2026-10-25確認）と data/studio-reviews.ts の Google 要約のみ */}
        <section className="py-16 bg-white" id="rintosull-aeon-itami"><div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4 text-center">Rintosull イオンモール伊丹店の口コミ・料金</h2>
          <p className="text-warm-600 leading-relaxed mb-6 text-sm">Rintosull（リントスル）イオンモール伊丹店は、JR伊丹駅からデッキで直結・徒歩1分のイオンモール伊丹1Fにある女性専用のマシンピラティススタジオです。料金・定休日・設備は<a href="https://rintosull.jp/shop/hyogo/aeon_itami/" target="_blank" rel="noopener noreferrer" className="underline hover:text-warm-800">公式の店舗ページ</a>の表記です（2026年10月25日確認・税込）。</p>
          <div className="overflow-x-auto mb-8"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">項目</th><th className="px-4 py-3 text-left">内容</th></tr></thead><tbody>
            <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">4・フルタイム（当店・月4回）</td><td className="px-4 py-3">月8,800円</td></tr>
            <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">ライト・フルタイム（当店＋1店舗・通い放題）</td><td className="px-4 py-3">月13,800円</td></tr>
            <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">プレミアム フリー・フルタイム（系列全店・通い放題）</td><td className="px-4 py-3">月16,800円（近隣の LAVA 塚口店・豊中店・イオンモール伊丹昆陽店なども利用可。利用可能状況は店舗により異なります）</td></tr>
            <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">そのほかの費用</td><td className="px-4 py-3">運営管理費 月680円／1回券 3,300円／他店舗利用料 1回500円／入会時に施設使用料2,500円・入会金5,000円・登録金5,000円（体験当日入会・キャンペーン入会の場合は入会金・登録金0円）</td></tr>
            <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験会</td><td className="px-4 py-3">0円・約45分（施設見学・カウンセリング・マシンピラティスのプチ体験）。手ぶらで参加でき、来店特典としてパーソナル姿勢診断つき</td></tr>
            <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">定休日／種別</td><td className="px-4 py-3">毎週日曜／女性専用（営業時間は公式の店舗ページに記載がなく、レッスンスケジュールPDFで確認できます）</td></tr>
            <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">設備・支払い</td><td className="px-4 py-3">水素水サーバー、ドライヤー付きパウダースペース、更衣室、鍵付きロッカー、駐車場・駐輪場あり。キャッシュレスのみ（現金不可）</td></tr>
          </tbody></table></div>
          <p className="text-warm-600 text-sm leading-relaxed mb-8">2026年11月末までのキャンペーンでは、条件を満たす方は利用開始月を含む3ヶ月間、系列全店通い放題（16,800円/月）が1,980円/月になります。特別価格終了後12ヶ月間の継続が条件です。適用条件は公式の店舗ページで必ずご確認ください。</p>
          <h3 className="text-lg font-bold text-warm-900 mb-3">公式の店舗ページに掲載されている口コミ（原文の一部を引用）</h3>
          <ul className="space-y-3 mb-3">
            <li className="bg-warm-50 border border-warm-200 rounded-lg p-4 text-sm text-warm-700">「まず腰痛を治したかったので、マシンピラティスに興味を持ってお試しに来ました。」「ショッピングセンターの中にあってそれも楽しみ。」<span className="block text-xs text-warm-500 mt-1">2026年6月13日掲載</span></li>
            <li className="bg-warm-50 border border-warm-200 rounded-lg p-4 text-sm text-warm-700">「少しマシンを体験させてもらったのですが、ちょっとした動きでも身体に効いてると思える体験をさせてもらえました。」<span className="block text-xs text-warm-500 mt-1">2026年5月28日掲載</span></li>
            <li className="bg-warm-50 border border-warm-200 rounded-lg p-4 text-sm text-warm-700">「初心者ですが、わかりやすく解説してもらい、少しの体験でしたが効果を感じたので入会しました。」<span className="block text-xs text-warm-500 mt-1">2026年6月28日掲載</span></li>
          </ul>
          <p className="text-[11px] text-warm-500 mb-8">出典：<a href="https://rintosull.jp/shop/hyogo/aeon_itami/" target="_blank" rel="noopener noreferrer" className="underline hover:text-warm-700">Rintosull イオンモール伊丹店 公式店舗ページ「イオンモール伊丹店の口コミ」</a>（2026年10月25日確認）。公式サイトに掲載された声のため、良い内容に偏る可能性があります。感じ方には個人差があります。</p>
          {(() => { const rev = STUDIO_REVIEWS['Rintosull（リントスル）イオンモール伊丹店']; if (!rev) return null; return (
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-4 mb-6">
              <p className="text-sm font-bold text-warm-800">Googleマップの口コミ（要約）：★{rev.rating}（{rev.userRatings}件）</p>
              <p className="text-sm text-warm-700 mt-2 leading-relaxed">{rev.summary}</p>
              <p className="text-[11px] text-warm-500 mt-2">Googleマップに投稿された口コミをもとに、編集部が要約したものです（{rev.fetchedAt}時点）。口コミ本文は転載していません。 <a href={rev.mapsUri} target="_blank" rel="noopener noreferrer" className="underline hover:text-warm-700">出典：Googleマップの口コミを見る</a></p>
            </div>) })()}
          <h3 className="text-lg font-bold text-warm-900 mb-3">公式の声と Google の口コミの両方に見られる傾向</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-warm-700">
            <li>ショッピングモール内にあり、買い物とあわせて寄れる点に触れた声が、公式の店舗ページの口コミと Googleマップの口コミ（要約）の両方にあります。</li>
            <li>腰痛をきっかけに始めた、という声が両方に見られます。</li>
            <li>体験の時点で「効いている」感覚があった、という声が両方にあります。体験会は0円・約45分なので、まず体験で確かめる方法があります。</li>
          </ul>
        </div></section>
        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">料金重視で選ぶ方におすすめです。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li><li className="text-warm-700">• STAR Pilates（少人数グループ）</li></ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">姿勢改善</h3>
                <p className="text-warm-600 text-sm mb-4">姿勢改善で選ぶ方におすすめです。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• ネコノビ（神経整体×ピラティス）</li><li className="text-warm-700">• ピラティスアヴニール（姿勢分析）</li></ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">女性専用で選ぶ方におすすめです。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• STAR Pilates（女性専用）</li></ul>
              </div>
            </div></div></section>
        <section className="py-16 bg-warm-50" id="price-market"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">伊丹のピラティス料金相場</h2><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">10,000円〜15,000円</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">1回 8,000円〜15,000円</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">無料〜5,000円</td></tr></tbody></table></div><p className="text-warm-600 mt-4 text-sm leading-relaxed">伊丹は阪急・JRの2路線が利用可能で、大阪梅田まで約20分のアクセスです。イオンモール伊丹内のRintosullは駅徒歩1分で買い物ついでに通える便利さが魅力です。姿勢改善に特化したネコノビなど個性的なスタジオもあります。</p></div></section>
        <section className="py-16 bg-white" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">伊丹でスタジオを選ぶ際の注意点</h2><div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">阪急伊丹駅とJR伊丹駅は離れている</h3>
                <p className="text-warm-600 leading-relaxed">阪急伊丹駅とJR伊丹駅は徒歩約10分離れています。利用路線に合ったスタジオをお選びください。イオンモール伊丹はJR伊丹駅前です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">猫背・肩こりに悩む方はネコノビを検討</h3>
                <p className="text-warm-600 leading-relaxed">ネコノビは神経整体×ピラティスで慢性症状に特化しています。猫背や肩こりに悩んでいる方は専門スタジオで改善を目指すことをおすすめします。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">イオンモール伊丹の駐車場活用</h3>
                <p className="text-warm-600 leading-relaxed">イオンモール伊丹は駐車場完備です。車で通いたい方はRintosullが便利です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣の西宮・尼崎も検討</h3>
                <p className="text-warm-600 leading-relaxed">阪急沿線で西宮北口や尼崎にもスタジオが充実しています。通勤経路に合わせて比較のうえご検討ください。</p>
              </div>
            </div></div></section>
        <section className="py-16 bg-warm-50" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：水分補給に必要です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは、着用が必須のスタジオが多くあります。</span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>をお選びください。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>がフォーム確認に効果的です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>伊丹エリアの豆知識：</strong>伊丹は大阪国際空港（伊丹空港）のお膝元です。阪急・JRの2路線利用可能で、大阪・神戸へのアクセスも良好な住宅地です。イオンモール伊丹内のスタジオであれば、買い物と両立できます。</p></div></div></div></section>
        <section className="py-16 bg-white" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">伊丹の料金相場はグループ月4回で10,000円〜15,000円です。入会金やキャンペーンもご確認ください。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">複数のスタジオで体験レッスンを受けて比較することをおすすめします。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">自宅や職場からの距離、駅からの徒歩時間をご確認ください。継続するには通いやすさが最も重要です。</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">本ページでは、伊丹エリアのおすすめピラティススタジオについてご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">本ページでは、伊丹にあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。</p><p className="text-warm-600 leading-relaxed mb-6">本ページの情報を、スタジオ選びにお役立てください。</p><p className="text-warm-700 font-medium text-center">本ページが、ピラティススタジオ選びの参考になれば幸いです。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンのご予約</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜5,000円です。<br />まずは体験レッスンへの参加をおすすめします。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
              <AreaModifierSections studios={studios} areaName="伊丹" />
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="itami" areaName="伊丹" />

      <RelatedAreas currentSlug="itami" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
