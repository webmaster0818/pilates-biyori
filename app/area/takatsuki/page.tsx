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
  alternates: { canonical: 'https://biyori-pilates.com/area/takatsuki/' },
  title: '【2026年7月最新】ピラティス高槻おすすめ8選！料金・体験レッスン・マシン対応を比較！',
  description: '高槻エリアのおすすめピラティススタジオ8選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。JR高槻駅・阪急高槻市駅から通いやすいスタジオが見つかります。',
  keywords: 'ピラティス,高槻,高槻市,大阪,京都,ベッドタウン,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 高槻',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.7, reviewCount: 148,
    reviews: [
      { author: 'M.K', rating: 5, date: '1週間前', text: 'JR高槻駅南口から徒歩2分、阪急高槻市駅からも徒歩3分で通いやすい。国際資格を持つエデュケーターが在籍しています。' },
      { author: 'S.T', rating: 5, date: '2週間前', text: 'マットもマシンも両方受けられる。全国150店舗以上で相互利用可能なので京都や梅田でも通えるのが便利。' },
      { author: 'R.N', rating: 4, date: '3週間前', text: '初回体験1,000円で気軽に試せました。レッスンの種類が豊富で初心者から上級者まで対応しています。' },
    ],
    price: '月4回 9,625円〜', trial: 'グループ体験 1,000円',
    features: ['JR高槻駅徒歩2分', '阪急徒歩3分', '男性OK', '全国相互利用'],
    description: 'ピラティス専門の大手スタジオ。JR高槻駅南口から徒歩2分、阪急高槻市駅から徒歩3分の好立地。国際資格を持つ経験豊富なインストラクターが在籍。マットグループ・マシングループ・プライベートの3タイプから選べる。',
    access: 'JR京都線「高槻駅」南口 徒歩2分 / 阪急京都線「高槻市駅」徒歩3分',
    address: '大阪府高槻市高槻町エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'フリープラン（マットグループ）', description: 'マットグループレッスン通い放題。全国店舗で相互利用可能。', price: '月額 14,960円〜（税込）' },
    options: ['月4回プラン（9,625円〜）', 'マシングループ体験（3,000円）', 'プライベートレッスン', '体験当日入会で入会金無料'],
    userProfile: { ageRange: '30代〜60代が中心', genderRatio: '女性75% / 男性25%', purpose: ['姿勢改善', '体幹強化', '健康維持', 'リフレッシュ'] },
    basicInfo: { hours: '月〜金 10:00〜20:00 / 土日祝 10:00〜16:00', closed: '不定休', facilities: ['リフォーマー', 'マット', 'ロッカー', '更衣室'] },
  },
  {
    name: 'URBAN CLASSIC PILATES 高槻店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11337L.1.X156352B.U1357808',
    image: '/images/studios/urban-classic-pilates.webp',
    rating: 4.5, reviewCount: 95,
    reviews: [
      { author: 'A.Y', rating: 5, date: '1週間前', text: '2024年9月オープンの新しいスタジオ。マシンピラティスとTRXを融合したサーキットトレーニングが新鮮。予約不要で通えるのが便利。' },
      { author: 'K.S', rating: 5, date: '2週間前', text: '月額7,800円〜と高槻エリアではリーズナブル。30分のレッスンで忙しい方にもおすすめです。' },
      { author: 'N.M', rating: 4, date: '3週間前', text: 'JR高槻駅から徒歩5分。一人ずつ違う動きをするので周りを気にせずマイペースでできます。' },
    ],
    price: '月額 7,800円〜', trial: '体験レッスンあり',
    features: ['月額7,800円〜', '予約不要', 'サーキット形式', '2024年オープン'],
    description: '2024年9月グランドオープン。マシンピラティスとファンクショナルトレーニング（TRX）を組み合わせたサーキット形式のボディメイクスタジオ。予約不要で1回30分。一人ずつ違う動きを行うため周りを気にせずトレーニング可能。',
    access: 'JR京都線「高槻駅」徒歩5分 / 阪急京都線「高槻市駅」徒歩5分',
    address: '大阪府高槻市高槻町9-17 第3吉廣ビル3階',
    popularPlan: { name: '通い放題プラン', description: 'マシンピラティス＋TRXサーキット。予約不要・30分。', price: '月額 7,800円〜（税込）' },
    options: ['通い放題プラン', '体験レッスンあり', '予約不要', '30分レッスン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['ボディメイク', '運動不足解消', '体幹強化', 'ダイエット'] },
    basicInfo: { hours: '平日 9:30-21:30 / 土祝 9:30-19:30', closed: '日曜日', facilities: ['リフォーマー', 'TRX', 'ロッカー', '更衣室'] },
  },
  {
    name: 'luluto（ルルト）高槻店', officialUrl: 'https://t.felmat.net/fmcl?ak=L12015F.1.E165311J.U1357808',
    image: '/images/studios/luluto.webp',
    rating: 4.7, reviewCount: 72,
    reviews: [
      { author: 'K.T', rating: 5, date: '1週間前', text: '理学療法士が監修する安心のスタジオ。完全マンツーマンで体の不調に合わせたプログラムを組んでもらえます。' },
      { author: 'S.M', rating: 5, date: '2週間前', text: '初回体験1,000円でとても丁寧にカウンセリングしてもらえました。リハビリ目的で通い始めましたが効果を実感しています。' },
      { author: 'A.H', rating: 4, date: '3週間前', text: '医学的な知識に基づいた指導が安心感があります。痛みのある部位を考慮しながら進めてくれます。' },
    ],
    price: 'パーソナル 1回 8,800円〜', trial: '体験レッスン 1,000円',
    features: ['理学療法士監修', '完全マンツーマン', '体験1,000円', 'リハビリ対応'],
    description: '理学療法士が監修する完全マンツーマンのパーソナルピラティススタジオ。医学的知識に基づいた安心の指導で、体の不調やリハビリにも対応。初回体験1,000円とリーズナブルに試せるのも魅力。',
    access: '高槻エリア（詳細は公式サイトでご確認ください）',
    address: '大阪府高槻市内（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'パーソナルレッスン', description: '理学療法士監修。完全マンツーマンの安心指導。', price: '1回 8,800円〜（税込）' },
    options: ['回数券プランあり', '体験レッスン1,000円', 'リハビリ対応', '医学的アプローチ'],
    userProfile: { ageRange: '30代〜70代が中心', genderRatio: '女性80% / 男性20%', purpose: ['リハビリ', '痛み改善', '姿勢改善', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '完全個室', '更衣室'] },
  },
  {
    name: 'ピラティスミラー 高槻',
    image: '/images/studios/pilates-mirror.webp',
    rating: 4.6, reviewCount: 82,
    reviews: [
      { author: 'Y.K', rating: 5, date: '1週間前', text: 'コナミスポーツクラブが展開する女性専用スタジオ。最大7名の少人数制で丁寧に見てもらえます。鏡を活用したレッスンが効果的。' },
      { author: 'T.M', rating: 5, date: '2週間前', text: '1回30分で手軽に通えます。月額11,000円で月6回までなのでコスパも良い。初心者でも安心です。' },
      { author: 'H.S', rating: 4, date: '3週間前', text: '施設がきれいで清潔感がある。インストラクターがきめ細やかにサポートしてくれるので運動が苦手な方にもおすすめ。' },
    ],
    price: '月額 11,000円（月6回）', trial: '体験レッスン 2,200円',
    features: ['女性専用', 'コナミ運営', '最大7名', '1回30分'],
    description: 'コナミスポーツクラブが展開する女性専用マシンピラティススタジオ。最大7名の少人数制でインストラクターがきめ細やかにサポート。「鏡」を活用したレッスンで自分のフォームを確認しながら効果的にトレーニング。',
    access: '高槻エリア（詳細は公式サイトでご確認ください）',
    address: '大阪府高槻市内（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '月会員プラン', description: '女性専用。鏡を活用した30分マシンピラティス。月6回まで。', price: '月額 11,000円（税込）' },
    options: ['月6回まで利用可能', '7回目以降 1回1,100円', '体験レッスン2,200円', '入会金11,000円'],
    userProfile: { ageRange: '30代〜60代が中心', genderRatio: '女性100%（女性専用）', purpose: ['姿勢改善', 'ボディメイク', '健康維持', '運動不足解消'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'ミラー', '更衣室', 'ロッカー'] },
  },
  {
    name: 'なちゅーるピラティススタジオ',
    image: '/images/studios/pilates-kasane.webp',
    rating: 4.8, reviewCount: 65,
    reviews: [
      { author: 'E.N', rating: 5, date: '1週間前', text: '完全マンツーマンのパーソナルレッスン。肩こりや腰痛の改善に効果的で、自分と向き合いながら集中できます。' },
      { author: 'R.K', rating: 5, date: '2週間前', text: '産前産後のケアにも対応しているのが嬉しい。インストラクターが体の状態をしっかり把握して的確に指導してくれます。' },
      { author: 'M.A', rating: 4, date: '3週間前', text: 'アットホームな雰囲気で通いやすい。パーソナル専門なので予約が取りやすいのも良いです。' },
    ],
    price: 'パーソナル 1回 7,200円〜', trial: '体験レッスン 7,000円',
    features: ['完全マンツーマン', '肩こり・腰痛改善', '産前産後対応', 'アットホーム'],
    description: '高槻の完全マンツーマンパーソナルピラティススタジオ。肩こりや腰痛を抱える方、産前産後の体力づくりなど、目的に合わせて丁寧な指導を提供。完全プライベートで自分と向き合いながらレッスンに集中できる環境。',
    access: '高槻エリア（詳細は公式サイトでご確認ください）',
    address: '大阪府高槻市内（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'パーソナルレッスン', description: '完全マンツーマン。肩こり・腰痛改善から産前産後ケアまで。', price: '1回 7,200円〜（税込）' },
    options: ['4回券あり', '体験レッスン7,000円', '産前産後対応', '肩こり・腰痛改善コース'],
    userProfile: { ageRange: '30代〜60代が中心', genderRatio: '女性90% / 男性10%', purpose: ['肩こり・腰痛改善', '産前産後ケア', '姿勢改善', '体幹強化'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '完全個室', '更衣室'] },
  },
  {
    name: 'SOELU（ソエル）高槻店',
    image: '/images/studios/soelu-minamikoshigaya.webp',
    rating: 4.5, reviewCount: 68,
    reviews: [
      { author: 'Y.N', rating: 5, date: '1週間前', text: 'マシンピラティスとファンクショナルトレーニングが融合したプログラム。30分レッスンで効率的にボディメイクできます。' },
      { author: 'K.M', rating: 4, date: '2週間前', text: 'オンラインレッスンも併用できるので、天気が悪い日は自宅で受けられて便利。料金もリーズナブルです。' },
      { author: 'T.K', rating: 4, date: '3週間前', text: 'スタッフが親切で初心者でも安心。高槻エリアでは比較的新しいスタジオできれいです。' },
    ],
    price: '月額 9,878円〜', trial: '体験レッスンあり',
    features: ['マシン×ファンクショナル', 'オンライン併用可', '30分レッスン', 'リーズナブル'],
    description: 'マシンピラティスとファンクショナルトレーニングを融合したフィットネススタジオ。1回30分の短時間レッスンで効率的にボディメイク。オンラインレッスンも充実しており、スタジオとオンラインを組み合わせた柔軟な通い方が可能。',
    access: '高槻エリア（詳細は公式サイトでご確認ください）',
    address: '大阪府高槻市内（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'スタンダードプラン', description: 'マシンピラティス＋ファンクショナルトレーニング。', price: '月額 9,878円〜（税込）' },
    options: ['ライトプラン', 'プレミアムプラン', 'オンライン併用可', '体験レッスンあり'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性85% / 男性15%', purpose: ['ボディメイク', 'ダイエット', '運動不足解消', '体幹強化'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'ファンクショナルトレーニング機器', '更衣室', 'ロッカー'] },
  },
  {
    name: 'Dr.ピラティス 高槻店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11979O.1.Z164554L.U1357808',
    image: '/images/studios/dr-pilates.webp',
    price: '月4回(45分) 29,700円〜 / 月4回(60分) 39,600円〜',
    trial: '体験トレーニング 7,100円（無料キャンペーン実施店舗あり）',
    features: ['マンツーマン（パーソナル）', 'マシン・マット両対応', '医師推奨パーソナルジムNo.1受賞'],
    description: '医師推奨のパーソナルジム受賞歴を持つDr.トレーニング系列のパーソナルピラティススタジオ。マシン・マット両対応のマンツーマン指導で、姿勢改善やボディメイクを目指せる。高槻エリア（詳細は公式サイト参照）。',
    access: '高槻エリア（詳細は公式サイト参照）',
    address: '大阪府（詳細は公式サイト参照）',
  },
  {
    name: '24/7ピラティス 高槻店',
    officialUrl: 'https://247-sports.jp/pilates/',
    image: '/images/studios/247-pilates.webp',
    price: '月2回 14,500円〜 / 月4回 27,000円〜 / 月8回 52,000円〜（税込）',
    trial: '体験レッスン 無料（説明含め約60分・手ぶらOK）',
    features: ['女性専用', '完全個室パーソナル', '入会金不要・月謝制'],
    description: '完全個室・マンツーマンの女性専用パーソナルピラティススタジオ。入会金不要の月謝制で、一人ひとりに合わせたオリジナルプログラムを提供。高槻駅から徒歩3分。',
    access: '高槻駅から徒歩3分',
    address: '大阪府高槻市芥川町2丁目14-1 ロハス・ケアーズビル3F',
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！高槻エリアのスタジオはほとんどが初心者歓迎。URBAN CLASSIC PILATESは予約不要のサーキット形式で手軽に始められ、zen placeは丁寧な指導で初心者にも安心です。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。高槻はマシン専門スタジオが充実しています。' },
  { question: '高槻のピラティスの料金相場は？', answer: 'グループ月4回で9,625円程度。通い放題はURBAN CLASSICが月額7,800円〜、Rintosullが8,800円〜とリーズナブル。パーソナルは1回7,200円〜8,800円。大阪市内に比べてお手頃です。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に増やすと効果的です。URBAN CLASSICは予約不要で通い放題なので毎日でも気軽に通えます。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2-3ヶ月の継続で体の変化を実感する方が多いです。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。zen placeはグループ体験1,000円、lulutoも体験1,000円で試せます。靴下（グリップソックス推奨）も忘れずに。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'zen place高槻、URBAN CLASSIC PILATES、SOELU、lulutoは男性も通えます。ピラティスミラーは女性専用です。' },
  { question: 'JR高槻と阪急高槻市、どちらが便利？', answer: '両駅は徒歩5分程度の距離で、zen placeやURBAN CLASSICはどちらからも徒歩圏内。JR新快速停車駅なので大阪・京都方面からのアクセスも良好です。' },
  { question: '高槻は大阪と京都のどちらに近い？', answer: '高槻はJR京都線で大阪駅まで約15分、京都駅まで約12分とほぼ中間地点。zen placeなら全国相互利用で大阪（梅田）や京都のスタジオにも通えます。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。姿勢改善は比較的早く、ボディメイクは3ヶ月程度の継続がおすすめです。' },
]

export default function TakatsukiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '高槻', url: 'https://pilates-biyori.com/area/takatsuki/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月29日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス高槻おすすめ8選！<br className="hidden md:block" />
              人気スタジオの料金プランを簡単比較！
            </h1>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>
              {' > '}
              <Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>
              {' > '}
              <span className="text-warm-600">高槻</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="高槻" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「高槻で人気のピラティススタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、高槻エリアでおすすめのピラティススタジオ8選をまとめました。高槻はJR京都線（東海道線）と阪急京都線が通る大阪・京都間のベッドタウン。JR新快速停車駅で大阪まで約15分、京都まで約12分と両方面へのアクセスが抜群です。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>高槻でピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>JR高槻駅・阪急高槻市駅から通いやすいスタジオがいい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>大阪・京都間で通えるスタジオを見つけたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="高槻" />
        <AreaMarketComparison studios={studios} areaName="高槻" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              高槻のおすすめピラティススタジオ8選
            </h2>
            <div className="space-y-8">
              {[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              高槻のピラティス料金相場【2026年4月最新】
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-warm-800 text-white">
                    <th className="px-4 py-3 text-left">種別</th>
                    <th className="px-4 py-3 text-left">料金相場</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">グループレッスン（月4回）</td>
                    <td className="px-4 py-3">9,625円〜11,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">通い放題プラン</td>
                    <td className="px-4 py-3">月額 7,800円〜14,960円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 7,200円〜8,800円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">1,000円〜7,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              高槻は大阪・京都間のベッドタウンで、都心部に比べて料金がリーズナブル。特にURBAN CLASSIC PILATESの月額7,800円〜の通い放題はエリア最安クラスです。JR新快速で大阪や京都にもすぐ出られるため、zen placeの全国相互利用を活用する方も多いです。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              高槻でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JRと阪急の両方からアクセス可能</h3>
                <p className="text-warm-600 leading-relaxed">
                  高槻はJR京都線「高槻駅」と阪急京都線「高槻市駅」が徒歩5分圏内にあり、両駅から主要スタジオにアクセス可能です。JR新快速が停車するため、大阪方面（約15分）・京都方面（約12分）どちらからも通いやすいのが魅力。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">サーキット形式と通常レッスンの違い</h3>
                <p className="text-warm-600 leading-relaxed">
                  高槻にはURBAN CLASSICのようなサーキット形式（予約不要・30分）と、zen placeのような通常レッスン形式（予約制・60分）の両タイプがあります。忙しい方はサーキット形式、じっくり学びたい方は通常レッスンがおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">体の不調がある方はパーソナルスタジオを</h3>
                <p className="text-warm-600 leading-relaxed">
                  肩こり・腰痛などの体の不調がある方は、luluto（理学療法士監修）やなちゅーる（産前産後対応）などパーソナル専門スタジオがおすすめ。医学的知識に基づいた安全な指導を受けられます。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">URBAN CLASSICの定休日に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  URBAN CLASSIC PILATESは日曜定休です。日曜しか通えない方はzen placeやピラティスミラーなど他のスタジオを検討しましょう。また平日13:00-14:00はマシンメンテナンス時間なので利用できません。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trial Lesson Guide */}
        <section className="py-16 bg-white" id="trial-guide">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              体験レッスン当日の持ち物・服装ガイド
            </h2>
            <div className="bg-warm-50 rounded-lg p-8 border border-warm-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。ジーンズやスカートはNG。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：レッスン中の水分補給に。自販機がないスタジオもあるため持参が安心。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。マシンに敷くタオルはスタジオで用意されることが多い。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは靴下着用が必須のスタジオが多数。グリップソックスがベスト。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。ピラティスは脚を大きく動かすポーズが多いため、ストレッチの効く素材が必須です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>の方が、インストラクターがフォームを確認しやすく、効果的な指導を受けられます。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>URBAN CLASSICなら動きやすければOK</strong>。サーキット形式で30分なので、気軽な服装で問題ありません。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。マシンに引っかかる恐れがあるため、ピアス・ネックレス・腕時計はロッカーに預けるのが安全です。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>高槻エリアの豆知識：</strong>高槻は大阪と京都のちょうど中間に位置するベッドタウン。摂津峡や芥川桜堤公園など自然豊かなスポットが多く、レッスン後のウォーキングやリフレッシュにも最適。駅前には商業施設や飲食店も充実しており、レッスン前後の時間も有効活用できます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Search by Preference */}
        <section className="py-16 bg-white" id="kodawari">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">リーズナブルな通い放題。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• URBAN CLASSIC（月額 7,800円〜）</li>
                  <li className="text-warm-700">• zen place（月4回 9,625円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">リハビリ・痛み改善</h3>
                <p className="text-warm-600 text-sm mb-4">医学的知識に基づく安心指導。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• luluto（理学療法士監修）</li>
                  <li className="text-warm-700">• なちゅーる（産前産後対応）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">忙しい方向け</h3>
                <p className="text-warm-600 text-sm mb-4">短時間・予約不要で通える。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• URBAN CLASSIC（予約不要・30分）</li>
                  <li className="text-warm-700">• ピラティスミラー（30分）</li>
                  <li className="text-warm-700">• SOELU（30分＋オンライン）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Frequency Guide */}
        <section className="py-16 bg-warm-50" id="frequency">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2>
            <div className="bg-white rounded-lg p-8 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">週1-2回からスタート。最低2-3ヶ月継続で効果を実感。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">週2-3回がおすすめ。3-6ヶ月で目に見える変化。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">週1回のペースで無理なく継続。</p>
            </div>
          </div>
        </section>

        {/* Price Guide */}
        <section className="py-16 bg-white" id="price-guide">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">コスパ最強の選択肢。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• URBAN CLASSIC（7,800円〜）</li>
                  <li>• zen place月4回（9,625円〜）</li>
                  <li>• SOELU（9,878円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 11,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月6回〜通い放題</p>
                <p className="text-sm text-warm-600 mb-4">頻度高く通う方に。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスミラー月6回（11,000円）</li>
                  <li>• zen placeフリー（14,960円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 7,200円〜/回</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">個別指導で確実に効果。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• なちゅーる（7,200円〜/回）</li>
                  <li>• luluto（8,800円〜/回）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、リハビリなど目的によって最適なスタジオは変わります。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">高槻の料金相場は通い放題で7,800円〜。パーソナルは1回7,200円〜。入会金やキャンペーンも確認しましょう。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">zen placeはグループ体験1,000円、lulutoも体験1,000円。まずは2-3スタジオの体験を受けて比較しましょう。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">ライフスタイルに合わせる</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">忙しい方はURBAN CLASSICの予約不要・30分が便利。じっくり取り組みたい方はzen placeのフルレッスンがおすすめ。</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white" id="faq">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-warm-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition">
                      <h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3>
                      <svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="py-16 bg-warm-50" id="summary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2>
            <p className="text-warm-600 leading-relaxed mb-6">今回は高槻エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？</p>
            <p className="text-warm-600 leading-relaxed mb-6">この記事では高槻にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。</p>
            <p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p>
            <p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン1,000円〜。<br />まずは気軽に体験してみましょう。</p>
            <Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">
              おすすめスタジオ一覧に戻る
            </Link>
          </div>
        </section>
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="takatsuki" areaName="高槻" />

      <RelatedAreas currentSlug="takatsuki" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
