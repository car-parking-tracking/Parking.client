import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainPage from './pages/MainPage'

import { GlobalStyle } from './global-styles'
import { LoginContextProvider } from './context'

const container = document.getElementById('root') as HTMLElement

const initialChildren = (
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <LoginContextProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </LoginContextProvider>
    </BrowserRouter>
  </StrictMode>
)

const root = createRoot(container)
root.render(initialChildren)
