<template>
  <main class="page-main">
    <section class="page-hero-section" aria-labelledby="evo-title">
      <div class="container">
        <div class="page-hero-content page-hero-center">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <RouterLink to="/">Home</RouterLink>
            <span aria-hidden="true">›</span>
            <span>Evolutions</span>
          </nav>
          <p class="eyebrow">Evolution Guide</p>
          <h1 id="evo-title">LumenTale Evolution Guide – Requirements &amp; Conditions</h1>
          <p class="lead lead-center">
            How Animon evolve in Memories of Trey — starter branches at level 40, item and weather triggers, trait
            counters, and special party conditions. We flag anything not yet confirmed so you can verify before grinding.
          </p>
          <div class="page-meta" style="margin-top: 14px">
            <span class="meta-pill">{{ rows.length }} evolution steps</span>
            <span class="meta-pill">{{ groups.length }} evolution types</span>
            <span class="meta-pill">5 starter lines</span>
          </div>
        </div>
      </div>
    </section>

    <section v-if="animonFocus" class="data-section evo-focus-section">
      <div class="container">
        <div class="evo-focus-banner">
          <p>
            Showing evolution steps for
            <RouterLink :to="`/animon/${animonFocus.slug}`">{{ animonFocus.name }}</RouterLink>
          </p>
          <RouterLink class="btn-secondary" to="/evolutions">Show all evolutions</RouterLink>
        </div>
      </div>
    </section>

    <section class="data-section" aria-labelledby="evo-basics-title">
      <div class="container">
        <article class="guide-block">
          <h2 id="evo-basics-title">How LumenTale Evolutions Work</h2>
          <p class="prose">
            Most Animon evolve by level, but Memories of Trey also gates forms behind items, time of day, weather,
            battle conditions, and story choices. Starter partners typically evolve once around <strong>level 18</strong>,
            then split into two final forms near <strong>level 40</strong> depending on path or held items — save before
            that branch if you care which end form you get.
          </p>
          <p class="prose" style="margin-top: 12px">
            This guide mixes routes we have tested ourselves with starter branches other players reported — those show an
            <span class="tag tag-warn">Inferred</span> tag. Save before a branch evolution and confirm in your own save
            before spending rare materials at the Fountain.
          </p>
        </article>
      </div>
    </section>

    <section class="evo-catalog-section" aria-labelledby="evo-catalog-title">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">Evolution Guide</p>
          <h2 id="evo-catalog-title">All Evolution Steps in This Guide</h2>
          <p>
            Filter by evolution type below. Starter partners use a branch layout; all other entries show as individual
            steps. Open a species page to jump here with that line highlighted.
          </p>
        </div>

        <div class="dex-filter-panel">
          <div class="filter-row">
            <span class="filter-label">Group</span>
            <button
              type="button"
              class="filter-pill"
              :class="{ 'is-active': !groupFilter }"
              @click="groupFilter = ''"
            >
              All
            </button>
            <button
              v-for="g in groups"
              :key="g"
              type="button"
              class="filter-pill"
              :class="{ 'is-active': groupFilter === g }"
              @click="toggleGroup(g)"
            >
              {{ g }}
            </button>
          </div>
        </div>

        <div v-for="section in displayGroups" :key="section.name" class="evo-group-block">
          <h3 v-if="!groupFilter" class="evo-group-title">{{ section.name }}</h3>

          <div v-if="section.name === 'Starter lines' && !animonFocus" class="evo-starter-grid">
            <article v-for="chain in starterChains" :key="chain.starter.slug" class="evo-chain-card">
              <header class="evo-chain-head">
                <RouterLink class="evo-chain-starter" :to="`/animon/${chain.starter.slug}`">
                  <img
                    :src="imgSrc(chain.starter.image, chain.starter.name)"
                    :alt="chain.starter.name"
                    width="56"
                    height="56"
                    loading="lazy"
                  />
                  <div>
                    <strong>{{ chain.starter.name }}</strong>
                    <div class="dex-item-tags">
                      <span :class="tagClass(chain.starter.elementType)">{{ chain.starter.elementType }}</span>
                      <span :class="tagClass(chain.starter.emotionalType, 'emotion')">{{ chain.starter.emotionalType }}</span>
                    </div>
                  </div>
                </RouterLink>
              </header>
              <div
                v-for="step in chain.steps"
                :id="step.anchorId"
                :key="step.anchorId"
                class="evo-chain-step"
                :class="{ 'is-highlight': highlightId === step.anchorId }"
              >
                <div class="evo-mini-flow">
                  <div class="evo-mini-side">
                    <RouterLink
                      v-for="entry in stepFromEntries(step)"
                      :key="`${step.anchorId}-from-${entry.slug}`"
                      class="evo-mini-node"
                      :to="`/animon/${entry.slug}`"
                    >
                      <img :src="imgSrc(entry.image, entry.name)" :alt="entry.name" width="48" height="48" loading="lazy" />
                      <span>{{ entry.name }}</span>
                    </RouterLink>
                  </div>
                  <span class="evo-mini-arrow" aria-hidden="true">→</span>
                  <div class="evo-mini-side">
                    <RouterLink
                      v-for="entry in stepToEntries(step)"
                      :key="`${step.anchorId}-to-${entry.slug}`"
                      class="evo-mini-node"
                      :to="`/animon/${entry.slug}`"
                    >
                      <img :src="imgSrc(entry.image, entry.name)" :alt="entry.name" width="48" height="48" loading="lazy" />
                      <span>{{ entry.name }}</span>
                    </RouterLink>
                  </div>
                </div>
                <p class="evo-chain-req">{{ step.requirement }}</p>
                <span :class="confidenceClass(step.confidence)">{{ step.confidence }}</span>
              </div>
            </article>
          </div>

          <div v-else class="evo-list">
            <article
              v-for="row in section.rows"
              :id="row.anchorId"
              :key="row.anchorId"
              class="evo-card"
              :class="{ 'is-highlight': highlightId === row.anchorId }"
            >
              <div class="evo-card-meta">
                <span class="evo-card-group">{{ row.group }}</span>
                <span :class="confidenceClass(row.confidence)">{{ row.confidence }}</span>
              </div>
              <div class="evo-card-flow">
                <div class="evo-card-side">
                  <template v-for="(name, idx) in parseEvolutionNames(row.from)">
                    <RouterLink
                      v-if="byName(name)"
                      :key="`${row.anchorId}-from-${name}`"
                      class="evo-card-node"
                      :to="`/animon/${byName(name).slug}`"
                    >
                      <img
                        :src="imgSrc(byName(name).image, name)"
                        :alt="name"
                        width="56"
                        height="56"
                        loading="lazy"
                      />
                      <span>{{ name }}</span>
                    </RouterLink>
                    <span v-else :key="`${row.anchorId}-from-${name}`" class="evo-card-node evo-card-node-text">{{ name }}</span>
                    <span
                      v-if="idx < parseEvolutionNames(row.from).length - 1"
                      :key="`${row.anchorId}-from-split-${idx}`"
                      class="evo-card-split"
                    >/</span>
                  </template>
                </div>
                <span class="evo-card-arrow" aria-hidden="true">→</span>
                <div class="evo-card-side">
                  <template v-for="(name, idx) in parseEvolutionNames(row.to)">
                    <RouterLink
                      v-if="byName(name)"
                      :key="`${row.anchorId}-to-${name}`"
                      class="evo-card-node"
                      :to="`/animon/${byName(name).slug}`"
                    >
                      <img
                        :src="imgSrc(byName(name).image, name)"
                        :alt="name"
                        width="56"
                        height="56"
                        loading="lazy"
                      />
                      <span>{{ name }}</span>
                    </RouterLink>
                    <span v-else :key="`${row.anchorId}-to-${name}`" class="evo-card-node evo-card-node-text">{{ name }}</span>
                    <span
                      v-if="idx < parseEvolutionNames(row.to).length - 1"
                      :key="`${row.anchorId}-to-split-${idx}`"
                      class="evo-card-split"
                    >/</span>
                  </template>
                </div>
              </div>
              <p class="evo-card-req">{{ row.requirement }}</p>
            </article>
          </div>
        </div>

        <p class="result-note">Showing {{ filtered.length }} of {{ rows.length }} evolution steps</p>
      </div>
    </section>

    <section class="data-section" aria-labelledby="evo-tips-title">
      <div class="container">
        <div class="beginner-split">
          <article class="info-card">
            <h2 id="evo-tips-title">Evolution Checklist</h2>
            <div class="panel-list">
              <div v-for="row in evoTips" :key="row.label" class="panel-row panel-row-stack">
                <strong>{{ row.label }}</strong>
                <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 4px">{{ row.text }}</p>
              </div>
            </div>
          </article>
          <article class="info-card">
            <h2>Related Guides</h2>
            <div class="related-links" style="margin-top: 8px">
              <RouterLink class="related-link" to="/starters">
                Starter Comparison
                <small>Five opening partners</small>
              </RouterLink>
              <RouterLink class="related-link" to="/beginner">
                Beginner Guide
                <small>First hours in Talea</small>
              </RouterLink>
              <RouterLink class="related-link" to="/animon">
                Animon Dex
                <small>Stats, types, and links</small>
              </RouterLink>
              <RouterLink class="related-link" to="/wiki/items">
                Items List
                <small>Evolution materials &amp; keys</small>
              </RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import {
  byName,
  bySlug,
  enrichedEvolutionRows,
  evolutionsForAnimon,
  imgSrc,
  parseEvolutionNames,
  starters,
  tagClass,
} from '@/lib/data'

const route = useRoute()
const groupFilter = ref('')
const highlightId = ref('')
const rows = enrichedEvolutionRows()
const groups = [...new Set(rows.map((row) => row.group))]

const animonFocus = computed(() => {
  const slug = route.query.animon
  return slug ? bySlug(String(slug)) : null
})

const filtered = computed(() => {
  let list = animonFocus.value ? evolutionsForAnimon(animonFocus.value.slug) : rows
  if (groupFilter.value) list = list.filter((row) => row.group === groupFilter.value)
  return list
})

const displayGroups = computed(() => {
  const list = filtered.value
  if (groupFilter.value) return [{ name: groupFilter.value, rows: list }]

  const map = new Map()
  for (const row of list) {
    if (!map.has(row.group)) map.set(row.group, [])
    map.get(row.group).push(row)
  }
  return groups.filter((name) => map.has(name)).map((name) => ({ name, rows: map.get(name) }))
})

const starterChains = computed(() =>
  starters().map((starter) => ({
    starter,
    steps: evolutionsForAnimon(starter.slug).filter((row) => row.group === 'Starter lines'),
  })),
)

const evoTips = [
  { label: 'Save before branches', text: 'Starter finals and item forks are often irreversible without restarting.' },
  { label: 'Check items twice', text: 'Fountain crafting can consume evolution stones you still need.' },
  { label: 'Read confidence tags', text: 'Inferred starter paths may differ slightly from your copy — verify in-game.' },
  { label: 'Weather windows', text: 'Keep species in party during the right time or weather before leveling up.' },
  { label: 'Trait grinding', text: 'Trait evolutions count across many fights — plan routes where the trait fires often.' },
]

function toggleGroup(name) {
  groupFilter.value = groupFilter.value === name ? '' : name
}

function confidenceClass(confidence) {
  return confidence === 'Needs check' ? 'tag tag-warn' : 'tag tag-status'
}

function stepFromEntries(step) {
  if (step.fromEntries.length) return step.fromEntries
  return parseEvolutionNames(step.from).map((name) => byName(name)).filter(Boolean)
}

function stepToEntries(step) {
  if (step.toEntries.length) return step.toEntries
  return parseEvolutionNames(step.to).map((name) => byName(name)).filter(Boolean)
}

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
