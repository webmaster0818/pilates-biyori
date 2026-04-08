import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス飯田橋・神楽坂おすすめ7選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '飯田橋・神楽坂エリアのおすすめピラティススタジオ7選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,飯田橋,神楽坂,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 飯田橋スタジオ',
    image: '/images/pilates2.jpg',
    rating: 4.8,
    reviewCount: 210,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '2週間前',
        text: '飯田橋駅B4b出口から徒歩1分で通いやすい。JR・東西線・有楽町線・南北線・大江戸線と5路線使えるのが便利。マットもマシンも両方受けられます。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '1ヶ月前',
        text: '少人数制なので丁寧に見てもらえます。神楽坂の落ち着いた雰囲気のなかでリラックスしてレッスンを受けられます。',
      },
      {
        author: 'K.H',
        rating: 4,
        date: '3週間前',
        text: '全国展開で出張先でも別店舗が利用可能。体験が500円からなので気軽に始められました。',
      },
    ],
    price: 'マットグループ 月4回 9,625円〜',
    trial: '体験レッスン 500円〜',
    features: ['マット&マシン', '初心者歓迎', '飯田橋駅徒歩1分', '男性OK'],
    description: '全国100店舗以上展開の大手ピラティススタジオ。飯田橋駅B4b出口から徒歩1分の好立地。マットグループ、マシン（リフォーマー）グループ、プライベートレッスンと幅広いメニュー。JR・地下鉄5路線が利用可能。',
    access: '地下鉄「飯田橋駅」B4b出口 徒歩1分 / JR「飯田橋駅」西口 徒歩3分',
    address: '東京都新宿区（飯田橋駅B4b出口徒歩1分）',
    popularPlan: {
      name: 'リフォーマーグループ（月4回）',
      description: 'マシン（リフォーマー）を使ったグループレッスン。少人数制で丁寧な指導。',
      price: '月4回 15,400円（税込）〜',
    },
    options: [
      'マットグループ（月4回 9,625円〜）',
      'リフォーマーグループ（月4回 15,400円〜）',
      'フリープラン（月16,940円〜）',
      'プライベートレッスン（1回 9,900円〜）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '月末不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi'],
    },
  },
  {
    name: 'URBAN CLASSIC PILATES 飯田橋店',
    image: '/images/pilates3.jpg',
    rating: 4.7,
    reviewCount: 150,
    reviews: [
      {
        author: 'R.N',
        rating: 5,
        date: '1週間前',
        text: '予約不要で30分で終わるので仕事帰りにサクッと通えます。1回1,485円からというコスパの良さが最高。',
      },
      {
        author: 'A.H',
        rating: 4,
        date: '2週間前',
        text: 'サーキット形式で効率よくトレーニングできます。マシンピラティス初心者でも分かりやすいプログラムです。',
      },
      {
        author: 'M.M',
        rating: 5,
        date: '3週間前',
        text: '通い放題プランで毎日でも通える。30分なので朝活にも使えます。飯田橋駅からすぐで便利。',
      },
    ],
    price: '月額 7,800円〜（通い放題 14,080円）',
    trial: '体験レッスン 3,800円',
    features: ['予約不要', '30分サーキット', '飯田橋駅近', 'マシン完備'],
    description: 'マシンピラティスとファンクショナルトレーニングを組み合わせたサーキット形式のスタジオ。予約不要・1回30分の短時間設計で忙しい方でも気軽に続けられます。1回あたり1,485円〜のコスパの良さが魅力。',
    access: '「飯田橋駅」徒歩圏内',
    address: '東京都新宿区（飯田橋駅徒歩圏内）',
    popularPlan: {
      name: '通い放題プラン',
      description: '予約不要・30分のサーキット形式で何度でも通える人気プラン。',
      price: '月額 14,080円（税込）',
    },
    options: [
      '週1回プラン（月額 7,800円〜）',
      '週2回プラン',
      '通い放題プラン（月額 14,080円）',
      '都度払い',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['運動不足解消', 'ボディメイク', '体幹強化', '時短トレーニング'],
    },
    basicInfo: {
      hours: '平日 10:00〜21:00 / 土日祝 10:00〜18:00',
      closed: '不定休',
      facilities: ['ロッカー', 'マシン完備'],
    },
  },
  {
    name: 'Pilates Mee 神楽坂・飯田橋店',
    image: '/images/pilates4.jpg',
    rating: 4.8,
    reviewCount: 120,
    reviews: [
      {
        author: 'T.W',
        rating: 5,
        date: '5日前',
        text: 'セミパーソナルで通い放題1回あたり1,250円は圧倒的にコスパが良い。少人数なのでしっかり見てもらえます。',
      },
      {
        author: 'H.I',
        rating: 5,
        date: '1週間前',
        text: '神楽坂駅から徒歩3分。セミパーソナルなのでグループより丁寧に指導してもらえて、パーソナルより安い。',
      },
      {
        author: 'S.N',
        rating: 4,
        date: '2週間前',
        text: '月4回プランで通っています。フォームを細かく修正してもらえるのがセミパーソナルの良さですね。',
      },
    ],
    price: 'セミパーソナル 月2回 11,000円〜',
    trial: 'お問い合わせください',
    features: ['セミパーソナル', '通い放題あり', '神楽坂駅徒歩3分', 'コスパ抜群'],
    description: 'セミパーソナル×通い放題で圧倒的なコスパを実現するマシンピラティススタジオ。神楽坂駅から徒歩3分。少人数制のセミパーソナルレッスンで、通い放題なら1回あたり1,250円。グループより丁寧、パーソナルより安い。',
    access: '東西線「神楽坂駅」徒歩3分 / 各線「飯田橋駅」徒歩圏内',
    address: '東京都新宿区（神楽坂駅徒歩3分）',
    popularPlan: {
      name: 'セミパーソナル通い放題',
      description: '少人数制セミパーソナルレッスンが何度でも受けられる。1回あたり1,250円の圧倒的コスパ。',
      price: '月額 37,500円（税込）',
    },
    options: [
      'セミパーソナル月2回（11,000円）',
      'セミパーソナル月4回（19,800円）',
      'セミパーソナル通い放題（37,500円）',
      'パーソナル月2回（22,000円）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', '姿勢改善', 'コスパ重視', '継続的な運動'],
    },
    basicInfo: {
      hours: '9:00〜21:30',
      closed: '不定休',
      facilities: ['ロッカー', 'マシン完備'],
    },
  },
  {
    name: 'CLUB PILATES 神楽坂店',
    image: '/images/pilates2.jpg',
    rating: 4.7,
    price: 'お問い合わせください',
    trial: '体験レッスン 無料',
    features: ['アメリカ発', 'グループ&プライベート', '神楽坂エリア', '初心者歓迎'],
    description: 'アメリカ発の世界最大級ピラティススタジオチェーン。全米No.1のピラティスメソッドで、初心者から上級者まで満足できるプログラム。グループレッスンからプライベートレッスンまで幅広く対応。無料体験レッスンあり。',
    access: '東西線「神楽坂駅」徒歩圏内',
    address: '東京都新宿区（神楽坂エリア）',
  },
  {
    name: 'ELEMENT 神楽坂・飯田橋店',
    image: '/images/pilates3.jpg',
    rating: 4.6,
    price: '1回 2,750円〜',
    trial: '体験レッスン 3,300円',
    features: ['通い放題', '1回30分', '飯田橋駅徒歩5分', 'パーソナル'],
    description: 'マンツーマンのマシンピラティスジム。1回30分から通える通い放題型で、神楽坂駅徒歩6分、飯田橋駅徒歩5分。パーソナルなのに1回2,750円からというリーズナブルな料金設定。',
    access: '東西線「神楽坂駅」徒歩6分 / 各線「飯田橋駅」徒歩5分',
    address: '東京都新宿区（神楽坂・飯田橋エリア）',
  },
  {
    name: 'STUDIO IVY 飯田橋店',
    image: '/images/pilates4.jpg',
    rating: 4.7,
    price: 'お問い合わせください',
    trial: '体験レッスンあり',
    features: ['パーソナル専門', 'マシンピラティス', '飯田橋エリア', '全国展開'],
    description: '全国展開のパーソナルマシンピラティス専門スタジオ。経験豊富なインストラクターが一人ひとりの体型や目標に合わせた効果的なトレーニングを提供。美しくしなやかな身体づくりを目指せます。',
    access: '各線「飯田橋駅」徒歩圏内',
    address: '東京都新宿区（飯田橋エリア）',
  },
  {
    name: 'Repilates 飯田橋神楽坂店',
    image: '/images/pilates2.jpg',
    rating: 4.6,
    price: 'お問い合わせください',
    trial: '体験レッスンあり',
    features: ['マシン専門', '飯田橋・神楽坂', 'グループレッスン', '初心者歓迎'],
    description: 'マシン専門ピラティススタジオ。飯田橋・神楽坂エリアに展開。リフォーマーマシンを使った本格的なグループレッスンを提供。初心者でも安心して始められるプログラムが充実しています。',
    access: '各線「飯田橋駅」/ 東西線「神楽坂駅」徒歩圏内',
    address: '東京都新宿区（飯田橋・神楽坂エリア）',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！飯田橋・神楽坂エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。経験豊富なインストラクターが基礎から丁寧に指導してくれるので、運動が苦手な方でも安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。',
  },
  {
    question: '飯田橋エリアのピラティススタジオの料金相場は？',
    answer: '飯田橋・神楽坂エリアのピラティススタジオの料金相場は、グループレッスン月4回で9,000円〜15,400円程度。セミパーソナルは月4回19,800円程度。パーソナルは月3〜4万円程度が相場です。体験レッスンは500円〜3,800円と手頃です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: 'ピラティス初心者は週1-2回（月4-8回）がおすすめ。慣れてきたら週2-3回に増やすと効果を実感しやすくなります。大切なのは継続すること。無理のないペースで長く続けることが近道です。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、ピラティスはダイエット効果があります。インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に。最低でも2-3ヶ月は継続が大切です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '基本的に動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。マットやタオルはスタジオでレンタルできることが多いです。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化し、ヨガは柔軟性と精神的なリラックスを重視します。目的に合わせて選びましょう。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、改善が期待できます。ピラティスは姿勢改善に効果的で、肩こりや腰痛の根本原因を解消できます。デスクワークが多い方にもおすすめです。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '効果が表れだすのは「2ヶ月を過ぎた頃」から。最低でも2ヶ月は継続するのがおすすめです。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'パーソナルは効果が出やすく短期間で結果を出したい方に、グループは料金が安く仲間と楽しく続けられます。まずは体験で両方試してみるのがいいですよ。',
  },
]

export default function IidabashiPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月08日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス飯田橋・神楽坂おすすめ7選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1>
          </div>
        </section>
        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">飯田橋</span>
            </nav>
          </div>
        </section>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates Navi編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「飯田橋や神楽坂でピラティスを始めたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「コスパの良いピラティススタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、飯田橋・神楽坂エリアでおすすめのピラティススタジオ7選をまとめました。</p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>飯田橋・神楽坂でピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>コスパの良いスタジオがいい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>体験レッスンが安いスタジオを知りたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金プランを比較したい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">飯田橋・神楽坂のおすすめピラティススタジオ7選</h2>
            <div className="space-y-8">{studios.map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">こだわりから探す</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">月額1万円以下から通えるスタジオ。サーキット形式やセミパーソナルで気軽に始められます。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• URBAN CLASSIC PILATES（月額7,800円〜）</li>
                  <li className="text-warm-700">• zen place pilates（マット月4回 9,625円〜）</li>
                  <li className="text-warm-700">• Pilates Mee（セミパーソナル月2回 11,000円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">マンツーマン指導で効果を最大化。短期間で結果を出したい方に。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STUDIO IVY（パーソナル専門）</li>
                  <li className="text-warm-700">• ELEMENT（通い放題1回2,750円〜）</li>
                  <li className="text-warm-700">• zen place（プライベートレッスンあり）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・通いやすさ</h3>
                <p className="text-warm-600 text-sm mb-4">飯田橋駅・神楽坂駅から徒歩すぐ。5路線利用可能でアクセス抜群。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（飯田橋駅徒歩1分）</li>
                  <li className="text-warm-700">• Pilates Mee（神楽坂駅徒歩3分）</li>
                  <li className="text-warm-700">• ELEMENT（飯田橋駅徒歩5分）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2>
            <div className="bg-white rounded-lg p-8 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">週1-2回（月4-8回）からスタートがおすすめ。継続期間は最低2-3ヶ月。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">週2-3回がおすすめ。3-6ヶ月継続すると目に見える変化が期待できます。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">週1回のペースで継続がおすすめ。無理なく長く続けることが大切です。</p>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">グループ</p>
                <p className="text-sm text-warm-600 mb-4">サーキット形式やマットグループ。気軽に始められる。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• URBAN CLASSIC（月額7,800円〜）</li>
                  <li>• zen place（マット月4回 9,625円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 14,000〜20,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">マシン完備。少人数制やセミパーソナル。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• URBAN CLASSIC通い放題（14,080円）</li>
                  <li>• zen place リフォーマー（15,400円〜）</li>
                  <li>• Pilates Mee（月4回 19,800円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">通い放題</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">コスパ◎</p>
                <p className="text-sm text-warm-600 mb-4">週2回以上通うなら通い放題プランがお得。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Pilates Mee（通い放題 37,500円）</li>
                  <li>• ELEMENT（通い放題 1回2,750円〜）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないピラティススタジオの選び方</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div>
                <p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化、リラックスなど、目的によって最適なスタジオは変わります。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div>
                <p className="text-warm-600 leading-relaxed">飯田橋エリアの料金相場は月4回で9,000円〜20,000円程度。無理なく継続できる予算を決めましょう。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div>
                <p className="text-warm-600 leading-relaxed">500円〜3,800円程度で体験できるスタジオが多いので、気軽に試してみてください。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div>
                <p className="text-warm-600 leading-relaxed">飯田橋はJR総武線・東西線・有楽町線・南北線・大江戸線の5路線が利用でき、神楽坂も徒歩圏内。おしゃれなカフェやレストランが並ぶ落ち着いた雰囲気のエリアで、レッスン前後の時間も楽しめます。</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-warm-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition">
                      <h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3>
                      <svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                    </summary>
                    <div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2>
            <p className="text-warm-600 leading-relaxed mb-6">今回は飯田橋・神楽坂のおすすめピラティススタジオについてご紹介しましたが、いかがでしたか？</p>
            <p className="text-warm-600 leading-relaxed mb-6">飯田橋はJRと地下鉄4路線の計5路線が利用でき、神楽坂も徒歩圏内。大手チェーンからセミパーソナル、パーソナル専門まで多彩なスタジオが揃い、コスパの良いスタジオが多いのも魅力です。</p>
            <p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p>
            <p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p>
          </div>
        </section>
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン500円〜3,800円。<br />まずは気軽に体験してみましょう。</p>
            <Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
