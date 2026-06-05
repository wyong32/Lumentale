<template>
  <main class="page-main page-main--guides">
    <section class="page-hero-section guides-hero" aria-labelledby="guides-title">
      <div class="container">
        <div class="page-hero-content page-hero-center">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">›</span>
            <span>Guides</span>
          </nav>
          <p class="eyebrow">Player Guides</p>
          <h1 id="guides-title">LumenTale Guides – Walkthroughs for Memories of Trey</h1>
          <p class="lead lead-center">
            Long-form route walkthroughs, boss strats, and chapter-by-chapter tips — plus quick links to every
            lookup page while new articles are in progress.
          </p>
          <p v-if="!hasGuides" class="guides-hero-badge" role="status">
            <span class="guides-hero-badge-dot" aria-hidden="true" />
            Walkthrough articles — coming soon
          </p>
        </div>
      </div>
    </section>

    <section class="guides-page-section" :aria-labelledby="hasGuides ? 'guides-catalog-title' : 'guides-fallback-title'">
      <div class="container">
        <template v-if="hasGuides">
          <header class="guides-catalog-head">
            <h2 id="guides-catalog-title">All Guides</h2>
          </header>

          <div class="guide-list-grid">
            <a
              v-for="guide in guides"
              :key="guide.id"
              class="guide-list-card"
              :href="`/guides/${guide.addressBar}`"
            >
              <div class="guide-list-cover">
                <img
                  :src="imgSrc(guide.imageUrl, guide.title)"
                  :alt="guide.imageAlt"
                  loading="lazy"
                  decoding="async"
                />
                <span v-if="guide.isHome" class="guide-list-featured">Featured</span>
              </div>
              <div class="guide-list-body">
                <div v-if="guide.tags?.length" class="guide-list-tags">
                  <span v-for="tag in guide.tags" :key="tag" class="meta-pill meta-pill--sm">{{ tag }}</span>
                </div>
                <h3 class="guide-list-title">{{ guide.title }}</h3>
                <p class="guide-list-desc">{{ guide.description }}</p>
                <div class="guide-list-foot">
                  <p v-if="guide.author" class="guide-list-author">{{ guide.author }}</p>
                  <time class="guide-list-date" :datetime="guide.publishDate">{{ formatDate(guide.publishDate) }}</time>
                </div>
              </div>
            </a>
          </div>
        </template>

        <template v-else>
          <div class="guides-empty-layout">
            <aside class="guides-empty-panel" aria-labelledby="guides-fallback-title">
              <p class="guides-empty-kicker">Guide shelf</p>
              <h2 id="guides-fallback-title">Nothing published here yet</h2>
              <p class="guides-empty-copy">
                We are drafting chapter walkthroughs and route-specific boss notes. The dex, wiki tables, and fixed
                guides below already cover most early and mid-game questions.
              </p>
              <ul class="guides-empty-checklist">
                <li>Route-by-route story and optional content</li>
                <li>Boss turn order and team suggestions</li>
                <li>Patch notes folded into existing pages</li>
              </ul>
              <p class="guides-empty-foot">
                Have a topic you want first?
                <a href="/legal/contact-us">Send a suggestion</a>
              </p>
            </aside>

            <div class="guides-resource-board">
              <header class="guides-resource-head">
                <h3>Play without waiting</h3>
                <p>These pages are live now — same site, no long-form article required.</p>
              </header>

              <div class="guides-resource-groups">
                <section
                  v-for="group in starterGroups"
                  :key="group.label"
                  class="guides-resource-group"
                  :aria-labelledby="`guides-group-${group.id}`"
                >
                  <h4 :id="`guides-group-${group.id}`" class="guides-resource-label">{{ group.label }}</h4>
                  <ul class="guides-resource-list">
                    <li v-for="item in group.items" :key="item.to">
                      <a class="guides-resource-link" :href="item.to">
                        <span class="guides-resource-icon" :class="`guides-resource-icon--${item.tone}`" aria-hidden="true">
                          {{ item.glyph }}
                        </span>
                        <span class="guides-resource-text">
                          <strong>{{ item.title }}</strong>
                          <small>{{ item.desc }}</small>
                        </span>
                        <span class="guides-resource-go" aria-hidden="true">→</span>
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </template>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { guides, imgSrc } from '@/lib/data'

const hasGuides = computed(() => guides.length > 0)

const starterGroups = [
  {
    id: 'play',
    label: 'Start your run',
    items: [
      { to: '/beginner', title: 'Beginner route', desc: 'First hours, SP rotation, capture basics', glyph: '▶', tone: 'play' },
      { to: '/starters', title: 'Starter comparison', desc: 'Five partners, elements, and level-40 branches', glyph: '★', tone: 'play' },
      { to: '/map', title: 'Talea map', desc: 'Regions and route orientation', glyph: '◎', tone: 'play' },
    ],
  },
  {
    id: 'build',
    label: 'Build your team',
    items: [
      { to: '/affinities', title: 'Types & ATTRIBUTE', desc: '13 elements and five battle affinities', glyph: '◆', tone: 'build' },
      { to: '/evolutions', title: 'Evolution guide', desc: 'Level, item, and special requirements', glyph: '↗', tone: 'build' },
      { to: '/animon', title: 'Animon dex', desc: 'Stats, catch rates, and filters', glyph: '#', tone: 'build' },
    ],
  },
  {
    id: 'lookup',
    label: 'Mid-fight lookup',
    items: [
      { to: '/wiki/skills', title: 'Skills', desc: 'Move data and filters', glyph: '⚡', tone: 'lookup' },
      { to: '/wiki/bosses', title: 'Bosses', desc: 'Levels and HP bars', glyph: '⚔', tone: 'lookup' },
      { to: '/wiki', title: 'Wiki home', desc: 'Items, cooking, crafting, and more', glyph: '≡', tone: 'lookup' },
    ],
  },
]

function formatDate(value) {
  if (!value) return ''
  return new Date(value).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

</script>
