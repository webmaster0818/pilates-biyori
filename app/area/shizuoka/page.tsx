import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】静岡のピラティススタジオおすすめ8選｜料金・体験レッスン徹底比較',
  description: '静岡エリアのおすすめピラティススタジオ8選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,静岡,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'pilates KASANE 静岡店',
    image: '/images/pilates2.jpg',
    rating: 4.2,
    price: '要問合せ',
    trial: '体験レッスン あり（手ぶらOK）',
    features: ['少人数制', '表参道・松戸展開', '健康美を引き出す', '丁寧な指導'],
    description: 'pilates KASANEは、表参道、松戸、静岡で展開している一人一人の「健康美」を引き出す少人数制のピラティススタジオです。心と身体に向き合う日々を丁寧につみ「かさね」る。体験レッスンも少人数制で丁寧に行いますので、初心者の方も安心してご参加いただけます。一度の体験レッスンでも、ピラティスの効果を実感。',
    access: '静岡市内（詳細は公式サイト参照）',
    address: '静岡県静岡市（詳細は公式サイト参照）',
    popularPlan: {
      name: '少人数制グループレッスン',
      description: '一人一人の健康美を引き出す丁寧な指導。体験レッスンも少人数制で安心。',
      price: '要問合せ',
    },
    options: [
      'グループレッスン（少人数制）',
      'プライベートレッスン',
      '体験レッスン（手ぶらOK）',
      'ウェア無料貸出',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['健康美を引き出す', 'ボディメイク', '姿勢改善', '初心者歓迎'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'ウェアレンタル無料', '少人数制'],
    },
  },
  {
    name: 'ピラティスK 静岡店',
    image: '/images/pilates3.jpg',
    rating: 4.0,
    price: '月4回 13,420円〜',
    trial: '無料体験レッスン',
    features: ['音楽×マシン', '女性専用', '新静岡駅徒歩1分', '暗闇レッスン'],
    description: '静岡県静岡市にある女性専用マシンピラティススタジオ。静岡鉄道「新静岡駅」から徒歩1分だから、平日は仕事帰りに、休日はお買い物ついでに最適。店内はカジュアルかつスタイリッシュで、音楽にあわせたグループレッスンを楽しめます。お腹、お尻、二の腕、脚、背中の部位に特化したボディメイクプログラムが充実。',
    access: '静岡鉄道 新静岡駅から徒歩1分',
    address: '静岡県静岡市（詳細は公式サイト参照）',
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
    name: 'zen place pilates 静岡',
    image: '/images/pilates4.jpg',
    rating: 4.2,
    price: '月4回 9,625円〜',
    trial: '体験レッスン あり',
    features: ['全国150店舗', 'マット＆マシン', '男性OK', '全店相互利用可'],
    description: '全国150店舗以上を展開する大手ピラティススタジオ。JR線 静岡駅から徒歩11分、静岡清水線 新静岡駅 けやき通り口から徒歩12分。マットグループ、マシングループ、プライベートレッスンと多彩なレッスンを提供。全店舗相互利用可能で、自宅近くや職場近くなど生活シーンに合わせて自由に利用できます。',
    access: 'JR静岡駅徒歩11分 / 新静岡駅徒歩12分',
    address: '静岡県静岡市（詳細は公式サイト参照）',
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
    name: 'ピラティス-8810-',
    image: '/images/pilates2.jpg',
    rating: 4.0,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['静岡市内', '地域密着', 'アットホーム', '丁寧な指導'],
    description: '静岡のピラティススタジオ。地域密着型のアットホームなスタジオで、一人ひとりに合わせた丁寧な指導を提供。初心者から経験者まで幅広く対応。静岡市内で長く愛されているスタジオです。',
    access: '静岡市内（詳細は公式サイト参照）',
    address: '静岡県静岡市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'ピラティスレッスン',
      description: '地域密着型のアットホームな指導。初心者から経験者まで対応。',
      price: '要問合せ',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      '初心者向けプログラム',
      '経験者向けプログラム',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', 'ボディメイク', '健康維持', '体幹強化'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'アットホームな空間'],
    },
  },
  {
    name: 'ピラティススタジオMAEDA',
    image: '/images/pilates3.jpg',
    rating: 4.1,
    price: '少人数グループレッスン 2,200円',
    trial: '体験レッスン あり',
    features: ['静岡駅前徒歩6分', '少人数制', 'let\'s jump', 'リーズナブル'],
    description: '静岡駅前徒歩6分の駅近スタジオ。少人数グループレッスン 2,200円とリーズナブルな価格設定が魅力。ピラティス、let\'s jumpなど多彩なレッスンを提供。アットホームな雰囲気で、初心者でも安心して通えます。',
    access: '静岡駅前徒歩6分',
    address: '静岡県静岡市（詳細は公式サイト参照）',
    popularPlan: {
      name: '少人数グループレッスン',
      description: '少人数制で丁寧な指導。2,200円とリーズナブルな価格設定。',
      price: '少人数グループレッスン 2,200円',
    },
    options: [
      'ピラティス',
      'let\'s jump',
      '少人数グループレッスン',
      'プライベートレッスン',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['お手頃に始めたい', 'ボディメイク', '姿勢改善', '楽しく運動'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['駅徒歩6分', 'ロッカー', '少人数制', 'リーズナブル'],
    },
  },
  {
    name: 'pilates Light 静岡',
    image: '/images/pilates4.jpg',
    rating: 4.2,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['マシン専門プライベート', '2022年夏OPEN', '2児の母', 'Lolita\'s Legacy認定'],
    description: '2022年夏、静岡市にマシンピラティス専門プライベートスタジオをオープン。Lolita\'s Legacy™️認定ピラティス指導者、産前産後ピラティス指導者認定。5歳・3歳を育てる2児の母。大人数があまり得意ではなく、1対1で話す時間が好き。リラックスできる空間で、丁寧なマンツーマン指導を提供。',
    access: '静岡市内（詳細は公式サイト参照）',
    address: '静岡県静岡市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'プライベートレッスン',
      description: 'マンツーマンで丁寧な指導。産前産後ピラティスにも対応。',
      price: '要問合せ',
    },
    options: [
      'プライベートレッスン',
      'マタニティピラティス',
      'リカバリーピラティス（産後）',
      'マシン専門',
    ],
    userProfile: {
      ageRange: '30代〜40代が中心',
      genderRatio: '女性100%',
      purpose: ['マンツーマン希望', '産前産後ケア', 'リラックス', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['プライベート空間', 'マシン完備', '産前産後対応', 'リラックス空間'],
    },
  },
  {
    name: 'Natural Soma',
    image: '/images/pilates2.jpg',
    rating: 4.1,
    price: '3回体験プランあり',
    trial: '3回体験プラン あり',
    features: ['静岡市駿河区', 'マシン専門', '健康な身体づくり', 'お得な体験プラン'],
    description: '静岡市駿河区のマシンピラティス専門 Pilates Studio Natural Soma。当スタジオを初めてご利用になる方に、3回分のレッスンをお得に体験していただけるプランがございます。専用マシンを用いたピラティスのレッスンを通じて、健康な身体づくりをサポート。',
    access: '静岡市駿河区',
    address: '静岡県静岡市駿河区（詳細は公式サイト参照）',
    popularPlan: {
      name: '3回体験プラン',
      description: '初めての方にお得な3回体験プラン。マシンピラティスを試せる。',
      price: '3回体験プランあり（詳細は公式サイト参照）',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      '3回体験プラン',
      'マシン専門',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['健康な身体づくり', 'お得に体験', 'ボディメイク', '姿勢改善'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'マシン完備', '3回体験プラン'],
    },
  },
  {
    name: 'Repilates 富士宮店',
    image: '/images/pilates3.jpg',
    rating: 4.0,
    price: '要問合せ',
    trial: '体験レッスン あり（口コミ限定キャンペーン）',
    features: ['女性専用', '富士宮市', 'グループレッスン', 'ソックスプレゼント'],
    description: 'マシンピラティス専門スタジオ Repilates 富士宮店。女性専用スタジオで、グループレッスンを提供。口コミ限定でグループレッスン+ピラティスソックスプレゼントのキャンペーンを実施中。都内・関東圏に複数店舗展開するスタジオの静岡進出。',
    access: '富士宮市（詳細は公式サイト参照）',
    address: '静岡県富士宮市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'グループレッスン',
      description: '女性専用のグループレッスン。口コミ限定キャンペーン実施中。',
      price: '要問合せ',
    },
    options: [
      'グループレッスン',
      '口コミ限定キャンペーン',
      'ピラティスソックスプレゼント',
      '女性専用',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['女性専用希望', 'ボディメイク', '仲間と運動', 'キャンペーン活用'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', '女性専用', 'キャンペーン実施中'],
    },
  },
]

export default async function ShizuokaAreaPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-warm-50 to-white">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* ヘッダーセクション */}
          <header className="mb-12 text-center">
            <h1 className="mb-4 font-cormorant text-4xl font-bold tracking-tight text-warm-900 sm:text-5xl">
              静岡のピラティススタジオ<span className="block text-warm-600">おすすめ8選</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-warm-700">
              静岡エリアで人気のピラティススタジオを厳選。マシンピラティス、体験レッスン、料金プランを徹底比較。初心者から経験者まで、あなたにぴったりのスタジオが見つかります。
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
                  おすすめ：ピラティスK 静岡店
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">全国最大級</h3>
                <p className="mb-4 text-warm-600">
                  実績と安心感を重視する方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：zen place pilates 静岡
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">少人数制</h3>
                <p className="mb-4 text-warm-600">
                  丁寧な指導を受けたい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：pilates KASANE 静岡店
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">リーズナブル</h3>
                <p className="mb-4 text-warm-600">
                  お手頃価格で始めたい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：ピラティススタジオMAEDA
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">プライベート専門</h3>
                <p className="mb-4 text-warm-600">
                  マンツーマンで集中指導を受けたい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：pilates Light 静岡
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">お得な体験プラン</h3>
                <p className="mb-4 text-warm-600">
                  3回体験で試したい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：Natural Soma
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
                    <span>zen place pilates 静岡（月4回 9,625円〜）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>ピラティススタジオMAEDA（少人数 2,200円）</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-warm-50 p-6">
                <h3 className="mb-4 text-xl font-bold text-warm-800">10,000円〜20,000円</h3>
                <ul className="space-y-2 text-warm-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>ピラティスK 静岡店（月4回 13,420円）</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-warm-50 p-6">
                <h3 className="mb-4 text-xl font-bold text-warm-800">その他</h3>
                <ul className="space-y-2 text-warm-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>pilates KASANE 静岡店（要問合せ）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>pilates Light 静岡（プライベート専門）</span>
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
              4ステップで選ぶ！静岡のピラティススタジオ
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
                  月額2,200円〜13,420円まで幅広い料金帯があります。無理なく続けられる予算を設定しましょう。
                </p>
              </div>
              <div className="rounded-xl border-2 border-warm-200 bg-white p-6 shadow-sm">
                <div className="mb-3 inline-block rounded-full bg-warm-100 px-4 py-1 text-sm font-semibold text-warm-700">
                  STEP 3
                </div>
                <h3 className="mb-3 text-xl font-bold text-warm-800">通いやすさを確認</h3>
                <p className="text-warm-600">
                  新静岡駅徒歩1分、静岡駅前徒歩6分など、自宅や職場から通いやすい立地を選ぶと続けやすくなります。
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
                  静岡でピラティス初心者におすすめのスタジオはどこですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  pilates KASANE 静岡店がおすすめです。少人数制で丁寧に指導してくれるので、初心者の方も安心してご参加いただけます。体験レッスンも少人数制で、一度の体験レッスンでもピラティスの効果を実感できます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  静岡駅から一番近いピラティススタジオはどこですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  ピラティスK 静岡店が新静岡駅から徒歩1分で最もアクセスが良いです。次いでピラティススタジオMAEDAが静岡駅前徒歩6分です。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  静岡で一番安いピラティススタジオはどこですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  ピラティススタジオMAEDAが少人数グループレッスン 2,200円で最もリーズナブルです。また、zen place pilates 静岡は月4回9,625円で通えます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  女性専用のピラティススタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、2つあります。ピラティスK 静岡店とRepilates 富士宮店は女性専用スタジオです。男性の目を気にせず集中してトレーニングできます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  体験レッスンはありますか？料金はいくらですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  ほとんどのスタジオで体験レッスンを実施しています。ピラティスK 静岡店は無料、Natural Somaは3回体験プランあり、その他スタジオは要問合せです。
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
                  マンツーマンで指導してもらえるスタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、pilates Light 静岡がマシン専門プライベートスタジオです。完全マンツーマンで丁寧な指導を受けられます。産前産後ピラティスにも対応しています。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  お得に体験できるスタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  Natural Somaでは、初めての方に3回分のレッスンをお得に体験していただけるプランがございます。複数回試せるので、自分に合うか確認してから入会できます。
                </p>
              </details>
            </div>
          </section>

          {/* まとめ・CTA */}
          <section className="mb-16 rounded-2xl bg-gradient-to-br from-warm-600 to-warm-700 p-8 text-white shadow-lg">
            <h2 className="mb-4 font-cormorant text-3xl font-bold">
              静岡で理想のピラティススタジオを見つけよう
            </h2>
            <p className="mb-6 text-lg text-warm-50">
              静岡には多様なピラティススタジオがあります。音楽×暗闇のピラティスK、全国最大級のzen place、少人数制のpilates KASANE、リーズナブルなピラティススタジオMAEDA、プライベート専門のpilates Light、3回体験のNatural Somaなど、あなたの目的・予算・好みに合ったスタジオがきっと見つかります。
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
              <li className="font-semibold text-warm-800">静岡</li>
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
                name: '静岡',
                item: 'https://pilates-biyori.com/area/shizuoka',
              },
            ],
          }),
        }}
      />
    </>
  )
}
