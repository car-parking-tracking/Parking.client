import { StoryFn } from '@storybook/react'

import { Header } from './header'
import { HeaderProps } from './header.types'

export default {
  title: 'Header',
  component: Header,
}

const Template: StoryFn<HeaderProps> = args => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  isLoggedIn: true
}
