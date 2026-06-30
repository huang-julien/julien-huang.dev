import type { Meta, StoryObj } from '@nuxtjs/storybook'

import ProjectCard from './ProjectCard.vue'

const meta = {
  title: 'Components/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A linked card showcasing an open-source project with a name, description and an external GitHub link. Hovering reveals an animated border.',
      },
    },
  },
  argTypes: {
    name: { control: 'text', description: 'Project title shown in the card header.' },
    description: { control: 'text', description: 'Short summary of the project.' },
    url: { control: 'text', description: 'External link opened in a new tab when the card is clicked.' },
  },
  args: {
    name: 'nuxt-applicationinsights',
    description: 'ApplicationInsights module for Nuxt.',
    url: 'https://github.com/huang-julien/nuxt-applicationinsights',
  },
  decorators: [
    () => ({ template: '<div style="width: 320px"><story /></div>' }),
  ],
} satisfies Meta<typeof ProjectCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const LongDescription: Story = {
  args: {
    name: 'nuxt/hints',
    description:
      'Nuxt module that shows hints for aspects of your application such as Performance, A11Y, Security, and more!',
    url: 'https://github.com/nuxt/hints',
  },
}

export const ShortName: Story = {
  args: {
    name: 'nuxt/nuxt',
    description: 'The Intuitive Vue Framework.',
    url: 'https://github.com/nuxt/nuxt',
  },
}
