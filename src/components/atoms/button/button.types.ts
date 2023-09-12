import React from 'react'

export type variant = 'secondary' | 'outlined' | 'primary' | 'filter' | 'text' | 'animated'

export interface ButtonProps {
  variant: variant
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  children?: React.ReactNode
  disabled?: boolean
}
