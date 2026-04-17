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
  title: '【2026最新】ピラティス柏おすすめ5選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '柏エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,柏,千葉,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK 柏店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.7,
    reviewCount: 155,
    reviews: [
      {
        author: 'Y.M',
        rating: 5,
        date: '1週間前',
        text: '柏駅東口から徒歩3分。女性専用で安心。音楽に合わせたリフォーマーレッスンが楽しくて毎回あっという間。部位別ボディメイクプログラムが充実。',
      },
      {
        author: 'S.T',
        rating: 5,
        date: '2週間前',
        text: '0円体験で気軽に試せました。月4回13,420円で通える。カジュアルでスタイリッシュな店内が素敵。',
      },
      {
        author: 'R.K',
        rating: 4,
        date: '3週間前',
        text: 'お腹、お尻、二の腕、脚、背中の部位に特化したプログラムが選べるのが良い。通い放題16,170円もコスパが良い。',
      },
    ],
    price: '月4回 13,420円〜',
    trial: '体験レッスン 0円',
    features: ['女性専用', '柏駅徒歩3分', '部位別プログラム', '0円体験'],
    description: '女性専用マシンピラティス専門スタジオ。柏駅東口から徒歩3分。音楽に合わせた楽しいレッスンと部位別ボディメイクプログラムが充実。お腹・お尻・二の腕・脚・背中に特化したプログラムで効率的にボディメイク。',
    access: 'JR常磐線・東武野田線「柏駅」東口 徒歩3分',
    address: '千葉県柏市柏1丁目4-26 第二藤川ビル 7F',
    popularPlan: {
      name: 'マンスリー4メンバー（月4回）',
      description: '女性専用マシンピラティス月4回。部位別プログラムも選べる。',
      price: '月4回 13,420円（税込）',
    },
    options: [
      'マンスリーフルメンバー（通い放題 16,170円）',
      'マンスリーデイメンバー（14,520円）',
      '追加受講（1回 2,200円）',
      '入会金 5,500円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '火・金 10:00-15:00,17:30-22:00 / 水 10:00-14:00,17:30-22:00 / 木 17:30-22:00 / 土祝 10:00-18:30 / 日 10:00-17:30',
      closed: '月曜日',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'zen place pilates 柏スタジオ',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 130,
    reviews: [
      {
        author: 'K.S',
        rating: 5,
        date: '1週間前',
        text: '柏駅から徒歩1分。2025年1月にオープンした新しいスタジオ。マットもマシンも両方受けられるのが魅力。男性もOK。',
      },
      {
        author: 'M.T',
        rating: 5,
        date: '2週間前',
        text: '全国150店舗以上で相互利用可能。朝7時から夜22時までレッスンがあるので生活スタイルに合わせて通える。',
      },
      {
        author: 'A.N',
        rating: 4,
        date: '3週間前',
        text: 'ピラティス専門で20年以上の実績。体験当日入会で入会金無料。インストラクターの質が高い。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['柏駅徒歩1分', '2025年新規OPEN', '男性OK', '全国相互利用'],
    description: 'ピラティス専門の大手スタジオ。柏駅から徒歩1分。2025年1月にオープンした新しいスタジオ。マットグループ・マシングループ・プライベートの3タイプ。全国150店舗以上で相互利用可能。朝7時から夜22時まで幅広い時間帯でレッスンを提供。',
    access: 'JR常磐線・東武野田線「柏駅」東口 徒歩1分',
    address: '千葉県柏市柏（千葉興業銀行ビル 4F・詳細は公式サイトでご確認ください）',
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
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '7:00〜22:00（レッスンスケジュールによる）',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'ラダーバレル', 'マット', 'ロッカー'],
    },
  },
  {
    name: 'the SILK 柏店',
    image: '/images/studios/the-silk.webp',
    rating: 4.7,
    reviewCount: 138,
    reviews: [
      {
        author: 'E.H',
        rating: 5,
        date: '1週間前',
        text: '柏駅から徒歩1分。女性専用で清潔感のある内装がおしゃれ。音楽に合わせたレッスンが楽しい。手ぶら体験無料で気軽に試せました。',
      },
      {
        author: 'N.Y',
        rating: 5,
        date: '2週間前',
        text: '朝7:30から夜21:00まで営業で通いやすい。ウェア・タオル無料貸出やウォーターサーバーも完備。パウダールームも充実。',
      },
      {
        author: 'T.K',
        rating: 4,
        date: '3週間前',
        text: '初心者が8割のスタジオなので安心して始められました。難易度別・部位別にレッスンが分かれていて自分に合ったクラスが見つかる。',
      },
    ],
    price: '月3回 12,980円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', '柏駅徒歩1分', '手ぶら体験OK', '初心者8割'],
    description: '女性専用マシンピラティススタジオ。柏駅から徒歩1分。初心者が8割のスタジオで、難易度別・部位別にレッスンが分かれているため自分に合ったクラスが見つかります。パウダールームも充実。手ぶらで体験可能。',
    access: 'JR常磐線・東武野田線「柏駅」徒歩1分',
    address: '千葉県柏市末広町4-13 関口由蔵ビル 3F',
    popularPlan: {
      name: 'Standard4（月4回）',
      description: '女性専用マシンピラティス月4回。音楽に合わせた楽しいレッスン。',
      price: '月4回 15,070円（税込）',
    },
    options: [
      'Light3（月3回 12,980円）',
      'Full（毎日1回 20,680円）',
      'Full Day（18,480円）',
      '体験・入会金・登録手数料 無料キャンペーンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '7:30〜21:00',
      closed: '年末年始（12/29〜1/3）',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム', 'ウォーターサーバー'],
    },
  },
  {
    name: 'Mapila（マピラ）柏店',
    image: '/images/studios/mapila-shinjuku.webp',
    rating: 4.6,
    reviewCount: 95,
    reviews: [
      {
        author: 'Y.K',
        rating: 5,
        date: '1週間前',
        text: '柏駅東口から徒歩1分。女性専用でタワー付きリフォーマー完備。月会費7,700円〜と柏エリアで最もリーズナブル。予約不要で通えるのが便利。',
      },
      {
        author: 'A.S',
        rating: 4,
        date: '2週間前',
        text: '部位別・目的別に特化したレッスンが予約不要で受講可能。柏モア2階にあるのでアクセス抜群。ハーフタワーを地域最多数導入。',
      },
      {
        author: 'R.M',
        rating: 5,
        date: '3週間前',
        text: '月会費7,700円〜で始められるのが嬉しい。多彩な動きで全身を美しく鍛えるプログラムが充実。コスパ最強。',
      },
    ],
    price: '月会費 7,700円〜',
    trial: '体験レッスンあり',
    features: ['女性専用', '柏駅徒歩1分', '予約不要', 'コスパ最強'],
    description: '女性専用マシンピラティス専門スタジオ。柏駅東口から徒歩1分の柏モア2階。タワー付きリフォーマーを完備し、ハーフタワーを地域最多数導入。部位別・目的別に特化したレッスンが予約不要で受講可能。月会費7,700円〜と柏エリアで最もリーズナブル。',
    access: 'JR常磐線・東武野田線「柏駅」東口改札 徒歩1分（柏モア 2F）',
    address: '千葉県柏市柏2丁目10-1 柏モア 2F',
    popularPlan: {
      name: '月額会員プラン',
      description: '女性専用マシンピラティス。タワー付きリフォーマー使用。予約不要。',
      price: '月会費 7,700円〜（税込）',
    },
    options: [
      '各種月額プラン（7,700円〜）',
      'タワー付きリフォーマー完備',
      'ハーフタワー地域最多数導入',
      '予約不要で受講可能',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '月金 10:00〜22:30 / 火水木 9:30〜22:30 / 土日祝 8:30〜18:00',
      closed: '不定休',
      facilities: ['タワー付きリフォーマー', 'ハーフタワー', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'KASHIWA DE PILATES SHIP',
    image: '/images/studios/pilates-ship-kashiwa.webp',
    rating: 4.8,
    reviewCount: 68,
    reviews: [
      {
        author: 'H.T',
        rating: 5,
        date: '1週間前',
        text: '柏駅エリア唯一の理学療法士によるマシンピラティス専門スタジオ。完全プライベートレッスンで一人ひとりに合わせた安全で効果的なトレーニング。',
      },
      {
        author: 'C.K',
        rating: 5,
        date: '2週間前',
        text: '理学療法士の資格を持つオーナーが直接指導。医学的知識に基づいた安全なレッスン。腰痛や肩こりなど体の不調にもアプローチしてくれる。',
      },
      {
        author: 'M.Y',
        rating: 4,
        date: '3週間前',
        text: '柏駅から近くて通いやすい。プライベートレッスンなので自分のペースで進められる。体の使い方が根本から変わった実感がある。',
      },
    ],
    price: 'プライベートレッスン（詳細は公式サイト）',
    trial: '体験レッスンあり',
    features: ['理学療法士', 'プライベート専門', '柏駅近く', '医学的アプローチ'],
    description: '柏駅エリア唯一の理学療法士によるマシンピラティス専門スタジオ。完全プライベートレッスンで、医学的知識と運動療法の専門知識を持った指導者が一人ひとりの状態に合わせた安全で効果的なトレーニングを提供。腰痛・肩こりなど体の不調改善にも対応。',
    access: 'JR常磐線・東武野田線「柏駅」西口 徒歩圏内',
    address: '千葉県柏市旭町1丁目12-13 M\'s旭町Bld 3F',
    popularPlan: {
      name: 'プライベートレッスン',
      description: '理学療法士によるマンツーマンマシンピラティス。完全オーダーメイド。',
      price: '詳細は公式サイトでご確認ください',
    },
    options: [
      '完全プライベートレッスン',
      '回数券・月額プランあり',
      '理学療法士による指導',
      '体の不調改善にも対応',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['姿勢改善', '腰痛・肩こり改善', 'リハビリ', '体幹強化'],
    },
    basicInfo: {
      hours: '月〜火 10:00〜20:30（その他は公式サイトでご確認ください）',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', '更衣室'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！柏エリアのスタジオはほとんどが初心者歓迎。the SILKは体験者の約8割がピラティス未経験者。KASHIWA DE PILATES SHIPは理学療法士によるプライベートレッスンで初心者にも丁寧に指導。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。柏はマシン専門スタジオが特に充実。',
  },
  {
    question: '柏のピラティスの料金相場は？',
    answer: 'グループ月4回で7,700円〜15,070円程度。Mapilaが月会費7,700円〜で最もリーズナブル。zen placeは月4回10,450円〜。the SILKは月3回12,980円〜。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。大切なのは継続すること。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2-3ヶ月の継続が大切です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOK。the SILKは手ぶらで体験可能（ウェア・タオル無料貸出）。ピラティスKは0円体験あり。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化。ヨガは柔軟性とリラックス重視。zen placeはヨガスタジオも運営しており、両方楽しめます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place柏とKASHIWA DE PILATES SHIPは男性も通えます。the SILK、ピラティスK、Mapilaは女性専用です。',
  },
  {
    question: '無料で体験できるスタジオは？',
    answer: 'ピラティスKとthe SILKは無料体験あり。zen placeはグループ体験1,000円。Mapilaも体験レッスンあり。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
]

export default function KashiwaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス柏おすすめ5選！<br className="hidden md:block" />
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
              <span className="text-warm-600">柏</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="柏" />

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
              「柏で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、柏エリアでおすすめのピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>柏でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>無料体験や格安体験のスタジオを知りたい</span>
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

        <PriceComparisonTable studios={studios} areaName="柏" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              柏のおすすめピラティススタジオ5選
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
              柏のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">7,700円〜16,940円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 10,450円〜16,940円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜1,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              柏エリアは都心部と比較してテナント賃料が抑えめのため、同じ内容のレッスンでも料金がリーズナブルな傾向があります。通い放題プランのコスパが特に良いエリアなので、週2回以上通える方は月額制プランが断然おすすめです。近隣の船橋エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              柏でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR常磐線・東武野田線「柏駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  柏エリアのスタジオは柏駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。柏駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">スタジオ数が限られるため早めの予約を</h3>
                <p className="text-warm-600 leading-relaxed">
                  柏エリアは都心と比べてスタジオの選択肢が限られるため、人気のスタジオ・時間帯は予約が埋まりやすい傾向があります。特に土曜午前は混み合うことが多いので、1週間前には予約を入れておくのがおすすめです。車で通う方は駐車場の有無も確認しておきましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">通い放題プランと回数制プランを比較検討</h3>
                <p className="text-warm-600 leading-relaxed">
                  柏エリアでは通い放題プランが都心部より割安に設定されていることが多いです。週2回以上通えるなら通い放題が断然お得ですが、月1〜2回のペースなら回数券やドロップインの方がコスパが良い場合も。自分の通う頻度を想定してプランを選びましょう。初月は回数制で様子を見るのも賢い方法です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  柏エリアだけでなく、近隣の<Link href="/area/funabashi" className="text-warm-700 underline hover:text-warm-900">船橋</Link>、<Link href="/area/chiba" className="text-warm-700 underline hover:text-warm-900">千葉</Link>、<Link href="/area/kita-senju" className="text-warm-700 underline hover:text-warm-900">北千住</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>柏エリアの豆知識：</strong>柏エリアは車で通う方も多いため、駐車場の有無や提携コインパーキングを事前に確認しておきましょう。車なら荷物の心配が少ないので、シャワー後の着替えやヘアドライヤーなども余裕を持って準備できます。
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
                  <li className="text-warm-700">• Mapila（月会費 7,700円〜）</li>
                  <li className="text-warm-700">• zen place（月4回 10,450円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK 柏（手ぶら体験無料）</li>
                  <li className="text-warm-700">• ピラティスK 柏（0円体験）</li>
                  <li className="text-warm-700">• Mapila 柏（予約不要）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">プライベート</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマンで丁寧に指導。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• PILATES SHIP（理学療法士指導）</li>
                  <li className="text-warm-700">• zen place（プライベートレッスン）</li>
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
        <section className="py-16 bg-white" id="price-guide">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              予算別の料金相場
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜11,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  コスパ重視。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Mapila（7,700円〜）</li>
                  <li>• zen place（10,450円〜/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  充実のプログラム。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（13,420円〜）</li>
                  <li>• the SILK（15,070円〜/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 16,000〜21,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  毎日通いたい方。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（16,170円/通い放題）</li>
                  <li>• the SILK（20,680円/通い放題）</li>
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
                  ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。体の不調改善ならPILATES SHIPがおすすめ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  柏の料金相場はグループ月4回で7,700円〜15,070円。入会金やキャンペーンも確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  ピラティスKとthe SILKは無料体験。zen placeは1,000円で体験可能。まずは気になるスタジオで体験してみましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  柏はJR常磐線・東武野田線が乗り入れる主要駅。zen place・the SILK・Mapilaは徒歩1分、ピラティスKは徒歩3分と駅近スタジオが充実。
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
              今回は柏エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では柏にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜9,900円。<br />
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

      <RelatedAreas currentSlug="kashiwa" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
