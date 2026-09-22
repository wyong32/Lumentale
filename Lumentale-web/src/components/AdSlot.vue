<template>
  <aside
    class="ad-slot container"
    :class="{ 'ad-slot--native': variant === 'native' }"
    aria-label="Advertisement"
  >
    <div
      :id="variant === 'native' ? NATIVE_CONTAINER_ID : undefined"
      ref="frameRef"
      class="ad-slot__frame"
      :class="`is-${status}`"
    />
  </aside>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const NATIVE_CONTAINER_ID = 'container-25a9e5721f78885b0bced84193fa9338'
const NATIVE_SCRIPT =
  'https://pl29872484.effectivecpmnetwork.com/25a9e5721f78885b0bced84193fa9338/invoke.js'

const BANNERS = {
  mobile: {
    key: 'ea12140fc9307ae686442334ed569ffd',
    width: 300,
    height: 250,
    script: 'https://www.highperformanceformat.com/ea12140fc9307ae686442334ed569ffd/invoke.js',
  },
  desktop: {
    key: '5f3d6967f9321e3af6607c91fbb5a199',
    width: 728,
    height: 90,
    script: 'https://www.highperformanceformat.com/5f3d6967f9321e3af6607c91fbb5a199/invoke.js',
  },
}

let bannerQueue = Promise.resolve()
let nativeLoaded = false

const props = defineProps({
  variant: {
    type: String,
    default: 'banner',
  },
})

const frameRef = ref(null)
const status = ref('loading')

function loadScript({ src, target, async = false, cfasync }) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.async = async
    if (cfasync === false) script.setAttribute('data-cfasync', 'false')
    script.onload = resolve
    script.onerror = () => reject(new Error(`Ad script failed: ${src}`))
    target.appendChild(script)
  })
}

async function mountNativeBanner(container) {
  if (nativeLoaded) return
  nativeLoaded = true
  container.replaceChildren()

  try {
    await loadScript({
      src: NATIVE_SCRIPT,
      target: document.body,
      async: true,
      cfasync: false,
    })
  } catch (error) {
    nativeLoaded = false
    throw error
  }
}

function mountResponsiveBanner(container) {
  const variant = window.matchMedia('(max-width: 767px)').matches ? 'mobile' : 'desktop'
  const config = BANNERS[variant]

  return () => {
    container.replaceChildren()
    window.atOptions = {
      key: config.key,
      format: 'iframe',
      height: config.height,
      width: config.width,
      params: {},
    }

    const optionsScript = document.createElement('script')
    optionsScript.text = `atOptions = ${JSON.stringify(window.atOptions)};`
    container.appendChild(optionsScript)

    return loadScript({ src: config.script, target: container })
  }
}

onMounted(async () => {
  const container = frameRef.value
  if (!container) return

  try {
    if (props.variant === 'native') {
      await mountNativeBanner(container)
    } else {
      const loadBanner = mountResponsiveBanner(container)
      const nextLoad = bannerQueue.catch(() => {}).then(loadBanner)
      bannerQueue = nextLoad
      await nextLoad
    }
    status.value = 'loaded'
  } catch {
    status.value = 'error'
  }
})
</script>
