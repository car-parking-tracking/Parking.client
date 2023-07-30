import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UserMenu from './components/organisms/user-menu/menu'

import MainPage from './pages/MainPage'

import { GlobalStyle } from './global-styles'

const container = document.getElementById('root') as HTMLElement

const initialChildren = (
  <StrictMode>
    <GlobalStyle />
    <UserMenu />
    <MainPage />
  </StrictMode>
)

const root = createRoot(container)
root.render(initialChildren)
