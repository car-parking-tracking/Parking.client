import styled from 'styled-components'
import CloseIcon from '@assets/icons/close-icon.svg'

export const Wrapper = styled.div`
  width: 100%;
  flex-grow: 1;

  #parking {
    width: var(--parking-card-width);
    height: var(--parking-card-height);
  }

  .ymaps-2-1-79-balloon {
    box-shadow: none !important;
  }

  .ymaps-2-1-79-balloon__content {
    padding: 0 !important;
    background: transparent !important;
    margin: 0 !important;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(~);
    }
    to {
      opacity: 1;
      transform: translateY(~);
    }
  }

  .ymaps-2-1-79-balloon__layout {
    animation: fadeIn 0.3s ease-in-out;
    border: none !important;
    position: absolute;
    top: 18.6rem;
    left: 6rem;
    border-radius: 6px;
  }

  .ymaps-2-1-79-balloon__close {
    position: absolute;
    top: 12px;
    right: 12px;
  }

  .ymaps-2-1-79-balloon__close-button {
    width: 16px;
    height: 16px;
    background: url(${CloseIcon}) center/contain no-repeat;
  }

  .ymaps-2-1-79-balloon__tail {
    display: none !important;
  }
`
