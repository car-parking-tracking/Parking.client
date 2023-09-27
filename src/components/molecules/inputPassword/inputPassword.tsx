import { FC } from 'react'

import { InputPass, WrapperPassword, ButtonPassword, ImgPassword } from './inputPassword.styles'

import eyeOff from '@assets/icons/eyeOff.svg'
import eyeOn from '@assets/icons/eyeOn.svg'
import { InputPasswordProps } from './inputPassword.types'

export const InputPassword: FC<InputPasswordProps> = ({ defaultValue, register, name, togglePasswordVisibility, passwordVisible, placeholder }) => {
  return (
    <WrapperPassword>
      <InputPass
        name="password"
        type={passwordVisible ? 'text' : 'password'}
        defaultValue={defaultValue}
        {...register(name, { required: true })}
        variant="form"
        placeholder={placeholder}
      />
      <ButtonPassword onClick={togglePasswordVisibility}>
        <ImgPassword src={passwordVisible ? eyeOn : eyeOff} alt="Eye" />
      </ButtonPassword>
    </WrapperPassword>
  )
}
