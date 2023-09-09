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
import { useAppDispatch } from '@app/hooks/redux'
import { login } from '@app/store/slices/authSlice'

export const Login: FC = () => {
  type FormData = yup.InferType<typeof yupSchemaAuthForm>
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ILoginValues>({
    mode: 'onChange',
    resolver: yupResolver(yupSchemaAuthForm),
  })

  const onSubmit: SubmitHandler<ILoginValues> = (data: FormData) => {
    dispatch(login())
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
      </ButtonTextContainer>
      <ButtonGroup>
        <Button type="submit" variant="primary" disabled={!isValid}>
          Войти
        </Button>
      </ButtonGroup>
    </Container>
  )
}
