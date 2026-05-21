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
    '@nuxt/hints',
    '@nuxt/a11y',
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
   },

  experimental: {
    componentIslands: {
      selectiveClient: true
    }
  },

  hooks: {
    // vue-onigiri's Vite compiler plugin injects a setup-bridge + Proxy and
    // attaches `__onigiriRender` to every SFC so the SSR runtime can serialize
    // them into an AST. The browser never injects the ONIGIRI_RENDER_SYMBOL,
    // so all of that code is dead weight in the client bundle.
    // The actual server-side compilation runs through Nitro's `rollup:before`
    // hook (see onigiriNitroPlugins in @nuxt/vite-builder), so we can strip
    // just the compiler from the client Vite config. The manifest plugin must
    // stay — `vue-onigiri/runtime/loader.js` imports `virtual:onigiri/manifest`
    // on the client.
    'vite:extendConfig'(config, { isClient }) {
      if (!isClient || !config.plugins) return
      config.plugins = config.plugins.filter((p) => {
        const name = (p as { name?: string } | null | undefined)?.name
        return name !== 'vite:vue-onigiri-compiler'
      })
    }
  },

  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'en', 
    strategy: 'no_prefix'
  },
  

  compatibilityDate: '2025-04-05',
  vite: {
    build: {
     }
  }
})