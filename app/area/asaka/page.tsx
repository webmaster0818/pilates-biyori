import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'



export const metadata = {
  title: '【2026最新】ピラティス朝霞おすすめ5選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '朝霞エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,朝霞,朝霞台,埼玉,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'SOELU 朝霞店',
    image: '/images/studios/soelu-minamikoshigaya.webp',
    rating: 4.7,
    reviewCount: 120,
    reviews: [
      {
        author: 'K.N',
        rating: 5,
        date: '1週間前',
        text: '朝霞駅から徒歩2分で通いやすい！マシンピラティス、ヨガ、よもぎ蒸しが全部楽しめる。女性専用なので安心して通えます。',
      },
      {
        author: 'M.S',
        rating: 5,
        date: '2週間前',
        text: '月額7,678円〜という驚きの価格。プレミアムプラン13,178円で全サービス使い放題はコスパ最高。オンラインレッスンも自宅で受けられて便利。',
      },
      {
        author: 'A.T',
        rating: 4,
        date: '3週間前',
        text: 'よもぎ蒸しで体を温めてからピラティスするのが最高。冷え性が改善されてきた気がします。スタッフの対応も丁寧。',
      },
    ],
    price: '月額 7,678円〜',
    trial: '無料体験あり',
    features: ['女性専用', '朝霞駅徒歩2分', 'よもぎ蒸し', 'オンライン併用'],
    description: '女性専用のマシンピラティス＆フィットネススタジオ。朝霞駅から徒歩2分。マシンピラティス、ヨガ、よもぎ蒸しが楽しめる複合型。オンラインレッスンも利用可能。月額7,678円〜のリーズナブルな料金設定。',
    access: '東武東上線「朝霞駅」徒歩2分',
    address: '埼玉県朝霞市本町2丁目',
    popularPlan: {
      name: 'ピラティス4プラン',
      description: 'スタジオレッスン＋マシンピラティス月4回＋よもぎ蒸し＋オンライン。',
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
    name: 'zen place pilates 朝霞台',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.7,
    reviewCount: 95,
    reviews: [
      {
        author: 'Y.K',
        rating: 5,
        date: '1週間前',
        text: 'ピラティス専門の大手スタジオ。マットもマシンも両方受けられるのが魅力。全国150店舗以上で相互利用可能で出張先でも通える。',
      },
      {
        author: 'S.H',
        rating: 4,
        date: '2週間前',
        text: 'インストラクターの質が高く、20年以上の実績がある安心感。グループ体験1,000円で気軽に試せた。男性もOK。',
      },
      {
        author: 'R.M',
        rating: 5,
        date: '3週間前',
        text: '月4回10,450円〜とリーズナブル。体験当日入会で入会金33,000円が無料になるのでお得。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['男性OK', '全国相互利用', 'マット＆マシン', '20年の実績'],
    description: 'ピラティス専門の大手スタジオ。朝霞台エリアで展開。マットグループ・マシングループ・プライベートの3タイプのレッスン。全国150店舗以上で相互利用可能。体験当日入会で入会金無料。',
    access: '東武東上線「朝霞台駅」/ JR武蔵野線「北朝霞駅」徒歩3分',
    address: '埼玉県朝霞市東弁財1丁目',
    popularPlan: {
      name: 'フリープラン（マットグループ）',
      description: 'マットグループレッスン通い放題。全国店舗で相互利用可能。',
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
      genderRatio: '女性75% / 男性25%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 10:00〜21:00 / 土日祝 9:00〜18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'チェア', 'マット', 'ロッカー'],
    },
  },
  {
    name: 'ジュリピラティススタジオ',
    image: '/images/studios/a-core-pilates.webp',
    rating: 4.8,
    reviewCount: 65,
    reviews: [
      {
        author: 'E.N',
        rating: 5,
        date: '1週間前',
        text: '完全個室の一軒家スタジオ。女性インストラクターによる女性専門パーソナルで、誰にも見られずに通えるのが嬉しい。駐車場完備で車通いに便利。',
      },
      {
        author: 'T.K',
        rating: 5,
        date: '2週間前',
        text: '隠れ家的な雰囲気で落ち着いてレッスンできます。マンツーマンなので自分のペースで進められる。体の不調にも丁寧に対応してくれます。',
      },
      {
        author: 'M.Y',
        rating: 4,
        date: '3週間前',
        text: '和光市駅から徒歩17分で少し遠いですが、駐車場があるので車で通えば問題なし。完全パーソナルの質の高さは駅近スタジオにはない魅力。',
      },
    ],
    price: '1回 8,800円〜',
    trial: '体験レッスンあり',
    features: ['女性専用', '完全個室', '駐車場完備', '一軒家スタジオ'],
    description: '閑静な住宅街にある一軒家の女性専門パーソナルマシンピラティススタジオ。完全個室で誰にも見られずにレッスンを受けられる。女性インストラクターによるマンツーマン指導。駐車場完備。',
    access: '東武東上線「和光市駅」徒歩17分 / 朝霞・成増エリアから車でアクセス推奨',
    address: '埼玉県和光市新倉（詳細は予約時にご案内）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '完全個室・マンツーマンのマシンピラティス。女性インストラクター指導。',
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
    image: '/images/studios/pilates-mirror.webp',
    rating: 4.5,
    reviewCount: 140,
    reviews: [
      {
        author: 'H.S',
        rating: 5,
        date: '1週間前',
        text: 'ジム・スタジオ・プール・温浴施設・テニスコートまで揃った総合スポーツクラブ。ピラティスレッスンもスタジオプログラムの一つとして受けられます。',
      },
      {
        author: 'C.T',
        rating: 4,
        date: '2週間前',
        text: 'ピラティス以外にもダンスやスイミングなど約50プログラムが選べる。運動を総合的に楽しみたい方におすすめ。24時間営業で便利。',
      },
      {
        author: 'N.M',
        rating: 4,
        date: '3週間前',
        text: '北朝霞駅から徒歩3分。施設が充実していて、ピラティスの前にプールで泳いだり、レッスン後にお風呂に入れるのが嬉しい。',
      },
    ],
    price: '月額 8,800円〜',
    trial: '体験あり',
    features: ['24時間営業', '総合スポーツクラブ', 'プール・温浴付き', '約50プログラム'],
    description: '総合スポーツクラブ。ジム・スタジオ・プール・温浴施設を完備。ピラティスはスタジオプログラムの一つとして提供。約50種類のプログラムから選べる。24時間営業。',
    access: 'JR武蔵野線「北朝霞駅」/ 東武東上線「朝霞台駅」徒歩3分',
    address: '埼玉県朝霞市浜崎1-2-10 アゴラ21ビル',
    popularPlan: {
      name: 'レギュラー会員',
      description: '全施設・全プログラム利用可能。ピラティスレッスン含む。',
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
    rating: 4.6,
    reviewCount: 55,
    reviews: [
      {
        author: 'Y.A',
        rating: 5,
        date: '1週間前',
        text: '柔道整復師の先生がピラティスを教えてくれるので、体の不調がある方には特におすすめ。治療とピラティスを組み合わせたアプローチが効果的。',
      },
      {
        author: 'K.M',
        rating: 5,
        date: '2週間前',
        text: '朝霞台駅から近く通いやすい。接骨院ならではの医療的な視点でのピラティス指導が安心。腰痛改善のために通い始めました。',
      },
      {
        author: 'S.N',
        rating: 4,
        date: '3週間前',
        text: 'バランスボールやダンベルも使ったエクササイズも取り入れてくれる。体の痛みを相談しながらレッスンできるのが他のスタジオにはない魅力。',
      },
    ],
    price: '1回 5,500円〜',
    trial: '初回カウンセリングあり',
    features: ['柔道整復師指導', '医療的アプローチ', '治療併用可', '朝霞台駅近'],
    description: '柔道整復師が運営するピラティススタジオ。接骨院ならではの医療的な視点で、体の不調改善と組み合わせたピラティス指導が特徴。腰痛・肩こりなどの改善にも効果的。',
    access: '東武東上線「朝霞台駅」/ JR武蔵野線「北朝霞駅」徒歩2分',
    address: '埼玉県朝霞市東弁財1丁目6-28',
    popularPlan: {
      name: 'ピラティスレッスン',
      description: '柔道整復師によるマンツーマンピラティス指導。体の状態に合わせたオーダーメイド。',
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
    answer: '大丈夫です！朝霞エリアのスタジオはほとんどが初心者歓迎。SOELUはヨガとの複合型で運動初心者でも始めやすく、zen placeは段階的なレベル設定で安心してステップアップできます。',
  },
  {
    question: '朝霞のピラティスの料金相場はどのくらいですか？',
    answer: 'グループレッスンは月額7,678円〜10,450円程度。SOELUが月額7,678円〜で最もリーズナブル。zen placeは月4回10,450円〜。パーソナルはよしだ接骨院が1回5,500円〜と手頃です。',
  },
  {
    question: '朝霞駅と朝霞台駅、どちらが便利ですか？',
    answer: 'SOELUは朝霞駅徒歩2分。zen place、ルネサンス、よしだ接骨院は朝霞台駅（北朝霞駅）から徒歩2〜3分。東武東上線利用なら両駅とも便利ですが、JR武蔵野線利用なら北朝霞駅近くのスタジオがおすすめです。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place朝霞台、ルネサンス北朝霞24、よしだ接骨院は男性も利用可能。SOELU朝霞店とジュリピラティスは女性専用です。',
  },
  {
    question: '車で通えるスタジオはありますか？',
    answer: 'ジュリピラティススタジオは駐車場完備で車通いに最適。ルネサンス北朝霞24も駐車場があります。駅前のスタジオは近隣コインパーキングを利用してください。',
  },
  {
    question: '体の不調がある場合でもピラティスは大丈夫ですか？',
    answer: 'よしだ接骨院は柔道整復師が指導するので、腰痛・肩こりなどの不調がある方に特におすすめ。ジュリピラティスも体の状態に合わせたオーダーメイドレッスンで対応可能です。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。朝霞エリアでは両方体験できるスタジオがあります。',
  },
  {
    question: 'よもぎ蒸しとピラティスの組み合わせ効果は？',
    answer: 'SOELUではよもぎ蒸しで体を温めてからピラティスを行うことで、血流促進・筋肉の柔軟性向上・冷え性改善の相乗効果が期待できます。特に冬場や冷え性の方におすすめです。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめ。慣れたら週2〜3回に。大切なのは継続すること。SOELUのプレミアムプランなら通い放題で毎日でも通えます。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。姿勢改善は比較的早く実感でき、ボディメイク効果は3ヶ月程度で目に見える変化が現れます。',
  },
]

export default function AsakaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月21日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス朝霞おすすめ5選！<br className="hidden md:block" />
              人気スタジオの料金プランを簡単比較！
            </h1>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>
              {' > '}
              <Link href="/area" className="hover:text-warm-800 transition">地域別</Link>
              {' > '}
              <span className="text-warm-600">朝霞</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="朝霞" />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">
              こんにちは。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              Pilates-Biyori編集部です！
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              あなたは、
            </p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">
              「ピラティスを始めてみたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              「朝霞で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、朝霞エリアでおすすめのピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
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
              それではさっそく見ていきましょう！
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="朝霞" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              朝霞のおすすめピラティススタジオ5選
            </h2>
            <div className="space-y-8">
              {studios.map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              朝霞のピラティス料金相場【2026年4月最新】
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
              朝霞エリアは東武東上線とJR武蔵野線の2路線が利用でき、都心へのアクセスも良好なベッドタウンです。都心部と比べてテナント賃料が抑えめのため、料金はリーズナブル。SOELUの月額7,678円〜はエリア最安水準です。接骨院併設のピラティスなど、朝霞ならではの選択肢も魅力。近隣の<Link href="/area/shiki" className="text-warm-700 underline hover:text-warm-900">志木</Link>エリアのスタジオも合わせて検討するのがおすすめです。
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
                  朝霞エリアには「朝霞駅」（東武東上線）と「朝霞台駅」（東武東上線）/ 「北朝霞駅」（JR武蔵野線）の2つのエリアがあります。SOELUは朝霞駅近く、zen placeやルネサンスは朝霞台駅近くです。初回訪問時は最寄り駅を間違えないよう事前に確認しておきましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">総合型か専門型かで通い方が変わる</h3>
                <p className="text-warm-600 leading-relaxed">
                  朝霞エリアにはピラティス専門スタジオ（zen place）、複合型（SOELU、ルネサンス）、医療系（よしだ接骨院、ジュリピラティス）と異なるタイプがあります。ピラティスだけに集中したいか、ヨガやプールも楽しみたいかで選び方が変わります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">東上線沿線の近隣エリアと比較検討しよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  朝霞は東武東上線で<Link href="/area/shiki" className="text-warm-700 underline hover:text-warm-900">志木</Link>まで1駅、<Link href="/area/ikebukuro" className="text-warm-700 underline hover:text-warm-900">池袋</Link>まで約20分。近隣エリアにもピラティススタジオが充実しているので、通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">体の不調がある方は医療系スタジオも検討</h3>
                <p className="text-warm-600 leading-relaxed">
                  朝霞エリアの特徴は、よしだ接骨院やジュリピラティスなど医療的アプローチができるスタジオがあること。腰痛・肩こりなどの不調がある方は、治療とピラティスを組み合わせたアプローチが効果的です。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。ジーンズやスカートはNG。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：レッスン中の水分補給に。自販機がないスタジオもあるため持参が安心。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。マシンに敷くタオルはスタジオで用意されることが多い。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは靴下着用が必須のスタジオが多数。グリップソックスがベスト。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。ピラティスは脚を大きく動かすポーズが多いため、ストレッチの効く素材が必須です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>の方が、インストラクターがフォームを確認しやすく、効果的な指導を受けられます。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオも。SOELUは手ぶらで体験できるプランもあります。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。マシンに引っかかる恐れがあるため、ピアス・ネックレス・腕時計はロッカーに預けるのが安全です。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>朝霞エリアの豆知識：</strong>朝霞は彩夏祭（さいかさい）で有名な、自然と都市のバランスが良いベッドタウンです。黒目川沿いの桜並木など緑が多く、レッスン前後に散歩するのも気持ちいいエリア。駅前にはスーパーや飲食店が充実しているので、レッスン後の買い物にも便利です。
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
                  月額1万円以下で通えるスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• SOELU（月額 7,678円〜）</li>
                  <li className="text-warm-700">• ルネサンス（月額 8,800円〜）</li>
                  <li className="text-warm-700">• zen place（月4回 10,450円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">体の不調改善</h3>
                <p className="text-warm-600 text-sm mb-4">
                  医療的アプローチで安心。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• よしだ接骨院（柔道整復師指導）</li>
                  <li className="text-warm-700">• ジュリピラティス（完全パーソナル）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">総合フィットネス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  ピラティス以外も楽しみたい方。
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
                週1〜2回からスタート。最低2〜3ヶ月継続で効果を実感。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回がおすすめ。3〜6ヶ月で目に見える変化。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続。
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
                  グループレッスン中心。
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
                  充実の設備で本格レッスン。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place（10,450円〜/月4回）</li>
                  <li>• SOELU プレミアム（13,178円/使い放題）</li>
                  <li>• zen place フリー（16,940円/通い放題）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 5,500〜9,000円/回</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">
                  マンツーマン指導で確実に効果。
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
                  朝霞の料金相場はグループ月額7,678円〜10,450円。パーソナルは1回5,500円〜。都心と比べてリーズナブルです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  SOELUは無料体験。zen placeはグループ体験1,000円。まずは気になるスタジオで体験してみましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  朝霞は東武東上線とJR武蔵野線の2路線が利用可能。朝霞駅と朝霞台駅の両方にスタジオがあるので、自分の利用路線に合わせて選びましょう。
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
              今回は朝霞エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では朝霞にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。
            </p>
            <p className="text-warm-700 font-medium text-center">
              あなたにぴったりのピラティススタジオが見つかることを願っています。
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              体験レッスンを予約しよう
            </h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              初回限定の体験レッスン無料〜1,000円。<br />
              まずは気軽に体験してみましょう。
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

      <RelatedAreas currentSlug="asaka" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
