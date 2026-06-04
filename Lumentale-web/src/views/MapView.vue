<template>
  <main class="page-main">
    <section class="page-hero-section" aria-labelledby="map-title">
      <div class="container">
        <div class="page-hero-content page-hero-center">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">›</span>
            <span>Talea Map</span>
          </nav>
          <p class="eyebrow">World Map</p>
          <h1 id="map-title">LumenTale Talea Map – Regions, Routes &amp; Locations</h1>
          <p class="lead lead-center">
            Plan your route through Talea in Memories of Trey — the full region map is live today, and we are adding
            encounter spots, item pickups, shops, and NPC markers as players confirm each area in-game.
          </p>
          <div class="page-meta" style="margin-top: 14px">
            <span class="meta-pill">Region map live</span>
            <span class="meta-pill">Pins coming soon</span>
            <span class="meta-pill">Updated May 2026</span>
          </div>
        </div>
      </div>
    </section>

    <section class="data-section" aria-labelledby="map-about-title">
      <div class="container">
        <article class="guide-block">
          <h2 id="map-about-title">Finding Your Way in Talea</h2>
          <p class="prose">
            Talea opens in chunks as Trey follows the story — towns, routes, and side areas unlock at different beats.
            Use this page to see how regions connect while you play, especially when a new path opens and you are not sure
            which direction leads to the next objective.
          </p>
          <p class="prose" style="margin-top: 12px">
            We only add map pins after someone walks the route and confirms the spot — wild tables, hidden items, and shop
            NPCs will appear here once that work is done. Until then, pair this map with the
            <a href="/beginner">Beginner Guide</a> and <a href="/animon">Animon Dex</a>
            when you are hunting a specific species.
          </p>
        </article>
      </div>
    </section>

    <section class="map-section" aria-labelledby="map-art-title">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">Talea Regions</p>
          <h2 id="map-art-title">Full Talea World Map</h2>
          <p>Use this art to orient yourself between routes — interactive markers will land on the same image as we verify each location.</p>
        </div>

        <figure class="map-showcase">
          <img
            :src="imgSrc('/images/maps/talea-map.webp', 'Talea Map')"
            alt="Talea region map in LumenTale Memories of Trey"
            width="1200"
            height="760"
            loading="eager"
          />
          <figcaption class="map-caption">
            Talea region map — encounter, item, and shop pins will appear here after in-game confirmation.
          </figcaption>
        </figure>
      </div>
    </section>

    <section class="data-section" aria-labelledby="map-status-title">
      <div class="container">
        <div class="map-layout">
          <div>
            <div class="section-head" style="text-align: left; margin-bottom: 20px">
              <p class="eyebrow">What Is Coming</p>
              <h2 id="map-status-title">Map Layers We Are Building</h2>
              <p style="margin-inline: 0; max-width: none">
                Region artwork is ready now. The rows below show what players can expect next — each layer ships only after
                we walk the route and verify coordinates ourselves.
              </p>
            </div>
            <div class="map-status-grid">
              <article
                v-for="row in mapStatus"
                :key="row.label"
                class="map-status-card"
                :class="row.ready ? 'is-ready' : 'is-pending'"
              >
                <span class="map-status-label">{{ row.label }}</span>
                <strong class="map-status-value">{{ row.value }}</strong>
                <p>{{ row.note }}</p>
              </article>
            </div>
          </div>

          <aside class="map-sidebar">
            <article class="info-card">
              <h2>How to Use This Page Today</h2>
              <div class="panel-list">
                <div v-for="tip in mapTips" :key="tip.label" class="panel-row panel-row-stack">
                  <strong>{{ tip.label }}</strong>
                  <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 4px">{{ tip.text }}</p>
                </div>
              </div>
            </article>
            <article class="info-card" style="margin-top: 16px">
              <h2>Related Pages</h2>
              <div class="related-links" style="margin-top: 8px">
                <a class="related-link" href="/beginner">
                  Beginner Guide
                  <small>First routes in Talea</small>
                </a>
                <a class="related-link" href="/guides">
                  All Guides
                  <small>Walkthroughs and tips</small>
                </a>
                <a class="related-link" href="/animon">
                  Animon Dex
                  <small>Species by type and affinity</small>
                </a>
                <a class="related-link" href="/wiki/items">
                  Items List
                  <small>Materials and shop stock</small>
                </a>
              </div>
            </article>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import {} from 'vue-router'
import { imgSrc } from '@/lib/data'

const mapStatus = [
  {
    label: 'Region art',
    value: 'Live',
    note: 'Full Talea map artwork — use it now to see how regions connect.',
    ready: true,
  },
  {
    label: 'Named routes',
    value: 'In progress',
    note: 'Zone labels and path names as we finish each story chapter.',
    ready: false,
  },
  {
    label: 'Wild encounters',
    value: 'In progress',
    note: 'Species pins per route once players log consistent spawn spots.',
    ready: false,
  },
  {
    label: 'Item pickups',
    value: 'In progress',
    note: 'Ground items and hidden caches after hands-on route checks.',
    ready: false,
  },
  {
    label: 'Shops & NPCs',
    value: 'In progress',
    note: 'Merchant and quest NPC markers after we confirm each town.',
    ready: false,
  },
]

const mapTips = [
  { label: 'Right now', text: 'Use the map for orientation — follow the Beginner Guide for early route order.' },
  { label: 'Hunting a species', text: 'Filter the Animon Dex by element while area pins are still rolling out.' },
  { label: 'Crafting prep', text: 'Check the Items list for materials even before pickup pins go live.' },
  { label: 'Updates', text: 'New markers will appear on this same page — bookmark it for your playthrough.' },
]
</script>
