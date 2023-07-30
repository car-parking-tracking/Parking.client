import styled from 'styled-components'

type LinkProps = {
  color?: string
  icon?: string
  size?: string
}

const Link = styled.a<LinkProps>`
  color: ${({ color }) => color || 'inherit'};
  font-weight: 500;
  font-size: ${({ size }) => size || 'inherit'};
  transition: opacity 0.3s linear;
  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.9;
  }
  &:focus-visible {
    opacity: 0.9;
  }
`

export default Link
