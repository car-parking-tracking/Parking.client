import { FC } from 'react'
import { AuthFormProps } from './account.types'
import { Container, Menu, AccountDesc, LinkItem } from './account.styles'

import { getInitials } from '@utils/get-initials'
import { withTitle } from '@app/HOC'
import { FooterMobile } from '@components/molecules'
import { useSignOutMutation } from '@app/store/api'
import { useNavigate } from 'react-router'
import { useUserSlice } from '@app/store/slices/userSlice'
import { useAuthSlice } from '@app/store/slices/authSlice'

import profile from '@assets/icons/profile.svg'
import favorite from '@assets/icons/favorite.svg'
import exit from '@assets/icons/exit.svg'

const Account: FC<AuthFormProps> = ({ children }) => {
  const { token } = useAuthSlice()
  const { user } = useUserSlice()
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
      <AccountDesc variant="modal">{user.email}</AccountDesc>
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

export const AccountWithTitleWrapper: FC = ({ ...props }) => {
  const { user } = useUserSlice()
  const currentUser = `${user.last_name} ${user.first_name}`
  const initials = getInitials(currentUser)

  return <AccountWithTitle initials={initials} title={`${user.first_name} ${user.last_name}`} hideBackButton={true} {...props} />
}
