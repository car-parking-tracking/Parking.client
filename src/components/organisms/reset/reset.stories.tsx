import React from 'react'
import { StoryFn } from '@storybook/react'

import styled from 'styled-components'
import { ResetWithTitle } from '../update/update'

export default {
  title: 'Password form',
  component: ResetWithTitle,
}

const Wrap = styled.div`
  width: 29.5rem;
  border-radius: 1.5rem 0 0 0;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 1);
`

const Template: StoryFn = () => (
  <Wrap>
    <ResetWithTitle title="Восстановление пароля" />
  </Wrap>
)

export const Default = Template.bind({})

Default.args = {}
