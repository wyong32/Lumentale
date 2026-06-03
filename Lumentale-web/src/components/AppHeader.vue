<template>
  <header class="site-header">
    <div class="header-rainbow" aria-hidden="true"></div>
    <div class="container">
      <div class="header-content">
        <RouterLink class="brand" to="/" aria-label="LumenTale home" @click="closeMenus">
          <BrandMark />
        </RouterLink>

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
            <RouterLink class="nav-link" to="/" exact-active-class="is-active" @click="closeMenus">Home</RouterLink>
            <RouterLink class="nav-link" to="/animon" active-class="is-active" @click="closeMenus">Animon</RouterLink>
            <RouterLink class="nav-link" to="/beginner" active-class="is-active" @click="closeMenus">Beginner</RouterLink>
            <RouterLink class="nav-link" to="/starters" active-class="is-active" @click="closeMenus">Starters</RouterLink>
            <RouterLink class="nav-link" to="/affinities" active-class="is-active" @click="closeMenus">Affinities</RouterLink>
            <RouterLink class="nav-link" to="/evolutions" active-class="is-active" @click="closeMenus">Evolutions</RouterLink>
            <RouterLink class="nav-link" to="/guides" active-class="is-active" @click="closeMenus">Guides</RouterLink>
            <RouterLink class="nav-link" to="/map" active-class="is-active" @click="closeMenus">Map</RouterLink>

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
                <RouterLink class="dropdown-link" to="/wiki" active-class="is-active" @click="closeMenus">
                  <span class="dropdown-link-label">Wiki Home</span>
                  <small>Skills, items, recipes &amp; bosses</small>
                </RouterLink>
                <div class="dropdown-divider"></div>
                <RouterLink class="dropdown-link" to="/wiki/skills" active-class="is-active" @click="closeMenus">
                  <span class="dropdown-link-label">Skills</span>
                  <small>Moves &amp; SP costs</small>
                </RouterLink>
                <RouterLink class="dropdown-link" to="/wiki/items" active-class="is-active" @click="closeMenus">
                  <span class="dropdown-link-label">Items</span>
                  <small>Bilias &amp; materials</small>
                </RouterLink>
                <RouterLink class="dropdown-link" to="/wiki/recipes" active-class="is-active" @click="closeMenus">
                  <span class="dropdown-link-label">Recipes</span>
                  <small>Cooking &amp; crafting</small>
                </RouterLink>
                <RouterLink class="dropdown-link" to="/wiki/bosses" active-class="is-active" @click="closeMenus">
                  <span class="dropdown-link-label">Bosses</span>
                  <small>Levels &amp; HP bars</small>
                </RouterLink>
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
import { RouterLink, useRoute } from 'vue-router'
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

watch(
  () => route.path,
  () => closeMenus(),
)

onMounted(() => {
  navMediaQuery = window.matchMedia('(min-width: 1025px)')
  syncNavMode()
  navMediaQuery.addEventListener('change', syncNavMode)
})

onUnmounted(() => {
  navMediaQuery?.removeEventListener('change', syncNavMode)
})
</script>
