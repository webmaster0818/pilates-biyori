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
  alternates: { canonical: 'https://biyori-pilates.com/area/shinjuku/' },
  title: '新宿のピラティス｜初心者OK・無料体験で選ぶ料金比較【2026年7月】',
  description: '新宿エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,新宿,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 新宿',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 21,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '2週間前',
        text: '大江戸線新宿西口駅D5出口から徒歩2分で通いやすいです。マットもマシンも両方受けられるので、その日の気分で選べるのが嬉しい。男性OKなので夫婦で通っています。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '1ヶ月前',
        text: '少人数制で丁寧に見てもらえます。リフォーマーのグループレッスンが特に気に入っています。全国展開なので出張先でも通えるのが便利。',
      },
      {
        author: 'K.H',
        rating: 4,
        date: '3週間前',
        text: '体験500円で気軽に始められました。インストラクターの質が高く、身体の使い方を丁寧に教えてくれます。新宿駅からも近くて通いやすいです。',
      },
    ],
    price: 'マットグループ月4回 9,625円〜',
    trial: '体験レッスン 500円〜',
    features: ['マット&マシン', '初心者歓迎', '新宿西口駅D5出口徒歩2分', '男性OK'],
    description: '全国100店舗以上展開の大手ピラティススタジオ。都営大江戸線新宿西口駅D5出口から徒歩2分の好立地。マットグループ、マシン（リフォーマー）グループ、プライベートレッスンと幅広いメニューを提供。男性も利用可能で、経験豊富なインストラクターが一人ひとりに合わせた丁寧な指導を行います。体験レッスンは500円から気軽にお試しできます。',
    access: '大江戸線「新宿西口駅」D5出口 徒歩2分 / JR「新宿駅」西口 徒歩5分 / 丸ノ内線「新宿駅」徒歩5分',
    address: '東京都新宿区西新宿1丁目（新宿西口駅D5出口徒歩2分）',
    popularPlan: {
      name: 'マットグループ（月4回）',
      description: 'マットピラティスのグループレッスン。初心者から経験者まで無理なく続けられる人気プラン。マシンレッスンへのステップアップも可能。',
      price: '月4回 9,625円（税込）〜',
    },
    options: [
      'マットグループ（月4回 9,625円〜）',
      'リフォーマーグループ（月4回 15,400円〜）',
      'プライベートレッスン（1回 9,900円〜）',
      'ウェアレンタル・タオルレンタルあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '月〜金 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'ウォーターサーバー'],
    },
  },
  {
    name: 'ピラティスK 新宿店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.7,
    reviewCount: 113,
    reviews: [
      {
        author: 'T.W',
        rating: 5,
        date: '5日前',
        text: '音楽に合わせて楽しくトレーニングできます！新宿三丁目駅から近くて通いやすい。女性専用なので周りの目を気にせず集中できるのが嬉しいです。',
      },
      {
        author: 'H.I',
        rating: 4,
        date: '1週間前',
        text: 'マシンピラティス専門なので設備が充実しています。インストラクターが明るくて楽しい雰囲気。仕事帰りに通っています。',
      },
      {
        author: 'S.N',
        rating: 5,
        date: '2週間前',
        text: 'グループレッスンですが丁寧に見てくれます。2ヶ月で体が引き締まってきました。月4回11,220円はコスパ良いです。',
      },
    ],
    price: '月4回 11,220円〜',
    trial: '体験レッスン 2,000円',
    features: ['女性専用マシンピラティス', '新宿三丁目駅近く', '音楽×マシン', 'ボディメイク'],
    description: '「30歳からの本気ボディメイク」がコンセプトの女性専用マシンピラティス専門スタジオ。全国54店舗展開。東京メトロ丸ノ内線・副都心線「新宿三丁目駅」から好アクセス。音楽に合わせた独自プログラムで楽しくボディメイク。初心者から経験者まで個人のペースに合わせたプログラムを用意しています。',
    access: '東京メトロ丸ノ内線・副都心線「新宿三丁目駅」近く / JR「新宿駅」東口 徒歩圏内',
    address: '東京都新宿区新宿3丁目（新宿三丁目駅近く）',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '月4回のマシンピラティスレッスン。女性専用で安心して通える人気プラン。音楽に合わせた50分のグループレッスン。',
      price: '月4回 11,220円（税込）〜',
    },
    options: [
      'マンスリー4メンバー（月4回 11,220円〜）',
      'マンスリーデイメンバー（平日昼間プラン）',
      'マンスリーフルメンバー（通い放題）',
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
    name: 'the SILK 新宿',
    image: '/images/studios/the-silk.webp',
    rating: 4.8,
    reviewCount: 371,
    reviews: [
      {
        author: 'E.K',
        rating: 5,
        date: '1週間前',
        text: '女性専用で安心して通えます。新宿西口駅から徒歩1分という立地が最高。音楽に合わせたレッスンが楽しくて、毎回あっという間に終わります。',
      },
      {
        author: 'C.Y',
        rating: 5,
        date: '2週間前',
        text: '音楽×ピラティスというコンセプトが新しくて気に入っています。リフォーマーマシンを使ったレッスンで効果を実感しています。',
      },
      {
        author: 'N.S',
        rating: 4,
        date: '3週間前',
        text: '新宿西口駅から徒歩1分なので仕事帰りに寄りやすい。スタジオの雰囲気がおしゃれでモチベーションが上がります。',
      },
    ],
    price: 'Standard4 15,070円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用マシンピラティス', '新宿西口駅徒歩1分', '音楽×ピラティス', '体験無料'],
    description: '女性専用マシンピラティス専門スタジオ。都営大江戸線新宿西口駅から徒歩1分の好立地。最新のリフォーマーマシンを完備し、音楽に合わせた独自プログラムで楽しくトレーニング。世界水準のピラティス指導を提供しています。体験レッスンは無料で受けられるので、初めての方も気軽にお試しいただけます。',
    access: '大江戸線「新宿西口駅」徒歩1分 / JR「新宿駅」西口 徒歩3分',
    address: '東京都新宿区西新宿（新宿西口駅徒歩1分）',
    popularPlan: {
      name: 'Standard4（月4回）',
      description: '女性専用マシンピラティスの基本プラン。音楽に合わせた50分のグループレッスン。初心者にも人気。',
      price: '月4回 15,070円（税込）〜',
    },
    options: [
      'Standard4（月4回 15,070円〜）',
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
      closed: '年末年始（12/29〜1/3）',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '女性専用'],
    },
  },
  {
    name: 'Rintosull 新宿西口駅前店',
    image: '/images/studios/rintosull.webp',
    rating: 4.6,
    reviewCount: 157,
    reviews: [
      {
        author: 'R.N',
        rating: 5,
        date: '1週間前',
        text: 'LAVA系列なので安心感があります。マシンピラティスとホットヨガの両方が受けられるのが魅力。通い放題プランがお得です。',
      },
      {
        author: 'A.H',
        rating: 4,
        date: '2週間前',
        text: '女性専用なので安心です。ホットヨガとピラティスを組み合わせて受けられるので、飽きずに続けられています。',
      },
      {
        author: 'M.M',
        rating: 5,
        date: '3週間前',
        text: 'LAVA系列で通い放題プランがあるのが嬉しい。スタジオも清潔感があって気持ちよく通えます。',
      },
    ],
    price: '通い放題プランあり',
    trial: '体験レッスンあり',
    features: ['女性専用マシンピラティス', 'LAVA系列', '通い放題', 'ホットヨガ併設'],
    description: 'ホットヨガスタジオLAVA系列の女性専用マシンピラティススタジオ。新宿西口駅前の好立地で、マシンピラティスとホットヨガの両方を楽しめます。通い放題プランが人気で、コストを抑えながらしっかりと身体を鍛えられます。ピラティスとヨガを組み合わせたプログラムで、より効果的なボディメイクが可能です。',
    access: '大江戸線「新宿西口駅」徒歩すぐ / JR「新宿駅」西口 徒歩5分',
    address: '東京都新宿区西新宿（新宿西口駅前）',
    popularPlan: {
      name: '通い放題プラン',
      description: 'マシンピラティスもホットヨガも通い放題のお得なプラン。LAVA系列ならではのリーズナブルな価格設定。',
      price: '詳細は店舗にお問い合わせください',
    },
    options: [
      'マシンピラティスレッスン',
      'ホットヨガレッスン',
      '通い放題プラン',
      '月回数制プランあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ダイエット', 'デトックス', '柔軟性向上', 'ストレス解消'],
    },
    basicInfo: {
      hours: '平日 9:00〜22:00 / 土日祝 9:00〜20:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'ホットスタジオ', '女性専用'],
    },
  },
  {
    name: 'CLUB PILATES 新宿',
    image: '/images/studios/club-pilates.webp',
    rating: 4.7,
    reviewCount: 90,
    reviews: [
      {
        author: 'D.T',
        rating: 5,
        date: '1週間前',
        text: '最大12名のグループレッスンですが、インストラクターがしっかり見てくれます。月4回10,890円で本格的なリフォーマーレッスンが受けられるのは嬉しい。',
      },
      {
        author: 'M.Y',
        rating: 4,
        date: '2週間前',
        text: '無料体験で雰囲気を確認してから入会しました。アメリカ発のブランドらしくプログラムが体系的で、レベルに合わせて選べるのが良いです。',
      },
      {
        author: 'K.S',
        rating: 5,
        date: '3週間前',
        text: '初心者からアスリートまで対応できるレベル分けがしっかりしています。無料体験があるので気軽に始められました。',
      },
    ],
    price: '月4回 10,890円〜',
    trial: '無料体験あり',
    features: ['最大12名グループ', '無料体験', 'レベル別クラス', '男性OK'],
    description: 'アメリカ発の世界最大級リフォーマーピラティスブランド。最大12名のグループレッスンでありながら、レベル別の体系的なプログラムで初心者からアスリートまで対応。月4回10,890円からと手頃な価格で本格的なリフォーマーピラティスを体験できます。無料体験レッスンを実施中。',
    access: 'JR「新宿駅」徒歩圏内',
    address: '東京都新宿区新宿（新宿駅近く）',
    popularPlan: {
      name: 'EFT4（月4回）',
      description: '月4回のリフォーマーグループレッスン。レベル別クラスで初心者でも安心。無料体験からスタートできる。',
      price: '月4回 10,890円（税込）〜',
    },
    options: [
      'EFT4（月4回 10,890円〜）',
      'EFT8（月8回プラン）',
      'Unlimited（通い放題）',
      '無料体験レッスン実施中',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['体幹強化', 'ボディメイク', '姿勢改善', 'アスリートトレーニング'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', 'ウォーターサーバー'],
    },
  },
  {
    name: 'STUDIO IVY 新宿',
    image: '/images/studios/studio-ivy.webp',
    rating: 4.9,
    reviewCount: 7,
    reviews: [
      {
        author: 'A.K',
        rating: 5,
        date: '1週間前',
        text: '完全個室のパーソナルレッスンなので、周りを気にせずしっかり集中できます。インストラクターが自分の身体の状態に合わせたプログラムを組んでくれるので効果を実感しやすい。',
      },
      {
        author: 'T.N',
        rating: 5,
        date: '2週間前',
        text: '月2回15,000円から始められるのでパーソナルとしてはリーズナブル。完全個室で贅沢な空間です。',
      },
      {
        author: 'R.S',
        rating: 5,
        date: '1ヶ月前',
        text: '個室なので人目を気にせずトレーニングできます。自分のペースで進められるので初心者にもおすすめ。',
      },
    ],
    price: '月2回 15,000円〜',
    trial: '体験レッスンあり',
    features: ['完全個室パーソナル', 'オーダーメイドプログラム', '男性OK', 'プライベート空間'],
    description: '完全個室のパーソナルピラティススタジオ。一人ひとりの身体の状態や目標に合わせたオーダーメイドプログラムを提供。月2回15,000円からスタートでき、パーソナルレッスンとしてはリーズナブル。プライベートな空間で集中してトレーニングできるので、人目が気になる方にもおすすめです。',
    access: 'JR「新宿駅」徒歩圏内',
    address: '東京都新宿区新宿（新宿駅近く）',
    popularPlan: {
      name: 'パーソナル月2回プラン',
      description: '完全個室でのマンツーマンレッスン。身体の状態に合わせたオーダーメイドプログラム。',
      price: '月2回 15,000円（税込）〜',
    },
    options: [
      'パーソナル月2回（15,000円〜）',
      'パーソナル月4回プラン',
      'パーソナル月8回プラン',
      '完全個室・マンツーマン指導',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['姿勢改善', '腰痛・肩こり改善', 'ボディメイク', '健康維持'],
    },
    basicInfo: {
      hours: '平日 8:00〜21:00 / 土日祝 8:00〜19:00',
      closed: '不定休',
      facilities: ['完全個室', 'ロッカー', 'タオル貸出', 'ウォーターサービス'],
    },
  },
  {
    name: 'ELEMENT 新宿',
    officialUrl: 'https://t.felmat.net/fmcl?ak=U11199J.1.V154352I.U1357808',
    image: '/images/studios/element.webp',
    rating: 4.7,
    reviewCount: 7,
    reviews: [
      {
        author: 'Y.M',
        rating: 5,
        date: '1週間前',
        text: '1回30分のマンツーマンレッスンなので忙しくても通いやすい。新宿駅近くで仕事帰りにサッと立ち寄れます。',
      },
      {
        author: 'K.T',
        rating: 4,
        date: '2週間前',
        text: '短時間集中のパーソナルなので効率が良い。月4回22,000円は相場からすると妥当。インストラクターの指導も丁寧です。',
      },
      {
        author: 'H.S',
        rating: 5,
        date: '3週間前',
        text: '30分という短さがちょうどいい。集中してしっかりトレーニングできます。手ぶらで通えるのも嬉しいポイント。',
      },
    ],
    price: '月4回 22,000円',
    trial: '体験レッスンあり',
    features: ['マンツーマン30分', '短時間集中', '手ぶらOK', '男性OK'],
    description: '1回30分のマンツーマンピラティスレッスンが特徴のパーソナルスタジオ。忙しいビジネスパーソンでも無理なく通える短時間集中型。月4回22,000円でプロのインストラクターによる個別指導を受けられます。手ぶらで通える環境が整っているので、仕事帰りにも気軽に立ち寄れます。',
    access: 'JR「新宿駅」徒歩圏内',
    address: '東京都新宿区新宿（新宿駅近く）',
    popularPlan: {
      name: 'マンツーマン月4回プラン',
      description: '1回30分のマンツーマンレッスン。短時間集中で効率的にボディメイク。',
      price: '月4回 22,000円（税込）',
    },
    options: [
      'マンツーマン月4回（22,000円）',
      'マンツーマン月8回プラン',
      '手ぶらセット（ウェア・タオル貸出）',
      '30分集中レッスン',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性65% / 男性35%',
      purpose: ['時短トレーニング', 'ボディメイク', '体幹強化', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜22:00 / 土日祝 8:00〜20:00',
      closed: '不定休',
      facilities: ['ロッカー', 'ウェアレンタル', 'タオル貸出', 'シャワー'],
    },
  },
  {
    name: 'ピラティスミラー 新宿',
    image: '/images/studios/pilates-mirror.webp',
    rating: 4.6,
    reviewCount: 18,
    reviews: [
      {
        author: 'M.K',
        rating: 5,
        date: '1週間前',
        text: '女性専用なので安心して通えます。プライベート30分4,400円からという価格が魅力的。短い時間でもしっかり効果を感じられます。',
      },
      {
        author: 'S.T',
        rating: 4,
        date: '2週間前',
        text: 'ミラーを見ながら自分のフォームを確認できるので、正しい動きが身につきやすいです。プライベートレッスンなので丁寧に教えてもらえます。',
      },
      {
        author: 'Y.H',
        rating: 5,
        date: '3週間前',
        text: '1回4,400円からプライベートレッスンが受けられるのはかなりお得。スタジオも清潔で雰囲気が良いです。',
      },
    ],
    price: 'プライベート30分 4,400円〜',
    trial: '体験レッスンあり',
    features: ['女性専用', 'プライベート30分', 'リーズナブル', 'ミラーレッスン'],
    description: '女性専用のピラティススタジオ。プライベートレッスンが30分4,400円からとリーズナブルな価格で受けられるのが魅力。ミラーを活用したレッスンで自分のフォームを確認しながらトレーニングでき、正しい動きが身につきやすいのが特徴です。',
    access: 'JR「新宿駅」徒歩圏内',
    address: '東京都新宿区新宿（新宿駅近く）',
    popularPlan: {
      name: 'プライベート30分',
      description: '女性専用のプライベートレッスン。30分で効率的にトレーニングできる人気プラン。',
      price: '1回 4,400円（税込）〜',
    },
    options: [
      'プライベート30分（4,400円〜）',
      'プライベート60分プラン',
      '回数券プラン',
      '女性専用・完全予約制',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '体幹強化'],
    },
    basicInfo: {
      hours: '平日 10:00〜21:00 / 土日祝 9:00〜18:00',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', '女性専用'],
    },
  },
  {
    name: 'BDC PILATES 新宿（近隣）',
    image: '/images/studios/bdc-pilates.webp',
    rating: 4.8,
    reviewCount: 6,
    reviews: [
      {
        author: 'L.M',
        rating: 5,
        date: '1週間前',
        text: 'ダンサー御用達のスタジオだけあって、インストラクターのレベルが高い。身体の使い方を細かく指導してくれるので、確実に変化を感じます。',
      },
      {
        author: 'K.N',
        rating: 5,
        date: '2週間前',
        text: 'プロのダンサーも通うスタジオで本格的なピラティスが学べます。グループレッスンでもしっかり見てもらえます。',
      },
      {
        author: 'A.O',
        rating: 4,
        date: '1ヶ月前',
        text: 'リフォーマーの質が高く、レッスン内容も充実しています。ダンサー向けだけでなく、一般の方にもおすすめ。',
      },
    ],
    price: '月4回 14,300円〜',
    trial: '体験レッスンあり',
    features: ['ダンサー御用達', '高品質指導', 'リフォーマー', '本格派'],
    description: 'ブロードウェイダンスセンター（BDC）が運営するピラティス専門スタジオ。ダンサー御用達の本格的なリフォーマーピラティスを提供。インストラクターのレベルが高く、身体の使い方を細かく指導してくれるのが特徴。ダンサーだけでなく一般の方にも広く対応しています。',
    access: '新宿エリア近隣',
    address: '東京都新宿区（新宿近隣）',
    popularPlan: {
      name: 'リフォーマーグループ（月4回）',
      description: 'ダンサー品質の本格的なリフォーマーグループレッスン。少人数制で丁寧な指導。',
      price: '月4回 14,300円（税込）〜',
    },
    options: [
      'リフォーマーグループ（月4回 14,300円〜）',
      'プライベートレッスン',
      'マットグループレッスン',
      '回数券プランあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['身体能力向上', 'ダンスパフォーマンス', '姿勢改善', 'ボディメイク'],
    },
    basicInfo: {
      hours: '平日 10:00〜21:00 / 土日祝 9:00〜18:00',
      closed: '不定休',
      facilities: ['ロッカー', 'シャワー', 'パウダールーム'],
    },
  },
  {
    name: 'NATURAglam 新宿（近隣）',
    image: '/images/studios/naturaglam.webp',
    rating: 4.5,
    reviewCount: 16,
    reviews: [
      {
        author: 'F.I',
        rating: 5,
        date: '2週間前',
        text: '女性専用でアットホームな雰囲気が気に入っています。ヨガとピラティスの両方が受けられるので気分に合わせて選べます。',
      },
      {
        author: 'N.K',
        rating: 4,
        date: '3週間前',
        text: '少人数制で丁寧な指導が受けられます。リラックスした雰囲気でストレス解消にもなります。',
      },
      {
        author: 'T.M',
        rating: 4,
        date: '1ヶ月前',
        text: '料金がリーズナブルで続けやすいです。女性専用なので安心して通えるのが嬉しいポイント。',
      },
    ],
    price: 'リーズナブルな料金設定',
    trial: '体験レッスンあり',
    features: ['女性専用', 'ヨガ&ピラティス', 'アットホーム', '少人数制'],
    description: '女性専用のヨガ&ピラティススタジオ。アットホームな雰囲気の中、少人数制で丁寧な指導を受けられます。ヨガとピラティスの両方を提供しているので、気分や目的に合わせてレッスンを選べるのが魅力。リーズナブルな料金設定で長く続けやすいスタジオです。',
    access: '新宿エリア近隣',
    address: '東京都新宿区（新宿近隣）',
    popularPlan: {
      name: '月会費プラン',
      description: 'ヨガとピラティスの両方が受けられるお得な月会費プラン。少人数制で丁寧な指導。',
      price: '詳細は店舗にお問い合わせください',
    },
    options: [
      'ヨガレッスン',
      'ピラティスレッスン',
      '月会費プラン',
      '回数券プランあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['リラックス', '柔軟性向上', '体幹強化', 'ストレス解消'],
    },
    basicInfo: {
      hours: '平日 10:00〜21:00 / 土日 9:00〜18:00',
      closed: '祝日・不定休',
      facilities: ['ロッカー', 'パウダールーム', '女性専用', 'アットホーム空間'],
    },
  },
  {
    name: 'URBAN CLASSIC PILATES 新宿',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11337L.1.X156352B.U1357808',
    image: '/images/studios/urban-classic-pilates.webp',
    rating: 4.5,
    reviewCount: 246,
    reviews: [
      {
        author: 'J.W',
        rating: 5,
        date: '1週間前',
        text: '予約不要で30分のレッスンが受けられるので、スキマ時間に気軽に通えます。月4回9,680円というコスパも魅力的です。',
      },
      {
        author: 'R.K',
        rating: 4,
        date: '2週間前',
        text: '予約なしで好きな時に行けるのが便利。30分で終わるので仕事の合間にも通えます。',
      },
      {
        author: 'M.H',
        rating: 4,
        date: '3週間前',
        text: '手軽さが最大の魅力。予約不要なので「今日行こう！」と思い立ったらすぐ通えます。',
      },
    ],
    price: '月4回 9,680円',
    trial: '体験レッスンあり',
    features: ['予約不要30分', 'コスパ抜群', '気軽に通える', '男性OK'],
    description: '予約不要で1回30分のマシンピラティスレッスンが受けられるスタジオ。「いつでも気軽に」がコンセプトで、思い立ったらすぐに通えるのが最大の魅力。月4回9,680円とリーズナブルな価格設定で、ピラティスを気軽に始めたい方にぴったりです。',
    access: 'JR「新宿駅」徒歩圏内',
    address: '東京都新宿区新宿（新宿駅近く）',
    popularPlan: {
      name: '月4回プラン',
      description: '予約不要の30分マシンピラティスレッスン。好きなタイミングで通えるお手軽プラン。',
      price: '月4回 9,680円（税込）',
    },
    options: [
      '月4回プラン（9,680円）',
      '月8回プラン',
      '通い放題プラン',
      '予約不要・30分レッスン',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['時短トレーニング', '体幹強化', 'ダイエット', '気軽にピラティス'],
    },
    basicInfo: {
      hours: '平日 7:00〜22:00 / 土日祝 8:00〜20:00',
      closed: '不定休',
      facilities: ['ロッカー', '更衣室', 'Wi-Fi'],
    },
  },
  {
    name: 'CALDO 新宿',
    image: '/images/studios/caldo.webp',
    rating: 4.5,
    reviewCount: 203,
    reviews: [
      {
        author: 'P.S',
        rating: 5,
        date: '1週間前',
        text: 'ホットヨガがメインですが、ピラティスのレッスンも充実しています。暖かい空間でのピラティスは汗をかけて気持ちいいです。',
      },
      {
        author: 'N.T',
        rating: 4,
        date: '2週間前',
        text: '月額料金がリーズナブルでいろいろなレッスンが受けられます。新宿駅から近くてアクセスも便利。',
      },
      {
        author: 'K.Y',
        rating: 4,
        date: '3週間前',
        text: 'ホットヨガと一緒にピラティスも受けられるのでコスパが良い。施設も新しくて清潔感があります。',
      },
    ],
    price: 'リーズナブルな月額プラン',
    trial: '体験レッスンあり',
    features: ['ホットヨガ&ピラティス', 'リーズナブル', '新宿駅近', '多彩なプログラム'],
    description: '全国展開のホットヨガ&ピラティススタジオ。ホットヨガをメインに、ピラティスプログラムも充実。暖かいスタジオでのピラティスは、筋肉がほぐれやすく柔軟性もアップ。リーズナブルな月額料金で多彩なプログラムを楽しめるのが魅力です。新宿駅から好アクセス。',
    access: 'JR「新宿駅」徒歩圏内',
    address: '東京都新宿区新宿（新宿駅近く）',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '月4回の好きなレッスンを受けられるプラン。ホットヨガもピラティスも選べる。',
      price: '詳細は店舗にお問い合わせください',
    },
    options: [
      'マンスリー4メンバー',
      'デイメンバー（平日昼間）',
      'フルメンバー（通い放題）',
      'ホットヨガ&ピラティスプログラム',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['デトックス', 'ダイエット', '柔軟性向上', 'リラックス'],
    },
    basicInfo: {
      hours: '平日 10:00〜22:30 / 土日祝 8:30〜19:30',
      closed: '毎月11日・22日・月末最終日',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'ホットスタジオ'],
    },
  },
  {
    name: 'Dr.ピラティス 新宿店',
    officialUrl: 'https://drpilates.drtraining.jp/',
    image: '/images/studios/dr-pilates.webp',
    price: '月4回(45分) 29,700円〜 / 月4回(60分) 39,600円〜',
    trial: '体験トレーニング 7,100円（無料キャンペーン実施店舗あり）',
    features: ['マンツーマン（パーソナル）', 'マシン・マット両対応', '医師推奨パーソナルジムNo.1受賞'],
    description: '医師推奨のパーソナルジム受賞歴を持つDr.トレーニング系列のパーソナルピラティススタジオ。マシン・マット両対応のマンツーマン指導で、姿勢改善やボディメイクを目指せる。新宿エリア（詳細は公式サイト参照）。',
    access: '新宿エリア（詳細は公式サイト参照）',
    address: '東京都（詳細は公式サイト参照）',
  },
  {
    name: 'the SILK 新宿店',
    officialUrl: 'https://the-silk.co.jp/',
    image: '/images/studios/the-silk.webp',
    price: 'グループ月4回(Standard4) 14,370〜15,280円 / 通い放題 19,980〜22,280円（別途施設利用料月700円）/ パーソナル月2回 22,000円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', 'マシンピラティス専門', 'グループ＋パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオ。レベル別・部位別の豊富なグループプログラムとパーソナルレッスンを提供し、洗練された空間が特徴。新宿西口駅から徒歩1分（情報引用元: the SILK公式サイト the-silk.co.jp）。',
    access: '新宿西口駅から徒歩1分',
    address: '東京都新宿区西新宿7-1-8 ヒノデビル6階',
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！新宿エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。経験豊富なインストラクターが基礎から丁寧に指導してくれるので、運動が苦手な方でも安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。新宿ではzen place pilatesがマット&マシンの両方を提供しています。',
  },
  {
    question: '新宿のピラティススタジオの料金相場は？',
    answer: '新宿エリアのピラティススタジオの料金相場は、グループレッスン月4回で9,625円〜15,000円程度。zen place pilatesの月4回9,625円からthe SILKの月4回15,070円まで幅があります。パーソナルレッスンはピラティスミラーの30分4,400円からSTUDIO IVYの月2回15,000円など、スタジオにより異なります。体験レッスンは無料〜2,000円程度なので、まずは体験で試してみるのがおすすめです。',
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
    answer: '基本的に動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。マットやタオルはスタジオでレンタルできることが多いです。ELEMENTやCLUB PILATESなど手ぶらで通えるスタジオもあります。詳細は各スタジオの体験レッスン案内で確認してくださいね。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズ。ヨガは柔軟性と精神的なリラックスを重視します。ピラティスは筋力強化、ヨガは心身のバランスを整えることが主な目的。RintosullやCALDOではマシンピラティスとホットヨガの両方が受けられるので、両方試したい方にもおすすめです。',
  },
  {
    question: '男性でも通えるスタジオはありますか？',
    answer: '新宿エリアではzen place pilates、CLUB PILATES、STUDIO IVY、ELEMENT、URBAN CLASSIC PILATESなどが男性も利用可能です。ピラティスK、Rintosull、the SILK、ピラティスミラー、NATURAglam は女性専用スタジオとなっています。男性の方はまず体験レッスンから始めてみるのがおすすめです。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。デスクワークが多い方や立ち仕事の方にもおすすめです。STUDIO IVYなどパーソナルスタジオなら、個別の悩みに合わせたプログラムを組んでもらえます。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスで効果が表れだすのは「2ヶ月を過ぎた頃」から。これは人間の細胞が生まれ変わるサイクルがそのくらいだからです。すぐに変化が表れなくても心配せず、最低でも2ヶ月は継続するのがおすすめです。',
  },
]

export default function ShinjukuPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '新宿', url: 'https://pilates-biyori.com/area/shinjuku/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月13日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス新宿おすすめ14選！<br className="hidden md:block" />
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
              <span className="text-warm-600">新宿</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="新宿" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「新宿で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-4">
              新宿は、JR山手線・中央線・小田急線・京王線・東京メトロ丸ノ内線・副都心線・都営大江戸線・都営新宿線など多数の路線が集まる日本最大のターミナル駅。仕事帰りや買い物のついでにも通いやすいエリアです。新宿区内にはマシンピラティス専門、女性専用、パーソナル、予約不要など、多彩なスタジオが集結しています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、新宿エリアでおすすめのピラティススタジオ14選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>新宿でピラティススタジオを探している</span>
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
                  <span>仕事帰りに通えるスタジオがいい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>パーソナルレッスンで集中したい</span>
                </li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">
              それではさっそく見ていきましょう！
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="新宿" />
        <AreaMarketComparison studios={studios} areaName="新宿" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              新宿のおすすめピラティススタジオ14選
            </h2>
            <div className="space-y-8">
              {[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
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
                  月額1万円前後から通えるスタジオ。グループレッスンで気軽に始められます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（月4回 9,625円〜）</li>
                  <li className="text-warm-700">• URBAN CLASSIC PILATES（月4回 9,680円）</li>
                  <li className="text-warm-700">• CLUB PILATES（月4回 10,890円〜）</li>
                  <li className="text-warm-700">• ピラティスK（月4回 11,220円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの空間で安心してトレーニング。周りの目を気にせず集中できます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK（音楽×マシン）</li>
                  <li className="text-warm-700">• the SILK（音楽×ピラティス）</li>
                  <li className="text-warm-700">• Rintosull（LAVA系列・通い放題）</li>
                  <li className="text-warm-700">• ピラティスミラー（プライベート4,400円〜）</li>
                  <li className="text-warm-700">• NATURAglam（ヨガ&ピラティス）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル・個室</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマンで集中してトレーニング。効率的に結果を出したい方に。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STUDIO IVY（完全個室・月2回15,000円〜）</li>
                  <li className="text-warm-700">• ELEMENT（30分マンツーマン）</li>
                  <li className="text-warm-700">• ピラティスミラー（プライベート30分4,400円〜）</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・通いやすさ</h3>
                <p className="text-warm-600 text-sm mb-4">
                  新宿西口駅・新宿三丁目駅から徒歩圏内。複数路線からアクセス可能。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK（新宿西口駅徒歩1分）</li>
                  <li className="text-warm-700">• zen place pilates（新宿西口駅D5出口徒歩2分）</li>
                  <li className="text-warm-700">• Rintosull（新宿西口駅前）</li>
                  <li className="text-warm-700">• ピラティスK（新宿三丁目駅近く）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">予約不要・手軽さ</h3>
                <p className="text-warm-600 text-sm mb-4">
                  思い立ったらすぐ通える、気軽さ重視のスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• URBAN CLASSIC PILATES（予約不要30分）</li>
                  <li className="text-warm-700">• ELEMENT（30分の短時間集中）</li>
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
                <p className="text-3xl font-bold text-warm-800 mb-4">グループ月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスンで気軽にピラティスデビュー。初心者におすすめ。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜22,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル&マシン</p>
                <p className="text-sm text-warm-600 mb-4">
                  パーソナルやマシン専門スタジオで本格的にボディメイク。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• the SILK（月4回 15,070円〜）</li>
                  <li>• STUDIO IVY（月2回 15,000円〜）</li>
                  <li>• ELEMENT（月4回 22,000円）</li>
                  <li>• ピラティスミラー（1回 4,400円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">通い放題</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">フリープラン</p>
                <p className="text-sm text-warm-600 mb-4">
                  通い放題で頻度を上げたい方向け。短期集中でしっかり結果を出したい方に。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（LAVA系列・通い放題）</li>
                  <li>• the SILK Full（通い放題プラン）</li>
                  <li>• CALDO（ホットヨガ&ピラティス）</li>
                  <li>• URBAN CLASSIC PILATES（通い放題プラン）</li>
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
                  まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、体幹強化、リラックスなど、目的によって最適なスタジオやプログラムは変わります。目的が明確だとスタジオ選びもスムーズになりますよ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  新宿エリアの料金相場は、グループレッスン月4回で9,625円〜15,000円程度。パーソナルレッスンは1回4,400円〜、月額15,000円〜22,000円程度です。無理なく継続できる予算を決めましょう。料金だけでなく、入会金やレンタル料なども確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。新宿エリアではCLUB PILATESやthe SILKが無料体験を提供しており、zen place pilatesは500円から体験可能です。気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。新宿はJR山手線・中央線・小田急線・京王線・東京メトロ丸ノ内線・副都心線・都営大江戸線・都営新宿線など多数の路線が集まる日本最大のターミナル駅。仕事帰りやショッピングのついでに立ち寄れる立地が魅力です。the SILKは新宿西口駅から徒歩1分、zen place pilatesは徒歩2分と、駅近スタジオも充実しています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              新宿のピラティス料金相場【2026年4月最新】
            </h2>
            <div className="bg-warm-50 rounded-lg p-8 border border-warm-200 mb-8">
              <p className="text-warm-600 leading-relaxed mb-6">
                新宿は都内有数のオフィス街であり繁華街。仕事帰りの需要が高く、大手チェーンから個人スタジオまで選択肢が非常に多いエリアです。競争が激しい分、キャンペーンや割引プランも充実しています。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">グループレッスン（月4回）</h3>
                  <p className="text-3xl font-bold text-warm-800 mb-2">9,625円〜15,070円</p>
                  <p className="text-sm text-warm-600">zen place pilatesのマット月4回9,625円〜が最安クラス。ピラティスKは11,220円〜、the SILKは15,070円〜。CLUB PILATESは10,890円〜で無料体験ありとコスパに優れています。</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">パーソナルレッスン</h3>
                  <p className="text-3xl font-bold text-warm-800 mb-2">4,400円〜22,000円</p>
                  <p className="text-sm text-warm-600">ピラティスミラーは30分4,400円〜で都内最安レベル。STUDIO IVYは完全個室で月2回15,000円〜。ELEMENTは30分マンツーマン月4回22,000円。個室・時間・頻度で選びましょう。</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-5 border border-warm-200">
                <h3 className="font-bold text-warm-900 mb-3">入会金・体験レッスン費用</h3>
                <p className="text-sm text-warm-600">入会金は5,000円〜30,000円台が一般的ですが、キャンペーン期間中は0円になるケースが多いです。体験レッスンはCLUB PILATESが無料、zen placeは1,000円〜、新規オープン店舗は特別価格で体験できることも。複数スタジオで体験して比較するのがベストです。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              新宿でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">新宿駅の東口・西口・南口でエリアが異なる</h3>
                <p className="text-warm-600 leading-relaxed">
                  新宿駅は東口（歌舞伎町方面）、西口（都庁方面）、南口（新宿サザンテラス方面）で街の雰囲気もスタジオの立地も大きく異なります。通勤経路や乗降口に近いスタジオを選ぶことが長く通い続けるコツです。新宿三丁目駅の利用も検討すると、選択肢がさらに広がります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">夜のレッスン予約は早い者勝ち</h3>
                <p className="text-warm-600 leading-relaxed">
                  新宿はオフィスワーカーが多いため、平日19時〜21時台のレッスンは非常に人気です。特にグループレッスンは定員があるため、前日や当日だと満席のことも。月額プランで予約枠を確保するか、平日昼間・早朝のレッスンを狙うのも一つの手です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">施設の清潔感とシャワー有無を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  仕事帰りにレッスンを受ける方は、シャワールームやパウダールームの有無が重要なチェックポイントです。新宿エリアのスタジオはビルのワンフロアに入っていることが多く、シャワーがないスタジオもあります。体験レッスン時に必ず確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">複数店舗利用できるかもチェック</h3>
                <p className="text-warm-600 leading-relaxed">
                  zen placeは全国140以上のスタジオを相互利用可能。休日は自宅近くのスタジオ、平日は新宿のスタジオと使い分けることで通いやすさが格段に上がります。CLUB PILATESも全国の店舗で利用可能です。ライフスタイルに合わせて柔軟に通えるスタジオを選びましょう。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが基本。ゆったりしすぎる服はマシンに挟まる恐れがあるので避けましょう。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>飲み物（水500ml以上）</strong>：レッスン中は想像以上に汗をかきます。水は必ず持参しましょう。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フェイスタオル</strong>：汗拭き用に1枚は必須。マシン用タオルはスタジオ側で用意されることが多いです。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>グリップソックス</strong>：マシンピラティスでは靴下着用が必須のスタジオがほとんど。滑り止め付きのグリップソックスを用意しましょう。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>が必須。ピラティスでは脚を高く上げたり体をひねる動きが多いため、動きを妨げない服を選びましょう。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>フィット感のあるトップス</strong>がおすすめ。逆さまの姿勢になることもあるため、めくれ上がりにくい服を選ぶと安心です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル対応</strong>のスタジオも。the SILKやピラティスKは手ぶら体験OKの場合があるので事前に確認を。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリーは外して</strong>参加しましょう。マシンのスプリングやストラップに引っかかる危険があります。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>新宿エリアの豆知識：</strong>新宿駅周辺はスタジオ密度が高いため、1日で2〜3スタジオをはしごして体験する方もいます。体験後はルミネやNEWoManでランチ・ショッピングを楽しむのもおすすめ。西口エリアはビジネス街で静かな環境、東口エリアは活気ある雰囲気とエリアの個性もスタジオ選びの参考に。
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
        <section className="py-16 bg-warm-50" id="summary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">
              まとめ
            </h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は新宿のおすすめピラティススタジオ14選をご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              新宿はJR山手線・中央線・小田急線・京王線・東京メトロ丸ノ内線・副都心線・都営大江戸線など、多数の路線が集まる日本最大のターミナル駅。大手チェーンから女性専用スタジオ、完全個室パーソナル、予約不要のカジュアルスタジオまで、多彩なスタジオが集まるエリアです。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              コスパ重視ならzen place pilatesやURBAN CLASSIC PILATES、女性専用ならピラティスKやthe SILK、パーソナルならSTUDIO IVYやELEMENT、ヨガも楽しみたいならRintosullやCALDOと、目的や予算に合わせて選んでみてください。
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
              初回限定の体験レッスン無料〜2,000円。<br />
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
      <ConsultantSection areaKey="shinjuku" areaName="新宿" />

            {/* boost-p1-shin-okubo-202607 */}
            <div className="my-8 bg-white border border-warm-200 p-5">
              <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">近隣エリア</p>
              <p className="text-sm text-warm-700 font-light leading-relaxed">
                近隣の<Link href="/area/shin-okubo/" className="text-warm-800 underline decoration-warm-300 hover:text-warm-900">新大久保エリアのピラティススタジオ比較</Link>もあわせて検討できます。無料体験・料金・アクセスをまとめて確認できます。
              </p>
            </div>
      <RelatedAreas currentSlug="shinjuku" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
