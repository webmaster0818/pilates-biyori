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
  alternates: { canonical: 'https://biyori-pilates.com/area/amagasaki/' },
  title: 'ピラティス尼崎おすすめ4選料金・体験レッスン・マシン対応を比較',
  description: '尼崎エリアのおすすめピラティススタジオ4選を比較しています。マシンピラティス、体験レッスン、料金相場、選び方まで詳しくご案内します。JR「尼崎駅」/ 阪神「尼崎駅」/ 阪急「塚口駅」周辺の初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,尼崎,兵庫県,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'Rintosull（リントスル）阪神尼崎店', image: '/images/studios/rintosull.webp', rating: 4.5, reviewCount: 88,
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683',
    price: '月4回 8,800円〜（税込）', trial: '無料体験会 0円（約45分・パーソナル姿勢診断付き）', features: ['女性専用','姿勢診断付き体験','LAVA相互利用','マシン専門'],
    description: 'ホットヨガLAVAの姉妹ブランドの女性専用マシンピラティススタジオです。無料体験会（約45分）ではパーソナル姿勢診断が受けられます。月4回8,800円（税込）から通えます。',
    access: '阪神「尼崎駅」西口 徒歩2分',
    address: '兵庫県尼崎市神田中通2丁目27‐47 阪神ONOビル 8F',
    popularPlan: { name: '４・フルタイム（月4回）', description: '女性専用のマシンピラティス月4回です。', price: '月4回 8,800円（税込）' },
    options: ['ライト・フルタイム 13,800円／プレミアムフリー・フルタイム 16,800円（税込）', '運営管理費 月680円（税込）', '体験当日の入会で入会金・マンスリーメンバー登録金（各5,000円）が0円', '全店通い放題コースが3ヶ月間 月1,980円（11月末まで・特別価格終了後12ヶ月の継続など条件あり）'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '月〜金 9:00〜22:20／土・祝 7:30〜18:20（公式・2026年11月14日確認）', closed: '毎週日曜・第4水曜', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'URBAN CLASSIC PILATES 尼崎店', image: '/images/studios/urban-classic-pilates.webp', rating: 4.5, reviewCount: 45,
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11337L.1.X156352B.U1357808',
    price: 'マンスリー４（月4回）8,580円〜（税込）', trial: '無料体験（予約制）', features: ['サーキット形式','予約不要','個別ペース','ファンクショナルトレーニング'],
    description: 'マシンピラティスとファンクショナルトレーニングを組み合わせたサーキット形式です。一人ずつ違う動きを行うため運動久しぶりの方も安心',
    access: 'JR「尼崎駅」徒歩2分', address: '兵庫県尼崎市長洲本通1-2-1 エトワール尼崎 2F',
    popularPlan: { name: 'マンスリー４（月4回）', description: 'マシンピラティスとファンクショナルトレーニングを組み合わせたサーキットです（1日1回まで）。', price: '月4回 8,580円（税込）' },
    options: ['マンスリー８ 10,780円／レギュラー（通い放題・1日1回まで）12,980円（税込）', '入会時のみ施設利用料 2,200円（税込）', '3ヶ月目から運営管理費 月480円（税込）'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '平日 9:30〜21:30（13:00〜14:00はメンテナンス）／土祝 9:30〜19:30（公式・2026年11月14日確認）', closed: '日曜日', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'ピラティスアヴニール 尼崎武庫之荘店', rating: 4.6, reviewCount: 30,
    price: 'セミ（3人・1人あたり）月2回 8,910円〜／マンツーマン30分 月4回 19,360円（税込）', trial: '初回体験（90分）2,980円（税込）', features: ['マンツーマン','完全個室','有資格トレーナー在籍','子連れ可'],
    description: '完全個室でトレーナーとマンツーマンのレッスンを行い、リフォーマー・チェア・バレルを使います。医療従事者や国家資格保有者などのトレーナーが在籍しています。公式サイトでは全店舗子連れOKとしています。',
    access: '阪急「武庫之荘駅」北口 徒歩2分', address: '兵庫県尼崎市武庫之荘1丁目6-1 ランドマーク武庫之荘2階',
    popularPlan: { name: 'マンツーマン（30分）月4回', description: '完全個室のマンツーマンレッスンです。', price: '月4回 19,360円（税込）' },
    options: ['マンツーマン60分 月4回 35,200円（税込）', '入会金 8,800円（32回券の購入で無料）', '回数券あり', '駐車場・駐輪場なし'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '7:00〜23:00（公式・2026年11月14日確認）', closed: '年中無休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'SynerGym（シナジム）塚口本店', rating: 4.4, reviewCount: 55,
    price: '月4回 11,000円〜／プラチナ（通い放題）月額 16,500円（税込）', trial: '初回体験レッスン 0円（通常4,400円・税込）', features: ['マシンピラティス受け放題','最大5人の少人数制','ジム併設','塚口駅徒歩5分'],
    description: 'プラチナコース（月額16,500円・税込）でマシンピラティス・ヨガ・24時間ジムが通い放題です。マシンピラティスの月4回は11,000円（税込）からです。1レッスン最大5人の少人数制です。',
    access: '阪急神戸線「塚口駅」南改札口 徒歩5分', address: '兵庫県尼崎市南塚口町2丁目35-17',
    popularPlan: { name: 'プラチナコース', description: 'ピラティス・ヨガ・24時間ジムが通い放題です。', price: '月額 16,500円（税込）' },
    options: ['月4回 11,000円／月8回 12,100円（税込）', '月4回・月8回は＋3,300円で24時間ジムも利用可', '無料駐車場 9台'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '平日・土曜 10:00〜20:00／日曜 10:00〜16:00（ジムは24時間・公式・2026年11月14日確認）', closed: '木曜（終日受付休業）', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  }
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '問題ありません。尼崎エリアのスタジオはほとんどが初心者歓迎です。体験レッスンから気軽に始められます。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷を調整しやすく、初心者におすすめです。' },
  { question: '尼崎のピラティスの料金相場は？', answer: '掲載4店の公式サイトで確認した月4回の料金は、URBAN CLASSIC PILATES 尼崎店 8,580円・Rintosull 阪神尼崎店 8,800円・SynerGym 塚口本店 11,000円・ピラティスアヴニール 尼崎武庫之荘店（マンツーマン30分）19,360円です（いずれも税込・2026年11月14日確認）。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回が目安です。大切なのは継続することです。' },
  { question: 'ピラティスで痩せますか？', answer: 'インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。2〜3ヶ月の継続が大切です。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があれば問題ありません。靴下（滑り止め付き推奨）も用意しておくと安心です。' },
  { question: 'ピラティスとヨガの違いは何ですか？', answer: 'ピラティスは体幹強化・姿勢改善に特化しています。ヨガは柔軟性とリラックス重視です。目的に合わせてお選びください。' },
  { question: '男性でも通えるスタジオはありますか？', answer: '尼崎エリアには男性利用可のスタジオもあります。各スタジオの詳細は公式サイトでご確認ください。' },
  { question: '無料で体験できるスタジオは？', answer: 'Rintosull 阪神尼崎店（無料体験会）・URBAN CLASSIC PILATES 尼崎店（無料体験）・SynerGym 塚口本店（初回体験 通常4,400円→0円）の3店です。ピラティスアヴニール 尼崎武庫之荘店は初回90分 2,980円（税込）です（公式・2026年11月14日確認）。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感される方が多くなっています。最低2ヶ月は継続することをおすすめします。' },
]

export default function AmagasakiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '尼崎', url: 'https://biyori-pilates.com/area/amagasaki/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年11月14日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">ピラティス尼崎おすすめ4選<br className="hidden md:block" />料金・体験レッスン・マシン対応を比較</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">尼崎</span></nav></div></section>
        {/* 早見表（2026-11-14 公式照合） */}
        <section className="py-8 bg-white" id="by-station">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-xl md:text-2xl font-bold text-warm-900 mb-3">尼崎（尼崎駅・武庫之荘駅・塚口駅）のピラティス 料金・体験の早見表</h2>
            <p className="text-warm-600 text-sm leading-relaxed mb-4">掲載4店の駅からの徒歩分・月額の下限・体験料金・入会時の費用を、各スタジオの公式サイトで確認しました（税込）。武庫之荘駅はピラティスアヴニール（マンツーマン）、尼崎駅はRintosull（阪神・女性専用）とURBAN CLASSIC PILATES（JR）、塚口駅はSynerGymです。</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead><tr className="bg-warm-800 text-white"><th className="px-3 py-3 text-left">スタジオ</th><th className="px-3 py-3 text-left">駅からの徒歩分</th><th className="px-3 py-3 text-left">月額の下限</th><th className="px-3 py-3 text-left">体験料金</th><th className="px-3 py-3 text-left">入会時・別途の費用</th></tr></thead>
                <tbody>
                <tr className="border-b border-warm-200"><td className="px-3 py-3 font-medium">URBAN CLASSIC PILATES 尼崎店</td><td className="px-3 py-3">JR尼崎駅 徒歩2分</td><td className="px-3 py-3">マンスリー４（月4回）8,580円</td><td className="px-3 py-3">無料（予約制）</td><td className="px-3 py-3">施設利用料 2,200円（入会時）・3ヶ月目から運営管理費 月480円</td></tr>
                <tr className="border-b border-warm-200 bg-warm-50"><td className="px-3 py-3 font-medium">Rintosull 阪神尼崎店（女性専用）</td><td className="px-3 py-3">阪神尼崎駅 西口 徒歩2分</td><td className="px-3 py-3">４・フルタイム（月4回）8,800円</td><td className="px-3 py-3">無料体験会 0円（約45分）</td><td className="px-3 py-3">運営管理費 月680円。体験当日の入会で入会金・登録金（各5,000円）0円</td></tr>
                <tr className="border-b border-warm-200"><td className="px-3 py-3 font-medium">SynerGym 塚口本店</td><td className="px-3 py-3">阪急塚口駅 南改札口 徒歩5分</td><td className="px-3 py-3">月4回 11,000円（通い放題のプラチナは16,500円）</td><td className="px-3 py-3">0円（通常4,400円）</td><td className="px-3 py-3">入会金 2,200円・会員証発行費用 3,300円（期間限定キャンペーンで0円）</td></tr>
                <tr className="border-b border-warm-200 bg-warm-50"><td className="px-3 py-3 font-medium">ピラティスアヴニール 尼崎武庫之荘店</td><td className="px-3 py-3">阪急武庫之荘駅 北口 徒歩2分</td><td className="px-3 py-3">セミ（3人・1人あたり）月2回 8,910円／マンツーマン30分 月4回 19,360円</td><td className="px-3 py-3">初回90分 2,980円</td><td className="px-3 py-3">入会金 8,800円（32回券の購入で無料）</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-500 text-xs mt-3">出典: <a href="https://urbanclassic.jp/pilates-studio/amagasaki/" target="_blank" rel="noopener noreferrer" className="underline">URBAN CLASSIC PILATES 尼崎（公式）</a>・<a href="https://rintosull.jp/shop/hyogo/amagasaki/" target="_blank" rel="noopener noreferrer" className="underline">Rintosull 阪神尼崎店（公式）</a>・<a href="https://synergym.jp/tsukaguchi/pilates-lp/" target="_blank" rel="noopener noreferrer" className="underline">SynerGym 塚口本店（公式）</a>・<a href="https://pilates.avenir-training.com/stores-2-4/mukonoso/" target="_blank" rel="noopener noreferrer" className="underline">ピラティスアヴニール 尼崎武庫之荘店（公式）</a>（いずれも2026年11月14日確認）。キャンペーンは期間限定のため、申し込む前に公式サイトでご確認ください。</p>
          </div>
        </section>

        <AreaConclusion studios={studios} areaName="尼崎" />

        <TableOfContents areaName="尼崎" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-600 leading-relaxed mb-8">本ページでは、尼崎エリアでおすすめのピラティススタジオ4選をまとめました。</p><div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>尼崎でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>無料体験や格安体験のスタジオを知りたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>JR「尼崎駅」/ 阪神「尼崎駅」/ 阪急「塚口駅」から通いやすいスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul></div><p className="text-warm-600 leading-relaxed">以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。</p></div></section>
        <PriceComparisonTable studios={studios} areaName="尼崎" />
        <AreaMarketComparison studios={studios} areaName="尼崎" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">尼崎のおすすめピラティススタジオ4選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">料金重視で選ぶ方におすすめです。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li><li className="text-warm-700">• SynerGym（通い放題 16,500円）</li></ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">子連れ可</h3>
                <p className="text-warm-600 text-sm mb-4">子連れ可で選ぶ方におすすめです。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• ピラティスアヴニール（キッズスペース付き個室）</li></ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">大手ブランド</h3>
                <p className="text-warm-600 text-sm mb-4">大手ブランドで選ぶ方におすすめです。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• URBAN CLASSIC PILATES</li></ul>
              </div>
            </div></div></section>
        <section className="py-16 bg-warm-50" id="price-market"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">尼崎のピラティス料金相場</h2><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">8,580円〜16,500円</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">1回 8,000円〜15,000円</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">無料〜3,000円</td></tr></tbody></table></div><p className="text-warm-600 mt-4 text-sm leading-relaxed">尼崎はJR・阪神・阪急の3路線が通る交通至便な街です。URBAN CLASSIC PILATESの月4回8,580円からSynerGymの通い放題16,500円まで幅広い価格帯のスタジオが揃っています。子連れ可のスタジオもあり、子育て世代にも優しいエリアです。</p></div></section>
        <section className="py-16 bg-white" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">尼崎でスタジオを選ぶ際の注意点</h2><div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR尼崎駅と阪神尼崎駅は別の場所</h3>
                <p className="text-warm-600 leading-relaxed">JR尼崎駅と阪神尼崎駅は約1.5km離れています。また阪急は「塚口駅」「武庫之荘駅」が主要駅です。利用路線に合わせてお選びください。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">子連れの方はアヴニールを検討</h3>
                <p className="text-warm-600 leading-relaxed">ピラティスアヴニール武庫之荘店はキッズスペース付き完全個室で、小さなお子様連れでも安心して通えます。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">ジム併用したい方はSynerGymを</h3>
                <p className="text-warm-600 leading-relaxed">SynerGym塚口本店はマシンピラティスとジムが併設しています。筋トレとピラティスを両立したい方におすすめです。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣の西宮・伊丹・大阪も検討</h3>
                <p className="text-warm-600 leading-relaxed">尼崎は交通の要衝です。西宮北口や梅田のスタジオも通勤経路に合わせてご検討ください。</p>
              </div>
            </div></div></section>
        <section className="py-16 bg-warm-50" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：水分補給に必要です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは、着用が必須のスタジオが多くあります。</span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>をお選びください。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>がフォーム確認に効果的です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>尼崎エリアの豆知識：</strong>尼崎はJR・阪神・阪急の3路線が利用可能で大阪・神戸どちらへもアクセス抜群です。近年は再開発が進み、若いファミリー層も増加中です。キッズスペース付きのスタジオもあり子育て世代にも通いやすいエリアです。</p></div></div></div></section>
        <section className="py-16 bg-white" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">尼崎の料金相場はグループ月4回で8,580円〜16,500円です。入会金やキャンペーンもご確認ください。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">複数のスタジオで体験レッスンを受けて比較することをおすすめします。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">自宅や職場からの距離、駅からの徒歩時間をご確認ください。継続するには通いやすさが最も重要です。</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">本ページでは、尼崎エリアのおすすめピラティススタジオについてご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">本ページでは、尼崎にあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。</p><p className="text-warm-600 leading-relaxed mb-6">本ページの情報を、スタジオ選びにお役立てください。</p><p className="text-warm-700 font-medium text-center">本ページが、ピラティススタジオ選びの参考になれば幸いです。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンのご予約</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜3,000円です。<br />まずは体験レッスンへの参加をおすすめします。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
              <AreaModifierSections studios={studios} areaName="尼崎" />
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="amagasaki" areaName="尼崎" />

      <RelatedAreas currentSlug="amagasaki" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
