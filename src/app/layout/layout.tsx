import { Outlet, Route, Routes } from 'react-router-dom'
import { Section } from './layout.style'
import { LayoutProps } from './layout.types'
import { FC, useState } from 'react'
import { Header, Modal } from '@components/organisms'
import { MAIN_ROUTES } from '@app/routes/routes.config'

export const Layout: FC<LayoutProps> = props => {
  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = () => {
    setShowModal(true)
  }

  return (
    <Section>
      <Header onBtnClick={handleOpenModal} isLoggedIn={false} />
      {props.children}

      {showModal && (
        <Modal setOpenCallback={setShowModal}>
          <Routes>
            {MAIN_ROUTES.map(({ path, sidebar }) => (
              <Route path={path} element={sidebar()} key={path} />
            ))}
          </Routes>
        </Modal>
      )}
      
      <Outlet />
    </Section>
  )
}
