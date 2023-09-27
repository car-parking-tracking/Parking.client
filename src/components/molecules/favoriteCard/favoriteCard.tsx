import { FC, useState } from 'react'
import { setCoords, setZoom, setParkingId } from '@app/store/slices/mapSlice'
import { useAppDispatch } from '@app/hooks/redux'

import { FavoriteCardProps } from './favoriteCard.types'
import { Wrapper, Title, Address, ButtonGroup, ButtonSelected, ButtonDelete, Info, ButtonRestore } from './favoriteCard.styles'
import { useAuthSlice } from '@app/store/slices/authSlice'
import { useUpdateFavoriteStatusMutation } from '@app/store/api'
import { addFavorite, deleteFavorite } from '@app/store/slices/userSlice'

export const FavoriteCard: FC<FavoriteCardProps> = ({ id, address, latitude, longitude }) => {
  const [isDeleted, setIsDeleted] = useState(false)
  const { token } = useAuthSlice()
  const coords = [latitude, longitude]

  const [updateFavoriteStatus] = useUpdateFavoriteStatusMutation()
  const dispatch = useAppDispatch()

  const handleDeleteClick = async () => {
    const response = await updateFavoriteStatus({
      token,
      id,
    })
    setIsDeleted(true)
    setTimeout(() => {
      dispatch(deleteFavorite(response))
    }, 10000)
  }

  const handleRestoreClick = async () => {
    const response = await updateFavoriteStatus({
      token,
      id,
    })
    dispatch(addFavorite(response))
    setIsDeleted(false)
  }

  const handleSelectClick = () => {
    dispatch(
      setCoords(
        coords.map((item: number) => {
          return item + 0.0000001 // для корректного отображения меток при поиске
        })
      )
    )
    dispatch(setParkingId(id))
    dispatch(setZoom(20))
  }

  return (
    <Wrapper>
      <Info isDeleted={isDeleted}>
        <Title>{`Парковка № ${id}`}</Title>
        <Address variant="text">{address}</Address>
      </Info>
      {isDeleted ? (
        <ButtonRestore variant="primary" onClick={handleRestoreClick}>
          Восстановить
        </ButtonRestore>
      ) : (
        <ButtonGroup>
          <ButtonSelected variant="primary" onClick={handleSelectClick}>
            Выбрать
          </ButtonSelected>
          <ButtonDelete variant="secondary" onClick={handleDeleteClick}>
            Удалить
          </ButtonDelete>
        </ButtonGroup>
      )}
    </Wrapper>
  )
}
