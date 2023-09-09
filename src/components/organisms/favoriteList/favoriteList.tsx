import { FC } from 'react'

import { FavoriteListProps } from './favoriteList.types'
import { Wrapper, Notification, List } from './favoriteList.styles'
import { FavoriteCard } from '@components/molecules'

import { withTitle } from '@app/HOC'

const FavoriteList: FC<FavoriteListProps> = ({ items }) => {
  return (
    <Wrapper>
      {items.length === 0 ? (
        <Notification variant="text">
          У Вас пока нет сохраненных парковок. <br /> Вы можете выбрать парковку на карте <br /> или воспользоваться поиском.
        </Notification>
      ) : (
        <List>
          {items.map(item => (
            <FavoriteCard key={item.id} {...item} />
          ))}
        </List>
      )}
    </Wrapper>
  )
}

export const FavoriteListWithTitle = withTitle(FavoriteList)
