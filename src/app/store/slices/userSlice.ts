import { createSlice } from '@reduxjs/toolkit'
import { userApi } from '../api'
import { ILotItem } from '../api/lots/types'

export type UserDataState = {
  email: string
  id: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  favorites: ILotItem[]
  first_name: string
  last_name: string
}

export type UserState = {
  user: UserDataState
}

const initialState = {
  user: {
    email: 'test@example.com',
    id: 0,
    favorites: [{}],
    first_name: 'test',
    last_name: 'test',
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(userApi.endpoints.fetchUserInfo.matchFulfilled, (state, { payload }) => {
      state.user = payload
    })
    builder.addMatcher(userApi.endpoints.changeUserProfile.matchFulfilled, (state, { payload }) => {
      state.user = payload
    })
  },
})

export const userReducer = userSlice.reducer
