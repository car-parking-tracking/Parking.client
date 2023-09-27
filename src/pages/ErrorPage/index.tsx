import { ErrorTemplate } from '@components/templates'
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
