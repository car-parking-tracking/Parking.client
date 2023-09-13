import { FC } from 'react'
import { AuthFormProps } from './account.types'
import { Container, Menu, AccountDesc, LinkItem } from './account.styles'
import profile from '@assets/icons/profile.svg'
import favorite from '@assets/icons/favorite.svg'
import exit from '@assets/icons/exit.svg'

import { withTitle } from '@app/HOC'
import { FooterMobile } from '@components/molecules'
import { useSignOutMutation } from '@app/store/api'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { RootState } from '@app/store/store'

const Account: FC<AuthFormProps> = ({ children }) => {
  const token = useSelector((state: RootState) => state.auth.token)
  const [signOut] = useSignOutMutation()
  const navigate = useNavigate()

  const handleLogout = async () => {
    const response = await signOut(token)
    const isError = 'error' in response

    if (!isError) {
      navigate('/')
    } else {
      console.log(isError)
    }
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
