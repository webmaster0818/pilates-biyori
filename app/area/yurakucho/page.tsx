import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス有楽町おすすめ5選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '有楽町エリアのおすすめピラティススタジオ5選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。銀座・日比谷も徒歩圏内で初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,有楽町,銀座,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK 銀座店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.0,
    reviewCount: 186,
    reviews: [
      {
        author: 'T.W',
        rating: 5,
        date: '2週間前',
        text: '銀座一丁目駅から徒歩1分で通いやすいです。女性専用なので周りの目を気にせず集中できるのが嬉しい。音楽に合わせたマシンピラティスが楽しくて、あっという間にレッスンが終わります。',
      },
      {
        author: 'H.I',
        rating: 4,
        date: '1ヶ月前',
        text: 'JR有楽町駅からも徒歩6分で行けるので、仕事帰りに通っています。体験が2,000円でお手頃だったので気軽に始められました。インストラクターが明るくて楽しい雰囲気です。',
      },
      {
        author: 'S.N',
        rating: 5,
        date: '3週間前',
        text: '月4回のプランで通っています。暗闘レッスンもあって、初心者でも恥ずかしくないのが良いです。2ヶ月で体が引き締まってきた実感があります。',
      },
    ],
    price: '月4回 13,420円〜',
    trial: '体験レッスン 2,000円',
    features: ['音楽×マシン', '女性専用', '銀座一丁目駅徒歩1分', 'JR有楽町駅徒歩6分'],
    description: '音楽に合わせて楽しくボディメイクできる女性専用マシンピラティススタジオ。銀座一丁目駅7番出口から徒歩1分、JR有楽町駅京橋口から徒歩6分の好立地。暗闇×音楽×マシンピラティスの融合レッスンが人気で、周りの目を気にせず集中できる環境です。楽しみながら理想のボディラインを目指せます。',
    access: '銀座一丁目駅7番出口徒歩1分 / JR有楽町駅京橋口徒歩6分',
    address: '東京都中央区銀座1-6-10 上一ビルディング7F',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '暗闇×音楽×マシンピラティスの融合レッスン。楽しく続けられると人気のプラン。',
      price: '月4回 13,420円（税込）',
    },
    options: [
      'マンスリー8メンバー（月8回 16,170円）',
      'マンスリーデイメンバー（平日10-15時通い放題 14,520円）',
      'マンスリープレミアムメンバー（毎日2レッスン 18,920円）',
      '追加レッスン（1回 2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜30代が中心（全体の85%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['楽しく痩せたい', 'ストレス発散', 'ボディメイク', '仲間と運動'],
    },
    basicInfo: {
      hours: '火〜金 10:00〜22:00 / 土日祝 10:00〜20:00',
      closed: '月曜日',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '暗闇スタジオ', '女性専用'],
    },
  },
  {
    name: 'zen place pilates 銀座二丁目',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.3,
    reviewCount: 245,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '1週間前',
        text: '銀座一丁目駅10番出口から徒歩1分で通いやすいです。有楽町駅からも近いので、仕事帰りに寄れるのが嬉しい。マットグループのレッスンが月4回9,625円からとコスパが良いです。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '1ヶ月前',
        text: '全国展開しているので他店舗も使えるのが便利。体験レッスンが500円で気軽に試せました。インストラクターの質が高く、身体の変化を実感しています。',
      },
      {
        author: 'K.H',
        rating: 4,
        date: '3週間前',
        text: 'マットもマシンも両方できるのが良い。男性もOKなので夫婦で通っています。銀座エリアなのにリーズナブルな価格設定で続けやすいです。',
      },
    ],
    price: 'マット月4回 9,625円〜',
    trial: '体験レッスン 500円〜',
    features: ['マット＆マシン', '男性OK', '銀座一丁目駅徒歩1分', '全店相互利用可'],
    description: '全国150店舗以上を展開する日本最大級のピラティススタジオ。銀座一丁目駅10番出口から徒歩1分、有楽町駅からも近い好立地。マットグループからマシングループ、プライベートレッスンまで多彩なプログラムを提供。全店舗相互利用可能で、男性も利用OK。22年の実績と累計500万回以上のレッスン提供実績を持つ信頼のスタジオです。',
    access: '銀座一丁目駅10番出口徒歩1分 / 有楽町駅からも近い',
    address: '東京都中央区銀座2-11-15 SF銀座ビル2F',
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
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', 'マシン完備', '男女共用'],
    },
  },
  {
    name: 'the SILK 銀座店',
    image: '/images/studios/the-silk.webp',
    rating: 4.5,
    reviewCount: 172,
    reviews: [
      {
        author: 'R.N',
        rating: 5,
        date: '1週間前',
        text: '銀座駅A3出口から徒歩2分で通いやすい！女性専用なので気兼ねなく通えます。音楽×マシンのレッスンがとても楽しくて、毎回あっという間です。',
      },
      {
        author: 'A.H',
        rating: 4,
        date: '2週間前',
        text: '体験レッスンが無料なのが嬉しかった。暗闇の中で音楽に合わせて動くので、初心者でも恥ずかしさがありません。スタジオもとてもおしゃれで清潔感があります。',
      },
      {
        author: 'M.M',
        rating: 5,
        date: '3週間前',
        text: 'Standard4プランで月4回通っています。銀座でショッピングのついでに通えるのが便利。インストラクターの方も丁寧で、身体の変化を実感しています。',
      },
    ],
    price: 'Standard4 15,070円〜',
    trial: '体験レッスン 無料',
    features: ['暗闇マシン', '女性専用', '銀座駅徒歩2分', '音楽×マシンピラティス'],
    description: '女性専用のマシンピラティス特化型スタジオ。銀座駅A3出口から徒歩2分の好アクセス。暗闇×音楽で没入感のあるレッスンが特徴。最新のリフォーマーマシンを完備し、音楽に合わせた独自プログラムで楽しくトレーニング。有楽町エリアからも徒歩圏内で通いやすいスタジオです。体験レッスンが無料で気軽に始められます。',
    access: '銀座駅A3出口徒歩2分',
    address: '東京都中央区銀座5-9-12 ダイヤモンドビル3F',
    popularPlan: {
      name: 'Standard4（月4回）',
      description: '暗闘×音楽×マシンピラティスの融合レッスン。初心者にも人気のスタンダードプラン。',
      price: '月4回 15,070円（税込）',
    },
    options: [
      'Standard8（月8回 20,570円）',
      'Full Time（通い放題 22,880円）',
      '追加レッスンチケット（1回 3,850円）',
      'ウェア・タオルセット（月額 2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の80%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ストレス発散', '楽しく痩せたい', '姿勢改善'],
    },
    basicInfo: {
      hours: '平日 7:00〜22:00 / 土日祝 8:00〜20:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '暗闇スタジオ', '女性専用'],
    },
  },
  {
    name: 'BDC PILATES 銀座スタジオ',
    image: '/images/studios/bdc-pilates.webp',
    rating: 4.6,
    reviewCount: 138,
    reviews: [
      {
        author: 'K.Y',
        rating: 5,
        date: '5日前',
        text: '銀座一丁目駅から徒歩1分、JR有楽町駅からも徒歩3分でアクセス抜群。少人数制（最大8名）なので、インストラクターに丁寧に見てもらえます。',
      },
      {
        author: 'N.S',
        rating: 4,
        date: '1週間前',
        text: 'ダンスの基礎をベースにしたピラティスで、身体の使い方が根本から変わりました。グループレッスンでもしっかり個別に見てくれるのが良いです。',
      },
      {
        author: 'E.M',
        rating: 5,
        date: '2週間前',
        text: '質の高いインストラクターが揃っていて、毎回レッスンの満足度が高い。少人数制ならではの丁寧な指導が魅力的です。体験レッスンは3,850円ですが、その価値は十分あります。',
      },
    ],
    price: 'グループ月額 15,400円〜',
    trial: '体験レッスン 3,850円',
    features: ['少人数制最大8名', 'グループ＆プライベート', '銀座一丁目駅徒歩1分', 'JR有楽町駅徒歩3分'],
    description: 'ダンサー御用達の本格的なピラティススタジオ。銀座一丁目駅から徒歩1分、JR有楽町駅から徒歩3分の好立地。少人数制（最大8名）のグループレッスンで丁寧な指導を受けられます。ダンスの基礎をベースにした独自メソッドで、身体の使い方を根本から学べる質の高いプログラムが特徴。美しい姿勢と柔軟な身体を手に入れたい方におすすめです。',
    access: '銀座一丁目駅徒歩1分 / JR有楽町駅徒歩3分',
    address: '東京都中央区銀座（詳細は公式サイト参照）',
    popularPlan: {
      name: 'グループレッスン月額プラン',
      description: '少人数制（最大8名）のグループレッスン。丁寧な指導で効果的なトレーニング。',
      price: 'グループ月額 15,400円〜（税込）',
    },
    options: [
      'プライベートレッスン（1回 8,800円〜）',
      'グループチケット（5回 19,250円）',
      'グループチケット（10回 36,300円）',
      'ウェアレンタル（有料）',
    ],
    userProfile: {
      ageRange: '20代〜50代まで幅広い',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '体幹強化', 'パフォーマンス向上', '柔軟性アップ'],
    },
    basicInfo: {
      hours: '平日 10:00〜21:00 / 土日祝 9:00〜18:00',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', 'マシン完備'],
    },
  },
  {
    name: 'Rintosull 銀座店',
    image: '/images/studios/rintosull.webp',
    rating: 4.4,
    reviewCount: 95,
    reviews: [
      {
        author: 'M.T',
        rating: 5,
        date: '1週間前',
        text: '女性専用なので安心して通えます。月4回9,800円からというリーズナブルな価格が魅力。マシンピラティスが初めてでしたが、丁寧に教えていただけました。',
      },
      {
        author: 'C.I',
        rating: 4,
        date: '2週間前',
        text: '銀座エリアで女性専用のマシンピラティスが月1万円以下で通えるのは嬉しい。スタジオも清潔でおしゃれな雰囲気です。有楽町からも通える距離なので便利。',
      },
      {
        author: 'Y.O',
        rating: 5,
        date: '3週間前',
        text: '体験レッスンで雰囲気の良さに惹かれて入会しました。インストラクターの方が一人ひとりの動きをしっかり見てくれるので安心です。',
      },
    ],
    price: '月4回 9,800円〜',
    trial: '体験レッスン あり',
    features: ['女性専用', 'マシンピラティス', 'リーズナブル', '銀座エリア'],
    description: '女性専用のマシンピラティススタジオ。銀座エリアに展開し、有楽町からも通いやすい立地。月4回9,800円からというリーズナブルな価格設定が魅力。マシンピラティス初心者でも安心して始められる丁寧な指導が特徴です。清潔でおしゃれなスタジオ空間で、楽しみながらボディメイクができます。',
    access: '銀座エリア（有楽町からも徒歩圏内）',
    address: '東京都中央区銀座（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マンスリー4（月4回）',
      description: 'マシンピラティスの基本プラン。女性専用で安心して通えます。',
      price: '月4回 9,800円〜（税込）',
    },
    options: [
      '月8回プラン（要問合せ）',
      '通い放題プラン（要問合せ）',
      'ウェア・タオルレンタル（有料）',
      'ドリンクサービス（有料）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '運動不足解消'],
    },
    basicInfo: {
      hours: '平日 10:00〜22:00 / 土日祝 9:00〜19:00',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', 'マシン完備', '女性専用'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！有楽町・銀座エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。経験豊富なインストラクターが基礎から丁寧に指導してくれるので、運動が苦手な方でも安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。',
  },
  {
    question: '有楽町エリアのピラティススタジオの料金相場は？',
    answer: '有楽町・銀座エリアのピラティススタジオの料金相場は、月4回で9,600円〜15,400円程度。体験レッスンは無料〜3,850円が一般的です。zen place pilatesのマットグループ月4回9,625円や、Rintosullの月4回9,800円がリーズナブルな選択肢です。',
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
    question: '女性専用スタジオと男女共用スタジオの違いは？',
    answer: '女性専用スタジオ（ピラティスK、the SILK、Rintosull）は周りの目を気にせず集中できるのが魅力。男女共用スタジオ（zen place pilates、BDC PILATES）はカップルや夫婦で通えるメリットがあります。自分に合った環境を選びましょう。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれ良さがあります。パーソナルは一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方におすすめ。グループは料金が安く、仲間と楽しく続けられるのが魅力。BDC PILATESのような少人数制（最大8名）なら、グループでも丁寧に見てもらえますよ。',
  },
]

export default function YurakuchoPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月09日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス有楽町おすすめ5選！<br className="hidden md:block" />
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
              <span className="text-warm-600">有楽町</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="有楽町" />

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
              「有楽町で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、有楽町エリアでおすすめのピラティススタジオ5選をまとめました。有楽町はJR山手線・京浜東北線・有楽町線が利用可能で、銀座・日比谷も徒歩圏内。通勤やお出かけのついでに通いやすいエリアです。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>有楽町・銀座エリアでピラティススタジオを探している</span>
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
                  <span>銀座・日比谷に近いスタジオがいい</span>
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
              有楽町のおすすめピラティススタジオ5選
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
              こだわりから探す
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額1万円以下で通えるリーズナブルなスタジオ。体験レッスンもワンコイン500円から。コスパ重視の方におすすめ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 銀座二丁目（月4回9,625円〜）</li>
                  <li className="text-warm-700">• Rintosull 銀座店（月4回9,800円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  周りの目を気にせず集中できる女性専用スタジオ。初心者でも恥ずかしさなく始められます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK 銀座店（体験2,000円）</li>
                  <li className="text-warm-700">• the SILK 銀座店（体験無料）</li>
                  <li className="text-warm-700">• Rintosull 銀座店（体験あり）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・アクセス重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  有楽町駅・銀座一丁目駅から徒歩3分以内。仕事帰りやお出かけのついでに通えて便利。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK 銀座店（銀座一丁目駅徒歩1分）</li>
                  <li className="text-warm-700">• zen place pilates（銀座一丁目駅徒歩1分）</li>
                  <li className="text-warm-700">• BDC PILATES（銀座一丁目駅徒歩1分）</li>
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
                  マットグループレッスン中心。初心者向けの基本プランが充実。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates（9,625円）</li>
                  <li>• Rintosull（9,800円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜16,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の人気スタジオ。女性専用・少人数制も選べる。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（13,420円）</li>
                  <li>• the SILK（15,070円）</li>
                  <li>• BDC PILATES（15,400円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 30,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全プライベートレッスン。短期集中で結果を出したい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place（プライベート33,880円）</li>
                  <li>• BDC PILATES（プライベート）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50" id="how-to-choose">
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
                  有楽町・銀座エリアの料金相場は月4回で9,600円〜15,400円程度。無理なく継続できる予算を決めましょう。料金だけでなく、入会金、マット・ウェアのレンタル料なども確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。the SILKの無料体験、zen placeの500円体験など、気軽に試せるスタジオが多いですよ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。有楽町はJR山手線・京浜東北線・有楽町線が利用可能で、銀座・日比谷も徒歩圏内のアクセス抜群のエリアです。駅から近いスタジオを選ぶと、仕事帰りやお出かけのついでにも通えて便利ですよ。
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
              今回は有楽町エリアのおすすめピラティススタジオ5選をご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              有楽町はJR山手線・京浜東北線・有楽町線が利用可能で、銀座・日比谷も徒歩圏内というアクセス抜群のエリアです。コスパ重視ならzen place pilatesやRintosull、女性専用ならピラティスKやthe SILK、少人数制の丁寧な指導ならBDC PILATESがおすすめです。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              体験レッスンは無料〜3,850円で受けられるスタジオが多いので、気になるスタジオがあればまずは体験レッスンに参加してみてくださいね。
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
              初回限定の体験レッスン無料〜500円。<br />
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

      <RelatedAreas currentSlug="yurakucho" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
