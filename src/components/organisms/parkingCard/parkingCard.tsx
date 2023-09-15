import { FC, useState } from 'react'
import { Tariff } from './parkingCard.types'
import { replaceAddress } from '@utils/replace-address'
import { useFetchLotByIdQuery } from '@app/store/api'
import { Loader } from '@components/atoms'
import { useUpdateFavoriteStatusMutation } from '@app/store/api'

import { Wrapper, Title, InfoList, InfoItem, InfoDesc, FavoriteBtn, DeleteBtn, InfoCost, PriceInfo, TimeRange, Price, Place } from './parkingCard.styles'
import { endsSymbol } from '@utils/ends-symbol'
import { useMapSlice } from '@app/store/slices/mapSlice'

import { useAuthSlice } from '@app/store/slices/authSlice'
import { useAppDispatch } from '@app/hooks/redux'
import { addFavorite, deleteFavorite } from '@app/store/slices/userSlice'

export const ParkingCard: FC = () => {
  const { id } = useMapSlice()
  const { token } = useAuthSlice()
  const dispatch = useAppDispatch()
  const [updateFavoriteStatus] = useUpdateFavoriteStatusMutation()

  const { data: lotData, isLoading } = useFetchLotByIdQuery(id, {
    skip: !id || id === 0,
  })

  const [favorite, setFavorite] = useState(false)

  const handleChangeFavorite = async () => {
    if (lotData) {
      const response = await updateFavoriteStatus({
        token,
        id,
      })
      const isError = 'error' in response

      if (!isError) {
        setFavorite(!favorite)
        if (favorite) {
          dispatch(deleteFavorite(response))
        } else {
          dispatch(addFavorite(response))
        }
      } else {
        console.log(isError)
      }
    }
  }

  if (isLoading) {
    return <Loader variant="page" />
  }

  if (lotData) {
    const tariff = JSON.parse(`{"tariffs": ${lotData.tariffs.replaceAll("'", '"')}}`).tariffs
    console.log(lotData)
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
