import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { IAuthValues, RegisterProps } from './register.types'
import { ButtonGroup, Container, InputsContainer, ButtonSubmit } from './register.styles'
import { InputForm, CheckboxContainer } from '@components/molecules'

import { yupSchemaRegForm } from '@utils/validate'
import { useNavigate } from 'react-router-dom'
import { useSignUpMutation } from '@app/store/api'

export const Register: FC<RegisterProps> = () => {
  type FormData = yup.InferType<typeof yupSchemaRegForm>
  const navigate = useNavigate()
  const [signUp] = useSignUpMutation()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IAuthValues>({
    mode: 'onChange',
    resolver: yupResolver(yupSchemaRegForm),
  })

  const onSubmit: SubmitHandler<IAuthValues> = async (data: FormData) => {
    const newdata = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
    }

    const response = await signUp(newdata)
    const isError = 'error' in response

    if (!isError) {
      navigate('/')
    } else {
      console.log(isError)
    }
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)} noValidate>
      <InputsContainer>
        <InputForm
          type="text"
          name="last_name"
          register={register}
          placeholder="Фамилия"
          isError={!!errors.last_name?.message}
          errorMessage={errors.last_name?.message}
          required
        />
        <InputForm
          type="text"
          name="first_name"
          register={register}
          placeholder="Имя"
          isError={!!errors.first_name?.message}
          errorMessage={errors.first_name?.message}
          required
        />
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
        <InputForm
          type="password"
          name="password_repeat"
          register={register}
          placeholder="Пароль повторно"
          isError={!!errors.password_repeat?.message}
          errorMessage={errors.password_repeat?.message}
          required
        />
      </InputsContainer>
      <CheckboxContainer
        name="checkbox"
        id="reg-checkbox"
        register={register}
        placeholder="Я принимаю «Условия использования» и «Политику конфиденциальности»"
        required={true}
        isError={!!errors.checkbox?.message}
      />
      <ButtonGroup>
        <ButtonSubmit type="submit" variant="primary" disabled={!isValid}>
          Зарегистрироваться
        </ButtonSubmit>
      </ButtonGroup>
    </Container>
  )
}
