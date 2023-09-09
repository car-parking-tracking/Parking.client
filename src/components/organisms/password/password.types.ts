import * as yup from 'yup'
import { yupRecoverPasswordForm } from '../../../utils'

export type FormValues = yup.InferType<typeof yupRecoverPasswordForm>
