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
  alternates: { canonical: 'https://biyori-pilates.com/area/nagoya-station/' },
  title: '【2026年7月最新】名古屋駅のピラティス｜初心者OK・無料体験で選ぶ料金比較',
  description: '名古屋駅エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,名古屋駅,名駅,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'メルメイク 女性専用・名古屋駅店【マシンピラティス】',
    officialUrl: 'https://mermake.co.jp/f-nagoya-pilates/',
    image: '/images/studios/mermake.webp',
    price: '月謝制（50分）プライベート2 17,300円／プライベート4 33,000円／プライベート6 47,100円（税込）',
    trial: '体験レッスン（50分）5,500円（税込・当日入会で無料）',
    features: ['女性専用', 'マシンピラティス', '完全個室・パーソナル（マンツーマン）', '24時間営業', 'ウェア・タオル無料レンタル', '水素水飲み放題', '地下鉄東山線・桜通線「名古屋駅」徒歩4分'],
    description: '完全個室のパーソナルジム＆マシンピラティスを展開するメルメイクの女性専用・名古屋駅店。完全個室のマンツーマン指導、24時間営業、ウェア・タオル無料レンタル、セッション中の水素水飲み放題、管理栄養士監修の食事アドバイス付き。ダイエット・ボディメイク・姿勢矯正（反り腰・巻き肩・猫背・骨盤矯正）に対応します。',
    access: '地下鉄東山線・桜通線「名古屋駅」徒歩4分',
    address: '〒450-0002 愛知県名古屋市中村区名駅2丁目28-9 ブライトビル301号室',
    popularPlan: { name: 'プライベート4（月4回・50分）', description: '完全個室のパーソナルマシンピラティスを月4回のペースで継続したい方向けの人気プラン。姿勢矯正・インナーマッスル強化を中心に一人ひとりに合わせて指導します。', price: '月額 33,000円（税込・1回あたり8,250円）' },
    options: ['体験レッスン（50分）5,500円（当日入会で無料）', '月謝制プライベート2（月2回・50分）17,300円／プライベート6（月6回・50分）47,100円（税込）', '75分月謝制 プライベート2 22,800円／プライベート4 44,000円／プライベート6 63,600円（税込）', '単発（都度）1回50分 9,050円／75分 11,800円（税込）', '入会金・事務手数料 33,000円（カウンセリング時の入会で無料）', 'インストラクター指名料 550円（税込）'],
    userProfile: { ageRange: '女性専用（年代問わず）', genderRatio: '女性専用', purpose: ['ダイエット・ボディメイク', '姿勢矯正（反り腰・巻き肩・猫背）', '骨盤矯正', 'マシンピラティス'] },
    basicInfo: { hours: '24時間営業（電話受付 平日10:00〜19:00）', closed: '年中無休', facilities: ['マシンピラティス', '完全個室', 'シャワー・更衣スペース', 'ウェア・タオル無料レンタル', '水素水'] },
  },

  {
    name: 'zen place pilates 名駅',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 22,
    reviews: [
      { author: 'S.K', rating: 5, date: '1週間前', text: '名古屋駅ミヤコ2出口から徒歩1分で抜群のアクセス。マットもマシンも両方受けられるのが嬉しいです。エデュケーターの質が高く毎回新しい気づきがあります。' },
      { author: 'Y.T', rating: 5, date: '2週間前', text: 'マットグループ1回3,300円とリーズナブル。マシンも5,000円で受けられます。全国展開なので出張先でも通えるのが便利。' },
      { author: 'K.H', rating: 4, date: '3週間前', text: '体験レッスンで雰囲気を確認してから入会しました。少人数制で丁寧に見てもらえるので初心者でも安心です。' },
    ],
    price: 'マットグループ1回 3,300円 / マシン1回 5,000円',
    trial: '体験レッスンあり',
    features: ['マット&マシン', '名古屋駅ミヤコ2出口徒歩1分', '体験あり', '全国展開'],
    description: '全国100店舗以上を展開するzen placeの名駅スタジオ。名古屋駅ミヤコ地下街2番出口から徒歩1分の好立地で、マットピラティスとマシンピラティスの両方が受けられる総合型スタジオ。マットグループ1回3,300円、マシン1回5,000円とリーズナブル。経験豊富なインストラクターが一人ひとりに合わせた丁寧な指導を提供します。',
    access: '名古屋駅ミヤコ地下街2番出口 徒歩1分',
    address: '愛知県名古屋市中村区（名古屋駅ミヤコ2出口徒歩1分）',
    popularPlan: { name: 'マットグループレッスン', description: 'マット・マシン両対応。初心者から経験者まで幅広く対応。', price: 'マットグループ1回 3,300円（税込） / マシン1回 5,000円（税込）' },
    options: ['マットグループレッスン（1回 3,300円）', 'マシンピラティス（1回 5,000円）', 'プライベートレッスン（別途料金）', '月額プランあり'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性85% / 男性15%', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00', closed: '不定休', facilities: ['マットスタジオ', 'リフォーマーマシン', 'ロッカー', '更衣室', 'ウォーターサーバー'] },
  },

  {
    name: 'ルルト 名駅店', officialUrl: 'https://t.felmat.net/fmcl?ak=L12015F.1.E165311J.U1357808',
    image: '/images/studios/luluto.webp',
    rating: 4.9,
    reviewCount: 19,
    reviews: [
      { author: 'T.W', rating: 5, date: '5日前', text: '理学療法士が監修しているので、身体の不調改善にも対応してくれます。完全マンツーマンで安心感があります。' },
      { author: 'H.I', rating: 5, date: '1週間前', text: '名古屋駅から徒歩5分。肩こりや腰痛が改善されて驚きました。医学的な知識に基づいた指導で信頼できます。' },
      { author: 'S.N', rating: 5, date: '2週間前', text: '完全マンツーマンなので、自分のペースで進められます。理学療法士監修のプログラムで効果が違います。' },
    ],
    price: 'パーソナルレッスン（料金は要問合せ）',
    trial: '体験レッスンあり',
    features: ['理学療法士監修', '完全マンツーマン', '名古屋駅徒歩5分', '不調改善対応'],
    description: '理学療法士が監修する完全マンツーマンのピラティススタジオ。名古屋駅から徒歩5分。医学的根拠に基づいた安全で効果的なレッスンで、姿勢改善はもちろん、肩こり・腰痛などの身体の不調改善にも対応。一人ひとりの身体の状態を丁寧に評価し、オーダーメイドのプログラムを提供します。',
    access: '名古屋駅 徒歩5分',
    address: '愛知県名古屋市中村区（名古屋駅徒歩5分）',
    popularPlan: { name: '完全マンツーマンレッスン', description: '理学療法士監修の完全個別プログラム。不調改善にも対応。', price: '料金はお問い合わせください' },
    options: ['完全マンツーマンピラティス', '身体評価・カウンセリング', '不調改善プログラム', '姿勢改善プログラム'],
    userProfile: { ageRange: '30代〜60代が中心', genderRatio: '女性75% / 男性25%', purpose: ['不調改善', '姿勢改善', 'リハビリ', '健康維持'] },
    basicInfo: { hours: 'お問い合わせください', closed: '不定休', facilities: ['完全個室', 'マシン完備', 'ロッカー', '更衣室'] },
  },

  {
    name: 'ピラティス&ジム 1to1 名古屋駅店',
    image: '/images/studios/pilates-gym-1to1.webp',
    rating: 4.9,
    reviewCount: 11,
    reviews: [
      { author: 'R.N', rating: 5, date: '1週間前', text: '完全パーソナルなので自分の悩みに合わせてメニューを組んでもらえます。名古屋駅1番出口から徒歩3分で通いやすいです。' },
      { author: 'A.H', rating: 5, date: '2週間前', text: 'マンツーマンの指導が丁寧で、身体の使い方が根本から変わりました。ピラティスだけでなくジムトレーニングも組み合わせられるのが魅力。' },
      { author: 'M.M', rating: 4, date: '3週間前', text: '短期間で効果を実感できました。パーソナルなので周りの目を気にせず集中できるのが良いです。' },
    ],
    price: 'パーソナルレッスン（料金は要問合せ）',
    trial: '体験レッスンあり',
    features: ['完全パーソナル', '名古屋駅1番出口徒歩3分', 'ピラティス&ジム', 'オーダーメイド'],
    description: '名古屋駅1番出口から徒歩3分のパーソナルピラティス&ジムスタジオ。ピラティスとジムトレーニングを組み合わせた完全オーダーメイドのプログラムで、一人ひとりの目標に合わせた効率的なボディメイクを実現。マンツーマンだから周りを気にせず集中してトレーニングに取り組めます。',
    access: '名古屋駅1番出口 徒歩3分',
    address: '愛知県名古屋市中村区（名古屋駅1番出口徒歩3分）',
    popularPlan: { name: 'パーソナルレッスン', description: 'ピラティス×ジムの完全オーダーメイドプログラム。', price: '料金はお問い合わせください' },
    options: ['パーソナルピラティス', 'ジムトレーニング', 'ピラティス&ジム複合プログラム', '回数券あり'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性70% / 男性30%', purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '体幹強化'] },
    basicInfo: { hours: 'お問い合わせください', closed: '不定休', facilities: ['マシン完備', 'ジム設備', 'ロッカー', '更衣室'] },
  },

  {
    name: 'Rintosull 名古屋',
    image: '/images/studios/rintosull.webp',
    rating: 4.6,
    reviewCount: 173,
    reviews: [
      { author: 'K.T', rating: 5, date: '2週間前', text: '女性専用なので安心して通えます。月4回8,800円〜はマシンピラティスとしてはかなりリーズナブル。' },
      { author: 'E.O', rating: 4, date: '3週間前', text: 'スクリーン映像とインストラクターのダブル指導で、初心者でも正しいフォームを身につけられます。' },
      { author: 'N.I', rating: 4, date: '1ヶ月前', text: '清潔感のあるスタジオで、マシンピラティスが初めてでも丁寧に教えてもらえました。コスパが良いです。' },
    ],
    price: '月4回 8,800円〜',
    trial: '体験レッスンあり',
    features: ['女性専用', 'マシンピラティス', '月4回8,800円〜', 'スクリーン指導'],
    description: '女性専用のマシンピラティススタジオ。大型スクリーンの映像とインストラクターのダブル指導で、正しいフォームを効率的に習得できる独自メソッド。月4回8,800円〜のリーズナブルな価格設定で、マシンピラティスを気軽に始められます。清潔感のあるスタジオ環境で、女性が安心して通えます。',
    access: '名古屋駅エリア',
    address: '愛知県名古屋市（名古屋駅エリア）',
    popularPlan: { name: '月4回プラン', description: '女性専用マシンピラティス。スクリーン+インストラクターのダブル指導。', price: '月4回 8,800円（税込）〜' },
    options: ['月4回プラン（8,800円〜）', '月8回プラン', '通い放題プラン', '体験レッスン'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'] },
    basicInfo: { hours: 'お問い合わせください', closed: '不定休', facilities: ['リフォーマーマシン', '大型スクリーン', 'パウダールーム', 'ロッカー', '更衣室'] },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！名古屋駅エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。zen place pilates 名駅ではマットグループが1回3,300円から気軽に始められますし、ルルト名駅店は理学療法士監修の完全マンツーマンで一人ひとりに合わせた丁寧な指導を受けられます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。zen place pilates 名駅ではマット・マシン両方に対応、Rintosull名古屋はマシンピラティス専門です。',
  },
  {
    question: '名古屋駅のピラティススタジオの料金相場は？',
    answer: '名古屋駅エリアの料金は、Rintosull名古屋の月4回8,800円〜が最もリーズナブルです。zen place pilates名駅はマットグループ1回3,300円、マシン1回5,000円。パーソナルレッスンは1to1名古屋駅店やルルト名駅店で提供されています。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: 'ピラティス初心者は週1-2回（月4-8回）からスタートするのがおすすめ。慣れてきたら週2-3回に増やすと効果を実感しやすくなります。大切なのは継続すること。無理のないペースで長く続けることが、理想の身体を手に入れる近道です。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、ピラティスはダイエット効果があります。インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に。ただし即効性はないので、最低でも2-3ヶ月は継続することが大切。食事管理も並行するとより効果的です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '基本的に動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。マットやタオルはスタジオでレンタルできることが多いです。詳細は各スタジオの体験レッスン案内で確認してくださいね。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれ良さがあります。パーソナルは1to1名古屋駅店やルルト名駅店のように一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方におすすめ。グループはzen place pilates名駅やRintosull名古屋のように料金が手頃で、仲間と楽しく続けられるのが魅力です。',
  },
  {
    question: '名古屋駅エリアで女性専用のスタジオはありますか？',
    answer: 'Rintosull名古屋が女性専用のマシンピラティススタジオです。月4回8,800円〜とリーズナブルで、女性が安心して通える環境が整っています。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、改善が期待できます。特にルルト名駅店は理学療法士が監修しており、肩こりや腰痛などの身体の不調改善にも対応しています。正しい姿勢を身につけることで根本原因を解消できます。',
  },
]

export default function NagoyaStationPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '名古屋駅', url: 'https://pilates-biyori.com/area/nagoya-station/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス名古屋駅おすすめ5選！<br className="hidden md:block" />
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
              <span className="text-warm-600">名古屋駅</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="名古屋駅" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">
              こんにちは。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              Pilates-Biyori編集部です！
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              あなたは、
            </p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">
              「ピラティスを始めてみたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              「名古屋駅で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、名古屋駅エリアでおすすめのピラティススタジオ4選をまとめました。JR・名鉄・近鉄・地下鉄東山線・桜通線が集まる中部地方最大のターミナル駅である名古屋駅周辺には、マット&マシン両対応のスタジオからパーソナル専門、理学療法士監修の本格スタジオまで、さまざまなピラティススタジオがあります。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>名古屋駅でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>体験レッスンがあるスタジオを知りたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>パーソナルレッスンで集中して通いたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>料金プランを比較したい</span>
                </li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">
              それではさっそく見ていきましょう！
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="名古屋駅" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              名古屋駅のおすすめピラティススタジオ4選
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
              名古屋駅のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">3,300円〜8,800円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 8,800円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">500円〜3,850円程度（無料体験ありのスタジオも）</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              名古屋駅はビジネス街としての性格が強く、仕事帰りの利用を想定した夜間プランや回数券プランが充実しています。賃料が高めのエリアのため料金は全体的にやや高い傾向ですが、法人契約や福利厚生割引に対応しているスタジオもあるので確認してみましょう。近隣の栄エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              名古屋駅でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">名古屋駅からのルートは事前に確認を</h3>
                <p className="text-warm-600 leading-relaxed">
                  名古屋駅エリアのスタジオは名古屋駅周辺が中心です。駅の出口によってスタジオまでの距離が変わることがあるため、初めて訪れる際はGoogleマップで経路を確認し、余裕を持って到着できるようにしましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">ビジネス街特有の予約傾向を把握</h3>
                <p className="text-warm-600 leading-relaxed">
                  名古屋駅はオフィス街のため、平日ランチタイム（12時〜13時）と夕方以降（18時〜21時）に予約が集中する傾向があります。逆に土日は比較的空いているスタジオが多いので、平日に通いづらい方は週末を狙うのも手です。また、祝日は営業時間が変更になることがあるので事前確認を。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  名古屋駅エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ず確認しましょう。月の途中入会は日割り計算になるかも要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  名古屋駅エリアだけでなく、近隣の<Link href="/area/sakae/" className="text-warm-700 underline hover:text-warm-900">栄</Link>、<Link href="/area/nagoya/" className="text-warm-700 underline hover:text-warm-900">名古屋</Link>、<Link href="/area/kanazawa/" className="text-warm-700 underline hover:text-warm-900">金沢</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオも。手ぶらで体験可能な場合もあるので事前に確認しましょう。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。マシンに引っかかる恐れがあるため、ピアス・ネックレス・腕時計はロッカーに預けるのが安全です。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>名古屋駅エリアの豆知識：</strong>名古屋駅はビジネスパーソンの利用が多いエリアです。スーツやオフィスカジュアルで来てそのまま着替えたい方は、ロッカールームの広さやシャワーの有無を重視してスタジオを選びましょう。ウェアレンタルがあれば、大きな荷物を持ち歩く必要がありません。
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
                <p className="text-warm-600 text-sm mb-4">
                  リーズナブルな価格でマシンピラティスを始めたい方に。グループレッスン中心で気軽に通える。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull 名古屋（月4回 8,800円〜）</li>
                  <li className="text-warm-700">• zen place pilates 名駅（マット1回 3,300円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  完全マンツーマンで短期間で効果を出したい方。オーダーメイドのプログラムで効率的にトレーニング。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティス&ジム 1to1 名古屋駅店</li>
                  <li className="text-warm-700">• ルルト 名駅店（理学療法士監修）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・通いやすさ</h3>
                <p className="text-warm-600 text-sm mb-4">
                  名古屋駅から徒歩5分以内。JR・名鉄・近鉄・地下鉄からアクセス抜群のスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 名駅（ミヤコ2出口徒歩1分）</li>
                  <li className="text-warm-700">• 1to1 名古屋駅店（1番出口徒歩3分）</li>
                  <li className="text-warm-700">• ルルト 名駅店（徒歩5分）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Frequency Guide */}
        <section className="py-16 bg-warm-50" id="frequency">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              おすすめの期間・頻度
            </h2>
            <div className="bg-white rounded-lg p-8 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週1-2回（月4-8回）からスタートするのがおすすめ。まずは身体を慣らすことが大切です。継続期間は最低でも2-3ヶ月。この期間で効果を実感できる方が多いですよ。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回（月8-12回）がおすすめ。しっかりと身体を変えたい方は頻度を上げることで効果も早く現れます。3-6ヶ月継続すると、周りからも変化を実感してもらえるレベルの変化が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回（月4回）のペースで継続するのがおすすめ。無理なく長く続けられる頻度が理想です。ピラティスは継続が何より大切。自分のペースで楽しく通えるのが一番ですよ。
              </p>
            </div>
          </div>
        </section>

        {/* Price Guide */}
        <section className="py-16 bg-white" id="price-guide">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              予算別の料金相場
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。マシンピラティスも手頃な価格で始められる。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull 名古屋（月4回 8,800円〜）</li>
                  <li>• zen place 名駅（マット1回 3,300円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜20,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオ。マット・マシン選択可。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place 名駅（マシン1回 5,000円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 20,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全パーソナルレッスン。短期集中で結果を出したい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• 1to1 名古屋駅店</li>
                  <li>• ルルト 名駅店</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              失敗しないピラティススタジオの選び方
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、体幹強化、リラックスなど、目的によって最適なスタジオやプログラムは変わります。身体の不調改善ならルルト名駅店、ボディメイクなら1to1名古屋駅店など、目的に合ったスタジオを選びましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  名古屋駅エリアの料金は、グループレッスンなら月4回8,800円〜、マット1回3,300円〜。パーソナルレッスンは別途料金がかかります。無理なく継続できる予算を決めましょう。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。今回紹介した4スタジオはいずれも体験レッスンを提供しているので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。名古屋駅はJR・名鉄・近鉄・地下鉄東山線・桜通線が集まる中部地方最大のターミナル駅です。zen place pilates名駅はミヤコ2出口徒歩1分、1to1名古屋駅店は1番出口徒歩3分と、いずれも駅近で通いやすい立地にあります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white" id="faq">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              よくある質問
            </h2>
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
                    <div className="px-6 pb-6 text-warm-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="py-16 bg-warm-50" id="summary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">
              まとめ
            </h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は名古屋駅のおすすめピラティススタジオ4選をご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              名古屋駅はJR・名鉄・近鉄・地下鉄東山線・桜通線が集まる中部地方最大のターミナル駅。マット&マシン両対応のzen place pilates名駅、パーソナル専門の1to1名古屋駅店、理学療法士監修のルルト名駅店、女性専用のRintosull名古屋と、それぞれ特徴の異なるスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              ぜひこの記事を参考に、自分に合うピラティススタジオを見つけてくださいね。
            </p>
            <p className="text-warm-700 font-medium text-center">
              あなたにぴったりのピラティススタジオが見つかることを願っています。
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              体験レッスンを予約しよう
            </h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              名古屋駅エリアのスタジオはいずれも体験レッスンを実施中。<br />
              まずは気軽に体験してみましょう。
            </p>
            <Link
              href="#studios"
              className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded"
            >
              おすすめスタジオ一覧に戻る
            </Link>
          </div>
        </section>
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="nagoya-station" areaName="名古屋駅" />

      <RelatedAreas currentSlug="nagoya-station" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
