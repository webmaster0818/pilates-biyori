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
  alternates: { canonical: 'https://biyori-pilates.com/area/himeji/' },
  title: '姫路のピラティス料金比較｜ゆめタウン姫路のピラティスK（月4回11,220円）と全国のゆめタウンの料金',
  description: 'ゆめタウン ピラティス 料金を公式で確認。ゆめタウン姫路6Fのピラティス K（月4回11,220円・初期費用13,530円・体験0円）と、全国のゆめタウン内のピラティスK 6店・Rintosull 4店の料金・定休日の早見表、姫路エリアのスタジオ比較。',
  keywords: 'ピラティス,姫路,兵庫県,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK ゆめタウン姫路店', image: '/images/studios/pilates-k.webp', rating: 4.7, reviewCount: 54, // 2026-10-25: 出典不明の 4.6(130) を Googleマップの値（data/studio-reviews.ts・2026-08-17取得）に統一
    officialUrl: 'https://t.afi-b.com/visit.php?a=O11543l-G384824n&p=E9887623',
    // 2026-10-25 公式店舗ページ https://pilates-k.jp/studio/hyogo/himeji で照合（旧: JR英賀保駅徒歩圏内・住所未詳・不定休・女性80%/男性20% → 公式値に修正）
    price: '月4回 11,220円〜', trial: '体験レッスン 0円', features: ['女性専用','ゆめタウン姫路内','マシン専門','体験無料'],
    description: '女性専用マシンピラティス専門スタジオです。ゆめタウン姫路内に位置し買い物ついでに通えます。音楽に合わせた楽しいレッスンが特徴',
    access: 'バス「北今宿南口（ゆめタウン前）」停留所 徒歩1分（ゆめタウン姫路6F・駐車場あり）', address: '〒670-0055 兵庫県姫路市神子岡前3丁目12-17 ゆめタウン姫路店6F',
    popularPlan: { name: 'マンスリー4メンバー', description: '月4回、平日・土日祝のお好きな時間で受講できます（別途施設維持費 月825円）。', price: '月4回 11,220円（税込）' },
    options: ['マンスリー4メンバー 月4回 11,220円（税込）', '施設維持費 月825円', '体験レッスン 0円（公式の店舗ページ・2026年11月12日確認）'],
    userProfile: { ageRange: '公式サイトに記載なし', genderRatio: '女性専用', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '火・金 10:00-15:00／17:30-22:00、水 10:00-14:00／17:30-22:00、木 17:30-22:00、土・祝 10:00-18:30、日 10:00-17:30', closed: '月曜日', facilities: ['リフォーマー'] },
  },
  {
    name: 'luluto（ルルト）姫路店', officialUrl: 'https://t.felmat.net/fmcl?ak=L12015F.1.E165311J.U1357808', image: '/images/studios/luluto.webp', rating: 4.8, reviewCount: 22,
    price: '月3回 29,700円〜', trial: '公式の店舗ページで「定員満了のため新規のお客様の受付を停止」と表示（2026年11月12日確認）', features: ['完全マンツーマン','理学療法士監修','高品質指導','カスタマイズ'],
    description: '全国展開の完全マンツーマンマシンピラティススタジオです。理学療法士が監修し実技試験に合格したトレーナーが指導',
    access: 'JR姫路駅から徒歩1分（公式の店舗一覧）',
    address: '兵庫県姫路市豊沢町156番地 アドバンスビル3A',
    popularPlan: { name: '月4回プラン', description: '理学療法士監修のマンツーマンレッスンです（公式の店舗ページの「おすすめ」）。', price: '月4回 38,400円（税込・1回9,600円）' },
    options: ['月3回 29,700円／月4回 38,400円／月6回 55,800円／月8回 72,000円（税込・公式の店舗ページ）', '入会金 22,000円（体験当日入会で無料）'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '9:00〜21:00（公式の店舗ページ・店舗により異なる場合あり）', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'Mstyle（エムスタイル）ピラティス', rating: 4.7, reviewCount: 28,
    officialUrl: 'https://mstylepilates.com/',
    // 2026-11-12 公式（トップ・/prices・/trial）で照合: 月額制ではなく回数券制・住所・徒歩8分・体験料金を公式どおりに
    price: 'グループ1回 3,500円・5回券 15,000円〜（税込・回数券制）', trial: 'グループ体験 2,500円（45分・税込）／プライベート体験 6,600円〜', features: ['助産師資格保有','はりま勝原駅 徒歩8分','女性中心（男性は紹介でプライベート・セミプライベートのみ）','マシン完備'],
    description: '姫路市初のピラティス専用マシン完備の専門スタジオです。代表は助産師の資格を持つインストラクターで女性のライフステージに寄り添った指導が特徴です。料金は月額制ではなく回数券制で、グループ（45分）は1回3,500円です（公式・税込・2026年11月12日確認）。',
    access: 'JR「はりま勝原駅」徒歩8分（公式表記）', address: '兵庫県姫路市広畑区則直20番11',
    popularPlan: { name: 'グループ 回数券', description: '45分のグループレッスンの回数券です。入会金5,000円・施設維持利用料 月300円がかかります（公式）。', price: '1回 3,500円／5回券 15,000円〜（税込）' },
    options: ['グループ 1回 3,500円・5回券 15,000円〜・10回券 25,000円〜（税込）', 'プライベート 1回 8,800円〜10,000円（税込）', '入会金 5,000円・施設維持利用料 月300円（税込）', '体験当日に5回券を現金で購入すると1,000円引き（公式）'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '月〜金 9:00〜17:00／日祝 縮小営業（公式）', closed: '公式サイトでご確認ください', facilities: ['リフォーマー', 'マット', '駐車場4台'] },
  },
  {
    name: 'ピラティススタジオ Rinc', rating: 4.6, reviewCount: 18,
    officialUrl: 'https://pilates-rinc.com/',
    // 2026-11-12 公式（トップ・/price/・体験ページ）で照合: 住所・徒歩・料金・体験・定休日を公式どおりに
    price: 'プライベート1回 11,000円／ペア1回 7,150円（1人）（税込・回数券制）', trial: 'プライベート体験 13,200円／ペア体験 7,700円（1人・税込）', features: ['本格PHIピラティス','ペアレッスン可','山陽姫路駅 徒歩2分','姿勢改善'],
    description: 'アメリカから輸入した本格マシンを使用する姫路のピラティススタジオです。PHIピラティスのレッスンとペアレッスンがあります。料金は月額制ではなく1回ごと・回数券で、プライベート1回11,000円・ペア1回7,150円（1人）です（公式・税込・2026年11月12日確認）。',
    access: 'JR姫路駅 徒歩5分・山陽電鉄「山陽姫路駅」徒歩2分（公式表記）', address: '兵庫県姫路市南町76 姫路城陽ビル3F',
    popularPlan: { name: 'プライベート（50分）', description: 'マンツーマンのマシンピラティスです。入会金5,500円がかかります（公式）。', price: '1回 11,000円（税込）' },
    options: ['ペア 1回 7,150円（1人・税込）', 'グループ（会員のみ・45分）1回 3,850円・10回券 27,500円（税込）', '入会金 5,500円（税込）', '土曜は新規受付を制限中（公式のお知らせ）'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '10:00〜21:00（公式）', closed: '日曜日', facilities: ['リフォーマー', 'マット'] },
  },
  {
    name: 'TONING UP', rating: 4.5, reviewCount: 15,
    officialUrl: 'http://www.toning-up.com/',
    // 2026-11-12 公式で照合: 回数券制・住所・体験料金・定休日（公式に最寄駅・徒歩の記載なし）
    price: 'グループ1回 4,950円・10回券 44,000円（税込・回数券制）', trial: 'グループ体験 3,300円／セミプライベート 4,400円／プライベート 6,600円（税込）', features: ['少人数制グループ（料金表の定員5名）','レベル別クラス','プライベートあり','セミプライベートあり'],
    description: '少人数制のグループレッスン（料金表の定員は5名）と、セミプライベート・プライベートがあるスタジオです。料金は月額制ではなく1回ごと・回数券で、グループ60分は1回4,950円です（公式・税込・2026年11月12日確認）。',
    access: '公式サイトに最寄駅・徒歩分の記載なし（住所は八代緑ヶ丘町）', address: '兵庫県姫路市八代緑ヶ丘町3-6',
    popularPlan: { name: 'グループレッスン（60分）', description: 'レベル別・効果別のグループレッスンです。', price: '1回 4,950円／10回券 44,000円（税込）' },
    options: ['セミプライベート 1人 7,150円（税込）', 'プライベート 9,900円（税込）'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '受付 10:00〜18:00（公式）', closed: '日曜・祝日', facilities: ['リフォーマー', 'マット'] },
  }
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '問題ありません。姫路エリアのスタジオはほとんどが初心者歓迎です。体験レッスンから気軽に始められます。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷を調整しやすく、初心者におすすめです。' },
  { question: '姫路のピラティスの料金相場は？', answer: 'グループ月4回で11,220円〜程度です。パーソナルは掲載店の公式値で1回 8,800円〜11,000円です（2026年11月12日確認）。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回が目安です。大切なのは継続することです。' },
  { question: 'ピラティスで痩せますか？', answer: 'インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。2〜3ヶ月の継続が大切です。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があれば問題ありません。靴下（滑り止め付き推奨）も用意しておくと安心です。' },
  { question: 'ピラティスとヨガの違いは何ですか？', answer: 'ピラティスは体幹強化・姿勢改善に特化しています。ヨガは柔軟性とリラックス重視です。目的に合わせてお選びください。' },
  { question: '男性でも通えるスタジオはありますか？', answer: '姫路エリアには男性利用可のスタジオもあります。各スタジオの詳細は公式サイトでご確認ください。' },
  { question: '無料で体験できるスタジオは？', answer: '各スタジオの最新キャンペーン情報を公式サイトでご確認ください。無料体験を実施しているスタジオもあります。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感される方が多くなっています。最低2ヶ月は継続することをおすすめします。' },
]

export default function HimejiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '姫路', url: 'https://biyori-pilates.com/area/himeji/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年11月12日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">ピラティス姫路おすすめ5選<br className="hidden md:block" />料金・体験レッスン・マシン対応を比較</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">姫路</span></nav></div></section>
        <section className="py-8 bg-white" id="by-station"><div className="max-w-5xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4 text-center">姫路のピラティス早見表（最寄駅・料金の下限・体験）</h2><p className="text-warm-600 leading-relaxed mb-6 text-sm">掲載5店の最寄駅・料金・体験料金を、各スタジオの公式サイトの表記で並べました（2026年11月12日確認・税込）。月額制はピラティスK・ルルトの2店で、ほかの3店は1回ごと・回数券の料金です。</p><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">スタジオ（住所）</th><th className="px-4 py-3 text-left">最寄駅・徒歩</th><th className="px-4 py-3 text-left">料金の下限</th><th className="px-4 py-3 text-left">体験</th></tr></thead><tbody>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">ピラティスK ゆめタウン姫路店（神子岡前3-12-17 ゆめタウン姫路6F）</td><td className="px-4 py-3">バス「北今宿南口（ゆめタウン前）」徒歩1分</td><td className="px-4 py-3">月4回 11,220円（ほかに施設維持費 月825円）</td><td className="px-4 py-3">0円</td></tr>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">luluto（ルルト）姫路店（豊沢町156 アドバンスビル3A）</td><td className="px-4 py-3">JR姫路駅 徒歩1分</td><td className="px-4 py-3">月3回 29,700円</td><td className="px-4 py-3">新規受付を停止中（定員満了）</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">ピラティススタジオ Rinc（南町76 姫路城陽ビル3F）</td><td className="px-4 py-3">山陽姫路駅 徒歩2分・JR姫路駅 徒歩5分</td><td className="px-4 py-3">ペア 1回 7,150円（1人）／プライベート 1回 11,000円</td><td className="px-4 py-3">ペア 7,700円（1人）／プライベート 13,200円</td></tr>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">Mstyle ピラティス（広畑区則直20-11）</td><td className="px-4 py-3">JRはりま勝原駅 徒歩8分</td><td className="px-4 py-3">グループ 1回 3,500円（5回券 15,000円〜）</td><td className="px-4 py-3">グループ 2,500円（45分）</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">TONING UP（八代緑ヶ丘町3-6）</td><td className="px-4 py-3">公式に記載なし</td><td className="px-4 py-3">グループ 1回 4,950円（10回券 44,000円）</td><td className="px-4 py-3">グループ 3,300円</td></tr>
        </tbody></table></div><p className="text-warm-500 text-xs mt-4 leading-relaxed">確認した公式ページ: ピラティスK（pilates-k.jp/studio/hyogo/himeji）、ルルト（luluto.kabushikigaisya-rigakubody.co.jp/tenpo/pilates_himeji/）、Rinc（pilates-rinc.com）、Mstyle（mstylepilates.com）、TONING UP（toning-up.com）。料金・キャンペーンは変更されることがあるため、予約前に公式サイトをご確認ください。</p></div></section>
        <AreaConclusion studios={studios} areaName="姫路" />

        <TableOfContents areaName="姫路" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-600 leading-relaxed mb-8">本ページでは、姫路エリアでおすすめのピラティススタジオ5選をまとめました。</p><div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>姫路でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>無料体験や格安体験のスタジオを知りたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>JR「姫路駅」/ 山陽「山陽姫路駅」から通いやすいスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul></div><p className="text-warm-600 leading-relaxed">以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。</p></div></section>
        <PriceComparisonTable studios={studios} areaName="姫路" />
        <AreaMarketComparison studios={studios} areaName="姫路" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">姫路のおすすめピラティススタジオ5選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        {/* 2026-10-25: 「ゆめタウン ピラティス 料金」10.6位の受け皿。値は公式店舗ページ（2026-10-25確認）と data/studio-reviews.ts の Google 要約のみ */}
        <section className="py-16 bg-white" id="yumetown-price"><div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4 text-center">ゆめタウン姫路のピラティス料金（ピラティス K ゆめタウン姫路店）</h2>
          <p className="text-warm-600 leading-relaxed mb-6 text-sm">ゆめタウン姫路の6Fには、女性専用のマシンピラティススタジオ「ピラティス K ゆめタウン姫路店」があります。バス「北今宿南口（ゆめタウン前）」停留所から徒歩1分で、駐車場があります。料金・営業時間・定休日は<a href="https://pilates-k.jp/studio/hyogo/himeji" target="_blank" rel="noopener noreferrer" className="underline hover:text-warm-800">公式の店舗ページ</a>の表記です（2026年10月25日確認・税込）。</p>
          <div className="overflow-x-auto mb-4"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">プラン・費用</th><th className="px-4 py-3 text-left">料金（税込）</th></tr></thead><tbody>
            <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">0円（上下ウェアのレンタル込み。靴下の着用が必須）</td></tr>
            <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">マンスリー4メンバー（月4回）</td><td className="px-4 py-3">月11,220円</td></tr>
            <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">マンスリー8メンバー（月8回）</td><td className="px-4 py-3">月15,070円</td></tr>
            <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">マンスリープレミアムメンバー（毎日2レッスンまで）</td><td className="px-4 py-3">月17,820円（2026年9月1日から全国の loIve を月6回まで利用可）</td></tr>
            <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">施設維持費（マンスリー共通）</td><td className="px-4 py-3">月825円</td></tr>
            <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">追加受講／チケット（1回）</td><td className="px-4 py-3">追加受講 2,200円／チケットプラン 3,850円</td></tr>
            <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">初期費用（入会時）</td><td className="px-4 py-3">13,530円（入会金5,500円・登録料5,500円・施設利用料2,530円）</td></tr>
          </tbody></table></div>
          <p className="text-warm-600 text-sm leading-relaxed mb-2">月4回で通う場合の月々の支払いは、月会費11,220円＋施設維持費825円で12,045円です。マンスリーデイメンバー（平日10〜15時）は2026年5月1日以降、新規受付を行っていません。体験レッスン当日に入会するとキャンペーン料金などで入会できる場合がある、と公式の案内にあります（内容は店舗でご確認ください）。</p>
          <p className="text-warm-600 text-sm leading-relaxed mb-6">営業時間：火・金 10:00-15:00／17:30-22:00、水 10:00-14:00／17:30-22:00、木 17:30-22:00、土・祝 10:00-18:30、日 10:00-17:30。定休日は月曜日です。支払いはクレジットカード・電子マネー・QRコード決済のみ（現金不可）です。</p>
          {(() => { const rev = STUDIO_REVIEWS['ピラティスK ゆめタウン姫路店']; if (!rev) return null; return (
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-4">
              <p className="text-sm font-bold text-warm-800">Googleマップの口コミ（要約）：★{rev.rating}（{rev.userRatings}件）</p>
              <p className="text-sm text-warm-700 mt-2 leading-relaxed">{rev.summary}</p>
              <p className="text-[11px] text-warm-500 mt-2">Googleマップに投稿された口コミをもとに、編集部が要約したものです（{rev.fetchedAt}時点）。口コミ本文は転載していません。 <a href={rev.mapsUri} target="_blank" rel="noopener noreferrer" className="underline hover:text-warm-700">出典：Googleマップの口コミを見る</a></p>
            </div>) })()}
                  <h3 className="text-xl font-bold text-warm-900 mt-10 mb-3" id="yumetown-all">全国のゆめタウン内ピラティスの料金早見表</h3>
          <p className="text-warm-600 leading-relaxed mb-4 text-sm">「ゆめタウン ピラティス 料金」で探す方向けに、ゆめタウン内にあるピラティス K と Rintosull（リントスル）の店舗を、公式の店舗一覧・店舗ページで確認してまとめました（2026年10月26日確認・税込）。同じブランドなら料金はゆめタウン内の店舗で共通です。</p>
          <div className="overflow-x-auto mb-4"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">ブランド</th><th className="px-4 py-3 text-left">ゆめタウン内の店舗</th><th className="px-4 py-3 text-left">月額（税込）</th><th className="px-4 py-3 text-left">体験</th><th className="px-4 py-3 text-left">定休日</th></tr></thead><tbody>
            <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">ピラティス K（女性専用）</td><td className="px-4 py-3">ゆめタウン姫路（兵庫）・ゆめタウン光の森（熊本）・ゆめタウン荒尾シティモール（熊本・2026年8月9日オープン）・ゆめタウン東広島（広島）・ゆめタウン行橋（福岡）・ゆめタウン丸亀（香川）</td><td className="px-4 py-3">月4回 11,220円・月8回 15,070円・プレミアム 17,820円＋施設維持費 月825円（初期費用 13,530円）</td><td className="px-4 py-3">0円</td><td className="px-4 py-3">姫路・光の森＝月曜／荒尾・東広島・行橋・丸亀＝日曜・月曜</td></tr>
            <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">Rintosull（リントスル・女性専用）</td><td className="px-4 py-3">ゆめタウンサンピアン（熊本）・ゆめタウン呉レクレ館（広島）・ゆめタウン廿日市（広島）・ゆめタウン筑紫野（福岡）</td><td className="px-4 py-3">4・フルタイム 8,800円・ライト・フルタイム 13,800円・プレミアム フリー・フルタイム 16,800円＋運営管理費 月680円</td><td className="px-4 py-3">無料体験会</td><td className="px-4 py-3">サンピアン・廿日市＝毎週日曜（ほかの店は各店舗ページで確認）</td></tr>
          </tbody></table></div>
          <p className="text-warm-600 text-sm leading-relaxed mb-2">月4回で比べると、施設維持費・運営管理費を含めた月々の支払いは ピラティス K が 12,045円、Rintosull が 9,480円です。ピラティス K のゆめタウン内の店舗はどこも月4回 11,220円で、銀座・表参道などの都市部の店舗（月4回 13,420円）より安い料金帯です。</p>
          <p className="text-warm-500 text-xs leading-relaxed mb-2">確認元（2026年10月26日）: <a href="https://pilates-k.jp/studio/hyogo/himeji" target="_blank" rel="noopener noreferrer" className="underline">ピラティスK ゆめタウン姫路店</a>・<a href="https://pilates-k.jp/studio/kumamoto-ken/hikarinomori" target="_blank" rel="noopener noreferrer" className="underline">光の森店</a>・<a href="https://pilates-k.jp/studio/kumamoto-ken/arao" target="_blank" rel="noopener noreferrer" className="underline">荒尾シティモール店</a>・<a href="https://pilates-k.jp/studio/hiroshima-ken/higashihiroshima" target="_blank" rel="noopener noreferrer" className="underline">東広島店</a>／Rintosull <a href="https://rintosull.jp/shop/hiroshima/" target="_blank" rel="noopener noreferrer" className="underline">広島県の店舗一覧</a>・<a href="https://rintosull.jp/shop/kumamoto/sanpian/" target="_blank" rel="noopener noreferrer" className="underline">ゆめタウンサンピアン店</a>・<a href="https://rintosull.jp/shop/hiroshima/hatsukaichi/" target="_blank" rel="noopener noreferrer" className="underline">ゆめタウン廿日市店</a>。熊本のゆめタウンについては<a href="/area/kumamoto/" className="underline">熊本のページ</a>もご覧ください。</p>
</div></section>
        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">料金重視で選ぶ方におすすめです。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• ピラティスK（月4回 11,220円〜・体験無料）</li></ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専門</h3>
                <p className="text-warm-600 text-sm mb-4">女性専門で選ぶ方におすすめです。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• Mstyle（助産師資格保有）</li><li className="text-warm-700">• ピラティスK（女性専用）</li></ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル</h3>
                <p className="text-warm-600 text-sm mb-4">パーソナルで選ぶ方におすすめです。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• luluto（理学療法士監修・マンツーマン）</li><li className="text-warm-700">• Rinc（本格PHIピラティス）</li></ul>
              </div>
            </div></div></section>
        <section className="py-16 bg-warm-50" id="price-market"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">姫路のピラティス料金相場</h2><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">11,220円〜</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">1回 8,800円〜11,000円（掲載店の公式値）</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">0円〜13,200円（掲載店の公式値・2026年11月12日確認）</td></tr></tbody></table></div><p className="text-warm-600 mt-4 text-sm leading-relaxed">姫路は兵庫県第2の都市で、JR姫路駅周辺にスタジオが集まっています。大阪・神戸と比べて料金はリーズナブルな傾向です。個人経営の個性的なスタジオが多く、助産師やPHIピラティスの資格を持つ専門家による指導が受けられるのが特徴です。</p></div></section>
        <section className="py-16 bg-white" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">姫路でスタジオを選ぶ際の注意点</h2><div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR姫路駅と山陽姫路駅は隣接</h3>
                <p className="text-warm-600 leading-relaxed">JR姫路駅と山陽電鉄山陽姫路駅はほぼ隣接しています。どちらの路線でもアクセス可能ですが、郊外のスタジオは車が便利です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">ゆめタウン姫路は駐車場あり</h3>
                <p className="text-warm-600 leading-relaxed">ピラティスKが入るゆめタウン姫路には駐車場があります（公式の店舗ページの表記は「駐車場あり」。料金・無料時間はゆめタウン姫路の案内でご確認ください）。車で通いたい方に向いた立地です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">産前産後ケア対応スタジオもあり</h3>
                <p className="text-warm-600 leading-relaxed">Mstyleは助産師資格を持つインストラクターがいるため、妊娠中や産後の方にも対応可能です。事前にご相談ください。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">神戸エリアも検討</h3>
                <p className="text-warm-600 leading-relaxed">JR新快速で神戸三宮まで約40分です。通勤経路に合わせて三宮・神戸エリアのスタジオもご検討ください。</p>
              </div>
            </div></div></section>
        <section className="py-16 bg-warm-50" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：水分補給に必要です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは、着用が必須のスタジオが多くあります。</span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>をお選びください。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>がフォーム確認に効果的です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>姫路エリアの豆知識：</strong>姫路は世界遺産・姫路城で知られる兵庫県第2の都市です。駅周辺の商業施設と住宅地にスタジオが点在しています。車通いの方は駐車場のあるゆめタウン姫路内のスタジオが便利です。</p></div></div></div></section>
        <section className="py-16 bg-white" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">姫路の料金相場はグループ月4回で11,220円〜です。入会金やキャンペーンもご確認ください。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">複数のスタジオで体験レッスンを受けて比較することをおすすめします。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">自宅や職場からの距離、駅からの徒歩時間をご確認ください。継続するには通いやすさが最も重要です。</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">本ページでは、姫路エリアのおすすめピラティススタジオについてご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">本ページでは、姫路にあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。</p><p className="text-warm-600 leading-relaxed mb-6">本ページの情報を、スタジオ選びにお役立てください。</p><p className="text-warm-700 font-medium text-center">本ページが、ピラティススタジオ選びの参考になれば幸いです。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンのご予約</h2><p className="text-warm-200 mb-8 leading-relaxed">体験レッスンは0円（ピラティスK）から、プライベート体験13,200円（Rinc）まで店ごとに異なります（2026年11月12日 各公式）。<br />まずは体験レッスンへの参加をおすすめします。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
              <AreaModifierSections studios={studios} areaName="姫路" />
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="himeji" areaName="姫路" />

      <RelatedAreas currentSlug="himeji" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
