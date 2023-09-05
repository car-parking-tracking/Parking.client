import React from 'react'

export interface ButtonProps {
  variant: 'secondary' | 'outlined' | 'primary' | 'icon' | 'filter' | 'text'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  children?: React.ReactNode
  disabled?: boolean
}
