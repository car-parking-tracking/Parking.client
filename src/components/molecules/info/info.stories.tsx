import { StoryFn } from '@storybook/react'
import { Info } from './info'
import { InfoProps } from './info.types'

export default {
  title: 'InputForm',
  component: Info,
}

const Template: StoryFn<InfoProps> = args => <Info {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'На ваш e-mail скоро придёт письмо для сброса старого пароля.',
  isButton: true,
}
