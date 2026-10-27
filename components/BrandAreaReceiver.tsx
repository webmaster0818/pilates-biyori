import Link from "next/link";
import { siblingStorePages } from "@/lib/storePages"
import { Navigation } from "@/components/Navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { getBrand } from "@/data/brands";
import type { BdcStore } from "@/data/bdc-stores";
import { STUDIO_REVIEWS } from "@/data/studio-reviews";
import { brandSlugOf } from "@/lib/brandLink";

// ブランド×エリア受け皿。指名クエリ「{ブランド} ピラティス {エリア}」の受け皿。
// 実店舗データ（brands-aggregate.json一致）＋ブランド編集データ＋ブランド/エリアへの三角リンク。
// brandSlug でBDC以外のブランド（club-pilates等）にも汎用対応。
// 月表記は自動更新（手動更新は陳腐化するため）
const _now = new Date()
const MONTH_TAG = `【${_now.getFullYear()}年${_now.getMonth() + 1}月】`

export function BrandAreaReceiver({ store, brandSlug = "bdc" }: { store: BdcStore; brandSlug?: string }) {
  /* 店舗名で口コミ要約を引く。無い店舗では何も出さない（別の店の要約を出さないため）。
     ⚠️ 要約は編集部が書いたもので、口コミ本文の転載ではない。出典リンクを必ず添える。 */
  /* ⚠️ 掲載名と要約データのキーは表記ゆれがある（「Pilates Mee大井町店」と「Pilates Mee 大井町店」等）。
     完全一致で引けないときだけ、空白を無視した一致で拾う。それでも無ければ何も出さない。 */
  const norm = (s: string) => s.replace(/[\s　]/g, "");
  const rev =
    STUDIO_REVIEWS[store.storeName] ??
    Object.values(STUDIO_REVIEWS).find((r) => norm(r.name) === norm(store.storeName));
  const brand = getBrand(brandSlug);
  const brandName = brand?.name ?? brandSlug.toUpperCase();
  const brandHref = `/brands/${brandSlug}/`;
  /* 別業態（例: Pilates Mee Life）の説明は、その業態でない店舗のページでは出さない（2026-10-09 Pilates Mee大井町店・クライアント指示） */
  const sub = brand?.subBrandWord;
  const dropSub = !!sub && !store.storeName.includes(sub.replace(/^.*\s/, ""));
  const intro = (brand?.intro ?? [])
    .map((p) => (dropSub ? p.split(/(?<=。)/).filter((x) => !x.includes(sub!)).join("") : p))
    .filter((p) => p.trim());
  const brandFaq = (brand?.faq ?? []).filter((f) => !(dropSub && (f.q.includes(sub!) || f.a.includes(sub!))));
  const noCampaign = brand?.noCampaignWording === true;
  /* ブランド全体の口コミ集約（親ページ #reviews）への導線用の実数（2026-10-14: 「BDC 口コミ」の着地が店舗ページ止まりだったため、
     店舗の口コミ要約の直後から親ページの全店舗集約へ誘導する。数え方は BrandReviewDigest と同じ＝cid で1店舗） */
  const brandRevSeen = new Set<string>();
  const brandRevRows = Object.values(STUDIO_REVIEWS).filter((r) => {
    const place = r.mapsUri.match(/cid=(\d+)/)?.[1] ?? r.mapsUri;
    if (brandSlugOf(r.name) !== brandSlug || brandRevSeen.has(place)) return false;
    brandRevSeen.add(place);
    return true;
  });
  const brandRevTotal = brandRevRows.reduce((n, r) => n + r.userRatings, 0);

  const faqs = [
    {
      q: `${brandName} ${store.areaQuery}の体験レッスンはありますか？`,
      a: `${store.storeName}では${store.trial}の掲載例があります。体験の空き状況・最新の料金は公式サイトでご確認ください。`,
    },
    {
      q: `${brandName} ${store.areaQuery}へのアクセスは？`,
      a: `${store.access}です。${store.addressIsVague ? "詳細な所在地は公式サイトでご確認ください。" : `所在地は${store.address}です。`}`,
    },
    ...brandFaq,
  ];

  const localLd = {
    "@context": "https://schema.org",
    "@type": ["HealthClub", "LocalBusiness"],
    name: store.storeName,
    url: `https://biyori-pilates.com/brands/${store.urlSlug}/`,
    ...(store.addressIsVague
      ? { areaServed: store.prefecture ? `${store.areaQuery}（${store.prefecture}）` : store.areaQuery }
      : { address: { "@type": "PostalAddress", streetAddress: store.address, addressCountry: "JP" } }),
    parentOrganization: { "@type": "Organization", name: brandName },
  };

  return (
    <>
      <Navigation />
      <FAQSchema faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <BreadcrumbSchema
        items={[
          { name: "ホーム", url: "https://biyori-pilates.com/" },
          { name: "ブランド一覧", url: "https://biyori-pilates.com/brands/" },
          { name: brandName, url: `https://biyori-pilates.com${brandHref}` },
          { name: `${store.areaQuery}`, url: `https://biyori-pilates.com/brands/${store.urlSlug}/` },
        ]}
      />
      <main className="bg-warm-50 min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-5">
          <nav className="text-xs text-warm-500 mb-6">
            <Link href="/" className="hover:text-warm-800">ホーム</Link>
            <span className="mx-2">›</span>
            <Link href="/brands/" className="hover:text-warm-800">ブランド一覧</Link>
            <span className="mx-2">›</span>
            <Link href={brandHref} className="hover:text-warm-800">{brandName}</Link>
            <span className="mx-2">›</span>
            <span className="text-warm-800">{store.areaQuery}</span>
          </nav>

          <p className="section-en text-warm-400 mb-2 font-medium">Brand × Area</p>
          <h1 className="text-2xl md:text-3xl font-light text-warm-900 tracking-tight mb-3">
            {store.areaQuery}の{brandName}{store.nameAlias ? `（${store.nameAlias}）` : ""}｜{store.h1Words ?? ""}料金・体験・{store.hours ? "営業時間・" : ""}アクセス
            <span className="block text-base text-warm-500 mt-2 font-light">
              マシンピラティス専門「{store.storeName}」の情報を当サイトの掲載データにもとづいて掲載しています{MONTH_TAG}
            </span>
          </h1>

          <div className="border border-warm-300 bg-warm-50 px-4 py-3 mb-8 text-sm text-warm-800">
            🔀 {brandName}全体の<strong>料金プラン・口コミ・全店舗一覧</strong>をお探しの方は{" "}
            <Link href={brandHref} className="underline decoration-warm-400 hover:text-warm-900 font-medium">{brandName}のブランドガイド</Link>
            {" "}をご覧ください（このページは{store.areaQuery}店の情報です）。
            {/* 2026-10-27 自社カニバリ「bdc ピラティス 口コミ／料金」: ブランド語の主ページは /brands/bdc/。店舗ページからは口コミ・料金の全体像を主ページへ送る */}
            {brandSlug === "bdc" && (
              <>
                {" "}全店舗の口コミの傾向は
                <Link href={`${brandHref}#reviews`} className="underline decoration-warm-400 hover:text-warm-900">BDC PILATESの口コミ・評判（全店舗のまとめ）</Link>
                、月額の料金表は
                <Link href={brandHref} className="underline decoration-warm-400 hover:text-warm-900">BDC PILATESの料金プラン</Link>
                にまとめています。
              </>
            )}
          </div>

          {/* 結論ボックス */}
          <section className="bg-white border border-warm-200 p-6 mb-10">
            <p className="text-xs font-medium text-warm-400 uppercase tracking-[0.15em] mb-3">店舗情報の概要</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-lg font-light text-warm-900">{store.price.split("〜")[0]}〜</p>
                <p className="text-xs text-warm-500 mt-1">掲載プラン</p>
              </div>
              <div>
                <p className="text-lg font-light text-warm-900">{store.trial.replace("体験レッスン", "").trim()}</p>
                <p className="text-xs text-warm-500 mt-1">体験レッスン</p>
              </div>
              <div>
                <p className="text-lg font-light text-warm-900">
                  {rev ? `★${rev.rating}` : store.rating ? `★${store.rating.toFixed(1)}` : "—"}
                </p>
                <p className="text-xs text-warm-500 mt-1">
                  {rev ? `Googleの評価（${rev.userRatings}件）` : store.rating ? "掲載時点の評価" : "評価情報なし"}
                </p>
              </div>
              <div>
                <p className="text-lg font-light text-warm-900">{store.areaLabel}</p>
                <p className="text-xs text-warm-500 mt-1">エリア</p>
              </div>
            </div>
          </section>

          {/* 口コミ要約（Googleの口コミをもとにした編集部の要約＋出典リンク。本文は転載しない） */}
          {rev && (
            <section className="mb-10">
              <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">
                {store.storeName}の口コミ・評判
              </h2>
              <div className="bg-warm-50 border border-warm-200 rounded-lg p-5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-bold text-warm-800">Googleの評価</span>
                  <span className="text-sm font-bold text-warm-900">★{rev.rating}</span>
                  <span className="text-xs text-warm-600">（{rev.userRatings}件）</span>
                </div>
                <p className="text-sm text-warm-700 mt-3 leading-relaxed">{rev.summary}</p>
                <p className="text-[11px] text-warm-500 mt-3">
                  Googleマップに投稿された口コミをもとに、編集部が要約したものです（{rev.fetchedAt}時点）。
                  口コミ本文は転載していません。{" "}
                  <a href={rev.mapsUri} target="_blank" rel="noopener noreferrer" className="underline hover:text-warm-700">
                    出典：Googleマップの口コミを見る
                  </a>
                </p>
              </div>
              {brandRevRows.length >= 3 && (
                <p className="mt-4 border border-warm-300 bg-white px-4 py-3 text-sm text-warm-800 leading-relaxed">
                  {brandName}全体の口コミの傾向は、こちらをご覧ください →{" "}
                  <Link href={`${brandHref}#reviews`} className="underline decoration-warm-400 hover:text-warm-900 font-medium">
                    {brandName}の口コミ・評判まとめ（Googleマップ{brandRevRows.length}店舗・{brandRevTotal.toLocaleString()}件の要約{brand?.reviewThemes ? "と、口コミに多いテーマ・注意点" : ""}）
                  </Link>
                </p>
              )}
            </section>
          )}

          {/* 公式の店舗ページに掲載されている会員の声（原文の一部を引用・出典リンク付き）と口コミの傾向（2026-10-21） */}
          {store.officialVoices && store.officialVoices.length > 0 && (
            <section className="mb-10" id="official-voices">
              <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">
                {store.storeName}の会員の声（公式の店舗ページから引用）
              </h2>
              <div className="space-y-3">
                {store.officialVoices.map((v) => (
                  <figure key={v.text} className="bg-white border border-warm-200 p-4">
                    <blockquote className="text-sm text-warm-700 font-light leading-relaxed">「{v.text}」</blockquote>
                    <figcaption className="mt-2 text-[11px] text-warm-500">掲載日 {v.date}</figcaption>
                  </figure>
                ))}
              </div>
              <p className="text-[11px] text-warm-500 mt-3 leading-relaxed">
                出典:{" "}
                {store.officialStoreUrl ? (
                  <a href={`${store.officialStoreUrl}#member-voices`} target="_blank" rel="noopener noreferrer" className="underline decoration-warm-300 hover:text-warm-700">
                    {store.officialVoicesLabel ?? "公式の店舗ページ"}
                  </a>
                ) : (store.officialVoicesLabel ?? "公式の店舗ページ")}
                {store.checkedAt ? `（${store.checkedAt}確認）` : ""}。原文の一部をそのまま引用しています。公式サイトに掲載された声のため、良い内容に偏る可能性があります。感じ方には個人差があります。
              </p>
              {store.reviewTrend && store.reviewTrend.length > 0 && (
                <div className="mt-5 bg-warm-50 border border-warm-200 p-5">
                  <p className="text-sm font-medium text-warm-900 mb-2">{store.storeName}の口コミの傾向</p>
                  <ul className="space-y-2 text-sm text-warm-700 leading-relaxed font-light list-disc pl-5">
                    {store.reviewTrend.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </div>
              )}
            </section>
          )}

          {/* 店舗情報 */}
          <section className="mb-10">
            <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">{store.storeName}の基本情報</h2>
            <div className="bg-white border border-warm-200 overflow-x-auto">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-warm-100"><th className="px-4 py-3 text-left text-warm-500 font-medium whitespace-nowrap w-28">店舗</th><td className="px-4 py-3 text-warm-800">{store.storeName}</td></tr>
                  <tr className="border-b border-warm-100"><th className="px-4 py-3 text-left text-warm-500 font-medium">所在地</th><td className="px-4 py-3 text-warm-800">{store.address}</td></tr>
                  <tr className="border-b border-warm-100"><th className="px-4 py-3 text-left text-warm-500 font-medium">アクセス</th><td className="px-4 py-3 text-warm-800">{store.access}</td></tr>
                  <tr className="border-b border-warm-100"><th className="px-4 py-3 text-left text-warm-500 font-medium">料金</th><td className="px-4 py-3 text-warm-800">{store.priceList && store.priceList.length > 0 ? (<ul className="space-y-1">{store.priceList.map((line) => <li key={line}>{line}</li>)}</ul>) : store.price}</td></tr>
                  <tr className="border-b border-warm-100"><th className="px-4 py-3 text-left text-warm-500 font-medium">体験</th><td className="px-4 py-3 text-warm-800">{store.trial}</td></tr>
                  {store.hours && <tr className="border-b border-warm-100"><th className="px-4 py-3 text-left text-warm-500 font-medium">営業時間</th><td className="px-4 py-3 text-warm-800">{store.hours}</td></tr>}
                  {store.closed && <tr className="border-b border-warm-100"><th className="px-4 py-3 text-left text-warm-500 font-medium">定休日</th><td className="px-4 py-3 text-warm-800">{store.closed}</td></tr>}
                  {store.studioType && <tr className="border-b border-warm-100"><th className="px-4 py-3 text-left text-warm-500 font-medium">種別</th><td className="px-4 py-3 text-warm-800">{store.studioType}</td></tr>}
                  {store.rating && <tr><th className="px-4 py-3 text-left text-warm-500 font-medium">評価</th><td className="px-4 py-3 text-warm-800">★{store.rating.toFixed(1)}（当サイト掲載時点）</td></tr>}
                </tbody>
              </table>
            </div>
            {store.storeNotes && store.storeNotes.length > 0 && (
              <ul className="mt-4 space-y-2 text-sm text-warm-700 leading-relaxed font-light list-disc pl-5">
                {store.storeNotes.map((n) => <li key={n}>{n}</li>)}
              </ul>
            )}
            {store.officialStoreUrl && (
              <p className="text-xs text-warm-600 mt-3 leading-relaxed">
                所在地・アクセス・営業時間・料金・体験は{" "}
                <a href={store.officialStoreUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-warm-300 hover:text-warm-800">公式の店舗ページ</a>
                {store.checkedAt ? `の表記です（${store.checkedAt}確認）。` : "の表記です。"}
              </p>
            )}
            <p className="text-[11px] text-warm-400 mt-3 leading-relaxed">
              ※料金・体験条件は当サイト掲載時点の情報であり、金額を保証するものではありません。{noCampaign ? "最新の料金・空き状況は公式サイトでご確認ください。" : "最新の料金・空き状況・キャンペーンは公式サイトでご確認ください。"}
              {store.addressIsVague && "所在地の詳細は公式サイトでご確認ください。"}
              {brand?.officialRef && (
                <>
                  {" "}情報引用元:{" "}
                  <a href={brand.officialRef.url} target="_blank" rel="noopener noreferrer" className="underline decoration-warm-300 hover:text-warm-700">
                    {brand.officialRef.label}
                  </a>
                </>
              )}
            </p>
          </section>

          {/* store-cta-202609
              ⚠️ 店舗ページには公式サイトへの導線が1本も無かった（2026-09-15実測）。
                 情報引用元のテキストリンクしか無く、送客もアフィリエイト計測もできていなかった。
                 ブランド共通のCTA（提携ブランドはアフィリエイトURL）をここに置く。
              ⚠️ 情報引用元（officialRef）は公式URLのまま別に残す。引用元をアフィリにしない。 */}
          {brand?.ctaUrl && (
            <section className="mb-10 bg-white border border-warm-200 p-6 text-center">
              <p className="text-sm text-warm-700 font-light mb-4 leading-relaxed">
                {store.storeName}の体験レッスンの空き状況{noCampaign ? "" : "・最新のキャンペーン"}は、公式サイトでご確認ください。
              </p>
              <a
                href={brand.ctaUrl}
                target="_blank"
                rel={brand.isPartner ? "noopener noreferrer sponsored" : "noopener noreferrer"}
                className="inline-block border border-warm-800 bg-warm-800 text-white px-8 py-3 text-xs font-medium uppercase tracking-[0.15em] hover:bg-warm-900 transition-all"
              >
                {brand.ctaLabel ?? "公式サイトを見る"}
              </a>
              {brand.isPartner && (
                <p className="text-[10px] text-warm-400 mt-3">［PR］当サイトはアフィリエイトプログラムを利用しています</p>
              )}
              {/* eslint-disable @next/next/no-img-element */}
              {brand.ctaUrl.includes("T98993.1.K142573W") && (
                <img src="https://t.felmat.net/fmimp/T98993.K142573W.U1357808" width={1} height={1} alt="" style={{ border: "none" }} />
              )}
              {brand.ctaUrl.includes("X10489B.1.E162842X") && (
                <img src="https://t.felmat.net/fmimp/X10489B.E162842X.U1357808" width={1} height={1} alt="" style={{ border: "none" }} />
              )}
              {brand.ctaUrl.includes("F10273P.1.9146255O") && (
                <img src="https://t.felmat.net/fmimp/F10273P.9146255O.U1357808" width={1} height={1} alt="" style={{ border: "none" }} />
              )}
              {brand.ctaUrl.includes("J11817X.1.B1620582") && (
                <img src="https://t.felmat.net/fmimp/J11817X.B1620582.U1357808" width={1} height={1} alt="" style={{ border: "none" }} />
              )}
              {brand.ctaUrl.includes("Z11979O.1.Z164554L") && (
                <img src="https://t.felmat.net/fmimp/Z11979O.Z164554L.U1357808" width={1} height={1} alt="" style={{ border: "none" }} />
              )}
              {brand.ctaUrl.includes("p_id=4728&pc_id=12432&pl_id=62359") && (
                <img src="https://i.moshimo.com/af/i/impression?a_id=5805739&p_id=4728&pc_id=12432&pl_id=62359" width={1} height={1} alt="" style={{ border: "none" }} loading="lazy" />
              )}
              {brand.ctaUrl.includes("pl_id=75683") && (
                <img src="https://i.moshimo.com/af/i/impression?a_id=5718892&p_id=5919&pc_id=16494&pl_id=75683" width={1} height={1} alt="" style={{ border: "none" }} loading="lazy" />
              )}
              {brand.ctaUrl.includes("pl_id=40590") && (
                <img src="https://i.moshimo.com/af/i/impression?a_id=5719218&p_id=3095&pc_id=7153&pl_id=40590" width={1} height={1} alt="" style={{ border: "none" }} loading="lazy" />
              )}
              {brand.ctaUrl.includes("a=O11543l-G384824n") && (
                <img src="https://t.afi-b.com/lead/O11543l/E9887623/G384824n" width={1} height={1} alt="" style={{ border: "none" }} />
              )}
              {brand.ctaUrl.includes("a=T15562j-7505717Y") && (
                <img src="https://t.afi-b.com/lead/T15562j/E9887623/7505717Y" width={1} height={1} alt="" style={{ border: "none" }} />
              )}
              {brand.ctaUrl.includes("a=H16011O-W518522Z") && (
                <img src="https://t.afi-b.com/lead/H16011O/E9887623/W518522Z" width={1} height={1} alt="" style={{ border: "none" }} />
              )}
              {/* eslint-enable @next/next/no-img-element */}
            </section>
          )}

          {/* ブランドの特徴 → ブランドページへ */}
          <section className="mb-10">
            <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">{brandName}とは（{store.areaQuery}で通う前に）</h2>
            {intro.map((p, i) => (
              <p key={i} className="text-sm text-warm-700 leading-relaxed mb-3 font-light">{p}</p>
            ))}
            <div className="flex flex-wrap gap-2 mb-4">
              {(brand?.features ?? []).map((f) => (
                <span key={f} className="text-xs text-warm-700 border border-warm-300 bg-white px-3 py-1.5">{f}</span>
              ))}
            </div>
            <p className="text-sm">
              <Link href={brandHref} className="text-warm-800 underline decoration-warm-300 hover:text-warm-900">
                → {brandName}の料金・評判・全店舗一覧を見る
              </Link>
            </p>
          </section>

          {/* 周辺エリアで比較 */}
          <section className="mb-10">
            <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">{store.areaQuery}周辺のピラティスと比較する</h2>
            <p className="text-sm text-warm-700 leading-relaxed mb-4 font-light">
              {store.areaQuery}周辺には、ほかのマシンピラティス・マットピラティスのスタジオもあります。料金・体験・無料体験の有無は、エリアページでまとめて比較できます。
            </p>
            <div className="flex flex-wrap gap-2">
              <Link href={`/area/${store.areaSlug}/`} className="text-xs text-warm-800 border border-warm-300 bg-white px-3 py-1.5 hover:border-warm-500 transition-colors">
                {store.areaLabel}のピラティスを比較
              </Link>
              {store.nearby.map((n) => (
                <Link key={n.slug} href={`/area/${n.slug}/`} className="text-xs text-warm-600 border border-warm-200 bg-white px-3 py-1.5 hover:border-warm-400 transition-colors">
                  {n.label}
                </Link>
              ))}
            </div>
          </section>

          {/* 同ブランドの他店舗ページ。
              ⚠️ 店舗ページ同士が繋がっておらず、それぞれ被リンク1本で孤立していた（2026-09-15） */}
          {(() => {
            const siblings = siblingStorePages(store.urlSlug, `${brandSlug}-`)
            if (!siblings.length) return null
            return (
              <section className="mb-10">
                <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">
                  同じブランドの他店舗
                </h2>
                <p className="text-sm text-warm-700 leading-relaxed mb-4 font-light">
                  料金プランや体験レッスンの条件は、店舗によって異なる場合があります。ほかの店舗の詳細も掲載しています。
                </p>
                <div className="flex flex-wrap gap-2">
                  {siblings.map((sp) => (
                    <Link
                      key={sp.urlSlug}
                      href={`/brands/${sp.urlSlug}/`}
                      className="text-xs text-warm-700 border border-warm-200 bg-white px-3 py-1.5 hover:border-warm-400 transition-colors"
                    >
                      {sp.storeName}
                    </Link>
                  ))}
                </div>
                <p className="text-[11px] text-warm-400 mt-3">
                  <Link href={`/brands/${brandSlug}/`} className="underline decoration-warm-300">
                    このブランドの全店舗一覧を見る
                  </Link>
                </p>
              </section>
            )
          })()}

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">よくある質問</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="bg-white border border-warm-200 p-5">
                  <p className="text-sm font-medium text-warm-900 mb-2">Q. {f.q}</p>
                  <p className="text-sm text-warm-700 font-light leading-relaxed">A. {f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 関連リンク */}
          <section className="border-t border-warm-200 pt-8">
            <div className="flex flex-wrap gap-3">
              <Link href={brandHref} className="text-xs text-warm-800 underline decoration-warm-300 hover:text-warm-900">{brandName}ブランドガイド</Link>
              <Link href="/brands/" className="text-xs text-warm-800 underline decoration-warm-300 hover:text-warm-900">ブランド一覧</Link>
              <Link href={`/area/${store.areaSlug}/`} className="text-xs text-warm-800 underline decoration-warm-300 hover:text-warm-900">{store.areaLabel}のエリア比較</Link>
              <Link href="/articles/pilates-ryokin-hakusho/" className="text-xs text-warm-800 underline decoration-warm-300 hover:text-warm-900">全国ピラティス料金白書2026</Link>
            </div>
          </section>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localLd) }} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
