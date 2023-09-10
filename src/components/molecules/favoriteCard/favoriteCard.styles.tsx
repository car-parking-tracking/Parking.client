import styled from 'styled-components'

import { Button, Description } from '@components/atoms'

export const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
  width: 25.5rem;
  min-height: 9rem;
  padding: 1rem 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 0.75rem;
  border-radius: 1rem;
  background: var(--grey-light);

  :hover {
    box-shadow: 0rem 0.125rem 0.313rem 0rem rgba(0, 0, 0, 0.16);
  }

  :active {
    box-shadow: inset 0rem 0rem 0rem 0.063rem var(--button-bg-default);
    background: var(--blue-light);
  }

  @media (max-width: 48rem) {
    width: 100%;
  }
`
export const Info = styled.div`
  color: ${({ isDeleted }: { isDeleted: boolean }) => (isDeleted ? 'var(--grey-button)' : 'var(--item-name)')};
  height: 3.25rem;
`

export const Title = styled.p`
  font-weight: 700;
  line-height: 1.75rem;
  letter-spacing: 0.02rem;
`
export const Address = styled(Description)`
  font-size: 0.875rem;
  font-weight: 500;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  @media (max-width: 48rem) {
    width: 100%;
  }
`

export const ButtonSelected = styled(Button)`
  width: 6.25rem;
  font-style: normal;
  line-height: 1.5rem;
  @media (max-width: 48rem) {
    width: 100%;
    order: 2;
  }
`

export const ButtonDelete = styled(Button)`
  width: 6.0625rem;
  font-style: normal;
  line-height: 1.5rem;
  color: var(--bg-active);
  background: var(--grey-button);

  :hover {
    color: var(--txt-white);
  }

  @media (max-width: 48rem) {
    width: 100%;
    order: 1;
  }
`

export const ButtonRestore = styled(Button)`
  width: 8.8125rem;
  font-style: normal;
  line-height: 1.5rem;
  @media (max-width: 48rem) {
    width: 100%;
  }
`
