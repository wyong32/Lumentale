<template>
  <main class="page-main">
    <section class="page-hero-section" aria-labelledby="crafting-title">
      <div class="container">
        <div class="page-hero-content">
          <div>
            <nav class="breadcrumb" aria-label="Breadcrumb">
              <RouterLink to="/">Home</RouterLink>
              <span aria-hidden="true">›</span>
              <RouterLink to="/wiki">LumenTale Wiki</RouterLink>
              <span aria-hidden="true">›</span>
              <span>Crafting</span>
            </nav>
            <p class="eyebrow">LumenTale Wiki</p>
            <h1 id="crafting-title">LumenTale Wiki – Workshop Crafting Recipes</h1>
            <p class="lead">
              {{ craftingCount }} workshop crafting recipes for Memories of Trey — Bilia upgrades, tools, and materials
              with ingredient lists and success rates.
            </p>
          </div>
          <RouterLink class="btn-secondary" to="/wiki">← Wiki Home</RouterLink>
        </div>
      </div>
    </section>

    <WikiRecipeListSection
      project-label="Crafting"
      list-heading="All LumenTale workshop crafting recipes"
      about-title="Workshop crafting on the LumenTale Wiki"
      about-prose="Workshop crafts list materials in each row. Watch the success badge — anything below 100% can fail and still eat your mats."
      intro=""
      search-placeholder="Search crafting recipes…"
      search-aria="Search crafting recipes"
    />

    <section class="data-section">
      <div class="container">
        <p class="result-note" style="margin-top: 0">
          Looking for food buffs?
          <RouterLink to="/wiki/cooking">Open Cooking recipes</RouterLink>
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

const craftingCount = computed(() => recipes.filter((r) => r.projectLabel === 'Crafting').length)
</script>
