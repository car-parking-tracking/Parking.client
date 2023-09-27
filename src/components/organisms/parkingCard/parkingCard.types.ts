export type Tariff = {
  HourPrice: number
  TariffType?: string
  TimeRange?: string
  FirstHalfHour?: string
  FirstHour?: number
  FollowingHours?: number
}

export interface ParkingCardProps {
  id: number
  address: string
  tariffs: string
  carCapacity?: number | 'Нет данных'
}
