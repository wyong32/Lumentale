<template>
  <main class="page-main">
    <section class="page-hero-section" aria-labelledby="bosses-title">
      <div class="container">
        <div class="page-hero-content">
          <div>
            <nav class="breadcrumb" aria-label="Breadcrumb">
              <RouterLink to="/">Home</RouterLink>
              <span aria-hidden="true">›</span>
              <RouterLink to="/wiki">Wiki</RouterLink>
              <span aria-hidden="true">›</span>
              <span>Bosses</span>
            </nav>
            <p class="eyebrow">Boss guide</p>
            <h1 id="bosses-title">LumenTale Boss Guide – Stats, HP Bars &amp; Teams</h1>
            <p class="lead">
              Boss fights in Memories of Trey — {{ bosses.counts.bossAnimon }} boss Animon and
              {{ bosses.counts.campBosses }} camp teams with levels, HP bars, typings, and affinities so you know what
              you are walking into before you spend medicine.
            </p>
          </div>
          <RouterLink class="btn-secondary" to="/wiki">← Wiki Home</RouterLink>
        </div>
      </div>
    </section>

    <section class="data-section" aria-labelledby="bosses-list-heading">
      <div class="container">
        <h2 id="bosses-list-heading" class="sr-only">All LumenTale Boss Animon and Camp Boss Teams</h2>
        <p class="page-intro">
          Search LumenTale boss encounters in Memories of Trey. Each card shows boss level, element type, affinity, HP
          bars, target BST, and links to the base Animon dex entry.
        </p>
        <div class="dex-filter-panel">
          <label class="filter-search">
            <svg class="filter-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
              <path d="M20 20L16 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
            <input v-model="query" type="search" placeholder="Search bosses…" aria-label="Search bosses" />
          </label>
        </div>
        <div class="grid-cards">
          <article
            v-for="boss in filtered"
            :id="`boss-${boss.slug}`"
            :key="boss.slug"
            class="info-card boss-info-card"
            :class="{ 'is-highlight': highlightId === `boss-${boss.slug}` }"
          >
            <div class="boss-info-head">
              <div class="boss-thumb-wrap">
                <img
                  class="boss-thumb"
                  :src="imgSrc(boss.image, boss.originName || boss.name)"
                  :alt="boss.originName || boss.name"
                  width="88"
                  height="88"
                  loading="lazy"
                />
              </div>
              <div class="boss-info-meta">
                <h3>{{ boss.originName || boss.name }}</h3>
                <p class="boss-info-sub">{{ boss.name }}</p>
                <div class="page-meta">
                  <span class="meta-pill">Lv {{ boss.level }}</span>
                  <span :class="tagClass(boss.elementType)">{{ boss.elementType }}</span>
                  <span :class="tagClass(boss.emotionalType, 'emotion')">{{ boss.emotionalType }}</span>
                </div>
              </div>
            </div>
            <div class="stat-grid boss-stat-grid">
              <div class="stat-row"><span>HP Bars</span><strong>{{ boss.extraHealthBars + 1 }}</strong></div>
              <div class="stat-row"><span>Target BST</span><strong>{{ boss.targetBst }}</strong></div>
            </div>
            <div class="boss-info-actions">
              <RouterLink
                v-if="boss.originSlug"
                class="boss-info-link"
                :to="`/animon/${boss.originSlug}`"
              >
                View in Dex →
              </RouterLink>
              <RouterLink
                v-if="boss.originSlug && evolutionLinkForAnimon(boss.originSlug).query"
                class="boss-info-link"
                :to="evolutionLinkForAnimon(boss.originSlug)"
              >
                Evolution line →
              </RouterLink>
            </div>
          </article>
        </div>
        <p class="result-note">Showing {{ filtered.length }} of {{ bossList.length }} bosses</p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { bosses, evolutionLinkForAnimon, imgSrc, tagClass } from '@/lib/data'

const route = useRoute()
const query = ref('')
const highlightId = ref('')
const bossList = bosses.bossAnimon || []

const filtered = computed(() => {
  const animonSlug = route.query.animon ? String(route.query.animon) : ''
  const q = query.value.trim().toLowerCase()
  return bossList.filter((boss) => {
    if (animonSlug && boss.originSlug !== animonSlug) return false
    if (!q) return true
    return (
      boss.name.toLowerCase().includes(q) ||
      (boss.originName && boss.originName.toLowerCase().includes(q))
    )
  })
})

function scrollToTarget() {
  const hash = route.hash?.replace('#', '')
  if (!hash) return
  highlightId.value = hash
  nextTick(() => {
    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  })
}

onMounted(scrollToTarget)
watch(() => [route.hash, route.query.animon, filtered.value.length], scrollToTarget)
</script>
