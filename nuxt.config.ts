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
    }
  }, 

  modules: [
    '@nuxt/image', 
    'nuxt-icon',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@nuxthub/core',
    "@nuxt/content",
  ],

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

  compatibilityDate: '2024-08-25',
})