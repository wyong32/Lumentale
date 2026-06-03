export const SEO_TITLE_MIN = 40
export const SEO_TITLE_MAX = 60
export const SEO_DESC_MIN = 140
export const SEO_DESC_MAX = 160

export function truncateMeta(str, max) {
  if (str.length <= max) return str
  return `${str.slice(0, max - 1).replace(/\s+\S*$/, '')}.`
}

export function formatSeoType(type) {
  if (!type) return 'Item'
  return type.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())
}

/** Clamp title to 40–60 characters for Google SERP */
export function fitTitle(title, { min = SEO_TITLE_MIN, max = SEO_TITLE_MAX } = {}) {
  let t = String(title).trim()
  if (t.length > max) {
    t = truncateMeta(t, max).replace(/\.$/, '')
  }
  if (t.length < min) {
    const suffix = ' | Memories of Trey'
    if (t.length + suffix.length <= max) t += suffix
  }
  return t
}

/** Clamp meta description to 140–160 characters */
export function fitDescription(description, pad = '') {
  let d = String(description).trim()
  if (!d && pad) d = pad.trim()
  else if (pad && d.length < SEO_DESC_MIN) d = `${d} ${pad}`.trim()

  if (d.length > SEO_DESC_MAX) d = truncateMeta(d, SEO_DESC_MAX)
  if (d.length < SEO_DESC_MIN) {
    const tail = ' For LumenTale: Memories of Trey on lumentale.org.'
    d = truncateMeta(`${d}${tail}`, SEO_DESC_MAX)
  }
  if (d.length < SEO_DESC_MIN) {
    d = truncateMeta(
      'LumenTale guides and dex for Memories of Trey — Animon stats, items, recipes, bosses, and walkthroughs for your Talea playthrough on lumentale.org.',
      SEO_DESC_MAX,
    )
  }
  return d
}
