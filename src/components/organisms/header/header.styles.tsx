import styled from 'styled-components'
import { Button } from '../../atoms'

export const Wrap = styled.header`
  padding: 1rem 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: center;
  column-gap: 5.3333rem;
  background: #272b3b;
`

export const NavList = styled.ul`
  display: grid;
  grid-template-columns: 1fr repeat(2, max-content);
  align-items: center;
  column-gap: 1.0667rem;
  font-size: 1.0667rem;

  a {
    transition: 0.3s;
    cursor: default;
  }

  a:hover {
    color: #1655bb;
  }
`
export const LoginBtn = styled(Button)`
  height: 2.6667rem;
  padding: 0 1.578rem;
  font-size: 1.0667rem;
  font-weight: 600;
  line-height: 1.5;
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
