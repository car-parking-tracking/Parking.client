import { FC } from 'react'

import { Wrapper, Notification, List } from './favoriteList.styles'
import { FavoriteCard } from '@components/molecules'

import { useUserSlice } from '@app/store/slices/userSlice'

import { withTitle } from '@app/HOC'

const FavoriteList: FC = () => {
  const { user } = useUserSlice()
  const screenWidth = window.innerWidth

  return (
    <Wrapper>
      {user.favorites.length === 0 ? (
        <Notification variant="text">
          {screenWidth <= 768 ? (
            <>Нет сохранённых парковок. Выберите парковку на карте или воспользуйтесь поиском.</>
          ) : (
            <>
              У Вас пока нет сохраненных парковок. <br /> Вы можете выбрать парковку на карте <br /> или воспользоваться поиском.
            </>
          )}
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

const FavoriteListWithTitle = withTitle(FavoriteList)

export const FavoriteListWithTitleWrapper: FC = () => {
  const { user } = useUserSlice()
  const count = user.favorites.length > 0 ? user.favorites.length : undefined

  return <FavoriteListWithTitle title="Избранное" count={count} />
}
