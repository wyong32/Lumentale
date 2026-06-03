<template>
  <main class="page-main">
    <section class="page-hero-section" aria-labelledby="cooking-title">
      <div class="container">
        <div class="page-hero-content">
          <div>
            <nav class="breadcrumb" aria-label="Breadcrumb">
              <RouterLink to="/">Home</RouterLink>
              <span aria-hidden="true">›</span>
              <RouterLink to="/wiki">LumenTale Wiki</RouterLink>
              <span aria-hidden="true">›</span>
              <span>Cooking</span>
            </nav>
            <p class="eyebrow">LumenTale Wiki</p>
            <h1 id="cooking-title">LumenTale Wiki – Fountain Cooking Recipes</h1>
            <p class="lead">
              {{ cookingCount }} Fountain cooking recipes for Memories of Trey — dishes, ingredients, and success rates
              before long routes or boss attempts.
            </p>
          </div>
          <RouterLink class="btn-secondary" to="/wiki">← Wiki Home</RouterLink>
        </div>
      </div>
    </section>

    <WikiRecipeListSection
      project-label="Cooking"
      list-heading="All LumenTale Fountain cooking recipes"
      about-title="Fountain cooking on the LumenTale Wiki"
      about-prose="Every row is a Fountain dish — tap the result for the full recipe, or tap an ingredient to open its item page before you cook."
      intro=""
      search-placeholder="Search cooking recipes…"
      search-aria="Search cooking recipes"
    />

    <section class="data-section">
      <div class="container">
        <p class="result-note" style="margin-top: 0">
          Need workshop upgrades?
          <RouterLink to="/wiki/crafting">Open Crafting recipes</RouterLink>
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import WikiRecipeListSection from '@/components/WikiRecipeListSection.vue'
import { recipes } from '@/lib/data'

const cookingCount = computed(() => recipes.filter((r) => r.projectLabel === 'Cooking').length)
</script>
