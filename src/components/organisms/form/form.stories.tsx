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
  max-width: 24.188rem;
`

const InputWrap = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
      <InputForm name="name" type="text" placeholder="Имя" register={null} required={true} />
      <InputForm name="email" type="email" placeholder="E-mail" register={null} required={true} />
      <InputForm name="password" type="password" placeholder="Пароль" register={true} required={false} />
    </InputWrap>
  ),
  submitBtnText: 'Сохранить',
}
