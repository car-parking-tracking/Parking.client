import { MemoryRouter } from 'react-router-dom';
import { LoginContextProvider } from '../src/context'

export const decorateWithRouter = (Story) => (
  <MemoryRouter>
    <Story />
  </MemoryRouter>
)

export const decorateWithLoginContext = (Story) => (
  <LoginContextProvider>
    <Story />
  </LoginContextProvider>
)
