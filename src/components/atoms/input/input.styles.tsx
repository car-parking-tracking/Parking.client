import styled, { css } from 'styled-components'
import { InputProps } from './input.types'

const shared = css<InputProps>`
  color: rgba(27, 31, 59, 1);
  outline: none;
  border: 1px solid rgba(224, 224, 224, 1);
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

//TODO: добавить значок поиска
const search = css<InputProps>`
  ${shared}
  border-radius: 0.375rem;
  padding: 0 0.375rem 0 0.5rem;
  height: 2rem;
  width: 27.625rem;
  font-size: 0.813rem;
  line-height: 1.25rem;
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
