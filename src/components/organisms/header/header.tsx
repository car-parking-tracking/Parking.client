import { FC } from 'react'

import { getInitials } from '@utils/get-initials'

import { Logo } from '@components/molecules'
import { AccountBtn, LoginBtn, NavList, Wrapper, MenuButton, HeaderLink } from './header.styles'
import { HeaderProps } from './header.types'

import { email } from '@constants/variables'
import { useUserSlice } from '@app/store/slices/userSlice'

export const Header: FC<HeaderProps> = ({ onBtnClick, isLoggedIn }) => {
  const { user } = useUserSlice()
  const currentUser = `${user.last_name} ${user.first_name}`
  const initials = getInitials(currentUser)

  return (
    <Wrapper>
      <nav>
        <NavList>
          <li>
            <Logo />
          </li>
          <li>
            <HeaderLink to="/about" onClick={onBtnClick}>
              О продукте
            </HeaderLink>
          </li>
          <li>
            <HeaderLink to={`mailto:${email}`}>{email}</HeaderLink>
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
