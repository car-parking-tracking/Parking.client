import { FC, useState } from 'react'
import { setCoords, setZoom, setParkingId } from '@app/store/slices/mapSlice'
import { useAppDispatch } from '@app/hooks/redux'

import { FavoriteCardProps } from './favoriteCard.types'
import { Wrapper, Title, Address, ButtonGroup, ButtonSelected, ButtonDelete, Info, ButtonRestore } from './favoriteCard.styles'

export const FavoriteCard: FC<FavoriteCardProps> = ({ id, address, latitude, longitude }) => {
  const [isDeleted, setIsDeleted] = useState(false)
  const dispatch = useAppDispatch()
  const coords = [longitude, latitude]

  const handleDeleteClick = () => {
    setIsDeleted(true)
  }

  const handleRestoreClick = () => {
    setIsDeleted(false)
  }

  const handleSelectClick = () => {
    console.log(coords)
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
