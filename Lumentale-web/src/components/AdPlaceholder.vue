<template>
  <aside
    class="ad-placeholder-slot container"
    :class="{ 'ad-placeholder-slot--native': variant === 'native' }"
    aria-label="Reserved advertisement space"
  >
    <div class="ad-placeholder-slot__frame">
      <span>Advertisement placeholder</span>
    </div>
  </aside>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'banner',
  },
})
</script>
