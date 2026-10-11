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
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'

export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/honancho/' },
  title: '【2026年10月最新】方南町のピラティススタジオおすすめ5選｜zen place新店・駅徒歩3分の料金比較',
  description: '方南町のピラティススタジオ5社を公式サイトで確認した料金・体験・駅徒歩で比較。2026年10月24日オープンのzen place pilates 方南町（駅徒歩4分）、駅徒歩3分のSTUDIO NORI・COCOLANCEなど、形式別の早見表つき。',
  keywords: 'ピラティス,方南町,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'STUDIO NORI（スタジオノリ）方南町',
    image: '/images/studios/studio-nori.webp',
    price: '月4回 11,000円（税込）',
    trial: '体験レッスン 1,000円（税込・60分）',
    features: ['方南町駅徒歩3分','南欧風一軒家','少人数のマットクラス','プライベートはマシンも使用'],
    description: '方南町駅（出口1・2とも）から徒歩3分、珪藻土を使った南欧風一軒家のスタジオ。「丁寧・優しく・楽しく」がモットーで、呼吸とストレッチを重視した少人数のベーシッククラスは、運動が苦手な人や体力に自信のない人でも受けられると公式サイトで案内されています。月会員は月4回 10,000円＋税（11,000円）／月6回 14,250円＋税／月8回 18,000円＋税、プライベート（マット・マシン）は60分 8,000円＋税（公式プログラムページ・2026年10月11日確認）。',
    access: '東京メトロ丸ノ内線「方南町駅」出口1・2 徒歩3分',
    address: '〒168-0062 東京都杉並区方南2-29-39',
    popularPlan: { name: '月会員 4回', description: '少人数のベーシックなピラティスクラス（60分）。入会金は10,000円＋税。', price: '月4回 10,000円＋税（11,000円）' },
    options: ['月会員 6回 14,250円＋税','月会員 8回 18,000円＋税','チケット4枚 12,000円＋税（2か月有効）','プライベート 60分 8,000円＋税'],
    basicInfo: { hours: '10:00〜22:00（電話受付）', closed: '年末年始・クラススケジュールに準ずる', closedVerified: true, facilities: ['マット', 'プロップス', 'マシン（プライベート）'] },
  },
  {
    name: 'COCOLANCE（ココランス）方南町店',
    image: '/images/studios/cocolance.webp',
    price: '月4回 35,200円（税込・1回55分）',
    trial: '体験レッスン 0円（初回限定）',
    features: ['女性専門','完全個室','女性インストラクター','方南町駅徒歩3分'],
    description: '完全個室の女性専門パーソナルマシンピラティス。インストラクターは女性で、ウェア・ピラティスソックスは無料で貸し出しのため手ぶらで通えます。月4回 35,200円／月8回 68,640円／月12回 100,320円（いずれも税込・1回55分）。初回の体験レッスンは公式サイトで0円と表示されています。退会・休会は当月5日までに伝えれば翌月から可能と公式FAQに記載があります（公式店舗ページ・2026年10月11日確認）。',
    access: '東京メトロ丸ノ内線「方南町駅」徒歩3分（公式店舗ページ表記）',
    address: '〒166-0013 東京都杉並区堀ノ内1-5-6 池亀ビル101',
    popularPlan: { name: '月4回プラン', description: '55分のマンツーマン。1回あたり8,800円（税込）。', price: '月4回 35,200円（税込）' },
    options: ['月8回 68,640円（税込）','月12回 100,320円（税込）','入会金 33,000円（税込）※体験当日入会は16,500円','ウェア・ソックス無料レンタル'],
    basicInfo: { hours: '9:00〜21:45', closed: '年末年始', closedVerified: true, facilities: ['完全個室', 'リフォーマー', 'ダンベル・トレーニングバンド'] },
  },
  {
    name: 'SYNC.（シンク）方南町店',
    image: '/images/studios/sync-gym.webp',
    price: 'トライアル 月4回 34,760円（税込）／ペア 24,640円',
    trial: '体験 60分 500円（キャンペーン・人数限定）',
    features: ['方南町駅徒歩8分','パーソナル＆ピラティス','キャフォーマー導入','ペアパーソナルあり'],
    description: 'パーソナルトレーニングにピラティスを組み込むジム。建物最上階の二面採光スタジオで、キャデラックとリフォーマーを1台にした「キャフォーマー」を使います。ピラティス資格を持つトレーナーが担当し、ピラティスに特化したセッションも受けられます。料金は月4回 34,760円〜月10回 74,800円（1人・税込）、2人で受けるペアパーソナルなら1人あたり月4回 24,640円から（公式店舗ページ・2026年10月11日確認）。',
    access: '東京メトロ丸ノ内線「方南町駅」徒歩8分／京王井の頭線「永福町駅」徒歩17分',
    address: '〒166-0013 東京都杉並区堀ノ内1-10-2 堀ノ内GALAXY 5A',
    popularPlan: { name: 'スタンダードプラン（月8回）', description: '60分・食事管理付き。公式で「一番人気」と表示。', price: '月8回 63,360円（税込）' },
    options: ['トライアル 月4回 34,760円／ライト 月6回 50,820円（税込）','ペアパーソナル 1人あたり 月4回 24,640円〜（税込）','入会金 33,000円（税込）','ウェア・シューズ無料レンタル'],
    basicInfo: { hours: '7:00〜22:00', closed: '不定休', closedVerified: true, facilities: ['キャフォーマー', 'マルチラック', 'バルコニー'] },
  },
  {
    name: 'zen place pilates 方南町',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月額は公式サイトで確認（体験 1,000円〜）',
    trial: '体験 マット1,000円／マシン3,000円（初回体験キャンペーン）',
    features: ['2026年10月24日オープン','方南町駅徒歩4分','マット・リフォーマー・プライベート','マットはオンライン受講も可'],
    description: '2026年10月24日（土）オープンと公式サイトで告知されている新スタジオ。方南町駅の3a出口から方南通りを西永福方面へ進んだ「HILLCREST方南町ビル」の7階で、マットグループ・マシン（リフォーマー）グループ・プライベートの3種類を受けられます。初回体験キャンペーンはマットグループ1,000円、マシングループ3,000円、プライベートは体験9,900円〜（公式スタジオページ・2026年10月11日確認）。オープン前のため、月額プランは公式サイトでご確認ください。',
    access: '東京メトロ丸ノ内線「方南町駅」徒歩4分',
    address: '〒168-0063 東京都杉並区和泉4-47-22 HILLCREST方南町ビル7F',
    popularPlan: { name: 'マットグループ', description: 'マットピラティスのグループレッスン。スタジオでもオンラインでも受講できます。', price: '体験 1,000円（初回体験キャンペーン）' },
    options: ['マシングループ 体験3,000円（初回体験キャンペーン）','プライベート 体験9,900円〜','2026年10月24日オープン'],
    basicInfo: { facilities: ['マット', 'リフォーマー', 'プライベート'] },
  },
  {
    name: 'ELEMENT 笹塚店（近隣）',
    officialUrl: 'https://t.felmat.net/fmcl?ak=U11199J.1.V154352I.U1357808',
    image: '/images/studios/element.webp',
    price: '月8回 31,200円（税込）',
    trial: '体験トレーニング 3,300円',
    features: ['京王線笹塚駅徒歩3分','1回30分のマンツーマン','マシンピラティスは通い放題会員が月1回','ウェア・シューズ無料'],
    description: '方南町から最も近いELEMENTは笹塚店（京王線笹塚駅徒歩3分）。1回30分・完全個室のマンツーマンが中心のパーソナルジムで、マシンピラティスは「通い放題プランご契約の方限定・月1回利用可」と公式店舗ページに記載があります。ピラティス中心で通いたい人より、トレーニングにピラティスを少し加えたい人向けです。料金は月8回 31,200円／平日通い放題 38,280円／全日通い放題 43,780円（税込・公式店舗ページ・2026年10月11日確認）。',
    access: '京王線「笹塚駅」徒歩3分',
    address: '〒151-0073 東京都渋谷区笹塚2丁目19-1 The City笹塚 7F',
    popularPlan: { name: '月8回プラン', description: '1対1のマンツーマン（30分）。1日1回・全日10:00〜22:00。', price: '月8回 31,200円（税込）' },
    options: ['平日通い放題 38,280円（税込）','全日通い放題 43,780円（税込）※マシンピラティス月1回付き','入会金 33,000円','食事指導オプション 16,500円／月'],
    basicInfo: { hours: '10:00〜22:00（月〜日）', facilities: ['完全個室', 'マシンピラティス（通い放題会員・月1回）'] },
  }
]

const faqs = [
  { question: 'ピラティス初心者でも方南町のスタジオに通えますか？', answer: 'はい。STUDIO NORIは運動が苦手な人や体力に自信のない人向けのベーシッククラスを案内しており、体験は1,000円です。2026年10月24日オープンのzen place pilates 方南町も、マットグループの初回体験が1,000円です。' },
  { question: '方南町のピラティス料金相場はどのくらいですか？', answer: '方南町駅周辺では、少人数グループのSTUDIO NORIが月4回11,000円（税込）、マンツーマンはCOCOLANCEが月4回35,200円、SYNC.が月4回34,760円（いずれも税込）です。体験はCOCOLANCEが0円、SYNC.が500円（キャンペーン）、STUDIO NORIが1,000円です（2026年10月11日 公式確認）。' },
  { question: 'マシンピラティスとマットピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者向け。方南町ではCOCOLANCE・SYNC.がマシンのマンツーマン、zen place pilates 方南町はマットとマシンの両方です。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1〜2回（月4〜8回）がおすすめ。慣れたら週2〜3回に。継続が大切なので無理のないペースで。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルを鍛えて基礎代謝を上げることでダイエット効果が期待できます。最低2〜3ヶ月の継続がおすすめです。' },
  { question: '体験レッスンの持ち物は？', answer: '動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。滑り止め付き靴下があると便利です。' },
  { question: 'ピラティスとヨガの違いは？', answer: 'ピラティスは体幹強化が中心、ヨガは柔軟性とリラックスが中心。目的に合わせて選びましょう。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'SYNC.はペアパーソナルもあるパーソナルジムです。COCOLANCEは女性専門なので、男性は対象外です。そのほかのスタジオは予約前に公式サイトでご確認ください。' },
  { question: 'パーソナルとグループ、どちらがおすすめ？', answer: '短期で結果を出したい方にはパーソナル。コスパ重視で楽しく続けたい方にはグループがおすすめ。まずは体験で両方試してみましょう。' },
  { question: '方南町から通いやすい近隣エリアは？', answer: '方南町は東京メトロ丸ノ内線沿線で近隣エリアのスタジオにもアクセスしやすいです。沿線で複数のスタジオを比較検討するのがおすすめです。' }
]

export default function HonanchoPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '方南町', url: 'https://biyori-pilates.com/area/honancho/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年10月11日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026年10月最新】ピラティス方南町おすすめ5選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">方南町</span></nav></div></section>
        <AreaConclusion studios={studios} areaName="方南町" />


        <TableOfContents areaName="方南町" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p><p className="text-warm-600 leading-relaxed mb-6">「方南町で人気のピラティススタジオを知りたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
          <p className="text-warm-600 leading-relaxed mb-8">東京メトロ丸ノ内線「方南町駅」周辺でおすすめのピラティススタジオ5選をまとめました。方南町は杉並区の落ち着いた住宅街で、善福寺川緑地にも近い自然豊かな環境。隠れ家的スタジオから女性専用パーソナルまで個性的なスタジオが揃っています。</p>
          <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>方南町でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金やレッスン内容を比較したい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>駅近で通いやすいスタジオがいい</span></li></ul></div>
          <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
        </div></section>
        <section className="py-12 bg-white" id="by-station"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4 text-center">方南町駅からの距離と形式の早見表</h2><p className="text-warm-600 leading-relaxed mb-6 text-sm">徒歩分数・料金・体験は各スタジオの公式サイトの表記です（2026年10月11日確認）。</p><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">スタジオ</th><th className="px-4 py-3 text-left">方南町駅から</th><th className="px-4 py-3 text-left">形式</th><th className="px-4 py-3 text-left">月4回の料金</th><th className="px-4 py-3 text-left">体験</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">STUDIO NORI</td><td className="px-4 py-3">徒歩3分</td><td className="px-4 py-3">少人数グループ（マット）</td><td className="px-4 py-3">11,000円</td><td className="px-4 py-3">1,000円</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">COCOLANCE</td><td className="px-4 py-3">徒歩3分</td><td className="px-4 py-3">女性専門・マンツーマン（マシン）</td><td className="px-4 py-3">35,200円</td><td className="px-4 py-3">0円</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">zen place pilates 方南町（10/24オープン）</td><td className="px-4 py-3">徒歩4分</td><td className="px-4 py-3">マット・マシングループ／プライベート</td><td className="px-4 py-3">公式で確認</td><td className="px-4 py-3">1,000円〜</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">SYNC.</td><td className="px-4 py-3">徒歩8分</td><td className="px-4 py-3">パーソナル＋ピラティス</td><td className="px-4 py-3">34,760円（ペアは1人24,640円）</td><td className="px-4 py-3">500円（人数限定）</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">ELEMENT 笹塚店</td><td className="px-4 py-3">笹塚駅 徒歩3分（別路線）</td><td className="px-4 py-3">30分マンツーマン（ピラティスは月1回）</td><td className="px-4 py-3">月8回 31,200円</td><td className="px-4 py-3">3,300円</td></tr></tbody></table></div><p className="text-warm-600 leading-relaxed mt-4 text-sm">駅徒歩5分以内で選べるのは、月1万円台の少人数クラス（STUDIO NORI）、女性専門の個室マンツーマン（COCOLANCE）、10月24日オープンのzen place（マット・マシンのグループ）の3タイプです。マシンのグループレッスンを方南町で受けられるのは、掲載スタジオではzen placeだけです。料金はいずれも税込。</p></div></section>
        <PriceComparisonTable studios={studios} areaName="方南町" />
        <AreaMarketComparison studios={studios} areaName="方南町" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">方南町のおすすめピラティススタジオ5選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3><p className="text-warm-600 text-sm mb-4">月1万円台で通えるスタジオ。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• STUDIO NORI（月4回 11,000円・少人数クラス）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3><p className="text-warm-600 text-sm mb-4">マンツーマンで効果を最大化。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• COCOLANCE（女性専門・完全個室・月4回 35,200円）</li><li className="text-warm-700">• SYNC.（ペアなら1人 月4回 24,640円〜）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">初心者向け</h3><p className="text-warm-600 text-sm mb-4">体験レッスンから気軽にスタート。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• STUDIO NORI（体験1,000円）</li><li className="text-warm-700">• zen place pilates 方南町（10/24オープン・体験1,000円〜）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50" id="price-market"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">方南町のピラティス料金相場【2026年10月最新】</h2><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">少人数グループ（月4回）</td><td className="px-4 py-3">11,000円〜（STUDIO NORI）</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">マンツーマン（月4回）</td><td className="px-4 py-3">34,760円〜35,200円（SYNC.・COCOLANCE）</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">0円〜1,000円（キャンペーン含む）</td></tr></tbody></table></div><p className="text-warm-600 mt-4 text-sm leading-relaxed">方南町は杉並区の下町情緒あふれる住宅街です。STUDIO NORIは南欧風一軒家の隠れ家的スタジオで、少人数クラスが月4回11,000円（税込）。COCOLANCEは女性専用パーソナル。SYNC.は天空の二面全面採光空間が魅力。個性的なスタジオが揃う穴場エリアです。</p></div></section>
        <section className="py-16 bg-white" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">方南町でスタジオを選ぶ際の注意点</h2><div className="space-y-6"><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">丸ノ内線方南町支線の運行本数に注意</h3><p className="text-warm-600 leading-relaxed">方南町は丸ノ内線の支線で、本線に比べ運行本数が少なめです。レッスンの予約時間に合わせて電車の時刻を確認しておきましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">隠れ家的スタジオが多い</h3><p className="text-warm-600 leading-relaxed">方南町は大手チェーンよりも個人運営のスタジオが中心。初めて訪問する際はスタジオの場所を事前に確認しておきましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">近隣の中野坂上・新高円寺も検討</h3><p className="text-warm-600 leading-relaxed">丸ノ内線で中野坂上方面、京王線で笹塚方面のスタジオも選択肢に入ります。</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：水分補給に。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは必須のことが多い。</span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>でフォーム確認。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>方南町エリアの豆知識：</strong>方南町は善福寺川緑地に近い自然豊かな環境です。STUDIO NORIは南欧風一軒家の珪藻土を使った空気のきれいな癒しのスタジオで、体験レッスンは1,000円（税込）から気軽に始められます。</p></div></div></div></section>
        <section className="py-16 bg-white" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないピラティススタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的を明確にし、最適なスタジオを選びましょう。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">グループ月4回9,625円〜、パーソナル月4回22,000円〜。無理なく続けられる予算で。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">気になるスタジオを2〜3つ体験してみましょう。無料〜3,300円で体験可能です。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">東京メトロ丸ノ内線「方南町駅」からのアクセスや、通勤経路との相性を確認しましょう。</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は方南町のおすすめピラティススタジオ5選をご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン。まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="honancho" areaName="方南町" />

      <RelatedAreas currentSlug="honancho" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
