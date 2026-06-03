import { computed, onUnmounted, ref, watch, watchEffect } from 'vue'

const DEFAULT_PAGE_SIZE = 48

/**
 * Slice a reactive list for infinite scroll (IntersectionObserver sentinel).
 */
export function useInfiniteList(sourceList, options = {}) {
  const pageSize = options.pageSize ?? DEFAULT_PAGE_SIZE
  const visibleCount = ref(pageSize)
  const sentinel = ref(null)
  let observer

  const visible = computed(() => {
    const list = sourceList.value ?? []
    return list.slice(0, visibleCount.value)
  })

  const hasMore = computed(() => {
    const list = sourceList.value ?? []
    return visibleCount.value < list.length
  })

  const total = computed(() => (sourceList.value ?? []).length)

  function loadMore() {
    const list = sourceList.value ?? []
    if (visibleCount.value >= list.length) return
    visibleCount.value = Math.min(visibleCount.value + pageSize, list.length)
  }

  function reset() {
    visibleCount.value = pageSize
  }

  watch(
    () => {
      const list = sourceList.value ?? []
      return `${list.length}:${list[0]?.slug ?? list[0]?.id ?? ''}`
    },
    () => reset(),
  )

  observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) loadMore()
    },
    { root: null, rootMargin: '200px 0px', threshold: 0 },
  )

  watchEffect((onCleanup) => {
    const el = sentinel.value
    if (!el || !hasMore.value) return
    observer.observe(el)
    onCleanup(() => observer.unobserve(el))
  })

  onUnmounted(() => {
    observer?.disconnect()
    observer = null
  })

  return { visible, hasMore, total, sentinel, loadMore, reset }
}
