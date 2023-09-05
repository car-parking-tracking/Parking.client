import { FC } from 'react'
import { CheckboxContainerProps } from './checkboxContainer.types'
import { Container, Label, Span, Checkbox, Text } from './checkboxContainer.styles'

export const CheckboxContainer: FC<CheckboxContainerProps> = ({ name, id, placeholder, errorMessage, isError, register, required }) => {
  return (
    <Container>
      <Checkbox {...register(name, { required })} type="checkbox" id={id} name={name} required={required} isError={isError} />
      <Label htmlFor={id}></Label>
      <Text>{placeholder}</Text>
      {isError && <Span>{errorMessage}</Span>}
    </Container>
  )
}
