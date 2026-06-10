// エリア別スタジオデータ

type Studio = {
  name: string
  officialUrl?: string
  image: string
  rating?: number
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
        image: '/images/studios/pachira-pilates-aomori.webp',
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
        image: '/images/studios/pilates-k-aomori.webp',
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
        image: '/images/studios/yoga-oneself-aomori.webp',
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
        image: '/images/studios/pilates-ao-aomori.webp',
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
        image: '/images/studios/personal-morioka.webp',
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
        image: '/images/studios/luluto-morioka.webp',
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
        image: '/images/studios/gre318-morioka.webp',
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
        image: '/images/studios/roots-morioka-morioka.webp',
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
        image: '/images/studios/rintosull-akita.webp',
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
        image: '/images/studios/studio-camakura-akita.webp',
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
        image: '/images/studios/beat-pilates-akita.webp',
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
        image: '/images/studios/cheri-yamagata.webp',
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
        image: '/images/studios/studio-aimer-yamagata.webp',
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
        image: '/images/studios/dep-pilates-yamagata.webp',
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
        image: '/images/studios/m-pilates-yamagata.webp',
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
        image: '/images/studios/amigo-pilates-fukushima.webp',
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
        image: '/images/studios/yoga-lava-fukushima.webp',
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
        image: '/images/studios/rintosull-fukushima.webp',
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
        image: '/images/studios/kosupapilates-fukushima.webp',
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
        image: '/images/studios/select-type-fukushima.webp',
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
        image: '/images/studios/tomomipilates-hirosaki.webp',
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
        image: '/images/studios/pilates-k-hirosaki.webp',
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
        image: '/images/studios/body-switch-hirosaki.webp',
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
        image: '/images/studios/dep-pilates-hirosaki.webp',
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
        image: '/images/studios/pilates-studio-lei-hachinohe.webp',
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
        image: '/images/studios/pilatesstudiopeace-hachinohe.webp',
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
        image: '/images/studios/hotyoga-loive-hachinohe.webp',
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
        image: '/images/studios/pilates-k-utsunomiya.webp',
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
        image: '/images/studios/dep-pilates-utsunomiya.webp',
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
        image: '/images/studios/clubpilates-utsunomiya.webp',
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
        image: '/images/studios/tc-utsunomiya.webp',
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
        image: '/images/studios/luluto-utsunomiya.webp',
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
        image: '/images/studios/la-pilates-takasaki.webp',
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
        image: '/images/studios/pilates-k-takasaki.webp',
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
        image: '/images/studios/rintosull-takasaki.webp',
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
        image: '/images/studios/theposture-pilates-takasaki.webp',
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
        image: '/images/studios/obra-pilates-takasaki.webp',
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
        image: '/images/studios/studio-iluty-kofu.webp',
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
        image: '/images/studios/studio-iluty-kofu-2.webp',
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
        image: '/images/studios/studio-rinto-kofu.webp',
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
        image: '/images/studios/rephysio-pilates-kofu.webp',
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
        image: '/images/studios/pilates-kizuki-kofu.webp',
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


  // ===== Phase2 拡張: 関東+関西14市 (2026-05-31, 79スタジオ) =====
  // ---------------------------------------------------------------
  // 茅ヶ崎（神奈川県・関東）
  // ---------------------------------------------------------------
  'chigasaki': {
    name: '茅ヶ崎',
    region: '関東',
    description: '茅ヶ崎エリアのピラティススタジオ。JR茅ヶ崎駅周辺の通いやすいスタジオを掲載。',
    studios: [
      {
        name: 'BREST PILATES & BODYMAKE 茅ヶ崎',
        officialUrl: 'https://t.felmat.net/fmcl?ak=C11549B.1.E159704V.U1357808',
        image: '/images/studios/brest.webp',
        price: '月4回 22,880円〜（パーソナル）',
        trial: '体験レッスンあり（詳細は公式サイト参照）',
        features: ['マシンピラティス', 'ウェイトトレーニング', 'パーソナル', '約30分集中'],
        description: 'マシンピラティスとウェイトトレーニングを組み合わせたパーソナルスタジオ。インナーマッスルとアウターマッスルの両方にアプローチし、約30分の効率的なセッションでボディメイクを目指せます。全国展開のURBAN CLASSIC PILATESの姉妹ブランドで、初心者にもトレーナーが丁寧に対応。茅ヶ崎エリアの店舗です。',
        access: '茅ヶ崎エリア（詳細は公式サイト参照）',
        address: '神奈川県茅ヶ崎市（詳細は公式サイト参照）',
        popularPlan: {
          name: 'Personal M4（月4回）',
          description: 'マシンピラティス×ウェイトのパーソナル。月4回で習慣化しやすいプラン。',
          price: '月4回 22,880円（税込）',
        },
        basicInfo: {
          hours: '詳細は公式サイト参照',
          closed: '詳細は公式サイト参照',
          facilities: ['マシンピラティス', 'パーソナル', '更衣室', 'ウェイトエリア'],
        },
      },
      {
        name: 'zen place pilates 茅ヶ崎',
        image: '/images/studios/zenplace-chigasaki.webp',
        rating: 4.6,
        price: 'マットフリー ¥14,960/月〜',
        trial: '体験レッスン予約可',
        features: ['マットグループ', 'リフォーマー', 'プライベート対応'],
        description: 'JR茅ヶ崎駅北口徒歩5分のピラティス・ヨガ専門スタジオ。マットグループ・マシンリフォーマー・プライベートを提供。男性も利用可で全国150店舗相互利用可能。',
        access: 'JR茅ヶ崎駅北口より徒歩5分',
        address: '神奈川県茅ケ崎市新栄町7-5 CHIGASAKI Biz-Naz 4階3室',
      },
      {
        name: 'Rintosull 茅ヶ崎店',
        image: '/images/studios/rintosull-chigasaki.webp',
        rating: 4.5,
        price: 'マンスリー4 ¥8,800/月〜',
        trial: '体験会0円',
        features: ['女性専用', 'マシンピラティス', '2026年1月オープン'],
        description: '2026年1月オープンの女性専用マシンピラティススタジオ。リフォーマーを使ったセミパーソナル形式で87%以上が初心者。来店特典に姿勢診断付き。',
        access: 'JR茅ヶ崎駅北口より徒歩5分',
        address: '神奈川県茅ケ崎市新栄町11-8 BLiX茅ヶ崎 6F',
      },
      {
        name: 'URBAN CLASSIC PILATES 茅ヶ崎店',
        image: '/images/studios/urbanclassic-chigasaki.webp',
        rating: 4.5,
        price: 'マンスリー4 ¥7,800/月〜',
        trial: '無料体験予約可',
        features: ['サーキット形式', 'マシン×TRX', '30分完結'],
        description: 'マシンピラティス×ファンクショナルトレーニングのサーキット形式スタジオ。予約不要で30分完結。インナー・アウター両方の筋肉を効率的に鍛える。',
        access: 'JR茅ヶ崎駅より徒歩2分',
        address: '神奈川県茅ヶ崎市新栄町8-5 山藤ビル 4F',
      },
      {
        name: 'ピラティスミラー 茅ヶ崎',
        image: '/images/studios/konami-chigasaki.webp',
        rating: 4.4,
        price: '月会費 ¥11,000（月6回まで）',
        trial: '体験レッスン 通常¥2,200 → 0円',
        features: ['女性専用', '天井ミラー', '30分・少人数制'],
        description: '天井に鏡を設置し動きを確認しながら取り組むマシンピラティススタジオ。最大8名・30分の少人数制で手ぶら通い可能。コナミ運営。',
        access: 'JR茅ヶ崎駅北口より徒歩3分',
        address: '神奈川県茅ケ崎市新栄町10-12 ゴールド・サン1階',
      },
      {
        name: 'YUZU 茅ヶ崎店',
        image: '/images/studios/yuzu-pilates-chigasaki.webp',
        rating: 4.6,
        price: '月2回 ¥16,800〜',
        trial: '初回体験 ¥500（60分）',
        features: ['完全個室', 'パーソナル', 'キッズスペース完備'],
        description: '2026年5月オープンの完全個室パーソナルマシンピラティススタジオ。全インストラクター有資格、キッズスペース完備で子連れOK。',
        access: '茅ヶ崎駅北口より徒歩5分',
        address: '神奈川県茅ヶ崎市新栄町8-8 コジマビル 602',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 平塚（神奈川県・関東）
  // ---------------------------------------------------------------
  'hiratsuka': {
    name: '平塚',
    region: '関東',
    description: '平塚市エリアのピラティススタジオ。JR平塚駅周辺の通いやすいスタジオを掲載。',
    studios: [
      {
        name: 'Studio U.',
        image: '/images/studios/pilates-studiou-hiratsuka.webp',
        rating: 4.7,
        price: '月額コース ¥14,000〜',
        trial: '初回体験 ¥7,500（約50分）',
        features: ['プライベート', 'マンツーマン', '子連れ可'],
        description: '代官山と湘南平塚のピラティススタジオを経営するUKIが指導するマンツーマン専門スタジオ。マシンリフォーマーと補助機器を使用したオーダーメイドレッスン。',
        access: 'JR平塚駅南口より徒歩5分',
        address: '神奈川県平塚市代官町11-10 GRANDREVE代官町',
      },
      {
        name: 'ピラティスKASANE 平塚店',
        image: '/images/studios/pilates-kasane-hiratsuka.webp',
        rating: 4.6,
        price: 'グループ月会費制／パーソナル月4回¥39,600〜',
        trial: '50分体験レッスン無料',
        features: ['最大11名少人数', '年中無休', 'パーソナル対応'],
        description: '平塚駅徒歩1分のマシンピラティススタジオ。グループは最大11名の少人数制で初心者向けBasic～ステップアップまで対応。営業時間8:00～21:00年中無休。',
        access: 'JR平塚駅北口より徒歩1分',
        address: '神奈川県平塚市宝町2-1 ホーメスト平塚共同ビル3階',
      },
      {
        name: 'Rintosull 平塚店',
        image: '/images/studios/rintosull-hiratsuka.webp',
        rating: 4.5,
        price: '4・フルタイム ¥8,800/月〜',
        trial: '体験会0円（30〜45分）',
        features: ['女性専用', 'セミパーソナル', 'LAVA系列'],
        description: 'LAVA運営の女性専用マシンピラティススタジオ。リフォーマーを使ったスクリーン×インストラクター指導のセミパーソナル形式。',
        access: 'JR平塚駅北口より徒歩2分',
        address: '神奈川県平塚市紅谷町4-3 中秋ビル 6F',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 海老名（神奈川県・関東）
  // ---------------------------------------------------------------
  'ebina': {
    name: '海老名',
    region: '関東',
    description: '海老名駅周辺のピラティススタジオを掲載。小田急線・相鉄本線・JR相模線エリア。',
    studios: [
      {
        name: 'URBAN CLASSIC PILATES 海老名店',
        image: '/images/studios/urbanclassic-ebina.webp',
        rating: 4.5,
        price: 'マンスリー4 ¥8,580/月（税込）',
        trial: '無料体験予約可',
        features: ['サーキット形式', 'マシン×TRX', '30分完結'],
        description: 'ビナウォーク2Fのマシンピラティス×ファンクショナルトレーニングのサーキット形式スタジオ。予約不要で30分完結、初心者対応。',
        access: '小田急線・相鉄本線「海老名」駅より徒歩5分',
        address: '神奈川県海老名市中央1-4-1 ビナウォーク 2F',
      },
      {
        name: 'Melluna Pilates 海老名',
        image: '/images/studios/melluna-pilates-ebina.webp',
        rating: 4.7,
        price: '公式サイトに料金記載なし（体験申込ページで確認）',
        trial: '体験レッスン受付中',
        features: ['完全個室', '女性専用', '理学療法士監修'],
        description: '2025年12月3日グランドオープンの完全個室×マンツーマン×女性専用スタジオ。理学療法士が医学的根拠に基づき指導。子連れOK・マタニティ／産後対応。',
        access: '相鉄本線/海老名駅 徒歩10分',
        address: '神奈川県海老名市中央2-11-20 エスパース23 304号',
      },
      {
        name: 'ボタニカルピラティス 海老名店',
        image: '/images/studios/botanical-pilates-ebina.webp',
        rating: 4.6,
        price: 'マンスリー月2回 ¥16,280〜',
        trial: '0円体験トレーニング（通常¥5,500）',
        features: ['完全個室', 'パーソナル', '植物香る空間'],
        description: '完全個室のパーソナルピラティススタジオ。植物の香りに包まれたボタニカル空間で、有資格インストラクターが個別プログラムを設計。レンタルウェア・水飲み放題で手ぶら通い可能。',
        access: '小田急線/相鉄本線/JR相模線 海老名駅より徒歩5分',
        address: '神奈川県海老名市扇町16番1号',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 横須賀（神奈川県・関東）
  // ---------------------------------------------------------------
  'yokosuka': {
    name: '横須賀',
    region: '関東',
    description: '横須賀エリアのピラティススタジオ。横須賀中央駅・追浜駅周辺の通いやすいスタジオを掲載。',
    studios: [
      {
        name: 'Rintosull 横須賀中央店',
        image: '/images/studios/rintosull-yokosuka.webp',
        rating: 4.5,
        price: '4・フルタイム ¥8,800/月〜',
        trial: '体験会0円（約30分）',
        features: ['女性専用', 'セミパーソナル', 'キャッシュレス'],
        description: '女性専用のマシンピラティススタジオ。大画面スクリーンとインストラクターによるセミパーソナルレッスン。ドライヤー付きパウダースペース・鍵付きロッカー・水素水サーバー完備。',
        access: '京急「横須賀中央駅」東口より徒歩3分',
        address: '神奈川県横須賀市若松町1-21-10 横須賀EAST COURT 2F',
      },
      {
        name: 'LAVA 横須賀中央アネックス店',
        image: '/images/studios/yoga-lava-yokosuka.webp',
        rating: 4.4,
        price: '4・フルタイム ¥8,800/月〜',
        trial: '0円体験予約可',
        features: ['ホットピラティス', '初心者80%以上', '手ぶらOK'],
        description: 'ホットピラティス（60分）を提供する大手LAVAの女性専用ホットスタジオ。系列「マシンピラティスRintosull」も利用可能。ウェア＆タオル無料の手ぶらOK。',
        access: '京急本線「横須賀中央駅」東口より徒歩4分',
        address: '神奈川県横須賀市大滝町2-10 藤掛ビル4F',
      },
      {
        name: 'Body Care Pilates Curari',
        image: '/images/studios/aso2022-yokosuka.webp',
        rating: 4.6,
        price: '公式サイトに月額記載なし（60分通常¥4,400）',
        trial: '初回限定60分 ¥1,100（税込）',
        features: ['完全個室', 'プライベート', '駐車場完備'],
        description: '完全個室のプライベートピラティススタジオ。オーダーメイドレッスン対応で、レンタルウェア完備の手ぶら通いに対応。土曜日のみの営業（2026年1月から）。',
        access: '横須賀市大矢部',
        address: '神奈川県横須賀市大矢部3-12-21 201',
      },
      {
        name: 'Studio Kakera',
        image: '/images/studios/studiokakera-yokosuka.webp',
        rating: 4.7,
        price: '公式サイトに料金記載なし',
        trial: '体験レッスン予約フォームあり（現在キャンセル待ち）',
        features: ['完全個室', '女性専用', 'マンツーマン'],
        description: '完全個室・女性専用のマンツーマンスタジオ。ピラティスとヨガを融合、オンライン対応あり。現在新規会員は満席のためキャンセル待ち状態。',
        access: '京急線「追浜駅」より徒歩4分',
        address: '神奈川県横須賀市追浜本町1-45-6',
      },
    ],
  },

  // ---------------------------------------------------------------
  // たまプラーザ（神奈川県・関東）
  // ---------------------------------------------------------------
  'tamaplaza': {
    name: 'たまプラーザ',
    region: '関東',
    description: 'たまプラーザ駅周辺のピラティススタジオを掲載。東急田園都市線エリア。',
    studios: [
      {
        name: 'Rintosull たまプラーザ店',
        image: '/images/studios/rintosull-tamaplaza.webp',
        rating: 4.5,
        price: '月4回プラン ¥8,800/月〜',
        trial: '無料体験会（30〜45分）',
        features: ['女性専用', 'マシンピラティス', 'インストラクター手厚いサポート'],
        description: 'たまプラーザ駅徒歩3分の女性専用マシンピラティススタジオ。リフォーマーを使った初心者向けプログラムが充実。',
        access: '東急田園都市線「たまプラーザ駅」より徒歩3分',
        address: '神奈川県横浜市青葉区美しが丘1-4-16 オークスビル2階',
      },
      {
        name: 'ピラティスミラー たまプラーザ',
        image: '/images/studios/konami-tamaplaza.webp',
        rating: 4.4,
        price: '月会費 ¥11,000（月6回まで）',
        trial: '体験レッスン 通常¥2,200 → 0円',
        features: ['女性専用', '天井ミラー', '30分・最大6名'],
        description: '天井に鏡を設置し動きを確認しながら取り組むマシンピラティススタジオ。最大6名の少人数制・30分で荷物着替え不要。コナミ運営。',
        access: '東急田園都市線「たまプラーザ駅」北口より徒歩3分',
        address: '神奈川県横浜市青葉区美しが丘5-1-5 第三吉春ビル106',
      },
      {
        name: '8-LAYERS たまプラーザ',
        image: '/images/studios/8-layers-tamaplaza.webp',
        rating: 4.7,
        price: '4回¥33,600（90日有効）〜',
        trial: '体験¥7,000（通常¥8,000）',
        features: ['女性専用', 'プライベート', '完全予約制'],
        description: '女性専用プライベートピラティススタジオ。専用マシンを使ったプライベートと定員2名のコンディショニングクラスに対応。',
        access: '東急田園都市線「たまプラーザ駅」より徒歩3分',
        address: '神奈川県横浜市青葉区美しが丘1-6-5-404',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 松戸（千葉県・関東）
  // ---------------------------------------------------------------
  'matsudo': {
    name: '松戸',
    region: '関東',
    description: '松戸駅周辺のピラティススタジオを掲載。JR・新京成線エリア。',
    studios: [
      {
        name: 'pilates K 松戸店',
        image: '/images/studios/pilates-k-matsudo.webp',
        rating: 4.6,
        price: 'マンスリー4 ¥13,420/月',
        trial: '体験レッスン¥0',
        features: ['女性専用', 'マシンピラティス', '音楽×グループ'],
        description: '女性専用マシンピラティス専門スタジオ。リフォーマーを用いた音楽に合わせたグループレッスンで、強度や目的別の17種類のボディメイクプログラムを提供。',
        access: 'JR松戸駅西口より徒歩1分',
        address: '千葉県松戸市本町1-23 W松戸4階',
      },
      {
        name: 'ピラティスKASANE 松戸店',
        image: '/images/studios/pilates-kasane-matsudo.webp',
        rating: 4.6,
        price: 'グループ月会費制／パーソナル月4回¥39,600〜',
        trial: '50分体験レッスン無料（一部店舗¥980）',
        features: ['最大8名少人数', '年中無休', 'パーソナル対応'],
        description: 'JR/新京成線松戸駅西口徒歩1分のマシンピラティススタジオ。少人数制レッスン（最大8名）と初心者向けBasicプログラムを完備。和モダンな内装。',
        access: 'JR/新京成線松戸駅西口より徒歩1分',
        address: '千葉県松戸市本町1-12 日発ビル4階',
      },
      {
        name: 'B arrow 松戸',
        image: '/images/studios/pilates-matsudo-matsudo.webp',
        rating: 4.7,
        price: '公式サイトに月額記載なし',
        trial: '初回パーソナルレッスン（約70分）',
        features: ['柔道整復師監修', '完全マンツーマン', '24時間LINEサポート'],
        description: '柔道整復師による監修のピラティススタジオ。完全マンツーマンで姿勢改善・産後ケア・骨盤矯正・肩こり腰痛対策に対応。',
        access: '松戸駅西口より徒歩4分',
        address: '松戸駅西口徒歩4分（公式サイトに番地記載なし）',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 市川（千葉県・関東）
  // ---------------------------------------------------------------
  'ichikawa': {
    name: '市川',
    region: '関東',
    description: '市川駅周辺のピラティススタジオを掲載。JR総武線・京成本線エリア。',
    studios: [
      {
        name: 'ウェル・ピラティス 市川店',
        image: '/images/studios/well-pilates-ichikawa.webp',
        rating: 4.7,
        price: 'ライト月2回 ¥17,920/月〜（キャンペーン価格）',
        trial: '体験50分 通常¥11,000 → キャンペーン¥980',
        features: ['マシン×マンツーマン', 'パーソナル', '全額返金保証'],
        description: 'JR市川駅徒歩1分のマンツーマンパーソナルピラティス。身体の歪みと姿勢改善に対応し、初回レッスンで95%以上の姿勢改善率を実現。',
        access: 'JR線「市川駅」より徒歩1分',
        address: '千葉県市川市市川1-2-12 K.M BLDG 401',
      },
      {
        name: 'クラブピラティス 市川店',
        image: '/images/studios/clubpilates-ichikawa.webp',
        rating: 4.6,
        price: 'EFT4（月4回）¥11,990〜',
        trial: '30分の体験レッスン無料',
        features: ['資格保有講師', 'グループ最大12名', '世界最大級チェーン'],
        description: 'JR市川駅徒歩1分の世界最大級マシンピラティススタジオ。資格保持者によるグループ（最大12名）とプライベートレッスンに対応。',
        access: 'JR市川駅より徒歩1分',
        address: '千葉県市川市市川1-6-14 カネコビル2F',
      },
      {
        name: 'URBAN CLASSIC PILATES 市川店',
        image: '/images/studios/urbanclassic-ichikawa.webp',
        rating: 4.5,
        price: 'マンスリー4 ¥8,580/月（税込）',
        trial: '無料見学予約可',
        features: ['サーキット形式', 'マシン×TRX', '30分完結'],
        description: 'マシンピラティスとファンクショナルトレーニングを組み合わせたサーキット形式のスタジオ。予約不要で30分完結、インナー・アウター両方の筋肉を効率的に鍛える。',
        access: 'JR総武線「市川」駅より徒歩1分',
        address: '千葉県市川市市川1-4-16 大杉書店ビル 2F',
      },
      {
        name: 'OLUTANA pilates 市川店',
        image: '/images/studios/olutana-pilates-ichikawa.webp',
        rating: 4.5,
        price: '公式サイトに料金記載なし（体験申込ページで確認）',
        trial: '体験レッスン申込可',
        features: ['女性専用', 'マシンピラティス', '30分完結'],
        description: '初心者向け女性専用マシンピラティススタジオ。定員約20名の完全予約制グループレッスン（30分完結）とパーソナルトレーニングに対応。',
        access: 'JR総武線市川駅より徒歩1分',
        address: '千葉県市川市市川1-4-17 アクティオーレ市川7階',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 流山（千葉県・関東）
  // ---------------------------------------------------------------
  'nagareyama': {
    name: '流山',
    region: '関東',
    description: '流山おおたかの森駅周辺のピラティス・ヨガスタジオを掲載。',
    studios: [
      {
        name: 'zen place pilates 流山おおたかの森',
        image: '/images/studios/zenplace-nagareyama.webp',
        rating: 4.6,
        price: 'マットフリー ¥14,960/月〜',
        trial: '体験レッスン予約可（所要約2時間）',
        features: ['マットグループ', 'リフォーマー', 'プライベート対応'],
        description: '流山おおたかの森駅徒歩5分のピラティス専門スタジオ。マットグループ・リフォーマーグループ・プライベートを提供。男性も利用可能、全国150店舗相互利用可。',
        access: '東武野田線/つくばエクスプレス 流山おおたかの森駅西出口より徒歩5分',
        address: '千葉県流山市おおたかの森西1-7-6 ウィステリア1F',
      },
      {
        name: 'YARD おおたかの森スタジオ',
        image: '/images/studios/yard-yp-nagareyama.webp',
        rating: 4.6,
        price: '公式サイトに料金記載なし（料金ページ参照）',
        trial: '【期間限定】無料体験予約可',
        features: ['少人数制', 'マタニティ対応', '全店相互利用可'],
        description: '流山おおたかの森駅西口徒歩3分のヨガ・ピラティス専門スタジオ。駅近高層階で開放的、産後ヨガなどの女性限定クラスも定期開講。',
        access: 'つくばエクスプレス/東武アーバンパークライン「流山おおたかの森駅」西口より徒歩3分',
        address: '千葉県流山市おおたかの森西1-2-2 SAKURA TERRACE 6F',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 八千代（千葉県・関東）
  // ---------------------------------------------------------------
  'yachiyo': {
    name: '八千代',
    region: '関東',
    description: '八千代エリアのピラティススタジオ。村上駅・八千代緑が丘駅・八千代台駅周辺を掲載。',
    studios: [
      {
        name: 'Rintosull フルルガーデン八千代店',
        image: '/images/studios/rintosull-yachiyo.webp',
        rating: 4.5,
        price: '月4回プラン ¥8,800/月〜',
        trial: '無料体験あり（手ぶらセット付）',
        features: ['男女兼用', 'LAVA併設', 'マシンピラティス'],
        description: 'ホットヨガスタジオLAVA併設のマシンピラティス専門スタジオ。男女兼用で短時間で効率的に鍛えられるリフォーマーレッスンを提供。',
        access: '東葉高速鉄道「村上駅」改札より徒歩5分',
        address: '千葉県八千代市村上南1-3-1 フルルガーデン八千代3F',
      },
      {
        name: 'リアン八千代緑が丘スタジオ',
        image: '/images/studios/yachiyomidorigaoka-yachiyo.webp',
        rating: 4.7,
        price: 'ピラティスグループ月謝¥11,000〜',
        trial: '体験申込フォームあり',
        features: ['最大7名少人数', 'STOTT PILATES認定', 'プライベート'],
        description: 'STOTT PILATES®認定インストラクターによる少人数専門プライベートスタジオ。マットピラティス・マシンピラティス・ヨガを提供。',
        access: '八千代緑が丘駅近郊',
        address: '千葉県八千代市緑が丘西2-2-1 RESIDENCE八千代2F',
      },
      {
        name: 'WELL-FIT 八千代店',
        image: '/images/studios/well-fit-gym-yachiyo.webp',
        rating: 4.6,
        price: '若返りコース月4回 ¥15,400',
        trial: '通常¥3,300 → 0円（5/31までのキャンペーン）',
        features: ['完全予約制・個室', 'マンツーマン', '子連れ対応'],
        description: '完全予約制・完全個室のプライベート空間ジム。採用率3.4%のトレーナー陣によるオーダーメイドプログラム。人工芝完備で子連れ対応。',
        access: '京成線八千代台駅西口より徒歩1分',
        address: '千葉県八千代市八千代台西1-1-6 石井ビル1階',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 上尾（埼玉県・関東）
  // ---------------------------------------------------------------
  'ageo': {
    name: '上尾',
    region: '関東',
    description: '上尾駅周辺のピラティススタジオを掲載。JR高崎線エリア。',
    studios: [
      {
        name: 'ピラティススタジオ Reha fit 上尾店',
        image: '/images/studios/ka-rada-ageo.webp',
        rating: 4.7,
        price: 'パーソナル50分¥11,000／マットフリー会員¥10,000',
        trial: 'パーソナル初回60分¥5,500／マット初回¥1,100',
        features: ['理学療法士監修', 'マット・マシン両対応', '姿勢改善'],
        description: '理学療法士が監修するマット・マシンピラティススタジオ。「インナー呼吸」による姿勢改善とダイエットを軸に、累計2万人以上への指導実績。',
        access: 'JR高崎線上尾駅西口より徒歩約5分',
        address: '埼玉県上尾市柏座1-11-11 サンビューハイツ101',
      },
      {
        name: 'ピラティススタジオ ルルト 上尾店',
        image: '/images/studios/luluto-ageo.webp',
        rating: 4.7,
        price: '月4回 ¥38,400（1回¥9,600）',
        trial: '現在定員満了・新規受付停止中',
        features: ['理学療法士監修', 'マンツーマン', 'マシンピラティス'],
        description: '理学療法士が教育から監修まで全て行うマンツーマン専門スタジオ。リフォーマー・キャデラック・チェアなどマシンを完備。',
        access: 'JR上尾駅より徒歩3分',
        address: '埼玉県上尾市上町1-1-13 新宏ビル2-5号室',
      },
      {
        name: 'Kkot Pilates 上尾店',
        image: '/images/studios/kkotpilates-ageo.webp',
        rating: 4.5,
        price: '公式サイトに料金記載なし',
        trial: '体験レッスン受付中',
        features: ['韓国式マシンピラティス', '少人数制', 'パーソナル対応'],
        description: '韓国式マシンピラティススタジオ。少人数制・パーソナル対応で、姿勢改善・ボディライン引き締め・柔軟性向上をサポート。全員有資格インストラクター。',
        access: '上尾駅直結',
        address: '埼玉県上尾市（公式サイトに番地記載なし）',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 和光市（埼玉県・関東）
  // ---------------------------------------------------------------
  'wakoshi': {
    name: '和光市',
    region: '関東',
    description: '和光市駅周辺のピラティススタジオを掲載。東武東上線・東京メトロエリア。',
    studios: [
      {
        name: 'Rintosull 和光市店',
        image: '/images/studios/rintosull-wakoshi.webp',
        rating: 4.5,
        price: '4・フルタイム ¥8,800/月〜',
        trial: '0円無料体験会（約30分）',
        features: ['女性専用', 'セミパーソナル', 'キャッシュレス'],
        description: '東武東上線和光市駅南口徒歩1分の女性専用マシンピラティススタジオ。スクリーン×アジャストのセミパーソナル形式で87%以上が初心者。',
        access: '東武東上線「和光市駅」南口より徒歩1分',
        address: '埼玉県和光市本町3-13 タウンコートエクセル2F',
      },
      {
        name: 'pilates K 和光市店',
        image: '/images/studios/pilates-k-wakoshi.webp',
        rating: 4.6,
        price: 'マンスリー4 ¥13,420/月',
        trial: '体験レッスン¥0',
        features: ['女性専用', 'マシンピラティス', '17種ボディメイク'],
        description: '女性専用マシンピラティススタジオ。リフォーマーを用いた音楽に合わせたグループレッスンで、お腹・お尻・二の腕・脚・背中など部位別の17種類のプログラムを提供。',
        access: '東武東上線「和光市駅」南口より徒歩2分',
        address: '埼玉県和光市本町1-1 和光フロントワン 2F',
      },
      {
        name: 'ボタニカルピラティス 和光市店',
        image: '/images/studios/botanical-pilates-wakoshi.webp',
        rating: 4.6,
        price: 'マンスリーライト40分 ¥16,280〜',
        trial: '0円体験トレーニング（通常¥5,500）',
        features: ['完全個室', 'マンツーマン', '植物香る空間'],
        description: '完全個室のパーソナルピラティススタジオ。植物の香りに包まれたボタニカル空間で、有資格インストラクターによる個別指導。レンタルウェア・水飲み放題で手ぶら通い可能。',
        access: '東武東上線/東京メトロ和光市駅より徒歩5分',
        address: '埼玉県和光市本町4-6',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 武蔵浦和（埼玉県・関東）
  // ---------------------------------------------------------------
  'musashiurawa': {
    name: '武蔵浦和',
    region: '関東',
    description: '武蔵浦和駅周辺のピラティススタジオを掲載。JR埼京線・武蔵野線エリア。',
    studios: [
      {
        name: 'Rintosull 武蔵浦和店',
        image: '/images/studios/rintosull-musashiurawa.webp',
        rating: 4.5,
        price: 'フォー・フルタイム ¥8,800/月〜',
        trial: '無料体験会あり',
        features: ['女性専用', 'セミパーソナル', '初心者87%以上'],
        description: 'JR武蔵浦和駅東口徒歩2分の女性専用マシンピラティススタジオ。スクリーン×アジャストのセミパーソナルレッスンが特徴。',
        access: 'JR「武蔵浦和駅」東口より徒歩2分',
        address: '埼玉県さいたま市南区白幡5-18-19 MID KUDOS TERRACE 2F',
      },
      {
        name: 'Pilates Studio M',
        image: '/images/studios/pilatesstudiom7576-musashiurawa.webp',
        rating: 4.6,
        price: 'おまかせコース60分 ¥8,000〜',
        trial: '初回限定ベーシックコース60分 ¥7,000',
        features: ['女性専用', '完全予約制', '認定インストラクター'],
        description: 'JR武蔵浦和駅徒歩5分の女性専用完全予約制プライベートピラティススタジオ。ピラティス認定インストラクター在籍、リフォーマー対応。',
        access: 'JR武蔵浦和駅より徒歩5分',
        address: 'JR武蔵野線武蔵浦和駅徒歩5分（公式サイトに番地記載なし）',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 本川越（埼玉県・関東）
  // ---------------------------------------------------------------
  'honkawagoe': {
    name: '本川越',
    region: '関東',
    description: '本川越駅・川越駅周辺のピラティススタジオを掲載。西武新宿線・東武東上線エリア。',
    studios: [
      {
        name: 'Rintosull 本川越店',
        image: '/images/studios/rintosull-honkawagoe.webp',
        rating: 4.5,
        price: '4・フルタイム ¥8,800/月〜',
        trial: '無料体験会（リフォーマー体験）',
        features: ['女性専用', 'セミパーソナル', 'キャッシュレス'],
        description: '西武線本川越駅蔵のまち口徒歩3分の女性専用マシンピラティススタジオ。リフォーマー体験と施設見学・カウンセリング付き無料体験。',
        access: '西武線「本川越駅」蔵のまち口（東口）より徒歩3分',
        address: '埼玉県川越市新富町2-4-2 太陽ビル 3F',
      },
      {
        name: 'pilates K 川越店',
        image: '/images/studios/pilates-k-honkawagoe.webp',
        rating: 4.6,
        price: 'マンスリー4 ¥13,420/月',
        trial: '体験レッスン¥0',
        features: ['女性専用', 'マシンピラティス', '17種ボディメイク'],
        description: '本川越駅徒歩6分・川越駅徒歩7分の女性専用マシンピラティススタジオ。リフォーマーを用いたグループレッスンで部位別ボディメイクプログラムを提供。',
        access: '西武新宿線「本川越駅」より徒歩6分／東武東上線・JR埼京線「川越駅」より徒歩7分',
        address: '埼玉県川越市脇田町12-4 平和ビル脇田町2階',
      },
    ],
  },

  // ---------------------------------------------------------------
  // ふじみ野（埼玉県・関東）
  // ---------------------------------------------------------------
  'fujimino': {
    name: 'ふじみ野',
    region: '関東',
    description: 'ふじみ野駅周辺のピラティススタジオを掲載。東武東上線エリア。',
    studios: [
      {
        name: 'ピラティスミラー ふじみ野',
        image: '/images/studios/konami-fujimino.webp',
        rating: 4.4,
        price: '月会費 ¥11,000（月6回まで）',
        trial: '通常¥2,200 → 0円（2026/6/3〜6/20）',
        features: ['女性専用', '天井ミラー', '最大10名少人数'],
        description: '2026年6月21日グランドオープン予定の女性専用マシンピラティススタジオ。天井に鏡を設置し、最大10名の30分少人数制で着替え不要。コナミ運営。',
        access: '東武東上線ふじみ野駅西口より徒歩2分',
        address: '埼玉県富士見市ふじみ野西1-21-2 澤田ビル2階',
      },
      {
        name: 'Rintosull ふじみ野店',
        image: '/images/studios/rintosull-fujimino.webp',
        rating: 4.5,
        price: '月4回プラン ¥8,800/月〜',
        trial: '無料体験会（30〜45分）',
        features: ['女性専用', 'マシンピラティス', '駅徒歩1分'],
        description: 'ふじみ野駅西口徒歩1分の女性専用マシンピラティススタジオ。リフォーマーを使った初心者向けプログラムが充実。',
        access: '東武東上線ふじみ野駅西口より徒歩1分',
        address: '埼玉県富士見市ふじみ野西1-20-2 第7マツモトビル3F',
      },
      {
        name: 'ホットヨガロイブ ふじみ野店',
        image: '/images/studios/hotyoga-loive-fujimino.webp',
        rating: 4.4,
        price: '月4回会員 ¥8,910／フルタイム ¥13,420',
        trial: '手ぶら体験0円（ウェア・タオル・水付）',
        features: ['女性専用', 'ホットピラティス', '手ぶらOK'],
        description: 'トナリエふじみ野2階のホットヨガスタジオ。ホットピラティスプログラムも導入。手ぶら体験0円で上下ウェア・バスタオル・水2本付。',
        access: '東武東上線「ふじみ野駅」西口より徒歩5分',
        address: '埼玉県ふじみ野市うれし野2-10-87 トナリエふじみ野2階',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 高槻（大阪府・近畿）
  // ---------------------------------------------------------------
  'takatsuki': {
    name: '高槻',
    region: '近畿',
    description: '高槻駅周辺のピラティススタジオを掲載。JR京都線・阪急京都本線エリア。',
    studios: [
      {
        name: 'zen place pilates 高槻',
        image: '/images/studios/zenplace-takatsuki.webp',
        rating: 4.6,
        price: 'マットフリー ¥14,960/月〜',
        trial: 'グループ体験 ¥1,000',
        features: ['マットグループ', 'リフォーマー', 'Basi流派有資格者'],
        description: 'JR高槻駅南口徒歩2分のピラティス専門スタジオ。Basi流派有資格者インストラクターが背骨アプローチを重視した指導。男性も利用可、全国150店舗相互利用可。',
        access: 'JR京都線「高槻駅」南口より徒歩2分／阪急京都本線「高槻市駅」徒歩3分',
        address: '大阪府高槻市紺屋町6-5 イマホリビル 3階',
      },
      {
        name: 'ピラティスミラー 高槻',
        image: '/images/studios/konami-takatsuki.webp',
        rating: 4.4,
        price: '月会費 ¥11,000（月6回まで）',
        trial: '通常¥2,200 → 0円',
        features: ['女性専用', '天井ミラー', '最大7名少人数'],
        description: '天井に鏡を設置し動きを確認しながら取り組むマシンピラティススタジオ。最大7名・30分の少人数制で荷物・着替え不要。コナミ運営。',
        access: 'JR京都線・高槻駅北口より徒歩2分',
        address: '大阪府高槻市芥川町1-2 アクトアモーレ1階',
      },
      {
        name: 'Rintosull 高槻店',
        image: '/images/studios/rintosull-takatsuki.webp',
        rating: 4.5,
        price: 'マシン月4回 ¥8,800/月〜',
        trial: '無料体験（30〜45分）',
        features: ['女性専用', 'セミパーソナル', 'LAVA系列'],
        description: '阪急高槻市駅徒歩1分の女性専用マシンピラティススタジオ。91%が変化を実感、全国250店舗以上で利用可能でLAVAホットヨガとの組合せも可。',
        access: '阪急電鉄「高槻市駅」より徒歩1分',
        address: '大阪府高槻市城北町2-11-1 ヤマキビル2階',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 豊中（大阪府・近畿）
  // ---------------------------------------------------------------
  'toyonaka': {
    name: '豊中',
    region: '近畿',
    description: '豊中駅周辺のピラティススタジオを掲載。阪急宝塚線エリア。',
    studios: [
      {
        name: 'zen place pilates 豊中',
        image: '/images/studios/zenplace-toyonaka.webp',
        rating: 4.6,
        price: 'マットフリー ¥14,960/月〜',
        trial: 'ウェブから体験予約可（所要約2時間）',
        features: ['マットグループ', 'リフォーマー', 'プライベート対応'],
        description: '阪急豊中駅東口徒歩5分のピラティス専門スタジオ。マットグループ・マシンプライベートを提供。男性も利用可で全国150店舗相互利用可能。',
        access: '阪急宝塚線「豊中駅」東口より徒歩5分',
        address: '大阪府豊中市本町3-1-57 ルミエール豊中 5階',
      },
      {
        name: 'Rintosull 豊中店',
        image: '/images/studios/rintosull-toyonaka.webp',
        rating: 4.5,
        price: '4・フルタイム ¥8,800/月〜',
        trial: '無料体験会（約30分）',
        features: ['女性専用', 'セミパーソナル', '駅徒歩1分'],
        description: '阪急豊中駅北改札出口徒歩1分の女性専用マシンピラティススタジオ。87%以上が初心者対応で、リフォーマー体験と姿勢診断付き無料体験。',
        access: '阪急宝塚線「豊中駅」北改札出口より徒歩1分',
        address: '大阪府豊中市玉井町1-2-1 豊中駅前ビルディング5F',
      },
      {
        name: 'CoreSTA（コアスタ）',
        image: '/images/studios/coresta-pilates-toyonaka.webp',
        rating: 4.7,
        price: 'グループ月謝¥13,200／プライベート月2回¥17,600',
        trial: 'グループ体験3回 ¥9,900',
        features: ['STOTT PILATES認定', '最大4名少人数', 'パーソナル対応'],
        description: '世界的に評価されるSTOTT PILATES®メソッドを採用。グループは最大4名の少人数制、マンツーマンのプライベートレッスンも完備。',
        access: '上新田エリア（最寄駅情報は公式サイト記載なし）',
        address: '大阪府豊中市上新田4-16-13-105',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 東大阪（大阪府・近畿）
  // ---------------------------------------------------------------
  'higashiosaka': {
    name: '東大阪',
    region: '近畿',
    description: '東大阪エリアのピラティススタジオを掲載。布施駅・河内小阪駅周辺。',
    studios: [
      {
        name: 'Rintosull 布施店',
        image: '/images/studios/rintosull-higashiosaka.webp',
        rating: 4.5,
        price: '4・フルタイム ¥8,800/月〜',
        trial: '体験会0円（約30分）',
        features: ['女性専用', 'セミパーソナル', 'LAVA系列'],
        description: '近鉄布施駅東北出口徒歩2分の女性専用マシンピラティススタジオ。87%以上が初心者対応で、最大2名のインストラクターによるサポート。',
        access: '近鉄大阪線・奈良線「布施駅」東北出口より徒歩2分',
        address: '大阪府東大阪市長堂2-1-23 布施FUKU BLD 6F',
      },
      {
        name: 'Pilates Synergy 河内小阪スタジオ',
        image: '/images/studios/pilates-synergy-higashiosaka.webp',
        rating: 4.7,
        price: '月4回 ¥34,100（1回¥8,525）',
        trial: '体験¥6,600／入会金¥11,000',
        features: ['マンツーマン50分', '医療系国家資格者監修', 'マシン充実'],
        description: '2026年4月15日オープンのブランド第7号店。医療系国家資格者監修プログラムで、リフォーマー・チェアー・アークバレル完備。15年以上の指導実績トレーナー在籍。',
        access: '近鉄奈良線「河内小阪駅」より徒歩4分',
        address: '大阪府東大阪市小阪1-4-22 2F',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 八尾（大阪府・近畿）
  // ---------------------------------------------------------------
  'yao': {
    name: '八尾',
    region: '近畿',
    description: '近鉄八尾駅周辺のピラティススタジオを掲載。',
    studios: [
      {
        name: 'pilates K 八尾店',
        image: '/images/studios/pilates-k-yao.webp',
        rating: 4.6,
        price: 'マンスリー4 ¥11,220/月',
        trial: '体験レッスン¥0',
        features: ['女性専用', 'マシンピラティス', '17種ボディメイク'],
        description: '近鉄八尾駅中央口徒歩2分の女性専用マシンピラティススタジオ。リフォーマーを使ったグループレッスンで部位別17種類のボディメイクプログラムを提供。',
        access: '近鉄八尾駅中央口より徒歩2分',
        address: '大阪府八尾市光町1-64 八尾オカダビル3F',
      },
      {
        name: 'Rintosull 近鉄八尾店',
        image: '/images/studios/rintosull-yao.webp',
        rating: 4.5,
        price: '月4回プラン ¥8,800/月〜',
        trial: '無料体験あり',
        features: ['女性専用', 'セミパーソナル', 'マシンピラティス'],
        description: '近鉄八尾駅中央北出口徒歩1分の女性専用マシンピラティススタジオ。セミパーソナル相当のサポート体制で、多彩なプログラムを提供。',
        access: '近鉄八尾駅中央北出口より徒歩1分',
        address: '大阪府八尾市光町1-63 サンシャインハイツII 2F',
      },
      {
        name: 'ピラティスアヴニール 八尾店',
        image: '/images/studios/pilates-yao.webp',
        rating: 4.6,
        price: '公式サイトに月額記載なし',
        trial: '90分体験 ¥2,980（マンツーマン）',
        features: ['完全個室', 'プライベート', '無料駐車場'],
        description: '完全個室のプライベートピラティススタジオ。リフォーマー・チェア・バレル完備で、マンツーマン／ペア／セミパーソナル対応。営業7:00〜23:00年中無休。',
        access: '近鉄「八尾駅」中央北/南口より徒歩10分',
        address: '大阪府八尾市桜ヶ丘2-76 井上ビル2階',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 寝屋川（大阪府・近畿）
  // ---------------------------------------------------------------
  'neyagawa': {
    name: '寝屋川',
    region: '近畿',
    description: '寝屋川エリアのピラティススタジオを掲載。京阪本線寝屋川市駅周辺。',
    studios: [
      {
        name: 'Rintosull 寝屋川店',
        image: '/images/studios/rintosull-neyagawa.webp',
        rating: 4.5,
        price: '月4回プラン ¥8,800/月〜',
        trial: '無料体験（約30〜45分）',
        features: ['女性専用', 'マシンピラティス', 'LAVA系列'],
        description: '京阪寝屋川市駅北改札口徒歩1分の女性専用マシンピラティススタジオ。複数ブランド通い放題のフレキシブル会員制度。',
        access: '京阪本線「寝屋川市駅」北改札口より徒歩1分',
        address: '大阪府寝屋川市八坂町17-2 やさかビル2F',
      },
      {
        name: 'pilates K ビバモール寝屋川店',
        image: '/images/studios/pilates-k-neyagawa.webp',
        rating: 4.6,
        price: 'マンスリー4 ¥11,220/月',
        trial: '体験レッスン¥0',
        features: ['女性専用', 'マシンピラティス', '17種ボディメイク'],
        description: '2026年6月28日オープン予定の女性専用マシンピラティススタジオ。リフォーマーを使ったグループレッスンで部位別17種類のプログラムを提供。',
        access: 'バス停「ビバモール 寝屋川」より徒歩1分',
        address: '大阪府寝屋川市寝屋南2-22-1 スーパービバホーム寝屋川 1階',
      },
      {
        name: 'studio shanti',
        image: '/images/studios/studio-shanti-0401-neyagawa.webp',
        rating: 4.5,
        price: 'グループ60分 ¥2,000／パーソナル60分 ¥5,500',
        trial: '体験¥1,500（無料キャンペーンあり）',
        features: ['アロマ空間', 'ヨガ・ピラティス両対応', '個別指導'],
        description: 'アロマが漂う落ち着いた空間でピラティスとヨガを提供。初心者から上級者まで対応し、体幹強化と柔軟性向上を目指すレッスンを展開。',
        access: '京阪本線寝屋川市駅より徒歩約7分',
        address: '大阪府寝屋川市八坂町9-2 オートマシン工業株式会社3階',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 三田（兵庫県・近畿）
  // ---------------------------------------------------------------
  'sanda': {
    name: '三田',
    region: '近畿',
    description: '兵庫県三田市エリアのピラティススタジオを掲載。JR・神鉄三田駅周辺。スタジオ3未満エリア（公式確認2スタジオ）。',
    studios: [
      {
        name: 'Pilates Studio キラリ',
        image: '/images/studios/pilates-studio-kirari-sanda.webp',
        rating: 4.7,
        price: '月会費 ¥12,500／入会金 ¥10,000',
        trial: '体験レッスン ¥8,500',
        features: ['完全予約制', 'マンツーマン', '側弯症改善対応'],
        description: '三田市初の側弯症専門ピラティス。完全予約制でマンツーマンレッスン、専門資格を持つインストラクターによる個別対応で背骨歪み改善に特化。',
        access: '神姫バス「けやき台小学校前」より徒歩3分',
        address: '兵庫県三田市けやき台3-61-5',
      },
      {
        name: 'Pilates muku',
        image: '/images/studios/pilatesmuku-sanda.webp',
        rating: 4.7,
        price: '1回 ¥7,900／4回 ¥30,800〜',
        trial: '体験60分 ¥6,000（姿勢・動作分析込）',
        features: ['理学療法士監修', '女性専用', 'キッズスペース完備'],
        description: '理学療法士監修の女性専用パーソナルピラティススタジオ。完全プライベート空間でお子様連れ利用可、初心者・運動苦手な方にも対応。',
        access: 'JR・神鉄三田駅より徒歩5分',
        address: '兵庫県三田市中央町16-31 2号',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 加古川（兵庫県・近畿）
  // ---------------------------------------------------------------
  'kakogawa': {
    name: '加古川',
    region: '近畿',
    description: '加古川市エリアのピラティススタジオを掲載。JR加古川駅周辺。公式確認1スタジオでスタジオ3未満エリア。',
    studios: [
      {
        name: 'ピラティススタジオ iU 加古川店',
        image: '/images/studios/pilates-ivy-kakogawa.webp',
        rating: 4.6,
        price: '月4回 ¥21,780／月8回 ¥39,600',
        trial: '初回体験あり（料金は公式サイト確認）',
        features: ['完全マンツーマン', '華奢やせ特化', '手ぶらOK'],
        description: '「華奢やせピラティス」に特化した完全マンツーマンのピラティススタジオ。姿勢のクセに合わせたカスタマイズプログラムで、ウェア・タオル・ドリンク無料。',
        access: 'JR加古川駅より徒歩3分',
        address: '兵庫県加古川市加古川町溝之口755 安本ビル4F',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 宝塚（兵庫県・近畿）
  // ---------------------------------------------------------------
  'takarazuka': {
    name: '宝塚',
    region: '近畿',
    description: '宝塚エリアのピラティススタジオを掲載。阪急宝塚駅周辺。公式確認2スタジオでスタジオ3未満エリア。',
    studios: [
      {
        name: 'Rintosull ソリオ宝塚店',
        image: '/images/studios/rintosull-takarazuka.webp',
        rating: 4.5,
        price: '4・フルタイム ¥8,800/月〜',
        trial: '無料体験会',
        features: ['女性専用', '駅直結', 'セミパーソナル'],
        description: '阪急宝塚駅阪急出口（南側）直結の女性専用マシンピラティススタジオ。87%以上が初心者対応で、最大2名のインストラクターによる手厚いサポート。',
        access: '阪急「宝塚駅」阪急出口直結',
        address: '兵庫県宝塚市栄町2-1-1 ソリオ宝塚 1F',
      },
      {
        name: 'むすびピラティス宝塚',
        image: '/images/studios/musubi-pilates-takarazuka.webp',
        rating: 4.7,
        price: '公式サイトに料金記載なし',
        trial: '体験レッスン受付中',
        features: ['女性専用', '元バレエダンサー指導', 'Balanced Body社マシン'],
        description: 'マシンピラティス＆マスターストレッチ専門の女性専用プライベートスタジオ。元バレエダンサーによるパーソナルトレーニングで、Balanced Body社製最高峰マシン完備。',
        access: '宝塚駅より徒歩圏内',
        address: '兵庫県宝塚市御殿山（プライベートスタジオのため詳細は予約確定後案内）',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 芦屋（兵庫県・近畿）
  // ---------------------------------------------------------------
  'ashiya': {
    name: '芦屋',
    region: '近畿',
    description: '芦屋市エリアのピラティススタジオを掲載。JR・阪神芦屋駅周辺。',
    studios: [
      {
        name: 'ipset',
        image: '/images/studios/ipset-ashiya.webp',
        rating: 4.6,
        price: '公式サイトに料金記載なし',
        trial: '公式サイトに記載なし',
        features: ['無料託児サービス', 'マシンピラティス', 'パーソナル'],
        description: '無料託児サービス付きのピラティススタジオ。マシンピラティスとパーソナルトレーニングの2つの専門施設を備える。深い呼吸と姿勢づくりに特化。',
        access: '阪神芦屋駅より徒歩5分／JR芦屋駅より徒歩6分',
        address: '兵庫県芦屋市茶屋之町9-9',
      },
      {
        name: 'Appel（アペル）',
        image: '/images/studios/appel-pilates-ashiya.webp',
        rating: 4.6,
        price: '公式サイトに料金記載なし',
        trial: 'キャンペーン実施中（体験予約可）',
        features: ['グループ＆パーソナル', 'マタニティ対応', '芦屋・岡本展開'],
        description: '「身体を芯から健やかに」をコンセプトに、職人の手による専門性の高いレッスンを提供。グループ／パーソナル両対応でマタニティプログラムも実施。',
        access: '芦屋エリア',
        address: '兵庫県芦屋市松ノ内町1-10 ラリーブ005号室',
      },
      {
        name: 'Vivo Bearsi 芦屋',
        image: '/images/studios/s-vivo-ashiya.webp',
        rating: 4.5,
        price: '公式サイトに料金記載なし（料金案内ページ参照）',
        trial: '見学・体験予約可',
        features: ['女性専用', '溶岩ホットヨガ&マシンピラティス', '駅直結'],
        description: 'モンテメール芦屋本館6Fの女性専用ホットヨガ&マシンピラティスのボディメイクスタジオ。リフォーマー完備、個室シャワー・駐車場2時間無料。',
        access: 'モンテメール芦屋館内（駅直結）',
        address: '兵庫県芦屋市船戸町1-31 モンテメール本館6F',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 川西（兵庫県・近畿）
  // ---------------------------------------------------------------
  'kawanishi': {
    name: '川西',
    region: '近畿',
    description: '川西市エリアのピラティススタジオを掲載。阪急宝塚本線・能勢電鉄川西能勢口駅周辺。',
    studios: [
      {
        name: 'URBAN CLASSIC PILATES 川西店',
        image: '/images/studios/urbanclassic-kawanishi.webp',
        rating: 4.5,
        price: 'マンスリー4 ¥8,580/月（税込）',
        trial: '無料体験予約可',
        features: ['サーキット形式', 'マシン×TRX', '30分完結'],
        description: 'マシンピラティス×ファンクショナルトレーニングのサーキット形式スタジオ。予約不要で30分完結、インナー・アウター両方の筋肉を効率的に鍛える。',
        access: '阪急宝塚本線・能勢電鉄「川西能勢口」駅より徒歩2分',
        address: '兵庫県川西市中央町7-2 川西ウェルビル 6F',
      },
      {
        name: 'Rintosull 川西能勢口店',
        image: '/images/studios/rintosull-kawanishi.webp',
        rating: 4.5,
        price: 'フォープラン ¥8,800/月〜',
        trial: '0円体験（リフォーマー・約30分）',
        features: ['女性専用', 'セミパーソナル', '初心者87%以上'],
        description: '阪急川西能勢口駅徒歩3分の女性専用マシンピラティススタジオ。スクリーン映像とインストラクターのアジャストによるセミパーソナル形式が特徴。',
        access: '阪急「川西能勢口駅」より徒歩3分',
        address: '兵庫県川西市栄町10-5 パルティ川西2F',
      },
      {
        name: 'ピラティスアヴニール 川西能勢口店',
        image: '/images/studios/pilates-kawanishi.webp',
        rating: 4.6,
        price: '公式サイトに月額記載なし（料金表ページ参照）',
        trial: '体験90分 ¥2,980（マンツーマン）',
        features: ['完全個室', 'プライベート', '無料駐車場'],
        description: '完全個室のプライベートピラティススタジオ。最新ピラティスマシン完備で、一流トレーナーによるオーダーメイドプログラム。営業7:00〜23:00年中無休、子連れOK。',
        access: '阪急宝塚本線「川西能勢口駅」11番出口より徒歩6分',
        address: '兵庫県川西市小花2-2-5 IKEビル2階',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 出町柳（京都府・近畿）
  // ---------------------------------------------------------------
  // ※ studio For me は 2025/12/23 で出町柳閉店、2026/1 から一乗寺へ移転。
  //   現状、出町柳駅至近のピラティス専門スタジオは公式確認できる店舗が少ない。
  //   スタジオ3未満エリアのため、エリア説明文に明記。
  // ---------------------------------------------------------------
  'demachiyanagi': {
    name: '出町柳',
    region: '近畿',
    description: '出町柳駅周辺のピラティス・ヨガスタジオ。公式確認スタジオ数が3未満のため、近隣の左京区エリアの選択肢を併記。',
    studios: [
      {
        name: 'studio For me（移転中）',
        image: '/images/studios/studioforme-demachiyanagi.webp',
        rating: 4.6,
        price: '公式サイトの料金ページで確認',
        trial: '公式サイトの予約ページで確認',
        features: ['ヨガ・ピラティス両対応', '少人数制', '左京区一乗寺へ移転'],
        description: '出町柳のテナントビル解体に伴い、2025年12月23日で出町柳スタジオは最終営業日となり、2026年1月から左京区一乗寺へ移転して営業継続中。',
        access: '左京区一乗寺へ移転（詳細は公式サイト参照）',
        address: '京都市左京区一乗寺（移転先・公式サイト参照）',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 東山（京都府・近畿）
  // ---------------------------------------------------------------
  // ※ 京都市東山区内に常設のピラティス専門スタジオが公式確認できず
  //   （祇園エリアにマット中心の小規模教室が存在する程度）。
  //   スタジオ3未満エリアとして取り扱い。利用には四条・河原町周辺
  //   （中京区／下京区）のスタジオを検討するのが現実的。
  // ---------------------------------------------------------------
  'higashiyama': {
    name: '東山',
    region: '近畿',
    description: '京都市東山区エリアのピラティススタジオ。区内にピラティス専門の常設スタジオは公式確認できず、3スタジオ未満。近隣の四条河原町・烏丸エリアの活用が現実的。',
    studios: [
      // 公式サイトで確認できる東山区内常設ピラティス専門スタジオが
      // 見つからなかったため、推測掲載を避け空配列としています。
      // 近隣の四条河原町・烏丸エリアのスタジオ（zen place pilates 京都、
      // pilates K 京都四条烏丸店、URBAN CLASSIC PILATES 四条河原町店等）が
      // 徒歩圏内です。
    ],
  },

  // ---------------------------------------------------------------
  // 嵐山（京都府・近畿）
  // ---------------------------------------------------------------
  // ※ 嵐山駅至近（嵐電嵐山・阪急嵐山・JR嵯峨嵐山）のピラティス専門
  //   常設スタジオは公式確認できず、スタジオ3未満エリアとして取り扱い。
  //   西京区・右京区の桂駅／西院駅圏が現実的なアクセス先。
  // ---------------------------------------------------------------
  'arashiyama': {
    name: '嵐山',
    region: '近畿',
    description: '嵐山エリアのピラティススタジオ。嵐山駅至近の専門店舗は公式確認できず、3スタジオ未満。西京区・右京区側の桂・西院エリアのスタジオを掲載。',
    studios: [
      {
        name: 'Rintosull 京都桂店',
        image: '/images/studios/rintosull-arashiyama.webp',
        rating: 4.5,
        price: '4・フルタイム ¥8,800/月〜',
        trial: '体験会0円（姿勢診断付き）',
        features: ['女性専用', 'セミパーソナル', '嵐山線「桂」駅徒歩1分'],
        description: '阪急京都線・嵐山線「桂」駅西口徒歩1分の女性専用マシンピラティススタジオ。スクリーン×インストラクター指導で20以上のレッスンを提供。',
        access: '阪急京都線・嵐山線「桂」駅西口より徒歩1分',
        address: '京都府京都市西京区川島有栖川町50-2 ECS第24ビル 3F',
      },
      {
        name: 'zen place pilates 京都西院',
        image: '/images/studios/zenplace-arashiyama.webp',
        rating: 4.6,
        price: 'マットフリー ¥16,940/月〜',
        trial: '体験レッスン予約可',
        features: ['マットグループ', 'リフォーマー', '京福嵐山本線徒歩3分'],
        description: '阪急京都線西院駅西改札口徒歩1分／京福嵐山本線西院駅徒歩3分のピラティス専門スタジオ。マット・マシン・プライベートを提供、男性もOK。',
        access: '阪急京都線「西院駅」西改札口より徒歩1分／京福嵐山本線「西院駅」より徒歩3分',
        address: '京都府京都市右京区西院東淳和院町1-1 アフレ西院5F',
      },
    ],
  },

  // ---------------------------------------------------------------
  // 橿原（奈良県・近畿）
  // ---------------------------------------------------------------
  'kashihara': {
    name: '橿原',
    region: '近畿',
    description: '奈良県橿原市エリアのピラティススタジオを掲載。近鉄橿原線・大和八木駅周辺。',
    studios: [
      {
        name: 'Rintosull ツインゲート橿原店',
        image: '/images/studios/rintosull-kashihara.webp',
        rating: 4.5,
        price: '4・フルタイム ¥8,800/月〜',
        trial: '体験会0円（リフォーマー体験）',
        features: ['女性専用', 'セミパーソナル', '駐車場・駐輪場完備'],
        description: '近鉄橿原線「新ノ口」東出口徒歩7分の女性専用マシンピラティススタジオ。スクリーン映像とインストラクター個別サポートで効果的なレッスン体験。',
        access: '近鉄橿原線「新ノ口」東出口より徒歩7分',
        address: '奈良県橿原市十市町1222-1 ツインゲート橿原 2F',
      },
      {
        name: 'pilates K イオンモール橿原店',
        image: '/images/studios/pilates-k-kashihara.webp',
        rating: 4.6,
        price: 'マンスリー4 ¥11,220/月',
        trial: '体験レッスン¥0',
        features: ['女性専用', 'マシンピラティス', '17種ボディメイク'],
        description: 'イオンモール橿原ウエストビレッジ2階の女性専用マシンピラティススタジオ。リフォーマーを用いた音楽に合わせたグループレッスンで、部位別17種類のプログラムを提供。',
        access: 'バス停「イオンモール橿原ウエスト」より徒歩6分／近鉄「浮孔駅」より徒歩11分',
        address: '奈良県橿原市新堂町226 イオンモール橿原ウエストビレッジ メディカルモール 2階',
      },
      {
        name: 'Pilates Studio niu',
        image: '/images/studios/pilatesstudioniu-kashihara.webp',
        rating: 4.6,
        price: '公式サイトに料金記載なし（Price/Ticketページ参照）',
        trial: '体験レッスン可（LINE予約）',
        features: ['マシン・マット・マスターストレッチ', '少人数（最大3名）', 'オンライン対応'],
        description: '一人ひとりの骨格やライフスタイルに応じたエクササイズを提供。プライベート・ペア・グループ（最大3名）レッスンに対応、オンラインレッスンや出張サービスもあり。',
        access: '大和八木駅から徒歩約10分',
        address: '奈良県橿原市新賀町325-3 MdC107',
      },
    ],
  },

  // ===== Phase2 拡張: 中部+北海道+中国+四国+九州28市 (2026-05-31, 91スタジオ) =====
  // ============ 関西残り ============
  'ikoma': {
    name: '生駒',
    region: '関西',
    description: '奈良県北西部・生駒エリアのピラティススタジオ。近鉄生駒駅周辺やイオンモール奈良登美ヶ丘など、住宅地に密着した通いやすいスタジオが揃う。',
    studios: [
      {
        name: 'ピラティススタジオGRANDY 生駒店',
        image: '/images/studios/grandy-pt-ikoma.webp',
        rating: 4.3,
        price: 'リフォーマーグループ 月4回 13,200円〜',
        trial: 'マットグループ体験 1,100円 / リフォーマー体験 2,200円',
        features: ['マット&マシン', '少人数制', 'プライベート対応', '生駒駅徒歩2分'],
        description: '少人数グループ（最大5名）でマットとリフォーマーを学べるスタジオ。プライベートレッスンも展開し、産前産後・肩腰の不調にも対応。',
        access: '近鉄生駒駅 徒歩2分',
        address: '奈良県生駒市元町1丁目5-12 本城ビル3階',
      },
      {
        name: 'ピラティスアヴニール生駒店',
        image: '/images/studios/pilates-ikoma.webp',
        rating: 4.2,
        price: '料金は公式料金表参照',
        trial: '体験レッスン90分 2,980円',
        features: ['完全個室', 'プライベート', '駐車場あり', '年中無休'],
        description: '完全個室のプライベートピラティススタジオ。マンツーマンでフォームを細かく指導。子連れOKで7:00～23:00営業。',
        access: '近鉄生駒駅 北口徒歩3分',
        address: '奈良県生駒市谷田町371-1 田中ビル3階',
      },
      {
        name: 'pilates K イオンモール奈良登美ヶ丘店',
        image: '/images/studios/pilates-k-ikoma.webp',
        rating: 4.1,
        price: 'マンスリー4 11,220円〜 / マンスリー8 15,070円',
        trial: '体験 無料',
        features: ['女性専用', 'マシン専門', '駅徒歩1分', 'ショッピング併設'],
        description: '女性専用マシンピラティス。リフォーマーを使った音楽連動のグループレッスンで、お腹・お尻・脚など部位別17プログラムを展開。',
        access: '学研奈良登美ヶ丘駅 徒歩1分',
        address: '奈良県生駒市鹿畑町3027 イオンモール奈良登美ヶ丘 3F',
      },
    ],
  },

  'kusatsu': {
    name: '草津',
    region: '関西',
    description: '滋賀県南部・草津エリアのピラティススタジオ。JR草津駅・南草津駅周辺で、女性専用や暗闇系まで幅広いタイプが揃う。',
    studios: [
      {
        name: 'スタジオvivi 草津東口',
        image: '/images/studios/studiovivi-kusatsu.webp',
        rating: 4.4,
        price: 'グループレッスン 月4回 13,636円',
        trial: '体験レッスン 無料（通常2,200円）',
        features: ['女性専用', 'タワー付きマシン', '看護師在籍', '少人数8名'],
        description: '医師推奨・看護師在籍のピラティススタジオ。タワー付きマシンで姿勢改善に取り組み、最大8名の少人数制グループを実施。',
        access: 'JR草津駅 徒歩2分',
      },
      {
        name: 'pilates K 南草津店',
        image: '/images/studios/pilates-k-kusatsu.webp',
        rating: 4.1,
        price: 'マンスリー4 11,220円〜 / マンスリー8 15,070円',
        trial: '体験 無料',
        features: ['女性専用', 'マシン専門', '南草津駅徒歩1分', '17プログラム'],
        description: '女性専用マシンピラティス。リフォーマーを使ったグループレッスンと音楽連動レッスンで部位別17プログラム展開。',
        access: 'JR南草津駅 東口徒歩1分',
        address: '滋賀県草津市野路1丁目15-5 フェリエ南草津 4階',
      },
      {
        name: 'BEAT PILATES 滋賀草津店',
        image: '/images/studios/beat-pilates-kusatsu.webp',
        rating: 4.2,
        price: '料金は公式予約サイト参照',
        trial: '体験は予約ページから',
        features: ['暗闇系', 'マシン専門', '回数無期限繰越', '専門スタジオ'],
        description: '暗闇×音楽×マシンピラティスを掛け合わせた専門スタジオ。回数券は無期限繰越可。',
        address: '滋賀県草津市大路2丁目3-1 アトリエ3号館2F',
      },
    ],
  },

  'hikone': {
    name: '彦根',
    region: '関西',
    description: '滋賀県北東部・彦根エリアのピラティススタジオ。JR彦根駅・河瀬駅周辺で、専門マシン・プライベート系まで選択肢が広がる。',
    studios: [
      {
        name: 'PHIピラティススタジオCalm 彦根',
        image: '/images/studios/hikone-hikone.webp',
        rating: 4.0,
        price: '料金は公式コース案内参照',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['PHI Pilates認定', 'マット&マシン', 'エル・スポーツ運営'],
        description: 'エル・スポーツ彦根運営のPHI Pilates認定スタジオ。2023年4月にAttain-Yoga Studio彦根と統合。ヨガクラスも併設。',
      },
      {
        name: 'Pilates Synergy 彦根スタジオ',
        image: '/images/studios/prtimes-hikone.webp',
        rating: 4.2,
        price: '料金は公式サイト要問い合わせ',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['パーソナル専門', '2025年新規開業', '滋賀県初出店', '姿勢改善'],
        description: '2025年1月10日に滋賀県初出店のパーソナル専門ピラティススタジオ。豊富な実践経験を持つインストラクターが姿勢と健康をサポート。',
      },
      {
        name: 'Pilates and Relaxation nun',
        image: '/images/studios/nun-pilates-relaxation-hikone.webp',
        rating: 4.1,
        price: '料金は公式サイト要問い合わせ',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['河瀬駅徒歩4分', 'リラクゼーション併設'],
        description: 'JR河瀬駅徒歩4分のピラティス＆リラクゼーション併設サロン。',
        access: 'JR河瀬駅 徒歩4分',
        address: '滋賀県彦根市南川瀬町',
      },
    ],
  },

  'omihachiman': {
    name: '近江八幡',
    region: '関西',
    description: '滋賀県中部・近江八幡エリアのピラティススタジオ。JR近江八幡駅と八幡堀周辺の歴史的景観のなかにスタジオが点在。',
    studios: [
      {
        name: 'ピラティススタジオS',
        image: '/images/studios/pilates-studio-swan-omihachiman.webp',
        rating: 4.3,
        price: '料金は公式サイト要問い合わせ',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['女性専用', '完全予約制', 'マシン中心', 'プライベート'],
        description: '女性専用プライベートスタジオ。マシンピラティスをメインに、エクササイズに集中できる静かな環境を提供。完全予約制。',
        access: 'JR近江八幡駅 徒歩5分',
        address: '滋賀県近江八幡市桜宮町294番地 YP1ビル 2F',
      },
      {
        name: 'Pilates & Conditioning Studio レジリエンス',
        image: '/images/studios/resilience-pilates-omihachiman.webp',
        rating: 4.4,
        price: '料金は公式サイト要問い合わせ',
        trial: 'プライベート体験 5,500円 / 少人数マット体験 2,750円',
        features: ['マシン専門', '指導歴20年', 'Konnector滋賀初導入', '八幡堀近く'],
        description: '八幡堀そばの石畳の路地にあるピラティス専用スタジオ。指導歴約20年のインストラクターが運動初心者からシニアまで対応。',
        address: '滋賀県近江八幡市大杉町12',
      },
    ],
  },

  'kurashiki': {
    name: '倉敷',
    region: '中国・四国',
    description: '岡山県南部・倉敷エリアのピラティススタジオ。アリオ倉敷やマルナカマスカット倉敷など商業施設併設型を中心に充実。',
    studios: [
      {
        name: 'pilates K マルナカマスカット倉敷店',
        image: '/images/studios/pilates-k-kurashiki.webp',
        rating: 4.1,
        price: 'マンスリー4 11,220円〜 / マンスリー8 15,070円',
        trial: '体験 無料',
        features: ['女性専用', 'マシン専門', '商業施設併設', '17プログラム'],
        description: '女性専用リフォーマーグループ。お腹・お尻・腕・脚・背中の部位別17プログラム。マルナカマスカット店併設で買い物にも便利。',
        access: 'JR伯備線 中庄駅 徒歩13分',
        address: '岡山県倉敷市松島1154-2 マルナカマスカット店別棟 2F',
      },
      {
        name: 'マシンピラティススタジオRintosull アリオ倉敷店',
        image: '/images/studios/rintosull-kurashiki.webp',
        rating: 4.2,
        price: '月4回 8,800円〜 / 通い放題 13,800円',
        trial: '体験会 無料',
        features: ['女性専用', 'マシンピラティス', 'LAVA系列', 'アリオ倉敷'],
        description: 'ホットヨガLAVA系列のマシンピラティス専門店。専用リフォーマーで効率的に体幹を鍛え、しなやかな美ボディラインへ。',
      },
    ],
  },

  // ============ 中部 ============
  'toyota': {
    name: '豊田',
    region: '中部',
    description: '愛知県西三河・豊田エリアのピラティススタジオ。豊田市駅周辺のT-FACEや住宅地のメディカル系スタジオまで選択肢豊富。',
    studios: [
      {
        name: 'Pilates Studio excel 豊田店',
        image: '/images/studios/pilates-excel-toyota.webp',
        rating: 4.3,
        price: 'マンスリー4 9,900円〜 / フルタイム 12,650円',
        trial: '体験 無料（約2時間・手ぶらOK）',
        features: ['女性専用', 'マシン専門', '豊田市駅徒歩1分', '駐車3時間無料'],
        description: '2024年7月オープンの女性専用マシンピラティス。T-FACE A館7階で駐車料金3時間無料。併設ホットヨガLET\'sとのセットプランあり。',
        access: '豊田市駅／新豊田駅 徒歩1分',
        address: '愛知県豊田市若宮町1-57-1 T-FACE A館7F',
      },
      {
        name: 'メディカルフィットネス natural peak',
        image: '/images/studios/naturalpeak-toyota.webp',
        rating: 4.2,
        price: '料金は公式サイト要問い合わせ',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['柔道整復師', 'リハビリ対応', 'マシン完備', 'ジュニア対応'],
        description: '柔道整復師の医療資格を持つ運営によるメディカル系フィットネス。マシンピラティスで姿勢改善・スポーツパフォーマンス向上に対応。',
        address: '愛知県豊田市大林町10-10-6',
      },
      {
        name: 'LIFETIME Pilates',
        image: '/images/studios/lifetimepilates-toyota.webp',
        rating: 4.1,
        price: '料金は公式サイト要問い合わせ',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['女性専門', '2009年開業', 'リフォーマー使用'],
        description: '2009年オープンの女性専門ピラティススタジオ。リフォーマーなど専用器具を使ったピラティスを提供。',
      },
    ],
  },

  'okazaki': {
    name: '岡崎',
    region: '中部',
    description: '愛知県西三河・岡崎エリアのピラティススタジオ。岡崎駅周辺と国道沿いに展開し、マシン系・パーソナル系の両方が揃う。',
    studios: [
      {
        name: 'ピラティスプラス 岡崎',
        image: '/images/studios/pilates-plus-okazaki-okazaki.webp',
        rating: 4.2,
        price: '料金は公式サイト要問い合わせ',
        trial: 'ホットペッパービューティーから予約',
        features: ['女性専用', 'マシン専門', '28歳以上向け', 'パーソナル対応'],
        description: '28歳以上の大人女性向けマシンピラティス。少人数グループとマンツーマンの両方を展開し、姿勢と美しい筋肉づくりにフォーカス。',
        address: '愛知県岡崎市小呂町2丁目7番地1',
      },
      {
        name: 'マシンピラティススタジオRintosull 岡崎店',
        image: '/images/studios/rintosull-okazaki.webp',
        rating: 4.1,
        price: '月4回 8,800円 / 通い放題 13,800円',
        trial: '体験 無料',
        features: ['女性専用', 'マシン専門', 'LAVA系列', '駐車場・駐輪場無料'],
        description: 'LAVA系列の女性専用マシンピラティス。短時間で効率的に全身を鍛えるプログラムで初心者向けサポート充実。日曜定休。',
        access: 'JR東海道本線 岡崎駅 東口より徒歩25分',
        address: '愛知県岡崎市上地5-3-11',
      },
      {
        name: 'Studio MⅡ',
        image: '/images/studios/pilates-studiom2-okazaki.webp',
        rating: 4.2,
        price: '料金は公式サイト要問い合わせ',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['女性限定', 'Merrithew社マシン', '岡崎市初導入'],
        description: '岡崎市初のMerrithew社マシンを採用したピラティススタジオ。女性限定で本格マシンピラティスが受けられる。',
      },
    ],
  },

  'kasugai': {
    name: '春日井',
    region: '中部',
    description: '愛知県名古屋北東部・春日井エリアのピラティススタジオ。STOTT認定スタジオやイオン春日井内のマシン専門店など多彩。',
    studios: [
      {
        name: 'ピラティススタジオSKY 春日井店',
        image: '/images/studios/pilates-sky-kasugai.webp',
        rating: 4.4,
        price: '料金は公式コース案内参照',
        trial: '詳細は公式サイト要問い合わせ（電話0568-41-8550）',
        features: ['STOTT PILATES認定', 'リフォーマー', 'ZENGA', 'プライベート対応'],
        description: '愛知県春日井初のSTOTT PILATES認定専門スタジオ。プライベート・セミプライベート・グループに加え、リフォーマー/マット/ZENGAなど多彩なクラスを提供。',
        address: '愛知県春日井市出川町2-4-12',
      },
      {
        name: 'pilates K イオン春日井店',
        image: '/images/studios/pilates-k-kasugai.webp',
        rating: 4.1,
        price: 'マンスリー4 11,220円 / マンスリー8 15,070円',
        trial: '体験 無料',
        features: ['女性専用', 'マシン専門', '無料駐車場', '17プログラム'],
        description: '女性専用マシンピラティス。イオン春日井店2階で無料駐車場完備。音楽連動グループレッスン17プログラムを展開。',
        access: 'バス停「柏井町4丁目」徒歩1分 / JR勝川駅徒歩15分',
        address: '愛知県春日井市柏井町4-17 イオン春日井 2階',
      },
      {
        name: 'Ciel Pilates 勝川スタジオ',
        image: '/images/studios/ciel-pilates-kasugai.webp',
        rating: 4.0,
        price: '月額5,500円〜',
        trial: '初回40分 0円体験',
        features: ['女性専用', 'マシンサポート', '低価格', '初心者向け'],
        description: '月額5,500円から始められる女性専用マシンピラティス。マシンがサポートしてくれるので初心者でも安心。',
      },
    ],
  },

  'kariya': {
    name: '刈谷',
    region: '中部',
    description: '愛知県西三河・刈谷エリアのピラティススタジオ。刈谷駅周辺の少人数制マシンスタジオが充実。',
    studios: [
      {
        name: 'Pilates Mee 刈谷店',
        image: '/images/studios/m-pilates-kariya.webp',
        rating: 4.6,
        price: 'セミパーソナル 月2回 11,000円〜 / 通い放題 37,500円',
        trial: '体験 無料（2026年6月30日まで）',
        features: ['セミパーソナル3名', '全国129店相互利用', '当日予約OK', '駅徒歩3分'],
        description: '最大3名のセミパーソナル形式で効果実感しやすいマシンピラティス。当日予約・キャンセル可、全国129店舗で相互利用可能。6ヶ月継続率96.3%。',
        access: '刈谷駅 徒歩3分',
        address: '愛知県刈谷市相生町1丁目31 第5セントラルビル 4階D号室',
      },
      {
        name: 'ピラティススタジオ Swan 刈谷店',
        image: '/images/studios/pilates-studio-swan-kariya.webp',
        rating: 4.3,
        price: '料金は公式サイト要問い合わせ',
        trial: '初回体験あり',
        features: ['マシン専門', 'リフォーマー/キャデラック/チェア', '大人女性向け'],
        description: '刈谷では希少なキャデラックやチェアを備えたマシンピラティス専門スタジオ。骨格に着目したパーソナル中心のレッスン。',
      },
      {
        name: 'FRANKLIN METHOD STUDIO KARIYA',
        image: '/images/studios/franklin-method-studio-kariya-kariya.webp',
        rating: 4.2,
        price: '料金は公式サイト要問い合わせ',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['パーソナル中心', 'ヨガ・グループも併設', '国家資格保有'],
        description: '刈谷市一ツ木町のボディワークスタジオ。パーソナルトレーニングを中心にピラティス・ヨガのグループレッスンも提供。',
        address: '愛知県刈谷市一ツ木町',
      },
    ],
  },

  'numazu': {
    name: '沼津',
    region: '中部',
    description: '静岡県東部・沼津エリアのピラティススタジオ。沼津駅周辺と東名沼津IC周辺、ららぽーと沼津内まで広く展開。',
    studios: [
      {
        name: 'ポンテ・マル・スパッツィオ',
        image: '/images/studios/pontiamo-numazu.webp',
        rating: 4.4,
        price: '入会金・月謝0円（都度払い）',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['入会金不要', '都度払い', '床暖房完備', '開講16年目'],
        description: 'ヨガ＆ピラティス専門スタジオ。入会金・年会費不要の都度払いで通いやすい。床暖房完備でアロマが香る空間。',
        address: '静岡県沼津市本町14番地',
      },
      {
        name: 'PILATES ONE 沼津店',
        image: '/images/studios/pilatesone2024-numazu.webp',
        rating: 4.3,
        price: '月額15,000円（2回～）/ 1回7,500円〜',
        trial: '初回 無料',
        features: ['マンツーマン', 'マシン&マット', '駅近', '10～21時営業'],
        description: '2025年4月にオープンしたパーソナルピラティススタジオ。マシンとマットで無理なく続けやすい指導。営業時間10:00～21:00。',
        address: '静岡県沼津市御幸町23-36 清水ビル1階',
      },
      {
        name: 'マシンピラティススタジオRintosull ららぽーと沼津店',
        image: '/images/studios/rintosull-numazu.webp',
        rating: 4.2,
        price: '月4回 8,800円 / 2店舗通い放題 13,800円',
        trial: '体験会 無料',
        features: ['女性専用', 'マシン専門', 'ららぽーと沼津', '無料駐車場'],
        description: 'ららぽーと沼津1F・LAVA系列の女性専用マシンピラティス。レッスン受講者の91%が変化を実感。日曜定休。',
        address: '静岡県沼津市東椎路字東荒301-3 ららぽーと沼津1F',
      },
    ],
  },

  'fuji': {
    name: '富士',
    region: '中部',
    description: '静岡県中部・富士市エリアのピラティススタジオ。富士山を望むエリアでクラシカル系と少人数マシン系の選択肢が揃う。',
    studios: [
      {
        name: 'Classical Pilates E-studio',
        image: '/images/studios/e-studio-2022-fuji.webp',
        rating: 4.3,
        price: '料金は公式サイト要問い合わせ',
        trial: '体験レッスンあり',
        features: ['クラシカルピラティス', 'GRATZマシン', 'PMA認定', '駐車場5台'],
        description: 'ジョセフ・ピラティス氏の原法に基づくクラシカルピラティス専門スタジオ。GRATZマシン複数台完備でマット＆マシン両指導。',
        address: '静岡県富士市今泉2-13-18 今泉ビル2階',
      },
      {
        name: 'ピラティスKASANE 富士店',
        image: '/images/studios/pilates-kasane-fuji.webp',
        rating: 4.4,
        price: 'グループ月会費制 / パーソナル月4回 39,600円〜',
        trial: '体験 無料',
        features: ['少人数制', '理学療法士', '無料駐車場', '年中無休'],
        description: '6～12名の少人数制マシンピラティス。インストラクターは理学療法士資格保有。8:00～21:00、年中無休で通いやすい。',
        access: '富士駅より車で8分',
        address: '静岡県富士市青葉町305',
      },
    ],
  },

  'mishima': {
    name: '三島',
    region: '中部',
    description: '静岡県東部・三島エリアのピラティススタジオ。三島駅周辺にパーソナル専門店や少人数制グループ系が集まる。',
    studios: [
      {
        name: 'T\'s Pilates',
        image: '/images/studios/ts-pilates-mishima.webp',
        rating: 4.5,
        price: '月額プラン制（入会金・解約料なし）',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['マシン専門', 'リフォーマー/タワー/チェア', 'パーソナル', '完全予約制'],
        description: 'パーソナルマシンピラティス専門店。初回95%が姿勢改善を実感。4ヶ月の完全個別ダイエットプログラムも提供。駐車場2台。',
        access: 'JR東海道線 三島駅南口 徒歩9分',
        address: '静岡県三島市中央町6-10 スクエアM1 102',
      },
      {
        name: 'Pilatesmile 三島スタジオ',
        image: '/images/studios/pilatesmile-mishima.webp',
        rating: 4.3,
        price: '料金は公式サイト要問い合わせ',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['マシン&マット', 'グループ&プライベート', 'リフォーマー完備'],
        description: '国道1号線「初音入口」バス停近くの中核スタジオ。リフォーマーなど専用機器を完備し、グループとプライベート両方に対応。',
        access: 'バス停「初音入口」すぐ',
      },
      {
        name: 'PILATES ONE 三島広小路店',
        image: '/images/studios/pilatesone-mishima.webp',
        rating: 4.2,
        price: '月額15,000円（2回～）',
        trial: '体験受付停止中（既存店）',
        features: ['低価格継続型', 'マンツーマン', '三島駅徒歩7分'],
        description: '「低価格継続型」をコンセプトにしたパーソナルピラティススタジオ。マンツーマンで質の高い指導を提供。',
        access: '三島駅 徒歩7分',
      },
    ],
  },

  'ogaki': {
    name: '大垣',
    region: '中部',
    description: '岐阜県西部・大垣エリアのピラティススタジオ。大垣駅周辺とイオンモール大垣まわりに女性向けスタジオが集まる。',
    studios: [
      {
        name: 'M\'sピラティス',
        image: '/images/studios/mspilates-ogaki.webp',
        rating: 4.1,
        price: '料金は公式サイト要問い合わせ',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['個別姿勢分析', '駐車場あり', '耳つぼ併設'],
        description: '個別の姿勢分析に基づくカスタマイズレッスン。女性特有の悩みに対応し、楽しく続けられるエクササイズを提供。',
        address: '岐阜県大垣市禾森町地内',
      },
      {
        name: 'ピラティス＆ヨガスタジオ priya',
        image: '/images/studios/ai-priya-ogaki.webp',
        rating: 4.3,
        price: '料金は公式サイト要問い合わせ',
        trial: '公式LINEまたは電話',
        features: ['完全予約制', 'マシン専門', '40-50代向け', 'お腹痩せメソッド'],
        description: '完全予約制の個別レッスンスタジオ。40代・50代を中心にお腹痩せ・姿勢改善・腰肩こり改善に特化。',
        access: '樽見鉄道 東大垣駅 徒歩10分',
        address: '岐阜県大垣市和合本町2-143-1',
      },
      {
        name: 'マシンピラティススタジオRintosull イオンモール大垣店',
        image: '/images/studios/rintosull-ogaki.webp',
        rating: 4.1,
        price: '月4回 8,800円 / フルタイム 16,800円',
        trial: '体験 無料',
        features: ['女性専用', 'マシン&ホットヨガ', 'LAVAコラボ', 'イオン内'],
        description: 'LAVAとのコラボ店舗でマシンピラティスとホットヨガ両方利用可能。手ぶらセット付き。木曜定休。',
        address: '岐阜県大垣市外野2-100 イオンモール大垣2F',
      },
      {
        name: 'LIFEMAKE 岐阜大垣店',
        image: '/images/studios/personalkoba2019-ogaki.webp',
        rating: 4.2,
        price: '月額11,000円〜（30分コース）',
        trial: '体験 1,000円',
        features: ['マンツーマン', '姿勢診断', '手ぶらOK', '駐車場あり'],
        description: 'マンツーマンのパーソナルピラティス。姿勢診断付きで初心者にも安心。営業時間8:00～23:00、不定休。',
        address: '岐阜県大垣市千森町6丁目13番地 ヨシムラビル3F',
      },
    ],
  },

  'kakamigahara': {
    name: '各務原',
    region: '中部',
    description: '岐阜県南部・各務原エリアのピラティススタジオ。イオンモール各務原内のマシン専門店や鵜沼のパーソナル系まで揃う。',
    studios: [
      {
        name: 'マシンピラティススタジオRintosull イオンモール各務原店',
        image: '/images/studios/rintosull-kakamigahara.webp',
        rating: 4.2,
        price: '月4回 8,800円 / 2店舗通い放題 13,800円',
        trial: '体験会 無料',
        features: ['女性専用', '岐阜県初出店', 'イオンモール内', 'マシン専門'],
        description: '岐阜県初出店のRintosull。2025年2月1日グランドオープン。専用マシンで効率的にトレーニング、複合フィットネス併用可。',
        access: '名鉄各務原線 新加納駅 徒歩12分',
        address: '岐阜県各務原市那加萱場町3-8 イオンモール各務原インター3F',
      },
      {
        name: 'LIFEMAKE 各務原鵜沼店',
        image: '/images/studios/personalkoba2019-kakamigahara.webp',
        rating: 4.3,
        price: '月額11,000円〜（30分コース）',
        trial: '体験 1,000円（通常11,000円）',
        features: ['マンツーマン', '半個室', '女性トレーナー対応可', '駐車場2台'],
        description: 'マンツーマンのパーソナルピラティススタジオ。半個室で集中して取り組める。月～金8:00～23:00、土日も対応。',
        address: '岐阜県各務原市鵜沼羽場町5丁目153 三品マンション1階中号',
      },
      {
        name: 'ホットヨガロイブ各務原店',
        image: '/images/studios/loive-kakamigahara.webp',
        rating: 4.0,
        price: '料金は公式サイト要問い合わせ',
        trial: '手ぶら体験 0円',
        features: ['女性専用', 'ホットヨガ', 'ピラティス併設', '駐車場あり'],
        description: '女性専用ホットヨガスタジオでピラティスプログラムも併設。バリエーション豊富なレッスンを展開。',
      },
    ],
  },

  'tajimi': {
    name: '多治見',
    region: '中部',
    description: '岐阜県東濃・多治見エリアのピラティススタジオ。マシン専門店と理学療法士監修系が中心。',
    studios: [
      {
        name: 'Pilates Studio fluffy 多治見店',
        image: '/images/studios/p-fluffy-tajimi.webp',
        rating: 4.3,
        price: '料金は公式サイト要問い合わせ',
        trial: 'グループレッスン体験 無料キャンペーン中',
        features: ['BASI Pilates', 'グループ&プライベート', '入会金無料CP'],
        description: 'BASI Pilates認定インストラクター在籍のマシンピラティススタジオ。姿勢改善・肩こり腰痛など日常の悩みに対応。',
        address: '岐阜県多治見市住吉町7-29-1 ファインビル住吉201',
      },
      {
        name: 'ピラティススタジオn',
        image: '/images/studios/pilates-tajimi.webp',
        rating: 4.5,
        price: '月謝制（公式予約サイト要確認）',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['理学療法士', 'マンツーマン', 'マシン完備', '整体併設'],
        description: '理学療法士資格を持つオーナーによるマンツーマン・オーダーメイドピラティス。多治見・美濃加茂エリアからも来店。',
        address: '岐阜県可児市下恵土1659-4',
      },
      {
        name: 'V BODY STUDIO 多治見店',
        image: '/images/studios/v-body-studio-tajimi.webp',
        rating: 4.1,
        price: '料金は公式COURSE参照',
        trial: '体験 2,500円（通常5,000円）',
        features: ['完全マンツーマン', '最新マシン', '食事指導', '無料カウンセリング'],
        description: '完全マンツーマンのパーソナルピラティス＆トレーニング。マシンピラティス・パーソナルストレッチも提供。',
      },
    ],
  },

  'matsumoto': {
    name: '松本',
    region: '中部',
    description: '長野県中部・松本エリアのピラティススタジオ。松本駅周辺と郊外の隠れ家系まで多彩。',
    studios: [
      {
        name: 'ピラティススタジオDEP 長野松本店 Noah',
        image: '/images/studios/dep-pilates-matsumoto.webp',
        rating: 4.5,
        price: 'ライト 14,800円/月 / スタンダード 28,800円 / プレミアム 47,600円',
        trial: '体験 2,980円（通常9,900円・70%OFF）',
        features: ['完全個室', '理学療法士', '駐車場4台', '返金保証'],
        description: '完全個室のマシンピラティス。理学療法士兼複数のピラティス認定資格保有者が指導。初回体験は効果体感できなければ返金保証。',
        access: '松本駅から1.2km（徒歩16分・車5分）',
        address: '長野県松本市本庄2-3-18 2階7号室',
      },
      {
        name: 'ピラティススタジオFLEXI 松本店',
        image: '/images/studios/flexi-pilates-matsumoto.webp',
        rating: 4.3,
        price: '料金はコースページ参照',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['リフォーマー/キャデラック/バレル/チェア', '隠れ家空間', 'グループ&パーソナル'],
        description: '本場アメリカのピラティススタジオをイメージした隠れ家的空間。器具が充実しグループ・パーソナル・ペアに対応。',
        address: '長野県松本市神林2948-7',
      },
      {
        name: 'Pilates Studio L',
        image: '/images/studios/pilates-studio-l-matsumoto.webp',
        rating: 4.2,
        price: '月4回 16,000円（1回4,000円）/ 月2回 8,600円',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['マシン専門', '最大4名グループ', '松本市初', '駐車場4台'],
        description: '松本市初のグループレッスン可能なマシンピラティス専門スタジオ。最大4名で丁寧な指導。',
        address: '長野県松本市筑摩2-14-3 2F',
      },
    ],
  },

  'karuizawa': {
    name: '軽井沢',
    region: '中部',
    description: '長野県東部・軽井沢エリアのピラティススタジオ。リゾート地ならではのプライベート専門系が中心。※公式確認できたスタジオが少ないエリア。',
    studios: [
      {
        name: '505 Care Core Pilates（御代田町）',
        image: '/images/studios/505ccp-karuizawa.webp',
        rating: 4.4,
        price: 'プライベートパーソナル60分 7,800円 / カスタムCare&Pilates 8,200円',
        trial: '体験ピラティス30分 2,000円 / ストレッチ&ピラティス体験60分 2,000円',
        features: ['日本代表トレーナー', '鍼灸整骨院併設', 'パーソナル', '個別評価'],
        description: '現役日本代表チームトレーナーが指導するピラティススタジオ。鍼灸整骨院を併設し個別評価に基づくケアとピラティスを提供。',
        address: '長野県北佐久郡御代田町馬瀬口451-6 2F',
      },
    ],
  },

  // ============ 北海道 ============
  'asahikawa': {
    name: '旭川',
    region: '北海道・東北',
    description: '北海道中部・旭川エリアのピラティススタジオ。女性専用パーソナル系とマシン専門のフランチャイズが揃う。',
    studios: [
      {
        name: 'PILATES Body Make Studio ānuenue',
        image: '/images/studios/pilatesanuenue-asahikawa.webp',
        rating: 4.4,
        price: 'パーソナル60分 7,500円 / グループ50分 2,500円',
        trial: 'パーソナル体験60分 6,500円',
        features: ['女性専用', 'パーソナル中心', 'インナーマッスル', 'グループ対応'],
        description: '女性専用のピラティスボディメイクスタジオ。インナーマッスル中心の身体機能改善に特化したアプローチ。',
        address: '北海道旭川市東光1条8丁目',
      },
      {
        name: 'マシンピラティススタジオRintosull イオン旭川春光店',
        image: '/images/studios/rintosull-asahikawa.webp',
        rating: 4.2,
        price: '月4回 8,800円 / 2店舗通い放題 13,800円',
        trial: '体験会 無料',
        features: ['女性専用', 'マシン専門', 'LAVA系列', '駅近2分'],
        description: 'LAVA系列の女性専用マシンピラティス。初心者向けプログラム完備でインストラクターサポートあり。',
        access: '旭川電気軌道「大町2条10丁目」徒歩2分',
        address: '北海道旭川市春光町10-2 イオン旭川春光1F',
      },
      {
        name: 'ホットヨガロイブ旭川店',
        image: '/images/studios/loive-asahikawa.webp',
        rating: 4.0,
        price: '料金は公式サイト要問い合わせ',
        trial: '手ぶら体験 0円',
        features: ['女性専用', 'ホットヨガ', 'ピラティス併設'],
        description: '女性専用ホットヨガスタジオでピラティスプログラムも併設。バリエーション豊富なレッスン。',
      },
    ],
  },

  'hakodate': {
    name: '函館',
    region: '北海道・東北',
    description: '北海道南部・函館エリアのピラティススタジオ。MEGAドン・キホーテ内マシン専門店が中心。',
    studios: [
      {
        name: 'pilates K 函館店',
        image: '/images/studios/pilates-k-hakodate.webp',
        rating: 4.2,
        price: 'マンスリー4 11,220円 / マンスリー8 15,070円',
        trial: '体験 無料',
        features: ['女性専用', 'マシン専門', '北海道初出店', '17プログラム'],
        description: '2025年1月29日オープンの女性専用マシンピラティス。MEGAドン・キホーテ函館店地下1階で買い物ついでに通える。',
        access: 'バス停「中央小学校前」徒歩1分',
        address: '北海道函館市美原1丁目7-1 MEGAドン・キホーテ函館店 地下1階',
      },
      {
        name: 'ルルト 函館店',
        image: '/images/studios/luluto-hakodate.webp',
        rating: 4.3,
        price: '料金は公式サイト要問い合わせ',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['理学療法士監修', 'マシン専門', 'リフォーマー', '17プログラム'],
        description: '理学療法士監修のマシンピラティス。専用リフォーマー全面導入で部位別17プログラム。',
        access: '五稜郭駅より車で10分',
      },
      {
        name: 'K.pilates',
        image: '/images/studios/kpilates-hakodate.webp',
        rating: 4.1,
        price: '料金は公式サイト要問い合わせ',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['函館エリア', 'パーソナル対応'],
        description: '函館市内で展開するピラティススタジオ。',
      },
    ],
  },

  'tomakomai': {
    name: '苫小牧',
    region: '北海道・東北',
    description: '北海道胆振・苫小牧エリアのピラティススタジオ。マシン専門系とパーソナルジム系が並ぶ。',
    studios: [
      {
        name: 'PILATES STUDIO RiSE 三光店',
        image: '/images/studios/pilatesstudiorise-tomakomai.webp',
        rating: 4.4,
        price: '月4回 24,000円（1回6,000円）/ 単発1回 7,500円',
        trial: '無料キャンペーン中（通常2,200円）',
        features: ['マシン専門', 'マンツーマン', '姿勢改善特化', '営業9:00-21:30'],
        description: 'マシンピラティス専門スタジオ。姿勢改善・肩こり腰痛予防・太りにくい身体作りに特化。会員大半が運動初心者で個別対応。',
        address: '苫小牧市三光町5丁目24-20 コート・ドエル1階',
      },
      {
        name: 'ホットヨガロイブ苫小牧店',
        image: '/images/studios/hotyoga-loive-tomakomai.webp',
        rating: 4.1,
        price: '月4回 8,910円 / フルタイム 12,320円〜',
        trial: '手ぶら体験 0円',
        features: ['女性専用', 'ホットヨガ&ピラティス', '駅前1分', '駐車場あり'],
        description: 'JR苫小牧駅前のMEGAドン・キホーテ3階の女性専用ホットヨガ。ピラティスプログラムも豊富。駐車場3時間無料。',
        access: 'JR苫小牧駅 徒歩1分',
        address: '北海道苫小牧市木場町1-6-1 MEGAドン・キホーテ苫小牧店3階',
      },
      {
        name: 'パーソナルジムDELIGHT AKENO ROOM',
        image: '/images/studios/personal-gym-delight-tomakomai.webp',
        rating: 4.3,
        price: 'マシン4回 30,800円 / 8回 52,800円 / ペア1回 10,000円',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['完全個室', 'PHI Pilates', 'リフォーマー導入', 'マンツーマン'],
        description: '苫小牧初の「リフォーマー」導入マシンピラティス。完全個室の限定メニュー。JATI・PHI Pilates基本認定インストラクター在籍。',
        address: '苫小牧市明野新町6-24-17',
      },
    ],
  },

  'obihiro': {
    name: '帯広',
    region: '北海道・東北',
    description: '北海道十勝・帯広エリアのピラティススタジオ。LAVA系列のマシン専門店が中心。※公式確認できたスタジオが少ないエリア。',
    studios: [
      {
        name: 'マシンピラティススタジオRintosull 帯広店',
        image: '/images/studios/rintosull-obihiro.webp',
        rating: 4.2,
        price: '月4回 8,800円 / 2店舗通い放題 10,800円',
        trial: '体験 無料（3ヶ月CP 1,980円/月）',
        features: ['女性専用', 'マシン専門', 'LAVAコラボ', 'ホットヨガ併用可'],
        description: 'WOW帯広1F・LAVA帯広店内のマシンピラティス専門店。ヨガとマシンピラティス両方利用可能。',
        access: 'バス「西5条30丁目」徒歩5分 / 帯広駅から南へ車7分',
        address: '北海道帯広市西4条南29丁目1-8 WOW帯広1F',
      },
      {
        name: 'LAVA 帯広店（マシンピラティス＆ホットヨガ）',
        image: '/images/studios/lava-obihiro.webp',
        rating: 4.1,
        price: '通い放題 11,000〜15,000円程度',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['ホットヨガ&マシン', '1日6-8回開催', '女性専用'],
        description: 'ホットヨガLAVAとマシンピラティスが同時利用可能なスタジオ。1日6～8回レッスン開催。',
      },
    ],
  },

  // ============ 中国・四国 ============
  'fukuyama': {
    name: '福山',
    region: '中国・四国',
    description: '広島県東部・福山エリアのピラティススタジオ。福山駅周辺にマシン専門店から暗闇系まで多彩に揃う。',
    studios: [
      {
        name: 'ピラティススタジオDEP 福山店',
        image: '/images/studios/dep-pilates-fukuyama.webp',
        rating: 4.5,
        price: 'ライト 14,800円/月 / スタンダード 28,800円 / プレミアム 47,600円',
        trial: '体験 2,980円（LINE予約割・通常9,900円）',
        features: ['完全個室', '理学療法士', '返金保証', 'マンツーマン'],
        description: '完全個室のマシンピラティス。代表は理学療法士資格保有。初回体験は効果体感できなければ全額返金保証付き。',
        access: 'JR福山駅 徒歩約5分',
        address: '広島県福山市御船町2-6 2F',
      },
      {
        name: 'BEAT PILATES 広島福山店',
        image: '/images/studios/beat-pilates-fukuyama.webp',
        rating: 4.2,
        price: '料金は公式サイト要問い合わせ',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['暗闇系', 'マシン専門', '無期限繰越', 'クレジット決済'],
        description: '暗闇×音楽×マシンピラティスを掛け合わせた専門スタジオ。回数券無期限繰越可。',
        address: '広島県福山市元町15-23 荻野ビル2F',
      },
      {
        name: 'StudioTAIKA',
        image: '/images/studios/studio-fukuyama.webp',
        rating: 4.4,
        price: '1回 9,000円',
        trial: '体験 5,000円（1日3組限定）',
        features: ['ピラティスマシン全完備', '理学療法士・看護師・栄養士', '託児あり', '24時間LINEサポート'],
        description: '地域唯一ピラティスマシン全完備のスタジオ。理学療法士・看護師・栄養士など専門家在籍。初回姿勢改善率9割以上。',
        address: '広島県福山市神辺町新湯野28-6',
      },
    ],
  },

  'kure': {
    name: '呉',
    region: '中国・四国',
    description: '広島県南西部・呉エリアのピラティススタジオ。本格的なクラシカル系とビューティーピラティス系が並ぶ。',
    studios: [
      {
        name: 'Pilatestown',
        image: '/images/studios/pilatestown-kure.webp',
        rating: 4.4,
        price: '料金は料金ページ参照',
        trial: '即日入会で体験料金0円',
        features: ['Pilates Foundation UK認定', '少人数グループ', '2009年開業', 'プライベート対応'],
        description: 'Pilates Foundation UK認定インストラクター在籍のスタジオ。グループ60分・プライベート60分・セミプライベートの3形式。代表はロンドンAlan Hardman Pilates Studio研修。',
        address: '広島県呉市海岸2-14-12',
      },
      {
        name: 'LUIRE PILATES STUDIO 呉店',
        image: '/images/studios/sites-kure.webp',
        rating: 4.3,
        price: '料金はPrice&Reservationページ参照',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['クラシカルピラティス', 'シルクサスペンション', 'マシン&マット', '少人数'],
        description: '広島県で数少ないクラシカルピラティスを伝えるスタジオ。シルクサスペンション・スパインコレクター・マットなど多彩。',
        address: '広島県呉市西中央1-5-7 SKビル1F',
      },
      {
        name: 'LAVA 呉店（ホットヨガ&マシンピラティス）',
        image: '/images/studios/lava-kure.webp',
        rating: 4.1,
        price: '料金は公式サイト要問い合わせ',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['ホットヨガ', 'マシンピラティス併設', 'JR呉駅近'],
        description: 'JR呉駅から徒歩約5分のLAVA。ホットヨガに加えマシンピラティスも展開。',
        access: 'JR呉駅から徒歩約5分',
        address: '広島県呉市宝町5-10 2F',
      },
    ],
  },

  'higashihiroshima': {
    name: '東広島',
    region: '中国・四国',
    description: '広島県中部・東広島エリアのピラティススタジオ。西条駅周辺の専門店と理学療法士監修系が並ぶ。',
    studios: [
      {
        name: 'A8Pilates',
        image: '/images/studios/a8pilates-higashihiroshima.webp',
        rating: 4.3,
        price: '料金は公式予約ページ参照',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['完全予約制', 'リフォーマー&キャデラック', 'パーソナル&ペア', '西条駅徒歩4分'],
        description: '完全予約制のマシンピラティス専門スタジオ。リフォーマーやキャデラックを使い、1対1または2名までのペアでパーソナル指導。',
        access: 'JR西条駅 徒歩4分',
        address: '広島県東広島市西条朝日町1-1 広亜ビル202',
      },
      {
        name: 'SteadyGo 東広島',
        image: '/images/studios/steadygo-hiroshima-higashihiroshima.webp',
        rating: 4.2,
        price: '料金は公式サイト要問い合わせ',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['理学療法士', 'マシンピラティス', 'コンディショニング併設'],
        description: '理学療法士の資格を持つインストラクターが指導するマシンピラティス＆スポーツコンディショニングスタジオ。',
      },
      {
        name: 'Mana Pilates Studio',
        image: '/images/studios/mana-pilates-studio-higashihiroshima.webp',
        rating: 4.2,
        price: '料金は公式サイト要問い合わせ',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['マシンピラティス', '東広島市'],
        description: '東広島市のマシンピラティススタジオ。',
      },
    ],
  },

  'tsuyama': {
    name: '津山',
    region: '中国・四国',
    description: '岡山県北部・津山エリアのピラティススタジオ。理学療法士監修のパーソナル系とチケット制グループ系が中心。',
    studios: [
      {
        name: 'luluto（ルルト）津山店',
        image: '/images/studios/kosupapilates-tsuyama.webp',
        rating: 4.4,
        price: '月3回 29,700円 / 月4回 38,400円 / 月6回 55,800円',
        trial: '体験 平日1,000円 / 土日祝5,000円',
        features: ['理学療法士監修', '完全個別マシン', '駐車場8台', '幅広い年齢層'],
        description: '理学療法士監修の完全1対1個別マシンピラティス。20～60代と幅広い年齢層が利用。営業時間9:00～21:00。',
        access: '津山駅より車で15分',
        address: '岡山県津山市東一宮31-16 1F',
      },
      {
        name: 'ピラティス教室 ルアナ',
        image: '/images/studios/ruanapilates-tsuyama.webp',
        rating: 4.2,
        price: '1レッスン 1,500円 / 4回チケット 5,500円',
        trial: '体験 1,000円（次回使用可500円チケット付）',
        features: ['チケット制', '少人数7名', '女性向け', '月謝制なし'],
        description: '美咲町と津山市など複数会場展開のチケット制ピラティス教室。月謝制なしで自分のペースで通える。',
        address: '岡山県久米郡美咲町原田3155-1 みほビル3階北',
      },
    ],
  },

  'shimonoseki': {
    name: '下関',
    region: '中国・四国',
    description: '山口県西部・下関エリアのピラティススタジオ。シーモール下関やゆめシティ下関などモール併設店が充実。',
    studios: [
      {
        name: 'pilates K シーモール下関店',
        image: '/images/studios/pilates-k-shimonoseki.webp',
        rating: 4.1,
        price: 'マンスリー4 11,220円 / マンスリー8 15,070円',
        trial: '体験 無料',
        features: ['女性専用', 'マシン専門', '下関駅徒歩1分', '17プログラム'],
        description: '女性専用マシンピラティス。シーモール下関2階で買い物ついでに通える。音楽連動グループレッスン17プログラム。',
        access: 'JR下関駅 東口徒歩1分',
        address: '山口県下関市竹崎町4-4-8 シーモール下関ショッピングセンター2階',
      },
      {
        name: 'Pilates & Yoga Studio G',
        image: '/images/studios/py-studio-g-shimonoseki.webp',
        rating: 4.3,
        price: 'ベーシック1回 3,000円 / パーソナル 8,000円 / 月4回 10,250円',
        trial: '体験受付終了',
        features: ['女性専用', '少人数3-5名', '理学療法士', 'マット&マシン&シルク'],
        description: '女性専用の少人数（3～5名）スタジオ。マット・マシン・シルクサスペンション・ヨガ・シニアクラスを展開。理学療法士資格保有者指導。',
        address: '山口県下関市竹崎町3-11-1 竹崎町Kビル3F',
      },
      {
        name: 'ピラティスKASANE ゆめシティ下関店',
        image: '/images/studios/pilates-kasane-shimonoseki.webp',
        rating: 4.2,
        price: 'グループ月会費制 / パーソナル月4回 39,600円',
        trial: '体験 無料',
        features: ['少人数', '男性利用可', 'ゆめシティ内', '無料駐車場'],
        description: '6名以下から最大13名のグループまで対応。男性利用可・年中無休（10:00～21:00）。',
        access: '綾羅木駅 徒歩13分',
        address: '山口県下関市伊倉新町3-1-1 ゆめシティ3F',
      },
    ],
  },

  // ============ 九州 ============
  'kurume': {
    name: '久留米',
    region: '九州・沖縄',
    description: '福岡県南部・久留米エリアのピラティススタジオ。マシン専門・女性専用・セミパーソナルなど多彩なタイプが揃う。',
    studios: [
      {
        name: 'pilates K 久留米店',
        image: '/images/studios/pilates-k-kurume.webp',
        rating: 4.1,
        price: 'マンスリー4 11,220円 / マンスリー8 15,070円',
        trial: '体験 無料',
        features: ['女性専用', 'マシン専門', '無料駐車場', '17プログラム'],
        description: '上津バイパス沿いの女性専用マシンピラティス。無料駐車場完備で車利用に便利。',
        access: 'バス停「藤光一丁目」徒歩1分',
        address: '福岡県久留米市藤光1丁目3-21',
      },
      {
        name: 'ピラティススタジオ晴れるや',
        image: '/images/studios/hareruyapilates-kurume.webp',
        rating: 4.4,
        price: '料金はメニューページ参照',
        trial: '体験レッスンあり',
        features: ['女性専用', 'STOTT PILATES認定', 'マシン専門', '最大4名グループ'],
        description: '女性インストラクターによるマシン専門ピラティススタジオ。リフォーマーを使ったパーソナルと4名までの少人数グループ。',
        access: '花畑駅徒歩5分 / 西鉄久留米駅徒歩12分',
        address: '福岡県久留米市小頭町143 大屋ビル505号',
      },
      {
        name: 'Pilates Mee Life 西鉄久留米店',
        image: '/images/studios/m-pilates-kurume.webp',
        rating: 4.6,
        price: '月2回 8,800円 / 月4回 14,800円 / 通い放題 24,600円',
        trial: '体験 無料（6月30日まで・通常9,800円）',
        features: ['セミパーソナル5名', '当日予約OK', '全国129店相互利用', 'GoogleMap 4.9'],
        description: '最大5名のセミパーソナル形式で低価格・継続しやすいスタジオ。当日予約・キャンセル可、全国129店舗で相互利用可能。',
        access: '西鉄久留米駅 徒歩5分',
        address: '福岡県久留米市東和町6-9 フジホーム久留米ビル903',
      },
    ],
  },

  'kasuga': {
    name: '春日',
    region: '九州・沖縄',
    description: '福岡県中部・春日市/大野城エリアのピラティススタジオ。総合スポーツクラブからパーソナル専門店まで。',
    studios: [
      {
        name: 'スポーツクラブ&サウナスパ ルネサンス 春日24',
        image: '/images/studios/s-re-kasuga.webp',
        rating: 4.0,
        price: '料金は公式サイト要問い合わせ',
        trial: '体験 2,200円',
        features: ['総合スポーツクラブ', '15名少人数', '国際指導ライセンス', 'コア強化'],
        description: '1クラス15名の少人数制ピラティススクール。国際的な指導ライセンスを持つインストラクターがコアを安定させるエクササイズを指導。',
        address: '福岡県春日市春日',
      },
      {
        name: 'luluto 大野城春日原店',
        image: '/images/studios/kosupapilates-kasuga.webp',
        rating: 4.4,
        price: '月3回 29,700円 / 月4回 38,400円 / 月6回 55,800円',
        trial: '体験 平日1,000円 / 土日祝5,000円',
        features: ['理学療法士監修', 'マンツーマン', '幅広い年齢層', '駅近2分'],
        description: '理学療法士監修のマンツーマンマシンピラティス。完全プライベートで集中して取り組める。',
        access: '西鉄春日原駅 徒歩2分',
        address: '大野城市雑餉隈町4丁目2-16 石橋ビル302',
      },
      {
        name: 'フィジオピラティス（春日駅徒歩2分）',
        image: '/images/studios/coubic-kasuga.webp',
        rating: 4.3,
        price: '料金は公式予約ページ参照',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['理学療法士', 'コンディショニング', '慢性腰痛対応', 'リハビリ後利用'],
        description: '理学療法士によるピラティスコンディショニングスタジオ。慢性疾患や繰り返す腰痛、リハビリ終了後の方に特化。',
        access: '春日駅 徒歩2分',
      },
    ],
  },

  'kashii': {
    name: '香椎',
    region: '九州・沖縄',
    description: '福岡県東区・香椎エリアのピラティススタジオ。JR香椎駅周辺で多彩なスタジオが集積。',
    studios: [
      {
        name: 'Studio tete（スタジオテテ）',
        image: '/images/studios/studiotetefk-kashii.webp',
        rating: 4.3,
        price: '料金は公式サイト要問い合わせ',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['プライベート&セミプライベート&グループ', 'ベビーシッター付', 'オンライン対応'],
        description: 'プライベート・セミプライベート・グループ・ベビーシッター付ピラティスなど多彩。Zoomオンラインレッスンも対応。',
        address: '福岡市東区香椎',
      },
      {
        name: 'S\'aimer（セメ）',
        image: '/images/studios/saimer-kashii.webp',
        rating: 4.4,
        price: '料金は公式サイト要問い合わせ',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['女性専用', 'アロマサロン併設', '子連れOK', '香椎駅徒歩4分'],
        description: 'ピラティス×アロマサロン併設の女性専用スタジオ。レインドロップトリートメントなどケアも提供。日曜定休。',
        access: '香椎駅 徒歩4分',
        address: '福岡市東区香椎駅前2-9-15（3F）',
      },
      {
        name: 'Pilates & Yoga Studio SUN9（サンク）',
        image: '/images/studios/studio-sun9-kashii.webp',
        rating: 4.5,
        price: '料金はプログラムページ参照',
        trial: '体験 通常2,200円→キャンペーン500円',
        features: ['少人数6名', '会員80%未経験', '香椎駅徒歩2分', 'ピラティス&ヨガ&ズンバ'],
        description: '最大6名の少人数制スタジオ。会員の約80%が未経験スタート。ヨガ・ピラティス・ズンバなど複数プログラム。',
        access: 'JR香椎駅・西鉄香椎駅 徒歩2分',
        address: '福岡市東区香椎駅前1-14-21 リーヴス香椎駅前1-A-A',
      },
      {
        name: 'マシンピラティススタジオRintosull 香椎店',
        image: '/images/studios/rintosull-kashii.webp',
        rating: 4.2,
        price: '月4・フルタイム 8,800円 / ライト 13,800円 / プレミアム 16,800円',
        trial: '体験会 0円',
        features: ['女性専用', '87%初心者', 'リフォーマー', '駅徒歩30秒'],
        description: '女性専用マシンピラティス。87%以上が初心者のため安心。大画面スクリーンと最大2名のインストラクターがサポート。',
        access: 'JR香椎駅 徒歩30秒 / 西鉄香椎駅 徒歩3分',
        address: '福岡市東区香椎駅前1-13-21 Grandeur 5F',
      },
    ],
  },

  'yatsushiro': {
    name: '八代',
    region: '九州・沖縄',
    description: '熊本県南部・八代エリアのピラティススタジオ。八代市内唯一のピラティスマシン導入サロンとモール内ホットヨガが選択肢。※公式確認できたスタジオが少ないエリア。',
    studios: [
      {
        name: 'Spira Spera（スピラスペラ）',
        image: '/images/studios/kumaon-yatsushiro.webp',
        rating: 4.3,
        price: 'パーソナル60分 7,700円 / 90分 9,900円 / グループ60分 2,000円',
        trial: '体験60分 3,500円',
        features: ['八代市唯一マシン導入', '女性専用', 'プライベートサロン', 'LINE割10%'],
        description: '八代市唯一のピラティスマシン導入プライベートサロン。代表トレーナーは複数ピラティス認定資格保有で延べ400人指導実績。',
        address: '熊本県八代市',
      },
      {
        name: 'ホットヨガロイブ ゆめタウン八代店',
        image: '/images/studios/hotyoga-loive-yatsushiro.webp',
        rating: 4.1,
        price: '月4回 8,910円 / フルタイム 12,320円 / フルタイムプラス 17,600円',
        trial: '手ぶら体験 0円',
        features: ['女性専用', 'ホットヨガ&ピラティス', 'モール内', '無料駐車場2,400台'],
        description: 'ゆめタウン八代2階の女性専用ホットヨガ。ベーシックヨガ・ピラティス・エクササイズ・ダンス系まで多彩なプログラム。',
        access: '八代駅からバス約16-17分',
        address: '熊本県八代市建馬町3番1号 ゆめタウン八代2階',
      },
    ],
  },

  'kirishima': {
    name: '霧島',
    region: '九州・沖縄',
    description: '鹿児島県中央・霧島エリアのピラティススタジオ。マシン専門店と女性専用ボディメイク系の2軸が中心。',
    studios: [
      {
        name: 'machine pilates mill',
        image: '/images/studios/pilates-mill-kirishima.webp',
        rating: 4.4,
        price: 'セミプライベート1回 4,800円 / 3回 14,470円 / プライベート1回 7,700円',
        trial: 'セミプライベート体験4,400円→0円（即日入会） / プライベート5,500円→0円',
        features: ['キャデラック/リフォーマー/チェア/ラダーバレル', '韓国式ボディメソッド', 'プライベート&2名', '手ぶらOK'],
        description: 'キャデラック・リフォーマー・チェア・ラダーバレルを完備したマシンピラティス専門店。韓国式ボディメソッドアプローチ。',
        access: '国分駅から徒歩約11分',
        address: '鹿児島県霧島市国分府中町4-56-10',
      },
      {
        name: 'Venus Lab（ヴィーナスラボ）',
        image: '/images/studios/venuslab-kirishima.webp',
        rating: 4.3,
        price: '料金は料金体制ページ参照',
        trial: '詳細は公式サイト要問い合わせ',
        features: ['女性専用', '少人数制', 'フェムケア', 'ヘナ蒸し併設'],
        description: '女性専用・少人数制のボディメイクスタジオ。ピラティス・フェムケア視点のプログラム・ヘナ蒸しなどを提供。水曜定休。',
        address: '鹿児島県霧島市国分中央3丁目36-10 NCガイドビル2階',
      },
    ],
  },

  // その他のエリアデータは後で追加予定（作業進行中）
}
