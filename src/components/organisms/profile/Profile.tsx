import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { yupProfileForm } from '@utils/validate'
import { withTitle } from '@app/HOC'
import { InputForm, Form } from '@components/molecules'

import { InputWrap, Section, LinkItem } from './profile.styles'
import { FormValues } from './profile.types'
import { useChangeUserProfileMutation } from '@app/store/api'
import { useUserSlice } from '@app/store/slices/userSlice'

const Profile: FC = () => {
  const [isSuccess, setIsSuccess] = useState(false)
  const { user } = useUserSlice()
  const [changeUserInfo] = useChangeUserProfileMutation()

  const userData = {
    lastName: user.last_name,
    firstName: user.first_name,
    email: user.email,
  }

  const { lastName, firstName, email } = userData

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
    resolver: yupResolver(yupProfileForm),
  })

  const onSubmit: SubmitHandler<FormValues> = async data => {
    const response = await changeUserInfo(data)
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
            type="text"
            placeholder="Фамилия"
            defaultValue={lastName}
            name="last_name"
            register={register}
            isError={!!errors.last_name?.message}
            errorMessage={errors.last_name?.message}
            required={false}
          />
          <InputForm
            type="text"
            placeholder="Имя"
            defaultValue={firstName}
            name="first_name"
            register={register}
            isError={!!errors.first_name?.message}
            errorMessage={errors.first_name?.message}
            required={false}
          />
          <InputForm
            type="email"
            placeholder="E-mail"
            defaultValue={email}
            name="email"
            register={register}
            isError={!!errors.email?.message}
            errorMessage={errors.email?.message}
            required={false}
          />
        </InputWrap>
        <LinkItem to="./password">Сменить пароль</LinkItem>
      </Form>
    </Section>
  )
}

export const ProfileWithTitle = withTitle(Profile)
