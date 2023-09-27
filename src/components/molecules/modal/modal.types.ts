import React, { Dispatch, SetStateAction } from 'react'

export interface ModalProps {
  children: React.ReactNode
  setOpenCallback?: Dispatch<SetStateAction<boolean>>
}
