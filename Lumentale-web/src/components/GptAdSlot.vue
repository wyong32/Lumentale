<template>
  <aside class="gpt-ad-slot container" aria-label="Advertisement">
    <div :id="elementId" class="gpt-ad-slot__inner" :style="slotStyle" />
  </aside>
</template>

<script setup>
import { computed, nextTick, onMounted, useId } from 'vue'
import { Gt } from '@/utils/gptAds'

const props = defineProps({
  unit: {
    type: [String, Number],
    required: true,
  },
})

const uid = useId().replace(/:/g, '')
const elementId = computed(() => `lumentale-gpt-${props.unit}-${uid}`)

const slotStyle = computed(() => {
  if (props.unit === 'inter') {
    return { minWidth: '320px', minHeight: '480px' }
  }
  return { minWidth: '300px', minHeight: '90px' }
})

onMounted(() => {
  nextTick(() => Gt(elementId.value, props.unit))
})
</script>
