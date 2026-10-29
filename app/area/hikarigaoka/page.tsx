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
  alternates: { canonical: 'https://biyori-pilates.com/area/hikarigaoka/' },
  title: 'ピラティス光が丘おすすめ5選｜光が丘駅・練馬駅・成増駅の駅別早見表と公式料金',
  description: '光が丘で通えるピラティススタジオ5か所を、光が丘駅・練馬駅・成増駅の駅別早見表で比較しています。光が丘駅徒歩13分のピラティス青空、練馬駅のCLUB PILATES・zen place、成増駅のRintosullなど、料金・体験は公式サイトで確認した情報（2026年10月17日）です。',
  keywords: 'ピラティス,光が丘,東京都練馬区,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティス青空',
    image: '/images/studios/default-studio.webp',
    price: '1回 10,000円／5回 46,500円／10回 88,000円（税表記なし）',
    trial: '体験レッスン＆カウンセリング 7,000円（初回限定）',
    features: ["光が丘駅徒歩13分", "完全予約制", "プライベートレッスン", "女性中心（男性は紹介のみ）"],
    description: '光が丘駅から徒歩13分の、完全予約制のプライベートピラティススタジオです。レッスンは体験・通常とも1回1時間で、1回10,000円、5回46,500円（使用期限3ヶ月）、10回88,000円（使用期限5ヶ月）、スタートアッププログラム10回83,000円（使用期限1ヶ月）です。男性は紹介のみ受け付けています。キャンセルは24時間前までで、それ以降はキャンセル料がかかります（公式サイト・税表記なし・2026年10月17日確認）。詳しい住所は予約時に案内されます。',
    access: '都営大江戸線「光が丘駅」徒歩13分',
    address: '東京都練馬区（詳しい住所は予約時に案内）',
    popularPlan: { name: '10回チケット', description: '1回1時間のプライベートレッスン10回分です（使用期限5ヶ月）。', price: '10回 88,000円（税表記なし）' },
    options: ['1回 10,000円', '5回 46,500円（使用期限3ヶ月）', 'スタートアッププログラム10回 83,000円（使用期限1ヶ月）', 'キャンセルは24時間前まで'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性中心（男性は紹介のみ）', purpose: ['姿勢改善', '不調の予防', '体の使い方の改善'] },
    basicInfo: { hours: '9:00〜18:30', closed: '水曜・木曜', facilities: ['プライベートスタジオ'] },
  },
  {
    name: 'Rintosull（リントスル）成増店',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683',
    image: '/images/studios/rintosull.webp',
    price: '月4回 8,800円（税込）',
    trial: '体験会 無料（約45分・ウェア/ソックス無料貸出）',
    features: ["成増駅南口徒歩30秒", "女性専用", "マシン（リフォーマー）グループ", "月4回8,800円"],
    description: 'ホットヨガLAVAのグループが展開する女性専用のマシンピラティススタジオです。東武東上線「成増駅」南口から徒歩30秒です。月会費は4・フルタイム（月4回）8,800円、ライト・フルタイム（成増店＋1店舗・通い放題）13,800円、プレミアム フリー・フルタイム（LAVA等の系列全店通い放題）16,800円で、別途運営管理費が月680円かかります（いずれも税込・公式店舗ページ・2026年10月17日確認）。光が丘駅からは路線が異なります（光が丘駅からはバス等）。',
    access: '東武東上線「成増駅」南口 徒歩30秒',
    address: '東京都板橋区成増2-12-6 成増駅前ビル 3F',
    popularPlan: { name: '4・フルタイム（月4回）', description: '週1ペースで通う人向けのプランです。', price: '月4回 8,800円（税込）' },
    options: ['ライト・フルタイム 13,800円（税込）', 'プレミアム フリー・フルタイム 16,800円（税込）', '1回券 3,300円', '運営管理費 月680円（税込）'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['姿勢改善', 'ボディメイク', '運動不足解消'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '毎週日曜・第4木曜', facilities: ['リフォーマー', '更衣室'] },
  },
  {
    name: 'CLUB PILATES 練馬店',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5805739&p_id=4728&pc_id=12432&pl_id=81224',
    image: '/images/studios/default-studio.webp',
    price: '月4回 13,090円／月8回 24,090円／通い放題 37,290円（公式店舗ページ・税表記なし）',
    trial: '体験レッスン 無料（30分）',
    features: ["練馬駅徒歩4分", "15種類の専用器具", "4段階のレベル", "男女とも利用可"],
    description: '世界で1000店舗以上を展開するマシンピラティススタジオです。15種類の専用器具と8種類のクラス、4段階のレベルがあります（公式サイト）。練馬駅から徒歩4分で、光が丘駅からは都営大江戸線で練馬駅まで乗り換えなしです。',
    access: '「練馬駅」徒歩4分（公式店舗ページ）',
    address: '〒176-0012 東京都練馬区豊玉北6-14-12 相原ビル2F',
    popularPlan: { name: 'グループ月4回プラン（EFT4）', description: '最大12名のマシングループレッスンです。', price: '月4回 13,090円（税表記なし）' },
    options: ['月8回 24,090円', '通い放題 37,290円', '入会金 5,500円・入会時の事務手数料 2,200円（税込）', '料金は公式の店舗ページ（2026年10月17日確認）'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '男女とも利用可', purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'] },
    basicInfo: { hours: '月〜金 7:00〜21:00／土日 7:00〜17:30', closed: '公式の営業時間表に定休日の記載なし', facilities: ['リフォーマー', 'チェア'] },
  },
  {
    name: 'zen place pilates 練馬スタジオ',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/default-studio.webp',
    price: '月4回 10,450円（税込・グレード01）',
    trial: '体験レッスン 1,000円（今だけ・公式表記）',
    features: ["練馬駅徒歩1分", "マット&マシン", "男女とも利用可", "他店利用に対応"],
    description: 'マットグループ・マシングループ・プライベートのあるピラティス専門スタジオです。西武池袋線「練馬駅」中央口出口・都営大江戸線「練馬駅」A2出口から徒歩1分です。マットグループ月4回は、10,450円（税込・グレード01）です（公式の料金ページ・2026年10月29日確認）。',
    access: '西武池袋線「練馬駅」中央口出口 徒歩1分／都営大江戸線「練馬駅」A2出口 徒歩1分',
    address: '東京都練馬区練馬1丁目4-4 練馬CRビル 5階',
    popularPlan: { name: 'マットグループ月4回', description: 'マットグループレッスンです。', price: '月4回 10,450円（税込・グレード01）' },
    options: ['体験レッスン 1,000円（今だけ・公式表記）', 'マシングループ・プライベートあり', '設備運営管理費 月550円（税込）'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '男女とも利用可', purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['マット', 'マシン'] },
  },
  {
    name: 'スポーツクラブNAS 光が丘（ピラティス・調整系プログラム）',
    image: '/images/studios/default-studio.webp',
    price: '会費は公式サイトでご確認ください',
    trial: '公式サイトでご確認ください',
    features: ["光が丘駅・光が丘IMA内", "総合型スポーツクラブ", "ピラティス・調整系プログラム"],
    description: '光が丘駅前の商業施設「光が丘IMA」イマミセ5Fにある総合型スポーツクラブです。ピラティス専門スタジオではありませんが、スタジオプログラムに「ピラティス・調整系」があります（公式サイト・2026年10月17日確認）。光が丘駅から最も近い選択肢です。',
    access: '都営大江戸線「光が丘駅」（光が丘IMA内）',
    address: '〒179-0072 東京都練馬区光が丘5-1-1 光が丘IMA イマミセ5F',
    options: ['スタジオプログラム「ピラティス・調整系」'],
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['スタジオ', 'マシンジム'] },
  },
]

const faqs = [
  { question: '光が丘駅の近くにピラティススタジオはある？', answer: '光が丘駅から徒歩13分のプライベートスタジオ「ピラティス青空」と、光が丘IMA内のスポーツクラブNAS 光が丘（ピラティス・調整系プログラム）があります。マシンのグループレッスンなら、大江戸線で乗り換えなしの練馬駅にCLUB PILATES 練馬店（徒歩4分）とzen place pilates 練馬スタジオ（徒歩1分）があります。' },
  { question: '光が丘・練馬の料金相場は？', answer: 'マシングループ月4回はRintosull 成増店が8,800円（税込）、CLUB PILATES 練馬店が13,090円（税表記なし）です。zen place 練馬のマットグループ月4回は10,450円（税込・グレード01）です。プライベートのピラティス青空は1回10,000円（税表記なし）です（各公式・2026年10月17日確認）。' },
  { question: '初心者におすすめは？', answer: 'CLUB PILATESは4段階のレベル分けがあり、Rintosullは公式で会員の87%以上がマシンピラティス未経験から始めていると案内されています。どちらも体験は無料です。' },
  { question: '男性が通えるスタジオは？', answer: 'CLUB PILATES 練馬店とzen place pilates 練馬スタジオは男女とも利用できます。ピラティス青空は男性は紹介のみ、Rintosullは女性専用です。' },
  { question: '無料体験ができるスタジオは？', answer: 'CLUB PILATES 練馬店（30分）とRintosull 成増店（約45分）の体験は無料です。zen place 練馬は体験1,000円（今だけ・公式表記）、ピラティス青空は体験7,000円（初回限定）です。' },
  { question: '体験レッスンの持ち物は？', answer: '動きやすい服装、飲み物、タオル、靴下です。Rintosullはウェアとソックスを無料で借りられます。' },
  { question: 'どのくらいの頻度で通えばいい？', answer: '初心者は週1〜2回が目安です。2〜3ヶ月継続することをおすすめします。' },
  { question: '練馬駅周辺のスタジオも選択肢に？', answer: '光が丘駅から練馬駅は都営大江戸線で乗り換えなしです。CLUB PILATES 練馬店とzen place pilates 練馬スタジオがあります。' },
  { question: 'ピラティスの効果は？', answer: '姿勢改善、体幹強化などです。2ヶ月を過ぎた頃から効果を実感される方が多くなっています。' },
]

export default function HikarigaokaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '光が丘', url: 'https://biyori-pilates.com/area/hikarigaoka/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年10月17日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">ピラティス光が丘おすすめ5選<br className="hidden md:block" />駅別早見表と公式料金の比較</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">光が丘</span></nav></div></section>
        <TableOfContents areaName="光が丘" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-600 leading-relaxed mb-8">本ページでは、光が丘・練馬エリアでおすすめのピラティススタジオ5選をまとめました。</p><div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>光が丘でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金を抑えられるスタジオを知りたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>駅近で通いやすいスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul></div><p className="text-warm-600 leading-relaxed">以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。</p></div></section>
        <section className="py-12 bg-white" id="by-station"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4 text-center">駅別の早見表｜光が丘駅・練馬駅・成増駅</h2><p className="text-warm-600 leading-relaxed mb-6 text-sm">徒歩分は各スタジオの公式サイトの表記です（2026年10月17日確認）。練馬駅は光が丘駅から都営大江戸線で乗り換えなし、成増駅は東武東上線で路線が異なります。</p><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">最寄り駅</th><th className="px-4 py-3 text-left">スタジオ</th><th className="px-4 py-3 text-left">駅からの距離</th><th className="px-4 py-3 text-left">形式・料金の目安</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium" rowSpan={2}>都営大江戸線 光が丘駅</td><td className="px-4 py-3">スポーツクラブNAS 光が丘（総合型クラブ）</td><td className="px-4 py-3">光が丘IMA内</td><td className="px-4 py-3">スタジオプログラム「ピラティス・調整系」</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3">ピラティス青空（完全予約制）</td><td className="px-4 py-3">徒歩13分</td><td className="px-4 py-3">プライベート／1回 10,000円（税表記なし）</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium" rowSpan={2}>練馬駅（大江戸線・西武池袋線）</td><td className="px-4 py-3">zen place pilates 練馬スタジオ</td><td className="px-4 py-3">徒歩1分</td><td className="px-4 py-3">マット・マシン／マット月4回 10,450円（税込・グレード01）</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3">CLUB PILATES 練馬店</td><td className="px-4 py-3">徒歩4分</td><td className="px-4 py-3">マシン・グループ／月4回 13,090円（税表記なし）</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">東武東上線 成増駅</td><td className="px-4 py-3">Rintosull 成増店（女性専用）</td><td className="px-4 py-3">南口 徒歩30秒</td><td className="px-4 py-3">マシン・グループ／月4回 8,800円（税込）</td></tr></tbody></table></div></div></section>
        <PriceComparisonTable studios={studios} areaName="光が丘" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">光が丘のおすすめピラティススタジオ5選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white" id="price-market"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">光が丘のピラティス料金相場</h2><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">8,800円〜13,090円（マシン）</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">1回 10,000円（ピラティス青空）</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">0円〜1,000円</td></tr></tbody></table></div><p className="text-warm-600 mt-4 text-sm leading-relaxed">光が丘エリアは地元のプライベートスタジオと練馬駅周辺の大手スタジオの両方が選択肢です。大江戸線で練馬駅へ約5分と近く、選択肢が豊富です。</p></div></section>
        <section className="py-16 bg-warm-50" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">光が丘でスタジオを選ぶ際の注意点</h2><div className="space-y-6"><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">光が丘と練馬駅の移動手段を確認</h3><p className="text-warm-600 leading-relaxed">光が丘駅から練馬駅は都営大江戸線で乗り換えなしです。成増駅は東武東上線で路線が異なるため、バスなど通いやすいルートをご確認ください。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">プライベートスタジオは予約必須</h3><p className="text-warm-600 leading-relaxed">光が丘の個人スタジオは、完全予約制のところが大半です。希望日時の予約が取れるかご確認ください。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">練馬駅周辺の大手も検討</h3><p className="text-warm-600 leading-relaxed">CLUB PILATESやzen placeなど、練馬駅周辺の大手スタジオも選択肢に含めてご検討ください。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">体験レッスンで雰囲気を確認</h3><p className="text-warm-600 leading-relaxed">個人スタジオと大手ではレッスンの雰囲気が大きく異なります。複数体験してから決めることをおすすめします。</p></div></div></div></section>
        <section className="py-16 bg-white" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：水分補給用です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：グリップソックスが適しています。</span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>をお選びください。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>でフォームを確認しやすくなります。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>対応のスタジオもあります。事前にご確認ください。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>光が丘エリアの豆知識：</strong>光が丘は緑豊かな住宅街です。レッスン後は光が丘公園を散歩するのもリフレッシュになります。</p></div></div></div></section>
        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">プライベート</h3><p className="text-warm-600 text-sm mb-4">おすすめスタジオ</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• ピラティス青空（光が丘駅徒歩13分・完全予約制）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">大手チェーン</h3><p className="text-warm-600 text-sm mb-4">おすすめスタジオ</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• CLUB PILATES（世界最大級）</li><li className="text-warm-700">• zen place（全国150店舗）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">費用対効果</h3><p className="text-warm-600 text-sm mb-4">おすすめスタジオ</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• Rintosull 成増店（月4回 8,800円・税込）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50" id="frequency"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1〜2回から始めることをおすすめします。最低2〜3ヶ月継続で効果を実感できます。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2〜3回が目安です。3〜6ヶ月で目に見える変化が期待できます。</p><h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3><p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続することをおすすめします。</p></div></div></section>
        <section className="py-16 bg-white" id="price-guide"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">グループ</h3><p className="text-3xl font-bold text-warm-800 mb-4">月4回</p><p className="text-sm text-warm-600 mb-4">8,800円〜13,090円</p></div><div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50"><div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div><h3 className="text-lg font-bold text-warm-900 mb-2">パーソナル</h3><p className="text-3xl font-bold text-warm-800 mb-4">個別指導</p><p className="text-sm text-warm-600 mb-4">1回 10,000円（ピラティス青空）</p></div><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">体験</h3><p className="text-3xl font-bold text-warm-800 mb-4">まずはここから</p><p className="text-sm text-warm-600 mb-4">0円〜1,000円</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">マシングループ月4回はRintosull 成増店の8,800円（税込）から、CLUB PILATES 練馬店は13,090円（税表記なし）です。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">CLUB PILATESは無料体験30分です。zen placeは1,000円体験です。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">光が丘エリアの地元スタジオか、大江戸線で練馬駅の大手スタジオか選べます。</p></div></div></div></section>
        <section className="py-16 bg-white" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-warm-50" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">本ページでは、光が丘エリアのおすすめピラティススタジオについてご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">本ページでは、光が丘にあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。</p><p className="text-warm-600 leading-relaxed mb-6">本ページの情報を、スタジオ選びにお役立てください。</p><p className="text-warm-700 font-medium text-center">本ページが、ピラティススタジオ選びの参考になれば幸いです。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンのご予約</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜です。<br />まずは体験レッスンへの参加をおすすめします。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="hikarigaoka" areaName="光が丘" />

      <RelatedAreas currentSlug="hikarigaoka" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
