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
  alternates: { canonical: 'https://biyori-pilates.com/area/yutenji/' },
  title: 'ピラティス祐天寺おすすめ4選｜マシン月4回8,580円〜・体験無料あり',
  description: '祐天寺駅周辺のピラティスを公式料金（11月26日確認）で比較。マシンはURBAN CLASSIC月4回8,580円・zen placeリフォーマー月4回15,400円、マットはNATURAglam月4回5,280円。体験料金と駅徒歩分も一覧に。',
  keywords: 'ピラティス,祐天寺,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 祐天寺スタジオ',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: 'マットグループ 月4回 10,450円〜',
    trial: '体験レッスン 1,000円',
    features: ['マット&マシン', '東急東横線祐天寺駅近', '少人数制', '男性利用可'],
    description: '全国150店舗以上展開の大手ピラティススタジオです。東急東横線祐天寺駅から徒歩圏内の好立地です。マットピラティスからマシンピラティスまで豊富なレッスンメニューを用意しています。有資格エデュケーターが在籍し、初心者から上級者まで一人ひとりに合わせた丁寧な指導を提供します。',
    access: '東急東横線「祐天寺駅」東口 徒歩2分',
    address: '東京都目黒区祐天寺2丁目3-11 第6エスペランス 2階',
    popularPlan: {
      name: 'マットグループ（月4回）',
      description: 'マットピラティスのグループレッスンです。少人数制で丁寧な指導です。',
      price: '月4回 10,450円（税込）〜',
    },
    options: [
      'マットグループ（月4回 10,450円〜）',
      'リフォーマーグループ（月4回 15,400円〜）',
      'フリープラン（月16,940円〜）',
      'プライベート（1回 9,900円〜）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:30〜21:00 / 土日祝 7:30〜17:30',
      closed: '月末不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi'],
    },
  },
  {
    name: 'NATURAglam 祐天寺スタジオ',
    image: '/images/studios/naturaglam.webp',
    price: '月4回 5,280円（税込・税別4,800円）',
    trial: '体験レッスン 1,000円',
    features: ['女性専用', '7スタジオ相互利用', 'マットピラティス', '入会金0円キャンペーン'],
    description: '月4回4,800円（税別・税込5,280円）という低価格でマットピラティスが楽しめる女性専用スタジオです。祐天寺・下北沢・三軒茶屋・中目黒・高円寺・戸越銀座・経堂の7スタジオを追加料金なしで相互利用可能です。体験レッスン1,000円で気軽にスタートできます。',
    access: '東急東横線「祐天寺駅」徒歩5分（学芸大学駅から徒歩7〜8分）',
    address: '東京都目黒区五本木2-5-20',
    popularPlan: {
      name: '月4回プラン',
      description: 'マットピラティス月4回です。7スタジオ相互利用可能です。',
      price: '月4回 4,800円（税別・税込5,280円）',
    },
    options: [
      '月4回プラン（4,800円税別・税込5,280円）',
      '月8回プラン（7,800円税別・税込8,580円）',
      '7スタジオ相互利用（追加料金なし）',
      '体験レッスン（1,000円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      purpose: ['運動習慣づくり', '姿勢改善', '料金重視', 'リラックス'],
    },
    basicInfo: {
      hours: 'スタジオにより異なる',
      closed: '不定休',
      facilities: ['マット', 'ロッカー'],
    },
  },
  {
    name: 'URBAN CLASSIC PILATES 祐天寺',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11337L.1.X156352B.U1357808',
    image: '/images/studios/urban-classic-pilates.webp',
    price: '月4回 8,580円〜',
    trial: '無料体験あり',
    features: ['予約不要', '30分サーキット', '祐天寺駅 徒歩1分', '通い放題あり'],
    description: '予約不要の30分サーキット型マシンピラティススタジオです。好きな時間にふらっと立ち寄れる手軽さが人気です。月会費制で、月4回8,580円・月8回10,780円・通い放題12,980円（税込）です。都度払いはありません。男性も入会できます。',
    access: '東急東横線「祐天寺駅」東口2 徒歩1分',
    address: '東京都目黒区祐天寺2-14-19 四宮ビル 3F',
    options: [
      'マンスリー4（月4回 8,580円）',
      'マンスリー8（月8回 10,780円）',
      'レギュラー（通い放題 12,980円）',
      '入会時 施設利用料 2,200円・4か月目から運営管理費 月480円',
    ],
    basicInfo: {
      hours: '平日 9:30〜21:30 / 土祝 9:30〜19:30',
      closed: '日曜日',
    },
  },
  {
    name: 'GRACE pilates&yoga studio',
    image: '/images/studios/grace-yutenji.webp',
    price: '1回 2,000円〜',
    trial: '体験レッスンあり',
    features: ['ピラティス&ヨガ', 'アットホーム', '祐天寺エリア', '少人数制'],
    description: 'ピラティスとヨガの両方が楽しめるスタジオです。1回2,000円〜というリーズナブルな価格設定で、少人数制の丁寧なレッスンが特徴です。祐天寺の落ち着いた雰囲気に合ったアットホームな空間で、初心者から経験者まで幅広く対応しています。',
    access: '東急東横線「祐天寺駅」徒歩圏内',
    address: '東京都目黒区（祐天寺エリア）',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。祐天寺のスタジオは初心者歓迎です。URBAN CLASSIC PILATESは無料体験があり、NATURAglamは月4回4,800円（税別）〜で気軽に始められます。zen placeもマットグループ体験1,000円からです。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重を使ったエクササイズ、マシンは専用マシン（リフォーマー等）を使ったトレーニングです。マシンは初心者にもおすすめです。',
  },
  {
    question: '祐天寺エリアの料金相場は？',
    answer: 'マットはNATURAglamの月4回5,280円（税込）から、マシンはURBAN CLASSIC PILATES（30分サーキット）の月4回8,580円から、zen placeのリフォーマーグループは月4回15,400円です（いずれも税込・2026年11月26日に公式で確認）。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回からスタートがおすすめです。慣れてきたら週2〜3回に増やすことをおすすめします。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質になります。最低2〜3ヶ月は継続することをおすすめします。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があれば問題ありません。スタジオによってはウェアレンタルもあります。',
  },
  {
    question: 'ピラティスとヨガの違いは？',
    answer: 'ピラティスは体幹強化・姿勢改善が中心、ヨガは柔軟性とリラックスが中心です。GRACEでは両方体験できます。',
  },
  {
    question: '肩こりや腰痛は改善しますか？',
    answer: 'はい、ピラティスは姿勢改善を通じて肩こりや腰痛の根本原因を解消する効果が期待できます。',
  },
  {
    question: 'どのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から姿勢や体型の変化を実感される方が多くなっています。',
  },
  {
    question: '予約不要のスタジオはありますか？',
    answer: 'URBAN CLASSIC PILATESは予約不要の30分サーキット型です。好きな時間にふらっと通えます。',
  },
]

export default function YutenjiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '祐天寺', url: 'https://biyori-pilates.com/area/yutenji/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年11月26日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              ピラティス祐天寺おすすめ4選<br className="hidden md:block" />
              人気スタジオの料金プランの比較
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
              <span className="text-warm-600">祐天寺</span>
            </nav>
          </div>
        </section>

        <section className="py-8 bg-white" id="quick-table"><div className="max-w-5xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4 text-center">祐天寺のピラティス早見表（月額・体験・駅徒歩分）</h2><div className="bg-warm-50 border-l-4 border-warm-700 p-4 mb-5 text-sm text-warm-800 leading-relaxed"><p className="font-bold mb-1">料金の答え（税込・2026年11月26日に各公式ページで確認）</p><p>祐天寺駅周辺でマシンピラティスに月4回通う場合、いちばん安いのは東口徒歩1分の URBAN CLASSIC PILATES 祐天寺（30分サーキット）の 8,580円で、体験は無料です。グループでリフォーマーを使うなら zen place pilates 祐天寺のリフォーマーグループが月4回 15,400円（体験 3,000円）。マットなら女性専用の NATURAglam 祐天寺スタジオが月4回 5,280円（体験 1,000円）で、zen place のマットグループは月4回 10,450円（体験 1,000円）です。</p></div><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">スタジオ</th><th className="px-4 py-3 text-left">場所・駅徒歩</th><th className="px-4 py-3 text-left">形式</th><th className="px-4 py-3 text-left">月額（税込）</th><th className="px-4 py-3 text-left">体験</th><th className="px-4 py-3 text-left">営業時間・定休</th></tr></thead><tbody>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">URBAN CLASSIC PILATES 祐天寺</td><td className="px-4 py-3">目黒区祐天寺2-14-19 四宮ビル3F（祐天寺駅 東口2 徒歩1分）</td><td className="px-4 py-3">マシン（リフォーマー）＋TRXの30分サーキット・予約不要・男性も可</td><td className="px-4 py-3">月4回 8,580円／月8回 10,780円／通い放題 12,980円（入会時 施設利用料 2,200円・4か月目から運営管理費 月480円・都度払いなし）</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">平日 9:30〜21:30・土祝 9:30〜19:30／日曜定休</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">zen place pilates 祐天寺（グレード01）</td><td className="px-4 py-3">目黒区祐天寺2-3-11 第6エスペランス2階（祐天寺駅 東口 徒歩2分）</td><td className="px-4 py-3">マット・リフォーマーのグループ／プライベート・男女共用</td><td className="px-4 py-3">マットグループ 月4回 10,450円／リフォーマーグループ 月4回 15,400円（入会金 33,000円〔当日入会で無料〕・設備運営管理費 月550円）</td><td className="px-4 py-3">マット 1,000円（通常3,300円）／マシン 3,000円（通常5,000円）／プライベート 9,900円</td><td className="px-4 py-3">平日 7:30〜21:00・土日祝 7:30〜17:30</td></tr>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">NATURAglam 祐天寺スタジオ</td><td className="px-4 py-3">目黒区五本木2-5-20（祐天寺駅 徒歩5分・学芸大学駅 徒歩7〜8分）</td><td className="px-4 py-3">マット（ヨガ・ピラティス）・女性専用・常温・7スタジオ共通</td><td className="px-4 py-3">月4回 5,280円／月8回 8,580円（入会金・事務手数料 0円のキャンペーン中）</td><td className="px-4 py-3">1,000円</td><td className="px-4 py-3">公式の料金ページに記載なし（スケジュール制）</td></tr>
        </tbody></table></div><p className="text-warm-500 leading-relaxed mt-3 text-xs">確認した公式ページ（2026年11月26日）: <a href="https://urbanclassic.jp/pilates-studio/yutenji/" target="_blank" rel="noopener" className="underline">URBAN CLASSIC PILATES 祐天寺</a>／<a href="https://www.zenplace.co.jp/studios/pilates-yuutenji" target="_blank" rel="noopener" className="underline">zen place pilates 祐天寺</a>・<a href="https://www.zenplace.co.jp/price" target="_blank" rel="noopener" className="underline">zen place 料金</a>／<a href="https://www.naturaglam.com/membershipfee/" target="_blank" rel="noopener" className="underline">NATURAglam 料金・システム</a>・<a href="https://www.naturaglam.com/yutenji/access/" target="_blank" rel="noopener" className="underline">祐天寺スタジオ アクセス</a>。GRACE pilates&amp;yoga studio は公式サイトを確認できなかったため表に含めていません。他の比較サイトで紹介されている TSUTAYA Conditioning PILATES 祐天寺店は、2026年9月30日で営業を終了しています（<a href="https://tc.tsite.jp/news/2pPrwJBa" target="_blank" rel="noopener" className="underline">公式のお知らせ</a>）。</p></div></section>

        <TableOfContents areaName="祐天寺" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、祐天寺エリアでおすすめのピラティススタジオ4選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>祐天寺でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>安くて料金を抑えられるスタジオがいい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
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

        <PriceComparisonTable studios={studios} areaName="祐天寺" />
        <AreaMarketComparison studios={studios} areaName="祐天寺" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              祐天寺のおすすめピラティススタジオ4選
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
              祐天寺のピラティス料金相場
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
                    <td className="px-4 py-3">マット 5,280円〜／マシン 8,580円〜15,400円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 8,000円〜15,000円程度</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">0円〜3,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              祐天寺は住宅地としての人気が高く、地元在住の方が徒歩や自転車で通えるスタジオが充実しています。繁華街ほど料金は高くなく、かつ都心へのアクセスも良いバランスの取れたエリアです。平日昼間のクラスは比較的空いている傾向があります。近隣の中目黒エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              祐天寺でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">東急東横線「祐天寺駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  祐天寺エリアのスタジオは祐天寺駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートをご確認ください。祐天寺駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">住宅地ならではの予約の特徴を把握</h3>
                <p className="text-warm-600 leading-relaxed">
                  祐天寺は住宅地のため、主婦・ママ層が多い平日午前中と、仕事帰りの平日夜が予約のピークタイムです。土日は意外と空いているスタジオも多いので、比較的空いている時間帯を把握しておくと通いやすくなります。子連れ可のクラスがあるスタジオもあるので、お子さまがいる方はご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  祐天寺エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかをご確認ください。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため、事前にご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  祐天寺エリアだけでなく、近隣の<Link href="/area/nakameguro/" className="text-warm-700 underline hover:text-warm-900">中目黒</Link>、<Link href="/area/gakugei-daigaku/" className="text-warm-700 underline hover:text-warm-900">学芸大学</Link>、<Link href="/area/ebisu/" className="text-warm-700 underline hover:text-warm-900">恵比寿</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                  <strong>祐天寺エリアの豆知識：</strong>祐天寺は地元の方が徒歩や自転車で通うケースが多いエリアです。自転車の方はスタジオ近くの駐輪スペースの有無をご確認ください。近場なら荷物も最小限で済むので、気軽に続けやすいのが祐天寺の良さです。
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
                <h3 className="text-xl font-bold text-warm-900 mb-4">割安</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額5,280円（税込）からです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• NATURAglam（月4回 5,280円）</li>
                  <li className="text-warm-700">• URBAN CLASSIC PILATES（月4回 8,580円）</li>
                  <li className="text-warm-700">• GRACE（1回 2,000円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">マシンピラティス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  本格マシンで効果的に通えます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place（マット&マシン対応）</li>
                  <li className="text-warm-700">• URBAN CLASSIC PILATES（サーキット型）</li>
                  <li className="text-warm-700">• zen place プライベート（9,900円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">予約不要・気軽に通える</h3>
                <p className="text-warm-600 text-sm mb-4">
                  忙しい方に適しています。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• URBAN CLASSIC PILATES（予約不要30分）</li>
                  <li className="text-warm-700">• NATURAglam（7スタジオ相互利用）</li>
                  <li className="text-warm-700">• GRACE（ドロップイン可）</li>
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
              <h3 className="text-xl font-bold text-warm-900 mb-4">初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週1〜2回から始めることをおすすめします。最低2〜3ヶ月で効果を実感できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイク目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回が目安です。3〜6ヶ月で目に見える変化が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">健康管理目的の方</h3>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜6,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">マット</p>
                <p className="text-sm text-warm-600 mb-4">
                  圧倒的低価格のマットピラティスです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• NATURAglam（月4回 5,280円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 8,000〜16,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">マシン</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備のスタジオです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• URBAN CLASSIC PILATES（マシン月4回 8,580円〜）</li>
                  <li>• zen place（マット月4回 10,450円〜）</li>
                  <li>• zen place リフォーマー（15,400円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">回数券・都度払い</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">手軽</p>
                <p className="text-sm text-warm-600 mb-4">
                  1回ずつ気軽に通えます。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• GRACE（料金はスタジオにご確認ください）</li>
                  <li>• NATURAglam（持ち回数を超えた分は1回1,000円）</li>
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
                  ダイエット、姿勢改善、体幹強化など目的に応じてスタジオをお選びください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  祐天寺はマット月4回5,280円〜、マシンのサーキット型月4回8,580円〜、zen placeのリフォーマーグループ月4回15,400円と幅広い価格帯です。無理なく続けられる予算でお選びください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  無料〜3,000円で体験できるスタジオが中心です。雰囲気やインストラクターとの相性をご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  祐天寺は東急東横線で中目黒・学芸大学に挟まれた落ち着いた住宅街です。駅前にはカフェやベーカリーが並び、レッスン前後の時間もゆったり過ごせます。
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
              今回は祐天寺のおすすめピラティススタジオをご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              祐天寺はNATURAglamの月4回5,280円（税込）という割安スタジオから、zen placeの本格マット&マシンピラティス、URBAN CLASSIC PILATESの予約不要サーキット、GRACEのピラティス&ヨガまで多彩な選択肢があります。中目黒と学芸大学に挟まれた落ち着いた住宅街ならではの、ゆったりとした環境で通えるのが魅力です。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページの情報を、スタジオ選びにお役立てください。
            </p>
            <p className="text-warm-700 font-medium text-center">
              本ページが、スタジオ選びの参考になれば幸いです。
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
              URBAN CLASSIC PILATESは無料体験、zen place・NATURAglamは1,000円〜です。<br />
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
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="yutenji" areaName="祐天寺" />

      <RelatedAreas currentSlug="yutenji" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
