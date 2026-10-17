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
  alternates: { canonical: 'https://biyori-pilates.com/area/soka/' },
  title: 'ピラティス草加おすすめ5選人気スタジオの料金プランの比較',
  description: '草加エリアのおすすめピラティススタジオ5選を比較しています。Rintosull 草加店・Pilates Mee 草加店・exeed pilates studio 草加店など実在スタジオの料金・体験レッスン・アクセスを詳しくご案内します。',
  keywords: 'ピラティス,草加,埼玉県草加市,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'Rintosull 草加店',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683',
    image: '/images/studios/rintosull.webp',
    price: 'プレミアムプラン 月額10,978円（税込）',
    trial: '体験無料キャンペーン実施中',
    features: ['女性専用', 'マシンピラティス', '駅徒歩1分', 'LAVA系列'],
    description: 'LAVA系列の女性専用マシンピラティスです。草加駅西口より徒歩1分です。最安値級の料金です。多彩なプログラムです。',
    access: '東武スカイツリーライン「草加駅」西口徒歩1分',
    address: '埼玉県草加市氷川町2121-5 ケイユービル 3F',
    popularPlan: {
      name: '女性専用プラン',
      description: 'LAVA系列の女性専用マシンピラティスです。草加駅西口より徒歩1分です。最安値級の料金です。多彩なプログラムです。',
      price: 'プレミアムプラン 月額10,978円（税込）',
    },
    options: ['女性専用', 'マシンピラティス', '駅徒歩1分', 'LAVA系列', '体験無料キャンペーン実施中'],
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
    name: 'Pilates Mee 草加店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=F10273P.1.9146255O.U1357808',
    image: '/images/studios/pilates-mee.webp',
    price: 'セミパーソナル月4回 19,800円 / パーソナル月4回 39,600円（税込）',
    priceList: ['体験レッスン無料', 'セミパーソナル：月2回 11,000円／月4回 19,800円／通い放題 37,500円（税込）', 'パーソナル：月2回 22,000円／月4回 39,600円／月8回 70,400円（税込）'],
    trial: '体験レッスン無料',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: 'セミパーソナル形式で最大3名までの少人数レッスンです。一人ひとりに目が行き届く丁寧な指導です。',
    access: '草加駅 徒歩3分',
    address: '〒340-0015 埼玉県草加市高砂2-18-24 ノースビル302',
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'],
    },
    basicInfo: {
      hours: '9:00〜21:15',
      closed: '不定休',
      facilities: ['女性専用トイレ', '着替えスペース', '全身鏡'],
    },
  },
  {
    name: 'exeed pilates studio 草加店',
    image: '/images/studios/exeed-pilates-yoyogi.webp',
    price: 'パーソナルレッスン（公式サイトで確認）',
    trial: '体験レッスンあり',
    features: ['完全個室パーソナル', 'フルアイテム完備', 'お子様連れ可', '500種以上のエクササイズ'],
    description: '完全個室パーソナルです。リフォーマー・チェア・タワーなどフルアイテム完備です。500種類以上のエクササイズからオーダーメイドです。お子様連れ可能です。',
    access: '東武スカイツリーライン「草加駅」から徒歩圏内',
    address: '埼玉県草加市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '完全個室パーソナルプラン',
      description: '完全個室パーソナルです。リフォーマー・チェア・タワーなどフルアイテム完備です。500種類以上のエクササイズからオーダーメイドです。お',
      price: 'パーソナルレッスン（公式サイトで確認）',
    },
    options: ['完全個室パーソナル', 'フルアイテム完備', 'お子様連れ可', '500種以上のエクササイズ', '体験レッスンあり'],
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
    name: 'NeBoMo ピラティススタジオ',
    price: 'レッスン料は公式サイトでご確認ください',
    trial: '体験レッスンあり',
    features: ['少人数制', '丁寧な指導', 'アットホーム', '草加地域密着'],
    description: '草加の地域密着型ピラティススタジオです。少人数制で一人ひとりに合わせた丁寧な指導が特徴です。',
    access: '東武スカイツリーライン「草加駅」から徒歩圏内',
    address: '埼玉県草加市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '少人数制プラン',
      description: '草加の地域密着型ピラティススタジオです。少人数制で一人ひとりに合わせた丁寧な指導が特徴です。',
      price: 'レッスン料は公式サイトでご確認ください',
    },
    options: ['少人数制', '丁寧な指導', 'アットホーム', '草加地域密着', '体験レッスンあり'],
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
    name: 'La pilates 草加店',
    image: '/images/studios/la-pilates.webp',
    price: 'レッスン料は公式サイトでご確認ください',
    trial: '体験レッスンあり',
    features: ['整体×ピラティス', '駅徒歩3分', '根本改善', '体の不調対応'],
    description: '整体×ピラティスの独自アプローチです。草加駅徒歩3分です。体の不調の根本改善を目指すスタジオです。',
    access: '東武スカイツリーライン「草加駅」から徒歩3分',
    address: '埼玉県草加市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '整体×ピラティスプラン',
      description: '整体×ピラティスの独自アプローチです。草加駅徒歩3分です。体の不調の根本改善を目指すスタジオです。',
      price: 'レッスン料は公式サイトでご確認ください',
    },
    options: ['整体×ピラティス', '駅徒歩3分', '根本改善', '体の不調対応', '体験レッスンあり'],
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
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '問題ありません。草加エリアのスタジオは初心者歓迎がほとんどです。Rintosull 草加店は女性専用のため安心して通えます。まずは体験レッスンから始めてみることをおすすめします。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマーなどの専用マシンを使います。マシンはバネで負荷調整ができ初心者にもおすすめです。草加エリアではマシンピラティス対応スタジオが充実しています。' },
  { question: '草加のピラティスの料金相場は？', answer: 'Rintosull 草加店はプレミアムプラン 月額10,978円です（税込）。目的と頻度に合わせてお選びください。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回が目安です。最低2〜3ヶ月は継続することをおすすめします。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルを鍛えて基礎代謝が上がり、太りにくい体質に変わります。2〜3ヶ月の継続で効果を実感される方が多くなっています。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があれば問題ありません。Rintosull 草加店は体験無料キャンペーン実施中です。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'Pilates Mee 草加店、exeed pilates studio 草加店、NeBoMo ピラティススタジオ、La pilates 草加店は男性も利用可能です。' },
  { question: '草加駅からのアクセスは？', answer: '草加駅は東武スカイツリーラインが利用でき、北千住まで東武スカイツリーラインで約15分です。各スタジオとも駅から徒歩圏内でアクセス良好です。' },
  { question: 'パーソナルレッスンを受けたいのですが？', answer: 'Pilates Mee 草加店やexeed pilates studio 草加店がパーソナルレッスンに対応しています。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '個人差はありますが、2ヶ月を過ぎた頃から変化を実感される方が多くなっています。週1〜2回で最低2〜3ヶ月の継続がおすすめです。' },
]

export default function SokaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '草加', url: 'https://biyori-pilates.com/area/soka/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年10月11日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">ピラティス草加おすすめ5選<br className="hidden md:block" />人気スタジオの料金プランの比較</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">草加</span></nav></div></section>
        <TableOfContents areaName="草加" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">草加は東武スカイツリーラインが利用でき、北千住まで東武スカイツリーラインで約15分の好アクセスエリアです。草加せんべいの発祥地として知られる歴史ある街です。東武スカイツリーラインで北千住まで約15分、東京メトロ直通で都心へもアクセス良好です。そんな草加エリアには、多彩なピラティススタジオが揃っています。</p>
            <p className="text-warm-600 leading-relaxed mb-8">本ページでは、草加エリアでおすすめの実在するピラティススタジオ5選をまとめました。</p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>草加でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金を抑えられるスタジオを知りたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>東武スカイツリーライン沿線で通いやすいスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul></div>
            <p className="text-warm-600 leading-relaxed">以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。</p>
          </div>
        </section>
        <PriceComparisonTable studios={studios} areaName="草加" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">草加のおすすめピラティススタジオ5選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>

        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">草加のピラティス料金相場</h2>
            <div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">8,800円〜13,200円</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">月2回 22,000円〜（Pilates Meeのパーソナル・税込）</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">無料〜2,200円</td></tr></tbody></table></div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">草加エリアは都心と比較して料金がリーズナブルな傾向です。近隣の<a href="/area/koshigaya/">越谷</a>や<a href="/area/kita-senju/">北千住</a>エリアと合わせて検討するのもおすすめです。</p>
          </div>
        </section>

        <section className="py-16 bg-warm-50" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">草加でスタジオを選ぶ際の注意点</h2><div className="space-y-6">
          <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">駅からのアクセスを事前確認</h3><p className="text-warm-600 leading-relaxed">草加駅は東武スカイツリーラインが乗り入れます。各スタジオとも駅から徒歩圏内ですが、初回訪問時は余裕を持って出発し、ルートをご確認ください。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">女性専用と男女共用の違いに注意</h3><p className="text-warm-600 leading-relaxed">草加エリアには女性専用スタジオと男女共用スタジオの両方があります。カップルで通いたい場合は男女共用を、女性だけの環境を希望する方は女性専用をお選びください。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">郊外エリアのスタジオ数に注意</h3><p className="text-warm-600 leading-relaxed">草加は都心と比べてスタジオの選択肢が限られるため、人気の時間帯は予約が埋まりやすい場合があります。早めの予約がおすすめです。沿線の他駅のスタジオも選択肢に入れることをおすすめします。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">体験レッスンで複数比較を</h3><p className="text-warm-600 leading-relaxed">スタジオの雰囲気やインストラクターとの相性は、実際に足を運んで初めてわかるものです。2〜3スタジオの体験を受けてから決めることをおすすめします。</p></div>
        </div></div></section>

        <section className="py-16 bg-white" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong></span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong></span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong></span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>をお選びください。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>でフォーム確認です。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。事前にご確認ください。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>草加エリアの豆知識：</strong>草加は草加せんべいの発祥地として知られる歴史ある街です。東武スカイツリーラインで北千住まで約15分、東京メトロ直通で都心へもアクセス良好です。ピラティス帰りに周辺を散策するのもおすすめです。</p></div></div></div></section>

        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3><p className="text-warm-600 text-sm mb-4">リーズナブルに始めたい方におすすめです。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• Rintosull 草加店（プレミアムプラン 月額10,978円）</li></ul></div>
          <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3><p className="text-warm-600 text-sm mb-4">マンツーマンで丁寧な指導です。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• Pilates Mee 草加店</li><li className="text-warm-700">• exeed pilates studio 草加店</li></ul></div>
          <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">女性専用・安心</h3><p className="text-warm-600 text-sm mb-4">女性だけの空間で安心して通えます。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• Rintosull 草加店</li></ul></div>
        </div></div></section>

        <section className="py-16 bg-warm-50" id="frequency"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1〜2回から始めることをおすすめします。最低2〜3ヶ月継続で効果を実感できます。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2〜3回が目安です。3〜6ヶ月で目に見える変化を実感できます。</p><h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3><p className="text-warm-600 leading-relaxed">週1回ペースで無理なく継続することをおすすめします。長く続けることが大切です。</p></div></div></section>

        <section className="py-16 bg-white" id="price-guide"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜11,000円/月</h3><p className="text-3xl font-bold text-warm-800 mb-4">月4回</p><p className="text-sm text-warm-600 mb-4">手軽に始めたい方に適しています。</p></div>
          <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50"><div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div><h3 className="text-lg font-bold text-warm-900 mb-2">予算 11,000〜13,200円/月</h3><p className="text-3xl font-bold text-warm-800 mb-4">月4〜6回</p><p className="text-sm text-warm-600 mb-4">週1〜2回のペースで、着実な成果が期待できます。</p></div>
          <div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">パーソナルプラン</h3><p className="text-3xl font-bold text-warm-800 mb-4">月2回 22,000円〜</p><p className="text-sm text-warm-600 mb-4">マンツーマンで効率的です（Pilates Meeのパーソナル・税込）。</p></div>
        </div></div></section>

        <section className="py-16 bg-warm-50" id="how-to-choose"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2><div className="space-y-8">
          <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、健康維持など、目的によって最適なスタジオは変わります。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">レッスン形式を選ぶ</h3></div><p className="text-warm-600 leading-relaxed">グループ、パーソナル、セミパーソナルなどです。好みと予算に合わせてお選びください。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">スタジオの雰囲気やインストラクターとの相性をご確認ください。2〜3スタジオ比較がおすすめです。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">草加駅から徒歩圏内のスタジオが多数あります。通勤経路に合わせて選ぶと長続きします。</p></div>
        </div></div></section>

        <section className="py-16 bg-white" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>

        <section className="py-16 bg-warm-50" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は草加エリアのおすすめピラティススタジオ5選をご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">草加は東武スカイツリーラインで北千住まで東武スカイツリーラインで約15分の好アクセスエリアです。Rintosull 草加店、Pilates Mee 草加店、exeed pilates studio 草加店など個性豊かなスタジオが揃っています。</p><p className="text-warm-600 leading-relaxed mb-6">まずは体験レッスンから始めてみることをおすすめします。</p><p className="text-warm-700 font-medium text-center">本ページが、ピラティススタジオ選びの参考になれば幸いです。</p></div></section>

        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンのご予約</h2><p className="text-warm-200 mb-8 leading-relaxed">まずは体験レッスンへの参加をおすすめします。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="soka" areaName="草加" />

      <RelatedAreas currentSlug="soka" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
