import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { yupRecoverPasswordForm } from '@utils/validate'

import { withTitle } from '@app/HOC'
import { InputForm, Form } from '@components/molecules'

import { InputWrap, Section } from './password.styles'
import { FormValues } from './password.types'
import { useChangePasswordMutation } from '@app/store/api'

const Password: FC = () => {
  const [isSuccess, setIsSuccess] = useState(false)
  const [changePassword] = useChangePasswordMutation()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
    resolver: yupResolver(yupRecoverPasswordForm),
  })

  const onSubmit: SubmitHandler<FormValues> = async data => {
    const response = await changePassword({
      new_password: data.password_new,
      current_password: data.password_old,
    })
    const isError = 'error' in response

    if (!isError) {
      setIsSuccess(true)
    } else {
      console.log(isError)
    }
  }

  return (
    <Section>
      <Form
        name="profile"
        onSubmit={handleSubmit(onSubmit)}
        submitBtnText={isSuccess ? 'Сохранено' : 'Сохранить'}
        btnVariant={'animated'}
        isSuccess={isSuccess}
        isValid={isValid}>
        <InputWrap>
          <InputForm
            type="password"
            placeholder="Пароль"
            name="password_old"
            register={register}
            isError={!!errors.password_old?.message}
            errorMessage={errors.password_old?.message}
            required
          />
          <InputForm
            type="password"
            placeholder="Новый пароль"
            name="password_new"
            register={register}
            isError={!!errors.password_new?.message}
            errorMessage={errors.password_new?.message}
            required
          />
          <InputForm
            type="password"
            placeholder="Повторите новый пароль"
            name="password_repeat"
            register={register}
            isError={!!errors.password_repeat?.message}
            errorMessage={errors.password_repeat?.message}
            required
          />
        </InputWrap>
      </Form>
    </Section>
  )
}

export const PasswordWithTitle = withTitle(Password)
