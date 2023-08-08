import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  flex-grow: 1;

  #parking {
    width: 17.75rem;
    height: 19.625rem;
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
  }

  .ymaps-2-1-79-balloon__tail {
    display: none !important;
  }
`
