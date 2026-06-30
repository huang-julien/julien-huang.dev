import type { Meta, StoryObj } from '@nuxtjs/storybook'

import Header from './Header.vue'

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'The global site header: profile picture linking home, primary navigation (Sponsors, Work, CV) and external social icon links. Fixed to the top of the viewport.',
      },
    },
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
