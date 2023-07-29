import React from 'react'
import styled from 'styled-components'
import Company from '../../atoms/company/company'
import { Button } from '../../atoms'

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
            <Button variant="link" onClick={() => console.log('O компании')}>
              O компании
            </Button>
          </li>
          <li>
            <Button variant="link" onClick={() => (location.href = 'mailto: some.email.ru')}>
              some.email.ru
            </Button>
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
  }
`
export default Footer
