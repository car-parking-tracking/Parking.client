import { FC } from 'react'
import { AuthFormProps } from './account.types'
import { Container, AccountTitle, Menu, AccountDesc, MenuItem, LinkItem } from './account.styles'
import profile from '@assets/icons/profile.svg'
import favorite from '@assets/icons/favorite.svg'
import exit from '@assets/icons/exit.svg'

export const Account: FC<AuthFormProps> = ({ children }) => {
  return (
    <Container>
      <AccountTitle variant="modal">Мои парковки</AccountTitle>
      <AccountDesc variant="modal">faizulin2023@yandex.ru</AccountDesc>
      <Menu>
        <MenuItem>
          <img src={profile} alt="profile_icon" />
          <LinkItem to="/profile">Мой профиль</LinkItem>
        </MenuItem>
        <MenuItem>
          <img src={favorite} alt="favorite_icon" />
          <LinkItem to="/favorites">Мои парковки</LinkItem>
        </MenuItem>
        <MenuItem>
          <img src={exit} alt="exit_icon" />
          <LinkItem to="/auth">Выйти</LinkItem>
        </MenuItem>
      </Menu>
    </Container>
  )
}
