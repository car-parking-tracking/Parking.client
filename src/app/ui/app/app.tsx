import { useState } from 'react'
import { UnauthenticatedApp } from '../unauthApp/unauthApp'
import { AuthenticatedApp } from '../authenticatedApp/authenticatedApp'

export function App() {
  const [login, setLogin] = useState(false)
  return login ? <AuthenticatedApp /> : <UnauthenticatedApp />
}
