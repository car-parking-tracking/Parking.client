import { FC, useState } from 'react'

import { FavoriteCardProps } from './favoriteCard.types'
import { Wrapper, Title, Address, ButtonGroup, ButtonSelected, ButtonDelete, Info, ButtonRestore } from './favoriteCard.styles'

export const FavoriteCard: FC<FavoriteCardProps> = ({ id, address }) => {
  const [isDeleted, setIsDeleted] = useState(false)

  const handleDeleteClick = () => {
    setIsDeleted(true)
  }

  const handleRestoreClick = () => {
    setIsDeleted(false)
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
          <ButtonSelected variant="primary">Выбрать</ButtonSelected>
          <ButtonDelete variant="secondary" onClick={handleDeleteClick}>
            Удалить
          </ButtonDelete>
        </ButtonGroup>
      )}
    </Wrapper>
  )
}
