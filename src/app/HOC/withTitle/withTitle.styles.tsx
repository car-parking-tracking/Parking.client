import styled from 'styled-components'
import { DefaultTitle } from '@components/atoms'

export const Title = styled(DefaultTitle)`
  padding-bottom: 0.5rem;
`
export const ReturnButton = styled.button`
  display: flex;
  width: 24px;
  height: 24px;
  cursor: pointer;
  border: none;
  background: transparent;
  margin-right: 32px;
`
export const ReturnIcon = styled.img`
  width: 24px;
  height: 24px;
`
export const Provider = styled.div`
  display: flex;
  width: max-content;
`
