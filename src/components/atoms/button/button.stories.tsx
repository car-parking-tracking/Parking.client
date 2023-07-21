import { Button } from "./button.styles"

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      type: 'string',
      description: 'button appearance option',
      options: ['contained', 'outlined', 'link'],
      control: {
        type: 'radio'
      }

    }
  }
}

export const Default = () => <Button
  as='button'
  color='#4c70bd'
  variant='contained'>
  Click
</Button>
