import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import UserFormFields from '../index'

const meta: Meta<typeof UserFormFields> = {
  component: UserFormFields,
  title: 'Components/UserFormFields',
}

export default meta

type Story = StoryObj<typeof UserFormFields>

export const Default: Story = {
  args: {
    name: '',
    bio: '',
    onNameChange: () => undefined,
    onBioChange: () => undefined,
    onProfileImageChange: () => undefined,
  },
  render: (args) => {
    const [name, setName] = useState(args.name)
    const [bio, setBio] = useState(args.bio)

    return (
      <div className="max-w-xl p-6">
        <UserFormFields
          {...args}
          name={name}
          bio={bio}
          onNameChange={setName}
          onBioChange={setBio}
        />
      </div>
    )
  },
}
