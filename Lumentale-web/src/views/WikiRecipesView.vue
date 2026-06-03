<template>
  <main class="page-main">
    <section class="page-hero-section" aria-labelledby="recipes-title">
      <div class="container">
        <div class="page-hero-content">
          <div>
            <nav class="breadcrumb" aria-label="Breadcrumb">
              <RouterLink to="/">Home</RouterLink>
              <span aria-hidden="true">›</span>
              <RouterLink to="/wiki">Wiki</RouterLink>
              <span aria-hidden="true">›</span>
              <span>Recipes</span>
            </nav>
            <p class="eyebrow">Recipe guide</p>
            <h1 id="recipes-title">LumenTale Recipes – Fountain Cooking &amp; Workshop Crafting</h1>
            <p class="lead">
              {{ recipes.length }} recipes for Memories of Trey — each card shows what you put in and what you get out.
              Tap any material for its item page, or tap the dish for the full recipe.
            </p>
          </div>
          <RouterLink class="btn-secondary" to="/wiki">← Wiki Home</RouterLink>
        </div>
      </div>
    </section>

    <section class="data-section" aria-labelledby="recipes-list-heading">
      <div class="container">
        <article class="guide-block" style="margin-bottom: 24px">
          <h2 id="recipes-about-title">How Each Recipe Card Works</h2>
          <p class="prose">
            On the <strong>left</strong> is what you craft; on the <strong>right</strong> are the materials and amounts.
            Orange-tinted cards are Fountain cooking, blue-tinted cards are workshop crafting. Tap a chip to open that
            item — tap the dish image for success rate and bench details.
          </p>
        </article>

        <h2 id="recipes-list-heading" class="sr-only">All LumenTale recipes with ingredients</h2>
        <p class="page-intro">
          Browse LumenTale recipes for Memories of Trey. Filter by Fountain cooking or workshop crafting, or search by
          dish or material name.
        </p>

        <div class="dex-filter-panel">
          <div class="filter-row">
            <span class="filter-label">Where you craft</span>
            <button
              type="button"
              class="filter-pill"
              :class="{ 'is-active': !projectFilter }"
              @click="projectFilter = ''"
            >
              All
            </button>
            <button
              v-for="t in recipeProjectTypes"
              :key="t"
              type="button"
              class="filter-pill"
              :class="{ 'is-active': projectFilter === t }"
              @click="projectFilter = projectFilter === t ? '' : t"
            >
              {{ t }}
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
              placeholder="Search by dish or material…"
              aria-label="Search recipes"
            />
          </label>
        </div>

        <div class="recipe-list-grid">
          <article
            v-for="recipe in filtered"
            :key="recipe.slug"
            class="recipe-card"
            :class="recipe.projectLabel === 'Cooking' ? 'recipe-card--cooking' : 'recipe-card--crafting'"
          >
            <header class="recipe-card-top">
              <span class="recipe-station-badge">{{ recipe.projectLabel }}</span>
              <span
                v-if="recipe.successRate != null && recipe.successRate < 100"
                class="recipe-success recipe-success--risk"
              >
                {{ recipe.successRate }}% success
              </span>
              <span v-else-if="recipe.successRate != null" class="recipe-success recipe-success--safe">
                {{ recipe.successRate }}% success
              </span>
              <RouterLink class="recipe-card-open" :to="`/wiki/recipes/${recipe.slug}`">
                Open recipe
              </RouterLink>
            </header>

            <div class="recipe-card-body">
              <RouterLink
                class="recipe-output"
                :to="`/wiki/recipes/${recipe.slug}`"
                :aria-label="`Open ${recipe.result?.name || recipe.name} recipe`"
              >
                <div class="recipe-output-frame">
                  <img
                    :src="imgSrc(recipe.result?.image, recipe.result?.name || recipe.name)"
                    :alt="recipe.result?.name || recipe.name"
                    width="80"
                    height="80"
                    loading="lazy"
                  />
                </div>
                <strong class="recipe-output-name">{{ recipe.result?.name || recipe.name }}</strong>
                <span class="recipe-output-label">You make this</span>
              </RouterLink>

              <div class="recipe-mix" :aria-label="`Ingredients for ${recipe.result?.name || recipe.name}`">
                <p class="recipe-mix-label">
                  <span class="recipe-mix-plus" aria-hidden="true">+</span>
                  Combine
                </p>
                <div class="recipe-chips">
                  <RouterLink
                    v-for="(ing, index) in recipe.ingredients"
                    :key="`${recipe.slug}-ing-${ing.guid}-${index}`"
                    class="recipe-chip"
                    :to="itemDetailLink(ing.slug)"
                    :title="`View ${ing.name} item page`"
                  >
                    <img
                      :src="imgSrc(ing.image, ing.name)"
                      :alt="''"
                      width="36"
                      height="36"
                      loading="lazy"
                    />
                    <span class="recipe-chip-name">{{ ing.name }}</span>
                    <span class="recipe-chip-qty">×{{ ing.amount }}</span>
                  </RouterLink>
                </div>
                <span class="recipe-mix-arrow" aria-hidden="true">→</span>
              </div>
            </div>

            <footer class="recipe-card-foot">
              <span>{{ recipe.preferredActorLabel }} bench</span>
              <span>{{ recipe.ingredients.length }} materials</span>
            </footer>
          </article>
        </div>

        <p class="result-note">
          Showing {{ filtered.length }} of {{ recipes.length }} recipes ({{ cookingCount }} cooking, {{ craftingCount }}
          crafting)
        </p>
      </div>
    </section>

    <section class="data-section" aria-labelledby="recipes-tips-title">
      <div class="container">
        <div class="beginner-split">
          <article class="info-card">
            <h2 id="recipes-tips-title">What We Learned While Crafting</h2>
            <div class="panel-list">
              <div v-for="row in recipeTips" :key="row.label" class="panel-row panel-row-stack">
                <strong>{{ row.label }}</strong>
                <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 4px">{{ row.text }}</p>
              </div>
            </div>
          </article>
          <article class="info-card">
            <h2>Related Pages</h2>
            <div class="related-links" style="margin-top: 8px">
              <RouterLink class="related-link" to="/wiki/items">
                Items List
                <small>Every material with its own detail page</small>
              </RouterLink>
              <RouterLink class="related-link" to="/beginner">
                Beginner Guide
                <small>When the Fountain unlocks and early food</small>
              </RouterLink>
              <RouterLink class="related-link" to="/evolutions">
                Evolution Guide
                <small>Mats that double as evolve items</small>
              </RouterLink>
              <RouterLink class="related-link" to="/wiki">
                Wiki Home
                <small>Skills, bosses, and more guides</small>
              </RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { imgSrc, itemDetailLink, recipeProjectTypes, recipes } from '@/lib/data'

const query = ref('')
const projectFilter = ref('')

const cookingCount = recipes.filter((r) => r.projectLabel === 'Cooking').length
const craftingCount = recipes.filter((r) => r.projectLabel === 'Crafting').length

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  const list = recipes.filter((recipe) => {
    if (projectFilter.value && recipe.projectLabel !== projectFilter.value) return false
    if (!q) return true
    const haystack = [
      recipe.name,
      recipe.result?.name,
      recipe.projectLabel,
      recipe.ingredientSummary,
      recipe.preferredActorLabel,
      ...recipe.ingredients.map((item) => item.name),
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()
    return haystack.includes(q)
  })
  return list.sort((a, b) => {
    if (a.projectLabel !== b.projectLabel) {
      if (a.projectLabel === 'Cooking') return -1
      if (b.projectLabel === 'Cooking') return 1
      return a.projectLabel.localeCompare(b.projectLabel)
    }
    const nameA = (a.result?.name || a.name).toLowerCase()
    const nameB = (b.result?.name || b.name).toLowerCase()
    return nameA.localeCompare(nameB)
  })
})

const recipeTips = [
  {
    label: 'Tap each chip',
    text: 'Material chips open that item’s page — check price and other recipes before you spend the last copy.',
  },
  {
    label: 'Cook before long routes',
    text: 'Orange Fountain cards usually never fail — craft a batch before a boss or long dungeon run.',
  },
  {
    label: 'Save before risky crafts',
    text: 'Blue workshop cards below 100% can fail and still consume every chip on the card.',
  },
  {
    label: 'Check evolve mats first',
    text: 'Open the Evolution guide if an ingredient might be the last copy for an Animon.',
  },
]
</script>
