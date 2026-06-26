<template>
  <main class="page-main">
    <!-- <GptAdSlot unit="1" /> -->
    <AllianceAdSlot />
    <section class="page-hero-section" aria-labelledby="crafting-title">
      <div class="container">
        <div class="page-hero-content">
          <div>
            <nav class="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">›</span>
              <a href="/wiki">LumenTale Wiki</a>
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
          <a class="btn-secondary" href="/wiki">← Wiki Home</a>
        </div>
      </div>
    </section>
    <!-- <GptAdSlot unit="2" /> -->
    <AllianceAdSlot />

    <WikiRecipeListSection
      project-label="Crafting"
      list-heading="All LumenTale workshop crafting recipes"
      about-title="Workshop crafting on the LumenTale Wiki"
      about-prose="Workshop crafts list materials in each row. Watch the success badge — anything below 100% can fail and still eat your mats."
      intro=""
      search-placeholder="Search crafting recipes…"
      search-aria="Search crafting recipes"
    />
    <!-- <GptAdSlot unit="3" /> -->
    <AllianceAdSlot />

    <section class="data-section">
      <div class="container">
        <p class="result-note" style="margin-top: 0">
          Looking for food buffs?
          <a href="/wiki/cooking">Open Cooking recipes</a>
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import {} from 'vue-router'
import WikiRecipeListSection from '@/components/WikiRecipeListSection.vue'
import { recipes } from '@/lib/data'

const craftingCount = computed(() => recipes.filter((r) => r.projectLabel === 'Crafting').length)
</script>
