import React, { forwardRef } from 'react'
import styled from 'styled-components'
import Link from '../../atoms/link/link'
import useForwardRef from '../../../hooks/useForwardRef'
import Interplay from '../../../utils/interplay'
import hideOnClickOutside from '../../../utils/modal'

const interplay = new Interplay()

const UserMenu = forwardRef<HTMLDivElement>((props, ref) => {
  const localRef = useForwardRef<HTMLDivElement>(ref)

  const menuVisibilitySwitch = () => {
    const el = localRef.current
    if (el) {
      const slideAnimation = [{ transform: 'translateY(0)' }, { transform: 'translateY(-100%)' }]
      if (el.hidden) {
        el.hidden = false
        el.animate(slideAnimation, {
          duration: 300,
          direction: 'reverse',
        })
        hideOnClickOutside(el, menuVisibilitySwitch)
      } else {
        setTimeout(() => {
          el.hidden = true
        }, 280)
        el.animate(slideAnimation, {
          duration: 300,
          direction: 'normal',
        })
      }
    }
  }

  interplay.add('menu.switch', menuVisibilitySwitch)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    const target = event.target as HTMLElement
    if (target.dataset.action) {
      interplay.run(target.dataset.action)
    }
    menuVisibilitySwitch()
  }

  return (
    <WrapMenu ref={localRef} {...props} hidden>
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
