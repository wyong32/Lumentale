<template>
  <main class="page-main">
    <section class="page-hero-section" aria-labelledby="items-title">
      <div class="container">
        <div class="page-hero-content">
          <div>
            <nav class="breadcrumb" aria-label="Breadcrumb">
              <RouterLink to="/">Home</RouterLink>
              <span aria-hidden="true">›</span>
              <RouterLink to="/wiki">Wiki</RouterLink>
              <span aria-hidden="true">›</span>
              <span>Items</span>
            </nav>
            <p class="eyebrow">Item guide</p>
            <h1 id="items-title">LumenTale Items List – Bilias, Materials &amp; Consumables</h1>
            <p class="lead">
              Every item we track in Memories of Trey — search {{ items.length }} Bilias, medicines, ingredients,
              materials, and key items. Open any row for shop price, effects, and linked cooking or crafting recipes.
            </p>
          </div>
          <RouterLink class="btn-secondary" to="/wiki">← Wiki Home</RouterLink>
        </div>
      </div>
    </section>

    <section class="data-section" aria-labelledby="items-table-heading">
      <div class="container">
        <h2 id="items-table-heading" class="sr-only">Searchable LumenTale Items List</h2>
        <p class="page-intro">
          Browse every LumenTale item in Memories of Trey. Filter by type or search by name — each item has its own page
          with recipes that craft it or need it as a material.
        </p>
        <div class="dex-filter-panel">
          <div class="filter-row">
            <span class="filter-label">Type</span>
            <button type="button" class="filter-pill" :class="{ 'is-active': !typeFilter }" @click="typeFilter = ''">All</button>
            <button
              v-for="t in itemTypes"
              :key="t"
              type="button"
              class="filter-pill"
              :class="{ 'is-active': typeFilter === t }"
              @click="typeFilter = typeFilter === t ? '' : t"
            >
              {{ t }}
            </button>
          </div>
          <label class="filter-search">
            <svg class="filter-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
              <path d="M20 20L16 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
            <input v-model="query" type="search" placeholder="Search items…" aria-label="Search items" />
          </label>
        </div>
        <div class="data-content">
          <div class="data-table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Role</th>
                  <th scope="col">Type</th>
                  <th scope="col">Price</th>
                  <th scope="col">Stack</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in filtered" :key="item.slug">
                  <td>
                    <RouterLink class="row-link" :to="`/wiki/items/${item.slug}`">
                      <img
                        class="row-thumb"
                        :src="imgSrc(item.image, item.name)"
                        :alt="item.name"
                        width="72"
                        height="72"
                        loading="lazy"
                      />
                      <div>
                        <strong>{{ item.name }}</strong>
                        <small v-if="item.localizedName" style="display: block; color: var(--text-dim)">{{ item.localizedName }}</small>
                      </div>
                    </RouterLink>
                  </td>
                  <td>{{ itemRoleLabel(item) }}</td>
                  <td>{{ item.type }}</td>
                  <td>{{ item.price || '—' }}</td>
                  <td>{{ item.maxStack }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p class="result-note">Showing {{ filtered.length }} of {{ items.length }} items</p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { imgSrc, itemBySlug, itemRoleLabel, itemTypes, items } from '@/lib/data'

const route = useRoute()
const router = useRouter()
const query = ref('')
const typeFilter = ref('')

function resolveQueryRedirect() {
  const q = String(route.query.q || '').trim()
  if (!q) return
  const bySlug = itemBySlug(q)
  const byName = items.find((entry) => entry.name.toLowerCase() === q.toLowerCase())
  const match = bySlug || byName
  if (match) {
    router.replace({ path: `/wiki/items/${match.slug}` })
    return
  }
  query.value = q
}

resolveQueryRedirect()
watch(() => route.query.q, resolveQueryRedirect)

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return items.filter((item) => {
    if (typeFilter.value && item.type !== typeFilter.value) return false
    if (!q) return true
    const haystack = [item.name, item.localizedName, item.type, itemRoleLabel(item)].filter(Boolean).join(' ').toLowerCase()
    return haystack.includes(q)
  })
})
</script>
