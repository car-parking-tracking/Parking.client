import { FC, useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { LoginContext } from '../../../context/loginContext'
import { getInitials } from '../../../utils'

import { Logo } from '@components/molecules'
import { AccountBtn, LoginBtn, NavList, Wrapper } from './header.styles'
import { HeaderProps } from './header.types'

import { email } from '@constants/variables'

export const Header: FC<HeaderProps> = ({ onBtnClick }) => {
  const { isLoggedIn } = useContext(LoginContext) //здесь будет значение из рeдакса
  const currentUser = 'Имя Фамилия' //здесь будет значение из рeдакса
  const initials = getInitials(currentUser)

  return (
    <Wrapper>
      <nav>
        <NavList>
          <li>
            <Logo />
          </li>
          <li>
            <NavLink to="/">О продукте</NavLink>
          </li>
          <li>
            <NavLink to={`mailto:${email}`}>{email}</NavLink>
          </li>
        </NavList>
      </nav>
      {isLoggedIn ? (
        <AccountBtn variant="contained" onClick={onBtnClick}>
          {initials}
        </AccountBtn>
      ) : (
        <LoginBtn variant="contained" color="#3473D9" onClick={onBtnClick}>
          Вход
        </LoginBtn>
      )}
    </Wrapper>
  )
}
