import { Description } from '@components/atoms'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 53.75rem;
`

export const ErrorDescription = styled(Description)`
  width: 85%;
  padding: 0 1rem 0 1rem;
  color: var(--bg-active);
  margin-top: 4rem;
  margin-bottom: 2.875rem;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 500;
`
export const ErrorImage = styled.img`
  max-width: 100%;
  padding: 0 1rem 0 1rem;
`
