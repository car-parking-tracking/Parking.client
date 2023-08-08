import styled from 'styled-components'
import { Button } from '@components/atoms'

export const Wrap = styled.header`
  padding: 0.5rem 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: center;
  column-gap: 3.5rem;
  background: var(--bg-active);
`

export const NavList = styled.ul`
  display: grid;
  grid-template-columns: 1fr repeat(2, max-content);
  align-items: center;
  column-gap: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  list-style: none;

  a {
    color: var(--color-text);
    text-decoration: none;
    transition: 0.3s;

    :hover {
      color: var(--button-bg-hover);
    }
  }
`
export const LoginBtn = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.5625rem;
  height: 2.875rem;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  background: var(--bg-active);
  border: 2px solid var(--button-bg-default);
  box-shadow: none;
`
export const AccountBtn = styled(Button)`
  padding: 0;
  width: 2.6667rem;
  height: 2.6667rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`
