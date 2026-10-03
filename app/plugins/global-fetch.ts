// Nuxt 5 no longer exposes `$fetch` globally, but modules (icon, i18n, content, hints) still call it unimported
export default defineNuxtPlugin({
  name: 'global-fetch',
  enforce: 'pre',
  setup() {
    globalThis.$fetch ||= $fetch
  },
})
