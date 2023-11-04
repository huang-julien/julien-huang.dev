export default defineNuxtConfig({
  nitro: {
    preset: 'vercel-edge',
  },
  devtools: {
    enabled: true,
  },

  app: {
    head: {
      title: "Julien Huang",
      htmlAttrs: {
        lang: "en",
      }
    }
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon']
})