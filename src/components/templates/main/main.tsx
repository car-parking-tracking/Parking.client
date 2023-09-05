import React, { useState } from 'react'

import { Section } from './main.styles'
import { Modal, YaMap, Header, AuthForm } from '@components/organisms'

export const MainTemplate: React.FC = () => {
  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = () => {
    setShowModal(true)
  }

  return (
    <Section>
      <Header onBtnClick={handleOpenModal} />
      <YaMap />
      {showModal && (
        <Modal setOpenCallback={setShowModal}>
          <AuthForm />
        </Modal>
      )}
    </Section>
  )
}
