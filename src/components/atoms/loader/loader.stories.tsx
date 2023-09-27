import { StoryFn } from '@storybook/react'
import { Loader } from './loader.styles'
import { LoaderProps } from './loader.types'

export default {
  title: 'Description',
  component: Loader,
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

const Template: StoryFn<LoaderProps> = args => <Loader {...args} />

export const Default = Template.bind({})
Default.args = {
  variant: 'page',
}
