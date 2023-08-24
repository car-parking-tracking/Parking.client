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
      options: ['secondary', 'outlined'],
      control: {
        type: 'radio',
      },
    },
  },
}

const Template: StoryFn<ButtonProps> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  variant: 'secondary',
  children: 'Click me',
  disabled: false,
}
