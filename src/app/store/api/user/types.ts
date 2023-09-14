import { ILotItem } from '../lots/types'

export type IResetPassword = {
  email: string
}

export type UserInfoResponse = {
  id: number
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

export type UserPasswordResponse = {
  new_password: string
  current_password: string
}

export type UserPasswordRequest = {
  new_password: string
  current_password: string
}

export type UserEmailResponse = {
  email: string
}

export type UserEmailRequest = {
  email: string
}
