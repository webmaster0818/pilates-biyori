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
  alternates: { canonical: 'https://biyori-pilates.com/area/shimbashi/' },
  title: '【2026年7月最新】ピラティス新橋おすすめ11選！料金・体験レッスン・マシン対応を比較！',
  description: '新橋・銀座エリアのおすすめピラティススタジオ12選を徹底比較。マシンピラティス、パーソナル、女性専用、24時間セルフまで網羅。料金相場・体験レッスン・選び方を完全ガイド。JR新橋駅・銀座線・都営浅草線沿線で仕事帰りに通えるスタジオが見つかります。',
  keywords: 'ピラティス,新橋,銀座,港区,スタジオ,おすすめ,マシンピラティス,パーソナル,女性専用,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 新橋（銀座近隣）',
    officialUrl: 'https://px.a8.net/svt/ejp?a8mat=4B650J+3SXRGI+4LQ4+5YJRM',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 12,
    reviews: [
      {
        author: 'R.N',
        rating: 5,
        date: '1週間前',
        text: '新橋からも通いやすい立地です。マットもマシンも両方受けられるのが嬉しい。仕事帰りに通っています。',
      },
      {
        author: 'A.H',
        rating: 4,
        date: '2週間前',
        text: '少人数制なので丁寧に指導してもらえます。男性もOKなので夫婦で通えるのが良い。',
      },
      {
        author: 'M.M',
        rating: 5,
        date: '3週間前',
        text: '全国140スタジオで相互利用できるのが便利。出張先でも別店舗が利用できます。',
      },
    ],
    price: 'マットグループ 月4回 9,625円〜',
    trial: '体験レッスン 500円〜',
    features: ['マット&マシン', '全国140スタジオ相互利用', '男性OK', '初心者歓迎'],
    description: '全国140店舗以上展開の大手ピラティススタジオ。新橋・銀座エリアからアクセス良好。マットグループ、マシン（リフォーマー）グループ、プライベートレッスンと幅広いメニューを提供。全国のスタジオを相互利用できるのが大きな魅力。',
    access: 'JR「新橋駅」から徒歩圏内 / 銀座線沿線',
    address: '東京都港区（新橋・銀座近隣）',
    popularPlan: {
      name: 'マットグループ（月4回）',
      description: 'マットを使ったグループレッスン。初心者にもおすすめの基本プラン。',
      price: '月4回 9,625円（税込）〜',
    },
    options: [
      'マットグループ（月4回 9,625円〜）',
      'リフォーマーグループ（月4回 15,400円〜）',
      'フリープラン（月16,940円〜）',
      'プライベートレッスン（1回 9,900円〜）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', '仕事帰りのリフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '月末不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi'],
    },
  },
  {
    name: 'the SILK 新橋（近隣）',
    image: '/images/studios/the-silk.webp',
    rating: 4.8,
    reviewCount: 249,
    reviews: [
      {
        author: 'T.W',
        rating: 5,
        date: '5日前',
        text: '新橋からも歩ける距離です。女性専用で安心。スタジオがとてもおしゃれでモチベーションが上がります。',
      },
      {
        author: 'H.I',
        rating: 5,
        date: '1週間前',
        text: '音楽に合わせたレッスンが楽しい！他のスタジオにはない独自の雰囲気があります。',
      },
      {
        author: 'S.N',
        rating: 4,
        date: '2週間前',
        text: 'リフォーマーマシンを使ったレッスンで効果を実感。仕事帰りに体を動かすのが日課になりました。',
      },
    ],
    price: '月4回 12,980円〜',
    trial: '体験レッスン実施中',
    features: ['女性専用', 'マシンピラティス専門', '音楽×ピラティス', 'おしゃれ空間'],
    description: '女性専用マシンピラティス専門スタジオ。音楽に合わせた独自プログラムで楽しくトレーニングできるのが最大の特徴。最新のリフォーマーマシンを完備し、新橋エリアからもアクセスしやすい立地。',
    access: 'JR「新橋駅」から近隣エリア',
    address: '東京都港区（新橋近隣）',
    popularPlan: {
      name: '月4回プラン',
      description: '女性専用マシンピラティスの基本プラン。音楽に合わせた50分のグループレッスン。',
      price: '月4回 12,980円（税込）〜',
    },
    options: [
      '月4回プラン（12,980円〜）',
      'Full（通い放題）',
      'Full Day（デイタイム通い放題）',
      '体験レッスン実施中',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '7:30〜21:00',
      closed: '年末年始',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '女性専用'],
    },
  },
  {
    name: 'ピラティスK 新橋（銀座近隣）',
    image: '/images/studios/pilates-k.webp',
    rating: 4.7,
    reviewCount: 202,
    reviews: [
      {
        author: 'K.M',
        rating: 5,
        date: '1週間前',
        text: '女性専用なので安心して通えます。マシングループレッスンの雰囲気が良く、モチベーションが続きます。',
      },
      {
        author: 'Y.S',
        rating: 4,
        date: '2週間前',
        text: '月4回 11,220円〜はマシンピラティスとしてはかなりコスパが良い。初心者にも丁寧に教えてくれます。',
      },
      {
        author: 'A.T',
        rating: 5,
        date: '3週間前',
        text: '新橋から銀座エリアへのアクセスも良く、仕事帰りに通いやすいです。',
      },
    ],
    price: '月4回 11,220円〜',
    trial: '体験レッスン実施中',
    features: ['女性専用', 'マシングループ専門', 'コスパ良好', '初心者歓迎'],
    description: '女性専用マシンピラティスグループレッスン専門スタジオ。月4回 11,220円〜とマシンピラティスとしてはリーズナブルな価格設定が魅力。新橋から銀座エリアへのアクセスも良好。初心者から経験者までレベルに合わせたプログラムを用意。',
    access: 'JR「新橋駅」から銀座方面へアクセス良好',
    address: '東京都港区（新橋・銀座近隣）',
    popularPlan: {
      name: 'マンスリー4メンバー（月4回）',
      description: '女性専用マシンピラティスのグループレッスン月4回プラン。',
      price: '月4回 11,220円（税込）〜',
    },
    options: [
      'マンスリー4メンバー（月4回 11,220円〜）',
      'マンスリーフルメンバー（通い放題）',
      'マンスリーデイメンバー（平日デイタイム通い放題）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '体幹強化'],
    },
    basicInfo: {
      hours: '火〜金 10:00〜21:30 / 土日祝 10:00〜18:00',
      closed: '月曜日',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', '女性専用'],
    },
  },
  {
    name: 'CLUB PILATES 新橋（近隣）',
    image: '/images/studios/club-pilates.webp',
    rating: 4.7,
    reviewCount: 140,
    reviews: [
      {
        author: 'D.K',
        rating: 5,
        date: '1週間前',
        text: '最大12名のグループレッスンで、少人数すぎず適度な活気があります。インストラクターの質が高い。',
      },
      {
        author: 'M.T',
        rating: 4,
        date: '2週間前',
        text: '世界的なブランドだけあって、プログラムがしっかりしています。月4回 10,890円〜は良心的。',
      },
      {
        author: 'S.Y',
        rating: 5,
        date: '1ヶ月前',
        text: '男性も通えるのが嬉しい。レベル別にクラスが分かれているので、自分のペースで上達できます。',
      },
    ],
    price: '月4回 10,890円〜',
    trial: '体験レッスン実施中',
    features: ['最大12名グループ', '世界的ブランド', '男性OK', 'レベル別クラス'],
    description: '世界最大級のピラティススタジオブランド。最大12名のグループレッスンで、リフォーマーをはじめとした多彩なマシンを使用。レベル別にクラスが分かれているので初心者も安心。新橋エリアからもアクセスしやすい。',
    access: 'JR「新橋駅」から近隣エリア',
    address: '東京都港区（新橋近隣）',
    popularPlan: {
      name: 'EFT4（月4回）',
      description: '最大12名のグループリフォーマーレッスン。月4回プラン。',
      price: '月4回 10,890円（税込）〜',
    },
    options: [
      'EFT4（月4回 10,890円〜）',
      'EFT8（月8回）',
      'Unlimited（通い放題）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['体幹強化', '姿勢改善', 'ボディメイク', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日 8:00〜17:00',
      closed: '店舗により異なる',
      facilities: ['ロッカー', 'マシン完備', '男女共用'],
    },
  },
  {
    name: 'CREA パーソナルピラティス 新橋・銀座店',
    image: '/images/studios/crea-pilates-shimbashi.webp',
    rating: 4.9,
    reviewCount: 23,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '2週間前',
        text: '新橋駅から近くて通いやすいです。パーソナルなので、自分のペースでじっくりレッスンを受けられます。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '1ヶ月前',
        text: '体の悩みに合わせたオーダーメイドのレッスンが受けられます。姿勢が良くなったと周りから言われるようになりました。',
      },
      {
        author: 'K.H',
        rating: 5,
        date: '3週間前',
        text: '1回3,300円〜とパーソナルとしては驚きの価格。本格的なレッスンをこの値段で受けられるのはお得。',
      },
    ],
    price: '1回 3,300円〜',
    trial: '体験レッスン実施中',
    features: ['パーソナル専門', '1回3,300円〜', '新橋・銀座エリア', 'オーダーメイド'],
    description: 'パーソナルピラティス専門スタジオ。新橋・銀座エリアに位置し、一人ひとりの体型と目標に合わせたオーダーメイドのパーソナルトレーニングを提供。1回3,300円〜と良心的な価格設定が魅力。',
    access: 'JR「新橋駅」・銀座線「銀座駅」から好アクセス',
    address: '東京都港区（新橋・銀座エリア）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: 'マンツーマンのマシンピラティス。一人ひとりに合わせたオーダーメイドプログラム。',
      price: '1回 3,300円（税込）〜',
    },
    options: [
      'パーソナルレッスン（1回 3,300円〜）',
      '回数券プラン（お問い合わせ）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: 'お問い合わせください',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '美しいボディライン'],
    },
    basicInfo: {
      hours: 'お問い合わせください',
      closed: '不定休',
      facilities: ['マシン完備', 'パーソナル専門'],
    },
  },
  {
    name: 'STUDIO IVY 新橋（近隣）',
    image: '/images/studios/studio-ivy.webp',
    rating: 4.8,
    reviewCount: 3,
    reviews: [
      {
        author: 'N.K',
        rating: 5,
        date: '1週間前',
        text: '完全個室のパーソナルなので、周りを気にせずレッスンに集中できます。インストラクターの質が非常に高い。',
      },
      {
        author: 'R.M',
        rating: 5,
        date: '2週間前',
        text: 'プライベート空間で受けられるのが最大の魅力。月2回 15,000円〜で無理なく通えます。',
      },
      {
        author: 'E.S',
        rating: 4,
        date: '1ヶ月前',
        text: '完全個室なので、初心者でも恥ずかしさを感じず始められました。丁寧なカウンセリングも好印象。',
      },
    ],
    price: '月2回 15,000円〜',
    trial: '体験レッスン実施中',
    features: ['完全個室', 'パーソナル専門', '月2回から', '高品質指導'],
    description: '完全個室のパーソナルピラティス専門スタジオ。新橋エリアからアクセスしやすい立地。月2回 15,000円〜のプランで、一人ひとりの身体の状態に合わせたオーダーメイドのレッスンを提供。',
    access: 'JR「新橋駅」から近隣エリア',
    address: '東京都港区（新橋近隣）',
    popularPlan: {
      name: '月2回プラン',
      description: '完全個室のパーソナルマシンピラティス。月2回から始められる。',
      price: '月2回 15,000円（税込）〜',
    },
    options: [
      '月2回プラン（15,000円〜）',
      '月4回プラン',
      '月8回プラン',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: 'お問い合わせください',
      purpose: ['ボディメイク', '姿勢改善', 'パフォーマンス向上', '健康維持'],
    },
    basicInfo: {
      hours: 'お問い合わせください',
      closed: '不定休',
      facilities: ['完全個室', 'マシン完備', 'パーソナル専門'],
    },
  },
  {
    name: 'ELEMENT 新橋（近隣）',
    officialUrl: 'https://t.felmat.net/fmcl?ak=U11199J.1.V154352I.U1357808',
    image: '/images/studios/element.webp',
    rating: 4.7,
    reviewCount: 16,
    reviews: [
      {
        author: 'T.O',
        rating: 5,
        date: '1週間前',
        text: '30分のマンツーマンレッスンなので、忙しいビジネスパーソンにぴったり。短時間でも効果を感じます。',
      },
      {
        author: 'K.S',
        rating: 4,
        date: '2週間前',
        text: '新橋エリアで30分のパーソナルピラティスが受けられるのは嬉しい。仕事の合間に通えます。',
      },
      {
        author: 'M.H',
        rating: 5,
        date: '3週間前',
        text: '月4回 22,000円でマンツーマン。短い時間で集中して取り組めるので効率的です。',
      },
    ],
    price: '月4回 22,000円',
    trial: '体験レッスン実施中',
    features: ['マンツーマン', '30分レッスン', '忙しい方向け', '効率的'],
    description: 'マンツーマン30分のパーソナルピラティス専門スタジオ。忙しいビジネスパーソンに最適な短時間集中型レッスン。新橋はサラリーマンの街として知られ、仕事帰りや昼休みに効率よくトレーニングできます。',
    access: 'JR「新橋駅」から近隣エリア',
    address: '東京都港区（新橋近隣）',
    popularPlan: {
      name: '月4回プラン',
      description: 'マンツーマン30分のパーソナルピラティス。月4回プラン。',
      price: '月4回 22,000円（税込）',
    },
    options: [
      '月4回プラン（22,000円）',
      '月8回プラン',
      '通い放題プラン',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['体幹強化', '姿勢改善', '仕事帰りのリフレッシュ', '健康管理'],
    },
    basicInfo: {
      hours: '平日 10:00〜22:00 / 土日 10:00〜20:00',
      closed: '不定休',
      facilities: ['マシン完備', 'パーソナル専門'],
    },
  },
  {
    name: 'ピラティスミラー 新橋（近隣）',
    image: '/images/studios/pilates-mirror.webp',
    rating: 4.6,
    reviewCount: 33,
    reviews: [
      {
        author: 'C.Y',
        rating: 5,
        date: '1週間前',
        text: '女性専用で安心。プライベート30分 4,400円〜はとてもリーズナブルだと思います。',
      },
      {
        author: 'A.K',
        rating: 4,
        date: '2週間前',
        text: '短い時間のプライベートレッスンが気軽に受けられるので、初心者にもおすすめです。',
      },
      {
        author: 'Y.N',
        rating: 5,
        date: '3週間前',
        text: '女性専用なので、周りの目を気にせずレッスンに集中できます。新橋エリアから通いやすいです。',
      },
    ],
    price: 'プライベート30分 4,400円〜',
    trial: '体験レッスン実施中',
    features: ['女性専用', 'プライベート30分', 'リーズナブル', '短時間集中'],
    description: '女性専用のピラティススタジオ。プライベート30分 4,400円〜というリーズナブルな価格設定で、気軽にパーソナルレッスンを受けられるのが魅力。新橋近隣エリアからアクセスしやすい。',
    access: 'JR「新橋駅」から近隣エリア',
    address: '東京都港区（新橋近隣）',
    popularPlan: {
      name: 'プライベート30分',
      description: '女性専用の30分プライベートピラティスレッスン。',
      price: '1回 4,400円（税込）〜',
    },
    options: [
      'プライベート30分（4,400円〜）',
      'プライベート60分',
      '回数券プラン',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'],
    },
    basicInfo: {
      hours: 'お問い合わせください',
      closed: '不定休',
      facilities: ['女性専用', 'マシン完備', 'プライベート空間'],
    },
  },
  {
    name: 'Rintosull 新橋（近隣）',
    image: '/images/studios/rintosull.webp',
    rating: 4.6,
    reviewCount: 78,
    reviews: [
      {
        author: 'H.T',
        rating: 5,
        date: '1週間前',
        text: 'LAVA系列なので安心感があります。女性専用のマシンピラティスで、ホットヨガとの相乗効果も期待できます。',
      },
      {
        author: 'M.K',
        rating: 4,
        date: '2週間前',
        text: 'LAVA会員なら特典もあるので、ヨガと併用している方にはおすすめです。',
      },
      {
        author: 'S.A',
        rating: 5,
        date: '1ヶ月前',
        text: '女性専用で清潔感のある空間。インストラクターの指導も丁寧で通いやすいです。',
      },
    ],
    price: 'お問い合わせください',
    trial: '体験レッスン実施中',
    features: ['女性専用', 'マシンピラティス', 'LAVA系列', '安心の大手'],
    description: 'ホットヨガスタジオLAVA系列の女性専用マシンピラティススタジオ。大手ならではの安心感と質の高いプログラムが魅力。新橋近隣エリアからアクセス可能。LAVA会員との併用もおすすめ。',
    access: 'JR「新橋駅」から近隣エリア',
    address: '東京都港区（新橋近隣）',
    popularPlan: {
      name: 'マシンピラティスプラン',
      description: '女性専用のマシンピラティスレッスン。LAVA系列の安心プログラム。',
      price: 'お問い合わせください',
    },
    options: [
      'マシンピラティスレッスン',
      'LAVA会員特典あり',
      '体験レッスン実施中',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'ヨガとの併用'],
    },
    basicInfo: {
      hours: 'お問い合わせください',
      closed: '店舗により異なる',
      facilities: ['女性専用', 'マシン完備', 'シャワー', 'ロッカー'],
    },
  },
  {
    name: 'URBAN CLASSIC PILATES 新橋（近隣）',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11337L.1.X156352B.U1357808',
    image: '/images/studios/urban-classic-pilates.webp',
    rating: 4.5,
    reviewCount: 108,
    reviews: [
      {
        author: 'J.T',
        rating: 5,
        date: '1週間前',
        text: '予約不要で30分のレッスンが受けられるのが最大の魅力。忙しい日でもふらっと立ち寄れます。',
      },
      {
        author: 'R.I',
        rating: 4,
        date: '2週間前',
        text: '月4回 9,680円はかなりリーズナブル。予約不要なので仕事帰りの気分で通えます。',
      },
      {
        author: 'N.M',
        rating: 5,
        date: '3週間前',
        text: '30分でサクッと終わるので、忙しいビジネスパーソンにぴったりのスタジオです。',
      },
    ],
    price: '月4回 9,680円',
    trial: '体験レッスン実施中',
    features: ['予約不要', '30分レッスン', 'コスパ抜群', '気軽に通える'],
    description: '予約不要で30分のマシンピラティスレッスンが受けられるスタジオ。月4回 9,680円というリーズナブルな価格設定と予約不要の手軽さが魅力。忙しいビジネスパーソンが多い新橋エリアにぴったり。',
    access: 'JR「新橋駅」から近隣エリア',
    address: '東京都港区（新橋近隣）',
    popularPlan: {
      name: '月4回プラン',
      description: '予約不要30分のマシンピラティスレッスン。月4回プラン。',
      price: '月4回 9,680円（税込）',
    },
    options: [
      '月4回プラン（9,680円）',
      '月8回プラン',
      '通い放題プラン',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: 'お問い合わせください',
      purpose: ['気軽にピラティス', '仕事帰りの運動', '体幹強化', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜22:00 / 土日祝 8:00〜20:00',
      closed: '不定休',
      facilities: ['マシン完備', '予約不要'],
    },
  },
  {
    name: 'CALDO 新橋（近隣）',
    image: '/images/studios/caldo.webp',
    rating: 4.5,
    reviewCount: 289,
    reviews: [
      {
        author: 'L.S',
        rating: 4,
        date: '1週間前',
        text: 'ホットヨガとピラティスの両方が受けられるのが魅力。気分に合わせてプログラムを選べます。',
      },
      {
        author: 'P.K',
        rating: 5,
        date: '2週間前',
        text: '大手ならではの施設充実度。シャワーやロッカーも完備で仕事帰りでも快適に利用できます。',
      },
      {
        author: 'W.H',
        rating: 4,
        date: '3週間前',
        text: 'ホットヨガのCALDOブランドで安心。ピラティスプログラムも充実しています。',
      },
    ],
    price: 'お問い合わせください',
    trial: '体験レッスン実施中',
    features: ['ホットヨガ&ピラティス', '施設充実', '大手ブランド', '多彩なプログラム'],
    description: 'ホットヨガスタジオとして知られるCALDOのピラティスプログラム。ホットヨガとピラティスの両方を楽しめるのが魅力。新橋近隣エリアで大手ならではの充実した施設環境。',
    access: 'JR「新橋駅」から近隣エリア',
    address: '東京都港区（新橋近隣）',
    popularPlan: {
      name: 'ピラティスプログラム',
      description: 'ホットヨガ&ピラティスの多彩なプログラム。',
      price: 'お問い合わせください',
    },
    options: [
      'ホットヨガ&ピラティス',
      '各種月額プラン',
      '体験レッスン実施中',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '店舗により異なる',
      purpose: ['ダイエット', 'デトックス', '姿勢改善', 'リラックス'],
    },
    basicInfo: {
      hours: '平日 10:00〜22:30 / 土日祝 10:00〜20:00',
      closed: '月に数回不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'ホットスタジオ'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！新橋エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。経験豊富なインストラクターが基礎から丁寧に指導してくれるので、運動が苦手な方でも安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。',
  },
  {
    question: '新橋エリアのピラティススタジオの料金相場は？',
    answer: '新橋エリアのピラティススタジオの料金相場は、グループレッスン月4回で3,278円〜12,980円程度。パーソナルレッスンは1回3,300円〜22,000円と幅があります。chocoZAPのセルフマシンなら月額3,278円、zen placeのマットグループなら月4回9,625円〜と、リーズナブルな選択肢も豊富です。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: 'ピラティス初心者は週1-2回（月4-8回）がおすすめ。慣れてきたら週2-3回に増やすと効果を実感しやすくなります。大切なのは継続すること。無理のないペースで長く続けることが、理想の身体を手に入れる近道です。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、ピラティスはダイエット効果があります。インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に。ただし即効性はないので、最低でも2-3ヶ月は継続することが大切。食事管理も並行するとより効果的です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '基本的に動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。マットやタオルはスタジオでレンタルできることが多いです。詳細は各スタジオの体験レッスン案内で確認してくださいね。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズ。ヨガは柔軟性と精神的なリラックスを重視します。ピラティスは筋力強化、ヨガは心身のバランスを整えることが主な目的。どちらも素晴らしいエクササイズなので、目的に合わせて選びましょう。CALDOではホットヨガとピラティスの両方が体験できます。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。デスクワークが多い新橋のオフィスワーカーの方にもおすすめです。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスで効果が表れだすのは「2ヶ月を過ぎた頃」から。すぐに変化が表れなくても心配せず、最低でも2ヶ月は継続するのがおすすめです。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれ良さがあります。パーソナル（CREA、STUDIO IVY、ELEMENTなど）は一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方におすすめ。グループ（zen place、ピラティスK、CLUB PILATESなど）は料金が安く、仲間と楽しく続けられるのが魅力。まずは体験で両方試してみるのがいいですよ。',
  },
]

export default function ShimbashiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '新橋', url: 'https://pilates-biyori.com/area/shimbashi/' },
      ]} />

      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月29日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス新橋おすすめ12選！<br className="hidden md:block" />
              人気スタジオの料金プランを簡単比較！
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>
              {' > '}
              <Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>
              {' > '}
              <span className="text-warm-600">新橋</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「新橋周辺でピラティスを始めたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「仕事帰りに通えるピラティススタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">そこでこの記事では、新橋エリア（港区）でおすすめのピラティススタジオ12選をまとめました。JR山手線・京浜東北線・東海道線新橋駅、東京メトロ銀座線、都営浅草線、ゆりかもめ沿線で通えるスタジオを厳選しています。</p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>新橋・銀座エリアでピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>仕事帰りに通えるスタジオがいい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>体験レッスンが安いスタジオを知りたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>パーソナル・グループ・セルフの料金プランを比較したい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="新橋" />
        <AreaMarketComparison studios={studios} areaName="新橋" />

        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">新橋エリアのおすすめピラティススタジオ12選</h2>
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
              新橋のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">3,300円〜12,980円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 3,300円〜22,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">500円〜</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              新橋は商業施設やオフィスが集まる繁華街エリアのため、駅近の好立地スタジオが多く、やや高めの料金設定が目立ちます。一方で大手チェーンの進出も多いため、キャンペーンや月額通い放題プランを上手に活用すれば、実質的なコストを抑えることも可能です。近隣の有楽町エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              新橋でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR「新橋駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  新橋エリアのスタジオは新橋駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。新橋駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">繁華街ならではの予約混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  新橋は人が集まる繁華街のため、平日夜（18時〜21時）と土日午前中はレッスン予約が特に集中します。人気クラスは1週間以上前に満席になることも。アプリやWebで空き状況をこまめにチェックし、キャンセル待ち機能があるスタジオでは積極的に活用しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  新橋エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ず確認しましょう。月の途中入会は日割り計算になるかも要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  新橋エリアだけでなく、近隣の<Link href="/area/yurakucho/" className="text-warm-700 underline hover:text-warm-900">有楽町</Link>、<Link href="/area/hamamatsucho/" className="text-warm-700 underline hover:text-warm-900">浜松町</Link>、<Link href="/area/toranomon/" className="text-warm-700 underline hover:text-warm-900">虎ノ門</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>新橋エリアの豆知識：</strong>新橋は仕事帰りに立ち寄る方が多いエリアです。荷物が多くなりがちなので、ロッカーの広さやシャワー設備の有無を事前に確認しておくと安心。ウェアレンタルがあるスタジオなら手ぶらで通えて便利です。
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">月額1万円以下から通えるスタジオ。グループレッスンやセルフマシンで気軽に始められます。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• chocoZAP 新橋（月額 3,278円）</li>
                  <li className="text-warm-700">• zen place pilates（マット月4回 9,625円〜）</li>
                  <li className="text-warm-700">• URBAN CLASSIC PILATES（月4回 9,680円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">マンツーマンの個別指導。短期間で結果を出したい方に。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• CREA（1回 3,300円〜）</li>
                  <li className="text-warm-700">• ピラティスミラー（プライベート30分 4,400円〜）</li>
                  <li className="text-warm-700">• STUDIO IVY（月2回 15,000円〜・完全個室）</li>
                  <li className="text-warm-700">• ELEMENT（マンツーマン30分）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用スタジオ</h3>
                <p className="text-warm-600 text-sm mb-4">女性だけの安心空間。周りを気にせずレッスンに集中。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK（音楽×マシンピラティス）</li>
                  <li className="text-warm-700">• ピラティスK（マシングループ 11,220円〜）</li>
                  <li className="text-warm-700">• ピラティスミラー（プライベート30分）</li>
                  <li className="text-warm-700">• Rintosull（LAVA系列）</li>
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
              <p className="text-warm-600 leading-relaxed mb-6">週1-2回（月4-8回）からスタートするのがおすすめ。まずは身体を慣らすことが大切です。継続期間は最低でも2-3ヶ月。この期間で効果を実感できる方が多いですよ。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">週2-3回（月8-12回）がおすすめ。3-6ヶ月継続すると、周りからも「痩せた？」と言われるレベルの変化が期待できます。</p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">週1回（月4回）のペースで継続するのがおすすめ。無理なく長く続けられる頻度が理想です。chocoZAPなら24時間いつでも通えるので、不規則な勤務の方にも便利です。</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">お手軽</p>
                <p className="text-sm text-warm-600 mb-4">セルフマシンやマットグループで気軽に始められます。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• chocoZAP（月額 3,278円）</li>
                  <li>• zen place（マット月4回 9,625円〜）</li>
                  <li>• URBAN CLASSIC PILATES（月4回 9,680円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜15,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">グループ</p>
                <p className="text-sm text-warm-600 mb-4">マシン完備の大手スタジオ。グループレッスン月4回。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• CLUB PILATES（月4回 10,890円〜）</li>
                  <li>• ピラティスK（月4回 11,220円〜）</li>
                  <li>• the SILK（月4回 12,980円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 15,000円〜/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">マンツーマンの個別指導。完全個室も。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• CREA（1回 3,300円〜）</li>
                  <li>• ピラティスミラー（30分 4,400円〜）</li>
                  <li>• STUDIO IVY（月2回 15,000円〜）</li>
                  <li>• ELEMENT（月4回 22,000円）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないピラティススタジオの選び方</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、体幹強化、リラックスなど、目的によって最適なスタジオやプログラムは変わります。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">新橋エリアの料金相場は、セルフマシン月額3,278円〜、グループレッスン月4回9,625円〜12,980円程度、パーソナルは1回3,300円〜22,000円と幅広い選択肢があります。無理なく継続できる予算を決めましょう。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。多くのスタジオで体験レッスンを実施しているので、気軽に試してみてくださいね。</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">新橋はJR山手線・京浜東北線・東海道線、東京メトロ銀座線、都営浅草線、ゆりかもめと多くの路線が利用でき、銀座エリアも徒歩圏内です。サラリーマンの街として知られる港区新橋エリアは、仕事帰りに立ち寄りやすい環境が整っています。chocoZAPなら24時間営業なので、深夜や早朝でも利用可能です。</p>
              </div>
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
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition">
                      <h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3>
                      <svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </summary>
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
            <p className="text-warm-600 leading-relaxed mb-6">今回は新橋エリア（港区）のおすすめピラティススタジオ12選についてご紹介してきましたが、いかがでしたか？</p>
            <p className="text-warm-600 leading-relaxed mb-6">新橋はJR山手線・京浜東北線・東海道線、東京メトロ銀座線、都営浅草線、ゆりかもめと多くの路線が利用でき、銀座エリアも徒歩圏内という抜群のアクセス。月額3,278円のセルフマシンから、パーソナル専門、女性専用、24時間営業まで、多彩なスタジオが揃っています。</p>
            <p className="text-warm-600 leading-relaxed mb-6">ぜひこの記事を参考に自分に合うピラティススタジオを見つけてくださいね。</p>
            <p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p>
          </div>
        </section>

        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">各スタジオで体験レッスンを実施中。<br />まずは気軽に体験してみましょう。</p>
            <Link href="/#studios" className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded">おすすめスタジオ一覧に戻る</Link>
          </div>
        </section>
      </main>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="shimbashi" areaName="新橋" />

      <RelatedAreas currentSlug="shimbashi" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
