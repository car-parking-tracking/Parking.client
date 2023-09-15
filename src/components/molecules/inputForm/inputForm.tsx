import { FC } from 'react'
import { InputFormProps } from './inputForm.types'
import { Container, Label, Span, StyledInput } from './inputForm.styles'

//TODO: валидация (после добавления валидации можно будет убрать пропсы сообщения об ошибке и есть ли ошибка)

export const InputForm: FC<InputFormProps> = ({ name, type, defaultValue = '', placeholder, errorMessage, isError, register, required }) => {
  return (
    <Container>
      <Label htmlFor={name}>{placeholder}</Label>
      <StyledInput
        defaultValue={defaultValue}
        {...register(name, { required })}
        type={type}
        variant="form"
        name={name}
        placeholder={placeholder}
        isError={isError}
      />
      {isError && <Span>{errorMessage}</Span>}
    </Container>
  )
}
