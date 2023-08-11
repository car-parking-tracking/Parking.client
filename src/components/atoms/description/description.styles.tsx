import styled, { css } from 'styled-components'
import { DescriptionProps } from './description.types'

const shared = css<DescriptionProps>`
  color: rgba(25, 28, 48, 0.9);
  font-size: 0.938rem;
`
const modal = css<DescriptionProps>`
  ${shared}
  margin-bottom: 0.5rem;
`
const text = css<DescriptionProps>`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
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
