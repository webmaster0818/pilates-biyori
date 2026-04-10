import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス横浜おすすめ8選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '横浜エリアのおすすめピラティススタジオ8選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,横浜,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 横浜スタジオ',
    image: '/images/pilates2.webp',
    rating: 4.8,
    reviewCount: 256,
    reviews: [
      {
        author: 'R.K',
        rating: 5,
        date: '2週間前',
        text: '横浜駅から徒歩4分で通いやすいです。全国150以上のスタジオが相互利用できるので出張先でも通えます。インストラクターの質が高く、体の変化を実感できました。',
      },
      {
        author: 'M.T',
        rating: 5,
        date: '1ヶ月前',
        text: 'マットもリフォーマーも選べるのが嬉しい。少人数制なので丁寧に見てもらえます。男性もOKなので夫婦で通っています。',
      },
      {
        author: 'Y.S',
        rating: 4,
        date: '3週間前',
        text: 'Balanced Body製のマシンが充実しています。プライベートレッスンでしっかり学べるのが良い。体験当日入会で入会金無料でした。',
      },
    ],
    price: '月4回 9,625円〜',
    trial: '体験レッスンあり（当日入会で入会金無料）',
    features: ['マシン完備', '男性OK', '横浜駅徒歩4分', '全国相互利用可'],
    description: '全国150以上のスタジオを展開する大手ピラティススタジオ。横浜駅西口から徒歩4分の好立地。マットグループ・リフォーマーグループ・プライベートレッスンと豊富なレッスン形式から選べます。Balanced Body製マシンを完備し、経験豊富なインストラクターが一人ひとりに合わせた丁寧な指導を提供。男性も受講可能です。',
    access: '横浜市営地下鉄「横浜駅」9番出口 徒歩2分 / JR横浜駅西口 徒歩4分',
    address: '神奈川県横浜市西区北幸2-1-22 永岡ビル 2階',
    popularPlan: {
      name: 'マットグループ月4回',
      description: 'マットピラティスのグループレッスン。初心者から経験者まで対応。全国のzen placeスタジオで相互利用可能。',
      price: '月4回 9,625円（税込）',
    },
    options: [
      'マットグループフリー（月額14,960円）',
      'リフォーマーグループ月4回（月額15,400円）',
      'リフォーマーグループ月8回（月額25,300円）',
      'プライベート月4回（月額38,280円）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心（全体の75%）',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'リラックス', '健康維持'],
    },
    basicInfo: {
      hours: '平日 8:00〜21:00 / 土日祝 8:00〜17:00',
      closed: '不定休',
      facilities: ['リフォーマー', 'トラピーズテーブル', 'コンボチェア', '男女別更衣室', 'ロッカー'],
    },
  },
  {
    name: 'ピラティスK 横浜店',
    image: '/images/pilates3.webp',
    rating: 4.7,
    reviewCount: 192,
    reviews: [
      {
        author: 'A.W',
        rating: 5,
        date: '5日前',
        text: '横浜駅西口から徒歩2分、ジョイナス地下街直結で雨の日も便利！音楽に合わせたレッスンが楽しくて続けられます。体験レッスンが0円で始めやすかったです。',
      },
      {
        author: 'Y.I',
        rating: 4,
        date: '1週間前',
        text: '女性専用なので周りを気にせず集中できます。お腹・お尻・脚など部位特化のプログラムが17種類もあって、目的に合わせて選べるのが良い。',
      },
      {
        author: 'M.N',
        rating: 5,
        date: '2週間前',
        text: 'スタイリッシュな店内でモチベーションが上がります。インストラクターさんが明るくて丁寧に教えてくれます。2ヶ月で体が引き締まってきました。',
      },
    ],
    price: '月4回 13,420円〜',
    trial: '体験レッスン 0円',
    features: ['女性専用', 'マシン専門', '横浜駅徒歩2分', '音楽レッスン'],
    description: '女性専用のマシンピラティス専門スタジオ。横浜駅西口から徒歩2分、ジョイナス地下街直結で雨の日も便利なアクセス。音楽に合わせたグループレッスンが特徴で、お腹・お尻・二の腕・脚・背中の部位に特化したボディメイクプログラムが17種類と充実。カジュアルかつスタイリッシュな店内で楽しくピラティスを続けられます。',
    access: '横浜駅西口 徒歩2分（ジョイナス地下街直結）',
    address: '神奈川県横浜市西区北幸1丁目1-8 エキニア横浜 5F',
    popularPlan: {
      name: 'マンスリー4メンバー（月4回）',
      description: '平日・土日祝いつでも受講可能。お好きな時間で受講できる人気プラン。',
      price: '月4回 13,420円（税込）+ 施設維持費825円',
    },
    options: [
      'マンスリー8メンバー（月8回 16,170円）',
      'マンスリーデイメンバー（平日10-15時 毎日1レッスン 14,520円）',
      'マンスリープレミアムメンバー（毎日2レッスン 18,920円）',
      '追加受講（1回 2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の80%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', 'ストレス解消'],
    },
    basicInfo: {
      hours: '月・水・金 10:00-15:00/17:30-22:00、火・木 9:30-16:00/17:30-22:00、土 9:30-20:00、日 10:00-19:00',
      closed: '毎月第1月曜日',
      facilities: ['リフォーマーマシン', 'ロッカー', 'パウダールーム', 'ウォーターサーバー', 'レンタルウェア'],
    },
  },
  {
    name: 'the SILK 横浜店',
    image: '/images/pilates4.webp',
    rating: 4.8,
    reviewCount: 178,
    reviews: [
      {
        author: 'S.K',
        rating: 5,
        date: '1週間前',
        text: '横浜駅西口から徒歩3分で通いやすい！自然光が入るおしゃれなスタジオで気分が上がります。体験レッスンが無料で手ぶらOKなので気軽に始められました。',
      },
      {
        author: 'N.M',
        rating: 5,
        date: '2週間前',
        text: '女性専用で安心。音楽に合わせた50分のレッスンがあっという間です。ヘアスタイリングツールも完備されていて、レッスン後のお出かけにも便利。',
      },
      {
        author: 'K.T',
        rating: 4,
        date: '3週間前',
        text: 'プロフェッショナルグレードのリフォーマーで本格的なレッスンが受けられます。Light3プランなら月3回13,280円で始められるのも嬉しい。',
      },
    ],
    price: '月3回 13,280円〜',
    trial: '体験レッスン 0円（50分・手ぶらOK）',
    features: ['女性専用', 'マシン専門', '横浜駅徒歩3分', 'おしゃれ空間'],
    description: '女性専用マシンピラティス専門スタジオ。JR横浜駅西口から徒歩3分、横浜市営ブルーライン9番出口すぐの好立地。自然光が入る開放的でおしゃれなスタジオデザインが特徴。プロフェッショナルグレードのリフォーマーマシンを使用し、音楽に合わせた50分のグループレッスンで楽しくボディメイク。レンタル・ヘアスタイリングツール完備で手ぶらで通えます。',
    access: 'JR横浜駅西口 徒歩3分 / 横浜市営ブルーライン9番出口すぐ',
    address: '神奈川県横浜市西区北幸1丁目7-6 日土地横浜西口第一ビル 2階',
    popularPlan: {
      name: 'Standard4（月4回）',
      description: '月4回の標準プラン。プロフェッショナルグレードのリフォーマーで本格レッスン。',
      price: '月4回 15,280円（税込）+ 施設利用料700円',
    },
    options: [
      'Light3（月3回 13,280円）',
      'Full Day（平日デイタイム無制限 19,280円）',
      'Full（無制限 22,280円）',
      'レンタル（ウェア・タオル・ソックスあり）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の80%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', '姿勢改善', 'ダイエット', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      closed: '年末年始（12/29〜1/3）',
      facilities: ['リフォーマーマシン', '更衣室', 'ウォーターサービス', 'レンタルウェア・タオル・ソックス', 'ヘアスタイリングツール'],
    },
  },
  {
    name: 'CLUB PILATES 横浜店',
    image: '/images/pilates2.webp',
    rating: 4.7,
    reviewCount: 145,
    reviews: [
      {
        author: 'T.H',
        rating: 5,
        date: '1週間前',
        text: '世界最大級のピラティスブランドだけあって、プログラムの質が高い。15種類のマシン・器具を1人1台使えるのが贅沢。初級から上級まで幅広いクラスがあるので長く通えます。',
      },
      {
        author: 'A.S',
        rating: 4,
        date: '2週間前',
        text: '横浜駅きた西口から徒歩5分。資格保持のインストラクターさんばかりで安心感があります。体験が無料の30分イントロクラスで雰囲気がわかりました。',
      },
      {
        author: 'R.M',
        rating: 5,
        date: '3週間前',
        text: '最大12名の少人数制グループで、しっかり見てもらえます。男性もOKなので夫婦で通っています。リフォーマー以外にもTRXやスプリングボードなど多彩な器具が楽しい。',
      },
    ],
    price: '月4回 13,090円〜',
    trial: '体験レッスン 無料（30分イントロクラス）',
    features: ['世界最大級', '15種類の器具', '横浜駅徒歩5分', '男性OK'],
    description: '世界最大級のマシンピラティスブランド。横浜駅きた西口から徒歩5分。最大12名の少人数制グループレッスンで、リフォーマー・スプリングボード・TRX・チェア・Bosuなど15種類のマシン・器具を1人1台完備。資格保持インストラクターのみ在籍し、初級から上級まで多様なクラスを提供。男性も受講可能です。',
    access: '横浜駅きた西口 徒歩5分',
    address: '神奈川県横浜市神奈川区鶴屋町1-8-1 ALPS横浜ビル 2F',
    popularPlan: {
      name: '月4回プラン',
      description: '15種類の器具を使った本格グループレッスン。初級〜上級まで多彩なクラスから選択可能。',
      price: '月4回 13,090円（税込）',
    },
    options: [
      '月8回プラン（24,090円）',
      '通い放題プラン（37,290円）',
      '入会金 5,500円（キャンペーン時無料）',
      '無料イントロクラス（30分）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心（全体の75%）',
      genderRatio: '女性80% / 男性20%',
      purpose: ['体幹強化', '姿勢改善', 'ボディメイク', 'パフォーマンス向上'],
    },
    basicInfo: {
      hours: '月・火・木・金 7:00-21:00 / 水 8:00-21:00 / 土日 7:00-18:30',
      closed: '不定休',
      facilities: ['リフォーマー', 'スプリングボード', 'TRX', 'チェア', 'Bosu', 'プライベートルーム'],
    },
  },
  {
    name: 'zen place pilates 横浜みなみ西口',
    image: '/images/pilates3.webp',
    rating: 4.7,
    reviewCount: 168,
    reviews: [
      {
        author: 'S.N',
        rating: 5,
        date: '1週間前',
        text: 'マット&マシンコンボプランがお得！両方のレッスンを受けられるので飽きません。インストラクターさんが丁寧で、体の使い方がよくわかります。',
      },
      {
        author: 'K.H',
        rating: 4,
        date: '2週間前',
        text: 'デイタイムプランなら月額11,968円とリーズナブル。平日昼間に通える方にはコスパ抜群です。スタジオも清潔で快適。',
      },
      {
        author: 'H.M',
        rating: 5,
        date: '3週間前',
        text: 'プライベートレッスンで自分の体の課題に集中して取り組めます。全国のzen placeスタジオが使えるので、旅行先でも通えて便利。',
      },
    ],
    price: '月4回 9,625円〜',
    trial: '体験レッスンあり',
    features: ['マット&マシン', '男性OK', 'デイタイムプランあり', '全国相互利用可'],
    description: 'zen place pilatesの横浜みなみ西口スタジオ。マットグループ・リフォーマーグループ・マット&マシンコンボ・プライベートと多彩なレッスン形式を提供。デイタイムプランなど料金プランも豊富で、ライフスタイルに合わせた通い方が可能。男性も受講でき、全国のzen placeスタジオで相互利用可能です。',
    access: 'JR・東急東横線・京急本線・相鉄線 横浜駅西口 徒歩10分',
    address: '神奈川県横浜市西区南幸2-19-4 南幸折目ビル 8F',
    popularPlan: {
      name: 'マット&マシンコンボ月4回',
      description: 'マットとリフォーマーの両方が受講可能。バランスよくピラティスを学びたい方に最適。',
      price: '月4回 12,650円（税込）',
    },
    options: [
      'マットグループフリー（月額14,960円）',
      'マットグループデイタイム（月額11,968円）',
      'リフォーマーグループ月8回（月額25,300円）',
      'プライベート月4回（月額33,880円）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心（全体の70%）',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', '柔軟性向上', '健康維持'],
    },
    basicInfo: {
      hours: '平日 8:20〜20:55 / 土日祝 8:50〜19:25',
      closed: '不定休',
      facilities: ['マットスタジオ', 'リフォーマーマシン', 'プライベートルーム', '更衣室', 'ロッカー'],
    },
  },
  {
    name: 'ルルト 横浜店',
    image: '/images/pilates4.webp',
    rating: 4.9,
    reviewCount: 89,
    reviews: [
      {
        author: 'C.Y',
        rating: 5,
        date: '1週間前',
        text: '理学療法士監修の完全マンツーマンレッスン。腰痛がひどくて通い始めましたが、3ヶ月で劇的に改善しました。「鍛える」ではなく「整える」アプローチが自分に合っていました。',
      },
      {
        author: 'M.O',
        rating: 5,
        date: '2週間前',
        text: '完全プライベート空間で周りを気にせずレッスンに集中できます。リフォーマー、キャデラック、チェアと本格的なマシンが揃っていて、毎回違ったアプローチで指導してもらえます。',
      },
      {
        author: 'T.K',
        rating: 5,
        date: '1ヶ月前',
        text: '60代ですが、自分のペースで無理なく進められるので安心。インストラクターさんが体の状態をしっかり見てくれるので、効果を実感しやすいです。',
      },
    ],
    price: '1回 要問合せ（完全パーソナル）',
    trial: '体験レッスン 平日3,000円 / 土日祝5,000円',
    features: ['理学療法士監修', '完全マンツーマン', '横浜駅徒歩5分', '本格マシン完備'],
    description: '理学療法士監修の完全マンツーマンプライベートピラティススタジオ。横浜駅から徒歩5分。「鍛える」ではなく「整える」ピラティスをテーマに、リフォーマー・キャデラック・チェアなど本格マシンを完備。20代から60代以上まで幅広い年齢層に対応し、身体の不調改善や姿勢矯正に特化した指導を提供します。体験当日入会で入会金22,000円が無料。',
    access: '横浜駅 徒歩5分 / 神奈川駅 徒歩5分',
    address: '神奈川県横浜市神奈川区鶴屋町3丁目28-3 松原ダイヤモンドマンション 202号室',
    popularPlan: {
      name: '完全パーソナルレッスン',
      description: '理学療法士監修のマンツーマン指導。一人ひとりの身体に合わせたオーダーメイドプログラム。',
      price: '要問合せ（体験当日入会で入会金22,000円無料）',
    },
    options: [
      '体験レッスン（平日3,000円 / 土日祝5,000円）',
      '入会金 22,000円（体験当日入会で無料）',
      'リフォーマー・キャデラック・チェア完備',
      '完全プライベート空間',
    ],
    userProfile: {
      ageRange: '20代〜60代以上（幅広い年齢層）',
      genderRatio: '女性75% / 男性25%',
      purpose: ['身体の不調改善', '姿勢矯正', 'リハビリ', '健康維持'],
    },
    basicInfo: {
      hours: '9:30〜17:00（電話受付）',
      closed: '不定休',
      facilities: ['リフォーマー', 'キャデラック', 'チェア', '完全プライベート空間'],
    },
  },
  {
    name: 'lafimo 横浜東口店',
    image: '/images/pilates2.webp',
    rating: 4.6,
    reviewCount: 112,
    reviews: [
      {
        author: 'E.S',
        rating: 5,
        date: '1週間前',
        text: '横浜ベイクォーターから徒歩2分！ピラティスとホットヨガの組み合わせプランがあるのが嬉しい。SPA施設も使えてこの価格はコスパ最高です。',
      },
      {
        author: 'Y.N',
        rating: 4,
        date: '2週間前',
        text: '少人数制なので丁寧に見てもらえます。月4回10,560円とリーズナブル。タオルやウェアのレンタル、水素水サービスも込みなので手ぶらで通えます。',
      },
      {
        author: 'K.M',
        rating: 5,
        date: '3週間前',
        text: 'マンツーマンのライフスタイルカウンセリングがついていて、ピラティス以外の生活面もサポートしてもらえます。月6回、月8回のプランもあるので自分のペースで通えます。',
      },
    ],
    price: '月4回 10,560円〜',
    trial: '体験レッスン 500円',
    features: ['少人数制', 'ホットヨガ併設', '横浜駅徒歩5分', 'SPA利用可'],
    description: '少人数制マシンピラティスとホットヨガの複合スタジオ。横浜駅きた東口から徒歩5分、横浜ベイクォーターから徒歩2分。ピラティスとホットヨガの組み合わせプランが特徴で、SPA施設利用込み。マンツーマンのライフスタイルカウンセリング付きで、運動だけでなく生活全体をサポート。タオル・ウェアレンタル・水素水サービス込みで手ぶらで通えます。',
    access: '横浜駅きた東口 徒歩5分 / 横浜ベイクォーター 徒歩2分',
    address: '神奈川県横浜市神奈川区栄町5-1 横浜ポートサイドレイナ 1F',
    popularPlan: {
      name: 'ピラティス&SPA 月4回',
      description: '少人数制マシンピラティス月4回+SPA施設利用。タオル・水素水サービス込み。',
      price: '月4回 10,560円（税込）',
    },
    options: [
      'ピラティス&SPA 月6回（14,256円）',
      'ピラティス&SPA 月8回（16,896円）',
      'ピラティス&ホットヨガ+SPA（11,660円）',
      'プレミアムプラン 各4回（16,610円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の80%）',
      genderRatio: '女性90% / 男性10%',
      purpose: ['ボディメイク', 'リラックス', 'ダイエット', '美容'],
    },
    basicInfo: {
      hours: '平日 10:00〜22:00 / 土 9:00〜21:00 / 祝日 10:00〜21:00',
      closed: '毎月15日',
      facilities: ['マシンピラティス設備', 'ホットヨガスタジオ', 'SPA施設', 'タオルサービス', 'ウェアレンタル', '水素水サービス'],
    },
  },
  {
    name: 'ピラティス&ジム 1to1 横浜店',
    image: '/images/pilates3.webp',
    rating: 4.7,
    reviewCount: 76,
    reviews: [
      {
        author: 'H.T',
        rating: 5,
        date: '1週間前',
        text: '女性専用の完全個室で安心。マシンピラティスとウェイトトレーニングのハイブリッド型なので、効率よくボディメイクできます。レンタルウェア・シューズ無料なのも嬉しい。',
      },
      {
        author: 'S.I',
        rating: 4,
        date: '2週間前',
        text: '体験レッスンが無料で、20分+カウンセリングで丁寧に説明してもらえました。入会金も無料なので始めやすい。朝7時から夜23時まで営業しているので仕事前後に通えます。',
      },
      {
        author: 'N.Y',
        rating: 5,
        date: '1ヶ月前',
        text: 'ダイエットコースではLINEでの栄養指導もあり、2ヶ月で目標体重を達成できました。ピラティスとジムの良いとこ取りができるスタジオです。',
      },
    ],
    price: '1回 6,600円〜（40分）',
    trial: '体験レッスン 無料（20分+カウンセリング）',
    features: ['女性専用', '完全個室', 'ハイブリッド型', '入会金無料'],
    description: '女性専用・完全個室のパーソナルジム。JR横浜駅北西口から徒歩5分。マシンピラティスとウェイトトレーニングを組み合わせた「ハイブリッド型」で、効率的なボディメイクを実現。朝7時から夜23時まで営業で、忙しい方にも最適。レンタルウェア・シューズ無料、入会金無料で始めやすい。ダイエットコースではLINEでの栄養指導も提供。',
    access: 'JR横浜駅 北西口 徒歩5分 / 西口 徒歩6分',
    address: '神奈川県横浜市神奈川区鶴屋町3丁目29-9 タクエー横浜西口第六ビル 8F Bフロア',
    popularPlan: {
      name: '60分セッション',
      description: 'マシンピラティス×ウェイトのハイブリッドパーソナルトレーニング。完全個室で集中。',
      price: '1回 9,900円（税込）',
    },
    options: [
      '40分セッション（6,600円）',
      '80分セッション（13,200円・ストレッチ&マッサージ付き）',
      'ダイエットコース 2ヶ月16回（179,685円・LINE栄養指導付き）',
      'レンタルウェア・シューズ無料',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の85%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ダイエット', 'ボディメイク', '体力向上', '姿勢改善'],
    },
    basicInfo: {
      hours: '7:00〜23:00',
      closed: '不定休',
      facilities: ['マシンピラティス器具', 'ウェイトトレーニング機器', '完全個室', 'カウンセリングルーム'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！横浜エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。経験豊富なインストラクターが基礎から丁寧に指導してくれるので、運動が苦手な方でも安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。',
  },
  {
    question: '横浜のピラティススタジオの料金相場は？',
    answer: '横浜エリアのピラティススタジオの料金相場は、グループレッスン月4回で9,600円〜15,300円程度。体験レッスンは無料〜3,000円が一般的です。プライベートレッスンは1回6,600円〜が相場となっています。',
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
    answer: '基本的に動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。マットやタオルはスタジオでレンタルできることが多いです。the SILKやlafimo横浜東口店などは手ぶらOKの体験レッスンも実施しています。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズ。ヨガは柔軟性と精神的なリラックスを重視します。ピラティスは筋力強化、ヨガは心身のバランスを整えることが主な目的。どちらも素晴らしいエクササイズなので、目的に合わせて選びましょう。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。特にルルト横浜店は理学療法士監修で、身体の不調改善に特化した指導を提供しています。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスで効果が表れだすのは「2ヶ月を過ぎた頃」から。これは人間の細胞が生まれ変わるサイクルがそのくらいだからです。すぐに変化が表れなくても心配せず、最低でも2ヶ月は継続するのがおすすめです。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれ良さがあります。パーソナルは一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方におすすめ。グループは料金が安く、仲間と楽しく続けられるのが魅力。まずは体験で両方試してみるのがいいですよ。',
  },
]

export default function YokohamaPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月08日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス横浜おすすめ8選！<br className="hidden md:block" />
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
              <span className="text-warm-600">横浜</span>
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
              「横浜で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、横浜エリアでおすすめのピラティススタジオ8選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>横浜でピラティススタジオを探している</span>
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
                  <span>複数路線利用できるスタジオがいい</span>
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
              横浜のおすすめピラティススタジオ8選
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
                  月額10,000円台で通える格安スタジオ。体験レッスン無料のスタジオも多数。コスパ重視の方におすすめ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates（月4回 9,625円〜）</li>
                  <li className="text-warm-700">• lafimo 横浜東口店（月4回 10,560円〜）</li>
                  <li className="text-warm-700">• CLUB PILATES（月4回 13,090円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">マシン完備</h3>
                <p className="text-warm-600 text-sm mb-4">
                  最新のリフォーマーマシンを完備。マシンピラティスを本格的に学びたい方におすすめ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• CLUB PILATES（15種類の器具完備）</li>
                  <li className="text-warm-700">• zen place pilates（Balanced Body製）</li>
                  <li className="text-warm-700">• ルルト（リフォーマー・キャデラック・チェア）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  横浜駅から徒歩5分以内。JR・東急・相鉄・市営地下鉄が利用可能で通いやすい。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK（駅徒歩2分・地下街直結）</li>
                  <li className="text-warm-700">• zen place pilates（駅徒歩2〜4分）</li>
                  <li className="text-warm-700">• the SILK（駅徒歩3分）</li>
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
                  グループレッスン中心。マットピラティスやSPA付きプランなど。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates（9,625円〜）</li>
                  <li>• lafimo 横浜東口（10,560円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 13,000〜16,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオ。グループレッスンが充実。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• CLUB PILATES（13,090円〜）</li>
                  <li>• ピラティスK（13,420円〜）</li>
                  <li>• the SILK（13,280円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 30,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全プライベートレッスン。短期集中で結果を出したい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place プライベート（33,880円〜）</li>
                  <li>• ルルト（完全マンツーマン）</li>
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
                  まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、体幹強化、リラックスなど、目的によって最適なスタジオやプログラムは変わります。目的が明確だとスタジオ選びもスムーズになりますよ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  横浜エリアの料金相場は月4回で9,600円〜15,300円程度。無理なく継続できる予算を決めましょう。料金だけでなく、入会金、マット・ウェアのレンタル料なども確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。ピラティスK・the SILK・CLUB PILATESなど無料体験を実施しているスタジオも多いので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。横浜はJR・東急・相鉄・市営地下鉄が乗り入れ、複数路線が利用できます。今回紹介したスタジオはすべて横浜駅から徒歩10分以内。ピラティスKは地下街直結で雨の日も便利ですよ。
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
              今回は横浜のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では横浜に数多くあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜3,000円。<br />
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
