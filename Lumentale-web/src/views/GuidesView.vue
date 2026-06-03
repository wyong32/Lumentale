<template>
  <main class="page-main">
    <section class="page-hero-section" aria-labelledby="guides-title">
      <div class="container">
        <div class="page-hero-content page-hero-center">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <RouterLink to="/">Home</RouterLink>
            <span aria-hidden="true">›</span>
            <span>Guides</span>
          </nav>
          <p class="eyebrow">Player Guides</p>
          <h1 id="guides-title">LumenTale Guides – Walkthroughs for Memories of Trey</h1>
          <p class="lead lead-center">
            LumenTale guides and walkthroughs for Memories of Trey — beginner routes, combat tips, exploration help,
            and collection strategies for players in Talea.
          </p>
        </div>
      </div>
    </section>

    <section class="guides-section">
      <div class="container">
        <div class="guide-list-grid">
          <RouterLink
            v-for="guide in guides"
            :key="guide.id"
            class="guide-list-card"
            :to="`/guides/${guide.addressBar}`"
          >
            <div class="guide-list-cover">
              <img
                :src="imgSrc(guide.imageUrl, guide.title)"
                :alt="guide.imageAlt"
                width="420"
                height="236"
                loading="lazy"
              />
              <span v-if="guide.isHome" class="guide-list-featured">Featured</span>
            </div>
            <div class="guide-list-body">
              <div class="page-meta">
                <span v-for="tag in guide.tags" :key="tag" class="meta-pill">{{ tag }}</span>
              </div>
              <h2>{{ guide.title }}</h2>
              <p>{{ guide.description }}</p>
              <span class="guide-list-arrow">Read guide →</span>
              <time class="guide-list-date" :datetime="guide.publishDate">{{ formatDate(guide.publishDate) }}</time>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { guides, imgSrc } from '@/lib/data'

function formatDate(value) {
  if (!value) return ''
  return new Date(value).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>
