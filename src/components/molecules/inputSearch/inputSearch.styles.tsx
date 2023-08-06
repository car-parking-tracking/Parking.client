import styled from "styled-components";

import { Input } from '../../atoms/input'

import search from '@assets/icons/search.svg'

export const Wrapper = styled.div`
  position: absolute;
  top: 0.4375rem;
  left: 11rem;
  z-index: 10;
`
export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0.75rem;
    left: 1rem;
    width: 1.5rem; 
    height: 1.5rem;
    background-image: url(${search});
    background-size: cover;
    background-repeat: no-repeat;
  }
`
export const Search = styled(Input)`
  width: 27.625rem;
  padding-left: 56px;
  border-radius: ${({ showOptions }: { showOptions: boolean }) => (showOptions ? '12px 12px 0 0' : '12px')};
`
export const Option = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: var(--txt-white);

  :hover {
    background-color: var(--search-item-hover);
  }
  
`
export const DataList = styled.div`
  display: flex;
  flex-direction: column;
  width: 27.625rem;
  padding: 0.5rem;
  gap: 0.25rem;
  background-color: var(--txt-white);
  border-radius: 0 0 0.75rem 0.75rem;
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