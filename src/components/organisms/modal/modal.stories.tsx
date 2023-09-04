import { StoryFn } from '@storybook/react'
import { ModalProps } from './modal.types'
import { Modal } from './modal'

export default {
  title: 'Modal',
  component: Modal,
}

const Template: StoryFn<ModalProps> = args => <Modal {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <></>,
}
