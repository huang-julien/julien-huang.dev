import type { Meta, StoryObj } from '@nuxtjs/storybook'

import CV from './CV.vue'

const meta = {
  title: 'Components/CV',
  component: CV,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'The full A4 résumé page rendered from local i18n content: header with contact links, introduction, work experience, open-source projects, skills, education, contact and hobbies. Content is localized (en/fr) and print-optimized.',
      },
    },
  },
} satisfies Meta<typeof CV>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
