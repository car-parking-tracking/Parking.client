import { ILotItem } from '../lots/types'

export type IResetPassword = {
  email: string
}

export type UserInfoResponse = {
  id: 0
  first_name: string
  last_name: string
  email: string
  favorites: ILotItem[]
}

export type UserProfileResponse = UserInfoResponse

export type UserProfileRequest = {
  first_name: string
  last_name: string
  email: string
}
