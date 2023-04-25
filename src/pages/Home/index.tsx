import { Post } from "../../components/Post"
import { Profile } from "../../components/Profile"
import { MainContainer, PostsContainer, PublicationsHeader, SearchPublicationsInput } from "./styles"


export function Home() {
  return (
    <MainContainer>
      <Profile/>

      <PublicationsHeader>
        <p>publicações</p>
        <span>6 publicações</span>
      </PublicationsHeader>

      <SearchPublicationsInput type="text" placeholder="Buscar conteúdo"/>

      <PostsContainer>
        <Post/>
        <Post/>
        <Post/>
      </PostsContainer>

    </MainContainer>
  )
}