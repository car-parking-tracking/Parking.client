import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { IAuthValues, RegisterProps } from './register.types'
import { ButtonGroup, Container, InputsContainer } from './register.styles'
import { InputForm, CheckboxContainer } from '@components/molecules'
import { Button } from '@components/atoms'

import { yupSchemaRegForm } from '../../../utils/validate'

export const Register: FC<RegisterProps> = () => {
  type FormData = yup.InferType<typeof yupSchemaRegForm>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthValues>({
    mode: 'onChange',
    resolver: yupResolver(yupSchemaRegForm),
  })

  const onSubmit: SubmitHandler<IAuthValues> = (data: FormData) => console.log(data)

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <InputsContainer>
        <InputForm type="text" name="last_name" register={register} placeholder="Фамилия" isError={false} errorMessage="" required />
        <InputForm type="text" name="first_name" register={register} placeholder="Имя" isError={false} errorMessage="Проверьте написание имени" required />
        <InputForm
          type="text"
          name="email"
          register={register}
          placeholder="E-mail"
          isError={false}
          errorMessage="Проверьте адрес почты, он должен состоять из латинских символов"
          required
        />
        <InputForm type="password" name="password" register={register} placeholder="Пароль" required />
        <InputForm
          type="password"
          name="password"
          register={register}
          placeholder="Пароль повторно"
          isError={false}
          errorMessage="Значения не совпадают, проверьте пароль"
          required
        />
      </InputsContainer>
      <CheckboxContainer name="checkbox" id="reg-checkbox" placeholder="Я принимаю «Условия использования» и «Политику конфиденциальности»" />
      <ButtonGroup>
        <Button type="submit" variant="primary">
          Зарегистрироваться
        </Button>
      </ButtonGroup>
    </Container>
  )
}
