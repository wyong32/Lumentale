import { animon, bosses, guides, items, recipes, skills } from '@/lib/data.js'

function norm(s) {
  return String(s || '')
    .trim()
    .toLowerCase()
}

function matchesQuery(haystack, q) {
  if (!q) return true
  return norm(haystack).includes(q)
}

export function searchSite(query, limitPerKind = 12) {
  const q = norm(query)
  if (!q || q.length < 2) {
    return { animon: [], skills: [], items: [], recipes: [], bosses: [], guides: [], total: 0 }
  }

  const animonHits = animon
    .filter((entry) =>
      matchesQuery(
        [entry.name, entry.number, entry.elementType, entry.emotionalType, entry.rarity, entry.slug].join(' '),
        q,
      ),
    )
    .slice(0, limitPerKind)
    .map((entry) => ({
      kind: 'animon',
      slug: entry.slug,
      title: entry.name,
      subtitle: `#${entry.number} · ${entry.elementType} · BST ${entry.minBst}–${entry.maxBst}`,
      image: entry.image,
      to: `/animon/${entry.slug}`,
    }))

  const skillHits = skills
    .filter((s) => matchesQuery([s.name, s.type, s.category, s.targetType].join(' '), q))
    .slice(0, limitPerKind)
    .map((s) => ({
      kind: 'skill',
      slug: s.slug,
      title: s.name,
      subtitle: `${s.type} · ${s.category} · Power ${s.power ?? '—'}`,
      image: null,
      to: '/wiki/skills',
    }))

  const itemHits = items
    .filter((item) => matchesQuery([item.name, item.type, item.slug].join(' '), q))
    .slice(0, limitPerKind)
    .map((item) => ({
      kind: 'item',
      slug: item.slug,
      title: item.name,
      subtitle: `${item.type} · ${item.price || '—'} Lumens`,
      image: item.image,
      to: `/wiki/items/${item.slug}`,
    }))

  const recipeHits = recipes
    .filter((recipe) => {
      const hay = [
        recipe.name,
        recipe.result?.name,
        recipe.projectLabel,
        ...recipe.ingredients.map((ing) => ing.name),
      ].join(' ')
      return matchesQuery(hay, q)
    })
    .slice(0, limitPerKind)
    .map((recipe) => ({
      kind: 'recipe',
      slug: recipe.slug,
      title: recipe.result?.name || recipe.name,
      subtitle: `${recipe.projectLabel} · ${recipe.ingredients.length} materials`,
      image: recipe.result?.image,
      to: `/wiki/recipes/${recipe.slug}`,
      projectLabel: recipe.projectLabel,
    }))

  const bossHits = (bosses.bossAnimon || [])
    .filter((boss) => matchesQuery([boss.name, boss.originName, boss.elementType].join(' '), q))
    .slice(0, limitPerKind)
    .map((boss) => ({
      kind: 'boss',
      slug: boss.slug,
      title: boss.originName || boss.name,
      subtitle: `Lv ${boss.level} · ${boss.elementType}`,
      image: boss.image,
      to: '/wiki/bosses',
    }))

  const guideHits = guides
    .filter((g) => matchesQuery([g.title, g.description, g.addressBar].join(' '), q))
    .slice(0, limitPerKind)
    .map((g) => ({
      kind: 'guide',
      slug: g.addressBar,
      title: g.title,
      subtitle: g.description?.slice(0, 80) || 'Player guide',
      image: null,
      to: `/guides/${g.addressBar}`,
    }))

  const total =
    animonHits.length +
    skillHits.length +
    itemHits.length +
    recipeHits.length +
    bossHits.length +
    guideHits.length

  return {
    animon: animonHits,
    skills: skillHits,
    items: itemHits,
    recipes: recipeHits,
    bosses: bossHits,
    guides: guideHits,
    total,
  }
}
