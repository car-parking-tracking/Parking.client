import { FC, useState } from 'react'
import { InputFormProps } from './inputForm.types'
import { Container, Label, Span, StyledInput } from './inputForm.styles'

import { InputPassword } from '@components/molecules'

export const InputForm: FC<InputFormProps> = ({ name, type, defaultValue = '', placeholder, errorMessage, isError, register, required }) => {
  const [passwordVisible, setPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setPasswordVisible(prev => !prev)
  } // TODO: необходимо для inputPassword

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
