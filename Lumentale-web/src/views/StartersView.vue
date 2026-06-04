<template>
  <main class="page-main">
    <section class="page-hero-section" aria-labelledby="starters-title">
      <div class="container">
        <div class="page-hero-content page-hero-center">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">›</span>
            <span>Starters</span>
          </nav>
          <p class="eyebrow">Starter Guide</p>
          <h1 id="starters-title">Best LumenTale Starter Animon Guide</h1>
          <p class="lead lead-center">
            Compare every LumenTale starter in Memories of Trey — element type, emotional affinity, BST range, catch
            rate, and evolution line to pick the best starter Animon for your play style.
          </p>
          <span class="meta-pill" style="margin-top: 14px">{{ starterList.length }} starters</span>
        </div>
      </div>
    </section>

    <section class="dex-section">
      <div class="container">
        <div class="dex-content">
          <a
            v-for="entry in topStarters"
            :key="entry.slug"
            class="dex-item"
            :href="`/animon/${entry.slug}`"
          >
            <div class="dex-item-art">
              <img :src="imgSrc(entry.image, entry.name)" :alt="entry.name" width="120" height="130" loading="lazy" />
            </div>
            <div class="dex-item-body">
              <small>#{{ entry.number }}</small>
              <strong>{{ entry.name }}</strong>
              <div class="dex-item-tags">
                <span :class="tagClass(entry.elementType)">{{ entry.elementType }}</span>
                <span :class="tagClass(entry.emotionalType, 'emotion')">{{ entry.emotionalType }}</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <section class="data-section" aria-labelledby="starters-table-heading">
      <div class="container">
        <h2 id="starters-table-heading" class="sr-only">LumenTale Starter Comparison Table</h2>
        <p class="page-intro">
          Full LumenTale starter comparison with stats for all five Kickstarter-eligible Animon in Memories of Trey.
        </p>
        <div class="data-content">
          <div class="data-table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th scope="col">Animon</th>
                  <th scope="col">Element</th>
                  <th scope="col">Affinity</th>
                  <th scope="col">BST</th>
                  <th scope="col">Catch</th>
                  <th scope="col">Evolution</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="entry in starterList" :key="entry.slug">
                  <td>
                    <a class="row-link" :href="`/animon/${entry.slug}`">{{ entry.name }}</a>
                  </td>
                  <td>
                    <a :href="animonDexLink({ element: entry.elementType })">
                      <span :class="tagClass(entry.elementType)">{{ entry.elementType }}</span>
                    </a>
                  </td>
                  <td>
                    <a :href="animonDexLink({ affinity: entry.emotionalType })">
                      <span :class="tagClass(entry.emotionalType, 'emotion')">{{ entry.emotionalType }}</span>
                    </a>
                  </td>
                  <td>{{ entry.minBst }}–{{ entry.maxBst }}</td>
                  <td>{{ entry.catchRate }}</td>
                  <td>
                    <a :href="evolutionLinkForAnimon(entry.slug)">View line →</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import {} from 'vue-router'
import { animonDexLink, evolutionLinkForAnimon, imgSrc, starters, tagClass } from '@/lib/data'

const starterList = computed(() => starters())
const topStarters = computed(() => starterList.value.slice(0, 5))
</script>
