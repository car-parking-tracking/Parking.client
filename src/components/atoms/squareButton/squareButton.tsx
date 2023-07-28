import React, { FC } from 'react'
import styled from 'styled-components'
import plusUrl from '../../../asserts/icons/plus.svg'
import MarkerUrl from '../../../asserts/icons/map-marker.svg'

type SquareButtonProps = {
  icon?: 'none' | 'plus'
}

const icons = {
  none: '',
  plus: plusUrl,
  marker: MarkerUrl,
}

const SquareButton: FC<SquareButtonProps> = props => {
  const { icon } = props
  return (
    <Button>
      <Icon icon={icons[icon || 'none']} />
    </Button>
  )
}

const Button = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 16%;
  border: 1px solid currentColor;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 2s linear;
  :hover {
    background-color: var(--color-accend);
  }
`
const Icon = styled.div<{ icon: string }>`
  width: 1.5rem;
  height: 1.5rem;
  background-color: currentColor;
  mask-size: cover;
  mask-image: url(${props => props.icon});
`
export default SquareButton
