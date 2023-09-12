import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '../api'

export type AuthState = {
  isAuth: boolean
  token: string
}

const initialState = {
  isAuth: JSON.parse(localStorage.getItem('auth') || '{}') || false,
  token: ' ',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isAuth = true
    },
    logout(state) {
      state.isAuth = false
    },
  },
  extraReducers: builder => {
    builder.addMatcher(authApi.endpoints.signIn.matchFulfilled, state => {
      state.isAuth = true
    })
    builder.addMatcher(authApi.endpoints.signIn.matchFulfilled, (state, { payload }) => {
      state.token = payload.auth_token
    })
  },
})

export const { login, logout } = authSlice.actions
export const authReducer = authSlice.reducer
