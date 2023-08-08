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
  id: 1,
  address: 'ул. Арбат, д. 54/2, стр. 1',
  carCapacity: 5,
  tariffs: [
    {
      tariffType: 'дифференцированный тариф',
      timeRange: '08:00-21:00',
      firstHalfHour: '190',
      firstHour: 380,
      followingHours: 380,
      hourPrice: 380,
    },
  ],
}
