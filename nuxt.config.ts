export default defineNuxtConfig({
  nitro: {
    preset: 'vercel-edge',
  },
  devtools: {
    enabled: true,
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon']
})