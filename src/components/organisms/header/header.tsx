import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { getInitials } from '../../../utils'

import { Logo } from '@components/molecules'
import { AccountBtn, LoginBtn, NavList, Wrapper, MenuButton } from './header.styles'
import { HeaderProps } from './header.types'

import { email } from '@constants/variables'

export const Header: FC<HeaderProps> = ({ onBtnClick, isLoggedIn }) => {
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
            <NavLink to="/about">О продукте</NavLink>
          </li>
          <li>
            <NavLink to={`mailto:${email}`}>{email}</NavLink>
          </li>
        </NavList>
      </nav>
      {isLoggedIn ? (
        <AccountBtn variant="secondary" onClick={onBtnClick}>
          {initials}
        </AccountBtn>
      ) : (
        <LoginBtn variant="secondary" onClick={onBtnClick}>
          Вход
        </LoginBtn>
      )}
      <MenuButton variant="secondary" onClick={onBtnClick}>
        <span></span>
        <span></span>
        <span></span>
      </MenuButton>
    </Wrapper>
  )
}
