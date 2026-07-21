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
  alternates: { canonical: 'https://biyori-pilates.com/area/takadanobaba/' },
  title: '【2026年7月最新】高田馬場のピラティス｜初心者OK・無料体験で選ぶ料金比較',
  description: '高田馬場エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,高田馬場,早稲田,目白,新大久保,東京,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 高田馬場スタジオ',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.8,
    reviewCount: 29,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '2週間前',
        text: '高田馬場駅から徒歩5分で通いやすいです。マットもマシンも両方受けられるのが嬉しい。全国150店舗以上で他店利用可能なのも出張時に便利。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '1ヶ月前',
        text: '少人数制で丁寧な指導をしてもらえます。体験500円で気軽に始められました。学生が多いエリアですが、スタジオ内は落ち着いた雰囲気です。',
      },
      {
        author: 'K.H',
        rating: 4,
        date: '3週間前',
        text: '男性もOKなので夫婦で通えます。インストラクターの質が高く、身体の使い方を丁寧に教えてくれます。',
      },
    ],
    price: 'マットグループ月4回 9,625円〜',
    trial: '体験レッスン 500円〜',
    features: ['マット&マシン', '高田馬場駅徒歩5分', '男性OK', '全国相互利用'],
    description: '全国150店舗以上展開の大手ピラティススタジオ。JR山手線・西武新宿線・東京メトロ東西線「高田馬場駅」から徒歩5分の好立地。マットグループ、マシン（リフォーマー）グループ、プライベートレッスンと幅広いメニューを提供。男性も利用可能で、経験豊富なインストラクターが一人ひとりに合わせた丁寧な指導を行います。体験レッスンは500円から。',
    access: 'JR山手線・西武新宿線・東京メトロ東西線「高田馬場駅」徒歩5分',
    address: '東京都新宿区高田馬場1丁目（高田馬場駅徒歩5分）',
    popularPlan: {
      name: 'リフォーマーグループ（月4回）',
      description: 'マシンを使ったグループレッスン。少人数制で初心者も安心。マットレッスンへの切り替えも可能。',
      price: '月4回 15,400円（税込）〜',
    },
    options: [
      'マットグループ（月4回 9,625円〜）',
      'リフォーマーグループ（月4回 15,400円〜）',
      'フリープラン（月16,940円〜）',
      'プライベート（1回 9,900円〜）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'ウォーターサーバー'],
    },
  },
  {
    name: 'the SILK 高田馬場店',
    image: '/images/studios/the-silk.webp',
    rating: 4.7,
    reviewCount: 151,
    reviews: [
      {
        author: 'R.N',
        rating: 5,
        date: '1週間前',
        text: '女性専用で安心して通えます。体験レッスンが無料なので気軽に始められました。音楽に合わせたレッスンが楽しい！',
      },
      {
        author: 'A.H',
        rating: 5,
        date: '2週間前',
        text: '1回約3,768円はこのエリアではコスパが良いです。スタジオがおしゃれでモチベーションが上がります。',
      },
      {
        author: 'M.M',
        rating: 4,
        date: '3週間前',
        text: '仕事帰りに高田馬場で通えるのが便利。女性専用なので周りを気にせず集中できます。',
      },
    ],
    price: 'Standard4 15,070円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', 'マシンピラティス専門', '高田馬場駅近', '音楽×マシン'],
    description: '女性専用マシンピラティス専門スタジオ。高田馬場駅から徒歩圏内に展開。最新のリフォーマーマシンを完備し、音楽に合わせた独自プログラムで楽しくトレーニング。無料体験レッスン実施中。1回約3,768円からのリーズナブルな料金設定が魅力。',
    access: 'JR山手線・西武新宿線・東京メトロ東西線「高田馬場駅」徒歩圏内',
    address: '東京都新宿区高田馬場（高田馬場駅徒歩圏内）',
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
      closed: '年末年始',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', '女性専用'],
    },
  },
  {
    name: 'CLUB PILATES 早稲田店',
    image: '/images/studios/club-pilates.webp',
    rating: 4.7,
    reviewCount: 65,
    reviews: [
      {
        author: 'T.M',
        rating: 5,
        date: '1週間前',
        text: '世界2,000店舗以上展開のグローバルブランドの安心感があります。少人数グループで丁寧に指導してくれます。早稲田駅から近くて通いやすいです。',
      },
      {
        author: 'N.K',
        rating: 5,
        date: '2週間前',
        text: 'リフォーマー以外にも多彩なマシンを使えるのが魅力。レベル別クラスがあるので無理なくステップアップできます。',
      },
      {
        author: 'H.S',
        rating: 4,
        date: '3週間前',
        text: '体験無料なので気軽に試せました。インストラクターが国際資格保有者なので指導レベルが高いです。',
      },
    ],
    price: '月4回 10,890円〜',
    trial: '体験レッスン 無料',
    features: ['世界展開ブランド', '男性OK', '多彩なマシン', '早稲田駅近'],
    description: '世界2,000店舗以上を展開するグローバルピラティスブランド。東京メトロ東西線「早稲田駅」から徒歩圏内。リフォーマーだけでなくスプリングボード、チェアなど多彩なマシンを使用。レベル1〜2.5のクラス分けで初心者から上級者まで対応。国際資格保有のインストラクターが指導。男性も利用可能。',
    access: '東京メトロ東西線「早稲田駅」徒歩圏内 / JR「高田馬場駅」から東西線で1駅',
    address: '東京都新宿区早稲田町（早稲田駅徒歩圏内）',
    popularPlan: {
      name: 'EFT4（月4回）',
      description: '月4回のグループマシンピラティス。リフォーマーを中心に多彩なマシンを使用するベーシックプラン。',
      price: '月4回 10,890円（税込）〜',
    },
    options: [
      'EFT4（月4回 10,890円〜）',
      'EFT8（月8回 19,690円〜）',
      'Unlimited（通い放題 29,590円〜）',
      '体験レッスン無料',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['体幹強化', '姿勢改善', 'パフォーマンス向上', '健康維持'],
    },
    basicInfo: {
      hours: '月〜金 7:00〜21:00 / 土日 7:00〜18:00',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', '多彩なマシン完備'],
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
        text: '音楽に合わせて楽しくトレーニングできます！高田馬場から山手線で2駅の新宿三丁目にあって通いやすい。女性専用なので集中できます。',
      },
      {
        author: 'H.I',
        rating: 4,
        date: '1週間前',
        text: 'マシンピラティス専門なので設備が充実しています。月4回11,220円はコスパ良いです。',
      },
      {
        author: 'S.N',
        rating: 5,
        date: '2週間前',
        text: '「30歳からの本気ボディメイク」というコンセプトに惹かれて入会。2ヶ月で体が引き締まってきました。',
      },
    ],
    price: '月4回 11,220円〜',
    trial: '体験レッスン 2,000円',
    features: ['女性専用マシンピラティス', '新宿三丁目駅近く', '音楽×マシン', 'ボディメイク'],
    description: '「30歳からの本気ボディメイク」がコンセプトの女性専用マシンピラティス専門スタジオ。全国54店舗展開。高田馬場からJR山手線で2駅の新宿三丁目に位置。音楽に合わせた独自プログラムで楽しくボディメイク。初心者から経験者まで対応。',
    access: '東京メトロ丸ノ内線・副都心線「新宿三丁目駅」近く / 高田馬場からJR山手線で2駅',
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
    name: 'STUDIO IVY 高田馬場店',
    image: '/images/studios/studio-ivy.webp',
    rating: 4.8,
    reviewCount: 12,
    reviews: [
      {
        author: 'C.Y',
        rating: 5,
        date: '1週間前',
        text: 'パーソナル専門なので自分に合ったプログラムを組んでもらえます。完全プライベート空間で集中できるのが良い。',
      },
      {
        author: 'E.M',
        rating: 5,
        date: '2週間前',
        text: '月謝制で1回6,250円〜はパーソナルとしてはかなりリーズナブル。インストラクターの質も高いです。',
      },
      {
        author: 'K.T',
        rating: 4,
        date: '3週間前',
        text: '高田馬場駅から近くて通いやすい。マシンピラティスのパーソナルを探していたので理想的でした。',
      },
    ],
    price: '1回 6,250円〜',
    trial: '体験レッスンあり',
    features: ['パーソナル専門', 'マシンピラティス', '高田馬場駅近', '完全個室'],
    description: '全国展開のパーソナルマシンピラティス専門スタジオ。高田馬場駅から徒歩圏内。月謝制で1レッスン6,250円〜とパーソナルとしてはリーズナブルな価格設定。完全プライベート空間でオーダーメイドのプログラムを提供。一人ひとりの目標や身体の状態に合わせた指導が魅力。',
    access: 'JR山手線・西武新宿線・東京メトロ東西線「高田馬場駅」徒歩圏内',
    address: '東京都新宿区高田馬場（高田馬場駅徒歩圏内）',
    popularPlan: {
      name: 'パーソナルレッスン（月4回）',
      description: '完全プライベートのマシンピラティスレッスン。オーダーメイドプログラムで効率的にボディメイク。',
      price: '月4回 25,000円（税込）〜（1回あたり6,250円〜）',
    },
    options: [
      'パーソナル月2回（15,000円〜）',
      'パーソナル月4回（25,000円〜）',
      'パーソナル月8回（46,000円〜）',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['ボディメイク', '姿勢改善', '腰痛・肩こり改善', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: '7:00〜22:00',
      closed: '不定休',
      facilities: ['完全個室', 'ロッカー', 'パウダールーム', 'ウォーターサーバー'],
    },
  },
  {
    name: 'ELEMENT 高田馬場店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=U11199J.1.V154352I.U1357808',
    image: '/images/studios/element.webp',
    rating: 4.6,
    reviewCount: 11,
    reviews: [
      {
        author: 'M.S',
        rating: 5,
        date: '1週間前',
        text: '30分のパーソナルレッスンなので忙しくても通いやすい！高田馬場駅から近くて便利です。ウェアも貸してくれるので手ぶらでOK。',
      },
      {
        author: 'R.T',
        rating: 4,
        date: '2週間前',
        text: 'ピラティスと筋トレを組み合わせたメニューが新鮮。短時間で効率よくトレーニングできます。',
      },
      {
        author: 'Y.O',
        rating: 5,
        date: '3週間前',
        text: '月額制でパーソナルが受けられるのは嬉しい。インストラクターが毎回しっかりカルテを見てくれるので安心。',
      },
    ],
    price: '月4回 22,000円〜',
    trial: '体験レッスンあり',
    features: ['パーソナル', '30分レッスン', '手ぶらOK', '高田馬場駅近'],
    description: '30分の短時間集中パーソナルピラティス＆トレーニングスタジオ。高田馬場駅から徒歩圏内。ウェア・タオル・シューズ無料レンタルで手ぶら通い可能。ピラティスと筋トレを組み合わせたオリジナルメニューで効率的にボディメイク。忙しい方にもおすすめ。',
    access: 'JR山手線・西武新宿線・東京メトロ東西線「高田馬場駅」徒歩圏内',
    address: '東京都新宿区高田馬場（高田馬場駅徒歩圏内）',
    popularPlan: {
      name: 'パーソナル（月4回）',
      description: '30分の短時間集中パーソナルレッスン。ピラティス×筋トレで効率的にボディメイク。',
      price: '月4回 22,000円（税込）〜',
    },
    options: [
      'パーソナル月4回（22,000円〜）',
      'パーソナル月8回（40,000円〜）',
      '通い放題プラン',
      'ウェア・タオル・シューズ無料レンタル',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性65% / 男性35%',
      purpose: ['ダイエット', 'ボディメイク', '体幹強化', '時短トレーニング'],
    },
    basicInfo: {
      hours: '10:00〜22:00',
      closed: '不定休',
      facilities: ['完全個室', 'ロッカー', 'ウェア無料レンタル', 'タオル無料レンタル'],
    },
  },
  {
    name: 'Rintosull 目白店',
    image: '/images/studios/rintosull.webp',
    rating: 4.6,
    reviewCount: 145,
    reviews: [
      {
        author: 'A.K',
        rating: 5,
        date: '1週間前',
        text: 'LAVA系列なので安心感があります。マシンピラティスとホットヨガの両方が受けられるのが魅力。目白駅から近くて高田馬場からも1駅。',
      },
      {
        author: 'S.M',
        rating: 4,
        date: '2週間前',
        text: '女性専用なので安心です。月4回8,800円〜はこのエリアでは最安クラス。初心者が87%以上で安心して始められました。',
      },
      {
        author: 'N.O',
        rating: 5,
        date: '3週間前',
        text: 'ピラティスとホットヨガを組み合わせて受けられるので飽きずに続けられています。スタジオも清潔感があります。',
      },
    ],
    price: '月4回 8,800円〜',
    trial: '体験レッスンあり',
    features: ['女性専用', 'LAVA系列', 'コスパ抜群', '目白駅近（高田馬場隣駅）'],
    description: 'ホットヨガスタジオLAVA系列の女性専用マシンピラティススタジオ。JR山手線「目白駅」から徒歩圏内で、高田馬場からも1駅。マシンピラティスとホットヨガの両方を楽しめます。月4回8,800円〜のコスパの良い料金設定。初心者が87%以上で安心して始められます。',
    access: 'JR山手線「目白駅」徒歩圏内 / 高田馬場から山手線で1駅',
    address: '東京都豊島区目白（目白駅徒歩圏内）',
    popularPlan: {
      name: 'マシンピラティス月4回',
      description: 'リフォーマーマシンを使った女性専用グループレッスン。LAVA系列ならではのリーズナブルな料金。',
      price: '月4回 8,800円（税込）〜',
    },
    options: [
      'マシンピラティス月4回（8,800円〜）',
      'ホットヨガ併用プラン',
      '通い放題プラン',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ダイエット', 'ボディメイク', '姿勢改善', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '平日 9:00〜21:00 / 土日祝 9:00〜18:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', '女性専用'],
    },
  },
  {
    name: 'ピラティスミラー 高田馬場店',
    image: '/images/studios/pilates-mirror.webp',
    rating: 4.5,
    reviewCount: 17,
    reviews: [
      {
        author: 'K.N',
        rating: 5,
        date: '1週間前',
        text: '鏡の前でフォームを確認しながらレッスンを受けられるのが良い。1回4,400円〜でパーソナル感覚のレッスンが受けられます。',
      },
      {
        author: 'M.I',
        rating: 4,
        date: '2週間前',
        text: 'マシンピラティスの少人数制レッスンなので丁寧に見てもらえます。高田馬場駅からのアクセスも良いです。',
      },
      {
        author: 'Y.S',
        rating: 5,
        date: '3週間前',
        text: '初心者でも安心して通える雰囲気。インストラクターが身体の状態を見ながら的確にアドバイスしてくれます。',
      },
    ],
    price: '1回 4,400円〜',
    trial: '体験レッスンあり',
    features: ['マシンピラティス', '少人数制', '高田馬場駅近', 'ミラーでフォーム確認'],
    description: 'マシンピラティス専門の少人数制スタジオ。高田馬場駅から徒歩圏内。鏡の前でフォームを確認しながらレッスンを受けられるのが特長。1回4,400円〜とリーズナブルな料金設定。初心者にも丁寧な指導で安心して通えます。',
    access: 'JR山手線・西武新宿線・東京メトロ東西線「高田馬場駅」徒歩圏内',
    address: '東京都新宿区高田馬場（高田馬場駅徒歩圏内）',
    popularPlan: {
      name: 'マシンピラティス（月4回）',
      description: '少人数制のマシンピラティスレッスン。ミラーで自分のフォームを確認しながら効果的にトレーニング。',
      price: '月4回 17,600円（税込）〜（1回あたり4,400円〜）',
    },
    options: [
      '月4回プラン（17,600円〜）',
      '月8回プラン',
      '都度払いプラン',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', 'ボディメイク', '体幹強化', '柔軟性向上'],
    },
    basicInfo: {
      hours: '10:00〜21:00',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', 'ミラー完備'],
    },
  },
  {
    name: 'URBAN CLASSIC PILATES 高田馬場店',
    officialUrl: 'https://t.felmat.net/fmcl?ak=Z11337L.1.X156352B.U1357808',
    image: '/images/studios/urban-classic-pilates.webp',
    rating: 4.5,
    reviewCount: 247,
    reviews: [
      {
        author: 'L.W',
        rating: 5,
        date: '1週間前',
        text: '予約不要で30分のサーキット形式なので、思い立ったらすぐ通えるのが嬉しい。高田馬場駅から近くて便利。',
      },
      {
        author: 'A.T',
        rating: 4,
        date: '2週間前',
        text: '月4回9,680円はマシンピラティスとしてはかなりお得。予約不要なので自分のペースで通えます。',
      },
      {
        author: 'R.K',
        rating: 5,
        date: '3週間前',
        text: '30分で全身をバランスよく鍛えられるサーキット形式が気に入っています。忙しい学生にもおすすめ。',
      },
    ],
    price: '月4回 9,680円〜',
    trial: '体験レッスンあり',
    features: ['予約不要', '30分サーキット', 'コスパ抜群', '高田馬場駅近'],
    description: '予約不要・30分のサーキット形式マシンピラティススタジオ。高田馬場駅から徒歩圏内。リフォーマーを使った30分のサーキットトレーニングで、思い立ったらすぐ通える気軽さが魅力。月4回9,680円〜とリーズナブル。忙しい方や学生にもおすすめ。',
    access: 'JR山手線・西武新宿線・東京メトロ東西線「高田馬場駅」徒歩圏内',
    address: '東京都新宿区高田馬場（高田馬場駅徒歩圏内）',
    popularPlan: {
      name: 'マンスリー4（月4回）',
      description: '月4回・予約不要のマシンピラティスサーキットプラン。30分で効率よく全身を鍛えられる。',
      price: '月4回 9,680円（税込）',
    },
    options: [
      'マンスリー4（月4回 9,680円）',
      'マンスリー8（月8回）',
      '通い放題プラン',
      '予約不要・30分サーキット',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['時短トレーニング', 'ダイエット', '体幹強化', '運動習慣づくり'],
    },
    basicInfo: {
      hours: '平日 10:00〜21:00 / 土日祝 10:00〜19:00',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', 'ウォーターサーバー'],
    },
  },
  {
    name: 'CALDO 高田馬場店',
    image: '/images/studios/caldo.webp',
    rating: 4.5,
    reviewCount: 117,
    reviews: [
      {
        author: 'F.H',
        rating: 5,
        date: '1週間前',
        text: 'ホットヨガがメインですがピラティスプログラムも充実しています。大きな施設でシャワーやアメニティも充実。月額も手頃。',
      },
      {
        author: 'J.K',
        rating: 4,
        date: '2週間前',
        text: '高田馬場駅から近くて通いやすい。ホットヨガとピラティスを組み合わせて受けられるのが嬉しい。',
      },
      {
        author: 'P.M',
        rating: 4,
        date: '3週間前',
        text: '予約不要で気軽に通えるのが良い。ピラティスのレッスンも初心者向けから経験者向けまで幅広くあります。',
      },
    ],
    price: '月4回 9,900円〜',
    trial: '体験レッスンあり',
    features: ['ホットヨガ&ピラティス', '大型施設', '予約不要', '高田馬場駅近'],
    description: '全国展開のホットヨガ＆ピラティススタジオ。高田馬場駅から徒歩圏内。ホットヨガをメインにピラティスプログラムも充実。大型施設でシャワー・アメニティも完備。予約不要で気軽に通えるスタイルが魅力。初心者から経験者まで幅広いプログラムを用意。',
    access: 'JR山手線・西武新宿線・東京メトロ東西線「高田馬場駅」徒歩圏内',
    address: '東京都新宿区高田馬場（高田馬場駅徒歩圏内）',
    popularPlan: {
      name: 'マンスリー4（月4回）',
      description: 'ホットヨガ・ピラティスのグループレッスンが月4回受けられるベーシックプラン。',
      price: '月4回 9,900円（税込）〜',
    },
    options: [
      'マンスリー4（月4回 9,900円〜）',
      'デイタイム（平日昼間通い放題）',
      'フルタイム（通い放題）',
      'プレミアム（全営業時間利用可能）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['ダイエット', 'デトックス', '姿勢改善', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '平日 10:00〜22:30 / 土日祝 10:00〜20:00',
      closed: '月末最終日',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'アメニティ完備'],
    },
  },
  {
    name: 'NATURAglam 高田馬場スタジオ',
    image: '/images/studios/naturaglam.webp',
    rating: 4.6,
    reviewCount: 14,
    reviews: [
      {
        author: 'W.N',
        rating: 5,
        date: '1週間前',
        text: '少人数制のアットホームなスタジオ。インストラクターの方が親切で、初心者でも安心して通えます。料金もリーズナブル。',
      },
      {
        author: 'D.S',
        rating: 5,
        date: '2週間前',
        text: 'マットピラティスのグループレッスンが充実。ヨガとピラティスの両方を受けられるのが嬉しい。',
      },
      {
        author: 'T.K',
        rating: 4,
        date: '3週間前',
        text: '高田馬場駅から近くてアクセス良好。少人数制なので丁寧に見てもらえます。',
      },
    ],
    price: '月4回 8,800円〜',
    trial: '体験レッスンあり',
    features: ['少人数制', 'アットホーム', 'ヨガ&ピラティス', '高田馬場駅近'],
    description: '少人数制のアットホームなヨガ＆ピラティススタジオ。高田馬場駅から徒歩圏内。マットピラティスを中心にヨガクラスも開催。少人数制で丁寧な指導が魅力。月4回8,800円〜のリーズナブルな料金で、初心者にも安心して通えるスタジオ。',
    access: 'JR山手線・西武新宿線・東京メトロ東西線「高田馬場駅」徒歩圏内',
    address: '東京都新宿区高田馬場（高田馬場駅徒歩圏内）',
    popularPlan: {
      name: 'レギュラー会員（月4回）',
      description: '月4回のマットピラティス・ヨガレッスンが受けられるベーシックプラン。',
      price: '月4回 8,800円（税込）〜',
    },
    options: [
      'レギュラー会員（月4回 8,800円〜）',
      'フリー会員（通い放題）',
      'ドロップイン（1回 3,300円〜）',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['リラックス', '姿勢改善', '柔軟性向上', '健康維持'],
    },
    basicInfo: {
      hours: '平日 10:00〜21:00 / 土日 10:00〜18:00',
      closed: '不定休',
      facilities: ['ロッカー', 'マットレンタル', 'アットホームな空間'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！高田馬場エリアのスタジオは初心者が87%以上のスタジオ（Rintosull）もあり、どのスタジオも初心者向けプログラムを用意しています。体験レッスンから気軽に始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで手軽に始められます。マシンピラティスはリフォーマーなどの専用マシンを使い、バネの負荷で効率的にトレーニング。初心者にはマシンの方がフォームを安定させやすくおすすめです。',
  },
  {
    question: '高田馬場エリアの料金相場は？',
    answer: 'グループレッスン月4回で8,800円〜15,400円程度が相場です。パーソナルは1回4,400円〜6,250円程度。chocoZAPなら月額3,278円でセルフ利用も可能。体験は無料〜2,000円のスタジオが多いです。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: '初心者は週1-2回（月4〜8回）からスタートがおすすめ。慣れてきたら週2-3回に増やすとより効果を実感できます。無理なく継続できる頻度が一番大切です。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'はい、ピラティスでインナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質になります。ダイエット目的なら週2-3回の頻度で最低2-3ヶ月は継続しましょう。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '動きやすい服装（Tシャツ・レギンス等）と飲み物があればOK。ELEMENTなどウェア無料レンタルのスタジオなら手ぶらでも大丈夫です。靴は不要（裸足またはソックスで行います）。',
  },
  {
    question: 'ピラティスとヨガの違いは？',
    answer: 'ピラティスは体幹（インナーマッスル）の強化が中心で、身体の機能改善に重点を置きます。ヨガは柔軟性向上とリラックス・精神面のケアが中心です。RintosullやCALDOでは両方受けられます。',
  },
  {
    question: '肩こりや腰痛は改善しますか？',
    answer: 'はい、ピラティスは姿勢改善と体幹強化を通じて、肩こり・腰痛の根本原因にアプローチします。デスクワークが多い方に特におすすめ。ただし痛みが強い場合は医師に相談してからにしましょう。',
  },
  {
    question: 'どのくらいで効果が出ますか？',
    answer: '個人差はありますが、2ヶ月を過ぎた頃から姿勢の変化や体の引き締まりを実感する方が多いです。週2回以上通えると効果を感じやすくなります。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめ？',
    answer: 'パーソナルは自分に合ったオーダーメイドのプログラムで効果が出やすい反面、費用は高め。グループは安く楽しく続けられます。まずはグループの体験から始めて、より効果を求めるならパーソナルに移行するのがおすすめです。',
  },
]

export default function TakadanobabaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '高田馬場', url: 'https://pilates-biyori.com/area/takadanobaba/' },
      ]} />
      <main className="pt-20 bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月22日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026年7月最新】ピラティス高田馬場おすすめ12選！<br className="hidden md:block" />
              料金・体験レッスン・マシン対応を比較！
            </h1>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>
              {' > '}
              <Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>
              {' > '}
              <span className="text-warm-600">高田馬場</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="高田馬場" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-600 leading-relaxed mb-6">こんにちは。</p>
            <p className="text-warm-600 leading-relaxed mb-6">Pilates-Biyori編集部です！</p>
            <p className="text-warm-600 leading-relaxed mb-6">あなたは、</p>
            <p className="text-warm-600 leading-relaxed font-medium mb-6">「高田馬場でピラティスを始めたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">「駅近でコスパの良いスタジオを知りたい」</p>
            <p className="text-warm-600 leading-relaxed mb-6">と思っていませんか？</p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、高田馬場駅を中心に早稲田・目白・新大久保など近隣エリアも含めたおすすめピラティススタジオ12選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>高田馬場・早稲田・目白エリアでピラティススタジオを探している</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>コスパの良いスタジオがいい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>マシンピラティスを体験してみたい</span></li>
                <li className="flex items-start"><span className="text-warm-400 mr-2">✓</span><span>パーソナルとグループの料金を比較したい</span></li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">それではさっそく見ていきましょう！</p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="高田馬場" />
        <AreaMarketComparison studios={studios} areaName="高田馬場" />

        {/* Studio List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              高田馬場のおすすめピラティススタジオ12選
            </h2>
            <div className="space-y-8">
              {[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Category Search */}

        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              高田馬場のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">4,400円〜17,600円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 6,250円〜25,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜2,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              高田馬場は商業施設やオフィスが集まる繁華街エリアのため、駅近の好立地スタジオが多く、やや高めの料金設定が目立ちます。一方で大手チェーンの進出も多いため、キャンペーンや月額通い放題プランを上手に活用すれば、実質的なコストを抑えることも可能です。近隣の新大久保エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              高田馬場でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">JR山手線・西武新宿線・東京メトロ東西線「高田馬場駅」からのアクセスを事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  高田馬場エリアのスタジオは高田馬場駅周辺に集中していますが、出口や改札によって徒歩時間が変わります。初回訪問時は余裕を持って10分前に到着できるよう、事前にルートを確認しておきましょう。高田馬場駅は複数路線が乗り入れるため、利用路線によって最適な出口が異なります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">繁華街ならではの予約混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  高田馬場は人が集まる繁華街のため、平日夜（18時〜21時）と土日午前中はレッスン予約が特に集中します。人気クラスは1週間以上前に満席になることも。アプリやWebで空き状況をこまめにチェックし、キャンセル待ち機能があるスタジオでは積極的に活用しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  高田馬場エリアの多くのスタジオでは、初月無料や入会金無料などの魅力的なキャンペーンを実施しています。ただし、3〜6ヶ月の最低契約期間が条件になっていることが大半です。途中解約すると違約金が発生するケースもあるため、契約前に期間と条件を必ず確認しましょう。月の途中入会は日割り計算になるかも要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  高田馬場エリアだけでなく、近隣の<Link href="/area/shin-okubo/" className="text-warm-700 underline hover:text-warm-900">新大久保</Link>、<Link href="/area/shinjuku/" className="text-warm-700 underline hover:text-warm-900">新宿</Link>、<Link href="/area/ikebukuro/" className="text-warm-700 underline hover:text-warm-900">池袋</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>高田馬場エリアの豆知識：</strong>高田馬場は仕事帰りに立ち寄る方が多いエリアです。荷物が多くなりがちなので、ロッカーの広さやシャワー設備の有無を事前に確認しておくと安心。ウェアレンタルがあるスタジオなら手ぶらで通えて便利です。
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              目的別おすすめスタジオ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額1万円以下から始められるスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• chocoZAP（月額3,278円・24時間）</li>
                  <li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li>
                  <li className="text-warm-700">• NATURAglam（月4回 8,800円〜）</li>
                  <li className="text-warm-700">• zen place（マット月4回 9,625円〜）</li>
                  <li className="text-warm-700">• URBAN CLASSIC PILATES（月4回 9,680円）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマンで効果的にボディメイク。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスミラー（1回4,400円〜）</li>
                  <li className="text-warm-700">• STUDIO IVY（1回6,250円〜）</li>
                  <li className="text-warm-700">• ELEMENT（30分パーソナル）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの安心空間で集中できる。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• the SILK（体験無料）</li>
                  <li className="text-warm-700">• ピラティスK（新宿店）</li>
                  <li className="text-warm-700">• Rintosull（目白店）</li>
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
                週1-2回（月4〜8回）からスタートするのがおすすめ。まずは身体を慣らすことが大切です。継続期間は最低でも2-3ヶ月。この期間で効果を実感できる方が多いですよ。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回（月8〜12回）がおすすめ。しっかりと身体を変えたい方は頻度を上げることで効果も早く現れます。3-6ヶ月継続すると、周りからも「痩せた？」と言われるレベルの変化が期待できます。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">グループ月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  コスパ抜群のグループレッスンでピラティスデビュー。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• chocoZAP（月額 3,278円）</li>
                  <li>• Rintosull（月4回 8,800円〜）</li>
                  <li>• NATURAglam（月4回 8,800円〜）</li>
                  <li>• zen place（マット月4回 9,625円〜）</li>
                  <li>• URBAN CLASSIC PILATES（月4回 9,680円）</li>
                  <li>• CALDO（月4回 9,900円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 11,000〜18,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">マシン&専門</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の本格レッスンで効率的にボディメイク。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• CLUB PILATES（月4回 10,890円〜）</li>
                  <li>• ピラティスK（月4回 11,220円〜）</li>
                  <li>• the SILK（月4回 15,070円〜）</li>
                  <li>• zen place リフォーマー（月4回 15,400円〜）</li>
                  <li>• ピラティスミラー（月4回 17,600円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 22,000円〜/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">パーソナル</p>
                <p className="text-sm text-warm-600 mb-4">
                  プライベートレッスンで最大限の効果を。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ELEMENT（月4回 22,000円〜）</li>
                  <li>• STUDIO IVY（月4回 25,000円〜）</li>
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
                  高田馬場エリアの料金相場は、グループレッスン月4回で8,800円〜15,400円程度。パーソナルレッスンは1回4,400円〜6,250円、月額15,000円〜25,000円程度です。chocoZAPなら月額3,278円で始められます。無理なく継続できる予算を決めましょう。入会金やレンタル料なども確認を。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度は実際に行ってみないとわかりません。the SILKやCLUB PILATESは無料体験、zen placeは500円から体験可能です。気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。高田馬場はJR山手線・西武新宿線・東京メトロ東西線の3路線が利用可能な好アクセスの駅。新宿まで2駅、池袋まで3駅と都内各所にも出やすい立地です。早稲田大学が近く学生の活気があふれるエリアで、仕事帰りや学校帰りに立ち寄りやすいスタジオが揃っています。
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
              今回は高田馬場のおすすめピラティススタジオ12選をご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              高田馬場はJR山手線・西武新宿線・東京メトロ東西線の3路線が利用でき、新宿まで2駅・池袋まで3駅という好アクセス。早稲田大学が近く学生の街としても知られるこのエリアには、月額3,278円のchocoZAPから本格パーソナルのSTUDIO IVYまで、幅広い価格帯のスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              コスパ重視ならRintosullやNATURAglam、女性専用ならthe SILKやピラティスK、パーソナルならSTUDIO IVYやELEMENT、予約不要の気軽さならURBAN CLASSIC PILATESやchocoZAPと、目的や予算に合わせて選んでみてください。
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
      <ConsultantSection areaKey="takadanobaba" areaName="高田馬場" />

            {/* boost-p1-shin-okubo-202607 */}
            <div className="my-8 bg-white border border-warm-200 p-5">
              <p className="text-xs text-warm-400 uppercase tracking-[0.15em] mb-2">近隣エリア</p>
              <p className="text-sm text-warm-700 font-light leading-relaxed">
                近隣の<Link href="/area/shin-okubo/" className="text-warm-800 underline decoration-warm-300 hover:text-warm-900">新大久保エリアのピラティススタジオ比較</Link>もあわせて検討できます。無料体験・料金・アクセスをまとめて確認できます。
              </p>
            </div>
      <RelatedAreas currentSlug="takadanobaba" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
