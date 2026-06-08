<template>
  <main v-if="item" class="page-main wiki-detail-page">
    <section class="page-hero-section wiki-detail-hero" aria-labelledby="item-detail-title">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">›</span>
          <a href="/wiki">Wiki</a>
          <span aria-hidden="true">›</span>
          <a href="/wiki/items">Items</a>
          <span aria-hidden="true">›</span>
          <span>{{ item.name }}</span>
        </nav>
        <p class="eyebrow">Item guide · {{ typeLabel }}</p>
        <h1 id="item-detail-title">{{ item.name }}</h1>
        <p class="lead wiki-detail-lead">
          <template v-if="glanceEffectLine">{{ glanceEffectLine }}</template>
          <template v-else>
            {{ roleLabel }} in Memories of Trey — shop {{ item.price || '—' }} Lumens, stacks to {{ item.maxStack }}.
          </template>
        </p>
        <div class="page-meta wiki-detail-meta">
          <span class="meta-pill">{{ roleLabel }}</span>
          <span class="meta-pill">{{ typeLabel }}</span>
          <span v-if="item.material" class="meta-pill">{{ item.material }}</span>
          <span v-if="item.isCollectible" class="meta-pill">Collectible</span>
        </div>
      </div>
    </section>
    <GptAdSlot unit="1" />

    <section class="detail-section">
      <div class="container">
        <div class="detail-content">
          <aside class="detail-art" aria-label="Item icon and quick stats">
            <img
              :src="imgSrc(item.image, item.name)"
              :alt="`${item.name} item icon in LumenTale`"
              width="280"
              height="280"
            />
            <p class="detail-art-label">Quick stats</p>
            <div class="stat-grid">
              <div class="stat-row"><span>Shop price</span><strong>{{ item.price || '—' }}</strong></div>
              <div class="stat-row"><span>Max stack</span><strong>{{ item.maxStack }}</strong></div>
              <div class="stat-row"><span>Material</span><strong>{{ item.material || '—' }}</strong></div>
              <div class="stat-row"><span>Target</span><strong>{{ item.targetType || '—' }}</strong></div>
              <div v-if="item.battleTarget && item.battleTarget !== 'None'" class="stat-row">
                <span>Battle use</span><strong>{{ item.battleTarget }}</strong>
              </div>
            </div>
            <div v-if="craftedBy.length" class="detail-art-cta">
              <a class="btn-primary btn-block" :href="`/wiki/recipes/${craftedBy[0].slug}`">
                How to craft
              </a>
            </div>
          </aside>

          <article class="detail-main">
            <section class="detail-panel detail-panel--glance" aria-labelledby="item-glance-heading">
              <header class="detail-panel-head">
                <h2 id="item-glance-heading">At a glance</h2>
              </header>
              <div class="detail-panel-body">
                <div class="detail-glance-grid">
                  <div class="detail-glance-tile">
                    <span>Role in recipes</span>
                    <strong>{{ roleLabel }}</strong>
                  </div>
                  <div class="detail-glance-tile">
                    <span>Best for</span>
                    <strong>{{ glanceUseLabel }}</strong>
                  </div>
                  <div class="detail-glance-tile">
                    <span>Carry limit</span>
                    <strong>×{{ item.maxStack }}</strong>
                  </div>
                  <div v-if="craftedBy.length" class="detail-glance-tile detail-glance-tile--link">
                    <span>Get it from</span>
                    <a :href="`/wiki/recipes/${craftedBy[0].slug}`">
                      {{ craftedBy[0].result?.name || craftedBy[0].name }} recipe
                    </a>
                  </div>
                </div>
              </div>
            </section>
    <GptAdSlot unit="2" />

            <section class="detail-panel detail-panel--primary" aria-labelledby="item-does-heading">
              <header class="detail-panel-head">
                <h2 id="item-does-heading">What it does</h2>
              </header>
              <div class="detail-panel-body">
                <ul v-if="effectEntries.length" class="detail-effect-play-list">
                  <li
                    v-for="(entry, index) in effectEntries"
                    :key="`${item.slug}-play-${index}`"
                    class="detail-effect-play"
                  >
                    <strong>{{ entry.playerTitle }}</strong>
                    <p v-if="entry.playerDetail">{{ entry.playerDetail }}</p>
                    <span v-if="entry.scope" class="detail-scope-pill">{{ entry.scope }}</span>
                  </li>
                </ul>

                <p v-if="flavorText" class="prose">{{ flavorText }}</p>
                <p v-if="recipeDescLink && !flavorText" class="prose detail-note">
                  In-game flavor text comes from the
                  <a :href="`/wiki/recipes/${recipeDescLink.slug}`">Fountain recipe</a>
                  when you craft {{ item.name }}.
                </p>
                <p v-if="playerNote" class="prose detail-note">{{ playerNote }}</p>
                <p
                  v-if="!effectEntries.length && !flavorText && !recipeDescLink && !playerNote"
                  class="prose detail-note"
                >
                  No flavor text on this page yet — check crafting below or read the item in Talea after you make one.
                </p>
              </div>
            </section>
    <GptAdSlot unit="3" />

            <section
              v-if="effectEntries.length"
              class="detail-panel detail-panel--stats"
              aria-labelledby="item-data-heading"
            >
              <header class="detail-panel-head">
                <div>
                  <h2 id="item-data-heading">Exact stats</h2>
                  <p class="detail-panel-sub">Numbers as shown in-game — useful when you are stacking buffs or planning a long route.</p>
                </div>
                <span class="detail-count">{{ effectEntries.length }}</span>
              </header>
              <div class="detail-panel-body">
                <ul class="detail-effect-list">
                  <li
                    v-for="(entry, index) in effectEntries"
                    :key="`${item.slug}-raw-${index}`"
                    class="detail-effect-item"
                  >
                    <code class="detail-effect-summary">{{ entry.summary }}</code>
                    <p v-if="entry.meta" class="detail-effect-meta">{{ entry.meta }}</p>
                  </li>
                </ul>
              </div>
            </section>
    <GptAdSlot unit="1" />

            <section class="detail-panel" aria-labelledby="item-bag-heading">
              <header class="detail-panel-head">
                <h2 id="item-bag-heading">In your bag</h2>
              </header>
              <div class="detail-panel-body">
                <div class="detail-flag-grid">
                  <div class="detail-flag-tile" :class="item.givable ? 'is-yes' : 'is-no'">
                    <span>Gift to NPC</span>
                    <strong>{{ item.givable ? 'Yes' : 'No' }}</strong>
                  </div>
                  <div class="detail-flag-tile" :class="!item.unsellable ? 'is-yes' : 'is-no'">
                    <span>Sell at shop</span>
                    <strong>{{ item.unsellable ? 'No' : 'Yes' }}</strong>
                  </div>
                  <div class="detail-flag-tile" :class="!item.untossable ? 'is-yes' : 'is-no'">
                    <span>Discard</span>
                    <strong>{{ item.untossable ? 'No' : 'Yes' }}</strong>
                  </div>
                  <div class="detail-flag-tile" :class="item.unbreakable ? 'is-yes' : 'is-no'">
                    <span>Unbreakable</span>
                    <strong>{{ item.unbreakable ? 'Yes' : 'No' }}</strong>
                  </div>
                </div>
              </div>
            </section>
    <GptAdSlot unit="2" />

            <section
              v-if="craftedBy.length || usedInRecipes.length"
              class="detail-panel detail-panel--warn"
              aria-labelledby="item-craft-heading"
            >
              <header class="detail-panel-head">
                <h2 id="item-craft-heading">Crafting &amp; recipes</h2>
              </header>
              <div class="detail-panel-body detail-craft-stack">
                <div v-if="craftedBy.length">
                  <h3 class="detail-subhead">Crafted by</h3>
                  <p class="prose detail-sublead">
                    Combine materials at the Fountain or workshop to make {{ item.name }}.
                  </p>
                  <div class="detail-ref-list">
                    <a
                      v-for="recipe in craftedBy"
                      :key="recipe.slug"
                      class="detail-ref-row"
                      :href="`/wiki/recipes/${recipe.slug}`"
                    >
                      <img
                        :src="imgSrc(recipe.result?.image, recipe.result?.name)"
                        :alt="`${recipe.result?.name} recipe icon`"
                        width="52"
                        height="52"
                        loading="lazy"
                      />
                      <div class="detail-ref-body">
                        <strong>{{ recipe.result?.name || recipe.name }}</strong>
                        <p>{{ recipe.projectLabel }} · {{ recipe.successRate ?? '?' }}% · {{ recipe.ingredientSummary }}</p>
                      </div>
                      <span class="detail-ref-arrow" aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>

                <div v-if="usedInRecipes.length">
                  <h3 class="detail-subhead">Used as ingredient</h3>
                  <p class="prose detail-sublead">
                    Spend {{ item.name }} when cooking or crafting these results.
                  </p>
                  <div class="detail-ref-list">
                    <a
                      v-for="entry in usedInRecipes"
                      :key="entry.recipe.slug"
                      class="detail-ref-row"
                      :href="`/wiki/recipes/${entry.recipe.slug}`"
                    >
                      <img
                        :src="imgSrc(entry.recipe.result?.image, entry.recipe.result?.name)"
                        :alt="`${entry.recipe.result?.name || entry.recipe.name} recipe icon`"
                        width="52"
                        height="52"
                        loading="lazy"
                      />
                      <div class="detail-ref-body">
                        <strong>{{ entry.recipe.result?.name || entry.recipe.name }}</strong>
                        <p>Uses ×{{ entry.amount }} · {{ entry.recipe.projectLabel }} · {{ entry.recipe.successRate ?? '?' }}%</p>
                      </div>
                      <span class="detail-ref-arrow" aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
    <GptAdSlot unit="3" />

            <aside class="detail-tip" aria-label="Player tip">
              <p>
                <strong>Heads up:</strong>
                Buffs, prices, and stack sizes can change after a patch. If your bag or tooltip in Talea disagrees with this page, trust what you see in-game.
              </p>
            </aside>

            <nav class="detail-explore" aria-label="Related wiki pages">
              <p class="detail-explore-title">Keep exploring</p>
              <div class="detail-explore-links">
                <a class="detail-explore-link" href="/wiki/items">All Items</a>
                <a class="detail-explore-link" href="/wiki/cooking">Cooking</a>
                <a class="detail-explore-link" href="/wiki/crafting">Crafting</a>
                <a class="detail-explore-link" href="/beginner">Beginner Guide</a>
              </div>
            </nav>

            <div class="btn-row detail-main-actions">
              <a class="btn-secondary" href="/wiki/items">← All Items</a>
              <a v-if="craftedBy[0]" class="btn-primary" :href="`/wiki/recipes/${craftedBy[0].slug}`">
                View Craft Recipe
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>

  <main v-else class="page-main">
    <section class="page-hero-section">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">›</span>
          <a href="/wiki/items">Items</a>
          <span aria-hidden="true">›</span>
          <span>Not found</span>
        </nav>
        <h1>Item Not Found</h1>
        <p class="lead">We do not have this item yet — browse the full list or search by name.</p>
        <a class="btn-primary" href="/wiki/items">Browse Items</a>
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
  itemFlavorText,
  itemEffectDisplayEntries,
  itemEffectPlayerNote,
  itemRecipeDescriptionLink,
  itemRoleLabel,
  imgSrc,
  recipesCraftingItem,
  recipesUsingItem,
} from '@/lib/data'

const route = useRoute()
const item = computed(() => itemBySlug(route.params.slug))

const typeLabel = computed(() => formatDataLabel(item.value?.type) || 'Item')
const roleLabel = computed(() => (item.value ? itemRoleLabel(item.value) : ''))
const derivedProse = computed(() => (item.value ? itemDerivedProse(item.value) : ''))
const flavorText = computed(() => (item.value ? itemFlavorText(item.value) : ''))
const effectEntries = computed(() => (item.value ? itemEffectDisplayEntries(item.value) : []))
const playerNote = computed(() => (item.value ? itemEffectPlayerNote(item.value) : ''))
const recipeDescLink = computed(() => (item.value ? itemRecipeDescriptionLink(item.value) : null))
const craftedBy = computed(() => (item.value ? recipesCraftingItem(item.value.slug) : []))
const usedInRecipes = computed(() => {
  if (!item.value) return []
  return recipesUsingItem(item.value.slug).map((recipe) => ({
    recipe,
    amount: recipe.ingredients.find((ing) => ing.guid === item.value.guid || ing.slug === item.value.slug)?.amount ?? 0,
  }))
})

const glanceEffectLine = computed(() => {
  if (!item.value) return ''
  const first = effectEntries.value[0]
  if (first?.playerTitle) {
    const tail = first.playerDetail ? ` ${first.playerDetail}` : ''
    return `${first.playerTitle}.${tail}`.replace(/\.\s+\./g, '.').slice(0, 220)
  }
  if (flavorText.value) return flavorText.value.slice(0, 220)
  if (derivedProse.value) return derivedProse.value.slice(0, 220)
  return ''
})

const glanceUseLabel = computed(() => {
  if (!item.value) return '—'
  const first = effectEntries.value[0]
  if (first?.scope) return first.scope
  if (craftedBy.value.length) return 'Craft then use or sell'
  if (usedInRecipes.value.length) return 'Recipe ingredient'
  return 'Inventory / shop'
})
</script>
