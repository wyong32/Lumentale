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
          <a class="brand footer-brand" href="/" aria-label="LumenTale home">
            <BrandMark />
          </a>
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
            <h2>Explore</h2>
            <a href="/animon">Animon Dex</a>
            <a href="/starters">Starters</a>
            <a href="/affinities">Affinities</a>
            <a href="/evolutions">Evolutions</a>
          </div>
          <div class="footer-col">
            <h2>Guides</h2>
            <a href="/beginner">Beginner Guide</a>
            <a href="/guides">All Guides</a>
            <a href="/map">Talea Map</a>
          </div>
          <div class="footer-col">
            <h2>Wiki</h2>
            <a href="/wiki">Wiki Home</a>
            <a href="/wiki/skills">Skills</a>
            <a href="/wiki/items">Items</a>
            <a href="/wiki/cooking">Cooking</a>
            <a href="/wiki/crafting">Crafting</a>
            <a href="/wiki/bosses">Bosses</a>
          </div>
          <div class="footer-col">
            <h2>Legal</h2>
            <a href="/legal/privacy-policy" rel="noopener noreferrer nofollow">Privacy Policy</a>
            <a href="/legal/terms-of-service" rel="noopener noreferrer nofollow">Terms of Service</a>
            <a href="/legal/copyright" rel="noopener noreferrer nofollow">Copyright</a>
            <a href="/legal/about-us" rel="noopener noreferrer nofollow">About Us</a>
            <a href="/legal/contact-us" rel="noopener noreferrer nofollow">Contact Us</a>
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
import BrandMark from '@/components/BrandMark.vue'
import summary from '@/data/summary.json'
</script>
