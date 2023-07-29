import styled, { css } from 'styled-components'
import { rgba, lighten } from 'polished'
import { ButtonProps } from './button.types'

const getColor = (color: string | undefined): string => color || '#fff'

const shared = css<ButtonProps>`
  --color: ${({ color }) => getColor(color)};
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  display: inline-block;
  transition: 0.3s ease-in-out;
  font-weight: 800;
  outline: none;
  border-radius: 0.75rem;
  padding: 0.25rem 1.5rem;
  height: 3.5rem;
`
const contained = css<ButtonProps>`
  ${shared}
  color: #ffff;
  border: 0.0625rem solid transparent;
  background-color: var(--color);
  box-shadow: 0rem 0.25rem 0.313rem rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${({ color }) => lighten(0.1, getColor(color))};
  }
  &:active {
    box-shadow: -0.25rem -0.1875rem 0.25rem transparent, 0.125rem 0.25rem 0.6875rem ${({ color }) => rgba(getColor(color), 0.2)};
  }
  &:focus-visible {
    box-shadow: -0.25rem -0.1875rem 0.25rem transparent, 0.125rem 0.25rem 0.6875rem ${({ color }) => rgba(getColor(color), 0.2)};
  }
`
const outlined = css<ButtonProps>`
  ${shared}
  color: ${({ color }) => color};
  background-color: transparent;
  border: 0.0625rem solid ${({ color }) => rgba(getColor(color), 0.5)};
  box-shadow: 0rem 0.25rem 0.3125rem rgba(0, 0, 0, 0.1);

  &:hover {
    border: 0.0625rem solid var(--color);
  }
  &:active {
    background: ${({ color }) => rgba(getColor(color), 0.5)};
    border: 0.0625rem solid var(--color);
  }
  &:focus-visible {
    background: ${({ color }) => rgba(getColor(color), 0.5)};
    border: 0.0625rem solid var(--color);
  }
`
const small = css<ButtonProps>`
  ${shared}
  color: #ffff;
  border: none;
  height: unset;
  background-color: var(--color);

  &:hover {
    background-color: ${({ color }) => lighten(0.1, getColor(color))};
  }
`
const link = css<ButtonProps>`
  ${shared};
  color: var(--color);
  background-color: transparent;
  border: none;
  font-weight: 500;
  &:hover {
    color: ${({ color }) => rgba(getColor(color), 0.5)};
  }
  &:active {
    color: ${({ color }) => rgba(getColor(color), 0.05)};
  }
  &:focus-visible {
    color: ${({ color }) => rgba(getColor(color), 0.05)};
  }
`

export const Button = styled.button<ButtonProps>`
  ${({ variant }) => {
    switch (variant) {
      case 'contained':
        return contained
      case 'outlined':
        return outlined
      case 'small':
        return small
      case 'link':
        return link
    }
  }}
`
