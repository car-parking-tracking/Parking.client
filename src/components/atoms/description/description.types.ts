import React from 'react'

export interface DescriptionProps {
  variant: 'modal' | "text"
  children: React.ReactNode | string;
}
