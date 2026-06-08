import fs from 'fs'

const raw = JSON.parse(fs.readFileSync('tmp-map-data.json', 'utf8'))

const PIN_LOCAL = {
  'https://img.game8.co/4524349/548601ef70e4237e184ed02cf4691df9.png/show':
    '/images/maps/pins/pin-01.png',
  'https://img.game8.co/4524350/c6b32d06d2b2667ce2f91c132826bf1c.png/show':
    '/images/maps/pins/pin-02.png',
  'https://img.game8.co/4524348/fbe4199aed94788937b32fd9c22ab3a8.png/show':
    '/images/maps/pins/pin-03.png',
}

function parseAnimon(html) {
  if (!html || html.includes('No Animon in this Area')) return []
  const names = []
  const re = /alt='([^']+)'/g
  let m
  while ((m = re.exec(html))) names.push(m[1])
  return [...new Set(names)]
}

const locations = raw.coordinateArraySchema.coordinates.map((c) => ({
  id: c.id,
  name: c.title,
  coordinate: c.coordinate,
  pinIcon: PIN_LOCAL[c.pinIcon] || c.pinIcon,
  region: c.region,
  animon: parseAnimon(c.htmlContent),
}))

const out = {
  mapImage: '/images/maps/talea-map.jpeg',
  mapSize: 187.5,
  maxZoom: raw.maxZoom || 5,
  minZoom: 0,
  defaultZoom: 2,
  regions: ['Logos', 'Mythos'],
  locations,
}

fs.writeFileSync(
  'src/data/taleaMap.js',
  `/** Talea interactive map — synced from Game8 tool_structural_mappings/772 */\nexport default ${JSON.stringify(out, null, 2)}\n`,
)
console.log('locations:', locations.length)
console.log(
  'sample:',
  locations.find((l) => l.animon.length)?.name,
  locations.find((l) => l.animon.length)?.animon.slice(0, 3),
)
