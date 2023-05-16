import { Navigate, useParams } from 'react-router-dom'

export function Post() {
  const { number } = useParams<{ number: string }>()

  if (Number.isNaN(Number(number))) {
    return <Navigate to="/" />
  }
}
