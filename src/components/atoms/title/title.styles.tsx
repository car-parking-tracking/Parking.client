import styled, { css } from 'styled-components'
import { TitleProps } from './title.types'

const shared = css<TitleProps>`
  color: rgba(25, 28, 48, 0.9);
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 800;
`
const modal = css<TitleProps>`
  ${shared}
  margin-bottom: 0.5rem;
`

export const Title = styled.h1<TitleProps>`
  ${({ variant }) => {
    switch (variant) {
      case 'modal':
        return modal
    }
  }}
`
