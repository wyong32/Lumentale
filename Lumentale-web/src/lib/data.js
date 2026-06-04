import animonJson from '@/data/animon.json'
import bossesJson from '@/data/bosses.json'
import guidesData from '@/data/guides.js'
import itemsJson from '@/data/items.json'
import recipesJson from '@/data/recipes.json'
import skillsJson from '@/data/skills.json'
import summaryJson from '@/data/summary.json'

const CJK_RE = /[\u4e00-\u9fff\u3040-\u30ff]/
const ITALIAN_RE =
  /\b(che|della|delle|perché|è|sono|una|del|con|questa|quando|tramite|può|abbassare|portatore|struttura|conserva|sviluppata|difficile|estrarre|frammentarsi|anivis|anivite|capsula|quando il)\b/i
const SPANISH_RE = /\b(el|la|los|las|esta|puede|más|nadie|alcanzado|potencia)\b/i

/** True when text is safe to show on the English site (no CJK / IT / ES flavor). */
export function isEnglishDisplayText(text) {
  if (!text || typeof text !== 'string') return false
  const t = text.trim()
  if (!t || CJK_RE.test(t)) return false
  if (ITALIAN_RE.test(t)) return false
  if (SPANISH_RE.test(t) && /[áéíóúñ]/i.test(t)) return false
  if (/[àèìòù]/i.test(t) && ITALIAN_RE.test(t)) return false
  return true
}

/** Player-facing flavor: English description, else derived effect copy. */
export function itemFlavorText(item) {
  if (!item) return ''
  const desc = item.description?.trim()
  if (isEnglishDisplayText(desc)) return desc
  return itemDerivedProse(item) || ''
}

export const animon = animonJson
export const skills = skillsJson
export const items = itemsJson
export const recipes = recipesJson
export const bosses = bossesJson
export const summary = summaryJson
export const guides = guidesData

export function guideBySlug(slug) {
  return guides.find((entry) => entry.addressBar === slug)
}

export function recipeBySlug(slug) {
  return recipes.find((entry) => entry.slug === slug)
}

export function itemBySlug(slug) {
  return items.find((entry) => entry.slug === slug)
}

const recipeIngredientGuids = new Set(
  recipes.flatMap((recipe) => recipe.ingredients.map((ing) => ing.guid)),
)
const recipeResultGuids = new Set(
  recipes.map((recipe) => recipe.result?.guid).filter(Boolean),
)

export function itemDetailLink(nameOrSlug) {
  const value = String(nameOrSlug || '').trim()
  if (!value) return '/wiki/items'
  const bySlug = items.find((entry) => entry.slug === value)
  if (bySlug) return `/wiki/items/${bySlug.slug}`
  const byName = items.find((entry) => entry.name.toLowerCase() === value.toLowerCase())
  if (byName) return `/wiki/items/${byName.slug}`
  return { path: '/wiki/items', query: { q: value } }
}

export function itemRoleLabel(item) {
  if (!item?.guid) return 'Other'
  const isMaterial = recipeIngredientGuids.has(item.guid)
  const isCrafted = recipeResultGuids.has(item.guid)
  if (isMaterial && isCrafted) return 'Material & crafted'
  if (isMaterial) return 'Recipe material'
  if (isCrafted) return 'Crafted item'
  return 'Other'
}

export function displayableItemEffects(item) {
  if (!item?.effects?.length) return []
  return item.effects.filter((effect) => effect.display !== false)
}

/** Player-facing note when effects or descriptions are missing */
export function itemEffectPlayerNote(item) {
  if (!item) return ''
  if (displayableItemEffects(item).length) return ''
  if (itemFlavorText(item)) return ''
  const isFoodLike = item.type === 'MEDICINES' && item.material === 'Organic'
  if (item.effects?.length || item.battleEffectType === 'ItemBattleEffectType') {
    return isFoodLike
      ? 'We have not confirmed the exact buff yet — craft one at the Fountain and read the tooltip before you rely on it for a long route.'
      : 'Exact numbers are still unclear here — use the item once in Talea if you need precise timing or damage.'
  }
  return ''
}

export function formatDataLabel(value) {
  if (!value) return ''
  return String(value)
    .replace(/_/g, ' ')
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

/** Player-readable effect line from in-game effect fields */
export function formatItemEffectForDisplay(effect) {
  if (!effect) return { title: '', detail: '' }

  const data = effect.data || {}
  const className = effect.className || ''
  const summary = effect.summary || ''

  if (className === 'OverworldSpeedBuffItemEffect' || summary.includes('SpeedMultiplier')) {
    let mult = data.SpeedMultiplier
    let dur = data.Duration
    if (mult == null) {
      const match = summary.match(/SpeedMultiplier=([\d.]+)/)
      if (match) mult = Number(match[1])
    }
    if (dur == null) {
      const match = summary.match(/Duration=(\d+)/)
      if (match) dur = Number(match[1])
    }
    if (mult != null) {
      const pct = Math.round((Number(mult) - 1) * 100)
      const title = pct > 0 ? `Overworld movement about ${pct}% faster` : 'Overworld speed boost'
      const detail =
        dur != null ? `Field buff lasts ${dur} seconds after you use the item.` : 'Applies on the overworld map.'
      return { title, detail }
    }
  }

  if (className === 'ChangeAnimonAffectionItemEffect') {
    const amount = data.Amount ?? data.amount
    if (amount != null) {
      return {
        title: `Changes partner affection by ${amount > 0 ? '+' : ''}${amount}`,
        detail: effect.scope || 'Field or battle use depending on item.',
      }
    }
  }

  let title = summary.replace(/^[A-Za-z]+ItemEffect:\s*/i, '').trim()
  if (!title) title = formatDataLabel(className.replace(/ItemEffect$/, '')) || 'Item effect'
  if (title.length > 140) title = `${title.slice(0, 137)}…`

  return {
    title,
    detail: effect.scope ? `${effect.scope}.` : '',
  }
}

/** Effect rows for detail pages — player copy + exact stat lines */
export function itemEffectDisplayEntries(item) {
  if (!item) return []
  return displayableItemEffects(item).map((effect) => {
    const friendly = formatItemEffectForDisplay(effect)
    const summary = effect.summary || effect.className || 'Item effect'
    const meta = [effect.className, effect.scope].filter(Boolean).join(' / ')
    return {
      summary,
      meta,
      playerTitle: friendly.title,
      playerDetail: friendly.detail,
      scope: effect.scope || '',
    }
  })
}

/** Short “what it does” copy when flavor text fields are empty */
export function itemDerivedProse(item) {
  if (!item) return ''
  return displayableItemEffects(item)
    .map((effect) => {
      const friendly = formatItemEffectForDisplay(effect)
      return `${friendly.title}${friendly.detail ? ` ${friendly.detail}` : ''}`
    })
    .join(' ')
}

export function itemRecipeDescriptionLink(item) {
  if (!item?.effects?.length) return null
  const overrider = item.effects.find((effect) => effect.className === 'RecipeDescriptionOverrider')
  const craftGuid = overrider?.data?.Recipe?.CraftGUID
  if (!craftGuid) return null
  const recipe = recipes.find((entry) => entry.guid === craftGuid)
  return recipe || null
}

/** Recipes that produce this item (by result item slug) */
export function recipesCraftingItem(itemSlug) {
  const item = itemBySlug(itemSlug)
  if (!item) return []
  return recipes.filter((recipe) => recipe.result?.guid === item.guid || recipe.result?.slug === itemSlug)
}

/** Recipes that consume this item as an ingredient */
export function recipesUsingItem(itemSlug) {
  const item = itemBySlug(itemSlug)
  if (!item) return []
  return recipes.filter((recipe) =>
    recipe.ingredients.some((ing) => ing.guid === item.guid || ing.slug === itemSlug),
  )
}

export const PLACEHOLDER =
  'https://placehold.co/40x40/ffdac1/6B9B7B?text='

export function imgSrc(path, label = 'LT') {
  if (path && path.startsWith('/images/')) return path
  const text = encodeURIComponent(String(label).slice(0, 4))
  return `${PLACEHOLDER}${text}`
}

export function bySlug(slug) {
  return animon.find((entry) => entry.slug === slug)
}

const animonByNameIndex = new Map()
for (const entry of animon) {
  animonByNameIndex.set(entry.name.toLowerCase(), entry)
  if (entry.baseName) animonByNameIndex.set(entry.baseName.toLowerCase(), entry)
}

export function byName(name) {
  return animonByNameIndex.get(String(name).trim().toLowerCase()) || null
}

export function parseEvolutionNames(text) {
  return String(text)
    .split('/')
    .map((part) => part.trim())
    .filter(Boolean)
}

export function evolutionRowAnchor(row, index) {
  const firstFrom = parseEvolutionNames(row.from)[0]
  const slug = byName(firstFrom)?.slug
  return slug ? `evo-${slug}-${index}` : `evo-row-${index}`
}

export function enrichedEvolutionRows() {
  return evolutionRows.map((row, index) => ({
    ...row,
    index,
    anchorId: evolutionRowAnchor(row, index),
    fromEntries: parseEvolutionNames(row.from).map((name) => byName(name)).filter(Boolean),
    toEntries: parseEvolutionNames(row.to).map((name) => byName(name)).filter(Boolean),
  }))
}

export function evolutionsForAnimon(slug) {
  const entry = bySlug(slug)
  if (!entry) return []

  const names = new Set([entry.name.toLowerCase(), (entry.baseName || entry.name).toLowerCase()])

  return enrichedEvolutionRows().filter((row) => {
    const fromNames = parseEvolutionNames(row.from).map((name) => name.toLowerCase())
    const toNames = parseEvolutionNames(row.to).map((name) => name.toLowerCase())
    return (
      [...names].some((name) => fromNames.includes(name) || toNames.includes(name)) ||
      row.fromEntries.some((item) => item.slug === slug) ||
      row.toEntries.some((item) => item.slug === slug)
    )
  })
}

export function evolutionLinkForAnimon(slug) {
  const rows = evolutionsForAnimon(slug)
  if (!rows.length) return { path: '/evolutions' }
  return {
    path: '/evolutions',
    query: { animon: slug },
    hash: `#${rows[0].anchorId}`,
  }
}

export function bossForAnimon(slug) {
  return (bosses.bossAnimon || []).find((entry) => entry.originSlug === slug)
}

export function animonDexLink(filters = {}) {
  const query = {}
  if (filters.element) query.element = filters.element
  if (filters.affinity || filters.emotion) query.affinity = filters.affinity || filters.emotion
  if (filters.rarity) query.rarity = filters.rarity
  if (filters.q) query.q = filters.q
  return Object.keys(query).length ? { path: '/animon', query } : { path: '/animon' }
}

export function bossLinkForAnimon(slug) {
  const boss = bossForAnimon(slug)
  if (!boss) return null
  return { path: '/wiki/bosses', query: { animon: slug }, hash: `#boss-${boss.slug}` }
}

export function unique(values) {
  return Array.from(new Set(values.filter(Boolean).filter((v) => v !== 'UNKNOWN'))).sort(
    (a, b) => a.localeCompare(b),
  )
}

export const elementTypes = unique(animon.map((e) => e.elementType))
export const emotionalTypes = unique(animon.map((e) => e.emotionalType))
export const rarityTypes = unique(animon.map((e) => e.rarity))
export const skillTypes = unique(skills.map((e) => e.type))
export const itemTypes = unique(items.map((e) => e.type))
export const recipeProjectTypes = unique(recipes.map((entry) => entry.projectLabel))

export function starters() {
  return animon.filter((e) => e.canBeKickstarter)
}

export function distribution(key) {
  return unique(animon.map((e) => e[key])).map((name) => ({
    name,
    count: animon.filter((e) => e[key] === name).length,
  }))
}

export function topByBst(limit = 8) {
  return [...animon]
    .filter((e) => typeof e.maxBst === 'number')
    .sort((a, b) => (b.maxBst ?? 0) - (a.maxBst ?? 0))
    .slice(0, limit)
}

// 进化数据（视频整理 + 社区验证）
export const evolutionRows = [
  { from: 'Mewaii', to: 'Maidelly', requirement: 'Level 18.', group: 'Starter lines', confidence: 'Video' },
  {
    from: 'Maidelly',
    to: 'Megamitosa / Dolegamii',
    requirement: 'Level 40. Final form depends on path/item choice.',
    group: 'Starter lines',
    confidence: 'Video',
  },
  { from: 'Vortail', to: 'Furtex', requirement: 'Level 18.', group: 'Starter lines', confidence: 'Inferred' },
  {
    from: 'Furtex',
    to: 'Weaphoon / Fursazen',
    requirement: 'Level 40 with final-form item/path choice.',
    group: 'Starter lines',
    confidence: 'Inferred',
  },
  { from: 'Ozelash', to: 'Kouzear', requirement: 'Level 18.', group: 'Starter lines', confidence: 'Inferred' },
  {
    from: 'Kouzear',
    to: 'Byazevolt / Zenicore',
    requirement: 'Level 40 with final-form item/path choice.',
    group: 'Starter lines',
    confidence: 'Inferred',
  },
  { from: 'Salabel', to: 'Vilender', requirement: 'Level 18.', group: 'Starter lines', confidence: 'Inferred' },
  {
    from: 'Vilender',
    to: 'Horrogre / Goldrago',
    requirement: 'Level 40 with final-form item/path choice.',
    group: 'Starter lines',
    confidence: 'Inferred',
  },
  { from: 'Queccha', to: 'Quequator', requirement: 'Level 18.', group: 'Starter lines', confidence: 'Inferred' },
  {
    from: 'Quequator',
    to: 'Barangu / Meterier',
    requirement: 'Level 40 with final-form item/path choice.',
    group: 'Starter lines',
    confidence: 'Inferred',
  },
  { from: 'Smellwing', to: 'Toxigall', requirement: 'Level 18.', group: 'Level evolutions', confidence: 'Video' },
  { from: 'Toxigall', to: 'Garbasilisk', requirement: 'Level 38.', group: 'Level evolutions', confidence: 'Video' },
  {
    from: 'Deniuli',
    to: 'Fulgaze',
    requirement: 'Level 28 during the day.',
    group: 'Time/weather',
    confidence: 'Video',
  },
  {
    from: 'Almyuna',
    to: 'Lopyuna',
    requirement: 'Level 28 during the night.',
    group: 'Time/weather',
    confidence: 'Video',
  },
  {
    from: 'Lampecko',
    to: 'Luxecko',
    requirement: 'Level 25 with Lampalite.',
    group: 'Item evolutions',
    confidence: 'Video',
  },
  { from: 'Flowende', to: 'Flobesque', requirement: 'Level 18.', group: 'Level evolutions', confidence: 'Video' },
  { from: 'Flobesque', to: 'Florenco', requirement: 'Level 38.', group: 'Level evolutions', confidence: 'Video' },
  { from: 'Mushwick', to: 'Owaxle', requirement: 'Level 20.', group: 'Level evolutions', confidence: 'Video' },
  {
    from: 'Rainxy',
    to: 'Rainagon',
    requirement: 'Use its trait 25 times.',
    group: 'Trait evolutions',
    confidence: 'Video',
  },
  { from: 'Soblin', to: 'Griblin', requirement: 'Level 28.', group: 'Level evolutions', confidence: 'Video' },
  {
    from: 'Chagma',
    to: 'Gongbog',
    requirement: 'Land 5 critical hits in one battle.',
    group: 'Battle-condition',
    confidence: 'Video',
  },
  {
    from: 'Minube',
    to: 'Chromaura',
    requirement: 'All six colored Minube variants in party, then rainbow weather.',
    group: 'Special evolutions',
    confidence: 'Video',
  },
]

export const emotionLabels = {
  FELICIS: 'Healing & team sustain',
  FUROR: 'Aggressive damage boost',
  HORRENS: 'Resistance bypass',
  MESTUS: 'Bonus damage by target HP',
  SEREUM: 'Critical hits & TP gain',
}

export function tagClass(type, kind = 'element') {
  const key = (type || 'none').toLowerCase()
  return kind === 'emotion' ? `tag tag-emo-${key}` : `tag tag-${key}`
}

