import { FormEventHandler, ReactNode } from 'react'
import { variant } from '@components/atoms'

export interface FormProps {
  name: string
  children: ReactNode
  onSubmit: FormEventHandler<HTMLFormElement>
  submitBtnText?: string
  btnVariant?: variant
  isSuccess?: boolean
}
