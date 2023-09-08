import { FC, SyntheticEvent, useState } from 'react'
import { useForm } from 'react-hook-form'

import { InputForm } from '@components/molecules'
import { Form } from '../form'
import { InputWrap, Section } from './Profile.styles'
import { FormData } from './Profile.types'
import { hideTextWithStart } from '../../../utils'

import { withTitle } from '@app/HOC'

const Profile: FC = () => {
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
      <Form name="profile" onSubmit={onSubmit} submitBtnText={isSuccess ? 'Сохранено' : 'Сохранить'} btnVariant={'animated'} isSuccess={isSuccess}>
        <InputWrap>
          <InputForm type="text" placeholder="Фамилия" value={lastName} name="lastName" register={register} required={false} />
          <InputForm type="text" placeholder="Имя" value={firstName} name="firstName" register={register} required={false} />
          <InputForm type="email" placeholder="E-mail" value={email} name="email" register={register} required={false} />
          <InputForm type="text" placeholder="Пароль" value={hideTextWithStart(password)} name="password" register={register} required={false} />
          <InputForm type="text" placeholder="Изменить пароль" name="newPassword" register={register} required={false} />
        </InputWrap>
      </Form>
    </Section>
  )
}

export const ProfileWithTitle = withTitle(Profile)
