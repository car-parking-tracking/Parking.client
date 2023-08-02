import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { Logo } from '../../molecules'
import { getInitials } from '../../../utils'
import { AccountBtn, LoginBtn, NavList, Wrap } from './header.styles'
import { HeaderProps } from './header.types'

export const Header: FC<HeaderProps> = ({ onBtnClick }) => {
  const isLoggedIn = false //здесь будет значение из рeдакса
  const currentUser = 'Имя Фамилия' //здесь будет значение из рeдакса
  const initials = getInitials(currentUser)

  return (
    <Wrap>
      <nav>
        <NavList>
          <li>
            <Logo />
          </li>
          <li>
            <NavLink to="/">О продукте</NavLink>
          </li>
          <li>
            <NavLink to={`mailto:some@mail.ru`}>some@mail.ru</NavLink>
          </li>
        </NavList>
      </nav>
      {isLoggedIn ? (
        <AccountBtn variant="contained" color="#3473D9" onClick={onBtnClick}>
          {initials}
        </AccountBtn>
      ) : (
        <LoginBtn variant="contained" color="#3473D9" onClick={onBtnClick}>
          Вход
        </LoginBtn>
      )}
    </Wrap>
  )
}
