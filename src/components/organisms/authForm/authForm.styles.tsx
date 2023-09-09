import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 48rem) {
    margin-bottom: 1.5rem;
    justify-content: center;
    align-items: center;
    gap: 0;
  }
`
export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ButtonTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  margin: 1.5rem 0;
`
