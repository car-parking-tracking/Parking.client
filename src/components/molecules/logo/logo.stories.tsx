import { StoryFn } from '@storybook/react'

import { Logo } from './'

export default {
  title: 'Logo',
  component: Logo,
}

const Template: StoryFn = () => <Logo />

export const Default = Template.bind({})
Default.args = {}
