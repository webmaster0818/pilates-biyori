import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { AreaModifierSections } from '@/components/AreaModifierSections'
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
  alternates: { canonical: 'https://biyori-pilates.com/area/tokyo-station/' },
  title: '【2026年8月最新】東京のピラティス｜初心者OK・無料体験で選ぶ料金比較',
  description: '東京エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月4回 9,625円〜',
    trial: '体験レッスン あり',
    features: ['全国150店舗', 'マット＆マシン', '男性OK', '全店相互利用可'],
    description: '全国150店舗以上を展開する日本最大級のピラティススタジオ。22年の実績と累計500万回以上のレッスン提供。マットグループ、マシングループ、プライベートレッスンと多彩なプログラム。全店舗相互利用可能で、自宅近くや職場近くなど生活シーンに合わせて自由に利用できます。医療機関も推奨する高品質なレッスンを提供。',
    access: '東京都内に多数展開',
    address: '東京都内（詳細は公式サイト参照）',
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
      hours: '店舗により異なる（早朝〜夜まで開催）',
      closed: '店舗により異なる',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', 'マシン完備', '男女共用'],
    },
  },
  {
    name: 'ピラティスK',
    image: '/images/studios/pilates-k.webp',
    price: '月4回 13,420円〜',
    trial: '無料体験レッスン',
    features: ['音楽×マシン', '女性専用', '暗闇レッスン', '東京都内多数'],
    description: '音楽に合わせて楽しくボディメイク。女性専用スタジオで安心。暗闇×音楽×マシンピラティスの融合レッスンが人気。中目黒、池袋、銀座など都内に多数展開。周りの目を気にせず集中できる環境で、楽しみながら理想のボディラインを手に入れられます。Forbes Japan Women Award 2021企業部門第一位受賞。',
    access: '東京都内多数（中目黒、池袋、銀座、吉祥寺など）',
    address: '東京都内（詳細は公式サイト参照）',
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
      hours: '店舗により異なる（10:00-22:00が目安）',
      closed: '店舗により異なる',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '暗闇スタジオ', '女性専用'],
    },
  },
  {
    name: 'ルルト（luluto）', officialUrl: 'https://t.felmat.net/fmcl?ak=L12015F.1.E165311J.U1357808',
    image: '/images/studios/luluto.webp',
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['理学療法士考案', '医療的視点', '身体の専門家', 'オーダーメイド'],
    description: '身体の専門家である理学療法士が考案したピラティススタジオ。医療現場での知見を活かし、「ただ動く」のではなく「身体を正しく動かす」ことを重視。一人ひとりの身体の状態に合わせたオーダーメイドプログラムを提供。リハビリから本格的なボディメイクまで幅広く対応。',
    access: '東京都内',
    address: '東京都内（詳細は公式サイト参照）',
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
      facilities: ['理学療法士常駐', 'プライベート空間', '医療的視点'],
    },
  },
  {
    name: 'CLUB PILATES',
    image: '/images/studios/club-pilates.webp',
    price: '要問合せ',
    trial: '体験レッスン 無料',
    features: ['アメリカ発', '世界最大級', 'グループ＆プライベート', '東京都内多数'],
    description: 'アメリカ発の世界最大級ピラティススタジオチェーン。世界各国で800店舗以上を展開。グループレッスンからプライベートレッスンまで幅広く対応。全米No.1のピラティスメソッドで、初心者から上級者まで満足できるプログラムを提供。インストラクター養成講座も開講。',
    access: '東京都内多数展開',
    address: '東京都内（詳細は公式サイト参照）',
    popularPlan: {
      name: '体験レッスン',
      description: '初回無料で世界最大級のピラティスメソッドを体験できます。',
      price: '体験 無料',
    },
    options: [
      'グループレッスン（月額プラン）',
      'プライベートレッスン（要問合せ）',
      'ウェアレンタル（月額 2,200円）',
      'Teacher Training（インストラクター養成講座）',
    ],
    userProfile: {
      ageRange: '20代〜60代まで幅広い',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', '姿勢改善', '体幹強化', 'リハビリ'],
    },
    basicInfo: {
      hours: '店舗により異なる',
      closed: '店舗により異なる',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', '最新マシン完備'],
    },
  },
  {
    name: 'ピラティスミラー',
    image: '/images/studios/pilates-mirror.webp',
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['KONAMI運営', '天井鏡', '初心者向け', '短時間効果的'],
    description: 'コナミスポーツクラブが運営するマシンピラティススタジオ。スタジオの天井に設置した鏡と専用ピラティスマシンを活用することで、初心者の方も自分の身体の動きを確認しながら、短時間でも効果的にエクササイズできます。インナーマッスルに働きかけ、姿勢改善やボディメイクに効果的。',
    access: '東京都内（KONAMI施設内）',
    address: '東京都内（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マシンピラティスコース',
      description: '天井鏡で動きを確認しながら効果的にエクササイズ。初心者でも安心。',
      price: '要問合せ',
    },
    options: [
      'コナミスポーツクラブ会員特典あり',
      '専用マシン使用',
      '天井鏡システム',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', 'インナーマッスル強化', 'ボディメイク', '健康維持'],
    },
    basicInfo: {
      hours: 'コナミ施設により異なる',
      closed: 'コナミ施設により異なる',
      facilities: ['天井鏡', '専用マシン', 'ロッカー', 'シャワー'],
    },
  },
  {
    name: 'K Village Pilates',
    image: '/images/studios/k-village-pilates-tokyo.webp',
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['パーソナル専門', '新宿西口徒歩3分', 'マンツーマン', '初心者歓迎'],
    description: '新宿駅西口から徒歩3分のパーソナルマシンピラティススタジオ。完全マンツーマンで、一人ひとりの目的や体力に合わせたオーダーメイドレッスン。初心者から上級者まで、それぞれのレベルに合わせた丁寧な指導。TK新都心ビル地下1階の静かな環境で集中してトレーニングできます。',
    access: '新宿駅西口から徒歩3分',
    address: '東京都（詳細は公式サイト参照）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '完全マンツーマン指導。あなただけのオーダーメイドプログラム。',
      price: '要問合せ',
    },
    options: [
      'プライベートレッスン',
      '初心者向けプログラム',
      '上級者向けプログラム',
      'マンツーマン指導',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['短期集中ボディメイク', 'マンツーマン指導希望', '姿勢改善', '体幹強化'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['完全個室', 'ロッカー', 'パウダールーム', 'プライベート空間'],
    },
  },
  {
    name: 'タクトエイト（takt8）',
    image: '/images/studios/takt8-tokyo.webp',
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['理学療法士立ち上げ', '八王子', 'ヨガ＆ピラティス', 'オンライン対応'],
    description: '2011年に理学療法士が立ち上げた、八王子のヨガ・ピラティス専門スタジオ。医療現場での知見を活かし、「ただ動く」のではなく「身体を正しく動かす」ことを重視。オンラインレッスンも開催しており、自宅からでも受講可能。専門知識に基づいた安全で効果的な指導が魅力。',
    access: '八王子',
    address: '東京都八王子市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'ヨガ＆ピラティスプログラム',
      description: '理学療法士監修のプログラム。オンラインレッスンも可能。',
      price: '要問合せ',
    },
    options: [
      'スタジオレッスン',
      'オンラインレッスン',
      'ヨガクラス',
      'ピラティスクラス',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['正しい動き習得', '身体の不調改善', 'オンライン受講', '地域密着'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['理学療法士監修', 'オンライン対応', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'the SILK 東京八重洲店',
    officialUrl: 'https://the-silk.co.jp/',
    image: '/images/studios/the-silk.webp',
    price: 'グループ月4回(Standard4) 14,370〜15,280円 / 通い放題 19,980〜22,280円（別途施設利用料月700円）/ パーソナル月2回 22,000円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', 'マシンピラティス専門', 'グループ＋パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオ。レベル別・部位別の豊富なグループプログラムとパーソナルレッスンを提供し、洗練された空間が特徴。東京駅から徒歩5分（情報引用元: the SILK公式サイト the-silk.co.jp）。',
    access: '東京駅から徒歩5分',
    address: '東京都中央区八重洲1-5-9 八重洲加藤ビルディング5階',
  },
]

const faqs = [
  {
    question: '東京でピラティス初心者におすすめのスタジオはどこですか？',
    answer: 'zen place pilatesがおすすめです。全国150店舗以上を展開し、22年の実績があります。初心者向けのプログラムが充実しており、全店舗相互利用可能なので、自宅や職場近くで通いやすい店舗を選べます。マットグループなら月4回9,625円からと始めやすい価格帯です。',
  },
  {
    question: '東京で一番安いピラティススタジオはどこですか？',
    answer: 'zen place pilatesが月4回9,625円で最も安く通えます。また、CLUB PILATESは体験レッスンが無料なので、まずは試してみたい方におすすめです。ピラティスKも無料体験を実施しています。',
  },
  {
    question: '女性専用のピラティススタジオはありますか？',
    answer: 'はい、ピラティスKは女性専用スタジオです。音楽×暗闇×マシンピラティスの融合レッスンで、男性の目を気にせず集中してトレーニングできます。中目黒、池袋、銀座など都内に多数展開しています。',
  },
  {
    question: '体験レッスンはありますか？料金はいくらですか？',
    answer: 'ほとんどのスタジオで体験レッスンを実施しています。CLUB PILATESとピラティスKは無料。zen place pilatesやその他スタジオは有料ですが、入会すると入会金が無料になるなどの特典があります。まずは2〜3つのスタジオで体験してみるのがおすすめです。',
  },
  {
    question: 'マシンピラティスとマットピラティスの違いは何ですか？',
    answer: 'マシンピラティスは専用マシン（リフォーマー）を使用し、初心者でも正しいフォームで効果的にトレーニングできます。マットピラティスはマットの上で行い、体幹を鍛えるのに効果的。初心者にはマシンピラティスがおすすめです。',
  },
  {
    question: 'どのくらいの期間で効果が出ますか？',
    answer: '週1回（月4回）通った場合、1ヶ月で体の使い方が変わり、2ヶ月で姿勢の変化を実感、3ヶ月で見た目の変化が現れます。週2回通うとさらに早く効果を実感できます。ピラティスの創始者ジョセフ・ピラティスも「10回で違いを感じ、20回で見た目が変わり、30回で体のすべてが変わる」と述べています。',
  },
  {
    question: '理学療法士監修のスタジオはありますか？',
    answer: 'はい、ルルトとタクトエイトは理学療法士が考案・立ち上げたスタジオです。医療現場での知見を活かし、「身体を正しく動かす」ことを重視。リハビリから本格的なボディメイクまで幅広く対応しています。',
  },
  {
    question: '運動が苦手でも大丈夫ですか？',
    answer: 'はい、大丈夫です。ピラティスはもともとリハビリ用に開発されたエクササイズなので、運動が苦手な方や体力に自信がない方でも無理なく始められます。マシンがサポートしてくれるので、正しいフォームで効果的にトレーニングできます。',
  },
  {
    question: 'パーソナルレッスン専門のスタジオはありますか？',
    answer: 'はい、K Village Pilatesは新宿駅西口徒歩3分のパーソナル専門スタジオです。完全マンツーマンで、一人ひとりの目的や体力に合わせたオーダーメイドレッスンを提供しています。短期集中で結果を出したい方におすすめです。',
  },
  {
    question: '大手スポーツクラブが運営するピラティススタジオはありますか？',
    answer: 'はい、ピラティスミラーはコナミスポーツクラブが運営しています。スタジオの天井に設置した鏡と専用マシンを活用し、初心者でも自分の身体の動きを確認しながら短時間で効果的にエクササイズできます。大手ならではの安心感が魅力です。',
  },
]

export default async function TokyoAreaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '東京', url: 'https://pilates-biyori.com/area/tokyo/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年08月31日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】東京のピラティススタジオ<br className="hidden md:block" />
              おすすめ8選｜料金・体験レッスン徹底比較
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
              <span className="text-warm-600">東京</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="東京" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「東京でピラティスを始めてみたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              「渋谷・新宿・池袋・銀座・六本木で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、東京都内でおすすめのピラティススタジオ9選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>東京都内でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>渋谷・新宿・池袋・銀座・六本木の駅近スタジオを知りたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>体験レッスンが安いスタジオを知りたい</span>
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

        <PriceComparisonTable studios={studios} areaName="スタジオ" />

        {/* Studios List */}

        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              東京のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">9,625円〜13,420円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 9,625円〜13,420円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜3,000円程度</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              東京は商業施設やオフィスが集まる繁華街エリアのため、駅近の好立地スタジオが多く、やや高めの料金設定が目立ちます。一方で大手チェーンの進出も多いため、キャンペーンや月額通い放題プランを上手に活用すれば、実質的なコストを抑えることも可能です。近隣の東京駅エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              東京でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">東京エリアのスタジオへのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  東京エリアのスタジオは東京都内に多数展開が最寄りです。初めて通う際は地図アプリで経路と所要時間を確認し、レッスン開始10分前には到着できるよう計画しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">繁華街ならではの予約混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  東京は人が集まる繁華街のため、平日夜（18時〜21時）と土日午前中はレッスン予約が特に集中します。人気クラスは1週間以上前に満席になることも。アプリやWebで空き状況をこまめにチェックし、キャンセル待ち機能があるスタジオでは積極的に活用しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  東京エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ず確認しましょう。月の途中入会は日割り計算になるかも要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  東京エリアだけでなく、近隣の<Link href="/area/tokyo-station/" className="text-warm-700 underline hover:text-warm-900">東京駅</Link>、<Link href="/area/marunouchi/" className="text-warm-700 underline hover:text-warm-900">丸の内</Link>、<Link href="/area/otemachi/" className="text-warm-700 underline hover:text-warm-900">大手町</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオも。手ぶらで体験可能な場合もあるので事前に確認しましょう。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。マシンに引っかかる恐れがあるため、ピアス・ネックレス・腕時計はロッカーに預けるのが安全です。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>東京エリアの豆知識：</strong>東京は仕事帰りに立ち寄る方が多いエリアです。荷物が多くなりがちなので、ロッカーの広さやシャワー設備の有無を事前に確認しておくと安心。ウェアレンタルがあるスタジオなら手ぶらで通えて便利です。
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              東京のおすすめピラティススタジオ9選
            </h2>
            <div className="space-y-8">
              {[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* 目的別おすすめスタジオ */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              目的別おすすめスタジオ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">音楽×暗闇で楽しく</h3>
                <p className="text-warm-600 text-sm mb-4">
                  音楽に合わせて楽しくボディメイクしたい方に。暗闇で周りの目を気にせず集中できます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">全国最大級の実績</h3>
                <p className="text-warm-600 text-sm mb-4">
                  22年の実績と累計500万回以上のレッスン。安心感を重視する方に。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates</li>
                  <li className="text-warm-700">• CLUB PILATES</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">理学療法士監修</h3>
                <p className="text-warm-600 text-sm mb-4">
                  医療的視点から身体を整えたい方に。リハビリ目的の方にもおすすめ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ルルト（luluto）</li>
                  <li className="text-warm-700">• タクトエイト（takt8）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">KONAMI運営</h3>
                <p className="text-warm-600 text-sm mb-4">
                  大手スポーツクラブの安心感を求める方に。天井鏡で動きを確認できます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスミラー</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル専門</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマンで集中指導を受けたい方に。短期集中で結果を出したい方向け。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• K Village Pilates</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">ヨガ＆ピラティス両方</h3>
                <p className="text-warm-600 text-sm mb-4">
                  ヨガとピラティスどちらも楽しみたい方に。柔軟性と筋力を同時に向上。
                </p>
                <ul className="space-y-2 text-sm">
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 期間・頻度 */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              おすすめの期間・頻度
            </h2>
            <div className="bg-white rounded-lg p-8 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週1-2回（月4-8回）からスタートするのがおすすめ。まずは身体を慣らすことが大切です。継続期間は最低でも2-3ヶ月。この期間で効果を実感できる方が多いですよ。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回（月8-12回）がおすすめ。しっかりと身体を変えたい方は頻度を上げることで効果も早く現れます。3-6ヶ月継続すると、周りからも「痩せた？」と言われるレベルの変化が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回（月4回）のペースで継続するのがおすすめ。無理なく長く続けられる頻度が理想です。ピラティスは継続が何より大切。自分のペースで楽しく通えるのが一番ですよ。
              </p>
            </div>
          </div>
        </section>

        {/* 予算別 */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              予算別の料金相場
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マットグループレッスン中心。初心者向けの基本的なレッスンが多い。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates（月4回 9,625円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜20,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオ。グループ・プライベート選択可。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（月4回 13,420円）</li>
                  <li>• zen place マシングループ（月4回 15,400円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 30,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全プライベートレッスン。短期集中で結果を出したい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place プライベート（月4回 33,880円）</li>
                  <li>• K Village Pilates（パーソナル専門）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 選び方 */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              失敗しないピラティススタジオの選び方
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、体幹強化、リハビリなど、目的によって最適なスタジオやプログラムは変わります。東京都内には多様なスタジオがあるので、目的が明確だとスタジオ選びもスムーズになりますよ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  東京都内の料金相場は月4回で9,625円〜40,000円まで幅広い料金帯があります。無理なく継続できる予算を決めましょう。料金だけでなく、入会金、マット・ウェアのレンタル料なども確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。CLUB PILATESやピラティスKは無料体験を実施しているので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。渋谷・新宿・池袋・銀座・六本木など、自宅や職場から通いやすいエリアのスタジオを選びましょう。zen place pilatesのように全店舗相互利用できるスタジオなら、生活シーンに合わせて柔軟に利用できます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ 10問 */}
        <section className="py-16 bg-white">
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

        {/* まとめ */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">
              まとめ
            </h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は東京都内のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              渋谷・新宿・池袋・銀座・六本木をはじめ、東京都内には多種多様なピラティススタジオがあります。この記事では厳選した8スタジオだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜有料まで。<br />
              まずは気軽に体験してみましょう。
            </p>
            <Link
              href="#studios"
              className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded"
            >
              おすすめスタジオ一覧に戻る
            </Link>
          </div>
        </section>

        {/* パンくずリスト */}
        <section className="bg-white py-6">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-600" aria-label="パンくずリスト">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-warm-800">
                    ホーム
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/area/" className="hover:text-warm-800">
                    エリアから探す
                  </Link>
                </li>
                <li>/</li>
                <li className="font-semibold text-warm-800">東京</li>
              </ol>
            </nav>
          </div>
        </section>
              <AreaModifierSections studios={studios} areaName="東京" />
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="tokyo" areaName="東京" />

      <RelatedAreas currentSlug="tokyo" />
      <SiteFooter />

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
                name: '東京',
                item: 'https://pilates-biyori.com/area/tokyo',
              },
            ],
          }),
        }}
      />
    </>
  )
}
