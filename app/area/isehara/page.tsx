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
import { AreaConclusion } from '@/components/AreaConclusion'

export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/isehara/' },
  title: '伊勢原のピラティス・マシンピラティスおすすめ｜駅徒歩・体験料金で比較',
  description: '伊勢原でマシンピラティスに通える駅近スタジオを、伊勢原駅からの徒歩分・体験料金・営業時間・定休日・マシン/マットの区分で比較。各値は公式サイトで2026年10月25日に確認しています。',
  keywords: 'ピラティス,伊勢原,神奈川県伊勢原市,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'HARMONIE（アルモニ）伊勢原',
    image: '/images/studios/default-studio.webp',
    price: '要問合せ',
    trial: '体験レッスンあり',
    features: ["月160本レッスン", "10代〜70代", "男女とも利用可", "見晴らし良好"],
    description: '月160本以上のヨガ・ピラティスレッスンです。10代から70代まで男女が通います。定員8名の見晴らしの良いスタジオです。',
    access: '伊勢原駅徒歩12分',
    address: '神奈川県伊勢原市（伊勢原駅徒歩12分）',
    popularPlan: { name: 'ヨガ&ピラティス', description: '月160本以上の豊富なレッスンです。', price: '要問合せ（公式サイト参照）' },
    options: ['体験レッスンあり', '各種プラン', '詳細は公式サイト参照'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
  {
    name: 'eneインナービューティ',
    image: '/images/studios/default-studio.webp',
    price: '要問合せ',
    trial: '体験レッスンあり',
    features: ["予約制プライベート", "美脚美姿勢", "女性向け", "駅徒歩3分"],
    description: '伊勢原駅北口徒歩3分の予約制プライベートサロンです。美脚美姿勢をテーマにした女性向けピラティスです。',
    access: '伊勢原駅北口徒歩3分',
    address: '神奈川県伊勢原市（伊勢原駅北口徒歩3分）',
    popularPlan: { name: 'プライベートレッスン', description: '美脚美姿勢のプライベートです。', price: '要問合せ（公式サイト参照）' },
    options: ['体験レッスンあり', '各種プラン', '詳細は公式サイト参照'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
  {
    name: 'ALA Dance Studio',
    image: '/images/studios/default-studio.webp',
    price: '要問合せ',
    trial: '体験レッスンあり',
    features: ["ダンス併設", "グループ月4回", "プライベートあり", "駅徒歩5分"],
    description: 'ダンスメインのスタジオにピラティスメニューがあります。グループ月4回×50分です。プライベートレッスンも対応しています。',
    access: '伊勢原駅徒歩5分',
    address: '神奈川県伊勢原市（伊勢原駅徒歩5分）',
    popularPlan: { name: 'グループレッスン', description: '月4回×50分のグループです。', price: '要問合せ（公式サイト参照）' },
    options: ['体験レッスンあり', '各種プラン', '詳細は公式サイト参照'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
  {
    name: 'セントラルスポーツ ジムスタ 伊勢原駅前',
    image: '/images/studios/default-studio.webp',
    price: '月額制',
    trial: '体験レッスンあり',
    features: ["総合フィットネス", "ジム&スタジオ", "ピラティス", "駅前"],
    description: '伊勢原駅前の総合フィットネスです。ピラティステクニックの効果を体を動かしながら感じる「フィール」レッスンです。',
    access: '伊勢原駅前',
    address: '神奈川県伊勢原市（伊勢原駅前）',
    popularPlan: { name: 'スタジオレッスン', description: 'ピラティス「フィール」レッスンです。', price: '月額制（公式サイト参照）' },
    options: ['体験レッスンあり', '各種プラン', '詳細は公式サイト参照'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
  {
    name: 'トータルフィットネススタジオファースト',
    image: '/images/studios/default-studio.webp',
    // 公式 https://www.totalfitnessstudiofirst.jp/ で確認（2026-10-25）: 住所・営業時間・定休日・体験料・月会費。ピラティスはマットのグループ（マシンピラティスの記載なし）
    price: '月会費 4,400円（学生）〜14,300円（税込）',
    trial: '体験 2,200円（30分のパーソナルトレーニングかレッスン体験・税込・公式表記・2026年10月25日確認）',
    features: ["ヨガ&ピラティス", "マシントレーニング", "多料金プラン", "学生可"],
    description: 'ヨガ・ピラティス・パーソナルトレーニングの総合スタジオです。ピラティスはマットのグループレッスンで、公式サイトにマシンピラティスの記載はありません。月会費はレギュラー9,350円・デイ7,700円・ナイター5,500円・学生（高校生〜大学生）4,400円と料金プランが豊富です（税込・2026年10月25日確認）。',
    access: '公式サイトは地図での案内（伊勢原駅からの徒歩分の記載なし）',
    address: '神奈川県伊勢原市沼目3-10-36（メディカルケアパーク伊勢原 内）',
    popularPlan: { name: 'レギュラー会員', description: '10:00〜20:00の営業時間内にマットピラティスなどのレッスンを利用できます。', price: '月会費 9,350円（税込）' },
    options: ['体験 2,200円（30分）', 'デイ会員 7,700円/月・ナイター会員 5,500円/月', 'パーソナル 30分 3,080円（会員価格）'],
    userProfile: { ageRange: '20代〜50代が中心', purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'] },
    basicInfo: { hours: '10:00〜20:00', closed: '木曜・日曜・祝日', facilities: ['マット（グループのマットピラティス）', 'トレーニングマシン', 'パーソナルトレーニング'] },
  },
]

const faqs = [
  { question: '伊勢原で初心者におすすめは？', answer: 'HARMONIEは幅広い年代が通います。セントラルスポーツは駅前で気軽に始められます。' },
  { question: '伊勢原の料金相場は？', answer: '公式表記（2026年10月25日確認・税込）では、マシンの少人数制 Pilates Mee Life 伊勢原店が月4回 14,800円、マシンのパーソナル IGNITE 伊勢原店が月4回 31,800円、マットのグループがあるトータルフィットネススタジオファーストがレギュラー会員 月9,350円です。' },
  { question: '伊勢原でマシンピラティスができるスタジオは？', answer: '伊勢原駅から徒歩2分の IGNITE 伊勢原店（パーソナル）、北口徒歩3分のピース（マシン×整体のマンツーマン）、徒歩4分の Pilates Mee Life 伊勢原店（5人制の少人数）があります（各公式サイト・2026年10月25日確認）。体験は Pilates Mee Life が初回0円、ピースが50分3,300円です。' },
  { question: '男性が通えるスタジオは？', answer: 'HARMONIE、セントラルスポーツ、ファーストは男性利用可能です。' },
  { question: '伊勢原駅から近いスタジオは？', answer: 'eneインナービューティは北口徒歩3分、ALA Danceは徒歩5分です。' },
  { question: '体験レッスンの持ち物は？', answer: '動きやすい服装、飲み物、タオル、靴下です。' },
  { question: '車で通えるスタジオは？', answer: '伊勢原は車で移動される方も少なくありません。各スタジオの駐車場情報をご確認ください。' },
  { question: 'どのくらいの頻度で通えばいい？', answer: '初心者は週1〜2回が目安です。2〜3ヶ月継続することをおすすめします。' },
  { question: '学生でも通える？', answer: 'トータルフィットネススタジオファーストには学生会員（高校生〜大学生）月4,400円があります（公式・2026年10月25日確認）。' },
  { question: '本厚木のスタジオも検討すべき？', answer: '伊勢原から本厚木は小田急線で2駅（愛甲石田の次）です。選択肢が広がります。' },
  { question: 'ピラティスの効果は？', answer: '姿勢改善、体幹強化などです。2ヶ月を過ぎた頃から効果を実感される方が多くなっています。' },
]

export default function IseharaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '伊勢原', url: 'https://biyori-pilates.com/area/isehara/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年10月25日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">ピラティス伊勢原おすすめ5選<br className="hidden md:block" />マシンピラティスの体験料金・駅徒歩も比較</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">伊勢原</span></nav></div></section>
        <AreaConclusion studios={studios} areaName="伊勢原" />


        <TableOfContents areaName="伊勢原" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-600 leading-relaxed mb-8">本ページでは、伊勢原エリアでおすすめのピラティススタジオ5選をまとめました。</p><div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>伊勢原でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金を抑えられるスタジオを知りたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>駅近で通いやすいスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul></div><p className="text-warm-600 leading-relaxed">以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。</p></div></section>
        <section className="py-12 bg-white" id="by-station"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4 text-center">伊勢原駅からの徒歩分で比べるマシンピラティス早見表</h2><p className="text-warm-600 leading-relaxed mb-6 text-sm">「伊勢原 マシンピラティス」で探す方向けに、伊勢原駅周辺でリフォーマーなどのマシンを使うスタジオを駅から近い順に並べ、比較用にマットのグループがあるトータルフィットネススタジオファーストを加えました。徒歩分・住所・体験料金・営業時間・定休日は各スタジオの公式サイトの表記です（2026年10月25日確認・税込）。下の5選の掲載店とは一部異なります。</p><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">スタジオ（住所）</th><th className="px-4 py-3 text-left">伊勢原駅から</th><th className="px-4 py-3 text-left">マシン/マット・形式</th><th className="px-4 py-3 text-left">体験</th><th className="px-4 py-3 text-left">営業時間・定休日</th></tr></thead><tbody>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">パーソナルピラティススタジオ IGNITE 伊勢原店（桜台1-21-1）</td><td className="px-4 py-3">徒歩2分</td><td className="px-4 py-3">マシン・パーソナル（50分）</td><td className="px-4 py-3">無料体験の告知あり（実施期間の表記が公式内で不統一のため要確認）</td><td className="px-4 py-3">9:00〜21:00（平日・土日祝）／定休日の記載なし</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">Pilates&amp;Conditioning Studio ピース（伊勢原1-18-5 細野ビル201）</td><td className="px-4 py-3">北口 徒歩3分</td><td className="px-4 py-3">マシン（リフォーマー・チェア等）×整体・マンツーマン</td><td className="px-4 py-3">体験トレーニング（50分）3,300円・入会金/事務手数料 無料</td><td className="px-4 py-3">月〜金 11:00〜20:00・土 10:00〜18:00／日曜休み</td></tr>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">Pilates Mee Life 伊勢原店（桜台1-12-3 小瀬村ビル3F）</td><td className="px-4 py-3">徒歩4分</td><td className="px-4 py-3">マシン・5人制の少人数（Pilates Meeとは別業態）</td><td className="px-4 py-3">初回体験 0円</td><td className="px-4 py-3">9:00〜21:15／不定休</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">トータルフィットネススタジオファースト（沼目3-10-36 メディカルケアパーク伊勢原内）</td><td className="px-4 py-3">徒歩分の記載なし（地図で案内）</td><td className="px-4 py-3">マット・グループ（マシンピラティスの記載なし）</td><td className="px-4 py-3">2,200円（30分）</td><td className="px-4 py-3">10:00〜20:00／木曜・日曜・祝日休み</td></tr>
        </tbody></table></div><h3 className="text-lg font-bold text-warm-900 mt-8 mb-3">月額の目安（公式表記・2026年10月25日確認）</h3><ul className="text-warm-600 text-sm leading-relaxed space-y-1 list-disc pl-5"><li>IGNITE 伊勢原店：ピラティス50分 月2回 17,000円・月4回 31,800円・月6回 45,000円（ウェア上下・靴下レンタル 220円）</li><li>Pilates Mee Life 伊勢原店：月2回 8,800円・月4回 14,800円・月8回 22,000円・通い放題 24,600円</li><li>ピース：公式トップに月額プランの記載なし（体験時に要確認）</li><li>トータルフィットネススタジオファースト：レギュラー 9,350円・デイ 7,700円・ナイター 5,500円・学生 4,400円</li></ul><p className="text-warm-600 leading-relaxed mt-4 text-sm">マシンピラティスを少人数で安く続けたい場合は Pilates Mee Life（月4回 14,800円）、マンツーマンでマシンを使いたい場合は IGNITE・ピースが候補です。3店とも伊勢原駅から徒歩4分以内なので、仕事帰りや買い物ついでにも通えます。選択肢を広げたい方は、小田急線で2駅先（愛甲石田の次）の<Link href="/area/honatsugi/" className="text-warm-700 underline hover:text-warm-900">本厚木</Link>や、<Link href="/area/hiratsuka/" className="text-warm-700 underline hover:text-warm-900">平塚</Link>のページもあわせてご覧ください。HARMONIE・eneインナービューティ・ALA Dance Studio・セントラルスポーツ ジムスタ 伊勢原駅前は、本日公式ページで値を確認できなかったため早見表に入れていません。</p></div></section>

        <PriceComparisonTable studios={studios} areaName="伊勢原" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">伊勢原のおすすめピラティススタジオ5選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>
        <section className="py-16 bg-white" id="price-market"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">伊勢原のピラティス料金相場（2026年10月25日確認）</h2><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">マシン少人数 14,800円（Pilates Mee Life）／マットはファーストの月会費 9,350円</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">マシン 月2回 17,000円〜（IGNITE）</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">0円（Pilates Mee Life）〜3,300円（ピース）</td></tr></tbody></table></div><p className="text-warm-600 mt-4 text-sm leading-relaxed">伊勢原は小田急小田原線の駅で丹沢のふもとに位置しています。地元密着型のスタジオが中心で、HARMONIEの月160本レッスンは圧倒的な選択肢の多さです。本厚木までは小田急線で2駅なので選択肢も広がります。</p></div></section>
        <section className="py-16 bg-warm-50" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">伊勢原でスタジオを選ぶ際の注意点</h2><div className="space-y-6"><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">伊勢原はスタジオ数が限られる</h3><p className="text-warm-600 leading-relaxed">専門ピラティススタジオは少なめです。ヨガとピラティス両方できるスタジオをご活用ください。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">本厚木・秦野のスタジオも選択肢に</h3><p className="text-warm-600 leading-relaxed">伊勢原から小田急線で本厚木は2駅（愛甲石田の次）、秦野は3駅（鶴巻温泉・東海大学前の次）です。小田急線沿線で選択肢を広げてご検討ください。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">車での来店は駐車場を確認</h3><p className="text-warm-600 leading-relaxed">駅周辺のコインパーキングや、スタジオの駐車場情報を事前にご確認ください。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">体験レッスンで相性を確認</h3><p className="text-warm-600 leading-relaxed">スタジオごとに雰囲気が異なります。複数体験してから決めることをおすすめします。</p></div></div></div></section>
        <section className="py-16 bg-white" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：水分補給用です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：グリップソックスが適しています。</span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>をお選びください。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>でフォームを確認しやすくなります。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>対応のスタジオもあります。事前にご確認ください。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>伊勢原エリアの豆知識：</strong>伊勢原は丹沢のふもとの自然豊かなエリアです。ピラティスで整えた身体でハイキングも楽しめます。</p></div></div></div></section>
        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">豊富なレッスン</h3><p className="text-warm-600 text-sm mb-4">おすすめスタジオ</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• HARMONIE（月160本以上）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">駅近プライベート</h3><p className="text-warm-600 text-sm mb-4">おすすめスタジオ</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• eneインナービューティ（駅徒歩3分）</li></ul></div><div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">総合フィットネス</h3><p className="text-warm-600 text-sm mb-4">おすすめスタジオ</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• セントラルスポーツ（駅前）</li><li className="text-warm-700">• ファースト（学生プランあり）</li></ul></div></div></div></section>
        <section className="py-16 bg-warm-50" id="frequency"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1〜2回から始めることをおすすめします。最低2〜3ヶ月継続で効果を実感できます。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2〜3回が目安です。3〜6ヶ月で目に見える変化が期待できます。</p><h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3><p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続することをおすすめします。</p></div></div></section>
        <section className="py-16 bg-white" id="price-guide"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">グループ</h3><p className="text-3xl font-bold text-warm-800 mb-4">月4回</p><p className="text-sm text-warm-600 mb-4">月額制中心</p></div><div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50"><div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div><h3 className="text-lg font-bold text-warm-900 mb-2">パーソナル</h3><p className="text-3xl font-bold text-warm-800 mb-4">個別指導</p><p className="text-sm text-warm-600 mb-4">要問合せ</p></div><div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">体験</h3><p className="text-3xl font-bold text-warm-800 mb-4">まずはここから</p><p className="text-sm text-warm-600 mb-4">体験あり</p></div></div></div></section>
        <section className="py-16 bg-warm-50" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8"><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">月額制が中心です。ファーストは学生プランもあります。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">各スタジオで体験を実施中です。2〜3ヶ所は体験してから決めることをおすすめします。</p></div><div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">伊勢原駅周辺にスタジオが集中しています。本厚木も小田急線で2駅の距離にあります。</p></div></div></div></section>
        <section className="py-16 bg-white" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>
        <section className="py-16 bg-warm-50" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">本ページでは、伊勢原エリアのおすすめピラティススタジオについてご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">本ページでは、伊勢原にあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。</p><p className="text-warm-600 leading-relaxed mb-6">本ページの情報を、スタジオ選びにお役立てください。</p><p className="text-warm-700 font-medium text-center">本ページが、ピラティススタジオ選びの参考になれば幸いです。</p></div></section>
        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンのご予約</h2><p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜です。<br />まずは体験レッスンへの参加をおすすめします。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="isehara" areaName="伊勢原" />

      <RelatedAreas currentSlug="isehara" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
