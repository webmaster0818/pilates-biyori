import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】札幌のピラティススタジオおすすめ8選｜料金・体験レッスン徹底比較',
  description: '札幌エリアのおすすめピラティススタジオ8選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,札幌,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 札幌',
    image: '/images/pilates2.jpg',
    rating: 4.2,
    price: 'グループ体験 1,000円',
    trial: '体験レッスン 1,000円',
    features: ['マット＆マシン', '全国展開', '札幌駅直結', 'インストラクター養成'],
    description: '全国100店舗以上を展開する大手ピラティススタジオ。札幌駅直結のJRタワー内で通いやすさ抜群。マットピラティスからマシンピラティスまで幅広いレッスンを提供。初心者からインストラクター養成まで対応し、アットホームな雰囲気で長く続けられるスタジオです。',
    access: '札幌駅直結（JRタワーオフィスプラザさっぽろ8F）',
    address: '北海道札幌市中央区北5条西2-5 JRタワーオフィスプラザさっぽろ 8F',
    popularPlan: {
      name: 'グループレッスン体験',
      description: 'マット・マシンどちらも選べる体験レッスン。初心者でも安心の丁寧な指導。',
      price: '体験 1,000円（税込）',
    },
    options: [
      'プライベートレッスン（1回 8,250円）',
      'インストラクター養成コース（別途）',
      'ウェアレンタル（月額 2,200円）',
      'タオルレンタル（月額 1,100円）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['姿勢改善', 'ダイエット', '体幹強化', 'インストラクター養成'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'ウォーターサーバー'],
    },
  },
  {
    name: 'ピラティスK 札幌駅前店',
    image: '/images/pilates3.jpg',
    rating: 4.0,
    price: '月4回 13,420円〜',
    trial: '無料体験レッスン',
    features: ['音楽×マシン', '女性専用', '暗闇レッスン', '札幌駅直結'],
    description: '音楽に合わせて楽しくボディメイク。女性専用スタジオで安心。札幌駅地下直結で天候に左右されずに通える。暗闇×音楽×マシンピラティスの融合レッスンが人気。周りの目を気にせず集中できる環境で、楽しみながら理想のボディラインを手に入れられます。',
    access: '札幌駅南口から徒歩5分 / 地下鉄さっぽろ駅徒歩3分',
    address: '北海道札幌市中央区北4条西5丁目 アスティ45ビル 2F',
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
      hours: '火〜金 10:00-22:00 / 土日祝 10:00-18:30',
      closed: '月曜日',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '暗闇スタジオ', '女性専用'],
    },
  },
  {
    name: 'CLUB PILATES 札幌',
    image: '/images/pilates4.jpg',
    rating: 4.1,
    price: '要問合せ',
    trial: '体験レッスン 無料',
    features: ['アメリカ発', '世界最大級', 'グループ＆プライベート', '地下鉄直結'],
    description: 'アメリカ発の世界最大級ピラティススタジオチェーン。地下鉄さっぽろ駅15番出口直結で通いやすい。グループレッスンからプライベートレッスンまで幅広く対応。全米No.1のピラティスメソッドで、初心者から上級者まで満足できるプログラムを提供。',
    access: '地下鉄東豊線さっぽろ駅15番出口直結',
    address: '北海道札幌市北区北8条西1-3 さつきた8・1 A棟1F',
    popularPlan: {
      name: '体験レッスン',
      description: '初回無料で世界最大級のピラティスメソッドを体験できます。',
      price: '体験 無料',
    },
    options: [
      'グループレッスン（月額プラン）',
      'プライベートレッスン（要問合せ）',
      'ウェアレンタル（月額 2,200円）',
      'タオルセット（月額 1,100円）',
    ],
    userProfile: {
      ageRange: '20代〜60代まで幅広い',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', '姿勢改善', '体幹強化', 'リハビリ'],
    },
    basicInfo: {
      hours: '月〜金 7:00-21:00 / 土日 7:00-18:00',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', '最新マシン完備'],
    },
  },
  {
    name: 'スターピラティス 札幌駅前スタジオ',
    image: '/images/pilates2.jpg',
    rating: 4.3,
    price: '月2回 5,500円〜',
    trial: '体験レッスン あり',
    features: ['業界最安値級', 'チカホ直結', '酸素カプセル', 'セルフエステ無料'],
    description: '業界最安値級の月額5,500円から始められるマシンピラティス。チカホ直結の札幌グランドホテル別館内で天候を気にせず通える。酸素カプセル・水素吸入・セルフエステマシンが追加料金なしで利用可能。初心者専用プログラムが充実し、85%が初心者からスタート。',
    access: 'チカホ直結・札幌グランドホテル別館5F',
    address: '札幌市中央区北1条西4丁目2−12 札幌グランドホテル別館5F',
    popularPlan: {
      name: '月2回メンバー',
      description: '業界最安値級の月額5,500円。初心者でも続けやすいプラン。',
      price: '月2回 5,500円（税込）',
    },
    options: [
      '月4回メンバー（8,800円）',
      '追加レッスンチケット（1回 2,750円）',
      'セルフエステマシン（1日1回無料）',
      '酸素カプセル・水素吸入（別途料金）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['コスパ重視', 'ボディメイク', '姿勢改善', '美容ケア'],
    },
    basicInfo: {
      hours: '平日 10:00〜20:00 / 土日祝 10:00〜15:00',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', '酸素カプセル', 'セルフエステ', 'コワーキングスペース'],
    },
  },
  {
    name: 'La pilates 札幌店',
    image: '/images/pilates3.jpg',
    rating: 4.2,
    price: '月1回 12,000円〜',
    trial: '体験レッスン 3,000円',
    features: ['整体×ピラティス', '女性専用', '大通駅徒歩1分', '骨膜整体'],
    description: '整体とマシンピラティスを融合させた女性専用プライベートスタジオ。大通駅34番出口から徒歩1分。独自の「骨膜整体 × マシンピラティス」プログラムで、肩こり・腰痛・姿勢の悩みを根本からケア。ウッド調の温かみある内装でリラックスしながらトレーニングできます。',
    access: '大通駅34番出口から徒歩1分',
    address: '北海道札幌市中央区南1条西1-2 松崎ビル3F',
    popularPlan: {
      name: 'サブスク 月1回コース',
      description: '整体とマシンピラティスの融合プログラム。初心者から経験者まで対応。',
      price: '月1回 12,000円（税込）',
    },
    options: [
      '月2回コース（月額 22,000円・単価 11,000円）',
      '月4回コース（月額 40,000円・単価 10,000円）',
      '月6回コース（月額 54,000円・単価 9,000円）',
      '年払いコース（さらにお得）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['肩こり・腰痛改善', '姿勢改善', 'リハビリ', 'ボディメイク'],
    },
    basicInfo: {
      hours: '9:00〜21:00（最終受付20:00）',
      closed: '年末年始',
      facilities: ['ロッカー', 'パウダールーム', 'マシン4台', 'プライベート空間'],
    },
  },
  {
    name: 'LATECO（ラティコ）',
    image: '/images/pilates4.jpg',
    rating: 4.1,
    price: '月4回 15,400円',
    trial: '体験レッスン 2,000円',
    features: ['加圧×ピラティス', '女性専用', 'AI姿勢解析', '大通駅徒歩3分'],
    description: '北海道初の加圧・マシンピラティス専門スタジオ。大通駅から徒歩3分。加圧ベルトで血流を制限し成長ホルモンの分泌を促進。AI姿勢解析で姿勢・バランスを可視化し、効果的なトレーニングを実現。完全予約制・少人数制（8名限定）で密を避けて安心。',
    access: '大通駅から徒歩3分',
    address: '北海道札幌市中央区（詳細は公式サイト参照）',
    popularPlan: {
      name: '月会費（月4回利用）',
      description: '加圧×マシンピラティスで成長ホルモン分泌を促進。美肌・ダイエット効果が期待できます。',
      price: '月4回 15,400円（税込）',
    },
    options: [
      'AI姿勢解析（Sportip）',
      'サプリメントサーバー（Grande・無料）',
      'プロテイン自動調合（最大16種）',
      '1レッスン50分',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['アンチエイジング', 'ダイエット', '基礎体温向上', '美肌・美髪'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['女性専用', '少人数制（8名限定）', '完全予約制', 'AI姿勢解析', 'サプリメントサーバー'],
    },
  },
  {
    name: 'BodySoul（ボディソウル）',
    image: '/images/pilates2.jpg',
    rating: 4.3,
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['北海道初', 'マット専門', '2004年開設', 'インストラクター養成'],
    description: '2004年開設、北海道初のマットピラティス専門スタジオ。20年以上の実績があり、多くの会員が1回のレッスンで身体の変化を実感。初心者でも安心して始められる丁寧な指導が魅力。グループレッスンとプライベートレッスンの両方に対応。',
    access: '詳細は公式サイト参照',
    address: '北海道札幌市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'グループレッスン',
      description: '少人数制で仲間と楽しく続けられます。初心者も安心のプログラム。',
      price: '要問合せ',
    },
    options: [
      'プライベートレッスン（マンツーマン指導）',
      'インストラクター養成コース（FTP認定ライセンス）',
      'グループレッスン',
    ],
    userProfile: {
      ageRange: '40代〜60代が中心',
      genderRatio: '女性95% / 男性5%',
      purpose: ['腰痛改善', '肩こり解消', '体形改善', 'リハビリ'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['マットピラティス専門', '少人数制', 'インストラクター養成'],
    },
  },
  {
    name: 'Repilates 札幌円山店',
    image: '/images/pilates3.jpg',
    rating: 4.0,
    price: '要問合せ',
    trial: '体験レッスン 3,300円',
    features: ['女性専用', 'マシン専門', '円山エリア', 'ボディリメイク'],
    description: 'マシン専門ピラティススタジオ。円山エリアに展開する女性専用スタジオ。「10回で違いを知り、20回で見た目が変わり、30回ですべてが変わる」をコンセプトに、姿勢習慣を正すことで美しいボディラインを実現。ライフスタイルマガジン「poroco」に掲載実績あり。',
    access: '円山エリア',
    address: '北海道札幌市中央区北１条西２０丁目３ 岸本ビル１F',
    popularPlan: {
      name: '体験レッスン',
      description: 'マシンピラティス初心者でも安心の体験プログラム。60分で効果を実感。',
      price: '60分 3,300円（税込）',
    },
    options: [
      '月額プラン（要問合せ）',
      'プライベートレッスン（要問合せ）',
      'グループレッスン',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '美しいボディライン'],
    },
    basicInfo: {
      hours: '9:00〜21:00',
      closed: '不定休',
      facilities: ['女性専用', 'マシン専門', 'ロッカー', 'パウダールーム'],
    },
  },
]

export default async function SapporoAreaPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-warm-50 to-white">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* ヘッダーセクション */}
          <header className="mb-12 text-center">
            <h1 className="mb-4 font-cormorant text-4xl font-bold tracking-tight text-warm-900 sm:text-5xl">
              札幌のピラティススタジオ<span className="block text-warm-600">おすすめ8選</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-warm-700">
              札幌エリアで人気のピラティススタジオを厳選。マシンピラティス、体験レッスン、料金プランを徹底比較。初心者から経験者まで、あなたにぴったりのスタジオが見つかります。
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
                  おすすめ：ピラティスK 札幌駅前店
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">業界最安値級</h3>
                <p className="mb-4 text-warm-600">
                  コスパ重視で気軽に始めたい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：スターピラティス 札幌駅前スタジオ
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">整体×ピラティス</h3>
                <p className="mb-4 text-warm-600">
                  肩こり・腰痛を根本から改善したい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：La pilates 札幌店
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">全国展開の大手</h3>
                <p className="mb-4 text-warm-600">
                  実績と安心感を重視する方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：zen place pilates 札幌
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">加圧×ピラティス</h3>
                <p className="mb-4 text-warm-600">
                  成長ホルモン分泌でアンチエイジングしたい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：LATECO
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-bold text-warm-800">世界最大級</h3>
                <p className="mb-4 text-warm-600">
                  アメリカ発の本格メソッドを体験したい方に
                </p>
                <p className="text-sm font-semibold text-warm-700">
                  おすすめ：CLUB PILATES 札幌
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
                    <span>スターピラティス 札幌駅前（月2回 5,500円〜）</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-warm-50 p-6">
                <h3 className="mb-4 text-xl font-bold text-warm-800">10,000円〜20,000円</h3>
                <ul className="space-y-2 text-warm-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>ピラティスK 札幌駅前店（月4回 13,420円）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>LATECO（月4回 15,400円）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>La pilates 札幌店（月1回 12,000円〜）</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-warm-50 p-6">
                <h3 className="mb-4 text-xl font-bold text-warm-800">プライベート専門</h3>
                <ul className="space-y-2 text-warm-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>zen place pilates 札幌（1回 8,250円〜）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-warm-600">•</span>
                    <span>BodySoul（要問合せ）</span>
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
              4ステップで選ぶ！札幌のピラティススタジオ
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
                  月額5,500円〜20,000円まで幅広い料金帯があります。無理なく続けられる予算を設定しましょう。
                </p>
              </div>
              <div className="rounded-xl border-2 border-warm-200 bg-white p-6 shadow-sm">
                <div className="mb-3 inline-block rounded-full bg-warm-100 px-4 py-1 text-sm font-semibold text-warm-700">
                  STEP 3
                </div>
                <h3 className="mb-3 text-xl font-bold text-warm-800">通いやすさを確認</h3>
                <p className="text-warm-600">
                  札幌駅直結や大通駅近など、自宅や職場から通いやすい立地を選ぶと続けやすくなります。
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
                  札幌でピラティス初心者におすすめのスタジオはどこですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  スターピラティス札幌駅前スタジオがおすすめです。入会者の85%が初心者で、初級クラスはインストラクター2名体制でサポート。月額5,500円から始められるので、気軽にスタートできます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  札幌駅直結で通えるピラティススタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、3つあります。zen place pilates 札幌（JRタワー8F）、ピラティスK 札幌駅前店（アスティ45ビル2F・地下直結）、CLUB PILATES 札幌（地下鉄さっぽろ駅直結）。天候に左右されず通えます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  札幌で一番安いピラティススタジオはどこですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  スターピラティス札幌駅前スタジオが月2回5,500円で業界最安値級です。月4回でも8,800円とリーズナブル。さらにセルフエステマシンが1日1回無料で利用できます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  女性専用のピラティススタジオはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、4つあります。ピラティスK札幌駅前店、La pilates札幌店、LATECO、Repilates札幌円山店はすべて女性専用スタジオです。男性の目を気にせず集中してトレーニングできます。
                </p>
              </details>
              <details className="group rounded-xl bg-warm-50 p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-warm-800 hover:text-warm-600">
                  体験レッスンはありますか？料金はいくらですか？
                </summary>
                <p className="mt-4 text-warm-700">
                  ほとんどのスタジオで体験レッスンを実施しています。CLUB PILATES札幌は無料、zen place pilates札幌は1,000円、スターピラティスとLATECOは2,000円、La pilatesとRepilatesは3,000円です。
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
                  肩こりや腰痛の改善に効果はありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、効果が期待できます。特にLa pilates札幌店は整体とピラティスを組み合わせた独自プログラムで肩こり・腰痛を根本から改善。BodySoulでも腰痛改善の実績が多数あります。
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
                  インストラクターになりたいのですが、養成コースはありますか？
                </summary>
                <p className="mt-4 text-warm-700">
                  はい、zen place pilates札幌とBodySoulでインストラクター養成コースを開講しています。BodySoulはFTP認定ライセンスが取得でき、これまでに100名以上の修了生が各地でインストラクターとして活躍しています。
                </p>
              </details>
            </div>
          </section>

          {/* まとめ・CTA */}
          <section className="mb-16 rounded-2xl bg-gradient-to-br from-warm-600 to-warm-700 p-8 text-white shadow-lg">
            <h2 className="mb-4 font-cormorant text-3xl font-bold">
              札幌で理想のピラティススタジオを見つけよう
            </h2>
            <p className="mb-6 text-lg text-warm-50">
              札幌には多様なピラティススタジオがあります。業界最安値級のスターピラティス、音楽×暗闇のピラティスK、整体×ピラティスのLa pilates、世界最大級のCLUB PILATESなど、あなたの目的・予算・好みに合ったスタジオがきっと見つかります。
            </p>
            <p className="mb-8 text-warm-50">
              まずは体験レッスンで、スタジオの雰囲気やインストラクターとの相性を確認してみましょう。多くのスタジオが無料〜3,000円で体験レッスンを実施しています。
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
              <li className="font-semibold text-warm-800">札幌</li>
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
                name: '札幌',
                item: 'https://pilates-biyori.com/area/sapporo',
              },
            ],
          }),
        }}
      />
    </>
  )
}
