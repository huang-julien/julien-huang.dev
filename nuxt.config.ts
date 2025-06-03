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

  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            'p-blue': '#172554',
            's-blue': '#3083DC',
            'p-yellow': '#EBBE46',
            'light-gray': '#D9DBF1',
          },
          fontSize: {
            '2xs': ['0.625rem', '0.875rem'],
          }, 
        }
      },
    }
  },

  compatibilityDate: '2025-04-05'
})