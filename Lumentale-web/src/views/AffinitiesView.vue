<template>
  <main class="page-main">
    <section class="page-hero-section" aria-labelledby="affinities-title">
      <div class="container">
        <div class="page-hero-content page-hero-center">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <RouterLink to="/">Home</RouterLink>
            <span aria-hidden="true">›</span>
            <span>Affinities</span>
          </nav>
          <p class="eyebrow">Type Chart &amp; Combat Traits</p>
          <h1 id="affinities-title">LumenTale Type Chart – Elements &amp; Affinities Guide</h1>
          <p class="lead lead-center">
            How LumenTale's 13 element types and 5 emotional affinities work in Memories of Trey — what each affinity
            does in 4v4 battles, how to read resistances, and how to build a team with real type coverage in Talea.
          </p>
          <div class="page-meta" style="margin-top: 14px">
            <span class="meta-pill">{{ elementTypes.length }} Elements</span>
            <span class="meta-pill">{{ emotionalTypes.length }} Affinities</span>
            <span class="meta-pill">4v4 SP Battles</span>
          </div>
        </div>
      </div>
    </section>

    <section class="affinities-section" aria-labelledby="emotion-title">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">Emotional Affinities</p>
          <h2 id="emotion-title">Five Battle Affinities You Can Activate</h2>
          <p>
            Every Animon carries one emotional affinity. Trigger it during battle for extra SP and a team-wide bonus —
            separate from element typing and move matchups.
          </p>
        </div>
        <div class="affinity-grid">
          <RouterLink
            v-for="item in affinityGuide"
            :key="item.name"
            class="affinity-card"
            :class="`affinity-card-${item.name.toLowerCase()}`"
            :to="animonDexLink({ affinity: item.name })"
          >
            <span :class="tagClass(item.name, 'emotion')" class="affinity-card-tag">{{ item.name }}</span>
            <h3>{{ item.tagline }}</h3>
            <p>{{ item.blurb }}</p>
            <ul class="affinity-card-list">
              <li v-for="tip in item.tips" :key="tip">{{ tip }}</li>
            </ul>
            <span class="affinity-card-foot">Browse {{ item.name }} Animon →</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="elements-section" aria-labelledby="elements-title">
      <div class="container">
        <div class="elements-layout">
          <aside class="elements-intro">
            <p class="eyebrow">Element Types</p>
            <h2 id="elements-title">13 LumenTale Element Types</h2>
            <p>
              Element type labels every Animon and most skills. Unlike classic monster games, LumenTale does not use one
              universal weakness chart — each species has its own resistances. Use elements for coverage and skill typing,
              then scan opponents to learn what actually hits hard.
            </p>
            <RouterLink class="btn-secondary" to="/animon">Open Full Animon Dex</RouterLink>
          </aside>
          <div class="elements-mosaic">
            <RouterLink
              v-for="row in sortedElements"
              :key="row.name"
              class="element-tile"
              :class="tagClass(row.name)"
              :to="animonDexLink({ element: row.name })"
              :style="{ '--fill': `${row.pct}%` }"
            >
              <span class="element-tile-name">{{ row.name }}</span>
              <span class="element-tile-meta">
                <strong>{{ row.count }}</strong>
                <small>Animon</small>
              </span>
              <span class="element-tile-bar" aria-hidden="true" />
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="data-section" aria-labelledby="matchups-title">
      <div class="container">
        <article class="guide-block">
          <h2 id="matchups-title">How LumenTale Matchups Actually Work</h2>
          <p class="prose">
            Treat the type chart as a <strong>team-building framework</strong>, not a cheat sheet. Two FIRE skills might
            behave differently against the same target depending on that Animon's hidden resistances, secondary typing, and
            shield state. The move UI shows a shield icon when your attack is resisted — switch attackers instead of
            burning SP on chip damage.
          </p>
          <p class="prose" style="margin-top: 12px">
            Super-effective hits and critical strikes build <strong>TP</strong>. At four TP your squad earns a bonus action
            that costs no SP — pair that free turn with a high-impact affinity activation or finisher. Smaller active teams
            charge TP faster; larger teams give more elemental options while exploring routes.
          </p>
          <ul>
            <li><strong>Scan</strong> wild and trainer Animon early — resistances are per species, not global.</li>
            <li>Cover multiple elements on your bench before you funnel levels into one favourite.</li>
            <li>Save SP and affinity triggers for rival fights, story bosses, and multi-HP-bar encounters.</li>
            <li>Open individual <RouterLink to="/animon">Animon detail pages</RouterLink> for species-specific matchup notes.</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="combat-section" aria-labelledby="combat-mechanics-title">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">Battle Flow</p>
          <h2 id="combat-mechanics-title">SP, Affinities &amp; TP in One Rotation</h2>
          <p>Three mechanics that define almost every Talea fight once you leave the tutorial routes.</p>
        </div>
        <div class="combat-content">
          <article class="combat-card">
            <h3>Shared SP Pool</h3>
            <p>
              All four active Animon draw from one SP bar in 4v4. Skills, heals, and affinity activations all spend from
              it — rotate actions across the whole team instead of one-shotting with a single attacker.
            </p>
            <ul>
              <li>Route trash rarely needs full SP dumps</li>
              <li>Support moves set up stronger follow-up turns</li>
              <li>Boss fights punish one-dimensional SP usage</li>
            </ul>
          </article>
          <article class="combat-card">
            <h3>Affinity Timing</h3>
            <p>
              Affinities cost extra SP on top of the move you were already planning. Trigger them on turns where the
              team-wide buff or bypass actually changes the outcome — not every round.
            </p>
            <ul>
              <li><strong>Felicis</strong> when sustain prevents a wipe</li>
              <li><strong>Furor</strong> or <strong>Mestus</strong> on burst windows</li>
              <li><strong>Horrens</strong> when shields block your primary type</li>
              <li><strong>Sereum</strong> when you are fishing for crits and TP</li>
            </ul>
          </article>
          <article class="combat-card">
            <h3>Reading the Field</h3>
            <p>
              Element tags tell you what a move <em>is</em>; scan data tells you what it <em>does</em> to this opponent.
              Build teams with flexible skill types rather than assuming FIRE always beats GRASS.
            </p>
            <ul>
              <li>Shield icons mean resistance — pivot types</li>
              <li>Hidden typings can flip an expected matchup</li>
              <li>Check the <RouterLink to="/wiki/skills">Skills list</RouterLink> for target types</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="data-section" aria-labelledby="team-title">
      <div class="container">
        <div class="beginner-split">
          <article class="info-card">
            <h2 id="team-title">Team-Building Checklist</h2>
            <div class="panel-list">
              <div v-for="row in teamTips" :key="row.label" class="panel-row panel-row-stack">
                <strong>{{ row.label }}</strong>
                <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 4px">{{ row.text }}</p>
              </div>
            </div>
          </article>
          <article class="info-card">
            <h2>Go Deeper</h2>
            <div class="related-links" style="margin-top: 8px">
              <RouterLink class="related-link" to="/beginner">
                Beginner Guide
                <small>First hours in Talea</small>
              </RouterLink>
              <RouterLink class="related-link" to="/starters">
                Starter Comparison
                <small>Five opening partners</small>
              </RouterLink>
              <RouterLink class="related-link" to="/evolutions">
                Evolution Guide
                <small>Branches and requirements</small>
              </RouterLink>
              <RouterLink class="related-link" to="/wiki/bosses">
                Boss Guide
                <small>Levels, HP bars, affinities</small>
              </RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { animonDexLink, distribution, elementTypes, emotionalTypes, tagClass } from '@/lib/data'

const elements = distribution('elementType')
const sortedElements = computed(() => {
  const total = elements.reduce((sum, row) => sum + row.count, 0) || 1
  return [...elements]
    .sort((a, b) => b.count - a.count)
    .map((row) => ({
      ...row,
      pct: Math.round((row.count / total) * 100),
    }))
})

const affinityGuide = [
  {
    name: 'FELICIS',
    tagline: 'Healing & team sustain',
    blurb:
      'Felicis keeps your squad alive through long routes and multi-phase boss fights. Best when you expect damage spikes rather than one-turn burst windows.',
    tips: [
      'Activate before a predicted big hit or AoE',
      'Pairs well with defensive pivots and status cleanses',
      'Worth the SP cost when it prevents losing momentum',
    ],
  },
  {
    name: 'FUROR',
    tagline: 'Aggressive damage boost',
    blurb:
      'Furor pushes raw offensive output for the whole active party. Save it for turns where you can follow up with multiple attackers before the buff window closes.',
    tips: [
      'Stack with super-effective skills for TP gain',
      'Avoid firing on turns where you must swap out',
      'Strong on rush-down teams with varied elements',
    ],
  },
  {
    name: 'HORRENS',
    tagline: 'Resistance bypass',
    blurb:
      'Horrens helps when shield icons block your primary typing. Use it to force damage through otherwise resisted elements instead of grinding chip hits.',
    tips: [
      'Scan first — confirm resistance before spending SP',
      'Critical on bulky bosses with narrow weaknesses',
      'Combine with type diversity on the bench',
    ],
  },
  {
    name: 'MESTUS',
    tagline: 'Bonus damage by target HP',
    blurb:
      'Mestus rewards finishing high-HP targets and punishing tanky route leaders. Strong in fights where you chip down one big threat over several turns.',
    tips: [
      'Best late in a fight on a wounded boss',
      'Less value on scattered low-HP wild packs',
      'Synergizes with single-target finishers',
    ],
  },
  {
    name: 'SEREUM',
    tagline: 'Critical hits & TP gain',
    blurb:
      'Sereum skews toward crit-focused teams that want faster TP charges. Excellent when you are setting up a bonus turn finisher on the next round.',
    tips: [
      'Plan the follow-up TP turn before activating',
      'Works with multi-hit or high-crit skill sets',
      'Do not waste it on cleanup against weak wilds',
    ],
  },
]

const teamTips = [
  { label: 'Element spread', text: 'Aim for three different elements on your early bench before hyper-focusing one line.' },
  { label: 'Affinity role', text: 'Pick one sustain affinity and one burst affinity across your core four when possible.' },
  { label: 'Scan habit', text: 'Treat every new species as unknown until scanned — never assume classic type triangles.' },
  { label: 'SP budget', text: 'Route fights should leave headroom; bosses and rivals eat SP fast with affinities enabled.' },
  { label: 'Skill review', text: 'BST alone misleads — read move target types on detail pages before replacing captures.' },
]
</script>
