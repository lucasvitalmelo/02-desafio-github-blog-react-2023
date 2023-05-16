import { Header, Input } from './styles'

export function SearchPublications({ onChange }: any) {
  return (
    <>
      <Header>
        <h3>publicações</h3>
        <span>0 publicações</span>
      </Header>

      <Input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  )
}
