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
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/denenchofu/' },
  title: '【2026年10月最新】田園調布のピラティススタジオおすすめ5選｜駅徒歩2分圏・料金で比較',
  description: '田園調布のピラティススタジオ5社を、駅からの距離・月額料金・体験料金で比較しています。田園調布駅徒歩2分圏の4店と奥沢駅のパーソナル専門店まで、住所と料金は各公式サイトで確認した値（2026年10月16日確認）です。',
  keywords: 'ピラティス,田園調布,奥沢,大田区,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'TSUTAYA Conditioning PILATES 田園調布店',
    officialUrl: 'https://tc.tsite.jp/store/tokyo/2240-denenchofu/',
    image: '/images/studios/tsutaya-conditioning-pilates-shonan.webp',
    price: '月4回 13,200円／月8回 22,000円（税込）', trial: '体験レッスン 0円（1人1回まで）',
    features: ['女性専用', '田園調布駅徒歩約2分', '少人数制マシンピラティス', '2025年1月オープン'],
    description: '2025年1月7日にグランドオープンした女性専用・少人数制のマシンピラティススタジオです。公式サイトでは「鍛えるのではなく“整えるピラティス”」と紹介されています。月会費は月4回まで13,200円・月8回まで22,000円の2プランで、上限を超える分は1回3,850円で追加受講できます。店内には本に囲まれたスタジオとブックラウンジがあります（公式店舗ページ・税込・2026年10月16日確認）。',
    access: '東急東横線・東急目黒線「田園調布駅」徒歩約2分',
    address: '〒145-0071 東京都大田区田園調布2-40-19 田園調布フォースDC 1F',
    popularPlan: { name: '通常会員 月4回まで', description: '女性専用・少人数制のマシンピラティスです。月内に4回まで受講できます。', price: '月4回 13,200円（税込）' },
    options: ['月8回まで 22,000円', '回数追加受講 1回 3,850円（店頭申込）', '会員登録料 2,200円（2026年10月時点は0円のキャンペーン中・公式お知らせ 10/1）', '初月の月会費は利用開始日に応じて日割り'],
    userProfile: { genderRatio: '女性100%（女性専用）', purpose: ['姿勢改善', 'コンディショニング', '運動習慣づくり'] },
    basicInfo: { hours: 'レッスンスケジュール（公式サイトのPDF）で確認', closed: '年中無休（年末年始を除く）', facilities: ['更衣室', 'ブックラウンジ', '駐輪場'] },
  },
  {
    name: 'Pilates Mee 田園調布店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=F10273P.1.9146255O.U1357808',
    image: '/images/studios/pilates-mee.webp', reviewCount: 112,
    price: '月2回 11,000円〜', priceList: ['体験レッスン無料', 'セミパーソナル：月2回 11,000円／月4回 19,800円（税込）', 'パーソナル：月2回 22,000円／月4回 39,600円／月8回 70,400円（税込）'], trial: '体験レッスン無料',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '最大3名までの少人数セミパーソナル形式の女性専用マシンピラティススタジオです。田園調布駅から徒歩2分です。当日予約・当日キャンセルが可能で忙しい方にも柔軟に対応しています。通い放題プランなら1回あたり2,500円の費用対効果です（※37,500円の通い放題コースで15日通った場合）。',
    access: '田園調布駅 徒歩2分',
    address: '〒145-0071 東京都大田区田園調布3丁目4-5 田園プラザサイトウビル 202',
    popularPlan: { name: '月4回プラン', description: 'セミパーソナル形式のマシンピラティスです。最大3名の少人数制です。', price: '月4回 19,800円（税込）' },
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', '姿勢改善', '柔軟性向上', 'ダイエット'] },
    basicInfo: { hours: '9:00〜21:15', closed: '不定休', facilities: ['女性専用トイレ', '着替えスペース', '全身鏡'] },
  },
  {
    name: 'STUDIO IVY 奥沢店',
    officialUrl: 'https://www.pilates-ivy.jp/studio/okusawa',
    image: '/images/studios/studio-ivy.webp',
    price: '月2回 15,000円／月4回 28,000円／月8回 52,000円（税込）', trial: '初回体験レッスン 4,500円（税込・2026年10月1日〜31日は無料キャンペーン）',
    features: ['1対1のパーソナル専門', '1レッスン50分', '男性も受講可', '奥沢駅徒歩4分'],
    description: 'インストラクターと1対1で受けるパーソナル専門のマシンピラティススタジオです。リフォーマーを使い、カウンセリングの内容をもとにプログラムを組みます。所在地は世田谷区奥沢で、最寄りは東急目黒線の奥沢駅です（徒歩4分）。田園調布駅からは北東へ直線で約500mです。料金は月2回15,000円・月4回28,000円・月8回52,000円です（1回あたり6,500〜7,500円）（公式店舗ページ・税込・2026年10月16日確認）。',
    access: '東急目黒線「奥沢駅」徒歩4分（田園調布駅から直線約500m）',
    address: '〒158-0083 東京都世田谷区奥沢4-9-11 ルアナ奥沢01',
    popularPlan: { name: 'STANDARD（月4回コース）', description: '1対1のパーソナルマシンピラティスです。週1ペースです。', price: '月4回 28,000円（税込・1回あたり7,000円）' },
    options: ['BASIC 月2回 15,000円（1回あたり7,500円）', 'PREMIUM 月8回 52,000円（1回あたり6,500円）', '1レッスン50分', 'ウォーターサーバーあり'],
    userProfile: { purpose: ['姿勢改善', 'ボディライン', '肩こり・腰痛ケア'] },
    basicInfo: { hours: '8:00〜21:00', facilities: ['リフォーマー', '更衣室', 'ウォーターサーバー'] },
  },
  {
    name: 'Dr.ピラティス 田園調布店',
    image: '/images/studios/dr-pilates.webp',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11979O.1.Z164554L.U1357808', reviewCount: 72,
    price: 'パーソナル 45分 8,300円〜（都度払い）', trial: '体験トレーニング 7,100円',
    features: ['駅徒歩30秒', '医学的アプローチ', 'マンツーマン専門', '9:00〜22:00営業'],
    description: '田園調布駅（東口）から徒歩30秒、「Rehello by BOOKOFF 田園調布店」の2階にあるマンツーマン専門のパーソナルピラティスジムです。「ピラティスで整えて、トレーニングで鍛える」二段階アプローチが特徴で、公式サイトでは、アメリカの準医療資格（ATC）やメジャーリーグでの指導経験をもとにメソッドを構築したと紹介されています。料金は都度払い（45分 8,300円／60分 11,000円）、月4回・月8回の定額制、16〜32回のチケット制から選べます（公式店舗ページ・税込・2026年10月11日確認）。',
    access: '東急東横線・目黒線「田園調布駅」徒歩30秒',
    address: '〒145-0071 東京都大田区田園調布2-50-9 第二開発ビル 2F',
    popularPlan: { name: 'ライフメイクプラン（月4回）', description: 'マンツーマンの定額制です。45分なら1回あたり7,425円、60分なら9,900円です。', price: '月4回 45分 29,700円／60分 39,600円（税込）' },
    options: ['月8回プラン（45分 57,600円／60分 76,800円）', 'スポット 60分 11,000円／90分 16,500円', '回数チケット（16・24・32回）', '入会金 35,600円', '指名料 1,100円〜5,500円', 'レンタルウェア上下 500円'],
    userProfile: { purpose: ['姿勢改善', '肩こり・腰痛ケア', 'ボディメイク', 'トレーニングとの併用'] },
    basicInfo: { hours: '9:00〜22:00', facilities: ['個室', '更衣室', 'シャワールーム', '体組成計', '水素水サーバー', 'レンタルウェア・タオル'] },
  },
  {
    name: 'ピラティスステーションライト 田園調布stn.',
    officialUrl: 'https://pilates-light.com/%E3%83%94%E3%83%A9%E3%83%86%E3%82%A3%E3%82%B9%E3%82%B9%E3%83%86%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%88-%E7%94%B0%E5%9C%92%E8%AA%BF%E5%B8%83stn/',
    price: 'グループ 1回 2,850円〜3,500円（回数券制）', trial: '体験レッスンあり',
    features: ['田園調布駅徒歩2分', '定員3名のマシングループ', '月謝なしの回数券制', 'フルイクイップメント'],
    description: '2022年5月オープンのピラティス専門スタジオです。田園調布駅から徒歩2分です（公式表記）。リフォーマーなどのフルイクイップメントを備え、定員3名のリフォーマーグループ（45分・60分）、2〜3名のセミプライベート、マシンプライベートから選べます。料金は月謝ではなく、全店舗・全レッスン共通の回数券「WATT」制（1WATT 3,500円／10WATT 30,500円／30WATT 88,500円／60WATT 171,000円・税込）で、グループは1回2,850〜3,500円、プライベートは1回8,550〜10,500円が目安です（公式店舗ページ・2026年10月11日確認）。',
    access: '東急東横線・目黒線「田園調布駅」徒歩2分',
    address: '〒145-0071 東京都大田区田園調布2丁目51-4 フランス屋ビル2F',
    popularPlan: { name: 'リフォーマーグループ（定員3名）', description: '4種のテーマから選べる少人数のマシングループです。45分・60分です。', price: '1回 2,850円〜3,500円（税込・回数券の枚数による）' },
    options: ['マシンプライベート 1回 8,550円〜10,500円', 'セミプライベート（2〜3名）1人 5,700円〜7,000円', '指名プライベート 1回 11,400円〜14,000円', '回数券は会員同士でシェア可'],
    basicInfo: { facilities: ['リフォーマー', 'フルイクイップメント'] },
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '問題ありません。STUDIO IVY 奥沢店は公式サイトで「入会者の80％が初心者」と紹介しています。少人数のTSUTAYA Conditioning PILATESや最大3名のPilates Meeも、初めての方が体験から始めやすい形式です。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷調整しやすく初心者におすすめです。田園調布はマシン専門スタジオが充実しています。' },
  { question: '田園調布のピラティスの料金相場は？', answer: '掲載5店の公式料金（税込）では、少人数・セミパーソナルの月4回が13,200円（TSUTAYA Conditioning PILATES）〜19,800円です（Pilates Mee）。1対1のパーソナルは1回あたり6,500円（STUDIO IVY 月8回）〜16,500円（Dr.ピラティス 90分スポット）です。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1〜2回がおすすめです。慣れたら週2〜3回に増やすと効果的です。Pilates Meeの通い放題プランなら毎日でも通えます。' },
  { question: 'ピラティスで痩せますか？', answer: 'インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。2〜3ヶ月の継続で体の変化を実感される方が多くなっています。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があれば問題ありません。STUDIO IVYはウォーターサーバーがあるので水の持参は不要と案内しています。靴下（グリップソックス推奨）も忘れずにご用意ください。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'Dr.ピラティスとSTUDIO IVY 奥沢店は男性も通えます（公式に記載）。TSUTAYA Conditioning PILATESとPilates Meeは女性専用です。' },
  { question: 'パーソナルレッスンとグループレッスンどちらがおすすめ？', answer: '初心者や体の悩みがある方はパーソナルがおすすめです。Dr.ピラティスやSTUDIO IVYで個別指導を受けられます。費用を抑えるなら、少人数のマシンレッスンのTSUTAYA Conditioning PILATES（月4回13,200円）か、ピラティスステーションライトのグループです（1回2,850円〜）。' },
  { question: '田園調布駅から近いスタジオは？', answer: 'Dr.ピラティスが駅徒歩30秒で最寄りです。TSUTAYA Conditioning・Pilates Mee・ピラティスステーションライトが徒歩2分です。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感される方が多くなっています。姿勢改善は比較的早く、ボディメイクは3ヶ月程度の継続がおすすめです。' },
]

export default function DenenchofuPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '田園調布', url: 'https://biyori-pilates.com/area/denenchofu/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月16日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026年10月最新】ピラティス田園調布おすすめ5選<br className="hidden md:block" />
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
              <span className="text-warm-600">田園調布</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="田園調布" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、田園調布・奥沢エリアでおすすめのピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>田園調布でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>閑静な環境で質の高いレッスンを受けたい</span>
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

        {/* 駅別早見表（2026-10-16 追加・徒歩分数は公式表記、直線距離は国土地理院の住所検索の座標から算出） */}
        <section className="py-12 bg-white" id="by-station"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4 text-center">田園調布駅からの距離で比べる早見表</h2><p className="text-warm-600 leading-relaxed mb-6 text-sm">掲載5店のうち4店は田園調布駅から徒歩2分以内に集まっています。STUDIO IVYだけは世田谷区奥沢にあり、最寄りは東急目黒線の奥沢駅です。徒歩分数・住所・料金は各スタジオの公式サイトの表記です（2026年10月16日確認・税込）。</p><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">スタジオ</th><th className="px-4 py-3 text-left">駅からの距離</th><th className="px-4 py-3 text-left">形式</th><th className="px-4 py-3 text-left">料金の目安</th><th className="px-4 py-3 text-left">体験</th></tr></thead><tbody>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">Dr.ピラティス 田園調布店</td><td className="px-4 py-3">田園調布駅 徒歩30秒（田園調布2-50-9）</td><td className="px-4 py-3">マンツーマン・男女可</td><td className="px-4 py-3">45分 8,300円〜（都度）</td><td className="px-4 py-3">7,100円</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">Pilates Mee 田園調布店</td><td className="px-4 py-3">田園調布駅 徒歩2分（田園調布3-4-5）</td><td className="px-4 py-3">最大3名のセミパーソナル／パーソナル・女性専用</td><td className="px-4 py-3">月2回 11,000円／月4回 19,800円</td><td className="px-4 py-3">無料</td></tr>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">ピラティスステーションライト 田園調布stn.</td><td className="px-4 py-3">田園調布駅 徒歩2分（田園調布2-51-4）</td><td className="px-4 py-3">定員3名のリフォーマーグループ／プライベート</td><td className="px-4 py-3">グループ1回 2,850〜3,500円（回数券）</td><td className="px-4 py-3">あり（料金は公式で確認）</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">TSUTAYA Conditioning PILATES 田園調布店</td><td className="px-4 py-3">田園調布駅 徒歩約2分（田園調布2-40-19）</td><td className="px-4 py-3">少人数のマシン・女性専用</td><td className="px-4 py-3">月4回 13,200円／月8回 22,000円</td><td className="px-4 py-3">0円（1人1回）</td></tr>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">STUDIO IVY 奥沢店</td><td className="px-4 py-3">奥沢駅 徒歩4分／田園調布駅から直線約500m（奥沢4-9-11）</td><td className="px-4 py-3">1対1のパーソナル・男性も可</td><td className="px-4 py-3">月4回 28,000円（1回7,000円）</td><td className="px-4 py-3">4,500円（10/31まで無料）</td></tr>
        </tbody></table></div><p className="text-warm-600 leading-relaxed mt-4 text-sm">男性が通えるのは、掲載5店のうち Dr.ピラティス（マンツーマン）と STUDIO IVY（1対1のパーソナル）です。Pilates Mee と TSUTAYA Conditioning PILATES は女性専用です。月謝制ではなく回数券で通いたい場合は、ピラティスステーションライトのWATT制（1WATT 3,500円〜60WATT 171,000円）が候補になります。</p></div></section>

        <PriceComparisonTable studios={studios} areaName="田園調布" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              田園調布のおすすめピラティススタジオ5選
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
              田園調布のピラティス料金相場【2026年10月最新】
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
                    <td className="px-4 py-3">13,200円〜19,800円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 6,500円〜16,500円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜7,100円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              田園調布は閑静な高級住宅街で、質の高いサービスを提供するスタジオが多いのが特徴です。グループレッスンの料金は都心部と同程度ですが、パーソナルやセミパーソナルの選択肢が豊富で、個々のニーズに合わせた丁寧な指導を受けられます。近隣の<Link href="/area/jiyugaoka/" className="text-warm-700 underline hover:text-warm-900">自由が丘</Link>エリアと比較検討される方も少なくありません。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              田園調布でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">駅からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  田園調布駅は東急東横線・目黒線が乗り入れています。スタジオは駅周辺に集中していますが、奥沢方面のスタジオもあるため、事前にルートをご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">パーソナルとグループの違いを理解する</h3>
                <p className="text-warm-600 leading-relaxed">
                  田園調布エリアはパーソナルやセミパーソナル形式のスタジオが多いのが特徴です。1対1の指導は効果的ですが料金も高めです。予算と目的に合わせて、グループレッスンとパーソナルのバランスを考えることをおすすめします。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">体験レッスンの料金差に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  田園調布エリアのスタジオは体験レッスンの料金はスタジオにより幅があります。TSUTAYA Conditioning PILATESは0円（1人1回まで）、Pilates Meeは体験レッスン無料、STUDIO IVYは4,500円（2026年10月31日までは無料キャンペーン）、Dr.ピラティスは7,100円です。事前に確認してからご予約ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  田園調布エリアだけでなく、近隣の<Link href="/area/jiyugaoka/" className="text-warm-700 underline hover:text-warm-900">自由が丘</Link>、<Link href="/area/futakotamagawa/" className="text-warm-700 underline hover:text-warm-900">二子玉川</Link>エリアにもピラティススタジオが充実しています。東横線・目黒線で1-2駅の距離なので、複数エリアで体験レッスンを受けてみるのもおすすめです。
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
                  <strong>田園調布エリアの豆知識：</strong>田園調布は落ち着いた雰囲気の高級住宅街です。スタジオも上品で洗練された空間が多く、リラックスしてレッスンに集中できます。駅周辺にはカフェも多いので、レッスン後のリフレッシュにもおすすめです。
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
                  リーズナブルにグループレッスンです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• TSUTAYA Conditioning（月4回 13,200円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• TSUTAYA Conditioning（月4回 13,200円）</li>
                  <li className="text-warm-700">• Pilates Mee（月2回 11,000円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  個別指導で効果を目指せます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Dr.ピラティス（45分 8,300円〜）</li><li className="text-warm-700">• ピラティスステーションライト（プライベート 1回 8,550円〜）</li>
                  <li className="text-warm-700">• STUDIO IVY（月4回 28,000円・1回7,000円）</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  少人数・セミパーソナル中心です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• TSUTAYA Conditioning（13,200円/月4回）</li>
                  <li>• Pilates Mee月2回（11,000円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜20,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回〜通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  セミパーソナル・通い放題です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Pilates Mee月4回（19,800円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 25,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">
                  個別指導で確実に効果です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• STUDIO IVY（28,000円/月4回）</li>
                  <li>• Pilates Mee通い放題（37,500円）</li>
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
                  田園調布の掲載5店では、少人数・セミパーソナルの月4回が13,200円〜19,800円、1対1のパーソナルは1回あたり6,500円〜です。入会金やキャンペーンもご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  TSUTAYA Conditioning PILATESとPilates Meeは無料で体験できます。まずは2-3スタジオの体験を受けて比較することをおすすめします。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  掲載5店のうち4店は田園調布駅から徒歩2分以内です。STUDIO IVYは奥沢駅徒歩4分です。東横線・目黒線を利用でき、自由が丘や二子玉川のスタジオにも通うことができます。
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
              本ページでは、田園調布エリアのおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、田園調布にあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
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
              初回限定の体験レッスン無料〜7,100円です。<br />
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
      <ConsultantSection areaKey="denenchofu" areaName="田園調布" />

      <RelatedAreas currentSlug="denenchofu" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
