type ITariff = {
  TariffType: string
  TimeRange: string
  FirstHalfHour?: string
  FirstHour?: number
  FollowingHours?: number
  HourPrice?: number
}

export type ILotCollection = {
  type: string
  results: ILotItem[]
}
export interface ILotItem {
  id: number
  address: string
  car_capacity: number
  is_favorited: boolean
  tariffs: ITariff[]
  latitude: number
  longitude: number
}

export type ILotSearchCollection = {
  name: string
  description: string
  coords: number[]
  id: number
}
