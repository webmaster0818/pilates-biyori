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
  alternates: { canonical: 'https://biyori-pilates.com/area/chitose-funabashi/' },
  title: '【2026年10月最新】ピラティス千歳船橋おすすめ4選人気スタジオの料金プランの比較',
  description: '千歳船橋エリアのおすすめピラティススタジオ4選を比較しています。マシンピラティス、体験レッスン、料金相場、選び方まで詳しくご案内します。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,千歳船橋,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'CLUB PILATES 千歳船橋',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5805739&p_id=4728&pc_id=12432&pl_id=69847',
    image: '/images/studios/club-pilates.webp',
    price: '月4回 13,090円／月8回 24,090円／通い放題 37,290円（公式店舗ページ・税表記なし）',
    trial: '体験レッスンあり',
    features: ['千歳船橋駅徒歩1分', 'リフォーマー使用', '4段階レベル分け', '最大12名'],
    description: 'アメリカ発マシンピラティス専門です。千歳船橋駅徒歩1分の好立地です。4段階のレベル分けで初心者〜上級者まで対応しています。月4回13,090円です（公式店舗ページ）。',
    access: '小田急線「千歳船橋駅」徒歩1分',
    address: '東京都世田谷区船橋（千歳船橋駅徒歩1分）',
    popularPlan: { name: '人気プラン', description: 'CLUB PILATES 千歳船橋の人気プランです。', price: '月4回 13,090円（税表記なし）' },
    options: ['月8回 24,090円', '通い放題 37,290円', '入会金 5,500円（税込）・事務手数料 2,200円（税込）', '料金は公式の店舗ページ（2026年10月14日確認）'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '店舗にお問い合わせください', closed: '店舗にお問い合わせください', facilities: ['ロッカー', 'マシン完備'] },
  },
  {
    name: 'ピラティスミラー 千歳船橋',
    image: '/images/studios/pilates-mirror.webp',
    price: 'プライベート30分 4,400円〜',
    trial: '体験レッスンあり',
    features: ['女性専用','天井ミラー','30分レッスン','コナミ運営'],
    description: 'コナミ運営の女性専用マシンピラティスです。天井の鏡で動きをご確認ください。30分短時間集中レッスンです。少人数制です。プライベート30分4,400円〜です。',
    access: '小田急線「千歳船橋駅」徒歩圏内',
    address: '東京都世田谷区船橋（千歳船橋駅徒歩圏内）',
    popularPlan: { name: '人気プラン', description: 'ピラティスミラー 千歳船橋の人気プランです。', price: 'プライベート30分 4,400円〜' },
    options: ['女性専用','天井ミラー','30分レッスン','コナミ運営'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '店舗にお問い合わせください', closed: '店舗にお問い合わせください', facilities: ['マシン完備', 'フィッティングルーム（カーテン仕切り）', '荷物置きBOX（鍵なし）'] },
  },
  {
    name: 'COCOLANCE 千歳船橋（近隣）',
    image: '/images/studios/cocolance.webp',
    price: '料金は店舗にお問い合わせください',
    trial: '体験レッスン 無料キャンペーン中',
    features: ['女性専用','完全個室','パーソナル','女性インストラクター'],
    description: '完全個室の女性専用パーソナルピラティススタジオです。女性インストラクターによる丁寧な指導で理想のボディラインを目指せます。体験レッスン無料キャンペーン中です。',
    access: '千歳船橋駅から近隣エリア',
    address: '東京都世田谷区（千歳船橋近隣）',
    popularPlan: { name: '人気プラン', description: 'COCOLANCE 千歳船橋（近隣）の人気プランです。', price: '料金は店舗にお問い合わせください' },
    options: ['女性専用','完全個室','パーソナル','女性インストラクター'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '店舗にお問い合わせください', closed: '店舗にお問い合わせください', facilities: ['ロッカー', 'マシン完備'] },
  },
  {
    name: 'ピラティスK 千歳船橋（近隣）',
    officialUrl: 'https://t.afi-b.com/visit.php?a=O11543l-G384824n&p=E9887623',
    image: '/images/studios/pilates-k.webp',
    price: '月4回 11,220円〜',
    trial: '体験レッスンあり',
    features: ['女性専用','マシンピラティス','月4回 11,220円〜','千歳船橋近隣'],
    description: '女性専用マシンピラティスです。リフォーマーを使ったグループレッスンです。月4回11,220円〜です。',
    access: '千歳船橋駅から近隣エリア',
    address: '東京都世田谷区（千歳船橋近隣）',
    popularPlan: { name: '人気プラン', description: 'ピラティスK 千歳船橋（近隣）の人気プランです。', price: '月4回 11,220円〜' },
    options: ['女性専用','マシンピラティス','月4回 11,220円〜','千歳船橋近隣'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '店舗にお問い合わせください', closed: '店舗にお問い合わせください', facilities: ['ロッカー', 'マシン完備'] },
  }
]

const faqs = [
  { question: 'ピラティス初心者でも千歳船橋のスタジオに通えますか？', answer: 'はい、千歳船橋エリアのスタジオは初心者歓迎がほとんどです。' },
  { question: '千歳船橋のピラティス料金相場はどのくらいですか？', answer: '千歳船橋エリアのグループレッスン料金相場は月4回で11,220円〜13,090円程度です。パーソナルはピラティスミラー 千歳船橋のプライベート30分4,400円〜です。体験レッスンは無料〜3,300円が一般的です。' },
  { question: 'マシンピラティスとマットピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷を調整しやすく、初心者向けです。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1〜2回（月4〜8回）がおすすめです。慣れてきたら週2〜3回が目安です。継続が大切なので無理のないペースで通うことをおすすめします。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルを鍛えて基礎代謝を上げることでダイエット効果が期待できます。最低2〜3ヶ月の継続がおすすめです。' },
  { question: '体験レッスンの持ち物は？', answer: '動きやすい服装（Tシャツ、レギンスなど）と飲み物があれば問題ありません。滑り止め付き靴下があると便利です。' },
  { question: 'ピラティスとヨガの違いは？', answer: 'ピラティスは体幹強化が中心、ヨガは柔軟性とリラックスが中心です。目的に合わせてお選びください。' },
  { question: '男性でも通えるスタジオはありますか？', answer: '女性専用のスタジオもあるため、男性の利用可否は各スタジオの公式サイトで事前にご確認ください。' },
  { question: 'パーソナルとグループ、どちらがおすすめ？', answer: '短期で結果を出したい方にはパーソナルです。料金重視で楽しく続けたい方にはグループがおすすめです。まずは体験レッスンで両方を試すことをおすすめします。' },
  { question: '千歳船橋から通いやすい近隣エリアは？', answer: '千歳船橋は小田急小田原線沿線のため、近隣エリアのスタジオにもアクセスしやすい立地です。沿線で複数のスタジオを比較検討するのがおすすめです。' }
]

export default function ChitosefunabashiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '千歳船橋', url: 'https://biyori-pilates.com/area/chitose-funabashi/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年10月12日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス千歳船橋おすすめ4選<br className="hidden md:block" />人気スタジオの料金プランの比較</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">千歳船橋</span></nav></div></section>
        <TableOfContents areaName="千歳船橋" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-warm-600 leading-relaxed mb-8">小田急線「千歳船橋駅」周辺でおすすめのピラティススタジオ4選をまとめました。千歳船橋は世田谷区の閑静な住宅街で、砧公園にも近い緑豊かなエリアです。駅前にはCLUB PILATESやピラティスミラーなど人気スタジオが揃っています。</p>
          <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>千歳船橋でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金やレッスン内容を比較したい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>駅近で通いやすいスタジオがいい</span></li></ul></div>
          <p className="text-warm-600 leading-relaxed">以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。</p>
        </div></section>
        <PriceComparisonTable studios={studios} areaName="千歳船橋" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">千歳船橋のおすすめピラティススタジオ4選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3><p className="text-warm-600 text-sm mb-4">マンツーマン指導で効率よく取り組めます。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• ピラティスミラー 千歳船橋（プライベート30分 4,400円〜）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50" id="price-market"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">千歳船橋のピラティス料金相場【2026年4月最新】</h2><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">11,220円〜13,090円</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">30分 4,400円〜（ピラティスミラー）</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">無料〜3,300円</td></tr></tbody></table></div><p className="text-warm-600 mt-4 text-sm leading-relaxed">千歳船橋は世田谷区の閑静な住宅街で、砧公園にも近い緑豊かな環境です。CLUB PILATESは駅徒歩1分の好立地です。ピラティスミラーはコナミ運営で安心感があります。近隣の経堂・成城学園前エリアと比較検討される方も少なくありません。</p></div></section>
        <section className="py-16 bg-white" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">千歳船橋でスタジオを選ぶ際の注意点</h2><div className="space-y-6"><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">駅前に人気スタジオが集中</h3><p className="text-warm-600 leading-relaxed">千歳船橋は駅徒歩1分にCLUB PILATESがあるなど、駅前にスタジオが集まっています。複数体験して比較するのも効率的です。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">小田急線沿線で比較検討</h3><p className="text-warm-600 leading-relaxed">千歳船橋は経堂・祖師ヶ谷大蔵・成城学園前に挟まれており、小田急線沿線で幅広く比較できます。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも検討する</h3><p className="text-warm-600 leading-relaxed">経堂や成城学園前エリアも小田急線で近く、選択肢を広げて比較するのがおすすめです。</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：水分補給に必要です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは、着用が必須のことが多くあります。</span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>をお選びください。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>でフォーム確認です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>千歳船橋エリアの豆知識：</strong>千歳船橋は砧公園にも近い住宅街で、レッスン後に公園で散歩を楽しむ方もいます。駅前にスタジオが集まっているので通いやすく、地元の方が多く利用するアットホームな雰囲気です。</p></div></div></div></section>
        <section className="py-16 bg-white" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないピラティススタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的を明確にし、最適なスタジオをお選びください。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">グループ月4回11,220円〜、パーソナル30分4,400円〜です。無理なく続けられる予算でお選びください。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">気になるスタジオを2〜3つ体験してみることをおすすめします。無料〜3,300円で体験可能です。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">小田急線「千歳船橋駅」からのアクセスや、通勤経路との相性をご確認ください。</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は千歳船橋のおすすめピラティススタジオ4選をご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">本ページの情報を、スタジオ選びにお役立てください。</p><p className="text-warm-700 font-medium text-center">本ページが、ピラティススタジオ選びの参考になれば幸いです。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンのご予約</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスンです。まずは体験レッスンへの参加をおすすめします。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="chitose-funabashi" areaName="千歳船橋" />

      <RelatedAreas currentSlug="chitose-funabashi" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
