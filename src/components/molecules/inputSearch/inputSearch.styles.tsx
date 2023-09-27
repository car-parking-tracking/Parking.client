import styled from 'styled-components'

import { Input } from '@components/atoms'

import search from '@assets/icons/search.svg'
import arrow from '@assets/icons/arrow.svg'

interface ReturnProps {
  isInputFocused: boolean
}

export const Wrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 6.5rem;
  z-index: 10;

  @media (max-width: 768px) {
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
    z-index: 100;
    position: absolute;
    top: 0.75rem;
    left: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    background-image: url(${search});
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media (max-width: 768px) {
    ::before {
      display: none;
    }
  }
`
export const Search = styled(Input)`
  z-index: 99;
  width: 27.625rem;
  padding: 0 2.25rem 0 3.5rem;
  border-radius: ${({ showOptions }: { showOptions: boolean }) => (showOptions ? '0.75rem 0.75rem 0 0' : '0.75rem')};

  @media (max-width: 1000px) {
    width: 360px;
    padding: 0 24px 0 3.5rem;
  }

  @media (max-width: 768px) {
    padding: 0rem 0.75rem 0rem 1rem;
    width: 17.4375rem;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.5px;

    :focus {
      width: 328px;
      padding-left: 48px;
      border: none;
      border-radius: 0;
      box-shadow: none;
      border-bottom: 1px solid var(--new-grey-light);
    }
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
`
export const Name = styled.p`
  color: var(--new-dark);
  line-height: 1.5rem;
`
export const Description = styled.p`
  color: var(--new-grey);
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

  @media (max-width: 768px) {
    z-index: 100;
  }
`
export const ClearIcon = styled.img`
  width: 1rem;
  height: 1rem;
`
export const SearchMobile = styled(Search)``

export const DataListMobile = styled.div`
  padding: 56px 8px 8px 8px;
  max-height: 610px;
  overflow-y: auto;
`

export const WrapperMobile = styled.div`
  z-index: 98;
  position: absolute;
  top: -16px;
  left: -16px;
  height: 100vh;
  width: 100vw;
  padding-top: 16px;
  background: var(--new-white);
`
export const Return = styled.button<ReturnProps>`
  display: none;

  @media (max-width: 768px) {
    display: ${props => (props.isInputFocused ? 'flex' : 'none')};
    position: absolute;
    z-index: 100;
    top: 12px;
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    background-image: url(${arrow});
    background-size: cover;
    background-repeat: no-repeat;
  }
`
