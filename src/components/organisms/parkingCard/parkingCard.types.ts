type Tariff = {
  hourPrice: number
  tariffType?: string
  timeRange?: string
  firstHalfHour?: string
  firstHour?: number
  followingHours?: number
}

export interface ParkingCardProps {
  id: number
  address: string
  tariffs: [Tariff] | 'Нет данных'
  carCapacity?: number | 'Нет данных'
}
