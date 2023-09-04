import { FC } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginProps } from './login.types'
import { ButtonTextContainer, ButtonGroup, Container, InputsContainer } from './login.styles'
import { InputForm } from '@components/molecules'
import { Button } from '@components/atoms'

import { yupSchemaAuthForm } from '../../../utils/validate'

export const Login: FC<LoginProps> = () => {

  type FormData = yup.InferType<typeof yupSchemaAuthForm>;

  const form = useForm({
    resolver: yupResolver(yupSchemaAuthForm)
  })

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <Container onSubmit={form.handleSubmit(onSubmit)}>
      <InputsContainer>
        <InputForm
          type="text"
          name="email"
          placeholder="E-mail"
          isError={false}
          errorMessage="Проверьте адрес почты, он должен состоять из латинских символов"
        />
        <InputForm type="password" name="password" placeholder="Пароль" />
      </InputsContainer>
      <ButtonTextContainer>
        <Button type='button' variant='text'>Восстановить пароль</Button>
        <Button type='button' variant='text'>Зарегистрироваться</Button>
      </ButtonTextContainer>
      <ButtonGroup>
        <Button type='submit' variant="primary">Войти</Button>
      </ButtonGroup>
    </Container>
  )
}
