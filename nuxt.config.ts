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
      }
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
    '@nuxthub/core',
    "@nuxt/content",
  ],

  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'en', 
  },
 

  compatibilityDate: '2025-04-05'
})