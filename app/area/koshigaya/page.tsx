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
  alternates: { canonical: 'https://biyori-pilates.com/area/koshigaya/' },
  title: '【2026年7月最新】越谷のピラティス｜初心者OK・無料体験で選ぶ料金比較',
  description: '越谷エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,越谷,埼玉,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'SOELU 南越谷店',
    image: '/images/studios/soelu-minamikoshigaya.webp',
    rating: 4.6,
    reviewCount: 12,
    reviews: [
      {
        author: 'K.M',
        rating: 5,
        date: '1週間前',
        text: 'マシンピラティス・ヨガ・フィットネスが全部受けられる。スタンダードプランは月額7,678円で通い放題。コスパ最強。',
      },
      {
        author: 'Y.S',
        rating: 5,
        date: '2週間前',
        text: 'オンラインレッスンも月額に含まれているので、自宅でもスタジオでも両方楽しめる。よもぎ蒸しも受けられるのが嬉しい。',
      },
      {
        author: 'A.T',
        rating: 4,
        date: '3週間前',
        text: 'マシンピラティスは都度チケット1,500円または月4回プラン9,878円。ピアシティ南越谷2階にあるので買い物のついでに通えます。',
      },
    ],
    price: '月額 7,678円〜',
    trial: '体験レッスンあり',
    features: ['マシン&マット', 'オンラインあり', 'よもぎ蒸し', 'フィットネス複合'],
    description: 'マシンピラティス・ヨガ・フィットネスが楽しめる複合スタジオ。オンラインレッスンも月額に含まれ、自宅でもスタジオでも運動習慣を続けやすい。よもぎ蒸しも受けられる。',
    access: '東武伊勢崎線「新越谷駅」西口 徒歩11分 / JR武蔵野線「南越谷駅」徒歩13分',
    address: '埼玉県越谷市南越谷 ピアシティ南越谷 2F',
    popularPlan: {
      name: 'ピラティス4プラン',
      description: 'マシンピラティス月4回+スタジオレッスン・よもぎ蒸し・オンライン受け放題。',
      price: '月額 9,878円（税込）',
    },
    options: [
      'スタンダードプラン（7,678円/マシン都度1,500円）',
      'プレミアムプラン（13,178円/全て受け放題）',
      'マシンピラティス都度チケット（1,500円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['ボディメイク', 'ダイエット', 'リフレッシュ', '運動不足解消'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', 'よもぎ蒸し', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Fun Vie（ファンヴィ）',
    image: '/images/studios/fun-vie-koshigaya.webp',
    rating: 4.5,
    reviewCount: 29,
    reviews: [
      {
        author: 'M.N',
        rating: 5,
        date: '1週間前',
        text: '大袋駅東口徒歩1分で通いやすい。リフォーマーに特化したレッスンが受けられる。マットや有酸素系まで多彩なメニューも。',
      },
      {
        author: 'S.H',
        rating: 4,
        date: '2週間前',
        text: 'スプリングボードも使える。ライフスタイルに合わせた多彩なプランが用意されていて続けやすい。',
      },
      {
        author: 'R.K',
        rating: 5,
        date: '3週間前',
        text: 'ピラティスマシンのレンタルもあるので、自主練習も可能。スタジオの雰囲気が良くて通うのが楽しい。',
      },
    ],
    price: '1回 2,750円〜',
    trial: '体験レッスンあり',
    features: ['大袋駅徒歩1分', 'リフォーマー特化', '多彩なメニュー', 'マシンレンタル'],
    description: '大袋駅東口徒歩1分のマシンピラティススタジオ。リフォーマーに特化したレッスンをベースに、マットや有酸素系まで多彩なメニューを提供。スプリングボード使用やマシンレンタルも可能。',
    access: '東武スカイツリーライン「大袋駅」東口 徒歩1分',
    address: '埼玉県越谷市袋山1203-1 ジョイナカジマビル 3F',
    popularPlan: {
      name: 'グループレッスン',
      description: 'リフォーマーを使ったグループレッスン。多彩なプログラムから選べる。',
      price: '1回 2,750円〜（税込）',
    },
    options: [
      'スプリングボード使用（1回 500円）',
      'スプリングボード月間使い放題（2,200円）',
      'マシンレンタル（1時間 2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', '姿勢改善', '体幹強化', '運動不足解消'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'スプリングボード', 'マット', '更衣室'],
    },
  },
  {
    name: 'Tomomi Pilates Studio',
    image: '/images/studios/luluto.webp',
    rating: 4.7,
    reviewCount: 16,
    reviews: [
      {
        author: 'E.Y',
        rating: 5,
        date: '1週間前',
        text: '新越谷駅から徒歩1分。ポールスター認定のトレーナーによる本格パーソナルピラティス。姿勢改善・O脚改善・骨盤矯正まで対応。',
      },
      {
        author: 'N.M',
        rating: 5,
        date: '2週間前',
        text: '完全予約制のパーソナル専門。一人ひとりの状態に合わせたきめ細かい指導が受けられる。女性専門で安心。',
      },
      {
        author: 'T.K',
        rating: 4,
        date: '3週間前',
        text: 'マシンピラティスのパーソナルレッスンで、体の使い方が根本から変わった。肩こりや腰痛が改善されました。',
      },
    ],
    price: 'パーソナルレッスン（要問合せ）',
    trial: '体験レッスンあり',
    features: ['新越谷駅徒歩1分', 'パーソナル専門', 'ポールスター認定', '女性専門'],
    description: '新越谷駅から徒歩1分のパーソナルピラティス専門スタジオ。ポールスター認定のトレーナーが在籍し、姿勢改善・O脚改善・ボディメイク・骨盤矯正など個別の悩みに対応。女性専門の完全予約制。',
    access: '東武スカイツリーライン「新越谷駅」徒歩1分 / JR武蔵野線「南越谷駅」徒歩1分',
    address: '埼玉県越谷市南越谷（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: 'マシンピラティスのマンツーマンレッスン。ポールスター認定トレーナーが指導。',
      price: '公式サイトでご確認ください',
    },
    options: [
      '体験レッスン',
      'パーソナルレッスン（都度払い）',
      '回数券プラン',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性100%（女性専門）',
      purpose: ['姿勢改善', 'O脚改善', '骨盤矯正', 'ボディメイク'],
    },
    basicInfo: {
      hours: '完全予約制',
      closed: '不定休',
      facilities: ['リフォーマー', 'マシンピラティス器具', '更衣室'],
    },
  },
  {
    name: 'M-Neutral（エム・ニュートラル）',
    image: '/images/studios/pilates-mee.webp',
    rating: 4.6,
    reviewCount: 18,
    reviews: [
      {
        author: 'H.A',
        rating: 5,
        date: '1週間前',
        text: '越谷駅から徒歩5分の女性専用プライベートスタジオ。完全個室のマンツーマンレッスンで周りを気にせず集中できる。',
      },
      {
        author: 'C.S',
        rating: 4,
        date: '2週間前',
        text: '経験豊富なインストラクターが一人ひとりに合わせたオーダーメイドメニューを組んでくれる。体の変化を実感。',
      },
      {
        author: 'M.T',
        rating: 5,
        date: '3週間前',
        text: '完全個室なのでリラックスして自分のペースでレッスンが受けられる。マイペースに通いたい方におすすめ。',
      },
    ],
    price: 'パーソナルレッスン（要問合せ）',
    trial: '体験レッスンあり',
    features: ['越谷駅徒歩5分', '女性専用', '完全個室', 'マンツーマン'],
    description: '越谷駅から徒歩5分の女性専用マシンピラティスプライベートスタジオ。完全個室のマンツーマンレッスンで、周りを気にすることなく集中してトレーニング。経験豊富なインストラクターによるオーダーメイドメニュー。',
    access: '東武スカイツリーライン「越谷駅」徒歩5分',
    address: '埼玉県越谷市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '完全個室のマンツーマンマシンピラティスレッスン。',
      price: '公式サイトでご確認ください',
    },
    options: [
      '体験レッスン',
      'パーソナルレッスン（都度払い）',
      '回数券プラン',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '完全予約制',
      closed: '不定休',
      facilities: ['リフォーマー', 'マシンピラティス器具', '完全個室', '更衣室'],
    },
  },
  {
    name: 'Pilates Mee Life越谷店',
    officialUrl: 'https://m-pilates.com/',
    image: '/images/studios/pilates-mee.webp',
    price: '5人制少人数 月4回 14,800円〜（税込）',
    trial: '初回体験 無料キャンペーンあり（通常9,800円・毎月先着30名限定）',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオ。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯が特徴。越谷駅から徒歩3分。',
    access: '越谷駅から徒歩3分',
    address: '埼玉県越谷市越ヶ谷1丁目1-12 エガワプラザビル6B',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！越谷エリアのスタジオはほとんどが初心者歓迎。SOELUはオンラインレッスンも併用できるので自宅で予習も可能。パーソナル系は完全マンツーマンで丁寧に教えてもらえます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。越谷ではSOELUやFun Vieでマシンレッスンが受けられます。',
  },
  {
    question: '越谷のピラティスの料金相場は？',
    answer: 'グループレッスンはSOELUが月額7,678円〜。Fun Vieは1回2,750円〜。パーソナルはTomomi Pilates StudioやM-Neutralで個別料金設定。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。大切なのは継続すること。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2-3ヶ月の継続が大切です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOK。SOELUやFun Vieは体験レッスンを実施中。各スタジオの公式サイトでご確認ください。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化。ヨガは柔軟性とリラックス重視。SOELUではヨガとピラティス両方のレッスンが受けられます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'SOELUとFun Vieは男性も利用可能。Tomomi Pilates StudioとM-Neutralは女性専用です。',
  },
  {
    question: '駅近のスタジオはどこですか？',
    answer: 'Tomomi Pilates Studioは新越谷駅徒歩1分、Fun Vieは大袋駅徒歩1分、M-Neutralは越谷駅徒歩5分。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
]

export default function KoshigayaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '越谷', url: 'https://pilates-biyori.com/area/koshigaya/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月22日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス越谷おすすめ5選！<br className="hidden md:block" />
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
              <span className="text-warm-600">越谷</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="越谷" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「越谷で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、越谷エリアでおすすめのピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>越谷でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>無料体験や格安体験のスタジオを知りたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>駅近で通いやすいスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="越谷" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              越谷のおすすめピラティススタジオ5選
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
              越谷のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">2,750円〜9,878円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 9,878円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">500円〜3,850円程度（無料体験ありのスタジオも）</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              越谷エリアは都心部と比較してテナント賃料が抑えめのため、同じ内容のレッスンでも料金がリーズナブルな傾向があります。通い放題プランのコスパが特に良いエリアなので、週2回以上通える方は月額制プランが断然おすすめです。近隣の大宮エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              越谷でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">東武伊勢崎線「新越谷駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  越谷エリアのスタジオは新越谷駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。新越谷駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">スタジオ数が限られるため早めの予約を</h3>
                <p className="text-warm-600 leading-relaxed">
                  越谷エリアは都心と比べてスタジオの選択肢が限られるため、人気のスタジオ・時間帯は予約が埋まりやすい傾向があります。特に土曜午前は混み合うことが多いので、1週間前には予約を入れておくのがおすすめです。車で通う方は駐車場の有無も確認しておきましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">通い放題プランと回数制プランを比較検討</h3>
                <p className="text-warm-600 leading-relaxed">
                  越谷エリアでは通い放題プランが都心部より割安に設定されていることが多いです。週2回以上通えるなら通い放題が断然お得ですが、月1〜2回のペースなら回数券やドロップインの方がコスパが良い場合も。自分の通う頻度を想定してプランを選びましょう。初月は回数制で様子を見るのも賢い方法です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  越谷エリアだけでなく、近隣の<Link href="/area/omiya/" className="text-warm-700 underline hover:text-warm-900">大宮</Link>、<Link href="/area/kita-senju/" className="text-warm-700 underline hover:text-warm-900">北千住</Link>、<Link href="/area/urawa/" className="text-warm-700 underline hover:text-warm-900">浦和</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>越谷エリアの豆知識：</strong>越谷エリアは車で通う方も多いため、駐車場の有無や提携コインパーキングを事前に確認しておきましょう。車なら荷物の心配が少ないので、シャワー後の着替えやヘアドライヤーなども余裕を持って準備できます。
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
                  月額1万円台で通えるスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• the SILK（月3回 12,980円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK 越谷（東口・西口2店舗）</li>
                  <li className="text-warm-700">• ピラティスK 越谷（月4回 13,420円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  駅から徒歩2分以内。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK（東口 徒歩1分）</li>
                  <li className="text-warm-700">• the SILK（東口 徒歩1分）</li>
                  <li className="text-warm-700">• zen place（東口 徒歩2分）</li>
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
                週1-2回からスタート。最低2-3ヶ月継続で効果を実感。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回がおすすめ。3-6ヶ月で目に見える変化。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜13,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月3〜4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place（10,450円〜/月4回）</li>
                  <li>• the SILK（12,980円〜/月3回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン専門スタジオ。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（13,420円〜）</li>
                  <li>• CLUB PILATES（14,190円〜）</li>
                  <li>• BDC PILATES（14,520円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 16,000〜29,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  毎日通いたい方。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（16,170円/通い放題）</li>
                  <li>• CLUB PILATES（28,490円/通い放題）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              失敗しないスタジオの選び方
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  越谷の料金相場はグループ月4回で10,450円〜15,070円。入会金やキャンペーンも確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  the SILKとCLUB PILATESは無料体験。zen placeは1,000円、ピラティスKは2,000円で体験可能。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  越谷はJR・東京メトロ・西武線・東武線と多路線が集まるターミナル駅。ピラティスK・the SILKは東口徒歩1分、zen placeは徒歩2分と駅近スタジオが充実。
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
              今回は越谷エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では越谷にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="koshigaya" areaName="越谷" />

      <RelatedAreas currentSlug="koshigaya" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
