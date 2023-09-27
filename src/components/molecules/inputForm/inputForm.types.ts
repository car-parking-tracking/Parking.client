export interface InputFormProps {
  name: string
  type: string
  defaultValue?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any
  required: boolean
  placeholder?: string
  isError?: boolean
  errorMessage?: string
}
