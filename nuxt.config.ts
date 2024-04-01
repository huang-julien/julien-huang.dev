export default defineNuxtConfig({
  nitro: {
    preset: 'netlify',
    future: {
      nativeSWR: true
    }
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
  modules: ['@nuxt/image', '@nuxthq/ui', '@nuxtjs/tailwindcss', 'nuxt-icon'],

  runtimeConfig: {
    github: {
      token: ''
    }
  },

  experimental: {
    componentIslands: {
      selectiveClient: true
    }
  },
  routeRules: {
    '/__nuxt_island/**': {
      headers: {
        'Access-Control-Allow-Origin': "*"
      },
      swr: 1000 * 60 * 60 * 24
    }
  },
})