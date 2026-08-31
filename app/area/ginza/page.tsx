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
  alternates: { canonical: 'https://biyori-pilates.com/area/ginza/' },
  title: '【2026年9月最新】ピラティス銀座おすすめ11選！人気スタジオの料金プランを簡単比較！',
  description: '【2026年4月最新】銀座のおすすめピラティススタジオ11選を徹底比較。グループ月4回9,625円〜、パーソナル1回6,600円〜の料金相場、女性専用・マシン充実のスタジオ情報、選び方まで完全網羅。',
  keywords: 'ピラティス,銀座,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 銀座二丁目スタジオ',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    price: 'マットグループ 月4回 9,625円〜',
    trial: '体験レッスン 500円〜',
    features: ['マット&マシン', '初心者歓迎', '銀座一丁目駅徒歩1分', '男性OK'],
    description: '全国100店舗以上展開の大手ピラティススタジオ。有楽町線「銀座一丁目駅」10番出口から徒歩1分の好立地。マットグループ、マシン（リフォーマー）グループ、プライベートレッスンと幅広いメニューを提供。経験豊富なインストラクターが一人ひとりに合わせた丁寧な指導を行います。',
    access: '有楽町線「銀座一丁目駅」10番出口 徒歩1分 / 銀座線・日比谷線・丸ノ内線「銀座駅」A13出口 徒歩4分',
    address: '東京都中央区銀座2-11-15 SF銀座ビル2F',
    popularPlan: {
      name: 'リフォーマーグループ（月4回）',
      description: 'マシン（リフォーマー）を使ったグループレッスン。少人数制で丁寧な指導。',
      price: '月4回 15,400円（税込）〜',
    },
    options: [
      'マットグループ（月4回 9,625円〜）',
      'リフォーマーグループ（月4回 15,400円〜）',
      'プライベートレッスン（1回 9,900円〜）',
      'ウェアレンタル・タオルレンタルあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '月〜金 7:00〜21:00 / 土日 7:30〜17:00',
      closed: '月末不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'ウォーターサーバー'],
    },
  },
  {
    name: 'ピラティスK 銀座店',
    image: '/images/studios/pilates-k.webp',
    price: 'マンスリー4メンバー 13,420円',
    trial: '体験レッスン 2,000円',
    features: ['マシンピラティス専門', '女性専用', '銀座一丁目駅徒歩1分', 'グループレッスン'],
    description: '「30歳からの本気ボディメイク」がコンセプトの女性専用マシンピラティス専門スタジオ。全国54店舗展開。銀座一丁目駅7番出口から徒歩1分。音楽に合わせた独自プログラムで楽しくボディメイク。初心者から経験者まで個人のペースに合わせたプログラムを用意。',
    access: '有楽町線「銀座一丁目駅」7番出口 徒歩1分 / 銀座線「銀座駅」A13出口 徒歩4分 / JR「有楽町駅」京橋口 徒歩6分',
    address: '東京都中央区銀座1-6-10 上一ビルディング7F',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '月4回のマシンピラティスレッスン。女性専用で安心して通える人気プラン。',
      price: '月4回 13,420円（税込）',
    },
    options: [
      'マンスリー4メンバー（月4回 13,420円）',
      'マンスリーデイメンバー（14,520円）',
      'マンスリーフルメンバー（16,170円）',
      '追加受講料（1回 2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', 'ストレス発散', '体幹強化'],
    },
    basicInfo: {
      hours: '月〜金 9:30〜16:00 / 17:30〜22:00 / 土日祝 9:30〜20:00',
      closed: '第一月曜日',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '女性専用'],
    },
  },
  {
    name: 'the SILK 銀座店',
    image: '/images/studios/the-silk.webp',
    price: 'Standard4 15,070円〜',
    trial: '体験レッスン 無料',
    features: ['マシンピラティス専門', '女性専用', '銀座駅徒歩2分', '音楽×マシン'],
    description: '女性専用マシンピラティス専門スタジオ。銀座駅A3出口から徒歩2分の好立地。最新のリフォーマーマシンを完備し、音楽に合わせた独自プログラムで楽しくトレーニング。世界水準のピラティス指導を提供しています。',
    access: '銀座線・日比谷線・丸ノ内線「銀座駅」A3出口 徒歩2分 / 都営浅草線「東銀座駅」A1出口 徒歩3分',
    address: '東京都中央区銀座5-9-12 ダイヤモンドビル3F',
    popularPlan: {
      name: 'Standard4（月4回）',
      description: '女性専用マシンピラティスの基本プラン。音楽に合わせた50分のグループレッスン。',
      price: '月4回 15,070円（税込）〜',
    },
    options: [
      'Standard4（月4回 15,070円〜）',
      'Full（通い放題）',
      'Full Day（デイタイム通い放題）',
      '体験レッスン無料キャンペーン実施中',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '7:30〜21:00',
      closed: '年末年始（12/29〜1/3）',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '女性専用'],
    },
  },
  {
    name: 'BDC PILATES 銀座スタジオ',
    image: '/images/studios/bdc-pilates.webp',
    price: 'グループ 月額 15,400円〜',
    trial: '体験レッスン 3,850円',
    features: ['プロダンサー養成校プロデュース', '少人数制（最大8名）', '銀座一丁目駅徒歩1分', '本格的'],
    description: '40年以上の実績を持つプロダンサー養成校「ブロードウェイダンスセンター(BDC)」がプロデュースするマシンピラティス専門スタジオ。銀座一丁目駅から徒歩1分。最大8名の少人数制にこだわった質の高いグループレッスンを提供。',
    access: '有楽町線「銀座一丁目駅」徒歩1分 / 銀座線「銀座駅」徒歩4分 / JR「有楽町駅」徒歩3分',
    address: '東京都中央区銀座（銀座一丁目駅徒歩1分）',
  },
  {
    name: 'BIRTH Pilates Studio（バースピラティス）',
    image: '/images/studios/birth-pilates-ginza.webp',
    price: '1回 9,600円',
    trial: '体験レッスン 平日4,500円 / 土日祝5,500円',
    features: ['完全個室', 'パーソナル専門', 'マシンピラティス', 'マタニティ対応'],
    description: '銀座の完全個室マシンピラティス専門スタジオ。完全予約制のパーソナルレッスンで、一人ひとりに合わせたオーダーメイドの指導。マタニティ・産後ピラティスにも対応。プライベート空間で集中してトレーニングできます。',
    access: '都営浅草線「東銀座駅」A7出口 徒歩4分 / 有楽町線「新富町駅」1番出口 徒歩4分 / 有楽町線「銀座一丁目駅」11番出口 徒歩4分',
    address: '東京都中央区銀座1-20-5 銀座清和ビル6F',
  },
  {
    name: 'ピラティス&ジム 1to1 銀座店',
    image: '/images/studios/pilates-gym-1to1.webp',
    price: '1回 6,600円〜',
    trial: '体験レッスン 無料',
    features: ['パーソナル', 'マシンピラティス&ゆるトレ', '銀座一丁目駅徒歩1分', '入会金無料'],
    description: 'マシンピラティスとゆるトレを組み合わせた女性のためのボディメイクスタジオ。銀座一丁目駅10番出口から徒歩1分。入会金無料で月額6,600円から通えるリーズナブルな料金設定。無料カウンセリング&体験レッスンあり。',
    access: '有楽町線「銀座一丁目駅」10番出口 徒歩1分 / 日比谷線「銀座駅」A13出口 徒歩3分 / JR「有楽町駅」徒歩6分',
    address: '東京都中央区銀座1-15-13 VORT銀座807',
  },
  {
    name: 'zen place pilates 銀座四丁目スタジオ',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    price: 'マットグループ 月4回 9,625円〜',
    trial: '体験レッスン 500円〜',
    features: ['マット&マシン', '東銀座駅徒歩1分', '男性OK', '初心者歓迎'],
    description: 'zen placeの銀座エリア2店舗目。東銀座駅5番出口から徒歩1分。マットグループ、マシングループ、プライベートレッスンと幅広く対応。銀座二丁目店と他店利用も可能。',
    access: '日比谷線「東銀座駅」5番出口 徒歩1分',
    address: '東京都中央区銀座（東銀座駅徒歩1分）',
  },
  {
    name: 'the SILK 銀座一丁目店',
    image: '/images/studios/the-silk.webp',
    price: 'Standard4 15,070円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', 'マシンピラティス', '銀座一丁目駅徒歩2分', '音楽×マシン'],
    description: 'the SILKの銀座エリア2店舗目。銀座一丁目駅から徒歩2分。女性専用のマシンピラティス専門スタジオ。銀座店と同じ高品質なレッスンを提供。',
    access: '有楽町線「銀座一丁目駅」徒歩2分',
    address: '東京都中央区銀座（銀座一丁目駅徒歩2分）',
  },
  {
    name: 'BDC PILATES 銀座並木スタジオ',
    image: '/images/studios/bdc-pilates.webp',
    price: 'グループ 月額 15,400円〜',
    trial: '体験レッスン 3,850円',
    features: ['マシンピラティス専門', '少人数制', '銀座エリア', 'スタイリッシュ空間'],
    description: 'BDC PILATESの銀座エリア2店舗目。銀座並木通りに位置し、窓が大きくスタイリッシュで気持ちの良い空間。最大8名の少人数制グループレッスン。',
    access: '銀座駅より徒歩圏内',
    address: '東京都中央区銀座（銀座並木通り）',
  },
  {
    name: 'Bloom Pilates 銀座スタジオ',
    image: '/images/studios/bloom-pilates.webp',
    price: 'お問い合わせください',
    trial: '体験レッスンあり',
    features: ['マシンピラティス', '銀座エリア', '個室あり', '丁寧な指導'],
    description: '銀座エリアのマシンピラティススタジオ。個室でのプライベートレッスンにも対応。丁寧な指導で初心者から経験者まで幅広く対応しています。',
    access: '銀座駅より徒歩圏内',
    address: '東京都中央区銀座',
  },
  {
    name: 'Dr.ピラティス 銀座店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11979O.1.Z164554L.U1357808',
    image: '/images/studios/dr-pilates.webp',
    price: '月4回(45分) 29,700円〜 / 月4回(60分) 39,600円〜',
    trial: '体験トレーニング 7,100円（無料キャンペーン実施店舗あり）',
    features: ['マンツーマン（パーソナル）', 'マシン・マット両対応', '医師推奨パーソナルジムNo.1受賞'],
    description: '医師推奨のパーソナルジム受賞歴を持つDr.トレーニング系列のパーソナルピラティススタジオ。マシン・マット両対応のマンツーマン指導で、姿勢改善やボディメイクを目指せる。銀座エリア（詳細は公式サイト参照）。',
    access: '銀座エリア（詳細は公式サイト参照）',
    address: '東京都（詳細は公式サイト参照）',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！銀座エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。経験豊富なインストラクターが基礎から丁寧に指導してくれるので、運動が苦手な方でも安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。',
  },
  {
    question: '銀座のピラティススタジオの料金相場は？',
    answer: '銀座エリアのピラティススタジオの料金相場は、グループレッスン月4回で9,000円〜16,000円程度。パーソナルレッスンは1回6,600円〜10,000円が相場です。体験レッスンは無料〜3,850円と幅があるので、まずは体験で試してみるのがおすすめです。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: 'ピラティス初心者は週1-2回（月4-8回）がおすすめ。慣れてきたら週2-3回に増やすと効果を実感しやすくなります。大切なのは継続すること。無理のないペースで長く続けることが、理想の身体を手に入れる近道です。',
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
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズ。ヨガは柔軟性と精神的なリラックスを重視します。ピラティスは筋力強化、ヨガは心身のバランスを整えることが主な目的。どちらも素晴らしいエクササイズなので、目的に合わせて選びましょう。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。デスクワークが多い方や立ち仕事の方にもおすすめです。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスで効果が表れだすのは「2ヶ月を過ぎた頃」から。これは人間の細胞が生まれ変わるサイクルがそのくらいだからです。すぐに変化が表れなくても心配せず、最低でも2ヶ月は継続するのがおすすめです。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれ良さがあります。パーソナルは一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方におすすめ。グループは料金が安く、仲間と楽しく続けられるのが魅力。まずは体験で両方試してみるのがいいですよ。',
  },
]

export default function GinzaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '銀座', url: 'https://pilates-biyori.com/area/ginza/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年09月01日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス銀座おすすめ11選！<br className="hidden md:block" />
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
              <span className="text-warm-600">銀座</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="銀座" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「銀座で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、銀座エリアでおすすめのピラティススタジオ11選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>銀座でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>料金やレッスン内容を比較したい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>体験レッスンが安いスタジオを知りたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>仕事帰りに通えるスタジオがいい</span>
                </li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">
              それではさっそく見ていきましょう！
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="銀座" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              銀座のおすすめピラティススタジオ11選
            </h2>
            <div className="space-y-8">
              {[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
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
                  月額1万円前後で通えるスタジオ。グループレッスンで気軽に始められます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（マット月4回 9,625円〜）</li>
                  <li className="text-warm-700">• ピラティス&ジム 1to1（1回 6,600円〜）</li>
                  <li className="text-warm-700">• ピラティスK（月4回 13,420円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマン指導で効果を最大化。完全個室やオーダーメイドレッスンで集中できます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• BIRTH Pilates Studio（完全個室）</li>
                  <li className="text-warm-700">• ピラティス&ジム 1to1（体験無料）</li>
                  <li className="text-warm-700">• zen place pilates（プライベートあり）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・通いやすさ</h3>
                <p className="text-warm-600 text-sm mb-4">
                  銀座一丁目駅・銀座駅から徒歩2分以内。複数路線からアクセス可能。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 銀座二丁目（銀座一丁目駅徒歩1分）</li>
                  <li className="text-warm-700">• ピラティスK（銀座一丁目駅徒歩1分）</li>
                  <li className="text-warm-700">• the SILK 銀座店（銀座駅徒歩2分）</li>
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
                週2-3回（月8-12回）がおすすめ。しっかりと身体を変えたい方は頻度を上げることで効果も早く現れます。3-6ヶ月継続すると、周りからも「痩せた？」と言われるレベルの変化が期待できます。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜13,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">グループ</p>
                <p className="text-sm text-warm-600 mb-4">
                  マットグループやリーズナブルなマシンレッスン。初心者が気軽に始められる。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates（マット月4回 9,625円〜）</li>
                  <li>• ピラティスK（月4回 13,420円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜16,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオ。少人数制グループレッスン。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• the SILK（月4回 15,070円〜）</li>
                  <li>• BDC PILATES（月額 15,400円〜）</li>
                  <li>• zen place（リフォーマー月4回 15,400円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 25,000円〜/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全プライベートレッスン。短期集中で結果を出したい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• BIRTH Pilates（1回 9,600円）</li>
                  <li>• 1to1 銀座（1回 6,600円〜）</li>
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
                  まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、体幹強化、リラックスなど、目的によって最適なスタジオやプログラムは変わります。目的が明確だとスタジオ選びもスムーズになりますよ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  銀座エリアの料金相場は、グループレッスン月4回で9,000円〜16,000円程度、パーソナルは1回6,600円〜10,000円程度。無理なく継続できる予算を決めましょう。料金だけでなく、入会金やレンタル料なども確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。銀座エリアでは無料〜3,850円程度で体験レッスンを提供しているスタジオが多いので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。銀座は銀座線・丸ノ内線・日比谷線・有楽町線・都営浅草線と多くの路線が利用でき、JR有楽町駅からも徒歩圏内。仕事帰りやショッピングのついでに立ち寄れる立地が魅力です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              銀座のピラティス料金相場【2026年4月最新】
            </h2>
            <div className="bg-warm-50 rounded-lg p-8 border border-warm-200 mb-8">
              <p className="text-warm-600 leading-relaxed mb-6">
                銀座・有楽町エリアは高級感のあるスタジオが多く、プライベートレッスンの選択肢が豊富なのが特徴です。東京メトロ銀座線・日比谷線・丸ノ内線、都営浅草線が利用でき、新橋・有楽町からも徒歩圏内。ラグジュアリーな空間で本格ピラティスを受けたい方に人気のエリアです。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">グループレッスン（月4回）</h3>
                  <p className="text-3xl font-bold text-warm-800 mb-2">9,625円〜15,400円</p>
                  <p className="text-sm text-warm-600">zen place pilates銀座のマット月4回9,625円〜が最安クラス。ピラティスKは月4回13,420円、the SILKは月4回15,070円〜。BDC PILATESは少人数制で月額15,400円〜と質重視の価格設定です。</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">パーソナルレッスン</h3>
                  <p className="text-3xl font-bold text-warm-800 mb-2">6,600円〜9,600円/回</p>
                  <p className="text-sm text-warm-600">ピラティス&ジム 1to1は1回6,600円〜と銀座エリアではリーズナブル。BIRTH Pilates Studioは完全個室で1回9,600円。zen placeのプライベートレッスンも人気です。</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-5 border border-warm-200">
                <h3 className="font-bold text-warm-900 mb-3">入会金・体験レッスン費用</h3>
                <p className="text-sm text-warm-600">入会金は10,000円〜33,000円が相場。キャンペーン期間中は無料になるスタジオも。体験レッスンは500円〜3,850円程度。銀座は複数スタジオが徒歩圏に密集しているため、1日で2〜3スタジオ体験のはしごも可能です。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              銀座でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">銀座1丁目〜8丁目で立地が分散</h3>
                <p className="text-warm-600 leading-relaxed">
                  銀座エリアはスタジオが1丁目から8丁目まで広範囲に点在しています。銀座駅・銀座一丁目駅・東銀座駅・有楽町駅のどの駅を使うかでアクセスのしやすさが変わります。zen placeは銀座二丁目と四丁目に2スタジオ、the SILKも銀座・銀座一丁目と複数展開。通勤経路に合わせて選びましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">ランチタイムレッスンの活用</h3>
                <p className="text-warm-600 leading-relaxed">
                  銀座・有楽町はオフィス街でもあるため、ランチタイム（12時〜13時台）のレッスンを設けているスタジオもあります。昼休みに効率よくトレーニングしたいビジネスパーソンは、30分〜40分の短時間レッスンがあるスタジオを選ぶのもおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">プライベートとグループのバランスを考えて</h3>
                <p className="text-warm-600 leading-relaxed">
                  銀座エリアはプライベート（パーソナル）レッスンが充実しているのが特徴です。BIRTH Pilates StudioやBloom Pilates、ピラティス&ジム 1to1などパーソナル専門スタジオが豊富。最初はグループで基礎を身につけ、目的が明確になったらパーソナルに切り替えると効率的です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">駐車場・駐輪場の確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  銀座は公共交通機関でのアクセスが基本ですが、車で通いたい方は近隣のコインパーキング情報も事前にチェックを。スタジオ提携の駐車場割引があるところは少ないため、電車利用がおすすめです。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが基本。銀座のスタジオは上品な雰囲気のところも多いですが、カジュアルなウェアで問題ありません。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>水分（500ml程度）</strong>：スタジオ近くにコンビニは多数ありますが、持参が確実です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>タオル</strong>：汗拭き用に1枚。マシン用は貸出されることが多いです。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>グリップソックス</strong>：マシンピラティスでは必須。スタジオで販売していることも多いです。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ストレッチの効く素材</strong>が必須。ピラティスでは脚を大きく動かすため、伸びの良い素材を選びましょう。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フィット感のあるウェア</strong>がベスト。インストラクターがフォームを確認しやすくなります。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>レンタル対応</strong>スタジオもあり。the SILKやピラティスKはウェアレンタルが用意されている場合もあります。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリーは外して</strong>参加。マシンに引っかかる恐れがあるため、貴金属類はロッカーに預けましょう。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>銀座エリアの豆知識：</strong>銀座のスタジオはビルの高層階に入っていることが多く、窓からの眺望が良いスタジオも。レッスン後は銀座通りや並木通りを散歩してリフレッシュする方も多いです。有楽町マルイやGINZA SIXでのショッピングと組み合わせて、充実した休日を過ごせます。
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
              今回は銀座のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              銀座は銀座線・丸ノ内線・日比谷線・有楽町線など複数路線が利用でき、JR有楽町駅からも徒歩圏内という抜群のアクセス。大手チェーンからプライベート専門まで、多彩なスタジオが集まるエリアです。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。
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
              初回限定の体験レッスン無料〜3,850円。<br />
              まずは気軽に体験してみましょう。
            </p>
            <Link
              href="/#studios"
              className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded"
            >
              おすすめスタジオ一覧に戻る
            </Link>
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
                <Link href="/area/toyosu/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">豊洲</Link>
                <Link href="/articles/pilates-ryokin-hakusho/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国ピラティス料金白書2026</Link>
              </div>
            </div>
          </div>
        </section>


      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="ginza" areaName="銀座" />

            {/* boost-hamamatsucho-202607 */}
            <div className="my-8 bg-white border border-warm-200 p-5">
              <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">近隣エリア</p>
              <p className="text-sm text-warm-700 font-light leading-relaxed">
                オフィス街で仕事帰りに通うなら、<Link href="/area/hamamatsucho/" className="text-warm-800 underline decoration-warm-300 hover:text-warm-900">浜松町・大門エリアのピラティススタジオ比較</Link>もあわせて検討できます。無料体験・料金・アクセスをまとめて比較できます。
              </p>
            </div>
      <RelatedAreas currentSlug="ginza" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
