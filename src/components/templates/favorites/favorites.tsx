import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import SquareButton from '../../atoms/squareButton/squareButton'
import FavoriteEl from '../../molecules/favorite/favorite'
import hideOnClickOutside from '../../../utils/modal'
import Interplay from '../../../utils/interplay'

const interplay = new Interplay()

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

    if (ref.current) {
      const slideAnimation = [{ transform: 'translateX(0)' }, { transform: 'translateX(-100%)' }]
      if (visible) {
        setTimeout(() => {
          setVisible(!visible)
        }, 280)
        ref.current.animate(slideAnimation, {
          duration: 300,
          direction: 'normal',
        })
        return
      }
    }

    setVisible(!visible)
  }

  useEffect(() => {
    if (visible && ref.current) {
      hideOnClickOutside(ref.current, handleClick)
    }
    interplay.add('favorites.switch', handleClick)
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
  @keyframes show {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  position: absolute;
  top: 0;
  left: 0;
  width: 22%;
  min-width: 300px;
  height: 100%;
  background-color: var(--color-bg-menu);
  color: var(--color-text-menu);
  padding: 1rem;
  overflow-y: auto;
  animation: forwards 0.3s show;
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
