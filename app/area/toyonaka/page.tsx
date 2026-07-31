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
  alternates: { canonical: 'https://biyori-pilates.com/area/toyonaka/' },
  title: '【2026年8月最新】ピラティス豊中おすすめ6選！人気スタジオの料金プランを簡単比較！',
  description: '豊中エリアのおすすめピラティススタジオ6選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。阪急宝塚線沿線で初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,豊中,曽根,阪急宝塚線,北摂,大阪,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 豊中スタジオ',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.7, reviewCount: 142,
    reviews: [
      { author: 'M.K', rating: 5, date: '1週間前', text: '阪急豊中駅東口から徒歩5分。マットもマシンも両方受けられるのが魅力。全国150店舗以上で他店利用できるのが便利です。' },
      { author: 'S.T', rating: 5, date: '2週間前', text: 'インストラクターの質が高く丁寧な指導。初回体験1,000円で気軽に試せました。男性もOKなので夫婦で通っています。' },
      { author: 'R.N', rating: 4, date: '3週間前', text: '住宅地の中にある落ち着いた雰囲気のスタジオ。グループレッスンの種類が豊富で飽きずに通えます。' },
    ],
    price: '月4回 9,625円〜', trial: 'グループ体験 1,000円',
    features: ['豊中駅徒歩5分', '男性OK', 'マット&マシン', '全国相互利用'],
    description: 'ピラティス専門の大手スタジオ。阪急宝塚線「豊中駅」東口から徒歩5分。マットグループ・マシングループ・プライベートの3タイプから選べます。全国150店舗以上で相互利用可能。正統派ピラティスの質の高い指導が特徴。',
    access: '阪急宝塚線「豊中駅」東口 徒歩5分',
    address: '大阪府豊中市本町エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'フリープラン（マットグループ）', description: 'マットグループレッスン通い放題。全国店舗で相互利用可能。', price: '月額 14,960円〜（税込）' },
    options: ['月4回プラン（9,625円〜）', 'マシングループ体験（3,000円）', 'プライベートレッスン', '体験当日入会で入会金無料'],
    userProfile: { ageRange: '30代〜60代が中心', genderRatio: '女性75% / 男性25%', purpose: ['姿勢改善', '体幹強化', '健康維持', 'リフレッシュ'] },
    basicInfo: { hours: '月〜金 10:00〜20:00 / 土日祝 10:00〜16:00', closed: '不定休', facilities: ['リフォーマー', 'マット', 'ロッカー', '更衣室'] },
  },
  {
    name: 'studio Pilates remove（ピラティス リムーブ）',
    image: '/images/studios/pilates-kasane.webp',
    rating: 4.9, reviewCount: 86,
    reviews: [
      { author: 'A.Y', rating: 5, date: '1週間前', text: '10種類以上・約25台のマシンを完備した本格派スタジオ。日本では珍しいマシンもあり、プライベートレッスンで丁寧に指導してもらえます。' },
      { author: 'K.S', rating: 5, date: '2週間前', text: '阪急豊中駅から徒歩5分。パーソナル専門なので自分の体の状態に合わせた最適なプログラムを組んでもらえます。' },
      { author: 'N.M', rating: 5, date: '3週間前', text: 'マットだけでなくマシンピラティスも基礎から丁寧に教えてもらえる。設備の充実度は北摂エリアNo.1だと思います。' },
    ],
    price: 'パーソナル 1回 8,500円〜', trial: '体験レッスンあり',
    features: ['パーソナル専門', '10種類以上のマシン', '豊中駅徒歩5分', '本格派'],
    description: 'プライベートレッスン専門のピラティススタジオ。阪急豊中駅から徒歩5分。日本では珍しいピラティスマシンを含む10種類以上・約25台を完備。マットからマシンまで基礎から丁寧に指導。北摂エリア屈指の設備充実度。',
    access: '阪急宝塚線「豊中駅」徒歩5分',
    address: '大阪府豊中市本町エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'パーソナルレッスン', description: '10種類以上のマシンを使ったマンツーマン指導。', price: '1回 8,500円〜（税込）' },
    options: ['回数券プランあり', '月額プランあり', '体験レッスンあり', '多種マシン使用'],
    userProfile: { ageRange: '30代〜60代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', 'リハビリ', '体幹強化', 'パフォーマンス向上'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'キャデラック', 'チェア', 'バレル', 'ペダプル', '更衣室'] },
  },
  {
    name: 'Doux pilates studio（ドゥ・ピラティス・スタジオ）',
    image: '/images/studios/pilates-kasane-osaka.webp',
    rating: 4.8, reviewCount: 74,
    reviews: [
      { author: 'Y.K', rating: 5, date: '1週間前', text: '曽根駅から徒歩2分の好立地。ピラティスマシン完備でプライベートレッスンが受けられます。アスリートから高齢者まで幅広く対応。' },
      { author: 'T.M', rating: 5, date: '2週間前', text: '丁寧なカウンセリングから始まり、自分の体に合ったプログラムを組んでもらえます。腰痛が劇的に改善しました。' },
      { author: 'H.S', rating: 4, date: '3週間前', text: 'アットホームな雰囲気で通いやすい。インストラクターの知識が豊富で信頼できます。' },
    ],
    price: 'パーソナル 1回 7,500円〜', trial: '体験レッスンあり',
    features: ['曽根駅徒歩2分', 'パーソナル対応', 'マシン完備', '幅広い年齢対応'],
    description: '阪急宝塚線曽根駅から徒歩2分のピラティス専門スタジオ。ピラティスマシンを完備し、プライベートレッスンを提供。アスリートから高齢者まで幅広いニーズに対応。丁寧なカウンセリングで個々の体の状態に合わせた指導。',
    access: '阪急宝塚線「曽根駅」徒歩2分',
    address: '大阪府豊中市曽根エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'パーソナルレッスン', description: 'マシンピラティスのマンツーマン指導。幅広い年齢対応。', price: '1回 7,500円〜（税込）' },
    options: ['回数券プランあり', '体験レッスンあり', 'アスリート対応', '高齢者対応'],
    userProfile: { ageRange: '20代〜70代が中心', genderRatio: '女性75% / 男性25%', purpose: ['姿勢改善', '腰痛改善', 'スポーツパフォーマンス向上', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'キャデラック', 'チェア', '更衣室'] },
  },
  {
    name: 'STANCE（スタンス）豊中',
    image: '/images/studios/the-silk.webp',
    rating: 4.6, reviewCount: 92,
    reviews: [
      { author: 'E.N', rating: 5, date: '1週間前', text: '曽根駅から徒歩1分！女性専用で6人制のグループレッスン。周りを気にせず体を動かせるのが嬉しいです。' },
      { author: 'R.K', rating: 5, date: '2週間前', text: 'ヨガとピラティスの両方が受けられるのが魅力。少人数制なのでしっかり見てもらえます。' },
      { author: 'M.A', rating: 4, date: '3週間前', text: '女性専用で清潔感のあるスタジオ。料金も良心的で続けやすいです。スタッフの対応も丁寧。' },
    ],
    price: '月4回 8,800円〜', trial: '体験レッスンあり',
    features: ['女性専用', '曽根駅徒歩1分', '6人制少人数', 'ヨガ＆ピラティス'],
    description: '阪急宝塚線曽根駅から徒歩1分の女性専用スタジオ。グループレッスンは6人制の少人数で、周りを気にせず体を動かせる。ヨガとピラティスの両方のレッスンが受けられ、気分や目的に合わせて選べるのが魅力。',
    access: '阪急宝塚線「曽根駅」徒歩1分',
    address: '大阪府豊中市曽根エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '月4回プラン', description: '女性専用6人制グループレッスン。ヨガ＆ピラティス選択可能。', price: '月4回 8,800円〜（税込）' },
    options: ['通い放題プラン', '体験レッスンあり', 'ヨガレッスンも受講可', '6人制少人数'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', '姿勢改善', 'リフレッシュ', 'ストレス発散'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['マット', 'プロップス', '更衣室', 'ロッカー'] },
  },
  {
    name: 'ピラティスミラー 豊中',
    image: '/images/studios/pilates-mirror.webp',
    rating: 4.5, reviewCount: 78,
    reviews: [
      { author: 'K.T', rating: 5, date: '1週間前', text: 'コナミスポーツクラブが展開する女性専用スタジオ。鏡を見ながらフォームを確認できるので効果的です。1回30分で手軽。' },
      { author: 'S.M', rating: 5, date: '2週間前', text: '豊中駅から徒歩7分。月額11,000円で月6回通えるのでコスパが良い。少人数制で丁寧に見てもらえます。' },
      { author: 'A.H', rating: 4, date: '3週間前', text: '施設がきれいで清潔感がある。女性専用なので安心して通えます。定休日は水曜なので注意。' },
    ],
    price: '月額 11,000円（月6回）', trial: '体験レッスン 2,200円',
    features: ['女性専用', 'コナミ運営', '1回30分', '鏡活用レッスン'],
    description: 'コナミスポーツクラブが展開する女性専用マシンピラティススタジオ。阪急豊中駅から徒歩7分。「鏡」を活用したレッスンで自分のフォームを確認しながら効果的にトレーニング。1回30分の少人数制。',
    access: '阪急宝塚線「豊中駅」徒歩7分',
    address: '大阪府豊中市岡上の町4丁目3-2',
    popularPlan: { name: '月会員プラン', description: '女性専用。鏡を活用した30分マシンピラティス。月6回まで。', price: '月額 11,000円（税込）' },
    options: ['月6回まで利用可能', '7回目以降 1回1,100円', '体験レッスン2,200円', '入会金11,000円'],
    userProfile: { ageRange: '30代〜60代が中心', genderRatio: '女性100%（女性専用）', purpose: ['姿勢改善', 'ボディメイク', '健康維持', '運動不足解消'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '毎週水曜日', facilities: ['リフォーマー', 'ミラー', '更衣室', 'ロッカー'] },
  },
  {
    name: 'Rintosull（リントスル）豊中店',
    image: '/images/studios/rintosull.webp',
    rating: 4.5, reviewCount: 85,
    reviews: [
      { author: 'Y.N', rating: 5, date: '1週間前', text: '女性専用で安心。映像×インストラクターのハイブリッドレッスンが分かりやすくて初心者にもおすすめ。' },
      { author: 'K.M', rating: 5, date: '2週間前', text: '月額8,800円〜の通い放題がコスパ最高。LAVAと同じ系列で信頼感もあります。' },
      { author: 'T.K', rating: 4, date: '3週間前', text: 'スタジオがきれいで気持ちよく通えます。レッスンの種類も豊富で飽きません。' },
    ],
    price: '月額 8,800円〜', trial: '体験レッスンあり',
    features: ['女性専用', '通い放題あり', '映像×インストラクター', 'LAVA系列'],
    description: 'ホットヨガLAVAが手がける女性専用マシンピラティススタジオ。大型スクリーンの映像とインストラクターのハイブリッドレッスンで初心者でも安心。月額8,800円〜とリーズナブルな通い放題プランが魅力。',
    access: '豊中エリア（詳細は公式サイトでご確認ください）',
    address: '大阪府豊中市内（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '通い放題プラン', description: '女性専用マシンピラティス。映像×インストラクターのハイブリッドレッスン。', price: '月額 8,800円〜（税込）' },
    options: ['月額8,800円〜', '対象ブランド全店通い放題コースあり', '体験レッスンあり', 'LAVA会員優待あり'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '運動不足解消'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', '大型スクリーン', '更衣室', 'ロッカー'] },
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！豊中エリアのスタジオはほとんどが初心者歓迎。STANCEは少人数6人制で丁寧に見てもらえ、Rintosullは映像×インストラクターのハイブリッドレッスンで分かりやすいです。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。豊中はマシン専門スタジオが充実しています。' },
  { question: '豊中のピラティスの料金相場は？', answer: 'グループ月4回で8,800円〜9,625円程度。通い放題はRintosullが月額8,800円〜。パーソナルは1回7,500円〜8,500円。梅田に比べて全体的にリーズナブルです。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に増やすと効果的です。STANCEやRintosullの通い放題プランなら毎日でも通えます。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2-3ヶ月の継続で体の変化を実感する方が多いです。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。zen placeはグループ体験1,000円、ピラティスミラーは2,200円で試せます。靴下（グリップソックス推奨）も忘れずに。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'zen place豊中、studio Pilates remove、Doux pilates studioは男性も通えます。STANCE、ピラティスミラー、Rintosullは女性専用です。' },
  { question: '豊中駅と曽根駅、どちらが便利？', answer: '豊中駅にはzen placeとstudio Pilates removeがあり、曽根駅にはDoux pilates studioとSTANCEがあります。自宅からの最寄り駅で選ぶのがおすすめです。' },
  { question: '豊中は大阪空港に近いですが関係ありますか？', answer: '豊中市は大阪空港（伊丹空港）に近接していますが、スタジオは住宅地にあるため飛行機の騒音は気になりません。空港従事者の方も多く通っています。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。姿勢改善は比較的早く、ボディメイクは3ヶ月程度の継続がおすすめです。' },
]

export default function ToyonakaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '豊中', url: 'https://pilates-biyori.com/area/toyonaka/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年08月01日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス豊中おすすめ6選！<br className="hidden md:block" />
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
              <span className="text-warm-600">豊中</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="豊中" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「豊中で人気のピラティススタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、豊中エリアでおすすめのピラティススタジオ6選をまとめました。豊中は阪急宝塚線沿線の閑静な住宅地で、大阪空港にも近接。落ち着いた環境でピラティスを楽しめるスタジオが充実しています。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>豊中でピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>阪急宝塚線沿線で駅近スタジオを見つけたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>落ち着いた住宅地で通いやすいスタジオがいい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="豊中" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              豊中のおすすめピラティススタジオ6選
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
              豊中のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">8,800円〜9,625円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 7,500円〜8,500円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">通い放題プラン</td>
                    <td className="px-4 py-3">月額 8,800円〜14,960円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">1,000円〜2,200円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              豊中は北摂エリアの住宅地で、梅田に比べて料金がリーズナブル。特にパーソナルレッスンは1回7,500円〜と、都心部に比べてお手頃です。近隣の<Link href="/area/senri-chuo/" className="text-warm-700 underline hover:text-warm-900">千里中央</Link>や<Link href="/area/esaka/" className="text-warm-700 underline hover:text-warm-900">江坂</Link>エリアと比較検討する方も多いです。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              豊中でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">豊中駅と曽根駅でスタジオが分かれる</h3>
                <p className="text-warm-600 leading-relaxed">
                  豊中エリアのスタジオは阪急宝塚線の「豊中駅」と「曽根駅」周辺に分かれています。zen placeとstudio Pilates removeは豊中駅、Doux pilates studioとSTANCEは曽根駅が最寄り。自宅からの最寄り駅で選ぶと継続しやすいです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">パーソナル専門スタジオが充実</h3>
                <p className="text-warm-600 leading-relaxed">
                  豊中エリアはstudio Pilates removeやDoux pilates studioなど、パーソナル専門の本格派スタジオが充実しているのが特徴。腰痛や肩こりなど体の不調を改善したい方や、本格的にピラティスに取り組みたい方に最適なエリアです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">住宅地ならではの落ち着いた環境</h3>
                <p className="text-warm-600 leading-relaxed">
                  豊中は閑静な住宅地のため、スタジオも落ち着いた雰囲気が多いです。都心の喧騒を離れてリラックスしてレッスンに集中したい方に向いています。駐車場のあるスタジオもあるので、車で通いたい方は事前に確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">阪急沿線の便も活用しよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  阪急宝塚線で梅田まで約15分。zen placeなら全国相互利用で梅田のスタジオにも通えます。また、<Link href="/area/senri-chuo/" className="text-warm-700 underline hover:text-warm-900">千里中央</Link>方面へはモノレールやバスでアクセス可能。選択肢を広げて最適なスタジオを見つけましょう。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>パーソナルスタジオはウェア自由度高め</strong>。studio Pilates removeやDouxは完全プライベートなので、あまり気を遣わなくて大丈夫です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。マシンに引っかかる恐れがあるため、ピアス・ネックレス・腕時計はロッカーに預けるのが安全です。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>豊中エリアの豆知識：</strong>豊中は阪急宝塚線沿線の閑静な住宅地。服部緑地や豊島公園など緑豊かな公園が多く、レッスン後にウォーキングを楽しむ方も。大阪空港にも近いため、CAやパイロットなど航空関係者が通うスタジオもあるそうです。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Search by Preference */}
        <section className="py-16 bg-white" id="kodawari">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              目的別おすすめスタジオ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">リーズナブルに通い放題。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（月額 8,800円〜）</li>
                  <li className="text-warm-700">• STANCE（月4回 8,800円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">本格パーソナル</h3>
                <p className="text-warm-600 text-sm mb-4">充実の設備でマンツーマン。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• studio Pilates remove（25台マシン）</li>
                  <li className="text-warm-700">• Doux pilates studio（幅広い年齢対応）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">女性だけの安心空間。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STANCE（6人制少人数）</li>
                  <li className="text-warm-700">• ピラティスミラー（30分手軽）</li>
                  <li className="text-warm-700">• Rintosull（通い放題）</li>
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
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回〜通い放題</p>
                <p className="text-sm text-warm-600 mb-4">グループレッスン中心。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（8,800円〜）</li>
                  <li>• STANCE（8,800円〜/月4回）</li>
                  <li>• zen place（9,625円〜/月4回）</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 7,500円〜/回</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">個別指導で確実に効果。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Doux pilates（7,500円〜/回）</li>
                  <li>• studio Pilates remove（8,500円〜/回）</li>
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
                <p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">豊中の料金相場はグループ月4回で8,800円〜。パーソナルは1回7,500円〜。入会金やキャンペーンも確認しましょう。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">zen placeはグループ体験1,000円。まずは2-3スタジオの体験を受けて比較しましょう。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">豊中駅か曽根駅か、最寄り駅に合わせて選びましょう。車で通いたい方は駐車場の有無も確認。</p>
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
            <p className="text-warm-600 leading-relaxed mb-6">今回は豊中エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？</p>
            <p className="text-warm-600 leading-relaxed mb-6">この記事では豊中にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。</p>
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
      <ConsultantSection areaKey="toyonaka" areaName="豊中" />

      <RelatedAreas currentSlug="toyonaka" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
