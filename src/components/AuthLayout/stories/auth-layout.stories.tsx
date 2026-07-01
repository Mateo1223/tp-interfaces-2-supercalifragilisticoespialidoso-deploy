import type { Meta, StoryObj } from '@storybook/react-vite'
import AuthLayout from '../index'

const meta: Meta<typeof AuthLayout> = {
  component: AuthLayout,
  title: 'Components/AuthLayout',
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj<typeof AuthLayout>

export const Default: Story = {
  render: () => (
    <AuthLayout>
      <div className="w-full rounded-2xl bg-surface p-6 text-center shadow-sm">
        <h2 className="text-xl font-semibold">Bienvenido</h2>
        <p className="mt-2 text-sm text-muted">Contenido del formulario de acceso.</p>
      </div>
    </AuthLayout>
  ),
}
