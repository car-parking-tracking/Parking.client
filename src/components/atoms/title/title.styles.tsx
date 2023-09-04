import styled, { css } from 'styled-components'
import { TitleProps } from './title.types'

const shared = css<TitleProps>`
  color: rgba(25, 28, 48, 0.9);
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 700;
`
const modal = css<TitleProps>`
  ${shared}
  color: var(--black);
  line-height: 1.75rem;
  font-size: 1.5rem;
`

export const Title = styled.h1<TitleProps>`
  ${({ variant }) => {
    switch (variant) {
      case 'modal':
        return modal
    }
  }}
`
export const DefaultTitle = styled.h2<TitleProps>`
  ${({ variant }) => {
    switch (variant) {
      case 'modal':
        return modal
    }
  }}
`
