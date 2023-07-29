import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import UserMenu from '../../organisms/user-menu/menu'
import { Button } from '../../atoms'
import hideOnClickOutside from '../../../utils/modal'

const User: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()

    if (ref.current) {
      ref.current.hidden = !ref.current.hidden

      if (!ref.current.hidden) {
        hideOnClickOutside(ref.current, () => (ref.current!.hidden = true))
      }
    }
  }

  useEffect(() => {
    if (ref.current) ref.current.hidden = true
  }, [])

  return (
    <>
      <WrapRow>
        <Button variant="link" onClick={() => console.log('Регистрация')}>
          Регистрация
        </Button>
        <WrapUser onClick={handleClick}>
          <span>User</span>
          <UserLogo />
        </WrapUser>
      </WrapRow>

      <UserMenu ref={ref} />
    </>
  )
}

const WrapRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 0.5rem;
`
const WrapUser = styled.div`
  color: var(--color-text);
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 0.5rem;
  cursor: pointer;
  transition: color 0.3s linear;
  &:hover {
    color: color-mix(in srgb, var(--color-text) 50%, transparent);
  }
`
const UserLogo = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  background-color: var(--color-bg-element);
`
export default User
