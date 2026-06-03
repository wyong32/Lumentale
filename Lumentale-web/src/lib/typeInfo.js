/** Element & emotional affinity icons + flavor copy (from type chart reference data). */

const ELEMENT = {
  ANCIENT: {
    label: 'Relics, memory, old power',
    description:
      'Ancient-themed Animon and skills usually point toward ruins, artifacts, forgotten technology, or older powers in Talea.',
  },
  ANOMALOUS: {
    label: 'Unstable and abnormal',
    description:
      'Anomalous is the strange outlier category — useful to track separately because it often marks unusual forms, enemies, or rules.',
  },
  AURA: {
    label: 'Air, flow, spirit',
    description: 'Aura reads as a light, airy, energy-driven element — mobility, wind, or spiritual motifs.',
  },
  CHAKRA: {
    label: 'Inner force',
    description:
      'Chakra is tied to inner energy and focus. Treat it as distinct coverage rather than a generic neutral type.',
  },
  DATA: {
    label: 'Digital and encoded',
    description:
      'Data covers digital, synthetic, or information-themed Animon. Boss fights can make this type especially important.',
  },
  DEMON: {
    label: 'Dark and occult',
    description:
      'Demon is the darker supernatural grouping — ominous designs, curses, masks, or hostile story encounters.',
  },
  ELECTRIC: {
    label: 'Voltage and machinery',
    description: 'Electric marks power, machines, sparks, and charged attacks — easy to spot in assets.',
  },
  FIRE: {
    label: 'Heat and burn',
    description: 'Fire covers flame, heat, volcanic zones, and aggressive offensive themes.',
  },
  GEO: {
    label: 'Stone and ground',
    description: 'Geo is rock, mineral, earth, and terrain — caves, quarries, crystals, and mountains.',
  },
  GRASS: {
    label: 'Plants and nature',
    description: 'Grass covers plant life, forests, herbs, roots, and natural growth.',
  },
  ICE: {
    label: 'Cold and frost',
    description: 'Ice points to snow, frozen zones, crystals, and defensive cold-themed forms.',
  },
  VIRUS: {
    label: 'Corruption and infection',
    description: 'Virus covers corrupted or glitch-like power. Keep separate from Data: coded vs destabilizing.',
  },
  WATER: {
    label: 'Sea and fluid',
    description: 'Water covers aquatic Animon, coastal routes, rain, and fluid attacks.',
  },
}

const EMOTION_THEME = {
  FELICIS: {
    label: 'Joy / happiness',
    description: 'Upbeat, bright, playful, or supportive creature identity in Talea.',
  },
  FUROR: {
    label: 'Rage / intensity',
    description: 'Hot-blooded, volatile, or attack-forward forms.',
  },
  HORRENS: {
    label: 'Fear / dread',
    description: 'Eerie, intimidating, unsettling, or horror-leaning designs.',
  },
  MESTUS: {
    label: 'Melancholy / weight',
    description: 'Somber, lonely, or mournful themes — separate from its battle finisher role.',
  },
  SEREUM: {
    label: 'Focus / composure',
    description: 'Balanced or controlled identity — in combat it skews crits and TP, not passive calm.',
  },
}

const FALLBACK = {
  label: 'Needs verification',
  description: 'This label appears in our data; report a correction if the in-game name differs.',
}

export function slugTypeName(value) {
  return String(value)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Type / affinity icons — same paths as page.tsx: /images/types/{slug}.png
 * Assets live in repo types/types/ and are copied to public/images/types/.
 */
export function typeIconSrc(name) {
  const slug = slugTypeName(name)
  return slug ? `/images/types/${slug}.png` : '/images/types/none.png'
}

export function elementIconSrc(name) {
  return typeIconSrc(name)
}

export function getTypeInfo(name, kind = 'element') {
  const key = String(name || '').toUpperCase()
  if (kind === 'emotion') {
    return EMOTION_THEME[key] || FALLBACK
  }
  return ELEMENT[key] || FALLBACK
}

export function hasBattleType(value) {
  return Boolean(value && value !== 'UNKNOWN' && value !== 'NONE')
}
