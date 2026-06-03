import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import animon from '../src/data/animon.json' with { type: 'json' }
import guides from '../src/data/guides.js'
import items from '../src/data/items.json' with { type: 'json' }
import recipes from '../src/data/recipes.json' with { type: 'json' }
import { seoConfig } from '../src/seo/config.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fullDomain = seoConfig.fullDomain.replace(/\/+$/, '')

const staticRoutes = [
  { path: '/', name: 'home' },
  { path: '/animon', name: 'animon' },
  { path: '/beginner', name: 'beginner' },
  { path: '/starters', name: 'starters' },
  { path: '/affinities', name: 'affinities' },
  { path: '/evolutions', name: 'evolutions' },
  { path: '/guides', name: 'guides' },
  { path: '/map', name: 'map' },
  { path: '/wiki', name: 'wiki' },
  { path: '/wiki/skills', name: 'wiki-skills' },
  { path: '/wiki/items', name: 'wiki-items' },
  { path: '/wiki/bosses', name: 'wiki-bosses' },
  { path: '/wiki/recipes', name: 'wiki-recipes' },
  { path: '/legal/privacy-policy', name: 'legal-privacy' },
  { path: '/legal/terms-of-service', name: 'legal-terms' },
  { path: '/legal/copyright', name: 'legal-copyright' },
  { path: '/legal/about-us', name: 'legal-about' },
  { path: '/legal/contact-us', name: 'legal-contact' },
]

function getPriority(name) {
  return (seoConfig.priorities && seoConfig.priorities[name]) ?? 0.7
}

function getChangefreq(name) {
  return (seoConfig.changefreq && seoConfig.changefreq[name]) ?? 'monthly'
}

/** Sitemap expects YYYY-MM-DD; non-ISO strings fall back to build day */
function coerceSitemapLastmod(raw, fallback) {
  const s = raw == null ? '' : String(raw).trim()
  if (/^\d{4}-\d{2}-\d{2}(?:T[\d:Z.+-]*)?$/.test(s)) return s.slice(0, 10)
  const t = Date.parse(s)
  if (!Number.isNaN(t)) return new Date(t).toISOString().slice(0, 10)
  return fallback
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function urlNode(loc, lastmod, changefreq, priority) {
  const p = String(Math.round((priority ?? 0.7) * 100) / 100)
  return `  <url>
    <loc>${escapeXml(`${fullDomain}${loc}`)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${p}</priority>
  </url>`
}

function generate() {
  const lastmod = new Date().toISOString().split('T')[0]

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

  for (const r of staticRoutes) {
    xml += `\n${urlNode(r.path, lastmod, getChangefreq(r.name), getPriority(r.name))}`
  }

  for (const entry of animon) {
    if (!entry?.slug) continue
    xml += `\n${urlNode(`/animon/${entry.slug}`, lastmod, getChangefreq('animon-detail'), getPriority('animon-detail'))}`
  }

  const guideList = Array.isArray(guides) ? guides : guides.default || []
  for (const g of guideList) {
    if (!g?.addressBar) continue
    const slug = String(g.addressBar).replace(/^\/+|\/+$/g, '')
    const guidePath = `/guides/${slug}`
    const date = coerceSitemapLastmod(g.publishDate, lastmod)
    xml += `\n${urlNode(guidePath, date, getChangefreq('guide-detail'), getPriority('guide-detail'))}`
  }

  for (const recipe of recipes) {
    if (!recipe?.slug) continue
    xml += `\n${urlNode(`/wiki/recipes/${recipe.slug}`, lastmod, getChangefreq('wiki-recipe-detail'), getPriority('wiki-recipe-detail'))}`
  }

  for (const item of items) {
    if (!item?.slug) continue
    xml += `\n${urlNode(`/wiki/items/${item.slug}`, lastmod, getChangefreq('wiki-item-detail'), getPriority('wiki-item-detail'))}`
  }

  xml += '\n</urlset>'

  const publicPath = path.join(__dirname, '../public/sitemap.xml')
  const publicDir = path.dirname(publicPath)
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }
  fs.writeFileSync(publicPath, xml, 'utf8')
  console.log('Sitemap written to public/sitemap.xml')

  const count = (xml.match(/<url>/g) || []).length
  console.log(`Total URLs: ${count} (${fullDomain})`)
}

generate()
