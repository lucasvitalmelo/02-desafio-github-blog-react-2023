import { Profile } from '../../components/Profile'
import { PostsContainer } from './styles'
import { SearchPublications } from '../../components/SearchPublications'
import { useGetUser } from '../../hooks/queries/use-get-user'
import { useSearchIssues } from '../../hooks/queries/use-search-issues'
import { useState } from 'react'
import { PostCard } from '../../components/PostCard'

export function Home() {
  const [search, setSearch] = useState('')

  const { data: user } = useGetUser()
  const { data: issues } = useSearchIssues(search)
  return (
    <>
      <Profile user={user} />

      <SearchPublications onChange={setSearch} />

      <PostsContainer>
        {issues?.items.map((item) => (
          <PostCard key={item.id} post={item} />
        ))}
      </PostsContainer>
    </>
  )
}
