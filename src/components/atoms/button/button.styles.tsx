import styled, { css } from 'styled-components'
import { ButtonProps } from './button.types'

const shared = css<ButtonProps>`
  color: var(--color-text);
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  display: inline-block;
  transition: 0.3s ease-in-out;
  font-weight: 700;
  outline: none;
  border-radius: 0.75rem;
  padding: 0rem 1.5rem;
  height: 3.5rem;
`
const contained = css<ButtonProps>`
  ${shared}
  border: 0.0625rem solid transparent;
  background-color: var(--grey);
  box-shadow: 0rem 0.25rem 0.313rem rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: var(--button-bg-hover);
  }
  &:active {
    background-color: var(--button-bg-active);
  }
`
const outlined = css<ButtonProps>`
  ${shared}
  color: var(--grey);
  background-color: transparent;
  border: 0.0625rem solid var(--grey);
  box-shadow: 0rem 0.25rem 0.3125rem rgba(0, 0, 0, 0.1);

  &:hover {
    color: var(--button-bg-hover);
    border: 0.0625rem solid var(--button-bg-hover);
  }
  &:active {
    background-color: var(--button-bg-active);
    border: 0.0625rem solid var(--button-bg-active);
  }
`
export const Button = styled.button<ButtonProps>`
  ${({ variant }) => {
    switch (variant) {
      case 'contained':
        return contained
      case 'outlined':
        return outlined
    }
  }}
`
