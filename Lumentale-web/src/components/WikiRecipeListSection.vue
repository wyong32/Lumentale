<template>
  <section
    class="data-section recipe-catalog-section"
    :class="catalogClass"
    aria-labelledby="recipes-list-heading"
  >
    <div class="container">
      <article v-if="showAbout" class="recipe-catalog-intro">
        <div class="recipe-catalog-intro-icon" aria-hidden="true">{{ introIcon }}</div>
        <div>
          <h2 id="recipes-about-title">{{ aboutTitle }}</h2>
          <p>{{ aboutProse }}</p>
        </div>
      </article>

      <h2 id="recipes-list-heading" class="sr-only">{{ listHeading }}</h2>

      <div class="recipe-catalog-toolbar">
        <p class="recipe-catalog-count">
          <strong>{{ filtered.length }}</strong>
          <span>{{ projectLabel }} recipes</span>
        </p>
        <label class="recipe-catalog-search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
            <path d="M20 20L16 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
          <input
            v-model="query"
            type="search"
            :placeholder="searchPlaceholder"
            :aria-label="searchAria"
          />
        </label>
      </div>

      <p v-if="intro" class="recipe-catalog-hint">{{ intro }}</p>

      <p v-if="filtered.length === 0" class="recipe-catalog-empty">No recipes match your search.</p>

      <ul v-else class="recipe-catalog-list" role="list">
        <li
          v-for="(recipe, index) in visible"
          :key="recipe.slug"
          class="recipe-entry"
          :style="{ '--entry-i': index }"
        >
          <article class="recipe-entry-card">
            <RouterLink
              class="recipe-entry-main"
              :to="`/wiki/recipes/${recipe.slug}`"
              :aria-label="`Open ${recipe.result?.name || recipe.name} recipe`"
            >
              <div class="recipe-entry-art">
                <img
                  :src="imgSrc(recipe.result?.image, recipe.result?.name || recipe.name)"
                  :alt="recipe.result?.name || recipe.name"
                  width="72"
                  height="72"
                  loading="lazy"
                />
              </div>

              <div class="recipe-entry-copy">
                <div class="recipe-entry-title-row">
                  <h3 class="recipe-entry-title">{{ recipe.result?.name || recipe.name }}</h3>
                  <span
                    v-if="recipe.successRate != null"
                    class="recipe-entry-rate"
                    :class="recipe.successRate < 100 ? 'is-risk' : 'is-safe'"
                  >
                    {{ recipe.successRate }}%
                  </span>
                </div>
                <p class="recipe-entry-meta">
                  <span>{{ recipe.preferredActorLabel }}</span>
                  <span aria-hidden="true">·</span>
                  <span>{{ recipe.ingredients.length }} materials</span>
                </p>
              </div>

              <span class="recipe-entry-go">
                <span class="recipe-entry-go-text">Recipe</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </RouterLink>

            <div
              v-if="recipe.ingredients.length"
              class="recipe-entry-ingredients"
              :aria-label="`Ingredients for ${recipe.result?.name || recipe.name}`"
            >
              <span class="recipe-entry-ing-label">{{ isCooking ? 'Combine' : 'Materials' }}</span>
              <div class="recipe-entry-ing-track">
                <RouterLink
                  v-for="(ing, ingIndex) in recipe.ingredients"
                  :key="`${recipe.slug}-ing-${ing.guid}-${ingIndex}`"
                  class="recipe-ing-pill"
                  :to="itemDetailLink(ing.slug)"
                  :title="`View ${ing.name}`"
                  @click.stop
                >
                  <span class="recipe-ing-pill-icon">
                    <img
                      :src="imgSrc(ing.image, ing.name)"
                      :alt="`${ing.name} ingredient icon`"
                      width="28"
                      height="28"
                      loading="lazy"
                    />
                  </span>
                  <span class="recipe-ing-pill-name">{{ ing.name }}</span>
                  <span class="recipe-ing-pill-qty">×{{ ing.amount }}</span>
                </RouterLink>
              </div>
            </div>
          </article>
        </li>
      </ul>

      <div v-if="hasMore" ref="sentinel" class="list-load-sentinel" aria-hidden="true"></div>
      <div v-if="hasMore" class="recipe-catalog-more">
        <button type="button" class="btn-secondary btn-load-more" @click="loadMore">Load more</button>
      </div>
      <p class="result-note recipe-catalog-foot">
        Showing {{ visible.length }} of {{ filtered.length }} · {{ totalCount }} total on this list
      </p>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, toRef } from 'vue'
import { RouterLink } from 'vue-router'
import { useInfiniteList } from '@/composables/useInfiniteList.js'
import { imgSrc, itemDetailLink, recipes } from '@/lib/data'

const props = defineProps({
  projectLabel: { type: String, required: true },
  aboutTitle: { type: String, default: '' },
  aboutProse: { type: String, default: '' },
  showAbout: { type: Boolean, default: true },
  listHeading: { type: String, required: true },
  intro: { type: String, default: '' },
  searchPlaceholder: { type: String, default: 'Search by dish or material…' },
  searchAria: { type: String, default: 'Search recipes' },
})

const query = ref('')

const isCooking = computed(() => props.projectLabel === 'Cooking')
const catalogClass = computed(() =>
  isCooking.value ? 'recipe-catalog-section--cooking' : 'recipe-catalog-section--crafting',
)
const introIcon = computed(() => (isCooking.value ? '🍲' : '⚙️'))

const totalCount = computed(() => recipes.filter((r) => r.projectLabel === props.projectLabel).length)

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  const list = recipes.filter((recipe) => {
    if (recipe.projectLabel !== props.projectLabel) return false
    if (!q) return true
    const haystack = [
      recipe.name,
      recipe.result?.name,
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
    const nameA = (a.result?.name || a.name).toLowerCase()
    const nameB = (b.result?.name || b.name).toLowerCase()
    return nameA.localeCompare(nameB)
  })
})

const { visible, hasMore, sentinel, loadMore } = useInfiniteList(toRef(filtered))
</script>
