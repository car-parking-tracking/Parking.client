import styled, { css } from 'styled-components'
import { rgba, lighten } from 'polished'
import { ButtonProps } from './button.types'

const shared = css<ButtonProps>`
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
  color: var(--color-text);
  border: 0.0625rem solid transparent;
  background-color: ${({ color }) => color};
  box-shadow: 0rem 0.25rem 0.313rem rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${({ color }) => lighten(0.1, color)};
  }
  &:active {
    box-shadow: -0.25rem -0.1875rem 0.25rem transparent, 0.125rem 0.25rem 0.6875rem ${({ color }) => rgba(color, 0.2)};
  }
  &:focus-visible {
    box-shadow: -0.25rem -0.1875rem 0.25rem transparent, 0.125rem 0.25rem 0.6875rem ${({ color }) => rgba(color, 0.2)};
  }
`
const outlined = css<ButtonProps>`
  ${shared}
  color: ${({ color }) => color};
  background-color: transparent;
  border: 0.0625rem solid ${({ color }) => rgba(color, 0.5)};
  box-shadow: 0rem 0.25rem 0.3125rem rgba(0, 0, 0, 0.1);

  &:hover {
    border: 0.0625rem solid ${({ color }) => rgba(color, 1)};
  }
  &:active {
    background: ${({ color }) => rgba(color, 0.05)};
    border: 0.0625rem solid ${({ color }) => rgba(color, 1)};
  }
  &:focus-visible {
    background: ${({ color }) => rgba(color, 0.05)};
    border: 0.0625rem solid ${({ color }) => rgba(color, 1)};
  }
`

const link = css<ButtonProps>`
  ${shared};
  color: ${({ color }) => color};
  background-color: transparent;
  border: none;
  font-weight: 500;
  &:hover {
    color: ${({ color }) => rgba(color, 0.5)};
  }
  &:active {
    color: ${({ color }) => rgba(color, 0.05)};
  }
  &:focus-visible {
    color: ${({ color }) => rgba(color, 0.05)};
  }
`

export const Button = styled.button<ButtonProps>`
  ${({ variant }) => {
    switch (variant) {
      case 'contained':
        return contained
      case 'outlined':
        return outlined
      case 'link':
        return link
    }
  }}
`
