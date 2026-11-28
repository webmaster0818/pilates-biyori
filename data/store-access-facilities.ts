// 店舗ページ（/brands/{ブランド}-{店舗}/）の「アクセス・駐車場」「設備」「レッスンと講師」。
// 2026-11-28 作成。競合の店舗ページにあって当サイトに無かったブロック（~/.openclaw/workspace/pilates-kuchikomi-gap-20261127.md ⑤）。
// ⚠️ 値はすべて公式サイト（ブランドの店舗ページ・FAQ、入居する商業施設の公式アクセスページ）で 2026年11月28日 に確認したもの。
//    元データ: ~/.openclaw/workspace/pilates-research-20261128/access-facilities.json（生成: gen_access_ts.py）。
// ⚠️ 公式の文は写さず事実だけを言い換え。記載の無い項目は出さない（「なし」は公式に「なし」とある場合だけ）。
// ⚠️ Google マップの口コミ・地図サービス・第三者ブログは根拠にしない。

export type Src = { label: string; url: string }
export type StoreAccess = { brand?: string; stations?: string; accessNote?: string; route?: string[]; parking?: string; bicycle?: string; facilityParking?: string; facilities?: [string, string][]; lesson?: [string, string][]; sources: Src[] }
export type BrandInstructors = { rows: [string, string][]; sources: Src[] }

export const ACCESS_CHECKED = "2026年11月28日";

export const STORE_ACCESS: Record<string, StoreAccess> = {
 "bdc-ebisu": {
  "stations": "恵比寿駅 徒歩3分",
  "accessNote": "JR恵比寿駅 東口から徒歩約3分（エビススバルビルの隣）。",
  "facilities": [
   [
    "更衣室",
    "男女別の更衣室"
   ],
   [
    "シャワー",
    "なし（公式FAQ）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "最大8名のグループレッスン（55分）＋プライベートレッスン（60分）"
   ],
   [
    "定員",
    "グループ（リフォーマー） 8名"
   ]
  ],
  "sources": [
   {
    "label": "BDC PILATES 公式（店舗ページ）",
    "url": "https://bdcpilates.com/ebisu"
   },
   {
    "label": "BDC PILATES 公式（スタジオ一覧）",
    "url": "https://bdcpilates.com/studios"
   },
   {
    "label": "BDC PILATES 公式（FAQ）",
    "url": "https://bdcpilates.com/faq"
   }
  ],
  "brand": "bdc"
 },
 "bdc-futakotamagawa": {
  "stations": "二子玉川駅 徒歩2分",
  "facilities": [
   [
    "更衣室",
    "男女別の更衣室"
   ],
   [
    "シャワー",
    "なし（公式FAQ）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "最大8名のグループレッスン（55分）＋プライベートレッスン（60分）"
   ],
   [
    "定員",
    "グループ（リフォーマー） 8名"
   ]
  ],
  "sources": [
   {
    "label": "BDC PILATES 公式（店舗ページ）",
    "url": "https://bdcpilates.com/futakotamagawa"
   },
   {
    "label": "BDC PILATES 公式（FAQ）",
    "url": "https://bdcpilates.com/faq"
   }
  ],
  "brand": "bdc"
 },
 "bdc-omotesando": {
  "stations": "表参道駅 徒歩2分",
  "accessNote": "公式のスタジオ一覧では、A Studio が表参道駅B3出口から徒歩5分（骨董通り沿い）、B Studio がA2出口から徒歩3分（まい泉通り）と案内されています。",
  "facilities": [
   [
    "更衣室",
    "男女別の更衣室"
   ],
   [
    "シャワー",
    "なし（公式FAQ）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "最大8名のグループレッスン（55分）＋プライベートレッスン（60分）"
   ],
   [
    "定員",
    "グループ（リフォーマー） 6-8名"
   ]
  ],
  "sources": [
   {
    "label": "BDC PILATES 公式（店舗ページ）",
    "url": "https://bdcpilates.com/omotesando"
   },
   {
    "label": "BDC PILATES 公式（スタジオ一覧）",
    "url": "https://bdcpilates.com/studios"
   },
   {
    "label": "BDC PILATES 公式（FAQ）",
    "url": "https://bdcpilates.com/faq"
   }
  ],
  "brand": "bdc"
 },
 "club-pilates-daikanyama": {
  "stations": "東急・東横線 代官山駅 徒歩1分",
  "facilities": [
   [
    "更衣室",
    "更衣室・ロッカールーム、休憩スペース"
   ],
   [
    "給水",
    "ウォーターサーバー完備"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン（最大12名）が中心。専用のプライベートルームなどでのマンツーマンレッスンもあり"
   ]
  ],
  "sources": [
   {
    "label": "CLUB PILATES 公式（店舗ページ）",
    "url": "https://clubpilates.co.jp/studio/daikanyama/"
   },
   {
    "label": "CLUB PILATES 公式（はじめての方へ）",
    "url": "https://clubpilates.co.jp/trial/"
   }
  ],
  "brand": "club-pilates"
 },
 "club-pilates-esaka": {
  "stations": "御堂筋線江坂駅より徒歩3分",
  "facilities": [
   [
    "更衣室",
    "更衣室・ロッカールーム、休憩スペース"
   ],
   [
    "給水",
    "ウォーターサーバー完備"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン（最大12名）が中心。専用のプライベートルームなどでのマンツーマンレッスンもあり"
   ]
  ],
  "sources": [
   {
    "label": "CLUB PILATES 公式（店舗ページ）",
    "url": "https://clubpilates.co.jp/studio/esaka/"
   },
   {
    "label": "CLUB PILATES 公式（はじめての方へ）",
    "url": "https://clubpilates.co.jp/trial/"
   }
  ],
  "brand": "club-pilates"
 },
 "club-pilates-fukuoka-nishijin": {
  "stations": "西新駅4分 藤崎駅 徒歩9分",
  "facilities": [
   [
    "更衣室",
    "更衣室・ロッカールーム、休憩スペース"
   ],
   [
    "給水",
    "ウォーターサーバー完備"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン（最大12名）が中心。専用のプライベートルームなどでのマンツーマンレッスンもあり"
   ]
  ],
  "sources": [
   {
    "label": "CLUB PILATES 公式（店舗ページ）",
    "url": "https://clubpilates.co.jp/studio/fukuokanishijin/"
   },
   {
    "label": "CLUB PILATES 公式（はじめての方へ）",
    "url": "https://clubpilates.co.jp/trial/"
   }
  ],
  "brand": "club-pilates"
 },
 "club-pilates-kagurazaka": {
  "stations": "東西線神楽坂駅 1A出口より徒歩30秒",
  "facilities": [
   [
    "更衣室",
    "更衣室・ロッカールーム、休憩スペース"
   ],
   [
    "給水",
    "ウォーターサーバー完備"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン（最大12名）が中心。専用のプライベートルームなどでのマンツーマンレッスンもあり"
   ]
  ],
  "sources": [
   {
    "label": "CLUB PILATES 公式（店舗ページ）",
    "url": "https://clubpilates.co.jp/studio/kagurazaka/"
   },
   {
    "label": "CLUB PILATES 公式（はじめての方へ）",
    "url": "https://clubpilates.co.jp/trial/"
   }
  ],
  "brand": "club-pilates"
 },
 "club-pilates-nakano-sakaue": {
  "stations": "都営大江戸線 / 中野坂上駅 徒歩より2分",
  "facilities": [
   [
    "更衣室",
    "更衣室・ロッカールーム、休憩スペース"
   ],
   [
    "給水",
    "ウォーターサーバー完備"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン（最大12名）が中心。専用のプライベートルームなどでのマンツーマンレッスンもあり"
   ]
  ],
  "sources": [
   {
    "label": "CLUB PILATES 公式（店舗ページ）",
    "url": "https://clubpilates.co.jp/studio/nakanosakaue/"
   },
   {
    "label": "CLUB PILATES 公式（はじめての方へ）",
    "url": "https://clubpilates.co.jp/trial/"
   }
  ],
  "brand": "club-pilates"
 },
 "club-pilates-nishinomiyakitaguchi": {
  "stations": "西宮北口駅 徒歩5分",
  "facilities": [
   [
    "更衣室",
    "更衣室・ロッカールーム、休憩スペース"
   ],
   [
    "給水",
    "ウォーターサーバー完備"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン（最大12名）が中心。専用のプライベートルームなどでのマンツーマンレッスンもあり"
   ]
  ],
  "sources": [
   {
    "label": "CLUB PILATES 公式（店舗ページ）",
    "url": "https://clubpilates.co.jp/studio/nishinomiyakitaguchi/"
   },
   {
    "label": "CLUB PILATES 公式（はじめての方へ）",
    "url": "https://clubpilates.co.jp/trial/"
   }
  ],
  "brand": "club-pilates"
 },
 "club-pilates-tamachi": {
  "stations": "田町駅 徒歩6分",
  "facilities": [
   [
    "更衣室",
    "更衣室・ロッカールーム、休憩スペース"
   ],
   [
    "給水",
    "ウォーターサーバー完備"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン（最大12名）が中心。専用のプライベートルームなどでのマンツーマンレッスンもあり"
   ]
  ],
  "sources": [
   {
    "label": "CLUB PILATES 公式（店舗ページ）",
    "url": "https://clubpilates.co.jp/studio/tamachi/"
   },
   {
    "label": "CLUB PILATES 公式（はじめての方へ）",
    "url": "https://clubpilates.co.jp/trial/"
   }
  ],
  "brand": "club-pilates"
 },
 "club-pilates-toyosu": {
  "stations": "有楽町線豊洲駅からは徒歩3分、ゆりかもめ豊洲駅からは徒歩5分",
  "facilities": [
   [
    "更衣室",
    "更衣室・ロッカールーム、休憩スペース"
   ],
   [
    "給水",
    "ウォーターサーバー完備"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン（最大12名）が中心。専用のプライベートルームなどでのマンツーマンレッスンもあり"
   ]
  ],
  "sources": [
   {
    "label": "CLUB PILATES 公式（店舗ページ）",
    "url": "https://clubpilates.co.jp/studio/toyosu/"
   },
   {
    "label": "CLUB PILATES 公式（はじめての方へ）",
    "url": "https://clubpilates.co.jp/trial/"
   }
  ],
  "brand": "club-pilates"
 },
 "club-pilates-tsujido": {
  "stations": "JR辻堂駅直結",
  "facilities": [
   [
    "更衣室",
    "更衣室・ロッカールーム、休憩スペース"
   ],
   [
    "給水",
    "ウォーターサーバー完備"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン（最大12名）が中心。専用のプライベートルームなどでのマンツーマンレッスンもあり"
   ]
  ],
  "sources": [
   {
    "label": "CLUB PILATES 公式（店舗ページ）",
    "url": "https://clubpilates.co.jp/studio/tsujido/"
   },
   {
    "label": "CLUB PILATES 公式（はじめての方へ）",
    "url": "https://clubpilates.co.jp/trial/"
   }
  ],
  "brand": "club-pilates"
 },
 "kasane-hamamatsu": {
  "stations": "浜松プラザフレスポ1階 / JR浜松駅北口10番乗り場から遠州鉄道バス笠井高台線「浜松プラザ」下車すぐ / 浜松ICから約10分",
  "accessNote": "JR浜松駅から遠鉄バスで「浜松プラザ」バス停下車すぐ。",
  "route": [
   "車の場合は北西側・西入口の立体駐車場が最寄りです（右折での入庫はできません）。",
   "1階の店舗入口から入り、まっすぐ進みます（右手にお手洗いがあります）。",
   "ドアを抜けた右手、サイゼリヤの隣にスタジオがあります。"
  ],
  "parking": "あり",
  "facilities": [
   [
    "設備（店舗ページの表示）",
    "ミネラルウォーターあり・パウダースペースあり"
   ],
   [
    "更衣室・ロッカー",
    "更衣室・鍵付きロッカー（全店共通）、男性用ロッカールーム完備"
   ],
   [
    "シャワー",
    "なし（公式FAQ）"
   ],
   [
    "レンタル",
    "ウェア上下・ソックス無料レンタル"
   ]
  ],
  "lesson": [
   [
    "定員",
    "少人数レッスン（5名以下）から最大11名のグループレッスンまで"
   ],
   [
    "パーソナルレッスン",
    "あり"
   ]
  ],
  "sources": [
   {
    "label": "Pilates KASANE 公式（店舗ページ）",
    "url": "https://pilates-kasane.jp/studio/studio-hamamatsu_plazafrespo/"
   },
   {
    "label": "Pilates KASANE 公式（FAQ）",
    "url": "https://pilates-kasane.jp/faq/"
   }
  ],
  "brand": "kasane"
 },
 "kasane-hirakata": {
  "stations": "枚方市駅より徒歩2分",
  "route": [
   "京阪 枚方市駅の中央口（北口）を出ます。",
   "駅前ロータリーの左手、みずほ銀行に沿って進みます。",
   "道なりに少し進むと左手に「枚方駅前吉泉ビル」があります。",
   "エレベーターで6階へ上がり、フロアの奥（美容室の先）がスタジオです。"
  ],
  "parking": "なし",
  "facilities": [
   [
    "設備（店舗ページの表示）",
    "ミネラルウォーターあり・パウダースペースあり"
   ],
   [
    "更衣室・ロッカー",
    "更衣室・鍵付きロッカー（全店共通）、男性用ロッカールーム完備"
   ],
   [
    "シャワー",
    "なし（公式FAQ）"
   ],
   [
    "レンタル",
    "ウェア上下・ソックス無料レンタル"
   ]
  ],
  "lesson": [
   [
    "定員",
    "少人数レッスン（5名以下）から最大11名のグループレッスンまで"
   ],
   [
    "パーソナルレッスン",
    "なし"
   ]
  ],
  "sources": [
   {
    "label": "Pilates KASANE 公式（店舗ページ）",
    "url": "https://pilates-kasane.jp/studio/studio-hirakata/"
   },
   {
    "label": "Pilates KASANE 公式（FAQ）",
    "url": "https://pilates-kasane.jp/faq/"
   }
  ],
  "brand": "kasane"
 },
 "kasane-kawaguchi-maekawa": {
  "accessNote": "イオンモール川口前川の1階。",
  "route": [
   "JR京浜東北線 蕨駅東口の3番乗り場から国際興業バスに乗り、約10分の「イオンモール川口前川」で降ります。",
   "バス・タクシー乗り場を背にして、建物に沿ってまっすぐ進みます。",
   "道沿いに左へ曲がると、左手にスタジオがあります。"
  ],
  "parking": "あり",
  "facilityParking": "イオンモール川口前川の駐車場：約2,400台。入庫から3時間無料、以降30分200円（最大 平日600円・土日祝800円）。",
  "facilities": [
   [
    "設備（店舗ページの表示）",
    "ミネラルウォーターあり・パウダースペースあり"
   ],
   [
    "更衣室・ロッカー",
    "更衣室・鍵付きロッカー（全店共通）、男性用ロッカールーム完備"
   ],
   [
    "シャワー",
    "なし（公式FAQ）"
   ],
   [
    "レンタル",
    "ウェア上下・ソックス無料レンタル"
   ]
  ],
  "lesson": [
   [
    "パーソナルレッスン",
    "あり"
   ]
  ],
  "sources": [
   {
    "label": "Pilates KASANE 公式（店舗ページ）",
    "url": "https://pilates-kasane.jp/studio/studio-aeonmall_kawaguchimaekawa/"
   },
   {
    "label": "kawaguchimaekawa.aeonmall.jp 公式（アクセス）",
    "url": "https://kawaguchimaekawa.aeonmall.jp/access"
   },
   {
    "label": "Pilates KASANE 公式（FAQ）",
    "url": "https://pilates-kasane.jp/faq/"
   }
  ],
  "brand": "kasane"
 },
 "kasane-kinshicho": {
  "stations": "錦糸町駅徒歩1分",
  "route": [
   "錦糸町駅の南口を出て、OIOIの方向へ進みます。",
   "雑貨店を右手に見ながら、大通りに沿って右へ進みます。",
   "そのまま直進した先のビルの6階がスタジオです。"
  ],
  "parking": "なし",
  "facilities": [
   [
    "設備（店舗ページの表示）",
    "ミネラルウォーターあり・パウダースペースあり"
   ],
   [
    "更衣室・ロッカー",
    "更衣室・鍵付きロッカー（全店共通）、男性用ロッカールーム完備"
   ],
   [
    "シャワー",
    "なし（公式FAQ）"
   ],
   [
    "レンタル",
    "ウェア上下・ソックス無料レンタル"
   ]
  ],
  "lesson": [
   [
    "定員",
    "少人数レッスン（5名以下）から最大10名のグループレッスンまで"
   ],
   [
    "パーソナルレッスン",
    "あり"
   ]
  ],
  "sources": [
   {
    "label": "Pilates KASANE 公式（店舗ページ）",
    "url": "https://pilates-kasane.jp/studio/studio-kinshicho/"
   },
   {
    "label": "Pilates KASANE 公式（FAQ）",
    "url": "https://pilates-kasane.jp/faq/"
   }
  ],
  "brand": "kasane"
 },
 "kasane-okinawa-toyosaki": {
  "stations": "イーアス沖縄豊崎 3階 / 那覇空港から路線バスで約30分程度（那覇バス95番ほか）、車で約20分",
  "accessNote": "イーアス沖縄豊崎の3階。豊崎美らSUNビーチ前バス停から徒歩約3分、イーアス沖縄豊崎バス停から徒歩約4分。",
  "route": [
   "那覇方面からは国道331号線を南へ進み、ヤマダデンキの見える交差点を右折します。",
   "糸満方面からは国道331号線を北へ進み、ニトリの見える交差点を左折します。",
   "右車線を進んでトヨタのある交差点を右折し、道なりに進むとイーアス沖縄豊崎です。"
  ],
  "parking": "あり",
  "facilities": [
   [
    "設備（店舗ページの表示）",
    "ミネラルウォーターあり・パウダースペースあり"
   ],
   [
    "更衣室・ロッカー",
    "更衣室・鍵付きロッカー（全店共通）、男性用ロッカールーム完備"
   ],
   [
    "シャワー",
    "なし（公式FAQ）"
   ],
   [
    "レンタル",
    "ウェア上下・ソックス無料レンタル"
   ]
  ],
  "lesson": [
   [
    "定員",
    "少人数レッスン（6名以下）から最大12名のグループレッスンまで"
   ],
   [
    "パーソナルレッスン",
    "なし"
   ]
  ],
  "sources": [
   {
    "label": "Pilates KASANE 公式（店舗ページ）",
    "url": "https://pilates-kasane.jp/studio/studio-iias_okinawatoyosaki/"
   },
   {
    "label": "Pilates KASANE 公式（FAQ）",
    "url": "https://pilates-kasane.jp/faq/"
   }
  ],
  "brand": "kasane"
 },
 "kasane-tsukuba": {
  "accessNote": "イオンモールつくばの2階。荒川沖駅からバス約12分、ひたち野うしく駅からバス約14分、つくば駅からバス約20分。",
  "route": [
   "イオンモールつくばのD-1入口から入ります。",
   "正面のレストラン街のエスカレーターで2階へ上がります。",
   "エスカレーターの裏手にあるドトールコーヒーの前を通り、イオンモバイル前の通路をまっすぐ進みます。",
   "ソフトバンクの向かいにスタジオがあります。"
  ],
  "parking": "あり",
  "facilityParking": "イオンモールつくばの駐車場：約4,000台・無料。駐輪場も約460台・無料。",
  "facilities": [
   [
    "設備（店舗ページの表示）",
    "ミネラルウォーターあり・パウダースペースあり"
   ],
   [
    "更衣室・ロッカー",
    "更衣室・鍵付きロッカー（全店共通）、男性用ロッカールーム完備"
   ],
   [
    "シャワー",
    "なし（公式FAQ）"
   ],
   [
    "レンタル",
    "ウェア上下・ソックス無料レンタル"
   ]
  ],
  "lesson": [
   [
    "定員",
    "少人数レッスン（6名以下）から最大18名のグループレッスンまで"
   ],
   [
    "パーソナルレッスン",
    "あり"
   ]
  ],
  "sources": [
   {
    "label": "Pilates KASANE 公式（店舗ページ）",
    "url": "https://pilates-kasane.jp/studio/studio-aeonmall_tsukuba/"
   },
   {
    "label": "イオンモールつくば 公式（アクセス）",
    "url": "https://tsukuba.aeonmall.jp/access"
   },
   {
    "label": "Pilates KASANE 公式（FAQ）",
    "url": "https://pilates-kasane.jp/faq/"
   }
  ],
  "brand": "kasane"
 },
 "pilates-k-hachioji": {
  "stations": "JR「八王子駅」北口より徒歩1分（マルベリーブリッジ直結）",
  "route": [
   "JR八王子駅の改札を出て北口へ向かいます。",
   "ペデストリアンデッキ（マルベリーブリッジ）をまっすぐ進みます。",
   "2階から八王子オクトーレに入り、エレベーターかエスカレーターで6階へ上がります。"
  ],
  "parking": "なし（近隣の有料駐車場を利用するよう案内されています）",
  "facilities": [
   [
    "パウダールーム",
    "ドライヤー完備パウダールーム"
   ],
   [
    "レンタル",
    "レンタルウエア上・下 各330円、ミネラルウォーター500ml 130円（税込）、オリジナル滑り止めソックス販売1,650円"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "女性専用・音楽に合わせたグループレッスン"
   ]
  ],
  "sources": [
   {
    "label": "pilates K 公式（店舗ページ）",
    "url": "https://pilates-k.jp/studio/tokyo/hachioji"
   },
   {
    "label": "pilates K 公式（店舗ページ）",
    "url": "https://pilates-k.jp/flow"
   }
  ],
  "brand": "pilates-k"
 },
 "pilates-mee-oimachi": {
  "stations": "大井町駅 徒歩2分",
  "route": [
   "東急 大井町駅を出て、イトーヨーカドーを左手に見ながら直進します。",
   "AOKIを過ぎてさらに進み、1階が楽天モバイルのビルの角を左折します。",
   "最初の交差点を右折し、1階がそば店のビルの6階がスタジオです。"
  ],
  "facilities": [
   [
    "設備（店舗ページの表示）",
    "WiFi・女性専用トイレ・着替えスペース・全身鏡"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "セミパーソナル（最大3名）／少人数制（最大5名）／パーソナル（完全個別）"
   ],
   [
    "定員",
    "最大3名（セミパーソナル）・最大5名（少人数制）"
   ],
   [
    "マシン",
    "タワーリフォーマー×3（ほかリフォーマーリング・ボックス、ピラティスボール）"
   ]
  ],
  "sources": [
   {
    "label": "Pilates Mee 公式（店舗ページ）",
    "url": "https://m-pilates.com/shop/tokyo/oimachi/"
   }
  ],
  "brand": "pilates-mee"
 },
 "rintosull-akashi": {
  "stations": "JR神戸線「明石駅」、山陽電鉄本線「山陽明石駅」南口より徒歩2分",
  "parking": "なし",
  "bicycle": "なし",
  "facilities": [
   [
    "利用者",
    "女性専用"
   ],
   [
    "設備（店舗ページの表示）",
    "水素水サーバー・ドライヤー付パウダースペース・更衣室・鍵付きロッカー・スタッフ常時在住・キャッシュレス専用"
   ],
   [
    "レンタル",
    "レッスンセット（ソックス・フェイスタオル・ウェア上下）500円/セット、＋ウォーター570円、ウェア上下各410円、ソックス200円/足、フェイスタオル110円/回（税込）。水素水オプションマンスリー1,200円/月"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン（スクリーンの映像で進行し、最大2名のインストラクターが動きを補助）。50分・45分・30分"
   ]
  ],
  "sources": [
   {
    "label": "Rintosull 公式（店舗ページ）",
    "url": "https://rintosull.jp/shop/hyogo/akashi/"
   }
  ],
  "brand": "rintosull"
 },
 "rintosull-asagaya": {
  "stations": "JR中央線、中央・総武線「阿佐ケ谷駅」南口より徒歩3分",
  "parking": "なし",
  "bicycle": "なし",
  "facilities": [
   [
    "利用者",
    "女性専用"
   ],
   [
    "設備（店舗ページの表示）",
    "水素水サーバー・ドライヤー付パウダースペース・更衣室・鍵付きロッカー・スタッフ常時在住・キャッシュレス専用"
   ],
   [
    "レンタル",
    "レッスンセット（ソックス・フェイスタオル・ウェア上下）500円/セット、＋ウォーター570円、ウェア上下各410円、ソックス200円/足、フェイスタオル110円/回（税込）。水素水オプションマンスリー1,200円/月"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン（スクリーンの映像で進行し、最大2名のインストラクターが動きを補助）。50分・45分・30分"
   ]
  ],
  "sources": [
   {
    "label": "Rintosull 公式（店舗ページ）",
    "url": "https://rintosull.jp/shop/tokyo/asagaya/"
   }
  ],
  "brand": "rintosull"
 },
 "rintosull-honatsugi": {
  "stations": "小田急小田原線 本厚木駅 徒歩1分",
  "parking": "なし",
  "bicycle": "なし",
  "facilities": [
   [
    "利用者",
    "女性専用"
   ],
   [
    "設備（店舗ページの表示）",
    "水素水サーバー・ドライヤー付パウダースペース・更衣室・鍵付きロッカー・スタッフ常時在住・キャッシュレス専用"
   ],
   [
    "レンタル",
    "レッスンセット（ソックス・フェイスタオル・ウェア上下）500円/セット、＋ウォーター570円、ウェア上下各410円、ソックス200円/足、フェイスタオル110円/回（税込）。水素水オプションマンスリー1,200円/月"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン（スクリーンの映像で進行し、最大2名のインストラクターが動きを補助）。50分・45分・30分"
   ]
  ],
  "sources": [
   {
    "label": "Rintosull 公式（店舗ページ）",
    "url": "https://rintosull.jp/shop/kanagawa/honatsugi/"
   }
  ],
  "brand": "rintosull"
 },
 "rintosull-ibaraki": {
  "stations": "阪急電鉄「茨木市駅」東出口より徒歩1分",
  "parking": "なし",
  "bicycle": "なし",
  "facilities": [
   [
    "利用者",
    "女性専用"
   ],
   [
    "設備（店舗ページの表示）",
    "水素水サーバー・ドライヤー付パウダースペース・更衣室・鍵付きロッカー・スタッフ常時在住・キャッシュレス専用"
   ],
   [
    "レンタル",
    "レッスンセット（ソックス・フェイスタオル・ウェア上下）500円/セット、＋ウォーター570円、ウェア上下各410円、ソックス200円/足、フェイスタオル110円/回（税込）。水素水オプションマンスリー1,200円/月"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン（スクリーンの映像で進行し、最大2名のインストラクターが動きを補助）。50分・45分・30分"
   ]
  ],
  "sources": [
   {
    "label": "Rintosull 公式（店舗ページ）",
    "url": "https://rintosull.jp/shop/osaka/ibaraki/"
   }
  ],
  "brand": "rintosull"
 },
 "rintosull-katsura": {
  "stations": "阪急京都線・嵐山線「桂」駅西口 徒歩1分",
  "parking": "なし",
  "bicycle": "なし",
  "facilities": [
   [
    "利用者",
    "女性専用"
   ],
   [
    "設備（店舗ページの表示）",
    "水素水サーバー・ドライヤー付パウダースペース・更衣室・鍵付きロッカー・スタッフ常時在住・キャッシュレス専用"
   ],
   [
    "レンタル",
    "レッスンセット（ソックス・フェイスタオル・ウェア上下）500円/セット、＋ウォーター570円、ウェア上下各410円、ソックス200円/足、フェイスタオル110円/回（税込）。水素水オプションマンスリー1,200円/月"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン（スクリーンの映像で進行し、最大2名のインストラクターが動きを補助）。50分・45分・30分"
   ]
  ],
  "sources": [
   {
    "label": "Rintosull 公式（店舗ページ）",
    "url": "https://rintosull.jp/shop/kyoto/kyotokatsura/"
   }
  ],
  "brand": "rintosull"
 },
 "rintosull-nishijin": {
  "stations": "福岡地下鉄空港線「西新駅」1番出口より徒歩5分",
  "parking": "なし",
  "bicycle": "あり（無料・台数に限りあり）",
  "facilities": [
   [
    "利用者",
    "女性専用"
   ],
   [
    "設備（店舗ページの表示）",
    "水素水サーバー・ドライヤー付パウダースペース・更衣室・鍵付きロッカー・スタッフ常時在住・キャッシュレス専用"
   ],
   [
    "レンタル",
    "レッスンセット（ソックス・フェイスタオル・ウェア上下）500円/セット、＋ウォーター570円、ウェア上下各410円、ソックス200円/足、フェイスタオル110円/回（税込）。水素水オプションマンスリー1,200円/月"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン（スクリーンの映像で進行し、最大2名のインストラクターが動きを補助）。50分・45分・30分"
   ]
  ],
  "sources": [
   {
    "label": "Rintosull 公式（店舗ページ）",
    "url": "https://rintosull.jp/shop/fukuoka/nishijin/"
   }
  ],
  "brand": "rintosull"
 },
 "rintosull-oimachi": {
  "stations": "京浜東北、東急大井町線、りんかい線 「大井町駅」から徒歩３分",
  "parking": "なし",
  "bicycle": "なし",
  "facilities": [
   [
    "利用者",
    "女性専用"
   ],
   [
    "設備（店舗ページの表示）",
    "水素水サーバー・ドライヤー付パウダースペース・更衣室・鍵付きロッカー・スタッフ常時在住・キャッシュレス専用"
   ],
   [
    "レンタル",
    "レッスンセット（ソックス・フェイスタオル・ウェア上下）500円/セット、＋ウォーター570円、ウェア上下各410円、ソックス200円/足、フェイスタオル110円/回（税込）。水素水オプションマンスリー1,200円/月"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン（スクリーンの映像で進行し、最大2名のインストラクターが動きを補助）。50分・45分・30分"
   ]
  ],
  "sources": [
   {
    "label": "Rintosull 公式（店舗ページ）",
    "url": "https://rintosull.jp/shop/tokyo/oimachi/"
   }
  ],
  "brand": "rintosull"
 },
 "rintosull-oji": {
  "stations": "東京メトロ王子駅 出口5徒歩1分、JR王子駅(北口)から徒歩4分",
  "parking": "なし",
  "bicycle": "なし",
  "facilities": [
   [
    "利用者",
    "女性専用"
   ],
   [
    "設備（店舗ページの表示）",
    "水素水サーバー・ドライヤー付パウダースペース・更衣室・鍵付きロッカー・スタッフ常時在住・キャッシュレス専用"
   ],
   [
    "レンタル",
    "レッスンセット（ソックス・フェイスタオル・ウェア上下）500円/セット、＋ウォーター570円、ウェア上下各410円、ソックス200円/足、フェイスタオル110円/回（税込）。水素水オプションマンスリー1,200円/月"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン（スクリーンの映像で進行し、最大2名のインストラクターが動きを補助）。50分・45分・30分"
   ]
  ],
  "sources": [
   {
    "label": "Rintosull 公式（店舗ページ）",
    "url": "https://rintosull.jp/shop/tokyo/oji/"
   }
  ],
  "brand": "rintosull"
 },
 "rintosull-takamatsu": {
  "stations": "【車】国道193号線沿い、ハローズ仏生山店の敷地内。吉野家の隣",
  "parking": "あり（無料）",
  "bicycle": "なし",
  "facilities": [
   [
    "利用者",
    "女性専用"
   ],
   [
    "設備（店舗ページの表示）",
    "水素水サーバー・ドライヤー付パウダースペース・更衣室・鍵付きロッカー・スタッフ常時在住・キャッシュレス専用"
   ],
   [
    "レンタル",
    "レッスンセット（ソックス・フェイスタオル・ウェア上下）500円/セット、＋ウォーター570円、ウェア上下各410円、ソックス200円/足、フェイスタオル110円/回（税込）。水素水オプションマンスリー1,200円/月"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン（スクリーンの映像で進行し、最大2名のインストラクターが動きを補助）。50分・45分・30分"
   ]
  ],
  "sources": [
   {
    "label": "Rintosull 公式（店舗ページ）",
    "url": "https://rintosull.jp/shop/kagawa/takamatsu/"
   }
  ],
  "brand": "rintosull"
 },
 "rintosull-tenjin": {
  "stations": "福岡地下鉄空港線「天神駅」西1出口すぐ",
  "parking": "なし",
  "bicycle": "なし",
  "facilities": [
   [
    "利用者",
    "女性専用"
   ],
   [
    "設備（店舗ページの表示）",
    "水素水サーバー・ドライヤー付パウダースペース・更衣室・鍵付きロッカー・スタッフ常時在住・キャッシュレス専用"
   ],
   [
    "レンタル",
    "レッスンセット（ソックス・フェイスタオル・ウェア上下）500円/セット、＋ウォーター570円、ウェア上下各410円、ソックス200円/足、フェイスタオル110円/回（税込）。水素水オプションマンスリー1,200円/月"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン（スクリーンの映像で進行し、最大2名のインストラクターが動きを補助）。50分・45分・30分"
   ]
  ],
  "sources": [
   {
    "label": "Rintosull 公式（店舗ページ）",
    "url": "https://rintosull.jp/shop/fukuoka/tenjin/"
   }
  ],
  "brand": "rintosull"
 },
 "rintosull-tennoji": {
  "stations": "JR天王寺駅（中央改札口）より徒歩3分、大阪メトロ御堂筋線天王寺駅（西改札口）より徒歩3分 14番出口徒歩1分",
  "parking": "なし",
  "bicycle": "なし",
  "facilities": [
   [
    "利用者",
    "女性専用"
   ],
   [
    "設備（店舗ページの表示）",
    "水素水サーバー・ドライヤー付パウダースペース・更衣室・鍵付きロッカー・スタッフ常時在住・キャッシュレス専用"
   ],
   [
    "レンタル",
    "レッスンセット（ソックス・フェイスタオル・ウェア上下）500円/セット、＋ウォーター570円、ウェア上下各410円、ソックス200円/足、フェイスタオル110円/回（税込）。水素水オプションマンスリー1,200円/月"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン（スクリーンの映像で進行し、最大2名のインストラクターが動きを補助）。50分・45分・30分"
   ]
  ],
  "sources": [
   {
    "label": "Rintosull 公式（店舗ページ）",
    "url": "https://rintosull.jp/shop/osaka/tennoji/"
   }
  ],
  "brand": "rintosull"
 },
 "rintosull-toyohashi": {
  "stations": "【車】県道388 南陽通り 藤沢町北交差点前",
  "parking": "あり（無料）",
  "bicycle": "あり（無料）",
  "facilities": [
   [
    "利用者",
    "女性専用"
   ],
   [
    "設備（店舗ページの表示）",
    "水素水サーバー・ドライヤー付パウダースペース・更衣室・鍵付きロッカー・スタッフ常時在住・キャッシュレス専用"
   ],
   [
    "レンタル",
    "レッスンセット（ソックス・フェイスタオル・ウェア上下）500円/セット、＋ウォーター570円、ウェア上下各410円、ソックス200円/足、フェイスタオル110円/回（税込）。水素水オプションマンスリー1,200円/月"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン（スクリーンの映像で進行し、最大2名のインストラクターが動きを補助）。50分・45分・30分"
   ]
  ],
  "sources": [
   {
    "label": "Rintosull 公式（店舗ページ）",
    "url": "https://rintosull.jp/shop/aichi/toyohashi/"
   }
  ],
  "brand": "rintosull"
 },
 "the-silk-akabane": {
  "stations": "JR赤羽駅徒歩1分",
  "facilities": [
   [
    "パウダールーム",
    "ReFaのドライヤー・ヘアアイロンを備えたパウダールーム"
   ],
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/akabane/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-akasaka-mitsuke": {
  "stations": "東京メトロ赤坂見附駅徒歩30秒、東京メトロ赤坂駅徒歩6分、東京メトロ溜池山王駅徒歩9分",
  "facilities": [
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/akasakamitsuke/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-akihabara": {
  "stations": "JR秋葉原駅徒歩1分、JR山手線神田駅徒歩7分、東京メトロ末広町駅徒歩8分",
  "facilities": [
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/akihabara/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-asakusa": {
  "stations": "東京メトロ浅草駅徒歩1分",
  "facilities": [
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/asakusa/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-chiba": {
  "stations": "JR千葉駅徒歩3分、京成千葉駅徒歩3分",
  "facilities": [
   [
    "店舗の紹介にある設備",
    "更衣室内にライト付きの鏡・ヘアアイロン"
   ],
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/chiba/chiba/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-daimon-hamamatsucho": {
  "stations": "都営大門駅徒歩1分、JR山手線浜松町駅徒歩2分",
  "facilities": [
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/daimon-hamamatsucho/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-ebisu": {
  "stations": "JR恵比寿駅徒歩5分",
  "facilities": [
   [
    "給水",
    "無料のウォーターサーバーあり"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "パーソナルレッスン専門店"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/ebisu-2/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-fujisawa": {
  "stations": "JR藤沢駅徒歩1分",
  "facilities": [
   [
    "パウダールーム",
    "ReFaのドライヤー・ヘアアイロンを備えたパウダールーム"
   ],
   [
    "店舗の紹介にある設備",
    "充実したアメニティ・ウォーターサーバー完備"
   ],
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループ・パーソナル併設店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/kanagawa/fujisawa/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-funabashi": {
  "stations": "京成船橋駅徒歩2分、JR船橋駅徒歩3分",
  "facilities": [
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/chiba/funabashi/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-futakotamagawa": {
  "stations": "東急二子玉川駅徒歩5分",
  "facilities": [
   [
    "パウダールーム",
    "ReFaのドライヤー・ヘアアイロンを備えたパウダールーム"
   ],
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループ・パーソナル併設店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/futako-tamagawa/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-ginza": {
  "stations": "東京メトロ銀座駅徒歩2分、都営東銀座駅徒歩3分、JR山手線新橋駅徒歩10分",
  "facilities": [
   [
    "パウダールーム",
    "ReFaのドライヤー・ヘアアイロンを備えたパウダールーム"
   ],
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/ginza/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-ginza-itchome": {
  "stations": "東京メトロ銀座一丁目駅徒歩1分、東京メトロ京橋駅徒歩4分、JR有楽町駅徒歩5分",
  "facilities": [
   [
    "店舗の紹介にある設備",
    "パウダールーム完備、ウォーターサーバーに紅茶の用意あり"
   ],
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループ・パーソナル併設店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/ginza-itchome/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-gotanda": {
  "stations": "JR山手線五反田駅徒歩3分",
  "facilities": [
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/gotanda/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-hiroo": {
  "stations": "東京メトロ広尾駅徒歩4分、JR山手線恵比寿駅徒歩14分",
  "facilities": [
   [
    "店舗の紹介にある設備",
    "パウダールーム完備"
   ],
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループ・パーソナル併設店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/hiroo/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-ikebukuro-higashiguchi": {
  "stations": "JR池袋駅徒歩1分",
  "facilities": [
   [
    "パウダールーム",
    "ReFaのドライヤー・ヘアアイロンを備えたパウダールーム"
   ],
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/ikebukuro-east/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-ikebukuro-nishiguchi": {
  "stations": "JR池袋駅徒歩1分",
  "facilities": [
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/ikebukuro-west/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-jiyugaoka": {
  "stations": "東急自由が丘駅徒歩4分",
  "facilities": [
   [
    "パウダールーム",
    "ReFaのドライヤー・ヘアアイロンを備えたパウダールーム"
   ],
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/jiyugaoka/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-kagurazaka": {
  "stations": "東京メトロ神楽坂駅徒歩3分、都営牛込神楽坂駅徒歩3分、JR中央・総武線飯田橋駅徒歩8分",
  "facilities": [
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/kagurazaka/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-kamata": {
  "stations": "JR蒲田駅徒歩1分、京急蒲田駅徒歩10分",
  "facilities": [
   [
    "パウダールーム",
    "ReFaのドライヤー・ヘアアイロンを備えたパウダールーム"
   ],
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/kamata/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-kameido": {
  "stations": "JR亀戸駅徒歩1分",
  "facilities": [
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/kameido/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-kashiwa": {
  "stations": "JR常磐線柏駅徒歩1分",
  "facilities": [
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/chiba/kashiwa/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-kawasaki": {
  "stations": "京急川崎駅徒歩2分、JR川崎駅徒歩4分",
  "facilities": [
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/kanagawa/kawasaki/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-kichijoji": {
  "stations": "JR吉祥寺駅徒歩5分",
  "facilities": [
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/kichijoji/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-kita-senju": {
  "stations": "JR常磐線北千住駅徒歩6分",
  "facilities": [
   [
    "店舗の紹介にある設備",
    "パウダールームにReFaのヘアアイロン・コテ・ドライヤー"
   ],
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/kitasenju/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-matsudo": {
  "stations": "JR常磐線松戸駅徒歩2分",
  "facilities": [
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ],
   [
    "マシン",
    "リフォーマー17台"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/chiba/matsudo/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-meguro": {
  "stations": "JR山手線目黒駅徒歩2分",
  "facilities": [
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/meguro/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-nakameguro": {
  "stations": "東急中目黒駅徒歩2分、東急代官山駅徒歩9分、東京メトロ恵比寿駅徒歩13分",
  "facilities": [
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/nakameguro/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-omiya": {
  "stations": "JR大宮駅徒歩3分",
  "facilities": [
   [
    "パウダールーム",
    "ReFaのドライヤー・ヘアアイロンを備えたパウダールーム"
   ],
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/saitama/omiya/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-shibuya": {
  "stations": "JR渋谷駅徒歩2分",
  "facilities": [
   [
    "ロッカー",
    "ロッカールームあり"
   ],
   [
    "店舗の紹介にある設備",
    "ロッカールームにドリンクサービス、パウダールームにライト付きミラー4枚"
   ],
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/shibuya/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-shin-urayasu": {
  "stations": "JR京葉線新浦安駅徒歩2分",
  "facilities": [
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/chiba/shinurayasu/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-shinjuku": {
  "stations": "都営新宿西口駅徒歩1分、西武新宿駅徒歩4分、小田急新宿駅徒歩6分",
  "facilities": [
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/shinjuku/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-sugamo": {
  "stations": "JR山手線巣鴨駅徒歩1分",
  "facilities": [
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/sugamo/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-tachikawa": {
  "stations": "JR立川駅徒歩5分、多摩モノレール立川北駅徒歩6分",
  "facilities": [
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/tachikawa/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-takadanobaba": {
  "stations": "JR山手線高田馬場駅徒歩2分、東京メトロ西早稲田駅徒歩7分",
  "facilities": [
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/takadanobaba/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-tamachi": {
  "stations": "JR田町駅徒歩4分、都営三田駅徒歩8分",
  "facilities": [
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/tamachi/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-tennoji-mio": {
  "stations": "JR大阪環状線天王寺駅直結、近鉄大阪阿部野橋駅徒歩2分、阪堺電車天王寺駅前駅徒歩2分",
  "facilityParking": "天王寺ミオの駐車場：約380台（高さ制限2.1m）、30分250円・平日の当日最大2,000円。駐輪場は自転車1日150円。スタジオ利用者向けの割引は、スタジオ・施設とも公式に記載がありません。",
  "facilities": [
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/osaka/tennoji-mio/"
   },
   {
    "label": "天王寺ミオ 公式（アクセス）",
    "url": "https://www.tennoji-mio.co.jp/access"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-tokorozawa": {
  "stations": "西武所沢駅徒歩2分",
  "facilities": [
   [
    "パウダールーム",
    "ReFaのドライヤー・ヘアアイロンを備えたパウダールーム"
   ],
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/saitama/tokorozawa/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-ueno": {
  "stations": "京成上野駅徒歩1分、東京メトロ上野広小路駅徒歩1分、JR山手線御徒町駅徒歩4分",
  "facilities": [
   [
    "パウダールーム",
    "ReFaのドライヤー・ヘアアイロンを備えたパウダールーム"
   ],
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/ueno/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-umeda": {
  "stations": "阪急大阪梅田駅徒歩3分、大阪メトロ梅田駅徒歩4分、JR大阪駅徒歩7分",
  "facilities": [
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/osaka/umeda/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-urawa": {
  "stations": "JR浦和駅徒歩4分",
  "facilities": [
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/saitama/urawa/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-yaesu": {
  "stations": "東京メトロ日本橋駅徒歩2分、JR山手線東京駅徒歩3分、東京メトロ大手町駅徒歩5分",
  "facilities": [
   [
    "店舗の紹介にある設備",
    "ウォーターサーバー完備・アメニティ充実"
   ],
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/tokyo/yaesu/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-yokohama": {
  "stations": "相鉄横浜駅直結",
  "facilities": [
   [
    "給水",
    "無料のウォーターサーバーあり"
   ],
   [
    "レンタル",
    "月額ウェア/タオルレンタル2,200円、Tシャツ・パンツ各280円、タオル・ピラティス靴下各120円（税込）"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "グループレッスン専門店"
   ],
   [
    "レッスン時間",
    "グループ 1回50分"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/kanagawa/yokohama/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 },
 "the-silk-yokohama-personal": {
  "stations": "JR横浜駅徒歩3分",
  "facilities": [
   [
    "給水",
    "無料のウォーターサーバーあり"
   ]
  ],
  "lesson": [
   [
    "レッスン形式",
    "パーソナルレッスン専門店"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（店舗ページ）",
    "url": "https://the-silk.co.jp/studios/kanagawa/yokohamapersonal/"
   },
   {
    "label": "the SILK 公式（FAQ）",
    "url": "https://the-silk.co.jp/faq/"
   }
  ],
  "brand": "the-silk"
 }
};

export const BRAND_INSTRUCTORS: Record<string, BrandInstructors> = {
 "the-silk": {
  "rows": [
   [
    "研修",
    "入社後1か月間の講習（渋谷の専用スタジオ）のあと、各種研修と講師によるテストチェックがあります。"
   ],
   [
    "パーソナル担当",
    "独自のパーソナル養成講座（最短4か月）の合格後、別途面接を経て担当します。公式FAQでは、この講座はPMAの公式認定プログラムではないと明記されています。"
   ]
  ],
  "sources": [
   {
    "label": "the SILK 公式（インストラクター・研修）",
    "url": "https://the-silk.co.jp/recruit/training/"
   },
   {
    "label": "the SILK 公式（インストラクター・研修）",
    "url": "https://the-silk.co.jp/academy/"
   }
  ]
 },
 "rintosull": {
  "rows": [
   [
    "研修",
    "デビュー前に姿勢分析・マシンの構造・指導法の研修を修了し、プログラムごとの認定を受けてから担当します。デビュー後も解剖学などの研修と定期的なスキルチェックがあります。"
   ],
   [
    "研修時間",
    "公式の「数字で見る」では年間230時間。"
   ]
  ],
  "sources": [
   {
    "label": "Rintosull 公式（インストラクター・研修）",
    "url": "https://rintosull.jp/instructor/"
   }
  ]
 },
 "club-pilates": {
  "rows": [
   [
    "資格",
    "公式では全員が認定資格を取得しているとしています。マットとリフォーマーの資格（BASI・STOTT・PEAK・Polestar・BESJ・PHI・Balanced Body）を持つ人は2日間の研修とスキルチェックに合格してから担当し、それ以外は自社の養成講座（CLUB PILATES Teacher Training）で資格を取ります。"
   ]
  ],
  "sources": [
   {
    "label": "CLUB PILATES 公式（インストラクター・研修）",
    "url": "https://clubpilates.co.jp/instructor/"
   },
   {
    "label": "CLUB PILATES 公式（インストラクター・研修）",
    "url": "https://clubpilates.co.jp/teacher-training/"
   }
  ]
 },
 "kasane": {
  "rows": [
   [
    "在籍する講師の資格",
    "店舗によって異なり、理学療法士・作業療法士、管理栄養士、ピラティス指導者資格（PHI Pilates、FPS認定など）を持つ講師が在籍しているとしています。研修時間の記載はありません。"
   ]
  ],
  "sources": [
   {
    "label": "Pilates KASANE 公式（FAQ）",
    "url": "https://pilates-kasane.jp/faq/"
   }
  ]
 },
 "bdc": {
  "rows": [
   [
    "資格",
    "自社の指導資格取得プログラム（平均1年〜1年半以上）を修了し、認定試験とティーチングオーディションに合格した講師が指導します。"
   ]
  ],
  "sources": [
   {
    "label": "BDC PILATES 公式（インストラクター・研修）",
    "url": "https://bdcpilates.com/instructor"
   },
   {
    "label": "BDC PILATES 公式（インストラクター・研修）",
    "url": "https://bdcpilates.com/academy/"
   }
  ]
 },
 "pilates-mee": {
  "rows": [
   [
    "研修",
    "店舗デビューまでに2週間〜1か月の研修（技術・解剖学・接客）があります。採用ページでは、スタッフの8割が未経験からのスタートとしています。"
   ],
   [
    "在籍する講師の資格（例）",
    "店舗により異なり、ピラティス指導資格（JIA・PHI・BESJ・BASIなど）や作業療法士、RYT200などが挙げられています。"
   ]
  ],
  "sources": [
   {
    "label": "Pilates Mee 公式（インストラクター・研修）",
    "url": "https://m-pilates.com/recruit/"
   },
   {
    "label": "Pilates Mee 公式（店舗ページ）",
    "url": "https://m-pilates.com/shop/tokyo/oimachi/"
   }
  ]
 }
};
