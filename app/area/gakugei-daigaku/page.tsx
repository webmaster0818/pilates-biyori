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
  alternates: { canonical: 'https://biyori-pilates.com/area/gakugei-daigaku/' },
  title: '学芸大学のピラティスおすすめ4選｜駅徒歩分・体験料金・定休日を比較',
  description: '学芸大学駅周辺のピラティススタジオ4店を、駅からの徒歩分・体験料金（0円〜5,500円）・営業時間・定休日・月額で比較。各値は公式サイトで2026年10月25日に確認しています。',
  keywords: 'ピラティス,学芸大学,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスミラー 学芸大学',
    image: '/images/studios/pilates-mirror.webp',
    price: '月会費 11,000円（月6回まで）',
    trial: '体験レッスン 2,200円',
    features: ['コナミ運営', '月6回定額', '学芸大学駅近', 'プライベートあり'],
    description: 'コナミスポーツクラブが運営するマシンピラティス専門スタジオです。月6回11,000円の定額制で、7回目以降は1回1,100円と追加利用もリーズナブルです。プライベートレッスンも30分4,400円から受けられます。大手ならではの安心感と清潔な設備が魅力です。',
    access: '東急東横線「学芸大学駅」西口から徒歩4分',
    address: '東京都目黒区中央町2-35-10',
    popularPlan: {
      name: '月6回プラン',
      description: 'マシンピラティス月6回まで定額です。7回目以降は1回1,100円で追加可能です。',
      price: '月会費 11,000円（税込）',
    },
    options: [
      'プライベートレッスン（30分 4,400円 / 50分 6,600円・月会費プラン未登録でも利用可）',
      '7回目以降の追加利用（1回 1,100円）',
      '体験レッスン（2,200円・1人1回まで）',
      '入会金 11,000円（公式店舗ページ表記・2026年10月25日確認・税込）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性専用（18歳以上の女性が対象）',
      purpose: ['姿勢改善', '体幹強化', '健康維持', 'ボディメイク'],
    },
    basicInfo: {
      // 営業時間: 公式店舗ページは「レッスンスケジュールをご確認ください」で固定の営業時間を出していないため非表示（2026-10-11）
      closed: '毎週火曜日',
      facilities: ['マシン完備', 'フィッティングルーム（カーテン仕切り）', '荷物置きBOX（鍵なし）'],
    },
  },
  {
    name: 'STUDIO IVY 学芸大学店',
    image: '/images/studios/studio-ivy.webp',
    price: '月2回 15,000円〜 / 月4回 28,000円〜',
    trial: '初回体験レッスン 4,500円（50分・税込／公式店舗ページ・2026年10月25日確認）',
    features: ['パーソナル専門', 'マシンピラティス', '学芸大学駅近', '月謝制'],
    description: '全国展開のパーソナルマシンピラティス専門スタジオです。学芸大学駅から徒歩3分です。完全プライベート空間でオーダーメイドのプログラムを提供しています。月2回15,000円から始められ、月4回28,000円・月8回52,000円のプランもあります。男性も受講できます（公式店舗ページ表記）。',
    access: '東急東横線「学芸大学駅」徒歩3分',
    address: '東京都目黒区碑文谷6-1-22 リカーハイム303号室',
    popularPlan: {
      name: '月4回プラン',
      description: 'マシンピラティスのパーソナルレッスンです。週1回ペースで無理なく続けられます。',
      price: '月4回 28,000円（税込）',
    },
    options: [
      'BASIC 月2回（15,000円・1回7,500円）',
      'STANDARD 月4回（28,000円・1回7,000円）',
      'PREMIUM 月8回（52,000円・1回6,500円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '男女とも受講可（公式店舗ページ表記・2026年10月25日確認）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '体幹強化'],
    },
    basicInfo: {
      // 住所・アクセス・営業時間・料金・体験: 公式店舗ページ https://www.pilates-ivy.jp/studio/gakugeidaigaku で確認（2026-10-25）。定休日は公式に記載なし
      hours: '8:00〜21:00',
      closed: '公式サイトに記載なし（予約時にご確認ください）',
      facilities: ['マシン完備', 'ロッカー', '完全個室'],
    },
  },
  {
    name: 'YUZU 学芸大学店',
    image: '/images/studios/yuzu-pilates.webp',
    price: '月4回 31,200円〜 / 月6回 43,200円',
    trial: '体験レッスン 5,500円（税込・公式店舗ページの料金表）／ページ上に「初回500円」バナーあり（条件の記載なし）・2026年10月25日確認',
    features: ['マンツーマン（パーソナル）', 'マシンピラティス', '学芸大学駅 東口 徒歩約3分', '朝8:15〜夜21:45'],
    description: '全国に店舗を展開するパーソナルマシンピラティススタジオです。学芸大学駅東口から徒歩約3分で、営業時間は8:15〜21:45と朝・夜とも通いやすい時間帯です。月4回31,200円（1回7,800円）・月6回43,200円（1回7,200円）の月額制で、体験当日の入会で入会金22,000円が0円になります（公式店舗ページ表記・2026年10月25日確認）。',
    access: '東急東横線「学芸大学駅」東口から徒歩約3分',
    address: '東京都目黒区鷹番2-15-18 パル学芸大学 406',
    popularPlan: {
      name: '月4回プラン',
      description: 'マシンを使ったマンツーマンのパーソナルレッスンです。週1回ペースで通えます。',
      price: '月4回 31,200円（税込・1回7,800円）',
    },
    options: [
      '月6回プラン（43,200円・1回7,200円）',
      '月2回プラン（16,800円・月4回／月6回プランを3ヶ月継続後に選択可）',
      '入会金 22,000円（体験当日の入会で0円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '公式に男女可否の記載なし（予約時にご確認ください）',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', 'リフレッシュ'],
    },
    basicInfo: {
      // 住所・アクセス・営業時間・料金・体験: 公式店舗ページ https://yuzu-pilates.com/studios/gakugeidagaku/ で確認（2026-10-25）。キッズスペース・子連れ・女性インストラクターの記載は公式に無いため削除。定休日は公式に記載なし
      hours: '8:15〜21:45',
      closed: '公式サイトに記載なし（予約時にご確認ください）',
      facilities: ['マシン完備', '完全マンツーマン'],
    },
  },
  {
    name: 'Dr.ピラティス 学芸大学店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11979O.1.Z164554L.U1357808',
    image: '/images/studios/dr-pilates.webp',
    price: '月4回(45分) 29,700円〜 / 月4回(60分) 39,600円〜',
    trial: '体験トレーニング 無料（入会金も0円・公式の店舗ページ表示・2026年10月23日確認）',
    features: ['マンツーマン（パーソナル）', 'マシン・マット両対応', '医師推奨パーソナルジムNo.1受賞'],
    description: '医師推奨のパーソナルジム受賞歴を持つDr.トレーニング系列のパーソナルピラティススタジオです。マシン・マット両対応のマンツーマン指導で、姿勢改善やボディメイクを目指せます。学芸大学駅から徒歩3分、営業時間は9:00〜22:00です。月4回は45分29,700円・60分39,600円で、月8回（45分57,600円〜）や回数チケットもあります（公式店舗ページ表記・2026年10月25日確認・税込）。',
    access: '東急東横線「学芸大学駅」から徒歩3分（改札を出て右手の商店街を直進・公式表記）',
    address: '東京都目黒区鷹番2-8-22 プラザ学芸大学EAST',
    // 住所・アクセス・営業時間・料金・体験: 公式店舗ページ https://drpilates.drtraining.jp/location/gakugeidaigaku/ で確認（2026-10-25）。定休日は公式に記載なし
    basicInfo: {
      hours: '9:00〜22:00',
      closed: '公式サイトに記載なし（予約時にご確認ください）',
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。学芸大学のスタジオは初心者歓迎です。ピラティスミラーは体験2,200円で気軽に始められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンは専用マシン（リフォーマー等）を使ったトレーニングです。マシンは初心者でもフォームが安定しやすくおすすめです。',
  },
  {
    question: '学芸大学エリアの料金相場は？',
    answer: '少人数制のピラティスミラーが月6回11,000円です。マンツーマンはSTUDIO IVYの月2回15,000円〜、月4回だと28,000円（IVY）〜39,600円（Dr.ピラティス60分）です（各公式・2026年10月25日確認・税込）。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回に増やすと効果的です。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルが鍛えられ基礎代謝が上がることで太りにくい体質づくりにつながります。最低2〜3ヶ月は継続することをおすすめします。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があれば問題ありません。靴は不要です。スタジオによってはウェアレンタルもあります。',
  },
  {
    question: 'ピラティスとヨガの違いは？',
    answer: 'ピラティスは体幹強化・姿勢改善が中心、ヨガは柔軟性とリラックスが中心です。目的に応じてお選びください。',
  },
  {
    question: '子連れで通えるスタジオはありますか？',
    answer: '掲載4店の公式店舗ページには、キッズスペースや子連れでの受講についての記載がありません（2026年10月25日確認）。お子さま連れで通いたい場合は、予約前に各スタジオへ直接ご確認ください。',
  },
  {
    question: 'どのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から姿勢改善や体の引き締まりを実感される方が多くなっています。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめ？',
    answer: 'パーソナルは効果が出やすく自分のペースで進められます。グループは安く楽しく続けられます。目的と予算でお選びください。',
  },
]

export default function GakugeiDaigakuPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '学芸大学', url: 'https://biyori-pilates.com/area/gakugei-daigaku/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月25日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              学芸大学のピラティスおすすめ4選<br className="hidden md:block" />
              駅からの徒歩分・体験料金・定休日で比較
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
              <span className="text-warm-600">学芸大学</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="学芸大学" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">
              東急東横線「学芸大学駅」は、おしゃれなカフェやパン屋が並ぶ住みたい街として人気のエリアです。そんな学芸大学には、料金を抑えられるスタジオからマンツーマン専門のスタジオまで、個性豊かなピラティススタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、学芸大学でおすすめのピラティススタジオ4選を、駅からの徒歩分・体験料金・営業時間・定休日で比べられるようにまとめました（各値は公式サイトで2026年10月25日に確認）。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>学芸大学でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>費用対効果の良いマシンピラティスに通いたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>パーソナルレッスンを受けたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>駅から近い順・体験料金・定休日をまとめて比べたい</span>
                </li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">
              以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。
            </p>
          </div>
        </section>

        <section className="py-12 bg-white" id="by-station"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4 text-center">学芸大学駅からの徒歩分で比べるピラティス早見表</h2><p className="text-warm-600 leading-relaxed mb-6 text-sm">「学芸大学 ピラティス」で探す方向けに、掲載4店を学芸大学駅（東急東横線）から近い順に並べました。徒歩分・住所・体験料金・営業時間・定休日は各スタジオの公式店舗ページの表記です（2026年10月25日確認・税込）。4店とも駅から徒歩4分以内で、すべてマシンを使うスタジオです。</p><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">スタジオ（住所）</th><th className="px-4 py-3 text-left">学芸大学駅から</th><th className="px-4 py-3 text-left">形式</th><th className="px-4 py-3 text-left">体験</th><th className="px-4 py-3 text-left">営業時間</th><th className="px-4 py-3 text-left">定休日</th></tr></thead><tbody>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">YUZU 学芸大学店（鷹番2-15-18 パル学芸大学406）</td><td className="px-4 py-3">東口 徒歩約3分</td><td className="px-4 py-3">マシンのマンツーマン</td><td className="px-4 py-3">5,500円（「初回500円」バナーあり・条件記載なし）</td><td className="px-4 py-3">8:15〜21:45</td><td className="px-4 py-3">記載なし</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">Dr.ピラティス 学芸大学店（鷹番2-8-22 プラザ学芸大学EAST）</td><td className="px-4 py-3">徒歩3分</td><td className="px-4 py-3">マンツーマンのパーソナル</td><td className="px-4 py-3">0円（入会金も0円）</td><td className="px-4 py-3">9:00〜22:00</td><td className="px-4 py-3">記載なし</td></tr>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">STUDIO IVY 学芸大学店（碑文谷6-1-22 リカーハイム303）</td><td className="px-4 py-3">徒歩3分</td><td className="px-4 py-3">マシンのパーソナル（男性も可）</td><td className="px-4 py-3">4,500円（50分）</td><td className="px-4 py-3">8:00〜21:00</td><td className="px-4 py-3">記載なし</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">ピラティスミラー 学芸大学（中央町2-35-10）</td><td className="px-4 py-3">西口 徒歩4分</td><td className="px-4 py-3">マシンの少人数レッスン（30分・女性専用）</td><td className="px-4 py-3">2,200円（1人1回まで）</td><td className="px-4 py-3">公式はレッスンスケジュールで案内</td><td className="px-4 py-3">毎週火曜日</td></tr>
        </tbody></table></div>
          <h3 className="text-lg font-bold text-warm-900 mt-8 mb-3">月額と1回あたりの料金（公式表記・2026年10月25日確認・税込）</h3>
          <ul className="space-y-2 text-sm text-warm-700">
            <li>• ピラティスミラー: 月会費11,000円で月6回まで（7回目以降1回1,100円）・入会金11,000円。プライベートは30分4,400円／50分6,600円</li>
            <li>• STUDIO IVY: 月2回15,000円（1回7,500円）／月4回28,000円（1回7,000円）／月8回52,000円（1回6,500円）</li>
            <li>• YUZU: 月4回31,200円（1回7,800円）／月6回43,200円（1回7,200円）・入会金22,000円（体験当日の入会で0円）</li>
            <li>• Dr.ピラティス: 月4回 45分29,700円／60分39,600円、月8回 45分57,600円／60分76,800円・入会金0円</li>
          </ul>
          <h3 className="text-lg font-bold text-warm-900 mt-8 mb-3">西口・東口どちらから行くか</h3>
          <p className="text-warm-600 leading-relaxed text-sm">学芸大学駅は改札の東西で行き先が分かれます。公式ページで出口の指定があるのは、ピラティスミラー（西口）とYUZU（東口）の2店です。Dr.ピラティスは「改札を出て右手の商店街を直進」と案内しています。STUDIO IVYは出口の記載がないため、初回は公式ページの地図で確認してから向かうと安心です。</p>
          <p className="text-warm-600 leading-relaxed mt-4 text-sm">月の費用を抑えて回数を通いたいならピラティスミラー（月6回11,000円・女性専用）、マンツーマンで見てもらいたいならSTUDIO IVY・YUZU・Dr.ピラティスが候補です。体験の費用で比べると、Dr.ピラティスが0円、ピラティスミラーが2,200円です。</p>
          <p className="text-warm-400 mt-4 text-xs">確認した公式ページ（2026年10月25日）: <a href="https://www.konami.com/sportsclub/pilatesmirror/gakugeidaigaku/" className="underline" target="_blank" rel="noopener noreferrer">ピラティスミラー 学芸大学</a> ／ <a href="https://www.pilates-ivy.jp/studio/gakugeidaigaku" className="underline" target="_blank" rel="noopener noreferrer">STUDIO IVY 学芸大学店</a> ／ <a href="https://yuzu-pilates.com/studios/gakugeidagaku/" className="underline" target="_blank" rel="noopener noreferrer">YUZU 学芸大学店</a> ／ <a href="https://drpilates.drtraining.jp/location/gakugeidaigaku/" className="underline" target="_blank" rel="noopener noreferrer">Dr.ピラティス 学芸大学店</a></p>
        </div></section>

        <PriceComparisonTable studios={studios} areaName="学芸大学" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              学芸大学のおすすめピラティススタジオ4選
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
              学芸大学のピラティス料金相場
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
                    <td className="px-4 py-3">11,000円（月6回）</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">月2回 15,000円〜／月4回 28,000円〜39,600円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">0円〜5,500円（2026年10月25日確認）</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              学芸大学は住宅地としての人気が高く、地元在住の方が徒歩や自転車で通えるスタジオが充実しています。繁華街ほど料金は高くなく、かつ都心へのアクセスも良いバランスの取れたエリアです。平日昼間のクラスは比較的空いている傾向があります。近隣の中目黒エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              学芸大学でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">東急東横線「学芸大学駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  学芸大学エリアのスタジオは学芸大学駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートをご確認ください。学芸大学駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">住宅地ならではの予約の特徴を把握</h3>
                <p className="text-warm-600 leading-relaxed">
                  学芸大学は住宅地のため、主婦・ママ層が多い平日午前中と、仕事帰りの平日夜が予約のピークタイムです。土日は意外と空いているスタジオも多いので、比較的空いている時間帯を把握しておくと通いやすくなります。お子さま連れで通いたい方は、予約前に各スタジオへご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  学芸大学エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかをご確認ください。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため、事前にご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  学芸大学エリアだけでなく、近隣の<Link href="/area/nakameguro/" className="text-warm-700 underline hover:text-warm-900">中目黒</Link>、<Link href="/area/jiyugaoka/" className="text-warm-700 underline hover:text-warm-900">自由が丘</Link>、<Link href="/area/meguro/" className="text-warm-700 underline hover:text-warm-900">目黒</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                  <strong>学芸大学エリアの豆知識：</strong>学芸大学は地元の方が徒歩や自転車で通うケースが多いエリアです。自転車の方はスタジオ近くの駐輪スペースの有無をご確認ください。近場なら荷物も最小限で済むので、気軽に続けやすいのが学芸大学の良さです。
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
                  定額で通いやすいスタジオです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスミラー（月6回 11,000円）</li>
                  <li className="text-warm-700">• STUDIO IVY（月2回 15,000円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマン指導で効率よく取り組めます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STUDIO IVY（月4回 28,000円）</li>
                  <li className="text-warm-700">• YUZU（月4回 31,200円・8:15〜21:45）</li>
                  <li className="text-warm-700">• Dr.ピラティス（体験0円・9:00〜22:00）</li>
                  <li className="text-warm-700">• ピラティスミラー（プライベート30分 4,400円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">朝・夜に通いたい</h3>
                <p className="text-warm-600 text-sm mb-4">
                  営業時間が長く、仕事の前後に通いやすいスタジオです（公式表記・2026年10月25日確認）。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• YUZU（8:15〜21:45）</li>
                  <li className="text-warm-700">• Dr.ピラティス（9:00〜22:00）</li>
                  <li className="text-warm-700">• STUDIO IVY（8:00〜21:00）</li>
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
                週1〜2回から始めることをおすすめします。最低2〜3ヶ月で効果を実感できます。ピラティスミラーの月6回プランなら週1〜2回ペースに適しています。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイク目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回が目安です。3〜6ヶ月で目に見える変化を実感できます。パーソナルレッスンなら効率的に結果が出ます。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜12,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">グループ</p>
                <p className="text-sm text-warm-600 mb-4">
                  定額でお得に通えるプランです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスミラー（月6回 11,000円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 15,000〜28,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">
                  マンツーマン指導で効率よく取り組めます。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• STUDIO IVY（月2回 15,000円）</li>
                  <li>• STUDIO IVY（月4回 28,000円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">都度払い</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">お手軽</p>
                <p className="text-sm text-warm-600 mb-4">
                  気軽にプライベートを体験できます。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスミラー（30分 4,400円）</li>
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
                  ダイエット、姿勢改善など目的に応じて最適なスタジオが変わります。マンツーマンで見てもらいたいならSTUDIO IVY・YUZU・Dr.ピラティス、回数を多く通いたいならピラティスミラーが候補です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  学芸大学エリアはグループ月6回11,000円〜、パーソナル月2回15,000円〜と幅広い価格帯です。まずは体験レッスンでスタジオの雰囲気をご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  Dr.ピラティスは体験0円、ピラティスミラーは2,200円、STUDIO IVYは4,500円、YUZUは5,500円で体験できます（各公式・2026年10月25日確認）。複数のスタジオを体験して比較するのがおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  学芸大学は東急東横線で渋谷・横浜方面にもアクセス良好です。おしゃれなカフェやパン屋が並ぶ落ち着いた雰囲気の街で、レッスン前後の時間も楽しめます。
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
              今回は学芸大学のおすすめピラティススタジオをご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              学芸大学はコナミ運営のピラティスミラー（月6回11,000円）からSTUDIO IVY・YUZU・Dr.ピラティスのマンツーマンまで、ライフスタイルに合わせたスタジオが揃っています。おしゃれなカフェやパン屋が並ぶ住みたい街で、ピラティスのある生活を始めることをご検討ください。
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
              掲載4店の体験レッスンは0円〜5,500円です（2026年10月25日確認）。<br />
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
      <ConsultantSection areaKey="gakugei-daigaku" areaName="学芸大学" />

      <RelatedAreas currentSlug="gakugei-daigaku" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
