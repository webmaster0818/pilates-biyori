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
  alternates: { canonical: 'https://biyori-pilates.com/area/honatsugi/' },
  title: '【2026年10月最新】本厚木のピラティス4社を比較｜無料体験2社・月額最安8,800円〜',
  description: '本厚木エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で比較しています。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,本厚木,厚木,神奈川,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK 厚木ガーデンシティ店',
    officialUrl: 'https://t.afi-b.com/visit.php?a=O11543l-G384824n&p=E9887623',
    image: '/images/studios/pilates-k.webp',
    price: '月4回 13,420円〜',
    trial: '体験レッスン 無料（0円）',
    features: ['女性専用', '本厚木駅徒歩3分', '商業施設内', '体験0円'],
    description: '女性専用マシンピラティス専門スタジオです。本厚木駅東口から徒歩3分の厚木ガーデンシティ4Fです。音楽に合わせた楽しいレッスンと部位別ボディメイクプログラムが充実しています。体験レッスン0円で気軽にスタートできます。',
    access: '小田急小田原線「本厚木駅」東口 徒歩3分',
    address: '神奈川県厚木市中町1-5-10 厚木ガーデンシティ 4F',
    popularPlan: {
      name: 'マンスリー4メンバー（月4回）',
      description: '女性専用マシンピラティス月4回です。部位別プログラムも選べます。',
      price: '月4回 13,420円（税込）',
    },
    options: [
      'マンスリーフルメンバー（通い放題 16,170円）',
      'マンスリーデイメンバー（平日昼 12,320円）',
      '体験レッスン 0円',
      '入会金 5,500円（キャンペーン時無料あり）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '火金 10:00-15:00,17:00-21:30 / 水 10:00-14:00,17:00-21:30 / 木 17:00-21:30 / 土祝 10:00-18:30 / 日 10:00-17:30',
      closed: '月曜日',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'Rintosull 本厚木店',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683',
    image: '/images/studios/rintosull.webp',
    price: '月4回 8,800円〜',
    trial: '体験レッスン 無料（0円）',
    features: ['LAVA系列', 'マシン専門', '本厚木駅徒歩1分', '割安'],
    description: 'ホットヨガLAVA系列の女性専用マシンピラティススタジオです。本厚木駅から徒歩1分です。月4回8,800円のリーズナブルな料金設定です。87%以上が初心者で未経験者も安心です。体験当日入会で入会金・登録金無料キャンペーンがあります。',
    access: '小田急小田原線「本厚木駅」徒歩1分',
    address: '神奈川県厚木市中町2-2-8 厚木センタービル 3F',
    popularPlan: {
      name: 'マシンピラティス月4回プラン',
      description: 'リフォーマーを使った本格マシンピラティスです。1回あたり2,200円と割安です。',
      price: '月4回 8,800円（税込）',
    },
    options: [
      '通い放題プラン',
      'プレミアムフリーフルタイム（LAVA等系列店も利用可）',
      '施設使用料 毎月2,500円',
      '体験当日入会で入会金・登録金 無料',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', 'ヨガ&ピラティス両方', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'シャワー'],
    },
  },
  {
    name: 'WECLE 本厚木店',
    image: '/images/studios/wecle-pilates.webp',
    price: '月額 9,680円〜（通い放題）',
    trial: '体験レッスンあり',
    features: ['24時間営業', '予約不要', '通い放題', '本厚木駅徒歩1分'],
    description: '30分サーキット型マシンピラティスです。本厚木駅から徒歩1分、24時間営業です。予約不要・着替え不要の通い放題で、忙しい方でも気軽に通えます。セミパーソナル形式でトレーナーのサポートも受けられます。',
    access: '小田急小田原線「本厚木駅」徒歩1分',
    address: '神奈川県厚木市中町2-1-18 Trunk本厚木 6F',
    popularPlan: {
      name: 'ベーシックプラン（通い放題）',
      description: '30分サーキット型マシンピラティス通い放題です。予約不要で24時間利用可能です。',
      price: '月額 9,680円〜（税込）',
    },
    options: [
      'シンプルプラン',
      'プログレスプラン',
      'AI姿勢分析',
      '着替え不要・手ぶらで参加可能',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['運動不足解消', '姿勢改善', 'ダイエット', '体幹強化'],
    },
    basicInfo: {
      hours: '24時間営業（スタッフ：平日10:00-20:00 / 土日祝10:00-18:00）',
      closed: '年中無休',
      facilities: ['リフォーマーマシン', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'STUDIO SLOW',
    image: '/images/studios/studio-slow-honatsugi.webp',
    price: 'プライベート 1回 8,000円〜',
    trial: '体験レッスンあり',
    features: ['マスタートレーナー在籍', '少人数制', 'カフェ併設', 'ヨガも受講可'],
    description: '本厚木初のマシンピラティス・ヨガスタジオです。DK/Bodyネバダ州立大学公認のピラティスマスタートレーナーが3名在籍です。プライベートレッスン中心の少人数制です。1階にカフェ併設でレッスン前後にくつろげます。',
    access: '小田急小田原線「本厚木駅」徒歩7分',
    address: '神奈川県厚木市中町（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'プライベートレッスン',
      description: 'マスタートレーナーによる完全パーソナルのマシンピラティスです。',
      price: '1回 8,000円〜（税込）',
    },
    options: [
      'セミプライベート（2名）',
      'グループレッスン（マット・ヨガ・最大5名）',
      'カフェ利用可',
      '月額制プランあり',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'リハビリ', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', 'カフェスペース', '更衣室'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。本厚木エリアのスタジオはほとんどが初心者歓迎です。Rintosullは87%以上が初心者、ピラティスKは体験0円で気軽にスタートできます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷調整しやすく初心者におすすめです。本厚木はマシン専門スタジオが充実しています。',
  },
  {
    question: '本厚木のピラティスの料金相場は？',
    answer: 'グループ月4回で8,800円〜13,420円程度です。Rintosullが月4回8,800円で最安級です。WECLEは通い放題9,680円〜です。アルモニは1回1,485円〜と格安です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回が目安です。WECLEなら24時間・通い放題で好きなだけ通えます。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。2〜3ヶ月の継続が大切です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があれば問題ありません。ピラティスKとRintosullは無料体験を実施しています。WECLEは着替え不要で手ぶらで参加可能です。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化しています。ヨガは柔軟性とリラックス重視です。アルモニやSTUDIO SLOWは両方楽しめます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'WECLEとSTUDIO SLOWは男性も通えます。ピラティスKとRintosullは女性専用です。',
  },
  {
    question: '24時間営業のスタジオはありますか？',
    answer: 'WECLE本厚木店は24時間営業で予約不要です。早朝や深夜でも自分のペースで通えます。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感される方が多くなっています。最低2ヶ月は継続することをおすすめします。',
  },
]

export default function HonatsugiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '本厚木', url: 'https://biyori-pilates.com/area/honatsugi/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月11日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              ピラティス本厚木おすすめ4選<br className="hidden md:block" />
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
              <span className="text-warm-600">本厚木</span>
            </nav>
          </div>
        </section>
        <AreaConclusion studios={studios} areaName="本厚木" />


        <TableOfContents areaName="本厚木" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、本厚木・厚木エリアでおすすめのピラティススタジオ4選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>本厚木でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>体験レッスンが無料のスタジオを知りたい</span>
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

        <PriceComparisonTable studios={studios} areaName="本厚木" />
        <AreaMarketComparison studios={studios} areaName="本厚木" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              本厚木のおすすめピラティススタジオ4選
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
              本厚木のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">8,000円〜13,420円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 8,000円〜13,420円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜3,000円程度</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              本厚木エリアは都心部と比較してテナント賃料が抑えめのため、同じ内容のレッスンでも料金がリーズナブルな傾向があります。通い放題プランの割安感が大きいエリアのため、週2回以上通える方には月額制プランをおすすめします。近隣の相模大野エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              本厚木でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">小田急小田原線「本厚木駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  本厚木エリアのスタジオは本厚木駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートをご確認ください。本厚木駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">スタジオ数が限られるため早めの予約を</h3>
                <p className="text-warm-600 leading-relaxed">
                  本厚木エリアは都心と比べてスタジオの選択肢が限られるため、人気のスタジオ・時間帯は予約が埋まりやすい傾向があります。特に土曜午前は混み合うことが多いので、1週間前には予約を入れておくのがおすすめです。車で通う方は駐車場の有無もご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">通い放題プランと回数制プランを比較検討</h3>
                <p className="text-warm-600 leading-relaxed">
                  本厚木エリアでは、通い放題プランが都心部より割安に設定されている傾向があります。週2回以上通う場合は通い放題が割安ですが、月1〜2回のペースであれば回数券やドロップインの方が割安な場合もあります。自分の通う頻度を想定してプランをお選びください。初月は回数制で様子を見る方法もあります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  本厚木エリアだけでなく、近隣の<Link href="/area/sagami-ono/" className="text-warm-700 underline hover:text-warm-900">相模大野</Link>、<Link href="/area/machida/" className="text-warm-700 underline hover:text-warm-900">町田</Link>、<Link href="/area/fujisawa/" className="text-warm-700 underline hover:text-warm-900">藤沢</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                  <strong>本厚木エリアの豆知識：</strong>本厚木エリアは車で通う方も多いため、駐車場の有無や提携コインパーキングを事前にご確認ください。車なら荷物の心配が少ないので、シャワー後の着替えやヘアドライヤーなども余裕を持って準備できます。
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
                  月額1万円以下で通えるスタジオです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li>
                  <li className="text-warm-700">• WECLE（通い放題 9,680円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">本格派・パーソナル</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マスタートレーナーに学びます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STUDIO SLOW（プライベート 8,000円〜/回）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  本厚木駅から徒歩3分以内です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（駅徒歩1分）</li>
                  <li className="text-warm-700">• WECLE（駅徒歩1分）</li>
                  <li className="text-warm-700">• ピラティスK（駅徒歩3分）</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回〜通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  料金重視のグループです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（8,800円/月4回）</li>
                  <li>• WECLE（9,680円〜/通い放題）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜16,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回〜通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン専門スタジオです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（13,420円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 8,000円〜/回</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">
                  マスタートレーナー指導です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• STUDIO SLOW（8,000円〜/回）</li>
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
                  本厚木の料金相場はグループ月4回で8,800円〜13,420円です。入会金やキャンペーンもご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  ピラティスKとRintosullは無料体験を実施しています（0円）。アルモニは1,100円で体験可能です。体験レッスンで実際の雰囲気をご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  本厚木エリアは小田急線が利用可能です。Rintosull・WECLEは駅徒歩1分、ピラティスKは徒歩3分と駅近スタジオが揃っています。
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
              本ページでは、本厚木エリアのおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、本厚木にあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
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
              初回限定の体験レッスン無料〜1,100円です。<br />
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
              <AreaModifierSections studios={studios} areaName="本厚木" />
      </main>
        {/* boost-nav-202606 */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-warm-900 mb-3">📍 近隣エリア・料金データで比較する</h2>
              <p className="text-warm-600 text-sm mb-4">通勤・生活圏のスタジオもあわせて比べると、自分に合った1校が見つかりやすくなります。</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/area/ebina/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">海老名</Link>
                <Link href="/articles/pilates-ryokin-hakusho/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国ピラティス料金白書2026</Link>
              </div>
            </div>
          </div>
        </section>


      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="honatsugi" areaName="本厚木" />

                  {/* g1-link-202607 */}
            <div className="my-8 bg-white border border-warm-200 p-5">
              <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">店舗別ガイド</p>
              <p className="text-sm text-warm-700 font-light leading-relaxed mb-3">このエリアの店舗別に料金・体験レッスン・アクセスを整理した詳細ページがあります。</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/brands/rintosull-honatsugi/" className="text-xs text-warm-800 border border-warm-300 bg-white px-3 py-1.5 hover:border-warm-500 transition-colors">Rintosull 本厚木店の料金・体験を見る</Link>
              </div>
            </div>
      <RelatedAreas currentSlug="honatsugi" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
