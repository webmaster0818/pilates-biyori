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
  alternates: { canonical: 'https://biyori-pilates.com/area/ibaraki/' },
  title: '【2026年7月最新】ピラティス茨木おすすめ7選！料金・体験レッスン・マシン対応を比較！',
  description: '茨木エリアのおすすめピラティススタジオ7選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。JR茨木駅・阪急茨木市駅周辺の初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,茨木,茨木市,大阪,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK 茨木店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.7,
    reviewCount: 156,
    reviews: [
      { author: 'M.S', rating: 5, date: '1週間前', text: 'JR茨木駅東口から徒歩1分！女性専用で音楽に合わせたリフォーマーレッスンが楽しい。体験無料で気軽に始められました。' },
      { author: 'A.Y', rating: 5, date: '2週間前', text: '月4回11,220円〜とコスパ抜群。部位別ボディメイクプログラムも充実。駅近で通いやすい。' },
      { author: 'K.T', rating: 4, date: '3週間前', text: 'サンプラザ茨木駅前ビル2階にあり、初心者向けから上級者向けまでクラスが豊富。' },
    ],
    price: '月4回 11,220円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', 'JR茨木駅徒歩1分', 'マシン専門', '体験無料'],
    description: '女性専用マシンピラティス専門スタジオ。JR茨木駅東口から徒歩1分のサンプラザ茨木駅前ビル2階。音楽に合わせた楽しいレッスンとボディメイクに特化したプログラムが充実。',
    access: 'JR東海道本線「茨木駅」東口 徒歩1分',
    address: '大阪府茨木市春日1丁目 サンプラザ茨木駅前ビル2F',
    popularPlan: { name: 'マンスリー4メンバー（月4回）', description: '女性専用マシンピラティス月4回。', price: '月4回 11,220円〜（税込）+ 施設維持費 月825円' },
    options: ['マンスリー4メンバー（11,220円〜）', 'マンスリー8メンバー', 'マンスリーフルメンバー（通い放題）', '施設維持費 月825円'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム'] },
  },
  {
    name: 'ma-eum（マウム）ピラティス JR茨木店',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 45,
    reviews: [
      { author: 'H.N', rating: 5, date: '1週間前', text: 'JR茨木駅から徒歩3分。医療系国家資格を持つインストラクターが在籍していて安心感がある。' },
      { author: 'R.A', rating: 5, date: '2週間前', text: 'プライベート・セミプライベート・グループの3パターンから選べるのが嬉しい。体の状態に合わせて柔軟に対応してくれる。' },
      { author: 'T.M', rating: 4, date: '3週間前', text: '阪急茨木市駅にも店舗があり、通いやすい方を選べる。インストラクターの知識が豊富。' },
    ],
    price: '月額制（詳細は公式サイト）',
    trial: '体験レッスンあり',
    features: ['医療系国家資格保有', 'JR茨木駅徒歩3分', '3パターンのレッスン', '2店舗展開'],
    description: '医療系国家資格を持つインストラクターが在籍するピラティススタジオ。JR茨木店と阪急茨木市店の2店舗展開。プライベート・セミプライベート・グループの3パターンから選択可能。',
    access: 'JR東海道本線「茨木駅」徒歩3分',
    address: '大阪府茨木市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'プライベートレッスン', description: '医療系国家資格保有インストラクターによるマンツーマン指導。', price: '詳細は公式サイトでご確認ください' },
    options: ['プライベートレッスン', 'セミプライベートレッスン', 'グループレッスン', '体験レッスン'],
    userProfile: { ageRange: '20代〜60代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '痛み改善', '体幹強化', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
  {
    name: 'VITARISE（ビタライズ）茨木店',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.7,
    reviewCount: 32,
    reviews: [
      { author: 'E.K', rating: 5, date: '1週間前', text: '理学療法士の国家資格保有者が在籍。整形外科クリニックと提携していて医学的なアプローチが受けられる。' },
      { author: 'N.S', rating: 4, date: '2週間前', text: '体の痛みや不調に悩んでいたが、専門的な知識に基づいた指導で改善を実感。安心感が違う。' },
      { author: 'Y.T', rating: 5, date: '3週間前', text: 'マシンピラティスで正しいフォームを丁寧に教えてもらえる。リハビリ的な要素もあり効果的。' },
    ],
    price: 'パーソナル制（詳細は公式サイト）',
    trial: '体験レッスンあり',
    features: ['理学療法士在籍', '整形外科提携', 'メディカル対応', '南茨木駅近く'],
    description: '理学療法士の国家資格保有者が在籍し、整形外科クリニックと提携。医学的なアプローチに基づいた安全で効果的なマシンピラティスを提供。',
    access: '阪急京都線「南茨木駅」/ JR「茨木駅」徒歩圏内',
    address: '大阪府茨木市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'パーソナルレッスン', description: '理学療法士による医学的アプローチのマシンピラティス。', price: '詳細は公式サイトでご確認ください' },
    options: ['パーソナルレッスン', '体験レッスン', '整形外科提携プログラム', 'リハビリ対応'],
    userProfile: { ageRange: '30代〜60代が中心', genderRatio: '女性75% / 男性25%', purpose: ['痛み改善', 'リハビリ', '姿勢改善', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
  {
    name: 'Rintosull（リントスル）茨木店',
    image: '/images/studios/rintosull.webp',
    rating: 4.5,
    reviewCount: 88,
    reviews: [
      { author: 'S.M', rating: 5, date: '1週間前', text: 'LAVAの姉妹ブランドで安心感がある。月4回8,800円〜と茨木エリアでは最安クラス。' },
      { author: 'K.Y', rating: 4, date: '2週間前', text: 'LAVA全店も相互利用可能で、ピラティスとヨガの両方楽しめる。コスパ最高。' },
      { author: 'M.H', rating: 4, date: '3週間前', text: '大型スクリーンの映像に合わせたレッスンで、グループでも一人ひとりサポートしてもらえる。' },
    ],
    price: '月4回 8,800円〜',
    trial: '体験レッスンあり（予約制）',
    features: ['低価格', 'LAVA相互利用', 'マシン専門', '映像レッスン'],
    description: 'ホットヨガLAVAの姉妹ブランドのマシンピラティス専門スタジオ。月4回8,800円〜と低価格。LAVA全店との相互利用が可能。',
    access: 'JR「茨木駅」/ 阪急「茨木市駅」徒歩圏内',
    address: '大阪府茨木市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'マンスリーメンバー4（月4回）', description: 'マシンピラティス月4回。LAVA全店も相互利用可能。', price: '月4回 8,800円（税込）' },
    options: ['月4回プラン（8,800円）', '通い放題プラン', 'LAVA全店相互利用可能', '体験レッスン（予約制）'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性90% / 男性10%', purpose: ['ダイエット', '姿勢改善', '運動不足解消', 'リフレッシュ'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', '更衣室', 'ロッカー'] },
  },
  {
    name: 'URBAN CLASSIC PILATES 茨木店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11337L.1.X156352B.U1357808',
    image: '/images/studios/urban-classic-pilates.webp',
    rating: 4.5,
    reviewCount: 40,
    reviews: [
      { author: 'A.I', rating: 5, date: '1週間前', text: 'マシンピラティスとファンクショナルトレーニングを組み合わせたサーキット形式が新鮮。一人ずつ違う動きをするので周りを気にせずマイペースに取り組める。' },
      { author: 'Y.M', rating: 4, date: '2週間前', text: '運動久しぶりでも無理なく始められた。インストラクターが個別にフォームを修正してくれる。' },
      { author: 'R.N', rating: 4, date: '3週間前', text: '予約不要で通えるのが便利。仕事帰りにふらっと寄れる。' },
    ],
    price: '月額制（詳細は公式サイト）',
    trial: '体験レッスンあり',
    features: ['サーキット形式', '予約不要', '個別ペース', 'ファンクショナルトレーニング'],
    description: 'マシンピラティスとファンクショナルトレーニングを組み合わせたサーキット形式のボディメイクスタジオ。グループレッスンではなく一人ずつ違う動きを行うため、運動が久しぶりの方でも気軽に始められる。',
    access: 'JR「茨木駅」/ 阪急「茨木市駅」徒歩圏内',
    address: '大阪府茨木市（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'サーキットレッスン', description: 'マシンピラティス×ファンクショナルトレーニングのサーキット形式。', price: '詳細は公式サイトでご確認ください' },
    options: ['サーキットレッスン', '体験レッスン', '予約不要プラン', '月額制'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['ボディメイク', 'ダイエット', '運動不足解消', '体幹強化'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'ファンクショナルトレーニング器具', '更衣室'] },
  },
  {
    name: '24/7ピラティス 茨木店',
    officialUrl: 'https://247-sports.jp/pilates/',
    image: '/images/studios/247-pilates.webp',
    price: '月2回 14,500円〜 / 月4回 27,000円〜 / 月8回 52,000円〜（税込）',
    trial: '体験レッスン 無料（説明含め約60分・手ぶらOK）',
    features: ['女性専用', '完全個室パーソナル', '入会金不要・月謝制'],
    description: '完全個室・マンツーマンの女性専用パーソナルピラティススタジオ。入会金不要の月謝制で、一人ひとりに合わせたオリジナルプログラムを提供。茨木市駅から徒歩2分。',
    access: '茨木市駅から徒歩2分',
    address: '大阪府茨木市双葉町9-14 三島コーポレーション双葉町BLD 2F',
  },
  {
    name: 'Pilates Mee茨木店',
    officialUrl: 'https://m-pilates.com/',
    image: '/images/studios/pilates-mee.webp',
    price: 'セミパーソナル月4回 19,800円 / パーソナル月4回 39,600円（税込）',
    trial: '初回体験 無料キャンペーンあり（通常9,800円・毎月先着30名限定）',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオ。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯が特徴。茨木駅から徒歩1分。',
    access: '茨木駅から徒歩1分',
    address: '大阪府茨木市西駅前町4-35 三和土地ビル301号室',
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！茨木エリアのスタジオはほとんどが初心者歓迎。ピラティスKは初心者向けクラスが充実、URBAN CLASSICは個別ペースで進められます。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。茨木はマシン専門スタジオが充実しています。' },
  { question: '茨木のピラティスの料金相場は？', answer: 'グループ月4回で8,800円〜11,220円程度。Rintosullが月4回8,800円〜で最もリーズナブル。ピラティスKは月4回11,220円〜。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。大切なのは継続すること。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2-3ヶ月の継続が大切です。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。ピラティスKは無料体験あり。靴下（滑り止め付き推奨）も用意しておくと安心です。' },
  { question: 'ピラティスとヨガの違いは何ですか？', answer: 'ピラティスは体幹強化・姿勢改善に特化。ヨガは柔軟性とリラックス重視。RintosullはLAVA全店も利用可能で両方楽しめます。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'ma-eum、VITARISE、URBAN CLASSICは男性もOK。ピラティスKは女性専用です。' },
  { question: '無料で体験できるスタジオは？', answer: 'ピラティスKは無料体験あり。まずは無料体験から始めるのがおすすめです。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。' },
]

export default function IbarakiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '茨木', url: 'https://pilates-biyori.com/area/ibaraki/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月14日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス茨木おすすめ7選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1>
          </div>
        </section>
        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">茨木</span>
            </nav>
          </div>
        </section>
        <TableOfContents areaName="茨木" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「茨木で人気のピラティススタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、茨木エリアでおすすめのピラティススタジオ7選をまとめました。</p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>茨木でピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>JR茨木駅・阪急茨木市駅から通いやすいスタジオがいい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>医療系の資格を持つインストラクターに教わりたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>
        <PriceComparisonTable studios={studios} areaName="茨木" />
        <AreaMarketComparison studios={studios} areaName="茨木" />
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">茨木のおすすめピラティススタジオ7選</h2>
            <div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div>
          </div>
        </section>
        <section className="py-16 bg-white" id="kodawari">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">月額1万円以下で通えるスタジオ。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li><li className="text-warm-700">• ピラティスK（月4回 11,220円〜）</li></ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">医療系サポート</h3>
                <p className="text-warm-600 text-sm mb-4">国家資格保有の専門家が指導。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• VITARISE（理学療法士在籍）</li><li className="text-warm-700">• ma-eum（医療系国家資格保有）</li></ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">JR茨木駅から徒歩3分以内。</p>
                <ul className="space-y-2 text-sm"><li className="text-warm-700">• ピラティスK（JR茨木駅 徒歩1分）</li><li className="text-warm-700">• ma-eum（JR茨木駅 徒歩3分）</li></ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-warm-50" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">茨木のピラティス料金相場【2026年4月最新】</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead>
                <tbody>
                  <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">8,800円〜11,220円</td></tr>
                  <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">1回 8,000円〜12,000円</td></tr>
                  <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">無料〜5,000円</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">茨木はJR・阪急の2路線が通る交通の要衝で、大阪市内へのアクセスも良好。大阪市内と比べて料金はやや抑えめで、医療系の専門資格を持つインストラクターが在籍するスタジオも複数あり、体の悩みに寄り添った指導が受けられるのが特徴です。</p>
          </div>
        </section>
        <section className="py-16 bg-white" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">茨木でスタジオを選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR茨木駅と阪急茨木市駅の距離に注意</h3>
                <p className="text-warm-600 leading-relaxed">JR茨木駅と阪急茨木市駅は徒歩約15分離れています。自分の利用路線に合ったスタジオを選びましょう。ma-eumは両駅近くに店舗があるので便利です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">体の不調がある場合は医療系スタジオを検討</h3>
                <p className="text-warm-600 leading-relaxed">茨木にはVITARISEやma-eumなど医療系国家資格を持つスタッフが在籍するスタジオがあります。肩こり・腰痛など体の悩みがある方は、専門的な指導が受けられるスタジオを選ぶと安心です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">キャンペーン情報をチェック</h3>
                <p className="text-warm-600 leading-relaxed">各スタジオでは定期的に入会キャンペーンを実施しています。体験当日入会で入会金無料などの特典があることも多いので、公式サイトで最新情報を確認してから体験に行きましょう。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較検討</h3>
                <p className="text-warm-600 leading-relaxed">茨木だけでなく、<Link href="/area/takatsuki/" className="text-warm-700 underline hover:text-warm-900">高槻</Link>や<Link href="/area/suita/" className="text-warm-700 underline hover:text-warm-900">吹田</Link>、<Link href="/area/esaka/" className="text-warm-700 underline hover:text-warm-900">江坂</Link>エリアも比較すると選択肢が広がります。</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-warm-50" id="trial-guide">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2>
            <div className="bg-warm-50 rounded-lg p-8 border border-warm-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：レッスン中の水分補給に。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは必須のスタジオが多い。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>がフォーム確認に効果的。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600"><strong>茨木エリアの豆知識：</strong>茨木はJR・阪急の2路線利用可能で、大阪市内や京都方面へのアクセスも良好なベッドタウン。駅周辺にスタジオが集中しているため、通勤・通学の行き帰りに立ち寄りやすいのが魅力です。</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、痛み改善など目的によって最適なスタジオは変わります。VITARISEは痛み改善、ピラティスKはボディメイク向けです。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">茨木の料金相場はグループ月4回で8,800円〜11,220円。Rintosullが最安の月4回8,800円。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">ピラティスKは無料体験あり。まずは気軽に複数スタジオを体験してみましょう。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">JR茨木駅周辺にスタジオが集中。ピラティスKは駅徒歩1分、ma-eumは徒歩3分とアクセス良好です。</p></div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-warm-50" id="faq">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2>
            <div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div>
          </div>
        </section>
        <section className="py-16 bg-white" id="summary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2>
            <p className="text-warm-600 leading-relaxed mb-6">今回は茨木エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？</p>
            <p className="text-warm-600 leading-relaxed mb-6">この記事では茨木にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。</p>
            <p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p>
            <p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p>
          </div>
        </section>
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜5,000円。<br />まずは気軽に体験してみましょう。</p>
            <Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link>
          </div>
        </section>
      </main>
      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="ibaraki" areaName="茨木" />

      <RelatedAreas currentSlug="ibaraki" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
