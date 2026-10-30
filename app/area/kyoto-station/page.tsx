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
  alternates: { canonical: 'https://biyori-pilates.com/area/kyoto-station/' },
  title: '京都駅のピラティス5選｜京都駅前の徒歩5分圏・体験料金・定休日を公式で比較',
  description: '京都駅 ピラティスを徒歩分順に比較。Hain pilates・Rintosull・STUDIO IVY京都駅前（同じビルに3店）と四条烏丸の店を、体験料金・月額・営業時間・定休日の早見表で（2026年10月26日公式確認）。女性専用・男性可もわかります。',
  keywords: 'ピラティス,京都駅,京都,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'Rintosull 京都駅前店',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683',
    image: '/images/studios/rintosull.webp',
    price: '月4回 8,800円〜',
    trial: '体験レッスン 無料',
    features: ['LAVA系列', '女性専用', '京都駅徒歩5分', '2026年2月OPEN'],
    description: 'ホットヨガLAVA系列の女性専用マシンピラティススタジオです。2026年2月オープンです。京都駅から徒歩5分です。月4回8,800円のリーズナブルな料金です。無料体験でパーソナル姿勢診断付きです。初心者87%以上で安心です。',
    access: 'JR「京都駅」中央出口 徒歩5分',
    address: '京都府京都市下京区七条通鳥丸東入真苧屋町195 福井ビル 4F',
    popularPlan: {
      name: 'マシンピラティス月4回プラン',
      description: 'リフォーマーを使った本格マシンピラティスです。1回あたり2,200円と割安です。',
      price: '月4回 8,800円（税込）',
    },
    options: [
      '通い放題プラン',
      'プレミアムフリーフルタイム（LAVA等全店利用可）',
      '運営管理費 月680円（税込）',
      '無料体験・パーソナル姿勢診断付き',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', 'ヨガ&ピラティス両方', '健康維持'],
    },
    basicInfo: {
      hours: '公式の店舗ページに記載なし（レッスンスケジュールで確認）',
      closed: '毎週日曜・第4水曜',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'シャワー'],
    },
  },
  {
    name: 'STUDIO IVY 京都駅前店',
    image: '/images/studios/studio-ivy.webp',
    price: '月2回 15,000円〜',
    trial: '初回体験 無料（10/1〜11/30のキャンペーン・通常4,500円）',
    features: ['完全パーソナル', 'マシンピラティス', 'オーダーメイド', '完全プライベート空間'],
    description: '完全パーソナルのマシンピラティススタジオです。完全プライベート空間でオーダーメイドのプログラムを提供しています。月2回15,000円〜です。一人ひとりの目標に合わせた指導で効率的にボディメイクを目指せます。',
    access: 'JR「京都駅」徒歩5分',
    address: '京都府京都市下京区小稲荷町85 Grand-K京都駅前ビル801',
    popularPlan: {
      name: 'パーソナル月2回プラン',
      description: '完全プライベート空間でオーダーメイドのマシンピラティスです。',
      price: '月2回 15,000円〜（税込）',
    },
    options: [
      '月4回プラン',
      '月8回プラン',
      '初回体験 通常4,500円（10/1〜11/30は無料）',
      'オーダーメイドプログラム',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      purpose: ['ボディメイク', '姿勢改善', 'パーソナル指導', 'ダイエット'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: '公式の店舗ページに記載なし',
      facilities: ['リフォーマーマシン', 'プライベートルーム', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'zen place pilates 京都スタジオ',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['全国150店舗他店利用', '男性利用可', '四条駅徒歩1分', 'マット&マシン'],
    description: '全国150店舗以上を展開する大手ピラティススタジオです。四条駅12番出口から徒歩1分です（京都駅から地下鉄1本）。男性も通えます。グループ体験1,000円です。マットとマシン両方のレッスンを提供しています。',
    access: '地下鉄烏丸線「四条駅」12番出口 徒歩1分（京都駅から地下鉄1本）',
    address: '京都府京都市下京区四条通富小路西入立売東町14 イシズミ本社ビル 9階',
    popularPlan: {
      name: 'マットグループ月4回',
      description: 'マットグループレッスン（マットピラティス・ヨガ）を月4回受講できます。マシンのリフォーマーグループは別プラン（月4回 15,400円・グレード共通・開催の有無はスタジオにより異なります）です。',
      price: '月4回 10,450円（税込）',
    },
    options: [
      '月6回プラン',
      '通い放題プラン',
      'プライベートレッスン',
      'グループ体験 1,000円',
    ],
    userProfile: {
      ageRange: '20代〜60代が中心',
      purpose: ['姿勢改善', '体幹強化', '柔軟性向上', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00-22:00 / 土日祝 7:10-18:00',
      closed: '公式の店舗ページに記載なし',
      facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'ピラティスK 京都四条烏丸店',
    officialUrl: 'https://t.afi-b.com/visit.php?a=O11543l-G384824n&p=E9887623',
    image: '/images/studios/pilates-k.webp',
    price: '月4回 13,420円',
    trial: '体験レッスン 0円',
    features: ['女性専用', 'マシン専門', '音楽レッスン', '体験0円'],
    description: '女性専用のマシンピラティス専門スタジオです。音楽に合わせた独自のレッスンスタイルが人気です。月4回13,420円〜です。体験レッスン0円です。京都駅から地下鉄でアクセス可能です。',
    access: '阪急「烏丸駅」東改札口 徒歩1分／地下鉄烏丸線「四条駅」1番出口 徒歩4分（京都駅から地下鉄1本）',
    address: '京都府京都市下京区立売西町66 京都証券ビル6F',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '女性専用マシンピラティス月4回です。音楽に合わせた楽しいレッスンです。',
      price: '月4回 13,420円（税込）',
    },
    options: [
      'マンスリー8メンバー（月8回 16,170円）',
      'マンスリープレミアムメンバー（毎日2レッスン 18,920円）',
      '体験レッスン 0円',
      '入会金あり（キャンペーンで無料の場合あり）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '火・水・金 10:00-15:00／17:00-22:00、木 17:30-22:00、土・祝 10:00-19:00、日 10:00-17:30',
      closed: '月曜日',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'Hain pilates 京都駅店',
    image: '/images/studios/hain-pilates.webp',
    price: '月4回 22,000円',
    trial: '体験レッスン 2,200円',
    features: ['女性専用', '1回30分', 'パーソナル専門', 'マシンピラティス'],
    description: '女性専用のパーソナルマシンピラティス専門スタジオです。1回30分の短時間集中型レッスンで、忙しい方でも効率的にトレーニング可能です。JR京都駅の中央口から徒歩4分です。月4回22,000円（1回5,500円）、体験2,200円です（公式・2026年10月25日確認）。',
    access: 'JR「京都駅」中央口 徒歩4分／地下鉄「京都駅」3番出口 徒歩5分',
    address: '京都府京都市下京区東塩小路町547-3 明石屋ビル6階',
    popularPlan: {
      name: 'パーソナル30分プラン',
      description: '1回30分のマシンピラティスパーソナルレッスンです。短時間集中で効率的です。',
      price: '月4回 22,000円（税込・1回5,500円）',
    },
    options: [
      '月6回 31,350円／月8回 39,600円',
      '入会金 22,000円・登録料 5,500円（公式ブランドページ表記）',
      '体験レッスン 2,200円',
      '女性専用',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', '時短トレーニング', '健康維持'],
    },
    basicInfo: {
      hours: '平日 10:00-22:00 / 土祝 9:00-19:00',
      closed: '日曜',
      facilities: ['リフォーマーマシン', 'プライベートルーム', '更衣室', 'ロッカー'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。京都駅エリアのスタジオはほとんどが初心者歓迎です。Rintosullは初心者87%以上、zen place pilatesはレベル別クラスがあります。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷調整しやすく初心者におすすめです。',
  },
  {
    question: '京都駅のピラティスの料金相場は？',
    answer: 'Rintosullは月4回8,800円〜と格安です。zen place pilatesは月4回10,450円〜です。ピラティスKは月4回13,420円〜です。グループ月4回で8,800円〜13,420円が相場です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回が目安です。大切なのは継続することです。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。ピラティスKは音楽レッスンで楽しくカロリー消費できます。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があれば問題ありません。Rintosullとピラティスは無料体験を実施しています。zen place pilatesはグループ体験1,000円です。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place pilates京都スタジオとSTUDIO IVY京都駅前店は男性も通えます。Rintosull・ピラティスK・Hain pilatesは女性専用です。',
  },
  {
    question: '一番安いスタジオは？',
    answer: 'グループレッスンではRintosullが月4回8,800円〜で最安です。パーソナルではSTUDIO IVYが月2回15,000円〜です。',
  },
  {
    question: 'パーソナルレッスンを受けたい場合は？',
    answer: 'STUDIO IVY京都駅前店は完全パーソナルです。Hain pilates京都駅店は30分パーソナル専門です。どちらも一対一でしっかり指導を受けられます。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感される方が多くなっています。最低2ヶ月は継続することをおすすめします。',
  },
]

export default function KyotoStationPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '京都駅', url: 'https://biyori-pilates.com/area/kyoto-station/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月25日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              ピラティス京都駅おすすめ5選<br className="hidden md:block" />
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
              <span className="text-warm-600">京都駅</span>
            </nav>
          </div>
        </section>
        <AreaConclusion studios={studios} areaName="京都駅" />


        <TableOfContents areaName="京都駅" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、京都駅エリアでおすすめのピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>京都駅でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>料金を抑えられるスタジオを知りたい</span>
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

        <section className="py-12 bg-white" id="by-station"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4 text-center">京都駅からの徒歩分で比べる早見表</h2><p className="text-warm-600 leading-relaxed mb-6 text-sm">京都駅から近い順に並べました。徒歩分・体験料金・営業時間・定休日は各スタジオの公式ページの表記です（2026年10月25日確認・STUDIO IVY は10月26日に再確認・税込）。京都駅から徒歩圏は3店で、いずれも公式の案内は中央口（烏丸口側）からの徒歩分か、出口の指定なしです。八条口からの徒歩分を公式に載せている店舗はありませんでした。四条烏丸の2店は京都駅から地下鉄烏丸線で2駅です。</p><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">スタジオ（住所）</th><th className="px-4 py-3 text-left">京都駅から</th><th className="px-4 py-3 text-left">形式</th><th className="px-4 py-3 text-left">体験</th><th className="px-4 py-3 text-left">営業時間／定休日</th></tr></thead><tbody>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">Hain pilates 京都駅店（東塩小路町547-3 明石屋ビル6階）</td><td className="px-4 py-3">JR中央口 徒歩4分／地下鉄3番出口 徒歩5分</td><td className="px-4 py-3">30分のパーソナル（女性専用）</td><td className="px-4 py-3">2,200円</td><td className="px-4 py-3">平日 10:00〜22:00・土祝 9:00〜19:00／日曜</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">Rintosull 京都駅前店（七条通鳥丸東入真苧屋町195 福井ビル4F）</td><td className="px-4 py-3">JR中央出口 徒歩5分</td><td className="px-4 py-3">マシングループ（女性専用）</td><td className="px-4 py-3">無料体験会 0円</td><td className="px-4 py-3">店舗ページに記載なし／毎週日曜・第4水曜</td></tr>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">STUDIO IVY 京都駅前店（小稲荷町85 Grand-K京都駅前ビル801）</td><td className="px-4 py-3">徒歩5分（出口の記載なし）</td><td className="px-4 py-3">マンツーマン（男性も可）</td><td className="px-4 py-3">通常4,500円（50分）→ 10/1〜11/30 は初回体験無料</td><td className="px-4 py-3">8:00〜21:00／記載なし</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">STUDIO IVY 京都駅前Ⅱ店・Ⅲ店（同じGrand-K京都駅前ビルの702・202）<br /><span className="text-xs text-warm-500">※下のカードには未掲載</span></td><td className="px-4 py-3">徒歩5分（出口の記載なし）</td><td className="px-4 py-3">マンツーマン（男性も可）</td><td className="px-4 py-3">通常4,500円（50分）→ 10/1〜11/30 は初回体験無料</td><td className="px-4 py-3">8:00〜21:00／記載なし（月2回15,000円・月4回28,000円・月8回52,000円＝Ⅱ店）</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">ピラティスK 京都四条烏丸店（立売西町66 京都証券ビル6F）</td><td className="px-4 py-3">地下鉄で2駅（四条駅1番出口 徒歩4分・阪急烏丸駅 東改札口 徒歩1分）</td><td className="px-4 py-3">マシングループ（女性専用）</td><td className="px-4 py-3">0円</td><td className="px-4 py-3">火・水・金 10:00〜15:00／17:00〜22:00、木 17:30〜22:00、土祝 10:00〜19:00、日 10:00〜17:30／月曜</td></tr>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">zen place pilates 京都スタジオ（四条通富小路西入立売東町14 イシズミ本社ビル9階）</td><td className="px-4 py-3">地下鉄で2駅（四条駅12番出口 徒歩1分）</td><td className="px-4 py-3">マット・マシンのグループ・プライベート（男女共用）</td><td className="px-4 py-3">マットグループ 1,000円／マシン 初回キャンペーン 3,000円</td><td className="px-4 py-3">平日 7:00〜22:00・土日祝 7:10〜18:00／記載なし</td></tr>
        </tbody></table></div><p className="text-warm-600 leading-relaxed mt-4 text-sm">新幹線や在来線の乗り換えついでに通うなら、中央口から近い Hain pilates（30分パーソナル）か Rintosull（月4回 8,800円＋運営管理費680円）が候補です。男性も通えるのは STUDIO IVY と zen place の2店です。日曜に通いたい方は、日曜が定休の Hain pilates・Rintosull を避けて、日曜も営業しているピラティスK・zen place（四条烏丸）を比べてみてください。STUDIO IVY は京都駅前の同じビルに3店（801・702・202）あり、11月30日までは初回体験が無料です（通常4,500円）。予約の取りやすい店舗を選べます。</p><p className="text-warm-500 leading-relaxed mt-2 text-xs">STUDIO IVY の確認元（2026年10月26日）: <a href="https://www.pilates-ivy.jp/studio/kyotoekimae" target="_blank" rel="noopener" className="underline">京都駅前店</a>／<a href="https://www.pilates-ivy.jp/studio/kyotoekimae2" target="_blank" rel="noopener" className="underline">京都駅前Ⅱ店</a>／<a href="https://www.pilates-ivy.jp/studio/kyotoekimaeiii" target="_blank" rel="noopener" className="underline">京都駅前Ⅲ店</a></p></div></section>

        <PriceComparisonTable studios={studios} areaName="京都駅" />
        <AreaMarketComparison studios={studios} areaName="京都駅" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              京都駅のおすすめピラティススタジオ5選
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
              京都駅のピラティス料金相場
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
                    <td className="px-4 py-3">8,800円〜15,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回あたり 4,950円〜7,500円（Hain pilates 月8回の1回あたり4,950円〜・STUDIO IVY 月2回の1回あたり7,500円）</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜4,500円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              京都駅は観光地としても人気のエリアですが、地元の方が日常的に通えるスタジオも増えています。町家を改装したスタジオなど京都駅ならではの趣ある空間でピラティスを楽しめるのが魅力です。料金は大阪と同程度か、やや抑えめの傾向です。近隣の烏丸御池エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              京都駅でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR「京都駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  京都駅エリアのスタジオは京都駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートをご確認ください。京都駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">観光客と地元利用者で混雑時間が異なる</h3>
                <p className="text-warm-600 leading-relaxed">
                  京都駅は観光地としても有名なため、観光客向けの体験プランと地元向けの月額プランが分かれているスタジオもあります。紅葉や桜のシーズンは周辺の混雑で移動に時間がかかることがあるため、余裕を持ったスケジュールで通うことをおすすめします。地元にお住まいの方は、平日昼間が比較的予約を取りやすい時間帯です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  京都駅エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかをご確認ください。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため、事前にご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  京都駅エリアだけでなく、近隣の<Link href="/area/karasuma-oike/" className="text-warm-700 underline hover:text-warm-900">烏丸御池</Link>、<Link href="/area/kyoto-shiyakusho-mae/" className="text-warm-700 underline hover:text-warm-900">京都市役所前</Link>、<Link href="/area/shijo-kawaramachi/" className="text-warm-700 underline hover:text-warm-900">四条河原町</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                  <strong>京都駅エリアの豆知識：</strong>京都駅は四季折々の風情が楽しめるエリアです。観光シーズンは周辺の混雑で移動に時間がかかることがあるため、時間に余裕を持って出発することをおすすめします。町家スタジオなど京都駅ならではの空間でピラティスを楽しめるのも魅力のひとつです。
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
                  月4回8,800円〜のスタジオもあります。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li>
                  <li className="text-warm-700">• zen place pilates（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• ピラティスK（月4回 13,420円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  完全マンツーマンで本格指導しています。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STUDIO IVY（完全パーソナル）</li>
                  <li className="text-warm-700">• Hain pilates（30分パーソナル）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  京都駅から徒歩・地下鉄ですぐです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Hain pilates（京都駅中央口徒歩4分）</li>
                  <li className="text-warm-700">• Rintosull（京都駅徒歩5分）</li>
                  <li className="text-warm-700">• zen place pilates（四条駅徒歩1分）</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜11,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  割安なグループレッスンです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（8,800円/月4回）</li>
                  <li>• zen place pilates（10,450円/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回〜</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン専門・パーソナルのスタジオもあります。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（13,420円〜/月4回）</li>
                  <li>• STUDIO IVY（15,000円〜/月2回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">短時間パーソナル</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">1回30分</p>
                <p className="text-sm text-warm-600 mb-4">
                  忙しい方に最適です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Hain pilates（30分パーソナル）</li>
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
                  京都駅エリアはグループ月4回8,800円〜、パーソナル月2回15,000円〜と幅広い価格帯です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  RintosullとピラティスKは無料体験を実施しています。zen place pilatesはグループ体験1,000円です。まずは気軽に試すことをおすすめします。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  京都駅からはJR・地下鉄が利用可能です。Rintosullは京都駅徒歩5分、zen place pilatesは四条駅徒歩1分です。
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
              本ページでは、京都駅エリアのおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、京都駅にあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
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
              初回限定の体験レッスン無料〜4,500円です。<br />
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
              <AreaModifierSections studios={studios} areaName="京都駅" />
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="kyoto-station" areaName="京都駅" />

      <RelatedAreas currentSlug="kyoto-station" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
