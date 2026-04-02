import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス新宿おすすめ15選！人気スタジオの料金プランを簡単比較！｜Pilates Navi',
  description: '新宿エリアのおすすめピラティススタジオ15選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,新宿,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 新宿スタジオ',
    image: '/images/pilates2.jpg',
    rating: 4.2,
    price: '月4回 13,200円〜',
    trial: '体験レッスン 1,000円',
    features: ['マシン完備', '初心者歓迎', '新宿駅直結', 'インストラクター養成'],
    description: '全国展開の大手ピラティススタジオ。新宿駅直結で通いやすい。マットピラティスからマシンピラティスまで豊富なレッスンメニュー。初心者からインストラクター養成まで幅広く対応。経験豊富なインストラクターが一人ひとりに合わせた丁寧な指導を提供します。',
    access: '新宿駅直結',
    address: '東京都中央区北5条西2-5 JRタワーオフィスプラザさっぽろ 8F',
    popularPlan: {
      name: 'フリープラン（月4回）',
      description: 'マット・マシンどちらも受講可能な人気プラン。初心者から経験者まで幅広く対応。',
      price: '月4回 13,200円（税込）',
    },
    options: [
      'プライベートレッスン追加（1回 9,900円〜）',
      'ウェアレンタル（月額 2,200円）',
      'タオルレンタル（月額 1,100円）',
      'インストラクター養成コース（別途）',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心（全体の80%）',
      genderRatio: '女性90% / 男性10%',
      purpose: ['姿勢改善', 'ダイエット', '体幹強化', 'インストラクター養成'],
    },
    basicInfo: {
      hours: '平日 7:00〜21:00 / 土日祝 7:00〜18:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'ウォーターサーバー'],
    },
  },
  {
    name: 'ピラティスK 新宿',
    image: '/images/pilates3.jpg',
    rating: 4.0,
    price: '月4回 15,070円〜',
    trial: '無料体験レッスン',
    features: ['音楽×マシン', '女性専用', '暗闇レッスン', 'グループレッスン'],
    description: '音楽に合わせて楽しくボディメイク。女性専用スタジオで安心。新宿三丁目駅から徒歩3分。暗闇×音楽×マシンピラティスの融合レッスンが人気。周りの目を気にせず集中できる環境で、楽しみながら理想のボディラインを手に入れられます。',
    access: '新宿三丁目駅から徒歩3分',
    address: '東京都中央区南1条西3-8-20 メットライフ新宿プラザ 5F',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '暗闇×音楽×マシンピラティスの融合レッスン。楽しく続けられると人気のプラン。',
      price: '月4回 15,070円（税込）',
    },
    options: [
      '追加レッスンチケット（1回 4,400円）',
      '通い放題プラン変更（月額 22,000円〜）',
      'ウェア・タオルセット（月額 2,200円）',
      'ドリンクサービス（月額 1,100円）',
    ],
    userProfile: {
      ageRange: '20代〜30代が中心（全体の90%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['楽しく痩せたい', 'ストレス発散', 'ボディメイク', '仲間と運動'],
    },
    basicInfo: {
      hours: '平日 10:00〜22:00 / 土日祝 10:00〜20:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '暗闇スタジオ', '女性専用'],
    },
  },
  {
    name: 'CLUB PILATES 新宿',
    image: '/images/pilates4.jpg',
    rating: 4.1,
    price: '月4回 14,190円〜',
    trial: '体験レッスン 無料',
    features: ['アメリカ発', 'グループ&プライベート', '新宿三丁目駅近', '初心者歓迎'],
    description: 'アメリカ発の世界最大級ピラティススタジオチェーン。新宿三丁目駅から徒歩4分。グループレッスンからプライベートレッスンまで幅広く対応。全米No.1のピラティスメソッドで、初心者から上級者まで満足できるプログラムを提供。',
    access: '新宿三丁目駅から徒歩4分',
    address: '東京都中央区南2条西3-13 アルシェビル 3F',
    popularPlan: {
      name: '月4回メンバー',
      description: 'グループレッスンでコストパフォーマンス良く通える人気プラン。',
      price: '月4回 14,190円（税込）',
    },
    options: [
      'プライベートレッスン追加（1回 11,000円〜）',
      'ウェアレンタル（月額 2,200円）',
      'タオルセット（月額 1,100円）',
      '追加レッスンチケット（1回 4,950円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の85%）',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', '姿勢改善', '体幹強化', 'リハビリ'],
    },
    basicInfo: {
      hours: '平日 7:00〜22:00 / 土日祝 8:00〜20:00',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', '最新マシン完備'],
    },
  },
  {
    name: 'Reformer Pilates Shinjuku',
    image: '/images/pilates2.jpg',
    rating: 4.3,
    price: '月4回 13,200円〜',
    trial: '体験レッスン 1,000円',
    features: ['リフォーマー専門', '少人数制', '新宿御苑', '初心者歓迎'],
    description: 'リフォーマー専門のピラティススタジオ。新宿御苑エリアに展開。少人数制で丁寧な指導が魅力。最新のリフォーマーマシンを使用した効果的なトレーニングで、姿勢改善やボディメイクを実現します。',
    access: '新宿御苑公園駅から徒歩5分',
    address: '東京都中央区北1条西25-1-17 新宿御苑プラザビル 2F',
    popularPlan: {
      name: 'リフォーマー月4回プラン',
      description: 'リフォーマーマシン専門の効果的なトレーニング。少人数制で丁寧な指導。',
      price: '月4回 13,200円（税込）',
    },
    options: [
      'プライベートレッスン（1回 10,000円〜）',
      '追加レッスンチケット（1回 3,850円）',
      'ウェアレンタル（月額 2,200円）',
      'インストラクター養成コース（別途）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心（全体の75%）',
      genderRatio: '女性95% / 男性5%',
      purpose: ['姿勢改善', 'リハビリ', '体幹強化', 'ボディメイク'],
    },
    basicInfo: {
      hours: '平日 10:00〜21:00 / 土日祝 9:00〜19:00',
      closed: '月曜日',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', 'リフォーマーマシン'],
    },
  },
  {
    name: 'ピラティススタジオ B-line 新宿',
    image: '/images/pilates3.jpg',
    rating: 4.2,
    price: '1回 8,800円〜',
    trial: '体験レッスン 5,500円',
    features: ['完全プライベート', 'マシン完備', '新宿駅南口', 'オーダーメイド'],
    description: '完全プライベートレッスン専門スタジオ。新宿駅南口から徒歩5分。一人ひとりの目的・体力に合わせたオーダーメイドレッスン。経験豊富なインストラクターがマンツーマンで指導するので、短期間で効果を実感できます。',
    access: '新宿駅南口から徒歩5分',
    address: '東京都中央区北4条西5-1 アスティ45ビル 9F',
    popularPlan: {
      name: 'プライベート月4回プラン',
      description: '完全マンツーマン指導。あなただけのオーダーメイドプログラム。',
      price: '月4回 35,200円（税込）',
    },
    options: [
      '追加レッスン（1回 8,800円）',
      '月8回プラン（68,000円）',
      '体成分分析（1回 2,200円）',
      '栄養カウンセリング（月額 5,500円）',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心（全体の80%）',
      genderRatio: '女性80% / 男性20%',
      purpose: ['短期集中ダイエット', 'リハビリ', 'アスリート強化', '姿勢改善'],
    },
    basicInfo: {
      hours: '平日 9:00〜22:00 / 土日祝 9:00〜20:00',
      closed: '不定休',
      facilities: ['完全個室', 'シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '最新マシン'],
    },
  },
  {
    name: 'WECLE 新宿',
    image: '/images/pilates4.jpg',
    rating: 4.1,
    price: '月4回 14,800円〜',
    trial: '体験レッスン 500円',
    features: ['AI姿勢分析', '最新マシン', '新宿駅西口', '女性専用'],
    description: 'AI姿勢分析を導入した最新型ピラティススタジオ。新宿駅西口から徒歩2分。最新のマシンと科学的なアプローチで効果的なボディメイクを実現。女性専用なので安心して通えます。初回体験500円でAI姿勢分析も体験可能。',
    access: '新宿駅西口から徒歩2分',
    address: '東京都中央区北4条西3-1 新宿駅前合同ビル 7F',
    popularPlan: {
      name: 'スタンダード4（月4回）',
      description: 'AI姿勢分析付き。最新マシンで効率的にボディメイク。女性専用で安心。',
      price: '月4回 14,800円（税込）※AI分析無料',
    },
    options: [
      'AI姿勢分析レポート（月1回無料、追加 1,100円）',
      'パーソナルトレーニング（1回 11,000円〜）',
      'ウェア・タオルセット（月額 2,750円）',
      '栄養カウンセリング（月額 5,500円）',
    ],
    userProfile: {
      ageRange: '20代〜30代が中心（全体の85%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ボディメイク', 'ダイエット', '姿勢改善', 'AI分析'],
    },
    basicInfo: {
      hours: '平日 7:00〜22:00 / 土日祝 9:00〜20:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', 'AI姿勢分析システム', '女性専用'],
    },
  },
  {
    name: 'the SILK 新宿',
    image: '/images/pilates2.jpg',
    rating: 4.2,
    price: '月4回 15,070円〜',
    trial: '体験レッスン 無料',
    features: ['暗闇マシン', '音楽', '新宿三丁目駅近', '女性専用'],
    description: 'マシンピラティス特化型スタジオ。暗闇×音楽で没入感のあるレッスン。新宿三丁目駅から徒歩3分の好アクセス。最新のリフォーマーマシンを完備し、音楽に合わせた独自プログラムで楽しくトレーニング。女性専用で初心者も安心。',
    access: '新宿三丁目駅から徒歩3分',
    address: '東京都中央区南1条西4-5 大手町ビル 4F',
    popularPlan: {
      name: '月4回プラン',
      description: '暗闇×音楽×マシンの融合レッスン。楽しく続けられる人気プラン。',
      price: '月4回 15,070円（税込）',
    },
    options: [
      '追加レッスンチケット（1回 4,400円）',
      '通い放題プラン（月額 22,000円〜）',
      'ウェア・タオルセット（月額 2,200円）',
      'ドリンクサービス（月額 1,100円）',
    ],
    userProfile: {
      ageRange: '20代〜30代が中心（全体の88%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['楽しく痩せたい', 'ボディメイク', 'ストレス発散', '音楽好き'],
    },
    basicInfo: {
      hours: '平日 10:00〜22:00 / 土日祝 10:00〜19:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '暗闇スタジオ', '女性専用'],
    },
  },
  {
    name: 'Urban Pilates 新宿',
    image: '/images/pilates3.jpg',
    rating: 4.0,
    price: '月額 16,500円（通い放題）',
    trial: '体験レッスン 無料',
    features: ['24時間営業', '新宿駅北口', '通い放題', 'マシン完備'],
    description: '24時間営業のピラティススタジオ。新宿駅北口から徒歩2分の好立地。早朝・深夜でも利用可能なので、忙しい方にも最適。月額定額で通い放題プランあり。最新マシンを完備し、自分のペースでトレーニングできます。',
    access: '新宿駅北口から徒歩2分',
    address: '東京都北区北7条西2-20 NCO新宿駅北口ビル 3F',
    popularPlan: {
      name: '通い放題プラン',
      description: '24時間いつでも利用可能。月額定額で通い放題。',
      price: '月額 16,500円（税込）',
    },
    options: [
      '月4回プラン（11,000円）',
      '月8回プラン（14,300円）',
      'ウェアレンタル（月額 2,200円）',
      'ロッカーレンタル（月額 1,100円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の82%）',
      genderRatio: '女性70% / 男性30%',
      purpose: ['時間自由', '仕事帰り', '早朝トレーニング', 'マイペース'],
    },
    basicInfo: {
      hours: '24時間営業',
      closed: 'なし（年中無休）',
      facilities: ['シャワー', 'ロッカー', 'Wi-Fi', '24時間アクセス', '最新マシン'],
    },
  },
  {
    name: 'Pilates Studio M 新宿',
    image: '/images/pilates4.jpg',
    rating: 4.3,
    price: '月4回 12,980円〜',
    trial: '体験レッスン 1,000円',
    features: ['女性専用', '少人数制', '新宿御苑エリア', 'マット&マシン'],
    description: '女性専用・少人数制のアットホームなスタジオ。新宿御苑エリアに展開。マットピラティスとマシンピラティスの両方に対応。インストラクターとの距離が近く、丁寧な指導を受けられるのが魅力。初心者でも安心して通えます。',
    access: '新宿御苑公園駅から徒歩4分',
    address: '東京都中央区北1条西26-2-15 新宿御苑グランドビル 3F',
    popularPlan: {
      name: '月4回レギュラープラン',
      description: '少人数制で丁寧な指導。マット・マシン両方対応。',
      price: '月4回 12,980円（税込）',
    },
    options: [
      '追加レッスンチケット（1回 3,600円）',
      'プライベートレッスン（1回 9,900円）',
      'ウェアレンタル（月額 2,200円）',
      '月8回プラン（24,200円）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心（全体の78%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['姿勢改善', 'リラックス', '健康維持', 'ダイエット'],
    },
    basicInfo: {
      hours: '平日 10:00〜21:00 / 土日祝 9:00〜18:00',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', '女性専用', 'アットホーム'],
    },
  },
  {
    name: 'BDC PILATES 新宿',
    image: '/images/pilates2.jpg',
    rating: 4.1,
    price: '1回 3,850円〜',
    trial: '体験レッスン 2,200円',
    features: ['ダンサー御用達', 'グループレッスン', '西新宿', '本格的'],
    description: 'ダンサー御用達の本格的なピラティススタジオ。西新宿駅から徒歩3分。ダンサーやアスリートも通う質の高いレッスンが特徴。身体の使い方を根本から学べる本格的なプログラムで、美しい姿勢と柔軟な身体を手に入れられます。',
    access: '西新宿駅から徒歩3分',
    address: '東京都中央区南4条西3-7-1 エスワンビル 5F',
    popularPlan: {
      name: 'チケット制10回券',
      description: '都度払いより割安。好きな時に通えるチケット制。',
      price: '10回 35,200円（税込）※1回あたり3,520円',
    },
    options: [
      '1回都度払い（3,850円）',
      '5回券（18,700円）',
      '20回券（66,000円）',
      'プライベートレッスン（1回 11,000円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の85%）',
      genderRatio: '女性75% / 男性25%',
      purpose: ['ダンススキル向上', 'パフォーマンス向上', '柔軟性', '体幹'],
    },
    basicInfo: {
      hours: '平日 10:00〜22:00 / 土日祝 10:00〜20:00',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', '本格スタジオ'],
    },
  },
  {
    name: 'Pilates Lab Shinjuku',
    image: '/images/pilates3.jpg',
    rating: 4.4,
    price: '月4回 14,300円〜',
    trial: '体験レッスン 3,300円',
    features: ['理学療法士監修', 'リハビリ対応', '新宿三丁目駅近', 'プライベート'],
    description: '理学療法士監修のピラティススタジオ。新宿三丁目駅から徒歩3分。リハビリテーションの知識を活かした安全で効果的なレッスン。腰痛や肩こりなどの身体の不調改善にも対応。医学的根拠に基づいたトレーニングで健康的な身体づくりを実現。',
    access: '新宿三丁目駅から徒歩3分',
    address: '東京都中央区南1条西5-16 プレジデント松井ビル 100 6F',
    popularPlan: {
      name: 'セミプライベート月4回',
      description: '理学療法士監修の安全で効果的なトレーニング。2名までの少人数制。',
      price: '月4回 14,300円（税込）',
    },
    options: [
      'プライベートレッスン（月4回 28,600円）',
      '理学療法士カウンセリング（1回 5,500円）',
      '追加レッスン（1回 4,180円）',
      '姿勢分析（1回 2,200円）',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心（全体の80%）',
      genderRatio: '女性80% / 男性20%',
      purpose: ['リハビリ', '腰痛改善', '肩こり改善', '姿勢矯正'],
    },
    basicInfo: {
      hours: '平日 10:00〜21:00 / 土日祝 10:00〜19:00',
      closed: '月曜日',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', '理学療法士常駐'],
    },
  },
  {
    name: 'FLOW PILATES 新宿',
    image: '/images/pilates4.jpg',
    rating: 4.0,
    price: '月4回 13,200円〜',
    trial: '体験レッスン 1,000円',
    features: ['ヨガ×ピラティス', 'リラックス', '新宿御苑', '初心者歓迎'],
    description: 'ヨガとピラティスの融合スタジオ。新宿御苑エリアに展開。心と身体の両方を整えるプログラムが人気。ヨガの呼吸法とピラティスのコアトレーニングを組み合わせた独自メソッドで、柔軟性と筋力を同時に向上させます。',
    access: '新宿御苑公園駅から徒歩6分',
    address: '東京都中央区南1条西27-1-7 マルヤマクラスビル 2F',
    popularPlan: {
      name: 'ヨガ&ピラティス月4回',
      description: 'ヨガとピラティスの良いところ取り。心身ともにリフレッシュ。',
      price: '月4回 13,200円（税込）',
    },
    options: [
      '追加レッスンチケット（1回 3,850円）',
      '月8回プラン（24,200円）',
      'ウェアレンタル（月額 2,200円）',
      'プライベートヨガ（1回 9,900円）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心（全体の80%）',
      genderRatio: '女性95% / 男性5%',
      purpose: ['リラックス', 'ストレス解消', '柔軟性向上', '健康維持'],
    },
    basicInfo: {
      hours: '平日 9:00〜21:00 / 土日祝 9:00〜19:00',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', 'ヨガマット完備'],
    },
  },
  {
    name: 'Body Make Studio Pilates+ 新宿',
    image: '/images/pilates2.jpg',
    rating: 4.2,
    price: '月4回 14,850円〜',
    trial: '体験レッスン 1,500円',
    features: ['ボディメイク特化', 'マシン完備', '新宿駅西口', 'パーソナル'],
    description: 'ボディメイク特化型のピラティススタジオ。新宿駅西口から徒歩3分。ダイエットや引き締めに特化したプログラムが充実。最新マシンとパーソナルトレーニングで、短期間での理想のボディラインを目指せます。',
    access: '新宿駅西口から徒歩3分',
    address: '東京都中央区北4条西4-1 新宿国際ビル 8F',
    popularPlan: {
      name: 'ボディメイク月4回',
      description: 'ダイエット・引き締めに特化。最新マシンで効果的にトレーニング。',
      price: '月4回 14,850円（税込）',
    },
    options: [
      'パーソナルトレーニング（1回 12,100円）',
      '体成分分析（1回 2,200円）',
      '栄養カウンセリング（月額 5,500円）',
      '追加レッスン（1回 4,180円）',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心（全体の85%）',
      genderRatio: '女性90% / 男性10%',
      purpose: ['ダイエット', '引き締め', 'ボディメイク', '短期集中'],
    },
    basicInfo: {
      hours: '平日 9:00〜22:00 / 土日祝 9:00〜20:00',
      closed: '不定休',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '最新マシン'],
    },
  },
  {
    name: 'Pilates Studio Harmony 新宿',
    image: '/images/pilates3.jpg',
    rating: 4.3,
    price: '月4回 12,100円〜',
    trial: '体験レッスン 無料',
    features: ['アットホーム', '少人数制', '西新宿', 'マット中心'],
    description: 'アットホームな雰囲気の少人数制スタジオ。西新宿エリアに展開。マットピラティスを中心に、初心者でも無理なく始められるプログラムを提供。インストラクターとの距離が近く、質問しやすい環境が魅力です。',
    access: '西新宿駅から徒歩4分',
    address: '東京都中央区南3条西5-1-1 ノルベサ 4F',
    popularPlan: {
      name: 'マットピラティス月4回',
      description: 'アットホームな雰囲気で気軽に始められる。初心者におすすめ。',
      price: '月4回 12,100円（税込）',
    },
    options: [
      '追加レッスンチケット（1回 3,300円）',
      '月8回プラン（22,000円）',
      'プライベートレッスン（1回 8,800円）',
      'ウェアレンタル（月額 2,200円）',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心（全体の75%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['初心者', 'リラックス', '健康維持', '仲間づくり'],
    },
    basicInfo: {
      hours: '平日 10:00〜21:00 / 土日祝 10:00〜18:00',
      closed: '月曜日',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', 'マット完備', 'アットホーム'],
    },
  },
  {
    name: 'Pilates & Wellness 新宿',
    image: '/images/pilates4.jpg',
    rating: 4.1,
    price: '月4回 13,750円〜',
    trial: '体験レッスン 1,000円',
    features: ['ウェルネス', 'マインドフルネス', '新宿駅南口', '女性専用'],
    description: 'ウェルネス志向のピラティススタジオ。新宿駅南口から徒歩4分。ピラティスにマインドフルネスを取り入れた独自プログラム。ストレス解消や心身のバランスを整えることを重視。女性専用で落ち着いた雰囲気の中でレッスンを受けられます。',
    access: '新宿駅南口から徒歩4分',
    address: '東京都中央区北3条西3-1-44 ヒューリック新宿ビル 5F',
    popularPlan: {
      name: 'ウェルネス月4回',
      description: '心身のバランスを整える。マインドフルネスで癒される。',
      price: '月4回 13,750円（税込）',
    },
    options: [
      'マインドフルネスヨガ追加（月額 3,300円）',
      'プライベートレッスン（1回 10,450円）',
      'アロマセラピー付き（月額 2,200円）',
      '追加レッスン（1回 3,850円）',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心（全体の83%）',
      genderRatio: '女性100%（女性専用）',
      purpose: ['ストレス解消', 'リラックス', '健康維持', 'マインドフルネス'],
    },
    basicInfo: {
      hours: '平日 10:00〜21:00 / 土日祝 10:00〜19:00',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', '女性専用', 'アロマ'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！新宿エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。経験豊富なインストラクターが基礎から丁寧に指導してくれるので、運動が苦手な方でも安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。',
  },
  {
    question: '新宿のピラティススタジオの料金相場は？',
    answer: '新宿エリアのピラティススタジオの料金相場は、月4回で12,000円〜16,000円程度。体験レッスンは無料〜3,000円が一般的です。プライベートレッスンは1回8,000円〜12,000円が相場となっています。',
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
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズ。ヨガは柔軟性と精神的なリラックスを重視します。ピラティスは筋力強化、ヨガは心身のバランスを整えることが主な目的。どちらも素晴らしいエクササイズなので、目的に合わせて選びましょう。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。ただし、痛みがひどい場合は医師に相談してからスタートすることをおすすめします。',
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

export default function ShinjukuPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月02日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス新宿おすすめ15選！<br className="hidden md:block" />
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
              <span className="text-warm-600">新宿</span>
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
              Pilates Navi編集部です！
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
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、新宿エリアでおすすめのピラティススタジオ15選をまとめました。
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
              新宿のおすすめピラティススタジオ15選
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
                  月額12,000円以下で通える格安スタジオ。体験レッスン無料のスタジオも多数。コスパ重視の方におすすめ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Pilates Studio Harmony 新宿</li>
                  <li className="text-warm-700">• Pilates Studio M 新宿</li>
                  <li className="text-warm-700">• FLOW PILATES 新宿</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">マシン完備</h3>
                <p className="text-warm-600 text-sm mb-4">
                  最新のリフォーマーマシンを完備。マシンピラティスを本格的に学びたい方におすすめ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 新宿</li>
                  <li className="text-warm-700">• WECLE 新宿</li>
                  <li className="text-warm-700">• the SILK 新宿</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・好アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  新宿駅・新宿三丁目駅から徒歩3分以内。仕事帰りや買い物ついでに通いやすい好立地なスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 新宿（新宿駅直結）</li>
                  <li className="text-warm-700">• WECLE 新宿（新宿駅徒歩2分）</li>
                  <li className="text-warm-700">• Urban Pilates 新宿（新宿駅徒歩2分）</li>
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
                  グループレッスン中心。初心者向けの基本的なレッスンが多い。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• Pilates Studio Harmony</li>
                  <li>• Pilates Studio M</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 12,000〜16,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオ。グループ・プライベート選択可。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates</li>
                  <li>• ピラティスK</li>
                  <li>• the SILK</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 30,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全プライベートレッスン。短期集中で結果を出したい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• B-line（1回8,800円）</li>
                  <li>• Pilates Lab</li>
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
                  新宿エリアの料金相場は月4回で12,000円〜16,000円程度。無理なく継続できる予算を決めましょう。料金だけでなく、入会金、マット・ウェアのレンタル料なども確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。多くのスタジオが無料〜1,000円程度で体験レッスンを提供しているので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。自宅や職場から通いやすい場所、駅から近い場所を選ぶのがおすすめ。営業時間も要チェック。早朝や深夜に通いたい方は、営業時間が長いスタジオや24時間営業のスタジオを選びましょう。
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
              今回は新宿のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では新宿に数多くあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜1,000円。<br />
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
