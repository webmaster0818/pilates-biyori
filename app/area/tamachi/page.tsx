import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス田町・芝浦おすすめ6選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '田町・芝浦エリアのおすすめピラティススタジオ6選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,田町,芝浦,三田,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 三田スタジオ',
    image: '/images/pilates2.jpg',
    rating: 4.8,
    reviewCount: 200,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '2週間前',
        text: '三田駅A3出口直結でエレベーターですぐ。田町駅からも徒歩1分。雨の日でも濡れずに通えるのが最高です。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '1ヶ月前',
        text: '少人数制で丁寧に指導してもらえます。マットもマシンも両方あって、自分の目的に合わせて選べます。',
      },
      {
        author: 'K.H',
        rating: 4,
        date: '3週間前',
        text: '全国展開で出張先でも別店舗を利用可能。田町エリアで最もアクセスの良いスタジオだと思います。',
      },
    ],
    price: 'マットグループ 月4回 9,625円〜',
    trial: 'マット体験 1,000円 / マシン体験 3,000円',
    features: ['マット&マシン', '三田駅直結', '田町駅徒歩1分', '男性OK'],
    description: '全国100店舗以上展開の大手ピラティススタジオ。三田駅A3出口エレベーター直結、JR田町駅三田口から徒歩1分という田町エリア最高のアクセス。マットグループ、マシングループ、プライベートレッスンと幅広いメニュー。',
    access: '都営三田線「三田駅」A3出口 エレベーター直結 / JR「田町駅」三田口 徒歩1分',
    address: '東京都港区芝5-31-7 三田ステーションビルアミタ902',
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
      purpose: ['姿勢改善', '体幹強化', '仕事帰りのリフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '月末不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi'],
    },
  },
  {
    name: 'the SILK 田町店',
    image: '/images/pilates3.jpg',
    rating: 4.7,
    reviewCount: 145,
    reviews: [
      {
        author: 'R.N',
        rating: 5,
        date: '1週間前',
        text: '田町駅芝浦口から徒歩6分。女性専用で安心。音楽に合わせたレッスンが楽しくて続けられています。',
      },
      {
        author: 'A.H',
        rating: 4,
        date: '2週間前',
        text: 'ライト3プランなら月3回12,980円で始められます。無料体験で雰囲気を確認してから入会しました。',
      },
      {
        author: 'M.M',
        rating: 5,
        date: '3週間前',
        text: 'パーソナルレッスンも受けられるので、グループと使い分けています。芝浦エリアは落ち着いていて集中できる。',
      },
    ],
    price: 'ライト3 12,980円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', 'マシンピラティス専門', '田町駅徒歩6分', '音楽×マシン'],
    description: '女性専用マシンピラティス専門スタジオ。JR田町駅芝浦口から徒歩6分。グループからパーソナルまで対応。音楽に合わせた独自プログラムで楽しくトレーニング。無料体験レッスンを実施中。',
    access: 'JR「田町駅」芝浦口 徒歩6分',
    address: '東京都港区芝浦3-13-14 PhilPark田町Shibaura 5F',
    popularPlan: {
      name: 'Standard4（月4回）',
      description: '女性専用マシンピラティスの基本プラン。音楽に合わせた50分のグループレッスン。',
      price: '月4回 15,070円（税込）',
    },
    options: [
      'ライト3（月3回 12,980円）',
      'Standard4（月4回 15,070円）',
      'Full（通い放題 20,680円）',
      'パーソナル プライベート2（月2回 19,800円）',
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
    name: 'zen place pilates 田町スタジオ',
    image: '/images/pilates4.jpg',
    rating: 4.7,
    reviewCount: 160,
    reviews: [
      {
        author: 'T.W',
        rating: 5,
        date: '5日前',
        text: '田町駅東口（芝浦口）から徒歩5分。三田店とは別の芝浦側のスタジオです。男性もOKなので夫婦で通っています。',
      },
      {
        author: 'H.I',
        rating: 4,
        date: '1週間前',
        text: 'zen placeは三田店と田町店の2店舗あるので、気分で使い分けられるのが便利。どちらも質が高い。',
      },
      {
        author: 'S.N',
        rating: 5,
        date: '2週間前',
        text: '芝浦エリアの落ち着いた雰囲気。体験1,000円で気軽に始められました。',
      },
    ],
    price: 'マットグループ 月4回 9,625円〜',
    trial: 'マット体験 1,000円 / マシン体験 3,000円',
    features: ['マット&マシン', '田町駅徒歩5分', '芝浦エリア', '男性OK'],
    description: 'zen placeの田町エリア2店舗目（芝浦側）。JR田町駅東口（芝浦口）から徒歩5分。三田店と相互利用も可能。マットグループ、マシングループ、プライベートレッスンに対応。',
    access: 'JR「田町駅」東口（芝浦口）徒歩5分',
    address: '東京都港区（田町駅芝浦口徒歩5分）',
    popularPlan: {
      name: 'リフォーマーグループ（月4回）',
      description: 'マシン（リフォーマー）を使ったグループレッスン。三田店と相互利用可能。',
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
    name: 'ピラティススタジオB&B 田町スタジオ',
    image: '/images/pilates2.jpg',
    rating: 4.8,
    price: 'お問い合わせください',
    trial: '体験レッスンあり',
    features: ['パーソナル専門', 'マシンピラティス', '田町・芝浦エリア', '質の高い指導'],
    description: 'パーソナル専門のマシンピラティススタジオ。田町・芝浦エリアで質の高い環境を提供。一人ひとりの身体の状態に合わせたオーダーメイドのレッスンで、効率的にボディメイクや姿勢改善を実現。',
    access: 'JR「田町駅」徒歩圏内',
    address: '東京都港区芝浦（田町・芝浦エリア）',
  },
  {
    name: 'STUDIO IVY 三田店',
    image: '/images/pilates3.jpg',
    rating: 4.8,
    price: '1回 6,500円〜',
    trial: '体験レッスン 500円〜',
    features: ['パーソナル専門', 'マシンピラティス', '赤羽橋駅徒歩5分', '全国展開'],
    description: '全国展開のパーソナルマシンピラティス専門スタジオ。赤羽橋駅から徒歩5分、田町からもアクセス可能。初回体験500円からとリーズナブル。',
    access: '都営大江戸線「赤羽橋駅」徒歩5分 / JR「田町駅」徒歩圏内',
    address: '東京都港区三田2-7-7 ザ・パームス三田302',
  },
  {
    name: 'パーソナルピラティススタジオ hibi',
    image: '/images/pilates4.jpg',
    rating: 4.9,
    price: 'お問い合わせください',
    trial: '体験レッスンあり',
    features: ['完全プライベート', 'パーソナル専門', '田町駅徒歩4分', 'アットホーム'],
    description: '田町駅・三田駅から徒歩4分の小さなプライベートピラティススタジオ。完全マンツーマンで一人ひとりの身体に寄り添った丁寧な指導。アットホームな雰囲気が魅力。',
    access: 'JR「田町駅」徒歩4分 / 都営三田線「三田駅」徒歩4分',
    address: '東京都港区（田町駅・三田駅徒歩4分）',
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！田町エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。経験豊富なインストラクターが基礎から丁寧に指導してくれます。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめです。' },
  { question: '田町エリアのピラティススタジオの料金相場は？', answer: '田町エリアの料金相場は、グループレッスン月3〜4回で9,600円〜15,400円程度。パーソナルは1回6,500円〜10,000円が相場。体験レッスンは500円〜3,000円程度です。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回がおすすめ。慣れてきたら週2-3回に増やすと効果を実感しやすくなります。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に。最低2-3ヶ月の継続が大切です。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。マットやタオルはレンタルできることが多いです。' },
  { question: 'ピラティスとヨガの違いは何ですか？', answer: 'ピラティスは体幹を鍛えることに特化し、ヨガは柔軟性とリラックスを重視します。' },
  { question: 'ピラティスで肩こりや腰痛は改善しますか？', answer: 'はい、姿勢改善に効果的で、肩こりや腰痛の根本原因を解消できます。' },
  { question: 'ピラティスはどのくらいで効果が出ますか？', answer: '効果が表れだすのは「2ヶ月を過ぎた頃」から。最低2ヶ月は継続しましょう。' },
  { question: 'パーソナルとグループ、どちらがおすすめですか？', answer: 'パーソナルは効果が出やすく、グループは料金が安く楽しく続けられます。まずは体験で試してみてください。' },
]

export default function TamachiPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月08日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">【2026最新】ピラティス田町・芝浦おすすめ6選！<br className="hidden md:block" />人気スタジオの料金プランを簡単比較！</h1>
          </div>
        </section>
        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400"><Link href="/" className="hover:text-warm-800 transition">ホーム</Link>{' > '}<Link href="/area" className="hover:text-warm-800 transition">地域別</Link>{' > '}<span className="text-warm-600">田町</span></nav>
          </div>
        </section>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates Navi編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「田町・芝浦でピラティスを始めたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「駅近で通いやすいスタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、田町・芝浦エリアでおすすめのピラティススタジオ6選をまとめました。</p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>田町・芝浦でピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>駅近で通いやすいスタジオがいい</span></li>
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
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">田町・芝浦のおすすめピラティススタジオ6選</h2>
            <div className="space-y-8">{studios.map((studio, index) => (<StudioCard key={index} studio={studio} index={index} />))}</div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">こだわりから探す</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">月額1万円前後から通えるスタジオ。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（マット月4回 9,625円〜）</li>
                  <li className="text-warm-700">• the SILK 田町（ライト3 12,980円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">マンツーマン指導で効果を最大化。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• hibi（完全プライベート）</li>
                  <li className="text-warm-700">• B&B 田町（パーソナル専門）</li>
                  <li className="text-warm-700">• STUDIO IVY（体験500円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・通いやすさ</h3>
                <p className="text-warm-600 text-sm mb-4">田町駅・三田駅から徒歩すぐ。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place 三田（三田駅直結・田町駅徒歩1分）</li>
                  <li className="text-warm-700">• hibi（田町駅徒歩4分）</li>
                  <li className="text-warm-700">• zen place 田町（田町駅徒歩5分）</li>
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
              <p className="text-warm-600 leading-relaxed mb-6">週1-2回からスタートがおすすめ。継続期間は最低2-3ヶ月。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">週2-3回がおすすめ。3-6ヶ月で目に見える変化が期待できます。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">週1回のペースで継続がおすすめ。</p>
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
                <p className="text-sm text-warm-600 mb-4">マットグループやリーズナブルなプラン。</p>
                <ul className="text-sm text-warm-700 space-y-1"><li>• zen place（マット月4回 9,625円〜）</li><li>• the SILK（ライト3 12,980円）</li></ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 15,000〜21,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">マシン完備。通い放題プランも。</p>
                <ul className="text-sm text-warm-700 space-y-1"><li>• the SILK（Standard4 15,070円）</li><li>• zen place リフォーマー（15,400円〜）</li><li>• the SILK Full（20,680円）</li></ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 25,000円〜/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">完全プライベートレッスン。</p>
                <ul className="text-sm text-warm-700 space-y-1"><li>• STUDIO IVY（1回 6,500円〜）</li><li>• B&B 田町（パーソナル専門）</li></ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span><h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3></div><p className="text-warm-600 leading-relaxed">ダイエット、姿勢改善、体幹強化など、目的によって最適なスタジオは変わります。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span><h3 className="text-xl font-bold text-warm-900">予算を決める</h3></div><p className="text-warm-600 leading-relaxed">田町エリアの料金相場は月3〜4回で9,600円〜15,400円程度。無理なく継続できる予算を決めましょう。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span><h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3></div><p className="text-warm-600 leading-relaxed">500円〜3,000円程度で体験できるスタジオが多いので、気軽に試してみてください。</p></div>
              <div className="bg-white rounded-lg p-6 border border-warm-200"><div className="flex items-center mb-4"><span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span><h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3></div><p className="text-warm-600 leading-relaxed">田町はJR山手線・京浜東北線が利用でき、三田駅（都営三田線・浅草線）も隣接。品川・東京方面からもアクセス良好。再開発が進む芝浦エリアは新しいスタジオも増えています。</p></div>
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
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition"><h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3><svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary>
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
            <p className="text-warm-600 leading-relaxed mb-6">今回は田町・芝浦のおすすめピラティススタジオについてご紹介しましたが、いかがでしたか？</p>
            <p className="text-warm-600 leading-relaxed mb-6">田町はJR山手線と都営三田線が利用でき、zen placeが2店舗（三田・田町）あるほか、パーソナル専門スタジオも充実。再開発が進む芝浦エリアは今後さらにスタジオが増えることが期待されます。</p>
            <p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p>
            <p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p>
          </div>
        </section>
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">初回限定の体験レッスン500円〜3,000円。<br />まずは気軽に体験してみましょう。</p>
            <Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
