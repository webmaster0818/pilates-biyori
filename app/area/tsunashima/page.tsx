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
  alternates: { canonical: 'https://biyori-pilates.com/area/tsunashima/' },
  title: '【2026年9月最新】ピラティス綱島おすすめ5選！人気スタジオの料金プランを簡単比較！',
  description: '綱島エリアのおすすめピラティススタジオ5選を徹底比較。zen place pilates綱島・pilates K綱島店・FlexFit綱島・STUDIO TT綱島店など実在スタジオの料金・体験レッスン・アクセスを完全ガイド。',
  keywords: 'ピラティス,綱島,横浜,港北区,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,zen place,pilates K,FlexFit',
}

const studios = [
  {
    name: 'zen place pilates 綱島',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp', reviewCount: 135,
    price: '月4回 13,200円〜', trial: '体験レッスン 1,000円',
    features: ['全国展開大手', 'マット&マシン完備', '2025年拡張移転', '綱島駅徒歩2分'],
    description: '全国130店舗以上を展開する大手ピラティススタジオ。2025年5月に拡張移転し、綱島駅北口徒歩2分の新スタジオへ。マットグループ・マシングループ・プライベートの3形態に対応。解剖学ベースの科学的アプローチが特徴。',
    access: '東急東横線「綱島駅」北口徒歩2分',
    address: '神奈川県横浜市港北区綱島西1-5-18 The Light Building5F',
    popularPlan: { name: 'フリープラン（月4回）', description: 'マット・マシンどちらも受講可能。全店舗利用可能プランもあり。', price: '月4回 13,200円〜（税込）' },
    options: ['マットグループレッスン', 'マシングループレッスン', 'プライベートレッスン（1回 9,900円〜）', '全店舗利用可能プランあり'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'] },
    basicInfo: { hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00（店舗により異なる）', closed: '不定休', facilities: ['リフォーマー', 'チェア', 'バレル', 'シャワー', 'ロッカー'] },
  },
  {
    name: 'pilates K 綱島店',
    image: '/images/studios/pilates-k.webp', reviewCount: 92,
    price: '月4回 11,220円〜', trial: '体験レッスン 0円',
    features: ['女性専用', 'マシンピラティス専門', '体験0円', '駅近'],
    description: '女性専用マシンピラティス専門スタジオ。「30歳からの本気ボディメイク」をコンセプトに、1人1台のリフォーマーで音楽に合わせてトレーニング。体験0円で気軽にスタート。月4回11,220円〜。',
    access: '東急東横線「綱島駅」から徒歩圏内',
    address: '神奈川県横浜市港北区綱島西（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'マンスリー4メンバー', description: '女性専用マシンピラティス。月4回で無理なく続けられるプラン。', price: '月4回 11,220円〜（税込）' },
    options: ['マンスリー4メンバー（月4回 11,220円〜）', 'マンスリー8メンバー', 'マンスリーフルメンバー（通い放題）', '体験レッスン 0円'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'ダイエット', '姿勢改善', 'ヒップアップ'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', '更衣室', 'ロッカー'] },
  },
  {
    name: 'FlexFit ピラティス・ワークアウト 綱島',
    image: '/images/studios/element.webp', reviewCount: 58,
    price: 'レッスン料は公式サイトでご確認ください', trial: '体験レッスンあり',
    features: ['駅徒歩30秒', 'ピラティス×ウェイト', 'AI姿勢分析', '全員有資格者'],
    description: '綱島駅から徒歩30秒の好立地。ピラティス×ウェイトトレーニングの複合プログラムが特徴。リフォーマー・キャデラック・チェアなど多彩なマシン完備。全員有資格のインストラクターとAI姿勢分析で科学的にボディメイク。',
    access: '東急東横線「綱島駅」から徒歩30秒',
    address: '神奈川県横浜市港北区綱島西（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '複合プログラム', description: 'ピラティス×ウェイトの複合型。AI姿勢分析付き。', price: '公式サイトでご確認ください' },
    options: ['マシンピラティス', 'ウェイトトレーニング', '複合プログラム', '体験レッスンあり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性70% / 男性30%', purpose: ['ボディメイク', '体幹強化', '姿勢改善', 'パフォーマンス向上'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'キャデラック', 'チェア', '更衣室', 'ロッカー'] },
  },
  {
    name: 'STUDIO TT 綱島店',
    image: '/images/studios/zen-place-pilates.webp', reviewCount: 48,
    price: 'レッスン料は公式サイトでご確認ください', trial: '体験レッスン 1,100円',
    features: ['木目調の落ち着く空間', '体験1,100円', '少人数制', 'アットホーム'],
    description: '木目調の落ち着いた雰囲気のピラティススタジオ。少人数制のレッスンで一人ひとりに合わせた丁寧な指導が特徴。体験レッスン1,100円でリーズナブルに試せます。アットホームな空間で初心者も安心。',
    access: '東急東横線「綱島駅」から徒歩圏内',
    address: '神奈川県横浜市港北区綱島（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'グループレッスン', description: '少人数制の落ち着いた空間でレッスン。', price: '公式サイトでご確認ください' },
    options: ['グループレッスン', 'プライベートレッスン', '体験レッスン 1,100円'],
    userProfile: { ageRange: '30代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['健康維持', '姿勢改善', 'リフレッシュ', '体幹強化'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['マシン', '更衣室', 'ロッカー'] },
  },
  {
    name: 'Rintosull 綱島エリア（東横線沿線）',
    image: '/images/studios/rintosull.webp', reviewCount: 80,
    price: 'プレミアムプラン 月額10,978円（税込）', trial: '体験無料キャンペーン実施中',
    features: ['女性専用', 'マシンピラティス', '体験無料', 'LAVA系列'],
    description: 'ホットヨガLAVA系列の女性専用マシンピラティススタジオ。東横線沿線の店舗を利用可能。リフォーマーを使ったレッスンで効率よくボディメイク。体験無料キャンペーン実施中。プレミアムフリーフルタイムプランならLAVA等系列店も利用可能。',
    access: '東急東横線沿線の店舗を利用可能',
    address: '東急東横線沿線各店舗（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'プレミアムプラン', description: '女性専用マシンピラティス。LAVA系列店も利用可能。', price: '月額 10,978円（税込）' },
    options: ['プレミアムプラン（月額 10,978円/税込）', 'プレミアムフリーフルタイム（LAVA等全店利用可）', '体験無料キャンペーン実施中'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'ダイエット', 'ヨガ&ピラティス両方', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'シャワー'] },
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！綱島エリアのスタジオは初心者歓迎。STUDIO TT綱島店はアットホームな少人数制、pilates K綱島店は体験0円で気軽にスタート。Rintosullは初心者87%以上で安心です。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマーなどを使用。FlexFit綱島はリフォーマー・キャデラック・チェアなど多彩なマシンを完備。zen placeはマット・マシン両方に対応しています。' },
  { question: '綱島のピラティスの料金相場は？', answer: 'Rintosullは月額10,978円、pilates Kは月4回11,220円〜、zen placeは月4回13,200円〜。STUDIO TTは体験1,100円。東横線沿線ではリーズナブルな水準です。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1〜2回がおすすめ。pilates K綱島店のフルメンバー（通い放題）なら毎日でも。最低2〜3ヶ月は継続しましょう。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルを鍛えて基礎代謝が上がります。FlexFitのピラティス×ウェイト複合プログラムなら効率的にボディメイクが可能です。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物。pilates K綱島店は体験0円、Rintosullは体験無料、zen placeは体験1,000円、STUDIO TTは体験1,100円。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'zen place pilates綱島、FlexFit綱島、STUDIO TT綱島店は男性OK。pilates K・Rintosullは女性専用です。' },
  { question: '綱島駅からのアクセスは？', answer: '綱島駅は東急東横線の急行停車駅で、渋谷まで約25分。FlexFitは駅徒歩30秒、zen placeは徒歩2分と駅近スタジオが充実しています。' },
  { question: 'パーソナルレッスンを受けたいのですが？', answer: 'FlexFit綱島はパーソナル対応。zen placeもプライベートレッスン（1回9,900円〜）を提供。STUDIO TTもプライベートレッスンあり。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '個人差はありますが、2ヶ月を過ぎた頃から変化を実感する方が多いです。週1〜2回で最低2〜3ヶ月の継続がおすすめです。' },
]

export default function TsunashimaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '綱島', url: 'https://pilates-biyori.com/area/tsunashima/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年09月01日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス綱島おすすめ5選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">綱島</span></nav></div></section>
        <TableOfContents areaName="綱島" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p><p className="text-warm-600 leading-relaxed mb-6">「綱島で人気のピラティススタジオを知りたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">綱島は東急東横線の急行停車駅で、渋谷まで約25分・横浜まで約15分という好アクセスの街。近年は新綱島駅の開業もあり、再開発が進む注目エリアです。温泉が湧く「綱島温泉」で知られる歴史ある街でもあります。そんな綱島には、駅徒歩30秒のFlexFitから大手zen placeまで、充実したスタジオが揃っています。</p>
            <p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、綱島エリアでおすすめの実在するピラティススタジオ5選をまとめました。</p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>綱島でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>駅近で通いやすいスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>ピラティス×トレーニングの複合プログラムに興味がある</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>東横線沿線で比較したい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul></div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>
        <PriceComparisonTable studios={studios} areaName="綱島" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">綱島のおすすめピラティススタジオ5選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>

        <section className="py-16 bg-white" id="price-market"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">綱島のピラティス料金相場【2026年4月最新】</h2><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">10,978円〜13,200円</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">1回 9,900円〜</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">無料〜1,100円</td></tr></tbody></table></div><p className="text-warm-600 mt-4 text-sm leading-relaxed">綱島エリアは再開発に伴い新しいスタジオが増加中。FlexFitのピラティス×ウェイト複合型やAI姿勢分析など、最先端のプログラムが充実しています。近隣の<Link href="/area/hiyoshi/" className="text-warm-700 underline hover:text-warm-900">日吉</Link>エリアと合わせて検討するのもおすすめです。</p></div></section>

        <section className="py-16 bg-warm-50" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">綱島でスタジオを選ぶ際の注意点</h2><div className="space-y-6">
          <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">再開発エリアは道がわかりにくい場合も</h3><p className="text-warm-600 leading-relaxed">綱島は再開発が進行中のため、工事で通路が変わっていることがあります。初回訪問時は余裕を持って出発し、スタジオの正確な場所を事前にチェックしておきましょう。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">複合プログラムは目的を明確に</h3><p className="text-warm-600 leading-relaxed">FlexFitのようなピラティス×ウェイトの複合型は効果的ですが、ピラティスだけを集中して学びたい方にはzen placeやpilates Kの専門スタジオの方が向いています。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">東横線沿線の他スタジオも選択肢に</h3><p className="text-warm-600 leading-relaxed">東横線沿線には<Link href="/area/hiyoshi/" className="text-warm-700 underline hover:text-warm-900">日吉</Link>、<Link href="/area/musashikosugi/" className="text-warm-700 underline hover:text-warm-900">武蔵小杉</Link>にもスタジオが。zen placeなら全店舗利用可能プランで複数エリアを使い分けられます。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">駐輪場・駐車場の確認を</h3><p className="text-warm-600 leading-relaxed">綱島は自転車で通う方も多いエリア。スタジオの駐輪場有無や近隣のコインパーキングを事前に確認しておくと安心です。</p></div>
        </div></div></section>

        <section className="py-16 bg-white" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong></span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong></span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong></span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>でフォーム確認。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>FlexFitはウェイトトレーニングも</strong>あるので動きやすさ重視。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>綱島エリアの豆知識：</strong>綱島は「綱島温泉」で知られる温泉地。ピラティス帰りに温泉でリフレッシュするのもおすすめ。駅前の商店街には飲食店も充実しており、運動後の食事も楽しめるエリアです。</p></div></div></div></section>

        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3><p className="text-warm-600 text-sm mb-4">月額1万円台からスタート。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• Rintosull（月額 10,978円）</li><li className="text-warm-700">• pilates K（月4回 11,220円〜）</li><li className="text-warm-700">• STUDIO TT（体験1,100円）</li></ul></div>
          <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">最先端・本格派</h3><p className="text-warm-600 text-sm mb-4">科学的アプローチで効率的に。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• FlexFit（AI姿勢分析・複合型）</li><li className="text-warm-700">• zen place（解剖学ベース・全店利用可）</li></ul></div>
          <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">女性専用・安心</h3><p className="text-warm-600 text-sm mb-4">女性だけの空間で安心。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• pilates K（女性専用・体験0円）</li><li className="text-warm-700">• Rintosull（女性専用・LAVA系列）</li></ul></div>
        </div></div></section>

        <section className="py-16 bg-warm-50" id="frequency"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1〜2回。pilates K綱島店の月4回プラン（11,220円〜）で始めましょう。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2〜3回。FlexFitの複合プログラムで効率的にボディメイク。</p><h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3><p className="text-warm-600 leading-relaxed">週1回で継続。zen placeの全店利用可能プランで柔軟に通えます。</p></div></div></section>

        <section className="py-16 bg-white" id="price-guide"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜11,000円/月</h3><p className="text-3xl font-bold text-warm-800 mb-4">月4回</p><p className="text-sm text-warm-600 mb-4">手軽に始めたい方に。</p><ul className="text-sm text-warm-700 space-y-1"><li>• Rintosull（10,978円/月）</li></ul></div>
          <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50"><div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div><h3 className="text-lg font-bold text-warm-900 mb-2">予算 11,000〜13,200円/月</h3><p className="text-3xl font-bold text-warm-800 mb-4">月4回</p><p className="text-sm text-warm-600 mb-4">週1回で着実に成果。</p><ul className="text-sm text-warm-700 space-y-1"><li>• pilates K（11,220円〜/月4回）</li><li>• zen place（13,200円〜/月4回）</li></ul></div>
          <div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">パーソナルプラン</h3><p className="text-3xl font-bold text-warm-800 mb-4">1回9,900円〜</p><p className="text-sm text-warm-600 mb-4">マンツーマンで効率的。</p><ul className="text-sm text-warm-700 space-y-1"><li>• zen place（プライベート 9,900円〜）</li><li>• FlexFit（パーソナル対応）</li></ul></div>
        </div></div></section>

        <section className="py-16 bg-warm-50" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8">
          <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ボディメイクならFlexFit、本格ピラティスならzen place、コスパならRintosull。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">レッスン形式を選ぶ</h3></div><p className="text-warm-600 leading-relaxed">グループ（pilates K・Rintosull）、複合型（FlexFit）、本格派（zen place）。好みで選びましょう。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">pilates K綱島店は体験0円、Rintosullは体験無料、zen placeは1,000円。まずは無料体験から。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">FlexFitは駅徒歩30秒、zen placeは徒歩2分。駅近スタジオが充実しているエリアです。</p></div>
        </div></div></section>

        <section className="py-16 bg-white" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>

        <section className="py-16 bg-warm-50" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は綱島エリアのおすすめピラティススタジオ5選をご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">綱島は再開発が進む注目エリアで、最先端のスタジオが続々オープン。zen place pilates綱島（2025年拡張移転・駅徒歩2分）、pilates K綱島店（女性専用・体験0円）、FlexFit綱島（駅30秒・AI姿勢分析）、STUDIO TT綱島店（アットホーム・体験1,100円）、Rintosull（女性専用・体験無料）と選択肢が充実しています。</p><p className="text-warm-600 leading-relaxed mb-6">まずは体験0円のpilates K綱島店や体験無料のRintosullから試してみましょう。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p></div></section>

        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">pilates K綱島店は体験レッスン0円。<br />まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="tsunashima" areaName="綱島" />

      <RelatedAreas currentSlug="tsunashima" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
