import styled from 'styled-components'

import close from '@assets/icons/close-icon.svg'

export const View = styled.div<{ visible: boolean }>`
  position: absolute;
  right: 2rem;
  height: 100vh;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  justify-content: end;
  z-index: 1;
  overflow: hidden;

  @media (max-width: 768px) {
    z-index: 100;
    width: 100%;
    right: 0;
  }
`
export const CloseButton = styled.button`
  display: flex;
  cursor: pointer;
  border: none;
  width: 1rem;
  height: 1rem;
  background: transparent;
  align-items: center;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 2rem;
  top: 2.375rem;
  background-image: url(${close});
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    right: 15px;
    top: 20px;
    padding: 24px;
    background-size: 16px 16px;
    background-position: center;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 29.5rem;
  border-radius: 1.5rem 1.5rem 0 0;
  margin-top: 5rem;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 1);

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 32px 16px 16px 16px;
    border-radius: 0 0 0 0;
  }
`
