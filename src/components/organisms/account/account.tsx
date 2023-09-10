import { FC } from 'react'
import { AuthFormProps } from './account.types'
import { Container, Menu, AccountDesc, LinkItem } from './account.styles'
import profile from '@assets/icons/profile.svg'
import favorite from '@assets/icons/favorite.svg'
import exit from '@assets/icons/exit.svg'
import { useAppDispatch } from '@app/hooks/redux'
import { logout } from '@app/store/slices/authSlice'

import { withTitle } from '@app/HOC'
import { FooterMobile } from '@components/molecules'

const Account: FC<AuthFormProps> = ({ children }) => {
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <Container>
      <AccountDesc variant="modal">faizulin2023@yandex.ru</AccountDesc>
      <Menu>
        <LinkItem to="/profile">
          <img src={profile} alt="profile_icon" />
          Мой профиль
        </LinkItem>
        <LinkItem to="/favorites">
          <img src={favorite} alt="favorite_icon" />
          Избранное
        </LinkItem>
        <LinkItem to="/" onClick={handleLogout}>
          <img src={exit} alt="exit_icon" /> Выйти
        </LinkItem>
      </Menu>
      <FooterMobile hasAbout={true} />
    </Container>
  )
}

const AccountWithTitle = withTitle(Account)

export const AccountWithTitleWrapper: FC = ({ ...props }) => <AccountWithTitle title="Игорь Файзулин" hideBackButton={true} {...props} />
