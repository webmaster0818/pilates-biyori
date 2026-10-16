import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/test-ikebukuro/' },
  title: '【2026最新】ピラティス池袋おすすめ15選人気スタジオの料金プランの比較',
  description: '池袋エリアのおすすめピラティススタジオ15選を比較しています。マシンピラティス、体験レッスン、料金相場、選び方まで詳しくご案内します。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,池袋,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
  robots: { index: false, follow: false },
}

const studios = [
  {
    name: 'zen place pilates 池袋スタジオ',
    image: '/images/pilates2.webp',
    price: '月4回 13,200円〜',
    trial: '体験レッスン 1,000円',
    features: ['マシン完備', '初心者歓迎', '池袋駅徒歩3分', 'インストラクター養成'],
    description: '全国展開の大手ピラティススタジオです。池袋駅東口から徒歩3分の好立地です。マットピラティスからマシンピラティスまで豊富なレッスンメニューです。初心者からインストラクター養成まで幅広く対応しています。経験豊富なインストラクターが一人ひとりに合わせた丁寧な指導を提供します。',
    access: '池袋駅東口から徒歩3分',
    address: '東京都豊島区南池袋1-25-11 第15野萩ビル 8F',
    popularPlan: {
      name: 'フリープラン（月4回）',
      description: 'マット・マシンどちらも受講可能な人気プランです。初心者から経験者まで幅広く対応しています。',
      price: '月4回 13,200円（税込）',
    },
    options: [
      'プライベートレッスン追加（1回 9,900円〜）',
      'ウェアレンタル（月額 2,200円）',
      'タオルレンタル（月額 1,100円）',
      'インストラクター養成コース（別途）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心（全体の80%）',
      genderRatio: '女性90% / 男性10%',
      purpose: ['姿勢改善', 'ダイエット', '体幹強化', 'インストラクター養成'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'ウォーターサーバー'],
    },
  },
  {
    name: 'WECLE 池袋',
    image: '/images/pilates3.webp',
    price: '月4回 14,800円〜',
    trial: '体験レッスン 500円',
    features: ['AI姿勢分析', '最新マシン', '池袋駅直結', '女性専用'],
    description: 'AI姿勢分析を導入した最新型ピラティススタジオです。池袋駅西口直結で通いやすいです。最新のマシンと科学的なアプローチで効果的なボディメイクを実現しています。女性専用なので安心して通えます。初回体験500円でAI姿勢分析も体験可能です。',
    access: '池袋駅西口直結',
    address: '東京都豊島区西池袋1-11-1 メトロポリタンプラザビル 10F',
    popularPlan: {
      name: 'スタンダード4（月4回）',
      description: 'AI姿勢分析付きです。最新マシンで効率的にボディメイクを目指せます。女性専用のため安心して通えます。',
      price: '月4回 14,800円（税込）※AI分析無料',
    },
    options: [
      'AI姿勢分析レポート（月1回無料、追加 1,100円）',
      'パーソナルトレーニング（1回 11,000円〜）',
      'ウェア・タオルセット（月額 2,750円）',
      '栄養カウンセリング（月額 5,500円）',
    ],
    userProfile: {
      ageRange: '20代〜30代が中心（全体の85%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', 'AI分析'],
    },
    basicInfo: {
      hours: '平日 7:00〜22:00 / 土日祝 9:00〜20:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'AI姿勢分析システム', '女性専用'],
    },
  },
  {
    name: 'ピラティスK 池袋',
    image: '/images/pilates4.webp',
    price: '月4回 15,070円〜',
    trial: '無料体験レッスン',
    features: ['音楽×マシン', '女性専用', '暗闇レッスン', 'グループレッスン'],
    description: '音楽に合わせて楽しくボディメイクを目指せます。女性専用スタジオのため安心して通えます。池袋駅東口から徒歩5分です。暗闇×音楽×マシンピラティスの融合レッスンが人気です。周りの目を気にせず集中できる環境で、楽しみながら理想のボディラインを手に入れられます。',
    access: '池袋駅東口から徒歩5分',
    address: '東京都豊島区東池袋1-3-5 池袋伊藤ビル 7F',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '暗闇×音楽×マシンピラティスの融合レッスンです。楽しく続けられると人気のプランです。',
      price: '月4回 15,070円（税込）',
    },
    options: [
      '追加レッスンチケット（1回 4,400円）',
      '通い放題プラン変更（月額 22,000円〜）',
      'ウェア・タオルセット（月額 2,200円）',
      'ドリンクサービス（月額 1,100円）',
    ],
    userProfile: {
      ageRange: '20代〜30代が中心（全体の90%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['楽しく痩せたい', 'ストレス発散', 'ボディメイク', '仲間と運動'],
    },
    basicInfo: {
      hours: '平日 10:00〜22:00 / 土日祝 10:00〜20:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '暗闇スタジオ', '女性専用'],
    },
  },
  {
    name: 'the SILK 池袋',
    image: '/images/pilates2.webp',
    price: '月4回 15,070円〜',
    trial: '体験レッスン 無料',
    features: ['暗闇マシン', '音楽', '池袋駅近', '女性専用'],
    description: 'マシンピラティス特化型スタジオです。暗闇×音楽で没入感のあるレッスンです。池袋駅メトロポリタン口から徒歩2分の好アクセスです。最新のリフォーマーマシンを完備し、音楽に合わせた独自プログラムで楽しくトレーニングです。女性専用で初心者も安心です。',
    access: '池袋駅メトロポリタン口から徒歩2分',
  },
  {
    name: 'CLUB PILATES 池袋',
    image: '/images/pilates3.webp',
    price: '月4回 14,190円〜',
    trial: '体験レッスン 無料',
    features: ['アメリカ発', 'グループ&プライベート', '池袋駅西口', '初心者歓迎'],
    description: 'アメリカ発の世界最大級ピラティススタジオチェーンです。池袋駅西口から徒歩3分です。グループレッスンからプライベートレッスンまで幅広く対応しています。全米No.1のピラティスメソッドで、初心者から上級者まで満足できるプログラムを提供しています。',
    access: '池袋駅西口から徒歩3分',
  },
  {
    name: 'ピラティススタジオ B-line 池袋',
    image: '/images/pilates4.webp',
    price: '1回 8,800円〜',
    trial: '体験レッスン 5,500円',
    features: ['完全プライベート', 'マシン完備', '池袋駅東口', 'オーダーメイド'],
    description: '完全プライベートレッスン専門スタジオです。池袋駅東口から徒歩3分です。一人ひとりの目的・体力に合わせたオーダーメイドレッスンです。経験豊富なインストラクターがマンツーマンで指導するので、短期間で効果を実感できます。',
    access: '池袋駅東口から徒歩3分',
  },
  {
    name: 'Reformer Pilates Ikebukuro',
    image: '/images/pilates2.webp',
    price: '月4回 13,200円〜',
    trial: '体験レッスン 1,000円',
    features: ['リフォーマー専門', '少人数制', '東池袋', '初心者歓迎'],
    description: 'リフォーマー専門のピラティススタジオです。東池袋、目白エリアに展開しています。少人数制で丁寧な指導が魅力です。最新のリフォーマーマシンを使用した効果的なトレーニングで、姿勢改善やボディメイクを実現します。',
    access: '東池袋駅から徒歩5分',
  },
  {
    name: 'Urban Pilates 池袋',
    image: '/images/pilates3.webp',
    price: '月額 16,500円（通い放題）',
    trial: '体験レッスン 無料',
    features: ['24時間営業', '池袋駅西口', '通い放題', 'マシン完備'],
    description: '24時間営業のピラティススタジオです。池袋駅西口から徒歩1分の好立地です。早朝・深夜でも利用可能なので、忙しい方にも最適です。月額定額で通い放題プランがあります。最新マシンを完備し、自分のペースでトレーニングできます。',
    access: '池袋駅西口から徒歩1分',
  },
  {
    name: 'Pilates Studio M 池袋',
    image: '/images/pilates4.webp',
    price: '月4回 12,980円〜',
    trial: '体験レッスン 1,000円',
    features: ['女性専用', '少人数制', '南池袋', 'マット&マシン'],
    description: '女性専用・少人数制のアットホームなスタジオです。南池袋、東池袋に展開しています。マットピラティスとマシンピラティスの両方に対応しています。インストラクターとの距離が近く、丁寧な指導を受けられるのが魅力です。初心者でも安心して通えます。',
    access: '池袋駅東口から徒歩7分',
  },
  {
    name: 'BDC PILATES 池袋',
    image: '/images/pilates2.webp',
    price: '1回 3,850円〜',
    trial: '体験レッスン 2,200円',
    features: ['ダンサー御用達', 'グループレッスン', '池袋駅近', '本格的'],
    description: 'ダンサー御用達の本格的なピラティススタジオです。池袋駅から徒歩5分です。ダンサーやアスリートも通う質の高いレッスンが特徴です。身体の使い方を根本から学べる本格的なプログラムで、美しい姿勢と柔軟な身体を手に入れられます。',
    access: '池袋駅から徒歩5分',
  },
  {
    name: 'Pilates Lab 池袋',
    image: '/images/pilates3.webp',
    price: '月4回 14,300円〜',
    trial: '体験レッスン 3,300円',
    features: ['理学療法士監修', 'リハビリ対応', '池袋駅北口', 'プライベート'],
    description: '理学療法士監修のピラティススタジオです。池袋駅北口から徒歩3分です。リハビリテーションの知識を活かした安全で効果的なレッスンです。腰痛や肩こりなどの身体の不調改善にも対応しています。医学的根拠に基づいたトレーニングで健康的な身体づくりを実現しています。',
    access: '池袋駅北口から徒歩3分',
  },
  {
    name: 'FLOW PILATES 池袋',
    image: '/images/pilates4.webp',
    price: '月4回 13,200円〜',
    trial: '体験レッスン 1,000円',
    features: ['ヨガ×ピラティス', 'リラックス', '東池袋', '初心者歓迎'],
    description: 'ヨガとピラティスの融合スタジオです。東池袋エリアに展開しています。心と身体の両方を整えるプログラムが人気です。ヨガの呼吸法とピラティスのコアトレーニングを組み合わせた独自メソッドで、柔軟性と筋力を同時に向上させます。',
    access: '東池袋駅から徒歩3分',
  },
  {
    name: 'Body Make Studio Pilates+ 池袋',
    image: '/images/pilates2.webp',
    price: '月4回 14,850円〜',
    trial: '体験レッスン 1,500円',
    features: ['ボディメイク特化', 'マシン完備', '池袋駅西口', 'パーソナル'],
    description: 'ボディメイク特化型のピラティススタジオです。池袋駅西口から徒歩4分です。ダイエットや引き締めに特化したプログラムが充実しています。最新マシンとパーソナルトレーニングで、短期間での理想のボディラインを目指せます。',
    access: '池袋駅西口から徒歩4分',
  },
  {
    name: 'Pilates Studio Harmony 池袋',
    image: '/images/pilates3.webp',
    price: '月4回 12,100円〜',
    trial: '体験レッスン 無料',
    features: ['アットホーム', '少人数制', '南池袋', 'マット中心'],
    description: 'アットホームな雰囲気の少人数制スタジオです。南池袋エリアに展開しています。マットピラティスを中心に、初心者でも無理なく始められるプログラムを提供しています。インストラクターとの距離が近く、質問しやすい環境が魅力です。',
    access: '池袋駅東口から徒歩8分',
  },
  {
    name: 'Pilates & Wellness 池袋',
    image: '/images/pilates4.webp',
    price: '月4回 13,750円〜',
    trial: '体験レッスン 1,000円',
    features: ['ウェルネス', 'マインドフルネス', '池袋駅北口', '女性専用'],
    description: 'ウェルネス志向のピラティススタジオです。池袋駅北口から徒歩5分です。ピラティスにマインドフルネスを取り入れた独自プログラムです。ストレス解消や心身のバランスを整えることを重視しています。女性専用で落ち着いた雰囲気の中でレッスンを受けられます。',
    access: '池袋駅北口から徒歩5分',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。池袋エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。インストラクターが基礎から指導するため、運動が苦手な方でも始めやすい環境です。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷を調整しやすく、初心者におすすめです。マットは場所を選ばず、自宅でも続けやすい点が特徴です。',
  },
  {
    question: '池袋のピラティススタジオの料金相場は？',
    answer: '池袋エリアのピラティススタジオの料金相場は、月4回で12,000円〜16,000円程度です。体験レッスンは無料〜3,000円が一般的です。プライベートレッスンは1回8,000円〜12,000円が相場となっています。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: 'ピラティス初心者は週1〜2回（月4〜8回）がおすすめです。慣れてきたら週2〜3回に増やすと効果を実感しやすくなります。大切なのは継続することです。無理のないペースで長く続けることが、目標達成への近道です。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'ピラティスにはダイエット効果が期待できます。インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。ただし即効性はないので、最低でも2〜3ヶ月は継続することが大切です。食事管理を並行すると、より効果的です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '基本的には、動きやすい服装（Tシャツ、レギンスなど）と飲み物があれば問題ありません。マットやタオルはスタジオでレンタルできることが多いです。詳細は各スタジオの体験レッスン案内でご確認ください。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズです。ヨガは柔軟性と精神的なリラックスを重視します。ピラティスは筋力強化、ヨガは心身のバランスを整えることが主な目的です。目的に合わせてお選びください。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: '改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。ただし、痛みがひどい場合は医師に相談してからスタートすることをおすすめします。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスの効果を実感し始めるのは、2ヶ月を過ぎた頃が目安とされています。すぐに変化が表れなくても、最低2ヶ月は継続することをおすすめします。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれに利点があります。パーソナルは一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方におすすめです。グループは料金を抑えやすく、ほかの参加者と一緒に続けられる点が利点です。まずは体験レッスンで両方を試すことをおすすめします。',
  },
]

export default function IkebukuroPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月11日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス池袋おすすめ15選<br className="hidden md:block" />
              人気スタジオの料金プランの比較
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
              <span className="text-warm-600">池袋</span>
            </nav>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、池袋エリアでおすすめのピラティススタジオ15選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>池袋でピラティススタジオを探している</span>
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
                  <span>料金プランを比較したい</span>
                </li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">
              以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。
            </p>
          </div>
        </section>

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              池袋のおすすめピラティススタジオ15選
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
                  月額12,000円以下で通える格安スタジオです。体験レッスン無料のスタジオも多数あります。費用を抑えたい方におすすめです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Pilates Studio Harmony 池袋</li>
                  <li className="text-warm-700">• Reformer Pilates Ikebukuro</li>
                  <li className="text-warm-700">• FLOW PILATES 池袋</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">マシン完備</h3>
                <p className="text-warm-600 text-sm mb-4">
                  最新のリフォーマーマシンを完備しています。マシンピラティスを本格的に学びたい方におすすめです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 池袋</li>
                  <li className="text-warm-700">• WECLE 池袋</li>
                  <li className="text-warm-700">• the SILK 池袋</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・好アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  池袋駅から徒歩3分以内です。仕事帰りや買い物ついでに通いやすい好立地なスタジオです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Urban Pilates 池袋（駅徒歩1分）</li>
                  <li className="text-warm-700">• the SILK 池袋（駅徒歩2分）</li>
                  <li className="text-warm-700">• zen place pilates 池袋（駅徒歩3分）</li>
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
                週1〜2回（月4〜8回）からスタートするのがおすすめです。まずは身体を慣らすことが大切です。継続期間は最低でも2〜3ヶ月です。この期間で効果を実感できる方が多いです。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回（月8〜12回）がおすすめです。しっかりと身体を変えたい方は頻度を上げることで効果も早く現れます。3〜6ヶ月継続すると、周りからも「痩せた？」と言われるレベルの変化が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回（月4回）のペースで継続するのがおすすめです。無理なく長く続けられる頻度が理想です。ピラティスは継続が何より大切です。無理のないペースで通うことが大切です。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜12,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスンが中心です。初心者向けの基本的なレッスンが多いです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Pilates Studio Harmony</li>
                  <li>• Reformer Pilates</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 12,000〜16,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオです。グループ・プライベート選択可能です。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates</li>
                  <li>• ピラティスK</li>
                  <li>• the SILK</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 30,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全プライベートレッスンです。短期集中で成果を目指したい方向けです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• B-line（1回8,800円）</li>
                  <li>• Pilates Lab</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50">
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
                  まずは自分がピラティスで何を達成したいのかを明確にすることをおすすめします。ダイエット、姿勢改善、体幹強化、リラックスなど、目的によって最適なスタジオやプログラムは変わります。目的を明確にしておくと、スタジオを選びやすくなります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  池袋エリアの料金相場は月4回で12,000円〜16,000円程度です。無理なく継続できる予算を決めることをおすすめします。料金だけでなく、入会金やマット・ウェアのレンタル料などもご確認ください。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行くことをおすすめします。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。多くのスタジオが無料〜1,000円程度で体験レッスンを提供しているので、体験レッスンをご利用ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  通いにくい場所にあるスタジオは、継続が難しくなります。自宅や職場から通いやすい場所、駅から近い場所を選ぶのがおすすめです。営業時間もご確認ください。早朝や深夜に通いたい方は、営業時間が長いスタジオや24時間営業のスタジオをお選びください。
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
              今回は池袋のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、池袋に数多くあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページの情報を、スタジオ選びにお役立てください。
            </p>
            <p className="text-warm-700 font-medium text-center">
              本ページが、ピラティススタジオ選びの参考になれば幸いです。
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              体験レッスンを予約する
            </h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              初回限定の体験レッスン無料〜1,000円です。<br />
              まずは体験レッスンへの参加をおすすめします。
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
