<template>
  <aside class="alliance-ad-slot container" aria-label="Advertisement">
    <div
      ref="desktopRef"
      class="alliance-ad-slot__frame alliance-ad-slot__frame--desktop"
      :style="desktopFrameStyle"
    />
    <div
      ref="mobileRef"
      class="alliance-ad-slot__frame alliance-ad-slot__frame--mobile"
      :style="mobileFrameStyle"
    />
  </aside>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { ALLIANCE_BANNERS } from '@/config/allianceAds'
import { isAllianceMobileViewport, mountAllianceBanner } from '@/utils/allianceAds'

const desktopRef = ref(null)
const mobileRef = ref(null)

const desktopFrameStyle = computed(() => ({
  minWidth: `${ALLIANCE_BANNERS.desktop.width}px`,
  minHeight: `${ALLIANCE_BANNERS.desktop.height}px`,
}))

const mobileFrameStyle = computed(() => ({
  minWidth: `${ALLIANCE_BANNERS.mobile.width}px`,
  minHeight: `${ALLIANCE_BANNERS.mobile.height}px`,
}))

onMounted(() => {
  const variant = isAllianceMobileViewport() ? 'mobile' : 'desktop'
  const container = variant === 'mobile' ? mobileRef.value : desktopRef.value
  mountAllianceBanner(container, variant)
})
</script>
