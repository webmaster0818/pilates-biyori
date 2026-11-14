import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { AreaMarketComparison } from '@/components/AreaMarketComparison'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'

export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/ikejiri-ohashi/' },
  title: 'ピラティス池尻大橋おすすめ5選料金・体験レッスン・マシン対応を比較',
  description: '池尻大橋エリアのおすすめピラティススタジオ5選を比較しています。マシンピラティス、体験レッスン、料金相場、選び方まで詳しくご案内します。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,池尻大橋,東京,世田谷区,目黒区,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'AruPilates 池尻大橋',
    image: '/images/studios/aru-pilates.webp',
    price: '月4回 38,400円〜（5か月契約・税込）',
    trial: '初回体験 60分 1,000円（税込）',
    features: ['女性専用', '産婦人科医監修（一部レッスン）', '池尻大橋駅徒歩3分', 'ウェア無料レンタル'],
    description: '池尻大橋駅徒歩3分の女性専用パーソナルマシンピラティススタジオです。産婦人科医監修のプログラムで女性の身体に寄り添った指導を提供しています。最新ブランドのウェア無料レンタル、ウォーターサーバー、パウダールーム完備で手ぶらで通えます。五感を満たすパーソナル空間が魅力です。',
    access: '東急田園都市線「池尻大橋駅」徒歩3分',
    address: '東京都世田谷区池尻2-26-6 フィル・パーク池尻大橋III 3F',
    popularPlan: { name: 'パーソナル 月4回', description: '女性専用のパーソナルマシンピラティスです（公式の表記では医師監修は一部レッスンのみ）。', price: '月4回 38,400円（5か月契約）／43,600円（3か月契約）（税込）' },
    options: ['月2回 20,800円（5か月契約）／23,200円（3か月契約）（税込）', '入会金 通常20,000円（体験当日の入会で0円）', 'ウェア無料レンタル', 'パウダールーム完備'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', '産後ケア', '姿勢改善', '美容'] },
    basicInfo: { hours: '9:00〜21:30（完全予約制・公式・2026年11月14日確認）', closed: '公式サイトに記載なし', facilities: ['ロッカー', 'マシン完備', 'パウダールーム', 'ウォーターサーバー'] },
  },
  {
    name: 'パーソナルマシンピラティスYUZU 池尻大橋店',
    image: '/images/studios/yuzu-pilates.webp',
    price: '月4プラン 31,200円（1回あたり7,800円）〜（税込）',
    trial: '体験 5,500円（税込）',
    features: ['女性向けパーソナル', '有資格者のみ採用', '池尻大橋駅徒歩1分', 'カウンセリング付き'],
    description: '女性向けパーソナル専門のマシンピラティススタジオです。公式サイトによるとインストラクターは有資格者のみを採用しています。マシンピラティスで体のコアを鍛え、「健康で美しいしなやか美BODY」を目指します。丁寧なカウンセリングから始まるオーダーメイドレッスンです。',
    access: '東急田園都市線「池尻大橋駅」徒歩1分',
    address: '東京都目黒区東山3-3-2 パラッツォ東山 306',
    popularPlan: { name: '月4プラン', description: '有資格者による女性向けパーソナルマシンピラティスです。', price: '月4回 31,200円（税込・1回あたり7,800円）' },
    options: ['月6プラン 43,200円（1回あたり7,200円・税込）', '月2プラン 16,800円（月4・月6プランで3ヶ月継続後に利用可）', '入会金 22,000円（税込・体験当日の入会で無料）'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性向け）', purpose: ['ボディメイク', '柔軟性向上', '姿勢改善', '健康維持'] },
    basicInfo: { hours: '8:15〜21:45（公式・2026年11月14日確認）', closed: '公式サイトに記載なし', facilities: ['ロッカー', 'マシン完備'] },
  },
  {
    name: 'Habit Pilates studio 池尻大橋店',
    image: '/images/studios/habit-pilates.webp',
    price: '月2回 9,800円／月4回 18,000円／通い放題 29,800円（税込）',
    trial: '体験レッスン 0円（通常1,980円・体験当日入会のキャンペーン）',
    features: ['最大5名少人数制', 'リフォーマー使用', 'アットホーム', '池尻大橋駅徒歩5分'],
    description: 'ピラティス専用マシンのリフォーマーを使用した最大5名の少人数制レッスンです。インストラクターが一人ひとりの体調や目的に合わせた指導を行います。アットホームな雰囲気で初心者でも安心です。',
    access: '東急田園都市線「池尻大橋駅」徒歩5分',
    address: '東京都世田谷区池尻3-21-28 新日本池尻ビル1F',
    popularPlan: { name: '月4回コース', description: '最大5名のリフォーマーを使ったグループレッスンです。', price: '月4回 18,000円（税込）' },
    options: ['通い放題デイタイム（11:00-17:00）24,980円（税込）', '単発 5,500円・パーソナル 8,980円（税込）', '入会金 30,000円（税込・期間限定で無料キャンペーン中）'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', '体幹強化', '健康維持', 'リフレッシュ'] },
    basicInfo: { hours: '月〜土 9:00-21:00／日・祝 9:00-18:00（公式・2026年11月14日確認）', closed: 'なし', facilities: ['ロッカー', 'リフォーマー完備'] },
  },
  {
    name: 'ELEMENT 池尻大橋店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=U11199J.1.V154352I.U1357808',
    image: '/images/studios/element.webp',
    price: '月8回 31,200円〜（税込）',
    trial: '体験トレーニング＋カウンセリング 3,300円（体験当日の入会で無料）',
    features: ['マンツーマン30分', 'パーソナルジム', '体験3,300円', '池尻大橋駅徒歩10分'],
    description: '1回30分のマンツーマン指導のパーソナルジムです。マシンピラティスは通い放題プランの契約者が月1回利用できます（公式・2026年11月14日確認）。公式の料金プランは月8回 31,200円・平日通い放題 38,280円・全日通い放題 43,780円（税込）で、月4回のプランはありません。',
    access: '東急田園都市線「池尻大橋駅」徒歩10分',
    address: '東京都目黒区青葉台3-12-7 モアリッシェル代官山青葉台 B1',
    popularPlan: { name: '月8回プラン', description: '30分のマンツーマン指導です（1日1回利用可能）。', price: '月8回 31,200円（税込）' },
    options: ['平日通い放題（10:00〜18:00）38,280円（税込）', '全日通い放題 43,780円（税込）', '入会金 33,000円'],
    userProfile: { ageRange: '20代〜40代が中心', purpose: ['ボディメイク', '体幹強化', '姿勢改善', '運動不足解消'] },
    basicInfo: { hours: '10:00〜22:00（公式・2026年11月14日確認）', closed: '公式サイトに記載なし', facilities: ['ロッカー', 'マシン完備'] },
  },
  {
    name: 'ピラティスK 中目黒店（池尻大橋の近隣）',
    officialUrl: 'https://t.afi-b.com/visit.php?a=O11543l-G384824n&p=E9887623',
    image: '/images/studios/pilates-k.webp',
    price: 'マンスリー4（月4回）13,420円（税込）',
    trial: '体験レッスン 0円',
    features: ['男女兼用', 'マシンピラティス', '中目黒駅徒歩2分', '池尻大橋に店舗なし'],
    description: 'ピラティスKは池尻大橋駅の近くに店舗がありません（公式の店舗一覧・2026年11月14日確認）。近い店舗は中目黒店で、ブランドで初めての男女兼用（ジェンダーフリー）スタジオです。リフォーマーを使ったグループレッスンで、月4回13,420円（税込）・別途施設維持費 月825円です。',
    access: '東急東横線「中目黒駅」徒歩2分',
    address: '東京都目黒区上目黒1-26-1 中目黒アトラスタワー 2F',
    popularPlan: { name: 'マンスリー4メンバー', description: 'マシンピラティスのグループレッスン月4回です。', price: '月4回 13,420円（税込）' },
    options: ['マンスリー8（月8回）16,170円（税込）', '施設維持費 月825円（税込）', '初期費用 13,530円（入会金5,500円＋登録料5,500円＋施設利用料2,530円・税込）', 'マンスリーデイは2026年5月1日以降 新規受付なし'],
    userProfile: { ageRange: '20代〜40代が中心', purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '美容'] },
    basicInfo: { hours: '火・水・金 10:00-13:30／17:30-22:00、木 17:30-22:00、土・祝 10:00-18:00、日 10:00-17:30', closed: '月曜日', facilities: ['ロッカー', 'リフォーマー完備', 'パウダールーム'] },
  },
]

const faqs = [
  { question: 'ピラティス初心者でも池尻大橋のスタジオに通えますか？', answer: 'はい、池尻大橋エリアのスタジオは初心者歓迎です。AruPilatesは産婦人科医監修で女性の身体に寄り添った指導、Habit Pilatesは最大5名の少人数制で丁寧な指導が受けられます。' },
  { question: '池尻大橋のピラティス料金相場はどのくらいですか？', answer: '公式サイトで確認した月額（税込）は、少人数グループのHabit Pilatesが月2回9,800円・月4回18,000円、ピラティスK 中目黒店（近隣）が月4回13,420円です。マンツーマンはYUZUが月4プラン31,200円、AruPilatesが月4回38,400円（5か月契約）、ELEMENT（パーソナルジム）が月8回31,200円です。体験はHabit Pilatesが0円（キャンペーン）、AruPilatesが1,000円、ELEMENTが3,300円、YUZUが5,500円です（2026年11月14日確認）。' },
  { question: '女性専用のスタジオはありますか？', answer: 'はい、AruPilatesは女性専用パーソナルスタジオで、産婦人科医監修のプログラムとウェア無料レンタルが魅力です。YUZUも女性向けパーソナル専門です。なお、近隣のピラティスK 中目黒店は男女兼用です。' },
  { question: 'マシンピラティスとマットピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷を調整しやすく、初心者向けです。Habit PilatesやピラティスKはマシンを使うグループレッスンです。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1〜2回（月4〜8回）がおすすめです。慣れたら週2〜3回に増やすと効果を実感しやすくなります。継続が大切です。' },
  { question: 'ピラティスで産後ケアはできますか？', answer: 'はい、AruPilatesは産婦人科医監修プログラムで産後ケアにも対応しています。YUZUも女性の身体に特化したパーソナルレッスンを提供しています。産後の骨盤矯正や体力回復に効果的です。' },
  { question: '体験レッスンの持ち物は？', answer: 'AruPilatesはウェア無料レンタルがあるので手ぶらで可能です。その他のスタジオは動きやすい服装と飲み物、滑り止め付き靴下があれば大丈夫です。' },
  { question: 'ピラティスとヨガの違いは？', answer: 'ピラティスは体幹強化が中心、ヨガは柔軟性とリラックスが中心です。池尻大橋エリアはピラティス専門スタジオが多く、効率的に体幹を鍛えたい方におすすめです。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'ELEMENT（パーソナルジム）は男性も利用できます。近隣のピラティスK 中目黒店は男女兼用です。AruPilatesは女性専用、YUZUは女性向けです。Habit Pilatesは公式の店舗ページで男女の利用条件を確認できませんでした（2026年11月14日確認）。' },
  { question: 'パーソナルとグループ、どちらがおすすめ？', answer: '産後ケアや身体の悩みを解決したい方にはAruPilatesやYUZUのパーソナルがおすすめです。料金重視ならピラティスKのグループです。Habit Pilatesは少人数制で両方の良さがあります。' },
]

export default function IkejiriOhashiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '池尻大橋', url: 'https://biyori-pilates.com/area/ikejiri-ohashi/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年11月14日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">ピラティス池尻大橋おすすめ5選<br className="hidden md:block" />人気スタジオの料金プランの比較</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">池尻大橋</span></nav></div></section>
        {/* 早見表（2026-11-14 公式照合） */}
        <section className="py-8 bg-white" id="by-station">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-xl md:text-2xl font-bold text-warm-900 mb-3">池尻大橋のピラティス 料金・体験の早見表</h2>
            <p className="text-warm-600 text-sm leading-relaxed mb-4">掲載5店の駅からの徒歩分・月額の下限・体験料金・入会時の費用を、各スタジオの公式サイトで確認しました（税込）。池尻大橋駅から徒歩5分以内はYUZU（1分）・AruPilates（3分）・Habit Pilates（5分）の3店です。ピラティスKは池尻大橋に店舗がなく、近い店舗は中目黒店です。</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead><tr className="bg-warm-800 text-white"><th className="px-3 py-3 text-left">スタジオ</th><th className="px-3 py-3 text-left">駅からの徒歩分</th><th className="px-3 py-3 text-left">月額の下限</th><th className="px-3 py-3 text-left">体験料金</th><th className="px-3 py-3 text-left">入会時・別途の費用</th></tr></thead>
                <tbody>
                <tr className="border-b border-warm-200"><td className="px-3 py-3 font-medium">パーソナルマシンピラティスYUZU 池尻大橋店</td><td className="px-3 py-3">池尻大橋駅 徒歩1分</td><td className="px-3 py-3">月4プラン 31,200円（1回あたり7,800円）</td><td className="px-3 py-3">5,500円</td><td className="px-3 py-3">入会金 22,000円（体験当日の入会で無料）</td></tr>
                <tr className="border-b border-warm-200 bg-warm-50"><td className="px-3 py-3 font-medium">AruPilates 池尻大橋（女性専用）</td><td className="px-3 py-3">池尻大橋駅 徒歩3分</td><td className="px-3 py-3">月2回 20,800円（5か月契約）／月4回 38,400円（5か月契約）</td><td className="px-3 py-3">初回60分 1,000円</td><td className="px-3 py-3">入会金 通常20,000円（体験当日の入会で0円）</td></tr>
                <tr className="border-b border-warm-200"><td className="px-3 py-3 font-medium">Habit Pilates studio 池尻大橋店（最大5名）</td><td className="px-3 py-3">池尻大橋駅 徒歩5分</td><td className="px-3 py-3">月2回 9,800円／月4回 18,000円</td><td className="px-3 py-3">0円（通常1,980円・体験当日のキャンペーン）</td><td className="px-3 py-3">入会金 30,000円（期間限定で無料）</td></tr>
                <tr className="border-b border-warm-200 bg-warm-50"><td className="px-3 py-3 font-medium">ELEMENT 池尻大橋店（パーソナルジム）</td><td className="px-3 py-3">池尻大橋駅 徒歩10分</td><td className="px-3 py-3">月8回 31,200円（月4回プランなし）</td><td className="px-3 py-3">3,300円（体験当日の入会で無料）</td><td className="px-3 py-3">入会金 33,000円</td></tr>
                <tr className="border-b border-warm-200"><td className="px-3 py-3 font-medium">ピラティスK 中目黒店（近隣・男女兼用）</td><td className="px-3 py-3">中目黒駅 徒歩2分</td><td className="px-3 py-3">月4回 13,420円</td><td className="px-3 py-3">0円</td><td className="px-3 py-3">初期費用 13,530円・施設維持費 月825円</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-500 text-xs mt-3">出典: <a href="https://yuzu-pilates.com/studios/ikejiriohashi/" target="_blank" rel="noopener noreferrer" className="underline">YUZU 池尻大橋店（公式）</a>・<a href="https://aru-pilates.jp/studios/ikejiri-ohashi/" target="_blank" rel="noopener noreferrer" className="underline">AruPilates 池尻大橋（公式）</a>・<a href="https://habit-pilates.com/studio/ikejiriohashi" target="_blank" rel="noopener noreferrer" className="underline">Habit Pilates 池尻大橋店（公式）</a>・<a href="https://element-gym.com/element-top/all/elementlp-ikejiri/" target="_blank" rel="noopener noreferrer" className="underline">ELEMENT 池尻大橋店（公式）</a>・<a href="https://pilates-k.jp/studio/tokyo/nakameguro" target="_blank" rel="noopener noreferrer" className="underline">ピラティスK 中目黒店（公式）</a>（いずれも2026年11月14日確認）。キャンペーンは期間限定のため、申し込む前に公式サイトでご確認ください。</p>
          </div>
        </section>

        <TableOfContents areaName="池尻大橋" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-warm-600 leading-relaxed mb-8">本ページでは、東急田園都市線「池尻大橋駅」周辺でおすすめのピラティススタジオ5選をまとめました。池尻大橋は渋谷まで1駅という好立地ながら、落ち着いた住宅街の雰囲気も持つバランスの良いエリアです。産婦人科医監修の女性専用スタジオから、少人数制のアットホームなスタジオまで幅広くご紹介します。</p>
          <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>池尻大橋でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>女性専用のパーソナルスタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>産後ケアに対応したスタジオを知りたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>少人数制で丁寧に指導してもらいたい</span></li></ul></div>
          <p className="text-warm-600 leading-relaxed">以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。</p>
        </div></section>
        <PriceComparisonTable studios={studios} areaName="池尻大橋" />
        <AreaMarketComparison studios={studios} areaName="池尻大橋" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">池尻大橋のおすすめピラティススタジオ5選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3><p className="text-warm-600 text-sm mb-4">月額1万円台以下から通えるスタジオです。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• Habit Pilates（月2回 9,800円・月4回 18,000円）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">女性専用パーソナル</h3><p className="text-warm-600 text-sm mb-4">産後ケアやボディメイクに適しています。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• AruPilates（産婦人科医監修）</li><li className="text-warm-700">• YUZU（有資格者40名以上）</li><li className="text-warm-700">• ELEMENT（30分パーソナル）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">少人数アットホーム</h3><p className="text-warm-600 text-sm mb-4">丁寧な指導を重視しています。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• Habit Pilates（最大5名少人数制）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50" id="price-market"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">池尻大橋のピラティス料金相場</h2><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">9,800円（月2回）〜18,000円（月4回）・ピラティスK 中目黒店 月4回13,420円</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">月4回 31,200円（YUZU）〜38,400円（AruPilates・5か月契約）</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">0円（Habit Pilates）〜5,500円（YUZU）</td></tr></tbody></table></div><p className="text-warm-600 mt-4 text-sm leading-relaxed">池尻大橋は渋谷まで田園都市線で1駅という好アクセスながら、落ち着いた住宅街の雰囲気を持つエリアです。AruPilatesやYUZUなど女性専用パーソナルスタジオが充実しているのが特徴です。三軒茶屋方面のスタジオも徒歩圏内なので、選択肢が広いのも魅力です。</p></div></section>
        <section className="py-16 bg-white" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">池尻大橋でスタジオを選ぶ際の注意点</h2><div className="space-y-6">
          <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">渋谷まで1駅のアクセスを活かす</h3><p className="text-warm-600 leading-relaxed">池尻大橋は渋谷まで田園都市線で1駅です。渋谷エリアのスタジオも選択肢に入れると、さらに幅広い選択ができます。通勤経路上のスタジオを選ぶと、継続しやすくなります。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">女性専用スタジオが豊富なエリア</h3><p className="text-warm-600 leading-relaxed">池尻大橋はAruPilates（女性専用）・YUZU（女性向け）などパーソナルのスタジオが充実しています。産後ケアやボディメイクなど目的に合わせて選べます。男性の方はELEMENTや、近隣のピラティスK 中目黒店（男女兼用）をご検討ください。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">近隣の三軒茶屋・中目黒も検討</h3><p className="text-warm-600 leading-relaxed"><Link href="/area/sangenjaya/" className="text-warm-700 underline hover:text-warm-900">三軒茶屋</Link>、<Link href="/area/nakameguro/" className="text-warm-700 underline hover:text-warm-900">中目黒</Link>、<Link href="/area/shibuya/" className="text-warm-700 underline hover:text-warm-900">渋谷</Link>も近隣です。複数エリアの体験レッスンを受けてみるのがおすすめです。</p></div>
        </div></div></section>
        <section className="py-16 bg-warm-50" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：AruPilatesはウェア無料レンタルがあります。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物</strong>：水500ml程度です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き）</strong>：マシンピラティスでは、着用が必須のことが多くあります。</span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>をお選びください。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>でフォーム確認です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>池尻大橋エリアの豆知識：</strong>池尻大橋は目黒川沿いの桜の名所としても知られ、春にはお花見を楽しむ方で賑わいます。おしゃれなカフェやベーカリーも多く、レッスン後のリフレッシュも楽しめるエリアです。AruPilatesはウェア無料レンタル付きで手ぶら通勤も可能です。</p></div></div></div></section>
        <section className="py-16 bg-white" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないピラティススタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">産後ケアならAruPilates、しなやかボディならYUZU、効率重視ならELEMENTです。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">少人数グループは月2回9,800円・月4回18,000円（Habit Pilates）、パーソナルは月4回31,200円（YUZU）〜です（税込・2026年11月14日確認）。無理なく続けられる予算でお選びください。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">体験料金はHabit Pilatesが0円（キャンペーン）、AruPilatesが1,000円、ELEMENTが3,300円、YUZUが5,500円です。AruPilatesはウェアレンタル付きで手ぶらで参加可能です。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">池尻大橋は渋谷まで1駅、三軒茶屋も隣駅です。通勤経路や生活圏に合わせてお選びください。</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-white" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は池尻大橋のおすすめピラティススタジオ5選をご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">池尻大橋は渋谷まで1駅ながら落ち着いた住宅街で、産婦人科医監修の女性専用スタジオAruPilatesや、有資格者40名以上が在籍するYUZUなど、女性向けの個性豊かなスタジオが揃っています。</p><p className="text-warm-600 leading-relaxed mb-6">本ページの情報を、スタジオ選びにお役立てください。</p><p className="text-warm-700 font-medium text-center">本ページが、ピラティススタジオ選びの参考になれば幸いです。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンのご予約</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスンは0円〜5,500円です（店舗ごとの金額は上の早見表をご覧ください）。<br />まずは体験レッスンへの参加をおすすめします。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="ikejiri-ohashi" areaName="池尻大橋" />

      <RelatedAreas currentSlug="ikejiri-ohashi" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
