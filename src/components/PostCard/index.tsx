import { HeaderContainer, PostContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostCardProps {
  post: {
    number: number
    title: string
    created_at: string
    body: string
  }
}

export function PostCard({ post }: PostCardProps) {
  return (
    <PostContainer to={`/post/${post.number}`}>
      <HeaderContainer>
        <h1>{post.title}</h1>
        <span>
          {formatDistanceToNow(new Date(post.created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </HeaderContainer>

      <p>{post.body}</p>
    </PostContainer>
  )
}
