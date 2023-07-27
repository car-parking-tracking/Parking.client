import styled from 'styled-components'
import { Input } from '../../atoms'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  position: absolute;
  pointer-events: none;
  left: 1rem;
  top: 1.313rem;
  transition: 0.3s ease all;
  color: rgba(27, 31, 59, 0.65);
  
  ${Input}:focus ~ & {
    font-size: 0.813rem;
    line-height: 1.25rem;
    left: 1rem;
    top: 0.375rem;
  }

  ${Input}:not(:placeholder-shown) ~ & {
    font-size: 0.813rem;
    line-height: 1.25rem;
    left: 1rem;
    top: 0.375rem;
  }
`

export const StyledInput = styled(Input)`
  ::placeholder {
    opacity: 0;
  }
  
`
export const Span = styled.span`
  margin-top: 0.438rem;
  font-size: 0.813rem;
  color: rgba(221, 76, 30, 1);
`
