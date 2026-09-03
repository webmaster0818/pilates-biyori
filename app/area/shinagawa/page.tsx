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
  alternates: { canonical: 'https://biyori-pilates.com/area/shinagawa/' },
  title: '【2026年9月最新】品川のピラティス｜初心者OK・無料体験で選ぶ料金比較',
  description: '品川エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,品川,五反田,大井町,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'Rintosull 品川店',
    image: '/images/studios/rintosull.webp',
    price: '月4回 8,800円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', '2026年2月OPEN', '品川駅徒歩2分', 'マシンピラティス'],
    description: '2026年2月にオープンしたばかりの女性専用マシンピラティススタジオ。品川駅港南口から徒歩2分の好アクセス。月4回8,800円からという品川エリアでは圧倒的なコスパ。初心者が87%以上で安心して始められます。',
    access: 'JR・京急「品川駅」港南口 徒歩2分',
    address: '東京都港区（品川駅港南口徒歩2分）',
    popularPlan: {
      name: 'マシンピラティス月4回プラン',
      description: '月4回のマシンピラティスグループレッスン。女性専用で初心者も安心。',
      price: '月4回 8,800円（税込）',
    },
    options: [
      'マシンピラティス月4回（8,800円）',
      '2店舗通い放題（13,800円）',
      '体験レッスン無料',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '運動習慣づくり'],
    },
    basicInfo: {
      hours: 'お問い合わせください',
      closed: '毎週日曜日',
      facilities: ['ロッカー', 'マシン完備', '女性専用'],
    },
  },
  {
    name: 'zen place pilates 五反田東口スタジオ',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    price: 'マットグループ 月4回 10,450円〜',
    trial: '体験レッスン 1,000円〜',
    features: ['マット&マシン', '五反田駅徒歩5分', '男性OK', '朝7:30から'],
    description: '全国100店舗以上展開の大手ピラティススタジオ。五反田駅東口から徒歩圏内、品川からも山手線で1駅。マットグループ、マシングループ、プライベートレッスンに対応。朝7:30から夜20:55まで営業。',
    access: 'JR山手線「五反田駅」東口 徒歩圏内 / 品川駅から山手線で1駅',
    address: '東京都品川区東五反田1-22-6 五反田さくらビル4F',
    popularPlan: {
      name: 'マットグループ（月4回）',
      description: 'マットピラティスの少人数制グループレッスン。初心者でも安心。',
      price: '月4回 10,450円（税込）',
    },
    options: [
      'マットグループ月4回（10,450円）',
      'マットグループ月6回（14,520円）',
      'リフォーマーグループ（月4回 15,400円〜）',
      'プライベートレッスン（1回 9,900円〜）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '体幹強化', '仕事帰りのリフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:30〜20:55 / 土日祝 7:00〜19:40',
      closed: '月末不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi'],
    },
  },
  {
    name: 'zen place pilates 大井町スタジオ',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    price: 'マットグループ 月4回 9,625円〜',
    trial: '体験レッスン 1,000円〜',
    features: ['マット&マシン', '大井町駅徒歩3分', '男性OK', '初心者歓迎'],
    description: 'zen placeの大井町スタジオ。大井町駅C出口から徒歩3分。JR京浜東北線、東急大井町線、りんかい線の3路線が利用可能。マットグループからプライベートまで幅広く対応。',
    access: 'JR京浜東北線・東急大井町線・りんかい線「大井町駅」C出口 徒歩3分',
    address: '東京都品川区大井1-22-5 八木ビル5F',
    popularPlan: {
      name: 'リフォーマーグループ（月4回）',
      description: 'マシン（リフォーマー）を使ったグループレッスン。大井町駅から徒歩3分。',
      price: '月4回 15,400円（税込）〜',
    },
    options: [
      'マットグループ（月4回 9,625円〜）',
      'リフォーマーグループ（月4回 15,400円〜）',
      'フリープラン（月16,940円〜）',
      'プライベートレッスン（1回 9,900円〜）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '月末不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi'],
    },
  },
  {
    name: 'zen place pilates 五反田西口スタジオ',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    price: 'マットグループ 月4回 10,450円〜',
    trial: '体験レッスン 1,000円〜',
    features: ['マット&マシン', '五反田駅徒歩5分', '男性OK', '初心者歓迎'],
    description: 'zen placeの五反田エリア2店舗目（西口側）。五反田駅西口・都営浅草線A5出口から徒歩5分。東口店と合わせて品川区内に複数店舗展開。',
    access: 'JR山手線「五反田駅」西口 / 都営浅草線「五反田駅」A5出口 徒歩5分',
    address: '東京都品川区西五反田1-25-1 KANOビル5F',
  },
  {
    name: 'the SILK 田町店',
    image: '/images/studios/the-silk.webp',
    price: 'ライト3 12,980円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', 'マシンピラティス専門', '田町駅徒歩6分', '品川から1駅'],
    description: '女性専用マシンピラティス専門スタジオ。田町駅芝浦口から徒歩6分、品川からJR京浜東北線で1駅。無料体験レッスンを実施中。音楽に合わせた独自プログラムで楽しくトレーニング。',
    access: 'JR「田町駅」芝浦口 徒歩6分 / 品川からJR京浜東北線で1駅',
    address: '東京都港区芝浦3-13-14 PhilPark田町Shibaura 5F',
  },
  {
    name: 'STUDIO IVY 三田店',
    image: '/images/studios/studio-ivy.webp',
    price: '1回 6,500円〜',
    trial: '体験レッスン 500円〜',
    features: ['パーソナル専門', 'マシンピラティス', '赤羽橋駅徒歩5分', '品川近隣'],
    description: '全国展開のパーソナルマシンピラティス専門スタジオ。赤羽橋駅から徒歩5分。品川からも都営浅草線でアクセス可能。初回体験500円からとリーズナブル。',
    access: '都営大江戸線「赤羽橋駅」徒歩5分',
    address: '東京都港区三田2-7-7 ザ・パームス三田302',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！品川エリアのスタジオは初心者が87%以上のスタジオもあり、基礎から丁寧に指導してくれます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。',
  },
  {
    question: '品川エリアの料金相場は？',
    answer: 'グループレッスン月4回で8,800円〜15,400円程度。パーソナルは1回6,500円〜10,000円。体験は無料〜1,000円が多いです。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。継続が大切です。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、基礎代謝が上がり太りにくい体質に。最低2-3ヶ月は継続しましょう。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOK。レンタルできるスタジオが多いです。',
  },
  {
    question: 'ピラティスとヨガの違いは？',
    answer: 'ピラティスは体幹強化、ヨガは柔軟性とリラックスが中心です。',
  },
  {
    question: '肩こりや腰痛は改善しますか？',
    answer: 'はい、姿勢改善で根本原因を解消できます。デスクワークの方にもおすすめ。',
  },
  {
    question: 'どのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめ？',
    answer: 'パーソナルは効果が出やすく、グループは安く楽しく続けられます。体験で試してみてください。',
  },
]

export default function ShinagawaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '品川', url: 'https://pilates-biyori.com/area/shinagawa/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年09月04日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス品川おすすめ6選！<br className="hidden md:block" />
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
              <span className="text-warm-600">品川</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="品川" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「品川周辺でピラティスを始めたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              「駅近で通いやすいスタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、品川エリアでおすすめのピラティススタジオ6選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>品川・五反田・大井町でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>駅近で通いやすいスタジオがいい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>安くてコスパの良いスタジオを知りたい</span>
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

        <PriceComparisonTable studios={studios} areaName="品川" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              品川エリアのおすすめピラティススタジオ6選
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
              品川のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">10,450円〜12,980円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 6,500円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜1,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              品川はビジネス街としての性格が強く、仕事帰りの利用を想定した夜間プランや回数券プランが充実しています。賃料が高めのエリアのため料金は全体的にやや高い傾向ですが、法人契約や福利厚生割引に対応しているスタジオもあるので確認してみましょう。近隣の田町エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              品川でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR・京急「品川駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  品川エリアのスタジオは品川駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。品川駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">ビジネス街特有の予約傾向を把握</h3>
                <p className="text-warm-600 leading-relaxed">
                  品川はオフィス街のため、平日ランチタイム（12時〜13時）と夕方以降（18時〜21時）に予約が集中する傾向があります。逆に土日は比較的空いているスタジオが多いので、平日に通いづらい方は週末を狙うのも手です。また、祝日は営業時間が変更になることがあるので事前確認を。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  品川エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ず確認しましょう。月の途中入会は日割り計算になるかも要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  品川エリアだけでなく、近隣の<Link href="/area/tamachi/" className="text-warm-700 underline hover:text-warm-900">田町</Link>、<Link href="/area/gotanda/" className="text-warm-700 underline hover:text-warm-900">五反田</Link>、<Link href="/area/oimachi/" className="text-warm-700 underline hover:text-warm-900">大井町</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>品川エリアの豆知識：</strong>品川はビジネスパーソンの利用が多いエリアです。スーツやオフィスカジュアルで来てそのまま着替えたい方は、ロッカールームの広さやシャワーの有無を重視してスタジオを選びましょう。ウェアレンタルがあれば、大きな荷物を持ち歩く必要がありません。
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
                  月額1万円以下から通えるスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull 品川（月4回 8,800円）</li>
                  <li className="text-warm-700">• zen place 大井町（マット月4回 9,625円〜）</li>
                  <li className="text-warm-700">• zen place 五反田（月4回 10,450円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマン指導で効果を最大化。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STUDIO IVY 三田（体験500円〜）</li>
                  <li className="text-warm-700">• zen place（プライベート1回 9,900円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">品川駅からの近さ</h3>
                <p className="text-warm-600 text-sm mb-4">
                  品川駅から徒歩or1駅でアクセス可能。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull 品川（品川駅徒歩2分）</li>
                  <li className="text-warm-700">• zen place 五反田（品川から1駅）</li>
                  <li className="text-warm-700">• the SILK 田町（品川から1駅）</li>
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
                週1-2回からスタートがおすすめ。継続期間は最低2-3ヶ月。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回がおすすめ。3-6ヶ月で目に見える変化が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで継続がおすすめ。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">グループ</p>
                <p className="text-sm text-warm-600 mb-4">
                  コスパ抜群のグループレッスン。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（月4回 8,800円）</li>
                  <li>• zen place（マット月4回 9,625円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜16,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の充実レッスン。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• the SILK（ライト3 12,980円〜）</li>
                  <li>• Rintosull 通い放題（13,800円）</li>
                  <li>• zen place リフォーマー（15,400円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 25,000円〜/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">
                  プライベートレッスン。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• STUDIO IVY（1回 6,500円〜）</li>
                  <li>• zen place（プライベート 9,900円〜）</li>
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
                  ダイエット、姿勢改善、体幹強化など、目的によって最適なスタジオは変わります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  品川エリアの料金相場は月4回で8,800円〜15,400円程度。無理なく継続できる予算を決めましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  無料〜1,000円で体験できるスタジオが多いので、気軽に試してみてください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  品川はJR山手線・京浜東北線・横須賀線・東海道新幹線・京急線が利用できるターミナル駅。五反田・大井町・田町も近く、zen placeだけで品川区内に複数店舗展開しています。
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
              今回は品川エリアのおすすめピラティススタジオについてご紹介しましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              品川はJR・京急が利用できるターミナル駅で、五反田・大井町・田町も近隣。2026年にオープンしたRintosull品川店をはじめ、zen placeの複数店舗やパーソナル専門スタジオまで充実しています。
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
      <ConsultantSection areaKey="shinagawa" areaName="品川" />

            {/* boost-hamamatsucho-202607 */}
            <div className="my-8 bg-white border border-warm-200 p-5">
              <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">近隣エリア</p>
              <p className="text-sm text-warm-700 font-light leading-relaxed">
                オフィス街で仕事帰りに通うなら、<Link href="/area/hamamatsucho/" className="text-warm-800 underline decoration-warm-300 hover:text-warm-900">浜松町・大門エリアのピラティススタジオ比較</Link>もあわせて検討できます。無料体験・料金・アクセスをまとめて比較できます。
              </p>
            </div>
      <RelatedAreas currentSlug="shinagawa" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
