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
    fontSize: {
      description: 'Font size in pixels',
      options: {
        Small: '24',
        Medium: '28',
        Large: '36',
      },
      control: {
        type: 'select',
      },
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

const Template: StoryFn<TitleProps> = args => <Title {...args} style={{ fontSize: `${args.fontSize}px`, color: args.textColor, fontWeight: args.fontWeight }} />

export const Default = Template.bind({})
Default.args = {
  variant: 'modal',
  children: 'Регистрация',
}
