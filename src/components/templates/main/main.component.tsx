import React, { useState } from 'react'

import { Section, ButtonGroup, AuthForm } from './main.styles'
import { InputForm, CheckboxContainer} from '@components/molecules'
import { Modal, YaMap, Header } from '@components/organisms'
import { Button } from '@components/atoms'

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
          <AuthForm>
            <ButtonGroup>
              <Button variant="filter">Вход</Button>
              <Button variant="filter">Регистрация</Button>
            </ButtonGroup>
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
            <CheckboxContainer name='checkbox' placeholder='Я принимаю «Условия использования» и «Политику конфиденциальности»' />
            <ButtonGroup>
              <Button type='submit' variant="primary">Зарегистрироваться</Button>
            </ButtonGroup>
          </AuthForm>
        </Modal>
      )}
    </Section>
  )
}
