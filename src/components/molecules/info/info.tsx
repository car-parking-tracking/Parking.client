import { FC } from 'react'
import { InfoProps } from './info.types'
import { InfoDesc, InfoButton, Wrapper } from './info.styles'
import { useNavigate } from 'react-router-dom'

export const Info: FC<InfoProps> = ({ text, isButton }) => {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <InfoDesc variant="modal">{text}</InfoDesc>
      {isButton && (
        <InfoButton variant="outlined" onClick={() => navigate('/')}>
          Войти в личный кабинет
        </InfoButton>
      )}
    </Wrapper>
  )
}
