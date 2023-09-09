import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { yupProfileForm } from '@utils/'
import { withTitle } from '@app/HOC'
import { InputForm, Form } from '@components/molecules'

import { InputWrap, Section, LinkItem } from './Profile.styles'
import { FormValues } from './Profile.types'

const Profile: FC = () => {
  const [isSuccess, setIsSuccess] = useState(false)

  // TODO - подтянуть данные юзера из редакса
  const userData = {
    lastName: 'Файзулин',
    firstName: 'Игорь',
    email: 'faizulin2023@yandex.ru',
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

  const onSubmit: SubmitHandler<FormValues> = data => {
    setIsSuccess(true)
    console.log('submit!', 'data => ', data)
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
