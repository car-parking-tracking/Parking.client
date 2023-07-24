import { StoryFn } from '@storybook/react'
import { Button } from './button.styles'
import { ButtonProps } from './button.types'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      type: 'string',
      description: 'button appearance option',
      options: ['contained', 'outlined', 'link'],
      control: {
        type: 'radio',
      },
    },
  },
}

const Template: StoryFn<ButtonProps> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  variant: 'contained',
  color: '#4c70bd',
  children: 'Click me',
  disabled: false
}
