import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { Button } from '../../atoms'

const UserMenu = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <WrapMenu ref={ref} {...props}>
      <UserNav>
        <ul>
          <li>
            <Button variant="link" color="black" onClick={() => console.log('Профиль')}>
              Профиль
            </Button>
          </li>
          <li>
            <Button variant="link" color="black" onClick={() => console.log('Избранное')}>
              Избранное
            </Button>
          </li>
          <li>
            <Button variant="link" color="black" onClick={() => console.log('Feedback')}>
              Feedback
            </Button>
          </li>
          <li>
            <Button variant="link" color="black" onClick={() => console.log('Выйти')}>
              Выйти
            </Button>
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
  /*   ul {
    display: flex;
    flex-direction: row;
    column-gap: 2rem;
  } */
  li {
    width: 100%;
    /* padding: 0.5rem 2rem; */
    transition: 0.3s linear;
    &:hover {
      background-color: var(--color-accend);
    }
  }
`
UserMenu.displayName = 'UserMenu'
export default UserMenu
