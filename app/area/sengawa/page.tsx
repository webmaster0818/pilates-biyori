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
  alternates: { canonical: 'https://biyori-pilates.com/area/sengawa/' },
  title: '【2026年8月最新】ピラティス仙川おすすめ6選！料金・体験レッスン・マシン対応を比較！',
  description: '仙川エリアのおすすめピラティススタジオ6選を徹底比較。URBAN CLASSIC PILATES仙川・ピラティスミラー仙川・CLUB PILATES仙川・PERSONAL TRAINING STUDIO U・zen place pilatesなど実在スタジオの料金・体験レッスン・アクセスを完全ガイド。',
  keywords: 'ピラティス,仙川,東京,調布,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,URBAN CLASSIC,CLUB PILATES,ピラティスミラー',
}

const studios = [
  {
    name: 'URBAN CLASSIC PILATES 仙川',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11337L.1.X156352B.U1357808',
    image: '/images/studios/urban-classic-pilates.webp',
    price: '月4回 8,580円〜',
    trial: '体験レッスンあり',
    features: ['予約不要', 'サーキット形式', '1回30分', 'リーズナブル'],
    description: 'マシンピラティス専門のサーキット型スタジオ。予約不要で空いた時間に通えるのが最大の魅力。1人1台のリフォーマーを使い、30分間の集中トレーニング。月4回8,580円〜と仙川エリアで最安級の料金設定。通い放題プラン（12,980円）もあり。',
    access: '京王線「仙川駅」から徒歩圏内',
    address: '東京都調布市仙川町（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'マンスリー4', description: '予約不要サーキット形式。月4回で8,580円のコスパプラン。', price: '月4回 8,580円（税込）' },
    options: ['マンスリー4（月4回 8,580円）', 'マンスリー8（月8回 10,780円）', 'レギュラー（通い放題 12,980円）', '体験レッスンあり'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性75% / 男性25%', purpose: ['体幹強化', 'ボディメイク', '運動不足解消', '姿勢改善'] },
    basicInfo: { hours: '平日 9:30〜21:30 / 土祝 9:30〜19:30', closed: '日曜日', facilities: ['リフォーマー', '更衣室', 'ロッカー'] },
  },
  {
    name: 'ピラティスミラー 仙川',
    image: '/images/studios/pilates-mirror.webp',
    price: '月6回 11,000円',
    trial: '体験レッスン 2,200円',
    features: ['コナミ運営', '少人数制（最大7名）', '1レッスン30分', 'ミラー完備'],
    description: 'コナミが運営するピラティススタジオ。「もっと鏡が見たくなる」をコンセプトに、天井の鏡でフォームを客観的に確認しながらレッスン。仙川で唯一のミラー活用型ピラティス。最大7名の少人数制で初心者にも安心。',
    access: '京王線「仙川駅」から徒歩圏内',
    address: '東京都調布市仙川町（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '月6回プラン', description: 'コナミ運営。ミラーを使った独自のレッスンスタイル。', price: '月6回 11,000円（税込）' },
    options: ['月6回プラン（11,000円/月）', 'プライベートレッスン（30分 4,400円）', '体験レッスン 2,200円', 'コナミ施設との併用可能'],
    userProfile: { ageRange: '30代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['健康維持', '姿勢改善', '体幹強化', 'リフレッシュ'] },
    basicInfo: { hours: '施設の営業時間に準ずる', closed: '施設休館日に準ずる', facilities: ['ミラー', 'リフォーマー', '更衣室', 'ロッカー'] },
  },
  {
    name: 'CLUB PILATES 仙川',
    image: '/images/studios/club-pilates.webp',
    price: '月4回 11,990円〜',
    trial: '体験レッスンあり',
    features: ['全米最大級', '4段階レベル分け', '多彩なマシン', '男女共用'],
    description: '全米に600店舗以上展開する世界最大級のマシンピラティス専門スタジオ。4段階（初級〜上級）のレベル分けで初心者から上級者まで対応。リフォーマーに加え、TRX・バレル・チェアなど多彩なマシンを使ったバリエーション豊かなレッスンが特徴。',
    access: '京王線「仙川駅」から徒歩圏内',
    address: '東京都調布市仙川町（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'マンスリー4', description: '世界最大級のピラティスチェーン。4段階レベル分けで安心。', price: '月4回 11,990円〜（税込）' },
    options: ['マンスリー4（月4回 11,990円〜）', 'マンスリー8（月8回）', 'アンリミテッド（通い放題）', '体験レッスンあり'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['体幹強化', 'ボディメイク', '姿勢改善', 'パフォーマンス向上'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'TRX', 'バレル', 'チェア', '更衣室', 'ロッカー'] },
  },
  {
    name: 'PERSONAL TRAINING STUDIO U 仙川',
    image: '/images/studios/element.webp',
    price: 'パーソナルレッスン（料金は公式サイトでご確認ください）',
    trial: '体験レッスンあり',
    features: ['パーソナル専門', 'ピラティス×トレーニング', '仙川駅徒歩2分', '週1回50分'],
    description: '仙川駅より徒歩2分のパーソナルトレーニングジム。「週1回50分で結果を出す」をコンセプトに、パーソナルトレーニングとマシンピラティスを組み合わせた独自プログラムを提供。経験豊富なインストラクターによるマンツーマン指導。',
    access: '京王線「仙川駅」から徒歩2分',
    address: '東京都調布市仙川町（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'パーソナルプラン', description: '週1回50分でトレーニング×ピラティスの複合プログラム。', price: '公式サイトでご確認ください' },
    options: ['パーソナルトレーニング', 'マシンピラティス', '複合プログラム', '体験レッスンあり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性70% / 男性30%', purpose: ['ボディメイク', 'ダイエット', '体幹強化', '運動不足解消'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'トレーニングマシン', '更衣室'] },
  },
  {
    name: 'zen place pilates（京王線沿線）',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月4回 13,200円〜',
    trial: '体験レッスン 1,000円',
    features: ['全国展開大手', 'マット&マシン完備', '京王線沿線利用可', '男女共用'],
    description: '全国130店舗以上を展開する大手ピラティススタジオ。京王線沿線のスタジオを利用可能で仙川からもアクセス良好。マットからマシンまで豊富なレッスンメニュー。全店舗利用可能プランでライフスタイルに合わせて通えます。',
    access: '京王線沿線のスタジオを利用可能（仙川から京王線でアクセス）',
    address: '京王線沿線各スタジオ（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'フリープラン（月4回）', description: 'マット・マシンどちらも受講可能。全店舗利用可能プランもあり。', price: '月4回 13,200円〜（税込）' },
    options: ['マットグループレッスン', 'マシングループレッスン', 'プライベートレッスン（1回 9,900円〜）', '全店舗利用可能プランあり'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'] },
    basicInfo: { hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00（店舗により異なる）', closed: '不定休', facilities: ['リフォーマー', 'チェア', 'バレル', 'シャワー', 'ロッカー'] },
  },
  {
    name: 'Pilates Mee仙川店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=F10273P.1.9146255O.U1357808',
    image: '/images/studios/pilates-mee.webp',
    price: 'セミパーソナル月4回 19,800円 / パーソナル月4回 39,600円（税込）',
    trial: '初回体験 無料キャンペーンあり（通常9,800円・毎月先着30名限定）',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオ。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯が特徴。仙川駅から徒歩4分。',
    access: '仙川駅から徒歩4分',
    address: '東京都調布市仙川町2丁目18-8 ハイツ斉藤202',
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！仙川エリアのスタジオは初心者歓迎。CLUB PILATES仙川は4段階のレベル分けで安心、ピラティスミラー仙川は最大7名の少人数制、URBAN CLASSIC PILATESは予約不要で気軽に始められます。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットピラティスは自重エクササイズ、マシンピラティスはリフォーマーなどの専用マシンを使用。仙川エリアはマシンピラティス対応スタジオが充実しており、CLUB PILATESはリフォーマー以外にTRXやバレルも使えます。' },
  { question: '仙川のピラティスの料金相場は？', answer: 'URBAN CLASSICは月4回8,580円で最安級。ピラティスミラーは月6回11,000円、CLUB PILATESは月4回11,990円〜、zen placeは月4回13,200円〜。仙川は選択肢が多く、予算に合わせやすいエリアです。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1〜2回がおすすめ。URBAN CLASSICの通い放題プラン（12,980円）なら毎日でも通えます。最低2〜3ヶ月は継続しましょう。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がります。STUDIO Uのトレーニング×ピラティスの複合プログラムなら効率的にボディメイクが可能です。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。zen placeは体験1,000円でウェアレンタルあり。ピラティスミラーは体験2,200円。まずは気軽に体験してみましょう。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'URBAN CLASSIC PILATES仙川、CLUB PILATES仙川、STUDIO U仙川、zen placeは男性もOK。ピラティスミラー仙川も男性利用可能です。' },
  { question: '仙川駅からのアクセスは？', answer: '仙川駅は京王線の各駅停車駅で、新宿まで約20分。STUDIO Uは徒歩2分、各スタジオとも駅から徒歩圏内で通いやすい立地です。' },
  { question: 'パーソナルレッスンを受けたいのですが？', answer: 'PERSONAL TRAINING STUDIO U仙川がパーソナル専門でピラティス×トレーニングの複合プログラムを提供。zen placeもプライベートレッスン（1回9,900円〜）対応。ピラティスミラーも30分4,400円で対応。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '個人差はありますが、2ヶ月を過ぎた頃から変化を実感する方が多いです。週1〜2回で最低2〜3ヶ月の継続がおすすめです。' },
]

export default function SengawaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '仙川', url: 'https://pilates-biyori.com/area/sengawa/' },
      ]} />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年08月18日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス仙川おすすめ6選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1>
          </div>
        </section>
        <section className="bg-white py-3 border-b border-warm-100"><div className="max-w-6xl mx-auto px-6 lg:px-8"><nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">仙川</span></nav></div></section>
        <TableOfContents areaName="仙川" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「仙川で人気のピラティススタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">仙川は京王線沿線で、新宿まで約20分の好アクセスエリア。桐朋学園や白百合女子大学があり、文化的な雰囲気が漂う街です。駅前にはクイーンズ伊勢丹や島忠ホームズなど商業施設も充実。そんな仙川には、世界最大級のCLUB PILATESから予約不要のURBAN CLASSICまで、多彩なスタジオが揃っています。</p>
            <p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、仙川エリアでおすすめの実在するピラティススタジオ6選をまとめました。</p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>仙川でピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>世界基準の本格マシンピラティスを体験したい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>予約不要で気軽に通えるスタジオがいい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>京王線沿線で通いやすいスタジオがいい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>
        <PriceComparisonTable studios={studios} areaName="仙川" />
        <AreaMarketComparison studios={studios} areaName="仙川" />
        <section className="py-16 bg-warm-50" id="studios"><div className="max-w-6xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">仙川のおすすめピラティススタジオ6選</h2><div className="space-y-8">{[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div></div></section>

        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">仙川のピラティス料金相場【2026年4月最新】</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">種別</th><th className="px-4 py-3 text-left">料金相場</th></tr></thead>
                <tbody>
                  <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">グループレッスン（月4回）</td><td className="px-4 py-3">8,580円〜13,200円</td></tr>
                  <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">パーソナルレッスン</td><td className="px-4 py-3">1回 4,400円〜9,900円</td></tr>
                  <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">体験レッスン</td><td className="px-4 py-3">1,000円〜2,200円</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">仙川は京王線沿線の中でもピラティススタジオの選択肢が豊富なエリア。URBAN CLASSICの月4回8,580円は都内でもトップクラスのコスパ。世界最大級のCLUB PILATESもあり、初心者から上級者まで満足できます。近隣の<Link href="/area/chofu/" className="text-warm-700 underline hover:text-warm-900">調布</Link>エリアと合わせて検討するのもおすすめです。</p>
          </div>
        </section>

        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">仙川でスタジオを選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">各駅停車のみの停車駅</h3><p className="text-warm-600 leading-relaxed">仙川駅は京王線の各駅停車駅です。急行や特急は停車しないため、乗り換えが必要な場合があります。通勤経路と合わせてアクセスを確認しておきましょう。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">予約制と予約不要の違いに注意</h3><p className="text-warm-600 leading-relaxed">URBAN CLASSICは予約不要でいつでも行ける手軽さがあり、CLUB PILATESやピラティスミラーは事前予約制。ライフスタイルに合った形式を選びましょう。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">CLUB PILATESのレベル分けを確認</h3><p className="text-warm-600 leading-relaxed">CLUB PILATESは4段階のレベル分けがあり、自分に合ったクラスを選ぶことが大切。初心者はレベル1からスタートし、徐々にステップアップしていきましょう。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較検討を</h3><p className="text-warm-600 leading-relaxed">近隣の<Link href="/area/chofu/" className="text-warm-700 underline hover:text-warm-900">調布</Link>や<Link href="/area/chitose-funabashi/" className="text-warm-700 underline hover:text-warm-900">千歳船橋</Link>エリアにもスタジオがあります。zen placeなら全店舗利用可能プランで複数エリアを使い分けられます。</p></div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white" id="trial-guide">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2>
            <div className="bg-warm-50 rounded-lg p-8 border border-warm-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div><h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong></span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong></span></li></ul></div>
                <div><h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3><ul className="space-y-3 text-warm-600"><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>だとフォーム確認がしやすい。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>CLUB PILATESはグリップソックス必須</strong>。初回は貸出もあるか確認を。</span></li><li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。</span></li></ul></div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200"><p className="text-sm text-warm-600"><strong>仙川エリアの豆知識：</strong>仙川は「安藤ストリート」として建築家・安藤忠雄の作品が点在する文化的な街。ピラティス帰りにアートめぐりも楽しめます。駅前の商店街にはカフェやレストランが充実しているので、レッスン後のリフレッシュにも最適です。</p></div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white" id="kodawari">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3><p className="text-warm-600 text-sm mb-4">月額1万円以下からスタート。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• URBAN CLASSIC（月4回 8,580円）</li><li className="text-warm-700">• ピラティスミラー（月6回 11,000円）</li><li className="text-warm-700">• CLUB PILATES（月4回 11,990円〜）</li></ul></div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">本格派・上級者</h3><p className="text-warm-600 text-sm mb-4">世界基準の本格レッスン。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• CLUB PILATES（4段階レベル・多彩なマシン）</li><li className="text-warm-700">• zen place（解剖学ベース・全店利用可）</li><li className="text-warm-700">• STUDIO U（パーソナル×トレーニング）</li></ul></div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition"><h3 className="text-xl font-bold text-warm-900 mb-4">忙しい方・時短</h3><p className="text-warm-600 text-sm mb-4">短時間で効率的に。</p><ul className="space-y-2 text-sm"><li className="text-warm-700">• URBAN CLASSIC（予約不要・30分）</li><li className="text-warm-700">• ピラティスミラー（30分レッスン）</li><li className="text-warm-700">• STUDIO U（週1回50分で結果）</li></ul></div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-warm-50" id="frequency"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2><div className="bg-white rounded-lg p-8 border border-warm-200"><h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3><p className="text-warm-600 leading-relaxed mb-6">週1〜2回からスタート。URBAN CLASSIC PILATESの月4回（8,580円）で無理なく始められます。</p><h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3><p className="text-warm-600 leading-relaxed mb-6">週2〜3回。URBAN CLASSICの通い放題（12,980円）なら毎日でも。STUDIO Uのパーソナルも効率的。</p><h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3><p className="text-warm-600 leading-relaxed">週1回ペースで継続。ピラティスミラーの月6回プラン（11,000円）がちょうど良いペース。</p></div></div></section>

        <section className="py-16 bg-white" id="price-guide">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円/月</h3><p className="text-3xl font-bold text-warm-800 mb-4">月4回</p><p className="text-sm text-warm-600 mb-4">手軽に始めたい方に。</p><ul className="text-sm text-warm-700 space-y-1"><li>• URBAN CLASSIC（8,580円/月4回）</li></ul></div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50"><div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div><h3 className="text-lg font-bold text-warm-900 mb-2">予算 11,000〜12,000円/月</h3><p className="text-3xl font-bold text-warm-800 mb-4">月4〜6回</p><p className="text-sm text-warm-600 mb-4">週1〜2回で着実に成果。</p><ul className="text-sm text-warm-700 space-y-1"><li>• ピラティスミラー（11,000円/月6回）</li><li>• CLUB PILATES（11,990円〜/月4回）</li></ul></div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center"><h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000円〜/月</h3><p className="text-3xl font-bold text-warm-800 mb-4">月4回〜通い放題</p><p className="text-sm text-warm-600 mb-4">本格派の方に。</p><ul className="text-sm text-warm-700 space-y-1"><li>• URBAN CLASSIC通い放題（12,980円）</li><li>• zen place（13,200円〜/月4回）</li></ul></div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-warm-50" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ボディメイクならSTUDIO U、コスパ重視ならURBAN CLASSIC、本格派ならCLUB PILATESがおすすめ。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">レッスン形式を選ぶ</h3></div><p className="text-warm-600 leading-relaxed">予約不要（URBAN CLASSIC）、グループ（CLUB PILATES・ピラティスミラー）、パーソナル（STUDIO U）。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">zen placeは体験1,000円、ピラティスミラーは体験2,200円。まず体験でスタジオの雰囲気を確認。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">仙川駅周辺にスタジオが集中。STUDIO Uは徒歩2分で最も近い。自宅や職場からの動線に合わせて選びましょう。</p></div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white" id="faq"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2><div className="space-y-6">{faqs.map((faq, index) => (<div key={index} className="border border-warm-200 rounded-lg overflow-hidden"><details className="group"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div></details></div>))}</div></div></section>

        <section className="py-16 bg-warm-50" id="summary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2>
            <p className="text-warm-600 leading-relaxed mb-6">今回は仙川エリアのおすすめピラティススタジオ6選をご紹介しました。</p>
            <p className="text-warm-600 leading-relaxed mb-6">仙川は京王線沿線の中でもピラティススタジオの選択肢が豊富。URBAN CLASSIC PILATES仙川（予約不要・月4回8,580円）、ピラティスミラー仙川（コナミ運営・ミラー活用）、CLUB PILATES仙川（全米最大級・4段階レベル分け）、STUDIO U仙川（パーソナル×トレーニング）、zen place pilates（全店舗利用可能）と個性豊かなスタジオが揃っています。</p>
            <p className="text-warm-600 leading-relaxed mb-6">まずはzen placeの体験1,000円やURBAN CLASSICの体験レッスンから試してみましょう。</p>
            <p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p>
          </div>
        </section>

        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">URBAN CLASSIC PILATESは予約不要で気軽にスタート。<br />まずは体験してみましょう。</p>
            <Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link>
          </div>
        </section>
      </main>
        {/* boost-nav-202606 */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-warm-900 mb-3">📍 近隣エリア・料金データで比較する</h2>
              <p className="text-warm-600 text-sm mb-4">通勤・生活圏のスタジオもあわせて比べると、自分に合った1校が見つかりやすくなります。</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/area/chofu/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">調布</Link>
                <Link href="/articles/pilates-ryokin-hakusho/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国ピラティス料金白書2026</Link>
              </div>
            </div>
          </div>
        </section>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="sengawa" areaName="仙川" />

      <RelatedAreas currentSlug="sengawa" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
