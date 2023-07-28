import React from 'react'
import styled from 'styled-components'
import Company from '../../atoms/company/company'

const Footer: React.FC = () => {
  return (
    <WrapFooter>
      <div>
        <Company />
        <p className="small">© Parkonaft 2023</p>
      </div>
      <FooterNav>
        <ul>
          <li>
            <a href="#">O компании</a>
          </li>
          <li>
            <a href="malto: some.email.ru">some.email.ru</a>
          </li>
        </ul>
      </FooterNav>
      <div></div>
    </WrapFooter>
  )
}

const WrapFooter = styled.footer`
  width: 100vw;
  height: 4rem;
  background-color: var(--color-bg-panel);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`
const FooterNav = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    column-gap: 2rem;
  }
`
export default Footer
