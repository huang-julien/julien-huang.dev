export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },

  css: ['@/assets/style.css'],

  app: {
    head: {
      title: "Julien Huang - Open source developer",
      htmlAttrs: {
        lang: "en",
      },
      titleTemplate: '%s - Julien Huang',
    },
    pageTransition: { name: 'fade', mode: 'out-in' },
  },
 
  icon: {
    mode: 'svg'
  },

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/ui',
    "@nuxt/content",
    '@nuxthub/core',
  ],

  experimental: {
    componentIslands: {
      selectiveClient: true
    }
  },

  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'en', 
    strategy: 'no_prefix'
  },
 

  compatibilityDate: '2025-04-05'
})