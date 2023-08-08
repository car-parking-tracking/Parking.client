import React from 'react'

export interface ButtonProps {
  variant: 'contained' | 'outlined' | 'link'
  color: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  children?: React.ReactNode
  disabled?: boolean
}
