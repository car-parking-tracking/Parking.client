import React, { useState } from 'react'

import { Section } from './main.styles'
import { InputForm } from '@components/molecules'
import { Modal, YaMap, Header } from '@components/organisms'

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
        <Modal
          title="Регистрация"
          description="Заполните все поля для регистрации на сервисе"
          buttonText="Зарегистрироваться"
          isCloseButton={true}
          setOpenCallback={setShowModal}>
          <InputForm type="text" name="name" placeholder="Фамилия" isError={false} errorMessage="Проверьте написание имени" />
          <InputForm type="text" name="name" placeholder="Имя" isError={false} errorMessage="Проверьте написание имени" />
          <InputForm
            type="text"
            name="email"
            placeholder="E-mail"
            isError={false}
            errorMessage="Проверьте адрес почты, он должен состоять из латинских символов"
          />
          <InputForm type="password" name="password" placeholder="Пароль" />
          <InputForm type="password" name="password" placeholder="Пароль повторно" isError={false} errorMessage="Значения не совпадают, проверьте пароль" />
        </Modal>
      )}
    </Section>
  )
}
