import { FC } from 'react'
import { Wrapper } from './parkingCard.styles'
import { ParkingCardProps } from './parkingCard.types'
import { Button } from '../../atoms'

export const ParkingCard: FC<ParkingCardProps> = () => {
  return (
    <Wrapper>
      <div>Здесь будет красивая карточка парковки!</div>
      <Button variant="contained" color="#218BEE">
        Click me please
      </Button>
    </Wrapper>
  )
}
