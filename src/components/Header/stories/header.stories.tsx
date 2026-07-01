import type { Meta, StoryObj } from '@storybook/react-vite'
import { MemoryRouter } from 'react-router'
import { AuthProvider } from '../../../context/AuthContext'
import Header from '../index'

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Components/Header',
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <AuthProvider>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </AuthProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {}
