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

  @media (max-width: 48rem) {
    z-index: 100;
    width: 100%;
    height: 101.2%;
    right: 0;
    top: 0;
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

  @media (max-width: 48rem) {
    right: 0.9375rem;
    top: 1.25rem;
    padding: 1.5rem;
    background-size: 1rem 1rem;
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

  @media (max-width: 48rem) {
    width: 100%;
    height: 102%;
    margin: 0;
    padding: 2rem 1rem 1rem 1rem;
    border-radius: 0 0 0 0;
  }
`
