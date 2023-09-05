import { StoryFn } from '@storybook/react'
import { InputForm } from '@components/molecules'
import { Form } from './form'
import { FormProps } from './form.types'
import styled from 'styled-components'

export default {
  title: 'Form',
  component: Form,
}

const FormWrap = styled.div`
  max-width: 387px;
`

const InputWrap = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`
const Template: StoryFn<FormProps> = args => (
  <FormWrap>
    <Form {...args} />
  </FormWrap>
)

export const Default = Template.bind({})
Default.args = {
  name: 'profile',
  children: (
    <InputWrap>
      <InputForm name="name" type="text" placeholder="Имя" />
      <InputForm name="email" type="email" placeholder="E-mail" />
      <InputForm name="password" type="password" placeholder="Пароль" />
    </InputWrap>
  ),
  submitBtnText: 'Сохранить',
}
