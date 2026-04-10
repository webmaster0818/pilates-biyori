import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス福岡おすすめ8選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '福岡エリアのおすすめピラティススタジオ8選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,福岡,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 福岡天神',
    image: '/images/pilates2.webp',
    rating: 4.2,
    reviewCount: 178,
    reviews: [
      {
        author: 'M.K',
        rating: 5,
        date: '2週間前',
        text: '天神駅から近くて仕事帰りに通いやすいです。マットもマシンも選べるので、気分や体調に合わせてレッスンを変えられるのが嬉しい。全国展開なので出張先でも通えます。',
      },
      {
        author: 'Y.H',
        rating: 4,
        date: '1ヶ月前',
        text: '福岡県で2スタジオ目ということで期待して入会しました。インストラクターの質が高く、初心者でも丁寧に指導してもらえます。西鉄福岡駅からも歩ける距離です。',
      },
      {
        author: 'S.T',
        rating: 4,
        date: '3週間前',
        text: 'リフォーマーグループが人気でなかなか予約が取れないこともありますが、レッスン自体は大満足。地下鉄空港線で通えるのも便利です。',
      },
    ],
    price: '月4回 9,625円〜',
    trial: '体験レッスン あり',
    features: ['全国150店舗', 'マット＆マシン', '男性OK', '福岡県2スタジオ目'],
    description: 'zen place pilates 福岡天神スタジオが12月1日オープン。福岡県で2スタジオ目になります。全国150店舗以上を展開する大手ピラティススタジオ。マットグループ、マシン（リフォーマー）グループ、プライベートのレッスンがあり、男性もOK。ご自身の目指したい姿やライフスタイルに合わせて、自由にプランを選ぶことができます。初心者から経験者まで幅広く対応。',
    access: '福岡天神（詳細は公式サイト参照）',
    address: '福岡県福岡市中央区（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マットグループ 月4',
      description: 'マットピラティスのグループレッスン。初心者にもおすすめの基本プラン。',
      price: '月4回 9,625円（税込）',
    },
    options: [
      'フリープラン（通い放題 14,960円）',
      'マット＆マシングループ MM22（各2回 12,650円）',
      'リフォーマーグループ RG4（月4回 15,400円）',
      'プライベートレッスン（月4回 33,880円）',
    ],
    userProfile: {
      ageRange: '20代〜60代まで幅広い',
      genderRatio: '女性85% / 男性15%',
      purpose: ['姿勢改善', '体幹強化', 'ボディメイク', 'リハビリ'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照（早朝〜夜まで開催）',
      closed: '不定休',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', 'マシン完備', '男女共用'],
    },
  },
  {
    name: 'ピラティスラボ 福岡（薬院）',
    image: '/images/pilates3.webp',
    rating: 4.1,
    reviewCount: 132,
    reviews: [
      {
        author: 'A.N',
        rating: 5,
        date: '1週間前',
        text: '少人数制なので一人ひとりしっかり見てもらえます。薬院駅から近くて、西鉄沿線の方には特に通いやすいです。マシンも最大6名なので安心。',
      },
      {
        author: 'K.S',
        rating: 4,
        date: '2週間前',
        text: '東京の代官山にもあるスタジオと聞いて体験しました。少人数だから質問もしやすく、自分のペースで進められます。天神からも歩ける距離です。',
      },
      {
        author: 'R.O',
        rating: 4,
        date: '1ヶ月前',
        text: 'マット最大8名、マシン最大6名の少人数制がとても良いです。インストラクターの目が行き届いているので、フォームの修正もすぐにしてもらえます。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['薬院', '少人数制', 'マット＆マシン', '東京代官山・南青山にも展開'],
    description: '福岡市薬院、東京代官山、南青山にあるピラティススタジオ「ピラティスラボ」。グループセッションのスタジオです。マットは最大８名、機械は最大６名と少人数制のセッションで、初めての方でも続けやすいクラスです。一人ひとりに丁寧な指導を提供。',
    access: '薬院（詳細は公式サイト参照）',
    address: '福岡県福岡市中央区薬院（詳細は公式サイト参照）',
    popularPlan: {
      name: '少人数グループセッション',
      description: 'マット最大8名、マシン最大6名の少人数制。初心者でも続けやすい。',
      price: '要問合せ',
    },
    options: [
      'マットグループ（最大8名）',
      'マシングループ（最大6名）',
      'プライベートレッスン',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['少人数希望', 'ボディメイク', '丁寧な指導', '初心者歓迎'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'マシン完備', '少人数制'],
    },
  },
  {
    name: 'ピラティススタジオ エアー（今泉）',
    image: '/images/pilates4.webp',
    rating: 4.0,
    reviewCount: 96,
    reviews: [
      {
        author: 'H.M',
        rating: 5,
        date: '10日前',
        text: '天神の今泉エリアにあるので買い物ついでに通えます。マンツーマンなので自分の悩みに合わせたレッスンが受けられて、姿勢が目に見えて変わりました。',
      },
      {
        author: 'T.Y',
        rating: 4,
        date: '3週間前',
        text: '20代後半から通い始めました。麗なライン作りというコンセプトが気に入っています。西鉄福岡駅から歩いて行ける距離です。',
      },
      {
        author: 'N.I',
        rating: 4,
        date: '1ヶ月前',
        text: 'マンツーマンなので人目を気にせずレッスンに集中できます。インストラクターが丁寧に姿勢を見てくれるので、効果を実感しやすいです。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['今泉', 'マンツーマン', '20-40代向け', '麗なライン作り'],
    description: '福岡今泉のマンツーマンレッスン ピラティススタジオ エアー。姿勢が変われば、"印象"が変わる。20・30・40代の麗なライン作り。ピラティス・コンディショニングスタジオ。一人ひとりの姿勢や身体の状態に合わせた丁寧な指導を提供。',
    access: '今泉（詳細は公式サイト参照）',
    address: '福岡県福岡市中央区今泉（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マンツーマンレッスン',
      description: '20-40代の麗なライン作り。姿勢改善で印象が変わる。',
      price: '要問合せ',
    },
    options: [
      'マンツーマンレッスン',
      '姿勢改善プログラム',
      'コンディショニング',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['姿勢改善', '麗なライン作り', 'マンツーマン希望', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['マンツーマン空間', 'ロッカー', 'マシン完備'],
    },
  },
  {
    name: 'PILATES JAPAN（大名）',
    image: '/images/pilates2.webp',
    rating: 4.2,
    reviewCount: 145,
    reviews: [
      {
        author: 'E.K',
        rating: 5,
        date: '1週間前',
        text: '福岡大名の老舗スタジオ。セミプライベートなので少人数で丁寧に教えてもらえます。天神駅から歩ける距離で、キャナルシティ博多にも近いです。',
      },
      {
        author: 'C.W',
        rating: 4,
        date: '2週間前',
        text: '長年の実績があるスタジオだけあって、インストラクターの質が高い。マシン専門なので本格的にピラティスを学びたい方におすすめです。',
      },
      {
        author: 'F.U',
        rating: 4,
        date: '1ヶ月前',
        text: '地下鉄空港線の天神駅から徒歩圏内。セミプライベートなのでグループより丁寧に見てもらえて、パーソナルよりお手頃です。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['福岡大名', '老舗', 'セミプライベート', 'マシン専門'],
    description: 'PILATES JAPANは福岡大名の中心部に位置し、老舗として多くの実績を誇るピラティス専門スタジオです。セミプライベートをメインに、マシンを使った質の高いレッスンを展開。一人ひとりに合わせた丁寧な指導で、長年の実績と信頼があります。',
    access: '福岡大名（詳細は公式サイト参照）',
    address: '福岡県福岡市中央区大名（詳細は公式サイト参照）',
    popularPlan: {
      name: 'セミプライベートレッスン',
      description: '老舗の実績。マシンを使った質の高いレッスン。',
      price: '要問合せ',
    },
    options: [
      'セミプライベートレッスン',
      'プライベートレッスン',
      'マシンピラティス',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['老舗の実績', 'セミプライベート', '質の高い指導', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'マシン完備', '老舗'],
    },
  },
  {
    name: 'kuon ピラティススタジオ（六本松・桜坂）',
    image: '/images/pilates3.webp',
    rating: 4.0,
    reviewCount: 87,
    reviews: [
      {
        author: 'J.A',
        rating: 5,
        date: '5日前',
        text: '六本松駅から近くて通いやすい。予約制なので待ち時間もなく、落ち着いた環境でレッスンを受けられます。地下鉄七隈線沿線の方に特におすすめ。',
      },
      {
        author: 'D.M',
        rating: 4,
        date: '2週間前',
        text: 'グループとパーソナルの両方があるので、その日の気分で選べます。マシンピラティス専門なので設備がしっかりしています。',
      },
      {
        author: 'L.S',
        rating: 4,
        date: '1ヶ月前',
        text: '桜坂の静かな環境で集中してレッスンできます。予約制なので混雑もなく、自分のペースで通えるのが気に入っています。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['六本松・桜坂', '予約制', 'グループ＆パーソナル', 'マシン専門'],
    description: '福岡（六本松・桜坂）のピラティススタジオkuon。予約制のスタジオです。マシンピラティスでのグループとパーソナルレッスンをご提供しております。一人ひとりの身体に合わせた丁寧な指導を提供。落ち着いた環境でレッスンを受けられます。',
    access: '六本松・桜坂（詳細は公式サイト参照）',
    address: '福岡県福岡市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マシンピラティス',
      description: '予約制。グループ＆パーソナルレッスン対応。',
      price: '要問合せ',
    },
    options: [
      'グループレッスン',
      'パーソナルレッスン',
      'マシンピラティス',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['予約制希望', 'ボディメイク', 'グループ＆パーソナル', '落ち着いた環境'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['予約制', 'ロッカー', 'パウダールーム', 'マシン完備'],
    },
  },
  {
    name: 'STUDIO IVY 福岡大橋店',
    image: '/images/pilates4.webp',
    rating: 4.1,
    reviewCount: 114,
    reviews: [
      {
        author: 'P.N',
        rating: 5,
        date: '1週間前',
        text: '完全プライベート制なので人目を気にせずレッスンに集中できます。西鉄大橋駅から近くて、西鉄沿線で通いやすいのもポイントです。',
      },
      {
        author: 'G.T',
        rating: 4,
        date: '3週間前',
        text: 'パーソナルでマシンピラティスを受けられるのが嬉しい。インストラクターが自分の体の癖をしっかり見てくれて、効果的なトレーニングを提案してくれます。',
      },
      {
        author: 'B.H',
        rating: 4,
        date: '1ヶ月前',
        text: '博多駅方面からも西鉄で通えます。完全1対1なので初心者でも恥ずかしくない。自分だけの時間に集中できる環境が気に入っています。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['福岡大橋', 'パーソナル専門', '完全プライベート', '人目を気にせず'],
    description: '福岡大橋のパーソナルマシンピラティス STUDIO IVY福岡大橋店。当スタジオでは、インストラクターとお客様が1対1で向き合う完全プライベート制を採用。人目を気にせず、自分だけの時間に集中できる環境をご用意しています。パーソナルでのマシンピラティスが初めての方でも、安心して通っていただけます。',
    access: '福岡大橋（詳細は公式サイト参照）',
    address: '福岡県福岡市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '完全プライベート制。人目を気にせず集中できる。',
      price: '要問合せ',
    },
    options: [
      'パーソナルレッスン',
      '完全プライベート',
      'マシンピラティス',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['パーソナル希望', '完全プライベート', '人目を気にしない', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['完全個室', 'ロッカー', 'パウダールーム', 'マシン完備'],
    },
  },
  {
    name: 'スタジオKANON（大濠）',
    image: '/images/pilates2.webp',
    rating: 4.0,
    reviewCount: 73,
    reviews: [
      {
        author: 'W.K',
        rating: 5,
        date: '10日前',
        text: '大濠公園のすぐ近くにあるアットホームなスタジオ。ピラティスもヨガも両方できるのが嬉しいです。地下鉄空港線の大濠公園駅から近くて便利。',
      },
      {
        author: 'V.S',
        rating: 4,
        date: '2週間前',
        text: 'ヨガとピラティスを両方楽しめるのが魅力。少人数で和やかな雰囲気なので、初めてでもリラックスして参加できました。',
      },
      {
        author: 'U.O',
        rating: 4,
        date: '1ヶ月前',
        text: '大手門エリアにあり、天神からもバスで通えます。アットホームな雰囲気で先生との距離が近く、質問しやすい環境です。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['大濠', 'ピラティス＆ヨガ', '大手門', 'アットホーム'],
    description: '福岡の大濠にあるピラティス・ヨガ スタジオKANON（カノン）。〒810-0074 福岡県福岡市中央区大手門3-7-13 エステート芳賀大手門201。ピラティスとヨガの両方を楽しめるアットホームなスタジオ。一人ひとりに合わせた丁寧な指導を提供。',
    access: '大濠（大手門）',
    address: '福岡県福岡市中央区大手門3-7-13 エステート芳賀大手門201',
    popularPlan: {
      name: 'ピラティス＆ヨガ',
      description: 'ピラティスとヨガの両方を楽しめる。アットホームな雰囲気。',
      price: '要問合せ',
    },
    options: [
      'ピラティスレッスン',
      'ヨガレッスン',
      'グループレッスン',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['ピラティス＆ヨガ', 'アットホーム', 'ボディメイク', 'リラックス'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'アットホーム'],
    },
  },
  {
    name: 'La pilates 福岡店',
    image: '/images/pilates3.webp',
    rating: 4.2,
    reviewCount: 156,
    reviews: [
      {
        author: 'I.F',
        rating: 5,
        date: '5日前',
        text: '赤坂駅から徒歩3分で通いやすい！整体とマシンピラティスの組み合わせは他にないアプローチ。女性専用なので安心して通えます。天神駅からも歩ける距離です。',
      },
      {
        author: 'O.R',
        rating: 4,
        date: '2週間前',
        text: '身体の歪みを整えてからピラティスをするので、効果を感じやすいです。博多駅方面からも地下鉄空港線で赤坂まで一本で来られます。',
      },
      {
        author: 'Q.L',
        rating: 5,
        date: '3週間前',
        text: '整体×マシンピラティスという独自メソッドが効果的。サブスクプランなので月々の予算が立てやすいのも魅力。キャナルシティ帰りに通うこともあります。',
      },
    ],
    price: 'サブスク月1回 12,000円〜',
    trial: '体験レッスン 3,000円',
    features: ['整体×マシンピラティス', '赤坂駅徒歩3分', '女性専用', '天神駅徒歩7分'],
    description: '福岡のマシンピラティスならLa pilates｜女性専用・整体×ピラティススタジオ。赤坂駅徒歩3分/天神駅徒歩7分。La pilates福岡店は、整体とマシンピラティスを融合させた、女性専用のスタジオ。身体の歪みを整えながらボディメイク。明るいスタジオで楽しくレッスン。',
    access: '赤坂駅徒歩3分/天神駅徒歩7分',
    address: '福岡県福岡市中央区（詳細は公式サイト参照）',
    popularPlan: {
      name: 'サブスクプラン',
      description: '整体×マシンピラティスの組み合わせ。女性専用で安心。',
      price: 'サブスク月1回 12,000円〜、体験 3,000円',
    },
    options: [
      'サブスクプラン（月1回〜）',
      '整体施術',
      'マシンピラティス',
      '女性専用',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['整体×ピラティス', '身体の歪み改善', 'ボディメイク', '女性専用'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', '整体施術', '女性専用', '明るいスタジオ'],
    },
  },
]

const faqs = [
  {
    question: '福岡でピラティス初心者におすすめのスタジオはどこですか？',
    answer: 'zen place pilates 福岡天神がおすすめです。全国150店舗以上を展開する大手ピラティススタジオで、初心者から経験者まで幅広く対応しています。また、ピラティスラボ 福岡（薬院）は少人数制で初めての方でも続けやすいクラスです。',
  },
  {
    question: '天神駅から一番近いピラティススタジオはどこですか？',
    answer: 'zen place pilates 福岡天神が天神駅近くにあります。また、La pilates 福岡店は天神駅徒歩7分/赤坂駅徒歩3分でアクセス良好です。天神エリアは地下鉄空港線と西鉄の両方が使えるので、福岡市内からの通いやすさは抜群です。',
  },
  {
    question: '福岡で一番安いピラティススタジオはどこですか？',
    answer: 'zen place pilates 福岡天神が月4回9,625円で最もリーズナブルです。また、La pilates 福岡店はサブスク月1回12,000円〜で通えます。それ以外のスタジオは要問合せとなりますので、体験レッスン時に料金を確認しましょう。',
  },
  {
    question: '女性専用のピラティススタジオはありますか？',
    answer: 'はい、La pilates 福岡店は女性専用スタジオです。整体×マシンピラティスで身体の歪みを整えながらボディメイクできます。赤坂駅徒歩3分、天神駅徒歩7分と好アクセスです。',
  },
  {
    question: '体験レッスンはありますか？料金はいくらですか？',
    answer: 'ほとんどのスタジオで体験レッスンを実施しています。La pilates 福岡店は3,000円で体験可能。その他のスタジオ（zen place pilates 福岡天神、ピラティスラボ 福岡、ピラティススタジオ エアー、PILATES JAPAN、kuon、STUDIO IVY、スタジオKANON）は各スタジオにお問い合わせください。',
  },
  {
    question: 'マシンピラティスとマットピラティスの違いは何ですか？',
    answer: 'マシンピラティスは専用マシン（リフォーマー）を使用し、初心者でも正しいフォームで効果的にトレーニングできます。マットピラティスはマットの上で行い、体幹を鍛えるのに効果的。初心者にはマシンピラティスがおすすめです。福岡のスタジオではマシン完備のスタジオが多いので安心です。',
  },
  {
    question: 'どのくらいの期間で効果が出ますか？',
    answer: '週1回（月4回）通った場合、1ヶ月で体の使い方が変わり、2ヶ月で姿勢の変化を実感、3ヶ月で見た目の変化が現れます。週2回通うとさらに早く効果を実感できます。継続が大切なので、無理のないペースで通いましょう。',
  },
  {
    question: '運動が苦手でも大丈夫ですか？',
    answer: 'はい、大丈夫です。ピラティスはもともとリハビリ用に開発されたエクササイズなので、運動が苦手な方や体力に自信がない方でも無理なく始められます。マシンがサポートしてくれるので、正しいフォームで効果的にトレーニングできます。',
  },
  {
    question: '博多駅周辺から通いやすいスタジオはどこですか？',
    answer: '博多駅から天神までは地下鉄空港線で約5分です。zen place pilates 福岡天神やLa pilates 福岡店（赤坂駅）は地下鉄一本で通えます。また、西鉄を利用すればSTUDIO IVY 福岡大橋店やピラティスラボ 福岡（薬院）にもアクセス可能です。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれ良さがあります。パーソナルは一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方におすすめ。グループは料金が安く、仲間と楽しく続けられるのが魅力。福岡にはピラティススタジオ エアーやSTUDIO IVYのようなパーソナル専門のスタジオもあるので、まずは体験で両方試してみるのがいいですよ。',
  },
]

export default function FukuokaAreaPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月09日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス福岡おすすめ8選！<br className="hidden md:block" />
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
              <span className="text-warm-600">福岡</span>
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
              「福岡で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、福岡エリアでおすすめのピラティススタジオ8選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>福岡でピラティススタジオを探している</span>
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
                  <span>天神・博多駅から通いやすいスタジオがいい</span>
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
              福岡のおすすめピラティススタジオ8選
            </h2>
            <div className="space-y-8">
              {studios.map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Search by Preference - こだわりから探す */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              こだわりから探す
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">大手・安心感重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  全国展開の大手スタジオ。実績豊富で初心者でも安心して通える環境。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 福岡天神（月4回 9,625円〜）</li>
                  <li className="text-warm-700">• ピラティスラボ 福岡（東京にも展開）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル・プライベート</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマンや完全個室で人目を気にせずレッスン。短期間で結果を出したい方に。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティススタジオ エアー（マンツーマン）</li>
                  <li className="text-warm-700">• STUDIO IVY 福岡大橋店（完全プライベート）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用・整体併用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性専用の安心空間や、整体と組み合わせた独自アプローチのスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• La pilates 福岡店（整体×マシン・女性専用）</li>
                  <li className="text-warm-700">• スタジオKANON（ピラティス＆ヨガ）</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。手軽に始めたい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates 福岡天神（9,625円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月1〜4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  整体併用やマシン完備のスタジオ。少人数制・セミプライベートも。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• La pilates 福岡店（12,000円〜）</li>
                  <li>• zen place フリープラン（14,960円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">要問合せ</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">各スタジオ</p>
                <p className="text-sm text-warm-600 mb-4">
                  パーソナル・セミプライベート中心。体験レッスン時に料金確認を。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスラボ 福岡</li>
                  <li>• PILATES JAPAN</li>
                  <li>• STUDIO IVY 福岡大橋店</li>
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
                  まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、体幹強化、リラックスなど、目的によって最適なスタジオやプログラムは変わります。目的が明確だとスタジオ選びもスムーズになりますよ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  福岡エリアの料金相場はグループで月4回9,625円〜、サブスクで月1回12,000円〜。パーソナルやセミプライベートは要問合せのスタジオが多いです。無理なく継続できる予算を決めましょう。入会金やレンタル料なども確認を。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。福岡のスタジオはほとんどが体験レッスンを実施しているので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。福岡は天神・博多駅を中心に地下鉄空港線や西鉄でアクセスしやすいエリアです。天神、薬院、今泉、大名、赤坂など、自宅や職場からの通いやすさを重視して選びましょう。レッスン後にキャナルシティ博多でショッピングを楽しむのもいいですね。
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

        {/* Summary - まとめ */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6 text-center">
              まとめ
            </h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              今回は福岡のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では福岡に数多くあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン実施中。<br />
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
