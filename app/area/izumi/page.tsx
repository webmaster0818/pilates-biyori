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
  alternates: { canonical: 'https://biyori-pilates.com/area/izumi/' },
  title: '【2026年10月最新】和泉府中・和泉中央のピラティススタジオおすすめ7選｜駅別に料金比較',
  description: '和泉府中・和泉中央エリアのピラティススタジオ7社を駅別に比較。2026年10月オープンのリントスル和泉府中店（JR和泉府中駅東口徒歩2分）、和泉府中駅徒歩4分のstudio MUERなど、料金・体験・定休日を公式サイトで確認した情報でまとめました。',
  keywords: 'ピラティス,和泉,大阪府,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'Rintosull（リントスル）和泉府中店', image: '/images/studios/rintosull.webp',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683',
    price: '月4回 8,800円〜（税込）', trial: '無料体験会あり', features: ['JR和泉府中駅東口徒歩2分','2026年10月1日オープン','女性専用','駐車場2時間無料'],
    description: '2026年10月1日にオープンした女性専用のマシンピラティススタジオ。JR阪和線「和泉府中駅」東口から徒歩2分、駅前の商業施設「フチュール和泉」4階。和泉府中駅の徒歩圏で通えるリントスルはこの店舗です。料金プランはエコール・いずみ店と同じ3種類（月4回 8,800円／ライト・フルタイム 13,800円／系列全店通い放題 16,800円・いずれも税込）。別途、運営管理費が月680円（税込）かかります（公式店舗ページ・2026年10月11日確認）。',
    access: 'JR阪和線「和泉府中駅」東口 徒歩2分（フチュール和泉 4F）', address: '〒594-0071 大阪府和泉市府中町1-20-1 フチュール和泉 4F',
    popularPlan: { name: '4・フルタイム（月4回）', description: '週1ペースで通う人向けのプラン。和泉府中店で月4回まで受講できます。', price: '月4回 8,800円（税込）' },
    options: ['ライト・フルタイム（通い放題・和泉府中店＋1店舗）13,800円', 'プレミアム フリー・フルタイム（Rintosull・LAVA等の系列全店通い放題）16,800円', '1回券 3,300円', '運営管理費 月680円', 'キャッシュレス決済のみ（現金不可）'],
    basicInfo: { closed: '毎週日曜・第4水曜', closedVerified: true, facilities: ['マシンピラティス', '水素水サーバー', 'ドライヤー付パウダースペース', '更衣室', '鍵付きロッカー', '駐車場（2時間無料）'] },
  },
  {
    name: 'studio MUER（スタジオミュエ）和泉',
    price: '月4回 28,000円（1回あたり7,000円）', trial: '体験レッスン 6,000円',
    features: ['JR和泉府中駅徒歩4分','マンツーマン','理学療法士の資格を持つスタッフ','リフォーマー'],
    description: 'JR和泉府中駅から徒歩4分の、リフォーマーを使うマンツーマン中心のピラティススタジオ。公式サイトでは在籍スタッフ2名とも理学療法士の資格を持つと紹介されています。月謝コースは月2回 15,000円／月4回 28,000円／月8回 52,000円、回数券もあります（公式料金ページ・2026年10月11日確認。税込・税抜の表記はありません）。体験は料金ページでは6,000円で、別途「ご新規様限定キャンペーン」の告知も出ているため、最新の条件は公式でご確認ください。',
    access: 'JR阪和線「和泉府中駅」徒歩4分（近隣パーキングあり）', address: '〒594-0071 大阪府和泉市府中町7丁目5-58 ハイム森田104',
    popularPlan: { name: '月4回コース', description: 'マンツーマンのマシンピラティス（1レッスン50分）。1ヶ月の繰り越しが可能。', price: '月4回 28,000円（1回あたり7,000円）' },
    options: ['月2回コース 15,000円', '月8回コース 52,000円', '5回券 40,000円／10回券 75,000円（購入日から6ヶ月有効）', '当日1回券 8,500円'],
    basicInfo: { facilities: ['リフォーマー', 'プライベート空間（マンツーマン）'] },
  },
  {
    name: 'Rintosull（リントスル）エコール・いずみ店', image: '/images/studios/rintosull.webp', rating: 4.5, reviewCount: 65,
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683',
    price: '月4回 8,800円〜', trial: '無料体験会あり', features: ['和泉中央駅直結','LAVA相互利用','低価格','駐車場完備'],
    description: 'ホットヨガLAVAの姉妹ブランド。泉北高速鉄道「和泉中央駅」直結のエコール・いずみ東館3Fに位置し、駐車場（2時間無料）・駐輪場（3時間無料）があります。女性専用。',
    access: '泉北高速鉄道「和泉中央駅」直結（エコール・いずみ東館3F）', address: '〒594-0041 大阪府和泉市いぶき野5-1-14 エコール・いずみ東館3F',
    popularPlan: { name: '4・フルタイム（月4回）', description: '週1ペースで通う人向けのプラン。ライト（通い放題）13,800円・系列全店通い放題16,800円もあります（税込）。', price: '月4回 8,800円（税込）' },
    options: ['ライト・フルタイム 13,800円', 'プレミアム フリー・フルタイム 16,800円', '1回券 3,300円', '運営管理費 月680円'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '毎週日曜・第4水曜', closedVerified: true, facilities: ['リフォーマー', '更衣室', '鍵付きロッカー', 'パウダースペース'] },
  },
  {
    name: 'Pilates Studio Plaisir（プレジール）', rating: 4.7, reviewCount: 20,
    price: 'パーソナル制（詳細は公式サイト）', trial: '体験レッスンあり', features: ['光明池駅徒歩5分','女性専門','パーソナル','マシン完備'],
    description: '光明池駅から徒歩5分の女性専門パーソナルピラティススタジオ。リフォーマーやチェアなどのマシンピラティスを提供',
    access: '泉北高速鉄道「光明池駅」徒歩5分', address: '大阪府和泉市伏屋町',
    popularPlan: { name: '人気プラン', description: '光明池駅から徒歩5分の女性専門パーソナルピラティススタジオ。リフォーマ', price: 'パーソナル制（詳細は公式サイト）' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'STUDIO TOU', rating: 4.5, reviewCount: 18,
    price: '月額制（詳細は公式サイト）', trial: '体験レッスンあり', features: ['マシンピラティス','部位別プログラム','個性的なインストラクター','初心者歓迎'],
    description: 'マシンピラティスを軸に部位別や基礎用などさまざまなプログラムを提供。個性豊かなインストラクターが一人ひとりをサポート',
    access: '和泉市内（詳細は公式サイトでご確認ください）', address: '大阪府和泉市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '人気プラン', description: 'マシンピラティスを軸に部位別や基礎用などさまざまなプログラムを提供。個', price: '月額制（詳細は公式サイト）' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'Joie ピラティス', rating: 4.5, reviewCount: 12,
    price: 'パーソナル制（詳細は公式サイト）', trial: '体験レッスンあり', features: ['マシンパーソナル','未経験者歓迎','シニアクラス','丁寧な指導'],
    description: 'マシンピラティスパーソナルレッスンを提供。未経験でも安心のトレーニング内容。シニアグループストレッチクラスもあり',
    access: '和泉市内（詳細は公式サイトでご確認ください）', address: '大阪府和泉市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '人気プラン', description: 'マシンピラティスパーソナルレッスンを提供。未経験でも安心のトレーニング', price: 'パーソナル制（詳細は公式サイト）' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'Aloha ピラティス', rating: 4.4, reviewCount: 15,
    price: '月額制（詳細は公式サイト）', trial: '体験レッスンあり', features: ['初心者向け','女性専用','床暖房完備','10代〜80代'],
    description: '初心者向け女性専用スタジオ。床暖房・ウォーターサーバー完備。レッスン生は10代〜80代と幅広い年代が利用',
    access: '和泉市内（詳細は公式サイトでご確認ください）', address: '大阪府和泉市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '人気プラン', description: '初心者向け女性専用スタジオ。床暖房・ウォーターサーバー完備。レッスン生', price: '月額制（詳細は公式サイト）' },
    options: ['体験レッスン', '月額プラン', '回数券', '入会金キャンペーン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  }
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！和泉エリアのスタジオはほとんどが初心者歓迎。体験レッスンから気軽に始められます。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめです。' },
  { question: '和泉のピラティスの料金相場は？', answer: 'グループ月4回で8,800円〜程度。パーソナルは1回 8,000円〜12,000円が目安です。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。大切なのは継続することです。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2-3ヶ月の継続が大切です。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。靴下（滑り止め付き推奨）も用意しておくと安心です。' },
  { question: 'ピラティスとヨガの違いは何ですか？', answer: 'ピラティスは体幹強化・姿勢改善に特化。ヨガは柔軟性とリラックス重視。目的に合わせて選びましょう。' },
  { question: '男性でも通えるスタジオはありますか？', answer: '和泉エリアには男性OKのスタジオもあります。各スタジオの詳細は公式サイトでご確認ください。' },
  { question: '無料で体験できるスタジオは？', answer: '各スタジオの最新キャンペーン情報を公式サイトで確認しましょう。無料体験を実施しているスタジオもあります。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。' },
]

export default function IzumiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '和泉', url: 'https://biyori-pilates.com/area/izumi/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年10月11日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026年10月最新】ピラティス和泉府中・和泉中央おすすめ7選！<br className="hidden md:block" />料金・体験レッスン・マシン対応を比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">和泉</span></nav></div></section>
        <AreaConclusion studios={studios} areaName="和泉" />

        <TableOfContents areaName="和泉" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p><p className="text-warm-600 leading-relaxed mb-6">「和泉で人気のピラティススタジオを知りたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p><p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、和泉府中・和泉中央エリアでおすすめのピラティススタジオ7選をまとめました。</p><div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>和泉でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>無料体験や格安体験のスタジオを知りたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>泉北高速鉄道「和泉中央駅」/ JR「和泉府中駅」から通いやすいスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul></div><p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p></div></section>
        <section className="py-12 bg-white" id="by-station"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4 text-center">駅別の早見表｜和泉府中駅・和泉中央駅</h2><p className="text-warm-600 leading-relaxed mb-6 text-sm">JR阪和線の和泉府中駅と、泉北高速鉄道の和泉中央駅は路線も場所も離れています。徒歩分数は各スタジオの公式サイトの表記です（2026年10月11日確認）。</p><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">最寄り駅</th><th className="px-4 py-3 text-left">スタジオ</th><th className="px-4 py-3 text-left">駅からの距離</th><th className="px-4 py-3 text-left">形式・料金の目安</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium" rowSpan={2}>JR和泉府中駅</td><td className="px-4 py-3">Rintosull 和泉府中店（2026年10月1日オープン・女性専用）</td><td className="px-4 py-3">東口 徒歩2分</td><td className="px-4 py-3">マシン・グループ／月4回 8,800円（税込）</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3">studio MUER 和泉</td><td className="px-4 py-3">徒歩4分</td><td className="px-4 py-3">マシン・マンツーマン／月4回 28,000円</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">泉北高速 和泉中央駅</td><td className="px-4 py-3">Rintosull エコール・いずみ店（女性専用）</td><td className="px-4 py-3">駅直結</td><td className="px-4 py-3">マシン・グループ／月4回 8,800円（税込）</td></tr></tbody></table></div><p className="text-warm-600 leading-relaxed mt-4 text-sm">リントスルの2店舗は料金プランが同じで、「ライト・フルタイム（13,800円）」なら登録店舗＋1店舗、「プレミアム フリー・フルタイム（16,800円）」ならリントスル系列全店とホットヨガLAVAなどにも通えます（税込・公式店舗ページより）。JR沿線に住んでいて週末は和泉中央のエコール・いずみで買い物、という使い方なら2店舗を行き来できるプランが候補になります。Plaisir・STUDIO TOU・Joie・Alohaは今回、最寄り駅と徒歩分数を公式サイトで確認できなかったため表には入れていません。</p></div></section>
        <PriceComparisonTable studios={studios} areaName="和泉" />
        <AreaMarketComparison studios={studios} areaName="和泉" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">和泉のおすすめピラティススタジオ7選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">料金重視で選ぶなら。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• Rintosull 和泉府中店（月4回 8,800円〜・和泉府中駅東口徒歩2分）</li><li className="text-warm-700">• Rintosull エコール・いずみ店（月4回 8,800円〜・和泉中央駅直結）</li></ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">女性専用で選ぶなら。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• Plaisir（パーソナル）</li><li className="text-warm-700">• Aloha（初心者向け）</li></ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">シニア歓迎</h3>
                <p className="text-warm-600 text-sm mb-4">シニア歓迎で選ぶなら。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• Aloha（10代〜80代対応）</li><li className="text-warm-700">• Joie（シニアクラスあり）</li></ul>
              </div>
            </div></div></section>
        <section className="py-16 bg-warm-50" id="price-market"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">和泉のピラティス料金相場【2026年10月最新】</h2><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">8,800円〜</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">1回 8,000円〜12,000円</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">無料〜3,000円</td></tr></tbody></table></div><p className="text-warm-600 mt-4 text-sm leading-relaxed">和泉は泉北高速鉄道沿線の住宅地で、和泉中央駅直結のRintosullが便利。個人経営のアットホームなスタジオも多く、シニア世代から若い世代まで幅広く通えるのが特徴です。車通いの方は駐車場完備のスタジオが多いのも魅力。</p></div></section>
        <section className="py-16 bg-white" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">和泉でスタジオを選ぶ際の注意点</h2><div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">泉北高速鉄道とJRで最寄り駅が異なる</h3>
                <p className="text-warm-600 leading-relaxed">和泉中央駅（泉北高速）と和泉府中駅（JR）はかなり離れています。JR沿線ならリントスル和泉府中店（東口徒歩2分）やstudio MUER（徒歩4分）、泉北高速沿線ならエコール・いずみ店（和泉中央駅直結）が通いやすい選択肢です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">車通いが便利なエリア</h3>
                <p className="text-warm-600 leading-relaxed">和泉は住宅地が広がるエリアで車移動が主流。Rintosullのエコール・いずみは駐車場完備で車通いに最適です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">シニア世代も歓迎</h3>
                <p className="text-warm-600 leading-relaxed">AlohaやJoieはシニア世代にも対応。年齢を問わず始められるスタジオがあるのが和泉の魅力です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">堺エリアも検討</h3>
                <p className="text-warm-600 leading-relaxed">堺東駅まで泉北高速+南海で約20分。堺エリアのスタジオも通勤経路に合わせて検討してみましょう。</p>
              </div>
            </div></div></section>
        <section className="py-16 bg-warm-50" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：水分補給に。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは必須のスタジオが多い。</span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>がフォーム確認に効果的。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>和泉エリアの豆知識：</strong>和泉は泉北ニュータウンを擁する住宅地。和泉中央駅周辺は商業施設が充実しており、Rintosullはエコール・いずみ直結で買い物ついでに通えます。車社会のエリアなので駐車場完備のスタジオが多いのも嬉しいポイントです。</p></div></div></div></section>
        <section className="py-16 bg-white" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">和泉の料金相場はグループ月4回で8,800円〜。入会金やキャンペーンも確認しましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">まずは気軽に複数スタジオを体験してみましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">自宅や職場からの距離、駅からの徒歩時間を確認。継続するには通いやすさが最も重要です。</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は和泉エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？</p><p className="text-warm-600 leading-relaxed mb-6">この記事では和泉にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜3,000円。<br />まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
              <AreaModifierSections studios={studios} areaName="和泉" />
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="izumi" areaName="和泉" />

      <RelatedAreas currentSlug="izumi" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
