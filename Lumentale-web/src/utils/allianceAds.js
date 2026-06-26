import {
  ALLIANCE_BANNERS,
  ALLIANCE_BANNER_BREAKPOINT,
  ALLIANCE_NATIVE,
  ALLIANCE_POPUNDER_SRC,
} from '@/config/allianceAds'

let adLoadQueue = Promise.resolve()
let popunderLoaded = false
let nativeLoaded = false

function enqueueAdLoad(task) {
  adLoadQueue = adLoadQueue.then(task).catch(() => {})
  return adLoadQueue
}

function injectScript({ src, async = true, cfasync = null, text = null, target }) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    if (src) script.src = src
    if (async) script.async = true
    if (cfasync === false) script.setAttribute('data-cfasync', 'false')
    if (text) script.text = text
    script.onload = () => resolve(script)
    script.onerror = () => reject(new Error(`Alliance ad script failed: ${src || 'inline'}`))
    target.appendChild(script)
  })
}

/** Site-wide popunder — call once from index.html or app bootstrap. */
export function loadAlliancePopunder() {
  if (popunderLoaded || typeof document === 'undefined') return
  popunderLoaded = true
  injectScript({ src: ALLIANCE_POPUNDER_SRC, async: false, target: document.body })
}

/** Site-wide native banner — requires the container element in the DOM. */
export function mountAllianceNativeBanner(containerEl) {
  if (nativeLoaded || !containerEl) return
  nativeLoaded = true
  injectScript({
    src: ALLIANCE_NATIVE.invokeSrc,
    async: true,
    cfasync: false,
    target: document.body,
  })
}

export function isAllianceMobileViewport() {
  return window.matchMedia(`(max-width: ${ALLIANCE_BANNER_BREAKPOINT - 1}px)`).matches
}

/**
 * Mount a single 728×90 (desktop) or 300×250 (mobile) iframe banner into containerEl.
 * Serialized via queue so concurrent atOptions + invoke.js loads do not clash.
 */
export function mountAllianceBanner(containerEl, variant = isAllianceMobileViewport() ? 'mobile' : 'desktop') {
  if (!containerEl || containerEl.dataset.allianceLoaded === '1') return adLoadQueue

  return enqueueAdLoad(async () => {
    if (containerEl.dataset.allianceLoaded === '1') return

    const opts = ALLIANCE_BANNERS[variant]
    if (!opts) return

    containerEl.dataset.allianceLoaded = '1'
    containerEl.innerHTML = ''

    window.atOptions = {
      key: opts.key,
      format: 'iframe',
      height: opts.height,
      width: opts.width,
      params: {},
    }

    await injectScript({
      text: `atOptions = ${JSON.stringify(window.atOptions)};`,
      async: false,
      target: containerEl,
    })

    await injectScript({
      src: opts.invokeSrc,
      async: true,
      target: containerEl,
    })
  })
}

export { ALLIANCE_BANNER_BREAKPOINT }
