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
  { path: '/sitemap/', priority: '0.3', changefreq: 'monthly', tier: 'static' },
  { path: '/about/', priority: '0.3', changefreq: 'monthly', tier: 'static' },
  { path: '/editors/', priority: '0.3', changefreq: 'monthly', tier: 'static' },
  { path: '/content-policy/', priority: '0.3', changefreq: 'monthly', tier: 'static' },
  { path: '/privacy-policy/', priority: '0.3', changefreq: 'monthly', tier: 'static' },
  { path: '/terms-of-service/', priority: '0.3', changefreq: 'monthly', tier: 'static' },
]

// lastmod per tier — staggered so Google sees a believable update cadence
const TODAY = new Date().toISOString().slice(0, 10) // 2026-05-08
const LASTMOD = {
  top: TODAY,
  t1: TODAY,                  // tier-1 cities + index pages
  t2: '2026-05-05',            // tier-2 stations + main category
  t3: '2026-04-28',            // tier-3 stations
  article: '2026-05-02',
  static: '2026-04-12',
}

// ---- collectors ---------------------------------------------------------------

function listAreas() {
  const dir = path.join(ROOT, 'app', 'area')
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isDirectory() && !e.name.startsWith('_') && !e.name.startsWith('['))
    .map((e) => e.name)
}

function listArticles() {
  const dir = path.join(ROOT, 'content', 'articles')
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    .map((f) => f.replace(/\.(md|mdx)$/, ''))
}

function tierForArea(slug) {
  if (TIER1_CITIES.has(slug)) return { priority: '0.9', changefreq: 'weekly', lastmod: LASTMOD.t1 }
  if (TIER2_AREAS.has(slug)) return { priority: '0.7', changefreq: 'weekly', lastmod: LASTMOD.t2 }
  return { priority: '0.5', changefreq: 'monthly', lastmod: LASTMOD.t3 }
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
    lines.push(urlEntry(`/articles/${slug}/`, LASTMOD.article, 'weekly', '0.7'))
  }

  lines.push('</urlset>', '')
  return lines.join('\n')
}

const xml = build()
fs.writeFileSync(OUT, xml)

const totalUrls = (xml.match(/<url>/g) || []).length
console.log(`✓ Wrote ${OUT}`)
console.log(`  ${totalUrls} URLs`)
console.log(`  Top: 1, Static: ${STATIC_PAGES.length - 1}, Areas: ${listAreas().length}, Articles: ${listArticles().length}`)
