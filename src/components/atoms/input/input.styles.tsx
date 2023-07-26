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
  border-radius: 12px;
  padding: 0 8px 0 16px;
  height: 48px;
  width: 552px;
  margin-top: 8px;
`

//TODO: добавить значок поиска
const search = css<InputProps>`
  ${shared}
  border-radius: 6px;
  padding: 0 6px 0 8px;
  height: 32px;
  width: 442px;
  font-size: 13px;
  line-height: 20px;
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
