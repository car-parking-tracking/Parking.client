import * as yup from 'yup'
import { yupRecoverPasswordForm } from '@utils/validate'

export type FormValues = yup.InferType<typeof yupRecoverPasswordForm>
