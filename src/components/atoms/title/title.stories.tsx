import { StoryFn } from '@storybook/react'
import { Title } from './title.styles'
import { TitleProps } from './title.types'

export default {
  title: 'Title',
  component: Title,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Title appearance option',
      options: ['modal'],
      control: {
        type: 'radio',
      },
    },
  },
}

const Template: StoryFn<TitleProps> = args => <Title {...args} />

export const Default = Template.bind({})
Default.args = {
  variant: 'modal',
  children: 'Регистрация',
}
