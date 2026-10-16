import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { AreaModifierSections } from '@/components/AreaModifierSections'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { AreaMarketComparison } from '@/components/AreaMarketComparison'
import { AreaConclusion } from '@/components/AreaConclusion'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/chofu/' },
  title: '【2026年10月最新】調布のピラティス｜初心者可・無料体験で選ぶ料金比較',
  description: '調布エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で比較しています。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,調布,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,ピラティスミラー,Rintosull,ELEMENT',
}

const studios = [
  {
    name: 'ピラティスミラー 調布',
    image: '/images/studios/pilates-mirror.webp',
    price: '月6回 11,000円',
    trial: '体験レッスン 2,200円',
    features: ['コナミ運営', '月6回プラン', 'プライベート30分4,400円', '調布駅近'],
    description: 'スポーツクラブ大手コナミが運営するピラティススタジオです。月6回11,000円のリーズナブルな価格設定で、無理なく通い続けられます。プライベートレッスンは30分4,400円で、一人ひとりの体の状態に合わせた丁寧な指導を受けられます。大手ならではの充実した設備と安定したサービス品質が魅力です。初心者から経験者まで幅広いレベルに対応しています。',
    access: '京王線「調布駅」から徒歩圏内',
    address: '東京都調布市小島町（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月6回プラン',
      description: 'コナミ運営の安心感です。月6回で無理なく続けられる人気プランです。プライベートレッスンの追加も可能です。',
      price: '月6回 11,000円（税込）',
    },
    options: [
      '月6回プラン（11,000円/月）',
      'プライベートレッスン（30分 4,400円）',
      '体験レッスン 2,200円',
      'コナミ施設との併用可能',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['健康維持', '姿勢改善', '体幹強化', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '施設の営業時間に準ずる（公式サイトでご確認ください）',
      closed: '施設休館日に準ずる',
      facilities: ['フィッティングルーム（カーテン仕切り）', '荷物置きBOX（鍵なし）'],
    },
  },
  {
    name: 'Rintosull 調布店',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683',
    image: '/images/studios/rintosull.webp',
    price: 'プレミアムプラン 月額10,978円（税込）',
    trial: '体験無料キャンペーン実施中',
    features: ['女性専用', 'マシンピラティス', '体験無料', 'LAVA系列'],
    description: 'ホットヨガLAVA系列の女性専用マシンピラティススタジオです。調布駅から徒歩圏内の好立地です。体験無料キャンペーンを実施中で、気軽にマシンピラティスを試せます。プレミアムプラン月額10,978円です（税込）。プレミアムフリーフルタイムプランならLAVA等系列店も利用可能で、ピラティスとヨガを両方楽しめます。初心者87%以上で安心して始められる環境です。',
    access: '京王線「調布駅」から徒歩圏内',
    address: '東京都調布市小島町1-35-5調布アミックスビル 3F',
    popularPlan: {
      name: 'プレミアムプラン',
      description: '女性専用マシンピラティスです。体験無料キャンペーン実施中です。LAVA系列店も利用可能なプランがあります。',
      price: '月額 10,978円（税込）',
    },
    options: [
      'プレミアムプラン（月額 10,978円/税込）',
      'プレミアムフリーフルタイム（LAVA等全店利用可）',
      '体験無料キャンペーン実施中',
      'パーソナル姿勢診断付き体験あり',
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
    name: 'ELEMENT 調布店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=U11199J.1.V154352I.U1357808',
    image: '/images/studios/element.webp',
    price: '1回 2,750円〜（通い放題型）',
    trial: '体験レッスンあり',
    features: ['通い放題パーソナル', '1回30分', '1回2,750円〜', 'マンツーマン'],
    description: '通い放題型のパーソナルピラティスジムです。1回30分の短時間集中型レッスンで、忙しい方でも無理なく通えます。1回あたり2,750円〜とパーソナルレッスンとしてはリーズナブルな価格設定です。マンツーマンで一人ひとりの目標や体の状態に合わせたオーダーメイドのプログラムを提供しています。通い放題なので、集中的にボディメイクしたい方にもおすすめです。',
    access: '京王線「調布駅」から徒歩圏内',
    address: '東京都調布市小島町（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '通い放題プラン',
      description: 'パーソナルレッスンが通い放題です。1回30分で忙しい方にもおすすめです。1回あたり2,750円〜と割安です。',
      price: '1回あたり 2,750円〜（税込）',
    },
    options: [
      '通い放題プラン（1回 2,750円〜）',
      '1回30分の短時間集中レッスン',
      'マンツーマン指導',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['ボディメイク', 'ダイエット', '体幹強化', '運動不足解消'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['ピラティスマシン', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Pilates Mee調布店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=F10273P.1.9146255O.U1357808',
    image: '/images/studios/pilates-mee.webp',
    price: 'セミパーソナル月4回 19,800円 / パーソナル月4回 39,600円（税込）',
    priceList: ['体験レッスン無料', 'セミパーソナル：月2回 11,000円／月4回 19,800円／通い放題 37,500円（税込）', 'パーソナル：月2回 22,000円／月4回 39,600円／月8回 70,400円（税込）'],
    trial: '体験レッスン無料',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオです。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯が特徴です。調布駅から徒歩3分です。',
    access: '調布駅 徒歩3分',
    address: '〒182-0024 東京都調布市布田1丁目26−7 やまとみビル101',
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', '柔軟性向上', 'ダイエット'],
    },
    basicInfo: {
      hours: '9:00〜21:15',
      closed: '不定休',
      facilities: ['女性専用トイレ', '着替えスペース', '全身鏡'],
    },

  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。調布エリアのスタジオはほとんどが初心者歓迎です。ピラティスミラー調布はコナミ運営で初心者向けクラスが充実しています。Rintosull調布店は初心者87%以上で安心です。ELEMENT調布店はマンツーマンなので自分のペースで進められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズ、マシンピラティスはリフォーマーなどの専用マシンを使用します。マシンはバネの力で負荷を調整できるため初心者にもおすすめです。調布エリアではRintosull・ELEMENTがマシンピラティスに対応しています。',
  },
  {
    question: '調布のピラティスの料金相場は？',
    answer: 'ピラティスミラー調布は月6回11,000円、Rintosull調布店はプレミアムプラン月額10,978円、ELEMENT調布店は通い放題で1回2,750円〜です。目的と頻度に合わせてお選びください。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回に増やすと効果を実感しやすくなります。ELEMENT調布店の通い放題プランなら毎日でも通えます。大切なのは無理なく継続することです。最低2〜3ヶ月続けることをおすすめします。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。ELEMENT調布店なら通い放題のパーソナルレッスンで効率的にボディメイクが可能です。2〜3ヶ月の継続で効果を実感する方が多いです。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があれば問題ありません。ピラティスミラー調布は体験2,200円、Rintosull調布店は体験無料キャンペーン実施中です。まずは体験レッスンへの参加をおすすめします。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'ピラティスミラー調布、ELEMENT調布店は男性も通えます。Rintosull調布店は女性専用です。',
  },
  {
    question: '調布駅からのアクセスは？',
    answer: '調布駅は京王線の特急停車駅で、新宿まで約15分の好アクセスです。各スタジオとも調布駅から徒歩圏内にあり、通いやすい立地です。',
  },
  {
    question: 'パーソナルレッスンを受けたいのですが？',
    answer: 'ELEMENT調布店は通い放題型のパーソナルジムで、1回30分のマンツーマンレッスンです。ピラティスミラー調布はプライベートレッスン30分4,400円です。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '個人差はありますが、2ヶ月を過ぎた頃から姿勢の改善や体の変化を実感する方が多いです。週1〜2回のペースで最低2〜3ヶ月は継続することをおすすめします。',
  },
]

export default function ChofuPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '調布', url: 'https://biyori-pilates.com/area/chofu/' },
      ]} />
      <main className="pt-20 bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月12日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026年7月最新】ピラティス調布おすすめ4選
              <br className="hidden md:block" />
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
              <span className="text-warm-600">調布</span>
            </nav>
          </div>
        </section>
        <AreaConclusion studios={studios} areaName="調布" />


        <TableOfContents areaName="調布" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              調布は京王線「調布駅」が最寄りで、新宿まで京王線特急で約15分という好アクセスのエリアです。映画の街として知られ、深大寺や神代植物公園など自然豊かな環境も魅力の街です。そんな調布エリアには、コナミ運営のスタジオから女性専用マシンピラティス、通い放題型パーソナルまで、多彩なピラティススタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、調布エリアでおすすめの実在するピラティススタジオ4選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>調布でピラティススタジオを探している</span>
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
                  <span>京王線沿線で通いやすいスタジオがいい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>料金プランを比較したい</span>
                </li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="調布" />
        <AreaMarketComparison studios={studios} areaName="調布" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              調布のおすすめピラティススタジオ4選
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
              調布のピラティス料金相場【2026年7月最新】
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
                    <td className="px-4 py-3">2,750円〜10,978円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 2,750円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜2,200円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              調布エリアは都心部と比較してテナント賃料が抑えめのため、同じ内容のレッスンでも料金がリーズナブルな傾向があります。通い放題プランの割安感が大きいエリアのため、週2回以上通える方には月額制プランをおすすめします。近隣の三鷹エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              調布でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">京王線「調布駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  調布エリアのスタジオは調布駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートをご確認ください。調布駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">スタジオ数が限られるため早めの予約を</h3>
                <p className="text-warm-600 leading-relaxed">
                  調布エリアは都心と比べてスタジオの選択肢が限られるため、人気のスタジオ・時間帯は予約が埋まりやすい傾向があります。特に土曜午前は混み合うことが多いので、1週間前には予約を入れておくのがおすすめです。車で通う方は駐車場の有無もご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">通い放題プランと回数制プランを比較検討</h3>
                <p className="text-warm-600 leading-relaxed">
                  調布エリアでは通い放題プランが都心部より割安に設定されていることが多いです。週2回以上通う場合は通い放題が割安ですが、月1〜2回のペースであれば回数券やドロップインの方が割安な場合もあります。自分の通う頻度を想定してプランをお選びください。初月は回数制で様子を見る方法もあります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  調布エリアだけでなく、近隣の<Link href="/area/mitaka/" className="text-warm-700 underline hover:text-warm-900">三鷹</Link>、<Link href="/area/seijo-gakuenmae/" className="text-warm-700 underline hover:text-warm-900">成城学園前</Link>、<Link href="/area/fuchu/" className="text-warm-700 underline hover:text-warm-900">府中</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用です。マシンに敷くタオルは、スタジオで用意されていることが多いです。</span></li>
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
                  <strong>調布エリアの豆知識：</strong>調布エリアは車で通う方も多いため、駐車場の有無や提携コインパーキングを事前にご確認ください。車なら荷物の心配が少ないので、シャワー後の着替えやヘアドライヤーなども余裕を持って準備できます。
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Search by Preference */}
        <section className="py-16 bg-white" id="kodawari">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">月額1万円台から始めることをおすすめします。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（月額 10,978円）</li>
                  <li className="text-warm-700">• ピラティスミラー（月6回 11,000円）</li>
                  <li className="text-warm-700">• ELEMENT（1回 2,750円〜 / 通い放題）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">マンツーマンで丁寧な指導です。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ELEMENT（通い放題パーソナル・30分）</li>
                  <li className="text-warm-700">• ピラティスミラー（プライベート30分 4,400円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用・安心</h3>
                <p className="text-warm-600 text-sm mb-4">女性専用や大手運営で安心です。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（女性専用・体験無料）</li>
                  <li className="text-warm-700">• ピラティスミラー（コナミ運営）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Frequency Guide */}
        <section className="py-16 bg-warm-50" id="frequency">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2>
            <div className="bg-white rounded-lg p-8 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週1〜2回からスタートするのがおすすめです。最低2〜3ヶ月継続することで効果を実感できます。ピラティスミラー調布の月6回プラン（11,000円）なら週1〜2回ペースで無理なく始められます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回が目安です。3〜6ヶ月で目に見える変化を実感できます。ELEMENT調布店の通い放題プランなら毎日でも通えて、1回30分だから忙しい方でも続けやすいです。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続することをおすすめします。Rintosull調布店はLAVA系列店も利用可能なプランがあり、ピラティスとヨガを組み合わせた健康管理が可能です。
              </p>
            </div>
          </div>
        </section>

        {/* Price Guide */}
        <section className="py-16 bg-white" id="price-guide">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜11,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4〜6回</p>
                <p className="text-sm text-warm-600 mb-4">手軽に始めたい方に適しています。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（10,978円/月）</li>
                  <li>• ピラティスミラー（11,000円/月6回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">通い放題プラン</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">1回2,750円〜</p>
                <p className="text-sm text-warm-600 mb-4">本気でボディメイクしたい方におすすめです。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ELEMENT（通い放題パーソナル）</li>
                  <li>• 1回30分の短時間集中型</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  ダイエット、姿勢改善、健康維持、体幹強化など、目的によって最適なスタジオは変わります。ボディメイクならELEMENT調布店の通い放題パーソナル、健康維持ならピラティスミラー調布の月6回プランがおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">レッスン形式を選ぶ</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  調布エリアはグループレッスン（ピラティスミラー）、マシンピラティス（Rintosull）、完全パーソナル（ELEMENT）と多彩な形式が揃っています。自分の好みや予算に合わせてお選びください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  Rintosull調布店は体験無料キャンペーン実施中です。まずは気軽に体験で雰囲気やインストラクターとの相性をご確認ください。ピラティスミラー調布は体験2,200円です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  調布駅は京王線特急の停車駅で、新宿まで約15分です。各スタジオとも調布駅から徒歩圏内にあります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white" id="faq">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-warm-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition">
                      <h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3>
                      <svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="py-16 bg-warm-50" id="summary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は調布エリアのおすすめピラティススタジオ4選をご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              調布は京王線特急で新宿まで約15分の好立地で、映画の街・自然豊かなエリアとして人気の街です。コナミ運営のピラティスミラー調布（月6回11,000円）、女性専用のRintosull調布店（体験無料）、通い放題型パーソナルのELEMENT調布店（1回2,750円〜）と、それぞれ特徴の異なるスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              まずは体験無料のRintosull調布店から試してみるのがおすすめです。本ページの情報を、スタジオ選びにお役立てください。
            </p>
            <p className="text-warm-700 font-medium text-center">本ページが、ピラティススタジオ選びの参考になれば幸いです。</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンのご予約</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              Rintosull調布店は体験無料キャンペーン実施中です。<br />
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
              <AreaModifierSections studios={studios} areaName="調布" />
      </main>
        {/* boost-nav-202606 */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-warm-900 mb-3">📍 近隣エリア・料金データで比較する</h2>
              <p className="text-warm-600 text-sm mb-4">通勤・生活圏のスタジオもあわせて比べると、自分に合った1校が見つかりやすくなります。</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/area/sengawa/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">仙川</Link>
                <Link href="/area/kichijoji/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">吉祥寺</Link>
                <Link href="/area/mitaka/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">三鷹</Link>
                <Link href="/area/musashisakai/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">武蔵境</Link>
                <Link href="/articles/pilates-ryokin-hakusho/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国ピラティス料金白書2026</Link>
              </div>
            </div>
          </div>
        </section>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="chofu" areaName="調布" />

      <RelatedAreas currentSlug="chofu" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
