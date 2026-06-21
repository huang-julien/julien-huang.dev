import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['test/e2e/**/*.test.ts'],
    // Each spec boots its own Nuxt (dev server or full build + node server)
    // plus a Chrome instance — run files serially so ports/processes
    // don't fight, and give the build-mode setup() room to finish.
    fileParallelism: false,
    testTimeout: 120_000,
    hookTimeout: 600_000,
  },
})
