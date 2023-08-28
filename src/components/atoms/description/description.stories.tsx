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
    fontSize: {
      description: 'Font size in pixels',
      options: {
        Small: '14',
        Medium: '16',
        Large: '20',
      },
      control: {
        type: 'select',
      }
    },
    fontWeight: {
      description: 'Font weight',
      options: {
        Normal: '400',
        Medium: '500',
        SemiBold: '600',
        Bold: '700',
      },
      type: 'select',
    },
    textColor: {
      description: 'Text color',
      control: {
        type: 'color',
      },
    },
  },
}

const Template: StoryFn<DescriptionProps> = args => <Description {...args} style={{ fontSize: `${args.fontSize}px`, color: args.textColor, fontWeight: args.fontWeight }} />

export const Default = Template.bind({})
Default.args = {
  variant: 'modal',
  children: 'Заполните все поля для регистрации на сервисе',
}
