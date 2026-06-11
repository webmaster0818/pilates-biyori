import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { AreaMarketComparison } from '@/components/AreaMarketComparison'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'



export const metadata = {
  title: '【2026年6月最新】ピラティス豊洲おすすめ6選！料金・体験レッスン・マシン対応を比較！',
  description: '豊洲エリアのおすすめピラティススタジオ6選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,豊洲,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,月島,有明',
}

const studios = [
  {
    name: 'CLUB PILATES 豊洲店',
    image: '/images/studios/club-pilates.webp',
    rating: 4.8,
    reviewCount: 113,
    reviews: [
      {
        author: 'A.K',
        rating: 5,
        date: '1週間前',
        text: '有楽町線豊洲駅から徒歩3分。豊洲セイルパーク1Fで通いやすい。世界1000店舗以上展開の安心ブランドで、8種類のクラスから選べます。',
      },
      {
        author: 'M.S',
        rating: 5,
        date: '2週間前',
        text: '4段階のレベル分けで初心者から上級者まで対応。15種類の器具を使った本格レッスン。無料の30分イントロクラスで雰囲気がわかる。',
      },
      {
        author: 'T.H',
        rating: 4,
        date: '3週間前',
        text: '朝7時から営業で出勤前にも通える。インストラクター全員が500時間以上の研修を受けた資格保持者。男性会員も多い。',
      },
    ],
    price: '月4回 14,190円〜',
    trial: '無料イントロクラス（30分）',
    features: ['豊洲駅徒歩3分', '世界最大級', '男性OK', '無料体験あり'],
    description: '世界最大級のマシンピラティスブランド。豊洲セイルパーク1Fに位置し、有楽町線豊洲駅から徒歩3分。最大12名のグループレッスンとマンツーマンのプライベートレッスンを提供。15種類の器具を使った本格的なレッスンで、4段階のレベル分けにより初心者から上級者まで対応。',
    access: '東京メトロ有楽町線「豊洲駅」徒歩3分 / ゆりかもめ「豊洲駅」徒歩5分',
    address: '東京都江東区豊洲2-1-9 豊洲セイルパークビル 1F',
    popularPlan: {
      name: '月4回プラン',
      description: '最大12名のグループレッスン月4回。8種類のクラスから自由に選択。',
      price: '月4回 14,190円（税込）',
    },
    options: [
      '月8回プラン（26,290円）',
      '通い放題プラン（40,590円）',
      'プライベートレッスンあり',
      '入会金 5,500円',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['姿勢改善', '体幹強化', 'ボディメイク', '健康維持'],
    },
    basicInfo: {
      hours: '月〜金 7:00〜21:00 / 土日 7:00〜20:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'EXOチェア', 'TRX', 'スプリングボード', 'ボス', 'ロッカー'],
    },
  },
  {
    name: 'ELEMENT 豊洲ピラティス専門店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=U11199J.1.V154352I.U1357808',
    image: '/images/studios/element.webp',
    rating: 4.7,
    reviewCount: 7,
    reviews: [
      {
        author: 'Y.M',
        rating: 5,
        date: '1週間前',
        text: '豊洲駅から徒歩1分！1回30分のパーソナルマシンピラティスが通い放題。ウェア・タオル・ドリンク全て無料で手ぶら通い。',
      },
      {
        author: 'R.T',
        rating: 5,
        date: '2週間前',
        text: '入会者の90%が運動初心者で安心。マンツーマンなので自分のペースで進められる。週5回通えば1回あたり約2,750円とコスパ最強。',
      },
      {
        author: 'K.N',
        rating: 4,
        date: '3週間前',
        text: '完全個室のプライベート空間。朝10時から夜22時まで営業で仕事帰りにも通える。プロテインも無料でうれしい。',
      },
    ],
    price: '月額 55,000円（通い放題）',
    trial: '体験レッスン 3,300円',
    features: ['豊洲駅徒歩1分', 'パーソナル専門', '通い放題', '手ぶらOK'],
    description: 'パーソナルマシンピラティス専門スタジオ。豊洲駅から徒歩1分の好立地。1回30分のマンツーマン指導を月額制の通い放題で受けられるのが最大の特徴。完全個室でプライバシーも安心。ウェア・タオル・ドリンク・プロテインまで全て無料。',
    access: '東京メトロ有楽町線「豊洲駅」徒歩1分',
    address: '東京都江東区豊洲4-2-1 萩原商店ビル 302号室',
    popularPlan: {
      name: '通い放題プラン',
      description: 'パーソナルマシンピラティス30分が通い放題。週5回で1回約2,750円。',
      price: '月額 55,000円（税込）',
    },
    options: [
      '月4回プラン（月額 22,000円）',
      '月8回プラン（月額 39,600円）',
      '体験レッスン 3,300円',
      'ウェア・タオル・ドリンク・プロテイン無料',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '10:00〜22:00',
      closed: '不定休',
      facilities: ['リフォーマー', '完全個室', 'ウォーターサーバー', 'プロテイン', 'ロッカー'],
    },
  },
  {
    name: 'follow Pilates Yoga Studio',
    image: '/images/studios/follow-pilates-toyosu.webp',
    rating: 4.6,
    reviewCount: 10,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '1週間前',
        text: '豊洲駅1c出口から徒歩1分！豊洲フォレシア1階の緑が多い開放的なスタジオ。ピラティス・ヨガ・エアリアルヨガが全部楽しめる。',
      },
      {
        author: 'N.H',
        rating: 4,
        date: '2週間前',
        text: 'Merrithew SPX Maxリフォーマーを使ったマシンピラティスが本格的。理学療法士が監修するプログラムで安心。',
      },
      {
        author: 'E.O',
        rating: 5,
        date: '3週間前',
        text: '受け放題月額22,000円でマットピラティス・ヨガ・エアリアルが全て受けられる。マシンピラティスはセミパーソナルで丁寧に指導してもらえます。',
      },
    ],
    price: '受け放題 月額22,000円',
    trial: '体験レッスン 2,200円〜',
    features: ['豊洲駅徒歩1分', 'ヨガも受講可', 'マシンピラティス', 'エアリアルヨガ'],
    description: '豊洲フォレシア1階の緑豊かなスタジオ。ピラティス・ヨガ・エアリアルヨガのレッスンを提供。マットピラティスのグループレッスンに加え、Merrithew SPX Maxリフォーマーを使ったセミパーソナル・パーソナルのマシンピラティスも充実。理学療法士監修プログラム。',
    access: '東京メトロ有楽町線「豊洲駅」1c出口 徒歩1分',
    address: '東京都江東区豊洲3-2-24 豊洲フォレシア 1F',
    popularPlan: {
      name: '受け放題プラン',
      description: 'マットピラティス・ヨガ・エアリアルヨガのグループレッスンが通い放題。',
      price: '月額 22,000円（税込）',
    },
    options: [
      '月6回プラン',
      'マシンピラティス セミパーソナル（別料金）',
      'パーソナルレッスン',
      '都度利用プランあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['柔軟性向上', '姿勢改善', 'リフレッシュ', '体幹強化'],
    },
    basicInfo: {
      hours: '平日 10:00〜21:00 / 土日 9:00〜19:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', 'エアリアルハンモック', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'Rintosull 月島店',
    image: '/images/studios/rintosull.webp',
    rating: 4.6,
    reviewCount: 176,
    reviews: [
      {
        author: 'C.M',
        rating: 5,
        date: '1週間前',
        text: 'LAVA運営の女性専用マシンピラティス。月4回8,800円は豊洲エリアで最安クラス！月島駅から徒歩6分。',
      },
      {
        author: 'H.Y',
        rating: 4,
        date: '2週間前',
        text: '2025年10月にオープンしたばかりの新しいスタジオ。設備がきれい。リフォーマーを使ったグループレッスンが中心。',
      },
      {
        author: 'A.S',
        rating: 5,
        date: '3週間前',
        text: 'LAVAの会員特典で併用利用も可能。ホットヨガとマシンピラティスの両方を楽しめるのが魅力。',
      },
    ],
    price: '月4回 8,800円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', '月島駅徒歩6分', 'LAVA運営', '低価格'],
    description: 'ホットヨガLAVA運営の女性専用マシンピラティススタジオ。2025年10月オープンの新しい店舗で、月4回8,800円からと豊洲エリアで最もリーズナブル。リフォーマーを使ったグループレッスンが中心。LAVA会員は特典での利用も可能。',
    access: '東京メトロ有楽町線・都営大江戸線「月島駅」出入口10 徒歩6分',
    address: '東京都中央区月島（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マシンピラティス月4回',
      description: '女性専用リフォーマーグループレッスン月4回。',
      price: '月4回 8,800円（税込）',
    },
    options: [
      '2店舗通い放題プラン（13,800円/月）',
      'LAVA会員特典あり',
      '無料体験レッスン受付中',
      '入会金・登録手数料 キャンペーンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '毎週日曜',
      facilities: ['リフォーマー', '更衣室', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'URBAN CLASSIC PILATES 月島店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11337L.1.X156352B.U1357808',
    image: '/images/studios/urban-classic-pilates.webp',
    rating: 4.5,
    reviewCount: 148,
    reviews: [
      {
        author: 'J.T',
        rating: 5,
        date: '1週間前',
        text: '月島駅2番出口から徒歩1分！マシンピラティスとファンクショナルトレーニングのサーキット形式が新鮮。月額7,800円〜で通えるのが嬉しい。',
      },
      {
        author: 'L.K',
        rating: 4,
        date: '2週間前',
        text: '予約不要で好きな時間に通えるのが便利。1回30分のサーキットだから忙しくても続けやすい。平日は21:30まで営業。',
      },
      {
        author: 'M.O',
        rating: 4,
        date: '3週間前',
        text: 'リフォーマーとファンクショナルトレーニングを交互に行うので飽きない。初心者でも映像ガイドがあるから安心。',
      },
    ],
    price: '月額 7,800円〜',
    trial: '体験レッスン あり',
    features: ['月島駅徒歩1分', '予約不要', 'サーキット式', '低価格'],
    description: '月島駅2番出口から徒歩1分。マシンピラティスとファンクショナルトレーニングを組み合わせたサーキット形式の30分トレーニングが特徴。予約不要で好きな時間に通えて、月額7,800円からと始めやすい価格設定。映像ガイド付きで初心者も安心。',
    access: '都営大江戸線・東京メトロ有楽町線「月島駅」2番出口 徒歩1分',
    address: '東京都中央区佃3-2-10 オーケンビル 5F',
    popularPlan: {
      name: '通い放題プラン',
      description: 'マシンピラティス＋ファンクショナルトレーニングのサーキット30分が通い放題。',
      price: '月額 11,800円（税込）',
    },
    options: [
      'ライトプラン（月額 7,800円）',
      '運営管理費（月額 480円）',
      '施設利用料 初回 2,200円',
      '映像ガイド付きで初心者安心',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ダイエット', '体幹強化', '運動不足解消', 'ボディメイク'],
    },
    basicInfo: {
      hours: '平日 9:30〜21:30 / 土祝 9:30〜19:30',
      closed: '毎週日曜',
      facilities: ['リフォーマー', 'ファンクショナルトレーニング機器', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Pilates Studio Refi',
    image: '/images/studios/pilates-studio-refi.webp',
    rating: 4.7,
    reviewCount: 12,
    reviews: [
      {
        author: 'T.Y',
        rating: 5,
        date: '1週間前',
        text: '現役の作業療法士が運営するスタジオ。整体とピラティスを組み合わせたメニューが他にはない魅力。東雲エリアで豊洲からもアクセスしやすい。',
      },
      {
        author: 'K.I',
        rating: 5,
        date: '2週間前',
        text: 'パーソナル60分6,600円で丁寧な指導。体の歪みや姿勢の問題を根本から改善できる。リハビリ的なアプローチが安心。',
      },
      {
        author: 'S.N',
        rating: 4,
        date: '3週間前',
        text: 'マットグループ60分2,750円とリーズナブル。少人数制で一人ひとりしっかり見てもらえる。ペアレッスンもあるので友人と通えます。',
      },
    ],
    price: 'マットグループ 2,750円/回〜',
    trial: '体験レッスンあり',
    features: ['作業療法士監修', '整体×ピラティス', 'パーソナル対応', '少人数制'],
    description: '東雲エリアに位置する、現役の作業療法士が運営するピラティススタジオ。整体とピラティスを組み合わせた独自のメニューで、体の内側と外側の両方から美しさと健康をサポート。パーソナル・ペア・マットグループの3タイプを提供。',
    access: '東京メトロ有楽町線「豊洲駅」から徒歩約15分 / りんかい線「東雲駅」から徒歩約10分',
    address: '東京都江東区東雲2丁目（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナルレッスン 60分',
      description: '作業療法士によるマンツーマンのピラティス指導。姿勢診断付き。',
      price: '1回 6,600円（税込）',
    },
    options: [
      'マットグループ 60分（2,750円/回）',
      'ペアレッスン 60分（4,400円/人）',
      'パーソナル 60分（6,600円/回）',
      '回数券あり',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['姿勢改善', 'リハビリ', '肩こり・腰痛改善', '体幹強化'],
    },
    basicInfo: {
      hours: '9:00〜21:00',
      closed: '月曜・祝日・年末年始',
      facilities: ['マット', 'ピラティス器具', '施術ベッド', '更衣室'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！豊洲エリアのスタジオはほとんどが初心者歓迎。CLUB PILATESは4段階のレベル分け、ELEMENTは入会者の90%が運動初心者。URBAN CLASSICは映像ガイド付きで安心です。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。豊洲エリアはマシン専門スタジオが特に充実しています。',
  },
  {
    question: '豊洲のピラティスの料金相場は？',
    answer: 'グループ月4回で8,800円〜14,190円程度。Rintosull月島が月4回8,800円で最安。URBAN CLASSICは月額7,800円〜。CLUB PILATESは月4回14,190円。パーソナルはELEMENTの通い放題55,000円/月が人気。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。大切なのは継続すること。ELEMENTやURBAN CLASSICは通い放題プランがあり、高頻度で通いたい方に最適。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2-3ヶ月の継続が大切です。URBAN CLASSICのサーキット形式は特に消費カロリーが高いです。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOK。ELEMENTはウェア・タオル・ドリンク全て無料で手ぶらOK。CLUB PILATESは無料イントロクラスあり。Rintosullも無料体験受付中。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化。ヨガは柔軟性とリラックス重視。followは両方のレッスンを提供しており、エアリアルヨガも楽しめます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'CLUB PILATES豊洲、ELEMENT豊洲、follow、URBAN CLASSIC月島、Pilates Studio Refiは男性も通えます。Rintosull月島は女性専用です。',
  },
  {
    question: '無料で体験できるスタジオは？',
    answer: 'CLUB PILATESは無料イントロクラス（30分）、Rintosull月島は無料体験を実施中。ELEMENTは体験3,300円、followは体験2,200円〜。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。パーソナルレッスンの方が早く効果を感じやすい傾向があります。',
  },
]

export default function ToyosuPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '豊洲', url: 'https://pilates-biyori.com/area/toyosu/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026年6月最新】ピラティス豊洲おすすめ6選！<br className="hidden md:block" />
              料金・体験レッスン・マシン対応を比較！
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
              <span className="text-warm-600">豊洲</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="豊洲" studioNames={studios.map((s) => s.name)} />

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
              「豊洲で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、豊洲エリアでおすすめのピラティススタジオ6選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>豊洲・月島エリアでピラティススタジオを探している</span>
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

        <PriceComparisonTable studios={studios} areaName="豊洲" />
        <AreaMarketComparison studios={studios} areaName="豊洲" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              豊洲のおすすめピラティススタジオ6選
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
              豊洲のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">2,750円〜55,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 6,600円〜55,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜3,300円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              豊洲はビジネス街としての性格が強く、仕事帰りの利用を想定した夜間プランや回数券プランが充実しています。賃料が高めのエリアのため料金は全体的にやや高い傾向ですが、法人契約や福利厚生割引に対応しているスタジオもあるので確認してみましょう。近隣の門前仲町エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              豊洲でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">東京メトロ有楽町線「豊洲駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  豊洲エリアのスタジオは豊洲駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。豊洲駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">ビジネス街特有の予約傾向を把握</h3>
                <p className="text-warm-600 leading-relaxed">
                  豊洲はオフィス街のため、平日ランチタイム（12時〜13時）と夕方以降（18時〜21時）に予約が集中する傾向があります。逆に土日は比較的空いているスタジオが多いので、平日に通いづらい方は週末を狙うのも手です。また、祝日は営業時間が変更になることがあるので事前確認を。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  豊洲エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ず確認しましょう。月の途中入会は日割り計算になるかも要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  豊洲エリアだけでなく、近隣の<Link href="/area/monzen-nakacho" className="text-warm-700 underline hover:text-warm-900">門前仲町</Link>、<Link href="/area/tsukiji" className="text-warm-700 underline hover:text-warm-900">築地</Link>、<Link href="/area/shinagawa" className="text-warm-700 underline hover:text-warm-900">品川</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>豊洲エリアの豆知識：</strong>豊洲はビジネスパーソンの利用が多いエリアです。スーツやオフィスカジュアルで来てそのまま着替えたい方は、ロッカールームの広さやシャワーの有無を重視してスタジオを選びましょう。ウェアレンタルがあれば、大きな荷物を持ち歩く必要がありません。
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
                  <li className="text-warm-700">• URBAN CLASSIC（月額 7,800円〜）</li>
                  <li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull 月島（月4回 8,800円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  駅から徒歩3分以内。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ELEMENT（豊洲駅 徒歩1分）</li>
                  <li className="text-warm-700">• follow（豊洲駅 徒歩1分）</li>
                  <li className="text-warm-700">• URBAN CLASSIC（月島駅 徒歩1分）</li>
                  <li className="text-warm-700">• CLUB PILATES（豊洲駅 徒歩3分）</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• URBAN CLASSIC（7,800円〜/月）</li>
                  <li>• Rintosull（8,800円/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 14,000〜22,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回〜通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン専門・複合スタジオ。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• CLUB PILATES（14,190円〜/月4回）</li>
                  <li>• follow（22,000円/受け放題）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 40,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  マンツーマン指導。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• CLUB PILATES（40,590円/通い放題）</li>
                  <li>• ELEMENT（55,000円/通い放題）</li>
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
                  ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。リハビリ目的ならPilates Studio Refiがおすすめ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  豊洲の料金相場はグループ月4回で8,800円〜14,190円。入会金やキャンペーンも確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  CLUB PILATESとRintosullは無料体験。ELEMENTは3,300円、followは2,200円〜で体験可能。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  豊洲は有楽町線・ゆりかもめの2路線が利用可能。ELEMENT・followは豊洲駅徒歩1分、CLUB PILATESは徒歩3分。月島エリアのURBAN CLASSICは月島駅徒歩1分とアクセス抜群。
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
              今回は豊洲エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では豊洲にあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜3,300円。<br />
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

      <RelatedAreas currentSlug="toyosu" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
