<template>
  <div class="talea-map-tool">
    <div class="talea-map-tool__map-wrap">
      <div ref="mapEl" class="talea-map-tool__map" role="application" aria-label="Interactive Talea world map" />
      <div class="talea-map-tool__map-controls" aria-label="Map zoom controls">
        <button type="button" class="talea-map-tool__zoom-btn" aria-label="Zoom in" @click="zoomIn">+</button>
        <button type="button" class="talea-map-tool__zoom-btn" aria-label="Zoom out" @click="zoomOut">−</button>
        <button type="button" class="talea-map-tool__zoom-btn" aria-label="Reset view" @click="resetView">⟲</button>
      </div>
    </div>

    <aside class="talea-map-tool__sidebar">
      <div class="talea-map-tool__sidebar-head">
        <h3 class="talea-map-tool__sidebar-title">All Animon Locations</h3>
        <label class="talea-map-tool__search">
          <span class="sr-only">Search locations</span>
          <input v-model="query" type="search" placeholder="Search area…" autocomplete="off" />
        </label>
        <div class="talea-map-tool__filters" role="tablist" aria-label="Filter by region">
          <button
            v-for="tab in regionTabs"
            :key="tab.id"
            type="button"
            role="tab"
            class="talea-map-tool__filter"
            :class="{ 'is-active': regionFilter === tab.id }"
            :aria-selected="regionFilter === tab.id"
            @click="regionFilter = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>

      <div v-if="selected" class="talea-map-tool__detail">
        <button type="button" class="talea-map-tool__back" @click="clearSelection">← All locations</button>
        <h4 class="talea-map-tool__detail-title">{{ selected.name }}</h4>
        <p class="talea-map-tool__detail-meta">
          <span class="talea-map-tool__region-pill" :class="`is-${selected.region.toLowerCase()}`">
            {{ selected.region }} Region
          </span>
        </p>
        <p v-if="selectedAnimon.length === 0" class="talea-map-tool__empty">
          No wild Animon confirmed for this area yet — check back after updates.
        </p>
        <ul v-else class="talea-map-tool__animon-grid">
          <li v-for="entry in selectedAnimon" :key="entry.slug">
            <a class="talea-map-tool__animon-card" :href="`/animon/${entry.slug}`">
              <img
                :src="imgSrc(entry.thumb || entry.image, entry.name)"
                :alt="entry.name"
                width="40"
                height="40"
                loading="lazy"
              />
              <span>{{ entry.name }}</span>
            </a>
          </li>
        </ul>
      </div>

      <ul v-else class="talea-map-tool__location-list">
        <li v-for="loc in filteredLocations" :key="loc.id">
          <button
            type="button"
            class="talea-map-tool__location-btn"
            :class="{ 'is-active': activeId === loc.id }"
            @click="selectLocation(loc)"
          >
            <span class="talea-map-tool__location-name">{{ loc.name }}</span>
            <span class="talea-map-tool__location-meta">
              {{ loc.region }}
              <template v-if="loc.animon.length"> · {{ loc.animon.length }} species</template>
            </span>
          </button>
        </li>
        <li v-if="filteredLocations.length === 0" class="talea-map-tool__empty">No areas match your search.</li>
      </ul>
    </aside>
  </div>
</template>

<script setup>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { computed, onMounted, onUnmounted, ref, shallowRef, watch } from 'vue'
import taleaMap from '@/data/taleaMap.js'
import { animon, imgSrc } from '@/lib/data'
import {
  mapBounds,
  mapDefaultCenter,
  mapDefaultZoom,
  mapMaxBounds,
  pinIconOptions,
  toLeafletPosition,
} from '@/lib/mapCoords'

const mapEl = ref(null)
const mapInstance = shallowRef(null)
const markerLayer = shallowRef(null)
const iconCache = new Map()
const query = ref('')
const regionFilter = ref('all')
const activeId = ref(null)
const selected = ref(null)

const regionTabs = [
  { id: 'all', label: 'All' },
  { id: 'Logos', label: 'Logos (North)' },
  { id: 'Mythos', label: 'Mythos (South)' },
]

const animonByName = new Map(
  animon.map((entry) => [entry.name.toLowerCase(), entry]),
)

const filteredLocations = computed(() => {
  const q = query.value.trim().toLowerCase()
  return taleaMap.locations.filter((loc) => {
    if (regionFilter.value !== 'all' && loc.region !== regionFilter.value) return false
    if (!q) return true
    return loc.name.toLowerCase().includes(q) || loc.region.toLowerCase().includes(q)
  })
})

const selectedAnimon = computed(() => {
  if (!selected.value) return []
  return selected.value.animon
    .map((name) => animonByName.get(name.toLowerCase()))
    .filter(Boolean)
})

function getPinIcon(url) {
  if (!iconCache.has(url)) {
    iconCache.set(url, L.icon(pinIconOptions(url)))
  }
  return iconCache.get(url)
}

function selectLocation(loc) {
  selected.value = loc
  activeId.value = loc.id
  const map = mapInstance.value
  if (map) {
    map.setView(toLeafletPosition(loc.coordinate), taleaMap.maxZoom, { animate: true })
  }
}

function clearSelection() {
  selected.value = null
  activeId.value = null
}

function zoomIn() {
  mapInstance.value?.zoomIn()
}

function zoomOut() {
  mapInstance.value?.zoomOut()
}

function resetView() {
  mapInstance.value?.setView(mapDefaultCenter, mapDefaultZoom, { animate: false })
}

function buildMarkers() {
  const layer = markerLayer.value
  if (!layer) return
  layer.clearLayers()

  for (const loc of filteredLocations.value) {
    const marker = L.marker(toLeafletPosition(loc.coordinate), {
      icon: getPinIcon(loc.pinIcon),
      bubblingMouseEvents: true,
    })
    marker.bindTooltip(loc.name, {
      direction: 'top',
      offset: [0, -12],
      opacity: 0.95,
    })
    marker.on('click', () => selectLocation(loc))
    layer.addLayer(marker)
  }
}

onMounted(() => {
  const map = L.map(mapEl.value, {
    crs: L.CRS.Simple,
    center: mapDefaultCenter,
    zoom: mapDefaultZoom,
    minZoom: taleaMap.minZoom,
    maxZoom: taleaMap.maxZoom,
    maxBounds: mapMaxBounds,
    zoomControl: false,
    attributionControl: false,
  })

  L.imageOverlay(taleaMap.mapImage, mapBounds).addTo(map)

  const layer = L.layerGroup().addTo(map)
  mapInstance.value = map
  markerLayer.value = layer
  buildMarkers()
})

onUnmounted(() => {
  mapInstance.value?.remove()
  mapInstance.value = null
  markerLayer.value = null
})

watch([filteredLocations, activeId], buildMarkers)
watch(regionFilter, clearSelection)
</script>
