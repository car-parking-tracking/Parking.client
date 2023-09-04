import styled, { css } from 'styled-components'
import { InputProps } from './input.types'

const shared = css<InputProps>`
  color: rgba(27, 31, 59, 1);
  outline: none;
  border: none;
  placeholder: ${({ placeholder }) => placeholder};
  ${({ autoComplete }) => autoComplete && `autocomplete: ${autoComplete};`}
`
const form = css<InputProps>`
  ${shared}
  border: 0.125rem solid rgba(224, 224, 224, 1);
  border-radius: 0.75rem;
  padding: 0 0.5rem 0 1rem;
  height: 3.125rem;
  margin-top: 0.5rem;
`
const search = css<InputProps>`
  ${shared}
  border-bottom: 0.063rem solid rgba(224, 224, 224, 1);
  color: var(--bg-active);
  border-radius: 0.375rem;
  font-weight: 400;
  padding: 0.75rem 0.5rem 0.75rem 2rem;
  height: 3rem;
  width: 27.625rem;
  line-height: 1.5rem;
  box-shadow: 0rem 0.125rem 0.25rem 0rem rgba(0, 0, 0, 0.3);
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
