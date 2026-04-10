import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス青山一丁目おすすめ8選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '青山一丁目・表参道・外苑前エリアのおすすめピラティススタジオ8選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,青山一丁目,表参道,外苑前,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'BDC PILATES 表参道スタジオ',
    image: '/images/pilates2.webp',
    rating: 4.8,
    reviewCount: 234,
    reviews: [
      {
        author: 'M.K',
        rating: 5,
        date: '1週間前',
        text: '表参道駅から徒歩2分で通いやすい。日本初のマシンピラティス専門スタジオとしての実績があり、インストラクターの質が高い。体験レッスンが0円なので気軽に試せました。',
      },
      {
        author: 'R.T',
        rating: 5,
        date: '2週間前',
        text: 'グループレッスンもプライベートレッスンも充実。4メンバープランなら月11,220円からと表参道エリアにしてはリーズナブル。認定指導資格を持つ講師ばかりで安心。',
      },
      {
        author: 'A.S',
        rating: 4,
        date: '3週間前',
        text: 'プライベートレッスンでは体の状態に合わせて完全カスタマイズしてくれます。ダンサーやアスリートも通う本格的なスタジオで、身体の使い方を根本から学べます。',
      },
    ],
    price: '月4回 11,220円〜',
    trial: '体験レッスン 0円',
    features: ['日本初マシン専門', '表参道駅徒歩2分', '認定講師', 'グループ&プライベート'],
    description: '日本初のマシンピラティス専門スタジオ。表参道駅から徒歩2分の好立地。認定指導資格を保有した講師によるグループレッスンとプライベートレッスンの両方を提供。プライベートレッスンでは一人ひとりの身体の状態と目的に沿ってメニューを完全カスタマイズ。ダンサーやアスリートも通う質の高いレッスンが特徴。',
    access: '表参道駅 徒歩2分 / 渋谷駅 徒歩9分',
    address: '東京都港区北青山3-12-7 秋月ビル 3F',
    popularPlan: {
      name: '4メンバー（月4回）',
      description: '月4回のグループレッスン。認定講師による本格マシンピラティス。',
      price: '月4回 11,220〜13,420円（税込）',
    },
    options: [
      '8メンバー（月8回 15,070〜16,170円）',
      'デイメンバー（12,320〜14,520円）',
      'プレミアムメンバー（17,820〜18,920円）',
      '追加受講（1回 2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の80%）',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', '姿勢改善', 'パフォーマンス向上', '体幹強化'],
    },
    basicInfo: {
      hours: '平日 10:00〜20:00 / 土日 10:00〜17:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'ピラティスK 表参道店',
    image: '/images/pilates3.webp',
    rating: 4.7,
    reviewCount: 178,
    reviews: [
      {
        author: 'S.N',
        rating: 5,
        date: '5日前',
        text: '表参道駅から徒歩2分！体験レッスンが0円で始めやすい。音楽に合わせたマシンピラティスが楽しくて続けられます。女性専用なので安心。',
      },
      {
        author: 'Y.H',
        rating: 4,
        date: '1週間前',
        text: 'お腹・お尻・脚など部位特化のプログラムが充実。4メンバープランなら月11,220円からと手頃。スタイリッシュな店内でモチベーションが上がります。',
      },
      {
        author: 'K.T',
        rating: 5,
        date: '2週間前',
        text: '2025年5月にオープンした新しいスタジオで設備がきれい。インストラクターが明るくて丁寧に教えてくれます。仕事帰りに通えて便利。',
      },
    ],
    price: '月4回 11,220円〜',
    trial: '体験レッスン 0円',
    features: ['女性専用', 'マシン専門', '表参道駅徒歩2分', '音楽レッスン'],
    description: '女性専用のマシンピラティス専門スタジオ。表参道駅から徒歩2分。2025年5月オープン。音楽に合わせたグループレッスンが特徴で、お腹・お尻・二の腕・脚・背中の部位に特化したボディメイクプログラムが充実。カジュアルかつスタイリッシュな店内で楽しくピラティスを続けられます。',
    access: '表参道駅 徒歩2分 / 渋谷駅 徒歩9分',
    address: '東京都港区北青山3-12-7 秋月ビル 3F 301',
    popularPlan: {
      name: 'マンスリー4メンバー（月4回）',
      description: '平日・土日祝いつでも受講可能。お好きな時間で受講できる人気プラン。',
      price: '月4回 11,220〜13,420円（税込）',
    },
    options: [
      'マンスリー8メンバー（月8回 15,070〜16,170円）',
      'デイメンバー（12,320〜14,520円）',
      'プレミアムメンバー（毎日2レッスン 17,820〜18,920円）',
      '追加受講（1回 2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の85%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', 'ストレス解消'],
    },
    basicInfo: {
      hours: '火・金 10:00-15:00/17:30-22:00、水 10:00-14:00/17:30-22:00、木 17:30-22:00、土・祝 10:00-18:30、日 10:00-17:30',
      closed: '月曜日',
      facilities: ['リフォーマーマシン', 'ロッカー', 'パウダールーム', 'ウォーターサーバー'],
    },
  },
  {
    name: 'A・CORE（アコア）',
    image: '/images/pilates4.webp',
    rating: 4.9,
    reviewCount: 156,
    reviews: [
      {
        author: 'C.M',
        rating: 5,
        date: '1週間前',
        text: '2005年創業の老舗マシンピラティス専門スタジオ。完全プライベートレッスンで、一人ひとりにカスタマイズしたプログラムを提供してくれます。インストラクターの経験と知識が豊富。',
      },
      {
        author: 'H.A',
        rating: 5,
        date: '2週間前',
        text: '北青山の落ち着いた場所にあり、レッスンに集中できる環境。火〜金は朝9時から夜21時まで営業で通いやすい。本格的なマシンピラティスを学びたい方におすすめ。',
      },
      {
        author: 'T.S',
        rating: 5,
        date: '1ヶ月前',
        text: '「ロイヤルピラティススタジオ」の名にふさわしい質の高さ。長年の実績があり信頼できます。体の変化を確実に感じられるスタジオです。',
      },
    ],
    price: '要確認（完全パーソナル）',
    trial: '体験レッスンあり',
    features: ['2005年創業', '完全パーソナル', '北青山', '本格マシン完備'],
    description: '2005年9月に青山・表参道にオープンした老舗マシンピラティス専門スタジオ。完全パーソナル・カスタムメイドのプライベートレッスンを提供。「ロイヤルピラティススタジオ」として、長年の実績と経験に基づく質の高い指導が魅力。一人ひとりの体の状態を見極め、最適なプログラムを提案します。',
    access: '表参道駅・外苑前駅から徒歩圏内',
    address: '東京都港区北青山3-5-4 AOYAMA TAKANO BLDG. 6F',
    popularPlan: {
      name: '完全プライベートレッスン',
      description: 'カスタムメイドのマンツーマンレッスン。20年の実績に基づく本格指導。',
      price: '要確認（公式サイト参照）',
    },
    options: [
      '完全パーソナルレッスン',
      '体験レッスンあり',
      'リフォーマー・キャデラック等完備',
      '長期継続プランあり',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心（全体の70%）',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', 'パフォーマンス向上', '体幹強化', 'リハビリ'],
    },
    basicInfo: {
      hours: '月 12:00〜21:00 / 火〜金 9:00〜21:00 / 土 9:00〜19:00 / 日祝 9:00〜17:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'バレル', '完全プライベート空間'],
    },
  },
  {
    name: 'Sky Pilates Tokyo',
    image: '/images/pilates2.webp',
    rating: 4.8,
    reviewCount: 112,
    reviews: [
      {
        author: 'E.K',
        rating: 5,
        date: '5日前',
        text: '元プロバレエダンサーが指導するSTOTT PILATES公認のスタジオ。南青山の本店は表参道駅・外苑前駅から徒歩7分。質の高いセッションで体の変化を実感できます。',
      },
      {
        author: 'N.M',
        rating: 4,
        date: '1週間前',
        text: 'グループセッションとプライベートセッションの両方に対応。朝8時から夜21時まで営業で、仕事前後に通えます。初心者からインストラクター志望者まで幅広く対応。',
      },
      {
        author: 'Y.I',
        rating: 5,
        date: '2週間前',
        text: '表参道にも駅前店がオープンしてアクセスがさらに便利に。ピラティスの質にこだわりたい方におすすめ。自分の体と向き合える贅沢な時間です。',
      },
    ],
    price: '1回 5,500円〜',
    trial: '体験レッスンあり',
    features: ['STOTT PILATES公認', '元プロバレエダンサー指導', '南青山', '2店舗展開'],
    description: 'STOTT PILATES公認のピラティス専門スタジオ。南青山の本店（表参道・外苑前駅徒歩7分）と表参道駅前店の2店舗を展開。元プロバレエダンサーが指導する質の高いセッションが魅力。グループからプライベートまで対応し、初心者からインストラクター志望者まで幅広く受け入れ。',
    access: '表参道駅・外苑前駅 徒歩7分（本店）/ 表参道駅 徒歩5分（表参道店）',
    address: '東京都港区南青山3-3-16 IQビルディング GF',
    popularPlan: {
      name: 'グループセッション',
      description: 'STOTT PILATES公認の質の高いグループレッスン。',
      price: '1回 5,500円〜（税込）',
    },
    options: [
      'グループセッション（5,500円〜）',
      'プライベートセッション（7,000〜8,500円）',
      'インストラクター養成コース',
      '体験レッスンあり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心（全体の75%）',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ボディメイク', 'パフォーマンス向上', '姿勢改善', 'インストラクター資格'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', 'バレル', '更衣室'],
    },
  },
  {
    name: 'Pilates KASANE 表参道店',
    image: '/images/pilates3.webp',
    rating: 4.7,
    reviewCount: 134,
    reviews: [
      {
        author: 'S.Y',
        rating: 5,
        date: '1週間前',
        text: '体験レッスンが980円とお手頃！4名以下の少人数制セミパーソナルレッスンで丁寧に見てもらえます。レンタルウェア完備で手ぶらで通えるのが嬉しい。',
      },
      {
        author: 'K.N',
        rating: 4,
        date: '2週間前',
        text: '有資格インストラクターが体の状態をカルテに記録してくれるので、毎回のレッスンが自分に最適化されています。年中無休で朝8時から夜21時まで営業。',
      },
      {
        author: 'M.T',
        rating: 5,
        date: '3週間前',
        text: '月4回15,400円から。1回あたり3,000円台とリーズナブルで続けやすいです。明治神宮前駅・原宿駅から徒歩5分でアクセスも良好。',
      },
    ],
    price: '月4回 15,400円〜',
    trial: '体験レッスン 980円',
    features: ['少人数制', 'カルテ管理', '手ぶらOK', '年中無休'],
    description: '最大4名の少人数制セミパーソナルレッスンが特徴のマシンピラティススタジオ。有資格インストラクターが一人ひとりの身体をカルテに記録しながらカスタマイズされたレッスンを提供。年中無休・朝8時から夜21時まで営業で通いやすい。レンタルウェア完備で手ぶらで通えます。',
    access: '明治神宮前駅 徒歩5分 / 原宿駅 徒歩5分 / 表参道駅 徒歩15分',
    address: '東京都渋谷区神宮前6丁目',
    popularPlan: {
      name: '月4回プラン',
      description: '少人数制セミパーソナルレッスン月4回。カルテ管理で最適化されたレッスン。',
      price: '月4回 15,400円（税込）',
    },
    options: [
      '1回あたり 3,025円〜',
      'レンタルウェア完備（手ぶらOK）',
      '体験レッスン 980円',
      '最大12名のグループレッスンもあり',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の80%）',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', '体幹強化'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: '年中無休',
      facilities: ['リフォーマーマシン', 'レンタルウェア', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'Pilates Aoyama',
    image: '/images/pilates4.webp',
    rating: 4.7,
    reviewCount: 98,
    reviews: [
      {
        author: 'T.K',
        rating: 5,
        date: '1週間前',
        text: '2005年設立の歴史あるピラティス専門スタジオ。表参道駅から徒歩4分でアクセス良好。長年の指導実績に基づく質の高いレッスンが受けられます。',
      },
      {
        author: 'A.H',
        rating: 4,
        date: '2週間前',
        text: 'マットピラティスとマシンピラティスの両方に対応。経験豊富なインストラクターが体の状態をしっかり見てくれるので安心です。青山の落ち着いた雰囲気が気に入っています。',
      },
      {
        author: 'R.Y',
        rating: 5,
        date: '3週間前',
        text: '外苑前駅からも徒歩圏内。長年通っているリピーターが多く、信頼できるスタジオです。ピラティスの本質を大切にした指導スタイルが好きです。',
      },
    ],
    price: '要確認（公式サイト参照）',
    trial: '体験レッスンあり',
    features: ['2005年設立', '表参道駅徒歩4分', 'マット&マシン', '老舗スタジオ'],
    description: '2005年設立のピラティス専門スタジオ。表参道駅から徒歩4分、外苑前駅からも徒歩圏内。マットピラティスとマシンピラティスの両方に対応し、経験豊富なインストラクターが丁寧に指導。青山の落ち着いた雰囲気の中で、ピラティスの本質を大切にしたレッスンを提供しています。',
    access: '千代田線「表参道駅」徒歩4分 / 銀座線「外苑前駅」徒歩12分',
    address: '東京都港区南青山エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'プライベートレッスン',
      description: 'マンツーマンの丁寧な指導。マット・マシン両方に対応。',
      price: '要確認（公式サイト参照）',
    },
    options: [
      'プライベートレッスン',
      'グループレッスン',
      'マットピラティス',
      'マシンピラティス',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心（全体の70%）',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '健康維持', '体幹強化', 'リラックス'],
    },
    basicInfo: {
      hours: '公式サイトでご確認ください',
      closed: '不定休',
      facilities: ['リフォーマー', 'マットスタジオ', '更衣室'],
    },
  },
  {
    name: 'zen place pilates 六本木',
    image: '/images/pilates2.webp',
    rating: 4.7,
    reviewCount: 189,
    reviews: [
      {
        author: 'D.M',
        rating: 5,
        date: '1週間前',
        text: '六本木エリアのzen placeスタジオ。青山一丁目からも近く通いやすい。全国150以上のスタジオが相互利用可能なのが魅力。マットもリフォーマーも選べて充実。',
      },
      {
        author: 'N.S',
        rating: 4,
        date: '2週間前',
        text: 'マットグループ月4回9,625円からとリーズナブル。体験当日入会で入会金無料。男性もOKなので気兼ねなく通えます。エデュケーターの質が高い。',
      },
      {
        author: 'K.Y',
        rating: 5,
        date: '3週間前',
        text: '25歳以下割引や70歳以上割引もあり、幅広い年齢層が通っています。プライベートレッスンでしっかり学びたい方にもおすすめ。',
      },
    ],
    price: '月4回 9,625円〜',
    trial: '体験レッスンあり（当日入会で入会金無料）',
    features: ['マシン完備', '男性OK', '全国相互利用可', '各種割引あり'],
    description: '全国150以上のスタジオを展開する国内最大級のピラティス専門スタジオ。青山一丁目エリアからもアクセスしやすい六本木スタジオ。マットグループ・リフォーマーグループ・プライベートレッスンと豊富なレッスン形式。Balanced Body製マシンを完備し、世界レベルの資格を持つエデュケーターが丁寧に指導。男性も受講可能。',
    access: '六本木駅から徒歩圏内 / 青山一丁目エリアからもアクセス可',
    address: '東京都港区六本木エリア（詳細は公式サイトでご確認ください）',
    popularPlan: {
      name: 'マットグループ月4回',
      description: 'マットピラティスのグループレッスン。全国のzen placeスタジオで相互利用可能。',
      price: '月4回 9,625円（税込）',
    },
    options: [
      'マットグループフリー（月額14,960円）',
      'リフォーマーグループ月4回（月額15,400円）',
      'リフォーマーグループ月8回（月額25,300円）',
      'プライベート月4回（月額33,880円〜）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心（全体の80%）',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '平日 8:00〜21:00 / 土日祝 8:00〜17:00（目安）',
      closed: '不定休',
      facilities: ['リフォーマー', 'トラピーズテーブル', 'コンボチェア', '男女別更衣室', 'ロッカー'],
    },
  },
  {
    name: 'a.pilates（エードットピラティス）',
    image: '/images/pilates3.webp',
    rating: 4.9,
    reviewCount: 67,
    reviews: [
      {
        author: 'L.S',
        rating: 5,
        date: '2週間前',
        text: '表参道駅から徒歩2分の完全プライベートスタジオ。女優やモデルも通う隠れ家的サロン。タワーリフォーマー、ラダーバレル、スパインコレクターなど本格マシンが揃っています。',
      },
      {
        author: 'M.O',
        rating: 5,
        date: '1ヶ月前',
        text: 'オーナーの小柳歩美先生の指導が素晴らしい。体の細かい部分まで見てくれるので、効果を確実に実感できます。完全予約制の贅沢な空間。',
      },
      {
        author: 'Y.N',
        rating: 5,
        date: '2ヶ月前',
        text: '女性専用で安心。美意識の高い方におすすめの上質なスタジオです。体の変化を確実に感じられる本物のピラティスが受けられます。',
      },
    ],
    price: '体験 22,000円',
    trial: '体験レッスン 22,000円',
    features: ['完全プライベート', '女性専用', '表参道駅徒歩2分', '本格マシン完備'],
    description: '表参道駅から徒歩2分の完全プライベートピラティススタジオ。女性専用。女優・モデル・ダンサーなど美意識の高い女性に支持されるハイクラスなスタジオ。オーナーの小柳歩美先生がタワーリフォーマー、ラダーバレル、スパインコレクターなど本格マシンを使用したマンツーマン指導を提供。完全予約制・会員制。',
    access: '表参道駅 徒歩2分',
    address: '東京都港区北青山エリア（完全予約制）',
    popularPlan: {
      name: '完全プライベートレッスン',
      description: 'マンツーマンの本格マシンピラティス。女優・モデルも通う上質なレッスン。',
      price: '要確認（体験22,000円）',
    },
    options: [
      '体験レッスン（22,000円）',
      '完全予約制・会員制',
      'タワーリフォーマー・ラダーバレル・スパインコレクター完備',
      '女性専用',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['美容', 'ボディメイク', 'パフォーマンス向上', '姿勢改善'],
    },
    basicInfo: {
      hours: '完全予約制',
      closed: '不定休',
      facilities: ['タワーリフォーマー', 'ラダーバレル', 'スパインコレクター', '完全プライベート空間'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！青山一丁目・表参道エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。BDC PILATESやピラティスKは体験レッスンが0円なので気軽に始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。このエリアではマシン専門スタジオが多いです。',
  },
  {
    question: '青山一丁目エリアのピラティススタジオの料金相場は？',
    answer: '青山一丁目・表参道エリアの料金相場は、グループレッスン月4回で9,600円〜15,400円程度。BDC PILATESやピラティスKは月4回11,220円からと比較的リーズナブル。パーソナルは1回5,500円〜が相場です。',
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
    answer: '基本的に動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。BDC PILATESとピラティスKは無料体験、Pilates KASANEは980円で体験できます。レンタルウェアがあるスタジオもあるので、各スタジオの案内を確認してくださいね。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズ。ヨガは柔軟性と精神的なリラックスを重視します。ピラティスは筋力強化、ヨガは心身のバランスを整えることが主な目的。どちらも素晴らしいエクササイズなので、目的に合わせて選びましょう。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。A・COREやSky Pilatesなど、老舗スタジオでは体の不調改善に特化したアプローチも可能です。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスで効果が表れだすのは「2ヶ月を過ぎた頃」から。これは人間の細胞が生まれ変わるサイクルがそのくらいだからです。すぐに変化が表れなくても心配せず、最低でも2ヶ月は継続するのがおすすめです。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれ良さがあります。パーソナルはA・COREやa.pilatesで一人ひとりに合わせた指導を受けられます。グループはBDC PILATESやピラティスKなら月4回11,220円から。まずは体験で両方試してみるのがいいですよ。',
  },
]

export default function AoyamaItchomePage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月08日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス青山一丁目おすすめ8選！<br className="hidden md:block" />
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
              <span className="text-warm-600">青山一丁目</span>
            </nav>
          </div>
        </section>

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
              「青山一丁目・表参道で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、青山一丁目・表参道・外苑前エリアでおすすめのピラティススタジオ8選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>青山一丁目・表参道エリアでピラティススタジオを探している</span>
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
                  <span>おしゃれな街で通いやすいスタジオがいい</span>
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
              青山一丁目のおすすめピラティススタジオ8選
            </h2>
            <div className="space-y-8">
              {studios.map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Search by Preference */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              こだわりから探す
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額1万円前後で通えるスタジオ。体験レッスン無料のスタジオも。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（月4回 9,625円〜）</li>
                  <li className="text-warm-700">• BDC PILATES（月4回 11,220円〜）</li>
                  <li className="text-warm-700">• ピラティスK（月4回 11,220円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">本格パーソナル</h3>
                <p className="text-warm-600 text-sm mb-4">
                  完全マンツーマンで本格的なマシンピラティスを学びたい方に。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• A・CORE（2005年創業の老舗）</li>
                  <li className="text-warm-700">• a.pilates（女優・モデル御用達）</li>
                  <li className="text-warm-700">• Sky Pilates（STOTT PILATES公認）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  表参道駅・外苑前駅から徒歩5分以内。仕事帰りにも通いやすい。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• BDC PILATES（表参道駅 徒歩2分）</li>
                  <li className="text-warm-700">• ピラティスK（表参道駅 徒歩2分）</li>
                  <li className="text-warm-700">• a.pilates（表参道駅 徒歩2分）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Frequency Guide */}
        <section className="py-16 bg-warm-50">
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
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              予算別の料金相場
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜12,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。体験無料のスタジオも。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates（9,625円〜）</li>
                  <li>• BDC PILATES（11,220円〜）</li>
                  <li>• ピラティスK（11,220円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 15,000〜18,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4〜8回</p>
                <p className="text-sm text-warm-600 mb-4">
                  少人数制やマシン充実のスタジオ。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Pilates KASANE（15,400円〜）</li>
                  <li>• BDC PILATES 8回（15,070円〜）</li>
                  <li>• zen place リフォーマー（15,400円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 30,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全プライベートレッスン。上質な空間で本格指導。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• A・CORE（完全パーソナル）</li>
                  <li>• a.pilates（女優・モデル御用達）</li>
                  <li>• zen place プライベート（33,880円〜）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50">
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
                  まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、体幹強化、美容など、目的によって最適なスタジオやプログラムは変わります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  青山一丁目・表参道エリアの料金相場はグループレッスン月4回で9,600円〜15,400円程度。パーソナルは1回5,500円〜。無理なく継続できる予算を決めましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。BDC PILATESとピラティスKは無料体験、Pilates KASANEは980円で体験可能。スタジオの雰囲気は実際に行ってみないとわかりませんよ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。このエリアは東京メトロ銀座線・半蔵門線・千代田線・大江戸線が利用可能。BDC PILATESやピラティスKは表参道駅から徒歩2分と特に便利です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
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
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">
              まとめ
            </h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は青山一丁目・表参道のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では青山一丁目・表参道に数多くあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜980円。<br />
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

      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
