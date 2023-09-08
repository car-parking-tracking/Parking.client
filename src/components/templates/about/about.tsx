import React from 'react'
import { AboutDescription, Wrapper } from './about.styles'

export const AboutTemplate: React.FC = () => {
  return (
    <Wrapper>
      <AboutDescription variant="modal">
        Parkonaft – это удобный сервис по онлайн-поиску парковки на каждый день. <br />
        Просто введи адрес в поисковой строке и на карте ты увидишь варианты парковок
        <br />
        Узнай в режиме реального времени доступную информацию о парковке и наличие свободных мест. <br />
        Ты можешь добавлять в избранное часто используемые парковки. <br />
        Паркуйся быстрее вместе с Parkonaft.
      </AboutDescription>
    </Wrapper>
  )
}
