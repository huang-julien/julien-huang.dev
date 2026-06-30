import { experimental_vitePlugin } from '@storybook/builder-vite'

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
    'vite:extendConfig': async (config, { isClient }) => {
      if (!isClient || !config.plugins) return
      config.plugins = config.plugins.filter((p) => {
        const name = (p as { name?: string } | null | undefined)?.name
        return name !== 'vite:vue-onigiri-compiler'
      })

     },

    // Storybook's manager/preview websocket channel (added by experimental_vitePlugin) must
    // receive `upgrade` events at the page origin. Under `nuxt dev`, Vite runs in middleware mode
    // (no own http server), so the upgrade lands on Nitro's dev server instead. Forward the
    // channel upgrades into the EventEmitter the @storybook/builder-vite patch listens on.
    listen(server) {
      // Storybook's channel must be the SOLE handler for /storybook-server-channel. Nitro's dev
      // server already has an `upgrade` listener (vite HMR / devtools) that would also handshake
      // the same socket → "Invalid frame header". Take over `upgrade`: route the channel path to
      // Storybook's bridge, delegate every other upgrade to the original listeners (HMR etc.).
      const original = server.rawListeners('upgrade') as Array<(...a: unknown[]) => void>
      server.removeAllListeners('upgrade')
      server.on('upgrade', (req, socket, head) => {
        if (req.url?.startsWith('/storybook-server-channel')) {
          (globalThis as { __SB_CHANNEL_UPGRADE__?: { emit: (e: string, ...a: unknown[]) => void } })
            .__SB_CHANNEL_UPGRADE__?.emit('upgrade', req, socket, head)
          return
        }
        for (const fn of original) fn.call(server, req, socket, head)
      })
    },
  },

  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'en', 
    strategy: 'no_prefix'
  },
  

  compatibilityDate: '2025-04-05',
vite: {
  plugins: [
    await experimental_vitePlugin({})
  ]
}
})