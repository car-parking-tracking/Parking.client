import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Button from './components/ui/Button/Button'
import MainPage from './components/MainPage'

const container = document.getElementById('root') as HTMLElement

const initialChildren = (
  <StrictMode>
    <MainPage />
  </StrictMode>
)

const root = createRoot(container)
root.render(initialChildren)
