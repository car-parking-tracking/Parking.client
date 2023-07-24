import React from 'react'

export interface ButtonProps {
  variant?: 'contained' | 'outlined' | 'link';
  //TODO: type for color
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  color?: any;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  disabled?: boolean;
}
