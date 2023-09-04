import React, { useState } from 'react'

import { Section } from './main.styles'
import { Modal, YaMap, Header, AuthForm } from '@components/organisms'
import { FavoriteList, Account } from '@components/organisms'

export const MainTemplate: React.FC = () => {
  const [showModal, setShowModal] = useState(true)

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const favoriteItems = [
    { id: 2402, address: 'ул. Херсонская, дом 32' },
    { id: 2411, address: 'ул. Каховка, дом 33 к. 1' },
    { id: 2412, address: 'ул. Каховка, дом 33 к. 1' },
    { id: 2413, address: 'ул. Каховка, дом 33 к. 1' },
    { id: 2414, address: 'ул. Каховка, дом 33 к. 1' },
    { id: 2415, address: 'ул. Каховка, дом 33 к. 1' },
    { id: 2416, address: 'ул. Каховка, дом 33 к. 1' },
    { id: 2417, address: 'ул. Каховка, дом 33 к. 1' },
  ]

  return (
    <Section>
      <Header onBtnClick={handleOpenModal} />

      <YaMap />
      {showModal && (
        <Modal setOpenCallback={setShowModal}>
          {/* <Account /> */}
          <FavoriteList items={favoriteItems} />
          {/* <AuthForm /> */}
        </Modal>
      )}
    </Section>
  )
}
