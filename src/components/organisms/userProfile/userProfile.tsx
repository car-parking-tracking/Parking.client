import { FC, SyntheticEvent, useState } from 'react'
import { useForm } from 'react-hook-form'

import { InputForm } from '@components/molecules'
import { Form } from '../form'
import { InputWrap, Section, Title } from './userProfile.styles'
import { FormData } from './userProfile.types'
import { hideTextWithStart } from '../../../utils'

export const UserProfile: FC = () => {
  const [isSuccess, setIsSuccess] = useState(false)

  // TODO - подтянуть данные юзера из редакса
  const userData = {
    lastName: 'Файзулин',
    firstName: 'Игорь',
    email: 'faizulin2023@yandex.ru',
    password: '1234567',
  }

  const { lastName, firstName, email, password } = userData

  //TODO написать валидацию
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  async function onSubmit(e: SyntheticEvent) {
    e.preventDefault()
    setIsSuccess(true)
    console.log('submit!')
  }

  return (
    <Section>
      <Title>Профиль</Title>
      <Form name="profile" onSubmit={onSubmit} submitBtnText={isSuccess ? 'Сохранено' : 'Сохранить'} btnVariant={'animated'} isSuccess={isSuccess}>
        <InputWrap>
          <InputForm type="text" placeholder="Фамилия" value={lastName} {...register('lastName')} />
          <InputForm type="text" placeholder="Имя" value={firstName} {...register('firstName')} />
          <InputForm type="email" placeholder="E-mail" value={email} {...register('email')} />
          <InputForm type="text" placeholder="Пароль" value={hideTextWithStart(password)} {...register('password')} />
          <InputForm type="text" placeholder="Изменить пароль" {...register('newPassword')} />
        </InputWrap>
      </Form>
    </Section>
  )
}
