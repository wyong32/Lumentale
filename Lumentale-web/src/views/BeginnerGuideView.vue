<template>
  <main class="page-main">
    <section class="page-hero-section" aria-labelledby="beginner-title">
      <div class="container">
        <div class="page-hero-content">
          <div>
            <nav class="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">›</span>
              <span>Beginner</span>
            </nav>
            <p class="eyebrow">First Hours in Talea</p>
            <h1 id="beginner-title">LumenTale Beginner Guide for Memories of Trey</h1>
            <p class="lead">
              New to LumenTale: Memories of Trey? This guide walks through your first session in Talea — how to pick a
              starter, survive early 4v4 battles, capture your first wild Animon, and avoid the mistakes that slow most
              new players down.
            </p>
            <div class="btn-row">
              <a class="btn-primary" href="/starters">Compare Starters</a>
              <a class="btn-secondary" href="/animon">Open Animon Dex</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <GptAdSlot unit="1" /> -->
    <AllianceAdSlot />

    <section class="guides-section" aria-labelledby="first-route-title">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">First Route</p>
          <h2 id="first-route-title">What to Do First in LumenTale</h2>
          <p>Work through these steps in order during your opening hours in Talea.</p>
        </div>
        <div class="guides-content">
          <a v-for="step in routeSteps" :key="step.title" class="guide-card" :href="step.to">
            <span class="guide-card-num">{{ step.num }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
            <span class="guide-card-arrow">{{ step.cta }} →</span>
          </a>
        </div>
      </div>
    </section>
    <!-- <GptAdSlot unit="2" /> -->
    <AllianceAdSlot />

    <section class="data-section">
      <div class="container">
        <article class="guide-block">
          <h2>Step 1 — Choose Your Starter Animon</h2>
          <p class="prose">
            Early in the story you pick one of five Kickstarter-eligible starter Animon. Each covers a different element
            and emotional affinity, evolves around level 18, and splits into two final forms near level 40 depending on
            items or story path. Kapan may recommend a starter based on a personality test — accepting his pick starts
            that Animon at level 8 instead of 5, but no choice locks you out of the main story.
          </p>
          <p class="prose" style="margin-top: 12px">
            Pick for <strong>type coverage and play style</strong>, not hype. You will meet many elements on the first
            routes, so a starter whose affinity you enjoy using in battle matters more than raw stat totals on paper.
          </p>
          <ul>
            <li>Compare all five on the <a href="/starters">Starters page</a> before committing.</li>
            <li>Read each line's evolution branch on the <a href="/evolutions">Evolution Guide</a>.</li>
            <li>Open the Animon detail page for move lists and BST once you shortlist a favourite.</li>
          </ul>
        </article>
    <!-- <GptAdSlot unit="3" /> -->
    <AllianceAdSlot />

        <article class="guide-block">
          <h2>Step 2 — Learn 4v4 SP Combat</h2>
          <p class="prose">
            LumenTale battles are turn-based and often field four Animon at once. Your team shares a single
            <strong>SP (Skill Points)</strong> pool — every skill and emotional affinity activation spends from it. You
            cannot let one attacker use every turn while the rest of the party idles.
          </p>
          <p class="prose" style="margin-top: 12px">
            Land super-effective hits or critical strikes to build <strong>TP</strong>. Fill the gauge and your team
            earns a bonus action that costs no SP — timing that free turn wins close fights. Smaller teams charge TP
            faster; larger teams give more type options while exploring. Save SP for boss fights instead of spending it
            all on route trash.
          </p>
          <ul>
            <li>
              <strong>Scan</strong> wild and trainer Animon to reveal resistances. There is no one global type chart —
              matchups are per species.
            </li>
            <li>
              Watch for shield icons on the move UI — they mean the target resists your attack. Switch types instead of
              forcing damage.
            </li>
            <li>
              Activate your team's <strong>emotional affinity</strong> on important turns. Felicis heals, Furor boosts
              damage, Horrens bypasses resistance, Mestus punishes high-HP targets, and Sereum helps crits and TP gain.
              Each activation costs extra SP.
            </li>
          </ul>
          <a class="btn-secondary" href="/affinities">Read the full type chart</a>
        </article>
    <!-- <GptAdSlot unit="1" /> -->
    <AllianceAdSlot />

        <article class="guide-block">
          <h2>Step 3 — Capture, Evolve &amp; Explore</h2>
          <p class="prose">
            Once Trey receives the <strong>Holoken</strong>, wild encounters become capture chances. Build a small bench
            with varied elements and affinities — three different types represented is a solid early goal before you funnel
            levels into one favourite. Duplicates can roll different hidden secondary typings, so catching extras is
            sometimes worth it.
          </p>
          <p class="prose" style="margin-top: 12px">
            Before you grind, check whether an Animon needs an item, specific weather, time of day, trait usage, or party
            setup to evolve. Several early routes also hide crafting materials that double as evolution items — do not
            burn them at the Fountain until you know what they feed.
          </p>
          <ul>
            <li>Use the <a href="/animon">Animon Dex</a> to compare species while hunting on each route.</li>
            <li>Save before branching evolutions and major boss attempts.</li>
            <li>Check the <a href="/map">Talea map</a> as new regions unlock so you do not backtrack blindly.</li>
          </ul>
        </article>
    <!-- <GptAdSlot unit="2" /> -->
    <AllianceAdSlot />

        <article class="guide-block">
          <h2>Step 4 — Items, Skills &amp; Boss Prep</h2>
          <p class="prose">
            When the Fountain opens you can craft medicines and food from ingredients found on routes. Boss Animon often
            carry extra HP bars and higher levels than surrounding wild species — read their sheet before you commit,
            and keep healing items ready for long fights.
          </p>
          <p class="prose" style="margin-top: 12px">
            BST alone does not tell the whole story. Two Animon with similar totals can play completely differently
            depending on move power, accuracy, cooldown, and target type. Skim skill lists on detail pages before you
            replace a route capture with a "weaker" looking species.
          </p>
          <ul>
            <li>Browse the <a href="/wiki/skills">Skills list</a> when building your core four.</li>
            <li>Look up medicines and materials on the <a href="/wiki/items">Items list</a>.</li>
            <li>Review boss levels and HP bars on the <a href="/wiki/bosses">Boss guide</a>.</li>
          </ul>
        </article>
      </div>
    </section>
    <!-- <GptAdSlot unit="3" /> -->
    <AllianceAdSlot />

    <section class="data-section" aria-labelledby="checklist-title">
      <div class="container">
        <div class="beginner-split">
          <article class="info-card">
            <h2 id="checklist-title">Beginner Checklist</h2>
            <div class="panel-list">
              <div v-for="row in checklist" :key="row.label" class="panel-row panel-row-stack">
                <strong>{{ row.label }}</strong>
                <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 4px">{{ row.text }}</p>
              </div>
            </div>
          </article>
          <article class="info-card">
            <h2>Common Beginner Mistakes</h2>
            <ul style="margin-top: 12px">
              <li v-for="item in mistakes" :key="item" style="padding: 8px 0; color: var(--text-muted); font-size: 0.92rem">
                {{ item }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
    <!-- <GptAdSlot unit="1" /> -->
    <AllianceAdSlot />

    <section class="data-section" aria-labelledby="after-five-title">
      <div class="container">
        <article class="guide-block">
          <h2 id="after-five-title">After Your First 5 Hours</h2>
          <p class="prose">
            You should leave the opening routes with a starter nearing its first evolution, at least two captured Animon
            covering different elements, and a basic plan for SP rotation and affinity activations. From there, plan your
            level-40 evolution branch, tighten skill coverage on your core team, and tackle story bosses only after you
            have checked their stats and packed enough medicine.
          </p>
          <div class="related-links" style="margin-top: 20px">
            <a class="related-link" href="/evolutions">
              Evolution Guide
              <small>Branches, items, and special triggers</small>
            </a>
            <a class="related-link" href="/wiki/skills">
              Skills List
              <small>Move lists for team building</small>
            </a>
            <a class="related-link" href="/wiki/bosses">
              Boss Guide
              <small>Levels, HP bars, and affinities</small>
            </a>
            <a class="related-link" href="/guides">
              More Guides
              <small>Additional walkthroughs</small>
            </a>
          </div>
        </article>
      </div>
    </section>
    <!-- <GptAdSlot unit="2" /> -->
    <AllianceAdSlot />
  </main>
</template>

<script setup>
import {} from 'vue-router'

const routeSteps = [
  {
    num: '01',
    title: 'Pick a Starter',
    text: 'Compare element, affinity, and evolution path before you lock in your partner.',
    to: '/starters',
    cta: 'Starters',
  },
  {
    num: '02',
    title: 'Learn SP & TP',
    text: 'Shared SP, bonus TP turns, and affinity activations define early battles.',
    to: '/affinities',
    cta: 'Type chart',
  },
  {
    num: '03',
    title: 'Catch & Cover Types',
    text: 'Use the Holoken to build a bench with varied elements, not just one favourite.',
    to: '/animon',
    cta: 'Animon Dex',
  },
  {
    num: '04',
    title: 'Check Evolutions',
    text: 'Some lines need items, weather, or party conditions — verify before you grind.',
    to: '/evolutions',
    cta: 'Evolutions',
  },
  {
    num: '05',
    title: 'Prep for Bosses',
    text: 'Save, heal up, and read boss levels and HP bars before big story fights.',
    to: '/wiki/bosses',
    cta: 'Bosses',
  },
  {
    num: '06',
    title: 'Browse the Wiki',
    text: 'Skills, items, and reference pages live on the wiki home when you need details mid-route.',
    to: '/wiki',
    cta: 'Wiki',
  },
]

const checklist = [
  { label: 'First team', text: 'Aim for three different element types on your bench early.' },
  { label: 'SP rotation', text: 'Spread skills across all four active Animon — do not one-trick SP.' },
  { label: 'Scan habit', text: 'Scan every new species; resistances are never assumed from other games.' },
  { label: 'Evolution check', text: 'Open the evolution page before spending rare items or levels.' },
  { label: 'Save points', text: 'Save before branch evolutions, rival fights, and story bosses.' },
]

const mistakes = [
  'Dumping all SP on one Animon while the rest of the 4v4 team does nothing.',
  'Ignoring emotional affinities in fights that actually matter.',
  'Grinding levels without reading evolution requirements first.',
  'Running a single-element team through diverse early routes.',
  'Judging captures by BST alone without checking their move pool.',
  'Crafting away materials that are also evolution items.',
]
</script>
