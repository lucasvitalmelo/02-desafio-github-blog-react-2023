import { FaComment, FaGithub } from 'react-icons/fa'
import { MdDateRange, MdOutlineArrowBackIos } from 'react-icons/md'
import { RiShareBoxLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

import { Item } from '../../services/github'
import { formatDateWithSuffix } from '../../utils/formatDate'
import { ContentCard, HeaderCard, PostCard, LoadAnimated } from './styles'

interface PersonProps {
  post?: Item
}

export function PostHeader({ post }: PersonProps) {
  const navigate = useNavigate()
  if (!post)
    return (
      <LoadAnimated>
        <div></div>
      </LoadAnimated>
    )

  return (
    <PostCard>
      <HeaderCard>
        <button onClick={() => navigate(-1)}>
          <MdOutlineArrowBackIos /> <span>voltar</span>
        </button>
        <a href={post.html_url} target="_blank" rel="noreferrer">
          <span>ver no github</span> <RiShareBoxLine />
        </a>
      </HeaderCard>

      <ContentCard>
        <h2>{post.title}</h2>

        <div>
          <span>
            <FaGithub />
            {post.user.login}
          </span>
          <span title={new Date(post.created_at).toLocaleString()}>
            <MdDateRange />
            {formatDateWithSuffix(post.created_at)}
          </span>
          <span>
            <FaComment />
            {post.comments} comentários
          </span>
        </div>
      </ContentCard>
    </PostCard>
  )
}
