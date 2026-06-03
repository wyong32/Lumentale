import { bySlug, guideBySlug, itemBySlug, recipeBySlug, summary } from '@/lib/data'
import { animonDetailSeo } from './animonSeo.js'
import { itemDetailSeo } from './itemSeo.js'
import { recipeDetailSeo } from './recipeSeo.js'
import { seoConfig } from './config.js'
import {
  applyDocumentSeo,
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildDefaultWebPageJsonLd,
  buildGraphJsonLd,
  resolveCanonicalUrl,
} from './documentMeta.js'
import { buildHomeJsonLd } from './homeSchema.js'
import { fitDescription, fitTitle } from './utils.js'

const NOT_FOUND_ANIMON_TDK = {
  title: fitTitle('LumenTale | Animon Not Found, Browse Dex List'),
  description: fitDescription(
    'This LumenTale Animon page is not in our dex yet. Browse the full Animon list in Memories of Trey — search by element, affinity, BST, and catch rate to plan your next capture.',
  ),
  keywords: 'LumenTale Animon, Animon not found, Memories of Trey, LumenTale dex, Talea species',
}

const NOT_FOUND_GUIDE_TDK = {
  title: fitTitle('LumenTale | Guide Not Found, All Walkthroughs'),
  description: fitDescription(
    'This LumenTale guide is not published yet. Browse all Memories of Trey walkthroughs — beginner routes, combat tips, exploration help, and collection advice for Talea.',
  ),
  keywords: 'LumenTale guides, Memories of Trey walkthrough, guide not found, Talea tips',
}

const NOT_FOUND_RECIPE_TDK = {
  title: fitTitle('LumenTale | Recipe Not Found, Cooking List'),
  description: fitDescription(
    'This LumenTale recipe is not in our list yet. Browse all Memories of Trey cooking and crafting recipes — ingredient amounts, success rates, and Fountain or workshop stations.',
  ),
  keywords: 'LumenTale recipes, Memories of Trey cooking, recipe not found, Fountain recipes',
}

const NOT_FOUND_ITEM_TDK = {
  title: fitTitle('LumenTale | Item Not Found, Browse Items List'),
  description: fitDescription(
    'This LumenTale item is not in our list yet. Browse Bilias, medicines, ingredients, and materials in Memories of Trey with prices and linked Fountain or workshop recipes.',
  ),
  keywords: 'LumenTale items, Memories of Trey items, item not found, LumenTale crafting',
}

function resolvePageMeta(to) {
  if (to.meta?.title && to.meta?.description) {
    return {
      title: to.meta.title,
      description: to.meta.description,
      keywords: to.meta.keywords,
    }
  }
  return seoConfig.defaults
}

export function applyNavigationSeo(to) {
  const siteUrl = seoConfig.fullDomain.replace(/\/+$/, '')

  if (to.name === 'animon-detail') {
    const entry = bySlug(to.params.slug)
    const path = entry ? `/animon/${entry.slug}` : to.path

    if (!entry) {
      applyDocumentSeo({
        path,
        title: NOT_FOUND_ANIMON_TDK.title,
        description: NOT_FOUND_ANIMON_TDK.description,
        keywords: NOT_FOUND_ANIMON_TDK.keywords,
      })
      return
    }

    const meta = animonDetailSeo(entry)
    const url = resolveCanonicalUrl(path)

    applyDocumentSeo({
      path,
      title: meta.title,
      description: meta.description,
      keywords: meta.keywords,
      ogType: 'article',
      jsonLd: buildGraphJsonLd(
        buildDefaultWebPageJsonLd({
          name: meta.title,
          description: meta.description,
          url,
        }),
        buildBreadcrumbJsonLd([
          { name: 'Home', url: `${siteUrl}/` },
          { name: 'Animon Dex', url: `${siteUrl}/animon` },
          { name: entry.name, url },
        ]),
      ),
    })
    return
  }

  if (to.name === 'guide-detail') {
    const guide = guideBySlug(to.params.slug)
    const path = guide ? `/guides/${guide.addressBar}` : to.path

    if (!guide) {
      applyDocumentSeo({
        path,
        title: NOT_FOUND_GUIDE_TDK.title,
        description: NOT_FOUND_GUIDE_TDK.description,
        keywords: NOT_FOUND_GUIDE_TDK.keywords,
      })
      return
    }

    const title = fitTitle(
      guide.seo?.title || `LumenTale | ${guide.title.replace(/^LumenTale\s*/i, '').slice(0, 32)}`,
    )
    const description = fitDescription(
      guide.seo?.description || guide.description || seoConfig.defaults.description,
    )
    const keywords =
      guide.seo?.keywords ||
      `LumenTale guide, ${guide.title}, Memories of Trey, Talea walkthrough, lumentale.org`
    const url = resolveCanonicalUrl(path)

    applyDocumentSeo({
      path,
      title,
      description,
      keywords,
      ogType: 'article',
      jsonLd: buildGraphJsonLd(
        buildArticleJsonLd({
          headline: title,
          description,
          url,
          datePublished: guide.publishDate,
        }),
        buildBreadcrumbJsonLd([
          { name: 'Home', url: `${siteUrl}/` },
          { name: 'Guides', url: `${siteUrl}/guides` },
          { name: guide.title, url },
        ]),
      ),
    })
    return
  }

  if (to.name === 'wiki-recipe-detail') {
    const recipe = recipeBySlug(to.params.slug)
    const path = recipe ? `/wiki/recipes/${recipe.slug}` : to.path

    if (!recipe) {
      applyDocumentSeo({
        path,
        title: NOT_FOUND_RECIPE_TDK.title,
        description: NOT_FOUND_RECIPE_TDK.description,
        keywords: NOT_FOUND_RECIPE_TDK.keywords,
      })
      return
    }

    const meta = recipeDetailSeo(recipe)
    const displayName = recipe.result?.name || recipe.name
    const url = resolveCanonicalUrl(path)

    applyDocumentSeo({
      path,
      title: meta.title,
      description: meta.description,
      keywords: meta.keywords,
      ogType: 'article',
      jsonLd: buildGraphJsonLd(
        buildDefaultWebPageJsonLd({
          name: meta.title,
          description: meta.description,
          url,
        }),
        buildBreadcrumbJsonLd([
          { name: 'Home', url: `${siteUrl}/` },
          { name: 'Recipes', url: `${siteUrl}/wiki/recipes` },
          { name: displayName, url },
        ]),
      ),
    })
    return
  }

  if (to.name === 'wiki-item-detail') {
    const item = itemBySlug(to.params.slug)
    const path = item ? `/wiki/items/${item.slug}` : to.path

    if (!item) {
      applyDocumentSeo({
        path,
        title: NOT_FOUND_ITEM_TDK.title,
        description: NOT_FOUND_ITEM_TDK.description,
        keywords: NOT_FOUND_ITEM_TDK.keywords,
      })
      return
    }

    const meta = itemDetailSeo(item)
    const url = resolveCanonicalUrl(path)

    applyDocumentSeo({
      path,
      title: meta.title,
      description: meta.description,
      keywords: meta.keywords,
      ogType: 'article',
      jsonLd: buildGraphJsonLd(
        buildDefaultWebPageJsonLd({
          name: meta.title,
          description: meta.description,
          url,
        }),
        buildBreadcrumbJsonLd([
          { name: 'Home', url: `${siteUrl}/` },
          { name: 'Items', url: `${siteUrl}/wiki/items` },
          { name: item.name, url },
        ]),
      ),
    })
    return
  }

  const meta = resolvePageMeta(to)
  const path = to.path
  const url = resolveCanonicalUrl(path)

  if (to.name === 'home') {
    applyDocumentSeo({
      path,
      title: meta.title,
      description: meta.description,
      keywords: meta.keywords,
      jsonLd: buildHomeJsonLd({
        title: meta.title,
        description: meta.description,
        url,
        animonCount: summary.counts.animon,
      }),
    })
    return
  }

  applyDocumentSeo({
    path,
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
  })
}
