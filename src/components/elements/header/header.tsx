import React from 'react'
import styled from 'styled-components'
import Company from '../company/company'

const Header: React.FC = () => {
  return (
    <WrapHeader>
      <Company />

      <MainNav>
        <ul>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">O компании</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </MainNav>

      <User>
        <span>User</span>
        <UserLogo />
      </User>
    </WrapHeader>
  )
}

const WrapHeader = styled.header`
  width: 100vw;
  height: 4rem;
  background-color: var(--color-bg-panel);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`
const MainNav = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    column-gap: 2rem;
  }
`
// Temporary elements for the future user component
const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 0.5rem;
`
const UserLogo = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  background-color: var(--color-bg-element);
`
export default Header
