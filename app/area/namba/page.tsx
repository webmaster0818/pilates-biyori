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
  alternates: { canonical: 'https://biyori-pilates.com/area/namba/' },
  title: 'なんばのピラティス｜初心者OK・無料体験で選ぶ料金比較【2026年7月】',
  description: 'なんばエリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,なんば,難波,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates なんばスタジオ',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 21,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '2週間前',
        text: 'なんば駅から徒歩3分で通いやすいです。ミナミの中心で、地下鉄・近鉄・南海全て使えます。道頓堀や心斎橋も近くて、レッスン後の観光も楽しめます。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '1ヶ月前',
        text: '少人数制なので丁寧に見てもらえます。マシンの種類も豊富で、自分のレベルに合わせて進められます。ミナミは商業・娯楽の一大拠点で、いつも賑やかです。',
      },
      {
        author: 'K.H',
        rating: 4,
        date: '3週間前',
        text: '全国展開しているので出張先でも通えます。なんばは若者や観光客が多く、活気がある街です。',
      },
    ],
    price: '月4回 13,200円〜',
    trial: '体験レッスン 1,000円',
    features: ['マシン完備', '初心者歓迎', 'なんば駅徒歩3分', 'インストラクター養成'],
    description: '全国展開の大手ピラティススタジオ。なんば駅から徒歩3分の好立地。マットピラティスからマシンピラティスまで豊富なレッスンメニュー。ミナミの中心・なんばで、地下鉄・近鉄・南海が利用可能。大阪第2のターミナル。道頓堀・心斎橋に隣接し、若者・観光客多数。商業・娯楽の一大拠点。経験豊富なインストラクターが一人ひとりに合わせた丁寧な指導を提供します。',
    access: 'なんば駅から徒歩3分',
    address: '大阪府大阪市中央区難波3-5-17 なんばLCビル 7F',
    popularPlan: {
      name: 'フリープラン（月4回）',
      description: 'マット・マシンどちらも受講可能な人気プラン。ミナミの中心で通いやすい。',
      price: '月4回 13,200円（税込）',
    },
    options: [
      'プライベートレッスン追加（1回 9,900円〜）',
      'ウェアレンタル（月額 2,200円）',
      'タオルレンタル（月額 1,100円）',
      'インストラクター養成コース（別途）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の80%）',
      genderRatio: '女性90% / 男性10%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'ウォーターサーバー'],
    },
  },
  {
    name: 'WECLE なんば',
    image: '/images/studios/wecle-pilates.webp',
    rating: 4.7,
    reviewCount: 34,
    reviews: [
      {
        author: 'R.N',
        rating: 5,
        date: '1週間前',
        text: 'AI姿勢分析が面白い！自分の体の癖が数値で分かるので改善しやすいです。なんば駅から近くて、道頓堀での食事ついでに通えます。',
      },
      {
        author: 'A.H',
        rating: 4,
        date: '2週間前',
        text: '女性専用なので気兼ねなく通えます。マシンが新しくて使いやすい。体験が500円なので気軽に始められました。',
      },
      {
        author: 'M.M',
        rating: 5,
        date: '3週間前',
        text: '科学的なアプローチで効果が実感できます。なんばはミナミの中心で、ショッピングも楽しめます。',
      },
    ],
    price: '月4回 14,800円〜',
    trial: '体験レッスン 500円',
    features: ['AI姿勢分析', '最新マシン', 'なんば駅近', '女性専用'],
    description: 'AI姿勢分析を導入した最新型ピラティススタジオ。なんば駅から徒歩4分。最新のマシンと科学的なアプローチで効果的なボディメイクを実現。女性専用なので安心して通えます。道頓堀、心斎橋が近く、レッスン後のショッピングや食事も楽しめます。',
    access: 'なんば駅から徒歩4分',
    address: '大阪府大阪市中央区難波千日前15-15 OCAT 8F',
    popularPlan: {
      name: 'スタンダード4（月4回）',
      description: 'AI姿勢分析付き。最新マシンで効率的にボディメイク。女性専用で安心。',
      price: '月4回 14,800円（税込）※AI分析無料',
    },
    options: [
      'AI姿勢分析レポート（月1回無料、追加 1,100円）',
      'パーソナルトレーニング（1回 11,000円〜）',
      'ウェア・タオルセット（月額 2,750円）',
      '栄養カウンセリング（月額 5,500円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の85%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'AI分析'],
    },
    basicInfo: {
      hours: '平日 7:00〜22:00 / 土日祝 9:00〜20:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'AI姿勢分析システム', '女性専用'],
    },
  },
  {
    name: 'ピラティスK なんば',
    image: '/images/studios/pilates-k.webp',
    rating: 4.6,
    reviewCount: 187,
    reviews: [
      {
        author: 'T.W',
        rating: 5,
        date: '5日前',
        text: '暗闇×音楽で楽しく続けられます！なんばでリフレッシュできるのが嬉しい。無料体験があって始めやすかったです。',
      },
      {
        author: 'H.I',
        rating: 4,
        date: '1週間前',
        text: '音楽に合わせて動くので飽きない。女性専用で周りを気にせず集中できます。インストラクターが明るくて楽しい雰囲気。',
      },
      {
        author: 'S.N',
        rating: 5,
        date: '2週間前',
        text: 'グループレッスンですが丁寧に見てくれます。暗闇なので初心者でも恥ずかしくない。2ヶ月で体が引き締まってきました。',
      },
    ],
    price: '月4回 15,070円〜',
    trial: '無料体験レッスン',
    features: ['音楽×マシン', '女性専用', '暗闇レッスン', 'グループレッスン'],
    description: '音楽に合わせて楽しくボディメイク。女性専用スタジオで安心。なんば駅から徒歩5分。暗闇×音楽×マシンピラティスの融合レッスンが人気。周りの目を気にせず集中できる環境で、楽しみながら理想のボディラインを手に入れられます。',
    access: 'なんば駅から徒歩5分',
    address: '大阪府大阪市中央区難波5-1-60 なんばスカイオ 5F',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '暗闇×音楽×マシンピラティスの融合レッスン。楽しく続けられると人気のプラン。',
      price: '月4回 15,070円（税込）',
    },
    options: [
      '追加レッスンチケット（1回 4,400円）',
      '通い放題プラン変更（月額 22,000円〜）',
      'ウェア・タオルセット（月額 2,200円）',
      'ドリンクサービス（月額 1,100円）',
    ],
    userProfile: {
      ageRange: '20代〜30代が中心（全体の85%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['楽しく痩せたい', 'ストレス発散', 'ボディメイク', '仲間と運動'],
    },
    basicInfo: {
      hours: '平日 10:00〜22:00 / 土日祝 10:00〜20:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '暗闇スタジオ', '女性専用'],
    },
  },
  {
    name: 'the SILK なんば',
    image: '/images/studios/the-silk.webp',
    rating: 4.8,
    price: '月4回 15,070円〜',
    trial: '体験レッスン 無料',
    features: ['暗闇マシン', '音楽', 'なんば駅近', '女性専用'],
    description: 'マシンピラティス特化型スタジオ。暗闇×音楽で没入感のあるレッスン。なんば駅から徒歩2分の好アクセス。最新のリフォーマーマシンを完備し、音楽に合わせた独自プログラムで楽しくトレーニング。女性専用で初心者も安心。',
    access: 'なんば駅から徒歩2分',
  },
  {
    name: 'CLUB PILATES なんば',
    image: '/images/studios/club-pilates.webp',
    rating: 4.7,
    price: '月4回 14,190円〜',
    trial: '体験レッスン 無料',
    features: ['アメリカ発', 'グループ&プライベート', 'なんば駅近', '初心者歓迎'],
    description: 'アメリカ発の世界最大級ピラティススタジオチェーン。なんば駅から徒歩3分。グループレッスンからプライベートレッスンまで幅広く対応。全米No.1のピラティスメソッドで、初心者から上級者まで満足できるプログラムを提供。',
    access: 'なんば駅から徒歩3分',
  },
  {
    name: 'BDC PILATES なんば',
    image: '/images/studios/bdc-pilates.webp',
    rating: 4.7,
    price: '1回 3,850円〜',
    trial: '体験レッスン 2,200円',
    features: ['ダンサー御用達', 'グループレッスン', 'なんば駅近', '本格的'],
    description: 'ダンサー御用達の本格的なピラティススタジオ。なんば駅から徒歩5分。ダンサーやアスリートも通う質の高いレッスンが特徴。身体の使い方を根本から学べる本格的なプログラムで、美しい姿勢と柔軟な身体を手に入れられます。',
    access: 'なんば駅から徒歩5分',
  },
  {
    name: 'Dr.ピラティス なんば店',
    officialUrl: 'https://drpilates.drtraining.jp/',
    image: '/images/studios/dr-pilates.webp',
    price: '月4回(45分) 29,700円〜 / 月4回(60分) 39,600円〜',
    trial: '体験トレーニング 7,100円（無料キャンペーン実施店舗あり）',
    features: ['マンツーマン（パーソナル）', 'マシン・マット両対応', '医師推奨パーソナルジムNo.1受賞'],
    description: '医師推奨のパーソナルジム受賞歴を持つDr.トレーニング系列のパーソナルピラティススタジオ。マシン・マット両対応のマンツーマン指導で、姿勢改善やボディメイクを目指せる。なんばエリア（詳細は公式サイト参照）。',
    access: 'なんばエリア（詳細は公式サイト参照）',
    address: '大阪府（詳細は公式サイト参照）',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！なんばエリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。経験豊富なインストラクターが基礎から丁寧に指導してくれるので、運動が苦手な方でも安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。',
  },
  {
    question: 'なんばのピラティススタジオの料金相場は？',
    answer: 'なんばエリアのピラティススタジオの料金相場は、月4回で12,000円〜16,000円程度。体験レッスンは無料〜3,000円が一般的です。プライベートレッスンは1回8,000円〜12,000円が相場となっています。',
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

export default function NambaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: 'なんば', url: 'https://pilates-biyori.com/area/namba/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティスなんばおすすめ7選！<br className="hidden md:block" />
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
              <span className="text-warm-600">なんば</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="なんば" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「なんばで人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、なんばエリアでおすすめのピラティススタジオ7選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>なんばでピラティススタジオを探している</span>
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
                  <span>道頓堀・心斎橋に近いスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="なんば" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              なんばのおすすめピラティススタジオ7選
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
              なんばのピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">3,850円〜15,070円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 14,190円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜2,200円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              なんばは商業施設やオフィスが集まる繁華街エリアのため、駅近の好立地スタジオが多く、やや高めの料金設定が目立ちます。一方で大手チェーンの進出も多いため、キャンペーンや月額通い放題プランを上手に活用すれば、実質的なコストを抑えることも可能です。近隣の心斎橋エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              なんばでスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">なんば駅からのルートは事前に確認を</h3>
                <p className="text-warm-600 leading-relaxed">
                  なんばエリアのスタジオはなんば駅周辺が中心です。駅の出口によってスタジオまでの距離が変わることがあるため、初めて訪れる際はGoogleマップで経路を確認し、余裕を持って到着できるようにしましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">繁華街ならではの予約混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  なんばは人が集まる繁華街のため、平日夜（18時〜21時）と土日午前中はレッスン予約が特に集中します。人気クラスは1週間以上前に満席になることも。アプリやWebで空き状況をこまめにチェックし、キャンセル待ち機能があるスタジオでは積極的に活用しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  なんばエリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ず確認しましょう。月の途中入会は日割り計算になるかも要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  なんばエリアだけでなく、近隣の<Link href="/area/shinsaibashi/" className="text-warm-700 underline hover:text-warm-900">心斎橋</Link>、<Link href="/area/tennoji/" className="text-warm-700 underline hover:text-warm-900">天王寺</Link>、<Link href="/area/honmachi/" className="text-warm-700 underline hover:text-warm-900">本町</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>なんばエリアの豆知識：</strong>なんばは仕事帰りに立ち寄る方が多いエリアです。荷物が多くなりがちなので、ロッカーの広さやシャワー設備の有無を事前に確認しておくと安心。ウェアレンタルがあるスタジオなら手ぶらで通えて便利です。
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
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額12,000円以下で通える格安スタジオ。体験レッスン無料のスタジオも多数。コスパ重視の方におすすめ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Pilates Studio Harmony なんば</li>
                  <li className="text-warm-700">• Reformer Pilates Namba</li>
                  <li className="text-warm-700">• FLOW PILATES なんば</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">マシン完備</h3>
                <p className="text-warm-600 text-sm mb-4">
                  最新のリフォーマーマシンを完備。マシンピラティスを本格的に学びたい方におすすめ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates なんば</li>
                  <li className="text-warm-700">• WECLE なんば</li>
                  <li className="text-warm-700">• the SILK なんば</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・ミナミの中心</h3>
                <p className="text-warm-600 text-sm mb-4">
                  なんば駅から徒歩3分以内。道頓堀・心斎橋に隣接し、ショッピングや食事も楽しめる。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Urban Pilates なんば（駅徒歩1分）</li>
                  <li className="text-warm-700">• the SILK なんば（駅徒歩2分）</li>
                  <li className="text-warm-700">• zen place pilates なんば（駅徒歩3分）</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜12,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。初心者向けの基本的なレッスンが多い。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Pilates Studio Harmony</li>
                  <li>• Reformer Pilates</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 12,000〜16,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオ。グループ・プライベート選択可。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates</li>
                  <li>• ピラティスK</li>
                  <li>• the SILK</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 30,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全プライベートレッスン。短期集中で結果を出したい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• B-line（1回8,800円）</li>
                  <li>• Pilates Lab</li>
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
                  なんばエリアの料金相場は月4回で12,000円〜16,000円程度。無理なく継続できる予算を決めましょう。料金だけでなく、入会金、マット・ウェアのレンタル料なども確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。多くのスタジオが無料〜1,000円程度で体験レッスンを提供しているので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。なんばはミナミの中心で、地下鉄・近鉄・南海が利用可能。大阪第2のターミナルです。駅から近い場所を選ぶと、道頓堀・心斎橋でのショッピングや食事ついでにも通えて便利ですよ。
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
              今回はなんばのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事ではなんばに数多くあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜1,000円。<br />
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

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="namba" areaName="なんば" />

      <RelatedAreas currentSlug="namba" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
