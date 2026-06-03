<template>
  <span class="brand-mark">
    <span class="brand-logo-wrap" aria-hidden="true">
      <img class="brand-logo" :src="seoConfig.defaultOgImage" width="40" height="40" alt="" />
    </span>
    <span class="brand-wordmark">LumenTale</span>
  </span>
</template>

<script setup>
import { seoConfig } from '@/seo/config.js'
</script>
