import { StoryFn } from '@storybook/react'

import { Header } from './'
import { HeaderProps } from './header.types'
import { useContext } from 'react'
import { LoginContext } from '../../../context'
export default {
  title: 'Header',
  component: Header,
}

const LoginTemplate: StoryFn<HeaderProps> = args => {
  const { setIsLoggedIn } = useContext(LoginContext)
  setIsLoggedIn(true)

  return <Header {...args} />
}

const NotLoginTemplate: StoryFn<HeaderProps> = args => {
  const { setIsLoggedIn } = useContext(LoginContext)
  setIsLoggedIn(false)

  return <Header {...args} />
}

export const Default = NotLoginTemplate.bind({})
Default.args = {}

export const LoggedIn = LoginTemplate.bind({})
LoggedIn.args = {}