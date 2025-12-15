import { BrowserRouter } from 'react-router-dom'
import { RoutesPages } from './routes/index.routes'
import { GlobalStyle } from './global/styles'
import type { FC } from 'react'

export const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RoutesPages />
    </BrowserRouter>
  )
}