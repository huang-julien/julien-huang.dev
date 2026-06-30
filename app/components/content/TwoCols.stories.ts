import type { Meta, StoryObj } from '@nuxtjs/storybook'

import TwoCols from './TwoCols.vue'

const meta = {
  title: 'Content/TwoCols',
  component: TwoCols,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A responsive layout primitive that renders its `left` and `right` slots side by side on large screens and stacked on small ones. Per-column classes can be passed via `leftClass` / `rightClass`.',
      },
    },
  },
  argTypes: {
    leftClass: { control: 'text', description: 'Classes applied to the left column wrapper.' },
    rightClass: { control: 'text', description: 'Classes applied to the right column wrapper.' },
  },
  render: args => ({
    components: { TwoCols },
    setup: () => ({ args }),
    template: `
      <TwoCols v-bind="args">
        <template #left>
          <div class="p-6 rounded bg-blue-100 text-blue-900">Left column</div>
        </template>
        <template #right>
          <div class="p-6 rounded bg-yellow-100 text-yellow-900">Right column</div>
        </template>
      </TwoCols>
    `,
  }),
} satisfies Meta<typeof TwoCols>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithColumnClasses: Story = {
  args: {
    leftClass: 'pr-4',
    rightClass: 'pl-4',
  },
}
