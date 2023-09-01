import styled from 'styled-components'
import { Button } from '@components/atoms'

export const View = styled.div<{ visible: boolean }>`
  width: 100vw;
  height: 100vh;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  justify-content: end;
  position: absolute;
`

export const CloseButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 2rem;
  top: 2.625rem;
`

export const Container = styled.div`
  width: 29.5rem;
  border-radius: 1.5rem 0 0 0;
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 1);
  overflow: scroll;
  position: relative;
`
export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`


