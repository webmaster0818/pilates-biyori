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
  alternates: { canonical: 'https://biyori-pilates.com/area/fujisawa/' },
  title: '藤沢のピラティス｜初心者可・無料体験で選ぶ料金比較',
  description: '藤沢エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で比較しています。初心者向けの選び方、駅近スタジオ、体験レッスンの有無までわかります。',
  keywords: 'ピラティス,藤沢,湘南,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 藤沢',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月4回 10,450円〜',
    trial: '体験レッスン 1,000円（初回・マットグループ）',
    features: ['マシン完備', '男性利用可', '藤沢駅徒歩2分', '全国他店利用可'],
    description: '全国150以上のスタジオを展開する国内最大級のピラティス専門スタジオです。JR東海道線・小田急江ノ島線「藤沢駅」南口から徒歩2分の好立地です。リフォーマー以外にチェアやキャデラックなど豊富なマシンを完備しています。男性も受講可能です。',
    access: 'JR東海道線・小田急江ノ島線「藤沢駅」南口 徒歩2分 / 江ノ島電鉄「藤沢駅」徒歩5分',
    address: '神奈川県藤沢市南藤沢2-8 2002K&Sビルディング 4階',
    popularPlan: {
      name: 'マットグループ月4回',
      description: 'マットピラティスのグループレッスンです。全国のzen placeスタジオで他店利用可能です。',
      price: '月4回 10,450円（税込）',
    },
    options: [
      'マットグループフリー（月額16,940円）',
      'リフォーマーグループ月4回（月額15,400円）',
      'プライベート月4回（月額38,280円〜）',
      '入会金 22,000円（体験当日入会で無料）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      purpose: ['姿勢改善', '体幹強化', 'リラックス', '健康維持'],
    },
    basicInfo: {
      hours: '平日 9:00〜22:00 / 土 9:00〜21:00 / 日 9:00〜19:00',
      closed: '毎週火曜日・季節休業日',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', '男女別更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Pilates Mee 藤沢店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=F10273P.1.9146255O.U1357808',
    image: '/images/studios/pilates-mee.webp',
    price: '1回あたり3,750円 ※37,500円の通い放題コースを月10回利用した場合・公式の算出',
    priceList: ['体験レッスン無料', 'セミパーソナル：月2回 11,000円／月4回 19,800円／通い放題 37,500円（税込）', 'パーソナル：月2回 22,000円／月4回 39,600円／月8回 70,400円（税込）'],
    trial: '体験レッスン無料',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '1人のインストラクターにつき最大3名のセミパーソナル型マシンピラティススタジオです。藤沢駅から徒歩5分です。定額制で1回あたり3,750円（※37,500円の通い放題コースを月10回利用した場合・公式の算出）と割安です。当日予約・当日キャンセル可能と柔軟な予約対応です。女性専用です。',
    access: '藤沢駅 徒歩5分',
    address: '〒251-0023 神奈川県藤沢市鵠沼花沢町11-1　1階',
    popularPlan: {
      name: '定額制プラン',
      description: 'セミパーソナルのマシンピラティスです。通い放題で1回あたり3,750円です（※37,500円の通い放題コースを月10回利用した場合・公式の算出）。',
      price: '定額制（詳細は公式サイト参照）',
    },
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '9:00〜21:15',
      closed: '不定休',
      facilities: ['女性専用トイレ', '着替えスペース', '全身鏡'],
    },
  },
  {
    name: 'LOrena（ロレナ）藤沢店',
    image: '/images/studios/lorena-fujisawa.webp',
    price: '1回 4,400円〜',
    trial: '体験レッスンあり',
    features: ['女性専用', '韓国式リフォーマー', 'ジム併設', 'セミパーソナル'],
    description: '女性専用マシンピラティススタジオ&ジムです。韓国で人気のリフォーマーを採用し、最大4名のセミパーソナル式グループレッスンです。ピラティスに加えてTRX・スウェディッシュバー・有酸素マシンも完備で、総合的なボディメイクが可能です。',
    access: '藤沢駅北口 徒歩9分',
    address: '神奈川県藤沢市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'セミパーソナルレッスン',
      description: '韓国式リフォーマーを使った最大4名のセミパーソナルレッスンです。',
      price: '1回 4,400円〜（税込）',
    },
    options: [
      'セミパーソナルレッスン（4,400円〜）',
      'ジム利用可',
      'TRX・有酸素マシン完備',
      '女性専用',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '筋力アップ', '姿勢改善'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['韓国式リフォーマー', 'TRX', 'スウェディッシュバー', '有酸素マシン', '更衣室'],
    },
  },
  {
    name: 'N pilates studio 藤沢',
    image: '/images/studios/n-pilates-fujisawa.webp',
    price: '要確認（完全パーソナル）',
    trial: '体験レッスンあり',
    features: ['完全プライベート', '予約制', '藤沢駅徒歩4分', '子連れ可'],
    description: '完全予約制プライベート専門ピラティススタジオです。藤沢駅南口から徒歩4分です。一人ひとりにセッション内容をプログラミングし、最適なエクササイズを提供しています。産前産後の方、初心者からアスリートまで対応しています。お子様連れも可能です。',
    access: '藤沢駅南口 徒歩4分',
    address: '神奈川県藤沢市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'プライベートセッション（55分）',
      description: '完全マンツーマンのオーダーメイドピラティスセッションです。',
      price: '要確認（公式サイト参照）',
    },
    options: [
      '完全予約制',
      'プライベートセッション55分',
      '産前産後対応',
      'お子様連れ可',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      purpose: ['姿勢改善', '産前産後ケア', 'パフォーマンス向上', '健康維持'],
    },
    basicInfo: {
      hours: '完全予約制',
      closed: '不定休',
      facilities: ['リフォーマー', 'マシンピラティス器具', '完全プライベート空間'],
    },
  },
  {
    name: 'La pilates 藤沢店',
    officialUrl: 'https://t.afi-b.com/visit.php?a=816076W-u518546p&p=E9887623',
    image: '/images/studios/la-pilates.webp',
    price: '月1回 12,000円〜',
    trial: '初回トライアル 3,000円（90分・通常14,000円・税込／公式・2026年10月24日確認）',
    features: ['女性専用', '整体×ピラティス', '年中無休', '産前産後可'],
    description: '女性専用の整体×マシンピラティス融合スタジオです。姿勢改善に特化し、女性インストラクターが丁寧に指導しています。産前産後にも対応しています。年中無休・朝9時から夜21時まで営業しています。初回トライアルは90分3,000円（税込）です。',
    access: '藤沢エリア',
    address: '神奈川県藤沢市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月2回プラン',
      description: '整体×マシンピラティスのパーソナルレッスン月2回です。',
      price: '月2回 22,000円（税込）',
    },
    options: [
      '月1回（12,000円）',
      '月3回（30,000円）',
      '月4回（40,000円）',
      '初回トライアル 90分 3,000円（通常14,000円・税込）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['姿勢改善', '産前産後ケア', '体質改善', 'ボディメイク'],
    },
    basicInfo: {
      hours: '9:00〜21:00',
      closed: '年末年始',
      facilities: ['リフォーマー', '整体施術スペース', '完全プライベート空間', '更衣室'],
    },
  },
  {
    name: 'the SILK 藤沢店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=X10489B.1.E162842X.U1357808',
    image: '/images/studios/the-silk.webp',
    price: 'グループ月4回(Standard4) 15,280円 / 通い放題 22,280円（別途施設利用料月700円）/ パーソナル月2回 22,000円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', 'マシンピラティス専門', 'グループ＋パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオです。レベル別・部位別の豊富なグループプログラムとパーソナルレッスンを提供し、洗練された空間が特徴です。藤沢駅から徒歩1分です（情報引用元: the SILK公式サイト the-silk.co.jp）。',
    access: '藤沢駅から徒歩1分',
    address: '神奈川県藤沢市南藤沢22-1 神中第二ビル6階',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。藤沢エリアのスタジオのほとんどが初心者歓迎です。the SILKは初心者が80%、zen placeは初回体験1,000円（マットグループ）から始められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷調整しやすく初心者におすすめです。藤沢はマシン専門スタジオが充実しています。',
  },
  {
    question: '藤沢のピラティススタジオの料金相場は？',
    answer: 'グループ月4回で9,600円〜15,300円程度です。Pilates Meeは定額制で1回あたり3,750円です（※37,500円の通い放題コースを月10回利用した場合・公式の算出）。パーソナルはLa pilatesなら月1回12,000円〜です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回（月4〜8回）がおすすめです。慣れてきたら週2〜3回が目安です。大切なのは継続することです。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。2〜3ヶ月の継続が大切です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があれば問題ありません。the SILKは手ぶらで参加可能の無料体験、zen placeは初回1,000円（マットグループ）で体験可能です。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化に特化しています。ヨガは柔軟性とリラックス重視です。目的に合わせてお選びください。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: '感じ方には個人差があり、痛みや持病がある場合は医師への相談をおすすめします。La pilatesは、公式FAQによると、ピラティスの前に骨膜整体でゆがみのチェックとメンテナンスを行い、そのうえでマシンピラティスを行う形式です。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感される方が多くなっています。最低2ヶ月は継続することをおすすめします。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'パーソナルはN pilates studioやLa pilatesで効果的な指導を受けられます。グループはzen placeなら月4回10,450円からです。まずは体験レッスンで両方を試すことをおすすめします。',
  },
]

export default function FujisawaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '藤沢', url: 'https://biyori-pilates.com/area/fujisawa/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月11日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              ピラティス藤沢おすすめ6選<br className="hidden md:block" />
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
              <span className="text-warm-600">藤沢</span>
            </nav>
          </div>
        </section>
        <AreaConclusion studios={studios} areaName="藤沢" />


        <TableOfContents areaName="藤沢" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、藤沢エリアでおすすめのピラティススタジオ6選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>藤沢・湘南でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>体験レッスンが安いスタジオを知りたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>JR・小田急・江ノ電で通いやすいスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="藤沢" />
        <AreaMarketComparison studios={studios} areaName="藤沢" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              藤沢のおすすめピラティススタジオ6選
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
              藤沢のピラティス料金相場
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
                    <td className="px-4 py-3">6,600円〜22,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回あたり3,750円〜12,000円（※Pilates Meeは37,500円の通い放題コースを月10回利用した場合・公式の算出）</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜3,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              藤沢は海に近い開放的な雰囲気が魅力のエリアです。観光客向けの体験クラスからしっかり通える月額プランまで幅広く、リゾート感覚で通えるスタジオもあります。地元密着型スタジオは料金も良心的なのでご確認ください。近隣の湘南エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              藤沢でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR東海道線・小田急江ノ島線「藤沢駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  藤沢エリアのスタジオは藤沢駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートをご確認ください。藤沢駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">観光シーズンの混雑に備えた予約を</h3>
                <p className="text-warm-600 leading-relaxed">
                  藤沢は観光エリアとしても人気のため、GW・夏休み・年末年始は体験レッスンの申し込みが増加します。地元の方は観光シーズンを避けた平日昼間が快適に通える時間帯です。ビジター利用を受け付けるスタジオもあるので、旅行のついでに体験するのもおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">季節による料金プランの違いに注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  藤沢エリアでは季節限定のキャンペーンや、夏季限定の短期集中プランを提供するスタジオもあります。年間を通して通うなら月額制が割安ですが、特定の時期だけ通いたい方は回数券をご検討ください。入会時のキャンペーンは時期によって内容が変わるので、タイミングを見計らうのもポイントです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  藤沢エリアだけでなく、近隣の<Link href="/area/shonan/" className="text-warm-700 underline hover:text-warm-900">湘南</Link>、<Link href="/area/kamakura/" className="text-warm-700 underline hover:text-warm-900">鎌倉</Link>、<Link href="/area/yokohama/" className="text-warm-700 underline hover:text-warm-900">横浜</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                  <strong>藤沢エリアの豆知識：</strong>藤沢は海沿いのエリアならではの開放感が魅力です。特に夏場は汗をかきやすいので、制汗スプレーや替えのTシャツを持参すると快適です。海風で髪が乱れやすい時期は、ヘアバンドやヘアゴムも忘れずにご用意ください。
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
                  月額1万円以下で通えるリーズナブルなスタジオです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Pilates Mee（1回あたり3,750円 ※37,500円の通い放題コースを月10回利用した場合・公式の算出）</li>
                  <li className="text-warm-700">• zen place pilates（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• LOrena（1回 4,400円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  完全マンツーマン指導で効率よく取り組めます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• N pilates studio（子連れ可）</li>
                  <li className="text-warm-700">• La pilates（整体×ピラティス）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  藤沢駅から徒歩5分以内です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK（藤沢駅 徒歩1分）</li>
                  <li className="text-warm-700">• zen place pilates（藤沢駅 徒歩2分）</li>
                  <li className="text-warm-700">• N pilates studio（藤沢駅 徒歩4分）</li>
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
                週1〜2回（月4〜8回）から始めることをおすすめします。最低2〜3ヶ月継続で効果を実感できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回が目安です。3〜6ヶ月で目に見える変化が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続することをおすすめします。自分のペースが一番です。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループ・セミパーソナル中心です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Pilates Mee（1回あたり3,750円 ※37,500円の通い放題コースを月10回利用した場合・公式の算出）</li>
                  <li>• zen place（10,450円〜/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜16,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• the SILK</li>
                  <li>• zen place リフォーマー（15,400円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 20,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月2〜4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全パーソナルです。効果重視の方におすすめです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• La pilates（月2回 22,000円）</li>
                  <li>• zen place プライベート（38,280円〜）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              失敗しないピラティススタジオの選び方
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  ダイエット、姿勢改善、体幹強化、産前産後ケアなど、目的によって最適なスタジオは変わります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  藤沢エリアの料金相場はグループ月4回で9,600円〜15,300円です。入会金やレンタル料もご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  the SILKは無料体験、zen placeは初回1,000円（マットグループ）で体験可能です。体験レッスンで実際の雰囲気をご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  藤沢はJR東海道線・小田急江ノ島線・江ノ島電鉄が利用可能です。the SILKは駅徒歩1分、zen placeは徒歩2分と駅近スタジオが充実しています。
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
              本ページでは、藤沢のおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、藤沢に数多くあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
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
              初回限定の体験レッスン無料〜3,000円です。<br />
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
              <AreaModifierSections studios={studios} areaName="藤沢" />
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="fujisawa" areaName="藤沢" />

      {/* g1-link-202609 */}

      <div className="my-8 bg-white border border-warm-200 p-5">

        <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">店舗別ガイド</p>

        <p className="text-sm text-warm-700 font-light leading-relaxed mb-3">このエリアの店舗別に料金・体験レッスン・アクセスを整理した詳細ページがあります。</p>

        <div className="flex flex-wrap gap-2">

          <Link href="/brands/the-silk-fujisawa/" className="text-xs text-warm-800 border border-warm-300 bg-white px-3 py-1.5 hover:border-warm-500 transition-colors">the SILK 藤沢店の料金・体験を見る</Link>

        </div>

      </div>


      <RelatedAreas currentSlug="fujisawa" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
