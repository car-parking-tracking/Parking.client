import styled from 'styled-components'
import { Button } from '@components/atoms'

export const Container = styled.form`
  display: flex;
  flex-direction: column;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ButtonTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  margin: 1.5rem 0;
`
export const ButtonSubmit = styled(Button)`
  height: 3rem;
  width: 5.125rem;
  padding: 0.75rem 1.125rem;
  font-weight: 500;
`
