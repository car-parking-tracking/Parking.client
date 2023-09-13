import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '../api'
import { useAppSelector } from '@app/hooks/redux'

export type AuthState = {
  isAuth: boolean
  token: string
}

const initialState = {
  isAuth: JSON.parse(localStorage.getItem('auth') || 'false'),
  token: JSON.parse(localStorage.getItem('token') || '""'),
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(authApi.endpoints.signIn.matchFulfilled, (state, { payload }) => {
      state.isAuth = true
      state.token = payload.auth_token
    })
    builder.addMatcher(authApi.endpoints.signOut.matchFulfilled, state => {
      state.isAuth = false
      state.token = ''
    })
  },
})

export const authReducer = authSlice.reducer
export const useAuthSlice = () => useAppSelector(state => state.auth)
