import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LogoLink = styled(Link)`
  width: fit-content;
  height: 3rem;
  transition: 0.3s;
  display: block;
  max-width: 100%;

  &:hover {
    opacity: 0.6;
  }
`
