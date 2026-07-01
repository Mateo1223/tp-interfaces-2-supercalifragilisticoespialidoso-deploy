import { Input, Label, TextArea } from '@heroui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import FormModalShell from '../index'

const meta: Meta<typeof FormModalShell> = {
  component: FormModalShell,
  title: 'Components/FormModalShell',
}

export default meta

type Story = StoryObj<typeof FormModalShell>

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Crear publicación',
    submitLabel: 'Guardar',
    onOpenChange: () => undefined,
    onSubmit: (e) => e.preventDefault(),
    trigger: <button className="rounded-xl border px-4 py-2">Abrir modal</button>,
  },
  render: (args) => (
    <div className="p-10">
      <FormModalShell {...args}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Label>Título</Label>
            <Input placeholder="Ejemplo" />
          </div>
          <div className="flex flex-col gap-1">
            <Label>Descripción</Label>
            <TextArea placeholder="Escribí algo aquí" />
          </div>
        </div>
      </FormModalShell>
    </div>
  ),
}
