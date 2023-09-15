import { FC, useState } from 'react'
import { InputFormProps } from './inputForm.types'
import { Container, Label, Span, StyledInput, InputPassword, WrapperPassword, ButtonPassword, ImgPassword } from './inputForm.styles'

import eyeOff from '@assets/icons/eyeOff.svg'
import eyeOn from '@assets/icons/eyeOn.svg'
//TODO: валидация (после добавления валидации можно будет убрать пропсы сообщения об ошибке и есть ли ошибка)

export const InputForm: FC<InputFormProps> = ({ name, type, defaultValue = '', placeholder, errorMessage, isError, register, required }) => {
  const [passwordVisible, setPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setPasswordVisible(prev => !prev)
  }

  return (
    <Container>
      <Label htmlFor={name}>{placeholder}</Label>
      {name === 'password' ? (
        <WrapperPassword>
          <InputPassword
            name="password"
            type={passwordVisible ? 'text' : 'password'}
            defaultValue={defaultValue}
            {...register(name, { required })}
            variant="form"
            placeholder={placeholder}
          />
          <ButtonPassword onClick={togglePasswordVisibility}>
            <ImgPassword src={passwordVisible ? eyeOn : eyeOff} alt="Eye" />
          </ButtonPassword>
        </WrapperPassword>
      ) : (
        <StyledInput
          defaultValue={defaultValue}
          {...register(name, { required })}
          type={type}
          variant="form"
          name={name}
          placeholder={placeholder}
          isError={isError}
        />
      )}
      {isError && <Span>{errorMessage}</Span>}
    </Container>
  )
}
