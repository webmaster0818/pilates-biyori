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
  alternates: { canonical: 'https://biyori-pilates.com/area/suidobashi/' },
  title: '水道橋・後楽園のピラティスおすすめ11選｜最寄り駅・体験料金・入会金を比較',
  description: '水道橋・後楽園エリアのおすすめピラティススタジオ11選を比較しています。マシンピラティス、体験レッスン、料金相場、選び方まで詳しくご案内します。飯田橋・神保町の近隣スタジオも紹介しています。',
  keywords: 'ピラティス,水道橋,後楽園,飯田橋,神保町,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスミラー 後楽園',
    image: '/images/studios/pilates-mirror.webp',
    price: '月会費 11,000円（月6回まで）',
    trial: '体験レッスン 2,200円',
    features: ['コナミ運営', '春日駅徒歩1分', '月6回定額', '天井鏡設計'],
    description: 'コナミスポーツクラブが運営するマシンピラティス専門スタジオです。春日駅A3口から徒歩1分、後楽園駅5番口から徒歩2分です。天井に鏡を設置した特徴的な設計で、自分のフォームを確認しながらレッスンできます。月6回11,000円、7回目以降は1回1,100円で追加利用可能です。最大6名の少人数制です。公式の店舗ページには2026年10月24日時点で「只今、ご入会をお待ちいただいております」と表示されています（入会待ち）。',
    access: '都営三田線・大江戸線「春日駅」A3口 徒歩1分 / 丸ノ内線・南北線「後楽園駅」5番口 徒歩2分',
    address: '東京都文京区小石川1-1-18 文京ガーデン ザ サウス1階101',
    popularPlan: {
      name: '月会費プラン（月6回）',
      description: '月6回まで定額です。7回目以降は1回1,100円で追加可能です。',
      price: '月会費 11,000円（税込）',
    },
    options: [
      '月会費（月6回まで 11,000円）',
      '追加利用（1回 1,100円）',
      'プライベート30分（4,400円）',
      'プライベート50分（6,600円）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', '姿勢改善', '料金重視', '短時間トレーニング'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土 8:00〜18:00 / 日 8:00〜19:00',
      closed: '毎週金曜日',
      facilities: ['リフォーマー完備', '天井鏡', 'フィッティングルーム（カーテン仕切り）', '荷物置きBOX（鍵なし）'],
    },
  },
  {
    name: 'STUDIO IVY 後楽園店',
    image: '/images/studios/studio-ivy.webp',
    price: '1レッスン 6,500円〜（公式表記）',
    trial: '初回体験レッスン 4,500円→0円（キャンペーン・公式・2026年10月24日確認）',
    features: ['パーソナル専門', 'マシンピラティス', '後楽園駅が最寄り', '全国展開'],
    description: '全国展開のパーソナルマシンピラティス専門スタジオです。公式の店舗一覧では最寄駅は後楽園駅、所在地は本郷1丁目です。一人ひとりの体型や目標に合わせたオーダーメイドのトレーニングを提供しています。月謝制で、公式の料金表示は1レッスン6,500円〜です。完全プライベート空間で初心者でも安心です。',
    access: '最寄駅「後楽園駅」（公式の店舗一覧の表記・徒歩分の記載なし）',
    address: '東京都文京区本郷1-21-1 TEC本郷EAST101',
    popularPlan: {
      name: '月謝プラン',
      description: '完全パーソナルのマシンピラティスです。月の回数別の料金は公式サイトに表がないため、体験時にご確認ください。',
      price: '1レッスン 6,500円〜（公式表記）',
    },
    options: [
      '1レッスン 6,500円〜（月謝制・公式表記）',
      '入会金＋事務手数料 23,300円→体験当日の入会で0円（キャンペーン）',
      '初回体験レッスン 4,500円→0円（キャンペーン）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['姿勢改善', 'ボディメイク', '肩こり腰痛改善', '体幹強化'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', '完全プライベート空間'],
    },
  },
  {
    name: 'zen place pilates 飯田橋スタジオ',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: 'マットグループ 月4回 10,450円〜',
    trial: 'マットグループ初回体験 1,000円（キャンペーン・通常3,300円〜／マシングループは初回3,000円・公式のスタジオページ・2026年10月24日確認）',
    features: ['マット&マシン', '飯田橋駅徒歩1分', '水道橋から1駅', '男性利用可'],
    description: '全国125店舗以上展開の大手ピラティススタジオです。飯田橋駅B4b出口から徒歩1分、JR飯田橋駅西口から徒歩3分です。水道橋からJR総武線で1駅の好アクセスです。マットグループ、マシングループ、プライベートレッスンに対応しています。全国150スタジオが他店利用可能です。',
    access: '地下鉄「飯田橋駅」B4b出口 徒歩1分 / JR「飯田橋駅」西口 徒歩3分 / 水道橋からJR総武線で1駅',
    address: '東京都新宿区揚場町1-1 揚場ビル4F',
    popularPlan: {
      name: 'マットグループ月4回',
      description: 'マットグループレッスン月4回です。全国スタジオ他店利用可能です。',
      price: '月額 10,450円〜（税込）',
    },
    options: [
      'マットグループ月4回（10,450円〜）',
      'マシングループ月4回（14,520円〜）',
      'プライベート1回（8,250円〜）',
      'フリープラン（16,940円〜）',
    ],
    userProfile: {
      ageRange: '20代〜60代',
      genderRatio: '女性70% / 男性30%',
      purpose: ['姿勢改善', '体幹強化', '柔軟性向上', '健康維持'],
    },
    basicInfo: {
      hours: '平日 8:55〜22:25 / 土日祝 8:00〜20:35',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', '更衣室'],
    },
  },
  {
    name: 'zen place pilates 神保町スタジオ',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: 'マットグループ 月4回 9,625円（グレード02）',
    trial: 'マットグループ初回体験 1,000円（キャンペーン・通常2,200円〜／マシングループは初回3,000円・公式のスタジオページ・2026年10月24日確認）',
    features: ['マット&マシン', '神保町駅徒歩1分', '水道橋から徒歩圏内', '男性利用可'],
    description: '全国125店舗以上展開のzen placeの神保町スタジオです。都営三田線・新宿線・半蔵門線「神保町駅」A7出口から徒歩1分です。水道橋駅からも徒歩約10分でアクセス可能です。マットグループ、マシングループ、プライベートに対応しています。5〜10名の少人数制レッスンです。',
    access: '都営三田線・新宿線・半蔵門線「神保町駅」A7出口 徒歩1分 / JR「水道橋駅」徒歩約10分',
    address: '東京都千代田区神田神保町1-13-2 文銭堂ビル4階',
    popularPlan: {
      name: 'マットグループ月4回',
      description: 'マットグループレッスン月4回です。全国スタジオ他店利用可能です。',
      price: '月額 9,625円（税込）',
    },
    options: [
      'マットグループ月4回（9,625円）',
      'マシングループ月4回（14,520円〜）',
      'プライベート1回（8,250円〜）',
      'フリープラン（16,940円〜）',
    ],
    userProfile: {
      ageRange: '20代〜60代',
      genderRatio: '女性70% / 男性30%',
      purpose: ['姿勢改善', '体幹強化', '柔軟性向上', '健康維持'],
    },
    basicInfo: {
      hours: '平日 8:55〜22:25 / 土日祝 8:00〜20:35',
      closed: '不定休',
      facilities: ['リフォーマー', 'マット', '更衣室'],
    },
  },
  {
    name: 'pilates K 神保町店',
    officialUrl: 'https://t.afi-b.com/visit.php?a=O11543l-G384824n&p=E9887623',
    image: '/images/studios/pilates-k.webp',
    price: 'マンスリー4メンバー 月4回 13,420円',
    trial: '体験レッスン 0円',
    features: ['女性専用', '神保町駅徒歩2分', 'マシンピラティス', '体験無料'],
    description: '女性専用マシンピラティス専門スタジオです。神保町駅から徒歩2分、水道橋駅からも徒歩圏内です。全店舗リフォーマー完備で、音楽に合わせた楽しいグループレッスンが人気です。体験レッスンは0円で気軽にお試し可能です。',
    access: '都営三田線・新宿線・半蔵門線「神保町駅」徒歩2分 / JR「水道橋駅」徒歩約10分',
    address: '東京都千代田区神田神保町1-4 クロサワビル4階',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '月4回のマシンピラティスグループレッスンです。',
      price: '月4回 13,420円〜（税込）',
    },
    options: [
      'マンスリー4メンバー（月4回 13,420円）',
      'マンスリー8メンバー（月8回 16,170円）',
      'プライベート（別途料金）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '美脚・美尻', 'ストレス発散'],
    },
    basicInfo: {
      hours: '火金 10:00〜15:00/17:30〜22:00 / 水 10:00〜14:00/17:30〜22:00 / 土祝 10:00〜18:30 / 日 10:00〜17:30',
      closed: '月曜日',
      facilities: ['リフォーマー', 'パウダールーム', '更衣室'],
    },
  },
  {
    name: 'URBAN CLASSIC PILATES 飯田橋店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11337L.1.X156352B.U1357808',
    image: '/images/studios/urban-classic-pilates.webp',
    price: '月4回 税込8,580円〜（通い放題 税込12,980円）',
    trial: '無料体験（公式の店舗ページ・2026年10月24日確認）',
    features: ['予約不要', '30分サーキット', '飯田橋駅徒歩1分', '水道橋から1駅'],
    description: 'マシンピラティスとファンクショナルトレーニングのサーキット形式です。予約不要・1回30分の短時間設計です。飯田橋駅から徒歩1分、水道橋からJR総武線で1駅です。忙しい方でも気軽に続けられます。',
    access: 'JR・東京メトロ・都営大江戸線「飯田橋駅」徒歩1分 / 水道橋からJR総武線で1駅',
    address: '東京都新宿区揚場町2-16 第2東文堂ビル8F',
    popularPlan: {
      name: '通い放題プラン',
      description: '予約不要・30分サーキットが通い放題です。',
      price: '月額 12,980円（税込）',
    },
    options: [
      'マンスリー4（税込8,580円）',
      '月8回プラン（12,980円）',
      'レギュラー通い放題（税込12,980円）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['時短トレーニング', 'ボディメイク', '運動習慣づくり', '料金重視'],
    },
    basicInfo: {
      hours: '平日 9:30〜21:30 / 土祝 9:30〜19:30',
      closed: '日曜日',
      facilities: ['リフォーマー', 'ファンクショナルマシン', '更衣室'],
    },
  },
  {
    name: 'the SILK 神楽坂店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=X10489B.1.E162842X.U1357808',
    image: '/images/studios/the-silk.webp',
    price: 'グループレッスン 月3回 13,280円〜（別途施設利用料 月700円・税込）',
    trial: '体験レッスンあり',
    features: ['女性専用', 'マシンピラティス', 'パウダールーム充実', '飯田橋駅徒歩圏内'],
    description: '女性専用マシンピラティス専門スタジオです。全国42店舗展開です。神楽坂エリアに位置し、飯田橋駅からも徒歩圏内です。ReFaのヘアアイロン・ドライヤー完備のパウダールームなど設備が充実しています。音楽と照明を使った独自のレッスンスタイルが特徴です。',
    access: '東京メトロ「神楽坂駅」徒歩3分 / JR「飯田橋駅」徒歩圏内',
    address: '東京都新宿区神楽坂6-67-1 希神楽坂ビル6階（旧：マイナビ不動産ビル神楽坂）',
    popularPlan: {
      name: 'グループ月3回プラン',
      description: 'マシンピラティスグループレッスン月3回です。',
      price: '月3回 13,280円（税込）',
    },
    options: [
      '月3回プラン（13,280円）',
      '月4回プラン（15,280円）',
      '通い放題デイ（19,280円）',
      '通い放題フル（22,280円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '美容', 'ストレス発散', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 8:00〜19:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'パウダールーム（ReFa完備）', '更衣室'],
    },
  },
  {
    name: 'ELEMENT 神楽坂・飯田橋店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=U11199J.1.V154352I.U1357808',
    image: '/images/studios/element.webp',
    price: 'パーソナル通い放題 月額 39,800円〜',
    trial: '体験レッスンあり',
    features: ['パーソナル通い放題', '30分集中', '飯田橋駅徒歩5分', '筋トレ&ピラティス'],
    description: '飯田橋・神楽坂エリア初の通い放題パーソナルマシンピラティスジムです。1対1の指導で30分の集中トレーニングです。筋トレとピラティスの両方が受けられるデュアルプランも人気です。水道橋からも2駅圏内です。',
    access: '「飯田橋駅」徒歩5分 / 「神楽坂駅」徒歩5分',
    address: '東京都新宿区筑土八幡町2-5 梅野産業ビル4F',
    popularPlan: {
      name: 'マシンピラティス通い放題プラン',
      description: 'パーソナルマシンピラティスが月額通い放題です。',
      price: '月額 39,800円（税込）',
    },
    options: [
      '月4回パーソナル（22,000円〜）',
      'マシンピラティス通い放題（39,800円）',
      'デュアルプラン 月8回（43,780円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ボディメイク', '運動習慣づくり', 'パーソナル指導', '効率的なトレーニング'],
    },
    basicInfo: {
      hours: '10:00〜22:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'ウェイトマシン', '完全個室'],
    },
  },
  {
    name: 'CALDO 神楽坂',
    image: '/images/studios/caldo.webp',
    price: 'フルタイム 月額 11,000円〜',
    trial: '体験レッスンあり',
    features: ['ホットヨガ&ピラティス', '女性専用', '牛込神楽坂駅徒歩3分', '手頃な料金'],
    description: '全国展開のホットヨガスタジオです。ピラティスプログラムも週に複数回実施しています。牛込神楽坂駅から徒歩3分、飯田橋駅からも徒歩8分です。水道橋エリアでホットヨガもピラティスも両方楽しみたい方に最適です。',
    access: '都営大江戸線「牛込神楽坂駅」A3出口 徒歩3分 / JR「飯田橋駅」B3出口 徒歩8分',
    address: '東京都新宿区神楽坂5-1-4 神楽坂テラスビル3F',
    popularPlan: {
      name: 'フルタイム会員',
      description: 'ホットヨガ・ピラティスレッスンが受け放題です。',
      price: '月額 11,000円〜（税込）',
    },
    options: [
      'マンスリー4（月4回 8,800円〜）',
      'フルタイム（通い放題 11,000円〜）',
      'デイタイム（平日昼 8,800円〜）',
    ],
    userProfile: {
      ageRange: '20代〜50代',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ホットヨガ', 'ピラティス', 'リラックス', 'デトックス'],
    },
    basicInfo: {
      hours: '平日 10:00〜22:30 / 土日祝 10:00〜19:30',
      closed: '不定休',
      facilities: ['ホットスタジオ', 'シャワー', 'パウダールーム'],
    },
  },
  {
    name: 'Rintosull 秋葉原店',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683',
    image: '/images/studios/rintosull.webp',
    price: '4・フルタイム 月4回 8,800円',
    trial: '無料体験会（公式の店舗ページ・2026年10月24日確認）',
    features: ['LAVA系列', '女性専用', '秋葉原駅徒歩1分', '水道橋から2駅'],
    description: 'ホットヨガLAVAが運営するマシンピラティス専門スタジオです。秋葉原駅中央口から徒歩1分です。水道橋からJR総武線で2駅です。女性専用で、リフォーマーを使ったグループレッスンが中心です。全国240店舗以上展開です。',
    access: 'JR「秋葉原駅」中央口 徒歩1分 / 水道橋からJR総武線で2駅',
    address: '東京都千代田区神田佐久間町1-8-4 ニュー千代田ビル(アルテール秋葉原) 3F',
    popularPlan: {
      name: '4・フルタイム（月4回）',
      description: 'マシンピラティスグループレッスン月4回です。',
      price: '月4回 8,800円（税込）',
    },
    options: [
      '4・フルタイム（8,800円）／ライト・フルタイム（13,800円）／プレミアム フリー・フルタイム（16,800円）',
      '通い放題プラン（15,800円〜）',
      'LAVA会員割引あり',
    ],
    userProfile: {
      ageRange: '20代〜50代',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'LAVA併用', 'マシンピラティス体験'],
    },
    basicInfo: {
      hours: '平日 9:00〜22:00 / 土日祝 9:00〜19:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'シャワー', '更衣室'],
    },
  },
  {
    name: 'ピラティススタジオ ゼロ 神保町',
    image: '/images/studios/pilates-zero-jimbocho-suidobashi.webp',
    price: 'パーソナル 月4回 37,200円（税込・1回9,300円）',
    trial: '体験 4,400円（40分）※2026年10月は体験当日の入会で体験料・入会金無料（公式・2026年10月24日確認）',
    features: ['PHIピラティス認定', 'パーソナル専門', '神保町駅徒歩2分', '姿勢改善特化'],
    description: 'PHIピラティスの専門知識を持つトレーナーによるパーソナルピラティススタジオです。神保町駅から徒歩2分、水道橋から都営三田線で1駅です。公式の料金表（税込）は月3回28,500円・月4回37,200円・月6回54,000円・月8回69,600円です。',
    access: '地下鉄「神保町駅」A5出口 徒歩2分 / 都営三田線「水道橋駅」から1駅',
    address: '東京都千代田区神田神保町1-16-3 TSI神保町ビル1F・B1',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: 'PHI認定トレーナーによる完全マンツーマン指導しています。',
      price: '月4回 37,200円（税込）',
    },
    options: [
      '月3回 28,500円／月4回 37,200円（税込）',
      '月6回 54,000円／月8回 69,600円（税込）',
      '入会金 22,000円（2026年10月は体験当日の入会で無料）',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性65% / 男性35%',
      purpose: ['姿勢改善', '腰痛・肩こり改善', 'リハビリ', '専門的指導'],
    },
    basicInfo: {
      hours: '完全予約制（要問い合わせ）',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'バレル'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。水道橋・後楽園エリアのスタジオは、初心者歓迎のところが大半です。ピラティスミラーやzen placeなどは初心者向けクラスが充実しており、基礎から丁寧に指導してくれます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスはリフォーマーなどの専用マシンを使います。マシンはバネの力で動きをサポートしてくれるため、初心者にもおすすめです。',
  },
  {
    question: '水道橋エリアの料金相場は？',
    answer: '公式で確認できたグループ月4回は8,580円（URBAN CLASSIC 飯田橋）〜13,420円（ピラティスK 神保町）で、ピラティスミラー 後楽園は月6回11,000円です。パーソナルはSTUDIO IVYが1レッスン6,500円〜、ゼロ 神保町が月4回37,200円です（いずれも2026年10月24日確認）。chocoZAPなら月額3,278円でセルフ式ピラティスが利用できます。体験は0円〜4,400円です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回からスタートがおすすめです。慣れてきたら週2〜3回に増やすと効果的です。URBAN CLASSICやchocoZAPなら通い放題プランで毎日でも通えます。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルが鍛えられ基礎代謝が上がることで太りにくい体質になります。最低2〜3ヶ月は継続することをおすすめします。食事管理と合わせるとより効果的です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装（Tシャツとレギンスなど）、タオル、飲み物があれば可能です。スタジオによっては靴下も必要です。手ぶらで参加可能のスタジオもあるので事前にご確認ください。',
  },
  {
    question: 'ピラティスとヨガの違いは？',
    answer: 'ピラティスは体幹（コア）の強化やボディメイクが中心で、ヨガは柔軟性とリラックス・瞑想が中心です。CALDO神楽坂では両方楽しめます。',
  },
  {
    question: '肩こりや腰痛は改善しますか？',
    answer: 'はい、ピラティスは姿勢改善やインナーマッスル強化を通じて、肩こり・腰痛の根本原因にアプローチできます。特にパーソナルレッスンは個別の悩みに対応してくれます。',
  },
  {
    question: 'どのくらいで効果が出ますか？',
    answer: '個人差はありますが、2ヶ月を過ぎた頃から姿勢の変化や体の軽さを実感される方が多くなっています。見た目の変化は3〜6ヶ月が目安です。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめ？',
    answer: 'パーソナルは一人ひとりの体に合わせたオーダーメイドの指導のため、効果が出やすい形式です。グループは安く楽しく仲間と一緒に続けられます。迷ったら両方体験してみることをおすすめします。',
  },
]

export default function SuidobashiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '水道橋', url: 'https://biyori-pilates.com/area/suidobashi/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月24日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              ピラティス水道橋・後楽園おすすめ11選<br className="hidden md:block" />
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
              <span className="text-warm-600">水道橋</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="水道橋" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-8">
              本ページでは、水道橋・後楽園エリアとその周辺（飯田橋・神保町・神楽坂・秋葉原）のおすすめピラティススタジオ11選をまとめました。JR中央・総武線水道橋駅や都営三田線水道橋駅から通いやすいスタジオを厳選しています。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">このような方におすすめです</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>水道橋・後楽園・飯田橋・神保町でピラティススタジオを探している</span>
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
                  <span>料金プランを比較したい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>女性専用スタジオやパーソナルレッスンを探している</span>
                </li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">
              以下では、各スタジオの料金・体験レッスン・特徴をご紹介します。
            </p>
          </div>
        </section>

        {/* 最寄り駅・入会金・体験・定休日の早見表（2026-10-24・「水道橋 ピラティス」の受け皿。値は各社の公式店舗ページ） */}
        <section className="py-12 bg-white" id="by-station">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4 text-center">水道橋から通いやすい順の早見表｜最寄り駅・体験・入会金・定休日</h2>
            <p className="text-warm-600 leading-relaxed mb-6 text-sm">
              水道橋駅のとなりの後楽園・春日、都営三田線で1駅の神保町、JR総武線で1駅の飯田橋・2駅の秋葉原の順に並べています。最寄り駅と徒歩分・体験・入会金・定休日は各社の公式店舗ページの表記です（2026年10月24日確認）。公式ページに無い項目は「記載なし」としています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-warm-800 text-white">
                    <th className="px-3 py-3 text-left">スタジオ</th>
                    <th className="px-3 py-3 text-left">最寄り駅（公式表記）</th>
                    <th className="px-3 py-3 text-left">体験</th>
                    <th className="px-3 py-3 text-left">入会金など</th>
                    <th className="px-3 py-3 text-left">定休日</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-warm-200 bg-warm-50"><td className="px-3 py-3">ピラティスミラー 後楽園（18歳以上の女性・入会待ち）</td><td className="px-3 py-3">春日駅A3口 徒歩1分／後楽園駅5番口 徒歩2分</td><td className="px-3 py-3">2,200円（税込・1人1回）</td><td className="px-3 py-3">入会金 11,000円（税込）</td><td className="px-3 py-3">毎週金曜日</td></tr>
                  <tr className="border-b border-warm-200"><td className="px-3 py-3">STUDIO IVY 後楽園店（パーソナル）</td><td className="px-3 py-3">後楽園駅（徒歩分の記載なし）</td><td className="px-3 py-3">4,500円→0円（キャンペーン）</td><td className="px-3 py-3">入会金＋事務手数料 23,300円→体験当日の入会で0円</td><td className="px-3 py-3">記載なし</td></tr>
                  <tr className="border-b border-warm-200 bg-warm-50"><td className="px-3 py-3">zen place pilates 神保町（男女共用）</td><td className="px-3 py-3">神保町駅A7出口 徒歩1分</td><td className="px-3 py-3">マット初回1,000円／マシン初回3,000円</td><td className="px-3 py-3">入会金 22,000円（グレード02・当日入会で無料）</td><td className="px-3 py-3">記載なし（平日8:55〜22:00・土日祝8:00〜20:00）</td></tr>
                  <tr className="border-b border-warm-200"><td className="px-3 py-3">pilates K 神保町店（女性専用）</td><td className="px-3 py-3">神保町駅 徒歩2分</td><td className="px-3 py-3">0円</td><td className="px-3 py-3">初期費用 13,530円（入会金・登録料・施設利用料）</td><td className="px-3 py-3">月曜日</td></tr>
                  <tr className="border-b border-warm-200 bg-warm-50"><td className="px-3 py-3">ピラティススタジオ ゼロ 神保町（パーソナル）</td><td className="px-3 py-3">神保町駅A5出口 徒歩2分</td><td className="px-3 py-3">4,400円（40分）</td><td className="px-3 py-3">入会金 22,000円（10月は体験当日の入会で体験料・入会金無料）</td><td className="px-3 py-3">記載なし</td></tr>
                  <tr className="border-b border-warm-200"><td className="px-3 py-3">zen place pilates 飯田橋（男女共用）</td><td className="px-3 py-3">飯田橋駅B4b出口 徒歩1分／JR飯田橋駅西口 徒歩3分</td><td className="px-3 py-3">マット初回1,000円／マシン初回3,000円</td><td className="px-3 py-3">入会金 33,000円（グレード01・当日入会で無料）</td><td className="px-3 py-3">記載なし（平日9:00〜21:00・土日祝7:30〜17:00）</td></tr>
                  <tr className="border-b border-warm-200 bg-warm-50"><td className="px-3 py-3">URBAN CLASSIC PILATES 飯田橋店（男性も入会可）</td><td className="px-3 py-3">飯田橋駅 徒歩1分</td><td className="px-3 py-3">無料</td><td className="px-3 py-3">施設利用料 税込2,200円（入会時）／運営管理費 月480円（3ヶ月目から）</td><td className="px-3 py-3">日曜日</td></tr>
                  <tr className="border-b border-warm-200"><td className="px-3 py-3">Rintosull 秋葉原店（女性専用）</td><td className="px-3 py-3">JR秋葉原駅 中央改札 徒歩1分</td><td className="px-3 py-3">無料体験会</td><td className="px-3 py-3">入会金・登録金 各5,000円→体験当日の入会で0円</td><td className="px-3 py-3">毎週日曜・第4木曜</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 leading-relaxed mt-4 text-sm">
              水道橋駅から歩いて通うなら後楽園・春日側のピラティスミラーとSTUDIO IVY、乗り換えなしで通うなら都営三田線で1駅の神保町（zen place・pilates K・ゼロ）が候補です。the SILK 神楽坂店・ELEMENT 神楽坂・飯田橋店・CALDO 神楽坂は、今回は公式の店舗ページで値を確認していないため表に入れていません。
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="水道橋・後楽園" />
        <AreaMarketComparison studios={studios} areaName="水道橋・後楽園" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              水道橋・後楽園のおすすめピラティススタジオ11選
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
              水道橋のピラティス料金相場
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
                    <td className="px-4 py-3">8,580円〜13,420円（公式で確認できた月4回・2026年10月24日）</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 6,500円〜（STUDIO IVY）／月4回 37,200円（ゼロ 神保町）／通い放題 39,800円（ELEMENT）</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">0円〜4,400円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              水道橋・後楽園は商業施設やオフィスが集まる繁華街エリアのため、駅近の好立地スタジオが多く、やや高めの料金設定が目立ちます。一方で大手チェーンの進出も多いため、キャンペーンや月額通い放題プランを上手に活用すれば、実質的なコストを抑えることも可能です。近隣の後楽園エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              水道橋・後楽園でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">都営三田線・大江戸線「春日駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  水道橋・後楽園エリアのスタジオは春日駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートをご確認ください。春日駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">繁華街ならではの予約混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  水道橋・後楽園は人が集まる繁華街のため、平日夜（18時〜21時）と土日午前中はレッスン予約が特に集中します。人気クラスは1週間以上前に満席になることもあります。アプリやWebで空き状況をこまめに確認し、キャンセル待ち機能があるスタジオでは積極的にご活用ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  水道橋・後楽園エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ずご確認ください。月の途中入会は日割り計算になるかもご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアのスタジオもあわせて比較する</h3>
                <p className="text-warm-600 leading-relaxed">
                  水道橋・後楽園エリアだけでなく、近隣の<Link href="/area/korakuen/" className="text-warm-700 underline hover:text-warm-900">後楽園</Link>、<Link href="/area/ochanomizu/" className="text-warm-700 underline hover:text-warm-900">御茶ノ水</Link>、<Link href="/area/iidabashi/" className="text-warm-700 underline hover:text-warm-900">飯田橋</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店もご検討ください。
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
                  <strong>水道橋・後楽園エリアの豆知識：</strong>水道橋・後楽園は仕事帰りに立ち寄る方が多いエリアです。荷物が多くなりがちなので、ロッカーの広さやシャワー設備の有無を事前に確認しておくと安心です。ウェアレンタルがあるスタジオなら手ぶらで通えて便利です。
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
                  月額1万円以下から通えるスタジオです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• chocoZAP（月額3,278円・ピラティス込み）</li>
                  <li className="text-warm-700">• URBAN CLASSIC 飯田橋（月4回 税込8,580円〜）</li>
                  <li className="text-warm-700">• zen place 飯田橋/神保町（マット月4回 10,450円／9,625円）</li>
                  <li className="text-warm-700">• ピラティスミラー後楽園（月6回 11,000円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマン指導で効果を実感できます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STUDIO IVY 後楽園（1レッスン6,500円〜）</li>
                  <li className="text-warm-700">• ピラティススタジオ ゼロ（月4回37,200円）</li>
                  <li className="text-warm-700">• ELEMENT 神楽坂・飯田橋（通い放題39,800円）</li>
                  <li className="text-warm-700">• ピラティスミラー（プライベート30分 4,400円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用スタジオ</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間でトレーニングです。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• pilates K 神保町（体験0円）</li>
                  <li className="text-warm-700">• the SILK 神楽坂（パウダールーム充実）</li>
                  <li className="text-warm-700">• Rintosull 秋葉原（LAVA系列）</li>
                  <li className="text-warm-700">• CALDO 神楽坂（ホットヨガも）</li>
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
                週1〜2回から始めることをおすすめします。最低2〜3ヶ月継続で効果を実感できます。ピラティスミラーやzen placeの初心者向けクラスがおすすめです。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイク目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回が目安です。3〜6ヶ月で目に見える変化が期待できます。URBAN CLASSICのレギュラー（通い放題）なら税込12,980円です。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">健康管理目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続することをおすすめします。chocoZAPなら月額3,278円で24時間好きな時に通えます。
              </p>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-white" id="how-to-choose">
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
                  ダイエット、姿勢改善、体幹強化など、目的に応じてスタジオをお選びください。姿勢改善ならピラティススタジオ ゼロ、ボディメイクならpilates KやSTUDIO IVYがおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  セルフ式のchocoZAPなら月額3,278円です。公式で確認できたグループ月4回は8,580円〜13,420円、パーソナルは1レッスン6,500円〜です（2026年10月24日確認）。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  pilates K・URBAN CLASSIC・Rintosull・STUDIO IVY（キャンペーン）は0円、zen placeはマットグループの初回1,000円、ピラティスミラーは2,200円で体験できます（2026年10月24日確認）。まずは2〜3スタジオの体験を比較するのがおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  水道橋駅はJR中央・総武線と都営三田線が利用可能です。後楽園駅は丸ノ内線・南北線、飯田橋駅は5路線が乗り入れています。東京ドーム周辺の文京区・千代田区エリアは交通の便が良く、飯田橋・神保町も隣駅で徒歩圏内です。自宅や職場からの通いやすさでお選びください。
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
              今回は水道橋・後楽園エリアとその周辺のおすすめピラティススタジオ11選をご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              水道橋・後楽園エリアはJR中央・総武線と都営三田線が交差し、飯田橋・神保町・神楽坂も隣駅で徒歩圏内です。東京ドーム近くの文京区・千代田区を中心に、割安なchocoZAPやピラティスミラーから、パーソナル専門のSTUDIO IVYやピラティススタジオ ゼロまで、幅広いニーズに応えるスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              本ページの情報を、スタジオ選びにお役立てください。
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
              初回限定の体験レッスン0円〜3,300円です。<br />
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

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="suidobashi" areaName="水道橋" />

      <RelatedAreas currentSlug="suidobashi" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
