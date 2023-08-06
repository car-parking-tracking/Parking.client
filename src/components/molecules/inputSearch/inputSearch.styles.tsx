import styled from "styled-components";

import { Input } from '../../atoms/input'

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0.4375rem;
  left: 11rem;
  z-index: 10;
`
export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
`
export const Search = styled(Input)`
  width: 27.625rem;
  border-radius: ${({ showOptions }: { showOptions: boolean }) => (showOptions ? '12px 12px 0 0' : '12px')};
`
export const Option = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  cursor: pointer;
  background-color: var(--txt-white);
  border-radius: 0.5rem;
  padding: 0.625rem 0.5rem;
  border: none;

  :hover {
    background-color: var(--search-item-hover);
  }
  
`
export const DataList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--txt-white);
  border-radius: 0 0 0.75rem 0.75rem;
  padding: 0.5rem;
  gap: 0.25rem;
  width: 27.625rem;
  font-weight: 400;
  box-shadow: 0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.05), 
  0 0.6875rem 0.6875rem 0 rgba(0, 0, 0, 0.04),
  0 1.5625rem 0.9375rem 0 rgba(0, 0, 0, 0.03);
`
export const Name = styled.p`
  color: var(--search-item-name);
  line-height: 1.5rem;
`
export const Description = styled.p`
  color: var(--search-item-desc);
  font-family: 'Manrope', sans-serif;
  line-height: 1.25rem;
  font-size: 0.8125rem;
`
