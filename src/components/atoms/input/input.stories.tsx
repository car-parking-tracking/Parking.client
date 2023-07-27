import { StoryFn } from '@storybook/react'
import { Input } from './input.styles'
import { InputProps } from './input.types'

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    variant: {
      type: 'string',
      description: 'input appearance option',
      options: ['form', 'search'],
      control: {
        type: 'radio',
      },
    },
  },
}

const Template: StoryFn<InputProps> = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  variant: 'form',
  placeholder: 'Почта',
}
