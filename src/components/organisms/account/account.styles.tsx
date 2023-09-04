import styled from 'styled-components'
import { Description, DefaultTitle } from '@components/atoms'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const AccountTitle = styled(DefaultTitle)`
  margin-bottom: 0.5rem;
`
export const AccountDesc = styled(Description)`
  margin-bottom: 2rem;
`
export const Menu = styled.div`
  margin-left: -2rem;
  margin-right: -2rem;
`
export const MenuItem = styled.div`
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
  color: var(--bg-active);
  padding: 0.75rem 3rem 0.75rem 2rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &:hover {
    background-color: #f2f9ff;
  }
`
