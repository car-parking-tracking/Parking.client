import React, { useState } from 'react'

import { Section, Title } from './main.styles'
import { InputForm } from '../../molecules'
import { Button } from '../../atoms'
import { Modal, YaMap } from '../../organisms'

export const MainTemplate: React.FC = () => {
  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = () => {
    setShowModal(true)
  }

  //TODO: создать и вынести форму как отдельный организм (на обсуждение)
  //Пока что чисто инпуты для того, чтобы показать как модалка работает

  return (
    <Section>
      <Title>Our parking find service</Title>
      <Button variant="contained" color="lightgray" onClick={handleOpenModal}>
        Открыть модалку
      </Button>
      <YaMap />
      {showModal && (
        <Modal
          title="Регистрация"
          description="Заполните все поля для регистрации на сервисе"
          buttonText="Зарегистрироваться"
          isCloseButton={true}
          setOpenCallback={setShowModal}>
          <InputForm type="text" name="name" placeholder="Имя и фамилия" isError={false} errorMessage="Проверьте написание имени" />
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
