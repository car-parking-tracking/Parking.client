import React, { useState } from 'react'

import { Section } from './main.styles'
import { Modal, YaMap, Header, AuthForm } from '@components/organisms'
import { FavoriteList } from '@components/organisms'

export const MainTemplate: React.FC = () => {
  const [showModal, setShowModal] = useState(true)

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const favoriteItems = [
    { id: 2402, address: 'ул. Херсонская, дом 32' },
    { id: 2416, address: 'ул. Каховка, дом 33 к. 1' },
    // Другие элементы...
  ]

  return (
    <Section>
      <Header onBtnClick={handleOpenModal} />

      <YaMap />
      {showModal && (
        <Modal setOpenCallback={setShowModal}>
          <FavoriteList items={favoriteItems} />
          {/* <AuthForm /> */}
          {/* <AuthForm /> */}
          <Account />
        </Modal>
      )}
    </Section>
  )
}
