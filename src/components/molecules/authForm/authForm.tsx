import { FC, useState } from 'react'
import { AuthFormProps } from './authForm.types'
import { Container, NavContainer, NavButton } from './authForm.styles'
import { Register, Login } from '@components/organisms'
import { FooterMobile } from '@components/molecules'

export const AuthForm: FC<AuthFormProps> = () => {
  const [formType, setFormType] = useState<'login' | 'register'>('login')

  const [showButtons, setShowButtons] = useState(true)

  const handleShowButtonsChange = (show: boolean) => {
    setShowButtons(show)
  }

  const handleLoginButton = () => {
    setFormType('login')
  }

  const handleRegButton = () => {
    setFormType('register')
  }

  return (
    <Container>
      {showButtons && (
        <NavContainer>
          <NavButton type="button" variant="filter" onClick={handleLoginButton} disabled={formType === 'login'}>
            Вход
          </NavButton>
          <NavButton type="button" variant="filter" onClick={handleRegButton} disabled={formType === 'register'}>
            Регистрация
          </NavButton>
        </NavContainer>
      )}

      {formType === 'register' && (
        <>
          <Register onShowButtonsChange={handleShowButtonsChange} />
          <FooterMobile hasAbout={false} />
        </>
      )}
      {formType === 'login' && (
        <>
          <Login />
          <FooterMobile hasAbout={true} />
        </>
      )}
    </Container>
  )
}
