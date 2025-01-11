export default defineNuxtConfig({
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

  modules: [
    '@nuxt/image', 
    'nuxt-icon',
    '@nuxt/fonts',
    "@nuxtjs/prismic",
    '@nuxt/ui',
    '@nuxthub/core'
  ],

  runtimeConfig: {
    github: {
      token: ''
    }
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

  experimental: {
    componentIslands: {
      selectiveClient: true
    },
  },

  future: {
   compatibilityVersion: 4 
  },

  routeRules: {
    '/__nuxt_island/**': {
      headers: {
        'Access-Control-Allow-Origin': "*"
      },
      swr: 1000 * 60 * 60 * 24
    }
  },

  compatibilityDate: '2024-08-25',
})