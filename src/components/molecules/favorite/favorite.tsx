import React, { FC } from 'react'
import styled from 'styled-components'
import { Button } from '../../atoms'
import MarkerUrl from '../../../asserts/icons/map-marker.svg'
import HeartUrl from '../../../asserts/icons/heart.svg'

type FavoriteProps = {
  id: number
  name: string
  like: boolean
}

const FavoriteEl: FC<FavoriteProps> = props => {
  const { id, name, like } = props
  return (
    <LI>
      <WrapRow>
        <img src={MarkerUrl} width="28" />
        <div>
          <p>Парковка № {id + 1}</p>
          <p>{name}</p>
        </div>
      </WrapRow>
      <WrapRow>
        <Button variant="small" color="gray">
          Выбрать
        </Button>
        <Button variant="small" color="gray">
          Удалить
        </Button>
      </WrapRow>
      <Heart like={like} />
    </LI>
  )
}

const LI = styled.li`
  width: 100%;
  border-radius: 1rem;
  box-shadow: 0 4px 1rem rgba(0, 0, 0, 0.12);
  padding: 1rem;
  margin-top: 1rem;
  position: relative;
`
const WrapRow = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  margin-top: 0.5rem;
`
const Heart = styled.div<{ like: boolean }>`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${props => (props.like ? '#EE3333' : 'var(--color-face)')};
  mask-size: cover;
  mask-image: url(${HeartUrl});
`

export default FavoriteEl
