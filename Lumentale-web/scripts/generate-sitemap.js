import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import animon from '../src/data/animon.json' with { type: 'json' }
import guides from '../src/data/guides.js'
import items from '../src/data/items.json' with { type: 'json' }
import recipes from '../src/data/recipes.json' with { type: 'json' }
import summary from '../src/data/summary.json' with { type: 'json' }
import { seoConfig } from '../src/seo/config.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fullDomain = seoConfig.fullDomain.replace(/\/+$/, '')

const staticRoutes = [
  { path: '/', name: 'home', contentFile: 'src/views/HomeView.vue' },
  { path: '/animon', name: 'animon', contentFile: 'src/views/AnimonView.vue' },
  { path: '/beginner', name: 'beginner', contentFile: 'src/views/BeginnerGuideView.vue' },
  { path: '/starters', name: 'starters', contentFile: 'src/views/StartersView.vue' },
  { path: '/affinities', name: 'affinities', contentFile: 'src/views/AffinitiesView.vue' },
  { path: '/evolutions', name: 'evolutions', contentFile: 'src/views/EvolutionsView.vue' },
  { path: '/guides', name: 'guides', contentFile: 'src/data/guides.js' },
  { path: '/map', name: 'map', contentFile: 'src/views/MapView.vue' },
  { path: '/wiki', name: 'wiki', contentFile: 'src/views/WikiIndexView.vue' },
  { path: '/wiki/skills', name: 'wiki-skills', contentFile: 'src/views/WikiSkillsView.vue' },
  { path: '/wiki/items', name: 'wiki-items', contentFile: 'src/views/WikiItemsView.vue' },
  { path: '/wiki/bosses', name: 'wiki-bosses', contentFile: 'src/views/WikiBossesView.vue' },
  { path: '/search', name: 'search', contentFile: 'src/views/SearchView.vue' },
  { path: '/wiki/cooking', name: 'wiki-cooking', contentFile: 'src/views/WikiCookingView.vue' },
  { path: '/wiki/crafting', name: 'wiki-crafting', contentFile: 'src/views/WikiCraftingView.vue' },
  { path: '/legal/privacy-policy', name: 'legal-privacy', contentFile: 'src/views/legal/PrivacyPolicyView.vue' },
  { path: '/legal/terms-of-service', name: 'legal-terms', contentFile: 'src/views/legal/TermsOfServiceView.vue' },
  { path: '/legal/copyright', name: 'legal-copyright', contentFile: 'src/views/legal/CopyrightView.vue' },
  { path: '/legal/about-us', name: 'legal-about', contentFile: 'src/views/legal/AboutUsView.vue' },
  { path: '/legal/contact-us', name: 'legal-contact', contentFile: 'src/views/legal/ContactUsView.vue' },
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

function normalizePathKey(loc) {
  if (loc === '/') return '/'
  return `/${String(loc).replace(/^\/+|\/+$/g, '')}`
}

function pathKeyFromLoc(loc) {
  try {
    return normalizePathKey(new URL(loc).pathname)
  } catch {
    return normalizePathKey(loc)
  }
}

/** Read lastmod dates from the previous sitemap for merge/compare */
function loadExistingLastmods(filePath) {
  const map = new Map()
  if (!fs.existsSync(filePath)) return map

  const content = fs.readFileSync(filePath, 'utf8')
  for (const match of content.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)) {
    const key = pathKeyFromLoc(match[1])
    const date = coerceSitemapLastmod(match[2], '')
    if (date) map.set(key, date)
  }
  return map
}

function fileLastmod(relativePath, fallback) {
  const filePath = path.join(__dirname, '..', relativePath)
  if (!fs.existsSync(filePath)) return fallback
  return coerceSitemapLastmod(fs.statSync(filePath).mtime, fallback)
}

function generate() {
  const buildDay = new Date().toISOString().split('T')[0]
  const publicPath = path.join(__dirname, '../public/sitemap.xml')
  const existingLastmods = loadExistingLastmods(publicPath)
  const wikiDataDay = coerceSitemapLastmod(summary.generatedAt, buildDay)
  const seen = new Set()
  let newUrlCount = 0
  let bumpedUrlCount = 0

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

  function resolveLastmod(key, contentDate) {
    const content = coerceSitemapLastmod(contentDate, buildDay)
    const existing = existingLastmods.get(key)
    if (!existing) {
      newUrlCount += 1
      return content
    }
    if (content > existing) bumpedUrlCount += 1
    return content > existing ? content : existing
  }

  function appendUrl(loc, contentDate, changefreq, priority) {
    const key = normalizePathKey(loc)
    if (seen.has(key)) return
    seen.add(key)

    const lastmodValue = resolveLastmod(key, contentDate)
    xml += `\n${urlNode(key, lastmodValue, changefreq, priority)}`
  }

  for (const r of staticRoutes) {
    const contentDate = r.contentFile ? fileLastmod(r.contentFile, buildDay) : buildDay
    appendUrl(r.path, contentDate, getChangefreq(r.name), getPriority(r.name))
  }

  for (const entry of animon) {
    if (!entry?.slug) continue
    const contentDate = coerceSitemapLastmod(entry.lastUpdated, wikiDataDay)
    appendUrl(`/animon/${entry.slug}`, contentDate, getChangefreq('animon-detail'), getPriority('animon-detail'))
  }

  const guideList = Array.isArray(guides) ? guides : guides.default || []
  for (const g of guideList) {
    if (!g?.addressBar) continue
    const slug = String(g.addressBar).replace(/^\/+|\/+$/g, '')
    const guidePath = `/guides/${slug}`
    const contentDate = coerceSitemapLastmod(g.updatedDate || g.publishDate, buildDay)
    appendUrl(guidePath, contentDate, getChangefreq('guide-detail'), getPriority('guide-detail'))
  }

  for (const recipe of recipes) {
    if (!recipe?.slug) continue
    appendUrl(
      `/wiki/recipes/${recipe.slug}`,
      wikiDataDay,
      getChangefreq('wiki-recipe-detail'),
      getPriority('wiki-recipe-detail'),
    )
  }

  for (const item of items) {
    if (!item?.slug) continue
    appendUrl(
      `/wiki/items/${item.slug}`,
      wikiDataDay,
      getChangefreq('wiki-item-detail'),
      getPriority('wiki-item-detail'),
    )
  }

  xml += '\n</urlset>'
  const publicDir = path.dirname(publicPath)
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }
  fs.writeFileSync(publicPath, xml, 'utf8')
  console.log('Sitemap written to public/sitemap.xml')

  const count = (xml.match(/<url>/g) || []).length
  const unchanged = count - newUrlCount - bumpedUrlCount
  console.log(`Total URLs: ${count} (${fullDomain})`)
  console.log(
    `New: ${newUrlCount}, content bumped: ${bumpedUrlCount}, unchanged: ${unchanged}`,
  )
}

generate()
