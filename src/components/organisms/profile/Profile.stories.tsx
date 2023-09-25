import React from 'react'
import { StoryFn } from '@storybook/react'
import { ProfileWithTitle } from './profile'
import styled from 'styled-components'

export default {
  title: 'Profile',
  component: ProfileWithTitle,
}

const ProfileWrap = styled.div`
  width: 29.5rem;
  border-radius: 1.5rem 0 0 0;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 1);
`

const Template: StoryFn = () => (
  <ProfileWrap>
    <ProfileWithTitle title="Профиль" />
  </ProfileWrap>
)

export const Default = Template.bind({})

Default.args = {}
