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
  left: 16px;
  top: 21px;
  transition: 0.3s ease all;
  color: rgba(27, 31, 59, 1);

  ${Input}:focus ~ & {
    font-size: 13px;
    line-height: 20px;
    left: 16px;
    top: 6px;
  }

  ${Input}:not(:placeholder-shown) ~ & {
    font-size: 13px;
    line-height: 20px;
    left: 16px;
    top: 6px;
  }
`

export const StyledInput = styled(Input)`
  ::placeholder {
    opacity: 0;
  }
  
`
export const Span = styled.span`
  margin-top: 7px;
  font-size: 13px;
  color: rgba(221, 76, 30, 1);
`
