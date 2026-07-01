import type { Meta, StoryObj } from '@storybook/react-vite'
import { MemoryRouter } from 'react-router'
import { AuthProvider } from '../../../context/AuthContext'
import UserMenu from '../index'

const meta: Meta<typeof UserMenu> = {
  component: UserMenu,
  title: 'Components/UserMenu',
}

export default meta

type Story = StoryObj<typeof UserMenu>

export const Default: Story = {
  render: () => (
    <AuthProvider>
      <MemoryRouter>
        <div className="p-6">
          <UserMenu />
        </div>
      </MemoryRouter>
    </AuthProvider>
  ),
}
