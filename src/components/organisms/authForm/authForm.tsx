import { FC, useState } from 'react'
import { AuthFormProps } from './authForm.types'
import { Container, NavContainer } from './authForm.styles'
import { Register, Login } from '@components/organisms'
import { Button } from '@components/atoms'

export const AuthForm: FC<AuthFormProps> = () => {
  const [formType, setFormType] = useState<'login' | 'register'>('login')

  const handleLoginButton = () => {
    setFormType('login')
  }

  const handleRegButton = () => {
    setFormType('register')
  }

  return (
    <Container>
      <NavContainer>
        <Button type="button" variant="filter" onClick={handleLoginButton} disabled={formType === 'login'}>
          Вход
        </Button>
        <Button type="button" variant="filter" onClick={handleRegButton} disabled={formType === 'register'}>
          Регистрация
        </Button>
      </NavContainer>
      {formType === 'register' && <Register />}
      {formType === 'login' && <Login onOpenRegister={handleRegButton} />}
    </Container>
  )
}
