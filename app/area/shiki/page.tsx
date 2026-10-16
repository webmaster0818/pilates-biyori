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
  alternates: { canonical: 'https://biyori-pilates.com/area/shiki/' },
  title: '【2026年10月最新】ピラティス志木おすすめ4選料金・体験レッスン・マシン対応を比較',
  description: '志木エリアのおすすめピラティススタジオ4選を比較しています。マシンピラティス、体験レッスン、料金相場、選び方まで詳しくご案内します。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,志木,埼玉,新座,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'URBAN CLASSIC PILATES 志木店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11337L.1.X156352B.U1357808',
    image: '/images/studios/urban-classic-pilates.webp',
    price: '月4回 7,800円〜',
    trial: '体験レッスン 0円',
    features: ['志木駅徒歩2分', '予約不要', 'サーキット形式', '30分完結'],
    description: 'マシンピラティスとファンクショナルトレーニングを組み合わせたサーキット形式のボディメイクスタジオです。志木駅から徒歩2分です。予約不要で仕事帰りや買い物ついでに通えるのが最大の魅力です。30分で効率的にトレーニングです。',
    access: '東武東上線「志木駅」徒歩2分',
    address: '埼玉県新座市東北2-35-19 oriiro志木 2階',
    popularPlan: {
      name: 'マンスリー4（月4回）',
      description: 'マシンピラティス＋ファンクショナルトレーニング月4回です。予約不要です。',
      price: '月4回 7,800円（税込）',
    },
    options: [
      'マンスリー8（月8回）',
      '通い放題プラン（14,080円）',
      '体験レッスン 0円',
      '入会金・事務手数料あり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ボディメイク', '運動不足解消', '姿勢改善', 'ダイエット'],
    },
    basicInfo: {
      hours: '平日 9:30〜21:30 / 土祝 9:30〜19:30',
      closed: '日曜日',
      facilities: ['リフォーマーマシン', 'ファンクショナルトレーニング器具', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'ピラティスミラー 志木',
    image: '/images/studios/pilates-mirror.webp',
    price: '月6回 11,000円',
    trial: '体験レッスン 2,200円',
    features: ['志木駅徒歩2分', 'KONAMI運営', '天井ミラー', '30分レッスン'],
    description: 'KONAMIが運営するマシンピラティススタジオです。志木駅南口から徒歩2分です。天井に鏡を設置した独自の空間で、自分の動きを確認しながらレッスンできます。1レッスン30分で忙しい方にも最適です。',
    access: '東武東上線「志木駅」南口 徒歩2分',
    address: '埼玉県新座市東北2-30-13 志木駅前ハイツ',
    popularPlan: {
      name: '月会費プラン（月6回）',
      description: 'マシンピラティスグループレッスン月6回までです。追加利用も可能です。',
      price: '月6回 11,000円（税込）',
    },
    options: [
      '追加利用（1回 1,100円）',
      'プライベート30分（4,400円）',
      'プライベート50分（6,600円）',
      '入会金 11,000円',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', '健康維持', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '10:00〜21:00',
      closed: '不定休（施設に準ずる）',
      facilities: ['リフォーマーマシン', '天井ミラー', 'フィッティングルーム（カーテン仕切り）', '荷物置きBOX（鍵なし）'],
    },
  },
  {
    name: 'パーソナルマシンピラティス SAKURA 志木店',
    image: '/images/studios/sakura-pilates-gotanda.webp',
    price: '1回 7,975円〜',
    trial: '体験レッスン 5,500円',
    features: ['女性専用', '志木駅徒歩1分', '完全パーソナル', 'マンツーマン'],
    description: '女性専用の完全パーソナルマシンピラティススタジオです。志木駅南口より徒歩1分です。一人ひとりの目標や体の状態に合わせたオーダーメイドレッスンです。朝8時から夜21:30まで営業しています。',
    access: '東武東上線「志木駅」南口 徒歩1分',
    address: '埼玉県新座市東北2-1-13 ミュージション志木 806',
    popularPlan: {
      name: '月8回コース',
      description: '完全パーソナルマシンピラティス月8回です。マンツーマン指導です。',
      price: '月8回 63,800円（税込）',
    },
    options: [
      '月4回コース',
      '月12回コース',
      '体験レッスン 5,500円',
      'カウンセリング付き',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['姿勢改善', 'ボディメイク', '産後ケア', 'リハビリ'],
    },
    basicInfo: {
      hours: '8:00〜21:30',
      closed: '年末年始（12/29〜1/3）',
      facilities: ['リフォーマーマシン', 'プライベートルーム', '更衣室'],
    },
  },
  {
    name: 'SOELU 志木スタジオ',
    image: '/images/studios/soelu-minamikoshigaya.webp',
    price: '月額 7,678円〜',
    trial: '無料体験あり',
    features: ['女性専用', 'ヨガ・ピラティス複合', 'よもぎ蒸し', 'オンライン併用'],
    description: '女性専用のマシンピラティス＆フィットネススタジオです。マシンピラティス、ヨガ、よもぎ蒸しが楽しめる複合型です。オンラインレッスンも利用可能で自宅でもトレーニングが続けられます。',
    access: '東武東上線「志木駅」徒歩3分',
    address: '埼玉県新座市東北2丁目',
    popularPlan: {
      name: 'ピラティス4プラン',
      description: 'スタジオレッスン＋マシンピラティス月4回＋よもぎ蒸し＋オンラインです。',
      price: '月額 9,878円（税込）',
    },
    options: [
      'スタンダードプラン（7,678円/月）',
      'プレミアムプラン（13,178円/月・全サービス使い放題）',
      'マシンピラティス追加チケット（1回 1,500円）',
      '施設維持費あり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '冷え性改善', 'ストレス解消', '健康維持'],
    },
    basicInfo: {
      hours: '9:00〜21:00',
      closed: '不定休',
      facilities: ['リフォーマーマシン', 'ヨガスタジオ', 'よもぎ蒸し', '更衣室', 'ロッカー'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも志木のスタジオに通えますか？',
    answer: '問題ありません。志木エリアのスタジオはほとんどが初心者歓迎です。URBAN CLASSIC PILATESは予約不要のサーキット形式で気軽に始められ、ピラティスミラーは天井ミラーで自分のフォームを確認しながら学べます。',
  },
  {
    question: '志木のピラティスの料金相場はどのくらいですか？',
    answer: 'グループ月4回で7,800円〜11,000円程度です。URBAN CLASSIC PILATESが月4回7,800円〜と最もリーズナブルです。SOELUは月額7,678円〜でヨガ・よもぎ蒸しも楽しめます。',
  },
  {
    question: '志木駅から近いスタジオはどこですか？',
    answer: 'SAKURA志木店が徒歩1分で最寄りです。URBAN CLASSIC PILATESとピラティスミラーがともに徒歩2分です。SOELUは徒歩3分です。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'URBAN CLASSIC PILATES志木店、ピラティスミラー志木は男性も利用可能です。SAKURA志木店とSOELU志木は女性専用です。',
  },
  {
    question: '無料で体験できるスタジオはどこですか？',
    answer: 'URBAN CLASSIC PILATES（0円体験）とSOELU（無料体験）が無料体験可能です。ピラティスミラーは体験2,200円です。',
  },
  {
    question: '予約不要で通えるスタジオはありますか？',
    answer: 'URBAN CLASSIC PILATES志木店は予約不要のサーキット形式です。思い立った時にすぐ通えるのが魅力です。他のスタジオは基本的に事前予約が必要です。',
  },
  {
    question: 'パーソナルレッスンが受けられるスタジオは？',
    answer: 'SAKURA志木店は完全パーソナル専門で1回7,975円〜です。ピラティスミラーは30分4,400円でプライベートレッスン可能です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。URBAN CLASSIC PILATESは30分完結なので、忙しい方でも週2〜3回通いやすいです。大切なのは継続することです。',
  },
  {
    question: 'ピラティスとヨガ両方楽しめるスタジオは？',
    answer: 'SOELUはマシンピラティスとヨガの両方が楽しめ、よもぎ蒸しも利用可能です。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。姿勢改善は比較的早く実感でき、ボディメイク効果は3ヶ月程度で目に見える変化が現れます。',
  },
]

export default function ShikiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '志木', url: 'https://biyori-pilates.com/area/shiki/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月12日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス志木おすすめ4選<br className="hidden md:block" />
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
              <span className="text-warm-600">志木</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="志木" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、志木エリアでおすすめのピラティススタジオ4選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>志木でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>予約不要で通えるスタジオを知りたい</span>
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

        <PriceComparisonTable studios={studios} areaName="志木" />
        <AreaMarketComparison studios={studios} areaName="志木" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              志木のおすすめピラティススタジオ4選
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
              志木のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">7,800円〜11,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 4,400円〜7,975円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜5,500円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              志木エリアは東武東上線沿線の中でもリーズナブルなスタジオが多く、URBAN CLASSIC PILATESは月4回7,800円〜と非常に割安なエリアです。都心のスタジオと比較して3〜5割安い料金設定のスタジオもあり、初めてピラティスを始める方にとって敷居が低い点が魅力です。近隣の<Link href="/area/urawa/" className="text-warm-700 underline hover:text-warm-900">浦和</Link>や<Link href="/area/ikebukuro/" className="text-warm-700 underline hover:text-warm-900">池袋</Link>エリアのスタジオとも比較のうえご検討ください。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              志木でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">東武東上線「志木駅」南口方面にスタジオが集中</h3>
                <p className="text-warm-600 leading-relaxed">
                  志木エリアのスタジオは主に志木駅南口方面に集中しています。SAKURA志木店は南口徒歩1分、URBAN CLASSIC PILATESとピラティスミラーは徒歩2分です。初回訪問時は余裕を持って到着できるよう、事前にルートをご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">サーキット形式とスタジオ形式の違いを理解する</h3>
                <p className="text-warm-600 leading-relaxed">
                  志木にはサーキット形式（URBAN CLASSIC PILATES）とスタジオ形式（ピラティスミラー等）の異なるタイプのスタジオがあります。サーキット形式は予約不要で自分のペースで進められますが、スタジオ形式はインストラクターの指導をしっかり受けられます。体験で両方試してみるのがおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">定休日に注意（日曜休みのスタジオあり）</h3>
                <p className="text-warm-600 leading-relaxed">
                  URBAN CLASSIC PILATES志木店は日曜日が定休日です。週末メインで通いたい方は、日曜も営業しているピラティスミラーやSAKURA、SOELUをご検討ください。自分のライフスタイルに合った営業日のスタジオを選ぶことが継続のコツです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">朝霞台・朝霞エリアも視野に入れよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  志木駅の隣にある<Link href="/area/asaka/" className="text-warm-700 underline hover:text-warm-900">朝霞台・朝霞</Link>エリアにもピラティススタジオがあります。東武東上線で1駅なので、通勤経路やライフスタイルに合わせて両エリアを比較検討すると、選択肢が広がります。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>URBAN CLASSICは30分</strong>なので、仕事着の上にレギンスを履いてサッと参加することも可能です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。マシンに引っかかる恐れがあるため、ピアス・ネックレス・腕時計はロッカーに預けるのが安全です。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>志木エリアの豆知識：</strong>志木駅周辺にはマルイファミリー志木やEQUiA志木など商業施設が充実しています。レッスン前後のお買い物や食事にも便利です。東武東上線で池袋まで約25分と都心へのアクセスも良好で、池袋のスタジオと志木のスタジオを使い分ける方もいらっしゃいます。
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
                  <li className="text-warm-700">• URBAN CLASSIC（月4回 7,800円〜）</li>
                  <li className="text-warm-700">• SOELU（月額 7,678円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• SAKURA 志木（完全パーソナル）</li>
                  <li className="text-warm-700">• SOELU 志木（よもぎ蒸し付き）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・予約不要</h3>
                <p className="text-warm-600 text-sm mb-4">
                  手軽に通えるスタジオです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• SAKURA（徒歩1分）</li>
                  <li className="text-warm-700">• URBAN CLASSIC（徒歩2分・予約不要）</li>
                  <li className="text-warm-700">• ピラティスミラー（徒歩2分）</li>
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
                <p className="text-3xl font-bold text-warm-800 mb-4">月4〜6回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスンが中心です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• URBAN CLASSIC（7,800円〜/月4回）</li>
                  <li>• SOELU（7,678円〜/月額）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜17,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4〜6回</p>
                <p className="text-sm text-warm-600 mb-4">
                  充実の設備で本格レッスンです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスミラー（11,000円/月6回）</li>
                  <li>• URBAN CLASSIC（14,080円/通い放題）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 16,000〜64,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">
                  マンツーマン指導で確実に効果です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• SAKURA（63,800円/月8回パーソナル）</li>
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
                  志木の料金相場はグループ月4回で7,800円〜11,000円です。都心と比べてリーズナブルなのが魅力です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  URBAN CLASSIC PILATESとSOELUは無料体験を実施しています。まずは気になるスタジオで体験してみることをおすすめします。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  志木は東武東上線で池袋まで約25分です。駅周辺にスタジオが集中しており、徒歩5分以内ですべてのスタジオに到着可能です。帰宅途中に通えるかどうかもチェックポイントです。
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
              今回は志木エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、志木にあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
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
              初回限定の体験レッスン無料〜5,500円です。<br />
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
      <ConsultantSection areaKey="shiki" areaName="志木" />

      <RelatedAreas currentSlug="shiki" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
