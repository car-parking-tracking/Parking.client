import { StoryFn } from '@storybook/react'
import { InputForm } from './inputForm'
import { InputFormProps } from './inputForm.types'

export default {
  title: 'InputForm',
  component: InputForm,
}

const Template: StoryFn<InputFormProps> = args => <InputForm {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'email',
  placeholder: 'E-mail',
  isError: false,
  errorMessage: 'Проверьте адрес почты, он должен состоять из латинских символов',
}
