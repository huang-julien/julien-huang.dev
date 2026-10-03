const I18N_SERVER_ENTRY = /(?<=i18n\/dist\/runtime\/composables\/)index-server(\.js)?$/

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
    // Nuxt 5 builds Nitro through Vite, so i18n's server-only `#i18n` nitro alias leaks into the app bundle
    (_, nuxt) => {
      nuxt.options.vite.plugins ||= []
      nuxt.options.vite.plugins.push({
        name: 'i18n-app-alias',
        enforce: 'pre',
        resolveId(id, importer) {
          if (!I18N_SERVER_ENTRY.test(id)) return
          return this.resolve(id.replace(I18N_SERVER_ENTRY, 'index.js'), importer, { skipSelf: true })
        },
      })
    },
  ],

  build: {
    transpile: ['@nuxt/hints']
  },

  nitro: {
    // Nitro's node-file-trace doesn't follow `unhead`'s exports subpaths
    // (`unhead/server`, `unhead/client`, ...), so the traced package ships
    // without dist/server.mjs and the server bundle crashes at runtime.
    // Inlining unhead sidesteps the broken trace.
    externals: {
      inline: ['unhead'],
    },

    preset: "cloudflare_module",

    // The cloudflare preset's miniflare dev runner fails to load Vite's module runner on Windows
    devServer: { runner: 'node-worker' },

    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  },

  // Nuxt 5: Nitro v2 compatibility layer (h3 v1 imports, `nitropack` specifiers, v2 config shapes)
  nitroLegacy: true,

  experimental: { 
     componentIslands: 'vue-onigiri',
     nitroViteEnvironment: true, 
  },

  hooks: {
 
  },

  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'en', 
    strategy: 'no_prefix'
  },
  

  compatibilityDate: '2025-10-01',
vite: {
  plugins: [
  ]
}
})