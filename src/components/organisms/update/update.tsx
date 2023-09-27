import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { yupUpdatePasswordForm } from '@utils/validate'

import { withTitle } from '@app/HOC'
import { InputForm, Form, Info } from '@components/molecules'

import { InputWrap, Section } from './update.styles'
import { FormValues } from './update.types'
import { useUpdatePasswordMutation } from '@app/store/api'
import { useParams } from 'react-router-dom'

const Update: FC = () => {
  const [update, setUpdate] = useState(false)
  const [updatePassword] = useUpdatePasswordMutation()
  const { uid, token } = useParams()
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
    resolver: yupResolver(yupUpdatePasswordForm),
  })

  const onSubmit: SubmitHandler<FormValues> = async data => {
    const response = await updatePassword({
      uid: uid as string,
      token: token as string,
      new_password: data.password_new,
    })

    const isError = 'error' in response

    if (!isError) {
      setUpdate(true)
    } else {
      console.log(isError)
    }
  }

  if (update) {
    return <Info text="Ваш новый пароль сохранен" isButton={true} />
  }

  return (
    <Section>
      <Form name="profile" onSubmit={handleSubmit(onSubmit)} submitBtnText={'Обновить пароль'} isValid={isValid}>
        <InputWrap>
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

const UpdateWithTitle = withTitle(Update)

export const UpdateWithTitleWrapper: FC = ({ ...props }) => <UpdateWithTitle title="Обновление пароля" hideBackButton={true} {...props} />
