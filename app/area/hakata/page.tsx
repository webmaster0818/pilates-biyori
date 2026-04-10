import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス博多おすすめ5選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '博多エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,博多,福岡,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'CLUB PILATES 博多店',
    image: '/images/pilates2.jpg',
    rating: 4.7,
    reviewCount: 145,
    reviews: [
      {
        author: 'M.S',
        rating: 5,
        date: '1週間前',
        text: '博多駅から徒歩5分。世界最大級のマシンピラティスブランドで安心。30分の無料体験で雰囲気がわかりました。15種類の器具を1人1台使えるのが贅沢。',
      },
      {
        author: 'Y.T',
        rating: 4,
        date: '2週間前',
        text: '朝7時から営業で仕事前にも通えます。8つのプログラムと4段階のレベル分けで自分に合ったクラスが選べる。男性もOK。',
      },
      {
        author: 'K.N',
        rating: 5,
        date: '3週間前',
        text: '資格保持のインストラクターが丁寧に指導。最大12名の少人数制でしっかり見てもらえます。福岡で本格マシンピラティスが受けられて嬉しい。',
      },
    ],
    price: '月4回 14,190円〜',
    trial: '体験レッスン 無料（30分イントロクラス）',
    features: ['世界最大級', '15種類の器具', '博多駅徒歩5分', '男性OK'],
    description: '世界最大級のマシンピラティスブランド。博多駅から徒歩5分。最大12名の少人数制グループレッスンで、リフォーマー・スプリングボード・TRX・チェアなど15種類のマシン・器具を1人1台完備。8つのプログラムと4段階のレベル分けで初心者から上級者まで対応。',
    access: 'JR「博多駅」徒歩5分',
    address: '福岡県福岡市博多区博多駅エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'グループ月4回プラン',
      description: '15種類の器具を使った本格グループレッスン。4段階のレベル分けで安心。',
      price: '月4回 14,190円（税込）',
    },
    options: [
      '月8回プラン（26,290円）',
      '通い放題プラン（40,590円）',
      '入会金 5,500円（キャンペーン時無料）',
      '無料イントロクラス（30分）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['体幹強化', '姿勢改善', 'ボディメイク', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: '月〜金 7:00-21:00 / 土日 7:00-18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'スプリングボード', 'TRX', 'チェア', 'Bosu'],
    },
  },
  {
    name: 'Rintosull 博多店',
    image: '/images/pilates3.jpg',
    rating: 4.6,
    reviewCount: 128,
    reviews: [
      {
        author: 'R.K',
        rating: 5,
        date: '5日前',
        text: '博多駅筑紫口から徒歩1分！LAVA系列で安心。月4回8,800円とマシンピラティスでは破格。新規キャンペーンもお得。',
      },
      {
        author: 'A.M',
        rating: 4,
        date: '1週間前',
        text: '地下鉄空港線の博多駅東5出口からも徒歩1分でアクセス抜群。2店舗通い放題プラン13,800円もお得。',
      },
      {
        author: 'S.T',
        rating: 4,
        date: '2週間前',
        text: '施設がきれいで清潔感があります。福岡県初出店のリントスルで、リフォーマーマシンで本格ピラティスが楽しめます。',
      },
    ],
    price: '月4回 8,800円〜',
    trial: 'キャンペーン価格あり',
    features: ['LAVA系列', 'マシン専門', '博多駅徒歩1分', 'コスパ抜群'],
    description: 'ホットヨガLAVA系列のマシンピラティス専門スタジオ。博多駅筑紫口から徒歩1分、地下鉄空港線東5出口からも徒歩1分の好立地。月4回8,800円とリーズナブル。プレミアムフリーフルタイム16,800円でLAVA等系列店も利用可能。',
    access: 'JR「博多駅」筑紫口 徒歩1分 / 福岡市地下鉄空港線「博多駅」東5出口 徒歩1分',
    address: '福岡県福岡市博多区博多駅中央街5-12 博多東ビル 5F',
    popularPlan: {
      name: 'マシンピラティス月4回プラン',
      description: 'マシンピラティス月4回。1回あたり2,200円のコスパ。',
      price: '月4回 8,800円（税込）',
    },
    options: [
      '2店舗通い放題プラン（月額13,800円）',
      'プレミアムフリーフルタイム（月額16,800円・LAVA等全店利用可）',
      '運営管理費 毎月680円',
      '新規入会キャンペーンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性95% / 男性5%',
      purpose: ['ボディメイク', 'ダイエット', 'ヨガ&ピラティス両方', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '毎週日曜日',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'シャワー'],
    },
  },
  {
    name: 'スターピラティス 博多マルイスタジオ',
    image: '/images/pilates4.jpg',
    rating: 4.7,
    reviewCount: 112,
    reviews: [
      {
        author: 'N.Y',
        rating: 5,
        date: '1週間前',
        text: '博多マルイ7Fにあるのでアクセス抜群！月額5,500円からとマシンピラティスでは驚きの安さ。女性専用で安心して通えます。',
      },
      {
        author: 'E.S',
        rating: 4,
        date: '2週間前',
        text: '月2回からのチケット制で無理なく始められます。博多駅直結の商業施設内なので、買い物ついでにも便利。',
      },
      {
        author: 'M.K',
        rating: 5,
        date: '3週間前',
        text: 'リフォーマーマシンを使った本格的なグループレッスン。初心者でも丁寧に教えてもらえます。博多マルイの営業時間内に通えるのが便利。',
      },
    ],
    price: '月額 5,500円〜',
    trial: '体験レッスンあり',
    features: ['女性専用', '博多マルイ内', '月額5,500円〜', 'チケット制'],
    description: '女性専用のマシンピラティス専門スタジオ。博多マルイ7Fに位置し、博多駅直結でアクセス抜群。月額5,500円からとマシンピラティスでは破格の料金設定。月2回から利用できるチケット制で無理なく始められます。',
    access: 'JR「博多駅」直結 博多マルイ7F',
    address: '福岡県福岡市博多区博多駅中央街9-1 博多マルイ 7F',
    popularPlan: {
      name: '月額プラン',
      description: 'マシンピラティスのグループレッスン。月2回から利用可能。',
      price: '月額 5,500円〜（税込）',
    },
    options: [
      '月2回からのチケット制',
      '登録料 5,500円',
      '博多マルイ内で買い物も便利',
      '女性専用',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '博多マルイの営業時間に準ずる',
      closed: '博多マルイの定休日に準ずる',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'NAS博多ピラティス',
    image: '/images/pilates2.jpg',
    rating: 4.5,
    reviewCount: 89,
    reviews: [
      {
        author: 'T.I',
        rating: 5,
        date: '1週間前',
        text: 'フォレオ博多3Fにある大手スポーツクラブNASが運営するピラティス。ジムやスパなども利用できる総合施設で、ピラティス以外のトレーニングも楽しめます。',
      },
      {
        author: 'Y.W',
        rating: 4,
        date: '2週間前',
        text: '平日は23時まで営業で仕事帰りにも通える。ヨガやダンスなど様々なレッスンも受けられるのが嬉しい。',
      },
      {
        author: 'M.S',
        rating: 4,
        date: '3週間前',
        text: '博多那珂エリア初のマシンピラティス専門プログラム。大手クラブならではの充実した設備と清潔感が魅力。',
      },
    ],
    price: '要確認（NAS会員）',
    trial: '体験・見学あり',
    features: ['大手クラブ運営', 'フォレオ博多内', '総合施設', 'マシンピラティス'],
    description: '大手スポーツクラブNASが運営するマシンピラティスプログラム。フォレオ博多3Fに位置。ジム・スパ・ヨガ・ダンスなど多彩なプログラムと合わせて利用可能な総合施設。博多那珂エリア初のマシンピラティス専門プログラム。',
    access: 'フォレオ博多3F',
    address: '福岡県福岡市博多区東那珂1-14-46 フォレオ博多 3F',
    popularPlan: {
      name: 'NAS会員プラン',
      description: 'マシンピラティスに加え、ジム・スパ・各種レッスンが利用可能。',
      price: '要確認（公式サイト参照）',
    },
    options: [
      'マシンピラティスプログラム',
      'ジム・スパ利用可',
      '各種グループレッスン',
      '体験・見学受付中',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['総合フィットネス', 'ボディメイク', '健康維持', '運動不足解消'],
    },
    basicInfo: {
      hours: '平日 10:00〜23:00 / 土 10:00〜22:00 / 日祝 10:00〜20:00',
      closed: '月曜日',
      facilities: ['リフォーマーマシン', 'ジム', 'スパ', 'スタジオ', 'ロッカー'],
    },
  },
  {
    name: 'STUDIO IVY 福岡赤坂店',
    image: '/images/pilates3.jpg',
    rating: 4.7,
    reviewCount: 78,
    reviews: [
      {
        author: 'E.T',
        rating: 5,
        date: '1週間前',
        text: '完全プライベート空間でオーダーメイドレッスン。月謝制で1レッスン6,250円〜とパーソナルとしてはリーズナブル。博多からも地下鉄でアクセスしやすい。',
      },
      {
        author: 'M.K',
        rating: 4,
        date: '2週間前',
        text: '月2回15,000円から始められるので負担が少ない。体験レッスン4,500円で丁寧にカウンセリングしてもらえました。',
      },
      {
        author: 'Y.A',
        rating: 5,
        date: '3週間前',
        text: 'リフォーマー・キャデラック・チェアなど本格マシン完備。インストラクターの指導が的確で、体の変化を早く実感。',
      },
    ],
    price: '月2回 15,000円〜',
    trial: '体験レッスン 4,500円',
    features: ['完全パーソナル', 'マシン完備', '福岡赤坂', '月謝制'],
    description: '完全プライベートのマシンピラティス専門スタジオ。福岡市赤坂エリアに位置し、博多からも地下鉄でアクセスしやすい。一人ひとりの目的・体力に合わせたオーダーメイドレッスン。月謝制で1レッスン6,250円〜。',
    access: '福岡市地下鉄空港線「赤坂駅」周辺 / 博多駅から地下鉄でアクセス可',
    address: '福岡県福岡市中央区赤坂エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月4回コース',
      description: '完全パーソナルのマシンピラティス。1回あたり7,000円。',
      price: '月4回 28,000円（税込）',
    },
    options: [
      '月2回コース（15,000円・1回7,500円）',
      '月8回コース（52,000円・1回6,500円）',
      '都度利用（8,800円）',
      '入会金 20,000円',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['ボディメイク', '姿勢改善', 'パフォーマンス向上', 'リハビリ'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', '完全プライベート空間'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！博多のスタジオのほとんどが初心者歓迎。CLUB PILATESはレベル分けがあり、スターピラティスは月額5,500円から気軽に始められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。博多はマシン専門スタジオが充実。',
  },
  {
    question: '博多のピラティススタジオの料金相場は？',
    answer: 'グループ月4回で5,500円〜14,190円程度。スターピラティスが月額5,500円で最安級、Rintosullが月4回8,800円。パーソナルは月2回15,000円〜。',
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
    answer: '動きやすい服装と飲み物があればOK。CLUB PILATESは無料体験、STUDIO IVYは4,500円で体験可能。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化に特化。ヨガは柔軟性とリラックス重視。両方やりたい方はRintosullのプレミアムフリープランがおすすめ。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、姿勢改善で根本原因を解消できます。STUDIO IVYではパーソナルで体の状態に合わせたカスタマイズが可能。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'パーソナルはSTUDIO IVYで効果的な指導を。グループはスターピラティスなら月額5,500円から。まずは体験で試してみましょう。',
  },
]

export default function HakataPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月08日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス博多おすすめ5選！<br className="hidden md:block" />
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
              <span className="text-warm-600">博多</span>
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
              「博多で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、博多エリアでおすすめのピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>博多でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>体験レッスンが安いスタジオを知りたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>博多駅から通いやすいスタジオがいい</span>
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
              博多のおすすめピラティススタジオ5選
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
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額1万円以下で通えるスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• スターピラティス（月額5,500円〜）</li>
                  <li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマンで効果的に。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STUDIO IVY（月2回 15,000円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  博多駅から徒歩5分以内。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（博多駅 徒歩1分）</li>
                  <li className="text-warm-700">• スターピラティス（博多駅直結）</li>
                  <li className="text-warm-700">• CLUB PILATES（博多駅 徒歩5分）</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜9,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月2〜4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• スターピラティス（5,500円〜）</li>
                  <li>• Rintosull（8,800円/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 14,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  大手スタジオ。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• CLUB PILATES（14,190円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 28,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全パーソナル。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• STUDIO IVY（28,000円〜）</li>
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
                  ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  博多エリアの料金相場はグループ月4回で5,500円〜14,190円。入会金も確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  CLUB PILATESは無料体験、STUDIO IVYは4,500円で体験可能。気軽に試してみましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  博多はJR・地下鉄空港線が利用可能。Rintosullは博多駅徒歩1分、スターピラティスは博多マルイ内で抜群のアクセス。
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
              今回は博多のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では博多にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜4,500円。<br />
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

      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
