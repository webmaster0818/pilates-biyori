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
import { AreaModifierSections } from '@/components/AreaModifierSections'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/tsukuba/' },
  title: '【2026年10月最新】つくばのピラティス｜初心者可・無料体験で選ぶ料金比較',
  description: 'つくばエリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で比較しています。初心者向けの選び方、駅近スタジオ、体験レッスンの有無までわかります。',
  keywords: 'ピラティス,つくば,茨城,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates つくばスタジオ',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['つくば駅徒歩5分', '茨城県初', '男性利用可', '全国他店利用'],
    description: '2026年1月にオープンした茨城県初のzen placeピラティススタジオです。つくばエクスプレスつくば駅から徒歩5分です。マットグループ・マシングループ・プライベートの3タイプです。全国150店舗以上で他店利用可能です。',
    access: 'つくばエクスプレス「つくば駅」徒歩5分',
    address: '茨城県つくば市竹園1-6-1 つくばビルディング2階',
    popularPlan: {
      name: 'フリープラン（マットグループ）',
      description: 'マットグループレッスン通い放題です。全国店舗で他店利用可能です。',
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
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'CLUB PILATES つくば店',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5805739&p_id=4728&pc_id=12432&pl_id=67545',
    image: '/images/studios/club-pilates.webp',
    price: '月4回 11,990円／月8回 21,890円／通い放題 36,190円（公式店舗ページ・税表記なし）',
    trial: '体験レッスン 無料（30分イントロクラス）',
    features: ['世界最大級', 'つくば駅徒歩3分', '15種類の器具', '男性利用可'],
    description: '世界最大級のマシンピラティスブランドです。つくば駅から徒歩3分のクレオ3Fです。最大12名の少人数制で、リフォーマー・スプリングボード・TRX・チェアなど15種類のマシン・器具を完備しています。8つのプログラムと4段階のレベル分けです。',
    access: 'つくばエクスプレス「つくば駅」徒歩3分 トナリエつくばスクエア クレオ 3F',
    address: '茨城県つくば市吾妻1-7-1 トナリエつくばスクエア クレオ 3F',
    popularPlan: {
      name: 'グループ月4回プラン',
      description: '15種類の器具を使った本格グループレッスンです。4段階のレベル分けで安心です。',
      price: '月4回 11,990円（税表記なし）',
    },
    options: ['月8回 21,890円', '通い放題 36,190円', '入会金 5,500円（税込）', '料金は公式の店舗ページ（2026年10月14日確認）'],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['体幹強化', '姿勢改善', 'ボディメイク', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: '月〜金 7:00-21:00 / 土 7:00-17:00 / 日 7:00-17:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'スプリングボード', 'TRX', 'チェア', 'Bosu'],
    },
  },
  {
    name: 'Pilates KASANE つくば店',
    officialUrl: 'https://t.afi-b.com/visit.php?a=T15562j-7505717Y&p=E9887623',
    image: '/images/studios/pilates-kasane.webp',
    price: '月4回 15,400円',
    trial: '体験レッスン 無料',
    features: ['イオンモール内', '手ぶらで参加可能', 'セミパーソナル', '無料体験あり'],
    description: 'イオンモールつくば2Fにあるマシンピラティススタジオです。少人数制のセミパーソナルレッスンで、呼吸・姿勢・体の使い方を基礎から丁寧に学べます。ウェア無料レンタルで手ぶら来店可能です。',
    access: '荒川沖駅よりバス12分 / ひたち野うしく駅よりバス14分 / つくば駅よりバス20分',
    address: '茨城県つくば市稲岡66-1 イオンモールつくば 2F',
    popularPlan: {
      name: '月4回プラン',
      description: '少人数制セミパーソナルレッスン月4回です。手ぶらで参加可能です。',
      price: '月4回 15,400円（税込）',
    },
    options: [
      '月6回プラン',
      '月8回プラン',
      'パーソナルレッスンプラン',
      '追加レッスンチケット',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '健康維持'],
    },
    basicInfo: {
      hours: 'イオンモールつくばの営業時間に準ずる',
      closed: 'イオンモールつくばの休館日に準ずる',
      facilities: ['リフォーマー', 'マット', '更衣室', 'ウェアレンタル'],
    },
  },
  {
    name: 'モナピラティス（MONA PILATES）',
    image: '/images/studios/monapila-tsukuba.webp',
    price: '月4回 7,480円〜',
    trial: '体験レッスン 1,100円',
    features: ['女性専用', '駐車場30台', '多彩なプログラム', '月4回7,480円〜'],
    description: 'つくば市みどりのにある女性専用ピラティス・ヨガスタジオです。マットピラティス・リフォーマー・ヨガ・TRXなど豊富なプログラムです。無料駐車場30台完備で車通いに便利です。月4回7,480円〜のリーズナブルな料金設定です。',
    access: 'つくばエクスプレス「みどりの駅」徒歩15分 / 無料駐車場30台完備',
    address: '茨城県つくば市みどりの（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月8回プラン',
      description: '女性専用のマットピラティス・リフォーマー・ヨガ等グループレッスン月8回です。',
      price: '月8回 11,440円（税込・1回あたり1,430円）',
    },
    options: [
      '月4回プラン（7,480円）',
      '月6回プラン（9,900円）',
      '月8回プラン（11,440円）',
      '入会金 11,000円（キャンペーンあり）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '平日 9:00〜22:00 / 土日 9:00〜17:15',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', 'TRX', '更衣室', '無料駐車場'],
    },
  },
  {
    name: 'La pilates（ラピラティス）つくば店',
    image: '/images/studios/la-pilates.webp',
    price: '月1回 10,000円〜',
    trial: '体験レッスンあり',
    features: ['整体×ピラティス', '女性専用', '完全マンツーマン', 'オーダーメイド'],
    description: '整体とマシンピラティスを融合させた女性専用プライベートスタジオです。完全マンツーマンのオーダーメイドレッスンで、一人ひとりの体の悩みや不調を根本から整えるアプローチです。',
    access: '公式サイトでご確認ください',
    address: '茨城県つくば市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月2回コース',
      description: '整体×マシンピラティスの完全マンツーマンレッスン月2回です。',
      price: '年払い 220,000円（税込・月あたり約18,333円）',
    },
    options: [
      '月1回コース（年払い 120,000円）',
      '月4回コース（年払い 398,400円）',
      '月6回コース（年払い 540,000円）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['不調改善', '姿勢改善', '体質改善', 'ボディメイク'],
    },
    basicInfo: {
      hours: '完全予約制',
      closed: '不定休',
      facilities: ['リフォーマー', '整体設備', '完全個室', '更衣室'],
    },
  },
  {
    name: 'マシンピラティススタジオReMore（リモア）',
    officialUrl: 'http://studio-remore.com',
    image: '/images/studios/remore.webp',
    price: 'パーソナル 4回 36,000円（税込）',
    trial: '体験レッスン 3,000円（通常5,000円・オープニングキャンペーン）',
    features: ['女性専用', '完全個室', 'マンツーマン', '駐車場あり'],
    description: '2026年9月10日に流山市からつくば市へ移転オープンした女性専用のマシンピラティススタジオです。完全個室・完全予約制で、インストラクターとマンツーマンのオーダーメイド指導を受けられます。つくば駅・研究学園駅から車で10分、洞峰公園から徒歩5分です。駐車場・駐輪場があります。',
    access: 'つくば駅・研究学園駅から車で10分／洞峰公園から徒歩5分',
    address: '茨城県つくば市二の宮3-25-25 HappyOrange302号室',
    popularPlan: {
      name: 'パーソナル 4回',
      description: '完全個室でインストラクターとマンツーマンです。一人ひとりに合わせたオーダーメイド指導しています。',
      price: '4回 36,000円（税込）',
    },
    options: [
      'パーソナル 8回 68,000円／12回 96,000円（税込）',
      'ペアトレーニング 4回 22,000円（1名につき・税込）',
      'ペアトレーニング 8回 40,000円（1名につき・税込）',
      'ボディメイク×ピラティス養成講座 150,000円（モニター価格 100,000円・定員あり）',
      '体験レッスン 3,000円（通常5,000円／初めての方のみ・60分・カウンセリングと姿勢分析つき）',
    ],
    userProfile: {
      ageRange: '公式サイトに記載なし',
      genderRatio: '女性100%（女性専用）',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '歪みの改善'],
    },
    basicInfo: {
      hours: '9:30〜19:30',
      closed: '年末年始',
      facilities: ['更衣スペース', '駐車場', '駐輪場'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。つくばエリアのスタジオはほとんどが初心者歓迎です。CLUB PILATESは4段階のレベル分け、Pilates KASANEは少人数制セミパーソナルで丁寧に指導しています。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷調整しやすく初心者におすすめです。つくばではzen place、CLUB PILATES、Pilates KASANEでマシンレッスンが受けられます。',
  },
  {
    question: 'つくばのピラティスの料金相場は？',
    answer: 'グループ月4回で7,480円〜15,400円程度です。モナピラティスが月4回7,480円〜で最もリーズナブルです。zen placeは月4回10,450円〜、CLUB PILATESは月4回 11,990円です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回が目安です。大切なのは継続することです。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。2〜3ヶ月の継続が大切です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があれば問題ありません。Pilates KASANEは手ぶらで参加可能です（ウェア無料レンタル）。CLUB PILATESは無料イントロクラスがあります。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化しています。ヨガは柔軟性とリラックス重視です。モナピラティスではヨガとピラティス両方のレッスンが受けられます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen placeつくばとCLUB PILATESつくばは男性も通えます。モナピラティスとLa pilatesは女性専用です。',
  },
  {
    question: '無料で体験できるスタジオは？',
    answer: 'CLUB PILATESとPilates KASANEは無料体験があります。zen placeはグループ体験1,000円です。モナピラティスは体験1,100円です。',
  },
  {
    question: '車で通えるスタジオはありますか？',
    answer: 'モナピラティスは無料駐車場30台完備です。Pilates KASANEはイオンモール内なので駐車場があります。CLUB PILATESもトナリエつくばスクエア内で駐車場利用可能です。',
  },
]

export default function TsukubaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: 'つくば', url: 'https://biyori-pilates.com/area/tsukuba/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月11日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              ピラティスつくばおすすめ6選<br className="hidden md:block" />
              料金・体験レッスン・マシン対応を比較
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
              <span className="text-warm-600">つくば</span>
            </nav>
          </div>
        </section>
        <AreaConclusion studios={studios} areaName="つくば" />


        <TableOfContents areaName="つくば" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、つくばエリアでおすすめのピラティススタジオ6選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>つくばでピラティススタジオを探している</span>
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
              以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="つくば" />
        <AreaMarketComparison studios={studios} areaName="つくば" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              つくばのおすすめピラティススタジオ6選
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
              つくばのピラティス料金相場
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
                    <td className="px-4 py-3">1,430円〜16,940円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 7,480円〜18,333円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜1,100円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              つくばエリアは都心部と比較してテナント賃料が抑えめのため、同じ内容のレッスンでも料金がリーズナブルな傾向があります。通い放題プランの割安感が大きいエリアのため、週2回以上通える方には月額制プランをおすすめします。近隣の柏エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              つくばでスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">つくばエクスプレス「つくば駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  つくばエリアのスタジオはつくば駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートをご確認ください。つくば駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">スタジオ数が限られるため早めの予約を</h3>
                <p className="text-warm-600 leading-relaxed">
                  つくばエリアは都心と比べてスタジオの選択肢が限られるため、人気のスタジオ・時間帯は予約が埋まりやすい傾向があります。特に土曜午前は混み合うことが多いので、1週間前には予約を入れておくのがおすすめです。車で通う方は駐車場の有無もご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">通い放題プランと回数制プランを比較検討</h3>
                <p className="text-warm-600 leading-relaxed">
                  つくばエリアでは、通い放題プランが都心部より割安に設定されている傾向があります。週2回以上通う場合は通い放題が割安ですが、月1〜2回のペースであれば回数券やドロップインの方が割安な場合もあります。自分の通う頻度を想定してプランをお選びください。初月は回数制で様子を見る方法もあります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  つくばエリアだけでなく、近隣の<Link href="/area/kashiwa/" className="text-warm-700 underline hover:text-warm-900">柏</Link>、<Link href="/area/chiba/" className="text-warm-700 underline hover:text-warm-900">千葉</Link>、<Link href="/area/tokyo-station/" className="text-warm-700 underline hover:text-warm-900">東京駅</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番です。ジーンズやスカートは適していません。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：レッスン中の水分補給に必要です。自動販売機がないスタジオもあるため、持参をおすすめします。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用です。マシンに敷くタオルは、スタジオで用意されている場合が一般的です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは、靴下の着用が必須のスタジオが多数あります。グリップソックスが適しています。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>をお選びください。ピラティスは脚を大きく動かすエクササイズが多いため、伸縮性のある素材が適しています。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>の方が、インストラクターがフォームを確認しやすく、効果的な指導を受けられます。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。手ぶらで体験可能な場合もあるので事前にご確認ください。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。マシンに引っかかる恐れがあるため、ピアス・ネックレス・腕時計はロッカーに預けるのが安全です。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>つくばエリアの豆知識：</strong>つくばエリアは車で通う方も多いため、駐車場の有無や提携コインパーキングを事前にご確認ください。車なら荷物の心配が少ないので、シャワー後の着替えやヘアドライヤーなども余裕を持って準備できます。
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
                  月額2万円未満で通えるスタジオです（店舗カードの料金）。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• モナピラティス（MONA PILATES）（月4回 7,480円〜）</li>
                  <li className="text-warm-700">• La pilates（ラピラティス）つくば店（月1回 10,000円〜）</li>
                  <li className="text-warm-700">• zen place pilates つくばスタジオ（月4回 10,450円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• モナピラティス（MONA PILATES）</li>
                  <li className="text-warm-700">• La pilates（ラピラティス）つくば店</li>
                  <li className="text-warm-700">• マシンピラティススタジオReMore（リモア）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  駅から徒歩2分以内です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• このページの掲載スタジオでは該当なし</li>
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
                週1〜2回から始めることをおすすめします。最低2〜3ヶ月継続で効果を実感できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回が目安です。3〜6ヶ月で目に見える変化が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続することをおすすめします。
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
                  グループレッスンが中心です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place（10,450円〜/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン専門スタジオです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• CLUB PILATES（月4回 11,990円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 16,000〜29,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  毎日通いたい方向けです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• CLUB PILATES（通い放題 36,190円）</li>
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
                  つくばの料金相場はグループ月4回で10,450円〜15,070円です。入会金やキャンペーンもご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  体験料金は、zen place pilates つくばスタジオが「グループ体験 1,000円」、CLUB PILATES つくば店が「体験レッスン 無料（30分イントロクラス）」、Pilates KASANE つくば店が「体験レッスン 無料」、モナピラティス（MONA PILATES）が「体験レッスン 1,100円」です（店舗カードの記載）。最新の条件は各公式サイトでご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  つくばの掲載スタジオでは、CLUB PILATES つくば店（つくばエクスプレス「つくば駅」徒歩3分 トナリエつくばスクエア クレオ 3F）、zen place pilates つくばスタジオ（つくばエクスプレス「つくば駅」徒歩5分）、マシンピラティススタジオReMore（リモア）（洞峰公園から徒歩5分）が駅から近いスタジオです。通う時間帯の経路もご確認ください。
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
              本ページでは、つくばエリアのおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、つくばにあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページの情報を、スタジオ選びにお役立てください。
            </p>
            <p className="text-warm-700 font-medium text-center">
              本ページが、ピラティススタジオ選びの参考になれば幸いです。
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              体験レッスンのご予約
            </h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              初回限定の体験レッスン無料〜3,850円です。<br />
              まずは体験レッスンへの参加をおすすめします。
            </p>
            <Link
              href="/#studios"
              className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded"
            >
              おすすめスタジオ一覧に戻る
            </Link>
          </div>
        </section>
              <AreaModifierSections studios={studios} areaName="つくば" />
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="tsukuba" areaName="つくば" />

                  {/* g1-link-202607 */}
            <div className="my-8 bg-white border border-warm-200 p-5">
              <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">店舗別ガイド</p>
              <p className="text-sm text-warm-700 font-light leading-relaxed mb-3">このエリアの店舗別に料金・体験レッスン・アクセスを整理した詳細ページがあります。</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/brands/kasane-tsukuba/" className="text-xs text-warm-800 border border-warm-300 bg-white px-3 py-1.5 hover:border-warm-500 transition-colors">Pilates KASANE つくば店の料金・体験を見る</Link>
              </div>
            </div>
      <RelatedAreas currentSlug="tsukuba" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
