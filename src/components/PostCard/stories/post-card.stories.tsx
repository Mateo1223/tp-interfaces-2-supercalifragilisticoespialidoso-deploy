import type { Meta, StoryObj } from '@storybook/react-vite'
import { MemoryRouter } from 'react-router'
import PostCard from '../index'
import type { Post } from '../../../types/post'

const samplePost: Post = {
  _id: '1',
  id: '1',
  description: 'Una publicación corta con una imagen de ejemplo para la vista previa.',
  author: {
    _id: 'u1',
    id: 'u1',
    nickName: 'ana',
    name: 'Ana',
    profileImage:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80',
  },
  images: [
    {
      _id: 'img1',
      id: 'img1',
      url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    },
  ],
  tags: [{ _id: 't1', id: 't1', name: 'Tutorial' }],
  comments: [
    {
      _id: 'c1',
      id: 'c1',
      text: 'Muy bueno',
      isVisible: true,
      postId: '1',
      userId: {
        _id: 'u1',
        id: 'u1',
        nickName: 'ana',
        name: 'Ana',
        profileImage:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80',
      },
      createdAt: '2024-01-01T00:00:00.000Z',
      updatedAt: '2024-01-01T00:00:00.000Z',
    },
  ],
  createdAt: '2024-01-01T00:00:00.000Z',
  updatedAt: '2024-01-01T00:00:00.000Z',
}

const meta: Meta<typeof PostCard> = {
  component: PostCard,
  title: 'Components/PostCard',
}

export default meta

type Story = StoryObj<typeof PostCard>

export const Default: Story = {
  args: { post: samplePost },
  render: (args) => (
    <MemoryRouter>
      <div className="max-w-sm p-4">
        <PostCard {...args} />
      </div>
    </MemoryRouter>
  ),
}
