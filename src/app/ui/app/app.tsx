import { Layout } from '@app/layout'
import { ERROR_ROUTES } from '@app/routes/routes.config'
import { RootState } from '@app/store/store'
import MainPage from '@pages/MainPage'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

export function App() {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth)

  return (
    <Routes>
      {ERROR_ROUTES.map(({ path, main }) => (
        <Route path={path} element={main()} key={path} />
      ))}
      <Route path="/*" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={'about'} element={<MainPage />} />
        <Route path={'reset'} element={<MainPage />} />
        <Route path={'update/:code'} element={<MainPage />} />
        {isAuth && (
          <>
            <Route path={'profile/*'} element={<MainPage />} />
            <Route path={'favorites'} element={<MainPage />} />
          </>
        )}
      </Route>
    </Routes>
  )
}
