import { Description, Title } from '@components/atoms'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
`

export const ErrorTitle = styled(Title)`
  display: inline-block;
  color: var(--button-bg-default);
  font-size: 10rem;
  margin-bottom: 4rem;
`
export const ErrorDescription = styled(Description)`
  color: var(--bg-active);
`
export const ErrorLink = styled(Link)`
  color: var(--bg-active);
  transition: 0.3s ease-in-out;

  &:hover {
    color: var(--button-bg-default);
  }
`
