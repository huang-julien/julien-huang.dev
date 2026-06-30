import type { Meta, StoryObj } from '@nuxtjs/storybook'

import ProjectsList from './ProjectsList.vue'

const meta = {
  title: 'Content/ProjectsList',
  component: ProjectsList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A responsive two-column grid of `ProjectCard`s populated from a built-in list of open-source projects. Used inside Nuxt Content pages.',
      },
    },
  },
} satisfies Meta<typeof ProjectsList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
