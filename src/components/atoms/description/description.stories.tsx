import { StoryFn } from '@storybook/react'
import { Description } from './description.styles'
import { DescriptionProps } from './description.types'

export default {
  title: 'Description',
  component: Description,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Description appearance option',
      options: ['modal'],
      control: {
        type: 'radio',
      },
    },
  },
}

const Template: StoryFn<DescriptionProps> = args => <Description {...args} />

export const Default = Template.bind({})
Default.args = {
  variant: 'modal',
  children: 'Заполните все поля для регистрации на сервисе',
}
