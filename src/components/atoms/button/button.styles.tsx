import styled, { css } from 'styled-components'
import { ButtonProps } from './button.types'

const shared = css<ButtonProps>`
  color: var(--txt-white);
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  display: inline-block;
  transition: 0.3s ease-in-out;
  font-weight: 600;
  border-radius: 0.75rem;
  padding: 0rem 1.5rem;
  height: 3.5rem;
`
const secondary = css<ButtonProps>`
  ${shared}
  border: 0.0625rem solid transparent;
  background-color: var(--grey);
  box-shadow: 0rem 0.25rem 0.313rem rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: var(--button-bg-default);
  }
`
const outlined = css<ButtonProps>`
  ${shared}
  color: var(--bg-active);
  background-color: transparent;
  border: 0.0625rem solid var(--button-bg-default);
  box-shadow: 0rem 0.25rem 0.3125rem rgba(0, 0, 0, 0.1);

  &:hover {
    color: var(--txt-white);
    background-color: var(--button-bg-default);
  }
`

export const Button = styled.button<ButtonProps>`
  ${({ variant }) => {
    switch (variant) {
      case 'secondary':
        return secondary
      case 'outlined':
        return outlined
    }
  }}
`
