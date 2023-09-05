import React from 'react'

export interface RegisterProps {
  children?: React.ReactNode
  buttonText?: string
}

export interface IAuthValues {
  email: string
  password: string
  password_repeat: string
  last_name: string
  first_name: string
  checkbox: boolean
}
