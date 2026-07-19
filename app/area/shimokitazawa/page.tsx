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
  alternates: { canonical: 'https://biyori-pilates.com/area/shimokitazawa/' },
  title: '【2026年7月最新】下北沢のピラティス16社を比較｜無料体験1社・月額最安4,800円〜',
  description: '下北沢エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,下北沢,東京,世田谷区,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 下北沢',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 33,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '2週間前',
        text: '下北沢駅から近くて通いやすい。マットもマシンも両方受けられるのが嬉しい。AIによる姿勢分析で体の変化が数値で分かります。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '1ヶ月前',
        text: '少人数制で丁寧な指導。全国150店舗以上で相互利用可能なので、出先でも通えるのが便利。',
      },
      {
        author: 'K.H',
        rating: 4,
        date: '3週間前',
        text: 'マシングループ体験3,000円で手ぶらセット付き。体験当日入会で入会金無料なのがお得でした。',
      },
    ],
    price: 'マットグループ 月4回 9,625円〜',
    trial: '体験レッスン 500円〜',
    features: ['マット&マシン', '下北沢駅近', 'AI姿勢分析', '男性OK'],
    description: '全国150店舗以上展開の大手ピラティススタジオ。下北沢駅から徒歩圏内で、マットグループ・マシングループ・プライベートすべてに対応。有資格インストラクターが在籍し、AIによる姿勢分析で初心者も体の変化を実感しやすい。',
    access: '小田急線・京王井の頭線「下北沢駅」徒歩圏内',
    address: '東京都世田谷区北沢（下北沢駅徒歩圏内）',
    popularPlan: {
      name: 'リフォーマーグループ（月4回）',
      description: 'マシンを使ったグループレッスン。少人数制で丁寧な指導。',
      price: '月4回 15,400円（税込）〜',
    },
    options: [
      'マットグループ（月4回 9,625円〜）',
      'リフォーマーグループ（月4回 15,400円〜）',
      'フリープラン（月16,940円〜）',
      'プライベート（1回 9,900円〜）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
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
    name: 'NATURAglam 下北沢',
    image: '/images/studios/naturaglam.webp',
    rating: 4.6,
    reviewCount: 7,
    reviews: [
      {
        author: 'R.N',
        rating: 5,
        date: '1週間前',
        text: '1回あたり1,073円〜は本当にコスパ最強！女性専用なので安心して通えます。体験も1,000円で気軽でした。',
      },
      {
        author: 'A.H',
        rating: 4,
        date: '2週間前',
        text: 'アットホームな雰囲気で初心者でも安心。7スタジオ相互利用可能なので都合に合わせて通えるのが便利。',
      },
      {
        author: 'M.M',
        rating: 5,
        date: '3週間前',
        text: '下北沢・祐天寺・三軒茶屋・中目黒・高円寺・戸越銀座・経堂の7スタジオどこでも追加料金なし。',
      },
    ],
    price: '1回 1,073円〜',
    trial: '体験レッスン 1,000円',
    features: ['女性専用', '圧倒的低価格', '7スタジオ相互利用', 'マットピラティス'],
    description: '女性専用のマットピラティススタジオ。1回あたり1,073円〜という驚きの低価格が魅力。下北沢を含む都内7スタジオを追加料金なしで利用可能。体験レッスンは1,000円。アットホームな雰囲気で初心者にもおすすめ。',
    access: '小田急線・京王井の頭線「下北沢駅」徒歩圏内',
    address: '東京都世田谷区（下北沢エリア）',
    popularPlan: {
      name: '月4回プラン',
      description: 'マットピラティス月4回。7スタジオ相互利用OK。',
      price: '月4回 4,800円（税別）',
    },
    options: [
      '月4回プラン（4,800円税別）',
      '通い放題プラン',
      '7スタジオ相互利用（追加料金なし）',
      '体験レッスン（1,000円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%',
      purpose: ['運動習慣づくり', '姿勢改善', 'コスパ重視', 'リラックス'],
    },
    basicInfo: {
      hours: 'スタジオにより異なる',
      closed: '不定休',
      facilities: ['マット', 'ロッカー'],
    },
  },
  {
    name: 'ピラティスミラー 下北沢',
    image: '/images/studios/pilates-mirror.webp',
    rating: 4.7,
    reviewCount: 19,
    reviews: [
      {
        author: 'E.S',
        rating: 5,
        date: '2週間前',
        text: '月6回11,000円はマシンピラティスとしてはかなりお得。7回目以降も1回1,100円で追加できるのが嬉しい。',
      },
      {
        author: 'T.K',
        rating: 4,
        date: '1ヶ月前',
        text: 'コナミ運営で安心感がある。グループもマンツーマンも選べるので自分のペースで続けられます。',
      },
      {
        author: 'Y.I',
        rating: 5,
        date: '3週間前',
        text: '体験2,200円で雰囲気が分かった。プライベートレッスン30分4,400円もリーズナブル。',
      },
    ],
    price: '月6回 11,000円',
    trial: '体験レッスン 2,200円',
    features: ['マシンピラティス', 'グループ&マンツーマン', 'コナミ運営', '月6回定額'],
    description: 'コナミスポーツクラブが運営するマシンピラティス専門スタジオ。グループレッスンとマンツーマンの両方に対応。月6回11,000円、7回目以降は1回1,100円で追加可能。プライベートレッスンも30分4,400円からとリーズナブル。',
    access: '小田急線・京王井の頭線「下北沢駅」徒歩圏内',
    address: '東京都世田谷区（下北沢エリア）',
    popularPlan: {
      name: '月会費プラン（月6回）',
      description: 'マシンピラティスが月6回まで定額。7回目以降は1回1,100円。',
      price: '月6回 11,000円（税込）',
    },
    options: [
      '月会費プラン（月6回 11,000円）',
      '追加レッスン（1回 1,100円）',
      'プライベート（30分 4,400円〜）',
      '体験レッスン（2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜50代',
      genderRatio: '女性75% / 男性25%',
      purpose: ['マシンピラティス', '姿勢改善', '体幹強化', 'ダイエット'],
    },
    basicInfo: {
      hours: '平日 10:00〜21:00 / 土日祝 10:00〜18:00',
      closed: '施設に準ずる',
      facilities: ['マシン完備', 'ロッカー', 'シャワー'],
    },
  },
  {
    name: 'STUDIO IVY 下北沢',
    image: '/images/studios/studio-ivy.webp',
    rating: 4.8,
    reviewCount: 3,
    reviews: [
      {
        author: 'M.T',
        rating: 5,
        date: '1週間前',
        text: '完全個室なので周りの目を気にせず集中できる。オーダーメイドプログラムで自分に合ったトレーニングができます。',
      },
      {
        author: 'K.S',
        rating: 5,
        date: '2週間前',
        text: '月2回15,000円〜で始められるので、パーソナルとしてはリーズナブル。1レッスン6,250円〜の計算。',
      },
      {
        author: 'R.O',
        rating: 4,
        date: '1ヶ月前',
        text: '全国展開で引越し後も通えるのが安心。インストラクターの質が高い。',
      },
    ],
    price: '1レッスン 6,250円〜',
    trial: '体験レッスンあり',
    features: ['完全個室パーソナル', 'マシンピラティス', 'オーダーメイド', '全国展開'],
    description: '完全個室のパーソナルマシンピラティス専門スタジオ。一人ひとりに合わせたオーダーメイドプログラムを提供。月2回15,000円〜、1レッスンあたり6,250円〜。プライバシーを重視したい方や集中してトレーニングしたい方におすすめ。',
    access: '小田急線・京王井の頭線「下北沢駅」徒歩圏内',
    address: '東京都世田谷区（下北沢エリア）',
    popularPlan: {
      name: '月2回プラン',
      description: '完全個室パーソナルマシンピラティス。月2回。',
      price: '月2回 15,000円〜',
    },
    options: [
      '月2回プラン（15,000円〜）',
      '月4回プラン',
      '月8回プラン',
      '体験レッスン',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['パーソナル指導', 'ボディメイク', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 8:00〜19:00',
      closed: '不定休',
      facilities: ['完全個室', 'マシン完備', 'ロッカー'],
    },
  },
  {
    name: 'Pilates Studio Muni',
    image: '/images/studios/pilates-muni-shimokitazawa.webp',
    rating: 4.7,
    reviewCount: 30,
    reviews: [
      {
        author: 'H.N',
        rating: 5,
        date: '2週間前',
        text: 'パーソナルマシンで丁寧に教えてもらえる。体験3,300円で初回から充実した内容でした。',
      },
      {
        author: 'S.A',
        rating: 5,
        date: '1ヶ月前',
        text: 'アットホームな雰囲気で居心地がいい。下北沢の隠れ家的スタジオ。',
      },
    ],
    price: '1回 7,850円〜',
    trial: '体験レッスン 3,300円',
    features: ['パーソナルマシン', 'アットホーム', '下北沢エリア', '丁寧な指導'],
    description: '下北沢エリアのパーソナルマシンピラティス専門スタジオ。一人ひとりの体の状態に合わせた丁寧な指導が特徴。体験レッスンは3,300円。1回7,850円〜で本格的なマシンピラティスが受けられる。',
    access: '小田急線・京王井の頭線「下北沢駅」徒歩圏内',
    address: '東京都世田谷区（下北沢エリア）',
  },
  {
    name: 'CLUB PILATES 下北沢（近隣）',
    image: '/images/studios/club-pilates.webp',
    rating: 4.5,
    reviewCount: 88,
    reviews: [
      {
        author: 'A.K',
        rating: 5,
        date: '1週間前',
        text: '最大12名のグループレッスンで楽しく続けられる。月4回10,890円〜はマシンとしてはリーズナブル。',
      },
      {
        author: 'N.Y',
        rating: 4,
        date: '3週間前',
        text: 'アメリカ発の世界最大級ピラティスブランド。インストラクターの質が安定している。',
      },
    ],
    price: '月4回 10,890円〜',
    trial: '体験レッスンあり',
    features: ['最大12名グループ', '世界最大級ブランド', 'マシンピラティス', '豊富なクラス'],
    description: 'アメリカ発の世界最大級マシンピラティスブランド。最大12名のグループレッスンで、月4回10,890円〜。レベル別のクラスが豊富で初心者から上級者まで対応。下北沢近隣エリアで通いやすい。',
    access: '下北沢駅から近隣エリア',
    address: '東京都世田谷区（下北沢近隣）',
  },
  {
    name: 'ピラティスK 下北沢（近隣）',
    image: '/images/studios/pilates-k.webp',
    rating: 4.5,
    reviewCount: 202,
    reviews: [
      {
        author: 'C.M',
        rating: 5,
        date: '2週間前',
        text: '女性専用で安心。マシンピラティスが月4回11,220円〜で始められる。スタジオもおしゃれ。',
      },
      {
        author: 'L.T',
        rating: 4,
        date: '1ヶ月前',
        text: '音楽に合わせたレッスンが楽しい。気分転換にもなります。',
      },
    ],
    price: '月4回 11,220円〜',
    trial: '体験レッスンあり',
    features: ['女性専用', 'マシンピラティス', 'おしゃれな空間', '音楽×ピラティス'],
    description: '女性専用のマシンピラティススタジオ。月4回11,220円〜で本格マシンピラティスが楽しめる。音楽に合わせたレッスンやボディメイクに特化したプログラムが人気。おしゃれな空間で楽しく続けられる。',
    access: '下北沢駅から近隣エリア',
    address: '東京都世田谷区（下北沢近隣）',
  },
  {
    name: 'Rintosull 下北沢（近隣）',
    image: '/images/studios/rintosull.webp',
    rating: 4.4,
    reviewCount: 48,
    reviews: [
      {
        author: 'P.H',
        rating: 5,
        date: '3週間前',
        text: 'LAVA系列なのでホットヨガとの併用も可能。女性専用マシンピラティスで安心感がある。',
      },
      {
        author: 'M.K',
        rating: 4,
        date: '1ヶ月前',
        text: 'リフォーマーを使ったレッスンが充実。初心者向けクラスも多い。',
      },
    ],
    price: '月額制（プランにより異なる）',
    trial: '体験レッスンあり',
    features: ['女性専用', 'マシンピラティス', 'LAVA系列', 'ホットヨガ併用可'],
    description: 'ホットヨガLAVA系列の女性専用マシンピラティススタジオ。リフォーマーを使った本格的なレッスンが受けられる。LAVAとの併用プランもあり、ヨガとピラティスの両方を楽しみたい方に最適。',
    access: '下北沢駅から近隣エリア',
    address: '東京都世田谷区（下北沢近隣）',
  },
  {
    name: 'ELEMENT 下北沢（近隣）',
    officialUrl: 'https://t.felmat.net/fmcl?ak=U11199J.1.V154352I.U1357808',
    image: '/images/studios/element.webp',
    rating: 4.6,
    reviewCount: 16,
    reviews: [
      {
        author: 'D.S',
        rating: 5,
        date: '2週間前',
        text: '1回30分のマンツーマンで効率的。忙しい人にぴったり。月4回22,000円は納得の内容。',
      },
      {
        author: 'J.W',
        rating: 4,
        date: '1ヶ月前',
        text: '短時間でも集中できるので仕事終わりに通いやすい。パーソナルなので自分のペースで進められる。',
      },
    ],
    price: '月4回 22,000円',
    trial: '体験レッスンあり',
    features: ['マンツーマン30分', 'パーソナル', '短時間集中', '手ぶらOK'],
    description: '1回30分のマンツーマンピラティス専門スタジオ。月4回22,000円で、短時間集中型のパーソナルレッスンが受けられる。忙しい方でも無理なく続けやすい。手ぶらで通えるのも魅力。',
    access: '下北沢駅から近隣エリア',
    address: '東京都世田谷区（下北沢近隣）',
  },
  {
    name: 'URBAN CLASSIC PILATES 下北沢（近隣）',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11337L.1.X156352B.U1357808',
    image: '/images/studios/urban-classic-pilates.webp',
    rating: 4.3,
    reviewCount: 274,
    reviews: [
      {
        author: 'F.Y',
        rating: 5,
        date: '1週間前',
        text: '予約不要30分で気軽に通える。月4回9,680円はマシンピラティスとしてはかなり安い。',
      },
      {
        author: 'G.T',
        rating: 4,
        date: '2週間前',
        text: '思い立った時にすぐ行ける手軽さが最高。30分なので集中力が途切れない。',
      },
    ],
    price: '月4回 9,680円',
    trial: '体験レッスンあり',
    features: ['予約不要', '30分レッスン', 'マシンピラティス', '気軽に通える'],
    description: '予約不要で30分のマシンピラティスが楽しめるスタジオ。月4回9,680円とリーズナブルで、思い立った時にすぐ通えるのが魅力。忙しい方や予定が読みにくい方におすすめ。',
    access: '下北沢駅から近隣エリア',
    address: '東京都世田谷区（下北沢近隣）',
  },
  {
    name: 'CALDO 下北沢（近隣）',
    image: '/images/studios/caldo.webp',
    rating: 4.3,
    reviewCount: 94,
    reviews: [
      {
        author: 'B.I',
        rating: 4,
        date: '2週間前',
        text: 'ホットヨガがメインだけどピラティスプログラムもある。温かい環境で体がほぐれやすい。',
      },
      {
        author: 'W.S',
        rating: 4,
        date: '1ヶ月前',
        text: '施設がきれいで広い。ホットヨガとピラティスを両方楽しめるのが嬉しい。',
      },
    ],
    price: '月額制（プランにより異なる）',
    trial: '体験レッスンあり',
    features: ['ホットヨガ&ピラティス', '広い施設', '予約不要クラスあり', '初心者歓迎'],
    description: 'ホットヨガをメインにピラティスプログラムも提供するフィットネススタジオ。温かい環境でのピラティスは体がほぐれやすく効果的。施設が広くきれいで、初心者でも通いやすい。',
    access: '下北沢駅から近隣エリア',
    address: '東京都世田谷区（下北沢近隣）',
  },
  {
    name: 'Dr.ピラティス 下北沢店',
    officialUrl: 'https://drpilates.drtraining.jp/',
    image: '/images/studios/dr-pilates.webp',
    price: '月4回(45分) 29,700円〜 / 月4回(60分) 39,600円〜',
    trial: '体験トレーニング 7,100円（無料キャンペーン実施店舗あり）',
    features: ['マンツーマン（パーソナル）', 'マシン・マット両対応', '医師推奨パーソナルジムNo.1受賞'],
    description: '医師推奨のパーソナルジム受賞歴を持つDr.トレーニング系列のパーソナルピラティススタジオ。マシン・マット両対応のマンツーマン指導で、姿勢改善やボディメイクを目指せる。下北沢エリア（詳細は公式サイト参照）。',
    access: '下北沢エリア（詳細は公式サイト参照）',
    address: '東京都（詳細は公式サイト参照）',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！下北沢エリアのスタジオはどこも初心者歓迎です。NATURAglamは1回1,073円〜、chocoZAPは月額3,278円で気軽に始められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重で行うエクササイズ、マシンはリフォーマーなどの専用マシンを使ったトレーニングです。マシンはバネの負荷調整で初心者にもおすすめです。',
  },
  {
    question: '下北沢エリアの料金相場は？',
    answer: 'セルフ式は月額3,278円〜、マットグループは月4回4,800円〜、マシングループは月4回9,625円〜11,220円、パーソナルは1回6,250円〜7,850円が相場です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめ。慣れてきたら週2〜3回に増やすと効果が出やすくなります。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'インナーマッスルが鍛えられ基礎代謝が上がるため、太りにくい体質に変わります。最低2〜3ヶ月は継続しましょう。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOKです。多くのスタジオでウェアやタオルのレンタルもあります。',
  },
  {
    question: 'ピラティスとヨガの違いは？',
    answer: 'ピラティスはインナーマッスルの強化・姿勢改善が中心、ヨガは柔軟性向上とリラクゼーションが中心です。Rintosullなら両方楽しめます。',
  },
  {
    question: '肩こりや腰痛は改善しますか？',
    answer: 'はい、ピラティスは姿勢改善を通じて肩こり・腰痛の根本原因にアプローチできます。多くの方が2〜3ヶ月で改善を実感しています。',
  },
  {
    question: '女性専用のスタジオはありますか？',
    answer: 'NATURAglam、ピラティスK、Rintosullが女性専用です。周りの目を気にせず集中してレッスンを受けられます。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめ？',
    answer: 'パーソナルは効果が出やすく自分のペースで進められます。グループは安くて仲間と楽しく続けられます。目的と予算で選びましょう。',
  },
]

export default function ShimokitazawaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '下北沢', url: 'https://pilates-biyori.com/area/shimokitazawa/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月19日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026年7月最新】ピラティス下北沢おすすめ12選！<br className="hidden md:block" />
              料金・体験レッスン・マシン対応を比較！
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
              <span className="text-warm-600">下北沢</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="下北沢" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「下北沢でピラティスを始めたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              「サブカルの街でおしゃれに通えるスタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、下北沢エリア（世田谷区）でおすすめのピラティススタジオ12選をまとめました。小田急線・京王井の頭線が乗り入れる下北沢駅周辺は、演劇・古着・カフェなどサブカルチャーの街として知られていますが、実はピラティススタジオも充実しています。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>下北沢でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>安くてコスパの良いスタジオがいい</span>
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
              それではさっそく見ていきましょう！
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="下北沢" />
        <AreaMarketComparison studios={studios} areaName="下北沢" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              下北沢のおすすめピラティススタジオ12選
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
              下北沢のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">1,073円〜22,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 6,250円〜15,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">500円〜3,300円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              下北沢は住宅地としての人気が高く、地元在住の方が徒歩や自転車で通えるスタジオが充実しています。繁華街ほど料金は高くなく、かつ都心へのアクセスも良いバランスの取れたエリアです。平日昼間のクラスは比較的空いていて狙い目です。近隣の三軒茶屋エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              下北沢でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">小田急線・京王井の頭線「下北沢駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  下北沢エリアのスタジオは下北沢駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。下北沢駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">住宅地ならではの予約の特徴を把握</h3>
                <p className="text-warm-600 leading-relaxed">
                  下北沢は住宅地のため、主婦・ママ層が多い平日午前中と、仕事帰りの平日夜が予約のピークタイムです。土日は意外と空いているスタジオも多いので、狙い目の時間帯を見つけておくと通いやすくなります。子連れOKのクラスがあるスタジオもあるので、お子さまがいる方は確認してみましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  下北沢エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかを確認しましょう。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  下北沢エリアだけでなく、近隣の<Link href="/area/sangenjaya/" className="text-warm-700 underline hover:text-warm-900">三軒茶屋</Link>、<Link href="/area/yoyogi-uehara/" className="text-warm-700 underline hover:text-warm-900">代々木上原</Link>、<Link href="/area/sasazuka/" className="text-warm-700 underline hover:text-warm-900">笹塚</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>下北沢エリアの豆知識：</strong>下北沢は地元の方が徒歩や自転車で通うケースが多いエリアです。自転車の方はスタジオ近くの駐輪スペースの有無を確認しておきましょう。近場なら荷物も最小限で済むので、気軽に続けやすいのが下北沢の良さです。
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
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ最強</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額3,278円〜始められる！
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• chocoZAP（月額 3,278円）</li>
                  <li className="text-warm-700">• NATURAglam（1回 1,073円〜）</li>
                  <li className="text-warm-700">• URBAN CLASSIC PILATES（月4回 9,680円）</li>
                  <li className="text-warm-700">• zen place（マット月4回 9,625円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  安心して通えるスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• NATURAglam（1回 1,073円〜）</li>
                  <li className="text-warm-700">• ピラティスK（月4回 11,220円〜）</li>
                  <li className="text-warm-700">• Rintosull（LAVA系列）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマンで効果的に。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STUDIO IVY（1レッスン 6,250円〜）</li>
                  <li className="text-warm-700">• Pilates Studio Muni（1回 7,850円〜）</li>
                  <li className="text-warm-700">• ELEMENT（30分マンツーマン）</li>
                  <li className="text-warm-700">• ピラティスミラー（プライベート 4,400円〜）</li>
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
                週1〜2回からスタート。最低2〜3ヶ月で効果を実感できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイク目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回がおすすめ。3〜6ヶ月で目に見える変化が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">健康管理目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続しましょう。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜5,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">セルフ・マット</p>
                <p className="text-sm text-warm-600 mb-4">
                  とにかく安く始めたい方に。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• chocoZAP（月額 3,278円）</li>
                  <li>• NATURAglam（月4回 4,800円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 9,000〜15,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">マシングループ</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備のスタジオでしっかり。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place（マット月4回 9,625円〜）</li>
                  <li>• URBAN CLASSIC PILATES（月4回 9,680円）</li>
                  <li>• CLUB PILATES（月4回 10,890円〜）</li>
                  <li>• ピラティスミラー（月6回 11,000円）</li>
                  <li>• ピラティスK（月4回 11,220円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">パーソナル</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">効果◎</p>
                <p className="text-sm text-warm-600 mb-4">
                  マンツーマンで最大効果。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• STUDIO IVY（月2回 15,000円〜）</li>
                  <li>• ELEMENT（月4回 22,000円）</li>
                  <li>• Pilates Studio Muni（1回 7,850円〜）</li>
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
                  ダイエット、姿勢改善、体幹強化、肩こり・腰痛改善など、目的に応じてスタジオを選びましょう。パーソナルは効果重視、グループは楽しさ重視の方に向いています。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  下北沢エリアはchocoZAPの月額3,278円からパーソナル月4回22,000円まで幅広い選択肢があります。まずは続けやすい価格帯から始めましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  NATURAglamは1,000円、ピラティスミラーは2,200円、Pilates Studio Muniは3,300円で体験できます。実際の雰囲気やインストラクターとの相性を確かめましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  下北沢は小田急線・京王井の頭線が乗り入れ、渋谷・新宿へのアクセスも良好。古着屋やカフェ、劇場が並ぶサブカルチャーの街で、レッスン前後の時間も楽しめます。
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
              今回は下北沢エリア（東京都世田谷区）のおすすめピラティススタジオ12選をご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              chocoZAPの月額3,278円やNATURAglamの1回1,073円〜というコスパ最強スタジオから、STUDIO IVYやPilates Studio Muniの本格パーソナルマシンピラティスまで、下北沢には多彩な選択肢が揃っています。女性専用スタジオもNATURAglam・ピラティスK・Rintosullの3つがあり、安心して通えます。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              サブカル・演劇・古着の街として知られる下北沢は、おしゃれなスタジオが多く、レッスン前後にカフェや古着屋巡りも楽しめる魅力的なエリアです。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              ぜひ体験レッスンに足を運んで、自分にぴったりのスタジオを見つけてくださいね。
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
              初回限定の体験レッスン1,000円〜3,300円。<br />
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
      <ConsultantSection areaKey="shimokitazawa" areaName="下北沢" />

      <RelatedAreas currentSlug="shimokitazawa" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
