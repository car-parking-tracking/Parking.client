import React from 'react'

import { Section, Title, BtnClick } from './main.styles'

export const MainTemplate: React.FC = () => {
  return (
    <Section>
      <Title>Our parking find service</Title>
      <BtnClick
        as='button'
        color='#4c70bd'
        variant='contained'>
        Click
      </BtnClick>
    </Section>
  )
}
