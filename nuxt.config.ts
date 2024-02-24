export default defineNuxtConfig({
  nitro: {
    preset: 'netlify',
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
  }
})