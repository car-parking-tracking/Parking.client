import { FC, useState } from 'react'
import { useNavigate } from 'react-router'
import { ModalProps } from './modal.types'

import { CloseButton, View, Container, CloseIcon } from './modal.styles'
import close from '@assets/icons/close-icon.svg'

export const Modal: FC<ModalProps> = ({ setOpenCallback, children }) => {
  const [open, setOpen] = useState<boolean>(true)
  const navigate = useNavigate()

  const handleClose = () => {
    setOpen(false)
    navigate('/')
    if (setOpenCallback) setOpenCallback(false)
  }

  return (
    <View visible={open}>
      <Container>
        <CloseButton onClick={handleClose}>
          <CloseIcon src={close} alt="Закрыть" />
        </CloseButton>
        {children}
      </Container>
    </View>
  )
}
