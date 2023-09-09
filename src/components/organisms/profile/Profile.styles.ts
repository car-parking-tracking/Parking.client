import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Section = styled.section`
  margin-top: 2rem;
`

export const InputWrap = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const LinkItem = styled(Link)`
  margin-bottom: 1.5rem;
  color: var(--button-bg-default);
  transition: 0.3s ease-in-out;

  &:hover {
    color: var(--button-bg-hover);
  }
`
