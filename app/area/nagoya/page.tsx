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
  title: '【2026最新】ピラティス名古屋おすすめ8選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '【2026年4月最新】名古屋のおすすめピラティススタジオ8選を徹底比較。グループ月4回13,420円〜の料金相場、マシン専門・女性専用・理学療法士監修のスタジオ情報、体験レッスンの持ち物まで完全網羅。',
  keywords: 'ピラティス,名古屋,愛知,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK 久屋大通パーク店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.1,
    reviewCount: 148,
    reviews: [
      { author: 'M.K', rating: 5, date: '1週間前', text: '久屋大通パーク内にあるので栄でのショッピング帰りにそのまま通えます。地下鉄東山線・名城線からのアクセスが抜群。音楽×暗闇レッスンが楽しくて毎回あっという間です。' },
      { author: 'A.S', rating: 4, date: '2週間前', text: '女性専用なので周りの目を気にせず集中できます。月4回13,420円で無料体験もあるので試しやすい。名古屋駅からも地下鉄で一本。' },
      { author: 'Y.N', rating: 4, date: '3週間前', text: '部位別のボディメイクプログラムが充実していて飽きません。レイヤード久屋大通パーク内なのでカフェやショップも多くて便利。' },
    ],
    price: '月4回 13,420円〜',
    trial: '無料体験レッスン',
    features: ['音楽×マシン', '女性専用', 'レイヤード久屋大通パーク内', '暗闇レッスン'],
    description: 'ピラティスK久屋大通パーク店は、名古屋市中区にある女性専用マシンピラティススタジオ。レイヤード久屋大通パークに入るから、平日は仕事帰りに、休日はお買い物ついでに最適。店内はカジュアルかつスタイリッシュで、音楽にあわせたグループレッスンを楽しめます。お腹、お尻、二の腕、脚、背中の部位に特化したボディメイクプログラムが充実。',
    access: '栄町駅近（レイヤード久屋大通パーク内）',
    address: '愛知県名古屋市中区（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '暗闘×音楽×マシンピラティスの融合レッスン。楽しく続けられると人気のプラン。',
      price: '月4回 13,420円（税込）+ 施設維持費 825円',
    },
    options: [
      'マンスリー8メンバー（月8回 16,170円）',
      'マンスリーデイメンバー（平日10-15時通い放題 14,520円）',
      'マンスリープレミアムメンバー（毎日2レッスン 18,920円）',
      '追加レッスン（1回 2,200円）',
    ],
    userProfile: {
      ageRange: '20代〜30代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['楽しく痩せたい', 'ストレス発散', 'ボディメイク', '仲間と運動'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['シャワー', 'ロッカー', 'パウダールーム', 'Wi-Fi', '暗闇スタジオ', '女性専用'],
    },
  },
  {
    name: 'luluto 名古屋（名駅店・栄店・金山店・大曽根店）',
    image: '/images/studios/luluto.webp',
    rating: 4.3,
    reviewCount: 14,
    reviews: [
      { author: 'T.H', rating: 5, date: '1週間前', text: '理学療法士が考案したプログラムなので安心感が違います。名古屋駅店に通っていますが、JR中央線や名鉄からもアクセスしやすい。身体の使い方が変わりました。' },
      { author: 'R.M', rating: 5, date: '2週間前', text: '栄店に通っています。地下鉄東山線の栄駅からすぐ。医療的視点からの身体分析が丁寧で、リハビリ目的でも安心して通えます。' },
      { author: 'K.I', rating: 4, date: '1ヶ月前', text: '金山店は名鉄・JR・地下鉄が全部使えて便利。4店舗あるので仕事や予定に合わせて使い分けられるのが嬉しい。' },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['理学療法士考案', '名古屋市内4店舗', 'マンツーマン', '医療的視点'],
    description: '身体の専門家である理学療法士が考案したピラティススタジオ。名古屋市内に4店舗（名駅店・栄店・金山店・大曽根店）展開。医療現場での知見を活かし、「ただ動く」のではなく「身体を正しく動かす」ことを重視。一人ひとりの身体の状態に合わせたオーダーメイドプログラムを提供。リハビリから本格的なボディメイクまで幅広く対応。',
    access: '名駅・栄・金山・大曽根（各駅近）',
    address: '愛知県名古屋市（詳細は公式サイト参照）',
    popularPlan: {
      name: '理学療法士監修プログラム',
      description: '医療的視点からの身体分析。一人ひとりに合わせたオーダーメイドプログラム。',
      price: '要問合せ',
    },
    options: [
      'プライベートレッスン',
      'グループレッスン',
      '理学療法士による身体分析',
      'リハビリ対応',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性75% / 男性25%',
      purpose: ['リハビリ', '身体の不調改善', '正しい動き習得', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['理学療法士常駐', 'プライベート空間', '医療的視点', '4店舗展開'],
    },
  },
  {
    name: 'Two Three 名古屋',
    image: '/images/studios/two-three-pilates.webp',
    rating: 4.1,
    reviewCount: 14,
    reviews: [
      { author: 'S.O', rating: 5, date: '10日前', text: '最大8名の少人数制なので先生の目がしっかり行き届きます。名古屋駅エリアからも地下鉄東山線で通いやすい。初心者でも安心でした。' },
      { author: 'N.T', rating: 4, date: '3週間前', text: 'リフォーマーだけでなくスパインコレクターやコンビチェアなどマシンの種類が豊富。いろんなアプローチで身体を動かせるのが良い。' },
      { author: 'E.K', rating: 4, date: '1ヶ月前', text: '女性に人気のスタジオで、体験レッスンから入会しました。少人数なので質問もしやすく、丁寧に教えてもらえます。' },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['少人数制', '最大8名', '女性に人気', 'ピラティスアカデミー運営'],
    description: '名古屋で女性に人気のピラティススタジオ7選に紹介されたスタジオ。最大8名までの少人数制グループレッスンが特徴で、一人ひとりに的確な指導が行き届くよう配慮。誰でも通いやすいピラティススタジオです。まずは体験レッスンからお気軽にお申し込みください。',
    access: '名古屋市内（詳細は公式サイト参照）',
    address: '愛知県名古屋市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'グループレッスン（最大8名）',
      description: '少人数制で一人ひとりに的確な指導。初心者からベテランまで対応。',
      price: '要問合せ',
    },
    options: [
      'プライベートレッスン',
      'グループレッスン',
      'リフォーマー・スパインコレクター・コンビチェア・タワーなど充実',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['美しいカラダづくり', '姿勢改善', 'ボディメイク', '体幹強化'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['リフォーマー', 'スパインコレクター', 'コンビチェア', 'タワー', 'マシン充実'],
    },
  },
  {
    name: 'REBORN（リボーン）名古屋',
    image: '/images/studios/reborn-nagoya.webp',
    rating: 4.2,
    reviewCount: 12,
    reviews: [
      { author: 'H.Y', rating: 5, date: '5日前', text: '設備が本当に充実していて驚きました。プライベートレッスンなので自分の目的に合わせたメニューを組んでもらえます。名古屋駅から地下鉄東山線ですぐ。' },
      { author: 'C.M', rating: 4, date: '2週間前', text: 'グループレッスンが不安だったのでプライベート中心のここを選びました。先生が丁寧で、ピラティスを深く学びたい人にぴったり。' },
      { author: 'J.S', rating: 4, date: '1ヶ月前', text: '名鉄沿線から通っています。あらゆる目的に対応してくれるので、肩こり改善とボディメイクを同時に進められています。' },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['充実設備', 'プライベート中心', 'あらゆる目的に対応', 'グループ不安な方OK'],
    description: '充実した設備により、あなたのあらゆる目的を叶えることができます。ピラティスを深く学びたい方、グループレッスンへの参加が不安な方など、どのような方でもご対応いたしますのでご相談ください。プライベートレッスンを中心に、一人ひとりに合わせた丁寧な指導を提供。',
    access: '名古屋市内（詳細は公式サイト参照）',
    address: '愛知県名古屋市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'プライベートレッスン',
      description: '充実した設備であらゆる目的に対応。一人ひとりに合わせた丁寧な指導。',
      price: '要問合せ',
    },
    options: [
      'プライベートレッスン',
      'グループレッスン',
      'ピラティスを深く学びたい方向け',
      '充実設備',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['ピラティスを深く学ぶ', 'グループ不安解消', 'ボディメイク', '体幹強化'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['充実設備', 'プライベート空間', 'マシン完備'],
    },
  },
  {
    name: 'ピラティススタジオアステル（栄店・名駅店）',
    image: '/images/studios/astel-pilates-nagoya.webp',
    rating: 4.2,
    reviewCount: 23,
    reviews: [
      { author: 'F.W', rating: 5, date: '1週間前', text: '栄店に通っています。地下鉄東山線の栄駅から近く、1回のレッスンで効果を実感できたのには驚きました。自分の身体の癖を知ることができます。' },
      { author: 'D.A', rating: 4, date: '2週間前', text: '名駅店はJR中央線・名鉄名古屋駅からアクセスしやすい。南青山にも展開しているだけあって洗練された雰囲気。' },
      { author: 'L.K', rating: 4, date: '1ヶ月前', text: '身体を紐解くというコンセプトが面白い。ピラティスとトレーニングを組み合わせたプログラムで効率よく身体が変わります。' },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['栄・名駅2店舗', '東京南青山も展開', '身体を紐解く', '1回で効果実感'],
    description: '名古屋市 栄・名駅、東京 南青山のピラティス＆トレーニングスタジオ、アステルです。自分の癖を知り、身体の状態を知り、心や身体を紐解いていくアステルのピラティス。たった1回のレッスンでもその効果を感じていただけるでしょう。名古屋市内に2店舗（栄店・名駅店）展開。',
    access: '栄・名駅（各駅近）',
    address: '愛知県名古屋市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'ピラティス＆トレーニング',
      description: '自分の癖を知り、身体を紐解く。1回のレッスンでも効果を実感。',
      price: '要問合せ',
    },
    options: [
      'プライベートレッスン',
      'グループレッスン',
      'ピラティス',
      'トレーニング',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['身体の癖を知る', '効果を早く実感', 'ボディメイク', '姿勢改善'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['栄店・名駅店', 'マシン完備', 'トレーニング設備'],
    },
  },
  {
    name: 'ナグスタジオ（名古屋市内4店舗）',
    image: '/images/studios/nag-studio-nagoya.webp',
    rating: 4.0,
    reviewCount: 19,
    reviews: [
      { author: 'P.T', rating: 4, date: '5日前', text: 'イオン則武新町店に通っています。名古屋駅から近くて買い物ついでに寄れるのが最高。ピラティスと溶岩石ホットヨガの両方楽しめます。' },
      { author: 'G.H', rating: 4, date: '2週間前', text: '4店舗全部使えるのがありがたい。星が丘テラス店は地下鉄東山線の星ヶ丘駅直結で雨の日も便利。' },
      { author: 'B.N', rating: 4, date: '1ヶ月前', text: 'ナディアパーク店は栄エリアにあってアクセス抜群。ピラティスとヨガを気分で使い分けられるのが気に入っています。' },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['4店舗全店利用可', 'ピラティス＆ホットヨガ', 'イオン内店舗あり', '溶岩石ヨガ'],
    description: 'ナグスタジオに入会すると、ナディアパーク店、星が丘テラス店、イオン則武新町店、イオンモールナゴヤドーム前店の全店のピラティスレッスン・溶岩石ホットヨガレッスンを受講できます。ピラティスとホットヨガの両方を楽しめるのが魅力。お買い物ついでに通えるイオン内店舗も。',
    access: 'ナディアパーク・星が丘テラス・イオン則武新町・イオンナゴヤドーム前',
    address: '愛知県名古屋市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'ピラティス＆ホットヨガ全店通い放題',
      description: '4店舗全店でピラティスと溶岩石ホットヨガが受講可能。',
      price: '要問合せ',
    },
    options: [
      'ピラティスレッスン',
      '溶岩石ホットヨガレッスン',
      '全店相互利用可能',
      'イオン内店舗あり',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['ピラティス＆ヨガ併用', '買い物ついでに', 'リラックス', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['4店舗展開', 'ロッカー', 'パウダールーム', 'イオン内店舗', '溶岩石'],
    },
  },
  {
    name: 'Pilates Studio Tree',
    image: '/images/studios/pilates-tree-nagoya.webp',
    rating: 4.1,
    reviewCount: 16,
    reviews: [
      { author: 'W.M', rating: 5, date: '1週間前', text: 'Peak Pilates養成コースに参加しています。著名なインストラクターから直接学べるのが名古屋では貴重。プロを目指す方に本当におすすめ。' },
      { author: 'V.I', rating: 4, date: '3週間前', text: '初心者として通い始めましたが、養成コースも開講しているだけあってインストラクターの質が高い。基礎からしっかり教えてもらえます。' },
      { author: 'U.O', rating: 4, date: '1ヶ月前', text: '名古屋駅エリアからJR中央線で通っています。ピラティスを深く学びたい方には最適なスタジオだと思います。' },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['養成コース開講', 'Peak Pilates PPC1', '資格取得可', 'プロ育成'],
    description: '名古屋のピラティススタジオTree。Peak Pilates養成コースPPC1を募集中。著名なピラティスインストラクターによる指導で、プロのインストラクターを目指す方にも対応。初心者から養成コースまで幅広く提供。ピラティスを深く学びたい方におすすめ。',
    access: '名古屋市内（詳細は公式サイト参照）',
    address: '愛知県名古屋市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'ピラティスレッスン',
      description: '初心者からプロ育成まで対応。Peak Pilates養成コースも開講。',
      price: '要問合せ',
    },
    options: [
      'プライベートレッスン',
      'グループレッスン',
      'Peak Pilates養成コースPPC1',
      '資格取得コース',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ピラティスを深く学ぶ', '資格取得', 'プロ育成', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['養成コース開講', 'マシン完備', 'プライベート空間'],
    },
  },
  {
    name: 'studio nano（名駅・伏見）',
    image: '/images/studios/studio-nano-nagoya.webp',
    rating: 4.2,
    reviewCount: 19,
    reviews: [
      { author: 'Q.F', rating: 5, date: '5日前', text: '姿勢矯正専門ということで選びましたが、セルフコンディショニングまで教えてもらえるのが嬉しい。名古屋駅から歩ける距離で名鉄やJRからも便利。' },
      { author: 'Z.R', rating: 4, date: '2週間前', text: '伏見店は地下鉄東山線の伏見駅から近くて通いやすい。腰痛改善で通い始めて3ヶ月、かなり楽になりました。' },
      { author: 'O.D', rating: 4, date: '1ヶ月前', text: 'パーソナルトレーニングとピラティスの組み合わせが効果的。自分の身体のケア方法を学べるので、通えない日も自宅でセルフケアできます。' },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['姿勢矯正専門', 'パーソナルトレーニング', 'セルフコンディショニング習得', '痛み改善'],
    description: '【姿勢矯正・改善専門】セルフコンディショニングが習得できるパーソナルトレーニング&ピラティススタジオnano。名古屋駅・伏見駅近くに展開。姿勢矯正と痛み改善に特化したスタジオで、一人ひとりの身体に合わせた専門的な指導を提供。自分で身体をケアする方法も学べます。',
    access: '名古屋駅・伏見駅近',
    address: '愛知県名古屋市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'パーソナルトレーニング＆ピラティス',
      description: '姿勢矯正・痛み改善専門。セルフコンディショニングも習得できる。',
      price: '要問合せ',
    },
    options: [
      'パーソナルトレーニング',
      'マシンピラティス',
      '姿勢矯正プログラム',
      'セルフコンディショニング指導',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性70% / 男性30%',
      purpose: ['姿勢矯正', '痛み改善', 'セルフケア習得', 'リハビリ'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['姿勢矯正専門', 'パーソナル空間', 'トレーニング設備', 'マシン完備'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！名古屋エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。Two Three 名古屋は最大8名の少人数制で一人ひとりに丁寧な指導が受けられますし、ピラティスK 久屋大通パーク店は無料体験もあるので気軽に始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。',
  },
  {
    question: '名古屋のピラティススタジオの料金相場は？',
    answer: '名古屋エリアのピラティススタジオの料金相場は、グループレッスンで月4回13,000円〜18,000円程度。パーソナルレッスンはスタジオにより異なりますが1回8,000円〜15,000円が目安です。ピラティスK 久屋大通パーク店は月4回13,420円で比較的リーズナブルです。',
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
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズ。ヨガは柔軟性と精神的なリラックスを重視します。名古屋ではナグスタジオのようにピラティスとホットヨガの両方を楽しめるスタジオもあるので、どちらも試してみるのもおすすめです。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: 'はい、改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。studio nanoのような姿勢矯正専門のスタジオもあるので、痛み改善が目的の方にはおすすめです。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスで効果が表れだすのは「2ヶ月を過ぎた頃」から。これは人間の細胞が生まれ変わるサイクルがそのくらいだからです。すぐに変化が表れなくても心配せず、最低でも2ヶ月は継続するのがおすすめです。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれ良さがあります。パーソナルは一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方におすすめ。グループは料金が安く、仲間と楽しく続けられるのが魅力。名古屋にはREBORNのようなプライベート中心のスタジオから、ピラティスKのような大人数グループまで選べますよ。',
  },
]

export default function NagoyaAreaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '名古屋', url: 'https://pilates-biyori.com/area/nagoya/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス名古屋おすすめ8選！<br className="hidden md:block" />
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
              <span className="text-warm-600">名古屋</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="名古屋" />

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
              「名古屋で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、名古屋エリアでおすすめのピラティススタジオ8選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>名古屋でピラティススタジオを探している</span>
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
                  <span>名古屋駅・栄・金山エリアで通いやすいスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="名古屋" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              名古屋のおすすめピラティススタジオ8選
            </h2>
            <div className="space-y-8">
              {studios.map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Search by Preference - 目的別おすすめスタジオ */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              目的別おすすめスタジオ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性専用スタジオなら人目を気にせず集中できます。音楽×暗闇のレッスンで楽しくボディメイク。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK 久屋大通パーク店（月4回 13,420円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">理学療法士監修</h3>
                <p className="text-warm-600 text-sm mb-4">
                  医療的視点から身体を整えたい方に。リハビリから本格的なボディメイクまで対応。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• luluto 名古屋（名駅・栄・金山・大曽根）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">少人数制・丁寧指導</h3>
                <p className="text-warm-600 text-sm mb-4">
                  最大8名までの少人数制で、一人ひとりに的確な指導。初心者でも安心。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Two Three 名古屋（最大8名）</li>
                  <li className="text-warm-700">• REBORN 名古屋（プライベート中心）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">姿勢矯正・痛み改善</h3>
                <p className="text-warm-600 text-sm mb-4">
                  姿勢矯正やリハビリに特化したスタジオ。セルフケアも学べます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• studio nano（名駅・伏見）</li>
                  <li className="text-warm-700">• luluto 名古屋（医療的視点）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">ピラティス＆ヨガ</h3>
                <p className="text-warm-600 text-sm mb-4">
                  ピラティスとホットヨガの両方を楽しみたい方に。全店相互利用可能。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ナグスタジオ（4店舗全店利用可）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">資格取得・プロ育成</h3>
                <p className="text-warm-600 text-sm mb-4">
                  ピラティスインストラクターを目指す方に。養成コースも開講。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• Pilates Studio Tree（Peak Pilates PPC1）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Frequency Guide - おすすめの期間・頻度 */}
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

        {/* Price Guide - 予算別の料金相場 */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              予算別の料金相場
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。手軽にマシンピラティスを始めたい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK（月4回 13,420円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 15,000〜20,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4〜8回</p>
                <p className="text-sm text-warm-600 mb-4">
                  通い放題プランや複数店舗利用。しっかり通いたい方におすすめ。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK 通い放題（18,920円）</li>
                  <li>• ナグスタジオ（4店舗利用可）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">プライベート・専門</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">要問合せ</p>
                <p className="text-sm text-warm-600 mb-4">
                  パーソナルレッスン中心。専門的な指導で効率よく結果を出したい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• luluto 名古屋（理学療法士監修）</li>
                  <li>• REBORN 名古屋（充実設備）</li>
                  <li>• アステル（1回で効果実感）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose - 失敗しない選び方 */}
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
                  まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、体幹強化、リハビリなど、目的によって最適なスタジオやプログラムは変わります。名古屋にはlulutoのような医療的視点のスタジオから、ピラティスKのような楽しいグループレッスンまで選択肢が豊富です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  名古屋エリアの料金相場はグループで月4回13,000円〜18,000円程度。無理なく継続できる予算を決めましょう。料金だけでなく、入会金、マット・ウェアのレンタル料なども確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。ピラティスK 久屋大通パーク店は無料体験を実施しているので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。名古屋は地下鉄東山線・名城線、名鉄、JR中央線など交通網が充実しています。名古屋駅・栄・金山・伏見エリアに多くのスタジオが集まっているので、自宅や職場からの通いやすさを重視して選びましょう。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              名古屋のピラティス料金相場【2026年4月最新】
            </h2>
            <div className="bg-warm-50 rounded-lg p-8 border border-warm-200 mb-8">
              <p className="text-warm-600 leading-relaxed mb-6">
                名古屋エリアは名駅（名古屋駅）・栄・久屋大通を中心にピラティススタジオが増加中。東京・大阪の大手チェーンの進出と、地元密着型の個人スタジオが共存するエリアです。料金帯は東京とほぼ同等ですが、地域密着型スタジオでは独自のキャンペーンを展開していることも。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">グループレッスン（月4回）</h3>
                  <p className="text-3xl font-bold text-warm-800 mb-2">13,420円〜18,000円</p>
                  <p className="text-sm text-warm-600">ピラティスK久屋大通パーク店が月4回13,420円＋施設維持費825円。ナグスタジオ・Two Threeなど地元スタジオも人気。パーソナル1回は8,000円〜15,000円が目安で、lulutoは理学療法士監修のプログラムを提供しています。</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">地元密着型スタジオ</h3>
                  <p className="text-3xl font-bold text-warm-800 mb-2">要問合せが多い</p>
                  <p className="text-sm text-warm-600">名古屋の特徴として、REBORN・アステル・ナグスタジオ・Pilates Studio Treeなど地元スタジオは料金を公開していないケースが多いです。体験レッスンで直接確認するか、電話・メールで問い合わせるのが確実です。</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-5 border border-warm-200">
                <h3 className="font-bold text-warm-900 mb-3">入会金・体験レッスン費用</h3>
                <p className="text-sm text-warm-600">入会金は10,000円〜30,000円程度が一般的。キャンペーン期間中は無料になるスタジオも多数。体験レッスンは無料〜5,000円程度。ピラティスKは無料体験あり、lulutoは体験1,000円キャンペーンを実施中のことも。まずは気軽に体験してみましょう。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              名古屋でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">名駅エリアと栄エリアでスタジオの特色が異なる</h3>
                <p className="text-warm-600 leading-relaxed">
                  名古屋のピラティスは名駅（名古屋駅周辺）と栄・久屋大通エリアの2大拠点に分かれています。名駅はビジネスパーソン向けのスタジオが多く、栄エリアはショッピングと一体化した女性向けスタジオが充実。ピラティスK久屋大通パーク店は久屋大通駅直結で女性専用のマシン専門スタジオです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">車通いの方は駐車場を事前確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  名古屋は車社会のため、車で通うことを前提にスタジオを探す方も多いエリアです。栄・名駅エリアはコインパーキングが割高なので、スタジオ提携の駐車場があるか、近隣の安い駐車場を事前にチェックしておきましょう。地下鉄利用なら東山線・鶴舞線・名城線が便利です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">理学療法士・医療系監修スタジオに注目</h3>
                <p className="text-warm-600 leading-relaxed">
                  名古屋エリアではluluto（理学療法士監修）やREBORN、studio nanoなど、医療系のバックグラウンドを持つスタジオが増えています。腰痛・肩こり・姿勢改善などの目的がある方は、理学療法士やトレーナー資格を持つインストラクターがいるスタジオを選ぶと、より効果的な指導を受けられます。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金非公開スタジオは体験で確認を</h3>
                <p className="text-warm-600 leading-relaxed">
                  名古屋の地元スタジオは料金をWebサイトに公開していないケースが多いです。「要問合せ」のスタジオは、まず体験レッスンを申し込んで料金プランの詳細を確認するのがおすすめ。体験時にキャンペーン情報も聞いておきましょう。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>動きやすいウェア</strong>：Tシャツ＋レギンスが基本。フードやファスナー付きの服はマシンに引っかかるので避けて。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>水分（500ml以上）</strong>：名古屋は夏の暑さが厳しいため、特に夏場は多めに持参しましょう。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>タオル</strong>：汗拭き用に1枚は必須です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>グリップソックス</strong>：マシンピラティスでは必須のスタジオがほとんど。滑り止め付きを持参しましょう。</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-warm-900 mb-4">服装のポイント</h3>
                  <ul className="space-y-3 text-warm-600">
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>伸縮性のある素材</strong>を選びましょう。ピラティスは全身を大きく動かすため、動きやすさが最重要です。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>体のラインが見える服</strong>の方がフォームチェックがしやすく、効果的な指導を受けられます。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオも。ピラティスKは手ぶら体験が可能な場合があります。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリーは外して</strong>から参加。マシンのスプリングやストラップに引っかかる恐れがあります。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>名古屋エリアの豆知識：</strong>名古屋は車文化が根強いですが、栄・名駅エリアなら地下鉄で快適にアクセス可能。久屋大通パークは2020年にリニューアルオープンした緑豊かな公園で、レッスン前後の散歩やランニングにも最適です。ナグスタジオは名古屋市内4店舗あるため、生活圏に合わせて使い分けられます。
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

        {/* Summary - まとめ */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">
              まとめ
            </h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は名古屋のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              名古屋には、音楽×暗闇のピラティスK、理学療法士監修のluluto、少人数制のTwo Three、充実設備のREBORN、栄・名駅展開のアステル、ピラティス＆ヨガのナグスタジオ、養成コース開講のTree、姿勢矯正専門のstudio nanoなど、個性豊かなスタジオが揃っています。
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
              初回限定の体験レッスンは無料〜有料。<br />
              まずは気軽に体験してみましょう。
            </p>
            <Link
              href="#studios"
              className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded"
            >
              おすすめスタジオ一覧に戻る
            </Link>
          </div>
        </section>
      </main>

      <RelatedAreas currentSlug="nagoya" />
      <SiteFooter />

      <Script
        type="application/ld+json"
        id="breadcrumb-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'ホーム',
                item: 'https://pilates-biyori.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'エリアから探す',
                item: 'https://pilates-biyori.com/area',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: '名古屋',
                item: 'https://pilates-biyori.com/area/nagoya',
              },
            ],
          }),
        }}
      />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
