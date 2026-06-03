import { seoConfig } from './config.js'
import { fitDescription, fitTitle } from './utils.js'

export function animonDetailSeo(entry) {
  if (!entry) return seoConfig.defaults

  const { name, number, elementType, emotionalType, minBst, maxBst } = entry
  const title = fitTitle(`${name} | LumenTale Animon, Stats, BST & Types`)

  const description = fitDescription(
    `${name} (#${number}) in Memories of Trey — ${elementType} type, ${emotionalType} affinity, BST ${minBst}-${maxBst}. Catch rate, base stats, evolution steps, and boss links for your team.`,
  )

  return {
    title,
    description,
    keywords: `${name} LumenTale, ${name} Animon stats, LumenTale ${elementType}, Memories of Trey ${name}, Animon dex`,
  }
}
