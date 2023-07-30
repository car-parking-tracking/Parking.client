import React from 'react'
import styled from 'styled-components'
import Link from '../../atoms/link/link'
import Interplay from '../../../utils/interplay'

const interplay = new Interplay()

const User: React.FC = () => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    interplay.run('menu.switch')
  }

  return (
    <WrapRow>
      <Link onClick={() => console.log('Регистрация')}>Регистрация</Link>
      <WrapUser onClick={handleClick}>
        <span>User</span>
        <UserLogo />
      </WrapUser>
    </WrapRow>
  )
}

const WrapRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1rem;
`
const WrapUser = styled.div`
  color: var(--color-text);
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 0.5rem;
  cursor: pointer;
  transition: opacity 0.3s linear;
  opacity: 1;
  &:hover {
    opacity: 0.6;
  }
`
const UserLogo = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  background-color: var(--color-bg-element);
`
export default User
