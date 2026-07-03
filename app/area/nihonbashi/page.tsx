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
  alternates: { canonical: 'https://biyori-pilates.com/area/nihonbashi/' },
  title: '日本橋のピラティス｜初心者OK・無料体験で選ぶ料金比較【2026年7月】',
  description: '日本橋エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,日本橋,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 八重洲スタジオ',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 35,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '2週間前',
        text: '日本橋駅から徒歩3分で通いやすいです。銀座線・東西線・浅草線と複数路線使えるのでどこからでもアクセスしやすい。マットもマシンも両方受けられるのが嬉しいです。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '1ヶ月前',
        text: '少人数制なので丁寧に見てもらえます。AIによる背骨ムーブメント解析が面白く、デスクワークの癖が分かりました。',
      },
      {
        author: 'K.H',
        rating: 4,
        date: '3週間前',
        text: '全国展開しているので出張先でも通えるのが便利。日本橋の落ち着いた雰囲気のなかで集中してレッスンを受けられます。',
      },
    ],
    price: 'マットグループ 月4回 10,450円〜',
    trial: '体験レッスン 500円〜',
    features: ['マット&マシン', '初心者歓迎', '日本橋駅徒歩3分', '男性OK'],
    description: '全国100店舗以上展開の大手ピラティススタジオ。日本橋駅A7出口から徒歩3分の好立地。マットグループ、マシン（リフォーマー）グループ、プライベートレッスンと幅広いメニュー。世界初のAI「背骨ムーブメント解析」を導入し、科学的なアプローチも可能。',
    access: '日本橋駅A7出口 徒歩3分 / 日本橋駅B3出口 徒歩3分 / 東京駅八重洲北口 徒歩5分',
    address: '東京都中央区日本橋2-3-21 八重洲セントラルビル6F',
    popularPlan: {
      name: 'リフォーマーグループ（月4回）',
      description: 'マシン（リフォーマー）を使ったグループレッスン。少人数制で丁寧な指導。',
      price: '月4回 15,400円（税込）〜',
    },
    options: [
      'マットグループ（月4回 10,450円〜）',
      'リフォーマーグループ（月4回 15,400円〜）',
      'フリープラン（月16,940円〜）',
      'プライベートレッスン（月4回 37,400円〜）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '体幹強化', '仕事帰りのリフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:30〜22:00 / 土日祝 8:00〜19:30',
      closed: '月末不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'ウォーターサーバー'],
    },
  },
  {
    name: 'Beat Pilates 日本橋小伝馬町店',
    image: '/images/studios/beat-pilates-nihonbashi.webp',
    rating: 4.7,
    reviewCount: 19,
    reviews: [
      {
        author: 'R.N',
        rating: 5,
        date: '1週間前',
        text: '暗闇×音楽のマシンピラティスが最高に楽しい！女性専用なので周りを気にせず集中できます。小伝馬町駅からすぐ。',
      },
      {
        author: 'A.H',
        rating: 5,
        date: '2週間前',
        text: '月3回9,600円からというリーズナブルな料金が嬉しい。暗闇なので初心者でも恥ずかしくないです。',
      },
      {
        author: 'M.M',
        rating: 4,
        date: '3週間前',
        text: '音楽に合わせて動くので飽きない。体験1,500円で気軽に始められました。2ヶ月で体が引き締まってきた実感があります。',
      },
    ],
    price: '月3回 9,600円〜',
    trial: '体験レッスン 1,500円（キャンペーン価格）',
    features: ['暗闇×音楽', '女性専用', '小伝馬町駅徒歩4分', 'マシンピラティス専門'],
    description: '女性専用・暗闘系マシンピラティス専門スタジオ。小伝馬町駅・馬喰横山駅から徒歩4分。暗闇×音楽×マシンピラティスの融合レッスンが特徴。周りの目を気にせず集中できる環境で、楽しみながら理想のボディラインを目指せます。',
    access: '日比谷線「小伝馬町駅」徒歩4分 / 都営新宿線「馬喰横山駅」徒歩4分',
    address: '東京都中央区日本橋大伝馬町11-8 HATビル3F',
    popularPlan: {
      name: 'フルタイム（通い放題）',
      description: '暗闇×音楽×マシンピラティスのレッスンに通い放題。女性専用で安心。',
      price: '月額 14,400円（税込）〜',
    },
    options: [
      '月3回プラン（9,600円〜）',
      '月4回プラン（11,520円〜）',
      'デイタイムプラン（12,800円〜）',
      'ナイトプラン（12,800円〜）',
      'フルタイム通い放題（14,400円〜）',
    ],
    userProfile: {
      ageRange: '20代〜30代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ストレス発散', 'ダイエット', '楽しく運動'],
    },
    basicInfo: {
      hours: '平日 10:00〜22:00 / 土日祝 10:00〜18:00',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', '暗闇スタジオ', '女性専用'],
    },
  },
  {
    name: 'マシンピラティス ウィング 東京日本橋',
    image: '/images/studios/wing-pilates-nihonbashi.webp',
    rating: 4.9,
    reviewCount: 20,
    reviews: [
      {
        author: 'T.W',
        rating: 5,
        date: '5日前',
        text: '完全個室のパーソナルなので、自分だけのオーダーメイドレッスンが受けられます。インストラクターの知識が豊富で信頼できます。',
      },
      {
        author: 'H.I',
        rating: 5,
        date: '1週間前',
        text: '姿勢改善に特化しているだけあって、3ヶ月で周りから「姿勢が良くなった」と言われるようになりました。',
      },
      {
        author: 'S.N',
        rating: 5,
        date: '2週間前',
        text: '世界最高峰のマシンを使ったレッスン。国際ライセンス保持のインストラクターなので安心感があります。',
      },
    ],
    price: 'お問い合わせください',
    trial: '体験レッスンあり',
    features: ['完全個室', 'パーソナル専門', '三越前駅徒歩6分', '姿勢改善特化'],
    description: '完全個室のパーソナルマシンピラティススタジオ。三越前駅・人形町駅・小伝馬町駅から徒歩6分。国際ライセンス保持のインストラクターが世界最高峰のマシンを使用して指導。姿勢改善とボディメイクに特化した、1万人以上の指導実績に基づくプログラム。',
    access: '銀座線「三越前駅」徒歩6分 / 日比谷線「人形町駅」徒歩6分 / 日比谷線「小伝馬町駅」徒歩6分',
    address: '東京都中央区（三越前・人形町・小伝馬町エリア）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '完全個室で世界最高峰マシンを使用したマンツーマンレッスン。',
      price: 'お問い合わせください',
    },
    options: [
      'パーソナルレッスン（お問い合わせ）',
      '体験レッスン（お問い合わせ）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['姿勢改善', 'ボディメイク', '不調改善', '美しいボディライン'],
    },
    basicInfo: {
      hours: 'お問い合わせください',
      closed: '不定休',
      facilities: ['完全個室', '世界最高峰マシン'],
    },
  },
  {
    name: 'the SILK 東京八重洲店',
    image: '/images/studios/the-silk.webp',
    rating: 4.7,
    price: 'Standard4 12,980円〜',
    trial: '体験レッスン（グループ）3,850円',
    features: ['女性専用', 'マシンピラティス専門', '東京駅徒歩3分', '音楽×マシン'],
    description: '女性専用マシンピラティス専門スタジオ。JR東京駅八重洲北口から徒歩3分、日本橋駅からも徒歩圏内。開放感のある大きな窓と白いリフォーマーが並ぶスタイリッシュな空間。初心者が8割を占め、体が硬い方でも安心。',
    access: 'JR「東京駅」八重洲北口 徒歩3分 / 日本橋駅からも徒歩圏内',
    address: '東京都中央区八重洲1-5-9 八重洲加藤ビルディング5F',
  },
  {
    name: 'ピラティスK 銀座店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.7,
    price: 'マンスリー4メンバー 13,420円',
    trial: '体験レッスン 2,000円',
    features: ['女性専用', 'マシンピラティス専門', '銀座一丁目駅徒歩1分', 'グループレッスン'],
    description: '「30歳からの本気ボディメイク」がコンセプトの女性専用マシンピラティス専門スタジオ。銀座一丁目駅7番出口から徒歩1分。日本橋から銀座線で銀座駅まで1駅。初心者から経験者まで個人のペースに合わせたプログラムを用意。',
    access: '有楽町線「銀座一丁目駅」7番出口 徒歩1分 / 日本橋から銀座線で銀座駅まで1駅',
    address: '東京都中央区銀座1-6-10 上一ビルディング7F',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！日本橋エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。経験豊富なインストラクターが基礎から丁寧に指導してくれるので、運動が苦手な方でも安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。',
  },
  {
    question: '日本橋エリアのピラティススタジオの料金相場は？',
    answer: '日本橋エリアのピラティススタジオの料金相場は、グループレッスン月3〜4回で9,600円〜15,400円程度。パーソナルレッスンは1回8,000円〜10,000円が相場です。体験レッスンは500円〜3,850円と幅があるので、まずは体験で試してみるのがおすすめです。',
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

export default function NihonbashiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '日本橋', url: 'https://pilates-biyori.com/area/nihonbashi/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス日本橋おすすめ5選！<br className="hidden md:block" />
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
              <span className="text-warm-600">日本橋</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="日本橋" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「日本橋周辺でピラティスを始めたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「仕事帰りに通えるピラティススタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、日本橋エリアでおすすめのピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>日本橋でピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>仕事帰りに通えるスタジオがいい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>体験レッスンが安いスタジオを知りたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="日本橋" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">日本橋のおすすめピラティススタジオ5選</h2>
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
              日本橋のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">12,980円〜13,420円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 12,980円〜13,420円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">500円〜3,850円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              日本橋は商業施設やオフィスが集まる繁華街エリアのため、駅近の好立地スタジオが多く、やや高めの料金設定が目立ちます。一方で大手チェーンの進出も多いため、キャンペーンや月額通い放題プランを上手に活用すれば、実質的なコストを抑えることも可能です。近隣の東京駅エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              日本橋でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">日本橋駅からのルートは事前に確認を</h3>
                <p className="text-warm-600 leading-relaxed">
                  日本橋エリアのスタジオは日本橋駅周辺が中心です。駅の出口によってスタジオまでの距離が変わることがあるため、初めて訪れる際はGoogleマップで経路を確認し、余裕を持って到着できるようにしましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">繁華街ならではの予約混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  日本橋は人が集まる繁華街のため、平日夜（18時〜21時）と土日午前中はレッスン予約が特に集中します。人気クラスは1週間以上前に満席になることも。アプリやWebで空き状況をこまめにチェックし、キャンセル待ち機能があるスタジオでは積極的に活用しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  日本橋エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ず確認しましょう。月の途中入会は日割り計算になるかも要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  日本橋エリアだけでなく、近隣の<Link href="/area/tokyo-station/" className="text-warm-700 underline hover:text-warm-900">東京駅</Link>、<Link href="/area/tsukiji/" className="text-warm-700 underline hover:text-warm-900">築地</Link>、<Link href="/area/kameido/" className="text-warm-700 underline hover:text-warm-900">亀戸</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>日本橋エリアの豆知識：</strong>日本橋は仕事帰りに立ち寄る方が多いエリアです。荷物が多くなりがちなので、ロッカーの広さやシャワー設備の有無を事前に確認しておくと安心。ウェアレンタルがあるスタジオなら手ぶらで通えて便利です。
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
                <p className="text-warm-600 text-sm mb-4">月額1万円以下から通えるスタジオ。グループレッスンで気軽に始められます。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Beat Pilates（月3回 9,600円〜）</li>
                  <li className="text-warm-700">• zen place pilates（マット月4回 10,450円〜）</li>
                  <li className="text-warm-700">• the SILK 八重洲（月4回 12,980円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">マンツーマン指導で効果を最大化。完全個室やオーダーメイドレッスンで集中できます。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• マシンピラティス ウィング（完全個室）</li>
                  <li className="text-warm-700">• zen place（プライベートレッスンあり）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・通いやすさ</h3>
                <p className="text-warm-600 text-sm mb-4">日本橋駅・東京駅から徒歩圏内。仕事帰りにもアクセスしやすい。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place 八重洲（日本橋駅徒歩3分）</li>
                  <li className="text-warm-700">• the SILK 八重洲（東京駅徒歩3分）</li>
                  <li className="text-warm-700">• Beat Pilates（小伝馬町駅徒歩4分）</li>
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
              <p className="text-warm-600 leading-relaxed mb-6">週1-2回（月4-8回）からスタートするのがおすすめ。まずは身体を慣らすことが大切です。継続期間は最低でも2-3ヶ月。この期間で効果を実感できる方が多いですよ。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">週2-3回（月8-12回）がおすすめ。しっかりと身体を変えたい方は頻度を上げることで効果も早く現れます。3-6ヶ月継続すると、周りからも「痩せた？」と言われるレベルの変化が期待できます。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">週1回（月4回）のペースで継続するのがおすすめ。無理なく長く続けられる頻度が理想です。ピラティスは継続が何より大切。自分のペースで楽しく通えるのが一番ですよ。</p>
            </div>
          </div>
        </section>

        {/* Price Guide */}
        <section className="py-16 bg-white" id="price-guide">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜12,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">グループ</p>
                <p className="text-sm text-warm-600 mb-4">マットグループやリーズナブルなマシンレッスン。初心者が気軽に始められる。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Beat Pilates（月3回 9,600円〜）</li>
                  <li>• zen place（マット月4回 10,450円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 12,000〜16,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">マシン完備の大手スタジオ。少人数制グループレッスン。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• the SILK 八重洲（月4回 12,980円〜）</li>
                  <li>• ピラティスK 銀座（月4回 13,420円）</li>
                  <li>• Beat Pilates通い放題（14,400円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 30,000円〜/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">完全個室のプライベートレッスン。短期集中で結果を出したい方向け。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• マシンピラティス ウィング</li>
                  <li>• zen place（プライベート月4回 37,400円〜）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないピラティススタジオの選び方</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、体幹強化、リラックスなど、目的によって最適なスタジオやプログラムは変わります。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">日本橋エリアの料金相場は、グループレッスン月3〜4回で9,600円〜15,400円程度。無理なく継続できる予算を決めましょう。長く続けるためには、金銭的な負担が少ないことも大切です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。500円〜3,850円程度で体験できるスタジオが多いので、気軽に試してみてくださいね。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">日本橋は銀座線・東西線・都営浅草線が利用でき、東京駅・三越前・人形町も徒歩圏内。老舗百貨店や金融機関が集まる歴史あるビジネス街で、仕事帰りにも通いやすいエリアです。</p>
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
            <p className="text-warm-600 leading-relaxed mb-6">今回は日本橋のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？</p>
            <p className="text-warm-600 leading-relaxed mb-6">日本橋は銀座線・東西線・都営浅草線が利用でき、東京駅や銀座も徒歩圏内。老舗と新しさが共存する歴史あるビジネス街で、大手スタジオから個性的なプライベートスタジオまで揃っています。</p>
            <p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p>
            <p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン500円〜3,850円。<br />まずは気軽に体験してみましょう。</p>
            <Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link>
          </div>
        </section>
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="nihonbashi" areaName="日本橋" />

      <RelatedAreas currentSlug="nihonbashi" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
