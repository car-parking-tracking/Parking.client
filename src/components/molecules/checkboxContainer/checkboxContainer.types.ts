export interface CheckboxContainerProps {
  name: string
  id: string
  placeholder?: string
  isError?: boolean
  errorMessage?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any
  required: boolean
}
