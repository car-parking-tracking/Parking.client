import { FC } from 'react'
import { useNavigate } from 'react-router'

import { WithTitleProps } from './withTitle.types'

import { Title, ReturnButton, ReturnIcon, Provider, Count, Account } from './withTitle.styles'

import arrow from '@assets/icons/arrow.svg'

export const withTitle = <P extends object>(Component: FC<P>) => {
  const ComponentWithTitle: FC<P & WithTitleProps> = ({ title, count, hideBackButton, initials, onBtnClick, ...props }) => {
    const navigate = useNavigate()

    const screenWidth = window.innerWidth

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
          {hideBackButton && screenWidth <= 768 && <Account variant="secondary">{initials}</Account>}
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
