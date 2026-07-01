import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthProvider } from '../../../context/AuthContext'
import PostComments from '../index'
import type { PostComment } from '../../../types/post'

const sampleComments: PostComment[] = [
  {
    _id: 'c1',
    id: 'c1',
    text: 'Me encanta esta publicación.',
    isVisible: true,
    postId: 'p1',
    userId: {
      _id: 'u1',
      id: 'u1',
      nickName: 'sofia',
      name: 'Sofía',
      profileImage:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80',
    },
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  },
]

const meta: Meta<typeof PostComments> = {
  component: PostComments,
  title: 'Components/PostComments',
}

export default meta

type Story = StoryObj<typeof PostComments>

export const Default: Story = {
  args: {
    postId: 'p1',
    comments: sampleComments,
  },
  render: (args) => (
    <AuthProvider>
      <div className="max-w-xl p-6">
        <PostComments {...args} />
      </div>
    </AuthProvider>
  ),
}
