import { FC } from 'react'
import { InputFormProps } from './inputForm.types'
import { Container, Label, Span, StyledInput } from './inputForm.styles'

//TODO: валидация (после добавления валидации можно будет убрать пропсы сообщения об ошибке и есть ли ошибка)

export const InputForm: FC<InputFormProps> = ({ name, type, value, placeholder, errorMessage, isError }) => {
  return (
    <Container>
      <Label htmlFor={name}>{placeholder}</Label>
      <StyledInput type={type} variant="form" name={name} placeholder={placeholder} value={value} />
      {isError && <Span>{errorMessage}</Span>}
    </Container>
  )
}
