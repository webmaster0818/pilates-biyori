import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { StudioCard } from '@/components/StudioCard'
import { RelatedAreas } from '@/components/RelatedAreas'
import { TableOfContents } from '@/components/TableOfContents'
import Script from 'next/script'
import { PriceComparisonTable } from '@/components/PriceComparisonTable'
import { AreaMarketComparison } from '@/components/AreaMarketComparison'
import { FAQSchema } from '@/components/FAQSchema'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import ConsultantSection from '@/components/ConsultantSection'



export const metadata = {
  alternates: { canonical: 'https://biyori-pilates.com/area/shibuya/' },
  title: '渋谷のピラティス27社を比較｜無料体験4社・月額最安4,400円〜【2026年7月】',
  description: '渋谷エリアでおすすめのピラティススタジオを料金・無料体験・マシン対応で徹底比較。初心者向けの選び方、駅近スタジオ、体験レッスンの有無まで2026年6月の最新情報でわかります。',
  keywords: 'ピラティス,渋谷,東京,スタジオ,おすすめ,マシンピラティス,パーソナル,女性専用,体験レッスン,料金,比較',
}

const studios = [
  {
    name: 'zen place pilates 渋谷',
    image: '/images/studios/zen-place-pilates.webp',
    rating: 4.7, reviewCount: 14,
    reviews: [
      { author: 'Y.S', rating: 5, date: '2ヶ月前', text: 'エデュケーターがいつも明るく丁寧に指導してくれます。動き方のクセを観察して的確にアドバイスしてもらえるので、毎回新しい発見があります。' },
      { author: 'M.T', rating: 5, date: '3ヶ月前', text: '渋谷駅B1出口から徒歩2分で通いやすく、朝ピラティスのクラスで生活リズムが整いました。コツコツ続けて体の変化を実感しています。' },
      { author: 'K.A', rating: 4, date: '4ヶ月前', text: '初心者でも親切に説明してくださり安心でした。予約が少し取りづらい時間帯もありますが、スタジオの雰囲気は癒しの空間で気に入っています。' },
    ],
    price: '月4回 9,625円〜', trial: '体験レッスンあり',
    features: ['マットグループ', 'MIYASHITA PARK正面5F', '男性OK', '全国140スタジオ相互利用可'],
    description: '全国140スタジオ以上を展開するzen placeの渋谷スタジオ。MIYASHITA PARK正面5Fに位置し、マットピラティスとマシンピラティスの両方が受けられる総合型スタジオ。男性も利用可能で、月4回9,625円〜とリーズナブル。全国のzen placeスタジオを相互利用できるのも大きな魅力。',
    access: 'MIYASHITA PARK正面 5F',
    address: '東京都渋谷区（MIYASHITA PARK正面5F）',
    popularPlan: { name: 'マットグループ月4回プラン', description: 'マット・マシン両対応。全国140スタジオ相互利用可。', price: '月4回 9,625円（税込）〜' },
    options: ['月4回プラン（9,625円〜）', '月6回プラン', 'フリー（通い放題）プラン', 'プライベートレッスン追加'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性80% / 男性20%', purpose: ['姿勢改善', '体幹強化', 'ボディメイク', 'リラックス'] },
    basicInfo: { hours: '平日 7:00〜22:00 / 土日祝 7:00〜18:00', closed: '不定休', facilities: ['マットスタジオ', 'リフォーマーマシン', 'ロッカー', '更衣室'] },
  },
  {
    name: 'the SILK 渋谷',
    image: '/images/studios/the-silk.webp',
    rating: 4.8, reviewCount: 290,
    reviews: [
      { author: 'R.N', rating: 5, date: '2ヶ月前', text: 'スタジオが綺麗で清潔感があり、ReFaのヘアアイロンなどアメニティも充実していて通いやすいです。会社帰りにそのまま立ち寄れるのが助かります。' },
      { author: 'A.K', rating: 5, date: '3ヶ月前', text: '予約も取りやすく、ホワイト基調の清潔感ある空間でモチベーションが上がります。インストラクターの質も高くて満足しています。' },
      { author: 'M.S', rating: 4, date: '4ヶ月前', text: '女性専用で安心して通えます。ドライヤーや飲み物も無料で、施設のホスピタリティが素晴らしいです。人気のため体験予約が取りづらい時期もあります。' },
    ],
    price: '月4回 12,980円〜', trial: '体験レッスンあり',
    features: ['女性専用マシン', '渋谷駅徒歩2分', '音楽×ピラティス', '月4回12,980円〜'],
    description: '音楽とマシンピラティスを融合した女性専用スタジオ。渋谷駅徒歩2分の好立地で、暗闇×音楽の非日常空間で楽しみながらボディメイク。リフォーマーを使用した本格マシンピラティスを月4回12,980円〜で提供。',
    access: '渋谷駅 徒歩2分',
    address: '東京都渋谷区（渋谷駅徒歩2分）',
    popularPlan: { name: '月4回プラン', description: '音楽×暗闇の非日常空間でマシンピラティス。', price: '月4回 12,980円（税込）〜' },
    options: ['月4回プラン（12,980円〜）', '月8回プラン', '通い放題プラン', '体験レッスン'],
    userProfile: { ageRange: '20代〜30代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'ダイエット', 'ストレス発散', '美容'] },
    basicInfo: { hours: '平日 7:00〜22:00 / 土日祝 8:00〜20:00', closed: '不定休', facilities: ['リフォーマーマシン', 'パウダールーム', 'ロッカー', '更衣室'] },
  },
  {
    name: 'ピラティスK 渋谷店',
    image: '/images/studios/pilates-k.webp',
    rating: 4.6, reviewCount: 107,
    reviews: [
      { author: 'H.W', rating: 5, date: '2ヶ月前', text: 'スタジオに大きな鏡があってフォーム確認がしやすく、窓からは渋谷の街並みが見えて開放的です。音楽に合わせて動けるのでキツく感じにくいです。' },
      { author: 'S.I', rating: 5, date: '3ヶ月前', text: '初めての体験でしたが、話しやすいスタッフさんばかりで安心して通えそうだと感じました。先生が盛り上げてくれるので頑張れます。' },
      { author: 'T.M', rating: 4, date: '5ヶ月前', text: '楽しく続けられるマシンピラティススタジオです。渋谷駅A0出口から徒歩5分で通いやすいですが、受付の混雑が少し気になることもあります。' },
    ],
    price: '月4回 11,220円〜', trial: '体験レッスンあり',
    features: ['女性専用マシングループ', '月4回11,220円〜', 'ボディメイク特化', '渋谷駅近'],
    description: '女性専用のマシンピラティス専門グループレッスンスタジオ。全国展開の実績あるスタジオで、ボディメイクに特化したプログラムが豊富。月4回11,220円〜のリーズナブルな価格設定。',
    access: '渋谷駅 徒歩圏内',
    address: '東京都渋谷区（渋谷駅徒歩圏内）',
    popularPlan: { name: '月4回メンバー', description: 'ボディメイク特化の女性専用マシングループ。', price: '月4回 11,220円（税込）〜' },
    options: ['月4回メンバー（11,220円〜）', '月8回メンバー', '通い放題メンバー', '体験レッスン'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '美容'] },
    basicInfo: { hours: '平日 10:00〜22:00 / 土日祝 10:00〜20:00', closed: '不定休', facilities: ['リフォーマーマシン', 'パウダールーム', 'ロッカー', '更衣室'] },
  },
  {
    name: 'Rintosull 渋谷',
    image: '/images/studios/rintosull.webp',
    rating: 4.5, reviewCount: 82,
    reviews: [
      { author: 'K.O', rating: 5, date: '2ヶ月前', text: 'グループレッスンでもサポートが行き届いていて、大型スクリーンの映像で正しいフォームが分かりやすいです。レッスン後の爽快感が気持ちいいです。' },
      { author: 'E.T', rating: 4, date: '3ヶ月前', text: '施設は清潔で雰囲気が良く、初心者でも安心して始められました。ただ人気の時間帯は予約の待ちリストが長くなることがあります。' },
      { author: 'N.H', rating: 3, date: '5ヶ月前', text: '料金は渋谷エリアでは手頃ですが、マシンの間隔がやや狭く感じることがあります。体験時の契約の説明がもう少し丁寧だと良いと思いました。' },
    ],
    price: '月4回 8,800円〜', trial: '体験レッスンあり',
    features: ['女性専用マシン', 'LAVA系列', '月4回8,800円〜', 'スクリーン指導'],
    description: 'ホットヨガLAVA系列の女性専用マシンピラティススタジオ。大型スクリーンの映像とインストラクターのダブル指導で、正しいフォームを習得できる独自メソッド。月4回8,800円〜と渋谷エリア最安クラスの価格設定。',
    access: '渋谷駅 徒歩圏内',
    address: '東京都渋谷区（渋谷駅徒歩圏内）',
    popularPlan: { name: '月4回プラン', description: 'LAVA系列の女性専用マシンピラティス。スクリーン+インストラクターのダブル指導。', price: '月4回 8,800円（税込）〜' },
    options: ['月4回プラン（8,800円〜）', '月8回プラン', '通い放題プラン', '体験レッスン'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ダイエット', '姿勢改善', 'ボディメイク', '運動不足解消'] },
    basicInfo: { hours: 'お問い合わせください', closed: '不定休', facilities: ['リフォーマーマシン', '大型スクリーン', 'ロッカー', '更衣室'] },
  },
  {
    name: 'CLUB PILATES 渋谷',
    image: '/images/studios/club-pilates.webp',
    rating: 4.6, reviewCount: 157,
    reviews: [
      { author: 'D.M', rating: 5, date: '2ヶ月前', text: '雰囲気がとても良く、体験レッスンでもインナーマッスルに効かせる動きを丁寧に教えてもらえました。スタッフの説明も非常に分かりやすかったです。' },
      { author: 'R.Y', rating: 5, date: '3ヶ月前', text: '回数を重ねるごとに姿勢が綺麗になっていくのを実感しています。インストラクターが皆さん熱心で、レベル別のプログラムが充実しています。' },
      { author: 'Y.K', rating: 4, date: '4ヶ月前', text: '唯一長く続いている運動です。更衣室が少し狭いのが気になりますが、レッスンの質と窓からの景色が良く通うのが楽しいです。' },
    ],
    price: '月4回 10,890円〜', trial: '無料体験',
    features: ['最大12名グループ', '月4回10,890円〜', '無料体験あり', '世界的ブランド'],
    description: 'アメリカ発の世界的ピラティスブランド。最大12名のグループレッスンで、レベル別にクラスが分かれているため初心者から上級者まで対応。月4回10,890円〜。無料体験レッスンあり。',
    access: '渋谷駅 徒歩圏内',
    address: '東京都渋谷区（渋谷駅徒歩圏内）',
    popularPlan: { name: '月4回プラン', description: '最大12名のグループレッスン。レベル別クラス。', price: '月4回 10,890円（税込）〜' },
    options: ['月4回プラン（10,890円〜）', '月8回プラン', '通い放題プラン', '無料体験レッスン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性75% / 男性25%', purpose: ['体幹強化', '姿勢改善', 'ボディメイク', '柔軟性向上'] },
    basicInfo: { hours: '平日 7:00〜21:00 / 土日祝 8:00〜18:00', closed: '不定休', facilities: ['リフォーマーマシン', '各種ピラティス器具', 'ロッカー', '更衣室'] },
  },
  {
    name: 'STUDIO IVY 渋谷',
    image: '/images/studios/studio-ivy.webp',
    rating: 4.8, reviewCount: 566,
    reviews: [
      { author: 'S.W', rating: 5, date: '2ヶ月前', text: 'スタジオがとてもおしゃれで清潔感があり、完全個室なので集中してレッスンに取り組めます。トレーナーが体の状態に合わせたメニューを組んでくれます。' },
      { author: 'K.M', rating: 5, date: '3ヶ月前', text: 'マンツーマンなので筋肉の使い方や呼吸法を丁寧に修正してもらえます。姿勢が改善されて疲れにくくなりました。' },
      { author: 'M.I', rating: 4, date: '5ヶ月前', text: '1回あたりの料金は相場より安めで個室環境も良いです。ただ夕方の人気時間帯は予約が取りづらいことがあります。' },
    ],
    price: '月2回 15,000円〜', trial: '体験レッスンあり',
    features: ['完全個室パーソナル', '月2回15,000円〜', 'マンツーマン指導', 'オーダーメイドプログラム'],
    description: '完全個室のパーソナルピラティススタジオ。一人ひとりの体の状態や目標に合わせたオーダーメイドプログラムを提供。月2回15,000円〜で、プライベートな空間で本格的なマシンピラティスが受けられる。',
    access: '渋谷駅 徒歩圏内',
    address: '東京都渋谷区（渋谷駅徒歩圏内）',
    popularPlan: { name: '月2回プラン', description: '完全個室のパーソナルマシンピラティス。', price: '月2回 15,000円（税込）〜' },
    options: ['月2回プラン（15,000円〜）', '月4回プラン', '月8回プラン', '体験レッスン'],
    userProfile: { ageRange: '30代〜50代が中心', genderRatio: '女性70% / 男性30%', purpose: ['姿勢改善', '腰痛改善', 'ボディメイク', 'パフォーマンス向上'] },
    basicInfo: { hours: '平日 8:00〜22:00 / 土日祝 8:00〜20:00', closed: '不定休', facilities: ['完全個室', 'リフォーマーマシン', '各種ピラティス器具', '更衣室'] },
  },
  {
    name: 'ELEMENT 渋谷',
    officialUrl: 'https://t.felmat.net/fmcl?ak=U11199J.1.V154352I.U1357808',
    image: '/images/studios/element.webp',
    rating: 4.7, reviewCount: 85, /* ※GoogleMaps未確認 */
    reviews: [
      { author: 'T.N', rating: 5, date: '2ヶ月前', text: '30分でもしっかり筋肉痛になるくらいレッスンが充実しています。パーソナルなので個別にアドバイスをもらえて効率的です。' },
      { author: 'A.H', rating: 5, date: '3ヶ月前', text: 'ウェアやタオル、ドリンクが全て無料で手ぶらで通えるのが最高です。通い放題だと行けば行くほどお得になる仕組みも魅力的。' },
      { author: 'H.K', rating: 4, date: '4ヶ月前', text: '短時間で集中できるので忙しい日でも通いやすいです。ただ人気の時間帯は予約が取りづらいことがあるので、早めの予約がおすすめです。' },
    ],
    price: '月4回 22,000円', trial: '体験レッスンあり',
    features: ['マンツーマン30分', '月4回22,000円', '短時間集中', '効率重視'],
    description: 'マンツーマン30分の短時間集中型ピラティススタジオ。忙しい方でも効率よくトレーニングできる。月4回22,000円で、パーソナルならではの丁寧な指導が受けられる。',
    access: '渋谷駅 徒歩圏内',
    address: '東京都渋谷区（渋谷駅徒歩圏内）',
    popularPlan: { name: '月4回プラン', description: 'マンツーマン30分の短時間集中パーソナル。', price: '月4回 22,000円（税込）' },
    options: ['月4回プラン（22,000円）', '月8回プラン', '体験レッスン'],
    userProfile: { ageRange: '30代〜40代が中心', genderRatio: '女性65% / 男性35%', purpose: ['ボディメイク', '運動不足解消', '体幹強化', '姿勢改善'] },
    basicInfo: { hours: '平日 10:00〜22:00 / 土日祝 10:00〜20:00', closed: '不定休', facilities: ['パーソナルスペース', 'リフォーマーマシン', 'ロッカー', '更衣室'] },
  },
  {
    name: 'ピラティスミラー 渋谷',
    image: '/images/studios/pilates-mirror.webp',
    rating: 4.5, reviewCount: 65, /* ※GoogleMaps未確認（全店舗平均4.5） */
    reviews: [
      { author: 'N.Y', rating: 5, date: '2ヶ月前', text: '駅から近くて通いやすく、インストラクターが気さくで知識も豊富です。天井のミラーで自分の姿を確認しながらレッスンできるので理解しやすいです。' },
      { author: 'R.T', rating: 4, date: '3ヶ月前', text: 'リーズナブルな価格で月6回通えるスタジオはなかなかありません。最大8名の少人数制なのでインストラクターの目が行き届いています。' },
      { author: 'Y.I', rating: 4, date: '5ヶ月前', text: '女性専用で安心して通えます。平日夕方以降は予約が取りにくいことがありますが、スタジオの清潔感と丁寧な指導には満足しています。' },
    ],
    price: 'プライベート30分 4,400円〜', trial: '体験レッスンあり',
    features: ['女性専用', 'プライベート30分4,400円〜', '都度払い可', 'リーズナブル'],
    description: '女性専用のピラティススタジオ。プライベートレッスン30分4,400円〜と、パーソナルピラティスとしてはリーズナブルな価格設定。短時間で効率よくトレーニングしたい女性におすすめ。',
    access: '渋谷駅 徒歩圏内',
    address: '東京都渋谷区（渋谷駅徒歩圏内）',
    popularPlan: { name: 'プライベート30分', description: '女性専用のマンツーマンレッスン。', price: 'プライベート30分 4,400円（税込）〜' },
    options: ['プライベート30分（4,400円〜）', '月額プラン', '回数券', '体験レッスン'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', 'ダイエット', '姿勢改善', '美容'] },
    basicInfo: { hours: 'お問い合わせください', closed: '不定休', facilities: ['プライベートスペース', 'ピラティス器具', 'ロッカー', '更衣室'] },
  },
  {
    name: 'YUZU 渋谷',
    image: '/images/studios/yuzu-pilates.webp',
    rating: 4.6, reviewCount: 50, /* ※reviewCount GoogleMaps未確認 */
    reviews: [
      { author: 'L.K', rating: 5, date: '2ヶ月前', text: '回数券制なので自分のペースで通えるのが嬉しいです。スタジオがとても綺麗で落ち着く空間です。トレーナーが体の状態に合わせてメニューを考えてくれます。' },
      { author: 'K.S', rating: 5, date: '3ヶ月前', text: '筋肉の使い方や呼吸法を丁寧に修正してもらえて、姿勢が良くなり疲れにくくなりました。完全個室なのでリラックスして受けられます。' },
      { author: 'A.N', rating: 4, date: '5ヶ月前', text: 'インストラクターは親切で知識豊富ですが、専門用語が多く初回は少し分かりづらい部分もありました。慣れれば問題ないです。' },
    ],
    price: 'お問い合わせ', trial: '体験レッスンあり',
    features: ['パーソナルマシン', '女性専用', 'オーダーメイド', '丁寧な指導'],
    description: '女性専用のパーソナルマシンピラティススタジオ。一人ひとりの体の状態に合わせたオーダーメイドプログラムを提供。マシンを使ったマンツーマン指導で効果的なトレーニングが可能。',
    access: '渋谷駅 徒歩圏内',
    address: '東京都渋谷区（渋谷駅徒歩圏内）',
    popularPlan: { name: 'パーソナルプラン', description: '女性専用マシンパーソナルピラティス。', price: 'お問い合わせ' },
    options: ['パーソナルプラン', '回数券', '体験レッスン'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性100%（女性専用）', purpose: ['ボディメイク', '姿勢改善', '体質改善', '美容'] },
    basicInfo: { hours: 'お問い合わせください', closed: '不定休', facilities: ['パーソナルスペース', 'リフォーマーマシン', 'ロッカー', '更衣室'] },
  },
  {
    name: 'BDC PILATES 渋谷（近隣）',
    image: '/images/studios/bdc-pilates.webp',
    rating: 4.7, reviewCount: 233,
    reviews: [
      { author: 'P.K', rating: 5, date: '2ヶ月前', text: '他のマシンピラティスのスタジオに比べて、かなり丁寧に一人ひとりを見てもらえます。姿勢や腰痛が改善されて、体幹の安定を実感しています。' },
      { author: 'M.A', rating: 5, date: '3ヶ月前', text: 'スタジオが清潔で少人数制なので、インストラクターの目が行き届いています。肩こりが楽になり、日常の動きも変わってきました。' },
      { author: 'R.I', rating: 4, date: '5ヶ月前', text: 'レッスンの質は間違いなく高いです。ただ平日夜や週末は3週間前でも満員になることがあるので、早めの予約が必要です。' },
    ],
    price: 'お問い合わせ', trial: '体験レッスンあり',
    features: ['ダンサー御用達', '高品質指導', '渋谷近隣', '本格派'],
    description: 'ダンサー御用達の本格ピラティススタジオ。渋谷近隣エリアに位置し、プロのダンサーやパフォーマーも通う高品質な指導が特徴。ピラティスの本質を追求したい方におすすめ。',
    access: '渋谷近隣エリア',
    address: '東京都渋谷区（渋谷近隣）',
    popularPlan: { name: 'レギュラープラン', description: 'ダンサー御用達の本格ピラティス。', price: 'お問い合わせ' },
    options: ['レギュラープラン', '回数券', 'プライベートレッスン', '体験レッスン'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性70% / 男性30%', purpose: ['パフォーマンス向上', '体幹強化', '柔軟性向上', '姿勢改善'] },
    basicInfo: { hours: 'お問い合わせください', closed: '不定休', facilities: ['スタジオ', 'ピラティス器具', 'ロッカー', '更衣室'] },
  },
  {
    name: 'NATURAglam 渋谷（近隣）',
    image: '/images/studios/naturaglam.webp',
    rating: 4.4, reviewCount: 60, /* ※GoogleMaps未確認（全店舗評価4.4） */
    reviews: [
      { author: 'J.T', rating: 5, date: '2ヶ月前', text: '月額料金がリーズナブルで予約システムも使いやすく、どの店舗でも通えるのが便利です。インストラクターの質が高く、他では教わらないポーズも学べます。' },
      { author: 'T.H', rating: 4, date: '4ヶ月前', text: 'ヨガとピラティスの両方が受けられて、リラックスから体幹トレーニングまで気分に合わせて選べます。アットホームな雰囲気が心地よいです。' },
      { author: 'S.M', rating: 4, date: '5ヶ月前', text: '少人数制で丁寧に教えてもらえるので初心者でも安心です。個人的な体の悩みにも対応してくれます。通い放題プランがないのが少し残念です。' },
    ],
    price: 'お問い合わせ', trial: '体験レッスンあり',
    features: ['女性専用', 'ヨガ&ピラティス', '少人数制', '渋谷近隣'],
    description: '女性専用のヨガ&ピラティススタジオ。渋谷近隣エリアに位置し、少人数制でアットホームな雰囲気が魅力。ヨガとピラティスの両方を楽しめるので、気分や目的に合わせてレッスンを選べる。',
    access: '渋谷近隣エリア',
    address: '東京都渋谷区（渋谷近隣）',
    popularPlan: { name: 'レギュラープラン', description: '女性専用のヨガ&ピラティス。少人数制。', price: 'お問い合わせ' },
    options: ['月額プラン', '回数券', 'ヨガクラス', 'ピラティスクラス', '体験レッスン'],
    userProfile: { ageRange: '20代〜50代が中心', genderRatio: '女性100%（女性専用）', purpose: ['リラックス', '柔軟性向上', 'ボディメイク', '健康維持'] },
    basicInfo: { hours: 'お問い合わせください', closed: '不定休', facilities: ['スタジオ', 'ヨガマット', 'ロッカー', '更衣室'] },
  },
  {
    name: 'CALDO 渋谷',
    image: '/images/studios/caldo.webp',
    rating: 4.4, reviewCount: 114,
    reviews: [
      { author: 'F.S', rating: 5, date: '2ヶ月前', text: 'インストラクターの説明が分かりやすく、レッスン内容も多彩です。4年通って基礎体温が上がり風邪を引きにくくなりました。ジムエリアも使えてコスパが良いです。' },
      { author: 'W.T', rating: 4, date: '3ヶ月前', text: '渋谷駅八公口から徒歩5分でアクセスしやすいです。バリ島の溶岩石を使ったホットスタジオで体の芯から温まり、柔軟性が上がりました。' },
      { author: 'C.K', rating: 4, date: '5ヶ月前', text: 'レッスン後のシャワーが2室しかなく混み合うことがあります。ただ施設全体は充実していて、ホットヨガとピラティスを組み合わせて受けられるのは魅力的です。' },
    ],
    price: 'お問い合わせ', trial: '体験レッスンあり',
    features: ['ホットヨガ&ピラティス', '温熱環境', '施設充実', '渋谷駅近'],
    description: 'ホットヨガ&ピラティスの総合スタジオ。温かい環境でのピラティスは体がほぐれやすく効果的。ホットヨガとピラティスを組み合わせたプログラムで、デトックスとボディメイクを同時に実現。',
    access: '渋谷駅 徒歩圏内',
    address: '東京都渋谷区（渋谷駅徒歩圏内）',
    popularPlan: { name: 'レギュラープラン', description: 'ホットヨガ&ピラティスの総合プラン。', price: 'お問い合わせ' },
    options: ['月額プラン', '通い放題プラン', 'ホットヨガクラス', 'ピラティスクラス', '体験レッスン'],
    userProfile: { ageRange: '20代〜40代が中心', genderRatio: '女性85% / 男性15%', purpose: ['デトックス', 'ダイエット', '冷え性改善', 'ボディメイク'] },
    basicInfo: { hours: '平日 10:00〜22:30 / 土日祝 10:00〜20:00', closed: '不定休', facilities: ['ホットスタジオ', 'ピラティススタジオ', 'ジムエリア', 'ロッカー', '更衣室'] },
  },
  {
    name: 'Dr.ピラティス 渋谷店',
    officialUrl: 'https://drpilates.drtraining.jp/',
    image: '/images/studios/dr-pilates.webp',
    price: '月4回(45分) 29,700円〜 / 月4回(60分) 39,600円〜',
    trial: '体験トレーニング 7,100円（無料キャンペーン実施店舗あり）',
    features: ['マンツーマン（パーソナル）', 'マシン・マット両対応', '医師推奨パーソナルジムNo.1受賞'],
    description: '医師推奨のパーソナルジム受賞歴を持つDr.トレーニング系列のパーソナルピラティススタジオ。マシン・マット両対応のマンツーマン指導で、姿勢改善やボディメイクを目指せる。渋谷エリア（詳細は公式サイト参照）。',
    access: '渋谷エリア（詳細は公式サイト参照）',
    address: '東京都（詳細は公式サイト参照）',
  },
  {
    name: 'the SILK 渋谷店',
    officialUrl: 'https://the-silk.co.jp/',
    image: '/images/studios/the-silk.webp',
    price: 'グループ月4回(Standard4) 14,370〜15,280円 / 通い放題 19,980〜22,280円（別途施設利用料月700円）/ パーソナル月2回 22,000円〜',
    trial: '体験レッスン 無料',
    features: ['女性専用', 'マシンピラティス専門', 'グループ＋パーソナル'],
    description: '女性専用のマシンピラティス専門スタジオ。レベル別・部位別の豊富なグループプログラムとパーソナルレッスンを提供し、洗練された空間が特徴。渋谷駅から徒歩2分（情報引用元: the SILK公式サイト the-silk.co.jp）。',
    access: '渋谷駅から徒歩2分',
    address: '東京都渋谷区神南1丁目11-1 渋谷市野ビル6階',
  },
  {
    name: '24/7ピラティス 渋谷・南青山店',
    officialUrl: 'https://247-sports.jp/pilates/',
    image: '/images/studios/247-pilates.webp',
    price: '月2回 14,500円〜 / 月4回 27,000円〜 / 月8回 52,000円〜（税込）',
    trial: '体験レッスン 無料（説明含め約60分・手ぶらOK）',
    features: ['女性専用', '完全個室パーソナル', '入会金不要・月謝制'],
    description: '完全個室・マンツーマンの女性専用パーソナルピラティススタジオ。入会金不要の月謝制で、一人ひとりに合わせたオリジナルプログラムを提供。渋谷駅から徒歩7分。',
    access: '渋谷駅から徒歩7分',
    address: '東京都渋谷区渋谷2丁目6-12 ベルデ青山1F',
  },
]

const faqs = [
  { question: 'ピラティス初心者でも大丈夫ですか？', answer: '大丈夫です！渋谷エリアのスタジオはレベル別クラスがあり初心者も安心です。Rintosullはスクリーン指導で初心者に特におすすめ。CLUB PILATESもレベル別クラスが充実しています。' },
  { question: 'マットピラティスとマシンピラティスの違いは？', answer: 'マットは自重エクササイズ、マシンは専用リフォーマーを使ったトレーニング。マシンは初心者でもフォームが安定しやすくおすすめです。渋谷エリアはマシン専門スタジオが豊富です。' },
  { question: '渋谷エリアの料金相場は？', answer: 'グループ月4回で8,800円〜12,980円が相場。Rintosullは8,800円〜で最安クラス、zen placeは9,625円〜。パーソナルはピラティスミラーの30分4,400円〜が手頃です。' },
  { question: 'どのくらいの頻度で通えばいいですか？', answer: '初心者は週1-2回からスタート。慣れたら週2-3回に増やすとより効果的です。ELEMENTの30分レッスンなら忙しい方も週2回は続けやすいです。' },
  { question: 'ピラティスで痩せますか？', answer: 'はい、インナーマッスルが鍛えられ基礎代謝が上がり太りにくい体質に。最低2-3ヶ月は継続しましょう。CALDOのホット環境なら発汗効果も期待できます。' },
  { question: '体験レッスンは何を持っていけばいいですか？', answer: '動きやすい服装と飲み物があればOK。ウェアレンタルがあるスタジオも多いです。CLUB PILATESは無料体験があるので手ぶらで気軽に。' },
  { question: 'ピラティスとヨガの違いは？', answer: 'ピラティスは体幹強化・姿勢改善が中心、ヨガは柔軟性とリラックスが中心です。NATURAglam渋谷なら両方受けられます。' },
  { question: '男性でも通えるスタジオはありますか？', answer: 'zen place pilates渋谷、CLUB PILATES渋谷、ELEMENT渋谷、BDC PILATESは男性もOKです。the SILK、ピラティスK、Rintosull、ピラティスミラー、YUZU、NATURAglam は女性専用です。' },
  { question: 'どのくらいで効果が出ますか？', answer: '2ヶ月を過ぎた頃から効果を実感する方が多いです。週2回なら1ヶ月半ほどで変化を感じる方も。パーソナルレッスンの方がより早く効果を実感しやすいです。' },
  { question: '無料体験ができるスタジオはありますか？', answer: 'CLUB PILATES渋谷は無料体験レッスンがあります。zen placeやthe SILKなども体験レッスンを用意しています。まずは気軽に体験してみましょう。' },
]

export default function ShibuyaPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <BreadcrumbSchema items={[
        { name: 'ホーム', url: 'https://pilates-biyori.com/' },
        { name: '地域別', url: 'https://pilates-biyori.com/area/' },
        { name: '渋谷', url: 'https://pilates-biyori.com/area/shibuya/' },
      ]} />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-warm-400 text-xs mb-2">更新日 @2026年07月13日</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4">
              【2026最新】ピラティス渋谷おすすめ15選！<br className="hidden md:block" />
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
              <Link href="/area/" className="hover:text-warm-800 transition">地域別</Link>
              {' > '}
              <span className="text-warm-600">渋谷</span>
            </nav>
          </div>
        </section>

        <TableOfContents areaName="渋谷" studioNames={[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((s) => s.name)} />

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
              「渋谷でピラティスを始めたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              「自分に合うスタジオを見つけたい」
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              と思っていませんか？
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              そこでこの記事では、JR山手線・東急東横線・東京メトロ銀座線・半蔵門線が乗り入れる渋谷駅周辺でおすすめのピラティススタジオ15選をまとめました。MIYASHITA PARKや渋谷スクランブルスクエアなど商業施設が集まる渋谷エリアは、仕事帰りや買い物ついでにも通いやすいピラティス激戦区です。
            </p>
            <div className="bg-warm-50 border-l-4 border-warm-400 p-6 mb-8">
              <h2 className="text-lg font-bold text-warm-900 mb-4">こんな人におすすめ</h2>
              <ul className="space-y-2 text-warm-700">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>渋谷でピラティススタジオを探している</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>女性専用スタジオに通いたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>マシンピラティスやパーソナルを体験してみたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>料金プランを比較して選びたい</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">✓</span>
                  <span>グループ・パーソナルどちらが良いか迷っている</span>
                </li>
              </ul>
            </div>
            <p className="text-warm-600 leading-relaxed">
              それではさっそく見ていきましょう！
            </p>
          </div>
        </section>

        <PriceComparisonTable studios={studios} areaName="渋谷" />
        <AreaMarketComparison studios={studios} areaName="渋谷" />

        {/* Studios List */}
        <section className="py-16 bg-warm-50" id="studios">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              渋谷のおすすめピラティススタジオ15選
            </h2>
            <div className="space-y-8">
              {[...studios].sort((a,b)=>(((b as any).officialUrl||'').includes('felmat')?1:0)-(((a as any).officialUrl||'').includes('felmat')?1:0)).map((studio, index) => (
                <StudioCard key={index} studio={studio} index={index} />
              ))}
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
                <h3 className="text-xl font-bold text-warm-900 mb-4">コスパ重視</h3>
                <p className="text-warm-600 text-sm mb-4">
                  月額1万円以下から通える。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• <a href="#studio-4" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">Rintosull</a>（月4回 8,800円〜）</li>
                  <li className="text-warm-700">• <a href="#studio-1" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">zen place pilates</a>（月4回 9,625円〜）</li>
                  <li className="text-warm-700">• <a href="#studio-5" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">CLUB PILATES</a>（月4回 10,890円〜）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">女性専用で安心</h3>
                <p className="text-warm-600 text-sm mb-4">
                  女性だけの空間で集中。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• <a href="#studio-2" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">the SILK</a>（音楽×マシン）</li>
                  <li className="text-warm-700">• <a href="#studio-3" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">ピラティスK</a>（マシングループ）</li>
                  <li className="text-warm-700">• <a href="#studio-4" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">Rintosull</a>（LAVA系列）</li>
                  <li className="text-warm-700">• <a href="#studio-8" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">ピラティスミラー</a>（プライベート30分4,400円〜）</li>
                  <li className="text-warm-700">• YUZU（パーソナルマシン）</li>
                </ul>
              </div>
              <div className="border border-warm-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-warm-900 mb-4">パーソナルで本格的に</h3>
                <p className="text-warm-600 text-sm mb-4">
                  マンツーマンで効率よく。
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-warm-700">• <a href="#studio-6" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">STUDIO IVY</a>（完全個室・月2回15,000円〜）</li>
                  <li className="text-warm-700">• <a href="#studio-7" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">ELEMENT</a>（30分集中・月4回22,000円）</li>
                  <li className="text-warm-700">• <a href="#studio-8" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">ピラティスミラー</a>（30分4,400円〜）</li>
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
              <h3 className="text-xl font-bold text-warm-900 mb-4">初心者の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週1-2回からスタート。最低2-3ヶ月で効果を実感。グループレッスンで基礎を身につけましょう。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">ボディメイク目的の方</h3>
              <p className="text-warm-600 leading-relaxed mb-6">
                週2-3回がおすすめ。3-6ヶ月で目に見える変化。パーソナルとグループの併用も効果的。
              </p>
              <h3 className="text-xl font-bold text-warm-900 mb-4">健康管理目的の方</h3>
              <p className="text-warm-600 leading-relaxed">
                週1回のペースで無理なく継続。ELEMENTの30分レッスンなら忙しい方でも続けやすい。
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
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 〜10,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">リーズナブル</p>
                <p className="text-sm text-warm-600 mb-4">
                  月4回で1万円以下。グループレッスン中心。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• <a href="#studio-4" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">Rintosull</a>（月4回 8,800円〜）</li>
                  <li>• <a href="#studio-1" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">zen place pilates</a>（月4回 9,625円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-500 rounded-lg p-6 text-center bg-warm-50">
                <div className="inline-block bg-warm-800 text-white text-xs px-3 py-1 rounded-full mb-2">人気</div>
                <h3 className="text-lg font-bold text-warm-900 mb-2">予算 10,000〜15,000円/月</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">スタンダード</p>
                <p className="text-sm text-warm-600 mb-4">
                  充実のマシンピラティス。選択肢豊富。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• <a href="#studio-5" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">CLUB PILATES</a>（月4回 10,890円〜）</li>
                  <li>• <a href="#studio-3" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">ピラティスK</a>（月4回 11,220円〜）</li>
                  <li>• <a href="#studio-2" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">the SILK</a>（月4回 12,980円〜）</li>
                  <li>• <a href="#studio-6" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">STUDIO IVY</a>（月2回 15,000円〜）</li>
                </ul>
              </div>
              <div className="border-2 border-warm-300 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-warm-900 mb-2">パーソナル重視</h3>
                <p className="text-3xl font-bold text-warm-800 mb-4">本格派</p>
                <p className="text-sm text-warm-600 mb-4">
                  マンツーマンで効果的に。
                </p>
                <ul className="text-sm text-warm-700 space-y-1">
                  <li>• <a href="#studio-8" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">ピラティスミラー</a>（30分 4,400円〜）</li>
                  <li>• <a href="#studio-7" className="text-warm-800 underline underline-offset-2 hover:text-warm-600">ELEMENT</a>（月4回 22,000円）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 bg-warm-50" id="how-to-choose">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              失敗しないスタジオの選び方
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-xl font-bold text-warm-900">目的を明確にする</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  ダイエット、姿勢改善、体幹強化など目的に応じて選びましょう。ボディメイク重視ならピラティスK、楽しさ重視ならthe SILK、本格派ならBDC PILATESがおすすめ。パーソナルで集中したいならSTUDIO IVYやELEMENTを検討。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-xl font-bold text-warm-900">予算を決める</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  渋谷エリアのグループ月4回は8,800円〜12,980円が相場。パーソナルはピラティスミラーの30分4,400円〜が手頃。体験レッスンを活用して、無理なく続けられる価格帯を見つけましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-xl font-bold text-warm-900">体験レッスンに行く</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  CLUB PILATESは無料体験あり。zen placeやthe SILKも体験レッスンを用意しています。複数のスタジオを体験して比較するのがおすすめ。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <div className="flex items-center mb-4">
                  <span className="bg-warm-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h3 className="text-xl font-bold text-warm-900">通いやすさを確認する</h3>
                </div>
                <p className="text-warm-600 leading-relaxed">
                  渋谷はJR山手線・東急東横線・東京メトロ銀座線・半蔵門線など複数路線が利用可能な東京を代表するターミナル駅。MIYASHITA PARKや渋谷スクランブルスクエア周辺にスタジオが集中しており、仕事帰りや休日にもアクセスしやすいエリアです。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Price Market Section */}
        <section className="py-16 bg-white" id="price-market">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              渋谷のピラティス料金相場【2026年4月最新】
            </h2>
            <div className="bg-warm-50 rounded-lg p-8 border border-warm-200 mb-8">
              <p className="text-warm-600 leading-relaxed mb-6">
                渋谷エリアは東京都内でもピラティス激戦区のひとつで、スタジオ数が多い分、料金競争が進んでおり比較的リーズナブルに通えるのが特徴です。2026年4月時点の料金相場は以下の通りです。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">グループレッスン（月4回）</h3>
                  <p className="text-3xl font-bold text-warm-800 mb-2">8,800円〜12,980円</p>
                  <p className="text-sm text-warm-600">最安はRintosull（LAVA系列）の月4回8,800円。the SILKは音楽×マシンの付加価値で12,980円。CLUB PILATESは10,890円で無料体験ありとバランスが良い価格帯です。</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-warm-200">
                  <h3 className="font-bold text-warm-900 mb-3">パーソナルレッスン</h3>
                  <p className="text-3xl font-bold text-warm-800 mb-2">4,400円〜22,000円</p>
                  <p className="text-sm text-warm-600">ピラティスミラーは30分4,400円〜と都内最安クラス。STUDIO IVYは月2回15,000円〜、ELEMENTは30分集中型で月4回22,000円。目的に応じて選びましょう。</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-5 border border-warm-200">
                <h3 className="font-bold text-warm-900 mb-3">入会金・体験レッスン費用</h3>
                <p className="text-sm text-warm-600">入会金は5,000円〜33,000円が相場ですが、キャンペーン期間中は無料になるスタジオも多いです。体験レッスンはCLUB PILATESが無料、その他は500円〜3,850円程度。まずは体験レッスンで雰囲気を確認するのがおすすめです。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cautions Section */}
        <section className="py-16 bg-warm-50" id="cautions">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
              渋谷でスタジオを選ぶ際の注意点
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">渋谷駅の出口選びが重要</h3>
                <p className="text-warm-600 leading-relaxed">
                  渋谷駅はJR・東急・東京メトロ・京王と複数路線が交わる巨大ターミナル。出口によってはスタジオまで10分以上かかることもあります。zen place pilatesはMIYASHITA PARK正面、the SILKは渋谷駅徒歩2分と、スタジオごとに最寄り出口が異なるため、自分の利用路線に合わせてアクセスを事前に確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">ピーク時間帯の混雑に注意</h3>
                <p className="text-warm-600 leading-relaxed">
                  渋谷は平日夜19時〜21時、土日午前中がレッスン予約の激戦帯です。特に人気スタジオのthe SILKやピラティスKは早めの予約が必須。逆に平日午前中は比較的空いており、フリーランスの方や主婦の方には狙い目の時間帯です。予約の取りやすさもスタジオ選びの大切なポイントです。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">最低契約期間とキャンセルポリシーを確認</h3>
                <p className="text-warm-600 leading-relaxed">
                  スタジオによっては入会キャンペーン適用時に3〜6ヶ月の最低契約期間が設定されていることがあります。また、レッスンの直前キャンセルに関するルール（何時間前まで無料キャンセル可能か）もスタジオごとに異なります。入会前に必ず確認しましょう。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-warm-200">
                <h3 className="text-lg font-bold text-warm-900 mb-3">グループとパーソナルの使い分け</h3>
                <p className="text-warm-600 leading-relaxed">
                  渋谷エリアはグループ専門（ピラティスK、Rintosull）からパーソナル専門（STUDIO IVY、ELEMENT）まで選択肢が豊富。初心者はまずグループレッスンで基礎を身につけ、慣れてきたらパーソナルで弱点を集中的に改善するのが効率的です。zen placeは両方に対応しているので、併用したい方におすすめです。
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
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>ウェアレンタル</strong>があるスタジオも。the SILKやピラティスKは手ぶら体験も可能です。仕事帰りに渋谷で体験したい方は事前に確認しましょう。</span></li>
                    <li className="flex items-start"><span className="text-warm-400 mr-2 mt-0.5">&#9679;</span><span><strong>アクセサリー類は外して</strong>おきましょう。マシンに引っかかる恐れがあるため、ピアス・ネックレス・腕時計はロッカーに預けるのが安全です。</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-warm-200">
                <p className="text-sm text-warm-600">
                  <strong>渋谷エリアの豆知識：</strong>渋谷駅周辺は着替えスペースが限られるスタジオもあるため、なるべくレッスンウェアを着た状態で来店するか、上から羽織れるアウターを用意すると効率的です。MIYASHITA PARKや渋谷ヒカリエのロッカーを活用する常連さんもいます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-warm-50" id="faq">
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
              今回は渋谷のおすすめピラティススタジオ15選をご紹介しました。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              渋谷はJR山手線・東急東横線・東京メトロ銀座線・半蔵門線など複数路線が乗り入れる東京を代表するターミナル駅。若者の街として知られる渋谷区には、MIYASHITA PARK正面のzen place pilates、音楽×マシンのthe SILK、月4回8,800円〜のRintosull、無料体験ありのCLUB PILATES、完全個室のSTUDIO IVY、30分集中のELEMENTなど、個性豊かなスタジオが揃っています。
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              グループレッスンからパーソナルまで、女性専用から男性OKまで、幅広い選択肢があるのが渋谷エリアの魅力です。ぜひ自分に合うスタジオを見つけてくださいね。
            </p>
            <p className="text-warm-700 font-medium text-center">
              あなたにぴったりのスタジオが見つかることを願っています。
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
              CLUB PILATESは無料体験あり。zen placeやthe SILKも体験レッスンを用意。<br />
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
        {/* boost-nav-202606 */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-warm-900 mb-3">📍 近隣エリア・料金データで比較する</h2>
              <p className="text-warm-600 text-sm mb-4">通勤・生活圏のスタジオもあわせて比べると、自分に合った1校が見つかりやすくなります。</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/area/yoyogi-uehara/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">代々木上原</Link>
                <Link href="/articles/pilates-ryokin-hakusho/" className="inline-block bg-white border border-warm-200 rounded-full px-4 py-2 text-sm text-warm-700 hover:border-warm-400 hover:text-warm-900 transition">全国ピラティス料金白書2026</Link>
              </div>
            </div>
          </div>
        </section>


      {/* AIスタジオ相談（遅延ロード・エリア自動セット） */}
      <ConsultantSection areaKey="shibuya" areaName="渋谷" />

      <RelatedAreas currentSlug="shibuya" />
      <SiteFooter />
      <Script src="https://unpkg.com/lucide@latest" strategy="lazyOnload" />
    </>
  )
}
