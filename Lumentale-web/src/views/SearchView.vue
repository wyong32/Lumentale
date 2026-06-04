<template>
  <main class="page-main">
    <section class="page-hero-section" aria-labelledby="search-title">
      <div class="container">
        <div class="page-hero-content page-hero-center">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <RouterLink to="/">Home</RouterLink>
            <span aria-hidden="true">›</span>
            <span>Search</span>
          </nav>
          <p class="eyebrow">LumenTale Wiki</p>
          <h1 id="search-title">Search LumenTale Wiki &amp; Dex</h1>
          <p class="lead lead-center">Find Animon, skills, items, recipes, bosses, and guide pages across Memories of Trey.</p>
          <form class="hero-search hero-search--page" role="search" @submit.prevent="submitSearch">
            <label class="filter-search filter-search--hero">
              <svg class="filter-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
                <path d="M20 20L16 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
              <input
                ref="inputRef"
                v-model="query"
                type="search"
                name="q"
                placeholder="Animon, items, skills, recipes…"
                aria-label="Search site"
                autocomplete="off"
              />
            </label>
            <button type="submit" class="btn-primary">Search</button>
          </form>
        </div>
      </div>
    </section>

    <section v-if="!qValid" class="data-section">
      <div class="container">
        <p class="page-intro" style="text-align: center">Enter at least 2 characters to search the dex and wiki tables.</p>
      </div>
    </section>

    <section v-else-if="results.total === 0" class="data-section">
      <div class="container">
        <p class="page-intro">No results for “{{ query.trim() }}”. Try another name or open a full list from the wiki.</p>
        <div class="btn-row btn-row-center" style="margin-top: 16px">
          <RouterLink class="btn-secondary" to="/animon">Animon Dex</RouterLink>
          <RouterLink class="btn-secondary" to="/wiki/items">Items</RouterLink>
          <RouterLink class="btn-secondary" to="/wiki/skills">Skills</RouterLink>
        </div>
      </div>
    </section>

    <template v-else>
      <section v-if="results.animon.length" class="data-section" aria-labelledby="search-animon">
        <div class="container">
          <h2 id="search-animon" class="search-section-title">Animon</h2>
          <div class="dex-content search-dex-grid">
            <RouterLink v-for="hit in results.animon" :key="hit.slug" class="dex-item" :to="hit.to">
              <div class="dex-item-art">
                <img :src="imgSrc(hit.image, hit.title)" :alt="hit.title" width="120" height="130" loading="lazy" />
              </div>
              <div class="dex-item-body">
                <strong>{{ hit.title }}</strong>
                <small>{{ hit.subtitle }}</small>
              </div>
            </RouterLink>
          </div>
        </div>
      </section>

      <section v-if="results.items.length" class="data-section" aria-labelledby="search-items">
        <div class="container">
          <h2 id="search-items" class="search-section-title">Items</h2>
          <div class="search-item-list">
            <RouterLink v-for="hit in results.items" :key="hit.slug" class="search-item-row" :to="hit.to">
              <img
                :src="imgSrc(hit.image, hit.title)"
                :alt="`${hit.title} item icon`"
                width="48"
                height="48"
                loading="lazy"
              />
              <div>
                <strong>{{ hit.title }}</strong>
                <small>{{ hit.subtitle }}</small>
              </div>
            </RouterLink>
          </div>
        </div>
      </section>

      <section v-if="results.recipes.length" class="data-section" aria-labelledby="search-recipes">
        <div class="container">
          <h2 id="search-recipes" class="search-section-title">Recipes</h2>
          <div class="search-recipe-grid">
            <RouterLink
              v-for="hit in results.recipes"
              :key="hit.slug"
              class="search-recipe-card"
              :class="hit.projectLabel === 'Cooking' ? 'recipe-card--cooking' : 'recipe-card--crafting'"
              :to="hit.to"
            >
              <img
                :src="imgSrc(hit.image, hit.title)"
                :alt="`${hit.title} recipe icon`"
                width="56"
                height="56"
                loading="lazy"
              />
              <div>
                <strong>{{ hit.title }}</strong>
                <small>{{ hit.subtitle }}</small>
              </div>
            </RouterLink>
          </div>
        </div>
      </section>

      <section v-if="results.skills.length" class="data-section" aria-labelledby="search-skills">
        <div class="container">
          <h2 id="search-skills" class="search-section-title">Skills</h2>
          <div class="data-table-wrap">
            <table class="data-table search-skills-table">
              <thead>
                <tr>
                  <th scope="col">Move</th>
                  <th scope="col">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="hit in results.skills" :key="hit.slug">
                  <td><strong>{{ hit.title }}</strong></td>
                  <td>{{ hit.subtitle }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="result-note">
            <RouterLink :to="{ path: '/wiki/skills', query: { q: query.trim() } }">Open full skills list with this filter</RouterLink>
          </p>
        </div>
      </section>

      <section v-if="results.bosses.length" class="data-section" aria-labelledby="search-bosses">
        <div class="container">
          <h2 id="search-bosses" class="search-section-title">Bosses</h2>
          <div class="grid-cards">
            <RouterLink
              v-for="hit in results.bosses"
              :key="hit.slug"
              class="info-card search-boss-card"
              :to="{ path: hit.to, hash: `#boss-${hit.slug}` }"
            >
              <img :src="imgSrc(hit.image, hit.title)" :alt="hit.title" width="72" height="72" loading="lazy" />
              <div>
                <strong>{{ hit.title }}</strong>
                <small>{{ hit.subtitle }}</small>
              </div>
            </RouterLink>
          </div>
        </div>
      </section>

      <section v-if="results.guides.length" class="data-section" aria-labelledby="search-guides">
        <div class="container">
          <h2 id="search-guides" class="search-section-title">Guides</h2>
          <div class="guides-content">
            <RouterLink v-for="hit in results.guides" :key="hit.slug" class="guide-card" :to="hit.to">
              <h3>{{ hit.title }}</h3>
              <p>{{ hit.subtitle }}</p>
              <span class="guide-card-arrow">Read →</span>
            </RouterLink>
          </div>
        </div>
      </section>
    </template>
  </main>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { imgSrc } from '@/lib/data'
import { searchSite } from '@/lib/search.js'

const route = useRoute()
const router = useRouter()
const query = ref('')
const inputRef = ref(null)

const qValid = computed(() => query.value.trim().length >= 2)
const results = computed(() => searchSite(query.value, 16))

function syncFromRoute() {
  query.value = route.query.q ? String(route.query.q) : ''
}

function submitSearch() {
  const q = query.value.trim()
  router.replace({ path: '/search', query: q ? { q } : {} })
}

onMounted(() => {
  syncFromRoute()
  inputRef.value?.focus()
})

watch(() => route.query.q, syncFromRoute)
</script>
