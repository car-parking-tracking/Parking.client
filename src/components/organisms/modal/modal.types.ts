import React, { Dispatch, SetStateAction } from 'react'

export interface ModalProps {
  title: string
  children: React.ReactNode
  setOpenCallback?: Dispatch<SetStateAction<boolean>>
  isCloseButton?: boolean
  buttonText?: string
  description?: string
}
