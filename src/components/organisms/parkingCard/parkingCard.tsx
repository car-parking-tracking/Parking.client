import { FC, useState } from 'react'
import { Wrapper, Title, InfoList, InfoItem, InfoDesc, FavoriteBtn, DeleteBtn } from './parkingCard.styles'
import { ParkingCardProps } from './parkingCard.types'

export const ParkingCard: FC<ParkingCardProps> = ({ id, address, carCapacity, tariffs }) => {
  const [favorite, setFavorite] = useState(false)
  const tariff = typeof tariffs === 'string' ? tariffs : `${tariffs[0].hourPrice} ₽`

  const handleChangeFavorite = () => {
    setFavorite(!favorite)
  }

  return (
    <Wrapper>
      <Title>{`Парковка № ${id}`}</Title>
      <InfoList>
        <InfoItem>
          <InfoDesc>{address.replace("город Москва, ", "").replace("дом", "").replace(", строение ", "c").replace("переулок", "пер.")}</InfoDesc>
        </InfoItem>
        <InfoItem>
          <InfoDesc>{tariff} в час</InfoDesc>
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
