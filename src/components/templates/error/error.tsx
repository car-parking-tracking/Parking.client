import { PAGES } from '@app/routes/routes.types'
import { FC } from 'react'
import { Wrapper, ErrorDescription, ErrorImage, ButtonReturn } from './error.styles'
import { useNavigate } from 'react-router-dom'
import notfound from '@assets/images/ill404.svg'
import serverError from '@assets/images/illError500.svg'

type ErrorPageProps = {
  code: number
  text: string
}

export const ErrorTemplate: FC<ErrorPageProps> = ({ code, text }) => {
  const navigate = useNavigate()

  return (
    <Wrapper>
      {code === 404 && <ErrorImage src={notfound} alt="404" />}
      {code === 500 && <ErrorImage src={serverError} alt="500" />}
      <ErrorDescription variant="modal">{text}</ErrorDescription>
      <ButtonReturn variant="primary" onClick={() => navigate(PAGES.MAIN)}>
        Перейти на главную
      </ButtonReturn>
    </Wrapper>
  )
}
