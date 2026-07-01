import type { Meta, StoryObj } from '@storybook/react-vite'
import { MemoryRouter } from 'react-router'
import FeedResults from '../index'
import type { Post } from '../../../types/post'

const samplePosts: Post[] = [
  {
    _id: '1',
    id: '1',
    description: 'Una publicación de ejemplo con imagen y etiquetas.',
    author: {
      _id: 'u1',
      id: 'u1',
      nickName: 'maria',
      name: 'María',
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
    tags: [{ _id: 't1', id: 't1', name: 'Diseño' }],
    comments: [],
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
]

const meta: Meta<typeof FeedResults> = {
  component: FeedResults,
  title: 'Components/FeedResults',
}

export default meta

type Story = StoryObj<typeof FeedResults>

export const Default: Story = {
  args: {
    posts: samplePosts,
    page: 1,
    setPage: () => undefined,
    totalPages: 3,
    totalItems: 10,
    isLoading: false,
    error: null,
  },
  render: (args) => (
    <MemoryRouter>
      <div className="p-6">
        <FeedResults {...args} />
      </div>
    </MemoryRouter>
  ),
}
