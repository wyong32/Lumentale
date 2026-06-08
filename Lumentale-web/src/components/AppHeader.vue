<template>
  <header class="site-header">
    <div class="header-rainbow" aria-hidden="true"></div>
    <div class="container">
      <div class="header-content">
        <a class="brand" href="/" aria-label="LumenTale home" @click="closeMenus">
          <BrandMark />
        </a>

        <button
          type="button"
          class="nav-toggle"
          :aria-expanded="mobileOpen"
          aria-controls="main-nav"
          @click="mobileOpen = !mobileOpen"
        >
          <span class="nav-toggle-bar" aria-hidden="true"></span>
          <span class="nav-toggle-bar" aria-hidden="true"></span>
          <span class="nav-toggle-bar" aria-hidden="true"></span>
          <span class="sr-only">{{ mobileOpen ? 'Close menu' : 'Open menu' }}</span>
        </button>

        <nav id="main-nav" class="main-nav" :class="{ 'is-open': mobileOpen }" aria-label="Primary navigation">
          <div class="nav-tray">
            <a class="nav-link" href="/" :class="{ 'is-active': route.path === '/' }" @click="closeMenus">Home</a>
            <a class="nav-link" href="/animon" :class="{ 'is-active': isNavActive('/animon') }" @click="closeMenus">Animon</a>
            <a class="nav-link" href="/beginner" :class="{ 'is-active': isNavActive('/beginner') }" @click="closeMenus">Beginner</a>
            <a class="nav-link" href="/starters" :class="{ 'is-active': isNavActive('/starters') }" @click="closeMenus">Starters</a>
            <a class="nav-link" href="/affinities" :class="{ 'is-active': isNavActive('/affinities') }" @click="closeMenus">Affinities</a>
            <a class="nav-link" href="/evolutions" :class="{ 'is-active': isNavActive('/evolutions') }" @click="closeMenus">Evolutions</a>
            <a class="nav-link" href="/guides" :class="{ 'is-active': isNavActive('/guides') }" @click="closeMenus">Guides</a>
            <a class="nav-link" href="/map" :class="{ 'is-active': isNavActive('/map') }" @click="closeMenus">Map</a>

            <div
              class="nav-dropdown"
              :class="{ 'is-open': wikiOpen, 'is-active': isWikiRoute }"
              @mouseenter="openWiki"
              @mouseleave="closeWiki"
            >
              <button
                type="button"
                class="nav-dropdown-toggle"
                aria-haspopup="true"
                :aria-expanded="wikiOpen"
                @click="toggleWiki"
              >
                Wiki
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                </svg>
              </button>
              <div class="nav-dropdown-menu" role="menu">
                <a
                  class="dropdown-link"
                  href="/wiki"
                  :class="{ 'is-active': route.path === '/wiki' }"
                  @click="closeMenus"
                >
                  <span class="dropdown-link-label">Wiki Home</span>
                  <small>Skills, items, cooking &amp; bosses</small>
                </a>
                <div class="dropdown-divider"></div>
                <a
                  class="dropdown-link"
                  href="/wiki/skills"
                  :class="{ 'is-active': isNavActive('/wiki/skills') }"
                  @click="closeMenus"
                >
                  <span class="dropdown-link-label">Skills</span>
                  <small>Moves &amp; SP costs</small>
                </a>
                <a
                  class="dropdown-link"
                  href="/wiki/items"
                  :class="{ 'is-active': isNavActive('/wiki/items') }"
                  @click="closeMenus"
                >
                  <span class="dropdown-link-label">Items</span>
                  <small>Bilias &amp; materials</small>
                </a>
                <a
                  class="dropdown-link"
                  href="/wiki/cooking"
                  :class="{ 'is-active': isNavActive('/wiki/cooking') }"
                  @click="closeMenus"
                >
                  <span class="dropdown-link-label">Cooking</span>
                  <small>Fountain dishes</small>
                </a>
                <a
                  class="dropdown-link"
                  href="/wiki/crafting"
                  :class="{ 'is-active': isNavActive('/wiki/crafting') }"
                  @click="closeMenus"
                >
                  <span class="dropdown-link-label">Crafting</span>
                  <small>Workshop upgrades</small>
                </a>
                <a
                  class="dropdown-link"
                  href="/wiki/bosses"
                  :class="{ 'is-active': isNavActive('/wiki/bosses') }"
                  @click="closeMenus"
                >
                  <span class="dropdown-link-label">Bosses</span>
                  <small>Levels &amp; HP bars</small>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import BrandMark from '@/components/BrandMark.vue'

const wikiOpen = ref(false)
const mobileOpen = ref(false)
const route = useRoute()
const isWikiRoute = computed(() => route.path.startsWith('/wiki'))
const isDesktopNav = ref(true)
let navMediaQuery

function syncNavMode() {
  isDesktopNav.value = window.matchMedia('(min-width: 1025px)').matches
  if (isDesktopNav.value) {
    mobileOpen.value = false
  } else {
    wikiOpen.value = false
  }
}

function openWiki() {
  if (isDesktopNav.value) wikiOpen.value = true
}

function closeWiki() {
  if (isDesktopNav.value) wikiOpen.value = false
}

function toggleWiki() {
  wikiOpen.value = !wikiOpen.value
}

function closeMenus() {
  mobileOpen.value = false
  wikiOpen.value = false
}

function isNavActive(href) {
  return route.path === href || route.path.startsWith(`${href}/`)
}

watch(
  () => route.path,
  () => closeMenus(),
)

onMounted(() => {
  navMediaQuery = window.matchMedia('(min-width: 1025px)')
  requestAnimationFrame(syncNavMode)
  navMediaQuery.addEventListener('change', syncNavMode)
})

onUnmounted(() => {
  navMediaQuery?.removeEventListener('change', syncNavMode)
})
</script>
