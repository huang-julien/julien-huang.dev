import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  // Providers configs
  github: {
    login: 'huang-julien',
    type: 'user',
  },

  // Rendering configs
  width: 800,
  renderer: 'tiers', // or 'circles'
  formats: [  'svg' ],
  tiers: [
    // Past sponsors, currently only supports GitHub
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
    {
      title: 'Sponsors',
      preset: tierPresets.medium,
    },
  ],
})