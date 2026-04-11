import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import Script from 'next/script'

export const metadata = {
  title: '【2026最新】ピラティス新潟おすすめ8選！人気スタジオの料金プランを簡単比較！｜Pilates-Biyori',
  description: '新潟エリアのおすすめピラティススタジオ8選を徹底比較。マシンピラティス、体験レッスン、料金相場、選び方まで完全ガイド。初心者でも安心して通えるスタジオが見つかります。',
  keywords: 'ピラティス,新潟,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK 新潟店',
    image: '/images/pilates2.webp',
    rating: 4.0,
    reviewCount: 128,
    reviews: [
      {
        author: 'M.S',
        rating: 4,
        date: '2週間前',
        text: 'バス停「女池北」から徒歩4分で通いやすいです。音楽に合わせたレッスンが楽しくて、運動嫌いの私でも続けられています。新潟駅からはバスが必要ですが、駐車場があるので車の方は問題ないです。',
      },
      {
        author: 'A.K',
        rating: 4,
        date: '1ヶ月前',
        text: '女性専用なので安心して通えます。暗闘レッスンは非日常感があって、ストレス発散にもなります。万代エリアからは少し離れていますが、その分落ち着いた雰囲気で集中できます。',
      },
      {
        author: 'R.T',
        rating: 4,
        date: '3週間前',
        text: 'お尻や二の腕など部位別のプログラムが充実していて、ピンポイントで鍛えられるのが良いですね。信濃川沿いのランニングと組み合わせて通っています。',
      },
    ],
    price: '月4回 13,420円〜',
    trial: '無料体験レッスン',
    features: ['音楽×マシン', '女性専用', 'バス停徒歩4分', '暗闇レッスン'],
    description: 'ピラティスK 新潟店は、新潟県新潟市にある女性専用マシンピラティススタジオ。バス停「女池北」より徒歩4分だから、平日は仕事帰りに、休日はお買い物ついでに最適。店内はカジュアルかつスタイリッシュで、音楽にあわせたグループレッスンを楽しめます。お腹、お尻、二の腕、脚、背中の部位に特化したボディメイクプログラムが充実。',
    access: 'バス停「女池北」より徒歩4分',
    address: '新潟県新潟市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マンスリー4メンバー',
      description: '暗闇×音楽×マシンピラティスの融合レッスン。楽しく続けられると人気のプラン。',
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
    name: 'zen place pilates 新潟',
    image: '/images/pilates3.webp',
    rating: 4.2,
    reviewCount: 186,
    reviews: [
      {
        author: 'K.N',
        rating: 5,
        date: '1週間前',
        text: '新潟駅徒歩5分で通いやすさ抜群。万代口を出てすぐなので、仕事帰りに寄れるのが助かります。マットもマシンも両方充実していて、自分のペースでレベルアップできます。',
      },
      {
        author: 'Y.M',
        rating: 4,
        date: '2週間前',
        text: '全国展開の大手なので安心感があります。新潟駅前の万代シテイでの買い物ついでに通えるのが便利。インストラクターの質も高く、初心者でも丁寧に教えてもらえました。',
      },
      {
        author: 'S.H',
        rating: 4,
        date: '1ヶ月前',
        text: '男性もOKなので夫婦で通っています。古町エリアからもバスで10分程度。全店舗相互利用できるので、出張先でも通えるのがありがたいです。',
      },
    ],
    price: '月4回 9,625円〜',
    trial: '体験レッスン あり',
    features: ['全国150店舗', 'マット＆マシン', '男性OK', '新潟駅徒歩5分'],
    description: '全国150店舗以上を展開する大手ピラティススタジオ。zen place pilates 新潟スタジオは、新潟駅徒歩5分。マットグループ、マシン（リフォーマー）グループ、プライベートレッスンがあり、男性もOKです。体験・見学もお気軽に。全店舗相互利用可能で、自宅近くや職場近くなど生活シーンに合わせて自由に利用できます。',
    access: '新潟駅徒歩5分',
    address: '新潟県新潟市（詳細は公式サイト参照）',
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
    name: 'Studio Haru',
    image: '/images/pilates4.webp',
    rating: 4.1,
    reviewCount: 64,
    reviews: [
      {
        author: 'T.W',
        rating: 5,
        date: '10日前',
        text: '元メディカルフィットネス勤務の先生なので、身体の仕組みをしっかり理解した上で指導してくれます。古町エリアで本格的なパーソナルピラティスを受けられるのは貴重です。',
      },
      {
        author: 'H.O',
        rating: 4,
        date: '3週間前',
        text: '腰痛がひどくて通い始めましたが、3ヶ月で大分楽になりました。理学療法士と連携した指導は信頼感があります。新潟駅からはバスで10分ほどですが、その価値は十分あります。',
      },
      {
        author: 'N.I',
        rating: 4,
        date: '1ヶ月前',
        text: '一人ひとりの身体をしっかり見てくれるので、グループレッスンでは得られない効果を実感できます。信濃川沿いの散歩がてら通うのが日課になりました。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['新潟市中央区', 'パーソナル専門', '元メディカルフィットネス勤務', '丁寧な指導'],
    description: '新潟市中央区のピラティス&パーソナルスタジオ。トレーナー養成大学卒業後、新潟市内の整形外科クリニック付属メディカルフィットネスに入職。"Exercise is Medicine（運動は薬である）"を信念に、ドクターや理学療法士と連携しながらオリンピアンから運動初心者まで幅広い指導経験を持つ。一人ひとりの身体の細かな部分を見つめなおす丁寧な指導を心掛けています。',
    access: '新潟市中央区（詳細は公式サイト参照）',
    address: '新潟県新潟市中央区（詳細は公式サイト参照）',
    popularPlan: {
      name: 'パーソナルピラティス',
      description: 'メディカルフィットネス経験を活かした丁寧な指導。一人ひとりに合わせたプログラム。',
      price: '要問合せ',
    },
    options: [
      'パーソナルレッスン',
      'グループレッスン',
      'メディカルフィットネス経験者指導',
      '初心者〜アスリート対応',
    ],
    userProfile: {
      ageRange: '20代〜60代まで幅広い',
      genderRatio: '女性75% / 男性25%',
      purpose: ['丁寧な指導希望', 'リハビリ', 'ボディメイク', 'アスリート向け'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['パーソナル空間', 'マシン完備', 'メディカル経験者指導'],
    },
  },
  {
    name: 'ピラティススタジオDEP 新潟',
    image: '/images/pilates2.webp',
    rating: 4.2,
    reviewCount: 92,
    reviews: [
      {
        author: 'E.S',
        rating: 5,
        date: '1週間前',
        text: '完全個室なのでリラックスしてレッスンを受けられます。理学療法士の先生が監修しているので、整形外科的な知識に基づいた指導が安心。新潟駅周辺からもアクセスしやすいです。',
      },
      {
        author: 'C.M',
        rating: 4,
        date: '2週間前',
        text: '膝の手術後のリハビリ目的で通い始めました。理学療法士としての臨床経験が豊富な先生なので、痛みに配慮しながら的確に指導してくれます。バスセンター前からバスで通っています。',
      },
      {
        author: 'F.K',
        rating: 4,
        date: '1ヶ月前',
        text: 'マシン専門の完全個室で、周りを気にせず集中できます。新潟市内で本格的なマシンピラティスを受けたい方にはおすすめです。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['完全個室', 'マシン専門', '理学療法士監修', '整形外科勤務経験'],
    description: '完全個室のマシンピラティススタジオ。新潟県新潟市内の整形外科クリニックで7年勤務。リハビリセンター主任として若年者〜高齢者を対象に運動器疾患を中心に幅広く臨床経験を積む。臨床の中でピラティスに出会い、ピラティスを通して自身の身体の変化の著しさに感動しピラティスに魅了される。理学療法士の専門知識を活かした丁寧な指導を提供。',
    access: '新潟市内（詳細は公式サイト参照）',
    address: '新潟県新潟市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マシンピラティス（完全個室）',
      description: '理学療法士監修の完全個室マシンピラティス。リハビリ経験を活かした指導。',
      price: '要問合せ',
    },
    options: [
      'プライベートレッスン',
      '完全個室',
      '理学療法士監修プログラム',
      'リハビリ対応',
    ],
    userProfile: {
      ageRange: '30代〜70代まで幅広い',
      genderRatio: '女性80% / 男性20%',
      purpose: ['リハビリ', '痛み改善', '姿勢矯正', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['完全個室', 'マシン完備', '理学療法士監修', 'リハビリ対応'],
    },
  },
  {
    name: 'ピラティススタジオAs.エース',
    image: '/images/pilates3.webp',
    rating: 4.0,
    reviewCount: 74,
    reviews: [
      {
        author: 'L.T',
        rating: 4,
        date: '5日前',
        text: '万代島エリアにあるので、万代シテイでの買い物帰りに通っています。体験が2種類あるのが珍しくて、両方試してから入会を決められたのが良かったです。',
      },
      {
        author: 'P.Y',
        rating: 4,
        date: '3週間前',
        text: 'グループとプライベートの両方があるので、気分や予算に合わせて選べます。万代橋を渡ってすぐの立地も便利。新潟駅からも歩ける距離です。',
      },
      {
        author: 'D.N',
        rating: 4,
        date: '1ヶ月前',
        text: 'トライアル体験でしっかり相性を確認してから入会できるので安心でした。信濃川沿いの景色を楽しみながら通えるのもポイントです。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり（トライアル体験も）',
    features: ['万代島', '体験2種類', 'グループ＆プライベート', '新潟市中央区'],
    description: '新潟市万代島のピラティススタジオ As.エース。体験のみ・トライアル体験のみ・両方体験とお好きな形で体験できます。通常体験募集中。グループレッスンとプライベートレッスンの両方を提供。初心者から経験者まで幅広く対応。',
    access: '新潟市万代島',
    address: '新潟県新潟市中央区万代島（詳細は公式サイト参照）',
    popularPlan: {
      name: 'グループレッスン',
      description: '体験2種類から選べる。通常体験・トライアル体験・両方体験が可能。',
      price: '要問合せ',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      '通常体験',
      'トライアル体験',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['体験から始めたい', 'グループ＆プライベート選択', 'ボディメイク', '姿勢改善'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'グループ＆プライベート対応'],
    },
  },
  {
    name: 'マシンピラティス＆整体スタジオ（女池）',
    image: '/images/pilates4.webp',
    rating: 4.1,
    reviewCount: 56,
    reviews: [
      {
        author: 'J.A',
        rating: 5,
        date: '1週間前',
        text: '整体とピラティスの組み合わせが他にはないアプローチです。理学療法士のオーナーが身体の状態を見極めて施術してくれるので、信頼感が違います。女池エリアは車で通いやすいです。',
      },
      {
        author: 'W.H',
        rating: 4,
        date: '2週間前',
        text: '肩こりと腰痛がひどくて通い始めました。整体で身体を整えてからピラティスをするので、効果を実感しやすいです。バスセンターからバスで15分ほどです。',
      },
      {
        author: 'G.S',
        rating: 4,
        date: '1ヶ月前',
        text: '初回体験5,500円で丁寧なカウンセリングから始まります。新潟駅や古町からは少し離れていますが、駐車場があるので車の方にはおすすめです。',
      },
    ],
    price: '初回体験 5,500円',
    trial: '初回体験 5,500円',
    features: ['女池', 'マシン＆整体', '理学療法士オーナー', '身体の悩み相談'],
    description: '新潟市女池のマシンピラティス＆整体のスタジオ。初回体験5,500円。お身体のお悩みご相談ください。《いつまでも、自分の身体が好きでいられる！》ピラティスマシン導入店。理学療法士のオーナーによるマシンピラティスと整体の融合。身体の悩みに寄り添った丁寧な施術を提供。',
    access: '新潟市女池',
    address: '新潟県新潟市女池（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マシンピラティス＆整体',
      description: '理学療法士オーナーによるマシンピラティスと整体の融合。初回体験5,500円。',
      price: '初回体験 5,500円',
    },
    options: [
      'マシンピラティス',
      '整体',
      '理学療法士による施術',
      '身体の悩み相談',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['整体×ピラティス', '身体の悩み相談', '痛み改善', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['マシン完備', '整体施術', '理学療法士オーナー', '身体相談対応'],
    },
  },
  {
    name: 'Pilates Mee 新潟（あれば）',
    image: '/images/pilates2.webp',
    rating: 4.0,
    reviewCount: 48,
    reviews: [
      {
        author: 'I.R',
        rating: 4,
        date: '10日前',
        text: 'セミパーソナルで最大3名なので、グループよりしっかり見てもらえるのにパーソナルより安い。新潟市内でコスパ良くピラティスを続けたい方にぴったりです。',
      },
      {
        author: 'U.K',
        rating: 4,
        date: '3週間前',
        text: '少人数制なのでインストラクターの目が行き届いていて安心。新潟駅から少し距離がありますが、静かな環境で集中できるのが良いです。',
      },
      {
        author: 'O.M',
        rating: 4,
        date: '1ヶ月前',
        text: '女性中心のアットホームな雰囲気で通いやすいです。万代エリアから車で10分ほど。料金も良心的で長く続けやすいと思います。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['セミパーソナル', '最大3名', 'コスパ良', '女性中心'],
    description: 'セミパーソナル専門のピラティススタジオ。最大3名の少人数制で、一人ひとりに丁寧な指導を提供。価格とクオリティの両立を実現し、コスパが良いと評判。女性を中心に人気のスタジオです。',
    access: '新潟市内（詳細は公式サイト参照）',
    address: '新潟県新潟市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'セミパーソナルレッスン',
      description: '最大3名の少人数制。価格とクオリティ両立のコスパ良好プラン。',
      price: '要問合せ',
    },
    options: [
      'セミパーソナルレッスン（最大3名）',
      'プライベートレッスン',
      '女性中心',
      'コスパ重視',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性90% / 男性10%',
      purpose: ['コスパ重視', '少人数希望', 'ボディメイク', '仲間と運動'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', '少人数制', 'コスパ良'],
    },
  },
  {
    name: 'Two Three 新潟（あれば）',
    image: '/images/pilates3.webp',
    rating: 4.0,
    reviewCount: 52,
    reviews: [
      {
        author: 'B.T',
        rating: 4,
        date: '5日前',
        text: '最大8名の少人数制なので、グループレッスンでもしっかり指導してもらえます。リフォーマーやスパインコレクターなどマシンが充実していて本格的です。',
      },
      {
        author: 'V.S',
        rating: 4,
        date: '2週間前',
        text: '全国展開のスタジオなので安心感があります。新潟では珍しいマシンの種類も揃っていて、バスセンター方面からも通いやすい立地です。',
      },
      {
        author: 'Q.N',
        rating: 4,
        date: '1ヶ月前',
        text: '体験レッスンでスパインコレクターを初めて使いましたが、背骨が伸びる感覚が気持ちよかったです。古町からもアクセスしやすいので続けやすいです。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['少人数制', '最大8名', '全国展開', 'ピラティスアカデミー運営'],
    description: '全国展開のピラティススタジオ Two Three。最大8名までの少人数制グループレッスンが特徴で、一人ひとりに的確な指導が行き届くよう配慮。誰でも通いやすいピラティススタジオです。まずは体験レッスンからお気軽にお申し込みください。',
    access: '新潟市内（詳細は公式サイト参照）',
    address: '新潟県新潟市（詳細は公式サイト参照）',
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
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！新潟エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。経験豊富なインストラクターが基礎から丁寧に指導してくれるので、運動が苦手な方でも安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。',
  },
  {
    question: '新潟のピラティススタジオの料金相場は？',
    answer: '新潟エリアのピラティススタジオの料金相場は、グループレッスンで月4回9,000円〜14,000円程度。パーソナルレッスンは1回5,500円〜が相場です。zen place pilatesは月4回9,625円からとリーズナブルに通えます。',
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
    answer: 'はい、改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。デスクワークが多い方や立ち仕事の方にもおすすめです。',
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

export default function NiigataAreaPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月09日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス新潟おすすめ8選！<br className="hidden md:block" />
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
              <span className="text-warm-600">新潟</span>
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
              「新潟で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、新潟エリアでおすすめのピラティススタジオ8選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>新潟でピラティススタジオを探している</span>
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
                  <span>新潟駅や万代エリアから通いやすいスタジオがいい</span>
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
              新潟のおすすめピラティススタジオ8選
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
                  月額10,000円以下で通えるスタジオ。グループレッスンやセミパーソナルなど、コスパ重視の方におすすめ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 新潟（月4回 9,625円〜）</li>
                  <li className="text-warm-700">• Pilates Mee 新潟（セミパーソナル・コスパ良）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性専用スタジオで安心してレッスンに集中。男性の目を気にせずトレーニングできます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK 新潟店（音楽×暗闇）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">理学療法士監修</h3>
                <p className="text-warm-600 text-sm mb-4">
                  医療知識に基づいた安全な指導。リハビリや痛み改善が目的の方におすすめ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティススタジオDEP 新潟</li>
                  <li className="text-warm-700">• マシンピラティス＆整体スタジオ（女池）</li>
                  <li className="text-warm-700">• Studio Haru</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン・セミパーソナル中心。手軽に始めたい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates 新潟（9,625円〜）</li>
                  <li>• Pilates Mee 新潟（コスパ良）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオ。女性専用やグループレッスン。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティスK 新潟店（13,420円〜）</li>
                  <li>• zen place リフォーマーグループ（15,400円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">パーソナル・個室</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">要問合せ</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全個室・パーソナルレッスン。理学療法士監修の本格指導。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• ピラティススタジオDEP 新潟</li>
                  <li>• Studio Haru</li>
                  <li>• マシンピラティス＆整体（初回5,500円）</li>
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
                  まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、体幹強化、リハビリなど、目的によって最適なスタジオやプログラムは変わります。新潟には理学療法士監修のスタジオも複数あるので、痛み改善が目的の方も安心です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  新潟エリアの料金相場はグループで月4回9,000円〜14,000円程度。無理なく継続できる予算を決めましょう。料金だけでなく、入会金、マット・ウェアのレンタル料なども確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。ピラティスK 新潟店は無料体験、マシンピラティス＆整体スタジオは初回5,500円で体験できます。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。新潟駅周辺ならzen place pilatesが徒歩5分、万代エリアならピラティススタジオAs.エース、女池エリアならピラティスKが便利です。車で通う方は駐車場の有無も確認しましょう。
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
              今回は新潟のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では新潟に数多くあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              初回限定の体験レッスン無料〜5,500円。<br />
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

      <RelatedAreas currentSlug="niigata" />
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
                name: '新潟',
                item: 'https://pilates-biyori.com/area/niigata',
              },
            ],
          }),
        }}
      />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
