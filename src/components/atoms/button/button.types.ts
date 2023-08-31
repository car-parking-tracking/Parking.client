import React from 'react'

export interface ButtonProps {
  variant: 'secondary' | 'outlined' | 'primary' | 'icon' | 'filter'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  children?: React.ReactNode
  disabled?: boolean
}
