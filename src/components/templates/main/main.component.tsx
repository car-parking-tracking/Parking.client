import React from 'react'

import { Section, Title, ButtonTemplate  } from './main.styles'

export const MainTemplate: React.FC = () => {
  return (
    <Section>
      <Title>Our parking find service</Title>
      <ButtonTemplate       
        color='#4c70bd'
        variant='contained'>
        Click
      </ButtonTemplate >
    </Section>
  )
}
