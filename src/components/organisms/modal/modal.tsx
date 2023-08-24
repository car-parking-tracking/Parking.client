import { FC, useState } from 'react'
import { ModalProps } from './modal.types'
import { CloseButton, View, Container, ButtonGroup } from './modal.styles'
import { Button, Description, Title } from '@components/atoms'

export const Modal: FC<ModalProps> = ({ title, description, isCloseButton, buttonText, setOpenCallback, children }) => {
  const [open, setOpen] = useState<boolean>(true)

  const handleClose = () => {
    setOpen(false)
    if (setOpenCallback) setOpenCallback(false)
  }

  return (
    <View visible={open}>
      <CloseButton variant="outlined" onClick={handleClose}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.70711 3.29289C4.31658 2.90237 3.68342 2.90237 3.29289 3.29289C2.90237 3.68342 2.90237 4.31658 3.29289 4.70711L6.58579 8L3.29289 11.2929C2.90237 11.6834 2.90237 12.3166 3.29289 12.7071C3.68342 13.0976 4.31658 13.0976 4.70711 12.7071L8 9.41421L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L9.41421 8L12.7071 4.70711C13.0976 4.31658 13.0976 3.68342 12.7071 3.29289C12.3166 2.90237 11.6834 2.90237 11.2929 3.29289L8 6.58579L4.70711 3.29289Z"
            fill="white"
          />
        </svg>
      </CloseButton>
      <Container>
        <Title variant="modal">{title}</Title>
        <Description variant="modal">{description}</Description>
        {children}
        <ButtonGroup>
          {isCloseButton && (
            <Button variant="outlined" onClick={handleClose}>
              Закрыть
            </Button>
          )}
          <Button variant="secondary">{buttonText}</Button>
        </ButtonGroup>
      </Container>
    </View>
  )
}
