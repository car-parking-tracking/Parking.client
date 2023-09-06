import styled, { css } from 'styled-components'
import { LoaderProps } from './loader.types'

const shared = css<LoaderProps>`
  color: rgba(25, 28, 48, 0.9);
  font-size: 0.938rem;
`
const page = css<LoaderProps>`
  display: inline-block;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5rem;
  height: 5rem;
  margin-left: -3.125rem;
  margin-top:-3.125rem;
  border: 0.313rem solid #FFF;
  border-bottom-color: var(--button-bg-default);
  border-radius: 50%;
  z-index: 100;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
  }
`
export const Loader = styled.div<LoaderProps>`
  ${({ variant }) => {
    switch (variant) {
      case 'page':
        return page
    }
  }}
`
