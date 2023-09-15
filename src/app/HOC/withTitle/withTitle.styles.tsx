import styled from 'styled-components'
import { DefaultTitle } from '@components/atoms'

export const Title = styled(DefaultTitle)`
  padding-bottom: 0.5rem;
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
  margin-left: 10px;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'liga' off;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
`
