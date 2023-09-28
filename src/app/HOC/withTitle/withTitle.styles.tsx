import styled from 'styled-components'
import { DefaultTitle } from '@components/atoms'
import { AccountBtn } from '@components/organisms/header/header.styles'

export const Title = styled(DefaultTitle)`
  padding-bottom: 0.5rem;

  @media (max-width: 48rem) {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.75rem;
  }
`
export const ReturnButton = styled.button`
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  border: none;
  background: transparent;
  margin-right: 2rem;
`
export const ReturnIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`
export const Provider = styled.div`
  display: flex;
  width: max-content;
`

export const Count = styled.span`
  color: var(--new-grey);
  margin-left: 0.625rem;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'liga' off;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;

  @media (max-width: 48rem) {
    font-size: 1rem;
    line-height: 1.75rem;
  }
`
export const Account = styled(AccountBtn)`
  display: flex;
  margin: 0 1rem 0 0;
  width: 3.125rem;
  height: 3.125rem;

  :hover {
    background: var(--new-grey-light);
    color: var(--new-dark);
  }
`
