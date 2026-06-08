/** Game8 map tool coordinate space (tileSize / image bounds = 187.5). */
export const MAP_SIZE = 187.5

const half = MAP_SIZE / 2

export const mapBounds = [
  [0, 0],
  [MAP_SIZE, MAP_SIZE],
]

export const mapMaxBounds = [
  [-half, -half],
  [MAP_SIZE + half, MAP_SIZE + half],
]

export const mapDefaultCenter = [half, half]
export const mapDefaultZoom = 2

/** API/editor space (256) → Leaflet CRS.Simple position [lat, lng]. */
export function toLeafletPosition(coordinate) {
  const [x, y] = coordinate.split(',').map(Number)
  const scale = (value) => Math.floor(value * (MAP_SIZE / 256) * 100) / 100
  return [scale(x), scale(y)]
}

export function pinIconOptions(iconUrl) {
  return {
    iconUrl,
    iconSize: [25, 25],
    iconAnchor: [6, 12.5],
    popupAnchor: [7.5, -12.5],
  }
}
