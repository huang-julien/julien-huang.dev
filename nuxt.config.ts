export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },

  css: ['@/assets/style.scss'],

  app: {
    head: {
      title: "Julien Huang - Open source developer",
      htmlAttrs: {
        lang: "en",
      }
    },
    pageTransition: { name: 'page', mode: 'out-in' },
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

  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            'p-blue': '#172554',
            's-blue': '#3083DC',
            'p-yellow': '#EBBE46',
            'light-gray': '#D9DBF1',
          }
        }
      }
    }
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2025-04-05'
})