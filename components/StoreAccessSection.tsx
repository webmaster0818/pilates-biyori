import type { ReactNode } from "react";
import { STORE_ACCESS, BRAND_INSTRUCTORS, ACCESS_CHECKED, type Src } from "@/data/store-access-facilities";

// 店舗ページ（/brands/{ブランド}-{店舗}/）の「アクセス・駐車場」「設備」「レッスンと講師」。
// 2026-11-28 競合比較（pilates-kuchikomi-gap-20261127.md ⑤）で店舗ページに無かったブロック。
// ⚠️ 値はすべて data/store-access-facilities.ts（公式で確認した値と出典URL）から。データの無い店舗・項目は出さない。

const H2 = ({ children, id }: { children: ReactNode; id: string }) => (
  <h2 id={id} className="text-xl font-light text-warm-900 border-b border-warm-200 pb-2 mb-4">{children}</h2>
);

const Sources = ({ list }: { list: Src[] }) => {
  const uniq = list.filter((s, i) => list.findIndex((x) => x.url === s.url) === i);
  return (
    <p className="text-[11px] text-warm-500 mt-3 leading-relaxed">
      出典：
      {uniq.map((s, i) => (
        <span key={s.url}>
          {i > 0 ? "／" : ""}
          <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline decoration-warm-300 hover:text-warm-800">{s.label}</a>
        </span>
      ))}
      （公式サイトで{ACCESS_CHECKED}確認）
    </p>
  );
};

const Rows = ({ rows }: { rows: [string, string][] }) => (
  <dl className="bg-white border border-warm-200 divide-y divide-warm-100 text-sm">
    {rows.map(([k, v]) => (
      <div key={k} className="grid grid-cols-1 sm:grid-cols-[11rem_1fr] gap-1 sm:gap-4 px-4 py-2.5">
        <dt className="text-warm-600">{k}</dt>
        <dd className="text-warm-800 leading-relaxed">{v}</dd>
      </div>
    ))}
  </dl>
);

export function StoreAccessSection({ urlSlug, storeName }: { urlSlug: string; storeName: string }) {
  const a = STORE_ACCESS[urlSlug];
  if (!a) return null;
  const instr = a.brand ? BRAND_INSTRUCTORS[a.brand] : undefined;

  const accessRows: [string, string][] = [];
  if (a.stations) accessRows.push(["最寄り駅", a.stations]);
  if (a.accessNote) accessRows.push(["行き方の補足", a.accessNote]);
  if (a.parking) accessRows.push(["駐車場（店舗）", a.parking]);
  if (a.bicycle) accessRows.push(["駐輪場（店舗）", a.bicycle]);
  if (a.facilityParking) accessRows.push(["入居施設の駐車場", a.facilityParking]);

  return (
    <>
      {(accessRows.length > 0 || a.route) && (
        <section className="mb-10" id="store-access">
          <H2 id="store-access-h">{storeName}へのアクセスと駐車場</H2>
          {accessRows.length > 0 && <Rows rows={accessRows} />}
          {a.route && (
            <>
              <h3 className="text-base font-medium text-warm-900 mt-6 mb-3">公式に案内されている道順</h3>
              <ol className="bg-white border border-warm-200 px-4 py-3 text-sm text-warm-800 space-y-2 list-decimal list-inside leading-relaxed">
                {a.route.map((r) => <li key={r}>{r}</li>)}
              </ol>
            </>
          )}
          {!a.parking && !a.facilityParking && (
            <p className="text-xs text-warm-500 mt-3 leading-relaxed">駐車場は公式の店舗ページに記載がありません。車で行く場合は、事前に店舗へ確認してください。</p>
          )}
          <Sources list={a.sources} />
        </section>
      )}

      {(a.facilities || a.lesson) && (
        <section className="mb-10" id="store-facilities">
          <H2 id="store-facilities-h">{storeName}の設備とレッスン</H2>
          {a.lesson && a.lesson.length > 0 && (
            <>
              <h3 className="text-base font-medium text-warm-900 mb-3">レッスン</h3>
              <Rows rows={a.lesson} />
            </>
          )}
          {a.facilities && a.facilities.length > 0 && (
            <>
              <h3 className="text-base font-medium text-warm-900 mt-6 mb-3">設備・レンタル</h3>
              <Rows rows={a.facilities} />
              <p className="text-xs text-warm-500 mt-2 leading-relaxed">公式に記載のある設備だけを載せています。ここに無い設備は、有無を店舗へ確認してください。</p>
            </>
          )}
          {instr && (
            <>
              <h3 className="text-base font-medium text-warm-900 mt-6 mb-3">インストラクターの研修・資格（ブランド共通）</h3>
              <Rows rows={instr.rows} />
            </>
          )}
          <Sources list={[...a.sources, ...(instr?.sources ?? [])]} />
        </section>
      )}
    </>
  );
}
