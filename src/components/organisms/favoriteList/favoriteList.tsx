import { FC } from 'react'

import { FavoriteListProps } from './favoriteList.types'
import { Wrapper, Notification, List } from './favoriteList.styles'
import { FavoriteCard } from '@components/molecules'

import { useUserSlice } from '@app/store/slices/userSlice'

import { withTitle } from '@app/HOC'

const FavoriteList: FC = () => {
  const { user } = useUserSlice()
  console.log(user)
  return (
    <Wrapper>
      {user.favorites.length === 0 ? (
        <Notification variant="text">
          У Вас пока нет сохраненных парковок. <br /> Вы можете выбрать парковку на карте <br /> или воспользоваться поиском.
        </Notification>
      ) : (
        <List>
          {user.favorites.map(item => (
            <FavoriteCard key={item.id} {...item} />
          ))}
        </List>
      )}
    </Wrapper>
  )
}

export const FavoriteListWithTitle = withTitle(FavoriteList)
