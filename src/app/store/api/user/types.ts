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

export type UserPasswordRequest = UserPasswordResponse

export type UserEmailResponse = {
  email: string
}

export type UserEmailRequest = UserEmailResponse

export type PasswordUpdateResponse = {
  uid: string
  token: string
  new_password: string
}

export type PasswordUpdateRequest = PasswordUpdateResponse

export type ActivationRequest = {
  uid: string
  token: string
}

export type ActivationResponse = {
  uid: string
  token: string
}
