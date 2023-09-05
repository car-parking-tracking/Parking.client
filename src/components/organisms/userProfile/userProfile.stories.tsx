import { StoryFn } from '@storybook/react'
import { UserProfile } from './userProfile'
import styled from 'styled-components'

export default {
  title: 'User Profile',
  component: UserProfile,
}

const ProfileWrap = styled.div`
  width: 29.5rem;
  border-radius: 1.5rem 0 0 0;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 1);
`

const Template: StoryFn = () => (
  <ProfileWrap>
    <UserProfile />
  </ProfileWrap>
)

export const Default = Template.bind({})

Default.args = {}
