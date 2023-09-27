export interface InputProps {
  variant: 'form' | 'search'
  name: string
  placeholder?: string
  autoComplete?: 'off' | 'on'
  isError?: boolean
}
