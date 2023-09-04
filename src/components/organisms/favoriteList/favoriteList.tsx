import { FC } from 'react'

import { FavoriteListProps } from './favoriteList.types'
import { Wrapper, Title, Notification } from './favoriteList.styles'
import { FavoriteCard } from '@components/molecules'

export const FavoriteList: FC<FavoriteListProps> = ({ items }) => {
  return (
    <Wrapper>
      <Title>Мои парковки</Title>
      {items.length === 0 ? (
        <Notification variant="text">У Вас пока нет сохраненных парковок. Вы можете выбрать парковку на карте или воспользоваться поиском.</Notification>
      ) : (
        items.map(item => <FavoriteCard key={item.id} {...item} />)
      )}
    </Wrapper>
  )
}
