import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '../api'

export type AuthState = {
  isAuth: boolean
}

const initialState = {
  isAuth: JSON.parse(localStorage.getItem('auth') || '{}') || false,
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
  },
})

export const { login, logout } = authSlice.actions
export const authReducer = authSlice.reducer
