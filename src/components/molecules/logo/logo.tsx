import { FC } from 'react'
import { LogoLink } from './logo.styles'

import LogoImg from '@assets/icons/logo.svg'

export const Logo: FC = () => {
  return (
    <LogoLink to="/">
      <img src={LogoImg} alt="logo" />
    </LogoLink>
  )
}
