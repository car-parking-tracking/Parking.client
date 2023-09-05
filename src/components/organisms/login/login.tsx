import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ILoginValues, LoginProps } from './login.types'
import { ButtonTextContainer, ButtonGroup, Container, InputsContainer } from './login.styles'
import { InputForm } from '@components/molecules'
import { Button } from '@components/atoms'

import { yupSchemaAuthForm } from '../../../utils/validate'
import { useNavigate } from 'react-router-dom'

export const Login: FC<LoginProps> = ({ onOpenRegister }) => {
  type FormData = yup.InferType<typeof yupSchemaAuthForm>
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ILoginValues>({
    mode: 'onChange',
    resolver: yupResolver(yupSchemaAuthForm),
  })

  const onSubmit: SubmitHandler<ILoginValues> = (data: FormData) => {
    navigate('/')
    console.log(data)
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)} noValidate>
      <InputsContainer>
        <InputForm
          type="text"
          name="email"
          register={register}
          placeholder="E-mail"
          isError={!!errors.email?.message}
          errorMessage={errors.email?.message}
          required
        />
        <InputForm
          type="password"
          name="password"
          register={register}
          placeholder="Пароль"
          isError={!!errors.password?.message}
          errorMessage={errors.password?.message}
          required
        />
      </InputsContainer>
      <ButtonTextContainer>
        <Button type="button" variant="text">
          Восстановить пароль
        </Button>
        <Button type="button" variant="text" onClick={onOpenRegister}>
          Зарегистрироваться
        </Button>
      </ButtonTextContainer>
      <ButtonGroup>
        <Button type="submit" variant="primary" disabled={!isValid}>
          Войти
        </Button>
      </ButtonGroup>
    </Container>
  )
}
