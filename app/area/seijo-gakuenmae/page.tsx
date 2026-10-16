import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { AreaMarketComparison } from '@/components/AreaMarketComparison'
import { AreaConclusion } from '@/components/AreaConclusion'
import { AreaModifierSections } from '@/components/AreaModifierSections'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/seijo-gakuenmae/' },
  title: '【2026年10月最新】成城学園前のピラティス8社を比較｜駅徒歩分・月額料金・体験料金',
  description: '成城学園前のピラティススタジオ8社（駅徒歩1分のCLUB PILATES・Evolv・&a、南口3分のzen place、パーソナル専門のSTUDIO IVY ほか）を、住所・駅からの徒歩分数・月額料金・体験料金で比較。各公式サイトで確認した値（2026年10月16日確認）です。',
  keywords: 'ピラティス,成城学園前,東京,世田谷区,スタジオ,おすすめ,マシンピラティス,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 成城学園前',
    officialUrl: 'https://t.felmat.net/fmcl?ak=T98993.1.K142573W.U1357808',
    image: '/images/studios/zen-place-pilates.webp',
    price: '月4回 10,450円〜',
    trial: 'マットグループ体験 3,300円→初回キャンペーン 1,000円／マシングループ体験 5,000円→3,000円（公式・2026年10月16日確認）',
    features: ['男女共用', 'マット・マシン・プライベート', '他店利用OK', '南口徒歩3分'],
    description: '成城学園前駅の南口から徒歩3分、サンク成城ビル2階のスタジオ。マットグループ、リフォーマーを使うマシングループ（レベル別8種類）、プライベートから選べます。zen placeのグループ店は他店利用ができ、ピラティス・常温ヨガ・ホットヨガのレッスンを受けられます（店舗・レッスンにより差額あり）。スタジオページでは初心者向けに「32回パッケージ」とマットグループ通い放題（月額16,940円）を案内しています（公式スタジオページ・税込・2026年10月16日確認）。',
    access: '小田急小田原線「成城学園前駅」南口 徒歩3分',
    address: '〒157-0066 東京都世田谷区成城2丁目36-6 サンク成城ビル 2階',
    popularPlan: {
      name: 'マットグループ月4',
      description: 'マットグループレッスン月4回。グループ店の他店利用も可能',
      price: '10,450円/月（税込）',
    },
    options: [
      'フリープラン（回数無制限）: 16,940円/月',
      'デイフリー（平日昼のみ無制限）: 13,552円/月',
      'マットグループ月6: 14,520円/月',
      'リフォーマーグループRG4（月4回）: 15,400円/月',
      'プライベート月4: 38,280円/月',
    ],
    userProfile: {
      purpose: ['運動不足解消', '姿勢改善', '健康維持', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '平日 8:30〜21:00／土日祝 8:00〜17:00',
      facilities: ['リフォーマー（マシングループ）'],
    },
  },
  {
    name: 'ピラティスミラー 成城学園前',
    officialUrl: 'https://www.konami.com/sportsclub/pilatesmirror/seijogakuenmae/',
    image: '/images/studios/pilates-mirror.webp',
    price: '月6回まで 11,000円（税込）',
    trial: '体験 2,200円（税込・1人1回まで）',
    features: ['女性専用（18歳以上）', 'KONAMI運営', '天井鏡', '30分レッスン'],
    description: 'コナミスポーツが運営する「もっと鏡が見たくなる」をコンセプトにしたピラティススタジオ。スタジオの天井に鏡を設置し、自分の身体の動きを確認しながら取り組めます。1レッスン30分で「気軽に」参加でき、音楽をかけながら「楽しく」動く、短い時間でも達成感と効果を感じられるレッスンです。レッスンは最大9名の少人数制。レッスン前の20分は、リフォーマーを使用してセルフトレーニングが可能です（公式店舗ページ）。',
    access: '小田急小田原線「成城学園前駅」北口 徒歩4分',
    address: '〒157-0066 東京都世田谷区成城6-16-18 カサド成城1階',
    popularPlan: {
      name: '月会費プラン',
      description: '天井鏡を使った30分レッスン。7回目以降は1回1,100円で追加利用',
      price: '月6回まで 11,000円（税込）',
    },
    options: [
      '入会金 11,000円（税込）',
      'チケットプラン 1回 2,750円（税込）',
      'プライベートレッスン 30分 4,400円／50分 6,600円（税込・月会費プラン外も可）',
      '7回目以降の追加利用 1回 1,100円（税込）',
    ],
    userProfile: {
      genderRatio: '女性専用（18歳以上）',
      purpose: ['ボディメイク', '姿勢改善', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '営業時間はレッスンスケジュール参照',
      closed: '毎週木曜日',
      facilities: ['天井鏡', 'リフォーマー', 'フィッティングルーム（カーテン仕切り）', '荷物置きBOX（鍵なし）'],
    },
  },
  {
    name: 'CLUB PILATES 成城学園前',
    officialUrl: 'https://af.moshimo.com/af/c/click?a_id=5805739&p_id=4728&pc_id=12432&pl_id=62405',
    image: '/images/studios/club-pilates.webp',
    price: '月4回 13,090円／月8回 24,090円／通い放題 37,290円（公式店舗ページ・税表記なし）',
    trial: '30分の体験レッスン 無料',
    features: ['駅徒歩1分', '成城コルティ北棟2F', '4段階レベル分け', '30分の無料体験'],
    description: '成城学園前駅から徒歩1分、成城コルティ北棟2階にあるマシンピラティスのグループスタジオ（公式の店舗名は「クラブピラティス成城学園店」）。初心者から上級者まで4段階のレベル分けがあります。月会費は月4回13,090円・月8回24,090円・通い放題37,290円で、入会金5,500円と事務手数料2,200円（税込）が別途かかります。休会は年4か月まで（休会費1,500円・税別）（公式店舗ページ・2026年10月16日確認）。',
    access: '成城学園前駅 徒歩1分',
    address: '〒157-0066 東京都世田谷区成城六丁目4番14号 成城コルティ北棟2F',
    popularPlan: {
      name: 'マシンピラティスレッスン',
      description: '世界最大級のマシンピラティス専門スタジオ',
      price: '月4回 13,090円（税表記なし）',
    },
    options: ['月8回 24,090円', '通い放題 37,290円', '入会金 5,500円（税込）・事務手数料 2,200円（税込）', '料金は公式の店舗ページ（2026年10月14日確認）'],
    userProfile: {
      purpose: ['ボディメイク', '運動不足解消', '姿勢改善', 'リフレッシュ'],
    },
    basicInfo: {
      hours: '日 8:00〜19:00／月 9:30〜21:00／火 8:00〜21:00／水 7:30〜21:00／木・金 9:00〜21:00／土 8:00〜18:00',
      facilities: ['マシンピラティス専門'],
    },
  },
  {
    name: 'STUDIO IVY 成城学園前',
    officialUrl: 'https://www.pilates-ivy.jp/studio/seijougakuenmae',
    image: '/images/studios/studio-ivy.webp',
    price: '月2回 15,000円／月4回 28,000円／月8回 52,000円（税込）',
    trial: '初回体験レッスン 4,500円（税込・50分）',
    features: ['1対1のパーソナル専門', '1レッスン50分', '男性も受講可', '駅徒歩5分'],
    description: 'インストラクターと1対1で受けるパーソナル専門のマシンピラティススタジオ（公式の店舗名は「STUDIO IVY 成城学園前店」）。リフォーマーを使い、体験時のカウンセリングをもとにプログラムを組みます。料金は月2回15,000円・月4回28,000円・月8回52,000円で、1回あたり6,500〜7,500円（公式店舗ページ・税込・2026年10月16日確認）。',
    access: '小田急小田原線・東京メトロ千代田線「成城学園前駅」徒歩5分',
    address: '〒157-0066 東京都世田谷区成城2-37-11 アクアリオ3F',
    popularPlan: {
      name: 'STANDARD（月4回コース）',
      description: '1対1のパーソナルマシンピラティス。週1ペース。',
      price: '月4回 28,000円（税込・1回あたり7,000円）',
    },
    options: [
      'BASIC 月2回 15,000円（1回あたり7,500円）',
      'PREMIUM 月8回 52,000円（1回あたり6,500円）',
      '1レッスン50分',
    ],
    userProfile: {
      purpose: ['ボディメイク', '姿勢改善', '肩こり・腰痛ケア'],
    },
    basicInfo: {
      hours: '8:00〜21:00',
      facilities: ['リフォーマー', '更衣室'],
    },
  },
  {
    name: 'Evolv 成城学園前店',
    officialUrl: 'https://evolv-ems.com/studios/detail/seijogakuen/',
    image: '/images/studios/evolv-seijo.webp',
    price: '月4回 21,780円／月8回 27,280円／月15回 36,080円／通い放題 54,780円（税込・通常価格）',
    trial: '体験レッスン 500円（税込）→ 0円（公式表示・手ぶらセット付）',
    features: ['マシンピラティス×EMS', '20分のレッスン', '南口徒歩1分', '金曜定休'],
    description: 'ホットヨガのLAVAグループが運営する、EMSスーツを着てマシンピラティスを行うスタジオ。1レッスン20分です。成城学園前駅の南口から徒歩1分、ローソン左側の入口から地下1階へ。月会費の通常価格は月4回21,780円〜通い放題54,780円で、一定期間の継続を条件にした割引価格（月4回20,130円など）があります。スーツレンタル代・運営管理費は別途必要です（公式店舗ページ・税込・2026年10月16日確認）。',
    access: '小田急小田原線「成城学園前駅」南口 徒歩1分',
    address: '東京都世田谷区成城2-34-1 小泉ビルB1F',
    popularPlan: {
      name: 'M4（月4回）',
      description: 'EMS×マシンピラティス20分を月4回',
      price: '月4回 21,780円（税込・通常価格）',
    },
    options: [
      '入会金 33,000円（税込・体験当日入会で0円）',
      '継続条件付きの割引: M4 20,130円／M8 23,980円／M15 32,780円／通い放題 51,480円（税込）',
      'スーツレンタル代・運営管理費は別途',
    ],
    userProfile: {
      purpose: ['ボディメイク', '時短トレーニング', 'ダイエット', '運動不足解消'],
    },
    basicInfo: {
      hours: '月〜木 8:30〜21:45／土日祝 7:30〜18:30',
      closed: '金曜日',
      facilities: ['マシンピラティス', 'EMSスーツ', '手ぶらセット（体験時）'],
    },
  },
  {
    name: 'Pilasuru 成城学園前店',
    officialUrl: 'https://twothree-pilates.co.jp/seijyougakuen/',
    image: '/images/studios/pilasuru-seijo.webp',
    price: '料金は公式サイトに掲載なし（問い合わせ）',
    trial: '体験レッスンあり（スタジオグループで1人1回）',
    features: ['マシングループは最大3人', 'プライベートレッスンあり', 'タワー付きリフォーマー', '成城6丁目'],
    description: '公式の店舗名は「Two Threeピラティススタジオ成城学園前 ピラスル」。マシンピラティスのグループレッスンは最大3人までの少人数制で、マンツーマンのプライベートレッスンもあります。タワー付きのリフォーマーなど複数のピラティスマシンを備え、運営会社は自社でピラティスアカデミーを運営しています。休会は継続期間を過ぎてから最大6か月まで可能（休会手数料なし）。公式の店舗ページに料金と駅からの徒歩分数の記載はありません（2026年10月16日確認）。',
    access: '成城学園前駅の北口側（成城6丁目）。徒歩分数は公式に記載なし',
    address: '東京都世田谷区成城6-13-6 メゾン今村 2F',
    popularPlan: {
      name: 'マシングループレッスン（最大3人）',
      description: '少人数制のマシンピラティス',
      price: '公式サイトに掲載なし（問い合わせ）',
    },
    options: [
      'プライベートレッスン',
      '体験当日の入会でキャンペーンあり（公式FAQ）',
      '休会 最大6か月（手数料なし）',
    ],
    userProfile: {
      purpose: ['姿勢改善', 'ボディメイク', '運動不足解消'],
    },
    basicInfo: {
      facilities: ['リフォーマー（タワー付き）', '各種ピラティスマシン'],
    },
  },
  {
    name: 'PILATES YOGA &a 成城学園前店',
    officialUrl: 'https://pilates-and-a.com/studio/seijogakuen-mae/',
    price: '1回券 12,000円／4回券 36,300円（税込・通常コース）',
    trial: '体験レッスン 12,000円（当日に回数券購入・月額コース申込で5,500円＋入会金無料）',
    features: ['パーソナル専門（マンツーマン）', '完全予約制', '男性も受講可', '北口徒歩1分'],
    description: '成城学園前駅の北口から徒歩1分、アーバンスクエア3階のパーソナル専門マシンピラティススタジオ。完全予約制のプライベート空間でマンツーマン指導を行い、医療系国家資格を持つトレーナーも在籍していると公式サイトで紹介しています。料金は回数券制（通常コース 1回券12,000円・4回券36,300円）で、平日13:00〜17:00開始枠限定の月額制（月3回26,400円・月4回33,000円）もあります。体験は所要55〜60分（着替え・説明を含む）（公式店舗ページ・税込・2026年10月16日確認）。',
    access: '小田急小田原線「成城学園前駅」北口 徒歩1分',
    address: '〒157-0066 東京都世田谷区成城6丁目12-7 アーバンスクエア 3階',
    popularPlan: {
      name: '「通常」コース 4回券（有効期限2ヶ月）',
      description: 'マンツーマンのパーソナルマシンピラティス',
      price: '4回券 36,300円（税込）',
    },
    options: [
      '入会金 11,000円（税込・体験当日の入会で無料）',
      '平日昼限定 月額制: 月3回 26,400円／月4回 33,000円（税込）',
      '「リハビリ」コース: 1回券 13,750円／4回券 45,100円（税込）',
      'トレーナー指名料 2,200円〜3,300円（税込）',
    ],
    userProfile: {
      purpose: ['姿勢改善', '肩こり・腰痛ケア', '体の使い方の改善'],
    },
    basicInfo: {
      hours: '9:00〜21:00／9:00〜18:00（曜日により異なる・定休日あり。公式の店舗ページで確認）',
      facilities: ['個室（完全予約制）'],
    },
  },
  {
    name: 'ピラティスミラー 千歳船橋（近隣エリア）',
    officialUrl: 'https://www.konami.com/sportsclub/pilatesmirror/chitosefunabashi/',
    image: '/images/studios/pilates-mirror.webp',
    price: '月6回まで 11,000円（税込）',
    trial: '体験 2,200円（税込・1人1回まで）',
    features: ['女性専用（18歳以上）', 'KONAMI運営', '天井鏡', '千歳船橋駅北口徒歩1分'],
    description: '成城学園前から小田急線で2駅の千歳船橋駅近くにあるコナミスポーツ運営のピラティススタジオ。「もっと鏡が見たくなる」をコンセプトに、スタジオの天井に鏡を設置し、自分の身体の動きを確認しながら取り組めます。1レッスン30分で「気軽に」参加でき、音楽をかけながら「楽しく」動く、短い時間でも達成感と効果を感じられるレッスンです。レッスンは最大9名。レッスン前の20分は、リフォーマーを使用してセルフトレーニングが可能です（公式店舗ページ）。料金は成城学園前と同じです。',
    access: '小田急小田原線「千歳船橋駅」北口 徒歩1分（成城学園前から小田急線で2駅）',
    address: '〒156-0055 東京都世田谷区船橋1-9-5 ラ・レジオン千歳船橋 2階',
    popularPlan: {
      name: '月会費プラン',
      description: '天井鏡を使った30分レッスン',
      price: '月6回まで 11,000円（税込）',
    },
    options: [
      '入会金 11,000円（税込）',
      'チケットプラン 1回 2,750円（税込）',
      'プライベートレッスン 30分 4,400円／50分 6,600円（税込）',
      '7回目以降の追加利用 1回 1,100円（税込）',
    ],
    userProfile: {
      genderRatio: '女性専用（18歳以上）',
      purpose: ['ボディメイク', '姿勢改善', 'リフレッシュ', '健康維持'],
    },
    basicInfo: {
      hours: '営業時間はレッスンスケジュール参照',
      closed: '毎週火曜日',
      facilities: ['天井鏡', 'リフォーマー', 'フィッティングルーム（カーテン仕切り）', '荷物置きBOX（鍵なし）'],
    },
  },
]

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '大丈夫です！成城学園前エリアのピラティススタジオのほとんどが初心者向けのレッスンを用意しています。CLUB PILATESは4段階のレベル分けがあり、zen place pilatesはスタジオページで初心者向けの「32回パッケージ」を案内しています。STUDIO IVYは1対1なので、運動が苦手な方でも自分のペースで始められます。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷調整がしやすく初心者におすすめ。マットは場所を選ばず自宅でも続けやすいのが特徴です。成城学園前ではCLUB PILATES・Pilasuru・STUDIO IVY・&a・ピラティスミラー・Evolvがマシンを使います。zen placeはマットとマシンの両方のグループがあります。',
  },
  {
    question: '成城学園前のピラティススタジオの料金相場は？',
    answer: '掲載店の公式料金では、グループの月4回が10,450円（zen place マット）〜13,090円（CLUB PILATES）、ピラティスミラーは月6回まで11,000円（税込）。1対1のパーソナルは STUDIO IVY が月4回28,000円（1回7,000円）、&a が1回券12,000円です。体験は無料（CLUB PILATES）〜4,500円（STUDIO IVY）の店が多く、&a は当日入会しない場合12,000円です。',
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
    answer: '基本的に動きやすい服装（Tシャツ、レギンスなど）と飲み物があればOK。Evolvは体験に手ぶらセット（水・タオル・ウェア）が付くと公式に記載があります。詳細は各スタジオの体験レッスン案内で確認してくださいね。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズ。ヨガは柔軟性と精神的なリラックスを重視します。ピラティスは筋力強化、ヨガは心身のバランスを整えることが主な目的。zen place pilates 成城学園前は他店利用でヨガスタジオのレッスンも受けられます（店舗・レッスンにより差額あり）。',
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
    answer: 'それぞれ良さがあります。パーソナルは一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方におすすめ。成城学園前ならSTUDIO IVY（月4回28,000円）や&a（1回券12,000円）がマンツーマンです。グループは料金が安く、仲間と楽しく続けられるのが魅力。まずは体験で両方試してみるのがいいですよ。',
  },
]

export default function SeijoGakuenmaeAreaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://biyori-pilates.com/' },
        { name: '地域別', url: 'https://biyori-pilates.com/area/' },
        { name: '成城学園前', url: 'https://biyori-pilates.com/area/seijo-gakuenmae/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年10月16日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              ピラティス成城学園前おすすめ8選！<br className="hidden md:block" />
              料金・体験レッスン・マシン対応を比較！
            </h1>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>
              {' > '}
              <Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>
              {' > '}
              <span className="text-warm-600">成城学園前</span>
            </nav>
          </div>
        </section>
        <AreaConclusion studios={studios} areaName="成城学園前" />


        <TableOfContents areaName="成城学園前" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「成城学園前で人気のピラティススタジオを知りたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、小田急線成城学園前駅エリアでおすすめのピラティススタジオ8選をまとめました（うち1店は2駅隣の千歳船橋）。駅の南口側にzen place・Evolv・STUDIO IVY、北口側にCLUB PILATES（成城コルティ）・&a・ピラスル・ピラティスミラーがあります。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>成城学園前でピラティススタジオを探している</span>
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
                  <span>小田急線沿線で通いやすいスタジオがいい</span>
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

        {/* 駅別早見表（2026-10-16 追加・徒歩分数と住所は各公式の表記） */}
        <section className="py-12 bg-white" id="by-station"><div className="max-w-4xl mx-auto px-6 lg:px-8"><h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-4 text-center">成城学園前駅からの距離で比べる早見表</h2><p className="text-warm-600 leading-relaxed mb-6 text-sm">駅の出口（南口・北口）と徒歩分数は各スタジオの公式サイトの表記です（2026年10月16日確認・料金は税込、CLUB PILATESのみ公式に税表記なし）。</p><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-warm-800 text-white"><th className="px-4 py-3 text-left">スタジオ</th><th className="px-4 py-3 text-left">駅からの距離</th><th className="px-4 py-3 text-left">形式</th><th className="px-4 py-3 text-left">月額の目安</th><th className="px-4 py-3 text-left">体験</th></tr></thead><tbody>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">CLUB PILATES（成城コルティ北棟2F）</td><td className="px-4 py-3">徒歩1分</td><td className="px-4 py-3">マシン・グループ／男女可</td><td className="px-4 py-3">月4回 13,090円</td><td className="px-4 py-3">30分 無料</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">Evolv 成城学園前店</td><td className="px-4 py-3">南口 徒歩1分</td><td className="px-4 py-3">EMS×マシン・20分</td><td className="px-4 py-3">月4回 21,780円（通常）</td><td className="px-4 py-3">500円→0円</td></tr>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">PILATES YOGA &amp;a 成城学園前店</td><td className="px-4 py-3">北口 徒歩1分</td><td className="px-4 py-3">マンツーマン／男性可</td><td className="px-4 py-3">4回券 36,300円</td><td className="px-4 py-3">12,000円（当日入会で5,500円）</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">zen place pilates 成城学園前</td><td className="px-4 py-3">南口 徒歩3分</td><td className="px-4 py-3">マット／マシン・グループ、プライベート</td><td className="px-4 py-3">マット月4回 10,450円</td><td className="px-4 py-3">マット 1,000円・マシン 3,000円（初回キャンペーン）</td></tr>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">ピラティスミラー 成城学園前</td><td className="px-4 py-3">北口 徒歩4分</td><td className="px-4 py-3">マシン・30分・女性専用</td><td className="px-4 py-3">月6回まで 11,000円</td><td className="px-4 py-3">2,200円</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">STUDIO IVY 成城学園前</td><td className="px-4 py-3">徒歩5分</td><td className="px-4 py-3">1対1のパーソナル／男性可</td><td className="px-4 py-3">月4回 28,000円</td><td className="px-4 py-3">4,500円</td></tr>
          <tr className="border-b border-warm-200"><td className="px-4 py-3 font-medium">Pilasuru 成城学園前店（成城6-13-6）</td><td className="px-4 py-3">北口側（公式に徒歩分数の記載なし）</td><td className="px-4 py-3">マシン・グループ最大3人／プライベート</td><td className="px-4 py-3">公式に料金掲載なし</td><td className="px-4 py-3">あり</td></tr>
          <tr className="border-b border-warm-200 bg-warm-50"><td className="px-4 py-3 font-medium">ピラティスミラー 千歳船橋（近隣）</td><td className="px-4 py-3">千歳船橋駅 北口 徒歩1分</td><td className="px-4 py-3">マシン・30分・女性専用</td><td className="px-4 py-3">月6回まで 11,000円</td><td className="px-4 py-3">2,200円</td></tr>
        </tbody></table></div><p className="text-warm-600 leading-relaxed mt-4 text-sm">男性も通えるのは、公式に記載のある CLUB PILATES・zen place・STUDIO IVY・&amp;a です。ピラティスミラーは18歳以上の女性専用です。Evolv と Pilasuru は今回、公式サイトで男女の利用条件を確認できませんでした（Pilasuru の運営会社は「店舗によっては女性専用」と案内）。</p></div></section>

        <PriceComparisonTable studios={studios} areaName="成城学園前" />
        <AreaMarketComparison studios={studios} areaName="成城学園前" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              成城学園前のおすすめピラティススタジオ8選
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
              成城学園前のピラティス料金相場（2026年10月16日確認）
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
                    <td className="px-4 py-3">10,450円〜13,090円（ピラティスミラーは月6回まで11,000円）</td>
                  </tr>
                  <tr className="border-b border-warm-200 bg-warm-50">
                    <td className="px-4 py-3 font-medium">パーソナルレッスン</td>
                    <td className="px-4 py-3">1回 6,500円（STUDIO IVY 月8回）〜12,000円（&amp;a 1回券）</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="px-4 py-3 font-medium">体験レッスン</td>
                    <td className="px-4 py-3">無料〜4,500円（&amp;a は当日入会なしで12,000円）</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-warm-600 mt-4 text-sm leading-relaxed">
              成城学園前は落ち着いた住環境が魅力のエリアで、プライベートレッスンやセミパーソナルなど少人数制を重視したスタジオが多い傾向です。1回あたりの単価はやや高めですが、その分インストラクターの質や設備にこだわったスタジオが揃っています。近隣の下北沢エリアと比較検討する方も多いので、両エリアの体験レッスンを受けてみるのも賢い選び方です。
            </p>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              成城学園前でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">成城学園前駅からのルートは事前に確認を</h3>
                <p className="text-warm-600 leading-relaxed">
                  成城学園前エリアのスタジオは成城学園前駅周辺が中心です。駅の出口によってスタジオまでの距離が変わることがあるため、初めて訪れる際はGoogleマップで経路を確認し、余裕を持って到着できるようにしましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">少人数制スタジオは早めの予約がカギ</h3>
                <p className="text-warm-600 leading-relaxed">
                  成城学園前は少人数制やプライベートレッスンを重視するスタジオが多く、1クラスの定員が少ないため予約が早く埋まりがちです。公式の定員はPilasuruのマシングループが最大3人、ピラティスミラーが最大9名。ピラティスミラーは定員に達すると入会待ちになると公式に案内しているので、希望の時間帯があれば早めに体験を予約しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">入会キャンペーンの条件と最低契約期間を確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  入会金が体験当日の入会で無料になる店（Evolv・&a）や、一定期間の継続を条件に月会費が割引になる店（Evolv）があります。割引の条件や途中解約時の扱いは店ごとに違うので、契約前に必ず確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">近隣エリアも比較して選択肢を広げよう</h3>
                <p className="text-warm-600 leading-relaxed">
                  成城学園前エリアだけでなく、近隣の<Link href="/area/shimokitazawa/" className="text-warm-700 underline hover:text-warm-900">下北沢</Link>、<Link href="/area/chofu/" className="text-warm-700 underline hover:text-warm-900">調布</Link>、<Link href="/area/futakotamagawa/" className="text-warm-700 underline hover:text-warm-900">二子玉川</Link>エリアにもピラティススタジオがあります。通勤経路や生活圏に合わせて複数エリアのスタジオを比較すると、より自分に合ったスタジオが見つかる可能性が高まります。エリアをまたいで通い放題が使えるチェーン店も検討してみましょう。
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
                  <strong>成城学園前エリアの豆知識：</strong>成城学園前は美意識の高い方が多いエリアで、レッスン後にそのままカフェやショッピングに行く方もいます。着替えやメイク直しのセットを持参しておくと、レッスン後の時間も有効活用できます。おしゃれなウェアで通う方も多いのが成城学園前の特徴です。
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
                <h3 className="text-xl font-bold text-warm-900 mb-4">世界ブランド・大手</h3>
                <p className="text-warm-600 text-sm mb-4">
                  世界展開する大手ブランドや全国チェーンのスタジオ。品質と安定感を重視する方におすすめ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• CLUB PILATES 成城学園前（駅徒歩1分・成城コルティ）</li>
                  <li className="text-warm-700">• zen place pilates 成城学園前（グループ店の他店利用OK）</li>
                  <li className="text-warm-700">• ピラティスミラー 成城学園前（KONAMI運営）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナル・個室</h3>
                <p className="text-warm-600 text-sm mb-4">
                  完全プライベート空間でマンツーマン指導。短期間で効果を出したい方やオーダーメイドを求める方に。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• STUDIO IVY 成城学園前（完全プライベート）</li>
                  <li className="text-warm-700">• PILATES YOGA &amp;a 成城学園前店（マンツーマン）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">駅近・好アクセス</h3>
                <p className="text-warm-600 text-sm mb-4">
                  成城学園前駅から徒歩1分以内。仕事帰りや買い物ついでにサクッと通えるスタジオ。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• CLUB PILATES 成城学園前（駅徒歩1分）</li>
                  <li className="text-warm-700">• Evolv 成城学園前店（南口徒歩1分）</li>
                  <li className="text-warm-700">• PILATES YOGA &amp;a 成城学園前店（北口徒歩1分）</li>
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
                週1-2回（月4-8回）からスタートするのがおすすめ。まずは身体を慣らすことが大切です。継続期間は最低でも2-3ヶ月。この期間で効果を実感できる方が多いですよ。zen place pilatesの月4回プラン（10,450円〜）やCLUB PILATESの月4回プラン（13,090円）が始めやすいです。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイクが目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回（月8-12回）がおすすめ。しっかりと身体を変えたい方は頻度を上げることで効果も早く現れます。3-6ヶ月継続すると、周りからも「痩せた？」と言われるレベルの変化が期待できます。zen place pilatesのフリープラン（16,940円/月）なら回数無制限で通えます。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">体型維持・健康管理が目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回（月4回）のペースで継続するのがおすすめ。無理なく長く続けられる頻度が理想です。ピラティスは継続が何より大切。自分のペースで楽しく通えるのが一番ですよ。成城の閑静な住宅街でリフレッシュしながら続けましょう。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜11,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4〜6回</p>
                <p className="text-sm text-warm-600 mb-4">
                  グループレッスン中心。手軽に始めたい方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• zen place pilates（月4回 10,450円〜）</li>
                  <li>• ピラティスミラー（月6回まで 11,000円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 11,000〜16,000円</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回</p>
                <p className="text-sm text-warm-600 mb-4">
                  マシン完備の大手スタジオ。世界ブランドの品質を体験できる。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• CLUB PILATES（月4回 13,090円）</li>
                  <li>• zen place マシングループ（15,400円）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 20,000円〜</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">月4回〜</p>
                <p className="text-sm text-warm-600 mb-4">
                  完全パーソナルレッスン。オーダーメイドで短期集中の方向け。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• STUDIO IVY（月4回 28,000円）</li>
                  <li>• Evolv（月4回 21,780円・通常価格）</li>
                  <li>• zen place プライベート月4（38,280円）</li>
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
                  成城学園前の掲載店では、グループの月4回が10,450円〜13,090円。無理なく継続できる予算を決めましょう。料金だけでなく、入会金、マット・ウェアのレンタル料なども確認を。長く続けるためには、金銭的な負担が少ないことも大切です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  気になるスタジオを2-3つピックアップしたら、必ず体験レッスンに行きましょう。スタジオの雰囲気、指導者との相性、設備などは実際に行ってみないとわかりません。CLUB PILATESは30分の無料体験、zen placeはマットグループの初回体験が1,000円、ピラティスミラーは2,200円、STUDIO IVYは4,500円です。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  どんなに良いスタジオでも、通いにくい場所にあると続きません。CLUB PILATES・Evolv・&aは駅徒歩1分。南口側か北口側かで歩く道が変わるので、早見表で出口も確認しておきましょう。小田急線沿線の喜多見・狛江・和泉多摩川・祖師谷大蔵・経堂からもアクセスしやすいので、自分の生活圏に合ったスタジオを選びましょう。
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
              今回は成城学園前のおすすめピラティススタジオについてご紹介してきましたが、いかがでしたか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              世田谷区の成城の閑静な高級住宅街に位置する成城学園前エリアには、世界最大級のCLUB PILATES、KONAMI運営のピラティスミラー、パーソナル専門のSTUDIO IVYなど、個性豊かなスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              この記事では成城学園前に数多くあるピラティススタジオから厳選したものだけを紹介しているので、ひとまず今回まとめた中から探すのもありだと思いますよ。
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
              体験レッスンは無料（CLUB PILATES）から。<br />
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
              <AreaModifierSections studios={studios} areaName="成城学園前" />
      </main>
        {/* boost-nav-202606 */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-warm-900 mb-3">📍 料金相場・近隣エリアと比べる</h2>
              <p className="text-warm-600 text-sm mb-4">全国の料金データや他エリアの人気スタジオも見ると、自分に合った1校が選びやすくなります。</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/articles/pilates-ryokin-hakusho/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国の料金相場</Link>
                <Link href="/area/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国のエリア一覧</Link>
                <Link href="/area/kagurazaka/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">神楽坂のピラティス</Link>
                <Link href="/area/nakano-sakaue/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">中野坂上のピラティス</Link>
                <Link href="/area/ochanomizu/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">御茶ノ水のピラティス</Link>
              </div>
            </div>
          </div>
        </section>


      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="seijo-gakuenmae" areaName="成城学園前" />

      <RelatedAreas currentSlug="seijo-gakuenmae" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
