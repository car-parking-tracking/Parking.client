import styled from 'styled-components'
import { Button } from '../../atoms'

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
  border-radius: 22px;
  height: 32px;
  padding: 0px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.16);
  position: absolute;
  right: 16px;
  top: 16px;
`
export const Container = styled.div`
  width: 600px;
  border-radius: 24px;
  box-shadow: 0px 18px 30px 0px rgba(51, 51, 51, 0.64);
  display: flex;
  flex-direction: column;
  padding: 24px 24px 16px 24px;
  background-color: rgba(255, 255, 255, 1);
`
export const ButtonGroup = styled.div`
  display: flex;
  margin-top: 32px;
  align-self: end;
  gap: 12px;
`
