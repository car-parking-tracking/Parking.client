import { FC } from 'react'
import { Button } from '@components/atoms'
import { FormProps } from './form.types'

export const Form: FC<FormProps> = ({ onSubmit, children, submitBtnText = 'Сохранить', btnVariant = 'primary', isSuccess = false, isValid }) => {
  return (
    <form name="profile" onSubmit={onSubmit}>
      {children}
      <Button type="submit" name="profile-submit" variant={btnVariant} disabled={!isValid}>
        {submitBtnText}
        {isSuccess && btnVariant === 'animated' && <div id="icon" />}
      </Button>
    </form>
  )
}
