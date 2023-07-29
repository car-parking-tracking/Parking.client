import React from 'react'
import styled from 'styled-components'
import Company from '../../atoms/company/company'
import User from '../user/user'
import { Button } from '../../atoms'

const Header: React.FC = () => {
  return (
    <WrapHeader>
      <Company />

      <MainNav>
        <ul>
          <li>
            <Button variant="link" onClick={() => console.log('Главная')}>
              Главная
            </Button>
          </li>
          <li>
            <Button variant="link" onClick={() => console.log('O компании')}>
              O компании
            </Button>
          </li>
          <li>
            <Button variant="link" onClick={() => console.log('Контакты')}>
              Контакты
            </Button>
          </li>
        </ul>
      </MainNav>

      <User />
    </WrapHeader>
  )
}

const WrapHeader = styled.header`
  width: 100vw;
  min-height: 4rem;
  background-color: var(--color-bg-panel);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  z-index: 3;
`
const MainNav = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
  }
`

export default Header
