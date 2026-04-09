import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス新橋おすすめ6選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '新橋・銀座エリアのおすすめピラティススタジオ6選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。仕事帰りに通えるスタジオが見つかります。',
  keywords: 'ピラティス,新橋,銀座,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'CREA パーソナルピラティススタジオ 新橋・銀座店',
    image: '/images/pilates2.jpg',
    rating: 4.9,
    reviewCount: 95,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '2週間前',
        text: '新橋駅から徒歩4分で通いやすいです。完全個室のパーソナルなので、自分のペースでじっくりレッスンを受けられます。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '1ヶ月前',
        text: '女性専用で安心。体の悩みに合わせたオーダーメイドのレッスンが受けられます。姿勢が良くなったと周りから言われるようになりました。',
      },
      {
        author: 'K.H',
        rating: 5,
        date: '3週間前',
        text: '体験レッスン3,300円で本格的なパーソナルレッスンを受けられるのはお得。内幸町からも近くて便利です。',
      },
    ],
    price: 'お問い合わせください',
    trial: '体験レッスン 3,300円',
    features: ['女性専用', '完全個室', '新橋駅徒歩4分', 'パーソナル専門'],
    description: '女性専用・完全個室のパーソナルマシンピラティス専門スタジオ。新橋駅から徒歩4分、内幸町駅から徒歩4分の好立地。一人ひとりの体型と目標に合わせたオーダーメイドのパーソナルトレーニングを提供。あなたの「綺麗」を創造するスタジオです。',
    access: 'JR・銀座線「新橋駅」徒歩4分 / 三田線「内幸町駅」徒歩4分 / 日比谷線「日比谷駅」徒歩4分',
    address: '東京都中央区銀座7-2-14 第26ポールスタービル地下1階A室',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '完全個室で女性専用のマンツーマンマシンピラティス。一人ひとりに合わせたオーダーメイドプログラム。',
      price: 'お問い合わせください',
    },
    options: [
      '体験レッスン（3,300円）',
      'パーソナルレッスン（お問い合わせ）',
      '回数券プラン（お問い合わせ）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '美しいボディライン'],
    },
    basicInfo: {
      hours: 'お問い合わせください',
      closed: '不定休',
      facilities: ['完全個室', 'マシン完備', '女性専用'],
    },
  },
  {
    name: 'zen place pilates 銀座四丁目スタジオ',
    image: '/images/pilates3.jpg',
    rating: 4.8,
    reviewCount: 210,
    reviews: [
      {
        author: 'R.N',
        rating: 5,
        date: '1週間前',
        text: '東銀座駅から徒歩1分で新橋からも近い。マットもマシンも両方受けられるのが嬉しい。仕事帰りに通っています。',
      },
      {
        author: 'A.H',
        rating: 4,
        date: '2週間前',
        text: '少人数制なので丁寧に指導してもらえます。男性もOKなので夫婦で通えるのが良い。',
      },
      {
        author: 'M.M',
        rating: 5,
        date: '3週間前',
        text: '全国展開で出張先でも別店舗が利用できるのが便利。銀座のスタジオは落ち着いた雰囲気で集中できます。',
      },
    ],
    price: 'マットグループ 月4回 9,625円〜',
    trial: '体験レッスン 500円〜',
    features: ['マット&マシン', '東銀座駅徒歩1分', '男性OK', '初心者歓迎'],
    description: '全国100店舗以上展開の大手ピラティススタジオ。東銀座駅5番出口から徒歩1分、新橋駅からも徒歩圏内。マットグループ、マシン（リフォーマー）グループ、プライベートレッスンと幅広いメニューを提供。',
    access: '日比谷線「東銀座駅」5番出口 徒歩1分 / 新橋駅から徒歩圏内',
    address: '東京都中央区銀座（東銀座駅徒歩1分）',
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
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', '仕事帰りのリフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '月末不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi'],
    },
  },
  {
    name: 'the SILK 銀座店',
    image: '/images/pilates4.jpg',
    rating: 4.8,
    reviewCount: 195,
    reviews: [
      {
        author: 'T.W',
        rating: 5,
        date: '5日前',
        text: '銀座駅から徒歩2分、新橋からも歩ける距離です。女性専用で安心。スタジオがとてもおしゃれでモチベーションが上がります。',
      },
      {
        author: 'H.I',
        rating: 5,
        date: '1週間前',
        text: '音楽に合わせたレッスンが楽しい！体験レッスンが無料なので気軽に始められました。',
      },
      {
        author: 'S.N',
        rating: 4,
        date: '2週間前',
        text: 'リフォーマーマシンを使ったレッスンで効果を実感。仕事帰りに銀座で体を動かすのが日課になりました。',
      },
    ],
    price: 'Standard4 15,070円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', 'マシンピラティス専門', '銀座駅徒歩2分', '音楽×マシン'],
    description: '女性専用マシンピラティス専門スタジオ。銀座駅A3出口から徒歩2分、新橋駅3番出口から徒歩10分。最新のリフォーマーマシンを完備し、音楽に合わせた独自プログラムで楽しくトレーニング。世界水準のピラティス指導を提供。',
    access: '銀座線「銀座駅」A3出口 徒歩2分 / JR「新橋駅」3番出口 徒歩10分',
    address: '東京都中央区銀座5-9-12 ダイヤモンドビル3F',
    popularPlan: {
      name: 'Standard4（月4回）',
      description: '女性専用マシンピラティスの基本プラン。音楽に合わせた50分のグループレッスン。',
      price: '月4回 15,070円（税込）〜',
    },
    options: [
      'Standard4（月4回 15,070円〜）',
      'Full（通い放題）',
      'Full Day（デイタイム通い放題）',
      '体験レッスン無料キャンペーン実施中',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '7:30〜21:00',
      closed: '年末年始（12/29〜1/3）',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '女性専用'],
    },
  },
  {
    name: 'ピラティスK 銀座店',
    image: '/images/pilates2.jpg',
    rating: 4.7,
    price: 'マンスリー4メンバー 13,420円',
    trial: '体験レッスン 2,000円',
    features: ['女性専用', 'マシンピラティス専門', '銀座一丁目駅徒歩1分', 'グループレッスン'],
    description: '「30歳からの本気ボディメイク」がコンセプトの女性専用マシンピラティス専門スタジオ。銀座一丁目駅7番出口から徒歩1分。新橋から銀座線で銀座駅まで1駅。初心者から経験者まで個人のペースに合わせたプログラムを用意。',
    access: '有楽町線「銀座一丁目駅」7番出口 徒歩1分 / 新橋から銀座線で銀座駅まで1駅',
    address: '東京都中央区銀座1-6-10 上一ビルディング7F',
  },
  {
    name: 'BIRTH Pilates Studio（バースピラティス）',
    image: '/images/pilates3.jpg',
    rating: 4.9,
    price: '1回 9,600円',
    trial: '体験レッスン 平日4,500円 / 土日祝5,500円',
    features: ['完全個室', 'パーソナル専門', '東銀座駅徒歩4分', 'マタニティ対応'],
    description: '銀座の完全個室マシンピラティス専門スタジオ。東銀座駅A7出口から徒歩4分、新富町駅から徒歩4分。完全予約制のパーソナルレッスンで、一人ひとりに合わせたオーダーメイドの指導。マタニティ・産後ピラティスにも対応。',
    access: '都営浅草線「東銀座駅」A7出口 徒歩4分 / 有楽町線「新富町駅」1番出口 徒歩4分',
    address: '東京都中央区銀座1-20-5 銀座清和ビル6F',
  },
  {
    name: 'BDC PILATES 銀座スタジオ',
    image: '/images/pilates4.jpg',
    rating: 4.7,
    price: 'グループ 月額 15,400円〜',
    trial: '体験レッスン 3,850円',
    features: ['プロダンサー養成校プロデュース', '少人数制（最大8名）', '銀座一丁目駅徒歩1分', '本格的'],
    description: '40年以上の実績を持つプロダンサー養成校「BDC」がプロデュースするマシンピラティス専門スタジオ。銀座一丁目駅から徒歩1分、JR有楽町駅から徒歩3分。新橋から銀座方面へのアクセスも良好。最大8名の少人数制で質の高いレッスンを提供。',
    access: '有楽町線「銀座一丁目駅」徒歩1分 / JR「有楽町駅」徒歩3分',
    address: '東京都中央区銀座（銀座一丁目駅徒歩1分）',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！新橋・銀座エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。経験豊富なインストラクターが基礎から丁寧に指導してくれるので、運動が苦手な方でも安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。',
  },
  {
    question: '新橋エリアのピラティススタジオの料金相場は？',
    answer: '新橋・銀座エリアのピラティススタジオの料金相場は、グループレッスン月4回で9,600円〜16,000円程度。パーソナルレッスンは1回8,000円〜10,000円が相場です。体験レッスンは無料〜5,500円と幅があるので、まずは体験で試してみるのがおすすめです。',
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
    answer: 'ピラティスで効果が表れだすのは「2ヶ月を過ぎた頃」から。すぐに変化が表れなくても心配せず、最低でも2ヶ月は継続するのがおすすめです。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれ良さがあります。パーソナルは一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方におすすめ。グループは料金が安く、仲間と楽しく続けられるのが魅力。まずは体験で両方試してみるのがいいですよ。',
  },
]

export default function ShimbashiPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月08日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス新橋おすすめ6選！<br className="hidden md:block" />
              人気スタジオの料金プランを簡単比較！
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>
              {' > '}
              <Link href="/area" className="hover:text-warm-800 transition">地域別</Link>
              {' > '}
              <span className="text-warm-600">新橋</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates Navi編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「新橋周辺でピラティスを始めたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「仕事帰りに通えるピラティススタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、新橋・銀座エリアでおすすめのピラティススタジオ6選をまとめました。</p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>新橋・銀座でピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>仕事帰りに通えるスタジオがいい</span></li>
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
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">新橋・銀座のおすすめピラティススタジオ6選</h2>
            <div className="space-y-8">
              {studios.map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">こだわりから探す</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">月額1万円以下から通えるスタジオ。グループレッスンで気軽に始められます。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（マット月4回 9,625円〜）</li>
                  <li className="text-warm-700">• ピラティスK 銀座（月4回 13,420円）</li>
                  <li className="text-warm-700">• the SILK 銀座（月4回 15,070円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">完全個室のマンツーマン指導。短期間で結果を出したい方に。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• CREA（女性専用・完全個室）</li>
                  <li className="text-warm-700">• BIRTH Pilates（完全個室・マタニティ対応）</li>
                  <li className="text-warm-700">• zen place（プライベートレッスンあり）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">新橋駅からの近さ</h3>
                <p className="text-warm-600 text-sm mb-4">新橋駅から徒歩圏内。仕事帰りにもアクセスしやすい。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• CREA（新橋駅徒歩4分）</li>
                  <li className="text-warm-700">• zen place 銀座四丁目（東銀座駅徒歩1分）</li>
                  <li className="text-warm-700">• the SILK 銀座（銀座駅徒歩2分）</li>
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
              <p className="text-warm-600 leading-relaxed mb-6">週1-2回（月4-8回）からスタートするのがおすすめ。まずは身体を慣らすことが大切です。継続期間は最低でも2-3ヶ月。この期間で効果を実感できる方が多いですよ。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">週2-3回（月8-12回）がおすすめ。3-6ヶ月継続すると、周りからも「痩せた？」と言われるレベルの変化が期待できます。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">週1回（月4回）のペースで継続するのがおすすめ。無理なく長く続けられる頻度が理想です。</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜13,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">グループ</p>
                <p className="text-sm text-warm-600 mb-4">マットグループやリーズナブルなマシンレッスン。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place（マット月4回 9,625円〜）</li>
                  <li>• ピラティスK（月4回 13,420円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜16,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">マシン完備の大手スタジオ。少人数制グループ。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• the SILK 銀座（月4回 15,070円〜）</li>
                  <li>• BDC PILATES（月額 15,400円〜）</li>
                  <li>• zen place（リフォーマー月4回 15,400円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 30,000円〜/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">完全個室のプライベートレッスン。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• CREA（女性専用・完全個室）</li>
                  <li>• BIRTH Pilates（1回 9,600円）</li>
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
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、体幹強化、リラックスなど、目的によって最適なスタジオやプログラムは変わります。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">新橋・銀座エリアの料金相場は、グループレッスン月4回で9,600円〜16,000円程度、パーソナルは1回8,000円〜10,000円程度。無理なく継続できる予算を決めましょう。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。無料〜5,500円程度で体験できるスタジオが多いので、気軽に試してみてくださいね。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">新橋はJR山手線・京浜東北線、銀座線、都営浅草線、ゆりかもめと多くの路線が利用でき、銀座・有楽町・内幸町も徒歩圏内。サラリーマンの街として知られ、仕事帰りに立ち寄りやすいエリアです。</p>
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
                      <svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                      </svg>
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
            <p className="text-warm-600 leading-relaxed mb-6">今回は新橋・銀座エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？</p>
            <p className="text-warm-600 leading-relaxed mb-6">新橋はJR・地下鉄・ゆりかもめと多くの路線が利用でき、銀座・有楽町・内幸町も徒歩圏内という抜群のアクセス。パーソナル専門から大手チェーンまで、多彩なスタジオが揃っています。</p>
            <p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p>
            <p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p>
          </div>
        </section>

        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン無料〜5,500円。<br />まずは気軽に体験してみましょう。</p>
            <Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link>
          </div>
        </section>
      </main>

      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
