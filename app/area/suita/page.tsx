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
  alternates: { canonical: 'https://biyori-pilates.com/area/suita/' },
  title: '吹田のピラティス｜初心者可・無料体験で選ぶ料金比較',
  description: '吹田エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で比較しています。初心者向けの選び方、駅近スタジオ、体験レッスンの有無までわかります。',
  keywords: 'ピラティス,吹田,江坂,千里丘,吹田市,大阪,北摂,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 江坂スタジオ',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp', reviewCount: 156,
    price: '月4回 9,625円〜', trial: 'グループ体験 1,000円',
    features: ['江坂駅徒歩1分', '男性利用可', 'マット&マシン', '全国他店利用'],
    description: 'ピラティス専門の大手スタジオです。江坂駅から徒歩1分の好立地です。マットグループ・マシングループ・プライベートの3タイプから選べます。全国150店舗以上で他店利用可能です。正統派ピラティスをベースにした質の高い指導が特徴です。',
    access: '大阪メトロ御堂筋線「江坂駅」徒歩1分',
    address: '大阪府吹田市豊津町9-44 ハートランド江坂 5階',
    popularPlan: { name: 'フリープラン（マットグループ）', description: 'マットグループレッスン通い放題です。全国店舗で他店利用可能です。', price: '月額 14,960円〜（税込）' },
    options: ['月4回プラン（9,625円〜）', 'マシングループ体験（3,000円）', 'プライベートレッスン', '体験当日入会で入会金無料'],
    userProfile: { ageRange: '30代〜50代が中心', genderRatio: '女性75% / 男性25%', purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'] },
    basicInfo: { hours: '月〜金 10:00〜20:00 / 土日祝 10:00〜16:00', closed: '不定休', facilities: ['リフォーマー', 'マット', 'ロッカー', '更衣室'] },
  },
  {
    name: 'La pilates（ラピラティス）江坂店',
    image: '/images/studios/la-pilates.webp', reviewCount: 92,
    price: 'パーソナル 1回 8,800円〜', trial: '体験レッスンあり',
    features: ['女性専用', '整体×ピラティス', 'パーソナル専門', '江坂駅徒歩2分'],
    description: '整体×マシンピラティスを融合した女性専用プライベートスタジオです。江坂駅から徒歩2分です。姿勢改善に特化したWメソッドで、整体で体を整えてからピラティスで鍛える効率的なアプローチです。リラックスできる空間設計が特徴です。',
    access: '大阪メトロ御堂筋線「江坂駅」徒歩2分',
    address: '大阪府吹田市江坂町エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'パーソナルレッスン', description: '整体×マシンピラティスのWメソッドです。女性専用完全個室です。', price: '1回 8,800円〜（税込）' },
    options: ['回数券プランあり', '月額プランあり', '体験レッスンあり', '整体単体も可能'],
    userProfile: { ageRange: '30代〜50代が中心', genderRatio: '女性100%（女性専用）', purpose: ['姿勢改善', '肩こり・腰痛改善', 'ボディメイク', 'リフレッシュ'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', '整体ベッド', '完全個室', '更衣室'] },
  },
  {
    name: 'ピラティス コアセンス 千里丘', reviewCount: 78,
    price: 'パーソナル 1回 7,000円〜', trial: '体験レッスンあり',
    features: ['千里丘駅前', 'パーソナル専門', '2025年リニューアル', '子ども対応'],
    description: '2025年リニューアルオープンしたパーソナルピラティス＆トレーニングスタジオです。千里丘駅前の好立地です。マシンピラティスのパーソナルレッスンで肩こり・腰痛改善から体幹強化まで対応しています。小学生の体幹トレーニングにも対応しています。',
    access: 'JR東海道本線「千里丘駅」徒歩1分',
    address: '大阪府吹田市千里丘エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: 'パーソナルレッスン', description: 'マシンピラティスのマンツーマン指導です。', price: '1回 7,000円〜（税込）' },
    options: ['回数券プランあり', '体験レッスンあり', '小学生体幹トレーニング', '肩こり・腰痛改善コース'],
    userProfile: { ageRange: '30代〜60代が中心', genderRatio: '女性80% / 男性20%', purpose: ['肩こり・腰痛改善', '体幹強化', '姿勢改善', '健康維持'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'トレーニング機器', '更衣室'] },
  },
  {
    name: 'BASCO PILATES 江坂',
    image: '/images/studios/basco-esaka.webp', reviewCount: 68,
    price: '月4回 10,000円〜', trial: '体験レッスンあり',
    features: ['少人数制', 'アットホーム', 'マット&マシン', '良心的料金'],
    description: '江坂エリアのアットホームなピラティススタジオです。少人数制のグループレッスンで、セミパーソナルのような丁寧な指導が受けられます。マットとマシンの両方に対応し、良心的な料金設定のため継続しやすい環境です。',
    access: '大阪メトロ御堂筋線「江坂駅」徒歩圏内',
    address: '大阪府吹田市江坂町エリア（詳細は公式サイトでご確認ください）',
    popularPlan: { name: '月4回プラン', description: '少人数制グループレッスンです。マット＆マシン選択可能です。', price: '月4回 10,000円〜（税込）' },
    options: ['月8回プラン', 'プライベートレッスン', '体験レッスンあり', 'マット・マシン選択可能'],
    userProfile: { ageRange: '30代〜60代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', '健康維持', 'リフレッシュ'] },
    basicInfo: { hours: '公式サイトでご確認ください', closed: '不定休', facilities: ['リフォーマー', 'マット', '更衣室'] },
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '問題ありません。吹田エリアのスタジオはほとんどが初心者歓迎です。zen placeは丁寧な指導で定評があります。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷調整しやすく初心者におすすめです。吹田市内はマシン専門スタジオが充実しています。' },
  { question: '吹田のピラティスの料金相場は？', answer: 'グループ月4回で9,625円〜10,000円程度です。zen placeが月4回9,625円〜です。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1〜2回がおすすめです。慣れたら週2〜3回に増やすと効果的です。zen placeのフリープランなら毎日でも通えます。' },
  { question: 'ピラティスで痩せますか？', answer: 'インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。2〜3ヶ月の継続で体の変化を実感される方が多くなっています。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があれば問題ありません。zen placeはグループ体験1,000円で気軽に試せます。靴下（グリップソックス推奨）も忘れずにご用意ください。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'zen place江坂、コアセンス、BASCO PILATESは男性も通えます。La pilatesは女性専用です。' },
  { question: '江坂と千里丘、どちらが便利？', answer: '御堂筋線ユーザーは江坂駅周辺（zen place、La pilates、BASCO PILATES）がおすすめです。JR東海道線ユーザーは千里丘駅前のコアセンスが便利です。' },
  { question: '吹田市と梅田で迷っています', answer: '吹田市は梅田に比べて料金が抑えめで、混雑も少なく落ち着いた環境でレッスンを受けられます。御堂筋線で梅田まで約10分なので、zen placeなら他店利用で両方通うことも可能です。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感される方が多くなっています。姿勢改善は比較的早く、ボディメイクは3ヶ月程度の継続がおすすめです。' },
]

export default function SuitaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '吹田', url: 'https://biyori-pilates.com/area/suita/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月11日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              ピラティス吹田おすすめ4選<br className="hidden md:block" />
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
              <span className="text-warm-600">吹田</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="吹田" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、吹田市（江坂・千里丘）エリアでおすすめのピラティススタジオ4選をまとめました。吹田市は大阪メトロ御堂筋線の江坂駅を中心に、北摂エリアの玄関口として栄えるオフィス街です。梅田まで約10分のアクセスの良さも魅力です。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>吹田市でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>江坂・千里丘エリアで駅近スタジオを見つけたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>北摂エリアで通いやすいスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="吹田" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              吹田のおすすめピラティススタジオ4選
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
              吹田のピラティス料金相場
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
                    <td className="px-4 py-3">9,625円〜10,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 7,000円〜8,800円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">通い放題プラン</td>
                    <td className="px-4 py-3">月額 14,960円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜3,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              吹田市は北摂エリアの中心地で、<Link href="/area/umeda/" className="text-warm-700 underline hover:text-warm-900">梅田</Link>と比べて料金がやや抑えめなのが特徴です。御堂筋線沿線では<Link href="/area/esaka/" className="text-warm-700 underline hover:text-warm-900">江坂</Link>にスタジオが集中しており、北摂在住の方に通いやすいエリアです。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              吹田でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">御堂筋線とJRで最寄りスタジオが異なる</h3>
                <p className="text-warm-600 leading-relaxed">
                  吹田市は御堂筋線の江坂駅とJR東海道線の千里丘駅・吹田駅でアクセスが大きく変わります。通勤路線に合わせてスタジオを選ぶと、継続しやすくなります。江坂エリアにはzen place・La pilates・BASCO PILATESが集中しています。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">オフィス街のため平日昼は空いていることが多い</h3>
                <p className="text-warm-600 leading-relaxed">
                  江坂はオフィス街のため、平日夜と土日は混み合いますが、平日日中は比較的空いています。主婦やフリーランスの方は平日昼のレッスンが比較的予約を取りやすい時間帯です。予約が取りやすく快適にレッスンを受けられます。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">整体×ピラティスの新しいアプローチも</h3>
                <p className="text-warm-600 leading-relaxed">
                  吹田エリアにはLa pilatesのように整体とピラティスを融合したスタジオもあります。慢性的な肩こりや腰痛がある方は、通常のピラティスだけでなく整体アプローチもご検討ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">全国相互利用で梅田・新大阪も通える</h3>
                <p className="text-warm-600 leading-relaxed">
                  zen placeは全国150店舗以上で他店利用可能です。江坂で入会しても梅田や新大阪のスタジオにも通えるため、出張やお出かけの際にも柔軟にレッスンを受けられます。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。対応は各公式サイトでご確認ください。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。マシンに引っかかる恐れがあるため、ピアス・ネックレス・腕時計はロッカーに預けるのが安全です。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>吹田エリアの豆知識：</strong>江坂は大阪メトロ御堂筋線で梅田まで約10分の好立地です。オフィスビルが立ち並ぶ一方、万博記念公園や服部緑地など自然も豊かなエリアです。レッスン後に服部緑地でウォーキングを楽しむ方も多く、運動習慣の定着に適した環境です。
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
                  月額1万円以下から通えます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place（月4回 9,625円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• La pilates（整体×ピラティス）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  個別指導で効果を目指せます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• La pilates（1回 8,800円〜）</li>
                  <li className="text-warm-700">• コアセンス（1回 7,000円〜）</li>
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
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスンが中心です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place月4回（9,625円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回〜通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  本格レッスンを十分な頻度で受けられます。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen placeフリー（14,960円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 7,000円〜/回</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">
                  個別指導で確実に効果です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• コアセンス（7,000円〜/回）</li>
                  <li>• La pilates（8,800円〜/回）</li>
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
                  吹田の料金相場はグループ月4回で9,625円〜10,000円です。通い放題は14,960円〜です。入会金やキャンペーンもご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  zen placeは1,000円で体験可能です。まずは2-3スタジオの体験を受けて比較することをおすすめします。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  御堂筋線ユーザーは江坂駅周辺、JRユーザーは千里丘駅前がおすすめです。自分の生活動線に合わせてお選びください。
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
              本ページでは、吹田市エリアのおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、吹田市にあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
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
              初回限定の体験レッスン無料〜1,000円です。<br />
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
      <ConsultantSection areaKey="suita" areaName="吹田" />

      <RelatedAreas currentSlug="suita" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
