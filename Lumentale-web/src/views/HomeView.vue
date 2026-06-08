<template>
  <main class="page-main">

    <section class="hero-section" aria-labelledby="home-title">
      <div class="container">
        <div class="hero-content">
          <p class="eyebrow">Memories of Trey</p>
          <h1 id="home-title">LumenTale Guides &amp; Animon Dex for Memories of Trey</h1>
          <p class="lead lead-center">
            Everything you need for your Talea playthrough — compare {{ summary.counts.animon }} Animon, pick the right
            starter, learn affinities and type matchups, track evolutions, and look up skills, items, and boss fights
            before you commit levels or rare materials.
          </p>
          <p class="hero-byline">
            A comprehensive, no-fluff database. Hand-tested and verified by Frontline Pathfinder &amp; the LumenTale guide
            team.
          </p>
          <div class="btn-row btn-row-center">
            <a class="btn-primary" href="/animon">Open Animon Dex</a>
            <a class="btn-secondary" href="/starters">Best Starter Guide</a>
            <a class="btn-secondary" href="/beginner">Beginner Route</a>
          </div>
        </div>
        <form class="hero-search" role="search" aria-label="Search LumenTale wiki" @submit.prevent="goSearch">
          <label class="filter-search filter-search--hero">
            <svg class="filter-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
              <path d="M20 20L16 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
            <input
              v-model="searchQuery"
              type="search"
              name="q"
              placeholder="Search Animon, items, skills, recipes…"
              aria-label="Search LumenTale"
              autocomplete="off"
            />
          </label>
          <button type="submit" class="btn-primary">Search</button>
        </form>
      </div>
    </section>
    <GptAdSlot unit="1" />

    <section class="stats-section" aria-label="Wiki coverage">
      <div class="container">
        <div class="stats-content">
          <div class="stat-item">
            <strong>{{ summary.counts.animon }}</strong>
            <span>Animon</span>
          </div>
          <div class="stat-item">
            <strong>{{ summary.counts.skills }}</strong>
            <span>Skills</span>
          </div>
          <div class="stat-item">
            <strong>{{ summary.counts.items }}</strong>
            <span>Items</span>
          </div>
          <div class="stat-item">
            <strong>{{ summary.counts.recipes }}</strong>
            <span>Recipes</span>
          </div>
          <div class="stat-item">
            <strong>{{ summary.counts.bossAnimon }}</strong>
            <span>Bosses</span>
          </div>
        </div>
      </div>
    </section>

    <section class="game-section" aria-labelledby="about-game">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">About the Game</p>
          <h2 id="about-game">About Memories of Trey</h2>
          <p>
            A turn-based monster-collector RPG set in the enchanted world of Talea, where memories and emotions shape
            every battle.
          </p>
        </div>
        <div class="game-content">
          <div class="prose">
            <p>
              <strong>LumenTale: Memories of Trey</strong> follows Trey, a young hero who awakens in Talea with no memory
              of his past. As he journeys through a land torn by ancient conflict between Logos and Mythos, he captures
              mystical creatures called <strong>Animon</strong> — beings of Anivis energy that can affect emotions and
              souls — using a device called the <strong>Holoken</strong>.
            </p>
            <p style="margin-top: 14px">
              Combat blends classic creature-collector exploration with a deep 4v4 turn-based system. Teams share a pool
              of SP (Skill Points), activate five emotional affinities for bonus effects, and build TP for extra turns by
              landing super-effective hits. With around 140 known Animon species, 13 elemental types, trading, crafting,
              and the customizable Anispace dimension, LumenTale offers rich team-building for story, collection, and PvP.
            </p>
            <div class="btn-row">
              <a class="btn-secondary" href="/beginner">Read Beginner Guide</a>
              <a class="btn-secondary" href="/affinities">Learn Affinities</a>
            </div>
          </div>
          <aside class="game-facts" aria-label="Game facts">
            <div class="fact-row"><span>Developer</span><strong>Beehive Studios</strong></div>
            <div class="fact-row"><span>Publisher</span><strong>Team17</strong></div>
            <div class="fact-row"><span>Release</span><strong>May 26, 2026</strong></div>
            <div class="fact-row"><span>Platforms</span><strong>PC (Steam), Nintendo Switch</strong></div>
            <div class="fact-row"><span>Genre</span><strong>Monster Collector RPG</strong></div>
            <div class="fact-row"><span>Animon Species</span><strong>~140 known</strong></div>
            <div class="fact-row"><span>Battle Format</span><strong>1v1 &amp; 4v4 Turn-Based</strong></div>
          </aside>
        </div>
      </div>
    </section>
    <GptAdSlot unit="2" />

    <section class="guides-section" aria-labelledby="guides-title">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">Start Here</p>
          <h2 id="guides-title">Essential Guide Pages</h2>
          <p>Essential pages for new and returning players — open what you need for your current route or boss fight.</p>
        </div>
        <div class="guides-content">
          <a class="guide-card" href="/animon">
            <span class="guide-card-num">01</span>
            <h3>Animon Dex</h3>
            <p>
              Browse all {{ summary.counts.animon }} numbered Animon with element type, emotional affinity, BST range,
              catch rate, and individual stat spreads. Filter by type or search by name.
            </p>
            <span class="guide-card-arrow">Explore Dex →</span>
          </a>
          <a class="guide-card" href="/starters">
            <span class="guide-card-num">02</span>
            <h3>Starter Guide</h3>
            <p>
              Compare all five Kickstarter-eligible starter Animon before you commit. See element coverage, emotional
              affinity, evolution paths, and early-game BST at a glance.
            </p>
            <span class="guide-card-arrow">Pick a Starter →</span>
          </a>
          <a class="guide-card" href="/beginner">
            <span class="guide-card-num">03</span>
            <h3>Beginner Guide</h3>
            <p>
              Your first 5 hours in Talea: choose a starter, understand SP and TP, capture wild Animon, avoid common
              mistakes, and build a balanced early team.
            </p>
            <span class="guide-card-arrow">Start Playing →</span>
          </a>
          <a class="guide-card" href="/affinities">
            <span class="guide-card-num">04</span>
            <h3>Affinities &amp; Types</h3>
            <p>
              Understand LumenTale's 13 element types and 5 emotional affinities — Felicis, Furor, Horrens, Mestus, and
              Sereum — and how they shape 4v4 combat strategy.
            </p>
            <span class="guide-card-arrow">View Affinities →</span>
          </a>
          <a class="guide-card" href="/evolutions">
            <span class="guide-card-num">05</span>
            <h3>Evolution Guide</h3>
            <p>
              Level, item, weather, trait, and special evolution requirements for every Animon line we track —
              we flag anything still unconfirmed so you can verify before spending materials.
            </p>
            <span class="guide-card-arrow">See Evolutions →</span>
          </a>
          <a class="guide-card" href="/wiki">
            <span class="guide-card-num">06</span>
            <h3>Wiki Home</h3>
            <p>
              Jump to skills, items, boss stats, and every other lookup page — built for quick checks mid-playthrough.
            </p>
            <span class="guide-card-arrow">Browse Wiki →</span>
          </a>
        </div>
      </div>
    </section>
    <GptAdSlot unit="3" />

    <section class="combat-section" aria-labelledby="combat-title">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">Combat System</p>
          <h2 id="combat-title">Core Combat: SP, ATTRIBUTE &amp; TP</h2>
          <p>
            Three systems to learn before team-building — shared SP, five activatable ATTRIBUTE bonuses, and TP bonus
            turns. Element types on the <a href="/affinities">Affinities page</a> are separate from
            ATTRIBUTE and govern move typing and coverage.
          </p>
        </div>
        <div class="combat-content">
          <article class="combat-card">
            <h3>Shared SP System</h3>
            <p>
              In 4v4 battles your entire team draws from one SP pool. Skills, heals, and ATTRIBUTE activations all spend
              SP — plan rotations across all four Animon instead of spamming one attacker.
            </p>
            <ul>
              <li>No individual PP limits like classic monster games</li>
              <li>Support moves cost SP but enable stronger follow-ups</li>
              <li>Save SP headroom before bosses and rival fights</li>
            </ul>
          </article>
          <article class="combat-card combat-card-attribute">
            <h3>Battle ATTRIBUTE</h3>
            <p>
              Each Animon carries one of five ATTRIBUTE affinities. Trigger it in battle for extra SP and a team-wide
              buff — Felicis, Furor, Horrens, Mestus, or Sereum.
            </p>
            <ul class="combat-attribute-list">
              <li v-for="row in emotionalAffinities" :key="row.key">
                <img
                  class="combat-attribute-icon"
                  :src="typeIconSrc(row.key)"
                  :alt="`${row.name} emotional affinity icon`"
                  width="32"
                  height="32"
                  loading="lazy"
                />
                <span>
                  <strong>{{ row.name }}</strong> — {{ row.desc }}
                </span>
              </li>
            </ul>
            <a class="combat-card-link" href="/affinities">Full ATTRIBUTE guide →</a>
          </article>
          <article class="combat-card">
            <h3>TP Bonus Turns</h3>
            <p>
              Super-effective hits and critical strikes build TP. At 4 TP your squad earns a free action — pair it with
              an ATTRIBUTE trigger or a high-cost finisher.
            </p>
            <ul>
              <li>Resistances are per species — scan, do not assume a global chart</li>
              <li>Shield icons mean pivot element or use Horrens ATTRIBUTE</li>
              <li>Cover multiple elements on the bench, not one carry</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
    <GptAdSlot unit="1" />

    <section class="wiki-section" aria-labelledby="wiki-db-title">
      <div class="container">
        <div class="wiki-layout">
          <div class="wiki-intro">
            <p class="eyebrow">Reference Pages</p>
            <h2 id="wiki-db-title">Skills, Items, Recipes &amp; Boss Lookups</h2>
            <p>
              Search moves, shop items, and boss stats while you play — filter by type, category, or name and jump back
              to the Animon dex when you need typings.
            </p>
            <a class="btn-secondary" href="/wiki">Open Wiki Home</a>
          </div>
          <div class="wiki-catalog">
            <a class="wiki-row wiki-row-skills" href="/wiki/skills">
              <div class="wiki-row-badge">{{ summary.counts.skills }}</div>
              <div class="wiki-row-body">
                <h3>Skills List</h3>
                <p>Power, SP cost, accuracy, cooldown, category, target type, and elemental classification.</p>
              </div>
              <span class="wiki-row-arrow" aria-hidden="true">→</span>
            </a>
            <a class="wiki-row wiki-row-items" href="/wiki/items">
              <div class="wiki-row-badge">{{ summary.counts.items }}</div>
              <div class="wiki-row-body">
                <h3>Items List</h3>
                <p>Bilias, medicines, ingredients, materials, and key items with prices and effect data.</p>
              </div>
              <span class="wiki-row-arrow" aria-hidden="true">→</span>
            </a>
            <a class="wiki-row wiki-row-items" href="/wiki/cooking">
              <div class="wiki-row-badge">{{ summary.counts.cookingRecipes }}</div>
              <div class="wiki-row-body">
                <h3>Cooking</h3>
                <p>Fountain dishes — ingredient lists and success rates for food before long routes.</p>
              </div>
              <span class="wiki-row-arrow" aria-hidden="true">→</span>
            </a>
            <a class="wiki-row wiki-row-items" href="/wiki/crafting">
              <div class="wiki-row-badge">{{ summary.counts.craftingRecipes }}</div>
              <div class="wiki-row-body">
                <h3>Crafting</h3>
                <p>Workshop Bilia upgrades and tools — materials, success rates, and item links.</p>
              </div>
              <span class="wiki-row-arrow" aria-hidden="true">→</span>
            </a>
            <a class="wiki-row wiki-row-bosses" href="/wiki/bosses">
              <div class="wiki-row-badge">{{ summary.counts.bossAnimon }}</div>
              <div class="wiki-row-body">
                <h3>Boss Guide</h3>
                <p>Boss levels, HP bars, stat overrides, hidden types, affinities, and camp boss teams.</p>
              </div>
              <span class="wiki-row-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    <GptAdSlot unit="2" />

    <section class="faq-section" aria-labelledby="faq-title">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">FAQ</p>
          <h2 id="faq-title">Frequently Asked Questions</h2>
        </div>
        <div class="faq-content">
          <article v-for="item in faqs" :key="item.q" class="faq-item">
            <h3>{{ item.q }}</h3>
            <p>{{ item.a }}</p>
          </article>
        </div>
      </div>
    </section>
    <GptAdSlot unit="3" />

    <section class="disclaimer-section" aria-label="Site disclaimer">
      <div class="container">
        <div class="disclaimer-content">
          <strong>Disclaimer:</strong> lumentale.org is a fan-made LumenTale wiki — not affiliated with Beehive Studios or
          Team17. Trademarks and game content belong to their owners. We play Memories of Trey ourselves and update pages
          from in-game checks and community reports; always confirm evolutions and boss strats on your own save before
          spending rare items.
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import summary from '@/data/summary.json'
import { getHomeFaqs } from '@/seo/homeSchema.js'
import { typeIconSrc } from '@/lib/typeInfo'

const EMOTION_ORDER = ['FELICIS', 'FUROR', 'HORRENS', 'MESTUS', 'SEREUM']

const emotionalAffinityHomeCopy = {
  FELICIS: 'team healing sustain',
  FUROR: 'raw damage boost',
  HORRENS: 'resistance bypass',
  MESTUS: 'bonus damage by target HP',
  SEREUM: 'critical hits & TP gain',
}

const emotionalAffinities = EMOTION_ORDER.map((key) => ({
  key,
  name: key.charAt(0) + key.slice(1).toLowerCase(),
  desc: emotionalAffinityHomeCopy[key],
}))

const router = useRouter()
const searchQuery = ref('')

function goSearch() {
  const q = searchQuery.value.trim()
  router.push({ path: '/search', query: q ? { q } : {} })
}

const faqs = getHomeFaqs(summary.counts.animon)
</script>
