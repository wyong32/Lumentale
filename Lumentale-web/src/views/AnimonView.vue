<template>
  <main class="page-main">
    <section class="page-hero-section" aria-labelledby="animon-title">
      <div class="container">
        <div class="page-hero-content page-hero-center">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <RouterLink to="/">Home</RouterLink>
            <span aria-hidden="true">›</span>
            <span>Animon</span>
          </nav>
          <p class="eyebrow">Animon Dex</p>
          <h1 id="animon-title">LumenTale Animon Dex – Every Species in Memories of Trey</h1>
          <p class="lead lead-center">
            Look up any Animon before you invest levels — filter by element, emotional affinity, or rarity, then open a
            card for BST, catch rate, base stats, and evolution links.
          </p>
          <div class="page-meta" style="margin-top: 14px">
            <span class="meta-pill">{{ animon.length }} Animon</span>
            <span class="meta-pill">{{ elementTypes.length }} Elements</span>
            <span class="meta-pill">{{ emotionalTypes.length }} Affinities</span>
          </div>
        </div>
      </div>
    </section>

    <section class="dex-section" aria-labelledby="animon-list-heading">
      <div class="container">
        <h2 id="animon-list-heading" class="sr-only">Full LumenTale Animon List</h2>
        <p class="page-intro">
          Tap any card to see full stats, typings, and where that line evolves — handy when you are deciding whether to
          catch or release a wild encounter.
        </p>
        <div class="dex-filter-panel">
          <div class="filter-row">
            <span class="filter-label">Affinity</span>
            <button
              type="button"
              class="filter-pill"
              :class="{ 'is-active': !emotionFilter }"
              @click="emotionFilter = ''"
            >
              All
            </button>
            <button
              v-for="t in emotionalTypes"
              :key="t"
              type="button"
              class="filter-pill"
              :class="{ 'is-active': emotionFilter === t }"
              @click="emotionFilter = emotionFilter === t ? '' : t"
            >
              {{ t }}
            </button>
          </div>

          <div class="filter-row">
            <span class="filter-label">Element</span>
            <button
              type="button"
              class="filter-pill"
              :class="{ 'is-active': !elementFilter }"
              @click="elementFilter = ''"
            >
              All
            </button>
            <button
              v-for="t in elementTypes"
              :key="t"
              type="button"
              class="filter-pill"
              :class="{ 'is-active': elementFilter === t }"
              @click="elementFilter = elementFilter === t ? '' : t"
            >
              {{ t }}
            </button>
          </div>

          <div class="filter-row">
            <span class="filter-label">Rarity</span>
            <button
              type="button"
              class="filter-pill"
              :class="{ 'is-active': !rarityFilter }"
              @click="rarityFilter = ''"
            >
              All
            </button>
            <button
              v-for="r in rarityTypes"
              :key="r"
              type="button"
              class="filter-pill"
              :class="{ 'is-active': rarityFilter === r }"
              @click="rarityFilter = rarityFilter === r ? '' : r"
            >
              {{ r }}
            </button>
          </div>

          <label class="filter-search">
            <svg class="filter-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
              <path d="M20 20L16 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
            <input
              v-model="query"
              type="search"
              placeholder="Search by name or number…"
              aria-label="Search Animon"
            />
          </label>
        </div>

        <div class="dex-content">
          <RouterLink
            v-for="entry in filtered"
            :key="entry.slug"
            class="dex-item"
            :to="`/animon/${entry.slug}`"
          >
            <div class="dex-item-art">
              <img
                :src="imgSrc(entry.image, entry.name)"
                :alt="`${entry.name} LumenTale Animon`"
                width="120"
                height="130"
                loading="lazy"
              />
            </div>
            <div class="dex-item-body">
              <small>#{{ entry.number }}</small>
              <strong>{{ entry.name }}</strong>
              <div class="dex-item-tags">
                <span :class="tagClass(entry.elementType)">{{ entry.elementType }}</span>
                <span :class="tagClass(entry.emotionalType, 'emotion')">{{ entry.emotionalType }}</span>
              </div>
              <small>BST {{ entry.minBst }}–{{ entry.maxBst }} · {{ entry.rarity }}</small>
            </div>
          </RouterLink>
        </div>
        <p class="result-note">Showing {{ filtered.length }} of {{ animon.length }} Animon</p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { animon, elementTypes, emotionalTypes, imgSrc, rarityTypes, tagClass } from '@/lib/data'

const route = useRoute()
const query = ref('')
const elementFilter = ref('')
const emotionFilter = ref('')
const rarityFilter = ref('')

function applyRouteFilters() {
  elementFilter.value = route.query.element ? String(route.query.element).toUpperCase() : ''
  emotionFilter.value = route.query.affinity || route.query.emotion
    ? String(route.query.affinity || route.query.emotion).toUpperCase()
    : ''
  rarityFilter.value = route.query.rarity ? String(route.query.rarity) : ''
  query.value = route.query.q ? String(route.query.q) : ''
}

onMounted(applyRouteFilters)
watch(() => route.query, applyRouteFilters)

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return animon.filter((entry) => {
    if (elementFilter.value && entry.elementType !== elementFilter.value) return false
    if (emotionFilter.value && entry.emotionalType !== emotionFilter.value) return false
    if (rarityFilter.value && entry.rarity !== rarityFilter.value) return false
    if (!q) return true
    return (
      entry.name.toLowerCase().includes(q) ||
      String(entry.number).includes(q) ||
      entry.elementType.toLowerCase().includes(q)
    )
  })
})
</script>
