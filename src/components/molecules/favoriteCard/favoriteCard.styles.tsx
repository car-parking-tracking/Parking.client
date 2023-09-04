import styled from 'styled-components'

import { Button, Description } from '@components/atoms'

export const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
  width: 408px;
  min-height: 144px;
  padding: 16px 20px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 12px;
  border-radius: 16px;
  background: var(--grey-light);

  :hover {
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.16);
  }

  :active {
    box-shadow: inset 0px 0px 0px 1px var(--button-bg-default);
    background: var(--blue-light);
  }
`
export const Info = styled.div`
  color: ${({ isDeleted }: { isDeleted: boolean }) => (isDeleted ? 'var(--grey-button)' : 'var(--item-name)')};
  height: 52px;
`

export const Title = styled.p`
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.32px;
`
export const Address = styled(Description)`
  font-size: 14px;
  font-weight: 500;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`

export const ButtonSelected = styled(Button)`
  width: 100px;
  font-style: normal;
  line-height: 24px;
`

export const ButtonDelete = styled(Button)`
  width: 97px;
  font-style: normal;
  line-height: 24px;
  color: var(--bg-active);
  background: var(--grey-button);

  :hover {
    color: var(--txt-white);
  }
`

export const ButtonRestore = styled(Button)`
  width: 141px;
  font-style: normal;
  line-height: 24px;
`
