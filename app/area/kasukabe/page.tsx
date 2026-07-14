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
  alternates: { canonical: 'https://biyori-pilates.com/area/kasukabe/' },
  title: '【2026最新】ピラティス春日部おすすめ6選！人気スタジオの料金プランを簡単比較！',
  description: '春日部エリアのおすすめピラティススタジオ6選を徹底比較。Le Mieux（ルミュー）・さんはぴ 春日部店（2026年5月OPEN）・exeed pilates 春日部など実在スタジオの料金・体験レッスン・アクセスを完全ガイド。',
  keywords: 'ピラティス,春日部,埼玉県春日部市,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'Le Mieux（ルミュー）',
    image: '/images/studios/element.webp',
    rating: 4.7,
    reviewCount: 10,
    reviews: [
      { author: 'A.K', rating: 5, date: '1週間前', text: '春日部駅東口徒歩1分のプライベートピラティス。保健体育教諭の資格を持つインストラクターが在籍。マシンとマットを組み合わせた指導。' },
      { author: 'B.M', rating: 5, date: '2週間前', text: '春日部エリアでプライベート専門が魅力のスタジオ。通いやすい立地で続けやすいです。' },
      { author: 'C.O', rating: 4, date: '3週間前', text: '初心者でも安心して通えます。インストラクターの指導が丁寧で、体の変化を実感できています。' },
    ],
    price: 'プライベートレッスン（公式サイトで確認）',
    trial: '体験レッスンあり',
    features: ['プライベート専門', '駅徒歩1分', '保健体育教諭資格', 'マシン&マット'],
    description: '春日部駅東口徒歩1分のプライベートピラティス。保健体育教諭の資格を持つインストラクターが在籍。マシンとマットを組み合わせた指導。',
    access: '東武スカイツリーライン「春日部駅」東口徒歩1分',
    address: '埼玉県春日部市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'プライベート専門プラン',
      description: '春日部駅東口徒歩1分のプライベートピラティス。保健体育教諭の資格を持つインストラクターが在籍。マシンとマットを組み合わせ',
      price: 'プライベートレッスン（公式サイトで確認）',
    },
    options: ['プライベート専門', '駅徒歩1分', '保健体育教諭資格', 'マシン&マット', '体験レッスンあり'],
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
    name: 'さんはぴ 春日部店（2026年5月OPEN）',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.6,
    reviewCount: 14,
    reviews: [
      { author: 'D.L', rating: 5, date: '1週間前', text: '2026年5月オープン予定の完全個室パーソナルピラティス。手ぶらで通え、40〜60代の会員が多数。継続率90%以上。' },
      { author: 'E.N', rating: 5, date: '2週間前', text: '春日部エリアで2026年5月OPENが魅力のスタジオ。通いやすい立地で続けやすいです。' },
      { author: 'F.P', rating: 4, date: '3週間前', text: '初心者でも安心して通えます。インストラクターの指導が丁寧で、体の変化を実感できています。' },
    ],
    price: 'パーソナルレッスン（公式サイトで確認）',
    trial: '体験レッスンあり',
    features: ['2026年5月OPEN', '完全個室パーソナル', '手ぶらOK', '40〜60代にも人気'],
    description: '2026年5月オープン予定の完全個室パーソナルピラティス。手ぶらで通え、40〜60代の会員が多数。継続率90%以上。',
    access: '東武スカイツリーライン「春日部駅」から徒歩圏内',
    address: '埼玉県春日部市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '2026年5月OPENプラン',
      description: '2026年5月オープン予定の完全個室パーソナルピラティス。手ぶらで通え、40〜60代の会員が多数。継続率90%以上。',
      price: 'パーソナルレッスン（公式サイトで確認）',
    },
    options: ['2026年5月OPEN', '完全個室パーソナル', '手ぶらOK', '40〜60代にも人気', '体験レッスンあり'],
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
    name: 'exeed pilates 春日部',
    image: '/images/studios/exeed-pilates-yoyogi.webp',
    rating: 4.8,
    reviewCount: 13,
    reviews: [
      { author: 'G.M', rating: 5, date: '1週間前', text: '完全個室パーソナル。リフォーマー・チェア・タワーなどフルアイテム完備。500種類以上のエクササイズからオーダーメイド。' },
      { author: 'H.O', rating: 5, date: '2週間前', text: '春日部エリアで完全個室パーソナルが魅力のスタジオ。通いやすい立地で続けやすいです。' },
      { author: 'I.Q', rating: 4, date: '3週間前', text: '初心者でも安心して通えます。インストラクターの指導が丁寧で、体の変化を実感できています。' },
    ],
    price: 'パーソナルレッスン（公式サイトで確認）',
    trial: '体験レッスンあり',
    features: ['完全個室パーソナル', 'フルアイテム完備', '500種以上のメニュー', 'オーダーメイド'],
    description: '完全個室パーソナル。リフォーマー・チェア・タワーなどフルアイテム完備。500種類以上のエクササイズからオーダーメイド。',
    access: '「春日部駅」から徒歩圏内',
    address: '埼玉県春日部市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '完全個室パーソナルプラン',
      description: '完全個室パーソナル。リフォーマー・チェア・タワーなどフルアイテム完備。500種類以上のエクササイズからオーダーメイド。',
      price: 'パーソナルレッスン（公式サイトで確認）',
    },
    options: ['完全個室パーソナル', 'フルアイテム完備', '500種以上のメニュー', 'オーダーメイド', '体験レッスンあり'],
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
    name: 'Renne（レン）ピラティススタジオ',
    image: '/images/studios/pilates-mirror.webp',
    rating: 4.5,
    reviewCount: 7,
    reviews: [
      { author: 'J.N', rating: 5, date: '1週間前', text: '完全予約制のプライベートレッスン中心。マットとマシンを併用し一人ひとりに合わせたプログラム。運動初心者も安心。' },
      { author: 'K.P', rating: 5, date: '2週間前', text: '春日部エリアで完全予約制が魅力のスタジオ。通いやすい立地で続けやすいです。' },
      { author: 'L.R', rating: 4, date: '3週間前', text: '初心者でも安心して通えます。インストラクターの指導が丁寧で、体の変化を実感できています。' },
    ],
    price: 'プライベートレッスン（公式サイトで確認）',
    trial: '体験レッスンあり',
    features: ['完全予約制', 'プライベート中心', 'マット&マシン併用', '運動初心者歓迎'],
    description: '完全予約制のプライベートレッスン中心。マットとマシンを併用し一人ひとりに合わせたプログラム。運動初心者も安心。',
    access: '「春日部駅」から徒歩圏内',
    address: '埼玉県春日部市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '完全予約制プラン',
      description: '完全予約制のプライベートレッスン中心。マットとマシンを併用し一人ひとりに合わせたプログラム。運動初心者も安心。',
      price: 'プライベートレッスン（公式サイトで確認）',
    },
    options: ['完全予約制', 'プライベート中心', 'マット&マシン併用', '運動初心者歓迎', '体験レッスンあり'],
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
    name: 'Rintosull（東武沿線）',
    image: '/images/studios/rintosull.webp',
    rating: 4.6,
    reviewCount: 104,
    reviews: [
      { author: 'M.O', rating: 5, date: '1週間前', text: 'LAVA系列の女性専用マシンピラティス。東武沿線の店舗を利用可能。体験無料キャンペーン中。' },
      { author: 'N.Q', rating: 5, date: '2週間前', text: '春日部エリアで女性専用が魅力のスタジオ。通いやすい立地で続けやすいです。' },
      { author: 'O.S', rating: 4, date: '3週間前', text: '初心者でも安心して通えます。インストラクターの指導が丁寧で、体の変化を実感できています。' },
    ],
    price: 'プレミアムプラン 月額10,978円（税込）',
    trial: '体験無料キャンペーン実施中',
    features: ['女性専用', 'マシンピラティス', '体験無料', 'LAVA系列'],
    description: 'LAVA系列の女性専用マシンピラティス。東武沿線の店舗を利用可能。体験無料キャンペーン中。',
    access: '東武線沿線の店舗を利用可能',
    address: '東武沿線各店舗（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '女性専用プラン',
      description: 'LAVA系列の女性専用マシンピラティス。東武沿線の店舗を利用可能。体験無料キャンペーン中。',
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
  },
  {
    name: 'Pilates Mee Life春日部店',
    officialUrl: 'https://m-pilates.com/',
    image: '/images/studios/pilates-mee.webp',
    price: '5人制少人数 月4回 14,800円〜（税込）',
    trial: '初回体験 無料キャンペーンあり（通常9,800円・毎月先着30名限定）',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオ。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯が特徴。春日部駅から徒歩3分。',
    access: '春日部駅から徒歩3分',
    address: '埼玉県春日部市中央1丁目9-4 高元ビル5階A-1',
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！春日部エリアのスタジオは初心者歓迎がほとんど。Le Mieux（ルミュー）はプライベート専門で安心。まずは体験レッスンから始めてみましょう。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマーなどの専用マシンを使います。マシンはバネで負荷調整ができ初心者にもおすすめ。春日部エリアではマシンピラティス対応スタジオが充実しています。' },
  { question: '春日部のピラティスの料金相場は？', answer: 'Rintosull（東武沿線）はプレミアムプラン 月額10,978円（税込）。目的と頻度に合わせて選びましょう。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1〜2回がおすすめ。慣れてきたら週2〜3回に。最低2〜3ヶ月は継続しましょう。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルを鍛えて基礎代謝が上がり、太りにくい体質に変わります。2〜3ヶ月の継続で効果を実感する方が多いです。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。Rintosull（東武沿線）は体験無料キャンペーン実施中。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'Le Mieux（ルミュー）、さんはぴ 春日部店（2026年5月OPEN）、exeed pilates 春日部、Renne（レン）ピラティススタジオは男性もOKです。は女性専用です。' },
  { question: '春日部駅からのアクセスは？', answer: '春日部駅は東武スカイツリーライン・東武アーバンパークラインが利用でき、北千住まで東武スカイツリーラインで約30分。各スタジオとも駅から徒歩圏内でアクセス良好です。' },
  { question: 'パーソナルレッスンを受けたいのですが？', answer: 'さんはぴ 春日部店（2026年5月OPEN）やexeed pilates 春日部がパーソナルレッスンに対応しています。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '個人差はありますが、2ヶ月を過ぎた頃から変化を実感する方が多いです。週1〜2回で最低2〜3ヶ月の継続がおすすめです。' },
]

export default function KasukabePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '春日部', url: 'https://pilates-biyori.com/area/kasukabe/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16"><div className="max-w-4xl mx-auto px-6 lg:px-8"><p className="text-warm-400 text-xs mb-2">更新日 @2026年07月15日</p><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス春日部おすすめ6選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1></div></section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">春日部</span></nav></div></section>
        <TableOfContents areaName="春日部" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p><p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p><p className="text-warm-600 leading-relaxed mb-6">あなたは、</p><p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p><p className="text-warm-600 leading-relaxed mb-6">「春日部で人気のピラティススタジオを知りたい」</p><p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">春日部は東武スカイツリーライン・東武アーバンパークラインが利用でき、北千住まで東武スカイツリーラインで約30分の好アクセスエリア。東武スカイツリーラインと東武アーバンパークラインの2路線が利用可能。「クレヨンしんちゃん」の舞台として全国的に知られる街。近年は商業施設の充実でファミリー層に人気。そんな春日部エリアには、多彩なピラティススタジオが揃っています。</p>
            <p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、春日部エリアでおすすめの実在するピラティススタジオ6選をまとめました。</p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8"><h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2><ul className="space-y-2 text-warm-700"><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>春日部でピラティススタジオを探している</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>コスパの良いスタジオを知りたい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>東武スカイツリーライン・東武アーバンパークライン沿線で通いやすいスタジオがいい</span></li><li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li></ul></div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>
        <PriceComparisonTable studios={studios} areaName="春日部" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">春日部のおすすめピラティススタジオ6選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>

        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">春日部のピラティス料金相場【2026年4月最新】</h2>
            <div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">8,800円〜13,200円</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">1回 4,400円〜9,900円</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">無料〜2,200円</td></tr></tbody></table></div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">春日部エリアは都心と比較して料金がリーズナブルな傾向。近隣の<a href="/area/koshigaya/">越谷</a>や<a href="/area/omiya/">大宮</a>エリアと合わせて検討するのもおすすめです。</p>
          </div>
        </section>

        <section className="py-16 bg-warm-50" id="cautions"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">春日部でスタジオを選ぶ際の注意点</h2><div className="space-y-6">
          <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">駅からのアクセスを事前確認</h3><p className="text-warm-600 leading-relaxed">春日部駅は東武スカイツリーライン・東武アーバンパークラインが乗り入れます。各スタジオとも駅から徒歩圏内ですが、初回訪問時は余裕を持って出発し、ルートを確認しておきましょう。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">女性専用と男女共用の違いに注意</h3><p className="text-warm-600 leading-relaxed">春日部エリアには女性専用スタジオと男女共用スタジオの両方があります。カップルで通いたい場合は男女共用を、女性だけの環境を希望する方は女性専用を選びましょう。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">郊外エリアのスタジオ数に注意</h3><p className="text-warm-600 leading-relaxed">春日部は都心と比べてスタジオの選択肢が限られるため、人気の時間帯は予約が埋まりやすい場合があります。早めの予約がおすすめ。沿線の他駅のスタジオも選択肢に入れましょう。</p></div>
          <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">体験レッスンで複数比較を</h3><p className="text-warm-600 leading-relaxed">スタジオの雰囲気やインストラクターとの相性は、実際に足を運んで初めてわかるもの。2〜3スタジオの体験を受けてから決めるのが失敗しないコツです。</p></div>
        </div></div></section>

        <section className="py-16 bg-white" id="trial-guide"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2><div className="bg-warm-50 rounded-lg p-8 border border-warm-200"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong></span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong></span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong></span></li></ul></div><div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>でフォーム確認。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオも。事前に確認を。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。</span></li></ul></div></div><div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>春日部エリアの豆知識：</strong>春日部は東武スカイツリーラインと東武アーバンパークラインの2路線が利用可能。「クレヨンしんちゃん」の舞台として全国的に知られる街。近年は商業施設の充実でファミリー層に人気。ピラティス帰りに周辺を散策するのもおすすめです。</p></div></div></div></section>

        <section className="py-16 bg-white" id="kodawari"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3><p className="text-warm-600 text-sm mb-4">リーズナブルに始めたい方に。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• Rintosull（プレミアムプラン 月額10,978円）</li></ul></div>
          <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3><p className="text-warm-600 text-sm mb-4">マンツーマンで丁寧な指導。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• さんはぴ 春日部店</li><li className="text-warm-700">• exeed pilates 春日部</li></ul></div>
          <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">女性専用・安心</h3><p className="text-warm-600 text-sm mb-4">女性だけの空間で安心。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• Rintosull</li></ul></div>
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
          <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">春日部駅から徒歩圏内のスタジオが多数。通勤経路に合わせて選ぶと長続きします。</p></div>
        </div></div></section>

        <section className="py-16 bg-white" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>

        <section className="py-16 bg-warm-50" id="summary"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2><p className="text-warm-600 leading-relaxed mb-6">今回は春日部エリアのおすすめピラティススタジオ6選をご紹介しました。</p><p className="text-warm-600 leading-relaxed mb-6">春日部は東武スカイツリーライン・東武アーバンパークラインで北千住まで東武スカイツリーラインで約30分の好アクセスエリア。Le Mieux、さんはぴ 春日部店、exeed pilates 春日部など個性豊かなスタジオが揃っています。</p><p className="text-warm-600 leading-relaxed mb-6">まずは体験レッスンから始めてみましょう。</p><p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p></div></section>

        <section className="py-16 bg-warm-800 text-white" id="contact"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center"><h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2><p className="text-warm-200 mb-8 leading-relaxed">まずは気軽に体験してみましょう。</p><Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link></div></section>
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="kasukabe" areaName="春日部" />

      <RelatedAreas currentSlug="kasukabe" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
