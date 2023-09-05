import styled from 'styled-components'
import CloseIcon from '@assets/icons/close.svg'

export const Wrapper = styled.div`
  width: 100%;
  flex-grow: 1;

  #parking {
    width: var(--parking-card-width);
    min-height: var(--parking-card-height);
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

  .ymaps-2-1-79-balloon__content > ymaps {
    min-height: var(--parking-card-height) !important;
    height: unset !important;
  }

  .ymaps-2-1-79-balloon__layout {
    animation: fadeIn 0.3s ease-in-out;
    border: none !important;
    position: absolute;
    top: 18.6rem;
    left: 6rem;
    border-radius: 0.375rem;
  }

  .ymaps-2-1-79-balloon__close {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
  }

  .ymaps-2-1-79-balloon__close-button {
    width: 1rem;
    height: 1rem;
    background: url(${CloseIcon}) center/contain no-repeat;
  }

  .ymaps-2-1-79-balloon__tail {
    display: none !important;
  }
`
