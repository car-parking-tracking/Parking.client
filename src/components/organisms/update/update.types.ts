import * as yup from 'yup'
import { yupUpdatePasswordForm } from '@utils/validate'

export type FormValues = yup.InferType<typeof yupUpdatePasswordForm>
