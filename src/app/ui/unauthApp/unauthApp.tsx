import { Layout } from '@app/layout'
import { MAIN_ROUTES } from '@app/routes/routes.config'
import { Route, Routes } from 'react-router-dom'

export function UnauthenticatedApp() {
  return (
    <Routes>
      {MAIN_ROUTES.map(({ path, main }, idx) => (
        <Route element={<Layout />} key={idx}>
          <Route path={path} element={main()} key={idx} />
        </Route>
      ))}
    </Routes>
  )
}
