import { Button, Description, DefaultTitle } from '@components/atoms'
import styled from 'styled-components'

export const InfoDesc = styled(Description)`
  letter-spacing: 0.0313rem;
  margin-bottom: 0.5rem;
`
export const InfoButton = styled(Button)`
  margin-top: 1.5rem;
`
export const Wrapper = styled.div`
  margin-top: ${({ title }) => (title ? '1.125rem' : '0')};
  max-width: 18.75rem;
`
export const InfoTitle = styled(DefaultTitle)``
