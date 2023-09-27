import { FC } from 'react'
import { useNavigate } from 'react-router'

import { WithTitleProps } from './withTitle.types'

import { Title, ReturnButton, ReturnIcon, Provider, Count } from './withTitle.styles'

import arrow from '@assets/icons/arrow.svg'

export const withTitle = <P extends object>(Component: FC<P>) => {
  const ComponentWithTitle: FC<P & WithTitleProps> = ({ title, count, hideBackButton, ...props }) => {
    const navigate = useNavigate()

    const handleReturnClick = () => {
      navigate(-1)
    }

    return (
      <>
        <Provider>
          {!hideBackButton && (
            <ReturnButton onClick={handleReturnClick}>
              <ReturnIcon src={arrow} alt="Вернуться" />
            </ReturnButton>
          )}
          <Title variant="modal">
            {title}
            {count && <Count>{count} из 10</Count>}
          </Title>
        </Provider>
        <Component {...(props as P)} />
      </>
    )
  }

  return ComponentWithTitle
}
