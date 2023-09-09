import { Description, Title } from '@components/atoms'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
  max-width: 860px;
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
