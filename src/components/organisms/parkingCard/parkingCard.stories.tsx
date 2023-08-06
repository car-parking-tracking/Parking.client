import { StoryFn } from '@storybook/react'
import { ParkingCardProps } from './parkingCard.types'
import { ParkingCard } from './parkingCard.component.'

export default {
  title: 'ParkingCard',
  component: ParkingCard,
}

const Template: StoryFn<ParkingCardProps> = args => <ParkingCard {...args} />

export const Default = Template.bind({})
Default.args = {
  
}
