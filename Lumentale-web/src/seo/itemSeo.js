import { itemDerivedProse } from '@/lib/data.js'
import { seoConfig } from './config.js'
import { fitDescription, fitTitle, formatSeoType } from './utils.js'

export function itemDetailSeo(item) {
  if (!item) return seoConfig.defaults

  const typeLabel = formatSeoType(item.type)
  const title = fitTitle(`${item.name} | LumenTale Item, Recipes & Effects`)

  const derived = itemDerivedProse(item)
  const descBit =
    item.localizedDescription ||
    item.description ||
    derived ||
    `Shop price ${item.price || '—'}, stacks to ${item.maxStack}.`

  const description = fitDescription(
    `${item.name} in Memories of Trey — ${typeLabel}. ${descBit} See Fountain and workshop recipes that craft it or use it as an ingredient.`,
  )

  return {
    title,
    description,
    keywords: `${item.name} LumenTale, LumenTale ${typeLabel}, Memories of Trey ${item.name}, ${item.name} recipe, ${item.name} crafting`,
  }
}
