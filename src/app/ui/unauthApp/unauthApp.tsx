import { Layout } from '@app/layout'
import { UNAUTHORIZED } from '@app/routes/routes.config'
import { Navigate, Route, Routes } from 'react-router-dom'

export function UnauthenticatedApp() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/404" replace />} />
      {UNAUTHORIZED.map(({ path, main }, idx) => (
        <Route element={<Layout />} key={idx}>
          <Route path={path} element={main()} key={idx} />
        </Route>
      ))}
    </Routes>
  )
}
