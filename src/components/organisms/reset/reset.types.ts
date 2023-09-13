import * as yup from 'yup'
import { yupSchemaResetForm } from '@utils/validate'

export type FormValues = yup.InferType<typeof yupSchemaResetForm>
