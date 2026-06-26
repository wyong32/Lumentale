<template>
  <aside class="alliance-native-banner container" aria-label="Advertisement">
    <div :id="containerId" class="alliance-native-banner__inner" />
  </aside>
</template>

<script setup>
import { onMounted } from 'vue'
import { ALLIANCE_NATIVE } from '@/config/allianceAds'
import { mountAllianceNativeBanner } from '@/utils/allianceAds'

const containerId = ALLIANCE_NATIVE.containerId

onMounted(() => {
  mountAllianceNativeBanner(document.getElementById(containerId))
})
</script>
