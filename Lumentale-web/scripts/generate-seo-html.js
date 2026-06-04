import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import animon from '../src/data/animon.json' with { type: 'json' }
import guides from '../src/data/guides.js'
import items from '../src/data/items.json' with { type: 'json' }
import recipes from '../src/data/recipes.json' with { type: 'json' }
import { seoConfig } from '../src/seo/config.js'
import { fitDescription, fitTitle, formatSeoType } from '../src/seo/utils.js'
import { animonDetailSeo } from '../src/seo/animonSeo.js'
import { recipeDetailSeo } from '../src/seo/recipeSeo.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.join(__dirname, '..')
const distDir = path.join(projectRoot, 'dist')
const templatePath = path.join(distDir, 'index.html')
const siteUrl = seoConfig.fullDomain.replace(/\/+$/, '')
const defaultImage = absoluteUrl(seoConfig.defaultOgImage)

const staticRoutes = [
  {
    path: '/',
    title: seoConfig.defaults.title,
    description: seoConfig.defaults.description,
    keywords: seoConfig.defaults.keywords,
  },
  {
    path: '/animon',
    title: 'LumenTale | Animon Dex, Stats, BST & Catch Rates',
    description:
      'Browse every LumenTale Animon in Memories of Trey - filter by element, emotional affinity, rarity, BST, and catch rate before you spend levels or evolution items on your team.',
    keywords:
      'LumenTale Animon, Animon dex, Memories of Trey Animon, LumenTale stats, Talea species',
  },
  {
    path: '/beginner',
    title: 'LumenTale | Beginner Guide, Talea & First Hours',
    description:
      'LumenTale beginner guide for Memories of Trey - pick a starter, learn 4v4 SP combat, emotional affinities, wild capture, and early team tips for your first hours exploring Talea.',
    keywords:
      'LumenTale beginner guide, Memories of Trey tips, LumenTale starter, Talea guide, first hours',
  },
  {
    path: '/starters',
    title: 'LumenTale | Starter Guide, Compare 5 Partners',
    description:
      'Compare all five LumenTale starter Animon in Memories of Trey - element type, emotional affinity, BST, catch rate, and level-40 evolution branches before you lock in your opening partner.',
    keywords:
      'LumenTale starter, best starter LumenTale, Memories of Trey starter, Kickstarter Animon, Talea',
  },
  {
    path: '/affinities',
    title: 'LumenTale | Type Chart, 13 Elements & Affinities',
    description:
      'LumenTale type chart for Memories of Trey - all 13 element types and 5 emotional affinities, combat bonuses, when to trigger affinities, and team coverage tips for 4v4 battles.',
    keywords:
      'LumenTale type chart, LumenTale affinities, Memories of Trey elements, emotional affinities, Talea combat',
  },
  {
    path: '/evolutions',
    title: 'LumenTale | Evolution Guide, Items & Conditions',
    description:
      'LumenTale evolution guide for Memories of Trey - level, item, weather, trait, and special party requirements for every Animon line we track, including starter branches at level 40.',
    keywords:
      'LumenTale evolution, evolution guide, Memories of Trey evolve, LumenTale items, Talea',
  },
  {
    path: '/guides',
    title: 'LumenTale | Guides, Walkthroughs & Talea Tips',
    description:
      'LumenTale guides for Memories of Trey - beginner routes, combat advice, exploration walkthroughs, and collection strategies to help you progress through Talea without missing key unlocks.',
    keywords:
      'LumenTale guides, Memories of Trey walkthrough, LumenTale tips, Talea guide, lumentale.org',
  },
  {
    path: '/map',
    title: 'LumenTale | Talea Map, Regions & Locations',
    description:
      'LumenTale Talea map for Memories of Trey - region overview with wild encounters, item pickups, shops, and route notes added as players confirm locations on the overworld.',
    keywords:
      'LumenTale map, Talea map, Memories of Trey locations, LumenTale world map, Talea regions',
  },
  {
    path: '/wiki',
    title: 'LumenTale Wiki | Skills, Items, Cooking & Bosses',
    description:
      'LumenTale wiki hub for Memories of Trey - look up skills, items, Fountain recipes, boss levels, and links to the Animon dex plus walkthroughs for your current chapter in Talea.',
    keywords:
      'LumenTale wiki, Memories of Trey, LumenTale skills, LumenTale items, LumenTale bosses',
  },
  {
    path: '/wiki/skills',
    title: 'LumenTale Skills List | Moves, SP Costs & Power',
    description:
      'Every LumenTale move in Memories of Trey - power, SP cost, accuracy, cooldown, category, and target type so you can plan STAB coverage and SP rotation for 4v4 team fights.',
    keywords:
      'LumenTale skills, Memories of Trey moves, LumenTale SP cost, LumenTale moves list, Talea combat',
  },
  {
    path: '/wiki/items',
    title: 'LumenTale Items List | Bilias, Prices & Crafting',
    description:
      'LumenTale items in Memories of Trey - Bilias, medicines, ingredients, and materials with shop prices, stack sizes, effects, and links to recipes that craft or consume each item.',
    keywords:
      'LumenTale items, Memories of Trey items, LumenTale Bilias, crafting materials, Talea items',
  },
  {
    path: '/wiki/bosses',
    title: 'LumenTale Boss Guide | Levels, HP Bars & Teams',
    description:
      'LumenTale boss guide for Memories of Trey - encounter levels, HP bars, typings, affinities, and team ideas so you know what you face before spending medicine on a long fight.',
    keywords:
      'LumenTale boss, Memories of Trey bosses, LumenTale boss guide, boss stats, Talea bosses',
  },
  {
    path: '/search',
    title: 'LumenTale | Search Wiki, Animon Dex & Items',
    description:
      'Search LumenTale: Memories of Trey - find Animon, skills, items, Fountain recipes, bosses, and guide pages across the wiki and dex from one search box.',
    keywords:
      'LumenTale search, Memories of Trey wiki, LumenTale Animon search, LumenTale items, Talea lookup',
  },
  {
    path: '/wiki/cooking',
    title: 'LumenTale Wiki | Fountain Cooking Recipes',
    description:
      'LumenTale Wiki cooking recipes for Memories of Trey - every Fountain dish with ingredient amounts, success rates, and links to materials on the items list.',
    keywords:
      'LumenTale cooking, Memories of Trey recipes, Fountain cooking, LumenTale Wiki food, Talea dishes',
  },
  {
    path: '/wiki/crafting',
    title: 'LumenTale Wiki | Workshop Crafting Recipes',
    description:
      'LumenTale Wiki crafting recipes for Memories of Trey - workshop Bilia upgrades and tools with materials, success rates, and item detail links.',
    keywords:
      'LumenTale crafting, Memories of Trey workshop, Bilia crafting, LumenTale Wiki recipes, Talea upgrades',
  },
  {
    path: '/legal/privacy-policy',
    title: 'LumenTale Privacy Policy | lumentale.org',
    description:
      'Privacy Policy for lumentale.org, the unofficial LumenTale: Memories of Trey community site - how we collect, use, store, and protect information when you browse our guides and dex pages.',
    keywords:
      'LumenTale privacy policy, lumentale.org privacy, Memories of Trey, LumenTale wiki legal',
  },
  {
    path: '/legal/terms-of-service',
    title: 'LumenTale Terms of Service | lumentale.org',
    description:
      'Terms of Service for lumentale.org - rules for using this unofficial LumenTale: Memories of Trey community site, including guides, Animon dex pages, items, recipes, and user content.',
    keywords:
      'LumenTale terms of service, lumentale.org terms, Memories of Trey, LumenTale wiki legal',
  },
  {
    path: '/legal/copyright',
    title: 'LumenTale Copyright Notice | lumentale.org',
    description:
      'Copyright notice for lumentale.org - how LumenTale: Memories of Trey trademarks, game assets, and original guide content on this unofficial community site are handled and credited.',
    keywords:
      'LumenTale copyright, lumentale.org legal, Memories of Trey trademarks, fan site disclaimer',
  },
  {
    path: '/legal/about-us',
    title: 'LumenTale About Us | Community Guides Site',
    description:
      'About lumentale.org - who runs this unofficial LumenTale: Memories of Trey guides site, how we verify Animon and item pages in-game, and how to report mistakes or suggest guide updates.',
    keywords:
      'LumenTale about, lumentale.org, Memories of Trey community, LumenTale wiki team',
  },
  {
    path: '/legal/contact-us',
    title: 'LumenTale Contact Us | lumentale.org Support',
    description:
      'Contact lumentale.org for LumenTale: Memories of Trey stat corrections, guide suggestions, copyright notices, and feedback about this unofficial community guides and dex site.',
    keywords:
      'LumenTale contact, lumentale.org email, Memories of Trey feedback, LumenTale wiki support',
  },
]

function absoluteUrl(pathOrUrl) {
  if (!pathOrUrl) return ''
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl
  return `${siteUrl}/${String(pathOrUrl).replace(/^\/+/, '')}`
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function canonicalFor(routePath) {
  const pathPart = routePath === '/' ? '/' : `/${String(routePath).replace(/^\/+|\/+$/g, '')}`
  return `${siteUrl}${pathPart}`
}

function webPageJsonLd(route) {
  const canonicalUrl = canonicalFor(route.path)
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: seoConfig.siteName,
        url: siteUrl,
        inLanguage: 'en',
        publisher: {
          '@type': 'Organization',
          name: seoConfig.siteName,
          url: siteUrl,
          logo: {
            '@type': 'ImageObject',
            url: defaultImage,
          },
        },
      },
      {
        '@type': route.ogType === 'article' ? 'Article' : 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: route.title,
        headline: route.ogType === 'article' ? route.title : undefined,
        description: route.description,
        inLanguage: 'en',
        isPartOf: { '@id': `${siteUrl}/#website` },
      },
    ],
  }
}

function setTag(html, pattern, replacement) {
  if (pattern.test(html)) return html.replace(pattern, replacement)
  return html
}

function injectMeta(template, route) {
  const title = escapeHtml(route.title || seoConfig.defaults.title)
  const description = escapeHtml(route.description || seoConfig.defaults.description)
  const keywords = escapeHtml(route.keywords || seoConfig.defaults.keywords)
  const canonical = canonicalFor(route.path)
  const ogType = route.ogType || 'website'
  const jsonLd = JSON.stringify(webPageJsonLd(route), null, 8)

  let html = template
  html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
  html = setTag(
    html,
    /<meta\s+name="description"[\s\S]*?\/>/,
    `<meta name="description" content="${description}" />`,
  )
  html = setTag(
    html,
    /<meta\s+name="keywords"[\s\S]*?\/>/,
    `<meta name="keywords" content="${keywords}" />`,
  )
  html = setTag(html, /<link\s+rel="canonical"[\s\S]*?\/>/, `<link rel="canonical" href="${canonical}" />`)
  html = setTag(
    html,
    /<meta\s+property="og:type"[\s\S]*?\/>/,
    `<meta property="og:type" content="${ogType}" />`,
  )
  html = setTag(
    html,
    /<meta\s+property="og:url"[\s\S]*?\/>/,
    `<meta property="og:url" content="${canonical}" />`,
  )
  html = setTag(
    html,
    /<meta\s+property="og:title"[\s\S]*?\/>/,
    `<meta property="og:title" content="${title}" />`,
  )
  html = setTag(
    html,
    /<meta\s+property="og:description"[\s\S]*?\/>/,
    `<meta property="og:description" content="${description}" />`,
  )
  html = setTag(
    html,
    /<meta\s+name="twitter:title"[\s\S]*?\/>/,
    `<meta name="twitter:title" content="${title}" />`,
  )
  html = setTag(
    html,
    /<meta\s+name="twitter:description"[\s\S]*?\/>/,
    `<meta name="twitter:description" content="${description}" />`,
  )
  html = setTag(
    html,
    /<script\s+type="application\/ld\+json"\s+data-seo-ld="1">[\s\S]*?<\/script>/,
    `<script type="application/ld+json" data-seo-ld="1">\n${jsonLd}\n    </script>`,
  )
  return html
}

function itemDescription(item) {
  const typeLabel = formatSeoType(item.type)
  const desc = typeof item.description === 'string' ? item.description.trim() : ''
  const fallback = `Shop price ${item.price || '-'}, stacks to ${item.maxStack || '-'}.`
  return fitDescription(
    `${item.name} in Memories of Trey - ${typeLabel}. ${desc || fallback} See Fountain and workshop recipes that craft it or use it as an ingredient.`,
  )
}

function itemMeta(item) {
  const typeLabel = formatSeoType(item.type)
  return {
    path: `/wiki/items/${item.slug}`,
    title: fitTitle(`${item.name} | LumenTale Item, Recipes & Effects`),
    description: itemDescription(item),
    keywords: `${item.name} LumenTale, LumenTale ${typeLabel}, Memories of Trey ${item.name}, ${item.name} recipe, ${item.name} crafting`,
    ogType: 'article',
  }
}

function guideMeta(guide) {
  const slug = String(guide.addressBar).replace(/^\/+|\/+$/g, '')
  return {
    path: `/guides/${slug}`,
    title: fitTitle(
      guide.seo?.title || `LumenTale | ${String(guide.title || slug).replace(/^LumenTale\s*/i, '').slice(0, 32)}`,
    ),
    description: fitDescription(guide.seo?.description || guide.description || seoConfig.defaults.description),
    keywords:
      guide.seo?.keywords ||
      `LumenTale guide, ${guide.title}, Memories of Trey, Talea walkthrough, lumentale.org`,
    ogType: 'article',
  }
}

function routeKey(routePath) {
  return routePath === '/' ? '/' : `/${String(routePath).replace(/^\/+|\/+$/g, '')}`
}

function addRoute(map, route) {
  if (!route?.path) return
  map.set(routeKey(route.path), { ...route, path: routeKey(route.path) })
}

function buildRoutes() {
  const routeMap = new Map()
  staticRoutes.forEach((route) => addRoute(routeMap, route))

  for (const entry of animon) {
    if (!entry?.slug) continue
    addRoute(routeMap, {
      path: `/animon/${entry.slug}`,
      ...animonDetailSeo(entry),
      ogType: 'article',
    })
  }

  const guideList = Array.isArray(guides) ? guides : guides.default || []
  for (const guide of guideList) {
    if (!guide?.addressBar) continue
    addRoute(routeMap, guideMeta(guide))
  }

  for (const recipe of recipes) {
    if (!recipe?.slug) continue
    addRoute(routeMap, {
      path: `/wiki/recipes/${recipe.slug}`,
      ...recipeDetailSeo(recipe),
      ogType: 'article',
    })
  }

  for (const item of items) {
    if (!item?.slug) continue
    addRoute(routeMap, itemMeta(item))
  }

  return [...routeMap.values()]
}

function outputPaths(routePath) {
  if (routePath === '/') return [path.join(distDir, 'index.html')]
  const cleanPath = routePath.replace(/^\/+|\/+$/g, '')
  return [
    path.join(distDir, `${cleanPath}.html`),
    path.join(distDir, cleanPath, 'index.html'),
  ]
}

function writeRouteHtml(template, route) {
  const html = injectMeta(template, route)
  for (const outPath of outputPaths(route.path)) {
    fs.mkdirSync(path.dirname(outPath), { recursive: true })
    fs.writeFileSync(outPath, html, 'utf8')
  }
}

function patchEntryHtml(html) {
  const assetsDir = path.join(distDir, 'assets')
  if (!fs.existsSync(assetsDir) || html.includes('modulepreload')) return html

  const homeRouteChunks = ['HomeView-', 'homeSchema-', 'typeInfo-']
  const preloads = fs
    .readdirSync(assetsDir)
    .filter(
      (name) =>
        name.endsWith('.js') && homeRouteChunks.some((prefix) => name.startsWith(prefix)),
    )
    .map((name) => `<link rel="modulepreload" crossorigin href="/assets/${name}">`)
    .join('\n    ')

  if (!preloads) return html

  return html.replace(
    /(<script type="module" crossorigin src="\/assets\/index-[^"]+\.js"><\/script>)/,
    `${preloads}\n    $1`,
  )
}

function generate() {
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Missing built index.html at ${templatePath}`)
  }
  const template = patchEntryHtml(fs.readFileSync(templatePath, 'utf8'))
  const routes = buildRoutes()
  for (const route of routes) writeRouteHtml(template, route)
  console.log(`SEO HTML generated for ${routes.length} routes`)
}

generate()
