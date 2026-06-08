<template>
  <main class="page-main affinities-page">
    <section class="page-hero-section" aria-labelledby="affinities-title">
      <div class="container">
        <div class="page-hero-content page-hero-center">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">›</span>
            <span>Affinities</span>
          </nav>
          <p class="eyebrow">Type Chart &amp; Combat Traits</p>
          <h1 id="affinities-title">LumenTale Type Chart – Elements &amp; Affinities Guide</h1>
          <p class="lead lead-center">
            How element types and emotional affinities work in Memories of Trey — battle bonuses, dex filters, and
            team-building without assuming a single global weakness chart.
          </p>
          <div class="page-meta" style="margin-top: 14px">
            <span class="meta-pill">{{ elementTypes.length }} Elements</span>
            <span class="meta-pill">{{ emotionalTypes.length }} Affinities</span>
            <span class="meta-pill">4v4 SP Battles</span>
          </div>
        </div>
      </div>
    </section>
    <GptAdSlot unit="1" />

    <!-- 1. Five affinities — single source of truth -->
    <section class="affinities-section" aria-labelledby="emotion-title">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">Emotional Affinities</p>
          <h2 id="emotion-title">Five ATTRIBUTE Battle Affinities You Can Activate</h2>
          <p>
            Every Animon has one affinity. Spend extra SP in battle for a team-wide bonus — separate from element typing
            and move matchups. Tap a card to filter the dex by that affinity.
          </p>
        </div>
        <div class="affinity-grid">
          <a
            v-for="item in affinityCards"
            :key="item.name"
            class="affinity-card"
            :class="`affinity-card-${item.name.toLowerCase()}`"
            :href="animonDexLink({ affinity: item.name })"
          >
            <div class="affinity-card-top">
              <img
                class="affinity-card-icon"
                :src="typeIconSrc(item.name)"
                :alt="`${item.name} affinity icon`"
                width="56"
                height="56"
                loading="lazy"
              />
              <div class="affinity-card-heading">
                <span :class="tagClass(item.name, 'emotion')" class="affinity-card-tag">{{ item.name }}</span>
                <span class="affinity-card-count">{{ item.count }} Animon</span>
              </div>
            </div>
            <h3>{{ item.tagline }}</h3>
            <p class="affinity-card-lead">{{ item.blurb }}</p>
            <p v-if="item.themeNote" class="affinity-card-theme">{{ item.themeNote }}</p>
            <ul class="affinity-card-list">
              <li v-for="tip in item.tips" :key="tip">{{ tip }}</li>
            </ul>
            <span class="affinity-card-foot">Browse {{ item.name }} in the dex →</span>
          </a>
        </div>
      </div>
    </section>
    <GptAdSlot unit="2" />

    <!-- 2. Elements — one block: intro + detailed catalog (no mosaic duplicate) -->
    <section class="elements-catalog-section" aria-labelledby="elements-title">
      <div class="container">
        <div class="elements-catalog-layout">
          <aside class="elements-catalog-intro">
            <p class="eyebrow">Element Types</p>
            <h2 id="elements-title">13 Element Types in Talea</h2>
            <p>
              Element labels every Animon and most skills. LumenTale does not use one universal weakness chart — each
              species has its own resistances. Scan in battle; shield icons mean pivot, not keep spamming the same type.
            </p>
            <p class="elements-catalog-stat">
              <strong>{{ typedSkillsCount }}</strong> skills in our list carry a typed element.
            </p>
            <a class="btn-primary" href="/animon">Open Animon Dex</a>
            <a class="btn-secondary" href="/wiki/skills">Skills by type</a>
          </aside>

          <div class="elements-catalog-main">
            <ul class="element-catalog-list" role="list">
              <li v-for="row in sortedElements" :key="row.name">
                <a class="element-catalog-row" :href="animonDexLink({ element: row.name })">
                  <span class="element-catalog-icon-wrap">
                    <img
                      :src="typeIconSrc(row.name)"
                      :alt="`${row.name} element icon`"
                      width="56"
                      height="56"
                      loading="lazy"
                    />
                  </span>
                  <div class="element-catalog-copy">
                    <div class="element-catalog-head">
                      <strong>{{ row.name }}</strong>
                      <small>{{ getTypeInfo(row.name, 'element').label }}</small>
                    </div>
                    <p>{{ getTypeInfo(row.name, 'element').description }}</p>
                  </div>
                  <div class="element-catalog-meta">
                    <strong>{{ row.count }}</strong>
                    <small>Animon</small>
                    <span class="element-catalog-pct">{{ row.pct }}%</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <GptAdSlot unit="3" />

    <!-- 3. Compact reference: hidden types + battle impact -->
    <section class="data-section affinities-reference-section" aria-labelledby="reference-title">
      <div class="container">
        <div class="affinities-reference-grid">
          <article class="guide-block affinities-reference-card">
            <p class="eyebrow">Also on this page</p>
            <h2 id="reference-title">Hidden Types &amp; What We Can Confirm</h2>
            <div class="affinities-reference-columns">
              <div>
                <h3>Hidden type</h3>
                <p>
                  Boss and special forms may store a hidden type besides the visible element.
                  {{ bossFormsWithHiddenType }} boss or camp records in our data show a non-neutral hidden type — treat
                  as fight-specific until you confirm on your save.
                </p>
              </div>
              <div>
                <h3>Weakness data</h3>
                <p>
                  Resistances are per species, not one global matrix. Two FIRE skills can land differently on the same
                  target depending on shields and hidden typings.
                </p>
              </div>
            </div>
          </article>
          <aside class="affinities-matrix-card" aria-label="Battle data status">
            <h3>Data status</h3>
            <ul class="affinities-matrix-list">
              <li v-for="row in effectMatrix" :key="row.label">
                <span class="affinities-matrix-label">{{ row.label }}</span>
                <span class="type-effect-state" :class="`is-${row.state.toLowerCase()}`">{{ row.state }}</span>
                <p>{{ row.text }}</p>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
    <GptAdSlot unit="1" />

    <section class="data-section" aria-labelledby="matchups-title">
      <div class="container">
        <article class="guide-block">
          <h2 id="matchups-title">How Matchups Actually Work</h2>
          <p class="prose">
            Treat the type chart as a <strong>team-building framework</strong>, not a cheat sheet. The move UI shows a
            shield icon when your attack is resisted — switch attackers instead of burning SP on chip damage.
          </p>
          <p class="prose" style="margin-top: 12px">
            Super-effective hits and critical strikes build <strong>TP</strong>. At four TP your squad earns a bonus
            action that costs no SP — pair that free turn with an affinity activation or finisher.
          </p>
          <ul>
            <li><strong>Scan</strong> wild and trainer Animon early — resistances are per species, not global.</li>
            <li>Cover multiple elements on your bench before you funnel levels into one favourite.</li>
            <li>Save SP and affinity triggers for rival fights, story bosses, and multi-HP-bar encounters.</li>
            <li>Open individual <a href="/animon">Animon detail pages</a> for species-specific notes.</li>
          </ul>
        </article>
      </div>
    </section>
    <GptAdSlot unit="2" />

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
              <li>Check the <a href="/wiki/skills">Skills list</a> for target types</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
    <GptAdSlot unit="3" />

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
              <a class="related-link" href="/beginner">
                Beginner Guide
                <small>First hours in Talea</small>
              </a>
              <a class="related-link" href="/starters">
                Starter Comparison
                <small>Five opening partners</small>
              </a>
              <a class="related-link" href="/evolutions">
                Evolution Guide
                <small>Branches and requirements</small>
              </a>
              <a class="related-link" href="/wiki/bosses">
                Boss Guide
                <small>Levels, HP bars, affinities</small>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
    <GptAdSlot unit="1" />
  </main>
</template>

<script setup>
import { computed } from 'vue'
import {} from 'vue-router'
import { animonDexLink, bosses, distribution, elementTypes, emotionalTypes, skills, tagClass } from '@/lib/data'
import { getTypeInfo, hasBattleType, typeIconSrc } from '@/lib/typeInfo'

const elements = distribution('elementType')
const emotions = distribution('emotionalType')
const emotionCountMap = Object.fromEntries(emotions.map((row) => [row.name, row.count]))

const sortedElements = computed(() => {
  const total = elements.reduce((sum, row) => sum + row.count, 0) || 1
  return [...elements]
    .sort((a, b) => b.count - a.count)
    .map((row) => ({
      ...row,
      pct: Math.round((row.count / total) * 100),
    }))
})

const typedSkillsCount = skills.filter(
  (skill) => skill.type && skill.type !== 'NONE' && skill.type !== 'UNKNOWN',
).length
const statusSkillsCount = skills.filter((skill) => skill.category === 'STATUS').length

const bossFormsWithHiddenType = computed(() => {
  const fromBoss = (bosses.bossAnimon || []).filter((boss) => hasBattleType(boss.hiddenType)).length
  const fromCamp = (bosses.campBosses || []).reduce(
    (sum, boss) =>
      sum + (boss.party || []).filter((member) => hasBattleType(member.hiddenType)).length,
    0,
  )
  return fromBoss + fromCamp
})

const effectMatrix = [
  {
    label: 'Skill typing',
    state: 'Confirmed',
    text: `${typedSkillsCount} skills have a typed element.`,
  },
  {
    label: 'Status tools',
    state: 'Confirmed',
    text: `${statusSkillsCount} status skills — some create fields or typed boosts.`,
  },
  {
    label: 'Weakness chart',
    state: 'Partial',
    text: 'Per-species resistances; scan in battle.',
  },
  {
    label: 'Affinity bonuses',
    state: 'Confirmed',
    text: 'All five affinities activatable with extra SP.',
  },
]

const affinityGuide = [
  {
    name: 'FELICIS',
    tagline: 'Healing & team sustain',
    blurb:
      'Keeps your squad alive through long routes and multi-phase boss fights. Best when you expect damage spikes rather than one-turn burst windows.',
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
      'Pushes raw offensive output for the whole active party. Save it for turns where you can follow up with multiple attackers.',
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
      'Helps when shield icons block your primary typing. Forces damage through otherwise resisted elements instead of chip hits.',
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
      'Rewards finishing high-HP targets and punishing tanky route leaders. Strong when you chip one big threat over several turns.',
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
      'Skews toward crit-focused teams that want faster TP charges. Excellent when setting up a bonus-turn finisher.',
    tips: [
      'Plan the follow-up TP turn before activating',
      'Works with multi-hit or high-crit skill sets',
      'Do not waste it on cleanup against weak wilds',
    ],
  },
]

const affinityCards = computed(() =>
  affinityGuide.map((item) => {
    const theme = getTypeInfo(item.name, 'emotion')
    return {
      ...item,
      count: emotionCountMap[item.name] ?? 0,
      themeNote: theme.description,
    }
  }),
)

const teamTips = [
  { label: 'Element spread', text: 'Aim for three different elements on your early bench before hyper-focusing one line.' },
  { label: 'Affinity role', text: 'Pick one sustain affinity and one burst affinity across your core four when possible.' },
  { label: 'Scan habit', text: 'Treat every new species as unknown until scanned — never assume classic type triangles.' },
  { label: 'SP budget', text: 'Route fights should leave headroom; bosses and rivals eat SP fast with affinities enabled.' },
  { label: 'Skill review', text: 'BST alone misleads — read move target types on detail pages before replacing captures.' },
]
</script>
