import styled from 'styled-components'
import { Button } from '@components/atoms'

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    button {
      width: 100%;
      margin-bottom: 20px;
    }
  }
`
export const Container = styled.form`
  display: flex;
  flex-direction: column;
`
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const ButtonSubmit = styled(Button)`
  height: 3rem;
  width: 12.375rem;
  padding: 0.75rem 1.125rem;
  font-weight: 500;
`
