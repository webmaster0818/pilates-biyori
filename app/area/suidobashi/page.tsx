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
  title: '【2026年7月最新】ピラティス水道橋・後楽園おすすめ12選！料金・体験レッスン・マシン対応を比較！',
  description: '水道橋・後楽園エリアのおすすめピラティススタジオ12選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。飯田橋・神保町の近隣スタジオも紹介。',
  keywords: 'ピラティス,水道橋,後楽園,飯田橋,神保町,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスミラー 後楽園',
    image: '/images/studios/pilates-mirror.webp',
    rating: 4.7,
    reviewCount: 24,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '2週間前',
        text: '後楽園駅から徒歩2分で通いやすい。天井に鏡があるので自分のフォームを確認しながらレッスンできるのが良い。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '1ヶ月前',
        text: '月6回11,000円でコスパ最高。7回目以降も1,100円で追加できるので実質通い放題に近い。コナミ運営で安心感もあります。',
      },
      {
        author: 'K.H',
        rating: 4,
        date: '3週間前',
        text: '30分のレッスンが中心なので時間がない方にもぴったり。水道橋からも歩ける距離です。',
      },
    ],
    price: '月会費 11,000円（月6回まで）',
    trial: '体験レッスン 2,200円',
    features: ['コナミ運営', '春日駅徒歩1分', '月6回定額', '天井鏡設計'],
    description: 'コナミスポーツクラブが運営するマシンピラティス専門スタジオ。春日駅A3口から徒歩1分、後楽園駅5番口から徒歩2分。天井に鏡を設置した特徴的な設計で、自分のフォームを確認しながらレッスンできます。月6回11,000円、7回目以降は1回1,100円で追加利用可能。最大6名の少人数制。',
    access: '都営三田線・大江戸線「春日駅」A3口 徒歩1分 / 丸ノ内線・南北線「後楽園駅」5番口 徒歩2分',
    address: '東京都文京区小石川1-1-18 文京ガーデン ザ サウス1階101',
    popularPlan: {
      name: '月会費プラン（月6回）',
      description: '月6回まで定額。7回目以降は1回1,100円で追加OK。',
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
      purpose: ['ボディメイク', '姿勢改善', 'コスパ重視', '短時間トレーニング'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土 8:00〜18:00 / 日 8:00〜19:00',
      closed: '毎週金曜日',
      facilities: ['ロッカー', 'リフォーマー完備', '天井鏡'],
    },
  },
  {
    name: 'STUDIO IVY 後楽園店',
    image: '/images/studios/studio-ivy.webp',
    rating: 4.8,
    reviewCount: 11,
    reviews: [
      {
        author: 'R.N',
        rating: 5,
        date: '1週間前',
        text: '完全パーソナルで自分のペースで集中できます。春日駅から徒歩3分で通いやすい。1回6,250円〜はパーソナルとしてはリーズナブル。',
      },
      {
        author: 'A.H',
        rating: 5,
        date: '2週間前',
        text: 'オーダーメイドのプログラムで身体の変化を実感。インストラクターの知識が豊富で信頼できます。',
      },
      {
        author: 'M.M',
        rating: 4,
        date: '3週間前',
        text: '水道橋で働いているので仕事帰りに通っています。体験で丁寧にカウンセリングしてもらえました。',
      },
    ],
    price: '1回 6,250円〜',
    trial: '体験レッスンあり',
    features: ['パーソナル専門', 'マシンピラティス', '春日駅徒歩3分', '全国展開'],
    description: '全国展開のパーソナルマシンピラティス専門スタジオ。都営三田線・大江戸線「春日駅」より徒歩3分、JR水道橋駅からも徒歩圏内。一人ひとりの体型や目標に合わせたオーダーメイドのトレーニングを提供。月謝制で1レッスン6,250円〜。完全プライベート空間で初心者でも安心。',
    access: '都営三田線・大江戸線「春日駅」徒歩3分 / JR「水道橋駅」徒歩圏内',
    address: '東京都文京区（春日駅徒歩3分・後楽園エリア）',
    popularPlan: {
      name: '月4回コース',
      description: '完全パーソナルのマシンピラティス。1回あたり6,250円〜。',
      price: '月4回 25,000円〜（税込）',
    },
    options: [
      '月2回コース（15,000円〜）',
      '月4回コース（25,000円〜）',
      '月8回コース（48,000円〜）',
      '都度利用（8,800円）',
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
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 13,
    reviews: [
      {
        author: 'T.N',
        rating: 5,
        date: '1週間前',
        text: '飯田橋駅B4b出口から徒歩1分で最高のアクセス。全国のzen placeスタジオも使えるのが便利。マットもマシンも充実。',
      },
      {
        author: 'E.S',
        rating: 5,
        date: '2週間前',
        text: '体験500円〜で気軽に始められました。正統派のピラティスを学べて、インストラクターの質も高い。',
      },
      {
        author: 'H.K',
        rating: 4,
        date: '1ヶ月前',
        text: '水道橋からJR総武線で1駅。男性もOKなので夫婦で通っています。',
      },
    ],
    price: 'マットグループ 月4回 10,450円〜',
    trial: '体験レッスン 500円〜',
    features: ['マット&マシン', '飯田橋駅徒歩1分', '水道橋から1駅', '男性OK'],
    description: '全国125店舗以上展開の大手ピラティススタジオ。飯田橋駅B4b出口から徒歩1分、JR飯田橋駅西口から徒歩3分。水道橋からJR総武線で1駅の好アクセス。マットグループ、マシングループ、プライベートレッスンに対応。全国150スタジオが相互利用可能。',
    access: '地下鉄「飯田橋駅」B4b出口 徒歩1分 / JR「飯田橋駅」西口 徒歩3分 / 水道橋からJR総武線で1駅',
    address: '東京都新宿区揚場町1-1 揚場ビル4F',
    popularPlan: {
      name: 'マットグループ月4回',
      description: 'マットグループレッスン月4回。全国スタジオ相互利用可。',
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
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.7,
    reviewCount: 32,
    reviews: [
      {
        author: 'Y.M',
        rating: 5,
        date: '2週間前',
        text: '神保町駅A7出口から徒歩1分。水道橋駅からも歩ける距離で、仕事帰りに寄りやすい。少人数制のグループレッスンが充実。',
      },
      {
        author: 'K.S',
        rating: 5,
        date: '3週間前',
        text: '飯田橋のスタジオと相互利用できるのが嬉しい。正統派のピラティスメソッドで丁寧に指導してくれます。',
      },
      {
        author: 'M.T',
        rating: 4,
        date: '1ヶ月前',
        text: '入会金は高めだけど、体験当日入会なら無料。マットレッスン1回1,000円は破格。',
      },
    ],
    price: 'マットグループ 月4回 10,450円〜',
    trial: '体験レッスン 500円〜',
    features: ['マット&マシン', '神保町駅徒歩1分', '水道橋から徒歩圏内', '男性OK'],
    description: '全国125店舗以上展開のzen placeの神保町スタジオ。都営三田線・新宿線・半蔵門線「神保町駅」A7出口から徒歩1分。水道橋駅からも徒歩約10分でアクセス可能。マットグループ、マシングループ、プライベートに対応。5〜10名の少人数制レッスン。',
    access: '都営三田線・新宿線・半蔵門線「神保町駅」A7出口 徒歩1分 / JR「水道橋駅」徒歩約10分',
    address: '東京都千代田区神田神保町1-13-2 文銭堂ビル4階',
    popularPlan: {
      name: 'マットグループ月4回',
      description: 'マットグループレッスン月4回。全国スタジオ相互利用可。',
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
    name: 'pilates K 神保町店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.6,
    reviewCount: 136,
    reviews: [
      {
        author: 'A.I',
        rating: 5,
        date: '1週間前',
        text: '女性専用なので安心。神保町駅から徒歩2分でアクセス抜群。マシンピラティスのグループレッスンが充実しています。',
      },
      {
        author: 'N.O',
        rating: 5,
        date: '2週間前',
        text: '体験0円で気軽に始められた。音楽に合わせて行うレッスンが楽しい。水道橋からも歩ける距離。',
      },
      {
        author: 'R.K',
        rating: 4,
        date: '1ヶ月前',
        text: 'レッスンの種類が豊富で飽きない。ただし人気の時間帯は予約が取りにくいことも。',
      },
    ],
    price: 'マンスリー4メンバー 月4回 13,420円〜',
    trial: '体験レッスン 0円',
    features: ['女性専用', '神保町駅徒歩2分', 'マシンピラティス', '体験無料'],
    description: '女性専用マシンピラティス専門スタジオ。神保町駅から徒歩2分、水道橋駅からも徒歩圏内。全店舗リフォーマー完備で、音楽に合わせた楽しいグループレッスンが人気。体験レッスンは0円で気軽にお試し可能。',
    access: '都営三田線・新宿線・半蔵門線「神保町駅」徒歩2分 / JR「水道橋駅」徒歩約10分',
    address: '東京都千代田区神田神保町1-4 クロサワビル4階',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '月4回のマシンピラティスグループレッスン。',
      price: '月4回 13,420円〜（税込）',
    },
    options: [
      'マンスリー4メンバー（月4回 13,420円〜）',
      'マンスリーフルメンバー（通い放題 16,170円〜）',
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
    rating: 4.7,
    reviewCount: 260,
    reviews: [
      {
        author: 'C.M',
        rating: 5,
        date: '1週間前',
        text: '予約不要で30分のサーキット形式。仕事帰りにふらっと立ち寄れるのが最高。飯田橋駅徒歩1分。',
      },
      {
        author: 'S.Y',
        rating: 5,
        date: '3週間前',
        text: '月額9,680円〜で好きなだけ通える。マシンピラティスとファンクショナルトレーニングの組み合わせが効率的。',
      },
      {
        author: 'T.A',
        rating: 4,
        date: '1ヶ月前',
        text: '水道橋から1駅。通い放題プランがあるので週3回以上通う方にはコスパ抜群。',
      },
    ],
    price: '月額 9,680円〜（通い放題あり）',
    trial: '体験レッスンあり',
    features: ['予約不要', '30分サーキット', '飯田橋駅徒歩1分', '水道橋から1駅'],
    description: 'マシンピラティスとファンクショナルトレーニングのサーキット形式。予約不要・1回30分の短時間設計。飯田橋駅から徒歩1分、水道橋からJR総武線で1駅。忙しい方でも気軽に続けられます。',
    access: 'JR・東京メトロ・都営大江戸線「飯田橋駅」徒歩1分 / 水道橋からJR総武線で1駅',
    address: '東京都新宿区揚場町2-16 第2東文堂ビル8F',
    popularPlan: {
      name: '通い放題プラン',
      description: '予約不要・30分サーキットが通い放題。',
      price: '月額 14,080円（税込）',
    },
    options: [
      '月4回プラン（9,680円）',
      '月8回プラン（12,980円）',
      '通い放題プラン（14,080円）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['時短トレーニング', 'ボディメイク', '運動習慣づくり', 'コスパ重視'],
    },
    basicInfo: {
      hours: '平日 9:30〜21:30 / 土祝 9:30〜19:30',
      closed: '日曜日',
      facilities: ['リフォーマー', 'ファンクショナルマシン', '更衣室'],
    },
  },
  {
    name: 'the SILK 神楽坂店',
    image: '/images/studios/the-silk.webp',
    rating: 4.6,
    reviewCount: 247,
    reviews: [
      {
        author: 'M.S',
        rating: 5,
        date: '2週間前',
        text: '女性専用で清潔感のあるスタジオ。パウダールームにReFaのヘアアイロンやドライヤーが完備されていて嬉しい。',
      },
      {
        author: 'Y.K',
        rating: 5,
        date: '1ヶ月前',
        text: '飯田橋駅からも歩ける距離。マシンピラティスの基本から丁寧に教えてもらえます。',
      },
      {
        author: 'K.T',
        rating: 4,
        date: '3週間前',
        text: '音楽に合わせたレッスンが楽しい。水道橋からも2駅程度で通いやすいです。',
      },
    ],
    price: 'グループレッスン 月3回 12,980円〜',
    trial: '体験レッスンあり',
    features: ['女性専用', 'マシンピラティス', 'パウダールーム充実', '飯田橋駅徒歩圏内'],
    description: '女性専用マシンピラティス専門スタジオ。全国42店舗展開。神楽坂エリアに位置し、飯田橋駅からも徒歩圏内。ReFaのヘアアイロン・ドライヤー完備のパウダールームなど設備が充実。音楽と照明を使った独自のレッスンスタイルが特徴。',
    access: '東京メトロ「神楽坂駅」徒歩3分 / JR「飯田橋駅」徒歩圏内',
    address: '東京都新宿区神楽坂（神楽坂駅徒歩3分）',
    popularPlan: {
      name: 'グループ月3回プラン',
      description: 'マシンピラティスグループレッスン月3回。',
      price: '月3回 12,980円（税込）',
    },
    options: [
      '月3回プラン（12,980円）',
      '月4回プラン（15,070円）',
      '通い放題デイ（18,480円）',
      '通い放題フル（20,680円）',
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
    rating: 4.7,
    reviewCount: 27,
    reviews: [
      {
        author: 'J.W',
        rating: 5,
        date: '2週間前',
        text: 'パーソナル指導のマシンピラティスが通い放題なのは他にない。30分で効率的にトレーニングできる。',
      },
      {
        author: 'A.T',
        rating: 5,
        date: '1ヶ月前',
        text: '飯田橋駅から徒歩5分。筋トレとピラティスの両方を受けられるデュアルプランがお気に入り。',
      },
      {
        author: 'N.M',
        rating: 4,
        date: '3週間前',
        text: '水道橋エリアでパーソナルピラティスが通い放題はここだけ。初心者にも丁寧に教えてくれる。',
      },
    ],
    price: 'パーソナル通い放題 月額 39,800円〜',
    trial: '体験レッスンあり',
    features: ['パーソナル通い放題', '30分集中', '飯田橋駅徒歩5分', '筋トレ&ピラティス'],
    description: '飯田橋・神楽坂エリア初の通い放題パーソナルマシンピラティスジム。1対1の指導で30分の集中トレーニング。筋トレとピラティスの両方が受けられるデュアルプランも人気。水道橋からも2駅圏内。',
    access: '「飯田橋駅」徒歩5分 / 「神楽坂駅」徒歩5分',
    address: '東京都新宿区筑土八幡町2-5 梅野産業ビル4F',
    popularPlan: {
      name: 'マシンピラティス通い放題プラン',
      description: 'パーソナルマシンピラティスが月額通い放題。',
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
    rating: 4.5,
    reviewCount: 240,
    reviews: [
      {
        author: 'R.T',
        rating: 5,
        date: '2週間前',
        text: 'ホットヨガがメインだけどピラティスのレッスンもあり。週3枠ほどピラティスプログラムがあります。飯田橋からも通える。',
      },
      {
        author: 'S.H',
        rating: 4,
        date: '1ヶ月前',
        text: '料金が手頃で、ホットヨガもピラティスも両方楽しめるのがいい。施設がきれい。',
      },
      {
        author: 'M.I',
        rating: 4,
        date: '3週間前',
        text: '牛込神楽坂駅から徒歩3分。水道橋エリアでヨガもピラティスも楽しみたい方におすすめ。',
      },
    ],
    price: 'フルタイム 月額 11,000円〜',
    trial: '体験レッスンあり',
    features: ['ホットヨガ&ピラティス', '女性専用', '牛込神楽坂駅徒歩3分', '手頃な料金'],
    description: '全国展開のホットヨガスタジオ。ピラティスプログラムも週に複数回実施。牛込神楽坂駅から徒歩3分、飯田橋駅からも徒歩8分。水道橋エリアでホットヨガもピラティスも両方楽しみたい方に最適。',
    access: '都営大江戸線「牛込神楽坂駅」A3出口 徒歩3分 / JR「飯田橋駅」B3出口 徒歩8分',
    address: '東京都新宿区神楽坂5-1-4 神楽坂テラスビル3F',
    popularPlan: {
      name: 'フルタイム会員',
      description: 'ホットヨガ・ピラティスレッスンが受け放題。',
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
    image: '/images/studios/rintosull.webp',
    rating: 4.5,
    reviewCount: 179,
    reviews: [
      {
        author: 'L.S',
        rating: 5,
        date: '2週間前',
        text: 'LAVA系列のマシンピラティス専門スタジオ。秋葉原駅から徒歩1分で水道橋からもJR総武線で2駅。レッスンの質が高い。',
      },
      {
        author: 'H.M',
        rating: 4,
        date: '1ヶ月前',
        text: '女性専用で安心。ホットヨガのLAVA会員だと割引もある。リフォーマー中心のグループレッスン。',
      },
      {
        author: 'A.N',
        rating: 4,
        date: '3週間前',
        text: '後楽園エリアから少し足を伸ばして通っています。プログラムが多彩で飽きない。',
      },
    ],
    price: 'マンスリーメンバー 月4回 10,800円〜',
    trial: '体験レッスンあり',
    features: ['LAVA系列', '女性専用', '秋葉原駅徒歩1分', '水道橋から2駅'],
    description: 'ホットヨガLAVAが運営するマシンピラティス専門スタジオ。秋葉原駅中央口から徒歩1分。水道橋からJR総武線で2駅。女性専用で、リフォーマーを使ったグループレッスンが中心。全国240店舗以上展開。',
    access: 'JR「秋葉原駅」中央口 徒歩1分 / 水道橋からJR総武線で2駅',
    address: '東京都千代田区神田佐久間町1-8-4 アルテール秋葉原3F',
    popularPlan: {
      name: 'マンスリーメンバー月4回',
      description: 'マシンピラティスグループレッスン月4回。',
      price: '月4回 10,800円〜（税込）',
    },
    options: [
      '月4回プラン（10,800円〜）',
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
    rating: 4.9,
    reviewCount: 9,
    reviews: [
      {
        author: 'T.K',
        rating: 5,
        date: '1週間前',
        text: 'PHIピラティスの資格を持つトレーナーによる本格的なパーソナル指導。姿勢改善に特化していて確かな効果を実感。',
      },
      {
        author: 'M.O',
        rating: 5,
        date: '2週間前',
        text: '神保町駅から徒歩2分。小規模だからこそ一人ひとりに合わせた丁寧な指導が受けられます。',
      },
      {
        author: 'K.I',
        rating: 5,
        date: '1ヶ月前',
        text: '水道橋から都営三田線で1駅。大手にはない専門性の高さが魅力。姿勢の根本改善を目指す方に。',
      },
    ],
    price: 'パーソナル 1回 9,900円〜',
    trial: '体験レッスンあり',
    features: ['PHIピラティス認定', 'パーソナル専門', '神保町駅徒歩2分', '姿勢改善特化'],
    description: 'PHIピラティスの専門知識を持つトレーナーによるパーソナルピラティススタジオ。神保町駅から徒歩2分、水道橋から都営三田線で1駅。姿勢改善に特化した確固たるメソッドで、根本的な体の変化を目指します。',
    access: '都営三田線・新宿線・半蔵門線「神保町駅」徒歩2分 / 都営三田線「水道橋駅」から1駅',
    address: '東京都千代田区神田神保町（神保町駅徒歩2分）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: 'PHI認定トレーナーによる完全マンツーマン指導。',
      price: '1回 9,900円〜（税込）',
    },
    options: [
      'パーソナル1回（9,900円〜）',
      '回数券5回（45,000円〜）',
      '回数券10回（85,000円〜）',
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
    answer: '大丈夫です！水道橋・後楽園エリアのスタジオは初心者歓迎のところが多いです。ピラティスミラーやzen placeなどは初心者向けクラスが充実しており、基礎から丁寧に指導してくれます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスはリフォーマーなどの専用マシンを使います。マシンはバネの力で動きをサポートしてくれるため、初心者にもおすすめです。',
  },
  {
    question: '水道橋エリアの料金相場は？',
    answer: 'グループレッスンは月4〜6回で9,680円〜15,400円程度。パーソナルは1回6,250円〜9,900円。chocoZAPなら月額3,278円でセルフ式ピラティスが利用できます。体験は0円〜3,300円です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回からスタートがおすすめ。慣れてきたら週2〜3回に増やすと効果的です。URBAN CLASSICやchocoZAPなら通い放題プランで毎日でも通えます。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルが鍛えられ基礎代謝が上がることで太りにくい体質になります。最低2〜3ヶ月は継続しましょう。食事管理と合わせるとより効果的です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装（Tシャツとレギンスなど）、タオル、飲み物があればOK。スタジオによっては靴下も必要です。手ぶらOKのスタジオもあるので事前に確認しましょう。',
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
    answer: '個人差はありますが、2ヶ月を過ぎた頃から姿勢の変化や体の軽さを実感する方が多いです。見た目の変化は3〜6ヶ月が目安です。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめ？',
    answer: 'パーソナルは自分の体に合ったオーダーメイドの指導で効果が出やすいです。グループは安く楽しく仲間と一緒に続けられます。迷ったら両方体験してみましょう。',
  },
]

export default function SuidobashiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '水道橋', url: 'https://pilates-biyori.com/area/suidobashi/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月11日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス水道橋・後楽園おすすめ12選！<br className="hidden md:block" />
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
              「水道橋・後楽園でピラティスを始めたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              「コスパの良いスタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              「飯田橋や神保町の近隣スタジオも気になる」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、水道橋・後楽園エリアとその周辺（飯田橋・神保町・神楽坂・秋葉原）のおすすめピラティススタジオ12選をまとめました。JR中央・総武線水道橋駅や都営三田線水道橋駅から通いやすいスタジオを厳選しています。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>水道橋・後楽園・飯田橋・神保町でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>コスパの良いスタジオがいい</span>
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
              それではさっそく見ていきましょう！
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="水道橋・後楽園" />
        <AreaMarketComparison studios={studios} areaName="水道橋・後楽園" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              水道橋・後楽園のおすすめピラティススタジオ12選
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
              水道橋のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">6,250円〜39,800円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 9,900円〜39,800円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">500円〜2,200円</td>
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
                  水道橋・後楽園エリアのスタジオは春日駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。春日駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">繁華街ならではの予約混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  水道橋・後楽園は人が集まる繁華街のため、平日夜（18時〜21時）と土日午前中はレッスン予約が特に集中します。人気クラスは1週間以上前に満席になることも。アプリやWebで空き状況をこまめにチェックし、キャンセル待ち機能があるスタジオでは積極的に活用しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  水道橋・後楽園エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ず確認しましょう。月の途中入会は日割り計算になるかも要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  水道橋・後楽園エリアだけでなく、近隣の<Link href="/area/korakuen/" className="text-warm-700 underline hover:text-warm-900">後楽園</Link>、<Link href="/area/ochanomizu/" className="text-warm-700 underline hover:text-warm-900">御茶ノ水</Link>、<Link href="/area/iidabashi/" className="text-warm-700 underline hover:text-warm-900">飯田橋</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが定番。ジーンズやスカートはNG。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml程度）</strong>：レッスン中の水分補給に。自販機がないスタジオもあるため持参が安心。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用。マシンに敷くタオルはスタジオで用意されることが多い。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>靴下（滑り止め付き推奨）</strong>：マシンピラティスでは靴下着用が必須のスタジオが多数。グリップソックスがベスト。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。ピラティスは脚を大きく動かすポーズが多いため、ストレッチの効く素材が必須です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>の方が、インストラクターがフォームを確認しやすく、効果的な指導を受けられます。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオも。手ぶらで体験可能な場合もあるので事前に確認しましょう。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。マシンに引っかかる恐れがあるため、ピアス・ネックレス・腕時計はロッカーに預けるのが安全です。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>水道橋・後楽園エリアの豆知識：</strong>水道橋・後楽園は仕事帰りに立ち寄る方が多いエリアです。荷物が多くなりがちなので、ロッカーの広さやシャワー設備の有無を事前に確認しておくと安心。ウェアレンタルがあるスタジオなら手ぶらで通えて便利です。
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
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額1万円以下から通えるスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• chocoZAP（月額3,278円・ピラティス込み）</li>
                  <li className="text-warm-700">• URBAN CLASSIC 飯田橋（月額9,680円〜）</li>
                  <li className="text-warm-700">• zen place 飯田橋/神保町（マット月4回 10,450円〜）</li>
                  <li className="text-warm-700">• ピラティスミラー後楽園（月6回 11,000円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマン指導で効果を実感。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STUDIO IVY 後楽園（1回6,250円〜）</li>
                  <li className="text-warm-700">• ピラティススタジオ ゼロ（1回9,900円〜）</li>
                  <li className="text-warm-700">• ELEMENT 神楽坂・飯田橋（通い放題39,800円）</li>
                  <li className="text-warm-700">• ピラティスミラー（プライベート30分 4,400円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用スタジオ</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間でトレーニング。
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
                週1〜2回からスタート。最低2〜3ヶ月継続で効果を実感。ピラティスミラーやzen placeの初心者向けクラスがおすすめ。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイク目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回がおすすめ。3〜6ヶ月で目に見える変化が期待。URBAN CLASSICの通い放題プランなら通い放題14,080円。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">健康管理目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続。chocoZAPなら月額3,278円で24時間好きな時に通えます。
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
                  ダイエット、姿勢改善、体幹強化など、目的に応じてスタジオを選びましょう。姿勢改善ならピラティススタジオ ゼロ、ボディメイクならpilates KやSTUDIO IVYがおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  セルフ式のchocoZAPなら月額3,278円。グループ月4〜6回で9,680円〜15,400円、パーソナルは1回6,250円〜9,900円が水道橋エリアの相場です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  pilates Kの体験0円をはじめ、zen placeは500円〜、ピラティスミラーは2,200円で体験できます。まずは2〜3スタジオの体験を比較するのがおすすめ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  水道橋駅はJR中央・総武線と都営三田線が利用可能。後楽園駅は丸ノ内線・南北線、飯田橋駅は5路線が乗り入れ。東京ドーム周辺の文京区・千代田区エリアは交通の便が良く、飯田橋・神保町も隣駅で徒歩圏内です。自宅や職場からの通いやすさで選びましょう。
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
              今回は水道橋・後楽園エリアとその周辺のおすすめピラティススタジオ12選をご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              水道橋・後楽園エリアはJR中央・総武線と都営三田線が交差し、飯田橋・神保町・神楽坂も隣駅で徒歩圏内。東京ドーム近くの文京区・千代田区を中心に、コスパ抜群のchocoZAPやピラティスミラーから、パーソナル専門のSTUDIO IVYやピラティススタジオ ゼロまで、幅広いニーズに応えるスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              ぜひ自分に合うピラティススタジオを見つけてくださいね。
            </p>
            <p className="text-warm-700 font-medium text-center">
              あなたにぴったりのスタジオが見つかることを願っています。
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
              初回限定の体験レッスン0円〜3,300円。<br />
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

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="suidobashi" areaName="水道橋" />

      <RelatedAreas currentSlug="suidobashi" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
