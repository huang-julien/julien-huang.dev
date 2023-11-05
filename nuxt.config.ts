export default defineNuxtConfig({
  nitro: {
    preset: 'vercel-edge',
  },
  devtools: {
    enabled: true,
  },

  css: ['@/assets/style.scss'],

  app: {
    head: {
      title: "Julien Huang",
      htmlAttrs: {
        lang: "en",
      }
    }
  },
  modules: ['@nuxthq/ui', '@nuxtjs/tailwindcss', 'nuxt-icon'],

  runtimeConfig: {
    github: {
      token: ''
    }
  },

  experimental: {
    componentIslands: true
  }
})