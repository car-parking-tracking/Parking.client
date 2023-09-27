import styled from 'styled-components'
import { DefaultTitle } from '@components/atoms'
import { AccountBtn } from '@components/organisms/header/header.styles'

export const Title = styled(DefaultTitle)`
  padding-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 20px;
    font-weight: 700;
    line-height: 28px; /* 140% */
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

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 28px; /* 175% */
  }
`
export const Account = styled(AccountBtn)`
  display: flex;
  margin: 0 16px 0 0;
  width: 50px;
  height: 50px;

  :hover {
    background: var(--new-grey-light);
    color: var(--new-dark);
  }
`
