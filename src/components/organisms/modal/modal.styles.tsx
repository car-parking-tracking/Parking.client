import styled from 'styled-components'

export const View = styled.div<{ visible: boolean }>`
  position: absolute;
  right: 0;
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
  background: transparent;
  align-items: center;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 2rem;
  top: 2.375rem;

  @media (max-width: 768px) {
    right: 24px;
    top: 37px;
  }
`
export const CloseIcon = styled.img`
  width: 1rem;
  height: 1rem;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 29.5rem;
  border-radius: 1.5rem 0 0 0;
  margin-top: 5rem;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 1);

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 28.5px;
  }
`
