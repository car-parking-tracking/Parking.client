import * as yup from 'yup'
import { yupProfileForm } from '../../../utils'

export type FormValues = yup.InferType<typeof yupProfileForm>
