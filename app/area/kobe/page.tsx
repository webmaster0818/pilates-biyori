import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】神戸のピラティススタジオおすすめ8選｜料金・体験レッスン徹底比較',
  description: '神戸エリアのおすすめピラティススタジオ8選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,神戸,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK 神戸三宮店',
    image: '/images/pilates2.jpg',
    rating: 4.0,
    price: '月4回 13,420円〜',
    trial: '無料体験レッスン',
    features: ['音楽×マシン', '女性専用', '神戸三宮駅徒歩3分', '暗闇レッスン'],
    description: '神戸の三宮にある女性専用マシンピラティススタジオ。阪急線「神戸三宮駅」西口より徒歩3分と、公共交通機関でのアクセスも便利。カジュアルかつスタイリッシュな店内で、音楽にあわせたグループレッスンを楽しめます。お腹、お尻、二の腕、脚、背中の部位に特化したボディメイクプログラムが充実。',
    access: '阪急神戸三宮駅西口より徒歩3分',
    address: '兵庫県神戸市中央区三宮（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '暗闇×音楽×マシンピラティスの融合レッスン。楽しく続けられると人気のプラン。',
      price: '月4回 13,420円（税込）+ 施設維持費 825円',
    },
    options: [
      'マンスリー8メンバー（月8回 16,170円）',
      'マンスリーデイメンバー（平日10-15時通い放題 14,520円）',
      'マンスリープレミアムメンバー（毎日2レッスン 18,920円）',
      '追加レッスン（1回 2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜30代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['楽しく痩せたい', 'ストレス発散', 'ボディメイク', '仲間と運動'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '暗闇スタジオ', '女性専用'],
    },
  },
  {
    name: 'ピラティススタジオDEP 神戸店 Resho',
    image: '/images/pilates3.jpg',
    rating: 4.2,
    price: 'パーソナルレッスン 90分 2,980円〜',
    trial: '体験レッスン 2,980円',
    features: ['理学療法士監修', '完全個室', '姿勢改善専門', '腰痛改善'],
    description: 'ピラティススタジオDEP 神戸店 Resho。理学療法士が監修する完全個室のマシンピラティススタジオ。クリニック勤務経験を活かし、自分自身を救ってくれたピラティスの力を、今度は自分が伝えることで、沢山の方の生活を豊かに導きたいと強く想い、地元神戸の方へもDEPのサービスを届けたいとオープン。姿勢改善・猫背改善・腰痛改善に特化。',
    access: '神戸市内（詳細は公式サイト参照）',
    address: '兵庫県神戸市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '理学療法士監修の完全個室パーソナルレッスン。姿勢・腰痛改善に特化。',
      price: '平日限定 パーソナルレッスン 90分 2,980円',
    },
    options: [
      'パーソナルレッスン',
      '姿勢改善プログラム',
      '腰痛改善プログラム',
      '完全個室',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '腰痛改善', '猫背改善', 'リハビリ'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['完全個室', 'ロッカー', '理学療法士監修', 'マシン完備'],
    },
  },
  {
    name: 'TOKI PILATES STUDIO 元町',
    image: '/images/pilates4.jpg',
    rating: 4.1,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['神戸元町', 'パーソナル専門', '産後ケア', '骨盤矯正'],
    description: 'TOKI PILATES STUDIO｜神戸元町のピラティススタジオ。パーソナルレッスン・産後・骨盤矯正・骨盤リカバリ・マシンピラティス・体幹トレーニング・姿勢矯正を専門に行うスタジオ。一人ひとりの身体に合わせた丁寧な指導を提供。',
    access: '神戸元町（詳細は公式サイト参照）',
    address: '兵庫県神戸市中央区元町（詳細は公式サイト参照）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '産後ケア・骨盤矯正に特化。一人ひとりに合わせた丁寧な指導。',
      price: '要問合せ',
    },
    options: [
      'パーソナルレッスン',
      '産後ケアプログラム',
      '骨盤矯正',
      '姿勢矯正',
    ],
    userProfile: {
      ageRange: '30代〜40代が中心',
      genderRatio: '女性95% / 男性5%',
      purpose: ['産後ケア', '骨盤矯正', '姿勢矯正', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['パーソナル空間', 'ロッカー', 'マシン完備', '産後ケア対応'],
    },
  },
  {
    name: 'STUDIO TOU 三宮',
    image: '/images/pilates2.jpg',
    rating: 4.1,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['会員制', 'グループ＆プライベート', '神戸三宮', 'マシン専門'],
    description: 'ピラティスなら神戸・三宮のSTUDIO TOU（スタジオトゥーユー）。会員制のピラティスなら神戸・三宮のマシンピラティス STUDIO TOU、グループレッスン、プライベートレッスンを行っております。一人ひとりに合わせた丁寧な指導で、初心者から経験者まで幅広く対応。',
    access: '神戸三宮（詳細は公式サイト参照）',
    address: '兵庫県神戸市中央区三宮（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マシンピラティス',
      description: '会員制スタジオ。グループ＆プライベートレッスン対応。',
      price: '要問合せ',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      'マシンピラティス',
      '会員制',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', '姿勢改善', '体幹強化', '会員制希望'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'マシン完備', '会員制'],
    },
  },
  {
    name: 'La pilates 神戸元町店',
    image: '/images/pilates3.jpg',
    rating: 4.2,
    price: 'サブスク月1回 12,000円〜',
    trial: '体験レッスン 3,000円',
    features: ['整体×マシンピラティス', '元町駅徒歩2分', '女性専用', '明るいスタジオ'],
    description: '神戸元町のマシンピラティスならLa pilates｜女性専用・整体×ピラティススタジオ。「元町駅」から徒歩2分。La pilates神戸元町店は、整体とマシンピラティスを融合させた、女性専用のスタジオ。身体の歪みを整えながらボディメイク。明るいスタジオで楽しくレッスン。',
    access: '元町駅から徒歩2分',
    address: '兵庫県神戸市中央区元町（詳細は公式サイト参照）',
    popularPlan: {
      name: 'サブスクプラン',
      description: '整体×マシンピラティスの組み合わせ。女性専用で安心。',
      price: 'サブスク月1回 12,000円〜、体験 3,000円',
    },
    options: [
      'サブスクプラン（月1回〜）',
      '整体施術',
      'マシンピラティス',
      '女性専用',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['整体×ピラティス', '身体の歪み改善', 'ボディメイク', '女性専用'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', '整体施術', '女性専用', '明るいスタジオ'],
    },
  },
  {
    name: 'luluto 神戸店',
    image: '/images/pilates4.jpg',
    rating: 4.3,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['理学療法士考案', 'マンツーマン', '医療的視点', '身体の専門家'],
    description: '身体の専門家である理学療法士が考案したピラティススタジオ。医療現場での知見を活かし、「ただ動く」のではなく「身体を正しく動かす」ことを重視。一人ひとりの身体の状態に合わせたオーダーメイドプログラムを提供。リハビリから本格的なボディメイクまで幅広く対応。',
    access: '神戸市内（詳細は公式サイト参照）',
    address: '兵庫県神戸市（詳細は公式サイト参照）',
    popularPlan: {
      name: '理学療法士監修プログラム',
      description: '医療的視点からの身体分析。一人ひとりに合わせたオーダーメイドプログラム。',
      price: '要問合せ',
    },
    options: [
      'プライベートレッスン',
      'グループレッスン',
      '理学療法士による身体分析',
      'リハビリ対応',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['リハビリ', '身体の不調改善', '正しい動き習得', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['理学療法士常駐', 'プライベート空間', '医療的視点', 'マシン完備'],
    },
  },
  {
    name: 'Rintosull 神戸（4店舗）',
    image: '/images/pilates2.jpg',
    rating: 4.0,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['女性専用', '神戸4店舗', '初心者歓迎', 'LAVAグループ'],
    description: 'マシンピラティススタジオRintosull 神戸。三宮店、長田店、西神中央店、名谷インター店の4店舗展開。Rintosullでは、運動やピラティスを初めて行う方向けのプログラムをご用意しています。インストラクターがしっかりサポートいたしますので、ご安心ください。美尻や美脚に必要な筋肉にアプローチ。',
    access: '神戸市内4店舗（三宮・長田・西神中央・名谷インター）',
    address: '兵庫県神戸市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'グループレッスン',
      description: '初心者向けプログラム充実。美尻・美脚に特化したレッスンも。',
      price: '要問合せ',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      '初心者向けプログラム',
      '4店舗相互利用可',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['初心者歓迎', '美尻・美脚', 'ボディメイク', '女性専用'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', '女性専用', '4店舗展開'],
    },
  },
  {
    name: 'pilates studio compass+ 北区',
    image: '/images/pilates3.jpg',
    rating: 4.0,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['神戸市北区', '地域密着', '丸く優しい繋がり', 'マシン完備'],
    description: '神戸市北区のピラティススタジオ pilates studio compass+。スタジオの名前は「コンパスプラス」。文房具のコンパスは、どんな大きさにも円を描くことができます。ピラティスを通して皆様との繋がりが、丸く優しく円を囲むように広がっていくスタジオでありたいと願い、神戸市北区にピラティススタジオをオープンしました。',
    access: '神戸市北区（詳細は公式サイト参照）',
    address: '兵庫県神戸市北区（詳細は公式サイト参照）',
    popularPlan: {
      name: 'ピラティスレッスン',
      description: '地域密着型のアットホームなスタジオ。丸く優しい繋がりを大切に。',
      price: '要問合せ',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      '地域密着',
      'マシンピラティス',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['地域密着希望', 'アットホーム', 'ボディメイク', '姿勢改善'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'マシン完備', '地域密着'],
    },
  },
]

export default async function KobeAreaPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-warm-50 to-white">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* ヘッダーセクション */}
          <header className="mb-12 text-center">
            <h1 className="mb-4 font-cormorant text-4xl font-bold tracking-tight text-warm-900 sm:text-5xl">
              神戸のピラティススタジオ<span className="block text-warm-600">おすすめ8選</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-warm-700">
              神戸エリアで人気のピラティススタジオを厳選。マシンピラティス、体験レッスン、料金プランを徹底比較。初心者から経験者まで、あなたにぴったりのスタジオが見つかります。
            </p>
          </header>

          {/* スタジオカード一覧 */}
          <section className="mb-16">
            <div className="space-y-8">
              {studios.map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </section>

          {/* 好みから探すセクション */}
          <section className="mb-16 rounded-2xl bg-warm-50 p-8 shadow-sm">
            <h2 className="mb-8 font-cormorant text-3xl font-bold text-warm-900">
              好みのタイプから探す
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">音楽×暗闇で楽しく</h3>
                <p className="mb-4 text-warm-600">
                  音楽に合わせて楽しくボディメイクしたい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：ピラティスK 神戸三宮店
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">理学療法士監修</h3>
                <p className="mb-4 text-warm-600">
                  医療的視点から身体を整えたい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：ピラティススタジオDEP 神戸店 Resho
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">産後ケア専門</h3>
                <p className="mb-4 text-warm-600">
                  産後の骨盤矯正・ケアに特化
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：TOKI PILATES STUDIO 元町
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">整体×ピラティス</h3>
                <p className="mb-4 text-warm-600">
                  身体の歪みも整えたい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：La pilates 神戸元町店
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">理学療法士考案</h3>
                <p className="mb-4 text-warm-600">
                  医療現場の知見を活かした指導
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：luluto 神戸店
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">初心者歓迎</h3>
                <p className="mb-4 text-warm-600">
                  運動が初めてでも安心のサポート
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：Rintosull 神戸（4店舗）
                </p>
              </div>
            </div>
          </section>

          {/* 料金帯別セクション */}
          <section className="mb-16">
            <h2 className="mb-8 font-cormorant text-3xl font-bold text-warm-900">
              料金帯別スタジオ
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-warm-50 p-6">
                <h3 className="mb-4 text-xl font-bold text-warm-800">〜5,000円</h3>
                <ul className="space-y-2 text-warm-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>ピラティススタジオDEP 神戸店（パーソナル 2,980円）</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-warm-50 p-6">
                <h3 className="mb-4 text-xl font-bold text-warm-800">10,000円〜20,000円</h3>
                <ul className="space-y-2 text-warm-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>ピラティスK 神戸三宮店（月4回 13,420円）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>La pilates 神戸元町店（月1回 12,000円〜）</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-warm-50 p-6">
                <h3 className="mb-4 text-xl font-bold text-warm-800">その他</h3>
                <ul className="space-y-2 text-warm-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>STUDIO TOU 三宮（会員制）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>luluto 神戸店（要問合せ）</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 通う頻度・期間の目安 */}
          <section className="mb-16 rounded-2xl bg-gradient-to-br from-warm-50 to-warm-100 p-8 shadow-sm">
            <h2 className="mb-8 font-cormorant text-3xl font-bold text-warm-900">
              通う頻度・期間の目安
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-warm-800">週1回（月4回）</h3>
                <p className="mb-4 text-warm-700">
                  初心者や運動習慣をつけたい方におすすめ。3ヶ月で姿勢の変化を実感できます。
                </p>
                <div className="space-y-2 text-sm text-warm-600">
                  <p>• 1ヶ月目：動きに慣れる</p>
                  <p>• 2ヶ月目：体の変化を感じ始める</p>
                  <p>• 3ヶ月目：姿勢が改善され、周りから変化を指摘される</p>
                </div>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-warm-800">週2回（月8回）</h3>
                <p className="mb-4 text-warm-700">
                  本格的にボディメイクしたい方におすすめ。2ヶ月で見た目の変化が現れます。
                </p>
                <div className="space-y-2 text-sm text-warm-600">
                  <p>• 1ヶ月目：筋肉の使い方をマスター</p>
                  <p>• 2ヶ月目：ボディラインが変わり始める</p>
                  <p>• 3ヶ月目：理想の体型に近づく</p>
                </div>
              </div>
            </div>
          </section>

          {/* 4ステップ選び方ガイド */}
          <section className="mb-16">
            <h2 className="mb-8 font-cormorant text-3xl font-bold text-warm-900">
              4ステップで選ぶ！神戸のピラティススタジオ
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border-2 border-warm-200 bg-white p-6 shadow-sm">
                <div className="mb-3 inline-block rounded-full bg-warm-100 px-4 py-1 text-sm font-semibold text-warm-700">
                  STEP 1
                </div>
                <h3 className="mb-3 text-xl font-bold text-warm-800">目的を明確にする</h3>
                <p className="text-warm-600">
                  ダイエット、姿勢改善、体幹強化など、あなたの目的に合ったスタジオを選びましょう。
                </p>
              </div>
              <div className="rounded-xl border-2 border-warm-200 bg-white p-6 shadow-sm">
                <div className="mb-3 inline-block rounded-full bg-warm-100 px-4 py-1 text-sm font-semibold text-warm-700">
                  STEP 2
                </div>
                <h3 className="mb-3 text-xl font-bold text-warm-800">予算を決める</h3>
                <p className="text-warm-600">
                  月額2,980円〜13,420円まで幅広い料金帯があります。無理なく続けられる予算を設定しましょう。
                </p>
              </div>
              <div className="rounded-xl border-2 border-warm-200 bg-white p-6 shadow-sm">
                <div className="mb-3 inline-block rounded-full bg-warm-100 px-4 py-1 text-sm font-semibold text-warm-700">
                  STEP 3
                </div>
                <h3 className="mb-3 text-xl font-bold text-warm-800">通いやすさを確認</h3>
                <p className="text-warm-600">
                  三宮、元町、北区など、自宅や職場から通いやすい立地を選ぶと続けやすくなります。
                </p>
              </div>
              <div className="rounded-xl border-2 border-warm-200 bg-white p-6 shadow-sm">
                <div className="mb-3 inline-block rounded-full bg-warm-100 px-4 py-1 text-sm font-semibold text-warm-700">
                  STEP 4
                </div>
                <h3 className="mb-3 text-xl font-bold text-warm-800">体験レッスンを受ける</h3>
                <p className="text-warm-600">
                  スタジオの雰囲気やインストラクターとの相性を確認。ほとんどのスタジオで体験レッスンを実施しています。
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="mb-8 font-cormorant text-3xl font-bold text-warm-900">
              よくある質問
            </h2>
            <div className="space-y-4">
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  神戸でピラティス初心者におすすめのスタジオはどこですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  Rintosull 神戸がおすすめです。運動やピラティスを初めて行う方向けのプログラムをご用意しており、インストラクターがしっかりサポートいたしますので、ご安心ください。神戸市内に4店舗展開しているので通いやすさも抜群です。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  神戸三宮駅から一番近いピラティススタジオはどこですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  ピラティスK 神戸三宮店が、阪急神戸三宮駅西口より徒歩3分で最もアクセスが良いです。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  神戸で一番安いピラティススタジオはどこですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  ピラティススタジオDEP 神戸店 Reshoが平日限定パーソナルレッスン90分2,980円で最もリーズナブルです。また、La pilates 神戸元町店はサブスク月1回12,000円〜で通えます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  女性専用のピラティススタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、3つあります。ピラティスK 神戸三宮店、La pilates 神戸元町店、Rintosull 神戸（4店舗）はすべて女性専用スタジオです。男性の目を気にせず集中してトレーニングできます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  体験レッスンはありますか？料金はいくらですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  ほとんどのスタジオで体験レッスンを実施しています。ピラティスK 神戸三宮店は無料、ピラティススタジオDEP 神戸店 Reshoは2,980円、La pilates 神戸元町店は3,000円、その他スタジオは要問合せです。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  マシンピラティスとマットピラティスの違いは何ですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  マシンピラティスは専用マシン（リフォーマー）を使用し、初心者でも正しいフォームで効果的にトレーニングできます。マットピラティスはマットの上で行い、体幹を鍛えるのに効果的。初心者にはマシンピラティスがおすすめです。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  どのくらいの期間で効果が出ますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  週1回（月4回）通った場合、1ヶ月で体の使い方が変わり、2ヶ月で姿勢の変化を実感、3ヶ月で見た目の変化が現れます。週2回通うとさらに早く効果を実感できます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  運動が苦手でも大丈夫ですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、大丈夫です。ピラティスはもともとリハビリ用に開発されたエクササイズなので、運動が苦手な方や体力に自信がない方でも無理なく始められます。マシンがサポートしてくれるので、正しいフォームで効果的にトレーニングできます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  理学療法士監修のスタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、2つあります。ピラティススタジオDEP 神戸店 Reshoは理学療法士監修の完全個室スタジオ。luluto 神戸店は理学療法士が考案したスタジオで、医療的視点からの身体分析を受けられます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  産後ケアに特化したスタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、TOKI PILATES STUDIO 元町が産後ケア・骨盤矯正に特化しています。パーソナルレッスンで一人ひとりの身体に合わせた丁寧な指導を受けられます。
                </p>
              </details>
            </div>
          </section>

          {/* まとめ・CTA */}
          <section className="mb-16 rounded-2xl bg-gradient-to-br from-warm-600 to-warm-700 p-8 text-white shadow-lg">
            <h2 className="mb-4 font-cormorant text-3xl font-bold">
              神戸で理想のピラティススタジオを見つけよう
            </h2>
            <p className="mb-6 text-lg text-warm-50">
              神戸には多様なピラティススタジオがあります。音楽×暗闇のピラティスK、理学療法士監修のピラティススタジオDEP、産後ケア専門のTOKI PILATES STUDIO、整体×ピラティスのLa pilates、理学療法士考案のluluto、初心者歓迎のRintosull（4店舗）など、あなたの目的・予算・好みに合ったスタジオがきっと見つかります。
            </p>
            <p className="mb-8 text-warm-50">
              まずは体験レッスンで、スタジオの雰囲気やインストラクターとの相性を確認してみましょう。多くのスタジオが無料〜有料で体験レッスンを実施しています。
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#studios"
                className="rounded-full bg-white px-8 py-3 font-bold text-warm-700 shadow-md transition-all hover:bg-warm-50 hover:shadow-lg"
              >
                スタジオ一覧を見る
              </a>
              <Link
                href="/"
                className="rounded-full border-2 border-white px-8 py-3 font-bold text-white transition-all hover:bg-white hover:text-warm-700"
              >
                他のエリアを探す
              </Link>
            </div>
          </section>

          {/* パンくずリスト */}
          <nav className="mb-8 text-sm text-warm-600" aria-label="パンくずリスト">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-warm-800">
                  ホーム
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/area" className="hover:text-warm-800">
                  エリアから探す
                </Link>
              </li>
              <li>/</li>
              <li className="font-semibold text-warm-800">神戸</li>
            </ol>
          </nav>
        </main>

        <SiteFooter />
      </div>

      <Script
        type="application/ld+json"
        id="breadcrumb-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'ホーム',
                item: 'https://pilates-biyori.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'エリアから探す',
                item: 'https://pilates-biyori.com/area',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: '神戸',
                item: 'https://pilates-biyori.com/area/kobe',
              },
            ],
          }),
        }}
      />
    </>
  )
}
