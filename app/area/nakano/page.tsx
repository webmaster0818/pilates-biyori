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
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/nakano/' },
  title: '中野のピラティス｜初心者可・無料体験で選ぶ料金比較',
  description: '中野エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で比較しています。初心者向けの選び方、駅近スタジオ、体験レッスンの有無までわかります。',
  keywords: 'ピラティス,中野,東京,スタジオ,おすすめ,マシンピラティス,マットピラティス,パーソナル,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 中野',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: 'マットグループ月4回 9,625円〜',
    trial: '体験レッスン 1,000円〜',
    features: ['マット&マシン両方', '中野駅徒歩7分', '男性利用可', '全国他店利用可'],
    description: '全国100店舗以上を展開するzen placeのピラティス専門スタジオです。中野駅から徒歩7分です。マットグループ月4回9,625円〜、マシングループ月4回15,400円〜です。男性も利用可能で、全国のzen placeスタジオを他店利用できます。',
    access: 'JR中央線・総武線「中野駅」徒歩7分',
    address: '東京都中野区新井2-1-19 中野パックマートビル3F',
    popularPlan: {
      name: 'マットグループ月4回プラン',
      description: 'マットピラティスのグループレッスンです。少人数制で初心者も安心です。',
      price: '月4回 9,625円〜（税込）',
    },
    options: [
      'マットグループ月4回（9,625円〜）',
      'マシングループ月4回（15,400円〜）',
      'プライベートレッスン',
      '他店舗他店利用',
      '体験レッスン（1,000円〜）',
    ],
    userProfile: {
      ageRange: '20代〜50代',
      purpose: ['姿勢改善', '体幹強化', '肩こり腰痛改善', '運動習慣'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '不定休',
      facilities: ['マットスペース', 'リフォーマー', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'PILATES STUDIO noa 中野スタジオ',
    image: '/images/studios/pilates-studio-noa.webp',
    price: 'お問い合わせください',
    trial: '体験レッスンあり',
    features: ['女性専用', 'マシンピラティス専門', '中野駅徒歩4分', 'リフォーマー使用'],
    description: '女性専用のマシンピラティス専門スタジオです。中野駅から徒歩4分の好立地です。リフォーマーを使用した本格レッスンが受けられます。初心者から上級者までレベル別クラスがあります。',
    access: 'JR中央線・総武線・東西線「中野駅」徒歩4分',
    address: '東京都中野区中野（中野駅徒歩4分）',
    popularPlan: {
      name: 'マシンピラティスプラン',
      description: 'リフォーマーを使用した女性専用マシンピラティスです。',
      price: 'お問い合わせください',
    },
    options: [
      'マシンピラティスレッスン',
      'レベル別クラス',
      '体験レッスン',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', '体幹強化', '運動習慣'],
    },
    basicInfo: {
      hours: 'お問い合わせください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'ピラティスミラー 中野',
    image: '/images/studios/pilates-mirror.webp',
    price: 'プライベート30分 4,400円〜',
    trial: '体験レッスンあり',
    features: ['女性専用', '中野駅南口徒歩2分', 'プライベートレッスン', '30分集中'],
    description: '女性専用のプライベートピラティススタジオです。中野駅南口から徒歩2分の好立地です。30分のプライベートレッスンが4,400円〜とリーズナブルです。短時間で集中して効果を実感できます。',
    access: 'JR中央線・総武線「中野駅」南口 徒歩2分',
    address: '東京都中野区中野（中野駅南口徒歩2分）',
    popularPlan: {
      name: 'プライベート30分プラン',
      description: '完全マンツーマンの30分集中レッスンです。',
      price: '1回30分 4,400円〜（税込）',
    },
    options: [
      'プライベート30分（4,400円〜）',
      '回数券プラン',
      '体験レッスン',
    ],
    userProfile: {
      ageRange: '20代〜50代',
      genderRatio: '女性100%（女性専用）',
      purpose: ['姿勢改善', 'ボディメイク', '肩こり改善', 'スキマ時間活用'],
    },
    basicInfo: {
      hours: 'お問い合わせください',
      closed: '不定休',
      facilities: ['ピラティスマシン', 'プライベート空間', 'フィッティングルーム（カーテン仕切り）', '荷物置きBOX（鍵なし）'],
    },
  },
  {
    name: 'STUDIO IVY 中野',
    image: '/images/studios/studio-ivy.webp',
    price: '1レッスン 6,250円〜',
    trial: '体験レッスンあり',
    features: ['完全個室パーソナル', 'マシンピラティス', '月謝制あり', '中野エリア'],
    description: '完全個室のパーソナルマシンピラティス専門スタジオです。1レッスン6,250円〜、月2回15,000円〜から始められる月謝制です。プライベート空間でオーダーメイドのプログラムを提供しています。',
    access: 'JR中央線・総武線・東西線「中野駅」徒歩圏内',
    address: '東京都中野区中野（中野エリア）',
    popularPlan: {
      name: '月4回コース',
      description: '完全個室パーソナルです。1回あたり6,250円〜です。',
      price: '月4回 25,000円〜（税込）',
    },
    options: [
      '月2回（15,000円〜）',
      '月4回（25,000円〜）',
      '月8回',
      '体験レッスン',
    ],
    userProfile: {
      ageRange: '20代〜50代',
      purpose: ['姿勢改善', 'ボディメイク', '肩こり腰痛改善', '体幹強化'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', '完全個室空間'],
    },
  },
  {
    name: 'URBAN CLASSIC PILATES 中野',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11337L.1.X156352B.U1357808',
    image: '/images/studios/urban-classic-pilates.webp',
    price: '月4回 9,680円',
    trial: '体験レッスンあり',
    features: ['予約不要', '30分レッスン', '月4回 9,680円', '中野エリア'],
    description: '予約不要で通える30分のマシンピラティススタジオです。月4回9,680円です。忙しい方でも気軽に通えるのが魅力です。短時間で効率的にエクササイズできます。',
    access: 'JR中央線・総武線「中野駅」徒歩圏内',
    address: '東京都中野区中野（中野エリア）',
    popularPlan: {
      name: '月4回プラン',
      description: '予約不要の30分マシンピラティスです。',
      price: '月4回 9,680円（税込）',
    },
    options: [
      '月4回（9,680円）',
      '月8回プラン',
      '通い放題プラン',
      '体験レッスン',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      purpose: ['運動習慣', 'ボディメイク', '時短エクササイズ', 'ストレス解消'],
    },
    basicInfo: {
      hours: 'お問い合わせください',
      closed: '不定休',
      facilities: ['リフォーマー', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'ELEMENT 中野',
    officialUrl: 'https://t.felmat.net/fmcl?ak=U11199J.1.V154352I.U1357808',
    image: '/images/studios/element.webp',
    price: '月4回 22,000円',
    trial: '体験レッスン 1,000円〜',
    features: ['マンツーマン30分', 'パーソナル専門', '手ぶらで参加可能', '中野エリア'],
    description: '1回30分のマンツーマン指導が特徴のパーソナルマシンピラティスジムです。月4回22,000円です。ウェア・タオル・ドリンク・プロテインが無料で手ぶら通い可能です。効率的に体を変えたい方におすすめです。',
    access: 'JR中央線・総武線「中野駅」徒歩圏内',
    address: '東京都中野区中野（中野エリア）',
    popularPlan: {
      name: '月4回プラン',
      description: 'マンツーマン30分です。手ぶらで参加可能です。',
      price: '月4回 22,000円（税込）',
    },
    options: [
      '月4回（22,000円）',
      '月8回プラン',
      '通い放題プラン',
      '体験レッスン（1,000円〜）',
    ],
    userProfile: {
      ageRange: '20代〜50代',
      purpose: ['ボディメイク', '姿勢改善', '体幹強化', 'ダイエット'],
    },
    basicInfo: {
      hours: '10:00〜22:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'ロッカー', '更衣室', 'ウェア無料レンタル'],
    },
  },
  {
    name: 'NATURAglam 中野（近隣）',
    image: '/images/studios/naturaglam.webp',
    price: '月4回 7,700円〜',
    trial: '体験レッスンあり',
    features: ['女性専用', 'ヨガ&ピラティス', '月4回 7,700円〜', '中野近隣'],
    description: '女性専用のヨガ&ピラティススタジオです。月4回7,700円〜とリーズナブルです。ヨガとピラティスの両方のレッスンが受けられ、初心者にもやさしいアットホームな雰囲気が魅力です。',
    access: '中野エリア近隣店舗',
    address: '東京都中野区（中野近隣）',
    popularPlan: {
      name: '月4回プラン',
      description: 'ヨガ&ピラティスの女性専用レッスンです。',
      price: '月4回 7,700円〜（税込）',
    },
    options: [
      '月4回（7,700円〜）',
      '通い放題プラン',
      'ヨガレッスン',
      '体験レッスン',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ダイエット', 'リラックス', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: 'お問い合わせください',
      closed: '不定休',
      facilities: ['マットスペース', 'ロッカー', '更衣室'],
    },
  },
  {
    name: 'CALDO 中野',
    image: '/images/studios/caldo.webp',
    price: '月4回 8,250円〜',
    trial: '体験レッスンあり',
    features: ['ホットヨガ&ピラティス', '月4回 8,250円〜', '大手チェーン', '中野エリア'],
    description: 'ホットヨガ大手CALDOの中野スタジオです。ホットヨガに加えてピラティスプログラムも提供しています。月4回8,250円〜です。温かい環境でのレッスンで代謝アップと柔軟性向上を同時に実現しています。',
    access: 'JR中央線・総武線「中野駅」徒歩圏内',
    address: '東京都中野区中野（中野エリア）',
    popularPlan: {
      name: '月4回プラン',
      description: 'ホットヨガ&ピラティスの月4回プランです。',
      price: '月4回 8,250円〜（税込）',
    },
    options: [
      '月4回（8,250円〜）',
      '通い放題プラン',
      'ホットヨガレッスン',
      'ピラティスレッスン',
      '体験レッスン',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      purpose: ['ダイエット', 'デトックス', '柔軟性向上', 'ストレス解消'],
    },
    basicInfo: {
      hours: '平日 10:00〜22:00 / 土日祝 10:00〜20:00',
      closed: '不定休',
      facilities: ['ホットスタジオ', 'ロッカー', 'シャワー', 'パウダールーム'],
    },
  },
  {
    name: 'Pilates Mee東中野・落合店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=F10273P.1.9146255O.U1357808',
    image: '/images/studios/pilates-mee.webp',
    price: 'セミパーソナル月4回 19,800円 / パーソナル月4回 39,600円（税込）',
    priceList: ['体験レッスン無料', 'セミパーソナル：月2回 11,000円／月4回 19,800円／通い放題 37,500円（税込）', 'パーソナル：月2回 22,000円／月4回 39,600円／月8回 70,400円（税込）'],
    trial: '体験レッスン無料',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオです。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯が特徴です。東中野駅から徒歩5分です。',
    access: '東中野駅 徒歩5分／落合駅 徒歩1分',
    address: '〒164-0003 東京都中野区東中野4-15-7 石川ビル2階',
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', '柔軟性向上', 'ダイエット'],
    },
    basicInfo: {
      hours: '9:00〜21:15',
      closed: '不定休',
      facilities: ['女性専用トイレ', '着替えスペース', '全身鏡'],
    },

  },
  {
    name: 'Pilates Mee新中野店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=F10273P.1.9146255O.U1357808',
    image: '/images/studios/pilates-mee.webp',
    price: 'セミパーソナル月4回 19,800円 / パーソナル月4回 39,600円（税込）',
    priceList: ['体験レッスン無料', 'セミパーソナル：月2回 11,000円／月4回 19,800円／通い放題 37,500円（税込）', 'パーソナル：月2回 22,000円／月4回 39,600円／月8回 70,400円（税込）'],
    trial: '体験レッスン無料',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオです。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯が特徴です。新中野駅から徒歩2分です。',
    access: '新中野駅 徒歩2分',
    address: '〒164-0012 東京都中野区本町4-21-8 八木ビル2B',
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', '柔軟性向上', 'ダイエット'],
    },
    basicInfo: {
      hours: '9:00〜21:15',
      closed: '不定休',
      facilities: ['女性専用トイレ', '着替えスペース', '全身鏡'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。中野エリアのスタジオはレベル別クラスや初心者向けプログラムが充実しており、安心して始められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマーなどの専用マシンを使ったトレーニングです。マシンはバネの補助があるため初心者におすすめです。',
  },
  {
    question: '中野エリアの料金相場は？',
    answer: 'グループ月4回で8,000円〜11,000円程度です。パーソナルは1回4,400円〜6,250円です。セルフ型のchocoZAPなら月額3,278円からです。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回に増やすと効果を実感しやすくなります。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルが鍛えられ基礎代謝が上がることで太りにくい体質づくりにつながります。最低2〜3ヶ月は継続することで効果を実感できます。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があれば問題ありません。ELEMENTはウェア・タオル・ドリンク・プロテインが無料です。各スタジオの持ち物は事前にご確認ください。',
  },
  {
    question: 'ピラティスとヨガの違いは？',
    answer: 'ピラティスは体幹・インナーマッスルの強化が中心、ヨガは柔軟性向上とリラックスが中心です。CALDOやAGNIYOGAでは両方楽しめます。',
  },
  {
    question: '肩こりや腰痛は改善しますか？',
    answer: 'はい、ピラティスは姿勢改善に効果的で、肩こりや腰痛の根本原因にアプローチできます。',
  },
  {
    question: 'どのくらいで効果が出ますか？',
    answer: '個人差はありますが、2ヶ月を過ぎた頃から姿勢の変化や体の軽さを実感される方が多くなっています。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめ？',
    answer: 'パーソナルは自分専用メニューで効果が出やすく、グループはリーズナブルに楽しく続けられます。目的と予算に合わせてお選びください。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place pilates 中野は男性利用可です。STUDIO IVY、ELEMENT、chocoZAPも男女問わず利用可能です。',
  },
  {
    question: '中野駅以外の最寄駅で通えるスタジオは？',
    answer: 'AGNIYOGA 新中野は丸ノ内線新中野駅すぐです。中野は中央線・総武線・東西線・丸ノ内線が利用でき、アクセスの良いエリアです。',
  },
]

export default function NakanoPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '中野', url: 'https://biyori-pilates.com/area/nakano/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月12日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              ピラティス中野おすすめ10選<br className="hidden md:block" />
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
              <span className="text-warm-600">中野</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="中野" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、JR中央線・総武線の中野駅や丸ノ内線の新中野駅周辺で通えるおすすめのピラティススタジオ10選をまとめました。マシンピラティス専門店からパーソナル、ホットヨガ併設、セルフ型まで幅広くご紹介します。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>中野・新中野エリアでピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>料金を抑えられるスタジオがいい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>パーソナルとグループの料金を比較したい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>女性専用スタジオを探している</span>
                </li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">
              以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="中野" />
        <AreaMarketComparison studios={studios} areaName="中野" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              中野のおすすめピラティススタジオ10選
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
              中野のピラティス料金相場
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
                    <td className="px-4 py-3">4,400円〜22,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 4,400円〜25,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">1,000円〜1,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              中野は住宅地としての人気が高く、地元在住の方が徒歩や自転車で通えるスタジオが充実しています。繁華街ほど料金は高くなく、かつ都心へのアクセスも良いバランスの取れたエリアです。平日昼間のクラスは比較的空いている傾向があります。近隣の高円寺エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              中野でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR中央線・総武線「中野駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  中野エリアのスタジオは中野駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートをご確認ください。中野駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">住宅地ならではの予約の特徴を把握</h3>
                <p className="text-warm-600 leading-relaxed">
                  中野は住宅地のため、主婦・ママ層が多い平日午前中と、仕事帰りの平日夜が予約のピークタイムです。土日は意外と空いているスタジオも多いので、比較的空いている時間帯を把握しておくと通いやすくなります。子連れ可のクラスがあるスタジオもあるので、お子さまがいる方はご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  中野エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかをご確認ください。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため、事前にご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  中野エリアだけでなく、近隣の<Link href="/area/koenji/" className="text-warm-700 underline hover:text-warm-900">高円寺</Link>、<Link href="/area/nakano-sakaue/" className="text-warm-700 underline hover:text-warm-900">中野坂上</Link>、<Link href="/area/shinjuku/" className="text-warm-700 underline hover:text-warm-900">新宿</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番です。ジーンズやスカートは適していません。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：レッスン中の水分補給に必要です。自動販売機がないスタジオもあるため、持参をおすすめします。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用です。マシンに敷くタオルは、スタジオで用意されている場合が一般的です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは、靴下の着用が必須のスタジオが多数あります。グリップソックスが適しています。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>をお選びください。ピラティスは脚を大きく動かすエクササイズが多いため、伸縮性のある素材が適しています。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>の方が、インストラクターがフォームを確認しやすく、効果的な指導を受けられます。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオもあります。手ぶらで体験可能な場合もあるので事前にご確認ください。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おくことをおすすめします。マシンに引っかかる恐れがあるため、ピアス・ネックレス・腕時計はロッカーに預けるのが安全です。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>中野エリアの豆知識：</strong>中野は地元の方が徒歩や自転車で通うケースが多いエリアです。自転車の方はスタジオ近くの駐輪スペースの有無をご確認ください。近場なら荷物も最小限で済むので、気軽に続けやすいのが中野の良さです。
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
                  月額1万円以下から始められます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• chocoZAP（月額 3,278円・24時間）</li>
                  <li className="text-warm-700">• NATURAglam（月4回 7,700円〜）</li>
                  <li className="text-warm-700">• CALDO（月4回 8,250円〜）</li>
                  <li className="text-warm-700">• zen place（マット月4回 9,625円〜）</li>
                  <li className="text-warm-700">• URBAN CLASSIC（月4回 9,680円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマンで効果を実感できます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスミラー（30分 4,400円〜）</li>
                  <li className="text-warm-700">• STUDIO IVY（1回 6,250円〜）</li>
                  <li className="text-warm-700">• ELEMENT（30分マンツーマン月4回 22,000円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用スタジオ</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• noa（マシン専門）</li>
                  <li className="text-warm-700">• ピラティスミラー（駅南口徒歩2分）</li>
                  <li className="text-warm-700">• NATURAglam（ヨガ&ピラティス）</li>
                  <li className="text-warm-700">• AGNIYOGA（エアリアルも）</li>
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
              <h3 className="text-xl font-bold text-warm-900 mb-4">初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週1〜2回から始めることをおすすめします。最低2〜3ヶ月で効果を実感できます。月4回プランから始めるのがおすすめです。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイク目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回が目安です。3〜6ヶ月で目に見える変化が期待できます。パーソナルとグループを併用するとより効果的です。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">健康管理目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続することをおすすめします。chocoZAPやURBAN CLASSICであれば、予約不要で続けることができます。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">グループ・セルフ</p>
                <p className="text-sm text-warm-600 mb-4">
                  リーズナブルに始めたい方向けです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• chocoZAP（月額 3,278円）</li>
                  <li>• NATURAglam（月4回 7,700円〜）</li>
                  <li>• CALDO（月4回 8,250円〜）</li>
                  <li>• zen place マット（月4回 9,625円〜）</li>
                  <li>• URBAN CLASSIC（月4回 9,680円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">10,000〜20,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">マシングループ</p>
                <p className="text-sm text-warm-600 mb-4">
                  本格マシンピラティスを体験できます。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place マシン（月4回 15,400円〜）</li>
                  <li>• STUDIO IVY（月2回 15,000円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">20,000円〜/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">
                  マンツーマン指導で効率よく取り組めます。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ELEMENT（月4回 22,000円）</li>
                  <li>• STUDIO IVY（月4回 25,000円〜）</li>
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
                  ダイエット、姿勢改善、体幹強化、リラックスなど目的に応じてお選びください。パーソナルなら効率重視、グループなら楽しく続けられます。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  セルフ型のchocoZAPなら月額3,278円、グループ月4回で8,000円〜11,000円、パーソナルは月4回22,000円〜25,000円が中野エリアの相場です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  多くのスタジオで体験レッスンを実施しています。1,000円〜で体験できるところが多いので、2〜3スタジオ体験して比較するのがおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  中野駅はJR中央線・総武線・東西線が利用でき、新宿まで中央線快速で約5分です。丸ノ内線の新中野駅も徒歩圏内です。中野ブロードウェイやサンモール商店街など活気あふれる街で、レッスン前後の買い物や食事も楽しめます。
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
              今回は中野エリアのおすすめピラティススタジオ10選をご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              中野はJR中央線で新宿まで約5分、中野ブロードウェイやサンモール商店街など活気あるサブカルの街です。マットグループ月4回9,625円〜のzen place、女性専用マシン専門のnoa、駅南口徒歩2分のピラティスミラー、完全個室パーソナルのSTUDIO IVY、予約不要30分のURBAN CLASSIC、マンツーマン30分のELEMENT、月額3,278円のchocoZAPなど、多彩なスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              ぜひ体験レッスンに足を運んで、自分に合うスタジオを見つけてください。
            </p>
            <p className="text-warm-700 font-medium text-center">
              本ページが、スタジオ選びの参考になれば幸いです。
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              体験レッスンのご予約
            </h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              初回限定の体験レッスン1,000円〜です。<br />
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
        {/* boost-nav-202606 */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-warm-900 mb-3">📍 近隣エリア・料金データで比較する</h2>
              <p className="text-warm-600 text-sm mb-4">通勤・生活圏のスタジオもあわせて比べると、自分に合った1校が見つかりやすくなります。</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/area/koenji/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">高円寺</Link>
                <Link href="/articles/pilates-ryokin-hakusho/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国ピラティス料金白書2026</Link>
              </div>
            </div>
          </div>
        </section>


      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="nakano" areaName="中野" />

      <RelatedAreas currentSlug="nakano" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
