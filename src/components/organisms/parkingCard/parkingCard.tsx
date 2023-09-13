import { FC, useState } from 'react'
import { Tariff } from './parkingCard.types'
import { replaceAddress } from '@utils/replace-address'
import { useSelector } from 'react-redux'
import { RootState } from '@app/store/store'
import { useFetchLotByIdQuery } from '@app/store/api'
import { Loader } from '@components/atoms'

import { Wrapper, Title, InfoList, InfoItem, InfoDesc, FavoriteBtn, DeleteBtn, InfoCost, PriceInfo, TimeRange, Price, Place } from './parkingCard.styles'
import { endsSymbol } from '@utils/ends-symbol'

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
    return <Loader variant="page" />
  }

  if (lotData) {
    const tariff = JSON.parse(`{"tariffs": ${lotData.tariffs.replaceAll("'", '"')}}`).tariffs
    console.log([lotData.latitude, lotData.longitude])
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
              return (
                <PriceInfo key={index}>
                  <TimeRange>{`${item.TimeRange?.replace('-', ' ... ')}`}</TimeRange>
                  <Price> {item.HourPrice || item.FirstHour} ₽ в час</Price>
                </PriceInfo>
              )
            })}
          </InfoItem>
          <InfoItem>
            <InfoCost>
              Свободно <Place>нет данных</Place>
            </InfoCost>
          </InfoItem>
          <InfoItem>
            <InfoCost>
              Всего{' '}
              <Place>
                {lotData.car_capacity} {endsSymbol(lotData.car_capacity)}
              </Place>
            </InfoCost>
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
