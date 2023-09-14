import { FC, useState } from 'react'
import { Tariff } from './parkingCard.types'
import { replaceAddress } from '@utils/replace-address'
import { useFetchLotByIdQuery } from '@app/store/api'
import { Loader } from '@components/atoms'
import { useUpdateFavoriteStatusMutation } from '@app/store/api'
import { useAuthSlice } from '@app/store/slices/authSlice'

import { Wrapper, Title, InfoList, InfoItem, InfoDesc, FavoriteBtn, DeleteBtn, InfoCost, PriceInfo, TimeRange, Price, Place } from './parkingCard.styles'
import { endsSymbol } from '@utils/ends-symbol'
import { useMapSlice } from '@app/store/slices/mapSlice'

export const ParkingCard: FC = () => {
  const [favorite, setFavorite] = useState(false)
  const { id } = useMapSlice()
  const { token } = useAuthSlice()

  const [updateFavoriteStatus] = useUpdateFavoriteStatusMutation()

  const { data: lotData, isLoading } = useFetchLotByIdQuery(id, {
    skip: !id || id === 0,
  })

  const handleChangeFavorite = async () => {
    if (lotData) {
      const response = await updateFavoriteStatus({
        token,
        id,
        address: lotData.address,
        car_capacity: lotData.car_capacity,
        tariffs: lotData.tariffs,
        latitude: lotData.latitude,
        longitude: lotData.longitude,
      })
      console.log(response)
      setFavorite(!favorite)

      const isError = 'error' in response
      console.error(isError)
    }
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
