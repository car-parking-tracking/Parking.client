import { FC, useState } from 'react'
import { AuthFormProps } from './authForm.types'
import { ButtonGroup, Container, InputsContainer, LinkButton, LinksContainer, NavContainer } from './authForm.styles'
import { InputForm, CheckboxContainer } from '@components/molecules'
import { Button } from '@components/atoms'

export const AuthForm: FC<AuthFormProps> = ({ children, buttonText }) => {

  const [loginForm, setLoginForm] = useState(true);
  const [regForm, setRegForm] = useState(false);

  const handleLoginButton = () => {
    setLoginForm(true);
    setRegForm(false);
  }

  const handleRegButton = () => {
    setLoginForm(false);
    setRegForm(true);
  }

  return (
    <Container>
      <NavContainer>
        <Button type="button" variant="filter" onClick={handleLoginButton} disabled={loginForm}>Вход</Button>
        <Button type="button" variant="filter" onClick={handleRegButton} disabled={regForm}>Регистрация</Button>
      </NavContainer>
      <InputsContainer>
        {regForm && (
          <>
            <InputForm type="text" name="name" placeholder="Фамилия" isError={false} errorMessage="Проверьте написание имени" />
            <InputForm type="text" name="name" placeholder="Имя" isError={false} errorMessage="Проверьте написание имени" />
          </>
        )}
        <InputForm
          type="text"
          name="email"
          placeholder="E-mail"
          isError={false}
          errorMessage="Проверьте адрес почты, он должен состоять из латинских символов"
        />
        <InputForm type="password" name="password" placeholder="Пароль" />
        {regForm && <InputForm type="password" name="password" placeholder="Пароль повторно" isError={false} errorMessage="Значения не совпадают, проверьте пароль" />}
      </InputsContainer>
      {regForm && <CheckboxContainer name='checkbox' id='reg-checkbox' placeholder='Я принимаю «Условия использования» и «Политику конфиденциальности»' />}
      {loginForm && <LinksContainer>
        <LinkButton>Восстановить пароль</LinkButton>
        <LinkButton>Зарегистрироваться</LinkButton>
      </LinksContainer>}
      <ButtonGroup>
        {regForm && <Button type='submit' variant="primary">Зарегистрироваться</Button>}
        {loginForm && <Button type='submit' variant="primary">Войти</Button>}
      </ButtonGroup>
    </Container>
  )
}
