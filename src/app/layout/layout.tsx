import { Outlet, Route, Routes } from 'react-router-dom'
import { Section } from './layout.style'
import { LayoutProps } from './layout.types'
import { FC, useState } from 'react'
import { Header, Modal } from '@components/organisms'
import { SIDEBAR_AUTH_ROUTES, SIDEBAR_UNAUTH_ROUTES } from '@app/routes/routes.config'
import { useSelector } from 'react-redux'
import { RootState } from '@app/store/store'
import { useFetchUserInfoQuery } from '@app/store/api'

export const Layout: FC<LayoutProps> = props => {
  const [showModal, setShowModal] = useState(false)
  const auth = useSelector((state: RootState) => state.auth)
  const routes = auth.isAuth ? SIDEBAR_AUTH_ROUTES : SIDEBAR_UNAUTH_ROUTES
  useFetchUserInfoQuery(auth.token)

  const handleOpenModal = () => {
    setShowModal(true)
  }

  return (
    <Section>
      <Header onBtnClick={handleOpenModal} isLoggedIn={auth.isAuth} />
      {props.children}
      {showModal && (
        <Modal setOpenCallback={setShowModal}>
          <Routes>
            {routes.map(({ path, sidebar }) => (
              <Route path={path} element={sidebar()} key={path} />
            ))}
          </Routes>
        </Modal>
      )}
      <Outlet />
    </Section>
  )
}
