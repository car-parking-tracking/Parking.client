import styled, { css } from 'styled-components'
import { DescriptionProps } from './description.types'

const shared = css<DescriptionProps>`
  color: rgba(25, 28, 48, 0.9);
  font-size: 15px;
  line-height: 24px;
`
const modal = css<DescriptionProps>`
  ${shared}
  margin-bottom: 8px;
`

const text = css<DescriptionProps>`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`

export const Description = styled.p<DescriptionProps>`
  ${({ variant }) => {
    switch (variant) {
      case 'modal':
        return modal
      case 'text':
        return text
    }
  }}
`
