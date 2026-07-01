import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import PostFormFields from '../index'

const meta: Meta<typeof PostFormFields> = {
  component: PostFormFields,
  title: 'Components/PostFormFields',
}

export default meta

type Story = StoryObj<typeof PostFormFields>

export const Default: Story = {
  args: {
    description: '',
    onDescriptionChange: () => undefined,
    onImageChange: () => undefined,
    postId: 'post-1',
    imagePreview:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80',
  },
  render: (args) => {
    const [description, setDescription] = useState(args.description)

    return (
      <div className="max-w-xl p-6">
        <PostFormFields
          {...args}
          description={description}
          onDescriptionChange={setDescription}
          onImageChange={args.onImageChange}
        />
      </div>
    )
  },
}
