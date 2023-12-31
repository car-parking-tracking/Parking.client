import styled from 'styled-components'
import { Button } from '@components/atoms'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.header`
  position: absolute;
  z-index: 10;
  top: 0.5rem;
  left: 0;
  width: 100%;
  display: grid;
  padding: 0.5rem 2rem;
  grid-template-columns: 1fr max-content;
  align-items: center;

  ::before {
    content: '';
    position: absolute;
    z-index: -1;
    right: 2rem;
    width: 29.5rem;
    height: 4rem;
    border-radius: 1rem;
    background: rgba(60, 65, 88, 0.8);
  }

  @media (max-width: 768px) {
    padding: 8px 16px 8px 16px;

    ::before {
      display: none;
    }
  }
`
export const NavList = styled.ul`
  display: grid;
  grid-template-columns: 1fr repeat(2, max-content);
  align-items: center;
  column-gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`

export const HeaderLink = styled(NavLink)`
  font-weight: 500;
  line-height: 1.5rem;
  list-style: none;
  letter-spacing: 0.0313rem;
`

export const LoginBtn = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  padding: 0.75rem 1.125rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  border: none;
  box-shadow: none;
  margin: 0 0.5rem 0 3.9375rem;

  @media (max-width: 768px) {
    display: none;
  }
`
export const AccountBtn = styled(Button)`
  padding: 0;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  margin: 0 0.5rem 0 5.5625rem;

  @media (max-width: 768px) {
    display: none;
  }
`
export const MenuButton = styled(Button)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    height: 48px;
    width: 44px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.75rem;
    background: var(--new-white);
    gap: 0.3125rem;
    padding: 0 10px;
    box-shadow: 0rem 0.125rem 0.25rem 0rem rgba(0, 0, 0, 0.3);

    span {
      width: 1.375rem;
      height: 0.125rem;
      background: var(--new-grey);
    }

    :hover {
      color: var(--new-dark);
      background-color: var(--new-white);
    }
  }
`
