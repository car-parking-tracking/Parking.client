import React from 'react'

export interface ButtonProps {
  variant: 'contained' | 'outlined'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  children?: React.ReactNode
  disabled?: boolean
}
