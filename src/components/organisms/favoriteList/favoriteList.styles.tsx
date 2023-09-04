import { DefaultTitle, Description } from '@components/atoms'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Title = styled(DefaultTitle)`
  padding-bottom: 8px;
`

export const Notification = styled(Description)`
  color: #3c4158cc;
  font-size: 1rem;
  line-height: 24px;
  letter-spacing: 0.5px;
`
export const List = styled.div`
  display: flex;
  width: 100%;
  max-height: 619px;
  flex-direction: column;
  margin-top: 28px;
  gap: 24px;
  overflow-y: auto;
`
