import styled from 'styled-components'
import { Input } from '@components/atoms'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`
export const Label = styled.label`
  font-size: 0.875rem;
  line-height: normal;
  pointer-events: none;
  transition: 0.3s ease all;
  color: rgba(27, 31, 59, 0.65);

  @media (max-width: 768px) {
    display: none;
  }
`
export const StyledInput = styled(Input)`
  ::placeholder {
    opacity: 0;
  }
  margin: 0;
  @media (max-width: 48rem) {
    ::placeholder {
      opacity: 1;
      color: var(--new-grey);
    }
  }
`
export const Span = styled.span`
  margin-top: 0.438rem;
  font-size: 0.813rem;
  color: rgba(221, 76, 30, 1);
  line-height: 1rem;
`
export const InputPassword = styled(Input)`
  width: 100%;
`
export const WrapperPassword = styled.div`
  display: flex;
`
export const ButtonPassword = styled.button`
  position: absolute;
  top: 2.625rem;
  right: 0.625rem;
  width: 1rem;
  height: 1rem;
  border: none;
  background: transparent;
  padding: 0;
`
export const ImgPassword = styled.img``
