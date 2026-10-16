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
  alternates: { canonical: 'https://biyori-pilates.com/area/senri-chuo/' },
  title: '【2026年10月最新】ピラティス千里中央おすすめ3選人気スタジオの料金プランの比較',
  description: '千里中央エリアのおすすめピラティススタジオ3選を比較しています。マシンピラティス、体験レッスン、料金相場、選び方まで詳しくご案内します。千里ニュータウンで初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,千里中央,豊中,千里ニュータウン,北摂,大阪,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 千里中央',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp', reviewCount: 138,
    price: '月4回 9,625円〜', trial: 'グループ体験 1,000円',
    features: ['千里中央駅徒歩3分', '男性利用可', 'マット&マシン', '全国他店利用'],
    description: 'ピラティス専門の大手スタジオです。千里中央駅北口から徒歩3分の好立地です。マットグループ・マシングループ・プライベートの3タイプから選べます。全国150店舗以上で他店利用可能です。科学的知見に基づいた質の高い指導が特徴です。',
    access: '北大阪急行「千里中央駅」北口 徒歩3分',
    address: '大阪府豊中市新千里東町1丁目4-2 千里ライフサイエンスセンタービル 2階',
    popularPlan: { name: 'フリープラン（マットグループ）', description: 'マットグループレッスン通い放題です。全国店舗で他店利用可能です。', price: '月額 14,960円〜（税込）' },
    options: ['月4回プラン（9,625円〜）', 'マシングループ体験（3,000円）', 'プライベートレッスン', '体験当日入会で入会金無料'],
    userProfile: { ageRange: '30代〜60代が中心', genderRatio: '女性75% / 男性25%', purpose: ['姿勢改善', '体幹強化', '健康維持', 'リフレッシュ'] },
    basicInfo: { hours: '月〜金 10:00〜20:00 / 土日祝 10:00〜16:00', closed: '不定休', facilities: ['リフォーマー', 'マット', 'ロッカー', '更衣室'] },
  },
  {
    name: 'WECLE（ウィークル）せんちゅうパル店',
    image: '/images/studios/wecle-pilates.webp', reviewCount: 105,
    price: '月額 9,800円〜', trial: '体験レッスンあり',
    features: ['駅直結', '24時間営業', '予約不要', '1回30分'],
    description: '千里中央駅直結・せんちゅうパル内のマシンピラティス専門スタジオです。24時間営業で予約不要・着替え不要です。1回30分のサーキット形式で、忙しい方でもスキマ時間に通えます。セミパーソナル形式でトレーナーのサポートがあります。',
    access: '北大阪急行「千里中央駅」直結（せんちゅうパル内）',
    address: '大阪府豊中市新千里東町（せんちゅうパル内）',
    popularPlan: { name: '通い放題プラン', description: '24時間利用可能です。予約不要・着替え不要のサーキット型ピラティスです。', price: '月額 9,800円〜（税込）' },
    options: ['通い放題プラン', '体験レッスンあり', '予約不要', '24時間営業'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['運動不足解消', '体幹強化', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: '24時間営業（スタッフ常駐時間は公式サイトでご確認ください）', closed: '年中無休', facilities: ['リフォーマー', 'サーキットマシン', 'ロッカー'] },
  },
  {
    name: 'ピラティスミラー 千里中央',
    image: '/images/studios/pilates-mirror.webp', reviewCount: 82,
    price: '月額 11,000円（月6回）', trial: '体験レッスン 2,200円',
    features: ['女性専用', 'コナミ運営', '1回30分', '鏡活用レッスン'],
    description: 'コナミスポーツクラブが展開する女性専用マシンピラティススタジオです。「鏡」を活用したレッスンで自分のフォームを確認しながら効果的にトレーニングです。1回30分の少人数制で初心者にもおすすめです。',
    access: '北大阪急行「千里中央駅」徒歩圏内',
    address: '大阪府豊中市新千里エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '月会員プラン', description: '女性専用です。鏡を活用した30分マシンピラティスです。月6回までです。', price: '月額 11,000円（税込）' },
    options: ['月6回まで利用可能', '7回目以降 1回1,100円', '体験レッスン2,200円', '入会金11,000円'],
    userProfile: { ageRange: '30代〜60代が中心', genderRatio: '女性100%（女性専用）', purpose: ['姿勢改善', 'ボディメイク', '健康維持', '運動不足解消'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'ミラー', 'フィッティングルーム（カーテン仕切り）', '荷物置きBOX（鍵なし）'] },
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '問題ありません。千里中央エリアのスタジオはほとんどが初心者歓迎です。WECLEは30分サーキット形式で手軽に始められ、zen placeは丁寧な指導で初心者にも安心です。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷調整しやすく初心者におすすめです。千里中央はマシン専門スタジオが充実しています。' },
  { question: '千里中央のピラティスの料金相場は？', answer: 'グループ月4回で9,625円〜13,000円程度です。WECLEが月額9,800円〜と通い放題がリーズナブルです。ピラティスミラーは月額11,000円で月6回までです。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1〜2回がおすすめです。慣れたら週2〜3回に増やすと効果的です。WECLEは24時間・予約不要なので毎日でも気軽に通えます。' },
  { question: 'ピラティスで痩せますか？', answer: 'インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。2〜3ヶ月の継続で体の変化を実感される方が多くなっています。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があれば問題ありません。WECLEは着替え不要で普段着でも可能です。zen placeはグループ体験1,000円で試せます。靴下（グリップソックス推奨）も忘れずにご用意ください。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'zen place千里中央とWECLEは男性も通えます。ピラティスミラーは女性専用です。' },
  { question: '千里中央と江坂で迷っています', answer: '千里中央は北大阪急行の終点で千里ニュータウンの中心地です。ファミリー層が多く落ち着いた雰囲気です。江坂はオフィス街で会社帰りに便利です。どちらもzen placeは他店利用可能なので両方通うこともできます。' },
  { question: '子連れでも通えますか？', answer: '千里中央エリアはファミリー層が多く、託児サービスのあるスタジオもあります。各スタジオに事前に問い合わせることをおすすめします。WECLEは30分で終わるので、お子さんの習い事の待ち時間に通う方もいます。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感される方が多くなっています。姿勢改善は比較的早く、ボディメイクは3ヶ月程度の継続がおすすめです。' },
]

export default function SenriChuoPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '千里中央', url: 'https://biyori-pilates.com/area/senri-chuo/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月12日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス千里中央おすすめ3選<br className="hidden md:block" />
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
              <span className="text-warm-600">千里中央</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="千里中央" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、千里中央エリアでおすすめのピラティススタジオ3選をまとめました。千里中央は北大阪急行と大阪モノレールが交差するターミナル駅で、千里ニュータウンの中心地です。ファミリー層が多く住む閑静な住宅地として人気のエリアです。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>千里中央でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>千里ニュータウンで通いやすいスタジオがいい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>忙しい子育て中でもスキマ時間に通えるスタジオを探している</span>
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

        <PriceComparisonTable studios={studios} areaName="千里中央" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              千里中央のおすすめピラティススタジオ3選
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
              千里中央のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">9,625円〜13,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">通い放題プラン</td>
                    <td className="px-4 py-3">月額 9,800円〜14,960円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">1,000円〜2,200円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              千里中央は北摂エリアの中心地で、梅田に比べて料金はやや抑えめです。WECLEの24時間通い放題など、費用対効果の良い選択肢が揃っています。近隣の<Link href="/area/toyonaka/" className="text-warm-700 underline hover:text-warm-900">豊中</Link>エリアと比較検討される方も少なくありません。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              千里中央でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">駅直結・駅近スタジオを活用する</h3>
                <p className="text-warm-600 leading-relaxed">
                  千里中央は駅直結のせんちゅうパルにWECLEがあり、天候に左右されず通えるのが魅力です。特に雨の日や暑い日でも快適にアクセスできます。買い物のついでに寄れるのも千里中央ならではのメリットです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">ファミリー層が多いエリアの特性を活かす</h3>
                <p className="text-warm-600 leading-relaxed">
                  千里ニュータウンはファミリー層が多く住むエリアです。平日日中のレッスンは主婦の方に人気があり、同年代の仲間と一緒にモチベーションを保つことができます。WECLEの30分レッスンはお子さんの習い事の待ち時間にも活用できます。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">北大阪急行延伸で箕面方面からもアクセス向上</h3>
                <p className="text-warm-600 leading-relaxed">
                  2024年に北大阪急行が箕面萱野駅まで延伸し、箕面方面からのアクセスが向上しました。ただし千里中央は従来通り多くの路線バスが発着するターミナルです。バス利用の方は最終バスの時間を考慮してレッスン時間をお選びください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">モノレール沿線の方は千里中央が便利</h3>
                <p className="text-warm-600 leading-relaxed">
                  大阪モノレールで万博記念公園方面や門真方面から通う方にとっても、千里中央は乗り換え地点として便利です。モノレール沿線にはピラティススタジオが少ないため、千里中央に集約して通うのがおすすめです。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：レッスン中の水分補給に必要です。せんちゅうパル内にコンビニもあります。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用です。マシンに敷くタオルは、スタジオで用意されている場合が一般的です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは、靴下の着用が必須のスタジオが多数あります。グリップソックスが適しています。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>をお選びください。ピラティスは脚を大きく動かすエクササイズが多いため、伸縮性のある素材が適しています。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>WECLEなら着替え不要</strong>。普段着でそのまま通えるので、買い物ついでに立ち寄れます。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>の方が、インストラクターがフォームを確認しやすく、効果的な指導を受けられます。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。マシンに引っかかる恐れがあるため、ピアス・ネックレス・腕時計はロッカーに預けるのが安全です。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>千里中央エリアの豆知識：</strong>千里中央はせんちゅうパルやよみうり文化センターなど商業施設が充実しています。レッスン後にカフェでリラックスしたり、買い物を楽しんだりと、ライフスタイル全体を充実させやすいエリアです。千里中央公園も近く、緑豊かな環境でリフレッシュできます。
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
                  通い放題プランでお得に通えます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• WECLE（月額 9,800円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">忙しい方向け</h3>
                <p className="text-warm-600 text-sm mb-4">
                  短時間・予約不要で通えます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• WECLE（24時間・予約不要・30分）</li>
                  <li className="text-warm-700">• ピラティスミラー（1回30分）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">本格派</h3>
                <p className="text-warm-600 text-sm mb-4">
                  質の高いインストラクションです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place（正統派ピラティス）</li>
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
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  費用を抑えたい方におすすめです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• WECLE（9,800円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜13,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回〜6回</p>
                <p className="text-sm text-warm-600 mb-4">
                  週1〜2回の丁寧なレッスンです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place月4回（9,625円〜）</li>
                  <li>• ピラティスミラー月6回（11,000円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 15,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題＋プライベート</p>
                <p className="text-sm text-warm-600 mb-4">
                  高い頻度で本格的に取り組めます。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen placeフリー（14,960円〜）</li>
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
                  千里中央の料金相場は通い放題で9,800円〜、月4回で9,625円〜です。入会金やキャンペーンもご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  zen placeはグループ体験1,000円、ピラティスミラーは2,200円です。まずは2-3スタジオの体験を受けて比較することをおすすめします。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">ライフスタイルに合わせる</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  忙しい方はWECLEの24時間・予約不要が便利です。じっくり取り組みたい方はzen placeの本格レッスンがおすすめです。
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
              本ページでは、千里中央エリアのおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、千里中央にあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
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
              初回限定の体験レッスン1,000円〜です。<br />
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
      <ConsultantSection areaKey="senri-chuo" areaName="千里中央" />

      <RelatedAreas currentSlug="senri-chuo" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
