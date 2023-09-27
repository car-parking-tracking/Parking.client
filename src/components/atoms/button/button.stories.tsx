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
      options: ['secondary', 'primary', 'outlined', 'icon', 'filter'],
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
  children: (
    <>
      Добавить в избранное
      <div id="masked"></div>
    </>
  ),
  disabled: false,
}
