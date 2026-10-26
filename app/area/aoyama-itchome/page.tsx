import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { AreaMarketComparison } from '@/components/AreaMarketComparison'
import { AreaConclusion } from '@/components/AreaConclusion'
import { AreaQuickAnswer } from '@/components/AreaQuickAnswer'
import { AreaModifierSections } from '@/components/AreaModifierSections'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/aoyama-itchome/' },
  title: '青山（青山一丁目・南青山・北青山）のピラティス9社を比較｜駅徒歩3分のスタジオも',
  description: '青山（青山一丁目・南青山・北青山）と表参道・外苑前のピラティス9社を、料金・体験・マシン対応で比較。南青山・北青山の住所別早見表と、青山一丁目駅から徒歩3分のViel・B&B南青山も掲載しています（2026年10月時点）。',
  keywords: 'ピラティス,青山一丁目,表参道,外苑前,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'BDC PILATES 表参道スタジオ',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5719218&p_id=3095&pc_id=7153&pl_id=40590',
    image: '/images/studios/bdc-pilates.webp',
    price: '月4回 16,280円（税込）',
    trial: 'グループ体験 1,100円（税込・10月31日までのキャンペーン・通常4,070円）',
    features: ['日本初マシン専門', '表参道駅徒歩2分', '認定講師', 'グループ&プライベート'],
    description: '日本初のマシンピラティス専門スタジオです。表参道駅から徒歩2分の好立地です。認定指導資格を保有した講師によるグループレッスンとプライベートレッスンの両方を提供しています。プライベートレッスンでは一人ひとりの身体の状態と目的に沿ってメニューを完全カスタマイズです。ダンサーやアスリートも通う質の高いレッスンが特徴です。',
    access: '表参道駅 徒歩2分（公式表記）',
    address: '東京都港区南青山5-7-17 青山小原ビル(小原流会館)8F（A studio）／東京都渋谷区神宮前4-9-1 神宮前AKビル201（B studio）',
    popularPlan: {
      name: 'グループレッスンコース（月4回）',
      description: '月4回のグループレッスンです。認定講師による本格マシンピラティスです。',
      price: '月4回 16,280円（税込）',
    },
    options: [
      'グループ 月6回 23,100円／月8回 29,260円（税込）',
      'プライベート 月1回 11,000円／月2回 20,900円（税込）',
      '追加レッスン グループ 4,070円／プライベート 11,000円（税込）',
      '入会金 11,000円・事務手数料 2,200円・施設維持費 月770円（税込）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の80%）',
      purpose: ['ボディメイク', '姿勢改善', 'パフォーマンス向上', '体幹強化'],
    },
    basicInfo: {
      hours: '平日 10:00〜20:00 / 土日 10:00〜17:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'ピラティスK 表参道店',
    officialUrl: 'https://t.afi-b.com/visit.php?a=O11543l-G384824n&p=E9887623',
    image: '/images/studios/pilates-k.webp',
    price: '月4回 13,420円',
    trial: '体験レッスン 0円',
    features: ['女性専用', 'マシン専門', '表参道駅徒歩2分', '音楽レッスン'],
    description: '女性専用のマシンピラティス専門スタジオです。表参道駅から徒歩2分です。2025年5月オープンです。音楽に合わせたグループレッスンが特徴で、お腹・お尻・二の腕・脚・背中の部位に特化したボディメイクプログラムが充実しています。カジュアルかつスタイリッシュな店内で楽しくピラティスを続けられます。',
    access: '表参道駅 徒歩2分 / 渋谷駅 徒歩9分',
    address: '東京都港区北青山3-12-7 秋月ビル 3F 301',
    popularPlan: {
      name: 'マンスリー4メンバー（月4回）',
      description: '平日・土日祝いつでも受講可能です。お好きな時間で受講できる人気プランです。',
      price: '月4回 13,420〜13,420円（税込）',
    },
    options: [
      'マンスリー8メンバー（月8回 16,170〜16,170円）',
      'デイメンバー（14,520〜14,520円）',
      'プレミアムメンバー（毎日2レッスン 18,920〜18,920円）',
      '追加受講（1回 2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の85%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', 'ストレス解消'],
    },
    basicInfo: {
      hours: '火・金 10:00-15:00/17:30-22:00、水 10:00-14:00/17:30-22:00、木 17:30-22:00、土・祝 10:00-18:30、日 10:00-17:30',
      closed: '月曜日',
      facilities: ['リフォーマーマシン', 'ロッカー', 'パウダールーム', 'ウォーターサーバー'],
    },
  },
  {
    name: 'A・CORE（アコア）',
    image: '/images/studios/a-core-pilates.webp',
    price: '要確認（完全パーソナル）',
    trial: '体験レッスンあり',
    features: ['2005年創業', '完全パーソナル', '北青山', '本格マシン完備'],
    description: '2005年9月に青山・表参道にオープンした老舗マシンピラティス専門スタジオです。完全パーソナル・カスタムメイドのプライベートレッスンを提供しています。「ロイヤルピラティススタジオ」として、長年の実績と経験に基づく質の高い指導が魅力です。一人ひとりの体の状態を見極め、最適なプログラムを提案します。',
    access: '表参道駅・外苑前駅から徒歩圏内',
    address: '東京都港区北青山3-5-4 AOYAMA TAKANO BLDG. 6F',
    popularPlan: {
      name: '完全プライベートレッスン',
      description: 'カスタムメイドのマンツーマンレッスンです。20年の実績に基づく本格指導しています。',
      price: '要確認（公式サイト参照）',
    },
    options: [
      '完全パーソナルレッスン',
      '体験レッスンあり',
      'リフォーマー・キャデラック等完備',
      '長期継続プランあり',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心（全体の70%）',
      purpose: ['姿勢改善', 'パフォーマンス向上', '体幹強化', 'リハビリ'],
    },
    basicInfo: {
      hours: '月 12:00〜21:00 / 火〜金 9:00〜21:00 / 土 9:00〜19:00 / 日祝 9:00〜17:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'バレル', '完全プライベート空間'],
    },
  },
  {
    name: 'Sky Pilates Tokyo',
    image: '/images/studios/sky-pilates-tokyo.webp',
    price: '1回 3,200円〜（マシンのグループセッション）',
    trial: '初回体験割引あり（表参道店のマシングループ 1,000円）',
    features: ['STOTT PILATES公認', '元プロバレエダンサー指導', '南青山', '3店舗展開'],
    description: 'STOTT PILATES公認のピラティス専門スタジオです。南青山の本店（表参道・外苑前駅徒歩7分）、表参道店（神宮前3-4-7 エルム青山3F・表参道駅徒歩5分）、渋谷店の3店舗を展開しています（公式サイト 2026年10月19日確認）。セッションはすべて60分で、料金はインストラクターのランクにより異なります。入会金は11,000円（税込）で、公式サイトでは入会金の割引・無料キャンペーンを毎月実施していると案内されています。元プロバレエダンサーが指導する質の高いセッションが魅力です。グループからプライベートまで対応し、初心者からインストラクター志望者まで幅広く受け入れています。',
    access: '表参道駅・外苑前駅 徒歩7分（本店）/ 表参道駅 徒歩5分（表参道店）',
    address: '東京都港区南青山3-3-16 IQビルディング GF',
    popularPlan: {
      name: 'グループセッション',
      description: 'STOTT PILATES公認の質の高いグループレッスンです。',
      price: '1回 3,200〜3,950円（税込・店舗とインストラクターのランクにより異なる）',
    },
    options: [
      'マシンのグループセッション（本店 3,400〜3,950円／表参道店 3,200〜3,700円・税込）',
      'プライベートセッション（1回 6,990〜12,230円・税込・ランク別）',
      'インストラクター養成コース',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心（全体の75%）',
      purpose: ['ボディメイク', 'パフォーマンス向上', '姿勢改善', 'インストラクター資格'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'バレル', '更衣室'],
    },
  },
  {
    name: 'Pilates KASANE 表参道店',
    officialUrl: 'https://t.afi-b.com/visit.php?a=T15562j-7505717Y&p=E9887623',
    image: '/images/studios/pilates-kasane.webp',
    price: '月4回 15,400円〜',
    trial: '体験レッスン 980円',
    features: ['少人数制', 'カルテ管理', '手ぶらで参加可能', '年中無休'],
    description: '最大4名の少人数制セミパーソナルレッスンが特徴のマシンピラティススタジオです。有資格インストラクターが一人ひとりの身体をカルテに記録しながらカスタマイズされたレッスンを提供しています。年中無休で朝8時から夜21時まで営業しており、通いやすい環境です。レンタルウェア完備で手ぶらで通えます。',
    access: '明治神宮前駅 徒歩5分 / 原宿駅 徒歩5分 / 表参道駅 徒歩15分',
    address: '東京都渋谷区神宮前6丁目',
    popularPlan: {
      name: '月4回プラン',
      description: '少人数制セミパーソナルレッスン月4回です。カルテ管理で最適化されたレッスンです。',
      price: '月4回 15,400円（税込）',
    },
    options: [
      '1回あたり 3,025円〜',
      'レンタルウェア完備（手ぶらで参加可能）',
      '体験レッスン 980円',
      '最大12名のグループレッスンもあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の80%）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '体幹強化'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: '年中無休',
      facilities: ['リフォーマーマシン', 'レンタルウェア', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'zen place pilates 六本木',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月4回 9,625円〜',
    trial: '体験レッスンあり（当日入会で入会金無料）',
    features: ['マシン完備', '男性利用可', '全国他店利用可', '各種割引あり'],
    description: '全国150以上のスタジオを展開する国内最大級のピラティス専門スタジオです。青山一丁目エリアからもアクセスしやすい六本木スタジオです。マットグループ・リフォーマーグループ・プライベートレッスンと豊富なレッスン形式です。Balanced Body製マシンを完備し、世界レベルの資格を持つエデュケーターが丁寧に指導しています。男性も受講可能です。',
    access: '六本木駅から徒歩圏内 / 青山一丁目エリアからもアクセス可',
    address: '東京都港区六本木7丁目19-9 VORT六本木 7階',
    popularPlan: {
      name: 'マットグループ月4回',
      description: 'マットピラティスのグループレッスンです。全国のzen placeスタジオで他店利用可能です。',
      price: '月4回 9,625円（税込）',
    },
    options: [
      'マットグループフリー（月額14,960円）',
      'リフォーマーグループ月4回（月額15,400円）',
      'リフォーマーグループ月8回（月額25,300円）',
      'プライベート月4回（月額33,880円〜）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心（全体の80%）',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 8:00〜21:00 / 土日祝 8:00〜17:00（目安）',
      closed: '不定休',
      facilities: ['リフォーマー', 'トラピーズテーブル', 'コンボチェア', '男女別更衣室', 'ロッカー'],
    },
  },
  {
    name: 'a.pilates（エードットピラティス）',
    image: '/images/studios/a-pilates-omotesando.webp',
    price: '体験 22,000円',
    trial: '体験レッスン 22,000円',
    features: ['完全プライベート', '女性専用', '表参道駅徒歩2分', '本格マシン完備'],
    description: '表参道駅から徒歩2分の完全プライベートピラティススタジオです。女性専用です。女優・モデル・ダンサーなど美意識の高い女性に支持されるハイクラスなスタジオです。オーナーの小柳歩美先生がタワーリフォーマー、ラダーバレル、スパインコレクターなど本格マシンを使用したマンツーマン指導を提供しています。完全予約制・会員制です。',
    access: '表参道駅 徒歩2分',
    address: '東京都港区北青山エリア（完全予約制）',
    popularPlan: {
      name: '完全プライベートレッスン',
      description: 'マンツーマンの本格マシンピラティスです。女優・モデルも通う上質なレッスンです。',
      price: '要確認（体験22,000円）',
    },
    options: [
      '体験レッスン（22,000円）',
      '完全予約制・会員制',
      'タワーリフォーマー・ラダーバレル・スパインコレクター完備',
      '女性専用',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['美容', 'ボディメイク', 'パフォーマンス向上', '姿勢改善'],
    },
    basicInfo: {
      hours: '完全予約制',
      closed: '不定休',
      facilities: ['タワーリフォーマー', 'ラダーバレル', 'スパインコレクター', '完全プライベート空間'],
    },
  },
  {
    name: 'Pilates & BodyMake Studio Viel Aoyama',
    price: 'マンスリー2回 26,000円〜',
    trial: '体験レッスン 8,800円（60分・女性）',
    features: ['青山一丁目駅徒歩3分', '完全予約制マンツーマン', 'ピラティス＋筋トレ', '女性はレンタルウェア込み'],
    description: '青山一丁目駅から徒歩3分の、マシンピラティスと筋力トレーニングを組み合わせる完全予約制のマンツーマンスタジオです。レッスンは50分です（着替え込み60分）。マンスリーコースには水・プロテインスムージー・食事アドバイスが含まれ、女性はレンタルウェアも込みです。公式サイトでは妊娠中の方も医師の許可があれば受講できると案内されています（公式サイト・2026年10月11日確認。税込・税抜の表記はありません）。',
    access: '東京メトロ・都営「青山一丁目駅」徒歩3分',
    address: '東京都港区北青山一丁目4-5 VORT青山一丁目Dual’s 303',
    popularPlan: {
      name: 'マンスリー4回コース（女性）',
      description: 'マンツーマンのマシンピラティス＆トレーニングです。使わなかった枠は1回分のみ翌月に繰り越し可能です。',
      price: '月4回 50,000円',
    },
    options: [
      '女性 月2回 26,000円／月8回 98,000円',
      '女性 都度チケット 13,200円',
      '男性 月4回 88,000円／都度 22,000円',
      '入会金 33,000円（初月のみ）',
    ],
    basicInfo: {
      hours: '9:00〜21:00',
      closed: '不定休',
      closedVerified: true,
      facilities: ['マシン', 'ダンベル等のトレーニング器具', 'レンタルウェア（女性）'],
    },
  },
  {
    name: 'ピラティススタジオB&B南青山',
    price: '1回 13,500円〜（回数券で1回10,000円〜）',
    trial: '体験 9,000円（50分プライベート）',
    features: ['青山一丁目駅徒歩3分', 'プライベートセッション専門', '産前産後ピラティス', 'コアアライン導入'],
    description: '青山一丁目駅4番南出口から徒歩3分、乃木坂駅から徒歩5分です。レッスンはすべてプライベートセッション（50分）で、リフォーマーのほかタワー・チェア・バレル、美脚目的の「コアアライン」を使います。産前産後ピラティスや、カウンセリングと姿勢チェックから入る「Re:Bodyピラティス」もあります。料金は1回13,500円、回数券なら4回50,000円〜24回240,000円です（1回あたり12,500円〜10,000円）（公式料金ページ・税込・2026年10月11日確認）。',
    access: '東京メトロ銀座線・半蔵門線・都営大江戸線「青山一丁目駅」4番南出口 徒歩3分／千代田線「乃木坂駅」3番出口 徒歩5分',
    address: '〒107-0062 東京都港区南青山1-9-3 廣澤ビル3階',
    popularPlan: {
      name: '4回 回数券（50分プライベート）',
      description: '有効期限は初回レッスン日から1年間です。インストラクター指名は1回1,000円です。',
      price: '4回 50,000円（1回あたり12,500円・税込）',
    },
    options: [
      '8回 92,000円／12回 126,000円／24回 240,000円',
      '体験 9,000円＋入会金 22,000円',
      '指名料 1回1,000円',
      'キャンセルは前日の営業時間以降100%',
    ],
    basicInfo: {
      hours: '平日 10:00〜21:00／土日祝 10:00〜18:00',
      closed: '不定休',
      closedVerified: true,
      facilities: ['リフォーマー', 'コアアライン', 'タワー', 'チェア', 'バレル'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。青山一丁目・表参道エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。ピラティスKは体験レッスンが0円、BDC PILATESはグループ体験が1,100円（10月31日までのキャンペーン）なので気軽に始められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷を調整しやすく、初心者におすすめです。このエリアでは、マシン専門スタジオが中心です。',
  },
  {
    question: '青山一丁目エリアのピラティススタジオの料金相場は？',
    answer: '青山一丁目・表参道エリアの料金相場は、グループレッスン月4回で9,600円〜16,280円程度です。ピラティスK 表参道店は月4回13,420円、BDC PILATES 表参道スタジオは月4回16,280円です（いずれも税込・公式・2026年10月確認）。パーソナルは1回5,500円〜が相場です。',
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
    answer: '基本的には、動きやすい服装（Tシャツ、レギンスなど）と飲み物があれば問題ありません。ピラティスKは無料体験、BDC PILATESは1,100円（10月31日までのキャンペーン）、Pilates KASANEは980円で体験できます。レンタルウェアがあるスタジオもあるので、各スタジオの案内を確認してください。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズです。ヨガは柔軟性と精神的なリラックスを重視します。ピラティスは筋力強化、ヨガは心身のバランスを整えることが主な目的です。目的に合わせてお選びください。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: '改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。A・COREやSky Pilatesなど、老舗スタジオでは体の不調改善に特化したアプローチも可能です。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスの効果を実感し始めるのは、2ヶ月を過ぎた頃が目安とされています。すぐに変化が表れなくても、最低2ヶ月は継続することをおすすめします。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれに利点があります。パーソナルはA・COREやa.pilatesで一人ひとりに合わせた指導を受けられます。グループはピラティスK（月4回13,420円）やBDC PILATES（月4回16,280円）があります（いずれも税込）。まずは体験レッスンで両方を試すことをおすすめします。',
  },
]

export default function AoyamaItchomePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '青山一丁目', url: 'https://biyori-pilates.com/area/aoyama-itchome/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月26日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              ピラティス青山・青山一丁目おすすめ9選<br className="hidden md:block" />
              料金・体験レッスン・マシン対応を比較
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
              <span className="text-warm-600">青山一丁目</span>
            </nav>
          </div>
        </section>
        <AreaQuickAnswer areaName="青山・青山一丁目" rows={[
          { label: '青山一丁目', text: '青山一丁目駅から徒歩3分の2社はどちらもマンツーマンです。Pilates & BodyMake Studio Viel Aoyama（月2回26,000円〜・体験8,800円）と、ピラティススタジオB&B南青山（4番南出口 徒歩3分・回数券で1回10,000円〜・体験9,000円）。' },
          { label: '表参道側', text: 'グループで通うなら表参道駅の徒歩2分圏です。ピラティスK 表参道店（マシン・月4回13,420円・体験0円）、BDC PILATES 表参道（月4回16,280円・グループ体験1,100円は10月31日まで）、Sky Pilates Tokyo 表参道店（徒歩5分・1回3,200円〜）。' },
          { label: '料金', text: '月額の最安はzen place pilates 六本木のマットグループ月4回9,625円、マシンのグループはピラティスK 月4回13,420円です（税込）。' },
          { label: '体験', text: '無料はピラティスK 表参道店の1社。1,000円前後ならSky Pilates Tokyo 表参道店のマシングループ1,000円、BDCのグループ1,100円、KASANEの980円です。' },
        ]} note="南青山・北青山の住所別の早見表は下にあります。値は各公式サイトの表記（2026年10月19日確認）です。" />
        <AreaConclusion studios={studios} areaName="青山一丁目" />


        <TableOfContents areaName="青山一丁目" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、青山（青山一丁目・南青山・北青山）と表参道・外苑前エリアでおすすめのピラティススタジオ9選をまとめました。南青山・北青山に所在地があるスタジオは、下の「住所別早見表」で確認できます。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>青山一丁目・表参道エリアでピラティススタジオを探している</span>
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
                  <span>おしゃれな街で通いやすいスタジオがいい</span>
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

        <section className="py-12 bg-white" id="by-station">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4 text-center">青山一丁目駅から徒歩3分のスタジオ</h2>
            <p className="text-warm-600 leading-relaxed mb-6 text-sm">青山一丁目駅の徒歩圏で探すか、表参道・外苑前まで足を延ばすかで候補が変わります。徒歩分数・体験料金は各スタジオの公式サイトの表記です（2026年10月11日確認）。</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-warm-800 text-white">
                    <th className="px-4 py-3 text-left">スタジオ</th>
                    <th className="px-4 py-3 text-left">最寄り駅・徒歩</th>
                    <th className="px-4 py-3 text-left">形式</th>
                    <th className="px-4 py-3 text-left">体験</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">Viel Aoyama</td><td className="px-4 py-3">青山一丁目駅 徒歩3分</td><td className="px-4 py-3">マンツーマン（ピラティス＋筋トレ）</td><td className="px-4 py-3">8,800円（60分・女性）</td></tr>
                  <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">B&B南青山</td><td className="px-4 py-3">青山一丁目駅 4番南出口 徒歩3分</td><td className="px-4 py-3">プライベート専門</td><td className="px-4 py-3">9,000円（50分）</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 leading-relaxed mt-4 text-sm">青山一丁目駅から徒歩5分以内で通えるのは、掲載スタジオではViel・B&B南青山の2つで、どちらもマンツーマン（1回1万円台〜）です。月1万円台のグループレッスンで探すなら、銀座線で1駅の外苑前・2駅の表参道側（BDC PILATES・ピラティスK・Pilates KASANE など）まで広げると選択肢が増えます。</p>
          </div>
        </section>

        <section className="py-12 bg-warm-50" id="by-address">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4 text-center">南青山・北青山の住所別早見表</h2>
            <p className="text-warm-600 leading-relaxed mb-6 text-sm">掲載9社のうち、所在地が港区南青山・北青山のスタジオを丁目順に並べました。所在地・徒歩分数は各スタジオの公式サイトの表記で、確認日を右端に記載しています。所在地を公式で確認できていないスタジオ（A・CORE・a.pilates）と、青山以外にあるスタジオ（Pilates KASANE 表参道店＝神宮前、zen place pilates 六本木）は載せていません。</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-warm-800 text-white">
                    <th className="px-4 py-3 text-left">所在地</th>
                    <th className="px-4 py-3 text-left">スタジオ</th>
                    <th className="px-4 py-3 text-left">最寄り駅・徒歩</th>
                    <th className="px-4 py-3 text-left">確認日</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-warm-200"><td className="px-4 py-3">北青山1-4-5</td><td className="px-4 py-3 font-medium">Viel Aoyama</td><td className="px-4 py-3">青山一丁目駅 徒歩3分</td><td className="px-4 py-3">2026年10月11日</td></tr>
                  <tr className="border-b border-warm-200"><td className="px-4 py-3">北青山3-12-7</td><td className="px-4 py-3 font-medium">ピラティスK 表参道店</td><td className="px-4 py-3">表参道駅 B2出口 徒歩2分／渋谷駅 徒歩9分</td><td className="px-4 py-3">2026年10月19日</td></tr>
                  <tr className="border-b border-warm-200"><td className="px-4 py-3">南青山1-9-3</td><td className="px-4 py-3 font-medium">B&B南青山</td><td className="px-4 py-3">青山一丁目駅 4番南出口 徒歩3分／乃木坂駅 3番出口 徒歩5分</td><td className="px-4 py-3">2026年10月11日</td></tr>
                  <tr className="border-b border-warm-200"><td className="px-4 py-3">南青山3-3-16</td><td className="px-4 py-3 font-medium">Sky Pilates Tokyo 本店</td><td className="px-4 py-3">表参道駅・外苑前駅 徒歩7分</td><td className="px-4 py-3">2026年10月19日</td></tr>
                  <tr className="border-b border-warm-200"><td className="px-4 py-3">南青山5-7-17</td><td className="px-4 py-3 font-medium">BDC PILATES 表参道スタジオ（A studio）</td><td className="px-4 py-3">表参道駅 徒歩2分</td><td className="px-4 py-3">2026年10月19日</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 leading-relaxed mt-4 text-sm">ピラティスK 表参道店の定休日は月曜日で、平日（火〜金）は日中の部と夜の部の間に受付を閉めています（公式の店舗ページ）。BDC PILATES 表参道スタジオは、A studio（南青山）と B studio（渋谷区神宮前4-9-1）の2か所に分かれています。</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="青山一丁目" />
        <AreaMarketComparison studios={studios} areaName="青山一丁目" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              青山一丁目のおすすめピラティススタジオ9選
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
              青山一丁目のピラティス料金相場
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
                    <td className="px-4 py-3">5,500円〜22,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 5,500円〜22,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜980円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              青山一丁目は商業施設やオフィスが集まる繁華街エリアのため、駅近の好立地スタジオが多く、やや高めの料金設定が目立ちます。一方で大手チェーンの進出も多いため、キャンペーンや月額通い放題プランを上手に活用すれば、実質的なコストを抑えることも可能です。近隣の表参道エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              青山一丁目でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">表参道駅からのルートは事前に確認を</h3>
                <p className="text-warm-600 leading-relaxed">
                  青山一丁目エリアのスタジオは表参道駅周辺が中心です。駅の出口によってスタジオまでの距離が変わることがあるため、初めて訪れる際はGoogleマップで経路を確認し、余裕を持って到着できるようにすることをおすすめします。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">繁華街ならではの予約混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  青山一丁目は人が集まる繁華街のため、平日夜（18時〜21時）と土日午前中はレッスン予約が特に集中します。人気クラスは1週間以上前に満席になることもあります。アプリやWebで空き状況をこまめに確認し、キャンセル待ち機能があるスタジオでは積極的にご活用ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  青山一丁目エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ずご確認ください。月の途中入会は日割り計算になるかもご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  青山一丁目エリアだけでなく、近隣の<Link href="/area/omotesando/" className="text-warm-700 underline hover:text-warm-900">表参道</Link>、<Link href="/area/akasaka/" className="text-warm-700 underline hover:text-warm-900">赤坂</Link>、<Link href="/area/shibuya/" className="text-warm-700 underline hover:text-warm-900">渋谷</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                  <strong>青山一丁目エリアの豆知識：</strong>青山一丁目は仕事帰りに立ち寄る方が多いエリアです。荷物が多くなりがちなので、ロッカーの広さやシャワー設備の有無を事前に確認しておくと安心です。ウェアレンタルがあるスタジオなら手ぶらで通えて便利です。
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
                  月額1万円前後で通えるスタジオです。体験レッスン無料のスタジオもあります。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（月4回 9,625円〜）</li>
                  <li className="text-warm-700">• BDC PILATES（月4回 16,280円）</li>
                  <li className="text-warm-700">• ピラティスK（月4回 13,420円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">本格パーソナル</h3>
                <p className="text-warm-600 text-sm mb-4">
                  完全マンツーマンで本格的なマシンピラティスを学びたい方におすすめです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• A・CORE（2005年創業の老舗）</li>
                  <li className="text-warm-700">• a.pilates（女優・モデル御用達）</li>
                  <li className="text-warm-700">• Sky Pilates（STOTT PILATES公認）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  表参道駅・外苑前駅から徒歩5分以内です。仕事帰りにも通いやすい立地です。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• BDC PILATES（表参道駅 徒歩2分）</li>
                  <li className="text-warm-700">• ピラティスK（表参道駅 徒歩2分）</li>
                  <li className="text-warm-700">• a.pilates（表参道駅 徒歩2分）</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜12,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスンが中心です。体験無料のスタジオもあります。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates（9,625円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 15,000〜18,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4〜8回</p>
                <p className="text-sm text-warm-600 mb-4">
                  少人数制やマシン充実のスタジオです。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Pilates KASANE（15,400円〜）</li>
                  <li>• BDC PILATES 8回（29,260円）</li>
                  <li>• zen place リフォーマー（15,400円〜）</li>
                  <li>• BDC PILATES（16,280円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 30,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全プライベートレッスンです。上質な空間で本格指導しています。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• A・CORE（完全パーソナル）</li>
                  <li>• a.pilates（女優・モデル御用達）</li>
                  <li>• zen place プライベート（33,880円〜）</li>
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
                  まずは自分がピラティスで何を達成したいのかを明確にすることをおすすめします。ダイエット、姿勢改善、体幹強化、美容など、目的によって最適なスタジオやプログラムは変わります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  青山一丁目・表参道エリアの料金相場はグループレッスン月4回で9,600円〜15,400円程度です。パーソナルは1回5,500円〜です。無理なく継続できる予算を決めることをおすすめします。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行くことをおすすめします。ピラティスKは無料体験、BDC PILATESは1,100円（10月31日までのキャンペーン）、Pilates KASANEは980円で体験可能です。スタジオの雰囲気は実際に行ってみないとわかりません。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  通いにくい場所にあるスタジオは、継続が難しくなります。このエリアは東京メトロ銀座線・半蔵門線・千代田線・大江戸線が利用可能です。BDC PILATESやピラティスKは表参道駅から徒歩2分と特に便利です。
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
              本ページでは、青山一丁目・表参道のおすすめピラティススタジオについてご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページでは、青山一丁目・表参道に数多くあるピラティススタジオから選んだスタジオを掲載しています。スタジオ選びの際の候補としてご活用ください。
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
              初回限定の体験レッスン無料〜980円です。<br />
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
              <AreaModifierSections studios={studios} areaName="青山一丁目" />
      </main>
        {/* boost-nav-202606 */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-warm-900 mb-3">📍 料金相場・近隣エリアと比べる</h2>
              <p className="text-warm-600 text-sm mb-4">全国の料金データや他エリアの人気スタジオも見ると、自分に合った1校が選びやすくなります。</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/articles/pilates-ryokin-hakusho/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国の料金相場</Link>
                <Link href="/area/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国のエリア一覧</Link>
                <Link href="/area/futakotamagawa/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">二子玉川のピラティス</Link>
                <Link href="/area/shimokitazawa/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">下北沢のピラティス</Link>
                <Link href="/area/iidabashi/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">飯田橋のピラティス</Link>
              </div>
            </div>
          </div>
        </section>


      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="aoyama-itchome" areaName="青山一丁目" />

      <RelatedAreas currentSlug="aoyama-itchome" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
