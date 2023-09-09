import { PAGES } from '@app/routes/routes.types'
import { FC } from 'react'
import { Wrapper, ErrorDescription, ErrorTitle } from './error.styles'
import { Button } from '@components/atoms'
import { useNavigate } from 'react-router-dom'

type ErrorPageProps = {
  code: number
  text: string
}

export const ErrorTemplate: FC<ErrorPageProps> = ({ code, text }) => {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <ErrorTitle variant="modal">{code}</ErrorTitle>
      <ErrorDescription variant="modal">{text}</ErrorDescription>
      <Button variant="primary" onClick={() => navigate(PAGES.MAIN)}>
        Назад на главную
      </Button>
    </Wrapper>
  )
}
