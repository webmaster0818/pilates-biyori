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
  alternates: { canonical: 'https://biyori-pilates.com/area/ikebukuro/' },
  title: '【2026年10月最新】池袋のピラティス｜初心者可・無料体験で選ぶ料金比較',
  description: '池袋エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で比較しています。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,池袋,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'Celestia（セレスティア）池袋店',
    officialUrl: 'https://t.hatmiso.net/fmcl?ak=U114734.1.W158213V.U1357808',
    image: '/images/studios/celestia.webp',
    price: '詳細は公式サイト参照',
    trial: '体験レッスンあり（詳細は公式サイト参照）',
    features: ['マシンピラティス', 'セミパーソナル', '少人数制', '美しさ重視'],
    description: '「本来の輝きを引き出す」をコンセプトにしたセミパーソナルのマシンピラティス専門スタジオです。美しさと健康を両立する洗練された空間で、少人数制のレッスンを提供しています。契約プランの範囲で系列店を相互利用でき、池袋店もその一つです。',
    access: '池袋駅周辺（詳細は公式サイト参照）',
    address: '東京都（詳細は公式サイト参照）',
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['マシンピラティス', 'セミパーソナル', '更衣室', '女性も通いやすい'],
    },
  },
  {
    name: 'zen place pilates 池袋スタジオ',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['池袋駅徒歩2分', 'グレード01', '男性利用可', '全国他店利用'],
    description: 'ピラティス専門の大手スタジオです。池袋駅東口から徒歩2分です。最上位グレード01で、リフォーマー・キャデラック・チェア・ラダーバレルなど充実のマシン設備です。マットグループ・マシングループ・プライベートの3タイプです。全国150店舗以上で他店利用可能です。',
    access: 'JR各線・東京メトロ各線・西武池袋線・東武東上線「池袋駅」東口 徒歩2分',
    address: '東京都豊島区南池袋2-27-8 南水ビル 8F',
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
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'ラダーバレル', 'マット', 'ロッカー'],
    },
  },
  {
    name: 'ピラティスK 池袋店',
    officialUrl: 'https://t.afi-b.com/visit.php?a=O11543l-G384824n&p=E9887623',
    image: '/images/studios/pilates-k.webp',
    price: '月4回 13,420円〜',
    trial: '体験レッスン 2,000円',
    features: ['女性専用', '池袋駅徒歩1分', '部位別プログラム', 'マシン専門'],
    description: '女性専用マシンピラティス専門スタジオです。池袋駅東口33番・34番出口から徒歩1分です。音楽に合わせた楽しいレッスンと部位別ボディメイクプログラムが充実しています。強度や目的に合わせて選べるクラスが豊富です。',
    access: 'JR「池袋駅」東口 33番・34番出口 徒歩1分',
    address: '東京都豊島区東池袋1-3-6 池袋山手ビル 4F',
    popularPlan: {
      name: 'マンスリー4メンバー（月4回）',
      description: '女性専用マシンピラティス月4回です。部位別プログラムも選べます。',
      price: '月4回 13,420円（税込）',
    },
    options: [
      'マンスリーフルメンバー（通い放題 16,170円）',
      'マンスリーデイメンバー（14,520円）',
      '追加受講（1回 2,200円）',
      '入会金 5,500円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '月〜金 9:30-16:00,17:30-22:00 / 土日祝 9:30-20:00',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'the SILK 池袋東口店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=X10489B.1.E162842X.U1357808',
    image: '/images/studios/the-silk.webp',
    price: '月3回 12,980円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', '池袋駅徒歩1分', '手ぶらで体験可能', '2店舗あり'],
    description: '女性専用マシンピラティススタジオです。池袋駅東口41番出口から徒歩1分です。池袋に東口店・西口店の2店舗展開で予約が取りやすいです。音楽のリズムに合わせた独自のレッスンスタイルで初心者でも楽しく続けられます。手ぶらで体験可能です。',
    access: 'JR「池袋駅」東口 41番出口 徒歩1分',
    address: '東京都豊島区南池袋1-23-6 KDG池袋ビル9階',
    popularPlan: {
      name: 'Standard4（月4回）',
      description: '女性専用マシンピラティス月4回です。音楽に合わせた楽しいレッスンです。',
      price: '月4回 15,070円（税込）',
    },
    options: [
      'Light3（月3回 12,980円）',
      'Full（毎日1回 20,680円）',
      'Full Day（18,480円）',
      '体験・入会金・登録手数料 無料キャンペーンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '7:30〜21:30',
      closed: '年末年始',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム', 'ウォーターサーバー'],
    },
  },
  {
    name: 'CLUB PILATES 目白店',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5805739&p_id=4728&pc_id=12432&pl_id=62402',
    image: '/images/studios/club-pilates.webp',
    price: '月4回 14,190円／月8回 26,290円／通い放題 40,590円（公式店舗ページ・税表記なし）',
    trial: '体験レッスン 無料（30分イントロクラス）',
    features: ['世界最大級', '目白駅徒歩1分', '15種類の器具', '男性利用可'],
    description: '世界最大級のマシンピラティスブランドです。目白駅から徒歩1分、池袋からも徒歩圏内です。最大12名の少人数制で、リフォーマー・スプリングボード・TRX・チェアなど15種類のマシン・器具を完備しています。8つのプログラムと4段階のレベル分けです。',
    access: 'JR「目白駅」徒歩1分（池袋駅から徒歩約10分）',
    address: '東京都豊島区目白2-39-1 TRAD目白 2F',
    popularPlan: {
      name: 'グループ月4回プラン',
      description: '15種類の器具を使った本格グループレッスンです。4段階のレベル分けで安心です。',
      price: '月4回 14,190円（税表記なし）',
    },
    options: ['月8回 26,290円', '通い放題 40,590円', '入会金 5,500円（税込）', '料金は公式の店舗ページ（2026年10月14日確認）'],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['体幹強化', '姿勢改善', 'ボディメイク', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: '月〜木 7:00-21:00 / 金 8:00-21:00 / 土 7:00-18:00 / 日 9:00-21:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'スプリングボード', 'TRX', 'チェア', 'Bosu'],
    },
  },
  {
    name: 'BDC PILATES 池袋スタジオ',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5719218&p_id=3095&pc_id=7153&pl_id=40590',
    image: '/images/studios/bdc-pilates.webp',
    price: '月4回 14,520円〜',
    trial: '体験レッスン 3,850円',
    features: ['ダンサー発祥', '少人数制', 'マシングループ', '池袋エリア'],
    description: 'ダンサーのためのピラティスから生まれたマシンピラティス専門スタジオです。リフォーマーを使ったダイナミックなグループレッスンが特徴です。少人数制で丁寧な指導です。体の使い方を根本から改善するプログラムです。',
    access: '池袋駅 徒歩1分（公式表記）',
    address: '東京都豊島区南池袋1-22-2 FLCビル4F',
    popularPlan: {
      name: 'マシングループ月4回',
      description: 'リフォーマーを使ったマシンピラティスグループレッスンです。',
      price: '月4回 14,520円（税込）',
    },
    options: [
      '月8回プラン',
      '通い放題プラン',
      'プライベートレッスン',
      '体験レッスン 3,850円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', '姿勢改善', 'ダンスパフォーマンス', '体幹強化'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Dr.ピラティス 池袋店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11979O.1.Z164554L.U1357808',
    image: '/images/studios/dr-pilates.webp',
    price: '月4回(45分) 29,700円〜 / 月4回(60分) 39,600円〜',
    trial: '体験トレーニング 7,100円（無料キャンペーン実施店舗あり）',
    features: ['マンツーマン（パーソナル）', 'マシン・マット両対応', '医師推奨パーソナルジムNo.1受賞'],
    description: '医師推奨のパーソナルジム受賞歴を持つDr.トレーニング系列のパーソナルピラティススタジオです。マシン・マット両対応のマンツーマン指導で、姿勢改善やボディメイクを目指せます。池袋エリアです（詳細は公式サイト参照）。',
    access: '池袋エリア（詳細は公式サイト参照）',
    address: '東京都（詳細は公式サイト参照）',
  },
  {
    name: 'the SILK 池袋西口店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=X10489B.1.E162842X.U1357808',
    image: '/images/studios/the-silk.webp',
    price: 'グループ月4回(Standard4) 14,370〜15,280円 / 通い放題 19,980〜22,280円（別途施設利用料月700円）/ パーソナル月2回 22,000円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', 'マシンピラティス専門', 'グループ＋パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオです。レベル別・部位別の豊富なグループプログラムとパーソナルレッスンを提供し、洗練された空間が特徴です。池袋駅から徒歩1分です（情報引用元: the SILK公式サイト the-silk.co.jp）。',
    access: '池袋駅から徒歩1分',
    address: '東京都豊島区西池袋1-21-2 ハイブリッヂ西池袋6階',
  },
  {
    name: '24/7ピラティス 池袋東口店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=J11817X.1.B1620582.U1357808',
    image: '/images/studios/247-pilates.webp',
    price: '月2回 14,500円〜 / 月4回 27,000円〜 / 月8回 52,000円〜（税込）',
    trial: '体験レッスン 無料（説明含め約60分・手ぶらで参加可能）',
    features: ['マシンピラティス', '女性専用', '完全個室パーソナル', '入会金不要・月謝制'],
    description: '完全個室・マンツーマンの女性専用パーソナルピラティススタジオです。入会金不要の月謝制で、一人ひとりに合わせたオリジナルプログラムを提供しています。東池袋駅から徒歩3分です。',
    access: '東池袋駅から徒歩3分',
    address: '東京都豊島区東池袋4丁目29-12 サンフラット佐藤2F',
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
      hours: '8:00〜21:00',
      closed: '年中無休',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。池袋エリアのスタジオはほとんどが初心者歓迎です。CLUB PILATESは4段階のレベル分け、the SILKは体験者の約8割がピラティス未経験者です。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷調整しやすく初心者におすすめです。池袋はマシン専門スタジオが特に充実しています。',
  },
  {
    question: '池袋のピラティスの料金相場は？',
    answer: 'グループ月4回で10,450円〜15,070円程度です。zen placeが月4回10,450円〜で最もリーズナブルです。the SILKは月3回12,980円〜、ピラティスKは月4回13,420円〜です。',
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
    answer: '動きやすい服装と飲み物があれば問題ありません。the SILKは手ぶらで体験可能です（ウェア・タオル無料貸出）。CLUB PILATESは無料イントロクラスがあります。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化しています。ヨガは柔軟性とリラックス重視です。zen placeはヨガスタジオも運営しており、両方楽しめます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place池袋、CLUB PILATES目白、BDC PILATES池袋は男性も通えます。the SILKとピラティスKは女性専用です。',
  },
  {
    question: '無料で体験できるスタジオは？',
    answer: 'the SILKとCLUB PILATESは無料体験があります。zen placeはグループ体験1,000円です。ピラティスKは体験2,000円です。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続することをおすすめします。',
  },
]

export default function IkebukuroPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '池袋', url: 'https://biyori-pilates.com/area/ikebukuro/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月11日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス池袋おすすめ9選<br className="hidden md:block" />
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
              <span className="text-warm-600">池袋</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="池袋" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、池袋エリアでおすすめのピラティススタジオ9選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>池袋でピラティススタジオを探している</span>
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

        <PriceComparisonTable studios={studios} areaName="池袋" />
        <AreaMarketComparison studios={studios} areaName="池袋" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              池袋のおすすめピラティススタジオ9選
            </h2>
            <div className="space-y-8">
              {[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
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
                  <li className="text-warm-700">• zen place pilates 池袋スタジオ（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• the SILK 池袋東口店（月3回 12,980円〜）</li>
                  <li className="text-warm-700">• ピラティスK 池袋店（月4回 13,420円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK 池袋店</li>
                  <li className="text-warm-700">• the SILK 池袋東口店</li>
                  <li className="text-warm-700">• the SILK 池袋西口店</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  駅から徒歩2分以内です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK 池袋店（JR「池袋駅」東口 33番・34番出口 徒歩1分）</li>
                  <li className="text-warm-700">• the SILK 池袋東口店（JR「池袋駅」東口 41番出口 徒歩1分）</li>
                  <li className="text-warm-700">• CLUB PILATES 目白店（JR「目白駅」徒歩1分（池袋駅から徒歩約10分））</li>
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
                  <li>• the SILK（12,980円〜/月3回）</li>
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
                  <li>• CLUB PILATES（月4回 14,190円）</li>
                  <li>• BDC PILATES（14,520円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 16,000〜29,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  毎日通いたい方向けです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（16,170円/通い放題）</li>
                  <li>• CLUB PILATES（通い放題 40,590円）</li>
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
                  池袋の料金相場はグループ月4回で10,450円〜15,070円です。入会金やキャンペーンもご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  体験料金は、zen place pilates 池袋スタジオが「グループ体験 1,000円」、ピラティスK 池袋店が「体験レッスン 2,000円」、the SILK 池袋東口店が「体験レッスン 無料」、CLUB PILATES 目白店が「体験レッスン 無料（30分イントロクラス）」です（店舗カードの記載）。最新の条件は各公式サイトでご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  池袋の掲載スタジオでは、ピラティスK 池袋店（JR「池袋駅」東口 33番・34番出口 徒歩1分）、the SILK 池袋東口店（JR「池袋駅」東口 41番出口 徒歩1分）、CLUB PILATES 目白店（JR「目白駅」徒歩1分（池袋駅から徒歩約10分））が駅から近いスタジオです。通う時間帯の経路もご確認ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              池袋のピラティス料金相場【2026年4月最新】
            </h2>
            <div className="bg-warm-50 rounded-lg p-8 border border-warm-200 mb-8">
              <p className="text-warm-600 leading-relaxed mb-6">
                池袋エリアは渋谷や新宿に比べるとスタジオ数は少なめですが、大手チェーンが揃っており、都心の中では比較的落ち着いた雰囲気で通えるのが魅力です。東口・西口ともにアクセスが良好で、西武池袋線・東武東上線ユーザーにも便利な立地です。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">グループレッスン（月4回）</h3>
                  <p className="text-3xl font-bold text-warm-800 mb-2">10,450円〜15,070円</p>
                  <p className="text-sm text-warm-600">zen place pilatesのマットグループ月4回10,450円〜が最安です。ピラティスK 月4回13,420円〜、the SILK月4回15,070円〜、CLUB PILATES目白店が月4回 14,190円です。BDC PILATESは14,520円〜でダンスメソッド融合の少人数制レッスンが受けられます。</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">通い放題プラン</h3>
                  <p className="text-3xl font-bold text-warm-800 mb-2">16,940円〜</p>
                  <p className="text-sm text-warm-600">zen place pilatesはフリープラン（通い放題）が月額16,940円〜です。週2回以上通うなら月4回プランよりもお得になります。通い放題プランは池袋以外のzen place全店舗でも利用可能です。</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-5 border border-warm-200">
                <h3 className="font-bold text-warm-900 mb-3">入会金・体験レッスン費用</h3>
                <p className="text-sm text-warm-600">入会金は10,000円〜33,000円程度ですが、各スタジオでキャンペーン期間中は無料になることが多いです。体験レッスンはthe SILKが無料、zen placeは1,000円〜です。まずは2〜3スタジオで体験して、自分に合う雰囲気のスタジオを見つけることをおすすめします。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              池袋でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">東口と西口でスタジオの分布が異なる</h3>
                <p className="text-warm-600 leading-relaxed">
                  池袋駅は東口（サンシャインシティ方面）と西口（東京芸術劇場方面）で雰囲気が異なります。zen place pilatesやBDC PILATESは東口徒歩圏内、他のスタジオも駅近にあります。自分の利用路線（JR・東京メトロ・西武・東武）に合わせて、最寄り出口から近いスタジオをお選びください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">スタジオ数が限られるため早めの予約を</h3>
                <p className="text-warm-600 leading-relaxed">
                  池袋は渋谷・新宿に比べてスタジオ数が少なめなため、人気の時間帯はすぐに埋まります。特に土日午前中や平日夜のレッスンは予約が取りにくいこともあります。早めの予約を心がけるか、比較的空いている平日昼間の時間帯を狙うことをおすすめします。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">目白・大塚エリアも選択肢に入れよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  池袋駅だけでなく、隣駅の目白（CLUB PILATES 目白店）も徒歩圏内です。JR山手線で1駅なので、池袋駅周辺で希望のスタジオが見つからない場合は近隣エリアにも目を向けてみてください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">月額料金以外のコストに注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  レッスン料金以外に、入会金・事務手数料・施設維持費がかかるスタジオがあります。ピラティスKは施設維持費が別途月825円、CLUB PILATES目白店は入会金が必要です。トータルコストで比較し、キャンペーン期間中の入会を狙うと初期費用を抑えられます。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>水分（500ml以上）</strong>：レッスン中の水分補給に必須です。スタジオ内に自販機がない場合もあります。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用です。マシンに敷くタオルはスタジオで用意されることが多いです。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>グリップソックス</strong>：マシンピラティスでは靴下着用必須のスタジオが大半です。滑り止め付きが最適です。スタジオで購入できる場合もあります。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>をお選びください。ピラティスは全身を大きく動かすため、動きやすさが最優先です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが分かる服</strong>の方が、インストラクターがフォームをチェックしやすく効果的です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。the SILK池袋東口店は手ぶら体験が可能な場合があります。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリーは外して</strong>参加です。ピアス・ネックレス・腕時計はマシンに引っかかる恐れがあります。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>池袋エリアの豆知識：</strong>池袋はサンシャインシティやルミネ池袋が近く、レッスン前後のショッピングにも便利です。BDC PILATES池袋スタジオは東口徒歩1分と好立地なので、仕事帰りにサッと立ち寄れます。西武池袋線・東武東上線沿線から通う方も多く、都心の中では比較的リラックスした環境でレッスンに集中できるエリアです。
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
              本ページでは、池袋エリアのおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、池袋にあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
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
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="ikebukuro" areaName="池袋" />

      {/* g1-link-202609 */}

      <div className="my-8 bg-white border border-warm-200 p-5">

        <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">店舗別ガイド</p>

        <p className="text-sm text-warm-700 font-light leading-relaxed mb-3">このエリアの店舗別に料金・体験レッスン・アクセスを整理した詳細ページがあります。</p>

        <div className="flex flex-wrap gap-2">

          <Link href="/brands/the-silk-ikebukuro-higashiguchi/" className="text-xs text-warm-800 border border-warm-300 bg-white px-3 py-1.5 hover:border-warm-500 transition-colors">the SILK 池袋東口店の料金・体験を見る</Link>

        </div>

      </div>


      {/* g1-link-202609 */}


      <div className="my-8 bg-white border border-warm-200 p-5">


        <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">店舗別ガイド</p>


        <p className="text-sm text-warm-700 font-light leading-relaxed mb-3">このエリアの店舗別に料金・体験レッスン・アクセスを整理した詳細ページがあります。</p>


        <div className="flex flex-wrap gap-2">


          <Link href="/brands/the-silk-ikebukuro-nishiguchi/" className="text-xs text-warm-800 border border-warm-300 bg-white px-3 py-1.5 hover:border-warm-500 transition-colors">the SILK 池袋西口店の料金・体験を見る</Link>


        </div>


      </div>



      <RelatedAreas currentSlug="ikebukuro" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
