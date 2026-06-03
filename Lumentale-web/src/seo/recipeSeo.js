import { seoConfig } from './config.js'
import { fitDescription, fitTitle } from './utils.js'

export function recipeDetailSeo(recipe) {
  if (!recipe) return seoConfig.defaults

  const name = recipe.result?.name || recipe.name
  const project = recipe.projectLabel || 'Recipe'
  const title = fitTitle(`${name} | LumenTale Recipe, ${project} & Materials`)

  const rate = recipe.successRate != null ? `${recipe.successRate}% success` : 'success rate varies'
  const station = project === 'Cooking' ? 'Fountain' : 'workshop'

  const description = fitDescription(
    `${name} recipe in Memories of Trey — ${project}, ${rate}, ${recipe.ingredients.length} ingredients. Full amounts for one craft at the ${station} plus links to each material item page.`,
  )

  return {
    title,
    description,
    keywords: `${name} recipe LumenTale, LumenTale ${project}, ${name} crafting, Memories of Trey cooking, Fountain recipe`,
  }
}
