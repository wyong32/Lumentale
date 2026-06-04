<template>
  <span class="brand-mark">
    <span class="brand-logo-wrap">
      <img
        class="brand-logo"
        :src="seoConfig.defaultOgImage"
        width="40"
        height="40"
        alt="LumenTale: Memories of Trey logo"
      />
    </span>
    <span class="brand-wordmark">LumenTale: Memories of Trey</span>
  </span>
</template>

<script setup>
import { seoConfig } from '@/seo/config.js'
</script>
