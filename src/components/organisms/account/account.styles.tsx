import styled from 'styled-components'
import { Description } from '@components/atoms'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 48rem) {
    height: 100%;
    justify-content: space-between;
  }
`
export const AccountDesc = styled(Description)`
  margin-bottom: 2rem;
  color: rgba(60, 65, 88, 0.8);
`
export const Menu = styled.div`
  margin-left: -2rem;
  margin-right: -2rem;
`
export const MenuItem = styled.div`
  padding: 0.75rem 3rem 0.75rem 2rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &:hover {
    background-color: var(--new-grey-extra);
  }
`

export const LinkItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 3rem 0.75rem 2rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
  color: var(--bg-active);
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: 0rem 0rem 0.9375rem 0rem rgba(0, 0, 0, 0.1);
  }
`
