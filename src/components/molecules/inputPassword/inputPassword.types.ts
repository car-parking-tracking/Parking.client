/* eslint-disable @typescript-eslint/no-explicit-any */
export interface InputPasswordProps {
  defaultValue: string
  register: any
  name: string
  togglePasswordVisibility: () => void
  passwordVisible: boolean
  placeholder?: string
}
