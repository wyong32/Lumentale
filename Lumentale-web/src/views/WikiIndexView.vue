<template>
  <main class="page-main">
    <section class="page-hero-section" aria-labelledby="wiki-title">
      <div class="container">
        <div class="page-hero-content page-hero-center">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <RouterLink to="/">Home</RouterLink>
            <span aria-hidden="true">›</span>
            <span>Wiki</span>
          </nav>
          <p class="eyebrow">LumenTale Wiki</p>
          <h1 id="wiki-title">LumenTale Wiki – Skills, Items, Recipes &amp; Bosses</h1>
          <p class="lead lead-center">
            Walkthroughs, dex pages, and quick lookups for Memories of Trey — find Animon stats, move lists, shop
            prices, and boss levels while you play, without digging through scattered notes mid-fight.
          </p>
          <div class="page-meta" style="margin-top: 14px">
            <span class="meta-pill">{{ summary.counts.skills }} Skills</span>
            <span class="meta-pill">{{ summary.counts.items }} Items</span>
            <span class="meta-pill">{{ bosses.counts.bossAnimon }} Bosses</span>
          </div>
        </div>
      </div>
    </section>

    <section class="data-section" aria-labelledby="wiki-about-title">
      <div class="container">
        <article class="guide-block">
          <h2 id="wiki-about-title">What You Will Find Here</h2>
          <p class="prose">
            This site has two sides: <strong>guides</strong> that walk you through Talea step by step, and
            <strong>lookup pages</strong> you open while team-building, crafting at the Fountain, or lining up a boss
            attempt. Guides read like a route companion; dex and tables use filters so you can find a move or item in seconds.
          </p>
          <p class="prose" style="margin-top: 12px">
            Stat tables match what we see in-game — move costs, shop prices, boss levels, and Animon spreads. When an
            evolution step is still debated, we mark it clearly so you can confirm on your own save before spending rare
            materials.
          </p>
        </article>
      </div>
    </section>

    <section class="wiki-section" aria-labelledby="wiki-db-title">
      <div class="container">
        <div class="wiki-layout">
          <aside class="wiki-intro">
            <p class="eyebrow">In-game lookups</p>
            <h2 id="wiki-db-title">LumenTale Wiki – Lookups</h2>
            <p>
              Filter skills by element, items by category, recipes by cooking or crafting, or bosses by name — then jump
              to the Animon dex or evolution page when you are planning typings for a fight.
            </p>
            <RouterLink class="btn-primary" to="/wiki/skills">Browse Skills</RouterLink>
          </aside>
          <div class="wiki-catalog">
            <RouterLink class="wiki-row wiki-row-skills" to="/wiki/skills">
              <div class="wiki-row-badge">{{ summary.counts.skills }}</div>
              <div class="wiki-row-body">
                <h3>Skills List</h3>
                <p>Power, SP cost, accuracy, cooldown, category, target type, and elemental classification for every move.</p>
              </div>
              <span class="wiki-row-arrow" aria-hidden="true">→</span>
            </RouterLink>
            <RouterLink class="wiki-row wiki-row-items" to="/wiki/items">
              <div class="wiki-row-badge">{{ summary.counts.items }}</div>
              <div class="wiki-row-body">
                <h3>Items List</h3>
                <p>Bilias, medicines, ingredients, materials, and key items with prices, stacks, and shop data.</p>
              </div>
              <span class="wiki-row-arrow" aria-hidden="true">→</span>
            </RouterLink>
            <RouterLink class="wiki-row wiki-row-items" to="/wiki/cooking">
              <div class="wiki-row-badge">{{ cookingCount }}</div>
              <div class="wiki-row-body">
                <h3>Cooking</h3>
                <p>Fountain cooking — ingredient amounts, success rates, and links to each material.</p>
              </div>
              <span class="wiki-row-arrow" aria-hidden="true">→</span>
            </RouterLink>
            <RouterLink class="wiki-row wiki-row-items" to="/wiki/crafting">
              <div class="wiki-row-badge">{{ craftingCount }}</div>
              <div class="wiki-row-body">
                <h3>Crafting</h3>
                <p>Workshop crafting — Bilia upgrades, tools, and material requirements.</p>
              </div>
              <span class="wiki-row-arrow" aria-hidden="true">→</span>
            </RouterLink>
            <RouterLink class="wiki-row wiki-row-bosses" to="/wiki/bosses">
              <div class="wiki-row-badge">{{ bosses.counts.bossAnimon }}</div>
              <div class="wiki-row-body">
                <h3>Boss Guide</h3>
                <p>Boss Animon levels, HP bars, stat overrides, hidden typings, affinities, and dex cross-links.</p>
              </div>
              <span class="wiki-row-arrow" aria-hidden="true">→</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="guides-section" aria-labelledby="wiki-guides-title">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">Player Guides</p>
          <h2 id="wiki-guides-title">From the LumenTale Wiki – Player Routes</h2>
          <p>Start here if you are new — or jump to the dex and type chart when team-building.</p>
        </div>
        <div class="guides-content">
          <RouterLink class="guide-card" to="/animon">
            <span class="guide-card-num">{{ summary.counts.animon }}</span>
            <h3>Animon Dex</h3>
            <p>All numbered Animon with stats, types, catch rates, and evolution links.</p>
            <span class="guide-card-arrow">Open →</span>
          </RouterLink>
          <RouterLink class="guide-card" to="/beginner">
            <span class="guide-card-num">01</span>
            <h3>Beginner Guide</h3>
            <p>First-hours route, SP rotation, and common mistakes to avoid.</p>
            <span class="guide-card-arrow">Read →</span>
          </RouterLink>
          <RouterLink class="guide-card" to="/starters">
            <span class="guide-card-num">5</span>
            <h3>Starters</h3>
            <p>Compare every Kickstarter starter before you lock in a partner.</p>
            <span class="guide-card-arrow">Compare →</span>
          </RouterLink>
          <RouterLink class="guide-card" to="/affinities">
            <span class="guide-card-num">13+5</span>
            <h3>Affinities</h3>
            <p>Element types, emotional affinities, and battle trait timing.</p>
            <span class="guide-card-arrow">Learn →</span>
          </RouterLink>
          <RouterLink class="guide-card" to="/evolutions">
            <span class="guide-card-num">Guide</span>
            <h3>Evolutions</h3>
            <p>Level, item, weather, trait, and special evolution requirements.</p>
            <span class="guide-card-arrow">View →</span>
          </RouterLink>
          <RouterLink class="guide-card" to="/map">
            <span class="guide-card-num">Map</span>
            <h3>Talea Map</h3>
            <p>Full Talea map art plus route notes as new areas unlock in your playthrough.</p>
            <span class="guide-card-arrow">Explore →</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="data-section" aria-labelledby="wiki-tips-title">
      <div class="container">
        <div class="beginner-split">
          <article class="info-card">
            <h2 id="wiki-tips-title">How to Use These Tables</h2>
            <div class="panel-list">
              <div v-for="row in wikiTips" :key="row.label" class="panel-row panel-row-stack">
                <strong>{{ row.label }}</strong>
                <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 4px">{{ row.text }}</p>
              </div>
            </div>
          </article>
          <article class="info-card">
            <h2>More From the Site</h2>
            <div class="related-links" style="margin-top: 8px">
              <RouterLink class="related-link" to="/guides">
                Player Guides
                <small>Walkthroughs and tips</small>
              </RouterLink>
              <RouterLink class="related-link" to="/animon">
                Animon Dex
                <small>Every species we track</small>
              </RouterLink>
              <RouterLink class="related-link" to="/wiki/skills">
                Skills List
                <small>Move data and filters</small>
              </RouterLink>
              <RouterLink class="related-link" to="/wiki/bosses">
                Boss Guide
                <small>Levels and HP bars</small>
              </RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { bosses, recipes, summary } from '@/lib/data'

const cookingCount = recipes.filter((r) => r.projectLabel === 'Cooking').length
const craftingCount = recipes.filter((r) => r.projectLabel === 'Crafting').length

const wikiTips = [
  { label: 'Skills page', text: 'Filter by element type or category when planning STAB coverage on your core four.' },
  { label: 'Items page', text: 'Check prices and stacks before bulk-buying — some materials double as evolution items.' },
  { label: 'Boss page', text: 'Read HP bar count and target BST before story attempts; link back to dex for typings.' },
  { label: 'Cross-links', text: 'Animon detail pages link to evolution steps and boss entries where applicable.' },
]
</script>
