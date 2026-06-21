import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch, createPage, url } from '@nuxt/test-utils/e2e'

await setup({
  rootDir: fileURLToPath(new URL('../..', import.meta.url)),
  dev: true,
  browser: true,
  browserOptions: {
    type: 'chromium',
    launch: { channel: 'chrome' },
  },
})

describe('dev mode', () => {
  it('SSRs the home page', async () => {
    const html = await $fetch<string>('/')
    expect(html).toContain('Julien Huang')
  })

  it('SSRs the onigiri island content on /work', async () => {
    const html = await $fetch<string>('/work')
    expect(html).toContain('Projects')
    expect(html).toContain('projects i')
  })

  it('renders /work in a real browser without onigiri errors', async () => {
    const page = await createPage()
    const errors: string[] = []
    page.on('pageerror', err => errors.push(`pageerror: ${err.message}`))
    page.on('console', (msg) => {
      if (msg.type() === 'error') { errors.push(`console: ${msg.text()}`) }
    })

    await page.goto(url('/work'), { waitUntil: 'networkidle' })
    expect(await page.textContent('h1')).toContain('Projects')

    const onigiriErrors = errors.filter(e =>
      /onigiri|No loader registered|Hydration|hydration/i.test(e),
    )
    expect(onigiriErrors).toEqual([])
    await page.close()
  })
})
