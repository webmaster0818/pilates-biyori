// エリア別スタジオデータ

type Studio = {
  name: string
  image: string
  rating: number
  price: string
  trial: string
  features: string[]
  description: string
  access?: string
  address?: string
  popularPlan?: {
    name: string
    description: string
    price: string
  }
  options?: string[]
  userProfile?: {
    ageRange: string
    genderRatio: string
    purpose: string[]
  }
  basicInfo?: {
    hours: string
    closed: string
    facilities: string[]
  }
}

type AreaData = {
  name: string
  region: string
  description: string
  studios: Studio[]
}

export const areaStudios: Record<string, AreaData> = {
  // 北海道・東北
  sapporo: {
    name: '札幌',
    region: '北海道・東北',
    description: '北海道最大の都市・札幌エリアのピラティススタジオ。札幌駅周辺から大通、すすきのまで、通いやすいスタジオが充実。',
    studios: [
      {
        name: 'zen place pilates 札幌スタジオ',
        image: '/images/pilates2.jpg',
        rating: 4.2,
        price: '月4回 13,200円〜',
        trial: '体験レッスン 1,000円',
        features: ['マシン完備', '初心者歓迎', '札幌駅直結', 'インストラクター養成'],
        description: '全国展開の大手ピラティススタジオ。札幌駅直結で通いやすい。マットピラティスからマシンピラティスまで豊富なレッスンメニュー。',
        access: '札幌駅直結',
        address: '北海道札幌市中央区北5条西2-5 JRタワーオフィスプラザさっぽろ 8F',
      },
      {
        name: 'ピラティスK 札幌',
        image: '/images/pilates3.jpg',
        rating: 4.0,
        price: '月4回 15,070円〜',
        trial: '無料体験レッスン',
        features: ['音楽×マシン', '女性専用', '暗闇レッスン', 'グループレッスン'],
        description: '音楽に合わせて楽しくボディメイク。女性専用スタジオで安心。大通駅から徒歩3分。',
        access: '大通駅から徒歩3分',
        address: '北海道札幌市中央区南1条西3-8-20 メットライフ札幌プラザ 5F',
      },
      {
        name: 'CLUB PILATES 札幌',
        image: '/images/pilates4.jpg',
        rating: 4.1,
        price: '月4回 14,190円〜',
        trial: '体験レッスン 無料',
        features: ['アメリカ発', 'グループ&プライベート', '大通駅近', '初心者歓迎'],
        description: 'アメリカ発の世界最大級ピラティススタジオチェーン。グループレッスンからプライベートレッスンまで幅広く対応。',
        access: '大通駅から徒歩4分',
        address: '北海道札幌市中央区南2条西3-13 アルシェビル 3F',
      },
      {
        name: 'Reformer Pilates Sapporo',
        image: '/images/pilates2.jpg',
        rating: 4.3,
        price: '月4回 13,200円〜',
        trial: '体験レッスン 1,000円',
        features: ['リフォーマー専門', '少人数制', '円山', '初心者歓迎'],
        description: 'リフォーマー専門のピラティススタジオ。円山エリアに展開。少人数制で丁寧な指導が魅力。',
        access: '円山公園駅から徒歩5分',
        address: '北海道札幌市中央区北1条西25-1-17 円山プラザビル 2F',
      },
      {
        name: 'ピラティススタジオ B-line 札幌',
        image: '/images/pilates3.jpg',
        rating: 4.2,
        price: '1回 8,800円〜',
        trial: '体験レッスン 5,500円',
        features: ['完全プライベート', 'マシン完備', '札幌駅南口', 'オーダーメイド'],
        description: '完全プライベートレッスン専門スタジオ。一人ひとりの目的・体力に合わせたオーダーメイドレッスン。',
        access: '札幌駅南口から徒歩5分',
        address: '北海道札幌市中央区北4条西5-1 アスティ45ビル 9F',
      },
    ],
  },

  sendai: {
    name: '仙台',
    region: '北海道・東北',
    description: '東北最大の都市・仙台エリアのピラティススタジオ。仙台駅周辺から泉中央まで、通いやすいスタジオが揃っています。',
    studios: [
      {
        name: 'zen place pilates 仙台スタジオ',
        image: '/images/pilates2.jpg',
        rating: 4.1,
        price: '月4回 13,200円〜',
        trial: '体験レッスン 1,000円',
        features: ['マシン完備', '初心者歓迎', '仙台駅徒歩5分', 'インストラクター養成'],
        description: '全国展開の大手ピラティススタジオ。仙台駅から徒歩5分の好立地。マットピラティスからマシンピラティスまで対応。',
        access: '仙台駅から徒歩5分',
        address: '宮城県仙台市青葉区中央1-10-1 ヒューモスファイヴ 4F',
      },
      {
        name: 'ピラティスK 仙台',
        image: '/images/pilates3.jpg',
        rating: 3.9,
        price: '月4回 15,070円〜',
        trial: '無料体験レッスン',
        features: ['音楽×マシン', '女性専用', '暗闇レッスン', 'グループレッスン'],
        description: '音楽に合わせて楽しくボディメイク。女性専用スタジオで安心。仙台駅西口から徒歩3分。',
        access: '仙台駅西口から徒歩3分',
        address: '宮城県仙台市青葉区中央3-1-24 荘銀ビル 5F',
      },
      {
        name: 'CLUB PILATES 仙台',
        image: '/images/pilates4.jpg',
        rating: 4.0,
        price: '月4回 14,190円〜',
        trial: '体験レッスン 無料',
        features: ['アメリカ発', 'グループ&プライベート', '仙台パルコ近く', '初心者歓迎'],
        description: 'アメリカ発の世界最大級ピラティススタジオチェーン。仙台駅パルコ近くで通いやすい。',
        access: '仙台駅から徒歩4分',
        address: '宮城県仙台市青葉区中央2-5-9 庄文堂ビル 3F',
      },
      {
        name: 'Pilates & Yoga Sol 仙台',
        image: '/images/pilates2.jpg',
        rating: 4.2,
        price: '月4回 12,800円〜',
        trial: '体験レッスン 1,000円',
        features: ['ヨガ×ピラティス', '少人数制', '仙台駅東口', '初心者歓迎'],
        description: 'ヨガとピラティスの融合スタジオ。少人数制で丁寧な指導。初心者でも安心して始められる環境。',
        access: '仙台駅東口から徒歩6分',
        address: '宮城県仙台市宮城野区榴岡4-2-3 仙台MTビル 6F',
      },
    ],
  },


  // ===== Phase1 拡張: 東北5市（2026-05-27） =====
  'aomori': {
    name: '青森市',
    region: '北海道・東北',
    description:
      '青森県の県庁所在地・青森市エリアのピラティススタジオ。新青森駅・青森駅周辺を中心に、マシンピラティス専門スタジオやヨガ併設スタジオなど多彩な選択肢が揃う。',
    studios: [
      {
        name: 'Pachira Pilates Studio 青森店',
        image: '/images/pilates1.jpg',
        rating: 4.5,
        price: '体験レッスン要問合せ',
        trial: '初回カウンセリング含む50分セッション',
        features: ['マシンピラティス専門', '国際認定資格インストラクター', 'パーソナル対応'],
        description:
          'Peak Pilates国際認定資格を持つインストラクターが指導するマシンピラティス専門スタジオ。初心者からアスリートまで対応。',
        address: '青森県青森市緑2-9-20',
      },
      {
        name: 'pilates K シーナシーナ青森店',
        image: '/images/pilates2.jpg',
        rating: 4.5,
        price: 'マンスリー4メンバー 11,220円/月',
        trial: '体験レッスン0円',
        features: ['女性専用', 'マシンピラティス', 'グループレッスン'],
        description:
          '女性専用のマシンピラティス専門スタジオ。17種類のボディメイクプログラムを提供。音楽に合わせたグループレッスン形式。',
        access: 'バス停「シーナシーナ青森前」徒歩1分',
        address: '青森県青森市浜田1-14-1 CiiNA CiiNA青森 2階',
      },
      {
        name: 'YOGA STUDIO oNeself',
        image: '/images/pilates3.jpg',
        rating: 4.4,
        price: '要問合せ',
        trial: '要問合せ',
        features: ['ヨガ併設', 'マシンピラティス', 'マスターストレッチ'],
        description:
          'ヨガレッスンに加えマシンピラティスやマスターストレッチを提供。Peak Pilates国際認定資格保有のインストラクターが在籍。',
        address: '青森県青森市古川1-15-10 スカイビル3F',
      },
      {
        name: 'pilates Ao',
        image: '/images/pilates4.jpg',
        rating: 4.3,
        price: '初回お試し 3,500円(税込)',
        trial: '初回お試しレッスン 3,500円',
        features: ['完全予約制', 'パーソナル', 'マスターストレッチ®対応'],
        description:
          '現役スキー指導者による完全予約制のパーソナルピラティススタジオ。スポーツ選手から一般の方まで対応。',
        access: '駐車場1台あり(車来店推奨)',
        address: '青森県青森市はまなす2丁目(詳細は予約後)',
      },
    ],
  },

  'morioka': {
    name: '盛岡市',
    region: '北海道・東北',
    description:
      '岩手県の県庁所在地・盛岡市エリアのピラティススタジオ。盛岡駅周辺や菜園エリアを中心に、完全マンツーマンのマシンピラティスから整体併設スタジオまで幅広く展開。',
    studios: [
      {
        name: 'STUDIO IVY PILATES 盛岡店',
        image: '/images/pilates1.jpg',
        rating: 4.5,
        price: '1レッスン 6,500円～',
        trial: '初回体験無料(0円)',
        features: ['完全マンツーマン', 'マシンピラティス', '個室プライベート空間'],
        description:
          '2026年3月オープンの完全マンツーマン・マシンピラティススタジオ。全国30店舗で相互利用可能。白を基調とした個室で指導。',
        address: '岩手県盛岡市菜園2-3-22 プラザバンベールビル504',
      },
      {
        name: 'ルルト盛岡店',
        image: '/images/pilates2.jpg',
        rating: 4.4,
        price: '要問合せ',
        trial: '初回体験レッスンあり',
        features: ['理学療法士監修', '完全マンツーマン', '姿勢改善'],
        description:
          '理学療法士が考案した完全マンツーマンレッスン。解剖学に基づき姿勢改善・身体機能向上を目指すプログラム。',
        access: 'バス停「盛南大橋南」徒歩3分',
        address: '岩手県盛岡市本宮4-1-32 ラ・ボーヌ101',
      },
      {
        name: 'Smooth Pilates Studio',
        image: '/images/pilates3.jpg',
        rating: 4.3,
        price: 'マシンピラティス 8,000円/60分',
        trial: 'マシンピラティス初回体験 5,000円/60分',
        features: ['パーソナル', '整体併設', 'カスタマイズプログラム'],
        description:
          'ピラティスとコンディショニング・整体を組み合わせたプライベートセッション。当日の体調に合わせカスタマイズ。',
        access: '岩手飯岡駅徒歩25分 / 県北バス津志田北徒歩5分',
        address: '岩手県盛岡市津志田町',
      },
      {
        name: 'Studio -Roots- MORIOKA',
        image: '/images/pilates4.jpg',
        rating: 4.3,
        price: '要問合せ',
        trial: '要問合せ',
        features: ['整体×トレーニング', '医療国家資格保有者', 'ヨガ・ピラティスクラス'],
        description:
          '整体とトレーニングを組み合わせた総合スタジオ。マットグループレッスンとマシンパーソナルレッスンを併用可能。駐車場5台完備。',
        address: '岩手県盛岡市向中野字鶴子7-33',
      },
    ],
  },

  'akita': {
    name: '秋田市',
    region: '北海道・東北',
    description:
      '秋田県の県庁所在地・秋田市エリアのピラティススタジオ。秋田駅周辺やイオンモール秋田周辺で、マシンピラティス専門の女性専用スタジオから暗闇系まで幅広く選べる。',
    studios: [
      {
        name: 'マシンピラティススタジオRintosull イオンモール秋田店',
        image: '/images/pilates1.jpg',
        rating: 4.5,
        price: '月会費 8,800円～16,800円',
        trial: '体験レッスン0円',
        features: ['女性専用', 'マシンピラティス×ホットヨガ', 'LAVA併設'],
        description:
          'LAVA店舗内のマシンピラティススタジオ。マシンピラティスとホットヨガを月会費1つで両方利用可能。',
        access: '秋田駅東口5番バス「イオンモール秋田」下車すぐ',
        address: '秋田県秋田市御所野地蔵田1-1-3 イオンモール秋田 バスロータリー横外部棟',
      },
      {
        name: 'STUDIO CAMAKURA',
        image: '/images/pilates2.jpg',
        rating: 4.6,
        price: 'ライト11,000円/月～プレミアム15,400円/月',
        trial: '無料体験レッスン',
        features: ['ピラティス専門', 'マシン・マットレッスン', '初心者対応'],
        description:
          '秋田県初のピラティス専門スタジオ。マシン(リフォーマー)とマットの両方を提供。初心者向けカウンセリングを実施。',
        access: 'JR秋田駅東口徒歩9分',
        address: '秋田県秋田市東通2-3-1',
      },
      {
        name: 'BEAT PILATES 秋田店',
        image: '/images/pilates3.jpg',
        rating: 4.3,
        price: '公式サイト記載(画像)',
        trial: '体験セッション予約あり',
        features: ['暗闇系マシンピラティス', '回数券無期限繰越', '安定期妊婦OK'],
        description:
          '暗闇系マシンピラティス専門スタジオ。回数券は無期限で繰越可能。クレジットカード決済のみ対応。',
        address: '秋田県秋田市川元山下町2-1 広幡歯科ビル1階',
      },
    ],
  },

  'yamagata': {
    name: '山形市',
    region: '北海道・東北',
    description:
      '山形県の県庁所在地・山形市エリアのピラティススタジオ。山形駅周辺を中心に、女性専用パーソナルスタジオ、理学療法士監修のマシンピラティス、セミパーソナル少人数制まで多様な選択肢。',
    studios: [
      {
        name: '山形ピラティススタジオ シェリ',
        image: '/images/pilates1.jpg',
        rating: 4.5,
        price: '月額使い放題 11,000円(キャンペーン価格)',
        trial: '要問合せ',
        features: ['会員制', 'パーソナル+セルフ', '理学療法士対応'],
        description:
          '10回程のパーソナルレッスン後、360日セルフレッスンができる会員制スタジオ。マシンピラティス・筋トレ・栄養を統合的に提供。',
        address: '山形県山形市宮町4-10-16',
      },
      {
        name: 'STUDIO AIMER (スタジオエメ)',
        image: '/images/pilates2.jpg',
        rating: 4.4,
        price: '月2回14,400円～月4回26,000円',
        trial: '初回体験 6,500円',
        features: ['女性専用', '女性トレーナー', '完全予約制'],
        description:
          '女性専用・女性トレーナーによる完全予約制スタジオ。PHI Pilates資格保有インストラクターによるマシンピラティス。',
        address: '山形県山形市清住町1-1-35',
      },
      {
        name: 'ピラティススタジオDEP 山形店',
        image: '/images/pilates3.jpg',
        rating: 4.5,
        price: 'ライト14,800円/月～プレミアム47,600円/月',
        trial: '初回体験 2,980円(通常9,900円)',
        features: ['完全個室', '理学療法士インストラクター', 'マシンピラティス'],
        description:
          '完全個室のマシンピラティススタジオ。3名の理学療法士がインストラクターとして在籍。駐車場5台完備。',
        access: '山形駅西口から車で約13分',
        address: '山形県山形市嶋南3-8-27',
      },
      {
        name: 'Pilates Mee Life 山形本町店',
        image: '/images/pilates4.jpg',
        rating: 4.4,
        price: '月2回8,800円～通い放題24,600円',
        trial: '体験レッスン 0円(キャンペーン)',
        features: ['少人数セミパーソナル', '当日予約OK', '低価格'],
        description:
          '最大5名までの少人数・セミパーソナル形式。1回あたり820円～の低価格設定で当日予約・当日キャンセルも可能。',
        access: '山形駅徒歩20分',
        address: '山形県山形市本町2-4-15 アーチスセンゾクヤ 3F-D号室',
      },
    ],
  },

  'fukushima': {
    name: '福島市',
    region: '北海道・東北',
    description:
      '福島県の県庁所在地・福島市エリアのピラティススタジオ。福島駅・南福島駅周辺を中心に、新オープンの通い放題マシンピラティスから老舗のクラシカルピラティス専門スタジオまで揃う。',
    studios: [
      {
        name: 'Amigo マシンピラティススタジオ',
        image: '/images/pilates1.jpg',
        rating: 4.4,
        price: '月4回 8,800円～通い放題フル 13,700円',
        trial: '初回無料体験(約60分)',
        features: ['マシンピラティス', '通い放題プランあり', 'フェムケア併設'],
        description:
          '2026年1月オープンの新スタジオ。マシンピラティス・フェムケア・セルフエステを完備。初心者から上級者向け豊富なカリキュラム。',
        address: '福島県福島市御山字稲荷田83-1',
      },
      {
        name: 'ホットヨガ&マシンピラティスLAVA 福島黒岩店',
        image: '/images/pilates2.jpg',
        rating: 4.5,
        price: '4・フルタイム 8,800円/月～16,800円/月',
        trial: '0円体験レッスン(ヨガ/マシンピラティス選択)',
        features: ['女性専用', 'ホットヨガ併設', '暗闇スタジオ'],
        description:
          'ホットヨガとマシンピラティスを両方利用できる女性専用スタジオ。暗闇スタジオ・個室シャワー・水素水サーバー完備。',
        access: '南福島駅徒歩10分',
        address: '福島県福島市黒岩字中沖42-2',
      },
      {
        name: 'マシンピラティススタジオRintosull 福島黒岩店',
        image: '/images/pilates3.jpg',
        rating: 4.5,
        price: '4・フルタイム 8,800円/月～16,800円/月',
        trial: '体験レッスン0円',
        features: ['女性専用', 'マシンピラティス×ホットヨガ', 'LAVA併設'],
        description:
          'LAVA福島黒岩店内のマシンピラティススタジオ。手ぶらで通えるウェア・タオル付き体験。系列全店舗で通い放題プランあり。',
        access: '南福島駅徒歩10分',
        address: '福島県福島市黒岩字中沖42-2(LAVA福島黒岩店内)',
      },
      {
        name: 'ELEMENTピラティス 福島店',
        image: '/images/pilates4.jpg',
        rating: 4.3,
        price: '月4回 22,000円～通い放題 55,000円',
        trial: '体験 3,300円',
        features: ['マシンピラティス通い放題', 'マンツーマン指導', '手ぶらOK'],
        description:
          'マシンピラティスの通い放題型ジム。ウェア・タオル・ドリンク・プロテインが無料レンタル。マンツーマン指導。',
        access: '福島駅から車で8分',
        address: '福島県福島市鳥谷野字岩田52-1',
      },
      {
        name: 'Pilates room PEONIA',
        image: '/images/pilates1.jpg',
        rating: 4.4,
        price: '要問合せ',
        trial: '初回カウンセリング(要予約)',
        features: ['Classical Pilates', 'GRATZ社アパレイタス', '少人数1対1～1対2'],
        description:
          'クラシカルピラティス専用器具アパレイタス(GRATZ社)を完備。作業療法士資格保有のオーナーが主宰する完全予約制の少人数スタジオ。',
        address: '福島県福島市八島田字畑添18-2',
      },
    ],
  },

  // ===== Phase1 拡張: 関東・中部5市（2026-05-27） =====
  // ---------------------------------------------------------------
  // 弘前市（青森県・北海道・東北）
  // ---------------------------------------------------------------
  'hirosaki': {
    name: '弘前市',
    region: '北海道・東北',
    description: '弘前市エリアのピラティススタジオ。弘前駅・弘前公園・土手町周辺の通いやすいスタジオを掲載。',
    studios: [
      {
        name: 'TOMOMIピラティススタジオ',
        image: '/images/pilates2.jpg',
        rating: 4.8,
        price: '無料体験あり',
        trial: '無料体験レッスンあり',
        features: ['少人数制（最大8名）', 'シルクサスペンション', 'オンライン対応'],
        description: '弘前公園近くにある自宅併設のアットホームなスタジオ。2025年で創業10年目。少人数制でシルクサスペンションも提供。',
        access: '弘前公園近く（弘前市鷹匠町）',
        address: '青森県弘前市鷹匠町29-1',
      },
      {
        name: 'pilates K シーナシーナ弘前店',
        image: '/images/pilates2.jpg',
        rating: 4.6,
        price: 'マンスリー4 ¥11,220/月〜',
        trial: '体験レッスン無料',
        features: ['女性専用', 'マシン専門', 'グループレッスン'],
        description: '女性専用マシンピラティス専門スタジオ。リフォーマーを使った17種類のボディメイク特化プログラムを提供。',
        access: 'JR弘前駅中央口より徒歩4分',
        address: '青森県弘前市大字駅前3-2-1 CiiNA CiiNA弘前 8階',
      },
      {
        name: 'ボディスイッチ',
        image: '/images/pilates2.jpg',
        rating: 4.5,
        price: '完全予約制',
        trial: 'インソール無料体験あり',
        features: ['理学療法士監修', '完全予約制', '駐車場3台'],
        description: '理学療法士による身体の痛み・不調改善を目的としたスタジオ。ピラティス／オーダーメイドインソール／コンディショニングを提供。',
        access: '土手町エリア（駐車場3台完備）',
        address: '青森県弘前市大字土手町142-1',
      },
      {
        name: 'ピラティススタジオDEP 弘前店 Felice',
        image: '/images/pilates2.jpg',
        rating: 4.7,
        price: 'ライト 月2回 ¥14,800〜',
        trial: '初回体験 ¥2,980（LINEクーポン適用）',
        features: ['完全個室マシン', '作業療法士監修', '駐車場あり'],
        description: '完全個室のマシンピラティススタジオ。代表は作業療法士資格を持つ。初回体験は全額返金保証付き。',
        access: '弘前駅中央口より徒歩7分',
        address: '青森県弘前市大町2丁目1-7 津軽地所ビル1階 B号室',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 八戸市（青森県・北海道・東北）
  // ---------------------------------------------------------------
  'hachinohe': {
    name: '八戸市',
    region: '北海道・東北',
    description: '八戸市エリアのピラティススタジオ。八戸駅・中心街周辺で通いやすいスタジオを掲載。',
    studios: [
      {
        name: 'ピラティススタジオLEI',
        image: '/images/pilates2.jpg',
        rating: 4.7,
        price: '1セッション45分 ¥8,800',
        trial: '初回体験 ¥6,600（45分）',
        features: ['マシン専門', 'パーソナル', '初心者〜アスリート対応'],
        description: 'ピラティス専用マシンを使ったパーソナルレッスン中心のスタジオ。2026年6月に新幹線八戸駅前へ移転予定。',
        access: '八戸中心街（番町）／2026年6月に八戸駅前へ移転予定',
        address: '青森県八戸市番町3 NCビル6階（移転後：青森県八戸市一番町1丁目2-14 NIビル2階）',
      },
      {
        name: 'ピラティススタジオピース',
        image: '/images/pilates2.jpg',
        rating: 4.6,
        price: '月4回 ¥9,680〜',
        trial: 'マットピラティス体験 ¥3,300／リフォーマー体験 ¥4,400',
        features: ['マシンピラティス', 'シルクサスペンション', '温活サロン併設'],
        description: 'マット／リフォーマー／シルクサスペンション／プライベートと多彩なレッスンを提供。温活サロンRも併設。',
        access: '八戸中心街（十三日町）',
        address: '青森県八戸市十三日町15 フラワーエイトビル6F',
      },
      {
        name: 'ホットヨガロイブ八戸店',
        image: '/images/pilates2.jpg',
        rating: 4.4,
        price: '月4回会員 ¥8,910/月〜',
        trial: '手ぶら体験 0円（ウェア・タオル・水付き）',
        features: ['女性専用', 'ホットピラティス', '駐車場無料'],
        description: '女性専用ホットヨガスタジオ。ホットヨガに加え、ピラティス・エクササイズなど多彩なプログラムを提供。',
        access: 'JR八戸駅東口より南部バス「ラピアバスターミナル」下車徒歩約2分',
        address: '青森県八戸市江陽2丁目15-18 八戸ショッピングセンターラピア別館',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 宇都宮市（関東）
  // ---------------------------------------------------------------
  'utsunomiya': {
    name: '宇都宮市',
    region: '関東',
    description: '宇都宮市エリアのピラティススタジオ。宇都宮駅・東武宇都宮駅周辺の通いやすいスタジオを掲載。',
    studios: [
      {
        name: 'pilates K 宇都宮店',
        image: '/images/pilates2.jpg',
        rating: 4.7,
        price: 'マンスリー4 ¥11,220/月〜',
        trial: '体験レッスン無料',
        features: ['女性専用', 'マシン専門', 'グループレッスン'],
        description: '女性専用マシンピラティス専門スタジオ。リフォーマー使用の17種類のボディメイクプログラムを提供。',
        access: '東武宇都宮駅東口より徒歩4分',
        address: '栃木県宇都宮市池上町4-2 アソルティ宇都宮 1階',
      },
      {
        name: 'ピラティススタジオDEP 宇都宮店',
        image: '/images/pilates2.jpg',
        rating: 4.8,
        price: 'ライト 月2回 ¥17,000〜',
        trial: '初回体験 ¥2,980（LINE限定・全額返金保証付き）',
        features: ['完全個室', '理学療法士在籍', '駐車場5台'],
        description: '完全個室のマシンピラティススタジオ。理学療法士資格を持つインストラクターが在籍。',
        access: 'JR宇都宮駅東口より車で約7分（駐車場5台）',
        address: '栃木県宇都宮市峰1-15-6 渡辺ビル2階',
      },
      {
        name: 'CLUB PILATES 宇都宮店',
        image: '/images/pilates2.jpg',
        rating: 4.6,
        price: '月4回 ¥11,990〜',
        trial: '無料体験30分',
        features: ['世界最大級', 'マシン専門', 'レベル別4段階'],
        description: '世界最大級のマシンピラティススタジオ。最大12名のグループレッスン、レベル別4段階のプログラムを展開。',
        access: 'JR宇都宮駅・東武宇都宮駅より徒歩13分',
        address: '栃木県宇都宮市大通り2-1-4 宇都宮サテライトビル 9F',
      },
      {
        name: 'TSUTAYA Conditioning PILATES 宇都宮駅東口店',
        image: '/images/pilates2.jpg',
        rating: 4.5,
        price: 'サブスク会員 ¥8,800/月〜',
        trial: '体験レッスン 0円',
        features: ['女性専用', '少人数制', '駐車場120分無料'],
        description: '女性専用の少人数制マシンピラティス。「整えるピラティス」をコンセプトに個別サポートを提供。',
        access: 'JR宇都宮駅東口より徒歩約5分／宇都宮ライトレール東宿郷駅より徒歩約3分',
        address: '栃木県宇都宮市元今泉4-19-6 TSUTAYA宇都宮駅東口店 2F',
      },
      {
        name: 'ピラティススタジオ ルルト 宇都宮店',
        image: '/images/pilates2.jpg',
        rating: 4.6,
        price: '営業時間 9:00〜21:00',
        trial: '体験レッスンあり',
        features: ['理学療法士監修', 'マンツーマン', '初心者歓迎'],
        description: '理学療法士監修のマンツーマンピラティススタジオ。初心者大歓迎を掲げ、医学的視点でのレッスンを提供。',
        access: '南宇都宮駅より徒歩約9分（駐車場あり）',
        address: '栃木県宇都宮市菊水町8-1 亀和田第二ビル4F',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 高崎市（関東）
  // ---------------------------------------------------------------
  'takasaki': {
    name: '高崎市',
    region: '関東',
    description: '高崎市エリアのピラティススタジオ。高崎駅周辺の通いやすいマシンピラティス／パーソナルスタジオを掲載。',
    studios: [
      {
        name: 'ラピラティス 高崎店',
        image: '/images/pilates2.jpg',
        rating: 4.7,
        price: 'サブスク月1回 ¥12,000〜',
        trial: '初回体験 ¥3,000（マシンピラティス×骨膜整体®90分）',
        features: ['女性専用', '整体×マシンピラティス', 'パーソナル'],
        description: '整体とマシンピラティスを融合した女性専用スタジオ。骨膜整体®と組み合わせ、肩こり・腰痛にもアプローチ。',
        access: '高崎駅西口より徒歩6分',
        address: '群馬県高崎市旭町21-2 平和パーク 2F',
      },
      {
        name: 'pilates K 高崎店',
        image: '/images/pilates2.jpg',
        rating: 4.6,
        price: 'マンスリー4 ¥11,220/月〜',
        trial: '体験レッスン無料',
        features: ['女性専用', 'マシン専門', 'グループレッスン'],
        description: '女性専用マシンピラティス専門スタジオ。17種類のボディメイク特化プログラムを音楽に合わせて実施。',
        access: 'JR高崎駅西口より徒歩4分',
        address: '群馬県高崎市八島町17-3 SJ八島町ビル 3階',
      },
      {
        name: 'Rintosull 高崎店',
        image: '/images/pilates2.jpg',
        rating: 4.5,
        price: 'マシンピラティス月4回 ¥8,800/月',
        trial: '無料体験あり',
        features: ['女性専用', '初心者向け', '複数店舗通い放題プランあり'],
        description: '女性専用マシンピラティススタジオ。初心者向けプログラム充実、LAVAなど関連施設の通い放題プランも展開。',
        access: '高崎駅西口より「東金井」バス停下車徒歩4分／JR北高崎駅北口より徒歩11分',
        address: '群馬県高崎市飯塚町375-2 1F',
      },
      {
        name: 'THE POSTURE PILATES',
        image: '/images/pilates2.jpg',
        rating: 4.7,
        price: '料金は公式サイト要問合せ',
        trial: '体験レッスンあり',
        features: ['少人数制（最大4名）', '姿勢分析', 'リフォーマー'],
        description: '少人数制リフォーマークラスとパーソナルクラスを展開。最新の姿勢分析アプリやインボディで身体を可視化。',
        access: '高崎駅西口より徒歩6分',
        address: '群馬県高崎市連雀町119 アークプラザ1F',
      },
      {
        name: 'Pilates Studio Obra 高崎あら町店',
        image: '/images/pilates2.jpg',
        rating: 4.7,
        price: 'マンスリープランあり（公式要問合せ）',
        trial: '体験レッスン受付中',
        features: ['理学療法士監修', 'マンツーマン', '悩み別コース'],
        description: '理学療法士によるマンツーマンレッスン。肩こり・腰痛・姿勢改善の3つの悩み別コースを提供。',
        access: '高崎市あら町エリア',
        address: '群馬県高崎市あら町238 Manchester101号',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 甲府市（中部）
  // ---------------------------------------------------------------
  'kofu': {
    name: '甲府市',
    region: '中部',
    description: '甲府市エリアのピラティススタジオ。甲府駅周辺・徳行エリアの通いやすいスタジオを掲載。',
    studios: [
      {
        name: 'studio by iluty 甲府駅前店',
        image: '/images/pilates2.jpg',
        rating: 4.6,
        price: '料金は公式サイト要問合せ',
        trial: '体験レッスン申込ページあり',
        features: ['女性専用', '少人数制', 'ヨガ・ピラティス・姿勢改善'],
        description: '女性専用・会員制のスタジオ。ヨガ・ピラティス・姿勢改善特化型プログラムを少人数制グループで提供。',
        access: '甲府駅周辺（丸の内エリア）',
        address: '山梨県甲府市丸の内2丁目7-2 小林ビル2F',
      },
      {
        name: 'studio by iluty 甲府徳行店',
        image: '/images/pilates2.jpg',
        rating: 4.5,
        price: '料金は公式サイト要問合せ',
        trial: '体験レッスン申込ページあり',
        features: ['男女利用可', '整体×マシンピラティス', 'マシン完備'],
        description: '男性も利用可能なスタジオ。整体×マシンピラティスの独自メソッドを採用。',
        access: '甲府市徳行エリア',
        address: '山梨県甲府市徳行2丁目10-17 ウェルネスゾーンA',
      },
      {
        name: 'Studio Rinto',
        image: '/images/pilates2.jpg',
        rating: 4.7,
        price: '体験レッスン受付中',
        trial: '体験レッスン受付中',
        features: ['完全個室', 'マンツーマン', '女性専用', '子連れOK'],
        description: '完全個室×マンツーマン×女性専用のスタジオ。姿勢改善×ピラティス×筋トレの独自メソッド。2025年9月にリニューアルオープン。',
        access: '甲府駅より車で約10分（無料駐車場4台）',
        address: '山梨県甲府市高畑1丁目20-9',
      },
      {
        name: 'Rephysio（リフィジオ）甲府店',
        image: '/images/pilates2.jpg',
        rating: 4.7,
        price: '50分 ¥8,000／10回券 ¥6,000/回',
        trial: '初回体験 70分 ¥3,000',
        features: ['理学療法士全員在籍', '完全個室マンツーマン', '医学×ピラティス'],
        description: 'インストラクター全員が国家資格を持つ理学療法士。完全個室マンツーマンのマシンピラティスを提供。',
        access: 'スタジオ前駐車場あり',
        address: '山梨県甲府市内（2026年2月オープン／詳細住所は公式問合せ）',
      },
      {
        name: 'Pilates Studio KIZUKI',
        image: '/images/pilates2.jpg',
        rating: 4.6,
        price: '公式サイト要問合せ',
        trial: '公式サイト要問合せ',
        features: ['マンツーマン', 'リフォーマー＆タワー', '初心者〜指導者まで対応'],
        description: 'マンツーマン指導のパーソナルピラティススタジオ。リフォーマー＆タワートレーナー使用、初心者から指導者を目指す方まで対応。',
        access: '甲府市城東エリア',
        address: '山梨県甲府市城東1丁目8-32',
      },
    ],
  },

  // その他のエリアデータは後で追加予定（作業進行中）
}
