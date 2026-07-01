import { Button } from '@heroui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import ConfirmationModal from '../index'

const meta: Meta<typeof ConfirmationModal> = {
  component: ConfirmationModal,
  title: 'Components/ConfirmationModal',
}

export default meta

type Story = StoryObj<typeof ConfirmationModal>

export const Default: Story = {
  args: {
    title: 'Eliminar publicación',
    description: 'Esta acción no se puede deshacer.',
    confirmLabel: 'Eliminar',
    cancelLabel: 'Cancelar',
  },
  render: (args) => (
    <div className="p-10">
      <ConfirmationModal
        {...args}
        trigger={<Button>Eliminar</Button>}
        onConfirm={() => console.log('confirmado')}
      />
    </div>
  ),
}
