import { Button } from '@components/atoms'
import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 48rem) {
    margin-bottom: 1.5rem;
    margin-top: 3.0313rem;
    justify-content: space-between;
    align-items: center;
    gap: 0;
  }
`
export const NavButton = styled(Button)`
  @media (max-width: 48rem) {
    width: 100%;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 48rem) {
    height: 100%;
    justify-content: space-between;
  }
`
