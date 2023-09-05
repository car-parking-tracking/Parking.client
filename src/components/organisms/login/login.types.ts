import React from 'react'

export interface LoginProps {
  children?: React.ReactNode
  onOpenRegister?: () => void
}

export interface ILoginValues {
  email: string
  password: string
}
