import { Outlet, Route, Routes } from 'react-router-dom'
import { Section } from './layout.style'
import { LayoutProps } from './layout.types'
import { FC, Suspense, useState } from 'react'
import { Header, Modal } from '@components/organisms'
import { MAIN_ROUTES, UNAUTHORIZED } from '@app/routes/routes.config'
import { useSelector } from 'react-redux'
import { RootState } from '@app/store/store'
import { Loader } from '@components/atoms'

export const Layout: FC<LayoutProps> = props => {
  const [showModal, setShowModal] = useState(false)
  const isAuth = useSelector((state: RootState) => state.auth.isAuth)
  const routes = isAuth ? MAIN_ROUTES : UNAUTHORIZED;
  
  const handleOpenModal = () => {
    setShowModal(true)
  }

  return (
    <Section>
      <Suspense fallback={<Loader variant="page" />}>
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
      </Suspense>
    </Section>
  )
}
