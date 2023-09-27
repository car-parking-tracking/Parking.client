import * as yup from 'yup'
import { yupProfileForm } from '@utils/validate'

export type FormValues = yup.InferType<typeof yupProfileForm>
