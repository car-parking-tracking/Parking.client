import { FC } from 'react'
import { useNavigate } from 'react-router'

import { WithTitleProps } from './withTitle.types'

import { Title, ReturnButton, ReturnIcon, Provider } from './withTitle.styles'

import arrow from '@assets/icons/arrow.svg'

export const withTitle = <P extends object>(Component: FC<P>) => {
  const ComponentWithTitle: FC<P & WithTitleProps> = ({ title, hideBackButton, ...props }) => {
    const navigate = useNavigate()

    const handleReturnClick = () => {
      navigate('/')
    }

    return (
      <>
        <Provider>
          {!hideBackButton && (
            <ReturnButton onClick={handleReturnClick}>
              <ReturnIcon src={arrow} alt="Вернуться" />
            </ReturnButton>
          )}
          <Title variant="modal">{title}</Title>
        </Provider>
        <Component {...(props as P)} />
      </>
    )
  }

  return ComponentWithTitle
}
