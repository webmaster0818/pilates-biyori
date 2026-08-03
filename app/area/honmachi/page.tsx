import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
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
  alternates: { canonical: 'https://biyori-pilates.com/area/honmachi/' },
  title: '【2026年8月最新】本町のピラティス｜初心者OK・無料体験で選ぶ料金比較',
  description: '本町エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,本町,大阪,堺筋本町,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'スタジオカラーズ',
    image: '/images/studios/studio-colors-honmachi.webp',
    rating: 4.8,
    reviewCount: 15,
    reviews: [
      {
        author: 'M.K',
        rating: 5,
        date: '1週間前',
        text: '本町駅3番出口から徒歩3分。マンツーマンレッスンが基本で、カウンセリング後に自分の体の状態に合わせたプログラムを組んでもらえます。',
      },
      {
        author: 'Y.S',
        rating: 5,
        date: '2週間前',
        text: 'ピラティス・ボディコード・ジャイロキネシス・ヨガを融合させたオリジナルメソッドが魅力。マシンの種類が豊富でリフォーマー以外にも色々体験できます。',
      },
      {
        author: 'A.T',
        rating: 4,
        date: '3週間前',
        text: 'デュエットレッスン（2人組）もあるので友達と一緒に参加できるのが嬉しい。グループレッスンもあり、自分のスタイルに合わせて選べます。',
      },
    ],
    price: 'パーソナル 1回 8,800円〜',
    trial: '体験レッスンあり',
    features: ['マンツーマン基本', '本町駅徒歩3分', '多彩なメソッド', 'マシン豊富'],
    description: 'ピラティス・ボディコード・ジャイロキネシス・ヨガを融合させたオリジナルのコンディショニングスタジオ。本町駅3番出口から徒歩3分。マンツーマンレッスンを基本とし、カウンセリング後に体調や姿勢に合わせたプログラムを提供。豊富なマシンを完備。',
    access: '大阪メトロ御堂筋線「本町駅」3番出口 徒歩3分',
    address: '大阪府大阪市中央区安土町3-2-4',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: 'カウンセリング＋マシンを使ったマンツーマンレッスン。',
      price: '1回 8,800円〜（税込）',
    },
    options: [
      'デュエットレッスン（2名）',
      'グループレッスン',
      'ボディコードレッスン',
      'ジャイロキネシスレッスン',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', 'コンディショニング', '体幹強化', 'リハビリ'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'バレル', '更衣室'],
    },
  },
  {
    name: 'STABE 本町スタジオ',
    image: '/images/studios/stabe-honmachi.webp',
    rating: 4.7,
    reviewCount: 24,
    reviews: [
      {
        author: 'S.N',
        rating: 5,
        date: '1週間前',
        text: '四つ橋線本町駅から徒歩3分。理学療法士と健康管理士が監修したプログラムが受けられる。最大6名の少人数制で丁寧な指導。',
      },
      {
        author: 'K.M',
        rating: 5,
        date: '2週間前',
        text: 'カナダから直輸入したマシンを使ったレッスンが本格的。シルクサスペンションもあって他では体験できないプログラムが魅力。',
      },
      {
        author: 'R.H',
        rating: 4,
        date: '3週間前',
        text: '産前産後ケアにも対応しているので安心。ストットピラティス公認のインストラクターが在籍していて指導の質が高い。',
      },
    ],
    price: 'グループ 1回 3,300円〜',
    trial: '体験レッスンあり',
    features: ['理学療法士監修', '最大6名少人数制', '四つ橋線本町徒歩3分', '産前産後対応'],
    description: '理学療法士と健康管理士が監修したプログラムを提供するピラティス・ヨガ専門スタジオ。四つ橋線本町駅から徒歩3分。最大6名の少人数制。カナダ直輸入のマシン完備。シルクサスペンションも体験可能。産前産後ケアにも対応。',
    access: '大阪メトロ四つ橋線「本町駅」徒歩3分',
    address: '大阪府大阪市西区靱本町1-15-20 大洋ビル 5F',
    popularPlan: {
      name: 'グループレッスン',
      description: '最大6名の少人数制マシンピラティス。理学療法士監修。',
      price: '1回 3,300円〜（税込）',
    },
    options: [
      'プライベートレッスン',
      'シルクサスペンション',
      'ヨガクラス',
      '産前産後ケアプログラム',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', 'リハビリ', 'ボディメイク', '産前産後ケア'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'シルクサスペンション', 'マット', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'ヴィオラトリコロール 本町リフォーマースタジオ',
    image: '/images/studios/viola-honmachi.webp',
    rating: 4.7,
    reviewCount: 17,
    reviews: [
      {
        author: 'E.Y',
        rating: 5,
        date: '1週間前',
        text: '2005年創業の老舗ヨガ・ピラティススタジオのリフォーマー専用スタジオ。本町駅からも堺筋本町駅からもアクセス良好。体験3,000円で本格レッスンが受けられます。',
      },
      {
        author: 'T.K',
        rating: 4,
        date: '2週間前',
        text: 'インストラクター養成スクールも運営しているので指導の質が非常に高い。リフォーマー専用スタジオなのでマシンの台数が多く予約が取りやすい。',
      },
      {
        author: 'N.M',
        rating: 5,
        date: '3週間前',
        text: 'グループレッスンでもしっかりフォームを見てもらえる。初心者クラスがあるので安心して始められました。',
      },
    ],
    price: '月4回 12,100円〜',
    trial: '体験レッスン 3,000円',
    features: ['老舗20年', 'リフォーマー専用', '3路線アクセス', 'インストラクター養成'],
    description: '2005年創業の大阪老舗ヨガ・ピラティススタジオによるリフォーマー専用スタジオ。御堂筋線本町駅・堺筋線堺筋本町駅・中央線の3路線アクセス。インストラクター養成スクールも運営する本格派。グループ・プライベートに対応。',
    access: '大阪メトロ御堂筋線「本町駅」/ 堺筋線「堺筋本町駅」/ 中央線利用可',
    address: '大阪府大阪市中央区安土町2-5-5 本町明大ビル 3F',
    popularPlan: {
      name: 'リフォーマーグループ月4回',
      description: 'リフォーマー専用スタジオでのグループレッスン月4回。',
      price: '月4回 12,100円（税込）',
    },
    options: [
      '通い放題プラン',
      'プライベートレッスン',
      '体験レッスン 3,000円',
      'ヨガクラスも受講可',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'ボディメイク', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'zen place pilates 本町スタジオ',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.6,
    reviewCount: 35,
    reviews: [
      {
        author: 'H.N',
        rating: 5,
        date: '1週間前',
        text: '本町駅7番出口から徒歩5分、堺筋本町駅からも徒歩3分。全国展開の大手で安心感がある。マットもマシンも両方受けられるのが魅力。',
      },
      {
        author: 'M.A',
        rating: 4,
        date: '2週間前',
        text: 'グループ体験1,000円と手頃。男性も通えるスタジオ。全国80店舗以上で相互利用できるので出張時にも便利。',
      },
      {
        author: 'Y.K',
        rating: 5,
        date: '3週間前',
        text: 'インストラクター養成も行っている本格派。朝7時からレッスンがあるので出勤前に通えます。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['全国展開', '男性OK', 'マット&マシン', '堺筋本町徒歩3分'],
    description: 'ピラティス専門の大手スタジオ。本町駅7番出口から徒歩5分、堺筋本町駅13・15番出口から徒歩3分。マットグループ・マシングループ・プライベートの3タイプから選べます。全国80店舗以上で相互利用可能。男性も歓迎。',
    access: '大阪メトロ御堂筋線「本町駅」7番出口 徒歩5分 / 堺筋線「堺筋本町駅」13・15番出口 徒歩3分',
    address: '大阪府大阪市中央区本町2-3-4 アソルティ本町ビル 3F',
    popularPlan: {
      name: 'フリープラン（マットグループ）',
      description: 'マットグループレッスン通い放題。全国店舗で相互利用可能。',
      price: '月額 14,960円（税込）',
    },
    options: [
      '月4回プラン（10,450円〜）',
      'マシングループ体験（3,000円）',
      'プライベートレッスン（体験 9,900円）',
      '他グレード店舗利用（差額あり）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'SHIN pilates studio 堺筋本町店',
    image: '/images/studios/shin-pilates-honmachi.webp',
    rating: 4.7,
    reviewCount: 5,
    reviews: [
      {
        author: 'C.S',
        rating: 5,
        date: '1週間前',
        text: '堺筋本町エリアのピラティス専門スタジオ。グループもプライベートも選べて、自分のペースで進められます。スタジオの雰囲気がおしゃれ。',
      },
      {
        author: 'K.T',
        rating: 5,
        date: '2週間前',
        text: 'プライベートレッスンでしっかり体の癖を見てもらえました。マシンを使った本格的なレッスンで、体の変化を早く実感できます。',
      },
      {
        author: 'R.M',
        rating: 4,
        date: '3週間前',
        text: 'グループレッスンも少人数制で丁寧。インストラクターが一人ひとりをしっかりサポートしてくれます。',
      },
    ],
    price: 'グループ 1回 3,300円〜',
    trial: '体験レッスンあり',
    features: ['ピラティス専門', '堺筋本町エリア', 'グループ&プライベート', '少人数制'],
    description: '堺筋本町・谷町四丁目に2拠点を構えるピラティス専門スタジオ。グループレッスンとプライベートレッスンの両方に対応。少人数制で一人ひとりに合わせた丁寧な指導。おしゃれな空間でモチベーションアップ。',
    access: '大阪メトロ堺筋線「堺筋本町駅」周辺',
    address: '大阪府大阪市中央区（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'グループレッスン',
      description: '少人数制のマシンピラティスグループレッスン。',
      price: '1回 3,300円〜（税込）',
    },
    options: [
      'プライベートレッスン',
      '回数券プラン',
      '月額プラン',
      '谷町四丁目店との併用可',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', '姿勢改善', '体幹強化', 'ダイエット'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', '更衣室', 'ロッカー'],
    },
  },  {
    name: 'studio COLERE 靱公園スタジオ',
    image: '/images/studios/studio-colere.webp',
    officialUrl: 'https://pilates-colere.com/',
    price: '月4回 27,200円（税込）',
    trial: '初回体験レッスン（45分）4,000円 ※オープン記念キャンペーンで無料予約可（実施状況は公式サイトでご確認ください）',
    features: ['女性専用', '完全個室・マンツーマン', 'タワーリフォーマー', '全店舗利用可'],
    description: '女性専用のパーソナルマシンピラティススタジオ。タワーリフォーマーを使った55分のマンツーマンレッスンで、一人ひとりの身体や目的に合わせて指導します（グループレッスンは実施していません）。大阪市内に5店舗を展開し、会員はどの店舗も利用できます。',
    access: '大阪メトロ中央線 阿波座駅①番出口から徒歩5分',
    address: '大阪府大阪市西区京町堀2丁目14-26 RE-007 203号室',
    popularPlan: {
      name: '月4回券',
      description: 'タワーリフォーマーを使ったパーソナルレッスン（1回55分）。会員はどのスタジオでも利用可能。',
      price: '27,200円（税込・有効期限1ヶ月）',
    },
    options: ['月2回券 14,000円（税込・有効期限1ヶ月）', '月8回券 50,400円（税込・有効期限1ヶ月）', '10回券 68,000円（税込・有効期限3ヶ月）'],
    userProfile: {
      ageRange: '公式サイトでご確認ください',
      genderRatio: '女性100%（女性専用）',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: 'お盆（8月14日〜16日）、年末年始',
      facilities: ['タワーリフォーマー', '完全個室・プライベート空間'],
    },
  },
  {
    name: 'studio COLERE 谷町四丁目スタジオ',
    image: '/images/studios/studio-colere.webp',
    officialUrl: 'https://pilates-colere.com/',
    price: '月4回 27,200円（税込）',
    trial: '初回体験レッスン（45分）4,000円 ※オープン記念キャンペーンで無料予約可（実施状況は公式サイトでご確認ください）',
    features: ['女性専用', '完全個室・マンツーマン', 'タワーリフォーマー', '全店舗利用可'],
    description: '女性専用のパーソナルマシンピラティススタジオ。タワーリフォーマーを使った55分のマンツーマンレッスンで、一人ひとりの身体や目的に合わせて指導します（グループレッスンは実施していません）。大阪市内に5店舗を展開し、会員はどの店舗も利用できます。',
    access: '大阪メトロ谷町線 谷町四丁目駅③番出口から徒歩3分30秒',
    address: '大阪府大阪市中央区内本町1丁目4-15 クリスタルブライト本町東 403号室',
    popularPlan: {
      name: '月4回券',
      description: 'タワーリフォーマーを使ったパーソナルレッスン（1回55分）。会員はどのスタジオでも利用可能。',
      price: '27,200円（税込・有効期限1ヶ月）',
    },
    options: ['月2回券 14,000円（税込・有効期限1ヶ月）', '月8回券 50,400円（税込・有効期限1ヶ月）', '10回券 68,000円（税込・有効期限3ヶ月）'],
    userProfile: {
      ageRange: '公式サイトでご確認ください',
      genderRatio: '女性100%（女性専用）',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: 'お盆（8月14日〜16日）、年末年始',
      facilities: ['タワーリフォーマー', '完全個室・プライベート空間'],
    },
  },

]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！本町エリアのスタジオはほとんどが初心者歓迎。STABEは理学療法士監修で安心、zen placeはグループ体験1,000円で気軽にスタートできます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。本町はマシン対応スタジオが充実。',
  },
  {
    question: '本町エリアのピラティスの料金相場は？',
    answer: 'グループ1回3,300円〜、月4回で10,450円〜12,100円程度。zen placeが月4回10,450円〜。パーソナルはスタジオカラーズが1回8,800円〜。',
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
    answer: '動きやすい服装と飲み物があればOK。zen placeはグループ1,000円、ヴィオラトリコロールは3,000円で体験可能。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化。ヨガは柔軟性とリラックス重視。STABEやヴィオラトリコロールは両方楽しめます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place本町、スタジオカラーズ、STABEは男性も通えます。',
  },
  {
    question: '産前産後でも通えますか？',
    answer: 'STABEは産前産後ケアにも対応。理学療法士監修のプログラムで安心して通えます。スタジオカラーズもカウンセリングベースで個別対応可能。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
]

export default function HonmachiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '本町', url: 'https://pilates-biyori.com/area/honmachi/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年08月01日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス本町おすすめ6選！<br className="hidden md:block" />
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
              <Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>
              {' > '}
              <span className="text-warm-600">本町</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="本町" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「本町で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、本町・堺筋本町エリアでおすすめのピラティススタジオ5選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>本町・堺筋本町でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>体験レッスンがお手頃なスタジオを知りたい</span>
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

        <PriceComparisonTable studios={studios} areaName="本町" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              本町のおすすめピラティススタジオ5選
            </h2>
            <div className="space-y-8">
              {[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>


        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              本町のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">3,300円〜14,960円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 3,300円〜8,800円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">1,000円〜3,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              本町はビジネス街としての性格が強く、仕事帰りの利用を想定した夜間プランや回数券プランが充実しています。賃料が高めのエリアのため料金は全体的にやや高い傾向ですが、法人契約や福利厚生割引に対応しているスタジオもあるので確認してみましょう。近隣の心斎橋エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              本町でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">大阪メトロ御堂筋線「本町駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  本町エリアのスタジオは本町駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。本町駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">ビジネス街特有の予約傾向を把握</h3>
                <p className="text-warm-600 leading-relaxed">
                  本町はオフィス街のため、平日ランチタイム（12時〜13時）と夕方以降（18時〜21時）に予約が集中する傾向があります。逆に土日は比較的空いているスタジオが多いので、平日に通いづらい方は週末を狙うのも手です。また、祝日は営業時間が変更になることがあるので事前確認を。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  本町エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ず確認しましょう。月の途中入会は日割り計算になるかも要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  本町エリアだけでなく、近隣の<Link href="/area/shinsaibashi/" className="text-warm-700 underline hover:text-warm-900">心斎橋</Link>、<Link href="/area/namba/" className="text-warm-700 underline hover:text-warm-900">なんば</Link>、<Link href="/area/umeda/" className="text-warm-700 underline hover:text-warm-900">梅田</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>本町エリアの豆知識：</strong>本町はビジネスパーソンの利用が多いエリアです。スーツやオフィスカジュアルで来てそのまま着替えたい方は、ロッカールームの広さやシャワーの有無を重視してスタジオを選びましょう。ウェアレンタルがあれば、大きな荷物を持ち歩く必要がありません。
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
                  月額1万円台で通えるスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• ヴィオラトリコロール（月4回 12,100円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマンで効果的に。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• スタジオカラーズ（1回 8,800円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">専門性重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  理学療法士・マスタートレーナー。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STABE（理学療法士監修）</li>
                  <li className="text-warm-700">• スタジオカラーズ（多彩なメソッド）</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜12,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place（10,450円〜/月4回）</li>
                  <li>• ヴィオラトリコロール（12,100円/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">1回 3,300円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">都度払い</p>
                <p className="text-sm text-warm-600 mb-4">
                  少人数制グループ。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• STABE（3,300円〜/回）</li>
                  <li>• SHIN pilates（3,300円〜/回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 8,800円〜/回</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全オーダーメイド。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• スタジオカラーズ（8,800円〜/回）</li>
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
                  ダイエット、姿勢改善、体幹強化、リハビリなど目的によって最適なスタジオは変わります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  本町エリアの料金相場はグループ月4回で10,450円〜12,100円。都度払い3,300円〜のスタジオもあります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  zen placeはグループ体験1,000円、ヴィオラトリコロールは3,000円で体験可能。気軽に試してみましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  本町エリアは御堂筋線・四つ橋線・堺筋線・中央線と4路線が利用可能。スタジオカラーズは本町駅徒歩3分、STABEも徒歩3分とアクセス抜群。
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
              今回は本町・堺筋本町エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では本町エリアにあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン1,000円〜3,000円。<br />
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

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="honmachi" areaName="本町" />

            {/* boost-p1-kitahama-202607 */}
            <div className="my-8 bg-white border border-warm-200 p-5">
              <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">近隣エリア</p>
              <p className="text-sm text-warm-700 font-light leading-relaxed">
                近隣の<Link href="/area/kitahama/" className="text-warm-800 underline decoration-warm-300 hover:text-warm-900">北浜・淀屋橋エリアのピラティススタジオ比較</Link>もあわせて検討できます。無料体験・料金・アクセスをまとめて確認できます。
              </p>
            </div>
      <RelatedAreas currentSlug="honmachi" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
