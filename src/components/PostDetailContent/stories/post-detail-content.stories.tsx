import type { Meta, StoryObj } from '@storybook/react-vite'
import { MemoryRouter } from 'react-router'
import { AuthProvider } from '../../../context/AuthContext'
import PostDetailContent from '../index'
import type { Post } from '../../../types/post'

const samplePost: Post = {
  _id: '1',
  id: '1',
  description: 'Este es el contenido principal de una publicación con comentarios y etiquetas.',
  author: {
    _id: 'u1',
    id: 'u1',
    nickName: 'lucas',
    name: 'Lucas',
    profileImage:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80',
  },
  images: [
    {
      _id: 'img1',
      id: 'img1',
      url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    },
  ],
  tags: [{ _id: 't1', id: 't1', name: 'React' }],
  comments: [],
  createdAt: '2024-01-01T00:00:00.000Z',
  updatedAt: '2024-01-01T00:00:00.000Z',
}

const meta: Meta<typeof PostDetailContent> = {
  component: PostDetailContent,
  title: 'Components/PostDetailContent',
}

export default meta

type Story = StoryObj<typeof PostDetailContent>

export const Default: Story = {
  args: {
    post: samplePost,
    isAuthor: false,
  },
  render: (args) => (
    <AuthProvider>
      <MemoryRouter>
        <div className="max-w-2xl p-6">
          <PostDetailContent {...args} />
        </div>
      </MemoryRouter>
    </AuthProvider>
  ),
}
