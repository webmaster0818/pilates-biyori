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
  title: '神戸のピラティス｜初心者OK・無料体験で選ぶ料金比較【2026年6月】',
  description: '神戸エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,神戸,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'ピラティスK 神戸三宮店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.0,
    reviewCount: 235,
    reviews: [
      {
        author: 'A.M',
        rating: 4,
        date: '1週間前',
        text: '阪急神戸三宮駅から徒歩3分で通いやすいです。暗闘×音楽のレッスンが楽しくて、毎回あっという間に終わります。女性専用なので気兼ねなく動けるのもいい。',
      },
      {
        author: 'S.T',
        rating: 4,
        date: '2週間前',
        text: 'ボディメイクプログラムが充実していて、お尻や二の腕など気になる部位に特化して鍛えられます。三宮で買い物ついでに寄れるのが便利。',
      },
      {
        author: 'Y.N',
        rating: 4,
        date: '1ヶ月前',
        text: 'スタイリッシュな店内で気分が上がります。月4回プランでも無理なく通えるペース。体験が無料なので気軽に試せました。',
      },
    ],
    price: '月4回 13,420円〜',
    trial: '無料体験レッスン',
    features: ['音楽×マシン', '女性専用', '神戸三宮駅徒歩3分', '暗闇レッスン'],
    description: '神戸の三宮にある女性専用マシンピラティススタジオ。阪急線「神戸三宮駅」西口より徒歩3分と、公共交通機関でのアクセスも便利。カジュアルかつスタイリッシュな店内で、音楽にあわせたグループレッスンを楽しめます。お腹、お尻、二の腕、脚、背中の部位に特化したボディメイクプログラムが充実。',
    access: '阪急神戸三宮駅西口より徒歩3分',
    address: '兵庫県神戸市中央区三宮（詳細は公式サイト参照）',
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
    name: 'ピラティススタジオDEP 神戸店 Resho',
    image: '/images/studios/pilates-studio-dep.webp',
    rating: 4.2,
    reviewCount: 8,
    reviews: [
      {
        author: 'K.O',
        rating: 5,
        date: '5日前',
        text: '理学療法士監修ということで安心感があります。長年悩んでいた腰痛が3ヶ月で改善しました。完全個室なので周りの目も気になりません。',
      },
      {
        author: 'M.H',
        rating: 4,
        date: '2週間前',
        text: '90分2,980円の体験レッスンを受けましたが、身体の癖を丁寧に分析してくれて驚きました。神戸でこの価格でパーソナルを受けられるのは貴重です。',
      },
      {
        author: 'R.S',
        rating: 4,
        date: '1ヶ月前',
        text: '猫背が気になって通い始めました。クリニック勤務経験のあるトレーナーなので、医療的な視点からアドバイスがもらえるのが心強いです。',
      },
    ],
    price: 'パーソナルレッスン 90分 2,980円〜',
    trial: '体験レッスン 2,980円',
    features: ['理学療法士監修', '完全個室', '姿勢改善専門', '腰痛改善'],
    description: 'ピラティススタジオDEP 神戸店 Resho。理学療法士が監修する完全個室のマシンピラティススタジオ。クリニック勤務経験を活かし、自分自身を救ってくれたピラティスの力を、今度は自分が伝えることで、沢山の方の生活を豊かに導きたいと強く想い、地元神戸の方へもDEPのサービスを届けたいとオープン。姿勢改善・猫背改善・腰痛改善に特化。',
    access: '神戸市内（詳細は公式サイト参照）',
    address: '兵庫県神戸市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '理学療法士監修の完全個室パーソナルレッスン。姿勢・腰痛改善に特化。',
      price: '平日限定 パーソナルレッスン 90分 2,980円',
    },
    options: [
      'パーソナルレッスン',
      '姿勢改善プログラム',
      '腰痛改善プログラム',
      '完全個室',
    ],
    userProfile: {
      ageRange: '30代〜60代が中心',
      genderRatio: '女性80% / 男性20%',
      purpose: ['姿勢改善', '腰痛改善', '猫背改善', 'リハビリ'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['完全個室', 'ロッカー', '理学療法士監修', 'マシン完備'],
    },
  },
  {
    name: 'TOKI PILATES STUDIO 元町',
    image: '/images/studios/toki-pilates-kobe.webp',
    rating: 4.1,
    reviewCount: 14,
    reviews: [
      {
        author: 'H.K',
        rating: 5,
        date: '1週間前',
        text: '産後の骨盤の歪みが気になって通い始めました。パーソナルなので子どもの話もしながらリラックスしてレッスンを受けられます。元町の雰囲気も好き。',
      },
      {
        author: 'C.M',
        rating: 4,
        date: '3週間前',
        text: '骨盤矯正に特化しているだけあって、身体の変化を実感しやすいです。先生が一人ひとりに合わせてくれるので安心。',
      },
      {
        author: 'T.Y',
        rating: 4,
        date: '1ヶ月前',
        text: '神戸元町のおしゃれなエリアにあるスタジオ。産後ケアだけでなく姿勢矯正のプログラムもあるので、デスクワークの方にもおすすめです。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['神戸元町', 'パーソナル専門', '産後ケア', '骨盤矯正'],
    description: 'TOKI PILATES STUDIO｜神戸元町のピラティススタジオ。パーソナルレッスン・産後・骨盤矯正・骨盤リカバリ・マシンピラティス・体幹トレーニング・姿勢矯正を専門に行うスタジオ。一人ひとりの身体に合わせた丁寧な指導を提供。',
    access: '神戸元町（詳細は公式サイト参照）',
    address: '兵庫県神戸市中央区元町（詳細は公式サイト参照）',
    popularPlan: {
      name: 'パーソナルレッスン',
      description: '産後ケア・骨盤矯正に特化。一人ひとりに合わせた丁寧な指導。',
      price: '要問合せ',
    },
    options: [
      'パーソナルレッスン',
      '産後ケアプログラム',
      '骨盤矯正',
      '姿勢矯正',
    ],
    userProfile: {
      ageRange: '30代〜40代が中心',
      genderRatio: '女性95% / 男性5%',
      purpose: ['産後ケア', '骨盤矯正', '姿勢矯正', 'ボディメイク'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['パーソナル空間', 'ロッカー', 'マシン完備', '産後ケア対応'],
    },
  },
  {
    name: 'STUDIO TOU 三宮',
    image: '/images/studios/studio-tou-sannomiya.webp',
    rating: 4.1,
    reviewCount: 4,
    reviews: [
      {
        author: 'N.A',
        rating: 4,
        date: '10日前',
        text: '会員制なのでレッスンの質が安定しています。三宮駅から近いので仕事帰りに通えるのが助かります。グループとプライベートを使い分けられるのも良い。',
      },
      {
        author: 'E.W',
        rating: 4,
        date: '3週間前',
        text: '神戸三宮でマシンピラティス専門のスタジオを探していてここを見つけました。インストラクターの指導が丁寧で初心者でも安心です。',
      },
      {
        author: 'D.I',
        rating: 4,
        date: '1ヶ月前',
        text: 'プライベートレッスンで細かい動きまで見てもらえます。グループレッスンもアットホームな雰囲気で楽しく通えています。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['会員制', 'グループ＆プライベート', '神戸三宮', 'マシン専門'],
    description: 'ピラティスなら神戸・三宮のSTUDIO TOU（スタジオトゥーユー）。会員制のピラティスなら神戸・三宮のマシンピラティス STUDIO TOU、グループレッスン、プライベートレッスンを行っております。一人ひとりに合わせた丁寧な指導で、初心者から経験者まで幅広く対応。',
    access: '神戸三宮（詳細は公式サイト参照）',
    address: '兵庫県神戸市中央区三宮（詳細は公式サイト参照）',
    popularPlan: {
      name: 'マシンピラティス',
      description: '会員制スタジオ。グループ＆プライベートレッスン対応。',
      price: '要問合せ',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      'マシンピラティス',
      '会員制',
    ],
    userProfile: {
      ageRange: '30代〜50代が中心',
      genderRatio: '女性85% / 男性15%',
      purpose: ['ボディメイク', '姿勢改善', '体幹強化', '会員制希望'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'マシン完備', '会員制'],
    },
  },
  {
    name: 'La pilates 神戸元町店',
    image: '/images/studios/la-pilates.webp',
    rating: 4.2,
    reviewCount: 14,
    reviews: [
      {
        author: 'M.T',
        rating: 5,
        date: '5日前',
        text: '元町駅から徒歩2分で通いやすいです。整体とピラティスの組み合わせが他にはないアプローチで、身体の歪みが整ってきたのを実感しています。',
      },
      {
        author: 'K.S',
        rating: 4,
        date: '2週間前',
        text: '女性専用で明るいスタジオなので気持ちよくレッスンを受けられます。整体で身体を整えてからピラティスをするので効果が出やすい気がします。',
      },
      {
        author: 'Y.O',
        rating: 4,
        date: '1ヶ月前',
        text: '神戸阪急のすぐ近くで、買い物帰りに寄れるのが便利。サブスクプランで月1回から始められるので、自分のペースで続けられます。',
      },
    ],
    price: 'サブスク月1回 12,000円〜',
    trial: '体験レッスン 3,000円',
    features: ['整体×マシンピラティス', '元町駅徒歩2分', '女性専用', '明るいスタジオ'],
    description: '神戸元町のマシンピラティスならLa pilates｜女性専用・整体×ピラティススタジオ。「元町駅」から徒歩2分。La pilates神戸元町店は、整体とマシンピラティスを融合させた、女性専用のスタジオ。身体の歪みを整えながらボディメイク。明るいスタジオで楽しくレッスン。',
    access: '元町駅から徒歩2分',
    address: '兵庫県神戸市中央区元町（詳細は公式サイト参照）',
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
    name: 'luluto 神戸店',
    image: '/images/studios/luluto.webp',
    rating: 4.3,
    reviewCount: 3,
    reviews: [
      {
        author: 'F.K',
        rating: 5,
        date: '1週間前',
        text: '理学療法士が考案したプログラムなので信頼感があります。「正しく動かす」ことを教えてもらえて、日常の動作も変わりました。',
      },
      {
        author: 'J.M',
        rating: 4,
        date: '3週間前',
        text: 'リハビリ目的で通い始めましたが、オーダーメイドのプログラムが自分の身体に合っていて、痛みが軽減しました。ハーバーランドからも通いやすいです。',
      },
      {
        author: 'L.H',
        rating: 4,
        date: '1ヶ月前',
        text: 'マンツーマンで身体の状態を細かく分析してくれます。医療的な視点からのアドバイスは他のスタジオでは得られない価値だと思います。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['理学療法士考案', 'マンツーマン', '医療的視点', '身体の専門家'],
    description: '身体の専門家である理学療法士が考案したピラティススタジオ。医療現場での知見を活かし、「ただ動く」のではなく「身体を正しく動かす」ことを重視。一人ひとりの身体の状態に合わせたオーダーメイドプログラムを提供。リハビリから本格的なボディメイクまで幅広く対応。',
    access: '神戸市内（詳細は公式サイト参照）',
    address: '兵庫県神戸市（詳細は公式サイト参照）',
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
      facilities: ['理学療法士常駐', 'プライベート空間', '医療的視点', 'マシン完備'],
    },
  },
  {
    name: 'Rintosull 神戸（4店舗）',
    image: '/images/studios/rintosull.webp',
    rating: 4.0,
    reviewCount: 177,
    reviews: [
      {
        author: 'P.N',
        rating: 4,
        date: '5日前',
        text: '三宮店に通っています。LAVAグループなので安心感があり、初心者向けプログラムが充実。ピラティスが初めてでも全然大丈夫でした。',
      },
      {
        author: 'W.T',
        rating: 4,
        date: '2週間前',
        text: '神戸市内に4店舗あるので、その日の予定に合わせて使い分けられるのが便利。美尻プログラムが特にお気に入りです。',
      },
      {
        author: 'B.S',
        rating: 4,
        date: '1ヶ月前',
        text: '女性専用で清潔感のあるスタジオです。ポートアイランド方面からも三宮店に通いやすいし、西神中央店も駅近で助かります。',
      },
    ],
    price: '要問合せ',
    trial: '体験レッスン あり',
    features: ['女性専用', '神戸4店舗', '初心者歓迎', 'LAVAグループ'],
    description: 'マシンピラティススタジオRintosull 神戸。三宮店、長田店、西神中央店、名谷インター店の4店舗展開。Rintosullでは、運動やピラティスを初めて行う方向けのプログラムをご用意しています。インストラクターがしっかりサポートいたしますので、ご安心ください。美尻や美脚に必要な筋肉にアプローチ。',
    access: '神戸市内4店舗（三宮・長田・西神中央・名谷インター）',
    address: '兵庫県神戸市（詳細は公式サイト参照）',
    popularPlan: {
      name: 'グループレッスン',
      description: '初心者向けプログラム充実。美尻・美脚に特化したレッスンも。',
      price: '要問合せ',
    },
    options: [
      'グループレッスン',
      'プライベートレッスン',
      '初心者向けプログラム',
      '4店舗相互利用可',
    ],
    userProfile: {
      ageRange: '20代〜40代が中心',
      genderRatio: '女性100%（女性専用）',
      purpose: ['初心者歓迎', '美尻・美脚', 'ボディメイク', '女性専用'],
    },
    basicInfo: {
      hours: '詳細は公式サイト参照',
      closed: '詳細は公式サイト参照',
      facilities: ['ロッカー', 'パウダールーム', 'Wi-Fi', '女性専用', '4店舗展開'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！神戸エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。特にRintosull 神戸は初心者向けプログラムが充実しており、インストラクターがしっかりサポートしてくれるので安心して始められますよ。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。',
  },
  {
    question: '神戸のピラティススタジオの料金相場は？',
    answer: '神戸エリアのピラティススタジオの料金相場は、グループレッスンで月4回13,000円〜15,000円程度。パーソナルレッスンは1回2,980円〜12,000円と幅広い価格帯です。ピラティスK 神戸三宮店の月4回13,420円が一つの目安になります。',
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
    answer: 'はい、改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。特にピラティススタジオDEP 神戸店 Reshoやluluto 神戸店は理学療法士が関わるスタジオなので、身体の不調改善に強いです。',
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

export default async function KobeAreaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '神戸', url: 'https://pilates-biyori.com/area/kobe/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年04月17日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】神戸のピラティススタジオおすすめ8選！<br className="hidden md:block" />
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
              <span className="text-warm-600">神戸</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="神戸" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「神戸で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、神戸エリアでおすすめのピラティススタジオ8選をまとめました。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>神戸でピラティススタジオを探している</span>
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
                  <span>三宮駅・元町駅から通いやすいスタジオがいい</span>
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

        <PriceComparisonTable studios={studios} areaName="スタジオ" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              神戸のおすすめピラティススタジオ8選
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
              神戸のピラティス料金相場【2026年4月最新】
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
                    <td className="px-4 py-3">2,980円〜13,420円</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 2,980円〜12,000円</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜3,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              神戸エリアでは全国展開チェーンのスタジオが駅近に出店しているほか、地元のパーソナルスタジオも個性的な料金プランを用意しています。大都市圏と比べると料金水準はやや低めなので、初めてのピラティスにも挑戦しやすい環境です。近隣の三宮エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              神戸でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">阪急神戸三宮駅からのルートは事前に確認を</h3>
                <p className="text-warm-600 leading-relaxed">
                  神戸エリアのスタジオは阪急神戸三宮駅周辺が中心です。駅の出口によってスタジオまでの距離が変わることがあるため、初めて訪れる際はGoogleマップで経路を確認し、余裕を持って到着できるようにしましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">神戸エリアの人気時間帯を把握して予約を</h3>
                <p className="text-warm-600 leading-relaxed">
                  神戸エリアでは平日夕方以降と土日午前中が予約の集中する時間帯です。特にマシンピラティスは定員が少ないため、希望の日時があれば早めの予約がおすすめ。スタジオによってはキャンセル待ち機能やLINE通知で空き枠をお知らせしてくれるところもあります。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">料金プランの種類と契約条件をしっかり比較</h3>
                <p className="text-warm-600 leading-relaxed">
                  神戸エリアのスタジオは月額制・回数券制・チケット制など料金プランが多様です。入会キャンペーンを利用する場合は最低契約期間（通常3〜6ヶ月）が設定されることが多いので、自分のライフスタイルに合った期間かどうかを確認しましょう。レッスン前日〜当日のキャンセル規定もスタジオごとに異なるため要チェックです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  神戸エリアだけでなく、近隣の<Link href="/area/sannomiya" className="text-warm-700 underline hover:text-warm-900">三宮</Link>、<Link href="/area/nishinomiya" className="text-warm-700 underline hover:text-warm-900">西宮</Link>、<Link href="/area/umeda" className="text-warm-700 underline hover:text-warm-900">梅田</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>神戸エリアの豆知識：</strong>神戸は地元の方に愛されるスタジオが中心です。車で通う場合は駐車場の有無を事前に確認。電車の場合は駅からの距離だけでなく、帰りの電車の時刻も確認しておくとスムーズです。
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
                  リーズナブルに始められるスタジオ。パーソナルでも月額2,980円〜と手頃な価格帯。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティススタジオDEP 神戸店（90分 2,980円〜）</li>
                  <li className="text-warm-700">• La pilates 神戸元町店（月1回 12,000円〜）</li>
                  <li className="text-warm-700">• ピラティスK 神戸三宮店（月4回 13,420円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性専用スタジオで気兼ねなくレッスンに集中。男性の目を気にせずトレーニングできます。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティスK 神戸三宮店</li>
                  <li className="text-warm-700">• La pilates 神戸元町店</li>
                  <li className="text-warm-700">• Rintosull 神戸（4店舗）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">身体の不調改善</h3>
                <p className="text-warm-600 text-sm mb-4">
                  理学療法士監修・医療的視点から身体を整えたい方。腰痛・姿勢改善に特化。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• ピラティススタジオDEP 神戸店 Resho</li>
                  <li className="text-warm-700">• luluto 神戸店</li>
                  <li className="text-warm-700">• TOKI PILATES STUDIO 元町</li>
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜5,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">単発〜月1回</p>
                <p className="text-sm text-warm-600 mb-4">
                  パーソナルレッスンを手頃な価格で体験。平日限定プランなどが狙い目。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• DEP 神戸店（90分 2,980円〜）</li>
                  <li>• La pilates 体験（3,000円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜15,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  大手マシンスタジオのグループレッスン。週1回ペースで通いたい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• La pilates（月1回 12,000円〜）</li>
                  <li>• ピラティスK（月4回 13,420円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 要問合せ</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">会員制・個別</p>
                <p className="text-sm text-warm-600 mb-4">
                  会員制スタジオやパーソナル専門。カウンセリングで最適なプランを提案。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• STUDIO TOU 三宮（会員制）</li>
                  <li>• luluto 神戸店</li>
                  <li>• Rintosull 神戸</li>
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
                  まずは自分がピラティスで何を達成したいのかを明確にしましょう。ダイエット、姿勢改善、産後ケア、腰痛改善など、目的によって最適なスタジオやプログラムは変わります。目的が明確だとスタジオ選びもスムーズになりますよ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  神戸エリアの料金相場はグループで月4回13,000円〜15,000円程度。無理なく継続できる予算を決めましょう。料金だけでなく、入会金、マット・ウェアのレンタル料なども確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。ピラティスK 神戸三宮店は無料体験、ピラティススタジオDEP 神戸店は2,980円で体験できるので、気軽に試してみてくださいね。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。神戸は三宮駅・元町駅を中心に、神戸阪急やハーバーランド周辺など商業エリアが充実しています。駅近のスタジオを選ぶと、仕事帰りやお出かけついでにも通えて便利ですよ。ポートアイランド方面からも三宮は好アクセスです。
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
              今回は神戸のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では神戸に数多くあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              href="/area/kobe#studios"
              className="inline-block bg-white text-warm-800 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-warm-100 transition-all rounded"
            >
              おすすめスタジオ一覧に戻る
            </Link>
          </div>
        </section>
      </main>

      <RelatedAreas currentSlug="kobe" />
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
                name: '神戸',
                item: 'https://pilates-biyori.com/area/kobe',
              },
            ],
          }),
        }}
      />
    </>
  )
}
