import { useNavigate } from 'react-router'
import clsx from 'clsx'
import { Chip } from '@heroui/react'
import { ROUTES } from '../../config/routes'
import type { Post } from '../../types/post.ts'
import { formatRelativeDate } from '../../utils/format.ts'

interface PostCardProps {
  post: Post
}

const MAX_DESCRIPTION_LENGTH = 80

const PostCard = ({ post }: PostCardProps) => {
  const navigate = useNavigate()
  const { author } = post
  const description = post.description ?? ''
  const isTruncated = description.length > MAX_DESCRIPTION_LENGTH
  const displayDescription = isTruncated
    ? description.slice(0, MAX_DESCRIPTION_LENGTH).trimEnd() + '...'
    : description

  return (
    <div
      className="group relative flex flex-col gap-3 cursor-pointer"
      onClick={() => navigate(ROUTES.POST(post._id))}
    >
      {author && (
        <div className="flex items-center gap-2 px-1">
          <img
            src={author.profileImage || 'https://via.placeholder.com/40'}
            alt={author.name}
            className="w-6 h-6 rounded-full object-cover"
          />
          <div className="flex items-center gap-1 text-xs font-semibold">
            <span
              className="hover:no-underline"
              onClick={(e) => {
                e.stopPropagation()
                navigate(ROUTES.PROFILE(author.nickName))
              }}
            >
              {author.name}
            </span>
            <span className="text-gray-400 font-normal">
              | {formatRelativeDate(post.createdAt)}
            </span>
          </div>
        </div>
      )}
      {post.images?.[0]?.url && (
        <div className="relative overflow-hidden rounded-2xl">
          <img
            alt={post._id}
            loading="lazy"
            src={post.images[0].url}
            className={clsx(
              'h-full w-full object-cover aspect-3/4 dark:brightness-90 transition-[opacity,transform] duration-300 group-hover:scale-[1.03]',
            )}
          />
        </div>
      )}
      <div className="px-1 flex flex-col gap-2">
        <p className="text-sm leading-relaxed">
          {displayDescription}
          {isTruncated && <span className="font-bold"> Ver mas</span>}
        </p>
        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {post.tags.map((tag) => (
              <Chip key={tag._id} size="sm">
                {tag.name}
              </Chip>
            ))}
          </div>
        )}
        <span className="text-xs text-gray-400">
          {post.comments?.length ?? 0} comentario{(post.comments?.length ?? 0) !== 1 ? 's' : ''}
        </span>
      </div>
    </div>
  )
}

export default PostCard
