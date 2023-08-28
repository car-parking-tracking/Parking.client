type ITariff = {
  TariffType: string
  TimeRange: string
  FirstHalfHour?: string
  FirstHour?: number
  FollowingHours?: number
  HourPrice?: number
}

export interface ILot {
  id: number
  address: string
  car_capacity: number
  is_favorited: boolean
  tariffs: ITariff[]
  latitude: number
  longitude: number
}

