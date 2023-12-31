import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkContainer = styled.div`
  display: none;
  align-self: center;
  margin-top: auto;

  @media (max-width: 768px) {
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`

export const FooterLink = styled(Link)`
  @media (max-width: 768px) {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: var(--new-dark);
  }
`
