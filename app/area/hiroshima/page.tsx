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
  alternates: { canonical: 'https://biyori-pilates.com/area/hiroshima/' },
  title: '広島のピラティス｜初心者OK・無料体験で選ぶ料金比較【2026年7月】',
  description: '広島エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,広島,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK 広島店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.0,
    reviewCount: 146,
    reviews: [
      {
        author: 'A.M',
        rating: 5,
        date: '1週間前',
        text: '八丁堀駅から徒歩5分で、路面電車で通いやすいです。音楽に合わせたグループレッスンが楽しくて、毎週通うのが楽しみになりました。女性専用なので気兼ねなくトレーニングできます。',
      },
      {
        author: 'Y.K',
        rating: 4,
        date: '2週間前',
        text: '暗闘レッスンが新鮮で、飽きずに続けられます。新天地の商店街にも近いので、レッスン後にお買い物もできて便利。ボディメイクプログラムが充実しています。',
      },
      {
        author: 'S.N',
        rating: 4,
        date: '1ヶ月前',
        text: '広島電鉄で通えるので車がなくても安心。お尻やニの腕に特化したプログラムがあって、気になる部位を集中的に鍛えられます。スタッフの方も親切です。',
      },
    ],
    price: '月4回 13,420円〜',
    trial: '無料体験レッスン',
    features: ['音楽×マシン', '女性専用', '八丁堀駅徒歩5分', '暗闇レッスン'],
    description: '広島の新天地にある女性専用マシンピラティススタジオ。広島電鉄の「八丁堀駅」より徒歩5分と、公共交通機関でのアクセスも便利。カジュアルかつスタイリッシュな店内で、音楽にあわせたグループレッスンを楽しめます。お腹、お尻、二の腕、脚、背中の部位に特化したボディメイクプログラムが充実。',
    access: '広島電鉄 八丁堀駅より徒歩5分',
    address: '広島県広島市中区新天地（詳細は公式サイト参照）',
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
    name: 'zen place pilates 広島',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.2,
    reviewCount: 22,
    reviews: [
      {
        author: 'K.T',
        rating: 5,
        date: '5日前',
        text: '立町駅からも紙屋町東駅からも徒歩2分で、路面電車の利便性が最高です。マットもマシンも両方できて、自分のレベルに合わせて選べるのが良いですね。',
      },
      {
        author: 'M.H',
        rating: 4,
        date: '2週間前',
        text: '全国展開の大手なので安心感があります。広島スタジオのインストラクターも丁寧で、初心者の私でもしっかりフォームを教えてもらえました。男性もOKなので夫婦で通っています。',
      },
      {
        author: 'R.I',
        rating: 4,
        date: '1ヶ月前',
        text: '紙屋町の中心部にあるので、本通り商店街でのお買い物やランチと組み合わせて通えます。月4回9,625円はリーズナブルだと思います。',
      },
    ],
    price: '月4回 9,625円〜',
    trial: '体験レッスン あり',
    features: ['全国150店舗', 'マット＆マシン', '男性OK', '立町駅徒歩2分'],
    description: 'zen place pilates 広島スタジオは、広電1号線 立町駅徒歩2分/紙屋町東駅徒歩2分。マットグループ、マシン（リフォーマー）グループ、プライベートのレッスンがあり、男性もOK。全国150店舗以上を展開する大手ピラティススタジオ。初心者から経験者まで幅広く対応。',
    access: '広電1号線 立町駅徒歩2分/紙屋町東駅徒歩2分',
    address: '広島県広島市中区（詳細は公式サイト参照）',
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
    name: 'CLUB PILATES 広島店',
    image: '/images/studios/club-pilates.webp',
    rating: 4.0,
    reviewCount: 155,
    reviews: [
      {
        author: 'T.S',
        rating: 5,
        date: '1週間前',
        text: 'アメリカ発の世界的ブランドで安心感があります。無料体験30分で雰囲気がよくわかりました。インストラクターが優しくて、ピラティス初体験でも楽しめました。',
      },
      {
        author: 'N.Y',
        rating: 4,
        date: '3週間前',
        text: '広島にいながら世界基準のピラティスが受けられるのが嬉しい。グループもプライベートも選べるので、自分のペースで通えます。',
      },
      {
        author: 'H.M',
        rating: 4,
        date: '1ヶ月前',
        text: '完全初心者でしたが、基礎から丁寧に教えてもらえて安心でした。「できた！」の小さな喜びを積み重ねていける雰囲気がとても良いです。',
      },
    ],
    price: '要問合せ',
    trial: '無料体験レッスン（30分）',
    features: ['アメリカ発', '世界800店舗以上', 'グループ＆プライベート', '初心者歓迎'],
    description: 'CLUB PILATES(クラブピラティス)は世界各国で800店舗以上展開するアメリカ発のピラティススタジオ。「ピラティスって難しそう...」そんな不安をお持ちの方こそ大歓迎！運動が苦手でも、体が硬くても大丈夫。「できた！」の小さな喜びから始めて、少しずつ自信をつけていきましょう。完全初心者の方でも安心して取り組むことが可能です。入会を検討している方向けに30分間の無料体験クラスを開催しております。',
    access: '広島市内（詳細は公式サイト参照）',
    address: '広島県広島市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'グループレッスン',
      description: '世界800店舗以上のネットワーク。初心者でも安心して楽しめる。',
      price: '要問合せ（無料体験30分あり）',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      '初心者向けプログラム',
      '世界最大級ネットワーク',
    ],
    userProfile: {
      ageRange: '20代〜50代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['初心者歓迎', '世界的ブランド', 'ボディメイク', 'グループ＆プライベート'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', 'マシン完備'],
    },
  },
  {
    name: 'La pilates 広島店',
    image: '/images/studios/la-pilates.webp',
    rating: 4.2,
    reviewCount: 18,
    reviews: [
      {
        author: 'E.K',
        rating: 5,
        date: '10日前',
        text: '紙屋町西駅から徒歩3分で、路面電車で気軽に通えます。整体とマシンピラティスの組み合わせが他にはないアプローチで、身体の歪みが改善されてきました。',
      },
      {
        author: 'C.O',
        rating: 4,
        date: '3週間前',
        text: '女性専用なのでリラックスして通えます。明るいスタジオの雰囲気が良くて、レッスンのたびに気分が上がります。紙屋町エリアなのでアクセスも便利。',
      },
      {
        author: 'J.W',
        rating: 4,
        date: '1ヶ月前',
        text: '整体で身体を整えてからピラティスをする流れが効果的。肩こりや腰痛がだいぶ楽になりました。サブスク月1回12,000円から始められるのも良いです。',
      },
    ],
    price: 'サブスク月1回 12,000円〜',
    trial: '体験レッスン 3,000円',
    features: ['整体×マシンピラティス', '紙屋町西駅徒歩3分', '女性専用', '明るいスタジオ'],
    description: '広島市のマシンピラティスならLa pilates｜女性専用・整体×ピラティススタジオ。紙屋町西駅から徒歩3分。La pilates広島店は、整体とマシンピラティスを融合させた、女性専用のスタジオ。身体の歪みを整えながらボディメイク。明るいスタジオで楽しくレッスン。',
    access: '紙屋町西駅から徒歩3分',
    address: '広島県広島市（詳細は公式サイト参照）',
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
  {
    name: 'Rintosull 広島八丁堀店',
    image: '/images/studios/rintosull.webp',
    rating: 4.0,
    reviewCount: 42,
    reviews: [
      {
        author: 'M.T',
        rating: 5,
        date: '5日前',
        text: '八丁堀駅のすぐ近くで、路面電車の停留所からも歩いてすぐ。初心者向けプログラムが充実していて、ピラティスが初めてでも安心して始められました。',
      },
      {
        author: 'K.S',
        rating: 4,
        date: '2週間前',
        text: 'LAVAグループなので信頼感があります。美尻・美脚プログラムが効果的で、2ヶ月目くらいからヒップラインの変化を感じています。女性専用なのも嬉しい。',
      },
      {
        author: 'Y.N',
        rating: 4,
        date: '1ヶ月前',
        text: '広島電鉄で八丁堀まで一本で行けるので通いやすいです。インストラクターが丁寧にサポートしてくれるので、運動が苦手な私でも無理なく続けられています。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['女性専用', '初心者歓迎', 'LAVAグループ', '八丁堀駅近く'],
    description: 'マシンピラティススタジオRintosull 広島八丁堀店。Rintosullでは、運動やピラティスを初めて行う方向けのプログラムをご用意しています。インストラクターがしっかりサポートいたしますので、ご安心ください。美尻や美脚に必要な筋肉にアプローチ。初心者でも安心して通えるスタジオ。',
    access: '八丁堀駅近く（詳細は公式サイト参照）',
    address: '広島県広島市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'グループレッスン',
      description: '初心者向けプログラム充実。美尻・美脚に特化したレッスンも。',
      price: '要問合せ',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      '初心者向けプログラム',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['初心者歓迎', '美尻・美脚', 'ボディメイク', '女性専用'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', '女性専用'],
    },
  },
  {
    name: 'PILATES STUDIO MJ',
    image: '/images/studios/pilates-mj-hiroshima.webp',
    rating: 4.1,
    reviewCount: 10,
    reviews: [
      {
        author: 'F.H',
        rating: 5,
        date: '1週間前',
        text: '完全予約制なので、落ち着いた環境でマンツーマンのレッスンを受けられます。自分の身体の特徴をしっかり分析してもらえて、オーダーメイドのプログラムが効果的です。',
      },
      {
        author: 'D.A',
        rating: 4,
        date: '3週間前',
        text: '安佐南区にあるので広島駅からは少し距離がありますが、車で通う方にはむしろ駐車場が使いやすくて便利。パーソナル専門なので丁寧な指導が受けられます。',
      },
      {
        author: 'L.U',
        rating: 4,
        date: '1ヶ月前',
        text: '一人ひとりに合わせた丁寧な指導で、身体の使い方が変わりました。完全予約制なので他のお客さんと会うこともなく、プライベート感があって良いです。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['広島市安佐南区', '完全予約制', 'パーソナル専門', '理想的なコンディション'],
    description: 'PILATES STUDIO MJは広島県広島市安佐南区にある完全予約制ピラティススタジオです。自分の特徴を知り、体の動かし方を覚える事であなたが望む理想的なコンディションへ。一人ひとりの身体に合わせた丁寧な指導を提供。完全予約制で落ち着いた環境でレッスンを受けられます。',
    access: '広島市安佐南区（詳細は公式サイト参照）',
    address: '広島県広島市安佐南区（詳細は公式サイト参照）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '完全予約制。一人ひとりに合わせた丁寧な指導。',
      price: '要問合せ',
    },
    options: [
      'パーソナルレッスン',
      '完全予約制',
      '個別プログラム',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['パーソナル希望', 'ボディメイク', '丁寧な指導', '完全予約制'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['完全予約制', 'プライベート空間', 'マシン完備'],
    },
  },
  {
    name: 'juncus pilates & conditioning',
    image: '/images/studios/juncus-pilates-hiroshima.webp',
    rating: 4.2,
    reviewCount: 18,
    reviews: [
      {
        author: 'P.K',
        rating: 5,
        date: '10日前',
        text: '理学療法士の資格を持つインストラクターなので、身体の不調についても専門的なアドバイスがもらえます。本川町と幟町の2店舗あるので、予定に合わせて使い分けられるのも便利。',
      },
      {
        author: 'W.O',
        rating: 4,
        date: '2週間前',
        text: '腰痛改善のために通い始めましたが、医療的視点からの身体分析がとても的確でした。広島駅からも路面電車でアクセスしやすい立地です。',
      },
      {
        author: 'B.S',
        rating: 4,
        date: '1ヶ月前',
        text: '幟町のスタジオに通っています。理学療法士ならではの専門的な指導で、身体の使い方が根本的に変わりました。リハビリ目的の方にもおすすめです。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['理学療法士監修', '本川町・幟町2店舗', '幅広いニーズ対応', '医療的視点'],
    description: 'juncus pilates & conditioningは、広島市中区本川町と中区幟町にあるピラティススタジオです。理学療法士の資格を持つインストラクターが、幅広いニーズに合わせたレッスンを提供。医療的視点からの身体分析で、一人ひとりの身体に合わせた最適なプログラムを提案。2店舗展開で通いやすさも抜群。',
    access: '本川町・幟町（2店舗）',
    address: '広島県広島市中区（本川町・幟町）',
    popularPlan: {
      name: '理学療法士監修プログラム',
      description: '医療的視点からの身体分析。幅広いニーズに対応。',
      price: '要問合せ',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      '理学療法士による身体分析',
      '2店舗相互利用可',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['リハビリ', '身体の不調改善', '理学療法士監修', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['理学療法士常駐', 'マシン完備', '2店舗展開'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！広島エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。特にRintosull 広島八丁堀店やCLUB PILATES 広島店は初心者向けプログラムが充実しています。経験豊富なインストラクターが基礎から丁寧に指導してくれるので、運動が苦手な方でも安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。広島ではzen place pilates 広島がマット・マシン両方に対応しています。',
  },
  {
    question: '広島のピラティススタジオの料金相場は？',
    answer: '広島エリアのピラティススタジオの料金相場は、グループレッスンで月4回9,625円〜13,420円程度。パーソナルレッスンや整体併用型はサブスク月1回12,000円〜。CLUB PILATESやRintosullなど要問合せのスタジオもあるので、まずは体験レッスンで確認するのがおすすめです。',
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
    answer: 'はい、改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。特にjuncus pilates & conditioningは理学療法士監修で、身体の不調改善に強みがあります。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスで効果が表れだすのは「2ヶ月を過ぎた頃」から。これは人間の細胞が生まれ変わるサイクルがそのくらいだからです。すぐに変化が表れなくても心配せず、最低でも2ヶ月は継続するのがおすすめです。',
  },
  {
    question: '広島で路面電車で通えるスタジオはありますか？',
    answer: 'はい、多くのスタジオが路面電車でアクセスできます。ピラティスK 広島店は八丁堀駅徒歩5分、zen place pilates 広島は立町駅・紙屋町東駅徒歩2分、La pilates 広島店は紙屋町西駅徒歩3分です。広島電鉄を活用すれば、車がなくても快適に通えますよ。',
  },
]

export default function HiroshimaAreaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '広島', url: 'https://pilates-biyori.com/area/hiroshima/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス広島おすすめ8選！<br className="hidden md:block" />
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
              <span className="text-warm-600">広島</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="広島" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「広島で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、広島エリアでおすすめのピラティススタジオ8選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>広島でピラティススタジオを探している</span>
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
                  <span>路面電車で通いやすいスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="広島" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              広島のおすすめピラティススタジオ8選
            </h2>
            <div className="space-y-8">
              {[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
            </div>
          </div>
        </section>


        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              広島のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">3,000円〜13,420円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 12,000円〜</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜3,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              広島エリアでは全国展開チェーンのスタジオが駅近に出店しているほか、地元のパーソナルスタジオも個性的な料金プランを用意しています。大都市圏と比べると料金水準はやや低めなので、初めてのピラティスにも挑戦しやすい環境です。近隣の岡山エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              広島でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">八丁堀駅からのルートは事前に確認を</h3>
                <p className="text-warm-600 leading-relaxed">
                  広島エリアのスタジオは八丁堀駅周辺が中心です。駅の出口によってスタジオまでの距離が変わることがあるため、初めて訪れる際はGoogleマップで経路を確認し、余裕を持って到着できるようにしましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">広島エリアの人気時間帯を把握して予約を</h3>
                <p className="text-warm-600 leading-relaxed">
                  広島エリアでは平日夕方以降と土日午前中が予約の集中する時間帯です。特にマシンピラティスは定員が少ないため、希望の日時があれば早めの予約がおすすめ。スタジオによってはキャンセル待ち機能やLINE通知で空き枠をお知らせしてくれるところもあります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  広島エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかを確認しましょう。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  広島エリアだけでなく、近隣の<Link href="/area/okayama" className="text-warm-700 underline hover:text-warm-900">岡山</Link>、<Link href="/area/kobe" className="text-warm-700 underline hover:text-warm-900">神戸</Link>、<Link href="/area/fukuoka" className="text-warm-700 underline hover:text-warm-900">福岡</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>広島エリアの豆知識：</strong>広島は地元の方に愛されるスタジオが中心です。車で通う場合は駐車場の有無を事前に確認。電車の場合は駅からの距離だけでなく、帰りの電車の時刻も確認しておくとスムーズです。
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Search by Preference */}
        <section className="py-16 bg-white" id="kodawari">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              目的別おすすめスタジオ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">料金重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額10,000円以下で通えるスタジオ。コスパ重視の方におすすめ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 広島（月4回 9,625円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">マシン完備</h3>
                <p className="text-warm-600 text-sm mb-4">
                  最新のリフォーマーマシンを完備。マシンピラティスを本格的に学びたい方におすすめ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK 広島店</li>
                  <li className="text-warm-700">• zen place pilates 広島</li>
                  <li className="text-warm-700">• La pilates 広島店</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・好アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  路面電車の駅から徒歩5分以内。八丁堀・紙屋町エリアで通いやすい。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• zen place pilates 広島（立町駅徒歩2分）</li>
                  <li className="text-warm-700">• La pilates 広島店（紙屋町西駅徒歩3分）</li>
                  <li className="text-warm-700">• ピラティスK 広島店（八丁堀駅徒歩5分）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性専用で安心して通える。周りの目を気にせずトレーニングに集中。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK 広島店</li>
                  <li className="text-warm-700">• La pilates 広島店</li>
                  <li className="text-warm-700">• Rintosull 広島八丁堀店</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマンで丁寧な指導。短期集中で結果を出したい方に。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• PILATES STUDIO MJ</li>
                  <li className="text-warm-700">• juncus pilates & conditioning</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">ユニーク体験</h3>
                <p className="text-warm-600 text-sm mb-4">
                  シルクサスペンションや整体融合など、他にはない体験ができるスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• LUIRE 広島店（シルクサスペンション）</li>
                  <li className="text-warm-700">• La pilates 広島店（整体×ピラティス）</li>
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
                  グループレッスン中心。手軽に始めたい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates 広島（9,625円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオ。グループ・整体併用。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• La pilates 広島店（12,000円〜）</li>
                  <li>• ピラティスK 広島店（13,420円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">要問合せ</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">各種</p>
                <p className="text-sm text-warm-600 mb-4">
                  パーソナル・専門スタジオ。体験レッスンで確認を。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• CLUB PILATES 広島店</li>
                  <li>• Rintosull 広島八丁堀店</li>
                  <li>• PILATES STUDIO MJ</li>
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
                  広島エリアの料金相場はグループで月4回9,625円〜13,420円程度。無理なく継続できる予算を決めましょう。料金だけでなく、入会金、マット・ウェアのレンタル料なども確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。ピラティスK 広島店やCLUB PILATES 広島店は無料体験を実施しているので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。広島は路面電車が充実しており、八丁堀、紙屋町、立町など主要停留所の近くにスタジオが集まっています。自宅や職場から通いやすい立地を選ぶと、仕事帰りや休日のお出かけついでにも通えて便利ですよ。本通り商店街も近く、レッスン後のお買い物も楽しめます。
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
              今回は広島のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では広島に数多くあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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

      <RelatedAreas currentSlug="hiroshima" />
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
                name: '広島',
                item: 'https://pilates-biyori.com/area/hiroshima',
              },
            ],
          }),
        }}
      />
    </>
  )
}
