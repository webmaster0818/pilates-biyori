import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス町田おすすめ5選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '町田エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,町田,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 町田',
    image: '/images/pilates2.webp',
    rating: 4.7,
    reviewCount: 110,
    reviews: [
      {
        author: 'M.K',
        rating: 5,
        date: '1週間前',
        text: 'マット&マシン両方対応で自分のペースで進められる。全国150店舗以上で相互利用できるのが出張時にも便利。グループ体験1,000円で気軽に試せた。',
      },
      {
        author: 'S.T',
        rating: 5,
        date: '2週間前',
        text: '男性も通えるスタジオ。月4回10,450円〜とマシンピラティスとしてはリーズナブル。インストラクターの質が高く、初心者でも安心。',
      },
      {
        author: 'R.N',
        rating: 4,
        date: '3週間前',
        text: '全国150店舗相互利用が便利。出張先でもレッスンが受けられる。マットもマシンも選べるのが良い。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['マット&マシン対応', '男性OK', '全国150店舗相互利用', 'グループ体験1,000円'],
    description: 'マット&マシン両方に対応したピラティススタジオ。月4回10,450円〜のリーズナブルな料金設定。全国150店舗以上で相互利用可能。男性も通えるスタジオ。グループ体験1,000円で気軽にスタート。',
    access: 'JR横浜線・小田急線「町田駅」周辺',
    address: '東京都町田市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'グループ月4回プラン',
      description: 'マット・マシンから選べるグループレッスン月4回。全国相互利用可。',
      price: '月4回 10,450円（税込）',
    },
    options: [
      '月6回プラン',
      '通い放題プラン',
      'プライベートレッスン',
      '全国150店舗相互利用可',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['体幹強化', '姿勢改善', 'ボディメイク', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'ピラティスK 町田店',
    image: '/images/pilates3.webp',
    rating: 4.6,
    reviewCount: 98,
    reviews: [
      {
        author: 'K.N',
        rating: 5,
        date: '1週間前',
        text: '女性専用のマシン専門スタジオ。音楽に合わせたレッスンが楽しい！体験0円で始めやすく、5パート別ボディメイクで気になる部位を集中ケアできる。',
      },
      {
        author: 'Y.M',
        rating: 4,
        date: '2週間前',
        text: '「30歳からの本気ボディメイク」のコンセプトに共感。月4回13,420円〜で本格マシンピラティス。音楽レッスンでモチベーションが上がる。',
      },
      {
        author: 'A.S',
        rating: 5,
        date: '3週間前',
        text: '体験0円なのでハードルが低い。5パート別プログラムで二の腕やウエストなど部位別にアプローチできるのが良い。',
      },
    ],
    price: '月4回 13,420円〜',
    trial: '体験レッスン 0円',
    features: ['女性専用', 'マシン専門', '音楽レッスン', '体験0円'],
    description: '女性専用マシンピラティス専門スタジオ。「30歳からの本気ボディメイク」をコンセプトに、音楽に合わせた楽しいレッスンを提供。5パート別ボディメイクで部位ごとにアプローチ。体験0円。',
    access: 'JR横浜線・小田急線「町田駅」周辺',
    address: '東京都町田市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '月4回のマシンピラティスレッスン。音楽に合わせた5パート別ボディメイク。',
      price: '月4回 13,420円（税込）',
    },
    options: [
      'マンスリー8メンバー',
      'マンスリーフルメンバー',
      '体験0円キャンペーン',
      '5パート別ボディメイク',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '部位別トレーニング', '姿勢改善'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'the SILK 町田店',
    image: '/images/pilates4.webp',
    rating: 4.7,
    reviewCount: 130,
    reviews: [
      {
        author: 'E.M',
        rating: 5,
        date: '1週間前',
        text: '女性専用でおしゃれな内装。音楽に合わせたリフォーマーレッスンが楽しい。手ぶら無料体験で気軽に試せる。朝7:30から夜22:00まで営業で通いやすい。',
      },
      {
        author: 'N.K',
        rating: 5,
        date: '2週間前',
        text: 'ウェア・タオル無料貸出やウォーターサーバーも完備。体験者の8割が未経験者。月3回12,980円〜で始めやすい。',
      },
      {
        author: 'H.Y',
        rating: 4,
        date: '3週間前',
        text: '手ぶらで通えるのが本当に便利。パウダールームもしっかり完備されていて、仕事帰りにも寄りやすい。',
      },
    ],
    price: '月3回 12,980円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', '手ぶらOK', '音楽レッスン', '7:30-22:00営業'],
    description: '女性専用マシンピラティススタジオ。音楽のリズムに合わせた独自のレッスンスタイルで初心者でも楽しく続けられます。手ぶらで体験可能（ウェア・タオル無料貸出）。朝7:30〜夜22:00の長時間営業。',
    access: 'JR横浜線・小田急線「町田駅」周辺',
    address: '東京都町田市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'Standard4（月4回）',
      description: '女性専用マシンピラティス月4回。音楽に合わせた楽しいレッスン。',
      price: '月4回 15,070円（税込）',
    },
    options: [
      'Light3（月3回 12,980円）',
      'Full（毎日1回 20,680円）',
      'Full Day（18,480円）',
      '体験・入会金 無料キャンペーンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '7:30〜22:00',
      closed: '年末年始',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム', 'ウォーターサーバー'],
    },
  },
  {
    name: 'アスウェル町田',
    image: '/images/pilates2.webp',
    rating: 4.5,
    reviewCount: 85,
    reviews: [
      {
        author: 'T.M',
        rating: 5,
        date: '1週間前',
        text: 'マシンピラティスとジムが一体型！天井高3.5mの開放感あるスタジオでマシン60台以上。ピラティスレッスン料金にジム・サウナも含まれるのがお得。',
      },
      {
        author: 'C.Y',
        rating: 4,
        date: '2週間前',
        text: 'サウナ付きなのが嬉しい。ピラティスで汗をかいた後にサウナでリフレッシュ。マシン60台以上で待ち時間もない。',
      },
      {
        author: 'K.S',
        rating: 5,
        date: '3週間前',
        text: '天井高3.5mで圧迫感がなく快適。ピラティスだけでなくジムも使えるので総合的に体を鍛えられる。',
      },
    ],
    price: 'ピラティスレッスン料金にジム・サウナ含む',
    trial: '体験レッスンあり',
    features: ['マシンピラティス＋ジム', '天井高3.5m', 'マシン60台以上', 'サウナ付き'],
    description: 'マシンピラティスとジムが一体型の総合フィットネス施設。天井高3.5mの開放的なスタジオにマシン60台以上を完備。ピラティスレッスン料金にジム・サウナ利用も含まれるお得な料金体系。',
    access: 'JR横浜線・小田急線「町田駅」周辺',
    address: '東京都町田市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マシンピラティス＋ジムプラン',
      description: 'マシンピラティスレッスンにジム・サウナ利用が含まれた一体型プラン。',
      price: '公式サイト参照',
    },
    options: [
      'マシンピラティスレッスン',
      'ジム利用',
      'サウナ利用',
      'マシン60台以上完備',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性60% / 男性40%',
      purpose: ['総合フィットネス', '体幹強化', 'ボディメイク', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', 'ジムマシン60台以上', 'サウナ', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Rintosull 町田エリア',
    image: '/images/pilates3.webp',
    rating: 4.6,
    reviewCount: 90,
    reviews: [
      {
        author: 'A.K',
        rating: 5,
        date: '1週間前',
        text: 'LAVA系列で安心感がある。月4回8,800円とマシンピラティスでは破格の安さ。無料体験でパーソナル姿勢診断もしてもらえた。',
      },
      {
        author: 'Y.N',
        rating: 5,
        date: '2週間前',
        text: '女性専用で初心者が87%以上だから安心。リフォーマーを使った本格レッスンなのにこの価格はすごい。',
      },
      {
        author: 'M.H',
        rating: 4,
        date: '3週間前',
        text: 'プレミアムフリーフルタイムでLAVA等系列のヨガスタジオも利用可能。ピラティスとヨガ両方やりたい人におすすめ。',
      },
    ],
    price: '月4回 8,800円〜',
    trial: '体験レッスン 無料',
    features: ['LAVA系列', '女性専用', '初心者87%以上', '月4回8,800円〜'],
    description: 'ホットヨガLAVA系列の女性専用マシンピラティススタジオ。月4回8,800円〜のリーズナブルな料金。初心者87%以上で安心。無料体験でパーソナル姿勢診断付き。',
    access: 'JR横浜線・小田急線「町田駅」周辺',
    address: '東京都町田市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マシンピラティス月4回プラン',
      description: 'リフォーマーを使った本格マシンピラティス。1回あたり2,200円のコスパ。',
      price: '月4回 8,800円（税込）',
    },
    options: [
      '通い放題プラン',
      'プレミアムフリーフルタイム（LAVA等全店利用可）',
      '施設使用料あり',
      '無料体験・パーソナル姿勢診断付き',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', 'ヨガ&ピラティス両方', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'シャワー'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！町田エリアのスタジオはほとんどが初心者歓迎。Rintosullは初心者87%以上、zen place pilatesはグループ体験1,000円で気軽に始められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。zen place pilatesはマット&マシン両方対応。',
  },
  {
    question: '町田のピラティスの料金相場は？',
    answer: 'Rintosullは月4回8,800円〜と最安。zen place pilatesは月4回10,450円〜。the SILKは月3回12,980円〜。ピラティスKは月4回13,420円〜。グループ月4回で8,800円〜13,420円が相場。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。大切なのは継続すること。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。ピラティスKは5パート別ボディメイクで部位別に効率的にアプローチ。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOK。the SILKは手ぶらで無料体験可能。ピラティスKとRintosullも無料体験あり。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place pilates町田とアスウェル町田は男性も通えます。ピラティスK・the SILK・Rintosullは女性専用。',
  },
  {
    question: '一番安いスタジオは？',
    answer: 'マシンピラティスではRintosullが月4回8,800円〜で最安。zen place pilatesは月4回10,450円〜。アスウェル町田はジム・サウナ込みでお得。',
  },
  {
    question: 'ジムも一緒に使いたい場合は？',
    answer: 'アスウェル町田はマシンピラティス＋ジム＋サウナが一体型。マシン60台以上、天井高3.5mの開放的な空間で総合的にトレーニングできます。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
]

export default function MachidaPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月09日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス町田おすすめ5選！<br className="hidden md:block" />
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
              <span className="text-warm-600">町田</span>
            </nav>
          </div>
        </section>

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
              「町田で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、町田エリアでおすすめのピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>町田でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>コスパの良いスタジオを知りたい</span>
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

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              町田のおすすめピラティススタジオ5選
            </h2>
            <div className="space-y-8">
              {studios.map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Search by Preference */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              こだわりから探す
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月4回8,800円〜のスタジオも。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li>
                  <li className="text-warm-700">• zen place pilates（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• the SILK（月3回 12,980円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">マシン専門</h3>
                <p className="text-warm-600 text-sm mb-4">
                  リフォーマーで本格ピラティス。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK（5パート別ボディメイク）</li>
                  <li className="text-warm-700">• the SILK（音楽レッスン）</li>
                  <li className="text-warm-700">• アスウェル（ジム・サウナ付き）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">無料体験あり</h3>
                <p className="text-warm-600 text-sm mb-4">
                  気軽に試せる無料体験。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK（体験0円）</li>
                  <li className="text-warm-700">• the SILK（手ぶら無料体験）</li>
                  <li className="text-warm-700">• Rintosull（無料体験＋姿勢診断）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Frequency Guide */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              おすすめの期間・頻度
            </h2>
            <div className="bg-white rounded-lg p-8 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週1-2回からスタート。最低2-3ヶ月継続で効果を実感。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回がおすすめ。3-6ヶ月で目に見える変化。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続。
              </p>
            </div>
          </div>
        </section>

        {/* Price Guide */}
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
                  コスパ重視派に。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（8,800円/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜14,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月3〜4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン専門スタジオ。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates（10,450円〜）</li>
                  <li>• the SILK（12,980円〜）</li>
                  <li>• ピラティスK（13,420円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">ジム・サウナ付き</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">総合型</p>
                <p className="text-sm text-warm-600 mb-4">
                  ピラティス＋ジム＋サウナ。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• アスウェル町田（ジム・サウナ込み）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50">
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
                  ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。ピラティスKは部位別ボディメイク、アスウェルは総合フィットネス。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  町田はマシン月4回8,800円〜13,420円と幅広い価格帯。アスウェルはジム・サウナ込みでお得。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  ピラティスK・the SILK・Rintosullは無料体験。zen place pilatesはグループ体験1,000円。まずは試してみましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  町田はJR横浜線・小田急線が利用可能。the SILKは朝7:30〜夜22:00の長時間営業で通いやすい。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
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

        {/* Summary */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">
              まとめ
            </h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は町田エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では町田にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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

      <RelatedAreas currentSlug="machida" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
