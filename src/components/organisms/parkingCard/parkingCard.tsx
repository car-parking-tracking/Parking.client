import { FC, useState } from 'react'
import { Wrapper, Title, InfoList, InfoItem, InfoDesc, FavoriteBtn, DeleteBtn, InfoCost } from './parkingCard.styles'
import { ParkingCardProps, Tariff } from './parkingCard.types'
import { replaceAddress } from '../../../utils'

export const ParkingCard: FC<ParkingCardProps> = ({ id, address, carCapacity, tariffs }) => {
  const [favorite, setFavorite] = useState(false)

  const tariff = JSON.parse(`{"tariffs": ${tariffs.replaceAll("'", '"')}}`).tariffs

  const handleChangeFavorite = () => {
    setFavorite(!favorite)
  }

  return (
    <Wrapper>
      <Title>{`Парковка № ${id}`}</Title>
      <InfoList>
        <InfoItem>
          <InfoDesc>{replaceAddress(address)}</InfoDesc>
        </InfoItem>
        <InfoItem>
          <InfoCost>Цена</InfoCost>
          {tariff.map((item: Tariff, index: number) => {
            return <InfoDesc key={index}>{`${item.TimeRange?.replace('-', ' ... ')} — ${item.HourPrice || item.FirstHour} ₽`}</InfoDesc>
          })}
        </InfoItem>
        <InfoItem>
          <InfoDesc>Мест свободно: нет данных</InfoDesc>
        </InfoItem>
        <InfoItem>
          <InfoDesc>Всего мест: {carCapacity}</InfoDesc>
        </InfoItem>
      </InfoList>
      {favorite ? (
        <DeleteBtn variant="outlined" onClick={handleChangeFavorite}>
          Убрать из Моих парковок
        </DeleteBtn>
      ) : (
        <FavoriteBtn variant="primary" onClick={handleChangeFavorite}>
          Добавить в Мои парковки
        </FavoriteBtn>
      )}
    </Wrapper>
  )
}
