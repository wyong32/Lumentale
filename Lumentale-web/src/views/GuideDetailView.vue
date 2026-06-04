<template>
  <main v-if="guide" class="page-main page-main--guide-detail">
    <section class="page-hero-section" aria-labelledby="guide-title">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">›</span>
          <a href="/guides">Guides</a>
          <span aria-hidden="true">›</span>
          <span>{{ guide.title }}</span>
        </nav>
        <div class="page-meta" style="margin-top: 14px">
          <span v-for="tag in guide.tags" :key="tag" class="meta-pill">{{ tag }}</span>
          <time class="meta-pill" :datetime="guide.publishDate">{{ formatDate(guide.publishDate) }}</time>
        </div>
        <h1 id="guide-title">{{ guide.title }}</h1>
        <p class="lead">{{ guide.description }}</p>
      </div>
    </section>

    <section class="data-section guide-detail-section">
      <div class="container">
        <div class="guide-detail-page">
          <div class="guide-detail-main">
            <figure class="guide-detail-cover">
              <img
                :src="imgSrc(guide.imageUrl, guide.title)"
                :alt="guide.imageAlt"
                width="800"
                height="450"
              />
            </figure>
            <article class="guide-detail-content" v-html="prepared.html" />
            <div class="guide-detail-footer">
              <a class="btn-secondary" href="/guides">← All Guides</a>
            </div>
          </div>

          <aside class="guide-detail-sidebar" aria-label="Table of contents">
            <nav class="guide-toc">
              <p class="guide-toc-label">On this page</p>
              <a
                v-for="heading in prepared.headings"
                :key="heading.id"
                :href="`#${heading.id}`"
                class="guide-toc-link"
                :class="{ 'is-active': activeSection === heading.id }"
                @click.prevent="scrollToSection(heading.id)"
              >
                {{ heading.text }}
              </a>
            </nav>
          </aside>
        </div>
      </div>
    </section>
  </main>
  <main v-else class="page-main">
    <section class="data-section">
      <div class="container">
        <p class="result-note">Guide not found.</p>
        <a class="btn-secondary" href="/guides">← All Guides</a>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { guideBySlug, imgSrc } from '@/lib/data'

const route = useRoute()
const activeSection = ref('')
const guide = computed(() => guideBySlug(route.params.slug))

const prepared = computed(() => prepareGuideHtml(guide.value?.detailsHtml || ''))

let observer = null

function stripTags(text) {
  return String(text).replace(/<[^>]+>/g, '').trim()
}

function slugify(text) {
  return stripTags(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function prepareGuideHtml(html) {
  const headings = []
  let index = 0
  const processed = html.replace(/<h2>([\s\S]*?)<\/h2>/gi, (_, inner) => {
    const text = stripTags(inner)
    const id = `guide-section-${index}-${slugify(text) || index}`
    index += 1
    headings.push({ id, text })
    return `<h2 id="${id}">${inner}</h2>`
  })
  return { html: processed, headings }
}

function formatDate(value) {
  if (!value) return ''
  return new Date(value).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function scrollToSection(id) {
  activeSection.value = id
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function setupObserver() {
  observer?.disconnect()
  observer = null
  if (!prepared.value.headings.length) return

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
      if (visible.length) {
        activeSection.value = visible[0].target.id
      }
    },
    { rootMargin: '-30% 0px -55% 0px', threshold: 0 },
  )

  prepared.value.headings.forEach(({ id }) => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })

  if (!activeSection.value && prepared.value.headings[0]) {
    activeSection.value = prepared.value.headings[0].id
  }
}

watch(
  guide,
  () => {
    nextTick(setupObserver)
  },
  { immediate: true },
)

onMounted(() => nextTick(setupObserver))
onUnmounted(() => {
  observer?.disconnect()
})
</script>
