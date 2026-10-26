import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { AreaModifierSections } from '@/components/AreaModifierSections'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { AreaMarketComparison } from '@/components/AreaMarketComparison'
import { AreaConclusion } from '@/components/AreaConclusion'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/takadanobaba/' },
  title: '高田馬場のピラティス｜初心者可・無料体験で選ぶ料金比較',
  description: '高田馬場エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で比較しています。初心者向けの選び方、駅近スタジオ、体験レッスンの有無までわかります。',
  keywords: 'ピラティス,高田馬場,早稲田,目白,新大久保,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 高田馬場スタジオ',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: 'マットグループ月4回 9,625円〜',
    trial: '体験レッスン 500円〜',
    features: ['マット&マシン', '高田馬場駅徒歩5分', '男性利用可', '全国他店利用'],
    description: '全国150店舗以上展開の大手ピラティススタジオです。JR山手線・西武新宿線・東京メトロ東西線「高田馬場駅」から徒歩5分の好立地です。マットグループ、マシン（リフォーマー）グループ、プライベートレッスンと幅広いメニューを提供しています。男性も利用可能で、経験豊富なエデュケーターが一人ひとりに合わせた丁寧な指導を行います。体験レッスンは500円からです。',
    access: 'JR山手線・西武新宿線・東京メトロ東西線「高田馬場駅」徒歩5分',
    address: '東京都新宿区高田馬場4丁目3-8 松島第二ビル3階 3F号室',
    popularPlan: {
      name: 'リフォーマーグループ（月4回）',
      description: 'マシンを使ったグループレッスンです。少人数制で初心者も安心です。マットレッスンへの切り替えも可能です。',
      price: '月4回 15,400円（税込）〜',
    },
    options: [
      'マットグループ（月4回 9,625円〜）',
      'リフォーマーグループ（月4回 15,400円〜）',
      'フリープラン（月16,940円〜）',
      'プライベート（1回 9,900円〜）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'ウォーターサーバー'],
    },
  },
  {
    name: 'the SILK 高田馬場店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=X10489B.1.E162842X.U1357808',
    image: '/images/studios/the-silk.webp',
    price: 'Standard4 15,280円〜（別途施設利用料 月700円・税込）',
    trial: '体験レッスン 無料',
    features: ['女性専用', 'マシンピラティス専門', '高田馬場駅近', '音楽×マシン'],
    description: '女性専用マシンピラティス専門スタジオです。高田馬場駅から徒歩圏内に展開しています。最新のリフォーマーマシンを完備し、音楽に合わせた独自プログラムで楽しくトレーニングです。無料体験レッスン実施中です。1回約3,820円からのリーズナブルな料金設定が魅力です。',
    access: 'JR山手線・西武新宿線・東京メトロ東西線「高田馬場駅」徒歩圏内',
    address: '東京都新宿区高田馬場2-13-2 Primegate 高田馬場 7階 （旧：JMFビル高田馬場）',
    popularPlan: {
      name: 'Standard4（月4回）',
      description: '女性専用マシンピラティスの基本プランです。音楽に合わせた50分のグループレッスンです。初心者にも人気です。',
      price: '月4回 15,280円（税込）〜',
    },
    options: [
      'Standard4（月4回 15,280円〜）',
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
      closed: '年末年始',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', '女性専用'],
    },
  },
  {
    name: 'ピラティスK 新宿店',
    officialUrl: 'https://t.afi-b.com/visit.php?a=O11543l-G384824n&p=E9887623',
    image: '/images/studios/pilates-k.webp',
    price: '月4回 13,420円',
    trial: '体験レッスン 2,000円',
    features: ['女性専用マシンピラティス', '新宿三丁目駅近く', '音楽×マシン', 'ボディメイク'],
    description: '「30歳からの本気ボディメイク」がコンセプトの女性専用マシンピラティス専門スタジオです。全国54店舗展開です。高田馬場からJR山手線で2駅の新宿三丁目に位置しています。音楽に合わせた独自プログラムで楽しくボディメイクを目指せます。初心者から経験者まで対応しています。',
    access: '東京メトロ丸ノ内線・副都心線「新宿三丁目駅」近く / 高田馬場からJR山手線で2駅',
    address: '東京都新宿区新宿3丁目（新宿三丁目駅近く）',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '月4回のマシンピラティスレッスンです。女性専用で安心して通える人気プランです。音楽に合わせた50分のグループレッスンです。',
      price: '月4回 13,420円（税込）〜',
    },
    options: [
      'マンスリー4メンバー（月4回 13,420円）',
      'マンスリーデイメンバー（平日昼間プラン）',
      'マンスリー8メンバー（月8回 16,170円）',
      '追加受講料（1回 2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', 'ストレス発散', '体幹強化'],
    },
    basicInfo: {
      hours: '月〜金 9:30〜16:00 / 17:30〜22:00 / 土日祝 9:30〜20:00',
      closed: '第一月曜日',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '女性専用'],
    },
  },
  {
    name: 'STUDIO IVY 高田馬場店',
    image: '/images/studios/studio-ivy.webp',
    price: '1回 6,250円〜',
    trial: '体験レッスンあり',
    features: ['パーソナル専門', 'マシンピラティス', '高田馬場駅近', '完全個室'],
    description: '全国展開のパーソナルマシンピラティス専門スタジオです。高田馬場駅から徒歩圏内です。月謝制で1レッスン6,250円〜とパーソナルとしてはリーズナブルな価格設定です。完全プライベート空間でオーダーメイドのプログラムを提供しています。一人ひとりの目標や身体の状態に合わせた指導が魅力です。',
    access: 'JR山手線・西武新宿線・東京メトロ東西線「高田馬場駅」徒歩圏内',
    address: '東京都新宿区高田馬場（高田馬場駅徒歩圏内）',
    popularPlan: {
      name: 'パーソナルレッスン（月4回）',
      description: '完全プライベートのマシンピラティスレッスンです。オーダーメイドプログラムで効率的にボディメイクを目指せます。',
      price: '月4回 25,000円（税込）〜（1回あたり6,250円〜）',
    },
    options: [
      'パーソナル月2回（15,000円〜）',
      'パーソナル月4回（25,000円〜）',
      'パーソナル月8回（46,000円〜）',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      purpose: ['ボディメイク', '姿勢改善', '腰痛・肩こり改善', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: '7:00〜22:00',
      closed: '不定休',
      facilities: ['完全個室', 'ロッカー', 'パウダールーム', 'ウォーターサーバー'],
    },
  },
  {
    name: 'ELEMENT 高田馬場店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=U11199J.1.V154352I.U1357808',
    image: '/images/studios/element.webp',
    price: '月4回 22,000円〜',
    trial: '体験レッスンあり',
    features: ['パーソナル', '30分レッスン', '手ぶらで参加可能', '高田馬場駅近'],
    description: '30分の短時間集中パーソナルピラティス＆トレーニングスタジオです。高田馬場駅から徒歩圏内です。ウェア・タオル・シューズ無料レンタルで手ぶら通い可能です。ピラティスと筋トレを組み合わせたオリジナルメニューで効率的にボディメイクを目指せます。忙しい方にもおすすめです。',
    access: 'JR山手線・西武新宿線・東京メトロ東西線「高田馬場駅」徒歩圏内',
    address: '東京都新宿区高田馬場（高田馬場駅徒歩圏内）',
    popularPlan: {
      name: 'パーソナル（月4回）',
      description: '30分の短時間集中パーソナルレッスンです。ピラティス×筋トレで効率的にボディメイクを目指せます。',
      price: '月4回 22,000円（税込）〜',
    },
    options: [
      'パーソナル月4回（22,000円〜）',
      'パーソナル月8回（40,000円〜）',
      '通い放題プラン',
      'ウェア・タオル・シューズ無料レンタル',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      purpose: ['ダイエット', 'ボディメイク', '体幹強化', '時短トレーニング'],
    },
    basicInfo: {
      hours: '10:00〜22:00',
      closed: '不定休',
      facilities: ['完全個室', 'ロッカー', 'ウェア無料レンタル', 'タオル無料レンタル'],
    },
  },
  {
    name: 'ピラティスミラー 高田馬場店',
    image: '/images/studios/pilates-mirror.webp',
    price: '1回 4,400円〜',
    trial: '体験レッスンあり',
    features: ['マシンピラティス', '少人数制', '高田馬場駅近', 'ミラーでフォーム確認'],
    description: 'マシンピラティス専門の少人数制スタジオです。高田馬場駅から徒歩圏内です。鏡の前でフォームを確認しながらレッスンを受けられるのが特長です。1回4,400円〜とリーズナブルな料金設定です。初心者にも丁寧な指導で安心して通えます。',
    access: 'JR山手線・西武新宿線・東京メトロ東西線「高田馬場駅」徒歩圏内',
    address: '東京都新宿区高田馬場（高田馬場駅徒歩圏内）',
    popularPlan: {
      name: 'マシンピラティス（月4回）',
      description: '少人数制のマシンピラティスレッスンです。ミラーで自分のフォームを確認しながら効果的にトレーニングです。',
      price: '月4回 17,600円（税込）〜（1回あたり4,400円〜）',
    },
    options: [
      '月4回プラン（17,600円〜）',
      '月8回プラン',
      '都度払いプラン',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '柔軟性向上'],
    },
    basicInfo: {
      hours: '10:00〜21:00',
      closed: '不定休',
      facilities: ['ミラー完備', 'フィッティングルーム（カーテン仕切り）', '荷物置きBOX（鍵なし）'],
    },
  },
  {
    name: 'URBAN CLASSIC PILATES 高田馬場店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11337L.1.X156352B.U1357808',
    image: '/images/studios/urban-classic-pilates.webp',
    price: '月4回 9,680円〜',
    trial: '体験レッスンあり',
    features: ['予約不要', '30分サーキット', '割安', '高田馬場駅近'],
    description: '予約不要・30分のサーキット形式マシンピラティススタジオです。高田馬場駅から徒歩圏内です。リフォーマーを使った30分のサーキットトレーニングで、思い立ったらすぐ通える気軽さが魅力です。月4回9,680円〜とリーズナブルです。忙しい方や学生にもおすすめです。',
    access: 'JR山手線・西武新宿線・東京メトロ東西線「高田馬場駅」徒歩圏内',
    address: '東京都新宿区高田馬場（高田馬場駅徒歩圏内）',
    popularPlan: {
      name: 'マンスリー4（月4回）',
      description: '月4回・予約不要のマシンピラティスサーキットプランです。30分で効率よく全身を鍛えられます。',
      price: '月4回 9,680円（税込）',
    },
    options: [
      'マンスリー4（月4回 9,680円）',
      'マンスリー8（月8回）',
      '通い放題プラン',
      '予約不要・30分サーキット',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      purpose: ['時短トレーニング', 'ダイエット', '体幹強化', '運動習慣づくり'],
    },
    basicInfo: {
      hours: '平日 10:00〜21:00 / 土日祝 10:00〜19:00',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', 'ウォーターサーバー'],
    },
  },
  {
    name: 'CALDO 高田馬場店',
    image: '/images/studios/caldo.webp',
    price: '月4回 9,900円〜',
    trial: '体験レッスンあり',
    features: ['ホットヨガ&ピラティス', '大型施設', '予約不要', '高田馬場駅近'],
    description: '全国展開のホットヨガ＆ピラティススタジオです。高田馬場駅から徒歩圏内です。ホットヨガをメインにピラティスプログラムも充実しています。大型施設でシャワー・アメニティも完備しています。予約不要で気軽に通えるスタイルが魅力です。初心者から経験者まで幅広いプログラムを用意しています。',
    access: 'JR山手線・西武新宿線・東京メトロ東西線「高田馬場駅」徒歩圏内',
    address: '東京都新宿区高田馬場（高田馬場駅徒歩圏内）',
    popularPlan: {
      name: 'マンスリー4（月4回）',
      description: 'ホットヨガ・ピラティスのグループレッスンが月4回受けられるベーシックプランです。',
      price: '月4回 9,900円（税込）〜',
    },
    options: [
      'マンスリー4（月4回 9,900円〜）',
      'デイタイム（平日昼間通い放題）',
      'フルタイム（通い放題）',
      'プレミアム（全営業時間利用可能）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      purpose: ['ダイエット', 'デトックス', '姿勢改善', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '平日 10:00〜22:30 / 土日祝 10:00〜20:00',
      closed: '月末最終日',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'アメニティ完備'],
    },
  },
  {
    name: 'NATURAglam 高田馬場スタジオ',
    image: '/images/studios/naturaglam.webp',
    price: '月4回 8,800円〜',
    trial: '体験レッスンあり',
    features: ['少人数制', 'アットホーム', 'ヨガ&ピラティス', '高田馬場駅近'],
    description: '少人数制のアットホームなヨガ＆ピラティススタジオです。高田馬場駅から徒歩圏内です。マットピラティスを中心にヨガクラスも開催しています。少人数制で丁寧な指導が魅力です。月4回8,800円〜のリーズナブルな料金で、初心者にも安心して通えるスタジオです。',
    access: 'JR山手線・西武新宿線・東京メトロ東西線「高田馬場駅」徒歩圏内',
    address: '東京都新宿区高田馬場（高田馬場駅徒歩圏内）',
    popularPlan: {
      name: 'レギュラー会員（月4回）',
      description: '月4回のマットピラティス・ヨガレッスンが受けられるベーシックプランです。',
      price: '月4回 8,800円（税込）〜',
    },
    options: [
      'レギュラー会員（月4回 8,800円〜）',
      'フリー会員（通い放題）',
      'ドロップイン（1回 3,300円〜）',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      purpose: ['リラックス', '姿勢改善', '柔軟性向上', '健康維持'],
    },
    basicInfo: {
      hours: '平日 10:00〜21:00 / 土日 10:00〜18:00',
      closed: '不定休',
      facilities: ['ロッカー', 'マットレンタル', 'アットホームな空間'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。高田馬場エリアのスタジオはどこも初心者向けプログラムを用意しています。体験レッスンから気軽に始められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで手軽に始められます。マシンピラティスはリフォーマーなどの専用マシンを使い、バネの負荷で効率的にトレーニングです。初心者にはマシンの方がフォームを安定させやすくおすすめです。',
  },
  {
    question: '高田馬場エリアの料金相場は？',
    answer: 'グループレッスン月4回で8,800円〜15,400円程度が相場です。パーソナルは1回4,400円〜6,250円程度です。chocoZAPなら月額3,278円でセルフ利用も可能です。体験は無料〜2,000円のスタジオが中心です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回（月4〜8回）からスタートがおすすめです。慣れてきたら週2〜3回に増やすとより効果を実感できます。無理なく継続できる頻度が一番大切です。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、ピラティスでインナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質になります。ダイエット目的なら週2〜3回の頻度で最低2〜3ヶ月は継続することをおすすめします。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装（Tシャツ・レギンス等）と飲み物があれば可能です。ELEMENTなどウェア無料レンタルのスタジオなら手ぶらでも大丈夫です。靴は不要です（裸足またはソックスで行います）。',
  },
  {
    question: 'ピラティスとヨガの違いは？',
    answer: 'ピラティスは体幹（インナーマッスル）の強化が中心で、身体の機能改善に重点を置きます。ヨガは柔軟性向上とリラックス・精神面のケアが中心です。CALDOでは両方受けられます。',
  },
  {
    question: '肩こりや腰痛は改善しますか？',
    answer: 'はい、ピラティスは姿勢改善と体幹強化を通じて、肩こり・腰痛の根本原因にアプローチします。デスクワークが多い方に特におすすめです。ただし痛みが強い場合は医師に相談してからにすることをおすすめします。',
  },
  {
    question: 'どのくらいで効果が出ますか？',
    answer: '個人差はありますが、2ヶ月を過ぎた頃から姿勢の変化や体の引き締まりを実感される方が多くなっています。週2回以上通えると効果を感じやすくなります。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめ？',
    answer: 'パーソナルは自分に合ったオーダーメイドのプログラムで効果が出やすい反面、費用は高めです。グループは安く楽しく続けられます。まずはグループの体験から始めて、より効果を求めるならパーソナルに移行するのがおすすめです。',
  },
]

export default function TakadanobabaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '高田馬場', url: 'https://biyori-pilates.com/area/takadanobaba/' },
      ]} />
      <main className="pt-20 bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月12日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              ピラティス高田馬場おすすめ9選<br className="hidden md:block" />
              料金・体験レッスン・マシン対応を比較
            </h1>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>
              {' > '}
              <Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>
              {' > '}
              <span className="text-warm-600">高田馬場</span>
            </nav>
          </div>
        </section>
        <AreaConclusion studios={studios} areaName="高田馬場" />


        <TableOfContents areaName="高田馬場" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、高田馬場駅を中心に早稲田・目白・新大久保など近隣エリアも含めたおすすめピラティススタジオ9選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>高田馬場・早稲田・目白エリアでピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>料金を抑えられるスタジオがいい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>パーソナルとグループの料金を比較したい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="高田馬場" />
        <AreaMarketComparison studios={studios} areaName="高田馬場" />

        {/* Studio List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              高田馬場のおすすめピラティススタジオ9選
            </h2>
            <div className="space-y-8">
              {[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Category Search */}

        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              高田馬場のピラティス料金相場
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
                    <td className="px-4 py-3">4,400円〜17,600円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 6,250円〜25,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜2,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              高田馬場は商業施設やオフィスが集まる繁華街エリアのため、駅近の好立地スタジオが多く、やや高めの料金設定が目立ちます。一方で大手チェーンの進出も多いため、キャンペーンや月額通い放題プランを上手に活用すれば、実質的なコストを抑えることも可能です。近隣の新大久保エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              高田馬場でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR山手線・西武新宿線・東京メトロ東西線「高田馬場駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  高田馬場エリアのスタジオは高田馬場駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートをご確認ください。高田馬場駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">繁華街ならではの予約混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  高田馬場は人が集まる繁華街のため、平日夜（18時〜21時）と土日午前中はレッスン予約が特に集中します。人気クラスは1週間以上前に満席になることもあります。アプリやWebで空き状況をこまめに確認し、キャンセル待ち機能があるスタジオでは積極的にご活用ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  高田馬場エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ずご確認ください。月の途中入会は日割り計算になるかもご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  高田馬場エリアだけでなく、近隣の<Link href="/area/shin-okubo/" className="text-warm-700 underline hover:text-warm-900">新大久保</Link>、<Link href="/area/shinjuku/" className="text-warm-700 underline hover:text-warm-900">新宿</Link>、<Link href="/area/ikebukuro/" className="text-warm-700 underline hover:text-warm-900">池袋</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                  <strong>高田馬場エリアの豆知識：</strong>高田馬場は仕事帰りに立ち寄る方が多いエリアです。荷物が多くなりがちなので、ロッカーの広さやシャワー設備の有無を事前に確認しておくと安心です。ウェアレンタルがあるスタジオなら手ぶらで通えて便利です。
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              目的別おすすめスタジオ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額1万円以下から始められるスタジオです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• chocoZAP（月額3,278円・24時間）</li>
                  <li className="text-warm-700">• NATURAglam（月4回 8,800円〜）</li>
                  <li className="text-warm-700">• zen place（マット月4回 9,625円〜）</li>
                  <li className="text-warm-700">• URBAN CLASSIC PILATES（月4回 9,680円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマンで効果的にボディメイクを目指せます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスミラー（1回4,400円〜）</li>
                  <li className="text-warm-700">• STUDIO IVY（1回6,250円〜）</li>
                  <li className="text-warm-700">• ELEMENT（30分パーソナル）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間で集中できます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK（体験無料）</li>
                  <li className="text-warm-700">• ピラティスK（新宿店）</li>
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
                週1〜2回（月4〜8回）からスタートするのがおすすめです。まずは身体を慣らすことが大切です。継続期間は最低でも2〜3ヶ月です。この期間で効果を実感される方が多くみられます。
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
        <section className="py-16 bg-white" id="price-guide">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              予算別の料金相場
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">グループ月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  割安なグループレッスンでピラティスデビューです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• chocoZAP（月額 3,278円）</li>
                  <li>• NATURAglam（月4回 8,800円〜）</li>
                  <li>• zen place（マット月4回 9,625円〜）</li>
                  <li>• URBAN CLASSIC PILATES（月4回 9,680円）</li>
                  <li>• CALDO（月4回 9,900円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 11,000〜18,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">マシン&専門</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の本格レッスンで効率的にボディメイクを目指せます。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（月4回 13,420円）</li>
                  <li>• the SILK（月4回 15,280円〜）</li>
                  <li>• zen place リフォーマー（月4回 15,400円〜）</li>
                  <li>• ピラティスミラー（月4回 17,600円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 22,000円〜/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">
                  プライベートレッスンで効果を目指せます。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ELEMENT（月4回 22,000円〜）</li>
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
                  高田馬場エリアの料金相場は、グループレッスン月4回で8,800円〜15,400円程度です。パーソナルレッスンは1回4,400円〜6,250円、月額15,000円〜25,000円程度です。chocoZAPなら月額3,278円で始められます。無理なく継続できる予算を決めることをおすすめします。入会金やレンタル料などもご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行くことをおすすめします。スタジオの雰囲気、インストラクターとの相性、設備の充実度は実際に行ってみないとわかりません。the SILKは無料体験、zen placeは500円から体験可能です。体験レッスンをご利用ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  通いにくい場所にあるスタジオは、継続が難しくなります。高田馬場はJR山手線・西武新宿線・東京メトロ東西線の3路線が利用可能な好アクセスの駅です。新宿まで2駅、池袋まで3駅と都内各所にも出やすい立地です。早稲田大学が近く学生の活気があふれるエリアで、仕事帰りや学校帰りに立ち寄りやすいスタジオが揃っています。
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
              本ページでは、高田馬場のおすすめピラティススタジオ9選をご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              高田馬場はJR山手線・西武新宿線・東京メトロ東西線の3路線が利用でき、新宿まで2駅・池袋まで3駅という好アクセスです。早稲田大学が近く学生の街としても知られるこのエリアには、月額3,278円のchocoZAPから本格パーソナルのSTUDIO IVYまで、幅広い価格帯のスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              料金重視ならNATURAglam、女性専用ならthe SILKやピラティスK、パーソナルならSTUDIO IVYやELEMENT、予約不要の気軽さならURBAN CLASSIC PILATESやchocoZAPと、目的や予算に合わせて選んでみてください。
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
              体験レッスンのご予約
            </h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              初回限定の体験レッスン無料〜2,000円です。<br />
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
              <AreaModifierSections studios={studios} areaName="高田馬場" />
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="takadanobaba" areaName="高田馬場" />

            {/* boost-p1-shin-okubo-202607 */}
            <div className="my-8 bg-white border border-warm-200 p-5">
              <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">近隣エリア</p>
              <p className="text-sm text-warm-700 font-light leading-relaxed">
                近隣の<Link href="/area/shin-okubo/" className="text-warm-800 underline decoration-warm-300 hover:text-warm-900">新大久保エリアのピラティススタジオ比較</Link>もあわせて検討できます。無料体験・料金・アクセスをまとめて確認できます。
              </p>
            </div>
      {/* g1-link-202609 */}
      <div className="my-8 bg-white border border-warm-200 p-5">
        <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">店舗別ガイド</p>
        <p className="text-sm text-warm-700 font-light leading-relaxed mb-3">このエリアの店舗別に料金・体験レッスン・アクセスを整理した詳細ページがあります。</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/brands/the-silk-takadanobaba/" className="text-xs text-warm-800 border border-warm-300 bg-white px-3 py-1.5 hover:border-warm-500 transition-colors">the SILK 高田馬場店の料金・体験を見る</Link>
        </div>
      </div>

      <RelatedAreas currentSlug="takadanobaba" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
