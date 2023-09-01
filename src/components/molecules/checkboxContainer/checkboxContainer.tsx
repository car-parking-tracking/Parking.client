import { FC } from 'react'
import { CheckboxContainerProps } from './checkboxContainer.types'
import { Container, Label, Span, Checkbox } from './checkboxContainer.styles'

export const CheckboxContainer: FC<CheckboxContainerProps> = ({ name, placeholder, errorMessage, isError }) => {
  return (
    <Container>
      <Checkbox type='checkbox' name={name} required />
      <Label htmlFor={name}>{placeholder}</Label>
      {isError && <Span>{errorMessage}</Span>}
    </Container>
  )
}
