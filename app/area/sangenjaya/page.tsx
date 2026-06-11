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



export const metadata = {
  title: '【2026最新】ピラティス三軒茶屋おすすめ12選！人気スタジオの料金プランを簡単比較！',
  description: '三軒茶屋エリアのおすすめピラティススタジオ12選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,三軒茶屋,東京,世田谷区,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 三軒茶屋',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 32,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '2週間前',
        text: '三軒茶屋駅から徒歩3分で通いやすいです。マットもマシンも両方受けられるのが嬉しい。インストラクターの質が高く、身体の使い方を丁寧に教えてくれます。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '1ヶ月前',
        text: '少人数制なので丁寧に見てもらえます。マシンの種類も豊富で、自分のレベルに合わせて進められます。男性も通えるので夫婦で利用しています。',
      },
      {
        author: 'K.H',
        rating: 4,
        date: '3週間前',
        text: '全国展開しているので出張先でも通えるのが便利です。三軒茶屋はカフェも多く、レッスン後のリフレッシュも楽しめます。',
      },
    ],
    price: 'マットグループ月4回 9,625円〜',
    trial: '体験レッスン 3,300円',
    features: ['マット&マシン', '初心者歓迎', '三軒茶屋駅世田谷通り口徒歩3分', '男性OK'],
    description: '全国100店舗以上展開の大手ピラティススタジオ。三軒茶屋駅世田谷通り口から徒歩3分の好立地。マットグループ、マシン（リフォーマー）グループ、プライベートレッスンと幅広いメニューを提供。マットグループ月4回9,625円〜とリーズナブル。経験豊富なインストラクターが一人ひとりに合わせた丁寧な指導を行います。男性も利用可能です。',
    access: '東急田園都市線・世田谷線「三軒茶屋駅」世田谷通り口 徒歩3分',
    address: '東京都世田谷区三軒茶屋（三軒茶屋駅徒歩3分）',
    popularPlan: {
      name: 'マットグループ月4回プラン',
      description: 'マットグループレッスンを月4回受講できる人気プラン。三軒茶屋駅から徒歩3分で通いやすい。',
      price: '月4回 9,625円〜（税込）',
    },
    options: [
      'マットグループ月4回（9,625円〜）',
      'マットグループ月6回（13,200円〜）',
      'フリープラン（15,400円〜）',
      'プライベートレッスン追加（1回 9,900円〜）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'ウォーターサーバー'],
    },
  },
  {
    name: 'luluto（ルルト）三軒茶屋',
    image: '/images/studios/luluto.webp',
    rating: 4.9,
    reviewCount: 6,
    reviews: [
      {
        author: 'T.W',
        rating: 5,
        date: '5日前',
        text: '理学療法士が監修しているので、身体の状態をしっかり見てもらえます。完全マンツーマンなので、自分だけのプログラムで進められるのが嬉しい。',
      },
      {
        author: 'H.I',
        rating: 5,
        date: '1週間前',
        text: '体験が1,000円で、しかも体験当日に入会すると入会金が無料になるのでお得でした。丁寧なカウンセリングで安心感があります。',
      },
      {
        author: 'S.N',
        rating: 5,
        date: '2週間前',
        text: '腰痛が改善しました。理学療法士の知識に基づいた指導なので、身体の不調にしっかり向き合ってもらえます。料金は高めですが価値があります。',
      },
    ],
    price: '月3回 29,700円〜',
    trial: '体験レッスン 1,000円',
    features: ['理学療法士監修', '完全マンツーマン', '体験1,000円', '三軒茶屋駅近'],
    description: '理学療法士が監修する完全マンツーマンのマシンピラティススタジオ。一人ひとりの身体の状態を丁寧にカウンセリングし、オーダーメイドのプログラムを提供。腰痛・肩こりなどの身体の不調改善から、ボディメイクまで幅広く対応。体験レッスン1,000円、月3回29,700円、月4回38,400円。',
    access: '東急田園都市線・世田谷線「三軒茶屋駅」徒歩圏内',
    address: '東京都世田谷区三軒茶屋（三軒茶屋駅徒歩圏内）',
    popularPlan: {
      name: '月4回プラン',
      description: '完全マンツーマンで理学療法士監修のオーダーメイドレッスン。',
      price: '月4回 38,400円（税込）',
    },
    options: [
      '月3回プラン（29,700円）',
      '月4回プラン（38,400円）',
      '入会金（体験当日入会で無料）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['不調改善', '姿勢改善', 'リハビリ', 'ボディメイク'],
    },
    basicInfo: {
      hours: '店舗にお問い合わせください',
      closed: '店舗にお問い合わせください',
      facilities: ['ロッカー', 'マシン完備', '完全個室'],
    },
  },
  {
    name: 'ELEMENT 三軒茶屋本店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=U11199J.1.V154352I.U1357808',
    image: '/images/studios/element.webp',
    rating: 4.7,
    reviewCount: 22,
    reviews: [
      {
        author: 'K.S',
        rating: 5,
        date: '3日前',
        text: '30分のパーソナルレッスンなので、忙しい日でもサクッと通えます。体験3,300円で試せました。マンツーマンなので集中できます。',
      },
      {
        author: 'M.T',
        rating: 4,
        date: '1週間前',
        text: 'マシンピラティスのパーソナルジムなので、トレーナーさんがしっかりフォームを見てくれます。30分でも十分効果を感じられます。',
      },
      {
        author: 'Y.K',
        rating: 5,
        date: '2週間前',
        text: '三軒茶屋駅から近くて通いやすい。月4回22,000円でパーソナルが受けられるのはコスパが良いです。',
      },
    ],
    price: '月4回 22,000円',
    trial: '体験レッスン 3,300円',
    features: ['マンツーマン30分', '月4回 22,000円', '体験3,300円', '三軒茶屋駅近'],
    description: 'マシンピラティス専門のパーソナルジム。1回30分の短時間マンツーマンレッスンで、忙しい方でも効率的にトレーニングが可能。月4回22,000円とパーソナルの中ではリーズナブルな料金設定。体験レッスンは3,300円。マシンピラティスの専門トレーナーが正しいフォームで効果的に指導します。',
    access: '東急田園都市線・世田谷線「三軒茶屋駅」徒歩圏内',
    address: '東京都世田谷区三軒茶屋（三軒茶屋駅徒歩圏内）',
    popularPlan: {
      name: '月4回プラン',
      description: 'マシンピラティス専門トレーナーによる30分マンツーマンレッスン。',
      price: '月4回 22,000円（税込）',
    },
    options: [
      '月4回プラン（22,000円）',
      '体験レッスン（3,300円）',
      '30分マンツーマンレッスン',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['ボディメイク', '体幹強化', '姿勢改善', '運動不足解消'],
    },
    basicInfo: {
      hours: '店舗にお問い合わせください',
      closed: '店舗にお問い合わせください',
      facilities: ['ロッカー', 'マシン完備'],
    },
  },
  {
    name: 'NATURAglam 三軒茶屋',
    image: '/images/studios/naturaglam.webp',
    rating: 4.6,
    reviewCount: 17,
    reviews: [
      {
        author: 'R.M',
        rating: 5,
        date: '1週間前',
        text: '女性専用で安心して通えます。ヨガとピラティスの両方が受けられるのが嬉しい。1回あたり1,071円〜と驚きのコスパです。',
      },
      {
        author: 'A.S',
        rating: 4,
        date: '2週間前',
        text: '体験1,000円で気軽に始められました。レッスンの種類が豊富で飽きずに通えています。',
      },
      {
        author: 'C.T',
        rating: 5,
        date: '3週間前',
        text: 'アットホームな雰囲気で初心者でもリラックスしてレッスンを受けられます。少人数制なのも良いです。',
      },
    ],
    price: '1回 1,071円〜',
    trial: '体験レッスン 1,000円',
    features: ['女性専用', 'ヨガ&ピラティス', '体験1,000円', '1回1,071円〜'],
    description: '女性専用のヨガ＆ピラティススタジオ。1回あたり1,071円〜という圧倒的なコスパが魅力。体験レッスンも1,000円とリーズナブル。ヨガとピラティスの両方のレッスンが受けられるので、気分に合わせて選べます。アットホームな雰囲気で初心者も安心。',
    access: '東急田園都市線・世田谷線「三軒茶屋駅」徒歩圏内',
    address: '東京都世田谷区三軒茶屋（三軒茶屋駅徒歩圏内）',
    popularPlan: {
      name: '通い放題プラン',
      description: '1回あたり1,071円〜のお得なプラン。ヨガ・ピラティスどちらも受講可能。',
      price: '1回 1,071円〜（税込）',
    },
    options: [
      '体験レッスン（1,000円）',
      '通い放題プラン（1回1,071円〜）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['リラックス', '姿勢改善', 'ダイエット', '健康維持'],
    },
    basicInfo: {
      hours: '店舗にお問い合わせください',
      closed: '店舗にお問い合わせください',
      facilities: ['ロッカー', 'マット完備'],
    },
  },
  {
    name: 'ピラティスミラー 三軒茶屋',
    image: '/images/studios/pilates-mirror.webp',
    rating: 4.7,
    reviewCount: 42,
    reviews: [
      {
        author: 'R.N',
        rating: 5,
        date: '1週間前',
        text: '女性専用で安心感があります。プライベートレッスンが30分4,400円〜とリーズナブルで、気軽にパーソナルを受けられます。',
      },
      {
        author: 'A.H',
        rating: 4,
        date: '2週間前',
        text: 'プライベート30分4,400円というのは他のスタジオと比べてもかなりお手頃。短時間でサクッと通えるのが気に入っています。',
      },
      {
        author: 'M.M',
        rating: 5,
        date: '3週間前',
        text: '女性専用なので周りを気にせずレッスンに集中できます。設備も綺麗で清潔感があります。',
      },
    ],
    price: 'プライベート30分 4,400円〜',
    trial: '体験レッスンあり',
    features: ['女性専用', 'プライベート30分 4,400円〜', '清潔な設備', '三軒茶屋駅近'],
    description: '女性専用のマシンピラティススタジオ。プライベートレッスンが30分4,400円〜とリーズナブルな料金設定が魅力。短時間で効率的にトレーニングができるので、忙しい女性にもおすすめ。清潔で明るい空間で、リラックスしてレッスンを受けられます。',
    access: '東急田園都市線・世田谷線「三軒茶屋駅」徒歩圏内',
    address: '東京都世田谷区三軒茶屋（三軒茶屋駅徒歩圏内）',
    popularPlan: {
      name: 'プライベート30分プラン',
      description: '女性専用のプライベートマシンピラティスレッスン。',
      price: 'プライベート30分 4,400円〜（税込）',
    },
    options: [
      'プライベートレッスン 30分（4,400円〜）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', '運動不足解消', '健康維持'],
    },
    basicInfo: {
      hours: '施設により異なる',
      closed: '施設により異なる',
      facilities: ['ロッカー', 'マシン完備'],
    },
  },
  {
    name: 'STUDIO IVY 三軒茶屋',
    image: '/images/studios/studio-ivy.webp',
    rating: 4.7,
    reviewCount: 8,
    reviews: [
      {
        author: 'D.T',
        rating: 5,
        date: '4日前',
        text: '完全個室のパーソナルなので、人目を気にせずトレーニングに集中できます。月2回15,000円〜とパーソナルとしては始めやすい料金設定です。',
      },
      {
        author: 'P.K',
        rating: 5,
        date: '1週間前',
        text: 'トレーナーさんの指導がとても丁寧。個室空間で自分のペースで進められるのが気に入っています。',
      },
      {
        author: 'J.M',
        rating: 4,
        date: '2週間前',
        text: '完全個室なのでリラックスして受けられます。月2回から始められるので、まずはお試し感覚で通い始めました。',
      },
    ],
    price: '月2回 15,000円〜',
    trial: '体験レッスンあり',
    features: ['完全個室', 'パーソナル', '月2回 15,000円〜', '三軒茶屋駅近'],
    description: '完全個室のパーソナルピラティススタジオ。プライベートな空間でマンツーマン指導を受けられるので、人目を気にせずトレーニングに集中できます。月2回15,000円〜と始めやすい料金設定。一人ひとりの目標に合わせたオーダーメイドプログラムを提供。',
    access: '東急田園都市線・世田谷線「三軒茶屋駅」徒歩圏内',
    address: '東京都世田谷区三軒茶屋（三軒茶屋駅徒歩圏内）',
    popularPlan: {
      name: '月2回プラン',
      description: '完全個室でのパーソナルレッスン。まずは気軽に始めたい方に。',
      price: '月2回 15,000円〜（税込）',
    },
    options: [
      '月2回プラン（15,000円〜）',
      '月4回プラン（料金は店舗にお問い合わせ）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['ボディメイク', '体幹強化', '姿勢改善', 'ダイエット'],
    },
    basicInfo: {
      hours: '店舗にお問い合わせください',
      closed: '店舗にお問い合わせください',
      facilities: ['ロッカー', 'マシン完備', '完全個室'],
    },
  },
  {
    name: 'CLUB PILATES 三軒茶屋（近隣）',
    image: '/images/studios/club-pilates.webp',
    rating: 4.6,
    reviewCount: 104,
    reviews: [
      {
        author: 'F.H',
        rating: 5,
        date: '1週間前',
        text: '最大12名のグループレッスンで、ワイワイ楽しくピラティスができます。月4回10,890円〜はコスパ抜群です。',
      },
      {
        author: 'G.W',
        rating: 4,
        date: '2週間前',
        text: 'アメリカ発のピラティスブランドで、プログラムの質が高い。レベル別にクラスが分かれているので初心者でも安心です。',
      },
      {
        author: 'B.N',
        rating: 5,
        date: '3週間前',
        text: 'リフォーマーを使ったグループレッスンが楽しい。みんなで一緒にやると モチベーションも上がります。',
      },
    ],
    price: '月4回 10,890円〜',
    trial: '体験レッスンあり',
    features: ['最大12名グループ', 'リフォーマー使用', '月4回 10,890円〜', '三軒茶屋近隣'],
    description: 'アメリカ発のマシンピラティス専門スタジオ。最大12名のグループレッスンで、リフォーマーを使った本格的なマシンピラティスを体験できます。月4回10,890円〜とグループならではのリーズナブルな料金。レベル別にクラスが分かれているので初心者も安心です。',
    access: '三軒茶屋駅から近隣エリア',
    address: '東京都世田谷区（三軒茶屋近隣）',
    popularPlan: {
      name: '月4回プラン',
      description: '最大12名のグループリフォーマーレッスン。',
      price: '月4回 10,890円〜（税込）',
    },
    options: [
      '月4回プラン（10,890円〜）',
      '月8回プラン（料金は店舗にお問い合わせ）',
      'フリープラン（料金は店舗にお問い合わせ）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ボディメイク', '体幹強化', '姿勢改善', '楽しくトレーニング'],
    },
    basicInfo: {
      hours: '店舗にお問い合わせください',
      closed: '店舗にお問い合わせください',
      facilities: ['ロッカー', 'リフォーマー完備'],
    },
  },
  {
    name: 'ピラティスK 三軒茶屋（近隣）',
    image: '/images/studios/pilates-k.webp',
    rating: 4.6,
    reviewCount: 117,
    reviews: [
      {
        author: 'W.A',
        rating: 5,
        date: '5日前',
        text: '女性専用のマシンピラティススタジオで安心して通えます。月4回11,220円〜とコスパが良い。スタジオもおしゃれで気分が上がります。',
      },
      {
        author: 'U.R',
        rating: 4,
        date: '2週間前',
        text: 'グループでのマシンピラティスが楽しい。月4回プランから始めて、慣れてきたら回数を増やしました。',
      },
      {
        author: 'Q.T',
        rating: 5,
        date: '3週間前',
        text: 'ボディメイクに特化したプログラムが多く、身体の変化を実感しています。女性専用なので気兼ねなく通えます。',
      },
    ],
    price: '月4回 11,220円〜',
    trial: '体験レッスンあり',
    features: ['女性専用', 'マシンピラティス', '月4回 11,220円〜', '三軒茶屋近隣'],
    description: '女性専用のマシンピラティススタジオ。リフォーマーを使ったグループレッスンで、月4回11,220円〜とリーズナブル。ボディメイクに特化したプログラムが充実しており、おしゃれなスタジオ空間でモチベーション高くトレーニングできます。',
    access: '三軒茶屋駅から近隣エリア',
    address: '東京都世田谷区（三軒茶屋近隣）',
    popularPlan: {
      name: '月4回プラン',
      description: '女性専用マシンピラティスグループレッスン。',
      price: '月4回 11,220円〜（税込）',
    },
    options: [
      '月4回プラン（11,220円〜）',
      '月8回プラン（料金は店舗にお問い合わせ）',
      '通い放題プラン（料金は店舗にお問い合わせ）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '美容'],
    },
    basicInfo: {
      hours: '店舗にお問い合わせください',
      closed: '店舗にお問い合わせください',
      facilities: ['ロッカー', 'リフォーマー完備', 'パウダールーム'],
    },
  },
  {
    name: 'Rintosull 三軒茶屋（近隣）',
    image: '/images/studios/rintosull.webp',
    rating: 4.5,
    reviewCount: 44,
    reviews: [
      {
        author: 'V.N',
        rating: 5,
        date: '1週間前',
        text: 'LAVA系列なので安心感があります。女性専用マシンピラティスで、ホットヨガとの併用もできるのが嬉しい。',
      },
      {
        author: 'X.M',
        rating: 4,
        date: '2週間前',
        text: 'マシンピラティス初心者でしたが、丁寧に教えてもらえました。LAVA会員なら割引もあってお得です。',
      },
      {
        author: 'Z.K',
        rating: 4,
        date: '3週間前',
        text: 'スタジオが綺麗で清潔感があります。女性専用なので安心して通えます。',
      },
    ],
    price: '料金は店舗にお問い合わせください',
    trial: '体験レッスンあり',
    features: ['女性専用', 'マシンピラティス', 'LAVA系列', '三軒茶屋近隣'],
    description: 'ホットヨガLAVA系列の女性専用マシンピラティススタジオ。LAVA会員なら割引が適用されるなど、ホットヨガとの併用がしやすい。清潔で明るいスタジオ環境で、初心者でも安心してマシンピラティスを始められます。',
    access: '三軒茶屋駅から近隣エリア',
    address: '東京都世田谷区（三軒茶屋近隣）',
    popularPlan: {
      name: 'レギュラープラン',
      description: 'LAVA系列の女性専用マシンピラティスレッスン。',
      price: '料金は店舗にお問い合わせください',
    },
    options: [
      'LAVA会員割引あり',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ホットヨガとの併用', '健康維持'],
    },
    basicInfo: {
      hours: '店舗にお問い合わせください',
      closed: '店舗にお問い合わせください',
      facilities: ['ロッカー', 'マシン完備', 'シャワー'],
    },
  },
  {
    name: 'URBAN CLASSIC PILATES 三軒茶屋（近隣）',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11337L.1.X156352B.U1357808',
    image: '/images/studios/urban-classic-pilates.webp',
    rating: 4.5,
    reviewCount: 127,
    reviews: [
      {
        author: 'O.H',
        rating: 5,
        date: '1週間前',
        text: '予約不要で30分のレッスンが受けられるのが最高。仕事帰りにふらっと寄れます。月4回9,680円はかなりコスパが良い。',
      },
      {
        author: 'I.S',
        rating: 4,
        date: '2週間前',
        text: '予約なしで通えるのがとにかく便利。急にスケジュールが空いた時にもサッと行けます。',
      },
      {
        author: 'E.T',
        rating: 5,
        date: '3週間前',
        text: '30分のレッスンなので負担が少なく、続けやすいです。月4回9,680円で無理なく通えています。',
      },
    ],
    price: '月4回 9,680円',
    trial: '体験レッスンあり',
    features: ['予約不要', '30分レッスン', '月4回 9,680円', '三軒茶屋近隣'],
    description: '予約不要で通えるマシンピラティススタジオ。1回30分のレッスンで、忙しい方でも気軽にピラティスを続けられます。月4回9,680円とリーズナブル。好きな時間にふらっと立ち寄れる手軽さが魅力です。',
    access: '三軒茶屋駅から近隣エリア',
    address: '東京都世田谷区（三軒茶屋近隣）',
    popularPlan: {
      name: '月4回プラン',
      description: '予約不要で30分のマシンピラティスレッスン。',
      price: '月4回 9,680円（税込）',
    },
    options: [
      '月4回プラン（9,680円）',
      '月8回プラン（料金は店舗にお問い合わせ）',
      '通い放題プラン（料金は店舗にお問い合わせ）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['運動不足解消', '体幹強化', '姿勢改善', '気軽にトレーニング'],
    },
    basicInfo: {
      hours: '店舗にお問い合わせください',
      closed: '店舗にお問い合わせください',
      facilities: ['ロッカー', 'マシン完備'],
    },
  },
  {
    name: 'CALDO 三軒茶屋（近隣）',
    image: '/images/studios/caldo.webp',
    rating: 4.4,
    reviewCount: 86,
    reviews: [
      {
        author: 'T.A',
        rating: 5,
        date: '5日前',
        text: 'ホットヨガとピラティスの両方が受けられるのが良いです。温かい環境でのピラティスは身体がほぐれやすく、効果を感じます。',
      },
      {
        author: 'M.R',
        rating: 4,
        date: '1週間前',
        text: '施設が綺麗で広い。ホットヨガが有名ですが、ピラティスのプログラムも充実しています。',
      },
      {
        author: 'K.N',
        rating: 4,
        date: '2週間前',
        text: 'コスパが良く、レッスンの種類も多いので飽きずに通えます。予約なしで通えるのも便利です。',
      },
    ],
    price: '料金は店舗にお問い合わせください',
    trial: '体験レッスンあり',
    features: ['ホットヨガ&ピラティス', '予約不要', '充実の施設', '三軒茶屋近隣'],
    description: 'ホットヨガ大手のCALDOが運営するスタジオ。ホットヨガに加えてピラティスのプログラムも充実。温かい環境でのレッスンは身体がほぐれやすく、初心者にもおすすめ。広くて清潔な施設で快適にトレーニングできます。',
    access: '三軒茶屋駅から近隣エリア',
    address: '東京都世田谷区（三軒茶屋近隣）',
    popularPlan: {
      name: 'レギュラープラン',
      description: 'ホットヨガ＆ピラティスが受講できるプラン。',
      price: '料金は店舗にお問い合わせください',
    },
    options: [
      'ホットヨガ＆ピラティス受講可能',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['デトックス', '柔軟性向上', '姿勢改善', 'リラックス'],
    },
    basicInfo: {
      hours: '店舗にお問い合わせください',
      closed: '店舗にお問い合わせください',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！三軒茶屋エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。zen place pilatesはマット&マシンの両方に対応、lulutoは理学療法士監修で身体の状態に合わせた指導が受けられます。NATURAglamやAGNIYOGAのようなアットホームなスタジオも初心者に人気です。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。三軒茶屋ではzen place pilatesが両方に対応、CLUB PILATESやピラティスKがマシン専門です。',
  },
  {
    question: '三軒茶屋のピラティススタジオの料金相場は？',
    answer: '三軒茶屋エリアのグループレッスン料金相場は、月4回で9,625円〜11,220円程度。予約不要のURBAN CLASSIC PILATESは月4回9,680円。パーソナルレッスンはELEMENTが月4回22,000円、lulutoが月3回29,700円〜。ピラティスミラーのプライベート30分4,400円〜も人気です。体験レッスンは1,000円〜3,300円が一般的です。',
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
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズ。ヨガは柔軟性と精神的なリラックスを重視します。ピラティスは筋力強化、ヨガは心身のバランスを整えることが主な目的。三軒茶屋にはNATURAglamやAGNIYOGAのようにヨガとピラティスの両方が受けられるスタジオもあります。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、改善が期待できます。特にluluto（ルルト）は理学療法士が監修しているため、腰痛や肩こりなどの身体の不調改善に強みがあります。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで根本原因を解消できます。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスで効果が表れだすのは「2ヶ月を過ぎた頃」から。これは人間の細胞が生まれ変わるサイクルがそのくらいだからです。すぐに変化が表れなくても心配せず、最低でも2ヶ月は継続するのがおすすめです。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれ良さがあります。パーソナルは一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方にはluluto、ELEMENT、STUDIO IVYがおすすめ。グループはzen place pilates、CLUB PILATES、ピラティスKで料金を抑えながら楽しく続けられます。まずは体験で両方試してみるのがいいですよ。',
  },
]

export default function SangenjayaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '三軒茶屋', url: 'https://pilates-biyori.com/area/sangenjaya/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス三軒茶屋おすすめ12選！<br className="hidden md:block" />
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
              <Link href="/area" className="hover:text-warm-800 transition">地域別</Link>
              {' > '}
              <span className="text-warm-600">三軒茶屋</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="三軒茶屋" />

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
              「三軒茶屋で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、東急田園都市線・世田谷線「三軒茶屋駅」周辺でおすすめのピラティススタジオ12選をまとめました。三軒茶屋は渋谷まで田園都市線で2駅というアクセスの良さに加え、おしゃれなカフェや雑貨店が多い世田谷区の人気エリアです。駅近のスタジオから近隣エリアの大手スタジオまで幅広くご紹介します。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>三軒茶屋でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>料金やレッスン内容を比較したい</span>
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
                  <span>女性専用スタジオを探している</span>
                </li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">
              それではさっそく見ていきましょう！
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="三軒茶屋" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              三軒茶屋のおすすめピラティススタジオ12選
            </h2>
            <div className="space-y-8">
              {studios.map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>


        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              三軒茶屋のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">1,071円〜29,700円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 1,071円〜38,400円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">1,000円〜3,300円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              三軒茶屋は住宅地としての人気が高く、地元在住の方が徒歩や自転車で通えるスタジオが充実しています。繁華街ほど料金は高くなく、かつ都心へのアクセスも良いバランスの取れたエリアです。平日昼間のクラスは比較的空いていて狙い目です。近隣の下北沢エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              三軒茶屋でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">東急田園都市線・世田谷線「三軒茶屋駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  三軒茶屋エリアのスタジオは三軒茶屋駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。三軒茶屋駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">住宅地ならではの予約の特徴を把握</h3>
                <p className="text-warm-600 leading-relaxed">
                  三軒茶屋は住宅地のため、主婦・ママ層が多い平日午前中と、仕事帰りの平日夜が予約のピークタイムです。土日は意外と空いているスタジオも多いので、狙い目の時間帯を見つけておくと通いやすくなります。子連れOKのクラスがあるスタジオもあるので、お子さまがいる方は確認してみましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  三軒茶屋エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかを確認しましょう。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  三軒茶屋エリアだけでなく、近隣の<Link href="/area/shimokitazawa" className="text-warm-700 underline hover:text-warm-900">下北沢</Link>、<Link href="/area/shibuya" className="text-warm-700 underline hover:text-warm-900">渋谷</Link>、<Link href="/area/futakotamagawa" className="text-warm-700 underline hover:text-warm-900">二子玉川</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>三軒茶屋エリアの豆知識：</strong>三軒茶屋は地元の方が徒歩や自転車で通うケースが多いエリアです。自転車の方はスタジオ近くの駐輪スペースの有無を確認しておきましょう。近場なら荷物も最小限で済むので、気軽に続けやすいのが三軒茶屋の良さです。
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
                  月額1万円前後で通えるスタジオ。グループレッスンで気軽に始められます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（月4回 9,625円〜）</li>
                  <li className="text-warm-700">• URBAN CLASSIC PILATES（月4回 9,680円）</li>
                  <li className="text-warm-700">• CLUB PILATES（月4回 10,890円〜）</li>
                  <li className="text-warm-700">• NATURAglam（1回 1,071円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマン指導で効果を最大化。姿勢改善や身体の不調にしっかり向き合いたい方に。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• luluto（理学療法士監修・完全マンツーマン）</li>
                  <li className="text-warm-700">• ELEMENT（マンツーマン30分・月4回 22,000円）</li>
                  <li className="text-warm-700">• STUDIO IVY（完全個室・月2回 15,000円〜）</li>
                  <li className="text-warm-700">• ピラティスミラー（プライベート30分 4,400円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用スタジオ</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの空間で安心してトレーニングしたい方に。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスミラー（プライベート30分 4,400円〜）</li>
                  <li className="text-warm-700">• NATURAglam（ヨガ&ピラティス）</li>
                  <li className="text-warm-700">• AGNIYOGA（ヨガ&ピラティス）</li>
                  <li className="text-warm-700">• ピラティスK（月4回 11,220円〜）</li>
                  <li className="text-warm-700">• Rintosull（LAVA系列）</li>
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
                週1-2回（月4-8回）からスタートするのがおすすめ。まずは身体を慣らすことが大切です。継続期間は最低でも2-3ヶ月。この期間で効果を実感できる方が多いですよ。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回（月8-12回）がおすすめ。しっかりと身体を変えたい方は頻度を上げることで効果も早く現れます。3-6ヶ月継続すると、周りからも「痩せた？」と言われるレベルの変化が期待できます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回（月4回）のペースで継続するのがおすすめ。無理なく長く続けられる頻度が理想です。ピラティスは継続が何より大切。自分のペースで楽しく通えるのが一番ですよ。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜12,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">グループ</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。コスパ良く始めたい方に。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates（月4回 9,625円〜）</li>
                  <li>• URBAN CLASSIC PILATES（月4回 9,680円）</li>
                  <li>• CLUB PILATES（月4回 10,890円〜）</li>
                  <li>• ピラティスK（月4回 11,220円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 15,000〜22,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">
                  マンツーマン指導で効率的に。個室やプライベートレッスンが人気。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• STUDIO IVY（月2回 15,000円〜）</li>
                  <li>• ELEMENT（月4回 22,000円）</li>
                  <li>• ピラティスミラー（30分 4,400円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 30,000円〜/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">プレミアム</p>
                <p className="text-sm text-warm-600 mb-4">
                  専門家監修の完全マンツーマン。短期集中で結果を出したい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• luluto（月3回 29,700円〜）</li>
                  <li>• luluto（月4回 38,400円）</li>
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
                  まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、体幹強化、リラックスなど、目的によって最適なスタジオやプログラムは変わります。身体の不調改善が目的ならlulutoの理学療法士監修プログラム、効率的なボディメイクならELEMENTの30分パーソナルやSTUDIO IVYの完全個室パーソナルがおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  三軒茶屋エリアの料金相場は、グループレッスン月4回で9,625円〜11,220円程度、パーソナルは月2回15,000円〜月4回38,400円。無理なく継続できる予算を決めましょう。コスパ重視ならzen place pilatesの月4回9,625円〜やURBAN CLASSIC PILATESの月4回9,680円がおすすめです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。三軒茶屋エリアでは1,000円〜3,300円で体験レッスンを提供しているスタジオが多いので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。三軒茶屋は東急田園都市線と世田谷線が利用でき、渋谷まで田園都市線で2駅という好アクセス。おしゃれなカフェや雑貨店が並ぶ世田谷区の人気エリアなので、レッスン後のリフレッシュも楽しめますよ。URBAN CLASSIC PILATESのような予約不要のスタジオなら、さらに気軽に通えます。
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
              今回は三軒茶屋のおすすめピラティススタジオ12選をご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              三軒茶屋は渋谷まで田園都市線で2駅という好立地ながら、おしゃれなカフェや雑貨店が並ぶ世田谷区の住みやすいエリア。月4回9,625円〜のグループレッスンから、理学療法士監修のパーソナル、女性専用スタジオ、予約不要のスタジオまで、多彩な選択肢が揃っています。
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

      <RelatedAreas currentSlug="sangenjaya" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
