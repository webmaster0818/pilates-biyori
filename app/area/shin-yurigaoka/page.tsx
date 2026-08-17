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
  alternates: { canonical: 'https://biyori-pilates.com/area/shin-yurigaoka/' },
  title: '【2026年8月最新】ピラティス新百合ヶ丘おすすめ5選！人気スタジオの料金プランを簡単比較！',
  description: '新百合ヶ丘エリアのおすすめピラティススタジオ5選を徹底比較。zen place pilates 新百合ヶ丘・pilates K 新百合ヶ丘店・sincere pilates 新百合ヶ丘など実在スタジオの料金・体験レッスン・アクセスを完全ガイド。',
  keywords: 'ピラティス,新百合ヶ丘,川崎市麻生区,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 新百合ヶ丘',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月4回 13,200円〜',
    trial: '体験レッスン 1,000円',
    features: ['全国展開大手', 'マット&マシン完備', '新百合ヶ丘駅徒歩3分', '男女共用'],
    description: '全国130店舗以上展開の大手。小田急線「新百合ヶ丘駅」南口徒歩3分。マット・マシン・プライベート対応。',
    access: '小田急線「新百合ヶ丘駅」南口徒歩3分',
    address: '神奈川県川崎市麻生区万福寺（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '全国展開大手プラン',
      description: '全国130店舗以上展開の大手。小田急線「新百合ヶ丘駅」南口徒歩3分。マット・マシン・プライベート対応。',
      price: '月4回 13,200円〜',
    },
    options: ['全国展開大手', 'マット&マシン完備', '新百合ヶ丘駅徒歩3分', '男女共用', '体験レッスン 1,000円'],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'pilates K 新百合ヶ丘店',
    image: '/images/studios/pilates-k.webp',
    price: '月4回 11,220円〜',
    trial: '体験レッスン 0円',
    features: ['女性専用', 'マシンピラティス専門', '体験0円', '駅近'],
    description: '女性専用マシンピラティス専門。体験0円。月4回11,220円〜。',
    access: '小田急線「新百合ヶ丘駅」から徒歩圏内',
    address: '神奈川県川崎市麻生区（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '女性専用プラン',
      description: '女性専用マシンピラティス専門。体験0円。月4回11,220円〜。',
      price: '月4回 11,220円〜',
    },
    options: ['女性専用', 'マシンピラティス専門', '体験0円', '駅近', '体験レッスン 0円'],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'sincere pilates 新百合ヶ丘',
    image: '/images/studios/zen-place-pilates.webp',
    price: '1回約2,300円〜',
    trial: '体験レッスン 1,000円',
    features: ['グループ&マンツーマン', 'マットピラティス', '体験1,000円', 'アットホーム'],
    description: 'グループとマンツーマンに対応。体験1,000円。1回約2,300円〜のリーズナブルな料金。',
    access: '小田急線「新百合ヶ丘駅」から徒歩圏内',
    address: '神奈川県川崎市麻生区（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'グループ&マンツーマンプラン',
      description: 'グループとマンツーマンに対応。体験1,000円。1回約2,300円〜のリーズナブルな料金。',
      price: '1回約2,300円〜',
    },
    options: ['グループ&マンツーマン', 'マットピラティス', '体験1,000円', 'アットホーム', '体験レッスン 1,000円'],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'PERSONAL TRAINING STUDIO U 新百合ヶ丘',
    image: '/images/studios/element.webp',
    price: 'パーソナルレッスン（公式サイトで確認）',
    trial: '体験レッスンあり',
    features: ['パーソナル専門', 'ピラティス×トレーニング', '駅徒歩2分', '完全マンツーマン'],
    description: '新百合ヶ丘駅徒歩2分のパーソナルジム。ピラティス×トレーニングの複合プログラム。',
    access: '小田急線「新百合ヶ丘駅」から徒歩2分',
    address: '神奈川県川崎市麻生区（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナル専門プラン',
      description: '新百合ヶ丘駅徒歩2分のパーソナルジム。ピラティス×トレーニングの複合プログラム。',
      price: 'パーソナルレッスン（公式サイトで確認）',
    },
    options: ['パーソナル専門', 'ピラティス×トレーニング', '駅徒歩2分', '完全マンツーマン', '体験レッスンあり'],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Rintosull 新百合ヶ丘エリア（小田急沿線）',
    image: '/images/studios/rintosull.webp',
    price: 'プレミアムプラン 月額10,978円（税込）',
    trial: '体験無料キャンペーン実施中',
    features: ['女性専用', 'マシンピラティス', '体験無料', 'LAVA系列'],
    description: 'LAVA系列の女性専用マシンピラティス。小田急沿線の店舗利用可能。体験無料キャンペーン中。',
    access: '小田急線沿線の店舗を利用可能',
    address: '小田急線沿線各店舗（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '女性専用プラン',
      description: 'LAVA系列の女性専用マシンピラティス。小田急沿線の店舗利用可能。体験無料キャンペーン中。',
      price: 'プレミアムプラン 月額10,978円（税込）',
    },
    options: ['女性専用', 'マシンピラティス', '体験無料', 'LAVA系列', '体験無料キャンペーン実施中'],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '更衣室', 'ロッカー'],
    },
  }
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！新百合ヶ丘エリアのスタジオは初心者歓迎がほとんど。zen place pilates 新百合ヶ丘は全国展開大手で安心。まずは体験レッスンから始めてみましょう。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマーなどの専用マシンを使います。マシンはバネで負荷調整ができ初心者にもおすすめ。新百合ヶ丘エリアではマシンピラティス対応スタジオが充実しています。' },
  { question: '新百合ヶ丘のピラティスの料金相場は？', answer: 'zen place pilates 新百合ヶ丘は月4回 13,200円〜、pilates K 新百合ヶ丘店は月4回 11,220円〜、sincere pilates 新百合ヶ丘は1回約2,300円〜。目的と頻度に合わせて選びましょう。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1〜2回がおすすめ。慣れてきたら週2〜3回に。最低2〜3ヶ月は継続しましょう。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルを鍛えて基礎代謝が上がり、太りにくい体質に変わります。2〜3ヶ月の継続で効果を実感する方が多いです。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。zen place pilates 新百合ヶ丘は体験レッスン 1,000円、pilates K 新百合ヶ丘店は体験レッスン 0円。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'zen place pilates 新百合ヶ丘、sincere pilates 新百合ヶ丘、PERSONAL TRAINING STUDIO U 新百合ヶ丘は男性もOKです。は女性専用です。' },
  { question: '新百合ヶ丘駅からのアクセスは？', answer: '新百合ヶ丘駅は小田急小田原線・多摩線が利用でき、新宿まで小田急線快速急行で約25分。各スタジオとも駅から徒歩圏内でアクセス良好です。' },
  { question: 'パーソナルレッスンを受けたいのですが？', answer: 'PERSONAL TRAINING STUDIO U 新百合ヶ丘がパーソナルレッスンに対応しています。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '個人差はありますが、2ヶ月を過ぎた頃から変化を実感する方が多いです。週1〜2回で最低2〜3ヶ月の継続がおすすめです。' },
]

export default function ShinYurigaokaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '新百合ヶ丘', url: 'https://pilates-biyori.com/area/shin-yurigaoka/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年08月18日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス新百合ヶ丘おすすめ5選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">新百合ヶ丘</span></nav></div></section>
        <TableOfContents areaName="新百合ヶ丘" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p><p className="text-warm-600 leading-relaxed mb-6">「新百合ヶ丘で人気のピラティススタジオを知りたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">新百合ヶ丘は小田急小田原線・多摩線が利用でき、新宿まで小田急線快速急行で約25分の好アクセスエリア。芸術の街として知られ、昭和音楽大学や川崎市アートセンターなどの文化施設が充実。小田急線の快速急行停車駅で新宿へのアクセスも良好。そんな新百合ヶ丘エリアには、多彩なピラティススタジオが揃っています。</p>
            <p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、新百合ヶ丘エリアでおすすめの実在するピラティススタジオ5選をまとめました。</p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>新百合ヶ丘でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>コスパの良いスタジオを知りたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>小田急小田原線・多摩線沿線で通いやすいスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul></div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>
        <PriceComparisonTable studios={studios} areaName="新百合ヶ丘" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">新百合ヶ丘のおすすめピラティススタジオ5選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>

        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">新百合ヶ丘のピラティス料金相場【2026年4月最新】</h2>
            <div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">8,800円〜13,200円</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">1回 4,400円〜9,900円</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">無料〜2,200円</td></tr></tbody></table></div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">新百合ヶ丘エリアは都心と比較して料金がリーズナブルな傾向。近隣の<a href="/area/tama-plaza/">たまプラーザ</a>や<a href="/area/machida/">町田</a>エリアと合わせて検討するのもおすすめです。</p>
          </div>
        </section>

        <section className="py-16 bg-warm-50" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">新百合ヶ丘でスタジオを選ぶ際の注意点</h2><div className="space-y-6">
          <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">駅からのアクセスを事前確認</h3><p className="text-warm-600 leading-relaxed">新百合ヶ丘駅は小田急小田原線・多摩線が乗り入れます。各スタジオとも駅から徒歩圏内ですが、初回訪問時は余裕を持って出発し、ルートを確認しておきましょう。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">女性専用と男女共用の違いに注意</h3><p className="text-warm-600 leading-relaxed">新百合ヶ丘エリアには女性専用スタジオと男女共用スタジオの両方があります。カップルで通いたい場合は男女共用を、女性だけの環境を希望する方は女性専用を選びましょう。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">郊外エリアのスタジオ数に注意</h3><p className="text-warm-600 leading-relaxed">新百合ヶ丘は都心と比べてスタジオの選択肢が限られるため、人気の時間帯は予約が埋まりやすい場合があります。早めの予約がおすすめ。沿線の他駅のスタジオも選択肢に入れましょう。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">体験レッスンで複数比較を</h3><p className="text-warm-600 leading-relaxed">スタジオの雰囲気やインストラクターとの相性は、実際に足を運んで初めてわかるもの。2〜3スタジオの体験を受けてから決めるのが失敗しないコツです。</p></div>
        </div></div></section>

        <section className="py-16 bg-white" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong></span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong></span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong></span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>でフォーム確認。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオも。事前に確認を。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>新百合ヶ丘エリアの豆知識：</strong>新百合ヶ丘は芸術の街として知られ、昭和音楽大学や川崎市アートセンターなどの文化施設が充実。小田急線の快速急行停車駅で新宿へのアクセスも良好。ピラティス帰りに周辺を散策するのもおすすめです。</p></div></div></div></section>

        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3><p className="text-warm-600 text-sm mb-4">リーズナブルに始めたい方に。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• pilates K 新百合ヶ丘店（月4回 11,220円〜）</li><li className="text-warm-700">• Rintosull 新百合ヶ丘エリア（プレミアムプラン 月額10,978円）</li></ul></div>
          <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3><p className="text-warm-600 text-sm mb-4">マンツーマンで丁寧な指導。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• PERSONAL TRAINING STUDIO U 新百合ヶ丘</li></ul></div>
          <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">女性専用・安心</h3><p className="text-warm-600 text-sm mb-4">女性だけの空間で安心。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• pilates K 新百合ヶ丘店</li><li className="text-warm-700">• Rintosull 新百合ヶ丘エリア</li></ul></div>
        </div></div></section>

        <section className="py-16 bg-warm-50" id="frequency"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1〜2回からスタート。最低2〜3ヶ月継続で効果を実感できます。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2〜3回がおすすめ。3〜6ヶ月で目に見える変化を実感。</p><h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3><p className="text-warm-600 leading-relaxed">週1回ペースで無理なく継続。長く続けることが大切です。</p></div></div></section>

        <section className="py-16 bg-white" id="price-guide"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜11,000円/月</h3><p className="text-3xl font-bold text-warm-800 mb-4">月4回</p><p className="text-sm text-warm-600 mb-4">手軽に始めたい方に。</p></div>
          <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50"><div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div><h3 className="text-lg font-bold text-warm-900 mb-2">予算 11,000〜13,200円/月</h3><p className="text-3xl font-bold text-warm-800 mb-4">月4〜6回</p><p className="text-sm text-warm-600 mb-4">週1〜2回で着実に成果。</p></div>
          <div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">パーソナルプラン</h3><p className="text-3xl font-bold text-warm-800 mb-4">1回4,400円〜</p><p className="text-sm text-warm-600 mb-4">マンツーマンで効率的。</p></div>
        </div></div></section>

        <section className="py-16 bg-warm-50" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8">
          <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、健康維持など、目的によって最適なスタジオは変わります。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">レッスン形式を選ぶ</h3></div><p className="text-warm-600 leading-relaxed">グループ、パーソナル、セミパーソナルなど。好みと予算に合わせて選びましょう。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">スタジオの雰囲気やインストラクターとの相性を確認。2〜3スタジオ比較がおすすめ。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">新百合ヶ丘駅から徒歩圏内のスタジオが多数。通勤経路に合わせて選ぶと長続きします。</p></div>
        </div></div></section>

        <section className="py-16 bg-white" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>

        <section className="py-16 bg-warm-50" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は新百合ヶ丘エリアのおすすめピラティススタジオ5選をご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">新百合ヶ丘は小田急小田原線・多摩線で新宿まで小田急線快速急行で約25分の好アクセスエリア。zen place pilates 新百合ヶ丘、pilates K 新百合ヶ丘店、sincere pilates 新百合ヶ丘など個性豊かなスタジオが揃っています。</p><p className="text-warm-600 leading-relaxed mb-6">まずは体験レッスンから始めてみましょう。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p></div></section>

        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="shin-yurigaoka" areaName="新百合ヶ丘" />

      <RelatedAreas currentSlug="shin-yurigaoka" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
