import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス江坂おすすめ8選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '江坂エリアのおすすめピラティススタジオ8選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,江坂,吹田,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 江坂',
    image: '/images/pilates2.webp',
    rating: 4.8,
    reviewCount: 198,
    reviews: [
      {
        author: 'M.S',
        rating: 5,
        date: '2週間前',
        text: '江坂駅から徒歩1分！全国150以上のスタジオが相互利用できるのが魅力。マット・マシン・プライベートすべて対応。体験当日入会で入会金無料でした。',
      },
      {
        author: 'Y.T',
        rating: 5,
        date: '1ヶ月前',
        text: 'マットグループ月4回9,625円からとリーズナブル。エデュケーターの質が高く、体の変化を実感。男性もOK。',
      },
      {
        author: 'K.N',
        rating: 4,
        date: '3週間前',
        text: '平日は22時まで営業で仕事帰りにも通えます。土日祝は朝7時から。ライフスタイルに合わせやすい。',
      },
    ],
    price: '月4回 9,625円〜',
    trial: '体験レッスンあり（当日入会で入会金無料）',
    features: ['マシン完備', '男性OK', '江坂駅徒歩1分', '全国相互利用可'],
    description: '全国150以上のスタジオを展開する国内最大級のピラティス専門スタジオ。御堂筋線江坂駅から徒歩1分の好立地。マットグループ・リフォーマーグループ・プライベートレッスンと豊富なレッスン形式。男性も受講可能。',
    access: '御堂筋線「江坂駅」徒歩1分',
    address: '大阪府吹田市豊津町9-44 ハートランド江坂 5F',
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
      hours: '平日 9:00〜22:00 / 土日祝 7:00〜16:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'トラピーズテーブル', 'コンボチェア', '男女別更衣室', 'ロッカー'],
    },
  },
  {
    name: 'CLUB PILATES 江坂店',
    image: '/images/pilates3.webp',
    rating: 4.7,
    reviewCount: 145,
    reviews: [
      {
        author: 'R.K',
        rating: 5,
        date: '1週間前',
        text: '世界最大級のマシンピラティスブランド。30分の無料体験で雰囲気がわかりました。15種類の器具を1人1台使えるのが贅沢。レベル分けがあるので初心者も安心。',
      },
      {
        author: 'A.M',
        rating: 4,
        date: '2週間前',
        text: '江坂駅から近くて便利。月4回14,190円。資格保持のインストラクターが丁寧に指導。朝7時から営業で仕事前にも通えます。',
      },
      {
        author: 'S.Y',
        rating: 5,
        date: '3週間前',
        text: '最大12名の少人数制でしっかり見てもらえます。8つのプログラムと4段階のレベル分けで自分に合ったクラスが選べる。男性もOK。',
      },
    ],
    price: '月4回 14,190円〜',
    trial: '体験レッスン 無料（30分イントロクラス）',
    features: ['世界最大級', '15種類の器具', '江坂駅近', '男性OK'],
    description: '世界最大級のマシンピラティスブランド。江坂駅近くの好立地。最大12名の少人数制グループレッスンで、15種類のマシン・器具を1人1台完備。8つのプログラムと4段階のレベル分けで初心者から上級者まで対応。',
    access: '御堂筋線「江坂駅」近く',
    address: '大阪府吹田市江の木町1-39 セーレ江坂 4F',
    popularPlan: {
      name: 'グループ月4回プラン',
      description: '15種類の器具を使った本格グループレッスン。4段階のレベル分けで安心。',
      price: '月4回 14,190円（税込）',
    },
    options: [
      '月8回プラン（26,290円）',
      '通い放題プラン（40,590円）',
      '入会金 5,500円（キャンペーン時無料）',
      '無料イントロクラス（30分）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['体幹強化', '姿勢改善', 'ボディメイク', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: '月〜金 7:00-21:00 / 土日 7:00-18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'スプリングボード', 'TRX', 'チェア', 'Bosu'],
    },
  },
  {
    name: 'Rintosull 江坂店',
    image: '/images/pilates4.webp',
    rating: 4.6,
    reviewCount: 128,
    reviews: [
      {
        author: 'Y.N',
        rating: 5,
        date: '5日前',
        text: '江坂駅4番出口から徒歩1分！LAVA系列で安心。月4回8,800円とマシンピラティスでは破格。新規キャンペーンで最初の3ヶ月が月額1,980円でした。',
      },
      {
        author: 'K.M',
        rating: 4,
        date: '1週間前',
        text: '2店舗通い放題プラン13,800円もお得。平日は朝8時から夜22:30まで営業で時間の融通が効きます。',
      },
      {
        author: 'S.A',
        rating: 4,
        date: '2週間前',
        text: '女性専用で周りを気にせず集中できます。施設がきれい。プレミアムフリーならLAVAのホットヨガも通い放題に。',
      },
    ],
    price: '月4回 8,800円〜',
    trial: 'キャンペーン価格あり（3ヶ月 月額1,980円）',
    features: ['女性専用', 'LAVA系列', '江坂駅徒歩1分', 'コスパ抜群'],
    description: 'ホットヨガLAVA系列のマシンピラティス専門スタジオ。江坂駅4番出口から徒歩1分。月4回8,800円とリーズナブル。2店舗通い放題プラン13,800円やプレミアムフリーフルタイム16,800円でLAVA等系列店も利用可能。',
    access: '御堂筋線・北大阪急行「江坂駅」4番出口 徒歩1分',
    address: '大阪府吹田市江坂エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マシンピラティス月4回プラン',
      description: 'マシンピラティス月4回。1回あたり2,200円のコスパ。',
      price: '月4回 8,800円（税込）',
    },
    options: [
      '2店舗通い放題プラン（月額13,800円）',
      'プレミアムフリーフルタイム（月額16,800円・LAVA等全店利用可）',
      '運営管理費 毎月680円',
      '新規入会キャンペーン（3ヶ月 月額1,980円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', 'ヨガ&ピラティス両方', '健康維持'],
    },
    basicInfo: {
      hours: '平日 8:00〜22:30 / 土 7:00〜20:30',
      closed: '毎週日曜日',
      facilities: ['リフォーマーマシン', '更衣室', 'ロッカー', 'シャワー'],
    },
  },
  {
    name: 'ピラティスアクス 江坂店',
    image: '/images/pilates2.webp',
    rating: 4.6,
    reviewCount: 112,
    reviews: [
      {
        author: 'H.T',
        rating: 5,
        date: '1週間前',
        text: '江坂駅8番出口から徒歩1分。ピラティス会員なら月4回+バーチャル通い放題で9,680円とコスパ抜群。バーチャルレッスンは24時間利用可能で好きな時間に自宅でも練習できます。',
      },
      {
        author: 'M.K',
        rating: 4,
        date: '2週間前',
        text: 'グランドピラティス会員なら24時間ジムも使い放題で10,780円。ピラティスとジムを組み合わせたい方にぴったり。体験レッスンが1,000円で気軽に試せます。',
      },
      {
        author: 'R.S',
        rating: 4,
        date: '3週間前',
        text: '月2回のライト会員8,580円もあって、無理のないペースで始められます。スタッフが親切で雰囲気が良いスタジオです。',
      },
    ],
    price: '月4回 9,680円〜',
    trial: '体験レッスン 1,000円',
    features: ['バーチャルレッスン付き', '24時間ジム併設', '江坂駅徒歩1分', 'コスパ抜群'],
    description: 'マシンピラティスとバーチャルレッスン・24時間ジムを組み合わせた複合型スタジオ。江坂駅8番出口から徒歩1分。ピラティス会員なら月4回のレッスンに加えてバーチャル通い放題。グランドピラティス会員なら24時間ジムも利用可能。',
    access: '御堂筋線・北大阪急行「江坂駅」8番出口 徒歩1分',
    address: '大阪府吹田市江の木町1-39 セーレ江坂 4F',
    popularPlan: {
      name: 'ピラティス会員（月4回+バーチャル通い放題）',
      description: 'マシンピラティス月4回+バーチャルレッスン通い放題のお得プラン。',
      price: '月額 9,680円（税込）',
    },
    options: [
      'ピラティス会員ライト 月2回+バーチャル月4回（8,580円）',
      'グランドピラティス会員 月4回+バーチャル+24時間ジム（10,780円）',
      '体験レッスン（1,000円）',
      'バーチャルレッスン24時間利用可',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['ボディメイク', '運動不足解消', 'ダイエット', '体幹強化'],
    },
    basicInfo: {
      hours: '平日 9:30-13:30/18:00-21:00 / 土日祝 9:30-16:00',
      closed: '毎週金曜（ノースタッフデー）',
      facilities: ['リフォーマーマシン', 'バーチャルレッスン設備', '24時間ジム', '更衣室'],
    },
  },
  {
    name: 'La pilates 江坂店',
    image: '/images/pilates3.webp',
    rating: 4.8,
    reviewCount: 76,
    reviews: [
      {
        author: 'C.N',
        rating: 5,
        date: '5日前',
        text: '江坂駅から徒歩2分の女性専用プライベートスタジオ。整体×マシンピラティスの融合で、姿勢改善の効果を実感。女性インストラクターで安心です。',
      },
      {
        author: 'H.M',
        rating: 5,
        date: '1週間前',
        text: '産前産後OKなのが嬉しい。朝9時から夜21時まで年中無休。初心者歓迎の雰囲気で無理なく始められました。',
      },
      {
        author: 'R.O',
        rating: 4,
        date: '2週間前',
        text: '月1回12,000円からパーソナルが受けられます。整体と組み合わせたアプローチで体の不調が改善しました。',
      },
    ],
    price: '月1回 12,000円〜',
    trial: '無料体験あり',
    features: ['女性専用', '整体×ピラティス', '江坂駅徒歩2分', '産前産後OK'],
    description: '女性専用の整体×マシンピラティス融合スタジオ。江坂駅から徒歩2分。姿勢改善に特化し、女性インストラクターが丁寧に指導。産前産後にも対応。年中無休・朝9時から夜21時まで営業。',
    access: '御堂筋線「江坂駅」徒歩2分',
    address: '大阪府吹田市江の木町1-8 田中ビル 5階',
    popularPlan: {
      name: '月2回プラン',
      description: '整体×マシンピラティスのパーソナルレッスン月2回。',
      price: '月2回 22,000円（税込）',
    },
    options: [
      '月1回（12,000円）',
      '月3回（30,000円）',
      '月4回（40,000円）',
      '月6回（54,000円）',
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
    name: 'バスコ（BASCO）江坂店',
    image: '/images/pilates4.webp',
    rating: 4.5,
    reviewCount: 89,
    reviews: [
      {
        author: 'S.M',
        rating: 5,
        date: '1週間前',
        text: '女性専用のピラティス&24時間ボディメイクジム。加圧トレーニング×ピラティスという独自のスタイルが効果的。少人数制グループで丁寧に見てもらえます。',
      },
      {
        author: 'Y.K',
        rating: 4,
        date: '2週間前',
        text: '月5回目以降は1,100円/回で受け放題なのがお得！初回体験は1,100円で気軽に試せました。ジム設備も充実していてピラティス以外にも鍛えられます。',
      },
      {
        author: 'A.N',
        rating: 4,
        date: '3週間前',
        text: '加圧してからピラティスという独自メソッドで、短時間で効率的にトレーニングできます。女性専用なので安心して通えます。',
      },
    ],
    price: '5回目以降 1,100円/回〜',
    trial: '初回体験 1,100円',
    features: ['女性専用', '加圧×ピラティス', '24時間ジム併設', '少人数制'],
    description: '女性専用ピラティス&24時間ボディメイクジム。加圧トレーニングとピラティスを融合した独自メソッドが特徴。少人数制グループレッスンで丁寧に指導。月5回目以降は1,100円/回で受け放題。併設の24時間ジムも利用可能。',
    access: '江坂エリア',
    address: '大阪府吹田市江坂町1-23-18',
    popularPlan: {
      name: 'ピラティスプラン',
      description: '加圧×マシンピラティスの独自メソッド。月5回目以降は1,100円/回で受け放題。',
      price: '要確認（5回目以降 1,100円/回）',
    },
    options: [
      '初回体験（1,100円）',
      '月5回目以降 受け放題（1,100円/回）',
      '24時間ジム利用可',
      '加圧トレーニング',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '体幹強化', '筋力アップ'],
    },
    basicInfo: {
      hours: 'ピラティスレッスン時間は公式サイト参照 / ジムは24時間',
      closed: '不定休',
      facilities: ['リフォーマーマシン', '加圧トレーニング設備', '24時間ジム', '更衣室'],
    },
  },
  {
    name: 'Yon Pilates 江坂',
    image: '/images/pilates2.webp',
    rating: 4.7,
    reviewCount: 65,
    reviews: [
      {
        author: 'E.H',
        rating: 5,
        date: '1週間前',
        text: '江坂駅から徒歩5分。完全パーソナルでリフォーマー・ラダーバレル・スパインコレクター・チェアの4つのマシンを使用。マシンピラティス×美腸というユニークなコンセプト。',
      },
      {
        author: 'M.O',
        rating: 5,
        date: '2週間前',
        text: '月2回16,000円からパーソナルが受けられます。LINE登録で初回体験が3,500円に割引。丁寧な指導で体の変化を実感しています。',
      },
      {
        author: 'T.N',
        rating: 4,
        date: '3週間前',
        text: 'こじんまりとしたアットホームなスタジオ。インストラクターとの距離が近く、何でも相談しやすい雰囲気です。',
      },
    ],
    price: '月2回 16,000円〜',
    trial: '体験レッスン 3,500円（LINE登録割引）',
    features: ['完全パーソナル', '4種マシン完備', '美腸×ピラティス', '江坂駅徒歩5分'],
    description: 'マシンピラティス×美腸をコンセプトにした完全パーソナルスタジオ。江坂駅から徒歩5分。リフォーマー・ラダーバレル・スパインコレクター・チェアの4種類のマシンを使用したオーダーメイドレッスン。',
    access: '御堂筋線「江坂駅」徒歩5分',
    address: '大阪府吹田市江の木町5-3 レーベンハウス江坂 304',
    popularPlan: {
      name: '月4回コース',
      description: '完全パーソナルのマシンピラティス月4回。4種のマシンを使用。',
      price: '月4回 30,000円（税込）',
    },
    options: [
      '月2回コース（16,000円）',
      '初回体験（4,000円→LINE登録で3,500円）',
      'リフォーマー・ラダーバレル・スパインコレクター・チェア完備',
      '美腸プログラム',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['美腸', 'ボディメイク', '姿勢改善', '体質改善'],
    },
    basicInfo: {
      hours: '月〜日 9:00〜18:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'ラダーバレル', 'スパインコレクター', 'チェア', '完全プライベート空間'],
    },
  },
  {
    name: 'ピラティスミラー 江坂',
    image: '/images/pilates3.webp',
    rating: 4.5,
    reviewCount: 95,
    reviews: [
      {
        author: 'D.S',
        rating: 4,
        date: '1週間前',
        text: 'コナミスポーツクラブ運営で安心感があります。月会費11,000円で月6回まで通えてコスパ良好。鏡を使ったフォーム確認が特徴的。',
      },
      {
        author: 'R.H',
        rating: 4,
        date: '2週間前',
        text: 'プライベートレッスンも30分4,400円と手頃。体験レッスンが2,200円で気軽に試せました。初心者でも安心のマシンピラティス。',
      },
      {
        author: 'Y.O',
        rating: 5,
        date: '3週間前',
        text: '大手コナミの施設なので清潔感があり快適。江坂エリアで気軽にマシンピラティスを始めたい方におすすめです。',
      },
    ],
    price: '月会費 11,000円（月6回）',
    trial: '体験レッスン 2,200円',
    features: ['コナミ運営', 'マシン専門', '月6回制', 'ミラー設備'],
    description: 'コナミスポーツクラブが運営するマシンピラティス専門スタジオ。月会費11,000円で月6回まで通えるコスパの良いプラン。プライベートレッスンも30分4,400円から。鏡を使ったフォーム確認が特徴。大手運営の安心感と清潔な施設。',
    access: '江坂エリア',
    address: '大阪府吹田市江坂エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: '月会費プラン（月6回）',
      description: 'マシンピラティス月6回まで。コナミ運営の安心感。',
      price: '月会費 11,000円（税込）',
    },
    options: [
      '入会金 11,000円',
      'プライベートレッスン30分（4,400円）',
      'プライベートレッスン50分（6,600円）',
      '体験レッスン（2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', 'ボディメイク', '健康維持', '運動不足解消'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマーマシン', 'ミラー設備', '更衣室', 'ロッカー'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！江坂エリアのスタジオのほとんどが初心者歓迎。CLUB PILATESはレベル分けがあり、Rintosullは月4回8,800円から気軽に始められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットは自重エクササイズ、マシンは専用マシン（リフォーマー等）を使用。マシンは負荷調整しやすく初心者におすすめ。江坂はマシン専門スタジオが充実しています。',
  },
  {
    question: '江坂のピラティススタジオの料金相場は？',
    answer: 'グループ月4回で8,800円〜14,190円程度。Rintosullが月4回8,800円で最安級。パーソナルは月2回16,000円〜が相場です。',
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
    answer: '動きやすい服装と飲み物があればOK。CLUB PILATESは無料体験、ピラティスアクスとバスコは1,000〜1,100円で体験可能。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹強化に特化。ヨガは柔軟性とリラックス重視。両方やりたい方はRintosullのプレミアムフリープランがおすすめ。',
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
    answer: 'パーソナルはLa pilatesやYon Pilatesで効果的な指導を。グループはRintosullなら月4回8,800円から。まずは体験で両方試してみましょう。',
  },
]

export default function EsakaPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月08日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス江坂おすすめ8選！<br className="hidden md:block" />
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
              <span className="text-warm-600">江坂</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="江坂" />

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
              「江坂で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、江坂エリアでおすすめのピラティススタジオ8選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>江坂でピラティススタジオを探している</span>
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
                  <span>御堂筋線沿線で通いやすいスタジオがいい</span>
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

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              江坂のおすすめピラティススタジオ8選
            </h2>
            <div className="space-y-8">
              {studios.map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Search by Preference */}
        <section className="py-16 bg-white" id="kodawari">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              こだわりから探す
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額1万円以下で通えるリーズナブルなスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Rintosull（月4回 8,800円〜）</li>
                  <li className="text-warm-700">• zen place pilates（月4回 9,625円〜）</li>
                  <li className="text-warm-700">• ピラティスアクス（月4回 9,680円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  完全マンツーマンで効果的に。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• La pilates（整体×ピラティス）</li>
                  <li className="text-warm-700">• Yon Pilates（美腸×ピラティス）</li>
                  <li className="text-warm-700">• zen place プライベート</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  江坂駅から徒歩5分以内。御堂筋線一本で便利。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（徒歩1分）</li>
                  <li className="text-warm-700">• Rintosull（徒歩1分）</li>
                  <li className="text-warm-700">• ピラティスアクス（徒歩1分）</li>
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
                  グループレッスン中心。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Rintosull（8,800円〜）</li>
                  <li>• zen place（9,625円〜）</li>
                  <li>• ピラティスアクス（9,680円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 11,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4〜6回</p>
                <p className="text-sm text-warm-600 mb-4">
                  大手スタジオ・ジム併設型。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスミラー（11,000円/月6回）</li>
                  <li>• CLUB PILATES（14,190円〜）</li>
                  <li>• zen place リフォーマー（15,400円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 16,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月2〜4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全パーソナル。効果重視の方に。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Yon Pilates（月2回 16,000円）</li>
                  <li>• La pilates（月2回 22,000円）</li>
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
                  ダイエット、姿勢改善、体幹強化など、目的によって最適なスタジオは変わります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  江坂エリアの料金相場はグループ月4回で8,800円〜14,190円。入会金やレンタル料も確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  CLUB PILATESは無料体験、ピラティスアクスは1,000円、バスコは1,100円で体験可能。気軽に試してみましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  江坂は御堂筋線で梅田・なんばから1本。zen place・Rintosull・ピラティスアクスは駅徒歩1分と抜群のアクセスです。
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
              今回は江坂のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では江坂に数多くあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜1,100円。<br />
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

      <RelatedAreas currentSlug="esaka" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
