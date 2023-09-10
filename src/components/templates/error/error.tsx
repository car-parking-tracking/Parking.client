import { PAGES } from '@app/routes/routes.types'
import { FC } from 'react'
import { Wrapper, ErrorDescription, ErrorImage } from './error.styles'
import { Button } from '@components/atoms'
import { useNavigate } from 'react-router-dom'
import notfound from '@assets/images/ill404.svg'

type ErrorPageProps = {
  code: number
  text: string
}

export const ErrorTemplate: FC<ErrorPageProps> = ({ code, text }) => {
  const navigate = useNavigate()

  return (
    <Wrapper>
      {code === 404 && <ErrorImage src={notfound} alt="404" />}
      <ErrorDescription variant="modal">{text}</ErrorDescription>
      <Button variant="primary" onClick={() => navigate(PAGES.MAIN)}>
        Перейти на главную
      </Button>
    </Wrapper>
  )
}
