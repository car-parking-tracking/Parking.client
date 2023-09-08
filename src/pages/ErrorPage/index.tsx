import { ErrorTemplate } from '@components/templates/error'
import { FC } from 'react'

type ErrorPageProps = {
  code: number
  text: string
}

const ErrorPage: FC<ErrorPageProps> = props => {
  const { code, text } = props
  return <ErrorTemplate code={code} text={text} />
}

export default ErrorPage
