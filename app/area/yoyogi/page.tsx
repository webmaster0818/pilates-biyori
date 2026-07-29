import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/yoyogi/' },
  title: '【2026年7月最新】ピラティス代々木おすすめ7選！人気スタジオの料金プランを簡単比較！',
  description: '代々木・南新宿エリアのおすすめピラティススタジオ7選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,代々木,南新宿,新宿,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 新宿南口スタジオ',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 32,
    reviews: [
      {
        author: 'K.S',
        rating: 5,
        date: '1週間前',
        text: 'JR代々木駅から徒歩8分、新宿駅ミライナタワー改札から徒歩3分。マット・マシン・プライベートの3タイプが選べて、全国150店舗以上で他店利用可能なのが便利。',
      },
      {
        author: 'Y.N',
        rating: 5,
        date: '2週間前',
        text: 'グループ体験が1,000円で気軽に試せました。インストラクターがピラティス専門で20年以上の実績があり、指導の質が高い。男性もOKなので夫婦で通っています。',
      },
      {
        author: 'A.M',
        rating: 4,
        date: '3週間前',
        text: '朝7時から営業しているので出勤前に通えます。体験当日入会で入会金無料のキャンペーンがあるのも嬉しい。',
      },
    ],
    price: '月4回 10,450円〜',
    trial: 'グループ体験 1,000円',
    features: ['新宿駅徒歩3分', '代々木駅徒歩8分', '男性OK', '全国相互利用'],
    description: 'ピラティス専門の大手スタジオ。新宿駅ミライナタワー改札から徒歩3分、代々木駅からも徒歩圏内。マットグループ・マシングループ・プライベートの3タイプから選べる。全国150店舗以上で相互利用可能で、ライフスタイルに合わせて通いやすい。',
    access: 'JR「新宿駅」ミライナタワー改札 徒歩3分 / 東京メトロ「新宿三丁目駅」E6出口 徒歩1分 / JR「代々木駅」徒歩8分',
    address: '東京都新宿区新宿4丁目（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'フリープラン（マットグループ）',
      description: 'マットグループレッスン通い放題。全国店舗で相互利用可能。',
      price: '月額 16,940円（税込）',
    },
    options: [
      '月4回プラン（10,450円〜）',
      'マシングループ体験（3,000円）',
      'プライベートレッスン（体験 9,900円）',
      '体験当日入会で入会金無料',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'ラダーバレル', 'マット', 'ロッカー'],
    },
  },
  {
    name: 'the SILK 新宿店',
    image: '/images/studios/the-silk.webp',
    rating: 4.7,
    reviewCount: 371,
    reviews: [
      {
        author: 'E.T',
        rating: 5,
        date: '1週間前',
        text: '新宿西口駅D5出口から徒歩1分で駅近。女性専用で清潔感のあるスタジオ。音楽に合わせたリフォーマーレッスンが楽しくて、あっという間に時間が過ぎます。',
      },
      {
        author: 'N.K',
        rating: 5,
        date: '2週間前',
        text: '手ぶらで無料体験できるのが嬉しい。ウェア・タオル無料貸出、ウォーターサーバーも完備。体験者の8割がピラティス未経験者なので初心者でも安心。',
      },
      {
        author: 'R.S',
        rating: 4,
        date: '3週間前',
        text: '月3回12,980円〜と始めやすい。仕事帰りに気軽に通えるのが魅力。スタッフも親切で丁寧に教えてくれます。',
      },
    ],
    price: '月3回 12,980円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', '新宿西口駅徒歩1分', '手ぶら体験OK', '初心者歓迎'],
    description: '女性専用マシンピラティススタジオ。都営大江戸線新宿西口駅D5出口から徒歩1分。音楽のリズムに合わせた独自のレッスンスタイルで、初心者でも楽しく続けられる。手ぶらで無料体験可能。',
    access: '都営大江戸線「新宿西口駅」D5出口 徒歩1分 / JR「新宿駅」西口 徒歩5分',
    address: '東京都新宿区西新宿7-1-8 ヒノデビル6階',
    popularPlan: {
      name: 'Standard4（月4回）',
      description: '女性専用マシンピラティス月4回。音楽に合わせた楽しいレッスン。',
      price: '月4回 15,070円（税込）',
    },
    options: [
      'Light3（月3回 12,980円）',
      'Full（毎日1回 20,680円）',
      'Full Day（18,480円）',
      '体験・入会金・登録手数料 無料キャンペーンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '7:30〜21:30',
      closed: '年末年始',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム', 'ウォーターサーバー'],
    },
  },
  {
    name: 'ピラティスK 新宿店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.7,
    reviewCount: 113,
    reviews: [
      {
        author: 'M.H',
        rating: 5,
        date: '1週間前',
        text: '新宿三丁目駅から徒歩1分！女性専用マシンピラティス専門。音楽に合わせたリフォーマーレッスンが楽しい。部位別ボディメイクプログラムが充実しています。',
      },
      {
        author: 'S.Y',
        rating: 5,
        date: '2週間前',
        text: '体験2,000円で気軽に試せました。月4回13,420円〜とコスパも良い。予約システムが使いやすくて、スムーズに通えています。',
      },
      {
        author: 'R.A',
        rating: 4,
        date: '3週間前',
        text: '平日は10時から22時まで営業で仕事帰りにも通える。マシンの台数が多く予約が取りやすいのが嬉しい。',
      },
    ],
    price: '月4回 13,420円〜',
    trial: '体験レッスン 2,000円',
    features: ['女性専用', '新宿三丁目駅徒歩1分', '部位別プログラム', 'マシン専門'],
    description: '女性専用マシンピラティス専門スタジオ。新宿三丁目駅から徒歩1分。音楽に合わせた楽しいレッスンと部位別ボディメイクプログラムが充実。強度や目的に合わせて選べるクラスが豊富。',
    access: '東京メトロ「新宿三丁目駅」徒歩1分 / JR「新宿駅」東口 徒歩5分',
    address: '東京都新宿区新宿3丁目（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マンスリー4メンバー（月4回）',
      description: '女性専用マシンピラティス月4回。部位別プログラムも選べる。',
      price: '月4回 13,420円（税込）',
    },
    options: [
      'マンスリーフルメンバー（通い放題 16,170円）',
      'マンスリーデイメンバー（14,520円）',
      '追加受講（1回 2,200円）',
      '入会金 5,500円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '月〜金 10:00-15:00,17:30-22:00 / 土祝 10:00-19:00 / 日 10:00-17:30',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'パウダールーム'],
    },
  },
  {
    name: 'Mapila（マピラ）新宿店',
    image: '/images/studios/mapila-shinjuku.webp',
    rating: 4.6,
    reviewCount: 12,
    reviews: [
      {
        author: 'H.K',
        rating: 5,
        date: '1週間前',
        text: '新宿三丁目駅E6出口直結でアクセス抜群。月額8,800円〜と代々木・新宿エリアでは最安クラス。マシンピラティスとホットヨガの両方が楽しめるのが嬉しい。',
      },
      {
        author: 'T.M',
        rating: 4,
        date: '2週間前',
        text: '体験当日入会で事務手数料が無料に。ウェア上下・バスタオル・ピラティス用靴下付きの体験セットが便利でした。',
      },
      {
        author: 'A.S',
        rating: 5,
        date: '3週間前',
        text: '土日は朝8:30からオープンしているので、休日の朝活にぴったり。平日は22:30まで営業で仕事帰りも余裕。',
      },
    ],
    price: '月額 8,800円〜',
    trial: '体験レッスンあり',
    features: ['新宿三丁目駅直結', '月額8,800円〜', 'ホットヨガ併設', '手ぶら体験OK'],
    description: 'マシンピラティスとホットヨガを併設したスタジオ。新宿三丁目駅E6出口直結という抜群のアクセス。月額8,800円〜と代々木・新宿エリアでは最安クラスの料金設定。体験はウェア・タオル・靴下付きで手ぶらOK。',
    access: '東京メトロ「新宿三丁目駅」E6出口直結 / JR「新宿駅」東南口 徒歩5分',
    address: '東京都新宿区新宿4-2-23 新四curumuビルB2F',
    popularPlan: {
      name: 'マシンピラティス月4回',
      description: 'マシンピラティスのグループレッスン月4回。ホットヨガも利用可能。',
      price: '月額 8,800円〜（税込）',
    },
    options: [
      '月4回プラン（8,800円〜）',
      '通い放題プランあり',
      '体験当日入会で事務手数料無料',
      '別途営業管理費 月480円',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', 'ダイエット', 'リフレッシュ', '運動不足解消'],
    },
    basicInfo: {
      hours: '月〜金 10:00-22:30 / 土日 8:30-19:30',
      closed: '不定休',
      facilities: ['リフォーマーマシン', 'ホットヨガスタジオ', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Rintosull（リントスル）新宿西口駅前店',
    image: '/images/studios/rintosull.webp',
    rating: 4.6,
    reviewCount: 166,
    reviews: [
      {
        author: 'Y.T',
        rating: 5,
        date: '1週間前',
        text: '新宿駅から徒歩3分、新宿西口駅から徒歩2分。姿勢診断付きの無料体験レッスンがあり、自分の体の状態を知ることから始められる。',
      },
      {
        author: 'M.S',
        rating: 4,
        date: '2週間前',
        text: 'マシンピラティスだけでなくホットヨガやキックボクシングなど多彩なクラスがあるのが魅力。飽きずに続けられます。',
      },
      {
        author: 'K.A',
        rating: 5,
        date: '3週間前',
        text: 'LAVA系列なので安心感がある。スタッフの対応も丁寧で、初心者でも安心してレッスンを受けられました。',
      },
    ],
    price: '月額 9,800円〜',
    trial: '体験レッスン 無料（姿勢診断付き）',
    features: ['新宿駅徒歩3分', '姿勢診断付き体験', '多彩なクラス', 'LAVA系列'],
    description: 'LAVA系列のマシンピラティススタジオ。新宿駅から徒歩3分。マシンピラティスに加え、ホットヨガやキックボクシングなど多彩なクラスを提供。姿勢診断付きの無料体験レッスンで自分の体の状態を知ることから始められる。',
    access: 'JR「新宿駅」西口 徒歩3分 / 都営大江戸線「新宿西口駅」徒歩2分',
    address: '東京都新宿区西新宿1-5-11 新宿三葉ビル4F',
    popularPlan: {
      name: 'マシンピラティス月4回',
      description: 'マシンピラティスのグループレッスン月4回。姿勢診断付き。',
      price: '月額 9,800円〜（税込）',
    },
    options: [
      '月4回プラン（9,800円〜）',
      '通い放題プランあり',
      'ホットヨガ・キックボクシングも利用可能',
      '体験当日入会で入会金無料',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['姿勢改善', 'ボディメイク', 'ダイエット', '運動不足解消'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', 'ホットヨガスタジオ', '更衣室', 'ロッカー', 'シャワー'],
    },
  },
  {
    name: 'exeed Pilates studio 新宿・代々木店',
    image: '/images/studios/exeed-pilates-yoyogi.webp',
    rating: 4.7,
    reviewCount: 14,
    reviews: [
      {
        author: 'C.N',
        rating: 5,
        date: '1週間前',
        text: '代々木駅から徒歩4分、南新宿駅から徒歩2分。完全個室のプライベートレッスンで、人目を気にせず集中できる。理学療法士が監修したプログラムで安心。',
      },
      {
        author: 'H.Y',
        rating: 5,
        date: '2週間前',
        text: 'ピラティスとパーソナルトレーニングの両方ができるので効率的。朝8時から夜23時まで営業しているのも嬉しい。',
      },
      {
        author: 'R.T',
        rating: 4,
        date: '3週間前',
        text: 'リフォーマーを使った本格的なマシンピラティスが体験できる。完全個室なので他の人と接触がなく、初心者でも恥ずかしくない。',
      },
    ],
    price: 'パーソナル 月8回 52,800円〜',
    trial: '体験レッスンあり',
    features: ['完全個室', '代々木駅徒歩4分', '理学療法士監修', '23時まで営業'],
    description: '完全個室のマシンピラティス専門パーソナルスタジオ。代々木駅から徒歩4分、南新宿駅から徒歩2分。理学療法士が監修した安心のプログラム。ピラティスとパーソナルトレーニングの両方に対応。朝8時から夜23時まで営業。',
    access: 'JR「代々木駅」北口 徒歩4分 / 小田急線「南新宿駅」徒歩2分 / JR「新宿駅」南口 徒歩5分',
    address: '東京都渋谷区代々木2-26-2 第2桑野ビル3-C',
    popularPlan: {
      name: 'パーソナル月8回プラン',
      description: '完全個室でのマンツーマンマシンピラティス月8回。',
      price: '月8回 52,800円〜（税込・1回あたり約6,600円）',
    },
    options: [
      '月4回プランあり',
      '月8回プラン（52,800円〜）',
      'ピラティス＋パーソナルトレーニング対応',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['姿勢改善', 'リハビリ', '体幹強化', 'ボディメイク'],
    },
    basicInfo: {
      hours: '8:00〜23:00',
      closed: '月曜日',
      facilities: ['リフォーマー', '完全個室', '更衣室'],
    },
  },
  {
    name: 'Studio Forward（スタジオフォワード）代々木',
    image: '/images/studios/studio-forward-yoyogi.webp',
    rating: 4.6,
    reviewCount: 12,
    reviews: [
      {
        author: 'T.K',
        rating: 5,
        date: '1週間前',
        text: '代々木駅北口から徒歩4分、南新宿駅から徒歩2分。40代以上の男性でも通いやすいピラティス専門スタジオ。腰痛・肩こりの改善を実感。',
      },
      {
        author: 'M.O',
        rating: 4,
        date: '2週間前',
        text: '年中無休で朝8時から夜22時まで営業。仕事帰りでもゆっくり通える。プライベートレッスンで自分のペースで進められるのが良い。',
      },
      {
        author: 'S.K',
        rating: 5,
        date: '3週間前',
        text: '体験レッスン60分4,000円で内容も充実。加圧トレーニングも併設しているので、ピラティスと組み合わせて効率的にトレーニングできる。',
      },
    ],
    price: 'プライベート 1回 8,000円〜',
    trial: '体験レッスン 4,000円（60分）',
    features: ['代々木駅徒歩4分', '男性歓迎', '年中無休', '加圧トレーニング併設'],
    description: '40代以上の方に人気のプライベート・少人数制ピラティススタジオ。代々木駅北口から徒歩4分。ピラティスマシン完備で、加圧トレーニングも併設。腰痛・肩こり改善、健康維持を目的とする方に最適。年中無休で朝8時から夜22時まで営業。',
    access: 'JR「代々木駅」北口 徒歩4分 / 小田急線「南新宿駅」徒歩2分 / 都営新宿線「新宿駅」8番出口 徒歩6分',
    address: '東京都渋谷区代々木2-27-13 オカダマンション5E',
    popularPlan: {
      name: 'プライベートレッスン',
      description: 'マンツーマンでのピラティスレッスン。一人ひとりに合わせたプログラム。',
      price: '1回 8,000円〜（税込）',
    },
    options: [
      'プライベートレッスン（1回 8,000円〜）',
      '加圧トレーニング併設',
      '体験レッスン 60分 4,000円',
      '回数券あり',
    ],
    userProfile: {
      ageRange: '40代〜60代が中心',
      genderRatio: '男性60% / 女性40%',
      purpose: ['腰痛改善', '肩こり改善', '健康維持', '体幹強化'],
    },
    basicInfo: {
      hours: '8:00〜22:00',
      closed: '年中無休',
      facilities: ['リフォーマー', '加圧トレーニング器具', '更衣室'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！代々木エリアのスタジオはほとんどが初心者歓迎。the SILKは体験者の約8割がピラティス未経験者。zen placeも4段階のレベル分けで安心です。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。代々木エリアはマシン専門スタジオが充実しています。',
  },
  {
    question: '代々木のピラティスの料金相場は？',
    answer: 'グループレッスンは月4回で8,800円〜15,070円程度。Mapilaが月額8,800円〜で最安、zen placeが月4回10,450円〜、ピラティスKが月4回13,420円〜。パーソナルはexeedが月8回52,800円〜。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1-2回がおすすめ。慣れたら週2-3回に。大切なのは継続すること。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2-3ヶ月の継続が大切です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOK。the SILKは手ぶらで体験可能（ウェア・タオル無料貸出）。Mapilaもウェア・タオル・靴下付き体験セットあり。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化・姿勢改善に特化。ヨガは柔軟性とリラックス重視。Mapilaはマシンピラティスとホットヨガの両方が楽しめます。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'zen place新宿南口、Rintosull新宿西口、exeed代々木、Studio Forward代々木は男性もOK。the SILKとピラティスKは女性専用です。',
  },
  {
    question: '無料で体験できるスタジオは？',
    answer: 'the SILKとRintosullは無料体験あり。zen placeはグループ体験1,000円。ピラティスKは体験2,000円。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
]

export default function YoyogiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '代々木', url: 'https://pilates-biyori.com/area/yoyogi/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月29日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス代々木おすすめ7選！<br className="hidden md:block" />
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
              <span className="text-warm-600">代々木</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="代々木" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「代々木で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、代々木・南新宿エリアでおすすめのピラティススタジオ7選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>代々木・南新宿エリアでピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>無料体験や格安体験のスタジオを知りたい</span>
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
              それではさっそく見ていきましょう！
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="代々木" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              代々木のおすすめピラティススタジオ7選
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
              代々木のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">8,000円〜52,800円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 6,600円〜52,800円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜4,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              代々木は商業施設やオフィスが集まる繁華街エリアのため、駅近の好立地スタジオが多く、やや高めの料金設定が目立ちます。一方で大手チェーンの進出も多いため、キャンペーンや月額通い放題プランを上手に活用すれば、実質的なコストを抑えることも可能です。近隣の新宿エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              代々木でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR「新宿駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  代々木エリアのスタジオは新宿駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。新宿駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">繁華街ならではの予約混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  代々木は人が集まる繁華街のため、平日夜（18時〜21時）と土日午前中はレッスン予約が特に集中します。人気クラスは1週間以上前に満席になることも。アプリやWebで空き状況をこまめにチェックし、キャンセル待ち機能があるスタジオでは積極的に活用しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  代々木エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ず確認しましょう。月の途中入会は日割り計算になるかも要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  代々木エリアだけでなく、近隣の<Link href="/area/shinjuku/" className="text-warm-700 underline hover:text-warm-900">新宿</Link>、<Link href="/area/yoyogi-uehara/" className="text-warm-700 underline hover:text-warm-900">代々木上原</Link>、<Link href="/area/harajuku/" className="text-warm-700 underline hover:text-warm-900">原宿</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>代々木エリアの豆知識：</strong>代々木は仕事帰りに立ち寄る方が多いエリアです。荷物が多くなりがちなので、ロッカーの広さやシャワー設備の有無を事前に確認しておくと安心。ウェアレンタルがあるスタジオなら手ぶらで通えて便利です。
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
                  月額1万円以下で通えるスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Mapila（月額 8,800円〜）</li>
                  <li className="text-warm-700">• Rintosull（月額 9,800円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK 新宿（体験無料）</li>
                  <li className="text-warm-700">• ピラティスK 新宿（月4回 13,420円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  駅から徒歩3分以内。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK（新宿西口駅 徒歩1分）</li>
                  <li className="text-warm-700">• ピラティスK（新宿三丁目駅 徒歩1分）</li>
                  <li className="text-warm-700">• Rintosull（新宿西口駅 徒歩2分）</li>
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
                週1-2回からスタート。最低2-3ヶ月継続で効果を実感。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回がおすすめ。3-6ヶ月で目に見える変化。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続。
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
                  グループレッスン中心。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Mapila（8,800円〜/月4回）</li>
                  <li>• Rintosull（9,800円〜/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン専門スタジオ。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place（10,450円〜）</li>
                  <li>• the SILK（12,980円〜/月3回）</li>
                  <li>• ピラティスK（13,420円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 16,000〜21,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">通い放題</p>
                <p className="text-sm text-warm-600 mb-4">
                  毎日通いたい方。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（16,170円/通い放題）</li>
                  <li>• the SILK（20,680円/毎日1回）</li>
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
                  ダイエット、姿勢改善、体幹強化など目的によって最適なスタジオは変わります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  代々木エリアの料金相場はグループ月4回で8,800円〜15,070円。入会金やキャンペーンも確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  the SILKとRintosullは無料体験あり。zen placeは1,000円、ピラティスKは2,000円で体験可能。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  代々木はJR・小田急線・都営大江戸線・都営新宿線が利用可能。新宿駅からも徒歩圏内のスタジオが多く、通勤帰りにも便利です。
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
              今回は代々木エリアのおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では代々木・南新宿エリアにあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。
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
              初回限定の体験レッスン無料〜4,000円。<br />
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
        {/* boost-nav-202606 */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-warm-900 mb-3">📍 近隣エリア・料金データで比較する</h2>
              <p className="text-warm-600 text-sm mb-4">通勤・生活圏のスタジオもあわせて比べると、自分に合った1校が見つかりやすくなります。</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/area/yoyogi-uehara/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">代々木上原</Link>
                <Link href="/articles/pilates-ryokin-hakusho/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国ピラティス料金白書2026</Link>
              </div>
            </div>
          </div>
        </section>


      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="yoyogi" areaName="代々木" />

      <RelatedAreas currentSlug="yoyogi" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
