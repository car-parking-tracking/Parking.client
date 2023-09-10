import { FC, useState } from 'react'
import { Wrapper, Title, InfoList, InfoItem, InfoDesc, FavoriteBtn, DeleteBtn, InfoCost } from './parkingCard.styles'
import { Tariff } from './parkingCard.types'
import { replaceAddress } from '@utils/replace-address'
import { useSelector } from 'react-redux'
import { RootState } from '@app/store/store'
import { useFetchLotByIdQuery } from '@app/store/api'
import { Loader } from '@components/atoms'


export const ParkingCard: FC = () => {
  const [favorite, setFavorite] = useState(false)

  const map = useSelector((state: RootState) => state.map)

  const { data: lotData, isLoading } = useFetchLotByIdQuery(map.id, {
    skip: !map.id || map.id === 0,
  })

  const handleChangeFavorite = () => {
    setFavorite(!favorite)
  }

  if (isLoading) {
    return (
        <Loader variant="page" />
    )
  }

  if (lotData) {
    const tariff = JSON.parse(`{"tariffs": ${lotData.tariffs.replaceAll("'", '"')}}`).tariffs
    return (
      <Wrapper>
        <Title>{`Парковка № ${lotData.id}`}</Title>
        <InfoList>
          <InfoItem>
            <InfoDesc>{replaceAddress(lotData.address)}</InfoDesc>
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
            <InfoDesc>Всего мест: {lotData.car_capacity}</InfoDesc>
          </InfoItem>
        </InfoList>
        {favorite ? (
          <DeleteBtn variant="outlined" onClick={handleChangeFavorite}>
            Убрать из избранного
          </DeleteBtn>
        ) : (
          <FavoriteBtn variant="primary" onClick={handleChangeFavorite}>
            Добавить в избранное
          </FavoriteBtn>
        )}
      </Wrapper>
    )
  }
}
