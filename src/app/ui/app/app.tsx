import { Layout } from '@app/layout'
import { ERROR_ROUTES } from '@app/routes/routes.config'
import { useAuthSlice } from '@app/store/slices/authSlice'
import MainPage from '@pages/MainPage'
import { Route, Routes } from 'react-router-dom'

export function App() {
  const isAuth = useAuthSlice()

  return (
    <Routes>
      {ERROR_ROUTES.map(({ path, main }) => (
        <Route path={path} element={main()} key={path} />
      ))}
      <Route path="/*" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={'about'} element={<MainPage />} />
        <Route path={'reset'} element={<MainPage />} />
        <Route path={'update/:uid/:token'} element={<MainPage />} />
        {isAuth.isAuth && (
          <>
            <Route path={'profile/*'} element={<MainPage />} />
            <Route path={'favorites'} element={<MainPage />} />
          </>
        )}
      </Route>
    </Routes>
  )
}
