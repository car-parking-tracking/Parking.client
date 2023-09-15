import { UserDataState } from '@app/store/slices/userSlice'

type ITariff = {
  TariffType: string
  TimeRange: string
  FirstHalfHour?: string
  FirstHour?: number
  FollowingHours?: number
  HourPrice?: number
  is_deleted?: number
  global_id?: number
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
  tariffs: string
  latitude: number
  longitude: number
}

export type ILotSearchCollection = {
  name: string
  description: string
  coords: number[]
  id: number
}

export type LotsFavoriteResponse = {
  token: string
  id: number
  // address: string
  // car_capacity: number
  // tariffs: string
  // latitude: number
  // longitude: number
}

export type LotsFavoriteRequest = LotsFavoriteResponse
