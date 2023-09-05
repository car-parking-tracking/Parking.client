import { FC } from 'react'
import { AuthFormProps } from './account.types'
import { Container, AccountTitle, Menu, AccountDesc, LinkItem } from './account.styles'
import profile from '@assets/icons/profile.svg'
import favorite from '@assets/icons/favorite.svg'
import exit from '@assets/icons/exit.svg'

export const Account: FC<AuthFormProps> = ({ children }) => {
  return (
    <Container>
      <AccountTitle variant="modal">Мои парковки</AccountTitle>
      <AccountDesc variant="modal">faizulin2023@yandex.ru</AccountDesc>
      <Menu>
        <LinkItem to="/profile">
          <img src={profile} alt="profile_icon" />
          Мой профиль
        </LinkItem>
        <LinkItem to="/favorites">
          <img src={favorite} alt="favorite_icon" />
          Мои парковки
        </LinkItem>
        <LinkItem to="/auth">
          <img src={exit} alt="exit_icon" /> Выйти
        </LinkItem>
      </Menu>
    </Container>
  )
}
