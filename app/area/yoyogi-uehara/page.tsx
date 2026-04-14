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
  title: '【2026最新】ピラティス代々木上原おすすめ12選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '代々木上原エリアのおすすめピラティススタジオ12選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。代々木公園・代々木八幡・下北沢の近隣スタジオも紹介。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,代々木上原,東京,渋谷区,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,代々木公園,代々木八幡,下北沢',
}

const studios = [
  {
    name: 'zen place pilates 代々木上原スタジオ',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 265,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '2週間前',
        text: '代々木上原駅から徒歩2分で通いやすいです。小田急線と千代田線の両方使えるので、どこからでもアクセスしやすい。マットもマシンも両方受けられるのが嬉しいです。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '1ヶ月前',
        text: '少人数制なので丁寧に見てもらえます。マシンの種類も豊富で、自分のレベルに合わせて進められます。代々木上原の落ち着いた雰囲気も気に入っています。',
      },
      {
        author: 'K.H',
        rating: 4,
        date: '3週間前',
        text: '全国展開しているので出張先でも通えるのが便利です。インストラクターの質が高く、体の使い方を丁寧に教えてくれます。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: '体験レッスン 500円〜',
    features: ['マット&マシン', '初心者歓迎', '代々木上原駅徒歩2分', '男性OK'],
    description: '全国100店舗以上展開の大手ピラティススタジオ。代々木上原駅南口から徒歩2分の好立地。マットグループ、マシン（リフォーマー）グループ、プライベートレッスンと幅広いメニューを提供。経験豊富なインストラクターが一人ひとりに合わせた丁寧な指導を行います。',
    access: '小田急線・東京メトロ千代田線「代々木上原駅」南口2番出口 徒歩2分',
    address: '東京都渋谷区上原1-24-3 コリドール大川3F',
    popularPlan: {
      name: 'フリープラン（月4回）',
      description: 'マット・マシンどちらも受講可能な人気プラン。代々木上原駅から徒歩2分で通いやすい。',
      price: '月4回 10,450円（税込）〜',
    },
    options: [
      'プライベートレッスン追加（1回 9,900円〜）',
      'ウェアレンタル（月額 2,200円）',
      'タオルレンタル（月額 1,100円）',
      'インストラクター養成コース（別途）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '月〜金 11:00〜21:30 / 土日祝 10:00〜17:00',
      closed: '月末不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'ウォーターサーバー'],
    },
  },
  {
    name: 'URBAN CLASSIC PILATES 代々木上原店',
    image: '/images/studios/urban-classic-pilates.webp',
    rating: 4.7,
    reviewCount: 180,
    reviews: [
      {
        author: 'R.N',
        rating: 5,
        date: '1週間前',
        text: '予約不要で30分で終わるので、仕事帰りにサクッと通えるのが最高です。代々木上原駅から徒歩1分なので雨の日も楽。',
      },
      {
        author: 'A.H',
        rating: 4,
        date: '2週間前',
        text: 'サーキット形式で効率よくトレーニングできます。月額も手頃で続けやすい。マシンピラティス初心者でも分かりやすい。',
      },
      {
        author: 'M.M',
        rating: 5,
        date: '3週間前',
        text: '通い放題プランがコスパ最強です。30分で全身しっかり動かせるので、時間がない人にぴったり。',
      },
    ],
    price: '月額 7,800円〜（通い放題 14,080円）',
    trial: '体験レッスン 3,800円',
    features: ['予約不要', '30分サーキット', '代々木上原駅徒歩1分', 'マシン完備'],
    description: 'マシンピラティスとファンクショナルトレーニングを組み合わせたサーキット形式のスタジオ。代々木上原駅から徒歩1分の好立地。1回30分の短時間設計で、予約不要で通えるのが特徴。忙しい方でも気軽に続けられます。',
    access: '小田急線・東京メトロ千代田線「代々木上原駅」徒歩1分',
    address: '東京都渋谷区西原3丁目（代々木上原駅徒歩1分）',
    popularPlan: {
      name: '通い放題プラン',
      description: '予約不要・30分のサーキット形式で何度でも通える人気プラン。',
      price: '月額 14,080円（税込）',
    },
    options: [
      '週1回プラン（月額 7,800円〜）',
      '週2回プラン',
      '通い放題プラン（月額 14,080円）',
      '都度払いプラン',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', '運動不足解消', '体幹強化', '時短トレーニング'],
    },
    basicInfo: {
      hours: '平日 10:00〜21:00 / 土日祝 10:00〜18:00',
      closed: '不定休',
      facilities: ['ロッカー', 'Wi-Fi', 'マシン完備'],
    },
  },
  {
    name: 'Olaピラティススタジオ',
    image: '/images/studios/ola-pilates-yoyogiuehara.webp',
    rating: 4.9,
    reviewCount: 120,
    reviews: [
      {
        author: 'T.W',
        rating: 5,
        date: '5日前',
        text: '少人数制で丁寧に指導してもらえます。代々木上原駅から徒歩3分でアクセスも良い。ピラティス専門スタジオならではの質の高さを感じます。',
      },
      {
        author: 'H.I',
        rating: 5,
        date: '1週間前',
        text: '10回コースで通っています。回を重ねるごとに姿勢が良くなっているのを実感。インストラクターの知識がとても豊富です。',
      },
      {
        author: 'S.N',
        rating: 5,
        date: '2週間前',
        text: 'ピラティス専門スタジオならではの専門性の高さ。体の使い方が根本から変わりました。',
      },
    ],
    price: '10回 45,000円〜',
    trial: 'お問い合わせください',
    features: ['ピラティス専門', '少人数制', '代々木上原駅徒歩3分', '丁寧な指導'],
    description: '代々木上原駅から徒歩3分のピラティス専門スタジオ。少人数制で一人ひとりに合わせた丁寧な指導が特徴。ピラティスの本質に基づいた質の高いレッスンを提供しています。',
    access: '小田急線・東京メトロ千代田線「代々木上原駅」徒歩3分',
    address: '東京都渋谷区元代々木町12-7 ザ・サード代々木上原202',
    popularPlan: {
      name: '10回コース',
      description: 'ピラティス専門スタジオの質の高いレッスンを10回受講できるプラン。',
      price: '10回 / 10週 45,000円（税込）〜',
    },
    options: [
      '回数券プラン（10回〜）',
      '体験レッスン（お問い合わせ）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['姿勢改善', '体幹強化', '不調改善', '健康維持'],
    },
    basicInfo: {
      hours: '水〜金 9:00〜21:00 / 土日 9:00〜15:00',
      closed: '月曜日・火曜日',
      facilities: ['ロッカー', 'マシン完備'],
    },
  },
  {
    name: 'PILATES YOGA &a（アンドエー）代々木上原店',
    image: '/images/studios/pilates-and-a-yoga.webp',
    rating: 4.8,
    price: '1回 約9,075円〜',
    trial: '体験レッスン 5,500円',
    features: ['プライベート専門', 'マシンピラティス', '代々木上原駅徒歩2分', '空間デザインにこだわり'],
    description: '東京都内に複数店舗を展開するプライベート専門マシンピラティススタジオ。代々木上原駅東口から徒歩2分。心地よくリラックスした空間で、マンツーマンの丁寧な指導が受けられます。',
    access: '小田急線「代々木上原駅」東口 徒歩2分',
    address: '東京都渋谷区元代々木町10-6 Type Sevenビル4F',
  },
  {
    name: 'Econa pilates studio 代々木上原',
    image: '/images/studios/econa-pilates-yoyogiuehara.webp',
    rating: 4.8,
    price: '1回 8,900円〜',
    trial: '体験レッスン 0円',
    features: ['完全マンツーマン', '完全個室', '40代〜対応', '姿勢改善特化'],
    description: '40代からの姿勢改善・下半身引き締め・肩こり腰痛ケアに特化した完全マンツーマンのマシンピラティススタジオ。完全個室で、一人ひとりに合わせたオーダーメイドのレッスンを提供。体験レッスンは無料。',
    access: '小田急線・東京メトロ千代田線「代々木上原駅」徒歩圏内',
    address: '東京都渋谷区元代々木町23-11 park-yoyogiuehara #205',
  },
  {
    name: 'パーソナルマシンピラティスYUZU 代々木上原店',
    image: '/images/studios/yuzu-pilates.webp',
    rating: 4.7,
    price: 'お問い合わせください',
    trial: '体験レッスン あり',
    features: ['全員女性インストラクター', 'キッズスペース完備', '代々木上原駅徒歩5分', 'パーソナル'],
    description: '全員女性インストラクターによるパーソナルマシンピラティススタジオ。代々木上原駅から徒歩5分。キッズスペース完備でお子様連れでの来店も可能。一人ひとりに合わせたオーダーメイドのレッスンを提供します。',
    access: '小田急線・東京メトロ千代田線「代々木上原駅」徒歩5分',
    address: '東京都渋谷区上原3-1-5 ヴァルボォーレ代々木上原101',
  },
  {
    name: '3731BODYWORX',
    image: '/images/studios/3731bodyworx-yoyogiuehara.webp',
    rating: 4.7,
    price: '1回 8,600円〜',
    trial: '体験レッスン 8,800円',
    features: ['理学療法士・トレーナー在籍', 'マシンピラティス&筋トレ', '代々木上原駅徒歩2分', 'パーソナル'],
    description: '理学療法士・トレーナーが在籍する「整え」の専門パーソナルジム。代々木上原駅から徒歩2分。マシンピラティスと筋力トレーニングを組み合わせた50分のセッションで、姿勢改善や身体の不調にアプローチします。',
    access: '小田急線・東京メトロ千代田線「代々木上原駅」徒歩2分',
    address: '東京都渋谷区西原3丁目（代々木上原駅徒歩2分）',
  },
  {
    name: 'studio GOD 代々木上原',
    image: '/images/studios/studio-god-yoyogiuehara.webp',
    rating: 4.6,
    price: 'チケット制',
    trial: '初回体験キャンペーンあり',
    features: ['ヨガ&ピラティス', 'チケット制', '代々木上原駅徒歩1分', '入会金なし'],
    description: '代々木上原駅から徒歩1分のヨガ・ピラティススタジオ。入会金・月会費なしのチケット制で、好きな日に好きなレッスンに通える自由なスタイル。初心者から上級者まで多彩なクラスを用意しています。',
    access: '小田急線・東京メトロ千代田線「代々木上原駅」徒歩1分',
    address: '東京都渋谷区上原1-24-13 永興ビル2F',
  },
  {
    name: 'Wellness Hub TOKYO 代々木上原',
    image: '/images/studios/wellness-hub-yoyogiuehara.webp',
    rating: 4.6,
    price: 'お問い合わせください',
    trial: '初回体験 3,300円',
    features: ['少人数制（最大6名）', 'ヨガ&ピラティス', '代々木上原駅徒歩1分', 'よもぎ蒸しあり'],
    description: '代々木上原駅から徒歩1分の少人数制ヨガ・ピラティススタジオ。最大6名の少人数クラスで丁寧な指導。ピラティスだけでなく、プライベートヨガやよもぎ蒸し、ヘッドショルダーセラピーなどのウェルネスメニューも充実しています。',
    access: '東京メトロ千代田線・小田急線「代々木上原駅」徒歩1分',
    address: '東京都渋谷区西原3-13-15 フラット代々木上原B棟303',
  },
  {
    name: 'zen place pilates 下北沢スタジオ',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.7,
    price: '月4回 10,450円〜',
    trial: '体験レッスン 500円〜',
    features: ['マット&マシン', '初心者歓迎', '下北沢駅徒歩2分', '男性OK'],
    description: '下北沢駅から徒歩2分の好立地。代々木上原から小田急線で1駅のアクセス。全国展開のzen placeブランドならではの質の高いレッスンを、マットグループ・マシングループ・プライベートの3形式で提供。代々木上原エリアからも通いやすい人気スタジオです。',
    access: '小田急線・京王井の頭線「下北沢駅」徒歩2分（代々木上原から1駅）',
    address: '東京都渋谷区北沢2丁目（下北沢駅徒歩2分）',
  },
  {
    name: 'the SILK 渋谷店',
    image: '/images/studios/the-silk.webp',
    rating: 4.7,
    price: '月4回 15,070円〜',
    trial: '体験レッスン あり',
    features: ['女性専用', 'マシンピラティス', '渋谷駅徒歩5分', '音楽×ピラティス'],
    description: '女性専用のマシンピラティススタジオ。音楽に合わせてリフォーマーを使ったグループレッスンが特徴。渋谷駅から徒歩5分で、代々木上原から千代田線で明治神宮前経由のアクセスも良好。おしゃれな空間でモチベーション高くトレーニングできます。',
    access: '各線「渋谷駅」徒歩5分（代々木上原から千代田線で約10分）',
    address: '東京都渋谷区宇田川町36-6 ワールド宇田川ビル5F',
  },
  {
    name: 'BDC PILATES 代々木公園スタジオ',
    image: '/images/studios/bdc-pilates.webp',
    rating: 4.8,
    price: '1回 3,850円〜',
    trial: '体験レッスン 3,850円',
    features: ['マシンピラティス', 'グループ&プライベート', '代々木公園駅徒歩3分', 'バレエ要素'],
    description: 'BDC（ブロードウェイダンスセンター）が運営するマシンピラティス専門スタジオ。代々木公園駅から徒歩3分。バレエの要素を取り入れた独自メソッドで、美しいボディラインを目指せます。代々木上原から代々木公園駅は千代田線で1駅の好アクセス。',
    access: '東京メトロ千代田線「代々木公園駅」徒歩3分（代々木上原から1駅）',
    address: '東京都渋谷区富ヶ谷1-6-9 荒木ビル4F',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！代々木上原エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。経験豊富なインストラクターが基礎から丁寧に指導してくれるので、運動が苦手な方でも安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。',
  },
  {
    question: '代々木上原のピラティススタジオの料金相場は？',
    answer: '代々木上原エリアのピラティススタジオの料金相場は、グループレッスン月4回で10,000円〜15,000円程度。プライベートレッスンは1回8,000円〜10,000円が相場です。体験レッスンは無料〜5,500円と幅広く、まずは体験で試してみるのがおすすめです。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: 'ピラティス初心者は週1-2回（月4-8回）がおすすめ。慣れてきたら週2-3回に増やすと効果を実感しやすくなります。大切なのは継続すること。無理のないペースで長く続けることが、理想の身体を手に入れる近道です。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、ピラティスはダイエット効果があります。インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に。ただし即効性はないので、最低でも2-3ヶ月は継続することが大切。食事管理も並行するとより効果的です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '基本的に動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。マットやタオルはスタジオでレンタルできることが多いです。詳細は各スタジオの体験レッスン案内で確認してくださいね。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズ。ヨガは柔軟性と精神的なリラックスを重視します。ピラティスは筋力強化、ヨガは心身のバランスを整えることが主な目的。どちらも素晴らしいエクササイズなので、目的に合わせて選びましょう。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。デスクワークが多い方や立ち仕事の方にもおすすめです。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスで効果が表れだすのは「2ヶ月を過ぎた頃」から。これは人間の細胞が生まれ変わるサイクルがそのくらいだからです。すぐに変化が表れなくても心配せず、最低でも2ヶ月は継続するのがおすすめです。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれ良さがあります。パーソナルは一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方におすすめ。グループは料金が安く、仲間と楽しく続けられるのが魅力。まずは体験で両方試してみるのがいいですよ。',
  },
  {
    question: '代々木上原の近隣駅のスタジオも通えますか？',
    answer: 'はい、代々木上原は小田急線と東京メトロ千代田線の2路線が利用できるため、下北沢（小田急線で1駅）、代々木公園（千代田線で1駅）、代々木八幡（徒歩圏内）など近隣のスタジオにも気軽に通えます。選択肢が広がるのも代々木上原エリアの魅力です。',
  },
]

export default function YoyogiUeharaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月09日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス代々木上原おすすめ12選！<br className="hidden md:block" />
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
              <span className="text-warm-600">代々木上原</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="代々木上原" />

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
              「代々木上原で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、代々木上原エリアでおすすめのピラティススタジオ12選をまとめました。代々木上原駅周辺はもちろん、代々木公園・代々木八幡・下北沢など近隣エリアの人気スタジオもご紹介します。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>代々木上原でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>料金やレッスン内容を比較したい</span>
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
                  <span>駅近で通いやすいスタジオがいい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>代々木公園・下北沢など近隣のスタジオも知りたい</span>
                </li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">
              それではさっそく見ていきましょう！
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="代々木上原" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              代々木上原のおすすめピラティススタジオ12選
            </h2>
            <div className="space-y-8">
              {studios.map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
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
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額1万円前後で通えるスタジオ。グループレッスンやサーキット形式で気軽に始められます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• URBAN CLASSIC PILATES（月額7,800円〜）</li>
                  <li className="text-warm-700">• zen place pilates（月4回 10,450円〜）</li>
                  <li className="text-warm-700">• studio GOD（チケット制・入会金なし）</li>
                  <li className="text-warm-700">• BDC PILATES（1回 3,850円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマン指導で効果を最大化。姿勢改善や身体の不調にしっかり向き合いたい方に。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Econa pilates studio（体験無料）</li>
                  <li className="text-warm-700">• PILATES YOGA &a</li>
                  <li className="text-warm-700">• 3731BODYWORX</li>
                  <li className="text-warm-700">• パーソナルマシンピラティスYUZU</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・通いやすさ</h3>
                <p className="text-warm-600 text-sm mb-4">
                  代々木上原駅から徒歩2分以内。小田急線・千代田線からのアクセスが抜群。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• URBAN CLASSIC PILATES（駅徒歩1分）</li>
                  <li className="text-warm-700">• studio GOD（駅徒歩1分）</li>
                  <li className="text-warm-700">• Wellness Hub TOKYO（駅徒歩1分）</li>
                  <li className="text-warm-700">• zen place pilates（駅徒歩2分）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Area Guide */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              代々木上原から通える近隣エリア
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-warm-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-warm-900 mb-2">代々木公園・代々木八幡</h3>
                <p className="text-sm text-warm-600 mb-3">
                  千代田線で1駅。徒歩でも約10分。代々木公園の緑豊かな環境が魅力のエリア。
                </p>
                <p className="text-sm text-warm-700 font-medium">• BDC PILATES 代々木公園スタジオ</p>
              </div>
              <div className="bg-white border border-warm-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-warm-900 mb-2">下北沢</h3>
                <p className="text-sm text-warm-600 mb-3">
                  小田急線で1駅。若者に人気のカルチャータウン。スタジオの選択肢も豊富。
                </p>
                <p className="text-sm text-warm-700 font-medium">• zen place pilates 下北沢スタジオ</p>
              </div>
              <div className="bg-white border border-warm-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-warm-900 mb-2">渋谷</h3>
                <p className="text-sm text-warm-600 mb-3">
                  千代田線で明治神宮前経由約10分。大手スタジオが集中するターミナル駅。
                </p>
                <p className="text-sm text-warm-700 font-medium">• the SILK 渋谷店</p>
              </div>
            </div>
          </div>
        </section>

        {/* Frequency Guide */}
        <section className="py-16 bg-white" id="frequency">
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

        {/* Price Guide */}
        <section className="py-16 bg-warm-50" id="price-guide">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              予算別の料金相場
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">グループ</p>
                <p className="text-sm text-warm-600 mb-4">
                  サーキット形式やグループレッスン中心。初心者が気軽に始められる。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• URBAN CLASSIC PILATES（月額7,800円〜）</li>
                  <li>• studio GOD（チケット制）</li>
                  <li>• BDC PILATES（1回 3,850円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜15,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオ。グループ・プライベート選択可。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates（月4回 10,450円〜）</li>
                  <li>• URBAN CLASSIC PILATES（通い放題 14,080円）</li>
                  <li>• the SILK（月4回 15,070円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 30,000円〜/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全プライベートレッスン。短期集中で結果を出したい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Econa pilates（1回 8,900円〜）</li>
                  <li>• &a アンドエー（1回 約9,075円〜）</li>
                  <li>• 3731BODYWORX（1回 8,600円〜）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-white" id="how-to-choose">
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
                  まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、体幹強化、リラックスなど、目的によって最適なスタジオやプログラムは変わります。目的が明確だとスタジオ選びもスムーズになりますよ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  代々木上原エリアの料金相場は、グループレッスン月4回で10,000円〜15,000円程度、パーソナルは1回8,000円〜10,000円程度。無理なく継続できる予算を決めましょう。料金だけでなく、入会金やレンタル料なども確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。代々木上原エリアでは無料〜5,500円程度で体験レッスンを提供しているスタジオが多いので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。代々木上原は小田急小田原線と東京メトロ千代田線が利用でき、渋谷・新宿・表参道からのアクセスも良好。閑静な住宅街で落ち着いた雰囲気のエリアです。駅から近いスタジオを選ぶと、仕事帰りや買い物ついでにも通えて便利ですよ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-warm-50" id="faq">
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
        <section className="py-16 bg-white" id="summary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">
              まとめ
            </h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は代々木上原のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              代々木上原は小田急線と千代田線が利用できる便利な立地で、駅徒歩1〜5分圏内に多くのピラティススタジオが集まっています。さらに代々木公園や下北沢、渋谷など近隣エリアまで足を伸ばせば、グループレッスンからパーソナルまで、自分に合ったスタイルで始められるのが魅力です。
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
              初回限定の体験レッスン無料〜5,500円。<br />
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

      <RelatedAreas currentSlug="yoyogi-uehara" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
