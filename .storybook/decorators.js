import { MemoryRouter } from 'react-router-dom';
import { LoginContextProvider } from '../src/context'
import {GlobalStyle} from '../src/global-styles'


export const decorateWithRouter = (Story) => (
  <MemoryRouter>
    <GlobalStyle/>
    <Story />
  </MemoryRouter>
)

export const decorateWithLoginContext = (Story) => (
  <LoginContextProvider>
    <GlobalStyle/>
    <Story />
  </LoginContextProvider>
)
