import React from 'react'

export interface ButtonProps {
  variant: 'secondary' | 'outlined'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  children?: React.ReactNode
  disabled?: boolean
}
