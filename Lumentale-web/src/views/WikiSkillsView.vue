<template>
  <main class="page-main">
    <section class="page-hero-section" aria-labelledby="skills-title">
      <div class="container">
        <div class="page-hero-content page-hero-center">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <RouterLink to="/">Home</RouterLink>
            <span aria-hidden="true">›</span>
            <RouterLink to="/wiki">LumenTale Wiki</RouterLink>
            <span aria-hidden="true">›</span>
            <span>Skills</span>
          </nav>
          <p class="eyebrow">LumenTale Wiki</p>
          <h1 id="skills-title">LumenTale Wiki – Skills &amp; Move List</h1>
          <p class="lead lead-center">
            Every move we list in Memories of Trey — power, SP cost, accuracy, cooldown, category, and target type.
            Use filters to plan STAB coverage and SP budgets for 4v4 teams.
          </p>
          <div class="page-meta" style="margin-top: 14px">
            <span class="meta-pill">{{ skills.length }} skills</span>
            <span class="meta-pill">{{ skillTypes.length }} types</span>
            <span class="meta-pill">{{ categories.length }} categories</span>
          </div>
        </div>
      </div>
    </section>

    <section class="data-section" aria-labelledby="skills-about-title">
      <div class="container">
        <article class="guide-block">
          <h2 id="skills-about-title">How to Read Move Stats</h2>
          <p class="prose">
            Skills in LumenTale share your team's <strong>SP pool</strong> in 4v4 battles. Power and accuracy tell you
            how hard a move hits; category (<strong>Physical</strong>, <strong>Special</strong>, or <strong>Status</strong>)
            affects how it interacts with typings and shields. Cooldown gates how often a strong finisher can return.
          </p>
          <p class="prose" style="margin-top: 12px">
            Element type on a skill is not the whole matchup story — scan opponents to see resistances. Status moves with
            zero power can still swing fights by setting terrain or buff dimensions, so do not judge them by power alone.
          </p>
        </article>
      </div>
    </section>

    <section class="wiki-catalog-section" aria-labelledby="skills-list-title">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">Move List</p>
          <h2 id="skills-list-title">Search All LumenTale Skills</h2>
          <p>Filter by element type or category, then search by move name.</p>
        </div>

        <div class="dex-filter-panel">
          <div class="filter-row">
            <span class="filter-label">Type</span>
            <button type="button" class="filter-pill" :class="{ 'is-active': !typeFilter }" @click="typeFilter = ''">All</button>
            <button
              v-for="t in skillTypes"
              :key="t"
              type="button"
              class="filter-pill"
              :class="{ 'is-active': typeFilter === t }"
              @click="typeFilter = typeFilter === t ? '' : t"
            >
              {{ t }}
            </button>
          </div>
          <div class="filter-row">
            <span class="filter-label">Category</span>
            <button type="button" class="filter-pill" :class="{ 'is-active': !catFilter }" @click="catFilter = ''">All</button>
            <button
              v-for="c in categories"
              :key="c"
              type="button"
              class="filter-pill"
              :class="{ 'is-active': catFilter === c }"
              @click="catFilter = catFilter === c ? '' : c"
            >
              {{ c }}
            </button>
          </div>
          <label class="filter-search">
            <svg class="filter-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
              <path d="M20 20L16 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
            <input v-model="query" type="search" placeholder="Search skills…" aria-label="Search skills" />
          </label>
        </div>

        <div class="wiki-skill-grid">
          <article v-for="skill in visible" :key="skill.slug" class="wiki-skill-card">
            <div class="wiki-skill-top">
              <strong>{{ skill.name }}</strong>
            </div>
            <div class="wiki-skill-tags">
              <span :class="tagClass(skill.type)">{{ skill.type }}</span>
              <span class="wiki-skill-cat">{{ skill.category }}</span>
            </div>
            <div class="wiki-skill-stats">
              <div class="wiki-skill-stat">
                <span>Power</span>
                <strong>{{ skill.power || '—' }}</strong>
              </div>
              <div class="wiki-skill-stat">
                <span>SP</span>
                <strong>{{ skill.cost }}</strong>
              </div>
              <div class="wiki-skill-stat">
                <span>Acc</span>
                <strong>{{ skill.accuracy }}%</strong>
              </div>
              <div v-if="skill.cooldown" class="wiki-skill-stat">
                <span>CD</span>
                <strong>{{ skill.cooldown }}</strong>
              </div>
            </div>
            <p v-if="skill.targetType" class="wiki-skill-target">{{ skill.targetType }} · {{ skill.aoeType }}</p>
          </article>
        </div>
        <div v-if="hasMore" ref="sentinel" class="list-load-sentinel" aria-hidden="true"></div>
        <p v-if="hasMore" class="result-note">
          <button type="button" class="btn-secondary btn-load-more" @click="loadMore">Load more skills</button>
        </p>
        <p class="result-note">Showing {{ visible.length }} of {{ filtered.length }} skills ({{ skills.length }} total)</p>
      </div>
    </section>

    <section class="data-section">
      <div class="container">
        <div class="beginner-split">
          <article class="info-card">
            <h2>Team-Building Tips</h2>
            <div class="panel-list">
              <div v-for="row in skillTips" :key="row.label" class="panel-row panel-row-stack">
                <strong>{{ row.label }}</strong>
                <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 4px">{{ row.text }}</p>
              </div>
            </div>
          </article>
          <article class="info-card">
            <h2>Related Pages</h2>
            <div class="related-links" style="margin-top: 8px">
              <RouterLink class="related-link" to="/animon">
                Animon Dex
                <small>Species move pools on detail pages</small>
              </RouterLink>
              <RouterLink class="related-link" to="/affinities">
                Type Chart
                <small>Elements and affinities</small>
              </RouterLink>
              <RouterLink class="related-link" to="/wiki/items">
                Items List
                <small>Medicines and materials</small>
              </RouterLink>
              <RouterLink class="related-link" to="/wiki">
                Wiki Home
                <small>All reference pages</small>
              </RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, onMounted, ref, toRef, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useInfiniteList } from '@/composables/useInfiniteList.js'
import { skillTypes, skills, tagClass } from '@/lib/data'

const route = useRoute()
const query = ref('')
const typeFilter = ref('')
const catFilter = ref('')
const categories = [...new Set(skills.map((s) => s.category))].sort()

function applyRouteQuery() {
  query.value = route.query.q ? String(route.query.q) : ''
}

onMounted(applyRouteQuery)
watch(() => route.query.q, applyRouteQuery)

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return skills.filter((s) => {
    if (typeFilter.value && s.type !== typeFilter.value) return false
    if (catFilter.value && s.category !== catFilter.value) return false
    if (!q) return true
    return s.name.toLowerCase().includes(q)
  })
})

const { visible, hasMore, sentinel, loadMore } = useInfiniteList(toRef(filtered))

const skillTips = [
  { label: 'SP budget', text: 'High-power finishers look great on paper — ensure your rotation can afford them twice per fight.' },
  { label: 'Status utility', text: 'Zero-power terrain and buff skills can matter more than raw damage on boss routes.' },
  { label: 'Cooldown planning', text: 'Moves with cooldown cannot spam — pair them with cheaper STAB options.' },
  { label: 'Target type', text: 'Check whether a skill hits Foe, Ally, or Self before assuming it fits your lead attacker.' },
]
</script>
