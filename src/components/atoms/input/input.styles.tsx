import styled, { css } from 'styled-components'
import { InputProps } from './input.types'

const shared = css<InputProps>`
  color: rgba(27, 31, 59, 1);
  outline: none;
  border: 0.0625rem solid rgba(224, 224, 224, 1);
  placeholder: ${({ placeholder }) => placeholder};
`
const form = css<InputProps>`
  ${shared}
  border-radius: 0.75rem;
  padding: 0 0.5rem 0 1rem;
  height: 3rem;
  width: 34.5rem;
  margin-top: 0.5rem;
`
const search = css<InputProps>`
  ${shared}
  color: var(--bg-active);
  border-radius: 0.375rem;
  font-weight: 400;
  padding: 0.75rem 0.5rem 0.75rem 2rem;
  height: 3rem;
  width: 27.625rem;
  line-height: 1.5rem;
`
export const Input = styled.input<InputProps>`
  ${({ variant }) => {
    switch (variant) {
      case 'form':
        return form
      case 'search':
        return search
    }
  }}
`
