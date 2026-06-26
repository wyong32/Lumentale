<template>
  <main v-if="recipe" class="page-main wiki-detail-page">
    <section class="page-hero-section wiki-detail-hero" aria-labelledby="recipe-detail-title">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">›</span>
          <a href="/wiki">LumenTale Wiki</a>
          <span aria-hidden="true">›</span>
          <a :href="recipeListPath">{{ recipe.projectLabel }}</a>
          <span aria-hidden="true">›</span>
          <span>{{ displayName }}</span>
        </nav>
        <p class="eyebrow">{{ recipe.projectLabel }} recipe</p>
        <h1 id="recipe-detail-title">{{ displayName }}</h1>
        <p class="lead wiki-detail-lead">
          {{ recipe.ingredientSummary }} at the
          {{ recipe.projectLabel === 'Cooking' ? 'Fountain' : 'workshop' }}.
          {{ recipe.successRate ?? 'Unknown' }}% success with {{ recipe.preferredActorLabel }}.
        </p>
        <div class="page-meta wiki-detail-meta">
          <span class="meta-pill">{{ recipe.projectLabel }}</span>
          <span class="meta-pill">{{ recipe.successRate ?? '?' }}% success</span>
          <span class="meta-pill">{{ recipe.preferredActorLabel }}</span>
          <span v-if="resultType" class="meta-pill">{{ resultType }}</span>
        </div>
      </div>
    </section>
    <!-- <GptAdSlot unit="1" /> -->
    <AllianceAdSlot />

    <section class="detail-section">
      <div class="container">
        <div class="detail-content">
          <aside class="detail-art" aria-label="Crafted item and recipe stats">
            <img
              :src="imgSrc(recipe.result?.image, displayName)"
              :alt="`${displayName} crafted item in LumenTale`"
              width="280"
              height="280"
            />
            <p class="detail-art-label">Recipe stats</p>
            <div class="stat-grid">
              <div class="stat-row"><span>Station</span><strong>{{ recipe.projectLabel }}</strong></div>
              <div class="stat-row"><span>Success rate</span><strong>{{ recipe.successRate ?? '—' }}%</strong></div>
              <div class="stat-row"><span>Workstation</span><strong>{{ recipe.preferredActorLabel }}</strong></div>
              <div class="stat-row"><span>Ingredients</span><strong>{{ recipe.ingredients.length }}</strong></div>
              <div v-if="resultItem" class="stat-row"><span>Result price</span><strong>{{ resultItem.price || '—' }}</strong></div>
            </div>
            <div v-if="resultItem" class="detail-art-cta">
              <a class="btn-primary btn-block" :href="itemDetailLink(resultItem.slug)">
                Full item page
              </a>
            </div>
          </aside>

          <article
            class="detail-main"
            :class="recipe.projectLabel === 'Cooking' ? 'detail-main--cooking' : 'detail-main--crafting'"
          >
            <section
              class="detail-panel detail-panel--craft"
              :class="recipe.projectLabel === 'Cooking' ? 'recipe-card--cooking' : 'recipe-card--crafting'"
              aria-labelledby="recipe-how-heading"
            >
              <header class="detail-panel-head">
                <h2 id="recipe-how-heading">How to craft</h2>
                <span class="meta-pill">{{ recipe.projectLabel }}</span>
              </header>
              <div class="detail-panel-body">
                <p class="prose detail-sublead">
                  Gather these amounts for one craft. Tap a material to see its own item page.
                </p>
                <div class="detail-recipe-flow">
                  <div class="detail-recipe-flow-mats">
                    <p class="recipe-mix-label">
                      <span class="recipe-mix-plus" aria-hidden="true">+</span>
                      Materials
                    </p>
                    <div class="recipe-chips">
                      <a
                        v-for="(ing, index) in recipe.ingredients"
                        :key="`${recipe.slug}-ing-${ing.guid}-${index}`"
                        class="recipe-chip"
                        :href="itemDetailLink(ing.slug)"
                      >
                        <img
                          :src="imgSrc(ing.image, ing.name)"
                          :alt="`${ing.name} ingredient icon`"
                          width="36"
                          height="36"
                          loading="lazy"
                        />
                        <span class="recipe-chip-name">{{ ing.name }}</span>
                        <span class="recipe-chip-qty">×{{ ing.amount }}</span>
                      </a>
                    </div>
                  </div>
                  <span class="detail-recipe-flow-arrow" aria-hidden="true">→</span>
                  <a
                    v-if="resultItem"
                    class="detail-recipe-flow-result"
                    :href="itemDetailLink(resultItem.slug)"
                  >
                    <img
                      :src="imgSrc(recipe.result?.image, displayName)"
                      :alt="displayName"
                      width="64"
                      height="64"
                    />
                    <strong>{{ displayName }}</strong>
                  </a>
                  <div v-else class="detail-recipe-flow-result">
                    <strong>{{ displayName }}</strong>
                  </div>
                </div>
                <p class="detail-recipe-summary">{{ recipe.ingredientSummary }}</p>
              </div>
            </section>
    <!-- <GptAdSlot unit="2" /> -->
    <AllianceAdSlot />

            <section v-if="resultItem" class="detail-panel detail-panel--primary" aria-labelledby="recipe-result-heading">
              <header class="detail-panel-head">
                <h2 id="recipe-result-heading">What you get</h2>
                <a class="detail-explore-link" :href="itemDetailLink(resultItem.slug)">Item page</a>
              </header>
              <div class="detail-panel-body">
                <div class="detail-glance-grid detail-glance-grid--compact">
                  <div class="detail-glance-tile">
                    <span>Max stack</span>
                    <strong>×{{ resultItem.maxStack }}</strong>
                  </div>
                  <div class="detail-glance-tile">
                    <span>Material</span>
                    <strong>{{ resultItem.material || '—' }}</strong>
                  </div>
                  <div class="detail-glance-tile">
                    <span>Collectible</span>
                    <strong>{{ resultItem.isCollectible ? 'Yes' : 'No' }}</strong>
                  </div>
                </div>

                <ul v-if="resultEffectEntries.length" class="detail-effect-play-list">
                  <li
                    v-for="(entry, index) in resultEffectEntries"
                    :key="`result-play-${index}`"
                    class="detail-effect-play"
                  >
                    <strong>{{ entry.playerTitle }}</strong>
                    <p v-if="entry.playerDetail">{{ entry.playerDetail }}</p>
                    <span v-if="entry.scope" class="detail-scope-pill">{{ entry.scope }}</span>
                  </li>
                </ul>

                <p v-if="resultDescription" class="prose">{{ resultDescription }}</p>
                <p v-else-if="resultDerivedProse && !resultEffectEntries.length" class="prose">{{ resultDerivedProse }}</p>

                <div class="detail-flag-grid" style="margin-top: 14px">
                  <div class="detail-flag-tile">
                    <span>Target</span>
                    <strong>{{ resultItem.targetType || '—' }}</strong>
                  </div>
                  <div class="detail-flag-tile" :class="resultItem.givable ? 'is-yes' : 'is-no'">
                    <span>Gift to NPC</span>
                    <strong>{{ resultItem.givable ? 'Yes' : 'No' }}</strong>
                  </div>
                  <div class="detail-flag-tile" :class="!resultItem.unsellable ? 'is-yes' : 'is-no'">
                    <span>Sell at shop</span>
                    <strong>{{ resultItem.unsellable ? 'No' : 'Yes' }}</strong>
                  </div>
                </div>
              </div>
            </section>
    <!-- <GptAdSlot unit="3" /> -->
    <AllianceAdSlot />

            <section
              v-if="resultEffectEntries.length"
              class="detail-panel detail-panel--stats"
              aria-labelledby="recipe-data-heading"
            >
              <header class="detail-panel-head">
                <div>
                  <h2 id="recipe-data-heading">Exact stats</h2>
                  <p class="detail-panel-sub">In-game effect values for {{ displayName }}.</p>
                </div>
              </header>
              <div class="detail-panel-body">
                <ul class="detail-effect-list">
                  <li
                    v-for="(entry, index) in resultEffectEntries"
                    :key="`result-raw-${index}`"
                    class="detail-effect-item"
                  >
                    <code class="detail-effect-summary">{{ entry.summary }}</code>
                    <p v-if="entry.meta" class="detail-effect-meta">{{ entry.meta }}</p>
                  </li>
                </ul>
              </div>
            </section>
    <!-- <GptAdSlot unit="1" /> -->
    <AllianceAdSlot />

            <section v-if="resultUsedElsewhere.length" class="detail-panel" aria-labelledby="recipe-more-heading">
              <header class="detail-panel-head">
                <h2 id="recipe-more-heading">Also used as ingredient</h2>
                <span class="detail-count">{{ resultUsedElsewhere.length }}</span>
              </header>
              <div class="detail-panel-body">
                <p class="prose detail-sublead">
                  After you craft {{ displayName }}, you can spend it in these other recipes.
                </p>
                <div class="detail-ref-list">
                  <a
                    v-for="other in resultUsedElsewhere"
                    :key="other.slug"
                    class="detail-ref-row"
                    :href="`/wiki/recipes/${other.slug}`"
                  >
                    <img
                      :src="imgSrc(other.result?.image, other.result?.name)"
                      :alt="`${other.result?.name || other.name} recipe icon`"
                      width="52"
                      height="52"
                      loading="lazy"
                    />
                    <div class="detail-ref-body">
                      <strong>{{ other.result?.name || other.name }}</strong>
                      <p>{{ other.projectLabel }} · {{ other.ingredientSummary }}</p>
                    </div>
                    <span class="detail-ref-arrow" aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </section>
    <!-- <GptAdSlot unit="2" /> -->
    <AllianceAdSlot />

            <aside class="detail-tip" aria-label="Player tip">
              <p>
                <strong>Before you craft:</strong>
                Peek at the Fountain in Talea first — ingredient counts and success % are what matter on your save, especially after an update.
              </p>
            </aside>

            <nav class="detail-explore" aria-label="Related wiki pages">
              <p class="detail-explore-title">Keep exploring</p>
              <div class="detail-explore-links">
                <a class="detail-explore-link" :href="recipeListPath">All {{ recipe.projectLabel }} Recipes</a>
                <a class="detail-explore-link" href="/wiki/items">All Items</a>
                <a v-if="recipe.projectLabel === 'Cooking'" class="detail-explore-link" href="/beginner">
                  Beginner Guide
                </a>
              </div>
            </nav>

            <div class="btn-row detail-main-actions">
              <a class="btn-secondary" :href="recipeListPath">← All {{ recipe.projectLabel }}</a>
              <a v-if="resultItem" class="btn-primary" :href="itemDetailLink(resultItem.slug)">
                View {{ displayName }} Item
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
    <!-- <GptAdSlot unit="3" /> -->
    <AllianceAdSlot />
  </main>

  <main v-else class="page-main">
    <section class="page-hero-section">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">›</span>
          <a href="/wiki/cooking">Cooking</a>
          <span aria-hidden="true">›</span>
          <span>Not found</span>
        </nav>
        <h1>Recipe Not Found</h1>
        <p class="lead">We do not have this recipe in our list yet — browse cooking or crafting lists.</p>
        <div class="btn-row">
          <a class="btn-primary" href="/wiki/cooking">Cooking Recipes</a>
          <a class="btn-secondary" href="/wiki/crafting">Crafting Recipes</a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import {
  formatDataLabel,
  itemBySlug,
  itemDerivedProse,
  itemDetailLink,
  itemFlavorText,
  itemEffectDisplayEntries,
  imgSrc,
  recipeBySlug,
  recipesUsingItem,
} from '@/lib/data'

const route = useRoute()
const recipe = computed(() => recipeBySlug(route.params.slug))
const displayName = computed(() => recipe.value?.result?.name || recipe.value?.name || 'Recipe')
const resultType = computed(() => formatDataLabel(recipe.value?.result?.type))
const resultItem = computed(() => {
  const slug = recipe.value?.result?.slug
  return slug ? itemBySlug(slug) : null
})
const recipeListPath = computed(() =>
  recipe.value?.projectLabel === 'Crafting' ? '/wiki/crafting' : '/wiki/cooking',
)

const resultDescription = computed(() => (resultItem.value ? itemFlavorText(resultItem.value) : ''))
const resultDerivedProse = computed(() => (resultItem.value ? itemDerivedProse(resultItem.value) : ''))
const resultEffectEntries = computed(() => (resultItem.value ? itemEffectDisplayEntries(resultItem.value) : []))

const resultUsedElsewhere = computed(() => {
  if (!recipe.value?.result?.slug) return []
  return recipesUsingItem(recipe.value.result.slug).filter((entry) => entry.slug !== recipe.value.slug)
})
</script>
