import { FC, useState } from 'react'
import { useNavigate } from 'react-router'
import { ModalProps } from './modal.types'

import { CloseButton, View, Container } from './modal.styles'

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
        <CloseButton onClick={handleClose} />
        {children}
      </Container>
    </View>
  )
}
