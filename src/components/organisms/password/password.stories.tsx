import React from 'react'
import { StoryFn } from '@storybook/react'
import { PasswordWithTitle } from './password'
import styled from 'styled-components'

export default {
  title: 'Password form',
  component: PasswordWithTitle,
}

const Wrap = styled.div`
  width: 29.5rem;
  border-radius: 1.5rem 0 0 0;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 1);
`

const Template: StoryFn = () => (
  <Wrap>
    <PasswordWithTitle title="Изменение пароля" />
  </Wrap>
)

export const Default = Template.bind({})

Default.args = {}
