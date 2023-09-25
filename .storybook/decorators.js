import { MemoryRouter } from 'react-router-dom'
import { GlobalStyle } from '../src/global-styles'

export const decorateWithRouter = Story => (
  <MemoryRouter>
    <GlobalStyle />
    <Story />
  </MemoryRouter>
)
