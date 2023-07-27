import React from 'react'

import { Section, Title, ButtonTemplate } from './main.styles'
import { YaMap } from '../../organisms/ya-map'

export const MainTemplate: React.FC = () => {
  return (
    <Section>
      <Title>Our parking find service</Title>
      <ButtonTemplate color="#4c70bd" variant="contained">
        Click
      </ButtonTemplate>
      <YaMap />
    </Section>
  )
}
