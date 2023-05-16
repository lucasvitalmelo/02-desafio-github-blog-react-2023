import 'react-toastify/dist/ReactToastify.css'

import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout/Default'
import { Providers } from './providers'

import { Home } from './pages/Home'
import { Post } from './pages/Post'

export function App() {
  return (
    <Providers>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Post" element={<Post />} />
        </Route>
      </Routes>
    </Providers>
  )
}
