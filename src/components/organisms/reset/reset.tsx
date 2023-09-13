import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { v4 as uuidv4 } from 'uuid'
import { yupSchemaResetForm } from '@utils/validate'

import { withTitle } from '@app/HOC'
import { InputForm, Form, Info } from '@components/molecules'

import { InputWrap, ResetInfo, Section } from './reset.styles'
import { FormValues } from './reset.types'
import { useNavigate } from 'react-router-dom'

const Reset: FC = () => {
  const [reset, setReset] = useState(false)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
    resolver: yupResolver(yupSchemaResetForm),
  })

  const onSubmit: SubmitHandler<FormValues> = data => {
    setReset(true)
    // navigate(`/update/${uuidv4()}`)
    console.log('submit!', 'data => ', data)
  }

  if (reset) {
    return <Info text="На ваш e-mail скоро придёт письмо для сброса старого пароля." isButton={false} />
  }

  return (
    <Section>
      <Form name="profile" onSubmit={handleSubmit(onSubmit)} submitBtnText={'Восстановить пароль'} isValid={isValid}>
        <InputWrap>
          <InputForm
            type="text"
            name="email"
            register={register}
            placeholder="E-mail"
            isError={!!errors.email?.message}
            errorMessage={errors.email?.message}
            required
          />
        </InputWrap>
      </Form>
    </Section>
  )
}

const ResetWithTitle = withTitle(Reset)

export const ResetWithTitleWrapper: FC = ({ ...props }) => <ResetWithTitle title="Восстановление пароля" hideBackButton={true} {...props} />
