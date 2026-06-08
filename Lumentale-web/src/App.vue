<template>
  <AppHeader />
  <RouterView v-slot="{ Component }">
    <component :is="Component" v-if="Component" @vue:mounted="onRouteViewMounted" />
  </RouterView>
  <AppFooter v-if="footerVisible" />
</template>

<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

const footerVisible = ref(false)

function onRouteViewMounted() {
  footerVisible.value = true
}
</script>
