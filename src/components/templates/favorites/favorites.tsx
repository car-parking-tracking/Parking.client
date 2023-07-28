import React from 'react'
import styled from 'styled-components'
import SquareButton from '../../atoms/squareButton/squareButton'
import FavoriteEl from '../../molecules/favorite/favorite'

// Just for example
const favorites = [
  {
    name: 'ул. Херсонская, дом 32',
    coord: [],
    like: true,
  },
  {
    name: 'ул. Длинная, дом 132',
    coord: [],
    like: false,
  },
]

const Favorites = () => {
  return (
    <WrapFavorites>
      <WrapInfo>
        <p>Сохранённые парковки</p>
        <SquareButton icon="plus" />
      </WrapInfo>
      <ul>
        {favorites.map(({ name, like }, id) => (
          <FavoriteEl id={id} name={name} like={like} />
        ))}
      </ul>
    </WrapFavorites>
  )
}

const WrapFavorites = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  width: 22%;
  min-width: 300px;
  height: 100%;
  background-color: var(--color-bg-side);
  color: var(--color-text-side);
  padding: 1rem;
  overflow-y: auto;
`
const WrapInfo = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export default Favorites
