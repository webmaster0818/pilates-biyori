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
  alternates: { canonical: 'https://biyori-pilates.com/area/nishi-nippori/' },
  title: '西日暮里のピラティス5選｜日暮里・千駄木の駅別早見表と公式料金で比較',
  description: '西日暮里から1駅の日暮里駅・千駄木駅周辺のピラティス5か所を、駅別早見表と公式料金で比較。URBAN CLASSIC PILATES 日暮里（税込8,580円〜・無料体験）、Rintosull日暮里店、ソエルスタジオ、zen place 千駄木、YUZU日暮里店（2026年10月17日確認）。',
  keywords: 'ピラティス,西日暮里,日暮里,千駄木,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'URBAN CLASSIC PILATES 日暮里店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11337L.1.X156352B.U1357808',
    image: '/images/studios/urban-classic-pilates.webp',
    price: 'マンスリー4 税込8,580円／マンスリー8 税込10,780円／レギュラー（通い放題）税込12,980円',
    trial: '無料体験（要予約）',
    features: ['日暮里駅徒歩1分', '30分サーキット', '男性も入会可', '無料体験'],
    description: 'マシンピラティスを30分のサーキット形式で行うスタジオです。JR山手線・常磐線「日暮里駅」から徒歩1分で、西日暮里駅からはJR山手線で1駅です。月会費（永久割引価格）はマンスリー4が7,800円（税込8,580円）、マンスリー8が9,800円（税込10,780円）、通い放題のレギュラーが11,800円（税込12,980円）です。入会時に施設利用料2,000円（税込2,200円）、3ヶ月目から運営管理費が毎月480円（税込）かかります（公式店舗ページ・2026年10月17日確認）。',
    access: 'JR山手線・常磐線「日暮里駅」徒歩1分（西日暮里駅からJR山手線で1駅）',
    address: '〒116-0013 東京都荒川区西日暮里2-18-1 増尾ビル 2F',
    popularPlan: {
      name: 'マンスリー4',
      description: '月4回（1日1回まで）利用できます。',
      price: '月額 7,800円（税込8,580円）',
    },
    options: [
      'マンスリー8 9,800円（税込10,780円）',
      'レギュラー（通い放題） 11,800円（税込12,980円）',
      '施設利用料 入会時のみ 2,000円（税込2,200円）',
      '運営管理費 3ヶ月目から月480円（税込）',
    ],
    userProfile: {
      ageRange: '公式サイトでご確認ください',
      genderRatio: '男女とも入会可',
      purpose: ['運動不足解消', 'ボディメイク', '体幹強化', '時短'],
    },
    basicInfo: {
      hours: '平日 9:30〜21:30（13:00〜14:00はメンテナンス）／土祝 9:30〜19:30',
      closed: '日曜日',
      facilities: ['マシン'],
    },
  },
  {
    name: 'Rintosull（リントスル）日暮里店',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683',
    image: '/images/studios/rintosull.webp',
    price: '月4回 9,800円（税込）',
    trial: '体験会 無料（ウェア/ソックス無料貸出）',
    features: ['日暮里駅東口徒歩1分', '女性専用', 'マシン（リフォーマー）グループ', '学割プランあり'],
    description: 'ホットヨガLAVAのグループが展開する女性専用のマシンピラティススタジオです。「日暮里駅」東口から徒歩1分の日暮里ニュートーキョービル6・7F（受付6F）にあります。月会費は4・フルタイム（月4回）9,800円、ライト・フルタイム14,800円、プレミアム フリー・フルタイム（LAVA等の系列全店通い放題）16,800円、16〜24歳の学生向けの学割プランもあります。別途運営管理費が月680円かかります（いずれも税込・公式店舗ページ・2026年10月17日確認）。',
    access: 'JR・京成・日暮里舎人ライナー「日暮里駅」東口 徒歩1分',
    address: '東京都荒川区西日暮里2-19-4 日暮里ニュートーキョービル 6・7F（受付6F）',
    popularPlan: { name: '4・フルタイム（月4回）', description: '週1ペースで通う人向けのプランです。', price: '月4回 9,800円（税込）' },
    options: ['ライト・フルタイム 14,800円（税込）', 'プレミアム フリー・フルタイム 16,800円（税込）', '学割プラン（16〜24歳の学生）', '運営管理費 月680円（税込）'],
    userProfile: { ageRange: '公式サイトでご確認ください', genderRatio: '女性100%（女性専用）', purpose: ['姿勢改善', 'ボディメイク', '運動不足解消'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '毎週火曜', facilities: ['リフォーマー', '更衣室'] },
  },
  {
    name: 'ソエルスタジオ 日暮里店',
    image: '/images/studios/default-studio.webp',
    price: 'ピラティス4プラン 8,980円（税込9,878円）',
    trial: '初回予約の体験レッスン 無料',
    features: ['日暮里駅東口徒歩2分', 'マシンピラティス', 'よもぎ蒸し', 'オンラインレッスン'],
    description: 'マシンピラティスのレッスンがあるスタジオです。「日暮里駅」東口から徒歩2分です。月額は、スタジオレッスン受け放題でマシンピラティスが都度チケット（税込1,500円）のスタンダードプラン6,980円（税込7,678円）、マシンピラティス月4回までのピラティス4プラン8,980円（税込9,878円）、全サービス受け放題のプレミアムプラン11,980円（税込13,178円）です。体験レッスンは初めて予約した人が無料です。特典で入会した場合も解約金22,000円（税込）で即時解約できると案内されています（公式サイト・2026年10月17日確認）。',
    access: '「日暮里駅」東口 徒歩2分',
    address: '〒116-0013 東京都荒川区西日暮里2丁目29-6 4F',
    popularPlan: { name: 'ピラティス4プラン', description: 'マシンピラティスを月4回まで受けられます。', price: '8,980円（税込9,878円）' },
    options: ['スタンダードプラン 6,980円（税込7,678円）', 'プレミアムプラン 11,980円（税込13,178円）', '24ヶ月応援割プランあり'],
    basicInfo: { hours: '公式サイトでご確認ください', closed: '公式サイトでご確認ください', facilities: ['ピラティスマシン', 'よもぎ蒸し'] },
  },
  {
    name: 'zen place pilates 千駄木スタジオ',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: 'マットグループ 月4回 10,450円（税込・GRADE 01）',
    trial: 'マットグループ 初回体験 1,000円／マシングループ 初回体験 3,000円',
    features: ['マット&リフォーマー', '千駄木駅徒歩2分', '西日暮里から千代田線1駅', '男女とも利用可'],
    description: 'マットグループ・リフォーマーを使うマシングループ・プライベートのあるピラティス専門スタジオです。東京メトロ千代田線「千駄木駅」2番出口から徒歩2分で、西日暮里駅から千代田線で1駅です。スタジオのグレードはGRADE 01で、体験は初回キャンペーンでマットグループ1,000円・マシングループ3,000円、プライベート9,900円〜です（公式スタジオページ・2026年10月17日確認）。',
    access: '東京メトロ千代田線「千駄木駅」2番出口 徒歩2分（西日暮里駅から千代田線で1駅）',
    address: '東京都文京区千駄木3丁目31-12 ワコーレ千駄木ビル3F',
    popularPlan: {
      name: 'マットグループ（月4回）',
      description: 'マットピラティスのグループレッスンです。',
      price: '月4回 10,450円（税込）',
    },
    options: [
      'リフォーマーグループ 月4回 15,400円（税込）',
      'プライベート 体験 9,900円〜',
      '体験は初回キャンペーン価格（マット1,000円・マシン3,000円）',
    ],
    userProfile: {
      ageRange: '公式サイトでご確認ください',
      genderRatio: '男女とも利用可',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 8:00〜21:00／土日祝 7:40〜20:00',
      closed: '公式サイトでご確認ください',
      facilities: ['マット', 'リフォーマー', 'プライベート'],
    },
  },
  {
    name: 'パーソナルマシンピラティスYUZU 日暮里店',
    image: '/images/studios/yuzu-pilates.webp',
    price: '月2プラン 16,800円／月4プラン 31,200円／月6プラン 43,200円（税込）',
    trial: '体験 5,500円（税込）',
    features: ['日暮里駅徒歩5分', 'パーソナル（マンツーマン）', 'マシンピラティス', '体験当日入会で入会金無料'],
    description: 'マンツーマンのマシンピラティススタジオです。日暮里駅から徒歩5分です。月額は月2プラン16,800円（1回8,400円）・月4プラン31,200円（1回7,800円）・月6プラン43,200円（1回7,200円）、入会金は22,000円で体験当日の入会に限り無料です。体験は5,500円です（いずれも税込・公式店舗ページ・2026年10月17日確認）。ウェアは1回500円、靴下は1回100円でレンタルできます。',
    access: '「日暮里駅」徒歩5分',
    address: '〒116-0013 東京都荒川区西日暮里2丁目28-8 塩田ビル102',
    popularPlan: { name: '月4プラン', description: 'マンツーマンのマシンピラティス月4回です。', price: '31,200円（税込）' },
    options: ['月2プラン 16,800円（月4・6プランで3ヶ月継続後に利用可）', '月6プラン 43,200円', '入会金 22,000円（体験当日入会で無料）', 'ウェアレンタル 500円・靴下 100円'],
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。URBAN CLASSIC・Rintosull・ソエルスタジオは無料体験があり、Rintosullは公式で会員の87%以上がマシンピラティス未経験から始めていると案内されています。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンは専用マシンを使ったトレーニングです。マシンは初心者におすすめです。',
  },
  {
    question: '西日暮里エリアの料金相場は？',
    answer: 'マシンのグループ月4回は、URBAN CLASSICが税込8,580円、ソエルスタジオが税込9,878円、Rintosull日暮里店が9,800円（税込）、zen place 千駄木のリフォーマーグループが15,400円（税込）です。マンツーマンのYUZUは月4プラン31,200円（税込）です。体験は無料〜5,500円です（各公式・2026年10月17日確認）。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回が目安です。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: '基礎代謝が上がり、太りにくい体質づくりにつながります。最低2〜3ヶ月は継続することをおすすめします。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があれば問題ありません。',
  },
  {
    question: 'ピラティスとヨガの違いは？',
    answer: 'ピラティスは体幹強化、ヨガは柔軟性とリラックスが中心です。',
  },
  {
    question: '肩こりや腰痛は改善しますか？',
    answer: '姿勢の改善により、肩こりや腰痛の原因へのアプローチが期待できます。',
  },
  {
    question: 'どのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感される方が多くなっています。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめ？',
    answer: 'パーソナルは効果が出やすく、グループは安く楽しく続けられます。',
  },
]

export default function NishiNipporiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '西日暮里', url: 'https://biyori-pilates.com/area/nishi-nippori/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              ピラティス西日暮里おすすめ5選<br className="hidden md:block" />
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
              <span className="text-warm-600">西日暮里</span>
            </nav>
          </div>
        </section>
        <AreaConclusion studios={studios} areaName="西日暮里" />


        <TableOfContents areaName="西日暮里" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、西日暮里・日暮里・千駄木エリアから通えるおすすめのピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>西日暮里周辺でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>料金を抑えられるスタジオがいい</span>
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

        <section className="py-12 bg-white" id="by-station"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4 text-center">駅別の早見表｜日暮里駅・千駄木駅（西日暮里から1駅）</h2><p className="text-warm-600 leading-relaxed mb-6 text-sm">西日暮里駅を最寄りとして公式に案内しているピラティス専門スタジオは、今回の確認では見つかりませんでした。掲載スタジオはJR山手線で1駅の日暮里駅、千代田線で1駅の千駄木駅の近くにあります。徒歩分は各スタジオの公式サイトの表記です（2026年10月17日確認）。</p><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">最寄り駅</th><th className="px-4 py-3 text-left">スタジオ</th><th className="px-4 py-3 text-left">駅からの距離</th><th className="px-4 py-3 text-left">形式・料金の目安</th></tr></thead><tbody><tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium" rowSpan={4}>JR・京成・舎人ライナー 日暮里駅（西日暮里から山手線1駅）</td><td className="px-4 py-3">URBAN CLASSIC PILATES 日暮里店</td><td className="px-4 py-3">徒歩1分</td><td className="px-4 py-3">マシン・サーキット／マンスリー4 税込8,580円</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3">Rintosull 日暮里店（女性専用）</td><td className="px-4 py-3">東口 徒歩1分</td><td className="px-4 py-3">マシン・グループ／月4回 9,800円（税込）</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3">ソエルスタジオ 日暮里店</td><td className="px-4 py-3">東口 徒歩2分</td><td className="px-4 py-3">マシン／ピラティス4 税込9,878円</td></tr><tr className="border-b border-warm-200"><td className="px-4 py-3">パーソナルマシンピラティスYUZU 日暮里店</td><td className="px-4 py-3">徒歩5分</td><td className="px-4 py-3">マンツーマン／月4プラン 31,200円（税込）</td></tr><tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium" rowSpan={1}>千代田線 千駄木駅（西日暮里から千代田線1駅）</td><td className="px-4 py-3">zen place pilates 千駄木スタジオ</td><td className="px-4 py-3">2番出口 徒歩2分</td><td className="px-4 py-3">マット・リフォーマー／マット月4回 10,450円（税込）</td></tr></tbody></table></div></div></section>
        <PriceComparisonTable studios={studios} areaName="西日暮里" />
        <AreaMarketComparison studios={studios} areaName="西日暮里" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              西日暮里エリアのおすすめピラティススタジオ5選
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
              西日暮里のピラティス料金相場
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
                    <td className="px-4 py-3">税込8,580円〜15,400円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">月4回 31,200円（YUZU・税込）</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜5,500円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              西日暮里は商業施設やオフィスが集まる繁華街エリアのため、駅近の好立地スタジオが多く、やや高めの料金設定が目立ちます。一方で大手チェーンの進出も多いため、キャンペーンや月額通い放題プランを上手に活用すれば、実質的なコストを抑えることも可能です。近隣の日暮里エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-white" id="machine-nippori">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4 text-center">
              西日暮里でマシンピラティス・日暮里エリアを探すなら
            </h2>
            <p className="text-warm-600 leading-relaxed text-center mb-8 max-w-2xl mx-auto">
              西日暮里駅周辺には、リフォーマーなどのマシンを使うスタジオが揃っています。「マシンピラティス 西日暮里」で探している方は、負荷調整がしやすく初心者にも向くマシンピラティス対応のスタジオを候補にするとよいでしょう。西日暮里と日暮里は隣接エリアのため、両エリアのスタジオを比較するのがおすすめです。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-warm-50 rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">西日暮里でマシンピラティスに通うなら</h3>
                <p className="text-warm-600 leading-relaxed">
                  マシン中心で通いたい方は「パーソナルマシンピラティスYUZU」（マンツーマンのマシン指導）や、リフォーマーグループに対応する「URBAN CLASSIC PILATES 日暮里店」が候補です。マシンピラティスは強度を細かく調整できるため、運動が久しぶりの方や体の悩みがある方でも始めやすいのが特徴です。
                </p>
              </div>
              <div className="bg-warm-50 rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">日暮里駅周辺をお探しの方へ</h3>
                <p className="text-warm-600 leading-relaxed">
                  西日暮里駅と日暮里駅はJR・地下鉄で1駅隣の近接エリアです。日暮里駅を最寄りにお探しの場合は、<Link href="/area/nippori/" className="text-warm-800 underline hover:text-warm-900">日暮里のピラティススタジオ比較ページ</Link>もあわせてご覧ください。どちらの駅からも通えるスタジオが多いため、両ページを見比べて通いやすい方を選ぶのがおすすめです。
                </p>
              </div>
            </div>
            <p className="text-center mt-8">
              <a href="#studios" className="inline-block bg-warm-800 text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-warm-900 transition">西日暮里のスタジオを料金で比較する</a>
            </p>
          </div>
        </section>

        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              西日暮里でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR「日暮里駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  西日暮里エリアのスタジオは日暮里駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートをご確認ください。日暮里駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">繁華街ならではの予約混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  西日暮里は人が集まる繁華街のため、平日夜（18時〜21時）と土日午前中はレッスン予約が特に集中します。人気クラスは1週間以上前に満席になることもあります。アプリやWebで空き状況をこまめに確認し、キャンセル待ち機能があるスタジオでは積極的にご活用ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  西日暮里エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ずご確認ください。月の途中入会は日割り計算になるかもご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  西日暮里エリアだけでなく、近隣の<Link href="/area/nippori/" className="text-warm-700 underline hover:text-warm-900">日暮里</Link>、<Link href="/area/ueno/" className="text-warm-700 underline hover:text-warm-900">上野</Link>、<Link href="/area/akabane/" className="text-warm-700 underline hover:text-warm-900">赤羽</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                  <strong>西日暮里エリアの豆知識：</strong>西日暮里は仕事帰りに立ち寄る方が多いエリアです。荷物が多くなりがちなので、ロッカーの広さやシャワー設備の有無を事前に確認しておくと安心です。ウェアレンタルがあるスタジオなら手ぶらで通えて便利です。
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
                  月額1万円以下（税込）からです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• URBAN CLASSIC（マンスリー4 税込8,580円）</li>
                  <li className="text-warm-700">• Rintosull 日暮里店（月4回 9,800円・税込）</li>
                  <li className="text-warm-700">• ソエルスタジオ（ピラティス4 税込9,878円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマンで受けられます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• YUZU 日暮里店（月4プラン 31,200円・税込）</li>
                  <li className="text-warm-700">• zen place（プライベートあり）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・通いやすさ</h3>
                <p className="text-warm-600 text-sm mb-4">
                  日暮里駅・千駄木駅から徒歩1〜2分です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• URBAN CLASSIC（日暮里駅徒歩1分）</li>
                  <li className="text-warm-700">• Rintosull（日暮里駅東口徒歩1分）</li>
                  <li className="text-warm-700">• zen place（千駄木駅2番出口徒歩2分）</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">グループ</p>
                <p className="text-sm text-warm-600 mb-4">
                  サーキット形式やマットグループです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• URBAN CLASSIC（マンスリー4 税込8,580円）</li>
                  <li>• Rintosull 日暮里店（月4回 9,800円）</li>
                  <li>• ソエルスタジオ（ピラティス4 税込9,878円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 12,000〜16,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備のスタジオです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• URBAN CLASSIC通い放題（税込12,980円）</li>
                  <li>• Rintosull ライト・フルタイム（14,800円）</li>
                  <li>• zen place リフォーマー（15,400円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">パーソナル</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">効果が期待できる</p>
                <p className="text-sm text-warm-600 mb-4">
                  マンツーマン指導です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• YUZU（パーソナル専門）</li>
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
                  ダイエット、姿勢改善、体幹強化など、目的に応じてお選びください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  グループ月4回で7,800円〜15,400円が相場です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  URBAN CLASSIC・Rintosull・ソエルスタジオは無料、zen place 千駄木は初回1,000円（マット）、YUZUは5,500円（税込）で体験できます。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  西日暮里はJR山手線・京浜東北線・千代田線・日暮里舎人ライナーが利用可能です。日暮里・千駄木にも1駅でアクセスでき、谷根千エリアの下町情緒も楽しめます。
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
              今回は西日暮里エリアのおすすめピラティススタジオをご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              西日暮里は山手線・千代田線が利用でき、日暮里駅徒歩1分のURBAN CLASSICはマンスリー4が税込8,580円で無料体験があり、千駄木のzen placeは初回体験1,000円（マット）から始められます。
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
              体験レッスンは無料〜5,500円です（スタジオにより異なります）。<br />
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
              <AreaModifierSections studios={studios} areaName="西日暮里" />
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="nishi-nippori" areaName="西日暮里" />

      <RelatedAreas currentSlug="nishi-nippori" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
