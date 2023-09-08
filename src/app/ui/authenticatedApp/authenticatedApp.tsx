import { Layout } from '@app/layout'
import { MAIN_ROUTES } from '@app/routes/routes.config'
import { Navigate, Route, Routes } from 'react-router-dom'

export function AuthenticatedApp() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/404" replace />} />
      {MAIN_ROUTES.map(({ path, main }, idx) => (
        <Route element={<Layout />} key={idx}>
          <Route path={path} element={main()} key={idx} />
        </Route>
      ))}
    </Routes>
  )
}
