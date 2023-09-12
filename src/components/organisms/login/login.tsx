import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ILoginValues } from './login.types'
import { ButtonTextContainer, ButtonGroup, Container, InputsContainer, ButtonSubmit } from './login.styles'
import { InputForm } from '@components/molecules'
import { Button } from '@components/atoms'

import { yupSchemaAuthForm } from '@utils/validate'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@app/hooks/redux'
import { login } from '@app/store/slices/authSlice'

import { useSignInMutation } from '../../../app/store/api/auth/authApi'

export const Login: FC = () => {
  type FormData = yup.InferType<typeof yupSchemaAuthForm>
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [signIn] = useSignInMutation()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ILoginValues>({
    mode: 'onChange',
    resolver: yupResolver(yupSchemaAuthForm),
  })

  const onSubmit: SubmitHandler<ILoginValues> = async (data: FormData) => {
    const response = await signIn(data)
    const isError = 'error' in response;
    console.log(response)
    if (!isError) {
      dispatch(login())
      navigate('/');
    } else {
      console.log(isError)
    }
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
        <Button
          type="button"
          variant="text"
          onClick={() => {
            navigate('/reset')
          }}>
          Восстановить пароль
        </Button>
      </ButtonTextContainer>
      <ButtonGroup>
        <ButtonSubmit type="submit" variant="primary" disabled={!isValid}>
          Войти
        </ButtonSubmit>
      </ButtonGroup>
    </Container>
  )
}
