 
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('request', (event) => {
    const context = event.context as Record<string, any>
    if (context.cloudflare) return
    const runtime = (event as any).req?.runtime?.cloudflare
    const env = runtime?.env ?? (globalThis as any).__env__
    if (env) context.cloudflare = { ...runtime, env }
  })
})
