import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './global-styles'
import { Provider } from 'react-redux'
import { store } from './app/store/store'
import { App } from '@app/ui/app/app'

const container = document.getElementById('root') as HTMLElement

const initialChildren = (
  <StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
)

const root = createRoot(container)
root.render(initialChildren)
