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
  alternates: { canonical: 'https://biyori-pilates.com/area/hachioji/' },
  title: '八王子のピラティスおすすめ5選｜駅徒歩・体験料金・定休日を比較',
  description: '八王子でピラティスのおすすめスタジオ5店を、八王子駅・京王八王子駅からの徒歩分順に比較。体験料金・営業時間・定休日・マシン/マットの違いを各公式サイトで確認して掲載しています（2026年10月25日確認）。',
  keywords: 'ピラティス,八王子,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK 八王子オクトーレ店',
    officialUrl: 'https://t.afi-b.com/visit.php?a=O11543l-G384824n&p=E9887623',
    image: '/images/studios/pilates-k.webp',
    price: '月4回 13,420円',
    trial: '体験レッスン 無料',
    features: ['女性専用', '八王子駅直結', '部位別プログラム', 'マシン専門'],
    description: '女性専用マシンピラティス専門スタジオです。八王子駅直結のオクトーレ6Fです。音楽に合わせた楽しいレッスンと部位別ボディメイクプログラムが充実しています。強度や目的に合わせて選べるクラスが豊富です。',
    access: 'JR「八王子駅」直結 八王子オクトーレ 6F',
    address: '東京都八王子市旭町9-1 八王子オクトーレ 6F',
    popularPlan: {
      name: 'マンスリー4メンバー（月4回）',
      description: '女性専用マシンピラティス月4回です。部位別プログラムも選べます。',
      price: '月4回 13,420円（税込）',
    },
    options: [
      'マンスリー8メンバー（月8回 16,170円）',
      'マンスリーデイメンバー（14,520円・2026年5月1日で新規受付終了）',
      '追加受講（1回 2,200円）',
      '入会金 5,500円・施設使用料 2,530円（ほか月会費に施設維持費 月825円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      // 営業時間・定休日: 公式店舗ページ https://pilates-k.jp/studio/tokyo/hachioji で確認（2026-10-25）
      hours: '火・水・金 10:00-15:00／17:00-21:30 / 木 17:00-21:30 / 土・祝 10:00-19:00 / 日 10:00-17:30（最終受付は各終了の1時間前）',
      closed: '月曜日',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'Rintosull（リントスル）八王子店',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683',
    image: '/images/studios/rintosull.webp',
    price: '月4回 8,800円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', '八王子駅徒歩1分', 'LAVA系列', '月4回8,800円〜'],
    description: 'LAVA系列の女性専用マシンピラティススタジオです。八王子駅北口から徒歩1分です。月4回8,800円〜というリーズナブルな価格設定です。全国のRintosull・LAVA店舗で相互利用可能なプランもあります。',
    access: 'JR「八王子駅」北口 徒歩1分 / 京王線「京王八王子駅」出入口2より徒歩6分',
    address: '東京都八王子市旭町7-1 豊栄第一ビル 4F',
    popularPlan: {
      name: 'マンスリー4（月4回）',
      description: '女性専用マシンピラティス月4回です。',
      price: '月4回 8,800円〜（税込）',
    },
    options: [
      '通い放題プラン（13,800円〜）',
      '全店通い放題プレミアム（16,800円）',
      '運営管理費（月680円）',
      '入会金・登録金 各5,000円（体験当日の入会で0円）・施設使用料 2,500円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '運動不足解消'],
    },
    basicInfo: {
      // 定休日・アクセス: 公式店舗ページ https://rintosull.jp/shop/tokyo/hachioji/ で確認（2026-10-25）。営業時間は公式に記載なし
      hours: '公式サイトでご確認ください',
      closed: '毎週日曜・第4木曜',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'STUDIO IVY 八王子店',
    image: '/images/studios/studio-ivy.webp',
    price: '月2回 15,000円 / 月4回 28,000円 / 月8回 52,000円',
    trial: '初回体験レッスン 4,500円（公式店舗ページでは体験コースが「新規受付停止中」・2026年10月25日確認）',
    features: ['パーソナル専門', '八王子駅近', 'オーダーメイド', '完全マンツーマン'],
    description: 'パーソナルマシンピラティス専門スタジオです。「なりたい理想の自分」を叶える場所として洗練された空間を提供しています。インストラクターと1対1で、姿勢改善・ダイエット・骨盤矯正など一人ひとりの悩みに沿ったオーダーメイドプログラムです。',
    access: 'JR中央線「八王子駅」徒歩4分 / 京王線「京王八王子駅」徒歩4分',
    address: '東京都八王子市明神町3-14-7 廣井貸店舗2F',
    popularPlan: {
      name: '月4回プラン',
      description: '完全マンツーマンのパーソナルマシンピラティス月4回です。',
      price: '月4回 28,000円（税込）',
    },
    options: [
      '体験レッスン（4,500円）',
      '月謝制プラン（月2回 15,000円〜月8回 52,000円・1回あたり6,500円〜）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', 'ボディメイク', '骨盤矯正', 'ダイエット'],
    },
    basicInfo: {
      // 住所・アクセス・営業時間・料金: 公式店舗ページ https://www.pilates-ivy.jp/studio/hachiouji で確認（2026-10-25）。定休日は公式に記載なし
      hours: '8:00〜21:00',
      closed: '公式サイトでご確認ください',
      facilities: ['リフォーマー', 'その他マシン', '更衣室'],
    },
  },
  {
    name: 'Studio TAKT EIGHT（タクトエイト）',
    image: '/images/studios/takt8-tokyo.webp',
    price: 'グループ 1回券 2,860円 / 10回券（1ヶ月有効）15,000円',
    trial: 'グループ初回 1,650円（公式料金ページ・2026年10月25日確認）',
    features: ['理学療法士監修', '横山町（八王子駅・京王八王子駅の間）', '少人数制', 'オンラインあり'],
    description: '2011年に理学療法士が立ち上げた八王子のヨガ・ピラティススタジオです。医療現場での知見を活かし「身体を正しく使うこと」にこだわった指導しています。グループ・パーソナル・オンラインレッスンに対応しています。',
    access: 'JR中央線「八王子駅」・京王線「京王八王子駅」から徒歩圏（公式アクセスページに徒歩分の記載なし）',
    address: '東京都八王子市横山町2-7 石川ビル 4F・5F',
    popularPlan: {
      name: 'グループレッスン',
      description: '少人数制のグループレッスンです。理学療法士監修のプログラムです。',
      price: '1回券 2,860円 / 10回券（1ヶ月有効）15,000円（税込）',
    },
    options: [
      'パーソナルレッスン',
      'オンラインレッスン',
      '体験レッスン',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '不調改善', '体幹強化', '健康維持'],
    },
    basicInfo: {
      // 住所・料金: 公式 https://takt8.com/access ・ https://takt8.com/price_230601 で確認（2026-10-25）。スタジオの営業時間・定休日は公式に記載なし（電話受付は月〜金 10:00〜18:00）
      hours: '公式サイトでご確認ください（電話受付 月〜金 10:00〜18:00）',
      closed: '公式サイトでご確認ください',
      facilities: ['マット', 'ピラティス器具', '更衣室'],
    },
  },
  {
    name: '24/7ピラティス 八王子店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=J11817X.1.B1620582.U1357808',
    image: '/images/studios/247-pilates.webp',
    price: '月2回 14,500円〜 / 月4回 27,000円〜 / 月8回 52,000円〜（税込）',
    trial: '体験レッスン 無料（説明含め約60分・手ぶらで参加可能）',
    features: ['マシンピラティス', '女性専用', '完全個室パーソナル', '入会金不要・月謝制'],
    description: '完全個室・マンツーマンの女性専用パーソナルピラティススタジオです。入会金不要の月謝制で、一人ひとりに合わせたオリジナルプログラムを提供しています。八王子駅から徒歩3分です。',
    access: '八王子駅から徒歩3分',
    address: '東京都八王子市東町12-8 長澤ビル3F',
    popularPlan: {
      name: '月4回プラン',
      description: '完全個室でマシンを使ったマンツーマン指導しています。入会金不要の月謝制です。',
      price: '月4回 27,000円〜（税込）',
    },
    options: [
      'なし',
    ],
    userProfile: {
      ageRange: '20代〜50代と幅広い',
      genderRatio: '女性専用',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '健康維持'],
    },
    basicInfo: {
      // 住所・営業時間・料金: 公式店舗ページ https://247-sports.jp/pilates/studio/kantou/tokyo/hachioji.html で確認（2026-10-25）。定休日は公式店舗ページに記載なし
      hours: '8:00〜21:00（日により変動）',
      closed: '公式サイトでご確認ください',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。八王子エリアのスタジオはほとんどが初心者歓迎です。Rintosullは初心者向けBasicプログラムがあります。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷調整しやすく初心者におすすめです。八王子はマシン専門スタジオが特に充実しています。',
  },
  {
    question: '八王子のピラティスの料金相場は？',
    answer: 'グループ月4回で8,800円〜13,420円程度です。Rintosullが月4回8,800円〜で最もリーズナブルです。ピラティスKは月4回13,420円〜です。',
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
    answer: '動きやすい服装と飲み物があれば問題ありません。ピラティスKは無料体験があります。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化しています。ヨガは柔軟性とリラックス重視です。タクトエイトではヨガとピラティス両方のレッスンが受けられます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'STUDIO IVYとタクトエイトは男性も通えます。ピラティスK、Rintosullは女性専用です。',
  },
  {
    question: '無料で体験できるスタジオは？',
    answer: 'ピラティスK、Rintosullは無料体験があります。STUDIO IVYは体験4,500円です。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感される方が多くなっています。最低2ヶ月は継続することをおすすめします。',
  },
]

export default function HachiojiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '八王子', url: 'https://biyori-pilates.com/area/hachioji/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月25日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              八王子のピラティスおすすめ5選<br className="hidden md:block" />
              駅徒歩・体験料金・定休日の比較
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
              <span className="text-warm-600">八王子</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="八王子" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、八王子エリアでおすすめのピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>八王子でピラティススタジオを探している</span>
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

        <section className="py-12 bg-white" id="by-station"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4 text-center">八王子駅からの徒歩分で比べるおすすめピラティス早見表</h2><p className="text-warm-600 leading-relaxed mb-6 text-sm">「八王子 ピラティス おすすめ」で探す方向けに、掲載5店をJR八王子駅から近い順に並べました。徒歩分・住所・体験料金・営業時間・定休日は各スタジオの公式サイトの表記です（2026年10月25日確認・税込）。公式に記載がない項目は「公式に記載なし」としています。</p><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">スタジオ（住所）</th><th className="px-4 py-3 text-left">JR八王子駅から</th><th className="px-4 py-3 text-left">京王八王子駅から</th><th className="px-4 py-3 text-left">形式（マシン/マット）</th><th className="px-4 py-3 text-left">体験</th><th className="px-4 py-3 text-left">営業時間</th><th className="px-4 py-3 text-left">定休日</th></tr></thead><tbody>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">ピラティスK 八王子オクトーレ店（旭町9-1 八王子オクトーレ6F）</td><td className="px-4 py-3">北口 徒歩約1分（マルベリーブリッジ直結）</td><td className="px-4 py-3">公式に記載なし</td><td className="px-4 py-3">マシン（リフォーマー）グループ・女性専用</td><td className="px-4 py-3">無料</td><td className="px-4 py-3">火水金 10:00-15:00／17:00-21:30・木 17:00-21:30・土祝 10:00-19:00・日 10:00-17:30</td><td className="px-4 py-3">月曜</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">Rintosull 八王子店（旭町7-1 豊栄第一ビル4F）</td><td className="px-4 py-3">北口 徒歩1分</td><td className="px-4 py-3">出入口2 徒歩6分</td><td className="px-4 py-3">マシン（リフォーマー）グループ・女性専用</td><td className="px-4 py-3">無料（約45分・ウェア/ソックス無料レンタル）</td><td className="px-4 py-3">公式に記載なし</td><td className="px-4 py-3">毎週日曜・第4木曜</td></tr>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">24/7ピラティス 八王子店（東町12-8 長澤ビル3F）</td><td className="px-4 py-3">徒歩3分</td><td className="px-4 py-3">公式に記載なし</td><td className="px-4 py-3">マシン・完全個室パーソナル・女性専用</td><td className="px-4 py-3">無料（手ぶら可）</td><td className="px-4 py-3">8:00-21:00（日により変動）</td><td className="px-4 py-3">公式に記載なし</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">STUDIO IVY 八王子店（明神町3-14-7 廣井貸店舗2F）</td><td className="px-4 py-3">徒歩4分</td><td className="px-4 py-3">徒歩4分</td><td className="px-4 py-3">マシン・パーソナル（男性可）</td><td className="px-4 py-3">4,500円（体験コースは新規受付停止中）</td><td className="px-4 py-3">8:00-21:00</td><td className="px-4 py-3">公式に記載なし</td></tr>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">Studio TAKT EIGHT（横山町2-7 石川ビル4F・5F）</td><td className="px-4 py-3">公式に徒歩分の記載なし</td><td className="px-4 py-3">公式に徒歩分の記載なし</td><td className="px-4 py-3">少人数グループ（ヨガ・ピラティス・マットはレンタル込み）・パーソナル（男性可）</td><td className="px-4 py-3">グループ初回 1,650円</td><td className="px-4 py-3">公式に記載なし（電話受付 月〜金 10:00-18:00）</td><td className="px-4 py-3">公式に記載なし</td></tr>
        </tbody></table></div><p className="text-warm-600 leading-relaxed mt-4 text-sm">駅北口から1分圏で女性専用のマシングループに通うなら ピラティスK（月4回 13,420円）・Rintosull（月4回 8,800円）、完全個室のマンツーマンなら 24/7ピラティス（月2回 14,500円〜）が候補です。男性も通えるのは STUDIO IVY と Studio TAKT EIGHT です。京王八王子駅を使う方は、Rintosull（出入口2から徒歩6分）や STUDIO IVY（徒歩4分）もご確認ください。月曜はピラティスK、日曜はRintosullが休みのため、通う曜日に合わせてお選びください。</p></div></section>

        <PriceComparisonTable studios={studios} areaName="八王子" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              八王子のおすすめピラティススタジオ5選
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
              八王子のピラティス料金相場
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
                    <td className="px-4 py-3">8,800円〜13,420円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">月2回 14,500円〜（1回あたり6,500円〜7,500円）</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜4,500円（タクトエイトのグループ初回 1,650円）</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              八王子エリアは都心部と比較してテナント賃料が抑えめのため、同じ内容のレッスンでも料金がリーズナブルな傾向があります。通い放題プランの割安感が大きいエリアのため、週2回以上通える方には月額制プランをおすすめします。近隣の立川エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              八王子でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR「八王子駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  八王子エリアのスタジオは八王子駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートをご確認ください。八王子駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">スタジオ数が限られるため早めの予約を</h3>
                <p className="text-warm-600 leading-relaxed">
                  八王子エリアは都心と比べてスタジオの選択肢が限られるため、人気のスタジオ・時間帯は予約が埋まりやすい傾向があります。特に土曜午前は混み合うことが多いので、1週間前には予約を入れておくのがおすすめです。車で通う方は駐車場の有無もご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">通い放題プランと回数制プランを比較検討</h3>
                <p className="text-warm-600 leading-relaxed">
                  八王子エリアでは、通い放題プランが都心部より割安に設定されている傾向があります。週2回以上通う場合は通い放題が割安ですが、月1〜2回のペースであれば回数券やドロップインの方が割安な場合もあります。自分の通う頻度を想定してプランをお選びください。初月は回数制で様子を見る方法もあります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  八王子エリアだけでなく、近隣の<Link href="/area/tachikawa/" className="text-warm-700 underline hover:text-warm-900">立川</Link>、<Link href="/area/machida/" className="text-warm-700 underline hover:text-warm-900">町田</Link>、<Link href="/area/fuchu/" className="text-warm-700 underline hover:text-warm-900">府中</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                  <strong>八王子エリアの豆知識：</strong>八王子エリアは車で通う方も多いため、駐車場の有無や提携コインパーキングを事前にご確認ください。車なら荷物の心配が少ないので、シャワー後の着替えやヘアドライヤーなども余裕を持って準備できます。
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
                  <li className="text-warm-700">• Rintosull（リントスル）八王子店（月4回 8,800円〜）</li>
                  <li className="text-warm-700">• ピラティスK 八王子オクトーレ店（月4回 13,420円〜）</li>
                  <li className="text-warm-700">• 24/7ピラティス 八王子店（月2回 14,500円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK 八王子オクトーレ店</li>
                  <li className="text-warm-700">• Rintosull（リントスル）八王子店</li>
                  <li className="text-warm-700">• 24/7ピラティス 八王子店</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  駅から徒歩2分以内です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK 八王子オクトーレ店（JR「八王子駅」直結 八王子オクトーレ 6F）</li>
                  <li className="text-warm-700">• Rintosull（リントスル）八王子店（JR「八王子駅」北口 徒歩1分）</li>
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
                  <li>• Rintosull 八王子店（月4回 8,800円〜）</li>
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
                  <li>• ピラティスK（13,420円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 16,000〜29,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  毎日通いたい方向けです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（16,170円/月8回）</li>
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
                  八王子の料金相場はグループ月4回で8,800円〜13,420円です。入会金やキャンペーンもご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  体験料金は、ピラティスK 八王子オクトーレ店が「体験レッスン 無料」、Rintosull（リントスル）八王子店が「体験レッスン 無料」、STUDIO IVY 八王子店が「初回体験レッスン 4,500円（体験コースは新規受付停止中）」、Studio TAKT EIGHT が「グループ初回 1,650円」、24/7ピラティス 八王子店が「体験レッスン 無料（説明含め約60分・手ぶらで参加可能）」です（店舗カードの記載）。最新の条件は各公式サイトでご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  八王子の掲載スタジオでは、ピラティスK 八王子オクトーレ店（JR「八王子駅」直結 八王子オクトーレ 6F）、Rintosull（リントスル）八王子店（JR「八王子駅」北口 徒歩1分）、24/7ピラティス 八王子店（八王子駅 徒歩3分）が駅から近いスタジオです（徒歩分は各公式サイトの表記・2026年10月25日確認）。通う時間帯の経路もご確認ください。
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
              本ページでは、八王子エリアのおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、八王子にあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
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
              初回限定の体験レッスンは無料〜4,500円です（2026年10月25日確認）。<br />
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
      <ConsultantSection areaKey="hachioji" areaName="八王子" />

                  {/* g1-link-202607 */}
            <div className="my-8 bg-white border border-warm-200 p-5">
              <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">店舗別ガイド</p>
              <p className="text-sm text-warm-700 font-light leading-relaxed mb-3">このエリアの店舗別に料金・体験レッスン・アクセスを整理した詳細ページがあります。</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/brands/pilates-k-hachioji/" className="text-xs text-warm-800 border border-warm-300 bg-white px-3 py-1.5 hover:border-warm-500 transition-colors">ピラティスK 八王子オクトーレ店の料金・体験を見る</Link>
              </div>
            </div>

      <RelatedAreas currentSlug="hachioji" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
