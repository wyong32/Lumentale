<template>
  <footer class="site-footer">
    <div class="footer-deco" aria-hidden="true">
      <span class="footer-deco-dot footer-deco-dot-1"></span>
      <span class="footer-deco-dot footer-deco-dot-2"></span>
      <span class="footer-deco-dot footer-deco-dot-3"></span>
    </div>

    <div class="container">
      <div class="footer-top">
        <div class="footer-brand-card">
          <RouterLink class="brand footer-brand" to="/" aria-label="LumenTale home">
            <BrandMark />
          </RouterLink>
          <p>
            Unofficial guides for LumenTale: Memories of Trey — Animon dex, starter picks, type chart, evolution
            routes, and searchable skills, items, recipes, and bosses for your Talea run.
          </p>
          <div class="footer-stats">
            <span class="footer-stat">{{ summary.counts.animon }} Animon</span>
            <span class="footer-stat">{{ summary.counts.skills }} Skills</span>
            <span class="footer-stat">{{ summary.counts.items }} Items</span>
          </div>
        </div>

        <div class="footer-links-grid">
          <div class="footer-col">
            <h4>Explore</h4>
            <RouterLink to="/animon">Animon Dex</RouterLink>
            <RouterLink to="/starters">Starters</RouterLink>
            <RouterLink to="/affinities">Affinities</RouterLink>
            <RouterLink to="/evolutions">Evolutions</RouterLink>
          </div>
          <div class="footer-col">
            <h4>Guides</h4>
            <RouterLink to="/beginner">Beginner Guide</RouterLink>
            <RouterLink to="/guides">All Guides</RouterLink>
            <RouterLink to="/map">Talea Map</RouterLink>
          </div>
          <div class="footer-col">
            <h4>Wiki</h4>
            <RouterLink to="/wiki">Wiki Home</RouterLink>
            <RouterLink to="/wiki/skills">Skills</RouterLink>
            <RouterLink to="/wiki/items">Items</RouterLink>
            <RouterLink to="/wiki/cooking">Cooking</RouterLink>
            <RouterLink to="/wiki/crafting">Crafting</RouterLink>
            <RouterLink to="/wiki/bosses">Bosses</RouterLink>
          </div>
          <div class="footer-col">
            <h4>Legal</h4>
            <RouterLink to="/legal/privacy-policy">Privacy Policy</RouterLink>
            <RouterLink to="/legal/terms-of-service">Terms of Service</RouterLink>
            <RouterLink to="/legal/copyright">Copyright</RouterLink>
            <RouterLink to="/legal/about-us">About Us</RouterLink>
            <RouterLink to="/legal/contact-us">Contact Us</RouterLink>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>
          lumentale.org is not affiliated with Beehive Studios or Team17. All game content belongs to their respective
          owners. Data last updated May 2026.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import BrandMark from '@/components/BrandMark.vue'
import { summary } from '@/lib/data'
</script>
