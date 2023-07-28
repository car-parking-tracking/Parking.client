import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import SquareButton from '../../atoms/squareButton/squareButton'
import FavoriteEl from '../../molecules/favorite/favorite'
import hideOnClickOutside from '../../../utils/modal'

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
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleClick = (event?: React.MouseEvent<HTMLElement>) => {
    if (event) event.stopPropagation()
    setVisible(!visible)
  }

  useEffect(() => {
    if (visible && ref.current) {
      hideOnClickOutside(ref.current, handleClick)
    }
  }, [visible])

  return visible ? (
    <WrapFavorites ref={ref}>
      <WrapInfo>
        <p>Сохранённые парковки</p>
        <SquareButton icon="plus" />
      </WrapInfo>
      <ul>
        {favorites.map(({ name, like }, id) => (
          <FavoriteEl key={id} id={id} name={name} like={like} />
        ))}
      </ul>
    </WrapFavorites>
  ) : (
    <WrapActions>
      <SquareButton icon="marker" onClick={handleClick} />
    </WrapActions>
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
// Temporary component used to show Favorites panel
const WrapActions = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
  z-index: 100;
`
export default Favorites
