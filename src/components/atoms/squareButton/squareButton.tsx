import React, { FC } from 'react'
import styled from 'styled-components'
import plusUrl from '../../../asserts/icons/plus.svg'
import MarkerUrl from '../../../asserts/icons/map-marker.svg'

type SquareButtonProps = {
  icon?: 'plus' | 'marker'
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

const icons = {
  none: { url: '', size: '0' },
  plus: { url: plusUrl, size: '1.5rem' },
  marker: { url: MarkerUrl, size: '2rem' },
}

const SquareButton: FC<SquareButtonProps> = props => {
  const { icon, onClick } = props
  return <Button icon={icons[icon || 'none']} onClick={onClick} />
}

const Button = styled.button<{ icon: Record<'url' | 'size', string> }>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 16%;
  border: 1px solid currentColor;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  transition: 0.3s linear;
  cursor: pointer;
  background-image: url(${props => props.icon.url});
  background-size: ${props => props.icon.size};
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    background-color: var(--color-accend);
  }
`

export default SquareButton
