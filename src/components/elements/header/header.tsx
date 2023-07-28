import React from 'react'
import styled from 'styled-components'

const Header: React.FC = () => {
  return (
    <WarapHeader>
      <div>
        <Company>
          <Logo />
          <span>Parkonaft</span>
        </Company>
        <p className="small">© Parkonaft 2023</p>
      </div>
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
    </WarapHeader>
  )
}

const WarapHeader = styled.header`
  width: 100vw;
  background-color: var(--color-bg-panel);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`
const Logo = styled.div`
  /* Temporary icon */
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 64 64' font-size='56' font-family='Arial' font-weight='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='64' height='64' rx='10' fill='%230874bb'/%3E%3Ctext y='52' x='12' textLength='40' lengthAdjust='spacingAndGlyphs' fill='white'%3E P %3C/text%3E%3C/svg%3E");
  width: 2rem;
  height: 2rem;
`
const Company = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 0.5rem;
  align-items: center;
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
  background-color: white;
`
export default Header
