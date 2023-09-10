import { Outlet, Route, Routes } from 'react-router-dom'
import { Section } from './layout.style'
import { LayoutProps } from './layout.types'
import { FC, useState } from 'react'
import { Header, Modal } from '@components/organisms'
import { SIDEBAR_AUTH_ROUTES, SIDEBAR_UNAUTH_ROUTES } from '@app/routes/routes.config'
import { useSelector } from 'react-redux'
import { RootState } from '@app/store/store'

export const Layout: FC<LayoutProps> = props => {
  const [showModal, setShowModal] = useState(false)
  const isAuth = useSelector((state: RootState) => state.auth.isAuth)
  const routes = isAuth ? SIDEBAR_AUTH_ROUTES : SIDEBAR_UNAUTH_ROUTES

  const handleOpenModal = () => {
    setShowModal(true)
  }

  return (
    <Section>
      <Header onBtnClick={handleOpenModal} isLoggedIn={isAuth} />
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
