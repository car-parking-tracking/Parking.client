import styled from 'styled-components'
import { Button } from '@components/atoms'

export const View = styled.div<{ visible: boolean }>`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.15);
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
`
export const CloseButton = styled(Button)`
  cursor: pointer;
  border: none;
  border-radius: 1.375rem;
  height: 2rem;
  padding: 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.16);
  position: absolute;
  right: 1rem;
  top: 1rem;
`
export const Container = styled.div`
  width: 37.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 1.125rem 1.875rem 0 rgba(51, 51, 51, 0.64);
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 1);
`
export const ButtonGroup = styled.div`
  display: flex;
  margin-top: 2rem;
  align-self: end;
  gap: 0.75rem;
`
