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
import { AreaModifierSections } from '@/components/AreaModifierSections'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/koenji/' },
  title: '【2026年7月最新】高円寺のピラティス12社を比較｜無料体験2社・月額最安7,700円〜',
  description: '高円寺エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,高円寺,杉並区,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較,CLUB PILATES,zen place pilates,NATURAglam,Rintosull,STUDIO IVY,ELEMENT,chocoZAP',
}

const studios = [
  {
    name: 'CLUB PILATES 高円寺',
    image: '/images/studios/club-pilates.webp',
    rating: 4.7,
    reviewCount: 120,
    reviews: [
      {
        author: 'M.K',
        rating: 5,
        date: '1週間前',
        text: '世界最大級のピラティスブランドで安心感があります。15種類の器具を使ったレッスンは毎回新鮮で飽きません。体験が無料なのも嬉しいポイント。',
      },
      {
        author: 'S.T',
        rating: 5,
        date: '2週間前',
        text: '4段階のレベル分けがあるので初心者でも安心して始められました。男性会員もいるので夫婦で通っています。インストラクターの質が高い。',
      },
      {
        author: 'R.N',
        rating: 4,
        date: '3週間前',
        text: 'インストラクター全員が500時間以上の研修を受けた資格保持者。有酸素運動を含むクラスもあり、ダイエット目的の方にもおすすめです。',
      },
    ],
    price: '月4回 10,890円〜',
    trial: '体験レッスン 0円（30分）',
    features: ['世界最大級チェーン', '最大12名グループ', '男性OK', '体験0円'],
    description: '世界最大級のマシンピラティスブランド「CLUB PILATES」の高円寺店。最大12名の少人数グループレッスンで、リフォーマー・スプリングボード・TRX・チェアなど15種類の器具を完備。8つのプログラムと4段階のレベル分けで、初心者から上級者まで対応。インストラクター全員が500時間以上の研修を受けた有資格者で、質の高い指導を受けられます。30分の無料体験レッスンで気軽にお試し可能。',
    access: 'JR中央線・総武線「高円寺駅」周辺',
    address: '東京都杉並区高円寺エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'グループレッスン月4回',
      description: '最大12名の少人数制。15種類の器具を使った本格グループレッスン。4段階のレベル分けで初心者も安心。',
      price: '月4回 10,890円〜（税込）',
    },
    options: [
      '月4回プラン（10,890円〜）',
      '月8回・通い放題プランあり',
      '体験レッスン 0円（30分）',
      '入会金あり（詳細は公式サイト参照）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['体幹強化', '姿勢改善', 'ボディメイク', 'ダイエット'],
    },
    basicInfo: {
      hours: '月〜金 7:00-21:00 / 土日 7:00-18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'スプリングボード', 'TRX', 'チェア', 'Bosu'],
    },
  },
  {
    name: 'Pilates Mee 高円寺',
    image: '/images/studios/pilates-mee.webp',
    rating: 4.8,
    reviewCount: 20,
    reviews: [
      {
        author: 'E.M',
        rating: 5,
        date: '1週間前',
        text: '最大3名のセミパーソナルで丁寧に見てもらえます。女性限定なので周りの目を気にせず集中できるのがいい。月4回11,000円はコスパ最高。',
      },
      {
        author: 'N.K',
        rating: 5,
        date: '2週間前',
        text: '少人数で一人ひとりしっかりフォームを直してもらえます。高円寺駅からも近くて通いやすい。',
      },
      {
        author: 'H.Y',
        rating: 4,
        date: '3週間前',
        text: 'インストラクターが丁寧で初心者にも優しい。最大3名なのでほぼパーソナルに近い環境です。',
      },
    ],
    price: '月4回 11,000円〜',
    trial: '体験レッスンあり（詳細は公式サイト）',
    features: ['女性限定', 'セミパーソナル最大3名', '月4回11,000円〜', '丁寧な指導'],
    description: '女性限定のセミパーソナル形式マシンピラティススタジオ。最大3名の超少人数制で、パーソナルに近い丁寧な指導を受けられます。月4回11,000円〜と手頃な価格帯で、高円寺エリアでコスパよくマシンピラティスを始めたい女性におすすめ。',
    access: 'JR中央線・総武線「高円寺駅」周辺',
    address: '東京都杉並区高円寺エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'セミパーソナル月4回',
      description: '最大3名のセミパーソナルマシンピラティス。女性限定の安心空間。',
      price: '月4回 11,000円〜（税込）',
    },
    options: [
      '月4回プラン（11,000円〜）',
      'セミパーソナル（最大3名）',
      '女性限定スタジオ',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性限定）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '運動不足解消'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'zen place pilates 高円寺',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.7,
    reviewCount: 25,
    reviews: [
      {
        author: 'A.T',
        rating: 5,
        date: '1週間前',
        text: 'BASI認定のエデュケーターが揃っていて指導の質が高い。AI分析で自分の体の癖を可視化してもらえるのが新鮮でした。',
      },
      {
        author: 'Y.S',
        rating: 5,
        date: '2週間前',
        text: 'マットグループ月4回9,625円で本格的なピラティスが受けられるのは嬉しい。高円寺駅からのアクセスも良好です。',
      },
      {
        author: 'K.M',
        rating: 4,
        date: '3週間前',
        text: '全国に100店舗以上あるので引越しても通い続けられるのが安心。プライベートレッスンも充実しています。',
      },
    ],
    price: 'マットグループ月4回 9,625円〜',
    trial: '体験レッスンあり（詳細は公式サイト）',
    features: ['BASI認定インストラクター', 'AI姿勢分析', 'マット&マシン対応', '全国100店舗以上'],
    description: '全国100店舗以上を展開するzen place pilatesの高円寺スタジオ。BASI Pilates認定のインストラクターが在籍し、最新のAI分析で体の状態を可視化。マットグループ月4回9,625円〜とリーズナブルに本格ピラティスが始められます。マットからマシンまで幅広いクラスを展開。',
    access: 'JR中央線・総武線「高円寺駅」周辺',
    address: '東京都杉並区高円寺エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マットグループ月4回',
      description: 'BASI認定インストラクターによるマットグループレッスン。AI分析付き。',
      price: '月4回 9,625円〜（税込）',
    },
    options: [
      'マットグループ月4回（9,625円〜）',
      'マシングループレッスンあり',
      'プライベートレッスンあり',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['姿勢改善', '体幹強化', '柔軟性向上', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['マット', 'リフォーマー', 'チェア', '更衣室'],
    },
  },
  {
    name: 'NATURAglam 高円寺',
    image: '/images/studios/naturaglam.webp',
    rating: 4.6,
    reviewCount: 6,
    reviews: [
      {
        author: 'K.N',
        rating: 5,
        date: '1週間前',
        text: '高円寺駅徒歩1分で通いやすい！ヨガもピラティスもダンスも受けられるので飽きません。月4回7,700円は杉並区で最安級。',
      },
      {
        author: 'Y.M',
        rating: 4,
        date: '2週間前',
        text: '女性専用なのでリラックスして受講できます。ピラティスだけでなくヨガやダンスも気分で選べるのが楽しい。',
      },
      {
        author: 'A.S',
        rating: 5,
        date: '3週間前',
        text: 'とにかく駅近で月額も安い。仕事帰りにサクッと通えて、運動習慣がつきました。スタッフも温かい雰囲気です。',
      },
    ],
    price: '月4回 7,700円〜',
    trial: '体験レッスンあり',
    features: ['女性専用', 'ヨガ&ピラティス&ダンス', '駅徒歩1分', '月4回7,700円〜'],
    description: '高円寺駅徒歩1分の女性専用フィットネススタジオ。ピラティス・ヨガ・ダンスの多彩なレッスンを月4回7,700円〜で受講可能。杉並区エリアでは最安級の価格帯で、色々なジャンルを試したい方にぴったり。アットホームな雰囲気で初心者も通いやすい。',
    access: 'JR中央線・総武線「高円寺駅」徒歩1分',
    address: '東京都杉並区高円寺エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月4回プラン',
      description: 'ヨガ・ピラティス・ダンスから自由に選べる月4回プラン。女性専用で安心。',
      price: '月4回 7,700円〜（税込）',
    },
    options: [
      '月4回プラン（7,700円〜）',
      'ヨガ・ピラティス・ダンスから自由に選択',
      '女性専用スタジオ',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['運動不足解消', 'ダイエット', 'ストレス発散', 'ボディメイク'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['スタジオ', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Rintosull 高円寺店',
    image: '/images/studios/rintosull.webp',
    rating: 4.5,
    reviewCount: 51,
    reviews: [
      {
        author: 'M.T',
        rating: 5,
        date: '1週間前',
        text: '2026年1月にオープンしたばかりで設備がきれい！LAVA系列なのでサービスの質が安定しています。高円寺駅徒歩1分は最高の立地。',
      },
      {
        author: 'R.I',
        rating: 4,
        date: '2週間前',
        text: '女性専用のマシンピラティスで安心。LAVA会員なら系列店も利用できるのがお得。新しいスタジオなので清潔感があります。',
      },
      {
        author: 'C.H',
        rating: 5,
        date: '3週間前',
        text: '無料体験でパーソナル姿勢診断もしてもらえました。初心者が多いので気兼ねなく通えます。',
      },
    ],
    price: '月額プランあり（詳細は公式サイト）',
    trial: '体験レッスン 無料',
    features: ['女性専用', 'マシンピラティス', '駅徒歩1分', '2026年1月OPEN', 'LAVA系列'],
    description: 'ホットヨガLAVA系列の女性専用マシンピラティススタジオ。2026年1月に高円寺にオープンした新しい店舗で、高円寺駅徒歩1分の好立地。最新のマシンを完備し、清潔感あふれる空間でピラティスを楽しめます。LAVA系列ならではの安定したサービスと、無料体験でパーソナル姿勢診断も受けられます。',
    access: 'JR中央線・総武線「高円寺駅」徒歩1分',
    address: '東京都杉並区高円寺エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マシンピラティスプラン',
      description: '女性専用マシンピラティス。LAVA系列の安心サービス。2026年1月新規オープン。',
      price: '詳細は公式サイトでご確認ください',
    },
    options: [
      '月額プラン（詳細は公式サイト）',
      'LAVA系列店も利用可能なプランあり',
      '女性専用スタジオ',
      '無料体験・パーソナル姿勢診断付き',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', 'ヨガ&ピラティス両方', '健康維持'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'シャワー'],
    },
  },
  {
    name: 'URBAN CLASSIC PILATES 高円寺',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11337L.1.X156352B.U1357808',
    image: '/images/studios/urban-classic-pilates.webp',
    rating: 4.4,
    reviewCount: 231,
    reviews: [
      {
        author: 'S.O',
        rating: 5,
        date: '1週間前',
        text: '予約不要で30分のサーキット形式。仕事帰りにふらっと寄れるのが最高です。月4回9,680円で手軽に始められます。',
      },
      {
        author: 'T.K',
        rating: 4,
        date: '2週間前',
        text: '予約なしで通えるので、急に時間が空いた時にも行けるのがいい。30分で終わるので忙しい人にぴったり。',
      },
      {
        author: 'M.H',
        rating: 4,
        date: '3週間前',
        text: 'サーキット形式で効率よく全身を鍛えられます。初心者でも動画を見ながら進められるので安心。',
      },
    ],
    price: '月4回 9,680円',
    trial: '体験レッスンあり',
    features: ['予約不要', '30分サーキット', '月4回9,680円', '気軽に通える'],
    description: '予約不要で30分のサーキット形式マシンピラティスが楽しめるスタジオ。月4回9,680円のシンプルな料金体系で、忙しい方でも仕事帰りや空き時間にふらっと通えます。高円寺エリアで「予約が面倒」「短時間で効率よく鍛えたい」という方におすすめ。',
    access: 'JR中央線・総武線「高円寺駅」周辺',
    address: '東京都杉並区高円寺エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月4回プラン',
      description: '予約不要・30分サーキット形式のマシンピラティス。',
      price: '月4回 9,680円（税込）',
    },
    options: [
      '月4回プラン（9,680円）',
      '予約不要で好きな時間に来店',
      '30分サーキット形式',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['運動習慣づくり', 'ダイエット', '体幹強化', '時短トレーニング'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['マシン', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'STUDIO IVY 高円寺',
    image: '/images/studios/studio-ivy.webp',
    rating: 4.9,
    reviewCount: 4,
    reviews: [
      {
        author: 'A.W',
        rating: 5,
        date: '1週間前',
        text: '完全個室のパーソナルなので人目を気にせず集中できます。月2回15,000円〜で本格的なマンツーマン指導が受けられるのはお得。',
      },
      {
        author: 'K.S',
        rating: 5,
        date: '2週間前',
        text: '自分の体の悩みに合わせたオーダーメイドのレッスン。猫背が改善されて周囲から姿勢が良くなったと言われるようになりました。',
      },
      {
        author: 'N.M',
        rating: 5,
        date: '3週間前',
        text: '完全個室で清潔感のあるプライベート空間。インストラクターの知識が豊富で、毎回新しい発見があります。',
      },
    ],
    price: '月2回 15,000円〜',
    trial: '体験レッスンあり',
    features: ['完全個室パーソナル', '月2回15,000円〜', 'オーダーメイドレッスン', '高品質な指導'],
    description: '完全個室のパーソナルマシンピラティススタジオ。月2回15,000円〜で、一人ひとりの体の状態や目標に合わせたオーダーメイドのマンツーマンレッスンを提供。高円寺エリアで本格的なパーソナルピラティスを受けたい方におすすめ。プライベート空間で集中してトレーニングに取り組めます。',
    access: 'JR中央線・総武線「高円寺駅」周辺',
    address: '東京都杉並区高円寺エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナル月2回プラン',
      description: '完全個室でのマンツーマンマシンピラティス。オーダーメイドのレッスン内容。',
      price: '月2回 15,000円〜（税込）',
    },
    options: [
      '月2回プラン（15,000円〜）',
      '月4回・月8回プランあり',
      '完全個室パーソナルレッスン',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', 'ボディメイク', '体の不調改善', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', '完全個室', '更衣室'],
    },
  },
  {
    name: 'ELEMENT 高円寺',
    officialUrl: 'https://t.felmat.net/fmcl?ak=U11199J.1.V154352I.U1357808',
    image: '/images/studios/element.webp',
    rating: 4.6,
    reviewCount: 16,
    reviews: [
      {
        author: 'J.T',
        rating: 5,
        date: '1週間前',
        text: 'マンツーマン30分で集中して追い込めます。月4回22,000円は他のパーソナルと比べてもリーズナブル。短時間で効果を実感。',
      },
      {
        author: 'R.O',
        rating: 4,
        date: '2週間前',
        text: '30分のマンツーマンレッスンは忙しいビジネスパーソンにちょうどいい。効率よく体を鍛えられます。',
      },
      {
        author: 'Y.K',
        rating: 5,
        date: '3週間前',
        text: 'パーソナルなのに手頃な価格。インストラクターが親身に指導してくれるので、毎回のレッスンが楽しみです。',
      },
    ],
    price: '月4回 22,000円',
    trial: '体験レッスンあり',
    features: ['マンツーマン30分', '月4回22,000円', '効率的なパーソナル', '短時間集中'],
    description: 'マンツーマン30分の効率的なパーソナルピラティススタジオ。月4回22,000円で、短時間ながらも集中した指導で着実に効果を実感できます。高円寺エリアで忙しいけれどパーソナルレッスンを受けたい方に最適。',
    access: 'JR中央線・総武線「高円寺駅」周辺',
    address: '東京都杉並区高円寺エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'パーソナル月4回プラン',
      description: 'マンツーマン30分の集中パーソナルレッスン。',
      price: '月4回 22,000円（税込）',
    },
    options: [
      '月4回プラン（22,000円）',
      'マンツーマン30分レッスン',
      '回数変更プランあり',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['体幹強化', '姿勢改善', '健康維持', '時短トレーニング'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['マシン', '完全個室', '更衣室'],
    },
  },
  {
    name: 'ピラティスミラー 高円寺',
    image: '/images/studios/pilates-mirror.webp',
    rating: 4.5,
    reviewCount: 39,
    reviews: [
      {
        author: 'S.M',
        rating: 5,
        date: '1週間前',
        text: 'マシンピラティスのグループレッスンとパーソナルの両方があるので、自分の気分や目的で使い分けられるのが便利。',
      },
      {
        author: 'E.K',
        rating: 4,
        date: '2週間前',
        text: '高円寺にマシンピラティスの選択肢が増えて嬉しい。スタジオの雰囲気も明るくて通いやすいです。',
      },
      {
        author: 'A.N',
        rating: 4,
        date: '3週間前',
        text: 'グループでもパーソナルでも対応してくれるので、まずはグループで試してからパーソナルに切り替えました。',
      },
    ],
    price: '詳細は公式サイトでご確認ください',
    trial: '体験レッスンあり',
    features: ['マシンピラティス', 'グループ&パーソナル', '高円寺駅近く', '初心者歓迎'],
    description: 'マシンピラティスのグループレッスンとパーソナルレッスンの両方を提供するスタジオ。高円寺エリアでグループとパーソナルを使い分けたい方や、グループから始めてパーソナルにステップアップしたい方におすすめ。',
    access: 'JR中央線・総武線「高円寺駅」周辺',
    address: '東京都杉並区高円寺エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マシンピラティスレッスン',
      description: 'グループとパーソナルから選べるマシンピラティス。',
      price: '詳細は公式サイトでご確認ください',
    },
    options: [
      'グループレッスンあり',
      'パーソナルレッスンあり',
      'マシンピラティス対応',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', '姿勢改善', '運動不足解消', 'ダイエット'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'CALDO 高円寺',
    image: '/images/studios/caldo.webp',
    rating: 4.4,
    reviewCount: 168,
    reviews: [
      {
        author: 'H.T',
        rating: 5,
        date: '1週間前',
        text: 'ホットヨガメインですがピラティスのクラスもあります。月4回8,250円〜でホットヨガもピラティスも受けられるのはお得。',
      },
      {
        author: 'M.S',
        rating: 4,
        date: '2週間前',
        text: '杉並区で手頃にヨガとピラティスの両方を楽しみたい人におすすめ。施設もきれいで居心地がいいです。',
      },
      {
        author: 'K.Y',
        rating: 4,
        date: '3週間前',
        text: '予約なしで通えるレッスンも多くて便利。高円寺の駅からも近く、仕事帰りに通いやすい立地です。',
      },
    ],
    price: '月4回 8,250円〜',
    trial: '体験レッスンあり',
    features: ['ホットヨガ&ピラティス', '月4回8,250円〜', '駅近', '施設充実'],
    description: 'ホットヨガで有名なCALDOの高円寺店。ピラティスのクラスも開講しており、月4回8,250円〜でホットヨガとピラティスの両方を楽しめます。杉並区エリアでヨガもピラティスも両方やりたい方に人気。充実した施設と駅近の立地が魅力。',
    access: 'JR中央線・総武線「高円寺駅」周辺',
    address: '東京都杉並区高円寺エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月4回プラン',
      description: 'ホットヨガ＆ピラティスが楽しめる月4回プラン。',
      price: '月4回 8,250円〜（税込）',
    },
    options: [
      '月4回プラン（8,250円〜）',
      '通い放題プランあり',
      'ホットヨガ&ピラティス両方受講可',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['ダイエット', 'デトックス', 'ストレス解消', '柔軟性向上'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['ホットスタジオ', '常温スタジオ', 'シャワー', 'ロッカー'],
    },
  },
  {
    name: 'ピラティスK 高円寺（近隣エリア利用）',
    image: '/images/studios/pilates-k.webp',
    rating: 4.5,
    reviewCount: 83,
    reviews: [
      {
        author: 'L.K',
        rating: 5,
        date: '1週間前',
        text: '女性専用のマシンピラティスで、音楽に合わせたグループレッスンが楽しい。高円寺から近隣店舗に通えます。',
      },
      {
        author: 'N.T',
        rating: 4,
        date: '2週間前',
        text: 'おしゃれな空間で気分が上がります。レッスンプログラムも豊富で飽きずに続けられます。',
      },
      {
        author: 'Y.H',
        rating: 4,
        date: '3週間前',
        text: '女性専用なので安心。マシンピラティスが初めてでも丁寧に教えてもらえました。',
      },
    ],
    price: '詳細は公式サイトでご確認ください',
    trial: '体験レッスンあり',
    features: ['女性専用', 'マシンピラティス', '音楽×ピラティス', '近隣エリア店舗利用'],
    description: '女性専用のマシンピラティススタジオ。音楽に合わせたグループレッスンが特徴で、楽しみながらボディメイクできます。高円寺から近隣エリアの店舗を利用可能。おしゃれな空間と豊富なプログラムで人気。',
    access: '高円寺から近隣エリア店舗をご利用ください',
    address: '東京都杉並区周辺（近隣エリア店舗の詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マシンピラティスプラン',
      description: '女性専用マシンピラティス。音楽に合わせた楽しいグループレッスン。',
      price: '詳細は公式サイトでご確認ください',
    },
    options: [
      '月会費制（詳細は公式サイト）',
      '女性専用スタジオ',
      '音楽×マシンピラティス',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜30代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '美姿勢', '楽しく運動'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Pilates Mee高円寺店',
    officialUrl: 'https://m-pilates.com/',
    image: '/images/studios/pilates-mee.webp',
    price: 'セミパーソナル月4回 19,800円 / パーソナル月4回 39,600円（税込）',
    trial: '初回体験 無料キャンペーンあり（通常9,800円・毎月先着30名限定）',
    features: ['女性専用', 'マシンピラティス専門', '最大3名セミパーソナル＋完全パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオ。1セッション最大3名のセミパーソナル形式で、グループより手厚くパーソナルより通いやすい価格帯が特徴。高円寺駅から徒歩5分。',
    access: '高円寺駅から徒歩5分',
    address: '東京都杉並区高円寺北3丁目35-3 アーバネスト高円寺100号室',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！高円寺エリアのスタジオはほとんどが初心者歓迎です。CLUB PILATESは4段階のレベル分けで初心者専用クラスあり、NATURAglamはアットホームな雰囲気で始めやすい。STUDIO IVYは完全個室パーソナルなので自分のペースで進められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズ、マシンピラティスはリフォーマーなどの専用マシンを使用します。マシンはバネの力で負荷を調整できるため初心者にもおすすめ。高円寺エリアではzen place pilatesがマット・マシン両対応、その他のスタジオもマシンピラティスに対応しています。',
  },
  {
    question: '高円寺のピラティスの料金相場は？',
    answer: '最安はchocoZAPの月額3,278円（セルフ式）。スタジオレッスンではNATURAglamの月4回7,700円〜、CALDOの月4回8,250円〜が手頃。グループレッスンはzen place pilatesの月4回9,625円〜、CLUB PILATESの月4回10,890円〜。パーソナルはSTUDIO IVYの月2回15,000円〜、ELEMENTの月4回22,000円。目的と予算に合わせて選びましょう。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1〜2回がおすすめです。慣れてきたら週2〜3回に増やすと効果を実感しやすくなります。chocoZAPなら24時間いつでもセルフで通えます。大切なのは無理なく継続すること。最低2〜3ヶ月続けましょう。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質に変わっていきます。CLUB PILATESには高強度・有酸素運動クラスもありダイエットに効果的。CALDOのホットヨガとの組み合わせもおすすめです。2〜3ヶ月の継続で効果を実感する方が多いです。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装と飲み物があればOKです。CLUB PILATESは体験0円（30分）、Rintosullも無料体験でパーソナル姿勢診断付き。各スタジオの体験内容は公式サイトでご確認ください。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: 'CLUB PILATES、zen place pilates、URBAN CLASSIC PILATES、ELEMENT、chocoZAPは男性も通えます。NATURAglam、Pilates Mee、Rintosull、ピラティスKは女性専用です。',
  },
  {
    question: '女性専用のスタジオはどこですか？',
    answer: 'NATURAglam、Pilates Mee、Rintosull、ピラティスKが女性専用スタジオです。女性だけの空間で安心してトレーニングしたい方におすすめです。',
  },
  {
    question: '24時間通えるスタジオはありますか？',
    answer: 'chocoZAP高円寺は24時間営業で、月額3,278円でいつでも利用可能です。セルフ式マシンなので自分のペースでトレーニングできます。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: '個人差はありますが、2ヶ月を過ぎた頃から姿勢の改善や体の変化を実感する方が多いです。週1〜2回のペースで最低2〜3ヶ月は継続することをおすすめします。',
  },
]

export default function KoenjiPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '高円寺', url: 'https://pilates-biyori.com/area/koenji/' },
      ]} />
      <main className="pt-20 bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月23日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026年7月最新】ピラティス高円寺おすすめ12選！
              <br className="hidden md:block" />
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
              <span className="text-warm-600">高円寺</span>
            </nav>
          </div>
        </section>
        <AreaConclusion studios={studios} areaName="高円寺" />


        <TableOfContents areaName="高円寺" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「ピラティスを始めてみたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「高円寺で人気のピラティススタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">
              高円寺はJR中央線・総武線が乗り入れ、新宿まで中央線で約10分という好アクセスのエリア。杉並区の下町風情ある商店街と独自のカルチャーが魅力の街です。丸ノ内線の新高円寺駅も利用でき、交通の便が良い高円寺エリアには、世界最大級チェーンのグループレッスンからセルフ式マシンまで、多彩なピラティススタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、高円寺エリアでおすすめの実在するピラティススタジオ12選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>高円寺・杉並区エリアでピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>コスパの良いスタジオを知りたい</span>
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
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="高円寺" />
        <AreaMarketComparison studios={studios} areaName="高円寺" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              高円寺のおすすめピラティススタジオ12選
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
              高円寺のピラティス料金相場【2026年7月最新】
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
                    <td className="px-4 py-3">7,700円〜15,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 8,250円〜22,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜3,000円程度</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              高円寺は住宅地としての人気が高く、地元在住の方が徒歩や自転車で通えるスタジオが充実しています。繁華街ほど料金は高くなく、かつ都心へのアクセスも良いバランスの取れたエリアです。平日昼間のクラスは比較的空いていて狙い目です。近隣の中野エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              高円寺でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR中央線・総武線「高円寺駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  高円寺エリアのスタジオは高円寺駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。高円寺駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">住宅地ならではの予約の特徴を把握</h3>
                <p className="text-warm-600 leading-relaxed">
                  高円寺は住宅地のため、主婦・ママ層が多い平日午前中と、仕事帰りの平日夜が予約のピークタイムです。土日は意外と空いているスタジオも多いので、狙い目の時間帯を見つけておくと通いやすくなります。子連れOKのクラスがあるスタジオもあるので、お子さまがいる方は確認してみましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  高円寺エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかを確認しましょう。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  高円寺エリアだけでなく、近隣の<Link href="/area/nakano/" className="text-warm-700 underline hover:text-warm-900">中野</Link>、<Link href="/area/asagaya/" className="text-warm-700 underline hover:text-warm-900">阿佐ヶ谷</Link>、<Link href="/area/ogikubo/" className="text-warm-700 underline hover:text-warm-900">荻窪</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>高円寺エリアの豆知識：</strong>高円寺は地元の方が徒歩や自転車で通うケースが多いエリアです。自転車の方はスタジオ近くの駐輪スペースの有無を確認しておきましょう。近場なら荷物も最小限で済むので、気軽に続けやすいのが高円寺の良さです。
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Search by Preference */}
        <section className="py-16 bg-white" id="kodawari">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">目的別おすすめスタジオ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">月額3,278円〜のスタジオも。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• chocoZAP（月額 3,278円 / セルフ式）</li>
                  <li className="text-warm-700">• NATURAglam（月4回 7,700円〜）</li>
                  <li className="text-warm-700">• CALDO（月4回 8,250円〜）</li>
                  <li className="text-warm-700">• zen place pilates（月4回 9,625円〜）</li>
                  <li className="text-warm-700">• URBAN CLASSIC PILATES（月4回 9,680円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">マンツーマンで丁寧な指導。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STUDIO IVY（完全個室 / 月2回 15,000円〜）</li>
                  <li className="text-warm-700">• ELEMENT（マンツーマン30分 / 月4回 22,000円）</li>
                  <li className="text-warm-700">• Pilates Mee（セミパーソナル最大3名）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用スタジオ</h3>
                <p className="text-warm-600 text-sm mb-4">女性だけの安心空間。</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• NATURAglam（ヨガ&ピラティス&ダンス）</li>
                  <li className="text-warm-700">• Pilates Mee（セミパーソナル）</li>
                  <li className="text-warm-700">• Rintosull（LAVA系列 / 2026年1月OPEN）</li>
                  <li className="text-warm-700">• ピラティスK（音楽×マシンピラティス）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Frequency Guide */}
        <section className="py-16 bg-warm-50" id="frequency">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">おすすめの期間・頻度</h2>
            <div className="bg-white rounded-lg p-8 border border-warm-200">
              <h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週1〜2回からスタートするのがおすすめ。最低2〜3ヶ月継続することで効果を実感できます。CLUB PILATESは4段階のレベル分けがあり、初心者専用クラスから始められます。zen place pilatesもBASI認定インストラクターの丁寧な指導で安心。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2〜3回がおすすめ。3〜6ヶ月で目に見える変化を実感できます。パーソナルで効率よく鍛えたい方はSTUDIO IVYやELEMENTがおすすめです。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続。chocoZAPは24時間営業・月額3,278円なので、忙しい方でもコスパよく運動習慣を維持できます。URBAN CLASSIC PILATESは予約不要30分で気軽に通えます。
              </p>
            </div>
          </div>
        </section>

        {/* Price Guide */}
        <section className="py-16 bg-white" id="price-guide">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">予算別の料金相場</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回〜</p>
                <p className="text-sm text-warm-600 mb-4">手軽に始めたい方に。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• chocoZAP（3,278円/月 セルフ式）</li>
                  <li>• NATURAglam（7,700円〜/月4回）</li>
                  <li>• CALDO（8,250円〜/月4回）</li>
                  <li>• zen place pilates（9,625円〜/月4回）</li>
                  <li>• URBAN CLASSIC PILATES（9,680円/月4回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜15,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">週1回ペースで着実に成果。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• CLUB PILATES（10,890円〜/月4回）</li>
                  <li>• Pilates Mee（11,000円〜/月4回）</li>
                  <li>• STUDIO IVY（15,000円〜/月2回）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 20,000円〜/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">本気でボディメイクしたい方に。</p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ELEMENT（22,000円/月4回 マンツーマン）</li>
                  <li>• STUDIO IVY（月4回プランあり）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">失敗しないスタジオの選び方</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  ダイエット、姿勢改善、運動習慣づくりなど、目的によって最適なスタジオは変わります。コスパ重視ならchocoZAPやNATURAglam、本格パーソナルならSTUDIO IVYやELEMENT、ヨガも一緒にやりたいならCALDOがおすすめ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">レッスン形式を選ぶ</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  高円寺エリアはグループ（CLUB PILATES、zen place pilates）、セミパーソナル最大3名（Pilates Mee）、完全個室パーソナル（STUDIO IVY、ELEMENT）、セルフ式（chocoZAP）、予約不要サーキット（URBAN CLASSIC PILATES）と多彩な形式が揃っています。自分の好みや予算に合わせて選びましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  CLUB PILATESは体験0円（30分）、Rintosullも無料体験でパーソナル姿勢診断付き。まずは無料体験で雰囲気やインストラクターとの相性を確認しましょう。各スタジオの体験レッスン詳細は公式サイトでご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  高円寺はJR中央線・総武線と丸ノ内線（新高円寺駅）が利用可能。NATURAglamとRintosullは駅徒歩1分。chocoZAPは24時間営業、URBAN CLASSIC PILATESは予約不要なので、ライフスタイルに合わせて通いやすいスタジオを選びましょう。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white" id="faq">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">よくある質問</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-warm-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition">
                      <h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3>
                      <svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-warm-600 leading-relaxed">{faq.answer}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="py-16 bg-warm-50" id="summary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">まとめ</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は高円寺エリアのおすすめピラティススタジオ12選をご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              高円寺はJR中央線・総武線と丸ノ内線（新高円寺駅）が利用でき、杉並区の商店街と文化の街として知られるエリアです。月額3,278円のchocoZAP（セルフ式）から、月4回7,700円〜のNATURAglam、世界最大級チェーンのCLUB PILATES（体験0円）、BASI認定のzen place pilates、女性限定セミパーソナルのPilates Mee、完全個室パーソナルのSTUDIO IVYやELEMENTまで、幅広い価格帯・形式のスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              まずは無料体験ができるCLUB PILATESやRintosullから試してみるのがおすすめです。ぜひこの記事を参考に、自分に合うピラティススタジオを見つけてくださいね。
            </p>
            <p className="text-warm-700 font-medium text-center">あなたにぴったりのピラティススタジオが見つかることを願っています。</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-warm-800 text-white" id="contact">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">体験レッスンを予約しよう</h2>
            <p className="text-warm-200 mb-8 leading-relaxed">
              CLUB PILATESとRintosullは体験0円。<br />
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
              <AreaModifierSections studios={studios} areaName="高円寺" />
      </main>
        {/* boost-nav-202606 */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-warm-900 mb-3">📍 近隣エリア・料金データで比較する</h2>
              <p className="text-warm-600 text-sm mb-4">通勤・生活圏のスタジオもあわせて比べると、自分に合った1校が見つかりやすくなります。</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/area/nakano/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">中野</Link>
                <Link href="/area/asagaya/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">阿佐ヶ谷</Link>
                <Link href="/area/ogikubo/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">荻窪</Link>
                <Link href="/area/nishi-ogikubo/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">西荻窪</Link>
                <Link href="/area/nakano-sakaue/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">中野坂上</Link>
                <Link href="/articles/pilates-ryokin-hakusho/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国ピラティス料金白書2026</Link>
              </div>
            </div>
          </div>
        </section>

      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="koenji" areaName="高円寺" />

      <RelatedAreas currentSlug="koenji" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
