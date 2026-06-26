<template>
  <main v-if="entry" class="page-main">
    <section class="page-hero-section" aria-labelledby="detail-title">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">›</span>
          <a href="/animon">Animon</a>
          <span aria-hidden="true">›</span>
          <span>{{ entry.name }}</span>
        </nav>
        <h1 id="detail-title">{{ entry.name }} – LumenTale Animon Stats, Type &amp; Evolution</h1>
        <p class="lead">
          Everything you need to decide whether {{ entry.name }} belongs on your team — #{{
            entry.number
          }}
          {{ entry.elementType }} / {{ entry.emotionalType }} with BST
          {{ entry.minBst }}–{{ entry.maxBst }}, catch rate, base stats, evolution steps, and linked boss pages.
        </p>
        <div class="page-meta" style="margin-top: 14px">
          <span class="meta-pill">#{{ entry.number }}</span>
          <a :class="tagClass(entry.elementType)" :href="animonDexLink({ element: entry.elementType })">
            {{ entry.elementType }}
          </a>
          <a :class="tagClass(entry.emotionalType, 'emotion')" :href="animonDexLink({ affinity: entry.emotionalType })">
            {{ entry.emotionalType }}
          </a>
          <span class="meta-pill">{{ entry.rarity }}</span>
        </div>
      </div>
    </section>
    <!-- <GptAdSlot unit="1" /> -->
    <AllianceAdSlot />

    <section class="detail-section">
      <div class="container">
        <div class="detail-content">
          <aside class="detail-art">
            <img
              :src="imgSrc(entry.image, entry.name)"
              :alt="`${entry.name} Animon artwork in LumenTale`"
              width="280"
              height="320"
            />
            <div class="stat-grid">
              <div v-for="stat in entry.stats" :key="stat.name" class="stat-row">
                <span>{{ stat.name }}</span>
                <strong>{{ stat.min }}–{{ stat.max }}</strong>
              </div>
            </div>
          </aside>

          <article>
            <h2>About {{ entry.name }} in Your Party</h2>
            <p class="prose" style="margin: 12px 0 24px">
              {{ entry.description || 'We are still writing notes for this species — check back after more route testing.' }}
            </p>

            <h2>{{ entry.name }} Stats for Battles &amp; Captures</h2>
            <div class="stat-grid" style="margin-top: 12px">
              <div class="stat-row"><span>Catch Rate</span><strong>{{ entry.catchRate ?? '—' }}</strong></div>
              <div class="stat-row"><span>BST Range</span><strong>{{ entry.minBst }}–{{ entry.maxBst }}</strong></div>
              <div class="stat-row"><span>Form</span><strong>{{ entry.formName }}</strong></div>
              <div class="stat-row"><span>Species</span><strong>{{ entry.species }}</strong></div>
              <div v-if="entry.canBeKickstarter" class="stat-row">
                <span>Starter</span><strong>Kickstarter eligible</strong>
              </div>
            </div>

            <div v-if="relatedEvolutions.length" class="guide-block" style="margin-top: 28px">
              <h2>{{ entry.name }} Evolution Requirements</h2>
              <div class="related-card-list">
                <div v-for="row in relatedEvolutions" :key="row.anchorId" class="related-card">
                  <strong>{{ row.from }} → {{ row.to }}</strong>
                  <p>{{ row.requirement }}</p>
                </div>
              </div>
            </div>
    <!-- <GptAdSlot unit="2" /> -->
    <AllianceAdSlot />

            <div class="guide-block" style="margin-top: 28px">
              <h2>Related Pages</h2>
              <div class="related-links">
                <a v-if="relatedEvolutions.length" class="related-link" :href="evolutionLink">
                  Evolution Guide
                  <small>{{ relatedEvolutions.length }} step{{ relatedEvolutions.length > 1 ? 's' : '' }}</small>
                </a>
                <a class="related-link" :href="animonDexLink({ element: entry.elementType })">
                  {{ entry.elementType }} Animon
                  <small>Filter Dex by element</small>
                </a>
                <a class="related-link" :href="animonDexLink({ affinity: entry.emotionalType })">
                  {{ entry.emotionalType }} Affinity
                  <small>Same emotional type</small>
                </a>
                <a v-if="entry.canBeKickstarter" class="related-link" href="/starters">
                  Starter Guide
                  <small>Compare all starters</small>
                </a>
                <a v-if="bossLink" class="related-link" :href="bossLink">
                  Boss Entry
                  <small>{{ bossEntry.name }}</small>
                </a>
                <a class="related-link" href="/affinities">
                  Type Chart
                  <small>Elements &amp; affinities</small>
                </a>
              </div>
            </div>

            <div class="btn-row">
              <a class="btn-secondary" href="/animon">← Back to Dex</a>
              <a
                v-if="relatedEvolutions.length"
                class="btn-primary"
                :href="evolutionLink"
              >
                Evolution Guide
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
        <h1>Animon Not Found</h1>
        <p class="lead">We do not have a dex page for this Animon yet — browse the full list or try another name.</p>
        <a class="btn-primary" href="/animon">Browse Animon Dex</a>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import {
  animonDexLink,
  bossForAnimon,
  bossLinkForAnimon,
  bySlug,
  evolutionLinkForAnimon,
  evolutionsForAnimon,
  imgSrc,
  tagClass,
} from '@/lib/data'
const route = useRoute()
const entry = computed(() => bySlug(route.params.slug))
const relatedEvolutions = computed(() => (entry.value ? evolutionsForAnimon(entry.value.slug) : []))
const evolutionLink = computed(() =>
  entry.value ? evolutionLinkForAnimon(entry.value.slug) : '/evolutions',
)
const bossEntry = computed(() => (entry.value ? bossForAnimon(entry.value.slug) : null))
const bossLink = computed(() => (entry.value ? bossLinkForAnimon(entry.value.slug) : null))
</script>
