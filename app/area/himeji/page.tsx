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
  title: '姫路のピラティス料金比較｜ゆめタウン姫路のピラティスKの料金も',
  description: '姫路エリアのピラティススタジオを料金・無料体験・マシン対応で比較。ゆめタウン姫路6Fのピラティス K の料金（月4回11,220円・初期費用13,530円・体験0円）も公式で確認して掲載しています。',
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
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '公式サイトに記載なし', genderRatio: '女性専用', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '火・金 10:00-15:00／17:30-22:00、水 10:00-14:00／17:30-22:00、木 17:30-22:00、土・祝 10:00-18:30、日 10:00-17:30', closed: '月曜日', facilities: ['リフォーマー'] },
  },
  {
    name: 'luluto（ルルト）姫路店', officialUrl: 'https://t.felmat.net/fmcl?ak=L12015F.1.E165311J.U1357808', image: '/images/studios/luluto.webp', rating: 4.8, reviewCount: 22,
    price: '月3回 29,700円〜', trial: '体験レッスンあり', features: ['完全マンツーマン','理学療法士監修','高品質指導','カスタマイズ'],
    description: '全国展開の完全マンツーマンマシンピラティススタジオです。理学療法士が監修し実技試験に合格したトレーナーが指導',
    access: '姫路市内（詳細は公式サイトでご確認ください）',
    address: '兵庫県姫路市豊沢町156番地 アドバンスビル3A',
    popularPlan: { name: '人気プラン', description: '全国展開の完全マンツーマンマシンピラティススタジオです。理学療法士が監修し', price: '月3回 29,700円〜' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'Mstyle（エムスタイル）ピラティス', rating: 4.7, reviewCount: 28,
    price: '月額制（詳細は公式サイト）', trial: '体験レッスンあり', features: ['助産師資格保有','はりま勝原駅近く','女性専門','マシン完備'],
    description: '姫路市初のピラティス専用マシン完備の専門スタジオです。代表は助産師の資格を持つインストラクターで女性のライフステージに寄り添った指導が特徴',
    access: 'JR「はりま勝原駅」徒歩圏内', address: '兵庫県姫路市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '人気プラン', description: '姫路市初のピラティス専用マシン完備の専門スタジオです。代表は助産師の資格を', price: '月額制（詳細は公式サイト）' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'ピラティススタジオ Rinc', rating: 4.6, reviewCount: 18,
    price: 'パーソナル制（詳細は公式サイト）', trial: '体験レッスンあり', features: ['本格PHIピラティス','ペアレッスン可','アメリカ輸入マシン','姿勢改善'],
    description: 'アメリカから輸入した本格マシンを使用する姫路のピラティススタジオです。PHIピラティスの本格的なレッスンとペアレッスンも可能',
    access: '姫路市内（詳細は公式サイトでご確認ください）', address: '兵庫県姫路市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '人気プラン', description: 'アメリカから輸入した本格マシンを使用する姫路のピラティススタジオです。PH', price: 'パーソナル制（詳細は公式サイト）' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'TONING UP', rating: 4.5, reviewCount: 15,
    price: '月額制（詳細は公式サイト）', trial: '体験レッスンあり', features: ['最大6名少人数制','レベル別クラス','プライベートあり','姫路駅近く'],
    description: 'グループレッスン最大6名の少人数制スタジオです。レベル別・効果別など様々なスタイルでレッスンを提供',
    access: '姫路市内（詳細は公式サイトでご確認ください）', address: '兵庫県姫路市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '人気プラン', description: 'グループレッスン最大6名の少人数制スタジオです。レベル別・効果別など様々な', price: '月額制（詳細は公式サイト）' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  }
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '問題ありません。姫路エリアのスタジオはほとんどが初心者歓迎です。体験レッスンから気軽に始められます。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷を調整しやすく、初心者におすすめです。' },
  { question: '姫路のピラティスの料金相場は？', answer: 'グループ月4回で11,220円〜程度です。パーソナルは1回 8,000円〜15,000円が目安です。' },
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
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年10月25日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">ピラティス姫路おすすめ5選<br className="hidden md:block" />料金・体験レッスン・マシン対応を比較</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">姫路</span></nav></div></section>
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
        <section className="py-16 bg-warm-50" id="price-market"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">姫路のピラティス料金相場</h2><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">11,220円〜</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">1回 8,000円〜15,000円</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">無料〜5,000円</td></tr></tbody></table></div><p className="text-warm-600 mt-4 text-sm leading-relaxed">姫路は兵庫県第2の都市で、JR姫路駅周辺にスタジオが集まっています。大阪・神戸と比べて料金はリーズナブルな傾向です。個人経営の個性的なスタジオが多く、助産師やPHIピラティスの資格を持つ専門家による指導が受けられるのが特徴です。</p></div></section>
        <section className="py-16 bg-white" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">姫路でスタジオを選ぶ際の注意点</h2><div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR姫路駅と山陽姫路駅は隣接</h3>
                <p className="text-warm-600 leading-relaxed">JR姫路駅と山陽電鉄山陽姫路駅はほぼ隣接しています。どちらの路線でもアクセス可能ですが、郊外のスタジオは車が便利です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">ゆめタウン姫路は駐車場完備</h3>
                <p className="text-warm-600 leading-relaxed">ピラティスKが入るゆめタウン姫路は無料駐車場完備です。車で通いたい方には最適な立地です。</p>
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
        <section className="py-16 bg-warm-50" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：水分補給に必要です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは、着用が必須のスタジオが多くあります。</span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>をお選びください。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>がフォーム確認に効果的です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>姫路エリアの豆知識：</strong>姫路は世界遺産・姫路城で知られる兵庫県第2の都市です。駅周辺の商業施設と住宅地にスタジオが点在しています。車通いの方はゆめタウン姫路内のスタジオが駐車場無料で便利です。</p></div></div></div></section>
        <section className="py-16 bg-white" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">姫路の料金相場はグループ月4回で11,220円〜です。入会金やキャンペーンもご確認ください。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">複数のスタジオで体験レッスンを受けて比較することをおすすめします。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">自宅や職場からの距離、駅からの徒歩時間をご確認ください。継続するには通いやすさが最も重要です。</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">本ページでは、姫路エリアのおすすめピラティススタジオについてご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">本ページでは、姫路にあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。</p><p className="text-warm-600 leading-relaxed mb-6">本ページの情報を、スタジオ選びにお役立てください。</p><p className="text-warm-700 font-medium text-center">本ページが、ピラティススタジオ選びの参考になれば幸いです。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンのご予約</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜5,000円です。<br />まずは体験レッスンへの参加をおすすめします。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
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
