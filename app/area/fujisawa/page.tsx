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
  alternates: { canonical: 'https://biyori-pilates.com/area/fujisawa/' },
  title: '【2026年7月最新】藤沢のピラティス｜初心者OK・無料体験で選ぶ料金比較',
  description: '藤沢エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,藤沢,湘南,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 藤沢',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 32,
    reviews: [
      {
        author: 'M.S',
        rating: 5,
        date: '2週間前',
        text: '藤沢駅南口から徒歩2分！全国150以上のスタジオが他店利用可能。マット・マシン・プライベートすべて対応。体験当日入会で入会金無料でした。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '1ヶ月前',
        text: 'マットグループ月4回9,625円からとリーズナブル。リフォーマー以外にチェアやキャデラックなど豊富なマシン完備。男性もOK。',
      },
      {
        author: 'K.N',
        rating: 4,
        date: '3週間前',
        text: '平日は22時まで営業で仕事帰りにも通える。江ノ島や辻堂エリアからもアクセスしやすい。',
      },
    ],
    price: '月4回 9,625円〜',
    trial: '体験レッスン 500円〜',
    features: ['マシン完備', '男性OK', '藤沢駅徒歩2分', '全国相互利用可'],
    description: '全国150以上のスタジオを展開する国内最大級のピラティス専門スタジオ。JR東海道線・小田急江ノ島線「藤沢駅」南口から徒歩2分の好立地。リフォーマー以外にチェアやキャデラックなど豊富なマシンを完備。男性も受講可能。',
    access: 'JR東海道線・小田急江ノ島線「藤沢駅」南口 徒歩2分 / 江ノ島電鉄「藤沢駅」徒歩5分',
    address: '神奈川県藤沢市南藤沢2-8 2002K&Sビルディング 4階',
    popularPlan: {
      name: 'マットグループ月4回',
      description: 'マットピラティスのグループレッスン。全国のzen placeスタジオで相互利用可能。',
      price: '月4回 9,625円（税込）',
    },
    options: [
      'マットグループフリー（月額14,960円）',
      'リフォーマーグループ月4回（月額15,400円）',
      'プライベート月4回（月額33,880円〜）',
      '入会金 22,000円（体験当日入会で無料）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'リラックス', '健康維持'],
    },
    basicInfo: {
      hours: '平日 9:00〜22:00 / 土 9:00〜21:00 / 日 9:00〜19:00',
      closed: '毎週火曜日・季節休業日',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', '男女別更衣室', 'ロッカー'],
    },
  },
  {
    name: 'the SILK 湘南・藤沢店',
    image: '/images/studios/the-silk.webp',
    rating: 4.8,
    reviewCount: 180,
    reviews: [
      {
        author: 'N.Y',
        rating: 5,
        date: '5日前',
        text: '藤沢駅から徒歩1分！女性専用で安心。体験レッスンが無料で手ぶらOK。音楽に合わせた50分のレッスンが楽しい。朝8時から夜21時まで営業。',
      },
      {
        author: 'E.S',
        rating: 5,
        date: '1週間前',
        text: '初心者が80%なので気負わず始められました。PMA加盟団体のプロ監修レッスン。パウダールーム完備でレッスン後のお出かけにも便利。',
      },
      {
        author: 'M.K',
        rating: 4,
        date: '2週間前',
        text: 'Light3プランなら月3回13,280円。おしゃれな空間で気分が上がります。湘南の海のある街で、ピラティス後の散歩も楽しめます。',
      },
    ],
    price: '月3回 13,280円〜',
    trial: '体験レッスン 0円（50分・手ぶらOK）',
    features: ['女性専用', 'マシン専門', '藤沢駅徒歩1分', 'PMA監修'],
    description: '女性専用マシンピラティス専門スタジオ。藤沢駅から徒歩1分の圧倒的好立地。PMA加盟団体のプロ監修レッスン。プロフェッショナルグレードのリフォーマーマシンを使用し、音楽に合わせた50分のグループレッスンで楽しくボディメイク。',
    access: '藤沢駅 徒歩1分',
    address: '神奈川県藤沢市南藤沢22-1 神中第2ビル 6階',
    popularPlan: {
      name: 'Standard4（月4回）',
      description: '月4回の標準プラン。PMA監修のプロフェッショナルグレードリフォーマーレッスン。',
      price: '月4回 15,280円（税込）+ 施設利用料700円',
    },
    options: [
      'Light3（月3回 13,280円）',
      'Full Day（平日デイタイム無制限 19,280円）',
      'Full（無制限 22,280円）',
      'レンタル（ウェア・タオル・ソックスあり）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: '年末年始（12/29〜1/3）',
      facilities: ['リフォーマーマシン', '更衣室', 'パウダールーム', 'ウォーターサービス', 'レンタルウェア・タオル・ソックス'],
    },
  },
  {
    name: 'ピラティス&ジム 1to1 藤沢店',
    image: '/images/studios/pilates-gym-1to1.webp',
    rating: 4.7,
    reviewCount: 11,
    reviews: [
      {
        author: 'H.T',
        rating: 5,
        date: '1週間前',
        text: '女性専用の完全個室で安心。マシンピラティスとゆるトレのハイブリッド型。体験レッスンが5,500円で丁寧にカウンセリングしてもらえます。朝7時から夜23時まで営業。',
      },
      {
        author: 'S.I',
        rating: 4,
        date: '2週間前',
        text: '40分6,600円からとパーソナルとしてはリーズナブル。レンタルウェア・シューズ無料なのも嬉しい。ダイエットコースではLINE栄養指導付き。',
      },
      {
        author: 'N.Y',
        rating: 5,
        date: '1ヶ月前',
        text: 'プロトレーナーが丁寧に指導。マシンピラティスとウェイトトレーニングを効率よく組み合わせられます。',
      },
    ],
    price: '1回 6,600円〜（40分）',
    trial: '体験レッスン 5,500円',
    features: ['女性専用', '完全個室', 'ハイブリッド型', '朝7時〜夜23時'],
    description: '女性専用・完全個室のパーソナルジム。マシンピラティスとゆるトレを組み合わせた「ハイブリッド型」で効率的なボディメイク。朝7時から夜23時まで営業で忙しい方にも最適。レンタルウェア・シューズ無料。',
    access: '藤沢駅から徒歩圏内',
    address: '神奈川県藤沢市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '60分セッション',
      description: 'マシンピラティス×ゆるトレのハイブリッドパーソナルトレーニング。',
      price: '1回 9,900円（税込）',
    },
    options: [
      '40分セッション（6,600円）',
      '80分セッション（13,200円）',
      'ダイエットコース 2ヶ月18回（179,685円・LINE栄養指導付き）',
      'レンタルウェア・シューズ無料',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ダイエット', 'ボディメイク', '体力向上', '姿勢改善'],
    },
    basicInfo: {
      hours: '7:00〜23:00',
      closed: '不定休',
      facilities: ['マシンピラティス器具', 'ウェイトトレーニング機器', '完全個室', 'カウンセリングルーム'],
    },
  },
  {
    name: 'Pilates Mee 藤沢店',
    image: '/images/studios/pilates-mee.webp',
    rating: 4.6,
    reviewCount: 5,
    reviews: [
      {
        author: 'T.M',
        rating: 5,
        date: '5日前',
        text: '最大3名のセミパーソナル型で丁寧に見てもらえます。定額制で1回あたり1,250円〜は驚き！当日予約・当日キャンセルOKで気軽に通えます。',
      },
      {
        author: 'K.A',
        rating: 4,
        date: '1週間前',
        text: '藤沢駅から徒歩5分。通い放題プランなら月10回通えば1回3,750円！マシンピラティスでこの価格は破格。初心者でも安心。',
      },
      {
        author: 'R.S',
        rating: 5,
        date: '2週間前',
        text: '女性専用のセミパーソナルスタジオ。インストラクターが丁寧にフォローしてくれるので初めてでも安心でした。',
      },
    ],
    price: '1回 1,250円〜（定額制）',
    trial: '体験レッスンあり',
    features: ['セミパーソナル', '最大3名', '藤沢駅徒歩5分', 'コスパ抜群'],
    description: '1人のインストラクターにつき最大3名のセミパーソナル型マシンピラティススタジオ。藤沢駅から徒歩5分。定額制で1回あたり1,250円〜と驚きのコスパ。当日予約・当日キャンセルOKと柔軟な予約対応。女性専用。',
    access: '藤沢駅 徒歩5分',
    address: '神奈川県藤沢市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '定額制プラン',
      description: 'セミパーソナルのマシンピラティス。通い放題で1回あたり1,250円〜。',
      price: '定額制（詳細は公式サイト参照）',
    },
    options: [
      'セミパーソナル（1回約5,000円）',
      '通い放題プラン（1回約3,750円）',
      '当日予約・当日キャンセルOK',
      '女性専用',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '予約制（詳細は公式サイト参照）',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'LOrena（ロレナ）藤沢店',
    image: '/images/studios/lorena-fujisawa.webp',
    rating: 4.7,
    reviewCount: 12,
    reviews: [
      {
        author: 'C.N',
        rating: 5,
        date: '1週間前',
        text: '韓国で人気のリフォーマーを採用！最大4名のセミパーソナル式で丁寧に見てもらえます。女性専用でピラティスだけでなくジムも使える。',
      },
      {
        author: 'H.M',
        rating: 4,
        date: '2週間前',
        text: '藤沢駅北口から徒歩9分。4,400円からレッスンが受けられます。TRXやスウェディッシュバーなどピラティス以外のトレーニングも充実。',
      },
      {
        author: 'R.O',
        rating: 5,
        date: '3週間前',
        text: '清潔感のあるおしゃれなスタジオ。女性のためのTRX・有酸素マシンも完備で、ピラティスとジムを効率よく組み合わせられます。',
      },
    ],
    price: '1回 4,400円〜',
    trial: '体験レッスンあり',
    features: ['女性専用', '韓国式リフォーマー', 'ジム併設', 'セミパーソナル'],
    description: '女性専用マシンピラティススタジオ&ジム。韓国で人気のリフォーマーを採用し、最大4名のセミパーソナル式グループレッスン。ピラティスに加えてTRX・スウェディッシュバー・有酸素マシンも完備で、総合的なボディメイクが可能。',
    access: '藤沢駅北口 徒歩9分',
    address: '神奈川県藤沢市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'セミパーソナルレッスン',
      description: '韓国式リフォーマーを使った最大4名のセミパーソナルレッスン。',
      price: '1回 4,400円〜（税込）',
    },
    options: [
      'セミパーソナルレッスン（4,400円〜）',
      'ジム利用可',
      'TRX・有酸素マシン完備',
      '女性専用',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '筋力アップ', '姿勢改善'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['韓国式リフォーマー', 'TRX', 'スウェディッシュバー', '有酸素マシン', '更衣室'],
    },
  },
  {
    name: 'N pilates studio 藤沢',
    image: '/images/studios/n-pilates-fujisawa.webp',
    rating: 4.8,
    reviewCount: 14,
    reviews: [
      {
        author: 'J.K',
        rating: 5,
        date: '1週間前',
        text: '藤沢駅南口から徒歩4分の完全予約制プライベートスタジオ。一人ひとりにセッション内容をプログラミングしてくれるので、効果を実感しやすい。産前産後の方にも対応。',
      },
      {
        author: 'S.A',
        rating: 5,
        date: '2週間前',
        text: 'お子様連れOKなのが嬉しい！初心者からアスリートまで幅広く対応。55分のセッションでしっかりと体を整えてもらえます。',
      },
      {
        author: 'M.I',
        rating: 4,
        date: '1ヶ月前',
        text: 'アットホームな雰囲気で通いやすい。インストラクターとの距離が近く、何でも相談しやすいプライベートスタジオです。',
      },
    ],
    price: '要確認（完全パーソナル）',
    trial: '体験レッスンあり',
    features: ['完全プライベート', '予約制', '藤沢駅徒歩4分', '子連れOK'],
    description: '完全予約制プライベート専門ピラティススタジオ。藤沢駅南口から徒歩4分。一人ひとりにセッション内容をプログラミングし、最適なエクササイズを提供。産前産後の方、初心者からアスリートまで対応。お子様連れもOK。',
    access: '藤沢駅南口 徒歩4分',
    address: '神奈川県藤沢市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'プライベートセッション（55分）',
      description: '完全マンツーマンのオーダーメイドピラティスセッション。',
      price: '要確認（公式サイト参照）',
    },
    options: [
      '完全予約制',
      'プライベートセッション55分',
      '産前産後対応',
      'お子様連れOK',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '産前産後ケア', 'パフォーマンス向上', '健康維持'],
    },
    basicInfo: {
      hours: '完全予約制',
      closed: '不定休',
      facilities: ['リフォーマー', 'マシンピラティス器具', '完全プライベート空間'],
    },
  },
  {
    name: 'La pilates 藤沢店',
    image: '/images/studios/la-pilates.webp',
    rating: 4.7,
    reviewCount: 21,
    reviews: [
      {
        author: 'E.T',
        rating: 5,
        date: '5日前',
        text: '整体×マシンピラティスの融合スタジオ。女性専用で安心。女性インストラクターが丁寧に指導してくれます。産前産後にも対応。年中無休で朝9時から夜21時まで営業。',
      },
      {
        author: 'Y.N',
        rating: 4,
        date: '1週間前',
        text: '月1回12,000円からパーソナルが受けられます。整体と組み合わせたアプローチで姿勢改善の効果を実感しています。',
      },
      {
        author: 'K.M',
        rating: 5,
        date: '2週間前',
        text: '無料体験があるので気軽に試せました。パーソナルなので自分のペースで進められるのが良い。',
      },
    ],
    price: '月1回 12,000円〜',
    trial: '無料体験あり',
    features: ['女性専用', '整体×ピラティス', '年中無休', '産前産後OK'],
    description: '女性専用の整体×マシンピラティス融合スタジオ。姿勢改善に特化し、女性インストラクターが丁寧に指導。産前産後にも対応。年中無休・朝9時から夜21時まで営業。無料体験あり。',
    access: '藤沢エリア',
    address: '神奈川県藤沢市（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月2回プラン',
      description: '整体×マシンピラティスのパーソナルレッスン月2回。',
      price: '月2回 22,000円（税込）',
    },
    options: [
      '月1回（12,000円）',
      '月3回（30,000円）',
      '月4回（40,000円）',
      '無料体験あり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['姿勢改善', '産前産後ケア', '体質改善', 'ボディメイク'],
    },
    basicInfo: {
      hours: '9:00〜21:00',
      closed: '年末年始',
      facilities: ['リフォーマー', '整体施術スペース', '完全プライベート空間', '更衣室'],
    },
  },
  {
    name: 'the SILK 藤沢店',
    officialUrl: 'https://the-silk.co.jp/',
    image: '/images/studios/the-silk.webp',
    price: 'グループ月4回(Standard4) 14,370〜15,280円 / 通い放題 19,980〜22,280円（別途施設利用料月700円）/ パーソナル月2回 22,000円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', 'マシンピラティス専門', 'グループ＋パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオ。レベル別・部位別の豊富なグループプログラムとパーソナルレッスンを提供し、洗練された空間が特徴。藤沢駅から徒歩1分（情報引用元: the SILK公式サイト the-silk.co.jp）。',
    access: '藤沢駅から徒歩1分',
    address: '神奈川県藤沢市南藤沢22-1 神中第二ビル6階',
  },
  {
    name: 'Pilates Mee藤沢店',
    officialUrl: 'https://m-pilates.com/',
    image: '/images/studios/pilates-mee.webp',
    price: 'セミパーソナル月4回 19,800円 / パーソナル月4回 39,600円（税込）',
    trial: '初回体験 無料キャンペーンあり（通常9,800円・毎月先着30名限定）',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオ。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯が特徴。藤沢駅から徒歩5分。',
    access: '藤沢駅から徒歩5分',
    address: '神奈川県藤沢市鵠沼花沢町11-1 1階',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！藤沢エリアのスタジオのほとんどが初心者歓迎。the SILKは初心者が80%、zen placeは体験500円から気軽に始められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンはリフォーマー等の専用マシンを使用。マシンは負荷調整しやすく初心者におすすめ。藤沢はマシン専門スタジオが充実しています。',
  },
  {
    question: '藤沢のピラティススタジオの料金相場は？',
    answer: 'グループ月4回で9,600円〜15,300円程度。Pilates Meeは定額制で1回1,250円〜。パーソナルは1回6,600円〜が相場です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1-2回（月4-8回）がおすすめ。慣れたら週2-3回に。大切なのは継続すること。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり太りにくい体質に。2-3ヶ月の継続が大切です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOK。the SILKは手ぶらOKの無料体験、zen placeは500円で体験可能です。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化に特化。ヨガは柔軟性とリラックス重視。目的に合わせて選びましょう。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、姿勢改善で根本原因を解消。La pilatesは整体×ピラティスで体の不調改善に特化しています。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。最低2ヶ月は継続しましょう。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'パーソナルは1to1やN pilates studioで効果的な指導を。グループはzen placeなら月4回9,625円から。まずは体験で両方試してみましょう。',
  },
]

export default function FujisawaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '藤沢', url: 'https://pilates-biyori.com/area/fujisawa/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月15日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス藤沢おすすめ9選！<br className="hidden md:block" />
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
              <span className="text-warm-600">藤沢</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="藤沢" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「藤沢・湘南で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、藤沢エリアでおすすめのピラティススタジオ9選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>藤沢・湘南でピラティススタジオを探している</span>
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
                  <span>JR・小田急・江ノ電で通いやすいスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="藤沢" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              藤沢のおすすめピラティススタジオ9選
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
              藤沢のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">6,600円〜22,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 1,250円〜12,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜5,500円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              藤沢は海に近い開放的な雰囲気が魅力のエリアです。観光客向けの体験クラスからしっかり通える月額プランまで幅広く、リゾート感覚で通えるスタジオもあります。地元密着型スタジオは料金も良心的なので要チェックです。近隣の湘南エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              藤沢でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR東海道線・小田急江ノ島線「藤沢駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  藤沢エリアのスタジオは藤沢駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。藤沢駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">観光シーズンの混雑に備えた予約を</h3>
                <p className="text-warm-600 leading-relaxed">
                  藤沢は観光エリアとしても人気のため、GW・夏休み・年末年始は体験レッスンの申し込みが増加します。地元の方は観光シーズンを避けた平日昼間が快適に通える時間帯。ビジター利用を受け付けるスタジオもあるので、旅行のついでに体験するのもおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">季節による料金プランの違いに注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  藤沢エリアでは季節限定のキャンペーンや、夏季限定の短期集中プランを提供するスタジオもあります。年間を通して通うなら月額制が割安ですが、特定の時期だけ通いたい方は回数券を検討しましょう。入会時のキャンペーンは時期によって内容が変わるので、タイミングを見計らうのもポイントです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  藤沢エリアだけでなく、近隣の<Link href="/area/shonan/" className="text-warm-700 underline hover:text-warm-900">湘南</Link>、<Link href="/area/kamakura/" className="text-warm-700 underline hover:text-warm-900">鎌倉</Link>、<Link href="/area/yokohama/" className="text-warm-700 underline hover:text-warm-900">横浜</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>藤沢エリアの豆知識：</strong>藤沢は海沿いのエリアならではの開放感が魅力です。特に夏場は汗をかきやすいので、制汗スプレーや替えのTシャツを持参すると快適。海風で髪が乱れやすい時期は、ヘアバンドやヘアゴムも忘れずに。
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
                  月額1万円以下で通えるリーズナブルなスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Pilates Mee（1回1,250円〜）</li>
                  <li className="text-warm-700">• zen place pilates（月4回 9,625円〜）</li>
                  <li className="text-warm-700">• LOrena（1回 4,400円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  完全マンツーマンで効果的に。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• 1to1（ハイブリッド型）</li>
                  <li className="text-warm-700">• N pilates studio（子連れOK）</li>
                  <li className="text-warm-700">• La pilates（整体×ピラティス）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  藤沢駅から徒歩5分以内。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK（藤沢駅 徒歩1分）</li>
                  <li className="text-warm-700">• zen place pilates（藤沢駅 徒歩2分）</li>
                  <li className="text-warm-700">• N pilates studio（藤沢駅 徒歩4分）</li>
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
                週1-2回（月4-8回）からスタート。最低2-3ヶ月継続で効果を実感。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回がおすすめ。3-6ヶ月で目に見える変化が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続。自分のペースが一番です。
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
                  グループ・セミパーソナル中心。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Pilates Mee（定額1,250円〜/回）</li>
                  <li>• zen place（9,625円〜/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜16,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオ。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• the SILK（13,280円〜）</li>
                  <li>• zen place リフォーマー（15,400円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 20,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月2〜4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全パーソナル。効果重視の方に。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• La pilates（月2回 22,000円）</li>
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
                  ダイエット、姿勢改善、体幹強化、産前産後ケアなど、目的によって最適なスタジオは変わります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  藤沢エリアの料金相場はグループ月4回で9,600円〜15,300円。入会金やレンタル料も確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  the SILKは無料体験、zen placeは500円で体験可能。気軽に試してみましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  藤沢はJR東海道線・小田急江ノ島線・江ノ島電鉄が利用可能。the SILKは駅徒歩1分、zen placeは徒歩2分と駅近スタジオが充実。
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
              今回は藤沢のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では藤沢に数多くあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜500円。<br />
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
      <ConsultantSection areaKey="fujisawa" areaName="藤沢" />

      <RelatedAreas currentSlug="fujisawa" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
