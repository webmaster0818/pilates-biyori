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
  alternates: { canonical: 'https://biyori-pilates.com/area/asaka/' },
  title: '【2026年10月最新】朝霞のピラティス｜初心者可・無料体験で選ぶ料金比較',
  description: '朝霞エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で比較しています。初心者向けの選び方、駅近スタジオ、体験レッスンの有無までわかります。',
  keywords: 'ピラティス,朝霞,朝霞台,埼玉,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'SOELU 朝霞店',
    image: '/images/studios/soelu-minamikoshigaya.webp',
    price: '月額 7,678円〜',
    trial: '無料体験あり',
    features: ['女性専用', '朝霞駅徒歩2分', 'よもぎ蒸し', 'オンライン併用'],
    description: '女性専用のマシンピラティス＆フィットネススタジオです。朝霞駅から徒歩2分です。マシンピラティス、ヨガ、よもぎ蒸しが楽しめる複合型です。オンラインレッスンも利用可能です。月額7,678円〜のリーズナブルな料金設定です。',
    access: '東武東上線「朝霞駅」徒歩2分',
    address: '埼玉県朝霞市本町2丁目',
    popularPlan: {
      name: 'ピラティス4プラン',
      description: 'スタジオレッスン＋マシンピラティス月4回＋よもぎ蒸し＋オンラインです。',
      price: '月額 9,878円（税込）',
    },
    options: [
      'スタンダードプラン（7,678円/月）',
      'プレミアムプラン（13,178円/月・全サービス使い放題）',
      'マシンピラティス追加チケット（1回 1,500円）',
      '施設維持費 月550円〜880円',
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
  {
    name: 'ジュリピラティススタジオ',
    image: '/images/studios/a-core-pilates.webp',
    price: '1回 8,800円〜',
    trial: '体験レッスンあり',
    features: ['女性専用', '完全個室', '駐車場完備', '一軒家スタジオ'],
    description: '閑静な住宅街にある一軒家の女性専門パーソナルマシンピラティススタジオです。完全個室で誰にも見られずにレッスンを受けられます。女性インストラクターによるマンツーマン指導しています。駐車場完備です。',
    access: '東武東上線「和光市駅」徒歩17分 / 朝霞・成増エリアから車でアクセス推奨',
    address: '埼玉県和光市新倉（詳細は予約時にご案内）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '完全個室・マンツーマンのマシンピラティスです。女性インストラクター指導です。',
      price: '1回 8,800円（税込）',
    },
    options: [
      '回数券プラン（お得な回数まとめ買い）',
      '体験レッスンあり',
      '駐車場無料',
      '完全予約制',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['姿勢改善', '体の不調改善', '産後ケア', 'アンチエイジング'],
    },
    basicInfo: {
      hours: '完全予約制（要相談）',
      closed: '不定休',
      facilities: ['リフォーマーマシン', 'プライベートルーム', '駐車場'],
    },
  },
  {
    name: 'スポーツクラブ ルネサンス 北朝霞24',
    price: '月額 8,800円〜',
    trial: '体験あり',
    features: ['24時間営業', '総合スポーツクラブ', 'プール・温浴付き', '約50プログラム'],
    description: '総合スポーツクラブです。ジム・スタジオ・プール・温浴施設を完備しています。ピラティスはスタジオプログラムの一つとして提供です。約50種類のプログラムから選べます。24時間営業です。',
    access: 'JR武蔵野線「北朝霞駅」/ 東武東上線「朝霞台駅」徒歩3分',
    address: '埼玉県朝霞市浜崎1-2-10 アゴラ21ビル',
    popularPlan: {
      name: 'レギュラー会員',
      description: '全施設・全プログラム利用可能です。ピラティスレッスン含みます。',
      price: '月額 8,800円〜（税込）',
    },
    options: [
      'フルタイム会員',
      'デイタイム会員',
      'ジム＆スタジオ会員',
      '体験あり',
    ],
    userProfile: {
      ageRange: '20代〜60代幅広い',
      genderRatio: '女性55% / 男性45%',
      purpose: ['総合フィットネス', '健康維持', 'ストレス解消', '運動不足解消'],
    },
    basicInfo: {
      hours: '24時間営業（スタジオレッスンは時間帯指定）',
      closed: '木曜日（ジムエリアは24時間）',
      facilities: ['スタジオ', 'ジム', 'プール', '温浴施設', 'テニスコート', 'ロッカー'],
    },
  },
  {
    name: 'よしだ接骨院 ピラティス',
    image: '/images/studios/a-core-pilates.webp',
    price: '1回 5,500円〜',
    trial: '初回カウンセリングあり',
    features: ['柔道整復師指導', '医療的アプローチ', '治療併用可', '朝霞台駅近'],
    description: '柔道整復師が運営するピラティススタジオです。接骨院ならではの医療的な視点で、体の不調改善と組み合わせたピラティス指導が特徴です。腰痛・肩こりなどの改善にも効果的です。',
    access: '東武東上線「朝霞台駅」/ JR武蔵野線「北朝霞駅」徒歩2分',
    address: '埼玉県朝霞市東弁財1丁目6-28',
    popularPlan: {
      name: 'ピラティスレッスン',
      description: '柔道整復師によるマンツーマンピラティス指導しています。体の状態に合わせたオーダーメイドです。',
      price: '1回 5,500円〜（税込）',
    },
    options: [
      '回数券プラン',
      '接骨院治療との併用',
      '初回カウンセリング',
      'インソール作成も可能',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性65% / 男性35%',
      purpose: ['腰痛改善', '肩こり改善', '姿勢改善', 'リハビリ'],
    },
    basicInfo: {
      hours: '9:00〜19:00',
      closed: '日祝（要確認）',
      facilities: ['ピラティス器具', 'バランスボール', 'ダンベル', '治療用ベッド'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも朝霞のスタジオに通えますか？',
    answer: '問題ありません。朝霞エリアのスタジオはほとんどが初心者歓迎です。SOELUはヨガとの複合型で運動初心者でも始めやすいスタジオです。',
  },
  {
    question: '朝霞のピラティスの料金相場はどのくらいですか？',
    answer: 'グループレッスンはSOELUが月額7,678円〜、ルネサンスが月額8,800円〜です。パーソナルはよしだ接骨院が1回5,500円〜と手頃です。',
  },
  {
    question: '朝霞駅と朝霞台駅、どちらが便利ですか？',
    answer: 'SOELUは朝霞駅徒歩2分です。ルネサンス、よしだ接骨院は朝霞台駅（北朝霞駅）から徒歩2〜3分です。東武東上線利用なら両駅とも便利ですが、JR武蔵野線利用なら北朝霞駅近くのスタジオがおすすめです。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'ルネサンス北朝霞24、よしだ接骨院は男性も利用可能です。SOELU朝霞店とジュリピラティスは女性専用です。',
  },
  {
    question: '車で通えるスタジオはありますか？',
    answer: 'ジュリピラティススタジオは駐車場完備で車通いに最適です。ルネサンス北朝霞24も駐車場があります。駅前のスタジオは近隣コインパーキングを利用してください。',
  },
  {
    question: '体の不調がある場合でもピラティスは大丈夫ですか？',
    answer: 'よしだ接骨院は柔道整復師が指導するので、腰痛・肩こりなどの不調がある方に特におすすめです。ジュリピラティスも体の状態に合わせたオーダーメイドレッスンで対応可能です。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用しています。マシンは負荷調整しやすく初心者におすすめです。朝霞エリアでは両方体験できるスタジオがあります。',
  },
  {
    question: 'よもぎ蒸しとピラティスの組み合わせ効果は？',
    answer: 'SOELUではよもぎ蒸しで体を温めてからピラティスを行うことで、血流促進・筋肉の柔軟性向上・冷え性改善の相乗効果が期待できます。特に冬場や冷え性の方におすすめです。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回が目安です。大切なのは継続することです。SOELUのプレミアムプランなら通い放題で毎日でも通えます。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感される方が多くなっています。姿勢改善は比較的早く実感でき、ボディメイク効果は3ヶ月程度で目に見える変化が現れます。',
  },
]

export default function AsakaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '朝霞', url: 'https://biyori-pilates.com/area/asaka/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月11日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス朝霞おすすめ4選<br className="hidden md:block" />
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
              <span className="text-warm-600">朝霞</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="朝霞" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、朝霞エリアでおすすめのピラティススタジオ4選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>朝霞・朝霞台でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>体の不調改善もできるスタジオを知りたい</span>
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

        <PriceComparisonTable studios={studios} areaName="朝霞" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              朝霞のおすすめピラティススタジオ4選
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
              朝霞のピラティス料金相場
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
                    <td className="px-4 py-3">7,678円〜10,450円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 5,500円〜8,800円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜1,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              朝霞エリアは東武東上線とJR武蔵野線の2路線が利用でき、都心へのアクセスも良好なベッドタウンです。都心部と比べてテナント賃料が抑えめのため、料金はリーズナブルです。SOELUの月額7,678円〜はエリア最安水準です。接骨院併設のピラティスなど、朝霞ならではの選択肢も魅力です。近隣の<Link href="/area/shiki/" className="text-warm-700 underline hover:text-warm-900">志木</Link>エリアのスタジオも合わせて検討するのがおすすめです。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              朝霞でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">「朝霞駅」と「朝霞台駅」を間違えないように注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  朝霞エリアには「朝霞駅」（東武東上線）と「朝霞台駅」（東武東上線）/ 「北朝霞駅」（JR武蔵野線）の2つのエリアがあります。SOELUは朝霞駅近く、ルネサンスは朝霞台駅近くです。初回訪問時は最寄り駅を間違えないよう事前にご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">総合型か専門型かで通い方が変わる</h3>
                <p className="text-warm-600 leading-relaxed">
                  朝霞エリアには複合型（SOELU、ルネサンス）と医療系（よしだ接骨院、ジュリピラティス）の異なるタイプがあります。ピラティスだけに集中したいか、ヨガやプールも楽しみたいかで選び方が変わります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">東上線沿線の近隣エリアと比較検討する</h3>
                <p className="text-warm-600 leading-relaxed">
                  朝霞は東武東上線で<Link href="/area/shiki/" className="text-warm-700 underline hover:text-warm-900">志木</Link>まで1駅、<Link href="/area/ikebukuro/" className="text-warm-700 underline hover:text-warm-900">池袋</Link>まで約20分です。近隣エリアにもピラティススタジオが充実しているので、通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">体の不調がある方は医療系スタジオも検討</h3>
                <p className="text-warm-600 leading-relaxed">
                  朝霞エリアの特徴は、よしだ接骨院やジュリピラティスなど医療的アプローチができるスタジオがあることです。腰痛・肩こりなどの不調がある方は、治療とピラティスを組み合わせたアプローチが効果的です。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。SOELUは手ぶらで体験できるプランもあります。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。マシンに引っかかる恐れがあるため、ピアス・ネックレス・腕時計はロッカーに預けるのが安全です。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>朝霞エリアの豆知識：</strong>朝霞は彩夏祭（さいかさい）で有名な、自然と都市のバランスが良いベッドタウンです。黒目川沿いの桜並木など緑が多く、レッスン前後に散歩するのも気持ちいいエリアです。駅前にはスーパーや飲食店が充実しているので、レッスン後の買い物にも便利です。
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
                  <li className="text-warm-700">• SOELU（月額 7,678円〜）</li>
                  <li className="text-warm-700">• ルネサンス（月額 8,800円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">体の不調改善</h3>
                <p className="text-warm-600 text-sm mb-4">
                  医療的アプローチで安心です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• よしだ接骨院（柔道整復師指導）</li>
                  <li className="text-warm-700">• ジュリピラティス（完全パーソナル）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">総合フィットネス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  ピラティス以外も楽しみたい方向けです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• SOELU（ヨガ・よもぎ蒸し付き）</li>
                  <li className="text-warm-700">• ルネサンス（プール・温浴付き）</li>
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
                  <li>• SOELU（7,678円〜/月額）</li>
                  <li>• ルネサンス（8,800円〜/月額）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜17,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  充実の設備で本格レッスンです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• SOELU プレミアム（13,178円/使い放題）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 5,500〜9,000円/回</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">
                  マンツーマン指導で確実に効果です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• よしだ接骨院（5,500円〜/回）</li>
                  <li>• ジュリピラティス（8,800円〜/回）</li>
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
                  ダイエット、姿勢改善、体の不調改善など目的によって最適なスタジオは変わります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  朝霞の料金相場はグループ月額7,678円〜10,450円です。パーソナルは1回5,500円〜です。都心と比べてリーズナブルです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  SOELUは無料体験を実施しています。まずは気になるスタジオで体験してみることをおすすめします。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  朝霞は東武東上線とJR武蔵野線の2路線が利用可能です。朝霞駅と朝霞台駅の両方にスタジオがあるので、自分の利用路線に合わせてお選びください。
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
              本ページでは、朝霞エリアのおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、朝霞にあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
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
      <ConsultantSection areaKey="asaka" areaName="朝霞" />

      <RelatedAreas currentSlug="asaka" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
