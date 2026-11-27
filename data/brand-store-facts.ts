// 店舗ページ（/brands/{ブランド}-{店舗}/）の「料金と初月にかかる費用」「予約・キャンセル・退会・休会」「体験の流れと持ち物」の元データ。
// 2026-11-28 作成。競合の店舗ページにあって当サイトに無かった3ブロック（~/.openclaw/workspace/pilates-kuchikomi-gap-20261127.md）。
//
// ⚠️ ルール
//  - 値はすべて公式サイトで 2026年11月28日 に確認したもの（計測リンクは開かず公式ドメインを直接取得）。出典URLを必ず付ける。
//  - 税の表記は公式どおり（税込／税別／記載なし）。公式に無いことは書かない（記載なしと書くか、項目ごと出さない）。
//  - 店舗の料金が標準と違うブランド（the SILK のエリアA/B・パーソナル専門店、CLUB PILATES の店舗別料金、BDC の月3回、
//    ピラティスK の 13,420円/11,220円 店舗）は、店舗ごとの値を使う。ブランドの標準料金を当てはめない。
//  - 店舗が下の一覧に無い場合は何も出さない（resolveStoreFacts が null を返す）。
//  - 初月費用の試算は、入会時に何を支払うかが公式に書かれていて、公式内で食い違いが無いブランドだけ。
//    日割りの有無が書かれていない・公式内で前払いの月数が食い違う場合は出さない（理由を注記に書く）。
//  - キャンペーンは条件と終了日が公式に書かれているものだけ（終了日の無いキャンペーンは載せない）。
//  - HTMLコメント内の値（公式ページで非表示）は使わない。

export type FactSource = { label: string; url: string };
export type PriceRow = { plan: string; price: string; tax: string; note?: string };
export type InitialRow = { item: string; amount: string; tax: string; waiver?: string };
export type RuleRow = { label: string; text: string; sources: FactSource[] };
export type FirstMonth = {
  title: string;
  condition: string;
  lines: { label: string; amount: number }[];
  note?: string;
  source: FactSource;
};
export type ResolvedStoreFacts = {
  checkedAt: string;
  price?: { lead?: string; rows: PriceRow[]; sources: FactSource[] };
  initial?: { rows: InitialRow[]; note?: string; sources: FactSource[] };
  firstMonth?: FirstMonth;
  rules?: RuleRow[];
  rulesNote?: string;
  trial?: { steps: string[]; items: { label: string; text: string }[]; sources: FactSource[] };
};

const CHECKED = "2026年11月28日";
const yen = (n: number) => `${n.toLocaleString()}円`;

/* ───────────────────────── the SILK ───────────────────────── */
const SILK_PRICE: FactSource = { label: "the SILK 公式の料金ページ", url: "https://the-silk.co.jp/price/" };
const SILK_RULE: FactSource = { label: "the SILK 公式の会員規約", url: "https://the-silk.co.jp/rule/" };
const SILK_LAW: FactSource = { label: "the SILK 特定商取引法に基づく表記", url: "https://the-silk.co.jp/law_info/" };
const SILK_TRIAL: FactSource = { label: "the SILK 公式の体験レッスンページ", url: "https://the-silk.co.jp/trial/" };
const SILK_FAQ: FactSource = { label: "the SILK 公式のよくある質問", url: "https://the-silk.co.jp/faq/" };
const SILK_TOP: FactSource = { label: "the SILK 公式サイト（入会特典）", url: "https://the-silk.co.jp/" };

// 公式の店舗ページ（/studios/）で確認した店舗区分。B＝公式の料金ページのエリアB、P＝パーソナル専門店、M＝グループ・パーソナル併設店、A＝エリアA（グループ専門）
const SILK_STORES: Record<string, { path: string; kind: "A" | "B" | "P" | "M" }> = {
  "the-silk-ueno": { path: "tokyo/ueno", kind: "A" },
  "the-silk-nakameguro": { path: "tokyo/nakameguro", kind: "A" },
  "the-silk-kameido": { path: "tokyo/kameido", kind: "A" },
  "the-silk-futakotamagawa": { path: "tokyo/futako-tamagawa", kind: "M" },
  "the-silk-gotanda": { path: "tokyo/gotanda", kind: "A" },
  "the-silk-yaesu": { path: "tokyo/yaesu", kind: "A" },
  "the-silk-kita-senju": { path: "tokyo/kitasenju", kind: "A" },
  "the-silk-chiba": { path: "chiba/chiba", kind: "B" },
  "the-silk-kichijoji": { path: "tokyo/kichijoji", kind: "A" },
  "the-silk-omiya": { path: "saitama/omiya", kind: "A" },
  "the-silk-tennoji-mio": { path: "osaka/tennoji-mio", kind: "B" },
  "the-silk-kawasaki": { path: "kanagawa/kawasaki", kind: "B" },
  "the-silk-sugamo": { path: "tokyo/sugamo", kind: "A" },
  "the-silk-hiroo": { path: "tokyo/hiroo", kind: "M" },
  "the-silk-ebisu": { path: "tokyo/ebisu-2", kind: "P" },
  "the-silk-tokorozawa": { path: "saitama/tokorozawa", kind: "B" },
  "the-silk-shinjuku": { path: "tokyo/shinjuku", kind: "A" },
  "the-silk-shin-urayasu": { path: "chiba/shinurayasu", kind: "B" },
  "the-silk-matsudo": { path: "chiba/matsudo", kind: "B" },
  "the-silk-kashiwa": { path: "chiba/kashiwa", kind: "B" },
  "the-silk-umeda": { path: "osaka/umeda", kind: "B" },
  "the-silk-yokohama": { path: "kanagawa/yokohama", kind: "A" },
  "the-silk-yokohama-personal": { path: "kanagawa/yokohamapersonal", kind: "P" },
  "the-silk-ikebukuro-higashiguchi": { path: "tokyo/ikebukuro-east", kind: "A" },
  "the-silk-ikebukuro-nishiguchi": { path: "tokyo/ikebukuro-west", kind: "A" },
  "the-silk-asakusa": { path: "tokyo/asakusa", kind: "A" },
  "the-silk-urawa": { path: "saitama/urawa", kind: "A" },
  "the-silk-shibuya": { path: "tokyo/shibuya", kind: "A" },
  "the-silk-tamachi": { path: "tokyo/tamachi", kind: "A" },
  "the-silk-meguro": { path: "tokyo/meguro", kind: "A" },
  "the-silk-kagurazaka": { path: "tokyo/kagurazaka", kind: "A" },
  "the-silk-akihabara": { path: "tokyo/akihabara", kind: "A" },
  "the-silk-tachikawa": { path: "tokyo/tachikawa", kind: "B" },
  "the-silk-jiyugaoka": { path: "tokyo/jiyugaoka", kind: "A" },
  "the-silk-funabashi": { path: "chiba/funabashi", kind: "B" },
  "the-silk-kamata": { path: "tokyo/kamata", kind: "A" },
  "the-silk-fujisawa": { path: "kanagawa/fujisawa", kind: "M" },
  "the-silk-akasaka-mitsuke": { path: "tokyo/akasakamitsuke", kind: "A" },
  "the-silk-akabane": { path: "tokyo/akabane", kind: "A" },
  "the-silk-ginza": { path: "tokyo/ginza", kind: "A" },
  "the-silk-ginza-itchome": { path: "tokyo/ginza-itchome", kind: "M" },
  "the-silk-takadanobaba": { path: "tokyo/takadanobaba", kind: "A" },
  "the-silk-daimon-hamamatsucho": { path: "tokyo/daimon-hamamatsucho", kind: "A" },
};
const SILK_GROUP = {
  A: { light3: 13280, std4: 15280, full: 22280, fullDay: 19280 },
  B: { light3: 12280, std4: 14370, full: 19980, fullDay: 17780 },
};
const SILK_PRIVATE: PriceRow[] = [
  { plan: "Private 2（パーソナル・月2回）", price: "月22,000円", tax: "税込" },
  { plan: "Private 3（パーソナル・月3回）", price: "月29,700円", tax: "税込" },
  { plan: "Private 4（パーソナル・月4回）", price: "月37,400円", tax: "税込" },
  { plan: "Private 6（パーソナル・月6回）", price: "月56,100円", tax: "税込" },
];
const SILK_WAIVER =
  "体験当日に入会した場合は入会特典で0円（2026年11月30日までに体験を予約し、12月14日までに来店した方が対象。継続期間などの条件があります）";

function theSilk(urlSlug: string): ResolvedStoreFacts | null {
  const st = SILK_STORES[urlSlug];
  if (!st) return null;
  const storeSrc: FactSource = { label: "公式の店舗ページ", url: `https://the-silk.co.jp/studios/${st.path}/` };
  const area = st.kind === "B" ? "B" : "A";
  const g = SILK_GROUP[area];
  const groupRows: PriceRow[] = [
    { plan: "Light 3（グループ・月3回）", price: `月${yen(g.light3)}`, tax: "税込" },
    { plan: "Standard 4（グループ・月4回）", price: `月${yen(g.std4)}`, tax: "税込" },
    { plan: "Full（グループ・毎日1レッスンまで）", price: `月${yen(g.full)}`, tax: "税込" },
    { plan: "Full (Day)（平日の開店〜15時開始のグループレッスンを毎日1回・土日祝は利用不可）", price: `月${yen(g.fullDay)}`, tax: "税込" },
    { plan: "施設利用料（グループ）", price: "月700円", tax: "税込", note: "公式の料金ページに「別途、施設利用料として毎月700円（税込）」と記載" },
  ];
  const lead =
    st.kind === "P"
      ? "この店舗はパーソナルピラティス専門店で、グループレッスンはありません（公式の店舗ページ）。パーソナルの月会費はエリアによる違いがありません。"
      : st.kind === "M"
        ? `この店舗はグループとパーソナルの併設店です。グループの月会費は公式の料金ページの「エリア${area}」の金額です。`
        : `この店舗はグループピラティス専門店で、月会費は公式の料金ページの「エリア${area}」の金額です（パーソナルレッスンはありません）。`;
  const rows = st.kind === "P" ? SILK_PRIVATE : st.kind === "M" ? [...groupRows, ...SILK_PRIVATE] : groupRows;

  const initialRows: InitialRow[] = [
    { item: "入会金", amount: "10,000円", tax: "税の表記なし", waiver: SILK_WAIVER },
    { item: "登録手数料", amount: "1,000円", tax: "税の表記なし", waiver: SILK_WAIVER },
  ];
  if (st.kind !== "P") initialRows.push({ item: "施設利用料（グループ・毎月）", amount: "月700円", tax: "税込" });

  const base = st.kind === "P" ? { label: "月会費 Private 2（2か月分）", amount: 22000 * 2 } : { label: `月会費 Standard 4・エリア${area}（2か月分）`, amount: g.std4 * 2 };
  const firstMonth: FirstMonth = {
    title: "入会時に支払う額の例",
    condition: `公式の会員規約では、入会時に月会費2か月分を前納し、3か月目から口座振替またはクレジットカード決済で支払います。ここでは${st.kind === "P" ? "Private 2" : `Standard 4（エリア${area}）`}で、入会特典を使わない場合を計算しています。`,
    lines: [base, { label: "入会金", amount: 10000 }, { label: "登録手数料", amount: 1000 }],
    note:
      st.kind === "P"
        ? "入会金・登録手数料は公式に税の表記がありません。"
        : "施設利用料（月700円・税込）を入会時に何か月分支払うかは公式に記載がないため含めていません。入会金・登録手数料は公式に税の表記がありません。",
    source: SILK_RULE,
  };

  const trialPrice = st.kind === "P" ? "パーソナルの初回体験レッスン（50分）2,000円（税込・期間限定）" : st.kind === "M" ? "グループの初回体験レッスン（50分）0円（税込・期間限定）。パーソナルの体験料金は公式の店舗ページに記載がありません" : "初回体験レッスン（50分）0円（税込・期間限定）";

  return {
    checkedAt: CHECKED,
    price: { lead, rows, sources: [SILK_PRICE, storeSrc] },
    initial: {
      rows: initialRows,
      note: st.kind === "P" ? "パーソナル会員に施設利用料がかかるかは、公式の料金ページに記載がありません。" : undefined,
      sources: [SILK_TOP, SILK_PRICE],
    },
    firstMonth,
    rules: [
      { label: "予約の受付", text: "施設の利用は原則予約制です。予約の受付時間・方法は会員規約で別途定めるとされており、公開されているページに具体的な記載はありません。体験レッスンは公式サイトの予約フォームから予約します。", sources: [SILK_RULE, SILK_FAQ] },
      { label: "キャンセル", text: "キャンセルの方法と費用は会員規約で別途定めるとされており、公開されているページに記載はありません。", sources: [SILK_RULE] },
      { label: "退会", text: "会員規約では、退会を希望する月の前月10日21時30分まで（10日が登録店舗の休業日の場合は前営業日まで）に、登録店舗で手続きをします。特定商取引法に基づく表記には「退会希望月の前々月10日まで」とあり、公式内で記載が異なるため、入会時に店舗でご確認ください。途中解約による日割りの返金はありません。", sources: [SILK_RULE, SILK_LAW] },
      { label: "休会", text: "休会を希望する月の前月10日21時30分まで（10日が定休日の場合は前営業日まで）に手続きします。1回の届け出で3か月まで休会でき、休会中は休会手数料がかかります（金額は公開されているページに記載がありません）。", sources: [SILK_RULE] },
      { label: "繰越", text: "Light 3・Standard 4の会員は、当月に使いきれなかった受講枠を翌月1か月間に限り最大1回分まで繰り越せます（所属店舗の予約のみ）。", sources: [SILK_RULE] },
    ],
    trial: {
      steps: [
        "公式サイトの体験予約フォームから予約します（体験レッスンは1人1回までです）。",
        "レッスン開始の30分前に来店し、着替えと施設の説明を受けます。",
        "レッスン前の案内（10分）、着替え（10分）のあと、レッスン（50分）を受けます。",
        "レッスン後にカウンセリング（10分）があります。",
      ],
      items: [
        { label: "体験料金", text: trialPrice },
        { label: "所要時間", text: "レッスンは50分です。着替えや案内を含め、当日は合計2時間程度を見込むよう案内されています。" },
        { label: "持ち物", text: "必要に応じて、動きやすいウェア・汗拭きタオル・滑り止め付き靴下（持っている場合）・飲み物（無料のウォーターサーバーあり）。" },
        { label: "服装・レンタル", text: "体験レッスンではウェアとタオルを無料で貸し出しています。" },
      ],
      sources: [SILK_TRIAL, SILK_FAQ, storeSrc],
    },
  };
}

/* ───────────────────────── Rintosull ───────────────────────── */
const RIN_PRICE: FactSource = { label: "Rintosull 公式の料金ページ", url: "https://www.rintosull.jp/price/" };
const rinFaq = (id: number, label: string): FactSource => ({ label: `公式Q&A「${label}」`, url: `https://faq.yoga-lava.com/faq/show/${id}?site_domain=rintosull` });
const RIN_STORES: Record<string, string> = {
  "rintosull-katsura": "kyoto/kyotokatsura",
  "rintosull-tennoji": "osaka/tennoji",
  "rintosull-honatsugi": "kanagawa/honatsugi",
  "rintosull-toyohashi": "aichi/toyohashi",
  "rintosull-akashi": "hyogo/akashi",
  "rintosull-takamatsu": "kagawa/takamatsu",
  "rintosull-tenjin": "fukuoka/tenjin",
  "rintosull-nishijin": "fukuoka/nishijin",
  "rintosull-oimachi": "tokyo/oimachi",
  "rintosull-oji": "tokyo/oji",
  "rintosull-ibaraki": "osaka/ibaraki",
  "rintosull-asagaya": "tokyo/asagaya",
};

function rintosull(urlSlug: string): ResolvedStoreFacts | null {
  const path = RIN_STORES[urlSlug];
  if (!path) return null;
  const storeSrc: FactSource = { label: "公式の店舗ページ", url: `https://www.rintosull.jp/shop/${path}/` };
  const signup = rinFaq(29512, "入会手続きに必要なもの");
  return {
    checkedAt: CHECKED,
    price: {
      lead: "この店舗の公式ページに掲載されている料金です（12店舗とも同じ金額でした）。",
      rows: [
        { plan: "4・フルタイム（所属店舗・月4回・1日1回）", price: "月8,800円", tax: "税込" },
        { plan: "ライト・フルタイム（所属店舗＋1店舗・通い放題）", price: "月13,800円", tax: "税込" },
        { plan: "プレミアム フリー・フルタイム（系列全店・通い放題）", price: "月16,800円", tax: "税込" },
        { plan: "運営管理費", price: "月680円", tax: "税込", note: "初回の引き落としから毎月かかります（公式の料金ページ）" },
        { plan: "1回券（レッスン）", price: "1回3,300円", tax: "税込" },
        { plan: "他店舗利用料", price: "1回500円", tax: "税込" },
      ],
      sources: [storeSrc, RIN_PRICE],
    },
    initial: {
      rows: [
        { item: "入会金", amount: "5,000円", tax: "税込", waiver: "体験当日に入会した場合は0円（公式の料金ページ）。キャンペーンで入会する場合は不要（公式Q&A）" },
        { item: "マンスリーメンバー登録金", amount: "5,000円", tax: "税込", waiver: "体験当日に入会した場合は0円（公式の料金ページ）。キャンペーンで入会する場合は不要（公式Q&A）" },
        { item: "施設使用料", amount: "2,500円", tax: "税の表記なし", waiver: "過去にLAVAまたはRintosullに入会したことがある方は0円" },
      ],
      note: "入会手続きの際に、月会費の初月分と2か月目分を支払います（キャンペーンで入会する場合は不要）。初月が日割りになるかは公式に記載がないため、初月費用の試算は掲載していません。",
      sources: [RIN_PRICE, signup],
    },
    rules: [
      { label: "予約の受付", text: "Web・公式アプリ・LINEで予約します。翌月分のレッスンは毎月15日から予約できます。同時に持てる予約は、4・フルタイムが3件、ライト・フルタイムが4件、プレミアム フリー・フルタイムが6件です。", sources: [rinFaq(26687, "レッスンの予約開始日"), rinFaq(36210, "同時予約可能件数")] },
      { label: "キャンセル", text: "レッスン開始の60分前までに手続きすれば、キャンセル料はかかりません。60分前を過ぎるとキャンセルできず、時間外キャンセルになります。時間外キャンセルが1か月に2回以上あると、翌月1か月間は同時に予約できる件数が1件に制限されます。", sources: [rinFaq(26693, "時間外キャンセル・予約制限")] },
      { label: "退会", text: "退会を希望する月の前月15日（定休日・休業日の場合は前営業日）までに、登録メイン店舗に来店して手続きします（問い合わせフォームでは受け付けていません）。キャンペーンの継続必須期間中に退会する場合は、定価月額とキャンペーン月額の差額分の解約金（上限25,000円）がかかります。", sources: [rinFaq(30824, "マンスリーメンバーの解約")] },
      { label: "休会", text: "1か月単位で休会でき、休会中は事務手数料として月2,600円（税込）がかかります。希望する月の前月15日までに登録メイン店舗で手続きします。キャンペーンの継続必須期間中は休会できません。休会できる最長期間は公式に記載がありません。", sources: [rinFaq(27509, "休会制度")] },
    ],
    trial: {
      steps: [
        "公式サイトの体験会予約から、希望の店舗と日時を選んで申し込みます（希望時間の2時間前まで）。",
        "体験会開始の10分前を目安に来店します。",
        "施設の見学とカウンセリングのあと、リフォーマーを使ってマシンピラティスを体験します。",
        "入会を希望する場合は、体験後に入会手続きをします。",
      ],
      items: [
        { label: "体験料金", text: "無料体験会 0円" },
        { label: "所要時間", text: "約45分" },
        { label: "持ち物", text: "持ち物なしで参加できます。入会手続きをする場合は、公的証明書の原本・クレジットカードなどが必要です（公式Q&A）。" },
        { label: "服装・レンタル", text: "姿勢サポート加圧ウェアと滑り止め付きソックスを無料で貸し出しています。プレオープン中の店舗はウェアの貸し出しがないため、動きやすい服装で来店するよう案内されています。" },
      ],
      sources: [RIN_PRICE, storeSrc, signup],
    },
  };
}

/* ───────────────────────── CLUB PILATES ───────────────────────── */
const CP_LAW: FactSource = { label: "CLUB PILATES 特定商取引法に基づく表記", url: "https://www.clubpilates.co.jp/law/" };
const CP_TRIAL: FactSource = { label: "CLUB PILATES 公式の無料体験ページ", url: "https://clubpilates.co.jp/trial/" };
// 公式の店舗ページ（/studio/{path}/）の EFT4／EFT8／UNLIMITED。税の表記は店舗ページに無い。
const CP_STORES: Record<string, { path: string; eft4: number; eft8: number; unl: number; fee?: boolean; annual?: boolean; campaign?: string }> = {
  "club-pilates-nishinomiyakitaguchi": { path: "nishinomiyakitaguchi", eft4: 13090, eft8: 24090, unl: 37290, fee: true, annual: true },
  "club-pilates-daikanyama": { path: "daikanyama", eft4: 14190, eft8: 26290, unl: 40590, fee: true },
  "club-pilates-nakano-sakaue": { path: "nakanosakaue", eft4: 13090, eft8: 24090, unl: 37290, fee: true },
  "club-pilates-toyosu": {
    path: "toyosu", eft4: 14190, eft8: 26290, unl: 40590,
    campaign: "2026年11月中に入会した方は0円（店舗のキャンペーン。キャンペーンを適用した入会には3か月間の契約必須期間があります）",
  },
  "club-pilates-tamachi": { path: "tamachi", eft4: 14190, eft8: 26290, unl: 40590, annual: true },
  "club-pilates-kagurazaka": {
    path: "kagurazaka", eft4: 14190, eft8: 26290, unl: 40590,
    campaign: "2026年11月中の無料体験レッスンに参加し、当日に入会した方は0円（店舗のキャンペーン。キャンペーンを適用した入会には3か月間の契約必須期間があります）",
  },
  "club-pilates-tsujido": { path: "tsujido", eft4: 14190, eft8: 26290, unl: 40590 },
  "club-pilates-fukuoka-nishijin": { path: "fukuokanishijin", eft4: 13090, eft8: 24090, unl: 37290 },
  "club-pilates-esaka": { path: "esaka", eft4: 14300, eft8: 18700, unl: 26950, fee: true, annual: true },
};

function clubPilates(urlSlug: string): ResolvedStoreFacts | null {
  const st = CP_STORES[urlSlug];
  if (!st) return null;
  const storeSrc: FactSource = { label: "公式の店舗ページ", url: `https://clubpilates.co.jp/studio/${st.path}/` };
  const initialRows: InitialRow[] = [{ item: "入会金", amount: "5,500円", tax: "料金欄に税の表記なし", waiver: st.campaign }];
  if (st.fee) initialRows.push({ item: "事務手数料（入会時）", amount: "2,200円", tax: "税込" });
  return {
    checkedAt: CHECKED,
    price: {
      lead: `この店舗の公式ページに掲載されている月会費です。CLUB PILATESは店舗ごとに料金が異なり、店舗ページの料金には税の表記がありません。${st.annual ? "年間一括払いもあり、金額は店舗に問い合わせる形です（公式の店舗ページ）。" : ""}`,
      rows: [
        { plan: "EFT4（月4回）", price: `月${yen(st.eft4)}`, tax: "記載なし" },
        { plan: "EFT8（月8回）", price: `月${yen(st.eft8)}`, tax: "記載なし" },
        { plan: "UNLIMITED（通い放題）", price: `月${yen(st.unl)}`, tax: "記載なし" },
      ],
      sources: [storeSrc],
    },
    initial: {
      rows: initialRows,
      note: "月会費は、当月分を初回申込時にクレジットカードで支払い、翌月以降は毎月20日に自動で決済されます（特定商取引法に基づく表記）。入会月の月会費が日割りになるかは記載がないため、初月費用の試算は掲載していません。",
      sources: [storeSrc, CP_LAW],
    },
    rules: [
      { label: "予約の受付", text: "予約サイトから予約します。同時に持てる予約は、EFT4が4枠、EFT8が8枠、通い放題が15枠です。規定の回数を超えて受講する場合は追加チケットを購入します。使いきれなかった回数は翌月に繰り越せません。", sources: [storeSrc] },
      { label: "キャンセル", text: "グループレッスンは開始12時間前までに予約サイトでキャンセルします。12時間前を過ぎると、EFT4・EFT8は1回分の消化、通い放題はキャンセル料（開始時間までに店舗へ連絡した場合は税別1,000円、無断または開始後の連絡は税別1,500円）がかかります。", sources: [storeSrc] },
      { label: "退会", text: "退会を希望する月の前月10日までに、契約店舗への申請と申請フォームの提出をします（特定商取引法に基づく表記では専用の解約フォーム）。当月末まで利用でき、翌月から請求が止まります。日割りの返金はなく、途中解約には別途手数料がかかります（金額は記載なし）。", sources: [CP_LAW, storeSrc] },
      { label: "休会", text: "1年間で4か月まで休会できます。休会費は税別1,500円で、前月10日までに契約店舗への申請と申請フォームの提出が必要です。", sources: [storeSrc] },
    ],
    trial: {
      steps: [
        "公式サイトの申込ページで、店舗と時間を選び、申込フォームに入力します。",
        "当日は着替えがあるため、予約時間の20分前に来店します（参加同意書の記入があります）。",
        "30分のイントロクラス（無料体験）を受けます。",
      ],
      items: [
        { label: "体験料金", text: "30分の体験レッスン 無料（公式の店舗ページ）" },
        { label: "所要時間", text: "イントロクラスは30分です。着替えなどを含めて1時間ほどかかると案内されています。" },
        { label: "持ち物", text: "動きやすい服装、足の裏にグリップの付いたソックス（持っていない場合は店舗で購入可能）、水筒。ウォーターサーバーは店舗にあります。" },
        { label: "服装・レンタル", text: "更衣室に限りがあるため、ウェアを着て来店するよう勧められています。ウェアの貸し出しについては公式に記載がありません。" },
      ],
      sources: [CP_TRIAL, storeSrc],
    },
  };
}

/* ───────────────────────── BDC PILATES ───────────────────────── */
const BDC_FAQ: FactSource = { label: "BDC PILATES 公式のよくある質問", url: "https://bdcpilates.com/faq" };
const BDC_TERMS: FactSource = { label: "BDC PILATES 公式の利用規約", url: "https://bdcpilates.com/terms2026" };
const BDC_BEGIN: FactSource = { label: "BDC PILATES 初めての方へ", url: "https://bdcpilates.com/for_beginners" };
const BDC_STORES: Record<string, { path: string; month3: boolean; privateTrial: boolean }> = {
  "bdc-futakotamagawa": { path: "futakotamagawa", month3: true, privateTrial: true },
  "bdc-ebisu": { path: "ebisu", month3: false, privateTrial: true },
  "bdc-omotesando": { path: "omotesando", month3: false, privateTrial: false },
};

function bdc(urlSlug: string): ResolvedStoreFacts | null {
  const st = BDC_STORES[urlSlug];
  if (!st) return null;
  const storeSrc: FactSource = { label: "公式の店舗ページ", url: `https://bdcpilates.com/${st.path}` };
  const rows: PriceRow[] = [
    ...(st.month3 ? [{ plan: "グループ 月3回", price: "月12,375円", tax: "税込" }] : []),
    { plan: "グループ 月4回", price: "月16,280円", tax: "税込" },
    { plan: "グループ 月6回", price: "月23,100円", tax: "税込" },
    { plan: "グループ 月8回", price: "月29,260円", tax: "税込" },
    { plan: "グループ 追加レッスン", price: "1回4,070円", tax: "税込" },
    { plan: "プライベート 月1回", price: "月11,000円", tax: "税込" },
    { plan: "プライベート 月2回", price: "月20,900円", tax: "税込" },
    { plan: "プライベート 追加レッスン", price: "1回11,000円", tax: "税込" },
  ];
  return {
    checkedAt: CHECKED,
    price: {
      lead: st.month3 ? "この店舗の公式ページに掲載されている料金です。グループの月3回コースがあるのは、BDC PILATESの8店舗のうち二子玉川・池袋・吉祥寺の3店舗です。" : "この店舗の公式ページに掲載されている料金です。グループの月3回コースはこの店舗にはありません（二子玉川・池袋・吉祥寺のみ）。",
      rows,
      sources: [storeSrc],
    },
    initial: {
      rows: [
        { item: "入会金", amount: "11,000円", tax: "税込", waiver: "2026年11月30日までのキャンペーン（各店限定20名・グループコースのみ）で、体験当日に入会した場合は0円（公式の店舗ページのキャンペーン画像）" },
        { item: "事務手数料", amount: "2,200円", tax: "税込" },
        { item: "施設維持費（毎月）", amount: "月770円", tax: "税込" },
      ],
      note: "入会時に前払いする月会費の月数が、公式の店舗ページとよくある質問（グループは2か月分・プライベートは3か月分）、利用規約（入会月から翌々月分まで）で異なるため、初月費用の試算は掲載していません。入会後の月会費は口座振替で毎月27日に引き落とされます。",
      sources: [storeSrc, BDC_FAQ, BDC_TERMS],
    },
    rules: [
      { label: "予約の受付", text: "グループレッスンは開講日の1か月前からレッスン開始直前まで、プライベートレッスンは1か月前から前日20時30分まで予約できます。受講できるのは所属店舗のレッスンで、他店舗で受講する場合は追加レッスン料がかかります。", sources: [BDC_FAQ] },
      { label: "キャンセル", text: "前日20時までに手続きします。前日20時を過ぎると、受講の有無にかかわらずレッスン1回分として数えられます。", sources: [BDC_FAQ] },
      { label: "退会", text: "退会を希望する月の前々前月の末日までに、会員証を持って店頭で手続きします（電話・メールでは受け付けていません）。例として、12月31日で退会する場合は10月31日までに手続きします。", sources: [BDC_FAQ] },
      { label: "休会", text: "休会を希望する月の前々月の末日までに、会員証を持って店頭で手続きします。休会明けの再開時は入会金・事務手数料はかかりません。休会中の費用と休会できる期間は公式に記載がありません。", sources: [BDC_FAQ] },
      { label: "繰越", text: "受講しなかった回数は翌月へ自動で繰り越されます（月4回・6回・8回は2回分まで、月3回とプライベートは1回分まで）。", sources: [BDC_FAQ] },
    ],
    trial: {
      steps: [
        "公式の予約サイトで、希望の店舗と日時を選びます。",
        "グループは「リフォーマー体験会」または通常のリフォーマークラスの体験を予約します（リフォーマー体験会は開講がない店舗もあります）。",
        "初めての方は個別カウンセリングがあるため、予約の20分前までに来店します。",
      ],
      items: [
        { label: "体験料金", text: `グループ体験は通常4,070円（税込）で、2026年11月30日までのキャンペーンで1,100円（税込・各店限定20名・公式の店舗ページのキャンペーン画像）。${st.privateTrial ? "プライベート体験は60分11,000円（税込）です。" : "プライベート体験の料金は、この店舗の公式ページに記載がありません。"}` },
        { label: "所要時間", text: "レッスンは55分です。初回は予約の20分前までに来店します。" },
        { label: "持ち物", text: "動きやすいウェアと靴下。必要に応じて水とタオル。" },
        { label: "服装・レンタル", text: "レンタルウェア（有料・料金は公式に記載なし）があります。" },
      ],
      sources: [storeSrc, BDC_BEGIN],
    },
  };
}

/* ───────────────────────── Pilates KASANE ───────────────────────── */
const KAS_PRICE: FactSource = { label: "Pilates KASANE 公式の料金ページ", url: "https://pilates-kasane.jp/price/" };
const KAS_FAQ: FactSource = { label: "Pilates KASANE 公式のよくある質問", url: "https://pilates-kasane.jp/faq/" };
const KAS_TERMS: FactSource = { label: "Pilates KASANE 公式の会員規約", url: "https://pilates-kasane.jp/terms/" };
const KAS_BEGIN: FactSource = { label: "Pilates KASANE 初めての方へ", url: "https://pilates-kasane.jp/beginner/" };
// personal＝公式の店舗ページにパーソナルレッスンの表示がある店舗
const KAS_STORES: Record<string, { path: string; personal: boolean }> = {
  "kasane-tsukuba": { path: "studio-aeonmall_tsukuba", personal: true },
  "kasane-hirakata": { path: "studio-hirakata", personal: false },
  "kasane-hamamatsu": { path: "studio-hamamatsu_plazafrespo", personal: true },
  "kasane-kinshicho": { path: "studio-kinshicho", personal: true },
  "kasane-okinawa-toyosaki": { path: "studio-iias_okinawatoyosaki", personal: false },
  "kasane-kawaguchi-maekawa": { path: "studio-aeonmall_kawaguchimaekawa", personal: true },
};

function kasane(urlSlug: string): ResolvedStoreFacts | null {
  const st = KAS_STORES[urlSlug];
  if (!st) return null;
  const storeSrc: FactSource = { label: "公式の店舗ページ", url: `https://pilates-kasane.jp/studio/${st.path}/` };
  const rows: PriceRow[] = [
    { plan: "マンスリー 月4回（グループ）", price: "月15,400円", tax: "税込" },
    { plan: "マンスリー 月6回（グループ）", price: "月19,800円", tax: "税込" },
    { plan: "マンスリー 月8回（グループ）", price: "月24,200円", tax: "税込" },
    { plan: "追加チケット（マンスリー会員）", price: "1回3,850円", tax: "税込", note: "有効期間は購入日から翌月末日まで" },
  ];
  if (st.personal) {
    rows.push(
      { plan: "グループ＆パーソナル 月2回", price: "グループの月会費＋17,600円", tax: "税込" },
      { plan: "グループ＆パーソナル 月4回", price: "グループの月会費＋33,000円", tax: "税込" },
      { plan: "パーソナル 月4回", price: "月39,600円", tax: "税込" },
      { plan: "パーソナル 月6回", price: "月56,100円", tax: "税込" },
      { plan: "パーソナル 月8回", price: "月70,400円", tax: "税込" },
    );
  }
  return {
    checkedAt: CHECKED,
    price: {
      lead: `この店舗の公式ページと公式の料金ページの料金です。${st.personal ? "この店舗はパーソナルレッスンにも対応しています。" : "この店舗の公式ページにはパーソナルレッスンの表示がないため、グループの料金のみ掲載しています。"}月会費のほかに「運営管理費」などの費用はかからないと公式に記載されています。`,
      rows,
      sources: [KAS_PRICE, storeSrc, KAS_FAQ],
    },
    initial: {
      rows: [{ item: "入会金", amount: "15,400円", tax: "税込", waiver: "体験レッスン後にその場で入会した場合は無料（公式のよくある質問）" }],
      sources: [KAS_FAQ],
    },
    firstMonth: {
      title: "入会時に支払う額の例",
      condition: "公式の会員規約とよくある質問では、入会時に入会金と、初月分・翌月分の月会費を支払います。初月分は入会日によって変わり、月4回コースは1〜7日の入会で15,400円（4回）、8〜14日で11,550円（3回）、15〜21日で7,700円（2回）、22〜31日で3,850円（1回）です。ここでは月4回コースに毎月1〜7日に入会し、入会金がかかる場合を計算しています。",
      lines: [
        { label: "入会金", amount: 15400 },
        { label: "初月分の月会費（月4回・1〜7日に入会）", amount: 15400 },
        { label: "翌月分の月会費（月4回）", amount: 15400 },
      ],
      note: "体験レッスン後にその場で入会して入会金が無料になる場合は30,800円です。割引キャンペーンを使う場合は初月の会費が変わることがあると規約に記載されています。",
      source: KAS_TERMS,
    },
    rules: [
      { label: "予約の受付", text: "公式の予約システム（Web）で予約します。定員に達していなければ、レッスン開始の20分前まで予約できます。", sources: [KAS_FAQ, KAS_TERMS] },
      { label: "キャンセル", text: "レッスン当日のキャンセルは開始2時間前までです。それ以降のキャンセルは1回分を消化します。月の回数は翌月に繰り越せません。", sources: [KAS_TERMS, KAS_FAQ] },
      { label: "退会", text: "毎月10日までに申し出るとその月の末日で、11日以降に申し出ると翌月末日で退会できます。入会金や月会費の割引キャンペーンを使って入会した場合は、キャンペーンごとに定める期間は退会できません。休会中と休会終了後1か月間も退会の手続きはできません。", sources: [KAS_TERMS, KAS_FAQ] },
      { label: "休会", text: "けが・病気・妊娠・転勤などの事由がある場合に休会できます。毎月10日までの申し出でその月の末日から、11日以降は翌月末日から休会になります。休会できる期間は、会員規約（2026年10月30日改定）では最大6か月、よくある質問では最長1年と、公式内で記載が異なります。休会中の費用は公式に記載がありません。", sources: [KAS_TERMS, KAS_FAQ] },
    ],
    trial: {
      steps: [
        "公式サイトのレッスンカレンダーから日時を選び、名前とメールアドレスを入力して予約します。",
        "予約の20分前までに来店し、マシンの使い方や注意事項の説明を受けます。",
        "体験レッスン（Basicプログラム・50分）を受けます。",
        "入会を希望する場合は、体験後にインストラクターに伝えて手続きをします。",
      ],
      items: [
        { label: "体験料金", text: "0円（初回のみ・1人1回）" },
        { label: "所要時間", text: "レッスンは50分です。前後の案内を含め、全体で約90分です。" },
        { label: "持ち物", text: "必須の持ち物はありません（手ぶらで来店できます）。" },
        { label: "服装・レンタル", text: "トップス・レギンス・ソックスを無料で貸し出しています（いわき小名浜店を除く）。" },
      ],
      sources: [KAS_BEGIN, KAS_FAQ],
    },
  };
}

/* ───────────────────────── ピラティスK ───────────────────────── */
const K_PRICE: FactSource = { label: "ピラティスK 公式の料金ページ", url: "https://pilates-k.jp/price" };
const K_TERMS: FactSource = { label: "ピラティスK 公式の会員約款", url: "https://pilates-k.jp/terms" };
const K_FLOW: FactSource = { label: "ピラティスK 公式の体験の流れ", url: "https://pilates-k.jp/flow" };
// 月4回 13,420円の店舗（八王子オクトーレ店は公式の店舗ページで確認）。11,220円の店舗を追加する場合は別の行を作る
const K_STORES: Record<string, { path: string; m4: number; m8: number; premium: number; other: string }> = {
  "pilates-k-hachioji": { path: "tokyo/hachioji", m4: 13420, m8: 16170, premium: 18920, other: "0円" },
};

function pilatesK(urlSlug: string): ResolvedStoreFacts | null {
  const st = K_STORES[urlSlug];
  if (!st) return null;
  const storeSrc: FactSource = { label: "公式の店舗ページ", url: `https://pilates-k.jp/studio/${st.path}` };
  return {
    checkedAt: CHECKED,
    price: {
      lead: "この店舗の公式ページに掲載されている料金です。ピラティスKは店舗によって月会費が異なります（公式の料金ページでは月4回 11,220円〜13,420円）。",
      rows: [
        { plan: "マンスリー4メンバー（月4回）", price: `月${yen(st.m4)}`, tax: "税込" },
        { plan: "マンスリー8メンバー（月8回）", price: `月${yen(st.m8)}`, tax: "税込" },
        { plan: "マンスリープレミアムメンバー（毎日2レッスンまで）", price: `月${yen(st.premium)}`, tax: "税込" },
        { plan: "施設維持費", price: "月825円", tax: "税込" },
        { plan: "追加受講", price: "1回2,200円", tax: "税込", note: "マンスリー4の5回目以降・マンスリー8の9回目以降など" },
        { plan: "他店舗受講", price: `1回${st.other}`, tax: "税込" },
        { plan: "チケットプラン", price: "1回3,850円", tax: "税込" },
      ],
      sources: [storeSrc, K_PRICE],
    },
    initial: {
      rows: [
        { item: "入会金", amount: "5,500円", tax: "税込" },
        { item: "登録料", amount: "5,500円", tax: "税込" },
        { item: "施設利用料", amount: "2,530円", tax: "税込" },
      ],
      note: "体験当日に入会した場合のキャンペーンは公式の料金ページに画像で掲載されており、文字で条件を確認できないため、免除の条件は掲載していません。",
      sources: [K_PRICE],
    },
    firstMonth: {
      title: "入会時に支払う額の例",
      condition: "公式の料金ページでは、入会時に初期費用（入会金・登録料・施設利用料）と月会費（施設維持費を含む）を支払います。月会費は、当月から始める場合に1〜20日の登録で2か月分、21日〜末日の登録で3か月分です（会員約款にも、入会時に2か月分の月額利用料を前納すると記載されています）。ここではマンスリー4メンバーで、当月1〜20日に登録して当月から始め、キャンペーンを使わない場合を計算しています。",
      lines: [
        { label: "入会金", amount: 5500 },
        { label: "登録料", amount: 5500 },
        { label: "施設利用料", amount: 2530 },
        { label: "月会費 マンスリー4（2か月分）", amount: st.m4 * 2 },
        { label: "施設維持費（2か月分）", amount: 825 * 2 },
      ],
      source: K_PRICE,
    },
    rules: [
      { label: "予約の受付", text: "完全予約制です。公式サイトの予約フォームから24時間予約できます。", sources: [storeSrc] },
      { label: "キャンセル", text: "予約した開始時刻の1時間前までに取り消します。期限を過ぎた取り消しや無断欠席が1か月に2回以上あると、翌月の同時予約可能数が1回分に制限されます（会員約款第16条）。", sources: [K_TERMS] },
      { label: "退会", text: "解約を希望する月の前々月の20日まで（20日が定休日の場合は前営業日まで）に、登録店舗に来店して手続きします。解約日はその月の末日です。月額会員は入会月から3か月間は解約できず、入会時に適用したプランの継続必須期間中も解約できません（会員約款第8条・第12条）。", sources: [K_TERMS] },
      { label: "休会", text: "休会を希望する月の前々月の20日までに、登録店舗に来店して手続きします。1回の手続きで最長3か月まで休会でき、休会中は毎月休会手数料1,100円（税の表記なし）がかかります。プランの継続必須期間中は休会できません（会員約款第13条）。", sources: [K_TERMS] },
    ],
    trial: {
      steps: [
        "公式サイトの予約フォームで店舗と日時を選びます（電話予約もあります）。",
        "レッスン当日は25分前までに来店します。",
        "着替え・カウンセリングのあと、体験レッスンを受けます。レッスン後に入会の手続きや案内があります。",
      ],
      items: [
        { label: "体験料金", text: "0円（公式の料金ページ「¥0から体験可能」）。体験は1人1回までです。" },
        { label: "所要時間", text: "着替えやカウンセリング、手続きのため、レッスンの前後にそれぞれ30分ほどかかると案内されています（公式の店舗ページ）。" },
        { label: "持ち物", text: "靴下（すべり止め付きソックスは店頭で販売）、汗拭きタオル、飲み物（水を推奨）。" },
        { label: "服装・レンタル", text: "体験レッスンでは上下のウェアをレンタルできます（体験料に含まれます）。入会後のレンタルウェアは上下各330円（税込）です。" },
      ],
      sources: [K_FLOW, storeSrc, K_PRICE],
    },
  };
}

/* ───────────────────────── Pilates Mee ───────────────────────── */
const MEE_PRICE: FactSource = { label: "Pilates Mee 公式の料金ページ", url: "https://m-pilates.com/price/" };
const MEE_TERMS: FactSource = { label: "Pilates Mee 公式の会員規約", url: "https://m-pilates.com/terms/" };
const MEE_PAY: FactSource = { label: "Pilates Mee 公式サポート「入会・決済ルール」", url: "https://help.m-pilates.com/membership-payment-rules" };
const MEE_RESV: FactSource = { label: "Pilates Mee 公式サポート「予約のルール」", url: "https://help.m-pilates.com/reservation-rules" };
const MEE_SUSP: FactSource = { label: "Pilates Mee 公式サポート「休会について」", url: "https://help.m-pilates.com/suspension" };
const MEE_FLOW: FactSource = { label: "Pilates Mee 公式サポート「体験レッスンの流れ」", url: "https://help.m-pilates.com/trial-lesson-flow" };
const MEE_WEAR: FactSource = { label: "Pilates Mee 公式サポート「服装・持ち物」", url: "https://help.m-pilates.com/lesson-wear" };
const MEE_TOP: FactSource = { label: "Pilates Mee 公式サイト", url: "https://m-pilates.com/" };
const MEE_STORES: Record<string, string> = { "pilates-mee-oimachi": "tokyo/oimachi" };

function pilatesMee(urlSlug: string): ResolvedStoreFacts | null {
  const path = MEE_STORES[urlSlug];
  if (!path) return null;
  const storeSrc: FactSource = { label: "公式の店舗ページ", url: `https://m-pilates.com/shop/${path}/` };
  return {
    checkedAt: CHECKED,
    price: {
      lead: "この店舗の公式ページに掲載されている料金です（料金は税込と表記）。セミパーソナルは最大3名のレッスンです。",
      rows: [
        { plan: "セミパーソナル 月2回", price: "月11,000円", tax: "税込" },
        { plan: "セミパーソナル 月4回", price: "月19,800円", tax: "税込" },
        { plan: "セミパーソナル 通い放題", price: "月37,500円", tax: "税込" },
        { plan: "パーソナル 月2回", price: "月22,000円", tax: "税込" },
        { plan: "パーソナル 月4回", price: "月39,600円", tax: "税込" },
        { plan: "パーソナル 月8回", price: "月70,400円", tax: "税込" },
      ],
      sources: [storeSrc, MEE_PRICE],
    },
    initial: {
      rows: [],
      note: "会員規約では入会時に入会金を支払うと定められていますが、公開されている料金ページ・店舗ページに入会金の金額は表示されていません。月会費は日割りにならず、21日より前に入会して当月から始める場合は、当月分を入会日に、翌月分を21日に決済します（21日以降に当月から入会する場合は当月分と翌月分を入会日に決済）。入会金の金額が確認できないため、入会時の支払額の試算は掲載していません。",
      sources: [MEE_TERMS, MEE_PAY],
    },
    rules: [
      { label: "予約の受付", text: "マイページから24時間予約できます。回数プランは持っているチケットの枚数分、通い放題は同時に5件まで予約できます。キャンセル待ちは回数の制限なく登録できます。", sources: [MEE_RESV] },
      { label: "キャンセル", text: "レッスン開始の3時間前までにマイページで手続きすれば、レッスン代金・キャンセル手数料はかかりません。3時間前を過ぎたキャンセルは店舗のLINEに連絡し、チケット1回分を使用します。連絡なく開始から10分が過ぎた場合も当日キャンセルとみなされます。", sources: [MEE_TERMS, MEE_RESV] },
      { label: "退会", text: "最低契約期間は3か月（入会月を1か月目と数えます）で、その間は退会できません。退会を希望する月の前月10日まで（10日が定休日の場合は前営業日まで）に、店舗に来店して手続きします。退会日はその月の末日です。", sources: [MEE_TERMS] },
      { label: "休会", text: "通常のプランには休会制度がありません。妊娠がわかった場合のみ、店舗のLINEに連絡すると、持っているチケットの有効期限が最大2年間延長されます。", sources: [MEE_SUSP] },
    ],
    trial: {
      steps: [
        "体験レッスンを予約します（公式サイトではLINEからの問い合わせを案内しています）。",
        "予約時間の5分前に来店し、着替えます。",
        "事前アンケートをもとにカウンセリングを行い、体の写真を撮って姿勢を評価します。",
        "インストラクターと1対1で、30〜40分程度の体験レッスンを受けます。",
        "レッスン後にスタジオと入会の案内があります。",
      ],
      items: [
        { label: "体験料金", text: "0円（公式の店舗ページ）" },
        { label: "所要時間", text: "着替えを含めて60分ほどです（レッスン40分、カウンセリングや料金の説明などで20分ほど）。" },
        { label: "持ち物", text: "動きやすい上下のウェア（長ズボン推奨）、靴下（滑り止め付きを推奨）、飲み物（水を推奨）、汗拭きタオル。" },
        { label: "服装・レンタル", text: "ウェア・靴下・タオルなどのレンタルはありません。" },
      ],
      sources: [MEE_TOP, MEE_FLOW, MEE_WEAR, storeSrc],
    },
  };
}

const REGISTRY: Record<string, (urlSlug: string) => ResolvedStoreFacts | null> = {
  "the-silk": theSilk,
  rintosull,
  "club-pilates": clubPilates,
  bdc,
  kasane,
  "pilates-k": pilatesK,
  "pilates-mee": pilatesMee,
};

/** 店舗ページ用の公式情報。ブランド・店舗が確認済みの一覧に無ければ null（何も出さない） */
export function resolveStoreFacts(brandSlug: string, urlSlug: string): ResolvedStoreFacts | null {
  return REGISTRY[brandSlug]?.(urlSlug) ?? null;
}
