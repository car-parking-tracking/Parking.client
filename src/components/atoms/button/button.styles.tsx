import styled, { css } from 'styled-components'
import { ButtonProps } from './button.types'

const shared = css<ButtonProps>`
  color: var(--new-white);
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  display: inline-block;
  transition: 0.3s ease-in-out;
  font-weight: 600;
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  border: none;
`
const secondary = css<ButtonProps>`
  ${shared}
  background: var(--new-grey-light);
  color: var(--new-dark);

  &:hover {
    color: var(--new-white);
    background-color: var(--new-bg-hover);
  }

  &:disabled {
    background-color: var(--new-grey-extra);
    color: var(--new-grey);
  }
`
const primary = css<ButtonProps>`
  ${shared}
  background-color: var(--new-bg-active);
  border: 0.063rem solid var(--new-bg-active);

  &:hover {
    background-color: var(--new-bg-hover);
    border: 0.063rem solid var(--new-bg-hover);
  }

  &:disabled {
    background-color: var(--new-grey-extra);
    border: 0.063rem solid var(--new-grey-extra);
    color: var(--new-grey);
  }
`

const outlined = css<ButtonProps>`
  ${shared}
  color: var(--new-dark);
  background-color: transparent;
  border: 0.063rem solid var(--new-bg-hover);

  &:hover {
    color: var(--new-white);
    background-color: var(--new-bg-hover);
  }

  &:disabled {
    background-color: var(--new-grey-extra);
    color: var(--new-grey);
  }
`

const filter = css<ButtonProps>`
  ${shared}
  color: var(--new-grey);
  font-weight: 500;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid var(--new-grey-light);
  border-radius: 0;
  padding: 0.375rem 1.125rem;
  min-width: 8.688rem;

  &:hover {
    border-bottom: 2px solid var(--new-bg-hover);
  }

  &:disabled {
    color: var(--new-grey);
    border-bottom: 2px solid var(--new-bg-active);
  }
`

const text = css<ButtonProps>`
  ${shared}
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1rem;
  letter-spacing: 0.031rem;
  color: var(--new-bg-active);
  background: transparent;
  padding: 0;

  &:hover {
    color: var(--new-bg-hover);
  }

  &:disabled {
    color: var(--new-bg-active);
  }
`

const animated = css<ButtonProps>`
  ${shared}
  width: 9.75rem;
  padding: 0.6875rem 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-variant-numeric: lining-nums proportional-nums;
  line-height: 1.5;
  background: var(--new-bg-active);
  border: 0.063rem solid var(--new-bg-active);

  &:has(#icon) {
    justify-content: space-between;
    color: var(--new-dark);
    background: var(--new-white);
    transition: 0.5ms ease-out;
  }

  #icon {
    position: relative;
    width: 1rem;
    height: 1rem;
  }

  #icon::before,
  #icon::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0rem;
    background: var(--new-bg-active);
    border-radius: 1.25rem;
  }

  #icon::before {
    width: 0.125rem;
    height: 0;
    animation: 0.5s ease-in showBefore forwards;
  }

  #icon::after {
    height: 0.125rem;
    width: 0;
    animation: 1s ease-out 0.5s showAfter forwards;
  }

  &:hover {
    background-color: var(--new-bg-hover);
  }

  &:disabled {
    background-color: var(--new-grey-extra);
    border-color: var(--new-grey-extra);
    color: var(--new-grey);
  }

  @keyframes showBefore {
    from {
      height: 0;
      transform: rotate(-45deg) translate(0.25rem, -0.3125rem);
    }
    to {
      height: 48%;
      transform: rotate(-45deg) translate(0.0938rem, 0.0625rem);
    }
  }

  @keyframes showAfter {
    from {
      width: 0;
      transform: rotate(-50deg) translate(0.1875rem, 0.1875rem);
    }
    to {
      width: 100%;
      transform: rotate(-50deg) translate(0.375rem, -0.1875rem);
    }
  }
`

export const Button = styled.button<ButtonProps>`
  ${({ variant }) => {
    switch (variant) {
      case 'secondary':
        return secondary
      case 'primary':
        return primary
      case 'outlined':
        return outlined
      case 'filter':
        return filter
      case 'text':
        return text
      case 'animated':
        return animated
    }
  }}
`
