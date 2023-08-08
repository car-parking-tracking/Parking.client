import { FC } from 'react'
import { Wrapper, Title, InfoList, InfoItem, InfoTitle, InfoDesc, Adress, FavouriteBtn } from './parkingCard.styles'
import { ParkingCardProps } from './parkingCard.types'
import LikeInactive from '@assets/icons/like-inactive.svg'

export const ParkingCard: FC<ParkingCardProps> = ({ id, address, carCapacity, tariffs }) => {
  const tariff = typeof tariffs === 'string' ? tariffs : `${tariffs[0].hourPrice} ₽`

  return (
    <Wrapper>
      <Title>{`Парковка № ${id}`}</Title>
      <InfoList>
        <InfoItem>
          <InfoTitle>Адрес</InfoTitle>
          <Adress>{address}</Adress>
        </InfoItem>
        <InfoItem>
          <InfoTitle>Цена за час</InfoTitle>
          <InfoDesc>{tariff}</InfoDesc>
        </InfoItem>
        <InfoItem>
          <InfoTitle>Мест свободно</InfoTitle>
          <InfoDesc>Нет данных</InfoDesc>
        </InfoItem>
        <InfoItem>
          <InfoTitle>Мест всего</InfoTitle>
          <InfoDesc>{carCapacity}</InfoDesc>
        </InfoItem>
      </InfoList>

      <FavouriteBtn variant="contained" color="#218BEE">
        Добавить в избранное
        <img src={LikeInactive} alt="сердце" />
      </FavouriteBtn>
    </Wrapper>
  )
}
