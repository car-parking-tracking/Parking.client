import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ILoginValues, LoginProps } from './login.types'
import { ButtonTextContainer, ButtonGroup, Container, InputsContainer } from './login.styles'
import { InputForm } from '@components/molecules'
import { Button } from '@components/atoms'

import { yupSchemaAuthForm } from '../../../utils/validate'

export const Login: FC<LoginProps> = ({ onOpenRegister }) => {
  type FormData = yup.InferType<typeof yupSchemaAuthForm>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginValues>({
    mode: 'onChange',
    resolver: yupResolver(yupSchemaAuthForm),
  })

  const onSubmit: SubmitHandler<ILoginValues> = (data: FormData) => console.log(data)

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
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
        <InputForm type="password" name="password" register={register} placeholder="Пароль" required />
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
        <Button type="submit" variant="primary">
          Войти
        </Button>
      </ButtonGroup>
    </Container>
  )
}
