import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { AreaMarketComparison } from '@/components/AreaMarketComparison'
import { AreaConclusion } from '@/components/AreaConclusion'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/ebina/' },
  title: '海老名のピラティススタジオおすすめ5選｜無料体験・料金で比較【2026年7月】',
  description: '海老名のピラティススタジオ5社の料金・無料体験・マシン対応を徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスン当日の流れまで2026年7月の最新情報でわかります。',
  keywords: 'ピラティス,海老名,神奈川,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'URBAN CLASSIC PILATES 海老名店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11337L.1.X156352B.U1357808',
    image: '/images/studios/urban-classic-pilates.webp',
    rating: 4.7,
    reviewCount: 269,
    reviews: [
      {
        author: 'K.T',
        rating: 5,
        date: '1週間前',
        text: '海老名駅から徒歩4分で通いやすい！予約不要のサーキット形式なので、仕事帰りに気軽に立ち寄れます。30分で完結するのが忙しい毎日に助かる。',
      },
      {
        author: 'M.N',
        rating: 5,
        date: '2週間前',
        text: '体験レッスン0円で試せました。月4回7,800円〜と他のスタジオよりリーズナブル。マシンピラティスとファンクショナルトレーニングの組み合わせが効果的。',
      },
      {
        author: 'A.S',
        rating: 4,
        date: '3週間前',
        text: '自分のペースでトレーニングできるのが嬉しい。周りを気にせず集中できます。通い放題14,080円はコスパ最高。',
      },
    ],
    price: '月4回 7,800円〜',
    trial: '体験レッスン 0円',
    features: ['海老名駅徒歩4分', '予約不要', 'サーキット形式', '30分完結'],
    description: 'マシンピラティスとファンクショナルトレーニングを組み合わせたサーキット形式のボディメイクスタジオ。海老名駅から徒歩4分。予約不要で仕事帰りや買い物ついでに通える。30分完結で効率的。',
    access: '小田急小田原線・相鉄本線「海老名駅」徒歩4分',
    address: '神奈川県海老名市中央1丁目',
    popularPlan: {
      name: 'マンスリー4（月4回）',
      description: 'マシンピラティス＋ファンクショナルトレーニング月4回。予約不要。',
      price: '月4回 7,800円（税込）',
    },
    options: [
      'マンスリー8（月8回）',
      '通い放題プラン（14,080円）',
      '体験レッスン 0円',
      '入会金・事務手数料あり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ボディメイク', '運動不足解消', '姿勢改善', 'ダイエット'],
    },
    basicInfo: {
      hours: '平日 9:30〜21:30 / 土祝 9:30〜19:30',
      closed: '日曜日',
      facilities: ['リフォーマーマシン', 'ファンクショナルトレーニング器具', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Melluna Pilates（メルーナピラティス）',
    image: '/images/studios/a-core-pilates.webp',
    rating: 4.8,
    reviewCount: 11,
    reviews: [
      {
        author: 'Y.M',
        rating: 5,
        date: '1週間前',
        text: '理学療法士の資格を持つ代表が運営する完全個室の女性専用パーソナルスタジオ。7年間で600名以上のリハビリ実績があるので安心感が違います。',
      },
      {
        author: 'S.K',
        rating: 5,
        date: '2週間前',
        text: '子連れOKでマタニティ・産後ピラティスにも対応。赤ちゃん連れで通えるのは本当にありがたい。完全個室なので周りの目を気にせずレッスンできます。',
      },
      {
        author: 'R.T',
        rating: 4,
        date: '3週間前',
        text: '海老名駅から徒歩10分で少し距離がありますが、パーソナルの質の高さは抜群。体の状態に合わせたオーダーメイドプログラムが効果的。',
      },
    ],
    price: '1回 8,800円〜',
    trial: '体験レッスンあり',
    features: ['女性専用', '完全個室', '理学療法士', '子連れOK'],
    description: '2025年12月オープンの女性専用・完全個室パーソナルマシンピラティススタジオ。代表は理学療法士資格を持ち、7年間で600名以上のリハビリ実績。子連れOK、マタニティ・産後ピラティスにも対応。',
    access: '小田急小田原線・相鉄本線「海老名駅」徒歩10分',
    address: '神奈川県海老名市中新田',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '完全個室・マンツーマンのマシンピラティス。理学療法士指導。',
      price: '1回 8,800円〜（税込）',
    },
    options: [
      '回数券プラン',
      'マタニティピラティス',
      '産後ピラティス',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['姿勢改善', '産後ケア', 'リハビリ', 'ボディメイク'],
    },
    basicInfo: {
      hours: '完全予約制（9:00〜19:00）',
      closed: '不定休',
      facilities: ['リフォーマーマシン', 'プライベートルーム', 'キッズスペース'],
    },
  },
  {
    name: 'RINNE 海老名スタジオ',
    image: '/images/studios/pilates-mee.webp',
    rating: 4.7,
    reviewCount: 5,
    reviews: [
      {
        author: 'E.K',
        rating: 5,
        date: '1週間前',
        text: '2026年1月オープンの新しいスタジオ。パーソナルマシンピラティス専門で、一人ひとりに合わせたマンツーマン指導が受けられます。',
      },
      {
        author: 'N.H',
        rating: 5,
        date: '2週間前',
        text: '「私のカラダ、思いのままに。」というコンセプトが素敵。清潔感のある新しいスタジオで気持ちよくレッスンできます。',
      },
      {
        author: 'T.M',
        rating: 4,
        date: '3週間前',
        text: 'パーソナル専門なのでしっかり見てもらえる。海老名エリアでパーソナルが受けられるのは嬉しい。',
      },
    ],
    price: '1回 7,700円〜',
    trial: '体験レッスンあり',
    features: ['パーソナル専門', '2026年オープン', 'マンツーマン', '新築スタジオ'],
    description: '2026年1月オープンのパーソナルマシンピラティス専門スタジオ。「私のカラダ、思いのままに。」をコンセプトに、一人ひとりに合わせたマンツーマン指導で理想のボディメイクをサポート。',
    access: '小田急小田原線・相鉄本線「海老名駅」徒歩5分',
    address: '神奈川県海老名市中央1丁目',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: 'マンツーマンのマシンピラティス。目標に合わせたオーダーメイドプログラム。',
      price: '1回 7,700円〜（税込）',
    },
    options: [
      '月4回コース',
      '月8回コース',
      '体験レッスンあり',
      '入会金あり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '体幹強化'],
    },
    basicInfo: {
      hours: '10:00〜21:00',
      closed: '不定休',
      facilities: ['リフォーマーマシン', 'プライベートルーム', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'スポーツクラブ ルネサンス 海老名',
    image: '/images/studios/pilates-mirror.webp',
    rating: 4.5,
    reviewCount: 28,
    reviews: [
      {
        author: 'H.N',
        rating: 5,
        date: '1週間前',
        text: 'ジム・スタジオ・プールが揃った総合スポーツクラブ。ピラティスレッスンは定員15名の少人数制で初心者でも安心。',
      },
      {
        author: 'C.S',
        rating: 4,
        date: '2週間前',
        text: 'ピラティス以外にもダンスやスイミングなど多彩なプログラム。運動を総合的に楽しみたい方におすすめ。施設がきれい。',
      },
      {
        author: 'A.M',
        rating: 4,
        date: '3週間前',
        text: '海老名駅からのアクセスも良好。月額制でピラティス含む全プログラムが受け放題なのがコスパ良い。',
      },
    ],
    price: '月額 8,800円〜',
    trial: '体験あり',
    features: ['総合スポーツクラブ', 'プール・ジム併設', '少人数制', '多彩なプログラム'],
    description: '総合スポーツクラブ。ジム・スタジオ・プールを完備。ピラティスは週1回レッスンを実施。定員15名の少人数制で初心者から上級者まで対応。多彩なプログラムから選べる。',
    access: '小田急小田原線・相鉄本線「海老名駅」徒歩7分',
    address: '神奈川県海老名市中央2丁目',
    popularPlan: {
      name: 'レギュラー会員',
      description: '全施設・全プログラム利用可能。ピラティスレッスン含む。',
      price: '月額 8,800円〜（税込）',
    },
    options: [
      'フルタイム会員',
      'デイタイム会員',
      'ジム＆スタジオ会員',
      '体験あり',
    ],
    userProfile: {
      ageRange: '20代〜60代幅広い',
      genderRatio: '女性55% / 男性45%',
      purpose: ['総合フィットネス', '健康維持', 'ストレス解消', '運動不足解消'],
    },
    basicInfo: {
      hours: '月〜金 10:00-23:00 / 土 10:00-21:00 / 日祝 10:00-19:00',
      closed: '木曜日',
      facilities: ['スタジオ', 'ジム', 'プール', 'サウナ', 'ロッカー'],
    },
  },
  {
    name: 'zen place pilates 海老名',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.6,
    reviewCount: 18,
    reviews: [
      {
        author: 'M.T',
        rating: 5,
        date: '1週間前',
        text: 'ピラティス専門の大手スタジオ。マットもマシンも両方受けられるのが魅力。全国150店舗以上で他店利用可能で横浜のスタジオにも通える。',
      },
      {
        author: 'Y.K',
        rating: 4,
        date: '2週間前',
        text: 'インストラクターの質が高く、20年以上の実績がある安心感。グループ体験1,000円で気軽に試せた。男性もOK。',
      },
      {
        author: 'R.S',
        rating: 5,
        date: '3週間前',
        text: '月4回10,450円〜とリーズナブル。体験当日入会で入会金33,000円が無料になるキャンペーンがお得。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['男性OK', '全国相互利用', 'マット＆マシン', '20年の実績'],
    description: 'ピラティス専門の大手スタジオ。マットグループ・マシングループ・プライベートの3タイプのレッスン。全国150店舗以上で相互利用可能。男性も利用OK。体験当日入会で入会金無料。',
    access: '小田急小田原線・相鉄本線「海老名駅」徒歩5分',
    address: '神奈川県海老名市中央1丁目',
    popularPlan: {
      name: 'フリープラン（マットグループ）',
      description: 'マットグループレッスン通い放題。全国店舗で相互利用可能。',
      price: '月額 16,940円（税込）',
    },
    options: [
      '月4回プラン（10,450円〜）',
      'マシングループ体験（3,000円）',
      'プライベートレッスン（体験 9,900円）',
      '体験当日入会で入会金無料',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 10:00〜21:00 / 土日祝 9:00〜18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'チェア', 'マット', 'ロッカー'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも海老名のスタジオに通えますか？',
    answer: '大丈夫です！海老名エリアのスタジオはほとんどが初心者歓迎。URBAN CLASSIC PILATESは予約不要のサーキット形式で気軽に始められ、ルネサンスは定員15名の少人数制で丁寧な指導が受けられます。',
  },
  {
    question: '海老名のピラティスの料金相場はどのくらいですか？',
    answer: 'グループ月4回で7,800円〜10,450円程度。URBAN CLASSIC PILATESが月4回7,800円〜で最もリーズナブル。パーソナルはRINNEが1回7,700円〜、Mellunaが1回8,800円〜です。',
  },
  {
    question: '海老名駅から近いスタジオはどこですか？',
    answer: 'URBAN CLASSIC PILATES海老名店が徒歩4分。zen placeとRINNEが徒歩5分。ルネサンスが徒歩7分。Mellunaは徒歩10分です。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'URBAN CLASSIC PILATES、RINNE、ルネサンス、zen placeは男性も利用可能。Melluna Pilatesは女性専用です。',
  },
  {
    question: '子連れで通えるスタジオはありますか？',
    answer: 'Melluna Pilatesは子連れOKで、キッズスペース完備。マタニティ・産後ピラティスにも対応しています。代表は理学療法士なので専門的なケアが受けられます。',
  },
  {
    question: '予約不要で通えるスタジオはありますか？',
    answer: 'URBAN CLASSIC PILATES海老名店は予約不要のサーキット形式。思い立った時にすぐ通えるのが魅力です。他のスタジオは基本的に事前予約が必要です。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。zen placeは両方体験できます。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめ。URBAN CLASSIC PILATESは30分完結なので、忙しい方でも週2〜3回通いやすいです。大切なのは継続すること。',
  },
  {
    question: '産後のボディケアにピラティスは効果的ですか？',
    answer: 'はい、産後の骨盤ケアや体型戻しにピラティスは非常に効果的。Melluna Pilatesは理学療法士が指導する産後専門プログラムがあり、子連れでも安心して通えます。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。姿勢改善は比較的早く実感でき、ボディメイク効果は3ヶ月程度で目に見える変化が現れます。',
  },
]

export default function EbinaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '海老名', url: 'https://pilates-biyori.com/area/ebina/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月13日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026年6月最新】ピラティス海老名おすすめ5選！<br className="hidden md:block" />
              料金・体験レッスン・マシン対応を比較！
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
              <span className="text-warm-600">海老名</span>
            </nav>
          </div>
        </section>
        <AreaConclusion studios={studios} areaName="海老名" />


        <TableOfContents areaName="海老名" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「海老名で人気のピラティススタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、海老名エリアでおすすめのピラティススタジオ5選をまとめました。</p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>海老名でピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>子連れで通えるスタジオを知りたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>駅近で通いやすいスタジオがいい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="海老名" />
        <AreaMarketComparison studios={studios} areaName="海老名" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">海老名のおすすめピラティススタジオ5選</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">海老名のピラティス料金相場【2026年6月最新】</h2>
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
                    <td className="px-4 py-3">7,800円〜10,450円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 7,700円〜8,800円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜1,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              海老名エリアは小田急線・相鉄線・JR相模線の3路線が乗り入れるターミナル駅で、ららぽーと海老名やビナウォークなど商業施設も充実。都心部と比べて料金がリーズナブルで、URBAN CLASSIC PILATESは月4回7,800円〜と非常にコスパが高い。近隣の<Link href="/area/honatsugi/" className="text-warm-700 underline hover:text-warm-900">本厚木</Link>や<Link href="/area/sagami-ono/" className="text-warm-700 underline hover:text-warm-900">相模大野</Link>エリアのスタジオとも比較検討するのがおすすめです。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">海老名でスタジオを選ぶ際の注意点</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">小田急線・相鉄線・JR相模線の出口を事前確認</h3>
                <p className="text-warm-600 leading-relaxed">海老名駅は3路線が乗り入れるため、利用路線によって出口が異なります。初回訪問時は余裕を持って到着できるよう事前にルートを確認しておきましょう。特にJR相模線の海老名駅は小田急・相鉄とは別の場所にあるので注意が必要です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">車通いなら駐車場の確認を</h3>
                <p className="text-warm-600 leading-relaxed">海老名は車で通う方も多いエリアです。駅前のスタジオは近隣のコインパーキングを利用することになりますが、ららぽーと海老名やビナウォークの駐車場が一定時間無料で利用できる場合もあります。事前に確認しておくと安心です。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">新規オープンスタジオのキャンペーンを活用</h3>
                <p className="text-warm-600 leading-relaxed">Melluna PilatesやRINNEなど、海老名エリアには新規オープンのスタジオが増えています。新規オープン時は入会金無料や体験レッスン割引などのキャンペーンを実施していることが多いので、タイミングを見逃さないようにしましょう。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも視野に入れて比較検討</h3>
                <p className="text-warm-600 leading-relaxed">海老名から<Link href="/area/sagami-ono/" className="text-warm-700 underline hover:text-warm-900">相模大野</Link>まで小田急線で約15分、<Link href="/area/honatsugi/" className="text-warm-700 underline hover:text-warm-900">本厚木</Link>まで約5分。通勤経路や生活圏に合わせて複数エリアを比較検討すると、自分に合ったスタジオが見つかりやすくなります。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trial Lesson Guide */}
        <section className="py-16 bg-white" id="trial-guide">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">体験レッスン当日の持ち物・服装ガイド</h2>
            <div className="bg-warm-50 rounded-lg p-8 border border-warm-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">必須の持ち物</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。ジーンズやスカートはNG。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：レッスン中の水分補給に。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：グリップソックスがベスト。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>の方がフォーム確認に最適。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>URBAN CLASSICは30分</strong>なので軽装でサッと参加可能。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>海老名エリアの豆知識：</strong>海老名はららぽーと海老名やビナウォークなど大型商業施設が充実したショッピングタウンです。レッスン前後のお買い物や食事も楽しめます。車での来店が多いエリアなので、レッスン後の着替えやケア用品も余裕を持って準備できるのが嬉しいポイントです。
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
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">月額1万円以下で通えるスタジオ。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• URBAN CLASSIC（月4回 7,800円〜）</li>
                  <li className="text-warm-700">• ルネサンス（月額 8,800円〜）</li>
                  <li className="text-warm-700">• zen place（月4回 10,450円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">産後・子連れ</h3>
                <p className="text-warm-600 text-sm mb-4">ママに優しいスタジオ。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Melluna（子連れOK・理学療法士）</li>
                  <li className="text-warm-700">• RINNE（パーソナル専門）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・予約不要</h3>
                <p className="text-warm-600 text-sm mb-4">手軽に通えるスタジオ。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• URBAN CLASSIC（徒歩4分・予約不要）</li>
                  <li className="text-warm-700">• zen place（徒歩5分）</li>
                  <li className="text-warm-700">• RINNE（徒歩5分）</li>
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
              <p className="text-warm-600 leading-relaxed mb-6">週1〜2回からスタート。最低2〜3ヶ月継続で効果を実感。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">週2〜3回がおすすめ。3〜6ヶ月で目に見える変化。</p>
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
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">グループレッスン中心。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• URBAN CLASSIC（7,800円〜/月4回）</li>
                  <li>• ルネサンス（8,800円〜/月額）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜17,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回〜通い放題</p>
                <p className="text-sm text-warm-600 mb-4">本格レッスンで効果実感。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place（10,450円〜/月4回）</li>
                  <li>• URBAN CLASSIC（14,080円/通い放題）</li>
                  <li>• zen place（16,940円/通い放題）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 7,700〜9,000円/回</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">マンツーマン指導で確実に効果。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• RINNE（7,700円〜/回）</li>
                  <li>• Melluna（8,800円〜/回）</li>
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
                <p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、産後ケアなど目的によって最適なスタジオは変わります。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">海老名の料金相場はグループ月4回で7,800円〜10,450円。パーソナルは1回7,700円〜。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">URBAN CLASSIC PILATESは0円体験。zen placeは1,000円。まずは気になるスタジオで体験してみましょう。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">海老名は小田急線・相鉄線・JR相模線が乗り入れるターミナル駅。駅周辺にスタジオが集中しており、買い物ついでに通えるのも魅力です。</p>
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
            <p className="text-warm-600 leading-relaxed mb-6">今回は海老名エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？</p>
            <p className="text-warm-600 leading-relaxed mb-6">この記事では海老名にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。</p>
            <p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p>
            <p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜1,000円。<br />まずは気軽に体験してみましょう。</p>
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
                <Link href="/area/honatsugi/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">本厚木</Link>
                <Link href="/area/sagami-ono/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">相模大野</Link>
                <Link href="/articles/pilates-ryokin-hakusho/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国ピラティス料金白書2026</Link>
              </div>
            </div>
          </div>
        </section>


      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="ebina" areaName="海老名" />

      <RelatedAreas currentSlug="ebina" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
