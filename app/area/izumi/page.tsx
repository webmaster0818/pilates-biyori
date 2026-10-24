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
  title: '和泉中央・和泉府中のピラティス・マシンピラティス8選｜駅別早見表と公式料金で比較',
  description: '和泉中央駅・和泉府中駅周辺のピラティス8か所を駅別に比較。和泉中央駅直結のリントスル エコール・いずみ店、徒歩4分のコナミスポーツクラブ和泉中央、STUDIO TOU、JR和泉府中駅のリントスル・studio MUERなど、料金・体験は公式で確認した情報（2026年10月17日）です。',
  keywords: 'ピラティス,和泉,大阪府,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'Rintosull（リントスル）和泉府中店', image: '/images/studios/rintosull.webp',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683',
    price: '月4回 8,800円〜（税込）', trial: '無料体験会あり', features: ['JR和泉府中駅東口徒歩2分','2026年10月1日オープン','女性専用','駐車場2時間無料'],
    description: '2026年10月1日にオープンした女性専用のマシンピラティススタジオです。JR阪和線「和泉府中駅」東口から徒歩2分、駅前の商業施設「フチュール和泉」4階です。和泉府中駅の徒歩圏で通えるリントスルはこの店舗です。料金プランはエコール・いずみ店と同じ3種類です（月4回 8,800円／ライト・フルタイム 13,800円／系列全店通い放題 16,800円・いずれも税込）。別途、運営管理費が月680円（税込）かかります（公式店舗ページ・2026年10月11日確認）。',
    access: 'JR阪和線「和泉府中駅」東口 徒歩2分（フチュール和泉 4F）',
    address: '大阪府和泉市府中町1-20-1 フチュール和泉 4F',
    popularPlan: { name: '4・フルタイム（月4回）', description: '週1ペースで通う人向けのプランです。和泉府中店で月4回まで受講できます。', price: '月4回 8,800円（税込）' },
    options: ['ライト・フルタイム（通い放題・和泉府中店＋1店舗）13,800円', 'プレミアム フリー・フルタイム（Rintosull・LAVA等の系列全店通い放題）16,800円', '1回券 3,300円', '運営管理費 月680円', 'キャッシュレス決済のみ（現金不可）'],
    basicInfo: { closed: '毎週日曜・第4水曜', closedVerified: true, facilities: ['マシンピラティス', '水素水サーバー', 'ドライヤー付パウダースペース', '更衣室', '鍵付きロッカー', '駐車場（2時間無料）'] },
  },
  {
    name: 'studio MUER（スタジオミュエ）和泉',
    price: '月4回 28,000円（1回あたり7,000円）', trial: '体験レッスン 6,000円',
    features: ['JR和泉府中駅徒歩4分','マンツーマン','理学療法士の資格を持つスタッフ','リフォーマー'],
    description: 'JR和泉府中駅から徒歩4分の、リフォーマーを使うマンツーマン中心のピラティススタジオです。公式サイトでは在籍スタッフ2名とも理学療法士の資格を持つと紹介されています。月謝コースは月2回 15,000円／月4回 28,000円／月8回 52,000円、回数券もあります（公式料金ページ・2026年10月11日確認。税込・税抜の表記はありません）。体験は料金ページでは6,000円で、別途「ご新規様限定キャンペーン」の告知も出ているため、最新の条件は公式でご確認ください。',
    access: 'JR阪和線「和泉府中駅」徒歩4分（近隣パーキングあり）', address: '〒594-0071 大阪府和泉市府中町7丁目5-58 ハイム森田104',
    popularPlan: { name: '月4回コース', description: 'マンツーマンのマシンピラティスです（1レッスン50分）。1ヶ月の繰り越しが可能です。', price: '月4回 28,000円（1回あたり7,000円）' },
    options: ['月2回コース 15,000円', '月8回コース 52,000円', '5回券 40,000円／10回券 75,000円（購入日から6ヶ月有効）', '当日1回券 8,500円'],
    basicInfo: { facilities: ['リフォーマー', 'プライベート空間（マンツーマン）'] },
  },
  {
    name: 'Rintosull（リントスル）エコール・いずみ店', image: '/images/studios/rintosull.webp', rating: 4.5, reviewCount: 65,
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683',
    price: '月4回 8,800円〜', trial: '無料体験会あり', features: ['和泉中央駅直結','女性専用','低価格','駐車場2時間無料'],
    description: 'ホットヨガLAVAのグループが展開する女性専用のマシンピラティススタジオです。泉北高速鉄道「和泉中央駅」直結のエコール・いずみ東館3Fにあり、駐車場（2時間無料）・駐輪場（3時間無料）があります。体験会は無料（約45分）で、体験当日に入会すると入会金・登録金（各5,000円）が0円です（公式店舗ページ・2026年10月17日確認）。',
    access: '泉北高速鉄道「和泉中央駅」直結（エコール・いずみ東館3F）',
    address: '大阪府和泉市いぶき野5-1-14 エコール・いずみ東館3F',
    popularPlan: { name: '4・フルタイム（月4回）', description: '週1ペースで通う人向けのプランです。ライト（通い放題）13,800円・系列全店通い放題16,800円もあります（税込）。', price: '月4回 8,800円（税込）' },
    options: ['ライト・フルタイム 13,800円', 'プレミアム フリー・フルタイム 16,800円', '1回券 3,300円', '運営管理費 月680円'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '毎週日曜・第4水曜', closedVerified: true, facilities: ['リフォーマー', '更衣室', '鍵付きロッカー', 'パウダースペース'] },
  },
  {
    name: 'Pilates Studio Plaisir（プレジール）', rating: 4.7, reviewCount: 20,
    price: 'パーソナル制（料金は公式サイトに記載なし）', trial: '新規受付（体験含む）一時休止中', features: ['光明池駅徒歩5分','女性専門','パーソナル','理学療法士'],
    description: '光明池駅から徒歩5分の、女性に向けたパーソナルピラティススタジオです。公式サイトでは「理学療法士が予防医学に基づいてカラダをデザインします」と紹介されています。現在はご予約枠が定員のため、新規受付（体験含む）を一時休止していると案内されています（公式サイト・2026年10月17日確認）。和泉中央駅・和泉府中駅からは離れています。',
    access: '泉北高速鉄道「光明池駅」徒歩5分（近隣に有料コインパーキング）', address: '大阪府和泉市伏屋町3丁目',
    popularPlan: { name: 'パーソナルピラティス', description: '理学療法士によるパーソナルレッスンです（新規受付は一時休止中）。', price: '料金は公式サイトに記載なし' },
    options: ['新規受付（体験含む）一時休止中（2026年10月17日確認）'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専門）', purpose: ['姿勢改善', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['リフォーマー', 'チェア'] },
  },
  {
    name: 'STUDIO TOU 大阪和泉中央', rating: 4.5, reviewCount: 18,
    price: 'マシングループ 月2回 8,000円／月5回 11,000円／通い放題 13,000円（税表記なし）', trial: 'グループ体験3回 3,000円／プライベート体験1回 5,000円', features: ['マシングループ','マシンプライベート','和泉中央','グループ体験3回3,000円'],
    description: 'マシンを使うグループレッスンとプライベートレッスンのあるピラティススタジオです。所在地は和泉市池田下町の「メルベーユ和泉中央」1Fです。和泉中央の月謝は、マシングループが月2回8,000円・月5回11,000円・通い放題13,000円、マシンプライベートが月2回12,000円・月4回24,000円・月8回48,000円（1ヶ月繰り越し可）で、グループとプライベートの複合プランもあります。入会金（システム手数料）は1,100円です（公式の店舗ページ・料金ページ、税表記なし・2026年10月17日確認）。最寄り駅からの徒歩分は公式に記載がありません。',
    access: '和泉中央エリア（最寄り駅からの徒歩分は公式に記載なし）', address: '〒594-0032 大阪府和泉市池田下町173-1 メルベーユ和泉中央1F',
    popularPlan: { name: 'マシングループ月5回', description: 'マシンを使ったグループレッスンを月5回まで受けられます。', price: '月5回 11,000円（税表記なし）' },
    options: ['マシングループ通い放題 13,000円／月2回 8,000円', 'マシンプライベート 月2回 12,000円／月4回 24,000円／月8回 48,000円', 'グループ＋プライベートの複合プラン 16,000〜22,000円', '入会金（システム手数料）1,100円', 'グループ体験3回 3,000円（有効期限1ヶ月）'],
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['ピラティスマシン'] },
  },
  {
    name: 'Joie pilates（ジョワ ピラティス）', rating: 4.5, reviewCount: 12,
    price: 'マシンパーソナル 月2回 13,200円／月4回 26,400円（税込）', trial: 'マシン体験 4,400円／マットグループ体験 1,650円（税込）', features: ['マシンパーソナル','少人数マットグループ','シニアクラス','老若男女OK'],
    description: 'マシンピラティスのマンツーマンレッスンと、4名までの少人数マットグループ、シニア向けグループストレッチクラスがあるスタジオです。公式サイトでは「老若男女どなたでもご参加いただけます」と案内されています。マシンパーソナル（60分）は月2回13,200円・月4回26,400円・ドロップイン7,700円、マットグループは月4回6,600円です（いずれも税込・公式サイト・2026年10月17日確認）。',
    access: '最寄り駅・徒歩分は公式に記載なし', address: '〒594-0011 大阪府和泉市上代町113',
    popularPlan: { name: 'マシンレッスン月4回', description: 'ピラティスマシンを使ったマンツーマンレッスン（60分）です。', price: '月4回 26,400円（税込）' },
    options: ['マシン＆マット組み合わせ 11,550円〜19,800円（税込）', 'マットグループ 月4回 6,600円・ドロップイン 2,200円', 'シニアグループストレッチ 月4回 4,400円（体験 1,100円）'],
    basicInfo: { hours: '公式サイトでご確認ください', closed: '土日祝は不定休', facilities: ['ピラティスマシン', 'マット'] },
  },
  {
    name: 'PILATES Aloha（ピラティス アロハ）', rating: 4.4, reviewCount: 15,
    price: 'マットピラティス 1回1,500円〜（1レッスンごとの料金）', trial: 'マット体験 1,000円（通常料金から500円引き）', features: ['女性専用','初心者向け','スタジオ前無料駐車場','床暖房（冬）'],
    description: 'ピラティス初心者向けの女性専用スタジオです。和泉市山荘町の「スタジオ輪（Lin）教室」と「和泉シティプラザ教室」でレッスンをしています。料金は1レッスンごとで、マットピラティス1,500円・バランスボールピラティス2,000円・アークバレルピラティス3,000円・マダムピラティス1,500円、体験は各500円引きです。スタジオ前に無料駐車場があり、ウォーターサーバー・冬の床暖房があります（公式サイト・2026年10月17日確認）。',
    access: '最寄り駅・徒歩分は公式に記載なし（スタジオ前に無料駐車場）', address: '大阪府和泉市山荘町（スタジオ輪教室）／和泉シティプラザ教室',
    popularPlan: { name: 'マットピラティス', description: '初心者向けのマットピラティスです。', price: '1回 1,500円' },
    options: ['バランスボールピラティス 1回2,000円', 'アークバレルピラティス 1回3,000円', 'マダムピラティス 1回1,500円', '体験は通常料金から500円引き'],
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['マット', 'バランスボール', 'アークバレル', 'ウォーターサーバー', '無料駐車場'] },
  },
  {
    name: 'コナミスポーツクラブ 和泉中央（マシンピラティス）',
    price: 'マシンピラティス 1ヶ月7,780円（税込・振替し放題）', trial: '無料体験実施中（公式告知）', features: ['和泉中央駅徒歩4分','総合型スポーツクラブ','マシンピラティス','木曜休館'],
    description: '泉北高速鉄道「和泉中央駅」徒歩4分の総合型スポーツクラブです。ピラティス専門スタジオではありませんが、専用マシンを使う少人数の「ピラティスビューティースクール」があり、公式の店舗ページで「【和泉中央/マシンピラティス】無料体験実施中!1ヶ月7,780円(税込)で振替し放題!」と告知されています。営業時間は月火水金10:00〜23:00・土10:00〜20:00・日祝10:00〜18:00、毎週木曜が休館日です（公式店舗ページ・2026年10月17日確認）。',
    access: '泉北高速鉄道「和泉中央駅」徒歩4分', address: '〒594-0041 大阪府和泉市いぶき野5丁目6-2',
    popularPlan: { name: 'ピラティスビューティースクール（マシン）', description: '専用マシンを使った少人数レッスンです。', price: '1ヶ月 7,780円（税込）' },
    options: ['無料体験（公式告知）', '店頭での入会手続きは会員証発行手数料1,100円（税込）'],
    basicInfo: { hours: '月火水金 10:00〜23:00／土 10:00〜20:00／日祝 10:00〜18:00', closed: '毎週木曜（お盆・年末年始等）', facilities: ['ピラティスマシン', 'マシンジム', 'プール'] },
  }
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '問題ありません。和泉エリアのスタジオはほとんどが初心者歓迎です。体験レッスンから気軽に始められます。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷を調整しやすく、初心者におすすめです。' },
  { question: '和泉中央駅の近くにピラティススタジオはありますか？', answer: '泉北高速鉄道「和泉中央駅」直結のRintosull エコール・いずみ店（女性専用・月4回8,800円 税込）、徒歩4分のコナミスポーツクラブ和泉中央（マシンピラティス 1ヶ月7,780円 税込）、和泉市池田下町のSTUDIO TOU 大阪和泉中央（マシングループ月2回8,000円〜・税表記なし）があります（各公式サイト・2026年10月17日確認）。' },
  { question: '和泉のピラティスの料金相場は？', answer: 'マシングループは月4回8,800円（Rintosull・税込）、STUDIO TOUの月5回11,000円（税表記なし）などです。マンツーマンはstudio MUERが月4回28,000円、Joie pilatesが月4回26,400円（税込）です。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回が目安です。大切なのは継続することです。' },
  { question: 'ピラティスで痩せますか？', answer: 'インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。2〜3ヶ月の継続が大切です。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があれば問題ありません。靴下（滑り止め付き推奨）も用意しておくと安心です。' },
  { question: 'ピラティスとヨガの違いは何ですか？', answer: 'ピラティスは体幹強化・姿勢改善に特化しています。ヨガは柔軟性とリラックス重視です。目的に合わせてお選びください。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'Joie pilatesは公式サイトで「老若男女どなたでもご参加いただけます」と案内されています。Rintosull・Pilates Studio Plaisir・PILATES Alohaは女性専用（女性専門）です。そのほかのスタジオは公式サイトでご確認ください。' },
  { question: '無料で体験できるスタジオは？', answer: 'Rintosull（和泉府中店・エコール・いずみ店）の体験会は無料です。コナミスポーツクラブ和泉中央も公式で無料体験を告知しています。STUDIO TOUはグループ体験3回3,000円、Joie pilatesはマシン体験4,400円（税込）です（2026年10月17日確認）。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感される方が多くなっています。最低2ヶ月は継続することをおすすめします。' },
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
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年10月24日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">ピラティス和泉中央駅・和泉府中駅おすすめ8選<br className="hidden md:block" />料金・体験レッスン・マシン対応を比較</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">和泉</span></nav></div></section>
        <AreaConclusion studios={studios} areaName="和泉" />

        <TableOfContents areaName="和泉" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-600 leading-relaxed mb-8">本ページでは、和泉中央駅・和泉府中駅周辺でおすすめのピラティススタジオ8選をまとめました。</p><div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>和泉でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>無料体験や格安体験のスタジオを知りたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>泉北高速鉄道「和泉中央駅」/ JR「和泉府中駅」から通いやすいスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul></div><p className="text-warm-600 leading-relaxed">以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。</p></div></section>
        <section className="py-12 bg-white" id="by-station"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4 text-center">駅別の早見表｜和泉中央駅・和泉府中駅・光明池駅</h2><p className="text-warm-600 leading-relaxed mb-6 text-sm">泉北高速鉄道の和泉中央駅とJR阪和線の和泉府中駅は路線も場所も離れています。距離は各スタジオの公式サイトの表記です（2026年10月17日確認）。</p><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">最寄り駅</th><th className="px-4 py-3 text-left">スタジオ</th><th className="px-4 py-3 text-left">駅からの距離</th><th className="px-4 py-3 text-left">形式・料金の目安</th></tr></thead><tbody><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium" rowSpan={3}>泉北高速 和泉中央駅</td><td className="px-4 py-3">Rintosull エコール・いずみ店（女性専用）</td><td className="px-4 py-3">駅直結</td><td className="px-4 py-3">マシン・グループ／月4回 8,800円（税込）</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3">コナミスポーツクラブ 和泉中央（総合型クラブ）</td><td className="px-4 py-3">徒歩4分</td><td className="px-4 py-3">マシンピラティス／1ヶ月 7,780円（税込）</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3">STUDIO TOU 大阪和泉中央（メルベーユ和泉中央1F）</td><td className="px-4 py-3">徒歩分は公式に記載なし</td><td className="px-4 py-3">マシン・グループ／月2回 8,000円〜（税表記なし）</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium" rowSpan={2}>JR和泉府中駅</td><td className="px-4 py-3">Rintosull 和泉府中店（2026年10月1日オープン・女性専用）</td><td className="px-4 py-3">東口 徒歩2分</td><td className="px-4 py-3">マシン・グループ／月4回 8,800円（税込）</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3">studio MUER 和泉</td><td className="px-4 py-3">徒歩4分</td><td className="px-4 py-3">マシン・マンツーマン／月4回 28,000円</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">泉北高速 光明池駅</td><td className="px-4 py-3">Pilates Studio Plaisir（女性専門・新規受付一時休止中）</td><td className="px-4 py-3">徒歩5分</td><td className="px-4 py-3">パーソナル</td></tr></tbody></table></div><p className="text-warm-600 leading-relaxed mt-4 text-sm">和泉中央駅で探すなら、駅直結で月4回8,800円（税込）のリントスル エコール・いずみ店、徒歩4分で月7,780円（税込）のコナミスポーツクラブ和泉中央、通い放題13,000円のSTUDIO TOUが候補です。リントスルの2店舗は料金プランが同じで、「ライト・フルタイム（13,800円）」なら登録店舗＋1店舗、「プレミアム フリー・フルタイム（16,800円）」ならリントスル系列全店とホットヨガLAVAなどにも通えます（税込・公式店舗ページより）。Joie pilates（上代町）とPILATES Aloha（山荘町・和泉シティプラザ）は公式に最寄り駅の記載がないため表に入れていません。</p><div className="bg-warm-50 border-l-4 border-warm-400 p-5 mt-6" id="izumi-machine-note"><h3 className="text-lg font-bold text-warm-900 mb-2">和泉府中・和泉中央で「マシンピラティス」を探すときの注意（2026年10月24日確認）</h3><ul className="space-y-2 text-sm text-warm-700 leading-relaxed"><li>・JR和泉府中駅の徒歩圏でマシンピラティスを受けられるのは、表のRintosull 和泉府中店（東口 徒歩2分）とstudio MUER 和泉（徒歩4分）です。コナミスポーツクラブのマシンピラティス（ピラティスビューティースクール）の実施クラブ一覧に、和泉府中のクラブは載っていません（和泉市内は和泉中央のみ）。</li><li>・ホットヨガのLAVAには店内でマシンピラティスを受けられる店舗がありますが、LAVA公式のマシンピラティス実施店舗一覧に載っている大阪府の店舗はなんば店・枚方市駅前店の2店舗で、和泉市内の店舗は載っていません。和泉中央駅でマシンピラティスを受けるなら、駅直結のRintosull エコール・いずみ店が候補です（<Link href="/brands/lava/" className="underline">LAVAのマシンピラティス</Link>・<Link href="/brands/rintosull/" className="underline">Rintosullの料金と店舗一覧</Link>）。</li></ul><p className="text-xs text-warm-500 mt-3">出典：コナミスポーツクラブ ピラティスビューティースクールの実施クラブ一覧／LAVA公式「マシンピラティス」ページの実施店舗一覧／Rintosull 和泉府中店・エコール・いずみ店の公式店舗ページ（いずれも2026年10月24日確認）</p></div></div></section>
        <PriceComparisonTable studios={studios} areaName="和泉" />
        <AreaMarketComparison studios={studios} areaName="和泉" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">和泉のおすすめピラティススタジオ8選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">料金重視で選ぶ方におすすめです。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• Rintosull 和泉府中店（月4回 8,800円〜・和泉府中駅東口徒歩2分）</li><li className="text-warm-700">• Rintosull エコール・いずみ店（月4回 8,800円〜・和泉中央駅直結）</li><li className="text-warm-700">• コナミスポーツクラブ 和泉中央（マシンピラティス 1ヶ月7,780円・和泉中央駅徒歩4分）</li></ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">女性専用で選ぶ方におすすめです。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• Rintosull（和泉府中店・エコール・いずみ店）</li><li className="text-warm-700">• PILATES Aloha（初心者向け）</li></ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">シニア歓迎</h3>
                <p className="text-warm-600 text-sm mb-4">シニア歓迎で選ぶ方におすすめです。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• Aloha（10代〜80代対応）</li><li className="text-warm-700">• Joie（シニアクラスあり）</li></ul>
              </div>
            </div></div></section>
        <section className="py-16 bg-warm-50" id="price-market"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">和泉のピラティス料金相場</h2><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">8,800円〜</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">月4回 26,400円〜28,000円（Joie・MUER）</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">無料〜6,000円</td></tr></tbody></table></div><p className="text-warm-600 mt-4 text-sm leading-relaxed">和泉は泉北高速鉄道沿線の住宅地で、和泉中央駅直結のRintosullが便利です。個人経営のアットホームなスタジオも多く、シニア世代から若い世代まで幅広く通えるのが特徴です。車通いの方は駐車場完備のスタジオが多いのも魅力です。</p></div></section>
        <section className="py-16 bg-white" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">和泉でスタジオを選ぶ際の注意点</h2><div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">泉北高速鉄道とJRで最寄り駅が異なる</h3>
                <p className="text-warm-600 leading-relaxed">和泉中央駅（泉北高速）と和泉府中駅（JR）はかなり離れています。JR沿線ならリントスル和泉府中店（東口徒歩2分）やstudio MUER（徒歩4分）、泉北高速沿線ならエコール・いずみ店（和泉中央駅直結）やコナミスポーツクラブ和泉中央（徒歩4分）が通いやすい選択肢です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">車通いが便利なエリア</h3>
                <p className="text-warm-600 leading-relaxed">和泉は住宅地が広がるエリアで車移動が主流です。Rintosullのエコール・いずみは駐車場完備で車通いに最適です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">シニア世代も歓迎</h3>
                <p className="text-warm-600 leading-relaxed">AlohaやJoieはシニア世代にも対応しています。年齢を問わず始められるスタジオがあるのが和泉の魅力です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">堺エリアも検討</h3>
                <p className="text-warm-600 leading-relaxed">堺東駅まで泉北高速+南海で約20分です。堺エリアのスタジオも通勤経路に合わせてご検討ください。</p>
              </div>
            </div></div></section>
        <section className="py-16 bg-warm-50" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：水分補給に必要です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは、着用が必須のスタジオが多くあります。</span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>をお選びください。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>がフォーム確認に効果的です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>和泉エリアの豆知識：</strong>和泉は泉北ニュータウンを擁する住宅地です。和泉中央駅周辺は商業施設が充実しており、Rintosullはエコール・いずみ直結で買い物ついでに通えます。車社会のエリアなので駐車場完備のスタジオが多いのも嬉しいポイントです。</p></div></div></div></section>
        <section className="py-16 bg-white" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">和泉の料金相場はグループ月4回で8,800円〜です。入会金やキャンペーンもご確認ください。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">複数のスタジオで体験レッスンを受けて比較することをおすすめします。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">自宅や職場からの距離、駅からの徒歩時間をご確認ください。継続するには通いやすさが最も重要です。</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">本ページでは、和泉エリアのおすすめピラティススタジオについてご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">本ページでは、和泉にあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。</p><p className="text-warm-600 leading-relaxed mb-6">本ページの情報を、スタジオ選びにお役立てください。</p><p className="text-warm-700 font-medium text-center">本ページが、ピラティススタジオ選びの参考になれば幸いです。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンのご予約</h2><p className="text-warm-200 mb-8 leading-relaxed">体験レッスンは無料〜6,000円です（スタジオにより異なります）。<br />まずは体験レッスンへの参加をおすすめします。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
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
