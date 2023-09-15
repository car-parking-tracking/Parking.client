import { Outlet, Route, Routes } from 'react-router-dom'
import { Section } from './layout.style'
import { LayoutProps } from './layout.types'
import { FC, useState } from 'react'
import { Header } from '@components/organisms'
import { Modal } from '@components/molecules'
import { SIDEBAR_AUTH_ROUTES, SIDEBAR_UNAUTH_ROUTES } from '@app/routes/routes.config'
import { useFetchUserInfoQuery } from '@app/store/api'
import { useAuthSlice } from '@app/store/slices/authSlice'

export const Layout: FC<LayoutProps> = props => {
  const [showModal, setShowModal] = useState(false)
  const { isAuth } = useAuthSlice()
  const { token } = useAuthSlice()
  const routes = isAuth ? SIDEBAR_AUTH_ROUTES : SIDEBAR_UNAUTH_ROUTES

  useFetchUserInfoQuery(token, { skip: !token })

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
