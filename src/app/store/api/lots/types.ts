type ITariff = {
  TariffType: string
  TimeRange: string
  FirstHalfHour?: string
  FirstHour?: number
  FollowingHours?: number
  HourPrice?: number
}

export type ILotItemGeometry = {
  type: string
  coordinates: Array<number>
}

export type ILotCollection = {
  type: string
  lots: ILotItem[]
}
export interface ILotItem {
  id: number
  address: string
  car_capacity: number
  is_favorited: boolean
  tariffs: ITariff[]
  geometry: ILotItemGeometry
}

