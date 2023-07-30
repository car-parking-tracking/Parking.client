import React, { forwardRef } from 'react'
import styled from 'styled-components'
import Link from '../../atoms/link/link'
import useForwardRef from '../../../hooks/useForwardRef'
import Interplay from '../../../utils/interplay'

const interplay = new Interplay()

const UserMenu = forwardRef<HTMLDivElement>((props, ref) => {
  const localRef = useForwardRef<HTMLDivElement>(ref)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    const target = event.target as HTMLElement
    if (target.dataset.action) {
      interplay.run(target.dataset.action)
    }
    if (localRef.current) localRef.current.hidden = true
  }

  return (
    <WrapMenu ref={localRef} {...props}>
      <UserNav>
        <ul>
          <li>
            <Link onClick={handleClick}>Профиль</Link>
          </li>
          <li>
            <Link data-action="favorites.switch" onClick={handleClick}>
              Избранное
            </Link>
          </li>
          <li>
            <Link onClick={handleClick}>Feedback</Link>
          </li>
          <li>
            <Link onClick={handleClick}>Выйти</Link>
          </li>
        </ul>
      </UserNav>
    </WrapMenu>
  )
})

const WrapMenu = styled.div`
  color: var(--color-text-menu);
  background-color: var(--color-bg-menu);
  position: absolute;
  top: 4rem;
  right: 0;
  z-index: 2;
  transition: 0.5s linear;
`
const UserNav = styled.nav`
  li {
    width: 100%;
    padding: 0.5rem 2rem;
    transition: 0.3s linear;
    &:hover {
      background-color: var(--color-accend);
    }
  }
`
UserMenu.displayName = 'UserMenu'
export default UserMenu
