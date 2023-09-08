import { PAGES } from '@app/routes/routes.types'
import { FC } from 'react'
import { Wrapper, ErrorDescription, ErrorLink, ErrorTitle } from './error.styles'

type ErrorPageProps = {
  code: number
  text: string
}

export const ErrorTemplate: FC<ErrorPageProps> = ({ code, text }) => {
  return (
    <Wrapper>
      <ErrorTitle variant='modal'>{code}</ErrorTitle>
      <ErrorDescription variant='modal'>{text}</ErrorDescription>
      <ErrorLink to={PAGES.MAIN}>Назад на главную</ErrorLink>
    </Wrapper>
  )
}
