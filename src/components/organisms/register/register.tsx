import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterProps } from './register.types'
import { ButtonGroup, Container, InputsContainer } from './register.styles'
import { InputForm, CheckboxContainer } from '@components/molecules'
import { Button } from '@components/atoms'

import { yupSchemaRegForm } from '../../../utils/validate'

export const Register: FC<RegisterProps> = () => {

  type FormData = yup.InferType<typeof yupSchemaRegForm>;

  const form = useForm({
    resolver: yupResolver(yupSchemaRegForm)
  })

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <Container onSubmit={form.handleSubmit(onSubmit)}>
      <InputsContainer>
        <InputForm {...form.register("last_name")} type="text" name="last_name" placeholder="Фамилия" isError={false} errorMessage="" />
        <InputForm type="text" name="name" placeholder="Имя" isError={false} errorMessage="Проверьте написание имени" />
        <InputForm
          type="text"
          name="email"
          placeholder="E-mail"
          isError={false}
          errorMessage="Проверьте адрес почты, он должен состоять из латинских символов"
        />
        <InputForm type="password" name="password" placeholder="Пароль" />
        <InputForm type="password" name="password" placeholder="Пароль повторно" isError={false} errorMessage="Значения не совпадают, проверьте пароль" />
      </InputsContainer>
      <CheckboxContainer name='checkbox' id='reg-checkbox' placeholder='Я принимаю «Условия использования» и «Политику конфиденциальности»' />
      <ButtonGroup>
        <Button type='submit' variant="primary">Зарегистрироваться</Button>
      </ButtonGroup>
    </Container>
  )
}
