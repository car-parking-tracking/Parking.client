import styled from 'styled-components'

import { Input } from '@components/atoms'

import search from '@assets/icons/search.svg'

export const Wrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 6.5rem;
  z-index: 10;

  @media (max-width: 48rem) {
    top: 1rem;
    left: 1rem;
  }
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

  @media (max-width: 48rem) {
    &::before {
      display: none;
    }
  }
`
export const Search = styled(Input)`
  width: 27.625rem;
  padding-left: 3.5rem;
  padding-right: 2.25rem;
  border-radius: ${({ showOptions }: { showOptions: boolean }) => (showOptions ? '0.75rem 0.75rem 0 0' : '0.75rem')};

  @media (max-width: 48rem) {
    padding: 0rem .75rem 0rem 1rem;
    width: 17.4375rem;
    font-size: .875rem;
    font-style: normal;
    font-weight: 400;
  }
`
export const Option = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.625rem 0.5rem;
  background-color: var(--new-white);

  :hover {
    background-color: var(--new-grey-extra);
  }
`
export const DataList = styled.div`
  display: flex;
  flex-direction: column;
  width: 27.625rem;
  max-height: 14.5rem;
  padding: 0.5rem;
  gap: 0.25rem;
  overflow-y: auto;
  background-color: var(--new-white);
  border-radius: 0 0 0.75rem 0.75rem;
  font-weight: 400;
  box-shadow:
    0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.05),
    0 0.6875rem 0.6875rem 0 rgba(0, 0, 0, 0.04),
    0 1.5625rem 0.9375rem 0 rgba(0, 0, 0, 0.03);

  ::-webkit-scrollbar {
    width: 0.063rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  @media (max-width: 48rem) {
    width: 17.4375rem;
  }
`
export const Name = styled.p`
  color: var(--new-dark);
  line-height: 1.5rem;
`
export const Description = styled.p`
  color: var(--new-grey);
  font-family: 'Raleway', sans-serif;
  line-height: 1.25rem;
  font-size: 0.8125rem;
`
export const ClearButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 0.75rem;
  width: 1rem;
  height: 1rem;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 11;
`
export const ClearIcon = styled.img`
  width: 1rem;
  height: 1rem;
`
