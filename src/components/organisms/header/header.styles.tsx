import styled from 'styled-components'
import { Button } from '@components/atoms'

export const Wrapper = styled.header`
  position: absolute;
  z-index: 10;
  top: 0.5rem;
  left: 0;
  width: 100%;
  display: grid;
  padding: 0.5rem 2.5rem 0.5rem 2rem;
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
    padding: 0.5rem 1rem 0.5rem 1rem;
    &::before {
      display: none;
    }
  }
`
export const NavList = styled.ul`
  display: grid;
  grid-template-columns: 1fr repeat(2, max-content);
  align-items: center;
  column-gap: 2rem;
  font-weight: 400;
  line-height: 1.5rem;
  list-style: none;
  letter-spacing: 0.5px;

  a {
    color: var(--txt-white);
    text-decoration: none;
    transition: 0.3s;

    :hover {
      color: var(--button-bg-hover);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
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
  margin-left: 3.938rem;

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
  margin-left: 5.563rem;

  @media (max-width: 768px) {
    display: none;
  }
`
export const MenuButton = styled(Button)`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    height: 48px;
    background: var(--new-white);
    gap: 5px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3);
    
    span {
      width: 22px;
      height: 2px;
      background: var(--new-grey);
    }
  }
`
