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
  alternates: { canonical: 'https://biyori-pilates.com/area/fujigaoka/' },
  title: '藤が丘のピラティススタジオおすすめ5選｜無料体験・料金で比較',
  description: '藤が丘のピラティススタジオ5社の料金・無料体験・マシン対応を比較しています。初心者向けの選び方、駅近スタジオ、体験レッスン当日の流れまでわかります。',
  keywords: 'ピラティス,藤が丘,愛知県,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 藤が丘', image: '/images/studios/zen-place-pilates.webp', rating: 4.7, reviewCount: 30,
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    price: '月4回 10,450円〜（税込）', trial: 'マットグループ体験 1,000円／マシングループ体験 3,000円（初回体験キャンペーン）', features: ['藤が丘駅徒歩2分','男性利用可','全国他店利用','マット＆マシン'],
    description: '藤が丘駅1出口から徒歩2分です。マットグループ・マシングループ・プライベートの3タイプのレッスンです。全国150店舗以上で他店利用可能',
    access: '名古屋市営地下鉄東山線「藤が丘駅」1番出口 徒歩2分',
    address: '愛知県名古屋市名東区明が丘124-2 ami ami annex 3階',
    popularPlan: { name: 'マットグループ月4回', description: 'マットグループレッスン（マットピラティス・ヨガ）を月4回受講できます。マシンのリフォーマーグループは別プラン（月4回 15,400円・グレード共通・開催の有無はスタジオにより異なります）です。', price: '月4回 10,450円〜' },
    options: ['リフォーマーグループ 月4回 15,400円（税込）', '入会金 33,000円（税込・体験当日の入会で無料）', '設備運営管理費 月550円（税込）', 'プライベート体験 9,900円〜'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '平日 10:00〜21:30／土日祝 8:00〜17:00（公式・2026年11月14日確認）', closed: '公式サイトに記載なし', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'Excel（エクセル）藤が丘店', rating: 4.5, reviewCount: 25,
    price: 'マンスリー4（月4回）13,200円（税込）', trial: 'トライアルレッスン 0円（約2時間・手ぶらトライアルセット付き）', features: ['女性専用','マシンピラティス','初心者対応','藤が丘駅徒歩1分'],
    description: '女性専用のマシンピラティススタジオです。藤が丘駅（地下鉄東山線 北改札口・リニモ 1番出口）から徒歩1分です。初心者から対応しており、一人ひとりに合わせた指導が特徴です。',
    access: '地下鉄東山線「藤が丘駅」北改札口 徒歩1分／リニモ「藤が丘駅」1番出口 徒歩1分', address: '名古屋市名東区藤が丘138-1 タイケンビル2F',
    popularPlan: { name: 'マンスリー4（月4回）', description: '女性専用のマシンピラティス月4回です。', price: '月4回 13,200円（税込）' },
    options: ['デイタイム（平日17時まで）14,520円／フルタイム（通い放題）15,950円（税込）', '入会金 2,200円・登録料 3,300円・施設使用料 2,750円（税込）'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '火〜金 9:30〜22:30／土日祝 8:30〜18:30（公式・2026年11月14日確認）', closed: '月曜日', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'スタジオアクセ（Studio Achse）', rating: 4.6, reviewCount: 12,
    price: 'マシングループ 月1回 5,600円〜／パーソナル 月1回 9,300円〜（税表記なし）', trial: '体験 パーソナル 6,500円／マシングループ 4,000円／マット 2,000円（料金ページ）', features: ['完全予約制','女性専用','よもぎ蒸し併設','子連れ可'],
    description: '完全予約制の女性専用スタジオです。オーダーメイドのマシンパーソナルと超少人数制グループレッスンです。よもぎ蒸しも併設',
    access: '東山線「藤が丘駅」徒歩8分', address: '名古屋市名東区高柳町507 フェリーチェA-2',
    popularPlan: { name: 'パーソナル 月4回', description: '完全予約制の女性専用スタジオのマシンパーソナルです。', price: '月4回 34,000円（税表記なし）' },
    options: ['マシングループ 月4回 19,200円（藤が丘店のみ）', 'パーソナル 月2回 18,000円／月6回 48,000円', '託児 ＋1,200円', '無料駐車場あり'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '9:30〜17:30（火曜のみ21:00まで・公式・2026年11月14日確認）', closed: 'なし', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'Pilates Nag Studio 星が丘テラス店', rating: 4.5, reviewCount: 45,
    price: 'ライト会員 月4回 11,880円〜（税込）', trial: '体験 1,100円（税込・1人1回限り）', features: ['星が丘駅徒歩1分','全店相互利用','マシングループ専門','男女共用'],
    description: 'マシンピラティスのグループレッスン専門スタジオです（男女共用）。星が丘テラス店は東山線「星ヶ丘駅」6番出入口から徒歩1分です。',
    access: '東山線「星ヶ丘駅」6番出入口 徒歩1分', address: '名古屋市千種区星が丘元町14-25 星が丘テラス WEST 2F',
    popularPlan: { name: 'ライト会員（月4回）', description: 'マシンピラティスのグループレッスン月4回です。', price: '月4回 11,880円（税込）' },
    options: ['スタンダード（月8回）14,960円／フリー 18,260円（税込）', '入会金 5,500円・登録料 5,500円・施設利用料 2,200円（税込）'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '健康維持'] },
    basicInfo: { hours: '平日 9:00〜21:00（水曜は〜19:00）／土日 9:00〜19:30（公式・2026年11月14日確認）', closed: '公式サイトに記載なし', facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'] },
  },
  {
    name: 'Pilates Mee名古屋藤が丘店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=F10273P.1.9146255O.U1357808',
    image: '/images/studios/pilates-mee.webp',
    price: 'セミパーソナル月4回 19,800円 / パーソナル月4回 39,600円（税込）',
    priceList: ['体験レッスン無料', 'セミパーソナル：月2回 11,000円／月4回 19,800円／通い放題 37,500円（税込）', 'パーソナル：月2回 22,000円／月4回 39,600円／月8回 70,400円（税込）'],
    trial: '体験レッスン無料',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオです。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯が特徴です。藤が丘エリアです（詳細は公式サイト参照）。',
    access: '無料駐車場3台完備',
    address: '〒465-0026 愛知県名古屋市名東区藤森1丁目251 藤清コーポ',
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
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '問題ありません。藤が丘エリアのスタジオはほとんどが初心者歓迎です。体験レッスンから気軽に始められます。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷を調整しやすく、初心者におすすめです。' },
  { question: '藤が丘のピラティスの料金相場は？', answer: '公式サイトで確認したグループ月4回は、zen place 藤が丘のマット10,450円・Pilates Nag 星が丘テラス店11,880円・Excel 藤が丘店13,200円（いずれも税込）です。パーソナル月4回は、スタジオアクセ34,000円（税表記なし）・Pilates Mee 39,600円（税込）です（2026年11月14日確認）。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回が目安です。大切なのは継続することです。' },
  { question: 'ピラティスで痩せますか？', answer: 'インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。2〜3ヶ月の継続が大切です。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があれば問題ありません。靴下（滑り止め付き推奨）も用意しておくと安心です。' },
  { question: 'ピラティスとヨガの違いは何ですか？', answer: 'ピラティスは体幹強化・姿勢改善に特化しています。ヨガは柔軟性とリラックス重視です。目的に合わせてお選びください。' },
  { question: '男性でも通えるスタジオはありますか？', answer: '藤が丘エリアには男性利用可のスタジオもあります。各スタジオの詳細は公式サイトでご確認ください。' },
  { question: '無料で体験できるスタジオは？', answer: 'Excel 藤が丘店（トライアルレッスン0円）とPilates Mee 名古屋藤が丘店（体験0円）です。zen place 藤が丘はマットグループ1,000円、Pilates Nag 星が丘テラス店は1,100円です（公式・2026年11月14日確認）。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感される方が多くなっています。最低2ヶ月は継続することをおすすめします。' },
]

export default function FujigaokaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '藤が丘', url: 'https://biyori-pilates.com/area/fujigaoka/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年11月14日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">ピラティス藤が丘おすすめ5選<br className="hidden md:block" />人気スタジオの料金プランの比較</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">藤が丘</span></nav></div></section>
        {/* 早見表（2026-11-14 公式照合） */}
        <section className="py-8 bg-white" id="by-station">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-xl md:text-2xl font-bold text-warm-900 mb-3">藤が丘（藤が丘駅・星ヶ丘駅）のピラティス 料金・体験の早見表</h2>
            <p className="text-warm-600 text-sm leading-relaxed mb-4">掲載5店の駅からの徒歩分・月額の下限・体験料金・入会時の費用を、各スタジオの公式サイトで確認しました。藤が丘駅から徒歩2分以内は Excel（1分）と zen place（2分）です。マシンピラティスはこの5店すべてで受けられます。</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead><tr className="bg-warm-800 text-white"><th className="px-3 py-3 text-left">スタジオ</th><th className="px-3 py-3 text-left">駅からの徒歩分</th><th className="px-3 py-3 text-left">月額の下限</th><th className="px-3 py-3 text-left">体験料金</th><th className="px-3 py-3 text-left">入会時・別途の費用</th></tr></thead>
                <tbody>
                <tr className="border-b border-warm-200"><td className="px-3 py-3 font-medium">Excel（エクセル）藤が丘店（女性専用）</td><td className="px-3 py-3">藤が丘駅 北改札口 徒歩1分</td><td className="px-3 py-3">マンスリー4（月4回）13,200円（税込）</td><td className="px-3 py-3">0円（約2時間）</td><td className="px-3 py-3">入会金 2,200円・登録料 3,300円・施設使用料 2,750円（税込）</td></tr>
                <tr className="border-b border-warm-200 bg-warm-50"><td className="px-3 py-3 font-medium">zen place pilates 藤が丘</td><td className="px-3 py-3">藤が丘駅 1出口 徒歩2分</td><td className="px-3 py-3">マット月4回 10,450円／マシン月4回 15,400円（税込）</td><td className="px-3 py-3">マット 1,000円・マシン 3,000円（キャンペーン）</td><td className="px-3 py-3">入会金 33,000円（体験当日の入会で無料）・設備運営管理費 月550円</td></tr>
                <tr className="border-b border-warm-200"><td className="px-3 py-3 font-medium">スタジオアクセ 藤が丘店（女性専用）</td><td className="px-3 py-3">藤が丘駅 徒歩8分</td><td className="px-3 py-3">マシングループ 月1回 5,600円／パーソナル 月1回 9,300円（税表記なし）</td><td className="px-3 py-3">パーソナル 6,500円／マシングループ 4,000円／マット 2,000円</td><td className="px-3 py-3">公式に記載なし</td></tr>
                <tr className="border-b border-warm-200 bg-warm-50"><td className="px-3 py-3 font-medium">Pilates Mee 名古屋藤が丘店（女性専用）</td><td className="px-3 py-3">公式に徒歩分の記載なし（無料駐車場3台）</td><td className="px-3 py-3">セミパーソナル 月2回 11,000円（税込）</td><td className="px-3 py-3">0円（通常9,800円）</td><td className="px-3 py-3">入会金 33,000円→0円（税込）</td></tr>
                <tr className="border-b border-warm-200"><td className="px-3 py-3 font-medium">Pilates Nag Studio 星が丘テラス店</td><td className="px-3 py-3">星ヶ丘駅 6番出入口 徒歩1分</td><td className="px-3 py-3">ライト会員 月4回 11,880円（税込）</td><td className="px-3 py-3">1,100円（税込）</td><td className="px-3 py-3">入会金 5,500円・登録料 5,500円・施設利用料 2,200円（税込）</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-500 text-xs mt-3">出典: <a href="https://pilates-excel.com/studio/fujigaoka/" target="_blank" rel="noopener noreferrer" className="underline">Excel 藤が丘店（公式）</a>・<a href="https://www.zenplace.co.jp/studios/pilates-fujigaoka" target="_blank" rel="noopener noreferrer" className="underline">zen place pilates 藤が丘（公式）</a>・<a href="https://studio-achse.com/price/" target="_blank" rel="noopener noreferrer" className="underline">studio Achse（公式・料金）</a>・<a href="https://m-pilates.com/shop/aichi/nagoya-fujigaoka/" target="_blank" rel="noopener noreferrer" className="underline">Pilates Mee 名古屋藤が丘店（公式）</a>・<a href="https://pilates-nag.com/料金表/" target="_blank" rel="noopener noreferrer" className="underline">Pilates Nag Studio（公式・料金）</a>（いずれも2026年11月14日確認）。キャンペーンは期間限定のため、申し込む前に公式サイトでご確認ください。</p>
          </div>
        </section>

        <TableOfContents areaName="藤が丘" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-600 leading-relaxed mb-8">本ページでは、藤が丘エリアでおすすめのピラティススタジオ5選をまとめました。</p><div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>藤が丘でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>無料体験や格安体験のスタジオを知りたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>名古屋市営地下鉄東山線「藤が丘駅」/ リニモ「藤が丘駅」から通いやすいスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul></div><p className="text-warm-600 leading-relaxed">以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。</p></div></section>
        <PriceComparisonTable studios={studios} areaName="藤が丘" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">藤が丘のおすすめピラティススタジオ5選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">料金重視で選ぶ方におすすめです。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• zen place（月4回 10,450円〜）</li></ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">女性専用で選ぶ方におすすめです。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• Excel（マシン専門）</li><li className="text-warm-700">• スタジオアクセ（子連れ可）</li></ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">グループ</h3>
                <p className="text-warm-600 text-sm mb-4">グループで選ぶ方におすすめです。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• Pilates Nag Studio（マシングループ専門）</li><li className="text-warm-700">• zen place（全国相互利用）</li></ul>
              </div>
            </div></div></section>
        <section className="py-16 bg-warm-50" id="price-market"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">藤が丘のピラティス料金相場</h2><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">10,450円〜</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">月4回 34,000円（スタジオアクセ・税表記なし）〜39,600円（Pilates Mee・税込）</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">無料〜3,000円</td></tr></tbody></table></div><p className="text-warm-600 mt-4 text-sm leading-relaxed">藤が丘は名古屋市営地下鉄東山線の終点で、リニモ乗り換え駅です。駅周辺にスタジオが集中しており、zen placeは月4回10,450円〜です。星が丘テラスのNag Studioも同じ東山線の星ヶ丘駅から徒歩1分です。</p></div></section>
        <section className="py-16 bg-white" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">藤が丘でスタジオを選ぶ際の注意点</h2><div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">東山線で名古屋市内中心部へのアクセス良好</h3>
                <p className="text-warm-600 leading-relaxed">藤が丘は東山線で栄・名古屋駅へ直通です。市内中心部のスタジオも通勤経路に合わせて検討できます。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">リニモ沿線の長久手方面からも便利</h3>
                <p className="text-warm-600 leading-relaxed">藤が丘はリニモの始発駅です。長久手・豊田方面からのアクセスも良好です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">よもぎ蒸しなどユニークな併設サービス</h3>
                <p className="text-warm-600 leading-relaxed">スタジオアクセはよもぎ蒸しなど独自サービスもあります。ピラティス以外のケアも楽しめます。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">星が丘テラスも徒歩圏内</h3>
                <p className="text-warm-600 leading-relaxed">東山線1駅隣の星ヶ丘にもNag Studioがあります。買い物ついでに通うなら星が丘テラスも便利です。</p>
              </div>
            </div></div></section>
        <section className="py-16 bg-warm-50" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：水分補給に必要です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは、着用が必須のスタジオが多くあります。</span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>をお選びください。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>がフォーム確認に効果的です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>藤が丘エリアの豆知識：</strong>藤が丘は名古屋の東部エリアに位置する閑静な住宅地です。地下鉄東山線の終点で、リニモへの乗り換え駅でもあります。駅前にスタジオが集中しており、通勤帰りに立ち寄りやすいのが魅力です。</p></div></div></div></section>
        <section className="py-16 bg-white" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">藤が丘の料金相場はグループ月4回で10,450円〜です。入会金やキャンペーンもご確認ください。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">複数のスタジオで体験レッスンを受けて比較することをおすすめします。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">自宅や職場からの距離、駅からの徒歩時間をご確認ください。継続するには通いやすさが最も重要です。</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">本ページでは、藤が丘エリアのおすすめピラティススタジオについてご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">本ページでは、藤が丘にあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。</p><p className="text-warm-600 leading-relaxed mb-6">本ページの情報を、スタジオ選びにお役立てください。</p><p className="text-warm-700 font-medium text-center">本ページが、ピラティススタジオ選びの参考になれば幸いです。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンのご予約</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜3,000円です。<br />まずは体験レッスンへの参加をおすすめします。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="fujigaoka" areaName="藤が丘" />

      <RelatedAreas currentSlug="fujigaoka" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
