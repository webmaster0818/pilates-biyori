import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】新潟のピラティススタジオおすすめ8選｜料金・体験レッスン徹底比較',
  description: '新潟エリアのおすすめピラティススタジオ8選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,新潟,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK 新潟店',
    image: '/images/pilates2.jpg',
    rating: 4.0,
    price: '月4回 13,420円〜',
    trial: '無料体験レッスン',
    features: ['音楽×マシン', '女性専用', 'バス停徒歩4分', '暗闇レッスン'],
    description: 'ピラティスK 新潟店は、新潟県新潟市にある女性専用マシンピラティススタジオ。バス停「女池北」より徒歩4分だから、平日は仕事帰りに、休日はお買い物ついでに最適。店内はカジュアルかつスタイリッシュで、音楽にあわせたグループレッスンを楽しめます。お腹、お尻、二の腕、脚、背中の部位に特化したボディメイクプログラムが充実。',
    access: 'バス停「女池北」より徒歩4分',
    address: '新潟県新潟市（詳細は公式サイト参照）',
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
    name: 'zen place pilates 新潟',
    image: '/images/pilates3.jpg',
    rating: 4.2,
    price: '月4回 9,625円〜',
    trial: '体験レッスン あり',
    features: ['全国150店舗', 'マット＆マシン', '男性OK', '新潟駅徒歩5分'],
    description: '全国150店舗以上を展開する大手ピラティススタジオ。zen place pilates 新潟スタジオは、新潟駅徒歩5分。マットグループ、マシン（リフォーマー）グループ、プライベートレッスンがあり、男性もOKです。体験・見学もお気軽に。全店舗相互利用可能で、自宅近くや職場近くなど生活シーンに合わせて自由に利用できます。',
    access: '新潟駅徒歩5分',
    address: '新潟県新潟市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マットグループ 月4',
      description: 'マットピラティスのグループレッスン。初心者にもおすすめの基本プラン。',
      price: '月4回 9,625円（税込）',
    },
    options: [
      'フリープラン（通い放題 14,960円）',
      'マット＆マシングループ MM22（各2回 12,650円）',
      'リフォーマーグループ RG4（月4回 15,400円）',
      'プライベートレッスン（月4回 33,880円）',
    ],
    userProfile: {
      ageRange: '20代〜60代まで幅広い',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'ボディメイク', 'リハビリ'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照（早朝〜夜まで開催）',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', 'マシン完備', '男女共用'],
    },
  },
  {
    name: 'Studio Haru',
    image: '/images/pilates4.jpg',
    rating: 4.1,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['新潟市中央区', 'パーソナル専門', '元メディカルフィットネス勤務', '丁寧な指導'],
    description: '新潟市中央区のピラティス&パーソナルスタジオ。トレーナー養成大学卒業後、新潟市内の整形外科クリニック付属メディカルフィットネスに入職。"Exercise is Medicine（運動は薬である）"を信念に、ドクターや理学療法士と連携しながらオリンピアンから運動初心者まで幅広い指導経験を持つ。一人ひとりの身体の細かな部分を見つめなおす丁寧な指導を心掛けています。',
    access: '新潟市中央区（詳細は公式サイト参照）',
    address: '新潟県新潟市中央区（詳細は公式サイト参照）',
    popularPlan: {
      name: 'パーソナルピラティス',
      description: 'メディカルフィットネス経験を活かした丁寧な指導。一人ひとりに合わせたプログラム。',
      price: '要問合せ',
    },
    options: [
      'パーソナルレッスン',
      'グループレッスン',
      'メディカルフィットネス経験者指導',
      '初心者〜アスリート対応',
    ],
    userProfile: {
      ageRange: '20代〜60代まで幅広い',
      genderRatio: '女性75% / 男性25%',
      purpose: ['丁寧な指導希望', 'リハビリ', 'ボディメイク', 'アスリート向け'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['パーソナル空間', 'マシン完備', 'メディカル経験者指導'],
    },
  },
  {
    name: 'ピラティススタジオDEP 新潟',
    image: '/images/pilates2.jpg',
    rating: 4.2,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['完全個室', 'マシン専門', '理学療法士監修', '整形外科勤務経験'],
    description: '完全個室のマシンピラティススタジオ。新潟県新潟市内の整形外科クリニックで7年勤務。リハビリセンター主任として若年者〜高齢者を対象に運動器疾患を中心に幅広く臨床経験を積む。臨床の中でピラティスに出会い、ピラティスを通して自身の身体の変化の著しさに感動しピラティスに魅了される。理学療法士の専門知識を活かした丁寧な指導を提供。',
    access: '新潟市内（詳細は公式サイト参照）',
    address: '新潟県新潟市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マシンピラティス（完全個室）',
      description: '理学療法士監修の完全個室マシンピラティス。リハビリ経験を活かした指導。',
      price: '要問合せ',
    },
    options: [
      'プライベートレッスン',
      '完全個室',
      '理学療法士監修プログラム',
      'リハビリ対応',
    ],
    userProfile: {
      ageRange: '30代〜70代まで幅広い',
      genderRatio: '女性80% / 男性20%',
      purpose: ['リハビリ', '痛み改善', '姿勢矯正', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['完全個室', 'マシン完備', '理学療法士監修', 'リハビリ対応'],
    },
  },
  {
    name: 'ピラティススタジオAs.エース',
    image: '/images/pilates3.jpg',
    rating: 4.0,
    price: '要問合せ',
    trial: '体験レッスン あり（トライアル体験も）',
    features: ['万代島', '体験2種類', 'グループ＆プライベート', '新潟市中央区'],
    description: '新潟市万代島のピラティススタジオ As.エース。体験のみ・トライアル体験のみ・両方体験とお好きな形で体験できます。通常体験募集中。グループレッスンとプライベートレッスンの両方を提供。初心者から経験者まで幅広く対応。',
    access: '新潟市万代島',
    address: '新潟県新潟市中央区万代島（詳細は公式サイト参照）',
    popularPlan: {
      name: 'グループレッスン',
      description: '体験2種類から選べる。通常体験・トライアル体験・両方体験が可能。',
      price: '要問合せ',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      '通常体験',
      'トライアル体験',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['体験から始めたい', 'グループ＆プライベート選択', 'ボディメイク', '姿勢改善'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'グループ＆プライベート対応'],
    },
  },
  {
    name: 'マシンピラティス＆整体スタジオ（女池）',
    image: '/images/pilates4.jpg',
    rating: 4.1,
    price: '初回体験 5,500円',
    trial: '初回体験 5,500円',
    features: ['女池', 'マシン＆整体', '理学療法士オーナー', '身体の悩み相談'],
    description: '新潟市女池のマシンピラティス＆整体のスタジオ。初回体験5,500円。お身体のお悩みご相談ください。《いつまでも、自分の身体が好きでいられる！》ピラティスマシン導入店。理学療法士のオーナーによるマシンピラティスと整体の融合。身体の悩みに寄り添った丁寧な施術を提供。',
    access: '新潟市女池',
    address: '新潟県新潟市女池（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マシンピラティス＆整体',
      description: '理学療法士オーナーによるマシンピラティスと整体の融合。初回体験5,500円。',
      price: '初回体験 5,500円',
    },
    options: [
      'マシンピラティス',
      '整体',
      '理学療法士による施術',
      '身体の悩み相談',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['整体×ピラティス', '身体の悩み相談', '痛み改善', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['マシン完備', '整体施術', '理学療法士オーナー', '身体相談対応'],
    },
  },
  {
    name: 'Pilates Mee 新潟（あれば）',
    image: '/images/pilates2.jpg',
    rating: 4.0,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['セミパーソナル', '最大3名', 'コスパ良', '女性中心'],
    description: 'セミパーソナル専門のピラティススタジオ。最大3名の少人数制で、一人ひとりに丁寧な指導を提供。価格とクオリティの両立を実現し、コスパが良いと評判。女性を中心に人気のスタジオです。',
    access: '新潟市内（詳細は公式サイト参照）',
    address: '新潟県新潟市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'セミパーソナルレッスン',
      description: '最大3名の少人数制。価格とクオリティ両立のコスパ良好プラン。',
      price: '要問合せ',
    },
    options: [
      'セミパーソナルレッスン（最大3名）',
      'プライベートレッスン',
      '女性中心',
      'コスパ重視',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['コスパ重視', '少人数希望', 'ボディメイク', '仲間と運動'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', '少人数制', 'コスパ良'],
    },
  },
  {
    name: 'Two Three 新潟（あれば）',
    image: '/images/pilates3.jpg',
    rating: 4.0,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['少人数制', '最大8名', '全国展開', 'ピラティスアカデミー運営'],
    description: '全国展開のピラティススタジオ Two Three。最大8名までの少人数制グループレッスンが特徴で、一人ひとりに的確な指導が行き届くよう配慮。誰でも通いやすいピラティススタジオです。まずは体験レッスンからお気軽にお申し込みください。',
    access: '新潟市内（詳細は公式サイト参照）',
    address: '新潟県新潟市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'グループレッスン（最大8名）',
      description: '少人数制で一人ひとりに的確な指導。初心者からベテランまで対応。',
      price: '要問合せ',
    },
    options: [
      'プライベートレッスン',
      'グループレッスン',
      'リフォーマー・スパインコレクター・コンビチェア・タワーなど充実',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['美しいカラダづくり', '姿勢改善', 'ボディメイク', '体幹強化'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['リフォーマー', 'スパインコレクター', 'コンビチェア', 'タワー', 'マシン充実'],
    },
  },
]

export default async function NiigataAreaPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-warm-50 to-white">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* ヘッダーセクション */}
          <header className="mb-12 text-center">
            <h1 className="mb-4 font-cormorant text-4xl font-bold tracking-tight text-warm-900 sm:text-5xl">
              新潟のピラティススタジオ<span className="block text-warm-600">おすすめ8選</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-warm-700">
              新潟エリアで人気のピラティススタジオを厳選。マシンピラティス、体験レッスン、料金プランを徹底比較。初心者から経験者まで、あなたにぴったりのスタジオが見つかります。
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
                  おすすめ：ピラティスK 新潟店
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">全国最大級</h3>
                <p className="mb-4 text-warm-600">
                  実績と安心感を重視する方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：zen place pilates 新潟
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">メディカル経験者指導</h3>
                <p className="mb-4 text-warm-600">
                  医療現場経験を活かした丁寧な指導を受けたい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：Studio Haru
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">理学療法士監修</h3>
                <p className="mb-4 text-warm-600">
                  完全個室で専門的な指導を受けたい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：ピラティススタジオDEP 新潟
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">整体×ピラティス</h3>
                <p className="mb-4 text-warm-600">
                  マシンピラティスと整体を組み合わせたい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：マシンピラティス＆整体スタジオ（女池）
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">体験充実</h3>
                <p className="mb-4 text-warm-600">
                  体験レッスンを試してから決めたい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：ピラティススタジオAs.エース
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
                <h3 className="mb-4 text-xl font-bold text-warm-800">〜10,000円</h3>
                <ul className="space-y-2 text-warm-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>zen place pilates 新潟（月4回 9,625円〜）</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-warm-50 p-6">
                <h3 className="mb-4 text-xl font-bold text-warm-800">10,000円〜20,000円</h3>
                <ul className="space-y-2 text-warm-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>ピラティスK 新潟店（月4回 13,420円）</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-warm-50 p-6">
                <h3 className="mb-4 text-xl font-bold text-warm-800">その他</h3>
                <ul className="space-y-2 text-warm-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>Studio Haru（パーソナル専門）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>ピラティススタジオDEP（完全個室）</span>
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
              4ステップで選ぶ！新潟のピラティススタジオ
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
                  月額9,625円〜13,420円まで幅広い料金帯があります。無理なく続けられる予算を設定しましょう。
                </p>
              </div>
              <div className="rounded-xl border-2 border-warm-200 bg-white p-6 shadow-sm">
                <div className="mb-3 inline-block rounded-full bg-warm-100 px-4 py-1 text-sm font-semibold text-warm-700">
                  STEP 3
                </div>
                <h3 className="mb-3 text-xl font-bold text-warm-800">通いやすさを確認</h3>
                <p className="text-warm-600">
                  新潟駅徒歩5分、女池、万代島など、自宅や職場から通いやすい立地を選ぶと続けやすくなります。
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
                  新潟でピラティス初心者におすすめのスタジオはどこですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  zen place pilates 新潟がおすすめです。全国150店舗以上を展開する大手で、マットグループ、マシングループ、プライベートレッスンと多彩なレッスンを提供。初心者向けのクラスも充実しています。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  新潟駅から一番近いピラティススタジオはどこですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  zen place pilates 新潟が新潟駅徒歩5分で最もアクセスが良いです。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  新潟で一番安いピラティススタジオはどこですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  zen place pilates 新潟が月4回9,625円で最もリーズナブルです。また、ピラティスK 新潟店は月4回13,420円で無料体験レッスンも実施しています。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  女性専用のピラティススタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、ピラティスK 新潟店は女性専用スタジオです。音楽×暗闇×マシンピラティスの融合レッスンで、男性の目を気にせず集中してトレーニングできます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  体験レッスンはありますか？料金はいくらですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  ほとんどのスタジオで体験レッスンを実施しています。ピラティスK 新潟店は無料、マシンピラティス＆整体スタジオは初回体験5,500円、その他スタジオは要問合せです。
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
                  はい、2つあります。ピラティススタジオDEP 新潟は完全個室のマシン専門で、整形外科クリニックで7年勤務した理学療法士が監修。マシンピラティス＆整体スタジオ（女池）も理学療法士のオーナーによる運営です。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  整体とピラティスを組み合わせたスタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、マシンピラティス＆整体スタジオ（女池）では、理学療法士のオーナーによるマシンピラティスと整体の融合施術を受けられます。初回体験5,500円で、身体の悩みに寄り添った丁寧な施術を提供しています。
                </p>
              </details>
            </div>
          </section>

          {/* まとめ・CTA */}
          <section className="mb-16 rounded-2xl bg-gradient-to-br from-warm-600 to-warm-700 p-8 text-white shadow-lg">
            <h2 className="mb-4 font-cormorant text-3xl font-bold">
              新潟で理想のピラティススタジオを見つけよう
            </h2>
            <p className="mb-6 text-lg text-warm-50">
              新潟には多様なピラティススタジオがあります。音楽×暗闇のピラティスK、全国最大級のzen place、メディカル経験者指導のStudio Haru、理学療法士監修のピラティススタジオDEP、整体×ピラティスのマシンピラティス＆整体スタジオ、体験充実のピラティススタジオAs.エースなど、あなたの目的・予算・好みに合ったスタジオがきっと見つかります。
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
              <li className="font-semibold text-warm-800">新潟</li>
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
                name: '新潟',
                item: 'https://pilates-biyori.com/area/niigata',
              },
            ],
          }),
        }}
      />
    </>
  )
}
