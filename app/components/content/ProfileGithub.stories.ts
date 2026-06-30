import type { Meta, StoryObj } from '@nuxtjs/storybook'

import ProfileGithub from './ProfileGithub.vue'

const meta = {
  title: 'Content/ProfileGithub',
  component: ProfileGithub,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A circular profile avatar with a gradient border and an overlaid badge linking to the GitHub profile. Decorative; takes no props.',
      },
    },
  },
  decorators: [
    () => ({ template: '<div style="width: 320px"><story /></div>' }),
  ],
} satisfies Meta<typeof ProfileGithub>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
