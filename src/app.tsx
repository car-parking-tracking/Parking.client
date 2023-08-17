import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainPage from './pages/MainPage'

import { GlobalStyle } from './global-styles'
import { LoginContextProvider } from './context'
import { Provider } from 'react-redux'
import { store } from './app/store/store'

const container = document.getElementById('root') as HTMLElement

const initialChildren = (
  <StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <LoginContextProvider>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </LoginContextProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)

const root = createRoot(container)
root.render(initialChildren)
