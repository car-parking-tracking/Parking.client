import { UnauthenticatedApp } from '../unauthApp/unauthApp'
import { AuthenticatedApp } from '../authenticatedApp/authenticatedApp'
import { useSelector } from 'react-redux'
import { RootState } from '@app/store/store'

export function App() {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth)
  return isAuth ? <AuthenticatedApp /> : <UnauthenticatedApp />
}
