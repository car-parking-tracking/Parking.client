import { FC } from 'react'
import { CheckboxContainerProps } from './checkboxContainer.types'
import { Container, Label, Span, Checkbox, Text, Link } from './checkboxContainer.styles'

export const CheckboxContainer: FC<CheckboxContainerProps> = ({ name, id, placeholder, errorMessage, isError, register, required }) => {
  return (
    <Container>
      <Checkbox {...register(name, { required })} type="checkbox" id={id} name={name} required={required} isError={isError} />
      <Label htmlFor={id}></Label>
      <Text>
        Я принимаю <Link>Условия использования</Link> <br />и <Link>Политику конфиденциальности</Link>
      </Text>
      {isError && <Span>{errorMessage}</Span>}
    </Container>
  )
}
