#!/usr/bin/env node
/**
 * sitemap.xml generator for biyori-pilates.com
 *
 * - Enumerates real area dirs (app/area/*) and articles (content/articles/*.md)
 * - Skips dynamic-route placeholders ([slug]) and the test page
 * - Applies hierarchical priority (top > tier-1 cities > tier-2 stations > tier-3 stations)
 * - Spreads lastmod across multiple dates so Google doesn't see one big batch
 *
 * Run: node scripts/generate-sitemap.mjs
 */

import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, '..')
const BASE = 'https://biyori-pilates.com'
const OUT = path.join(ROOT, 'public', 'sitemap.xml')

// ---- priority / lastmod tiers --------------------------------------------------

const TIER1_CITIES = new Set([
  'tokyo',
  'osaka',
  'yokohama',
  'nagoya',
  'sapporo',
  'kobe',
  'kyoto',
  'fukuoka',
  'sendai',
  'hiroshima',
  'omiya',
  'chiba',
  'kawasaki',
  'kitakyushu',
])

const TIER2_AREAS = new Set([
  // Tokyo major stations
  'shinjuku', 'shibuya', 'ikebukuro', 'ginza', 'tokyo-station', 'shinagawa',
  'roppongi', 'akasaka', 'omotesando', 'harajuku', 'ueno', 'akihabara',
  'kichijoji', 'nakameguro', 'ebisu', 'jiyugaoka', 'shimokitazawa', 'daikanyama',
  // Osaka major stations
  'umeda', 'namba', 'shinsaibashi', 'tennoji', 'shin-osaka', 'kyobashi-osaka',
  // Yokohama
  'yokohama', 'kannai', 'motomachi', 'musashikosugi',
  // Kyoto
  'kyoto-station', 'shijo-kawaramachi', 'kyoto-shiyakusho-mae',
  // Kobe / Nagoya / Fukuoka
  'sannomiya', 'nagoya-station', 'sakae', 'hakata', 'tenjin', 'yakuin',
  // Other major stations
  'kawagoe', 'kashiwa', 'tachikawa',
])

// Areas that don't fit tier 1 or tier 2 default to tier 3 (priority 0.5).

const STATIC_PAGES = [
  { path: '/', priority: '1.0', changefreq: 'daily', tier: 'top' },
  { path: '/area/', priority: '0.7', changefreq: 'weekly', tier: 't1' },
  { path: '/articles/', priority: '0.7', changefreq: 'weekly', tier: 't1' },
  { path: '/studios/', priority: '0.5', changefreq: 'weekly', tier: 't2' },
  { path: '/basics/', priority: '0.5', changefreq: 'weekly', tier: 't2' },
  { path: '/benefits/', priority: '0.5', changefreq: 'weekly', tier: 't2' },
  { path: '/ai-soudan/', priority: '0.5', changefreq: 'monthly', tier: 'static' },
  { path: '/widget/', priority: '0.3', changefreq: 'monthly', tier: 'static' },
  { path: '/sitemap/', priority: '0.3', changefreq: 'monthly', tier: 'static' },
  { path: '/about/', priority: '0.3', changefreq: 'monthly', tier: 'static' },
  { path: '/contact/', priority: '0.3', changefreq: 'monthly', tier: 'static' },
  { path: '/editors/', priority: '0.3', changefreq: 'monthly', tier: 'static' },
  { path: '/content-policy/', priority: '0.3', changefreq: 'monthly', tier: 'static' },
  { path: '/privacy-policy/', priority: '0.3', changefreq: 'monthly', tier: 'static' },
  { path: '/terms-of-service/', priority: '0.3', changefreq: 'monthly', tier: 'static' },
]

// lastmod per tier — staggered so Google sees a believable update cadence
const TODAY = new Date().toISOString().slice(0, 10) // 2026-05-08
const LASTMOD = {
  top: TODAY,
  t1: TODAY,                   // tier-1 cities + index pages
  t2: '2026-06-07',            // tier-2 stations + main category（フェードイン改修で更新）
  t3: '2026-06-07',            // tier-3 stations（同上）
  article: '2026-06-06',       // 全57記事を一次情報・図解・独自データで強化した日
  static: '2026-04-12',
}

// ---- lastmod = 実際に中身が変わった日（git の最終コミット日）---------------------
// ビルド日（TODAY）を全ページに付けると毎日「全部更新」になり、Google が lastmod を信用しなくなる。
// 2026-10-13 成長ルーチン: 10/9 に直したブランドページが 10/13 時点でも修正前のクロールのまま
// （the-silk 10/4・bdc 9/24 等）だったため、gakki・peatbid・takushoku（10/12）と同じ方式に変更。
const gitCache = new Map()
function gitDate(...paths) {
  const key = paths.join('\0')
  if (gitCache.has(key)) return gitCache.get(key)
  let d = ''
  try {
    // 未コミットの変更があるなら今日（ビルドに含まれる＝今日変わった）
    const dirty = execFileSync('git', ['status', '--porcelain', '--', ...paths], { cwd: ROOT, encoding: 'utf8' }).trim()
    d = dirty ? TODAY : execFileSync('git', ['log', '-1', '--format=%cs', '--', ...paths], { cwd: ROOT, encoding: 'utf8' }).trim()
  } catch {}
  gitCache.set(key, d || TODAY)
  return d || TODAY
}
const maxDate = (...ds) => ds.filter(Boolean).sort().at(-1)

// ブランドページ（app/brands/[slug]）が読むテンプレートとデータ
const BRAND_DEPS = [
  'app/brands/[slug]/page.tsx', 'lib/storePages.ts', 'data/area-studios.ts',
  'data/brands-aggregate.json', 'data/brand-voices.json',
  'components/BrandReviewDigest.tsx', 'components/BrandReviewThemes.tsx',
]
// data/brands.ts のうち、そのブランドのブロック（{ … slug: 'x' … }）が最後に変わった日
const BRANDS_SRC_LINES = fs.readFileSync(path.join(ROOT, 'data', 'brands.ts'), 'utf-8').split('\n')
function brandBlockDate(slug) {
  const i = BRANDS_SRC_LINES.findIndex((l) => l === `    slug: '${slug}',`)
  if (i < 0) return TODAY
  let s = i
  while (s > 0 && !/^  \{/.test(BRANDS_SRC_LINES[s])) s--
  let e = i
  while (e < BRANDS_SRC_LINES.length - 1 && !/^  \},?$/.test(BRANDS_SRC_LINES[e])) e++
  const dirty = execFileSync('git', ['status', '--porcelain', '--', 'data/brands.ts'], { cwd: ROOT, encoding: 'utf8' }).trim()
  if (dirty) return TODAY
  try {
    return execFileSync('git', ['log', '-1', '--format=%cs', '--no-patch', '-L', `${s + 1},${e + 1}:data/brands.ts`], { cwd: ROOT, encoding: 'utf8' }).trim() || TODAY
  } catch { return TODAY }
}

const CANONICAL_ELSEWHERE = new Set(['tokyo'])

// ---- collectors ---------------------------------------------------------------

function listAreas() {
  const dir = path.join(ROOT, 'app', 'area')
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isDirectory() && !e.name.startsWith('_') && !e.name.startsWith('['))
    .map((e) => e.name)
    // canonical が別ページを指すエリアは載せない（/area/tokyo/ → /area/tokyo-station/）
    .filter((slug) => !CANONICAL_ELSEWHERE.has(slug))
}

function listArticles() {
  const dir = path.join(ROOT, 'content', 'articles')
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    .map((f) => f.replace(/\.(md|mdx)$/, ''))
}

function listBrands() {
  const src = fs.readFileSync(path.join(ROOT, 'data', 'brands.ts'), 'utf-8')
  return [...src.matchAll(/^    slug: '([a-z0-9-]+)',$/gm)].map((m) => m[1])
}

// ---- エリアページの lastmod = 表示内容が実際に変わった最後のコミット日 -----------------
// 2026-10-15: 以前は tier1 だけ git 日付（しかも area-studios.ts 全体＝1エリア直すと全 tier1 が今日）、
// tier2/3 は固定 2026-06-07 だった（10/14 に店舗を外した朝霞・海老名・志木・四ツ谷も 6/7 のまま）。
// 全エリアで「そのページの生成元」＝ app/area/<slug>/page.tsx と、ページが読む
// area-studios.ts の該当エリアのブロックだけを見る。さらに、変更行から URL と日付表記を消して
// 比べ、差が残らないコミット（「更新日」や title の月だけの一括更新・計測リンク差替・ドメイン置換）は数えない。
// 共通コンポーネント（StudioCard 等）の変更は全ページ一律になるので数えない。
const GIT_MAXBUF = 512 * 1024 * 1024
const normLine = (s) => {
  const n = s
    // title/h1 の鮮度ラベル（【2026最新】【2026年7月最新】等）の付け替えは中身の変化ではない
    .replace(/【[^】]*最新[^】]*】/g, '')
    .replace(/https?:\/\/[^\s'"`)<>]+/g, 'URL')
    .replace(/href=\{?["'`][^"'`]*["'`]\}?/g, 'href') // リンク先だけの変更（末尾スラッシュ統一等）
    .replace(/\d{4}年\d{1,2}月(\d{1,2}日)?/g, 'DATE')
    .replace(/\d{4}[-/]\d{1,2}[-/]\d{1,2}/g, 'DATE')
    .replace(/\s+/g, ' ')
    .trim()
  // リンク先だけの行（officialUrl を足す・外す）は表示に出ない（ボタンは officialUrl が無くても出る）
  if (/^"?(officialUrl|mapUrl|ctaUrl)"?: ?['"]URL['"],?$/.test(n)) return ''
  return n
}
// git log -p（または -L）の出力から、表示に効く差分があった最新コミットの日付を返す
function lastSubstantiveDate(gitArgs) {
  let out = ''
  try {
    out = execFileSync('git', ['log', '--first-parent', '--diff-merges=first-parent', '--no-ext-diff', '--format=%x00C %cs', ...gitArgs], { cwd: ROOT, encoding: 'utf8', maxBuffer: GIT_MAXBUF })
  } catch { return '' }
  for (const chunk of out.split('\0C ').slice(1)) {
    const date = chunk.slice(0, 10)
    const minus = new Map()
    const plus = []
    let inHunk = false
    for (const l of chunk.split('\n')) {
      if (l.startsWith('diff --git')) { inHunk = false; continue }
      if (l.startsWith('@@')) { inHunk = true; continue }
      if (!inHunk) continue
      if (l[0] !== '+' && l[0] !== '-') continue
      const n = normLine(l.slice(1))
      if (!n) continue
      if (l[0] === '-') minus.set(n, (minus.get(n) || 0) + 1)
      else plus.push(n)
    }
    let substantive = false
    for (const n of plus) {
      const c = minus.get(n) || 0
      if (c > 0) minus.set(n, c - 1)
      else { substantive = true; break }
    }
    if (!substantive) for (const c of minus.values()) if (c > 0) { substantive = true; break }
    if (substantive) return date
  }
  return ''
}
const isDirty = (p) => execFileSync('git', ['status', '--porcelain', '--', p], { cwd: ROOT, encoding: 'utf8' }).trim() !== ''

const AREA_DATA = 'data/area-studios.ts'
const AREA_DATA_LINES = fs.readFileSync(path.join(ROOT, AREA_DATA), 'utf-8').split('\n')
const AREA_DATA_DIRTY = isDirty(AREA_DATA)
const areaBlockCache = new Map()
function areaBlockDate(key) {
  if (areaBlockCache.has(key)) return areaBlockCache.get(key)
  let d = ''
  const s = AREA_DATA_LINES.findIndex((l) => l === `  '${key}': {` || l === `  ${key}: {`)
  if (s >= 0) {
    let e = s + 1
    while (e < AREA_DATA_LINES.length - 1 && !/^  \},?$/.test(AREA_DATA_LINES[e])) e++
    // 未コミットのデータはどのブロックか切り分けない＝ビルド前にコミットすること
    d = AREA_DATA_DIRTY ? TODAY : lastSubstantiveDate(['-L', `${s + 1},${e + 1}:${AREA_DATA}`])
  }
  areaBlockCache.set(key, d)
  return d
}
const AREA_LASTMOD_REPORT = process.env.SITEMAP_REPORT ? [] : null
function areaContentDate(slug) {
  const page = `app/area/${slug}/page.tsx`
  if (!fs.existsSync(path.join(ROOT, page))) return LASTMOD.t3
  const pageDate = isDirty(page) ? TODAY : lastSubstantiveDate(['-p', '--', page])
  const src = fs.readFileSync(path.join(ROOT, page), 'utf-8')
  const keys = [...new Set([...src.matchAll(/areaStudios\[['"]([a-z0-9-]+)['"]\]/g)].map((m) => m[1]))]
  const dataDate = maxDate('', ...keys.map(areaBlockDate)) || ''
  const d = maxDate(pageDate, dataDate) || LASTMOD.t3
  if (AREA_LASTMOD_REPORT) AREA_LASTMOD_REPORT.push([slug, d, pageDate, dataDate])
  return d
}

function tierForArea(slug) {
  const lastmod = areaContentDate(slug)
  if (TIER1_CITIES.has(slug)) return { priority: '0.9', changefreq: 'weekly', lastmod }
  if (TIER2_AREAS.has(slug)) return { priority: '0.7', changefreq: 'weekly', lastmod }
  return { priority: '0.5', changefreq: 'monthly', lastmod }
}

// ---- emit ---------------------------------------------------------------------

function urlEntry(loc, lastmod, changefreq, priority) {
  return `  <url><loc>${BASE}${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`
}

function build() {
  const lines = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']

  // Static pages (top, indexes, policy)
  for (const p of STATIC_PAGES) {
    lines.push(urlEntry(p.path, LASTMOD[p.tier], p.changefreq, p.priority))
  }

  // Areas
  const areas = listAreas().sort()
  for (const slug of areas) {
    const t = tierForArea(slug)
    lines.push(urlEntry(`/area/${slug}/`, t.lastmod, t.changefreq, t.priority))
  }

  // Articles (real ones — no [slug] placeholder)
  const articles = listArticles().sort()
  for (const slug of articles) {
    const file = ['md', 'mdx'].map((x) => `content/articles/${slug}.${x}`).find((f) => fs.existsSync(path.join(ROOT, f)))
    lines.push(urlEntry(`/articles/${slug}/`, gitDate(file, 'app/articles/[slug]/page.tsx'), 'weekly', '0.7'))
  }

  // Brands (data/brands.ts と同期)
  const brandDeps = gitDate(...BRAND_DEPS)
  lines.push(urlEntry('/brands/', gitDate('app/brands/page.tsx', 'data/brands.ts'), 'weekly', '0.7'))
  for (const slug of listBrands()) {
    lines.push(urlEntry(`/brands/${slug}/`, maxDate(brandBlockDate(slug), brandDeps), 'weekly', '0.7'))
  }
  // ブランド×エリア受け皿（P0①/P2・data/brands.ts外の静的ページ）
  for (const slug of [
    'bdc-futakotamagawa', 'bdc-ebisu', 'bdc-omotesando',
    'kasane-hirakata', 'kasane-hamamatsu', 'kasane-kinshicho', 'kasane-okinawa-toyosaki', 'kasane-kawaguchi-maekawa',
    'club-pilates-nishinomiyakitaguchi', 'club-pilates-daikanyama', 'club-pilates-nakano-sakaue',
    'club-pilates-toyosu', 'club-pilates-tamachi', 'club-pilates-kagurazaka',
  ]) {
    lines.push(urlEntry(`/brands/${slug}/`, gitDate(`app/brands/${slug}`), 'weekly', '0.6'))
  }
  // 店舗別ページ（データファイルから動的抽出＝追加店舗は自動でsitemap収録）
  for (const f of ['g1-stores.ts', 'the-silk-stores.ts']) {
    const src = fs.readFileSync(new URL(`../data/${f}`, import.meta.url), 'utf8')
    for (const m of src.matchAll(/"?urlSlug"?:\s*"([a-z0-9-]+)"/g)) {
      lines.push(urlEntry(`/brands/${m[1]}/`, gitDate(`data/${f}`, 'lib/storePages.ts', 'app/brands/[slug]/page.tsx'), 'weekly', '0.6'))
    }
  }

  lines.push('</urlset>', '')
  return lines.join('\n')
}

const xml = build()
fs.writeFileSync(OUT, xml)

const totalUrls = (xml.match(/<url>/g) || []).length
console.log(`✓ Wrote ${OUT}`)
console.log(`  ${totalUrls} URLs`)
if (AREA_LASTMOD_REPORT) {
  fs.writeFileSync(process.env.SITEMAP_REPORT, AREA_LASTMOD_REPORT.map((r) => r.join('\t')).join('\n') + '\n')
}
console.log(`  Top: 1, Static: ${STATIC_PAGES.length - 1}, Areas: ${listAreas().length}, Articles: ${listArticles().length}`)
